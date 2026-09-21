import { useState, useEffect, type FormEvent } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { ArrowLeft, Save, Plus, X } from "lucide-react";
import { useCaseStudies, slugify } from "../../hooks/useCaseStudies";
import FormField from "../../components/admin/FormField";
import Input from "../../components/admin/Input";
import Textarea from "../../components/admin/Textarea";
import Select from "../../components/admin/Select";
import LoadingSpinner from "../../components/admin/LoadingSpinner";
import { showToast } from "../../components/admin/Toast";

interface FormState {
  title: string;
  subtitle: string;
  slug: string;
  category: string;
  challenge: string;
  solution: string;
  capabilities: string[];
  tech_stack: string[];
  business_application: string;
  display_order: string;
  is_published: boolean;
}

const CATEGORIES = ["AI Automation", "Technology", "Creative", "3D Studio", "Digital Growth"];

export default function CaseStudiesEdit() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: items, update } = useCaseStudies();
  const [form, setForm] = useState<FormState | null>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [isSaving, setIsSaving] = useState(false);
  const [capInput, setCapInput] = useState("");
  const [techInput, setTechInput] = useState("");

  const item = items.find((s) => s.id === id);

  useEffect(() => {
    if (item && !form) {
      setForm({
        title: item.title,
        subtitle: item.subtitle,
        slug: item.slug,
        category: item.category,
        challenge: item.challenge,
        solution: item.solution,
        capabilities: item.capabilities ?? [],
        tech_stack: item.tech_stack ?? [],
        business_application: item.business_application ?? "",
        display_order: String(item.display_order),
        is_published: item.is_published,
      });
    }
  }, [item, form]);

  const set = (field: keyof FormState, value: string | boolean | string[]) => {
    setForm((prev) => (prev ? { ...prev, [field]: value } : prev));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleTitleChange = (value: string) => {
    set("title", value);
    if (!form || !form.slug || form.slug === slugify(form.title)) {
      set("slug", slugify(value));
    }
  };

  const addListItem = (field: "capabilities" | "tech_stack", value: string, setter: (v: string) => void) => {
    if (!form) return;
    const trimmed = value.trim();
    if (trimmed && !form[field].includes(trimmed)) {
      set(field, [...form[field], trimmed]);
    }
    setter("");
  };

  const removeListItem = (field: "capabilities" | "tech_stack", index: number) => {
    if (!form) return;
    set(field, form[field].filter((_, i) => i !== index));
  };

  const validate = (): boolean => {
    if (!form) return false;
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.title.trim()) e.title = "Title is required.";
    if (!form.subtitle.trim()) e.subtitle = "Subtitle is required.";
    if (!form.slug.trim()) e.slug = "Slug is required.";
    if (!form.category) e.category = "Category is required.";
    if (!form.challenge.trim()) e.challenge = "Challenge is required.";
    if (!form.solution.trim()) e.solution = "Solution is required.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form || !id || !validate()) return;

    setIsSaving(true);
    try {
      await update(id, {
        title: form.title.trim(),
        subtitle: form.subtitle.trim(),
        slug: form.slug.trim(),
        category: form.category,
        challenge: form.challenge.trim(),
        solution: form.solution.trim(),
        capabilities: form.capabilities,
        tech_stack: form.tech_stack,
        business_application: form.business_application.trim() || null,
        display_order: parseInt(form.display_order, 10) || 0,
        is_published: form.is_published,
      });
      showToast("success", "Case study updated.");
      navigate("/admin/case-studies");
    } catch (err) {
      showToast("error", err instanceof Error ? err.message : "Update failed.");
    } finally {
      setIsSaving(false);
    }
  };

  if (!item) {
    return <LoadingSpinner message="Loading case study..." />;
  }

  if (!form) return null;

  const pill =
    "inline-flex items-center gap-1 rounded-lg border dark:border-zhs-border border-slate-200 dark:bg-zhs-dark-3 bg-slate-100 px-2.5 py-1 text-xs dark:text-zhs-text text-slate-700";

  return (
    <div>
      <div className="mb-8">
        <Link
          to="/admin/case-studies"
          className="mb-4 inline-flex items-center gap-1.5 text-sm dark:text-zhs-muted text-slate-500 hover:text-zhs-accent transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Case Studies
        </Link>
        <h1 className="text-2xl font-bold dark:text-zhs-white text-slate-900">
          Edit Case Study
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="max-w-2xl">
        <div className="rounded-2xl border dark:border-zhs-border dark:bg-zhs-dark-2/80 border-slate-200 bg-white p-6 space-y-5">
          <FormField label="Title" htmlFor="title" required error={errors.title}>
            <Input
              id="title"
              value={form.title}
              onChange={(e) => handleTitleChange(e.target.value)}
              error={!!errors.title}
            />
          </FormField>

          <FormField label="Subtitle" htmlFor="subtitle" required error={errors.subtitle}>
            <Input
              id="subtitle"
              value={form.subtitle}
              onChange={(e) => set("subtitle", e.target.value)}
              error={!!errors.subtitle}
            />
          </FormField>

          <FormField label="Slug" htmlFor="slug" required error={errors.slug}>
            <Input
              id="slug"
              value={form.slug}
              onChange={(e) => set("slug", e.target.value)}
              error={!!errors.slug}
            />
          </FormField>

          <FormField label="Category" htmlFor="category" required error={errors.category}>
            <Select
              id="category"
              value={form.category}
              onChange={(e) => set("category", e.target.value)}
              placeholder="Select category"
              error={!!errors.category}
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </Select>
          </FormField>

          <FormField label="Challenge" htmlFor="challenge" required error={errors.challenge}>
            <Textarea
              id="challenge"
              value={form.challenge}
              onChange={(e) => set("challenge", e.target.value)}
              rows={3}
              error={!!errors.challenge}
            />
          </FormField>

          <FormField label="Solution" htmlFor="solution" required error={errors.solution}>
            <Textarea
              id="solution"
              value={form.solution}
              onChange={(e) => set("solution", e.target.value)}
              rows={3}
              error={!!errors.solution}
            />
          </FormField>

          <FormField label="Capabilities" htmlFor="capabilities" hint="Press Enter to add">
            <div className="flex gap-2">
              <Input
                id="capabilities"
                value={capInput}
                onChange={(e) => setCapInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addListItem("capabilities", capInput, setCapInput);
                  }
                }}
                placeholder="e.g. AI Automation"
              />
              <button
                type="button"
                onClick={() => addListItem("capabilities", capInput, setCapInput)}
                className="rounded-lg border dark:border-zhs-border border-slate-200 px-3 py-2 text-sm dark:text-zhs-muted text-slate-500 hover:dark:text-zhs-white hover:text-slate-900 transition-colors"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            {form.capabilities.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {form.capabilities.map((cap, i) => (
                  <span key={i} className={pill}>
                    {cap}
                    <button
                      type="button"
                      onClick={() => removeListItem("capabilities", i)}
                      className="ml-0.5 dark:text-zhs-muted text-slate-400 hover:text-zhs-rose transition-colors"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </FormField>

          <FormField label="Tech Stack" htmlFor="tech_stack" hint="Press Enter to add">
            <div className="flex gap-2">
              <Input
                id="tech_stack"
                value={techInput}
                onChange={(e) => setTechInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addListItem("tech_stack", techInput, setTechInput);
                  }
                }}
                placeholder="e.g. Next.js"
              />
              <button
                type="button"
                onClick={() => addListItem("tech_stack", techInput, setTechInput)}
                className="rounded-lg border dark:border-zhs-border border-slate-200 px-3 py-2 text-sm dark:text-zhs-muted text-slate-500 hover:dark:text-zhs-white hover:text-slate-900 transition-colors"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            {form.tech_stack.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {form.tech_stack.map((tech, i) => (
                  <span key={i} className={pill}>
                    {tech}
                    <button
                      type="button"
                      onClick={() => removeListItem("tech_stack", i)}
                      className="ml-0.5 dark:text-zhs-muted text-slate-400 hover:text-zhs-rose transition-colors"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </FormField>

          <FormField label="Business Application" htmlFor="business_application">
            <Textarea
              id="business_application"
              value={form.business_application}
              onChange={(e) => set("business_application", e.target.value)}
              rows={2}
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
            {isSaving ? "Saving..." : "Save Changes"}
          </button>
          <Link
            to="/admin/case-studies"
            className="inline-flex items-center rounded-xl border dark:border-zhs-border border-slate-200 px-5 py-2.5 text-sm font-medium dark:text-zhs-text text-slate-700 transition-colors hover:dark:bg-zhs-dark-3 hover:bg-slate-50"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
