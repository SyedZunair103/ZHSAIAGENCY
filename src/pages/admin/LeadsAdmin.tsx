import { useState } from "react";
import { Link } from "react-router-dom";
import { Trash2, Users, Eye, Mail, Building2 } from "lucide-react";
import { useLeads, type Lead } from "../../hooks/useLeads";
import LoadingSpinner from "../../components/admin/LoadingSpinner";
import EmptyState from "../../components/admin/EmptyState";
import Badge from "../../components/admin/Badge";
import ConfirmDialog from "../../components/admin/ConfirmDialog";
import { showToast } from "../../components/admin/Toast";

const statusVariant: Record<string, "default" | "success" | "warning" | "danger" | "info"> = {
  new: "info",
  contacted: "warning",
  qualified: "success",
  closed: "danger",
};

export default function LeadsAdmin() {
  const { data: leads, isLoading, error, remove } = useLeads();
  const [deleteTarget, setDeleteTarget] = useState<Lead | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setIsDeleting(true);
    try {
      await remove(deleteTarget.id);
      showToast("success", `Lead from "${deleteTarget.full_name}" deleted.`);
      setDeleteTarget(null);
    } catch (e) {
      showToast("error", e instanceof Error ? e.message : "Delete failed.");
    } finally {
      setIsDeleting(false);
    }
  };

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zhs-accent/10 text-zhs-accent">
            <Users className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold dark:text-zhs-white text-slate-900">
              Leads
            </h1>
            <p className="text-sm dark:text-zhs-muted text-slate-500">
              Manage contact form submissions.
            </p>
          </div>
        </div>
      </div>

      {isLoading && <LoadingSpinner />}

      {error && (
        <div className="rounded-xl border border-zhs-rose/30 bg-zhs-rose/10 px-4 py-3 text-sm text-zhs-rose">
          Error: {error}
        </div>
      )}

      {!isLoading && !error && leads.length === 0 && (
        <EmptyState
          icon={<Users className="h-8 w-8" />}
          title="No leads yet"
          description="Leads from the contact form will appear here."
        />
      )}

      {!isLoading && !error && leads.length > 0 && (
        <div className="overflow-hidden rounded-2xl border dark:border-zhs-border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b dark:border-zhs-border border-slate-200 dark:bg-zhs-dark-2/50 bg-slate-50">
                <th className="px-4 py-3 font-medium dark:text-zhs-muted text-slate-500">
                  Name
                </th>
                <th className="px-4 py-3 font-medium dark:text-zhs-muted text-slate-500">
                  Email
                </th>
                <th className="px-4 py-3 font-medium dark:text-zhs-muted text-slate-500">
                  Service
                </th>
                <th className="px-4 py-3 font-medium dark:text-zhs-muted text-slate-500">
                  Status
                </th>
                <th className="px-4 py-3 font-medium dark:text-zhs-muted text-slate-500">
                  Date
                </th>
                <th className="px-4 py-3 text-right font-medium dark:text-zhs-muted text-slate-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr
                  key={lead.id}
                  className="border-b dark:border-zhs-border/50 border-slate-100 transition-colors hover:dark:bg-zhs-dark-3/30 hover:bg-slate-50"
                >
                  <td className="px-4 py-3">
                    <div>
                      <p className="font-medium dark:text-zhs-white text-slate-900">
                        {lead.full_name}
                      </p>
                      {lead.company && (
                        <p className="flex items-center gap-1 text-xs dark:text-zhs-muted text-slate-500">
                          <Building2 className="h-3 w-3" />
                          {lead.company}
                        </p>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <a
                      href={`mailto:${lead.email}`}
                      className="flex items-center gap-1 text-sm text-zhs-accent hover:text-zhs-accent-3 transition-colors"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      {lead.email}
                    </a>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm dark:text-zhs-text text-slate-700">
                      {lead.service}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <Badge variant={statusVariant[lead.status] ?? "default"}>
                      {lead.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-xs dark:text-zhs-muted text-slate-500">
                    {formatDate(lead.created_at)}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex justify-end gap-1">
                      <Link
                        to={`/admin/leads/${lead.id}`}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg dark:text-zhs-muted dark:hover:text-zhs-accent text-slate-400 hover:text-indigo-600 transition-colors"
                      >
                        <Eye className="h-4 w-4" />
                      </Link>
                      <button
                        onClick={() => setDeleteTarget(lead)}
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
        title="Delete Lead"
        message={`Are you sure you want to delete the lead from "${deleteTarget?.full_name}"? This cannot be undone.`}
        isLoading={isDeleting}
      />
    </div>
  );
}
