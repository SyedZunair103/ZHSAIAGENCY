import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Save,
  Mail,
  Phone,
  Building2,
  MapPin,
  Tag,
  DollarSign,
  FileText,
} from "lucide-react";
import { useLeads, LEAD_STATUSES, type Lead } from "../../hooks/useLeads";
import LoadingSpinner from "../../components/admin/LoadingSpinner";
import Badge from "../../components/admin/Badge";
import { showToast } from "../../components/admin/Toast";

const statusVariant: Record<string, "default" | "success" | "warning" | "danger" | "info"> = {
  new: "info",
  contacted: "warning",
  qualified: "success",
  closed: "danger",
};

export default function LeadDetail() {
  const { id } = useParams<{ id: string }>();
  const { data: leads, update } = useLeads();
  const [lead, setLead] = useState<Lead | null>(null);
  const [status, setStatus] = useState<string>("");
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (leads.length > 0 && id) {
      const found = leads.find((l) => l.id === id);
      if (found) {
        setLead(found);
        setStatus(found.status);
      }
    }
  }, [leads, id]);

  const handleSave = async () => {
    if (!lead || status === lead.status) return;
    setIsSaving(true);
    try {
      await update(lead.id, { status });
      showToast("success", "Lead status updated.");
    } catch (e) {
      showToast("error", e instanceof Error ? e.message : "Update failed.");
      setStatus(lead.status);
    } finally {
      setIsSaving(false);
    }
  };

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

  if (!lead) {
    return <LoadingSpinner message="Loading lead..." />;
  }

  return (
    <div>
      <div className="mb-8">
        <Link
          to="/admin/leads"
          className="mb-4 inline-flex items-center gap-1.5 text-sm dark:text-zhs-muted text-slate-500 hover:text-zhs-accent transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Leads
        </Link>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold dark:text-zhs-white text-slate-900">
              {lead.full_name}
            </h1>
            <p className="text-sm dark:text-zhs-muted text-slate-500">
              Lead submitted {formatDate(lead.created_at)}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="rounded-xl border px-4 py-2.5 text-sm transition-colors outline-none dark:text-zhs-white text-slate-900 dark:border-zhs-border dark:bg-zhs-dark border-slate-200 bg-white focus:border-zhs-accent focus:ring-2 focus:ring-zhs-accent/20"
            >
              {LEAD_STATUSES.map((s) => (
                <option key={s} value={s}>
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </option>
              ))}
            </select>
            <button
              onClick={handleSave}
              disabled={isSaving || status === lead.status}
              className="inline-flex items-center gap-2 rounded-xl bg-zhs-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zhs-accent-3 disabled:opacity-50"
            >
              <Save className="h-4 w-4" />
              {isSaving ? "Saving..." : "Save"}
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl border dark:border-zhs-border dark:bg-zhs-dark-2/80 border-slate-200 bg-white p-6">
            <h2 className="mb-4 text-lg font-semibold dark:text-zhs-white text-slate-900">
              Contact Information
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg dark:bg-zhs-dark-3 bg-slate-100">
                  <Mail className="h-4 w-4 dark:text-zhs-muted text-slate-500" />
                </div>
                <div>
                  <p className="text-xs dark:text-zhs-muted text-slate-500">Email</p>
                  <a
                    href={`mailto:${lead.email}`}
                    className="text-sm font-medium text-zhs-accent hover:text-zhs-accent-3 transition-colors"
                  >
                    {lead.email}
                  </a>
                </div>
              </div>
              {lead.phone && (
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg dark:bg-zhs-dark-3 bg-slate-100">
                    <Phone className="h-4 w-4 dark:text-zhs-muted text-slate-500" />
                  </div>
                  <div>
                    <p className="text-xs dark:text-zhs-muted text-slate-500">Phone</p>
                    <a
                      href={`tel:${lead.phone}`}
                      className="text-sm font-medium dark:text-zhs-text text-slate-700"
                    >
                      {lead.phone}
                    </a>
                  </div>
                </div>
              )}
              {lead.company && (
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg dark:bg-zhs-dark-3 bg-slate-100">
                    <Building2 className="h-4 w-4 dark:text-zhs-muted text-slate-500" />
                  </div>
                  <div>
                    <p className="text-xs dark:text-zhs-muted text-slate-500">Company</p>
                    <p className="text-sm font-medium dark:text-zhs-text text-slate-700">
                      {lead.company}
                    </p>
                  </div>
                </div>
              )}
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg dark:bg-zhs-dark-3 bg-slate-100">
                  <MapPin className="h-4 w-4 dark:text-zhs-muted text-slate-500" />
                </div>
                <div>
                  <p className="text-xs dark:text-zhs-muted text-slate-500">Country</p>
                  <p className="text-sm font-medium dark:text-zhs-text text-slate-700">
                    {lead.country}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border dark:border-zhs-border dark:bg-zhs-dark-2/80 border-slate-200 bg-white p-6">
            <h2 className="mb-4 text-lg font-semibold dark:text-zhs-white text-slate-900">
              Project Details
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg dark:bg-zhs-dark-3 bg-slate-100">
                  <Tag className="h-4 w-4 dark:text-zhs-muted text-slate-500" />
                </div>
                <div>
                  <p className="text-xs dark:text-zhs-muted text-slate-500">Service</p>
                  <p className="text-sm font-medium dark:text-zhs-text text-slate-700">
                    {lead.service}
                  </p>
                </div>
              </div>
              {lead.budget && (
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg dark:bg-zhs-dark-3 bg-slate-100">
                    <DollarSign className="h-4 w-4 dark:text-zhs-muted text-slate-500" />
                  </div>
                  <div>
                    <p className="text-xs dark:text-zhs-muted text-slate-500">Budget</p>
                    <p className="text-sm font-medium dark:text-zhs-text text-slate-700">
                      {lead.budget}
                    </p>
                  </div>
                </div>
              )}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg dark:bg-zhs-dark-3 bg-slate-100">
                  <FileText className="h-4 w-4 dark:text-zhs-muted text-slate-500" />
                </div>
                <div className="flex-1">
                  <p className="text-xs dark:text-zhs-muted text-slate-500">Description</p>
                  <p className="mt-1 whitespace-pre-wrap text-sm dark:text-zhs-text text-slate-700 leading-relaxed">
                    {lead.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border dark:border-zhs-border dark:bg-zhs-dark-2/80 border-slate-200 bg-white p-6">
            <h2 className="mb-4 text-lg font-semibold dark:text-zhs-white text-slate-900">
              Status
            </h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm dark:text-zhs-muted text-slate-500">Current</span>
                <Badge variant={statusVariant[lead.status] ?? "default"}>
                  {lead.status}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm dark:text-zhs-muted text-slate-500">Source</span>
                <span className="text-sm dark:text-zhs-text text-slate-700">{lead.source}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm dark:text-zhs-muted text-slate-500">Submitted</span>
                <span className="text-sm dark:text-zhs-text text-slate-700">
                  {new Date(lead.created_at).toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm dark:text-zhs-muted text-slate-500">Updated</span>
                <span className="text-sm dark:text-zhs-text text-slate-700">
                  {new Date(lead.updated_at).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border dark:border-zhs-border dark:bg-zhs-dark-2/80 border-slate-200 bg-white p-6">
            <h2 className="mb-4 text-lg font-semibold dark:text-zhs-white text-slate-900">
              Quick Actions
            </h2>
            <div className="space-y-2">
              <a
                href={`mailto:${lead.email}?subject=${encodeURIComponent("Re: Your Project Inquiry")}&body=${encodeURIComponent(
                  `Hi ${lead.full_name},\n\nThank you for reaching out about ${lead.service}.\n\n`
                )}`}
                className="flex w-full items-center gap-2 rounded-xl border dark:border-zhs-border border-slate-200 px-4 py-2.5 text-sm font-medium dark:text-zhs-text text-slate-700 transition-colors hover:dark:bg-zhs-dark-3 hover:bg-slate-50"
              >
                <Mail className="h-4 w-4" />
                Reply via Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
