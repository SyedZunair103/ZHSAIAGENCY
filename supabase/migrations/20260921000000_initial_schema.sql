-- ============================================================
-- Phase 2C: Database Schema + RLS
-- ZHS AI Agency — Supabase Migration
-- ============================================================
-- Run this in Supabase SQL Editor or via Supabase CLI.
-- This is idempotent: uses IF NOT EXISTS, CREATE OR REPLACE.
-- ============================================================

-- ============================================================
-- 1. TABLES (profiles first — required by helper functions)
-- ============================================================

-- -----------------------------------------------------------
-- profiles (linked to auth.users)
-- -----------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.profiles (
  id         uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email      text NOT NULL,
  full_name  text,
  role       text NOT NULL DEFAULT 'editor'
             CONSTRAINT profiles_role_check CHECK (role IN ('admin', 'editor')),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

COMMENT ON TABLE public.profiles IS 'User profiles linked to Supabase Auth. Role controls admin/editor access.';

-- -----------------------------------------------------------
-- services
-- -----------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.services (
  id             uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title          text NOT NULL,
  subtitle       text NOT NULL DEFAULT '',
  slug           text NOT NULL UNIQUE,
  description    text,
  icon           text,
  features       jsonb NOT NULL DEFAULT '[]'::jsonb,
  display_order  integer NOT NULL DEFAULT 0,
  is_published   boolean NOT NULL DEFAULT true,
  created_at     timestamptz NOT NULL DEFAULT now(),
  updated_at     timestamptz NOT NULL DEFAULT now()
);

COMMENT ON TABLE public.services IS 'CMS-managed services displayed on the public website.';

-- -----------------------------------------------------------
-- case_studies
-- -----------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.case_studies (
  id                     uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title                  text NOT NULL,
  subtitle               text NOT NULL DEFAULT '',
  slug                   text NOT NULL UNIQUE,
  category               text NOT NULL DEFAULT '',
  challenge              text NOT NULL DEFAULT '',
  solution               text NOT NULL DEFAULT '',
  capabilities           jsonb NOT NULL DEFAULT '[]'::jsonb,
  tech_stack             jsonb NOT NULL DEFAULT '[]'::jsonb,
  business_application   text,
  display_order          integer NOT NULL DEFAULT 0,
  is_published           boolean NOT NULL DEFAULT true,
  created_at             timestamptz NOT NULL DEFAULT now(),
  updated_at             timestamptz NOT NULL DEFAULT now()
);

COMMENT ON TABLE public.case_studies IS 'CMS-managed case studies displayed on the public website.';

-- -----------------------------------------------------------
-- blog_posts
-- -----------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.blog_posts (
  id                uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title             text NOT NULL,
  slug              text NOT NULL UNIQUE,
  excerpt           text,
  content           text NOT NULL DEFAULT '',
  meta_title        text,
  meta_description  text,
  status            text NOT NULL DEFAULT 'draft'
                    CONSTRAINT blog_posts_status_check CHECK (status IN ('draft', 'published', 'archived')),
  published_at      timestamptz,
  created_at        timestamptz NOT NULL DEFAULT now(),
  updated_at        timestamptz NOT NULL DEFAULT now()
);

COMMENT ON TABLE public.blog_posts IS 'CMS-managed blog posts. Plain text content for MVP.';

-- -----------------------------------------------------------
-- faqs
-- -----------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.faqs (
  id             uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  question       text NOT NULL,
  answer         text NOT NULL,
  display_order  integer NOT NULL DEFAULT 0,
  is_published   boolean NOT NULL DEFAULT true,
  created_at     timestamptz NOT NULL DEFAULT now(),
  updated_at     timestamptz NOT NULL DEFAULT now()
);

COMMENT ON TABLE public.faqs IS 'CMS-managed frequently asked questions.';

-- -----------------------------------------------------------
-- leads
-- -----------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.leads (
  id             uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name      text NOT NULL,
  email          text NOT NULL,
  company        text,
  phone          text,
  country        text NOT NULL,
  service        text NOT NULL,
  budget         text,
  description    text NOT NULL,
  status         text NOT NULL DEFAULT 'new'
                 CONSTRAINT leads_status_check CHECK (status IN ('new', 'contacted', 'qualified', 'closed')),
  source         text NOT NULL DEFAULT 'contact_form',
  created_at     timestamptz NOT NULL DEFAULT now(),
  updated_at     timestamptz NOT NULL DEFAULT now()
);

COMMENT ON TABLE public.leads IS 'Contact form submissions. Anonymous INSERT allowed; SELECT/UPDATE/DELETE admin-only.';

-- -----------------------------------------------------------
-- site_settings
-- -----------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.site_settings (
  key         text PRIMARY KEY,
  value       jsonb NOT NULL,
  description text,
  created_at  timestamptz NOT NULL DEFAULT now(),
  updated_at  timestamptz NOT NULL DEFAULT now()
);

COMMENT ON TABLE public.site_settings IS 'Key-value site settings. Public read; admin write.';

-- ============================================================
-- 2. HELPER FUNCTIONS (SECURITY DEFINER)
-- ============================================================

-- Returns the role of the currently authenticated user.
-- SECURITY DEFINER prevents RLS recursion when policies call this.
-- STABLE allows PostgreSQL to optimize repeated calls within a query.
-- SET search_path = public prevents search path manipulation attacks.
CREATE OR REPLACE FUNCTION public.get_user_role()
RETURNS text
STABLE
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT role FROM public.profiles WHERE id = auth.uid();
$$;

-- Convenience function: is the current user an admin?
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
STABLE
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT public.get_user_role() = 'admin';
$$;

-- ============================================================
-- 3. INDEXES
-- ============================================================

CREATE INDEX IF NOT EXISTS idx_services_slug ON public.services(slug);
CREATE INDEX IF NOT EXISTS idx_services_display_order ON public.services(display_order);
CREATE INDEX IF NOT EXISTS idx_services_published ON public.services(is_published);

CREATE INDEX IF NOT EXISTS idx_case_studies_slug ON public.case_studies(slug);
CREATE INDEX IF NOT EXISTS idx_case_studies_display_order ON public.case_studies(display_order);
CREATE INDEX IF NOT EXISTS idx_case_studies_published ON public.case_studies(is_published);

CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON public.blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_status ON public.blog_posts(status);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON public.blog_posts(published_at);

CREATE INDEX IF NOT EXISTS idx_faqs_display_order ON public.faqs(display_order);
CREATE INDEX IF NOT EXISTS idx_faqs_published ON public.faqs(is_published);

CREATE INDEX IF NOT EXISTS idx_leads_status ON public.leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON public.leads(created_at);

-- ============================================================
-- 4. UPDATED_AT TRIGGERS
-- ============================================================

CREATE OR REPLACE FUNCTION public.update_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Apply trigger to all tables with updated_at
DO $$
DECLARE
  tbl text;
BEGIN
  FOR tbl IN SELECT unnest(ARRAY[
    'profiles', 'services', 'case_studies', 'blog_posts', 'faqs', 'leads', 'site_settings'
  ]) LOOP
    EXECUTE format(
      'CREATE TRIGGER set_updated_at BEFORE UPDATE ON public.%I
       FOR EACH ROW EXECUTE FUNCTION public.update_updated_at()',
      tbl
    );
  END LOOP;
END;
$$;

-- ============================================================
-- 5. AUTO-PROFILE TRIGGER
-- ============================================================

-- When a user is created in auth.users, auto-create a profile row.
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, role)
  VALUES (NEW.id, NEW.email, 'editor');
  RETURN NEW;
