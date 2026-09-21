import { useState, useEffect, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { LogIn } from "lucide-react";
import Logo from "../../components/brand/Logo";
import { supabase } from "../../lib/supabase";
import { useAuth } from "../../context/useAuth";

export default function Login() {
  const navigate = useNavigate();
  const { session, isLoading: authLoading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!authLoading && session) {
      navigate("/admin", { replace: true });
    }
  }, [session, authLoading, navigate]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Email and password are required.");
      return;
    }

    setIsLoading(true);

    const { error: authError } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (authError) {
      setError(authError.message);
      setIsLoading(false);
      return;
    }

    navigate("/admin");
  };

  if (authLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zhs-black">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-zhs-accent border-t-transparent" />
      </div>
    );
  }

  if (session) return null;

  return (
    <div className="flex min-h-screen items-center justify-center bg-zhs-black px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-6">
            <Logo tagline={false} />
          </div>
          <h1 className="text-2xl font-bold text-zhs-white">Admin Login</h1>
          <p className="mt-2 text-sm text-zhs-muted">
            Sign in to access the admin dashboard.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-zhs-border bg-zhs-dark-2/80 p-8"
        >
          {error && (
            <div className="mb-4 rounded-xl border border-zhs-rose/30 bg-zhs-rose/10 px-4 py-3 text-sm text-zhs-rose">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-zhs-text"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-zhs-border bg-zhs-dark px-4 py-3 text-sm text-zhs-white placeholder-zhs-muted/60 outline-none focus:border-zhs-accent focus:ring-2 focus:ring-zhs-accent/20"
                placeholder="admin@zhsaiagency.com"
                autoComplete="email"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-1.5 block text-sm font-medium text-zhs-text"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-zhs-border bg-zhs-dark px-4 py-3 text-sm text-zhs-white placeholder-zhs-muted/60 outline-none focus:border-zhs-accent focus:ring-2 focus:ring-zhs-accent/20"
                placeholder="••••••••"
                autoComplete="current-password"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-zhs-accent px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-zhs-accent-3 disabled:opacity-50"
          >
            {isLoading ? "Signing in..." : "Sign In"}
            {!isLoading && <LogIn className="h-4 w-4" />}
          </button>
        </form>
      </div>
    </div>
  );
}
