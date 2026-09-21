import { useState, useEffect, type FormEvent } from "react";
import { Settings } from "lucide-react";
import { useSiteSettings } from "../../hooks/useSiteSettings";
import FormField from "../../components/admin/FormField";
import Input from "../../components/admin/Input";
import LoadingSpinner from "../../components/admin/LoadingSpinner";
import { showToast } from "../../components/admin/Toast";

interface FormState {
  site_name: string;
  site_tagline: string;
  contact_email: string;
}

export default function SettingsAdmin() {
  const { isLoading, error, upsert, get } = useSiteSettings();
  const [form, setForm] = useState<FormState>({ site_name: "", site_tagline: "", contact_email: "" });
  const [isSaving, setIsSaving] = useState(false);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!isLoading && !initialized) {
      setForm({
        site_name: get("site_name", "ZHS AI Agency"),
        site_tagline: get("site_tagline", "Build Smarter. Automate Faster. Grow Better."),
        contact_email: get("contact_email", "zhsaiagency@gmail.com"),
      });
      setInitialized(true);
    }
  }, [isLoading, initialized, get]);

  const set = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      await Promise.all([
        upsert("site_name", form.site_name.trim(), "Agency name displayed on the website"),
        upsert("site_tagline", form.site_tagline.trim(), "Main tagline"),
        upsert("contact_email", form.contact_email.trim(), "Public contact email"),
      ]);
      showToast("success", "Settings saved.");
    } catch (err) {
      showToast("error", err instanceof Error ? err.message : "Save failed.");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return <LoadingSpinner message="Loading settings..." />;
  }

  return (
    <div>
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zhs-accent/10 text-zhs-accent">
          <Settings className="h-5 w-5" />
        </div>
        <div>
          <h1 className="text-2xl font-bold dark:text-zhs-white text-slate-900">
            Site Settings
          </h1>
          <p className="text-sm dark:text-zhs-muted text-slate-500">
            Manage public website settings. Changes appear on the live site.
          </p>
        </div>
      </div>

      {error && (
        <div className="mb-6 rounded-xl border border-zhs-rose/30 bg-zhs-rose/10 px-4 py-3 text-sm text-zhs-rose">
          Error loading settings: {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="max-w-2xl">
        <div className="rounded-2xl border dark:border-zhs-border dark:bg-zhs-dark-2/80 border-slate-200 bg-white p-6 space-y-5">
          <FormField label="Site Name" htmlFor="site_name" hint="Displayed in the header, footer, and SEO metadata.">
            <Input
              id="site_name"
              value={form.site_name}
              onChange={(e) => set("site_name", e.target.value)}
              placeholder="ZHS AI Agency"
            />
          </FormField>

          <FormField label="Tagline" htmlFor="site_tagline" hint="Main tagline displayed on the website.">
            <Input
              id="site_tagline"
              value={form.site_tagline}
              onChange={(e) => set("site_tagline", e.target.value)}
              placeholder="Build Smarter. Automate Faster. Grow Better."
            />
          </FormField>

          <FormField label="Contact Email" htmlFor="contact_email" hint="Public contact email used in footer and contact page.">
            <Input
              id="contact_email"
              type="email"
              value={form.contact_email}
              onChange={(e) => set("contact_email", e.target.value)}
              placeholder="zhsaiagency@gmail.com"
            />
          </FormField>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            disabled={isSaving}
            className="inline-flex items-center gap-2 rounded-xl bg-zhs-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zhs-accent-3 disabled:opacity-50"
          >
            {isSaving ? "Saving..." : "Save Settings"}
          </button>
        </div>
      </form>
    </div>
  );
}