END;
$$;

-- Only fire on INSERT (new user creation), not on updates
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- ============================================================
-- 6. ROW LEVEL SECURITY
-- ============================================================

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.case_studies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- ============================================================
-- 7. RLS POLICIES
-- ============================================================

-- -----------------------------------------------------------
-- profiles
-- -----------------------------------------------------------
--
-- RLS POLICY COMBINATION SEMANTICS (PostgreSQL):
-- When multiple policies exist for the SAME operation (e.g., UPDATE),
-- they are combined with OR logic. If a user matches ANY policy,
-- the operation is allowed. This means:
--
--   BAD:  UPDATE policy A (admin) OR UPDATE policy B (self) = self can do anything
--   GOOD: Only ONE UPDATE policy that enforces the intended restriction
--
-- Because of this OR combining behavior, we use the MINIMUM number of
-- policies per operation to avoid unintended privilege escalation.

-- Admin can read all profiles
CREATE POLICY "Admin can read all profiles"
  ON public.profiles FOR SELECT
  TO authenticated
  USING (public.is_admin());

-- Users can read their own profile (needed for AuthContext to load profile)
CREATE POLICY "Users can read own profile"
  ON public.profiles FOR SELECT
  TO authenticated
  USING (id = auth.uid());

-- No direct profile inserts (trigger handles it via SECURITY DEFINER)

