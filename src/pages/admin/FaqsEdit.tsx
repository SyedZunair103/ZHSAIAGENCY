import { useState, useEffect, type FormEvent } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";
import { useFaqs } from "../../hooks/useFaqs";
import FormField from "../../components/admin/FormField";
import Textarea from "../../components/admin/Textarea";
import Input from "../../components/admin/Input";
import LoadingSpinner from "../../components/admin/LoadingSpinner";
import { showToast } from "../../components/admin/Toast";

interface FormState {
  question: string;
  answer: string;
  display_order: string;
  is_published: boolean;
}

export default function FaqsEdit() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: items, update } = useFaqs();
  const [form, setForm] = useState<FormState | null>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [isSaving, setIsSaving] = useState(false);

  const item = items.find((f) => f.id === id);

  useEffect(() => {
    if (item && !form) {
      setForm({
        question: item.question,
        answer: item.answer,
        display_order: String(item.display_order),
        is_published: item.is_published,
      });
    }
  }, [item, form]);

  const set = (field: keyof FormState, value: string | boolean) => {
    setForm((prev) => (prev ? { ...prev, [field]: value } : prev));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): boolean => {
    if (!form) return false;
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.question.trim()) e.question = "Question is required.";
    if (!form.answer.trim()) e.answer = "Answer is required.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form || !id || !validate()) return;

    setIsSaving(true);
    try {
      await update(id, {
        question: form.question.trim(),
        answer: form.answer.trim(),
        display_order: parseInt(form.display_order, 10) || 0,
        is_published: form.is_published,
      });
      showToast("success", "FAQ updated.");
      navigate("/admin/faqs");
    } catch (err) {
      showToast("error", err instanceof Error ? err.message : "Update failed.");
    } finally {
      setIsSaving(false);
    }
  };

  if (!item) {
    return <LoadingSpinner message="Loading FAQ..." />;
  }

  if (!form) return null;

  return (
    <div>
      <div className="mb-8">
        <Link
          to="/admin/faqs"
          className="mb-4 inline-flex items-center gap-1.5 text-sm dark:text-zhs-muted text-slate-500 hover:text-zhs-accent transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to FAQs
        </Link>
        <h1 className="text-2xl font-bold dark:text-zhs-white text-slate-900">
          Edit FAQ
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="max-w-2xl">
        <div className="rounded-2xl border dark:border-zhs-border dark:bg-zhs-dark-2/80 border-slate-200 bg-white p-6 space-y-5">
          <FormField label="Question" htmlFor="question" required error={errors.question}>
            <Input
              id="question"
              value={form.question}
              onChange={(e) => set("question", e.target.value)}
              error={!!errors.question}
            />
          </FormField>

          <FormField label="Answer" htmlFor="answer" required error={errors.answer}>
            <Textarea
              id="answer"
              value={form.answer}
              onChange={(e) => set("answer", e.target.value)}
              rows={4}
              error={!!errors.answer}
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
            to="/admin/faqs"
            className="inline-flex items-center rounded-xl border dark:border-zhs-border border-slate-200 px-5 py-2.5 text-sm font-medium dark:text-zhs-text text-slate-700 transition-colors hover:dark:bg-zhs-dark-3 hover:bg-slate-50"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
