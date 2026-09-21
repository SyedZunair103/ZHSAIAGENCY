import { useState, type FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";
import { useServices, slugify } from "../../hooks/useServices";
import FormField from "../../components/admin/FormField";
import Input from "../../components/admin/Input";
import Textarea from "../../components/admin/Textarea";
import { showToast } from "../../components/admin/Toast";

interface FormState {
  title: string;
  subtitle: string;
  slug: string;
  description: string;
  icon: string;
  display_order: string;
  is_published: boolean;
}

const initial: FormState = {
  title: "",
  subtitle: "",
  slug: "",
  description: "",
  icon: "",
  display_order: "0",
  is_published: true,
};

export default function ServicesNew() {
  const navigate = useNavigate();
  const { create } = useServices();
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [isSaving, setIsSaving] = useState(false);

  const set = (field: keyof FormState, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleTitleChange = (value: string) => {
    set("title", value);
    if (!form.slug || form.slug === slugify(form.title)) {
      set("slug", slugify(value));
    }
  };

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.title.trim()) e.title = "Title is required.";
    if (!form.subtitle.trim()) e.subtitle = "Subtitle is required.";
    if (!form.slug.trim()) e.slug = "Slug is required.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSaving(true);
    try {
      await create({
        title: form.title.trim(),
        subtitle: form.subtitle.trim(),
        slug: form.slug.trim(),
        description: form.description.trim() || null,
        icon: form.icon.trim() || null,
        features: [],
        display_order: parseInt(form.display_order, 10) || 0,
        is_published: form.is_published,
      });
      showToast("success", "Service created.");
      navigate("/admin/services");
    } catch (err) {
      showToast("error", err instanceof Error ? err.message : "Create failed.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <Link
          to="/admin/services"
          className="mb-4 inline-flex items-center gap-1.5 text-sm dark:text-zhs-muted text-slate-500 hover:text-zhs-accent transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Services
        </Link>
        <h1 className="text-2xl font-bold dark:text-zhs-white text-slate-900">
          Create Service
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="max-w-2xl">
        <div className="rounded-2xl border dark:border-zhs-border dark:bg-zhs-dark-2/80 border-slate-200 bg-white p-6 space-y-5">
          <FormField label="Title" htmlFor="title" required error={errors.title}>
            <Input
              id="title"
              value={form.title}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="AI Automation"
              error={!!errors.title}
            />
          </FormField>

          <FormField label="Subtitle" htmlFor="subtitle" required error={errors.subtitle}>
            <Input
              id="subtitle"
              value={form.subtitle}
              onChange={(e) => set("subtitle", e.target.value)}
              placeholder="Intelligent workflow automation"
              error={!!errors.subtitle}
            />
          </FormField>

          <FormField label="Slug" htmlFor="slug" required error={errors.slug} hint="Auto-generated from title. Unique URL identifier.">
            <Input
              id="slug"
              value={form.slug}
              onChange={(e) => set("slug", e.target.value)}
              placeholder="ai-automation"
              error={!!errors.slug}
            />
          </FormField>

          <FormField label="Description" htmlFor="description">
            <Textarea
              id="description"
              value={form.description}
              onChange={(e) => set("description", e.target.value)}
              rows={3}
              placeholder="Extended description of this service..."
            />
          </FormField>

          <FormField label="Icon" htmlFor="icon" hint="lucide-react icon name (e.g. Bot, Code2, Palette)">
            <Input
              id="icon"
              value={form.icon}
              onChange={(e) => set("icon", e.target.value)}
              placeholder="Bot"
            />
          </FormField>

          <FormField label="Display Order" htmlFor="display_order">
            <Input
              id="display_order"
              type="number"
              value={form.display_order}
              onChange={(e) => set("display_order", e.target.value)}
              min="0"
              className="max-w-[120px]"
            />
          </FormField>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => set("is_published", !form.is_published)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                form.is_published ? "bg-zhs-emerald" : "dark:bg-zhs-dark-4 bg-slate-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  form.is_published ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span className="text-sm dark:text-zhs-text text-slate-700">
              {form.is_published ? "Published" : "Draft"}
            </span>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <button
            type="submit"
            disabled={isSaving}
            className="inline-flex items-center gap-2 rounded-xl bg-zhs-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zhs-accent-3 disabled:opacity-50"
          >
            <Save className="h-4 w-4" />
            {isSaving ? "Creating..." : "Create Service"}
          </button>
          <Link
            to="/admin/services"
            className="inline-flex items-center rounded-xl border dark:border-zhs-border border-slate-200 px-5 py-2.5 text-sm font-medium dark:text-zhs-text text-slate-700 transition-colors hover:dark:bg-zhs-dark-3 hover:bg-slate-50"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