-- ONLY admin can update profiles (including role changes)
-- No self-update policy: profile self-editing is unnecessary for MVP.
-- Having only this policy prevents privilege escalation because there is
-- no second UPDATE policy that a non-admin could match.
CREATE POLICY "Admin can update profiles"
  ON public.profiles FOR UPDATE
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- No direct profile deletes (cascades from auth.users delete)

-- -----------------------------------------------------------
-- services
-- -----------------------------------------------------------

-- Anyone can read published services
CREATE POLICY "Public can read published services"
  ON public.services FOR SELECT
  USING (is_published = true);

-- Authenticated users (editor/admin) can read all services
CREATE POLICY "Authenticated can read all services"
  ON public.services FOR SELECT
  TO authenticated
  USING (true);

-- Editor and admin can insert services
CREATE POLICY "Editor and admin can insert services"
  ON public.services FOR INSERT
  TO authenticated
  WITH CHECK (public.get_user_role() IN ('admin', 'editor'));

-- Editor and admin can update services
CREATE POLICY "Editor and admin can update services"
  ON public.services FOR UPDATE
  TO authenticated
  USING (public.get_user_role() IN ('admin', 'editor'))
  WITH CHECK (public.get_user_role() IN ('admin', 'editor'));

-- Editor and admin can delete services
CREATE POLICY "Editor and admin can delete services"
  ON public.services FOR DELETE
  TO authenticated
  USING (public.get_user_role() IN ('admin', 'editor'));

-- -----------------------------------------------------------
-- case_studies
-- -----------------------------------------------------------

CREATE POLICY "Public can read published case studies"
  ON public.case_studies FOR SELECT
  USING (is_published = true);

CREATE POLICY "Authenticated can read all case studies"
  ON public.case_studies FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Editor and admin can insert case studies"
  ON public.case_studies FOR INSERT
  TO authenticated
  WITH CHECK (public.get_user_role() IN ('admin', 'editor'));

CREATE POLICY "Editor and admin can update case studies"
  ON public.case_studies FOR UPDATE
  TO authenticated
  USING (public.get_user_role() IN ('admin', 'editor'))
  WITH CHECK (public.get_user_role() IN ('admin', 'editor'));

CREATE POLICY "Editor and admin can delete case studies"
  ON public.case_studies FOR DELETE
  TO authenticated
  USING (public.get_user_role() IN ('admin', 'editor'));

-- -----------------------------------------------------------
-- blog_posts
-- -----------------------------------------------------------

-- Public can only read published posts
CREATE POLICY "Public can read published blog posts"
  ON public.blog_posts FOR SELECT
  USING (status = 'published');

-- Authenticated users can read all posts (including drafts)
CREATE POLICY "Authenticated can read all blog posts"
  ON public.blog_posts FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Editor and admin can insert blog posts"
  ON public.blog_posts FOR INSERT
  TO authenticated
  WITH CHECK (public.get_user_role() IN ('admin', 'editor'));

CREATE POLICY "Editor and admin can update blog posts"
  ON public.blog_posts FOR UPDATE
  TO authenticated
  USING (public.get_user_role() IN ('admin', 'editor'))
  WITH CHECK (public.get_user_role() IN ('admin', 'editor'));

CREATE POLICY "Editor and admin can delete blog posts"
  ON public.blog_posts FOR DELETE
  TO authenticated
  USING (public.get_user_role() IN ('admin', 'editor'));

-- -----------------------------------------------------------
-- faqs
-- -----------------------------------------------------------

CREATE POLICY "Public can read published faqs"
  ON public.faqs FOR SELECT
  USING (is_published = true);

CREATE POLICY "Authenticated can read all faqs"
  ON public.faqs FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Editor and admin can insert faqs"
  ON public.faqs FOR INSERT
  TO authenticated
  WITH CHECK (public.get_user_role() IN ('admin', 'editor'));

