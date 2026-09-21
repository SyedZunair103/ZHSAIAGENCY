import { useState, type FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";
import { useBlogPosts, slugify } from "../../hooks/useBlogPosts";
import FormField from "../../components/admin/FormField";
import Input from "../../components/admin/Input";
import Textarea from "../../components/admin/Textarea";
import { showToast } from "../../components/admin/Toast";

interface FormState {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  meta_title: string;
  meta_description: string;
  status: string;
}

const initial: FormState = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  meta_title: "",
  meta_description: "",
  status: "draft",
};

export default function BlogPostsNew() {
  const navigate = useNavigate();
  const { create } = useBlogPosts();
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [isSaving, setIsSaving] = useState(false);

  const set = (field: keyof FormState, value: string) => {
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
    if (!form.slug.trim()) e.slug = "Slug is required.";
    if (!form.content.trim()) e.content = "Content is required.";
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
        slug: form.slug.trim(),
        excerpt: form.excerpt.trim() || null,
        content: form.content.trim(),
        meta_title: form.meta_title.trim() || null,
        meta_description: form.meta_description.trim() || null,
        status: form.status,
        published_at: form.status === "published" ? new Date().toISOString() : null,
      });
      showToast("success", "Blog post created.");
      navigate("/admin/blog");
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
          to="/admin/blog"
          className="mb-4 inline-flex items-center gap-1.5 text-sm dark:text-zhs-muted text-slate-500 hover:text-zhs-accent transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>
        <h1 className="text-2xl font-bold dark:text-zhs-white text-slate-900">
          Create Blog Post
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="max-w-2xl">
        <div className="rounded-2xl border dark:border-zhs-border dark:bg-zhs-dark-2/80 border-slate-200 bg-white p-6 space-y-5">
          <FormField label="Title" htmlFor="title" required error={errors.title}>
            <Input
              id="title"
              value={form.title}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="How AI Agents Transform Customer Support"
              error={!!errors.title}
            />
          </FormField>

          <FormField label="Slug" htmlFor="slug" required error={errors.slug} hint="Auto-generated from title.">
            <Input
              id="slug"
              value={form.slug}
              onChange={(e) => set("slug", e.target.value)}
              placeholder="how-ai-agents-transform-customer-support"
              error={!!errors.slug}
            />
          </FormField>

          <FormField label="Excerpt" htmlFor="excerpt" hint="Brief summary for listing pages.">
            <Textarea
              id="excerpt"
              value={form.excerpt}
              onChange={(e) => set("excerpt", e.target.value)}
              rows={2}
              placeholder="A short summary of this post..."
            />
          </FormField>

          <FormField label="Content" htmlFor="content" required error={errors.content}>
            <Textarea
              id="content"
              value={form.content}
              onChange={(e) => set("content", e.target.value)}
              rows={10}
              placeholder="Write your blog post content here..."
              error={!!errors.content}
            />
          </FormField>

          <div className="border-t dark:border-zhs-border border-slate-200 pt-5">
            <p className="mb-3 text-sm font-medium dark:text-zhs-text text-slate-700">SEO</p>
            <div className="space-y-4">
              <FormField label="Meta Title" htmlFor="meta_title" hint="Defaults to post title if empty.">
                <Input
                  id="meta_title"
                  value={form.meta_title}
                  onChange={(e) => set("meta_title", e.target.value)}
                  placeholder={form.title || "SEO title"}
                />
              </FormField>
              <FormField label="Meta Description" htmlFor="meta_description" hint="Defaults to excerpt if empty.">
                <Textarea
                  id="meta_description"
                  value={form.meta_description}
                  onChange={(e) => set("meta_description", e.target.value)}
                  rows={2}
                  placeholder="SEO description for search engines..."
                />
              </FormField>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() =>
                set("status", form.status === "published" ? "draft" : "published")
              }
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                form.status === "published"
                  ? "bg-zhs-emerald"
                  : "dark:bg-zhs-dark-4 bg-slate-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  form.status === "published" ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span className="text-sm dark:text-zhs-text text-slate-700">
              {form.status === "published" ? "Published" : "Draft"}
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
            {isSaving ? "Creating..." : "Create Post"}
          </button>
          <Link
            to="/admin/blog"
            className="inline-flex items-center rounded-xl border dark:border-zhs-border border-slate-200 px-5 py-2.5 text-sm font-medium dark:text-zhs-text text-slate-700 transition-colors hover:dark:bg-zhs-dark-3 hover:bg-slate-50"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
