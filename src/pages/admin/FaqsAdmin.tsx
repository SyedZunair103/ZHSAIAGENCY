import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Pencil, Trash2, HelpCircle, GripVertical } from "lucide-react";
import { useFaqs, type Faq } from "../../hooks/useFaqs";
import LoadingSpinner from "../../components/admin/LoadingSpinner";
import EmptyState from "../../components/admin/EmptyState";
import Badge from "../../components/admin/Badge";
import ConfirmDialog from "../../components/admin/ConfirmDialog";
import { showToast } from "../../components/admin/Toast";

export default function FaqsAdmin() {
  const { data: items, isLoading, error, remove } = useFaqs();
  const [deleteTarget, setDeleteTarget] = useState<Faq | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setIsDeleting(true);
    try {
      await remove(deleteTarget.id);
      showToast("success", "FAQ deleted.");
      setDeleteTarget(null);
    } catch (e) {
      showToast("error", e instanceof Error ? e.message : "Delete failed.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zhs-accent/10 text-zhs-accent">
            <HelpCircle className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold dark:text-zhs-white text-slate-900">
              FAQs
            </h1>
            <p className="text-sm dark:text-zhs-muted text-slate-500">
              Manage the frequently asked questions on your website.
            </p>
          </div>
        </div>
        <Link
          to="/admin/faqs/new"
          className="inline-flex items-center gap-2 rounded-xl bg-zhs-accent px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zhs-accent-3"
        >
          <Plus className="h-4 w-4" />
          New FAQ
        </Link>
      </div>

      {isLoading && <LoadingSpinner />}

      {error && (
        <div className="rounded-xl border border-zhs-rose/30 bg-zhs-rose/10 px-4 py-3 text-sm text-zhs-rose">
          Error: {error}
        </div>
      )}

      {!isLoading && !error && items.length === 0 && (
        <EmptyState
          icon={<HelpCircle className="h-8 w-8" />}
          title="No FAQs yet"
          description="Create your first FAQ to get started."
          action={
            <Link
              to="/admin/faqs/new"
              className="inline-flex items-center gap-2 rounded-xl bg-zhs-accent px-4 py-2.5 text-sm font-semibold text-white"
            >
              <Plus className="h-4 w-4" />
              Create FAQ
            </Link>
          }
        />
      )}

      {!isLoading && !error && items.length > 0 && (
        <div className="overflow-hidden rounded-2xl border dark:border-zhs-border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b dark:border-zhs-border border-slate-200 dark:bg-zhs-dark-2/50 bg-slate-50">
                <th className="w-8 px-4 py-3 font-medium dark:text-zhs-muted text-slate-500" />
                <th className="px-4 py-3 font-medium dark:text-zhs-muted text-slate-500">
                  Question
                </th>
                <th className="px-4 py-3 font-medium dark:text-zhs-muted text-slate-500">
                  Status
                </th>
                <th className="px-4 py-3 font-medium dark:text-zhs-muted text-slate-500">
                  Order
                </th>
                <th className="px-4 py-3 text-right font-medium dark:text-zhs-muted text-slate-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr
                  key={item.id}
                  className="border-b dark:border-zhs-border/50 border-slate-100 transition-colors hover:dark:bg-zhs-dark-3/30 hover:bg-slate-50"
                >
                  <td className="px-4 py-3 dark:text-zhs-muted text-slate-400">
                    <GripVertical className="h-4 w-4" />
                  </td>
                  <td className="px-4 py-3">
                    <p className="font-medium dark:text-zhs-white text-slate-900">
                      {item.question}
                    </p>
                    <p className="max-w-md truncate text-xs dark:text-zhs-muted text-slate-500">
                      {item.answer}
                    </p>
                  </td>
                  <td className="px-4 py-3">
                    <Badge variant={item.is_published ? "success" : "warning"}>
                      {item.is_published ? "Published" : "Draft"}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 dark:text-zhs-muted text-slate-500">
                    {item.display_order}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex justify-end gap-1">
                      <Link
                        to={`/admin/faqs/${item.id}`}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg dark:text-zhs-muted dark:hover:text-zhs-accent text-slate-400 hover:text-indigo-600 transition-colors"
                      >
                        <Pencil className="h-4 w-4" />
                      </Link>
                      <button
                        onClick={() => setDeleteTarget(item)}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg dark:text-zhs-muted dark:hover:text-zhs-rose text-slate-400 hover:text-rose-600 transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <ConfirmDialog
        isOpen={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
        title="Delete FAQ"
        message={`Are you sure you want to delete this FAQ? This cannot be undone.`}
        isLoading={isDeleting}
      />
    </div>
  );
}