CREATE POLICY "Editor and admin can update faqs"
  ON public.faqs FOR UPDATE
  TO authenticated
  USING (public.get_user_role() IN ('admin', 'editor'))
  WITH CHECK (public.get_user_role() IN ('admin', 'editor'));

CREATE POLICY "Editor and admin can delete faqs"
  ON public.faqs FOR DELETE
  TO authenticated
  USING (public.get_user_role() IN ('admin', 'editor'));

-- -----------------------------------------------------------
-- leads
-- -----------------------------------------------------------

-- Anonymous can INSERT leads (contact form)
-- WITH CHECK prevents setting privileged fields:
--   status must be 'new' (default), source must be 'contact_form'
--   full_name, email, country, service, description are required
CREATE POLICY "Anonymous can insert leads"
  ON public.leads FOR INSERT
  TO anon
  WITH CHECK (
    status = 'new'
    AND source = 'contact_form'
    AND full_name IS NOT NULL AND length(full_name) <= 200
    AND email IS NOT NULL AND length(email) <= 254
    AND country IS NOT NULL AND length(country) <= 100
    AND service IS NOT NULL AND length(service) <= 100
    AND description IS NOT NULL AND length(description) <= 5000
  );

-- Authenticated admin can also insert leads (e.g., manual entry)
CREATE POLICY "Admin can insert leads"
  ON public.leads FOR INSERT
  TO authenticated
  WITH CHECK (public.is_admin());

-- ONLY admin can read leads (no anonymous, no editor)
CREATE POLICY "Admin can read all leads"
  ON public.leads FOR SELECT
  TO authenticated
  USING (public.is_admin());

-- ONLY admin can update leads
CREATE POLICY "Admin can update leads"
  ON public.leads FOR UPDATE
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- ONLY admin can delete leads
CREATE POLICY "Admin can delete leads"
  ON public.leads FOR DELETE
  TO authenticated
  USING (public.is_admin());

-- -----------------------------------------------------------
-- site_settings
-- -----------------------------------------------------------

-- Anyone can read site settings (public site configuration)
CREATE POLICY "Public can read site settings"
  ON public.site_settings FOR SELECT
  USING (true);

-- ONLY admin can insert settings
CREATE POLICY "Admin can insert settings"
  ON public.site_settings FOR INSERT
  TO authenticated
  WITH CHECK (public.is_admin());

-- ONLY admin can update settings
CREATE POLICY "Admin can update settings"
  ON public.site_settings FOR UPDATE
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- ONLY admin can delete settings
CREATE POLICY "Admin can delete settings"
  ON public.site_settings FOR DELETE
  TO authenticated
  USING (public.is_admin());

-- ============================================================
-- 8. SEED DATA
-- ============================================================

-- Site settings
INSERT INTO public.site_settings (key, value, description) VALUES
  ('site_name',    '"ZHS AI Agency"', 'Agency name displayed on the website'),
  ('site_tagline', '"Build Smarter. Automate Faster. Grow Better."', 'Main tagline'),
  ('contact_email', '"zhsaiagency@gmail.com"', 'Public contact email')
ON CONFLICT (key) DO NOTHING;

-- Services (migrated from config/site.ts)
INSERT INTO public.services (title, subtitle, slug, description, icon, features, display_order, is_published) VALUES
  ('AI Automation', 'Intelligent workflow automation', 'ai-automation', 'Intelligent AI agents, chatbots, voice systems, and workflow automation that eliminate manual processes and scale your operations without adding headcount.', 'Bot', '[]'::jsonb, 1, true),
  ('Technology', 'Custom solutions built for scale', 'technology', 'Custom web applications, SaaS platforms, APIs, and full-stack solutions engineered for performance, scalability, and long-term reliability.', 'Code2', '[]'::jsonb, 2, true),
  ('Creative', 'Design and branding that stands out', 'creative', 'Brand identity, UI/UX design, motion graphics, and creative campaigns that capture attention and communicate your vision with clarity.', 'Palette', '[]'::jsonb, 3, true),
  ('3D Studio', 'Immersive 3D experiences', '3d-studio', 'Photorealistic 3D renders, product visualization, architectural walkthroughs, and immersive interactive experiences that bring ideas to life.', 'Box', '[]'::jsonb, 4, true),
  ('Digital Growth', 'Data-driven strategies for growth', 'digital-growth', 'Data-driven marketing, SEO, paid campaigns, conversion optimization, and growth strategies designed to deliver measurable business outcomes.', 'TrendingUp', '[]'::jsonb, 5, true)
