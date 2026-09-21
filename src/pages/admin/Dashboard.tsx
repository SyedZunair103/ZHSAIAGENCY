import { LayoutDashboard } from "lucide-react";
import { useAuth } from "../../context/useAuth";

export default function Dashboard() {
  const { user, profile } = useAuth();

  return (
    <div>
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zhs-accent/10 text-zhs-accent">
          <LayoutDashboard className="h-5 w-5" />
        </div>
        <div>
          <h1 className="text-2xl font-bold dark:text-zhs-white text-slate-900">
            Dashboard
          </h1>
          <p className="text-sm dark:text-zhs-muted text-slate-500">
            Welcome{profile?.full_name ? `, ${profile.full_name}` : ""}
            {user?.email ? ` (${user.email})` : ""}. Here's your admin overview.
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { label: "Services", value: "—" },
          { label: "Case Studies", value: "—" },
          { label: "Blog Posts", value: "—" },
          { label: "FAQs", value: "—" },
          { label: "Leads", value: "—" },
        ].map((card) => (
          <div
            key={card.label}
            className="rounded-2xl border dark:border-zhs-border dark:bg-zhs-dark-2/80 border-slate-200 bg-white p-6"
          >
            <p className="text-sm dark:text-zhs-muted text-slate-500">
              {card.label}
            </p>
            <p className="mt-2 text-3xl font-bold dark:text-zhs-white text-slate-900">
              {card.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
