-- ============================================================
-- Fix: get_user_role / is_admin STABLE caching + profile backfill
-- ============================================================
-- Root cause:
--   get_user_role() and is_admin() were declared STABLE.
--   When Supabase PostgREST pools connections, STABLE functions
--   can cache their result across the transaction. If a prior
--   request from the same pooled connection evaluated
--   get_user_role() for a user whose profile row did not exist,
--   the NULL result was cached. Subsequent INSERTs from that user
--   hit the cached NULL, which fails the IN ('admin','editor')
--   check in the blog_posts INSERT RLS policy.
--
--   Additionally, any auth user created before the initial
--   migration (or before the handle_new_user trigger was
--   attached) has no profile row, so get_user_role() returns
--   NULL permanently for them.
--
-- Fix:
--   1. Backfill missing profile rows for all existing auth users.
--   2. Promote zhsaiagency@gmail.com to admin role.
--   3. Replace get_user_role() and is_admin() via CREATE OR REPLACE
--      (no DROP) to change volatility from STABLE to VOLATILE.
--      This preserves all dependent RLS policies intact.
--   4. No RLS policies change. No new tables. No security weakening.
--
-- Safe to re-run after a prior partial failure:
--   - Backfill uses ON CONFLICT DO NOTHING (idempotent).
--   - Promotion uses WHERE role = 'editor' (no-op if already admin).
--   - CREATE OR REPLACE is idempotent for the same signature.
-- ============================================================

-- ============================================================
-- 1. BACKFILL: create profile rows for any auth user missing one
-- ============================================================
-- The handle_new_user() trigger only fires on INSERT into auth.users.
-- Users created before the trigger existed have no profile row.
-- This backfill is idempotent (ON CONFLICT DO NOTHING).

INSERT INTO public.profiles (id, email, role)
SELECT
  au.id,
  COALESCE(au.email, ''),
  'editor' AS role
FROM auth.users au
LEFT JOIN public.profiles p ON p.id = au.id
WHERE p.id IS NULL
ON CONFLICT (id) DO NOTHING;

-- ============================================================
-- 2. PROMOTE existing auth users to admin
-- ============================================================
-- Only promotes users whose profile role is currently 'editor'
-- (the default). Users already set to 'admin' are unchanged.
-- Safe to re-run: no-op if already promoted.

UPDATE public.profiles
SET    role = 'admin'
WHERE  email IN (
  'zhsaiagency@gmail.com'
)
AND    role = 'editor';

-- ============================================================
-- 3. REPLACE helper functions: STABLE -> VOLATILE
-- ============================================================
-- IMPORTANT: We use CREATE OR REPLACE, NOT DROP + CREATE.
-- PostgreSQL allows CREATE OR REPLACE to change volatility,
-- security DEFINER, search_path, etc. as long as the function
-- signature (name, argument types, return type) remains the same.
-- This preserves all dependent RLS policies intact.
--
-- Nine RLS policies depend on is_admin():
--   - Admin can read all profiles
--   - Admin can update profiles
--   - Admin can insert leads
--   - Admin can read all leads
--   - Admin can update leads
--   - Admin can delete leads
--   - Admin can insert settings
--   - Admin can update settings
--   - Admin can delete settings
-- Dropping the function would fail with SQLSTATE 2BP01.
-- CREATE OR REPLACE avoids this entirely.

CREATE OR REPLACE FUNCTION public.get_user_role()
RETURNS text
VOLATILE
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT role FROM public.profiles WHERE id = auth.uid();
$$;

CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
VOLATILE
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT public.get_user_role() = 'admin';
$$;

-- ============================================================
-- DONE
-- ============================================================
-- Verify after applying:
--   SELECT p.proname, p.provolatile
--   FROM pg_proc p
--   JOIN pg_namespace n ON p.pronamespace = n.oid
--   WHERE n.nspname = 'public'
--     AND p.proname IN ('get_user_role', 'is_admin');
--
-- Expected: both show 'v' (volatile), not 's' (stable).
--
-- All existing RLS policies remain unchanged and functional.
-- The blog_posts INSERT policy:
--   "Editor and admin can insert blog posts"
--   TO authenticated
--   WITH CHECK (public.get_user_role() IN ('admin', 'editor'))
-- continues to work as designed — but now get_user_role() always
-- returns the current role value (not a stale cached NULL).