ON CONFLICT (slug) DO NOTHING;

-- Case studies (migrated from CaseStudies.tsx)
INSERT INTO public.case_studies (title, subtitle, slug, category, challenge, solution, capabilities, tech_stack, business_application, display_order, is_published) VALUES
  (
    'AI Customer Support System',
    'Intelligent support automation',
    'ai-customer-support',
    'AI Automation',
    'Support teams face growing ticket volumes while maintaining response quality. Manual ticket routing and repetitive inquiries consume agent time that could be spent on complex issues.',
    'An intelligent support system combining a custom AI chatbot with automated ticket classification. The AI handles common questions instantly, routes complex issues to the right team, and provides agents with suggested responses.',
    '["AI Chatbot Development", "Natural Language Processing", "Ticket Routing Automation", "Knowledge Base Integration"]'::jsonb,
    '["Python", "LangChain", "OpenAI API", "React", "Node.js", "PostgreSQL"]'::jsonb,
    'Service businesses handling high support volumes — reducing agent workload by deflecting routine inquiries while improving customer satisfaction through instant responses.',
    1, true
  ),
  (
    'Automated Lead Qualification',
    'AI-powered lead scoring engine',
    'automated-lead-qualification',
    'AI Automation',
    'Sales teams spend hours qualifying leads manually, often pursuing prospects that are not a good fit. The disconnect between marketing and sales creates friction and wasted effort.',
    'A lead scoring engine that analyzes behavior signals, engagement patterns, and firmographic data to rank prospects automatically. Qualified leads flow directly into the CRM with enriched profiles and recommended next actions.',
    '["Lead Scoring Models", "CRM Integration", "Behavioral Analytics", "Automated Workflows"]'::jsonb,
    '["Python", "scikit-learn", "FastAPI", "Zapier", "HubSpot API", "PostgreSQL"]'::jsonb,
    'B2B companies with longer sales cycles — helping sales teams focus on the highest-probability prospects and reducing time-to-close.',
    2, true
  ),
  (
    'SaaS Product Development',
    'Complete SaaS architecture',
    'saas-product-development',
    'Technology',
    'Building a SaaS platform from scratch requires expertise across frontend, backend, billing, authentication, multi-tenancy, and infrastructure — a complex undertaking for any team.',
    'A complete SaaS architecture with subscription billing, multi-tenant data isolation, real-time dashboards, and role-based access control. Built with a modular structure that allows features to be added without rearchitecting the core system.',
    '["Full-Stack Development", "Subscription Billing", "Multi-Tenant Architecture", "Real-Time Dashboards"]'::jsonb,
    '["Next.js", "TypeScript", "Node.js", "Stripe", "PostgreSQL", "Redis", "Vercel"]'::jsonb,
    'Startups and businesses launching subscription-based products — providing a production-ready foundation that scales from MVP to thousands of users.',
    3, true
  ),
  (
    '3D Product Visualization',
    'Interactive 3D product platform',
    '3d-product-visualization',
    'Creative',
    'E-commerce and product companies struggle to showcase products online with the same impact as in-person experiences. Static images do not convey scale, texture, or spatial context.',
    'An interactive 3D visualization platform allowing users to rotate, zoom, and customize products in a realistic environment. Integrated with the product catalog for a seamless browse-to-visualize experience.',
    '["3D Product Rendering", "Interactive Visualization", "WebGL Development", "Product Catalog Integration"]'::jsonb,
    '["Three.js", "React", "Blender", "WebGL", "Node.js", "AWS S3"]'::jsonb,
    'Furniture, automotive, and product companies looking to reduce return rates and increase purchase confidence through immersive product experiences.',
    4, true
  ),
  (
    'Brand & Growth System',
    'Unified brand and growth platform',
    'brand-growth-system',
    'Digital Growth',
    'Early-stage companies need a cohesive brand presence and growth engine — from identity and website to content strategy and analytics — but lack the budget for separate agencies.',
    'A unified brand and growth system covering visual identity, landing page design, SEO optimization, content strategy, and analytics dashboards. All components built with consistency and measurability in mind.',
    '["Brand Identity Design", "Landing Page Development", "SEO Strategy", "Analytics Dashboards"]'::jsonb,
    '["Figma", "Next.js", "Tailwind CSS", "Google Analytics", "Vercel", "Notion"]'::jsonb,
    'Startups and SMBs launching new products or entering new markets — establishing a professional brand presence and data-driven growth foundation from day one.',
    5, true
  )
ON CONFLICT (slug) DO NOTHING;

-- FAQs (migrated from Faqs.tsx)
INSERT INTO public.faqs (question, answer, display_order, is_published) VALUES
  ('What does ZHS AI Agency do?', 'ZHS AI Agency builds intelligent software systems that help businesses automate operations, grow digitally, and leverage cutting-edge technology. We specialize in AI agents, custom software development, automation workflows, digital growth strategies, and creative technology including 3D design.', 1, true),
  ('What is an AI agent?', 'An AI agent is an autonomous software system that can perceive its environment, make decisions, and take actions to achieve specific goals. Unlike traditional software that follows rigid rules, AI agents can adapt, learn, and handle complex multi-step tasks. They can manage customer interactions, analyze data, coordinate workflows, and much more.', 2, true),
  ('Can you automate customer support?', 'Yes. We build AI-powered customer support systems that handle common inquiries, route complex issues to human agents, and continuously improve through interaction data. This includes chatbots, email automation, ticket classification, and knowledge base integration — all tailored to your brand voice and processes.', 3, true),
  ('Can you automate WhatsApp workflows?', 'Absolutely. We build WhatsApp automation systems including order processing, appointment scheduling, customer onboarding sequences, and support workflows. These integrate with your existing tools and can handle everything from simple auto-replies to complex multi-step business processes.', 4, true),
  ('Can you build custom software?', 'Yes. We design and develop custom software solutions tailored to your specific business needs. This includes web applications, internal tools, APIs, dashboards, and enterprise systems. We work with modern technologies and follow best practices for scalability, security, and maintainability.', 5, true),
  ('Can you build SaaS products?', 'We can. From ideation to launch, we help build SaaS products including multi-tenant architecture, subscription billing, user management, and the core application logic. We work alongside your team or serve as your full technical partner depending on your needs.', 6, true),
  ('Do you work with startups?', 'Yes, we work with startups at various stages — from early MVP development to scaling production systems. We understand the unique constraints startups face and can adapt our approach to deliver maximum impact within your timeline and budget.', 7, true),
  ('Do you work with US businesses?', 'Absolutely. We serve clients across the United States and globally. Our team operates across time zones and we are comfortable with remote collaboration, async communication, and the workflows that US businesses expect.', 8, true),
  ('Can you integrate AI with existing systems?', 'Yes. We specialize in integrating AI capabilities into your existing tech stack. Whether you need AI features added to a current application, data pipelines connected to machine learning models, or automation layered on top of existing workflows, we can make it work.', 9, true),
  ('Do you provide SEO and digital marketing?', 'We do. Our digital growth services include SEO strategy and implementation, content marketing, conversion optimization, analytics setup, and paid campaign management. We take a data-driven approach focused on measurable business outcomes.', 10, true),
  ('Do you provide 3D design?', 'Yes. Our creative technology team handles 3D product visualization, architectural renders, animated explainers, interactive experiences, and real-time 3D applications. We use industry-standard tools and can deliver assets for web, print, or presentation use.', 11, true),
  ('How does the project process work?', 'Our process typically follows four phases: Discovery (understanding your goals and requirements), Strategy (planning the technical approach and roadmap), Build (developing and iterating with regular check-ins), and Launch (deploying, testing, and optimizing). We maintain transparent communication throughout and adapt to your preferred collaboration style.', 12, true),
  ('How do I start a project?', 'Simply reach out through our contact page or email us at zhsaiagency@gmail.com. We will schedule an initial call to understand your needs, discuss how we can help, and provide a clear proposal with scope, timeline, and pricing. There is no commitment required for the initial conversation.', 13, true)
ON CONFLICT DO NOTHING;

-- ============================================================
-- DONE
-- ============================================================
