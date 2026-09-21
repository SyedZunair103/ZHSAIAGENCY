import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export default function AdminNotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold dark:text-zhs-dark-3 text-slate-100">
          404
        </h1>
        <p className="mt-2 text-lg font-semibold dark:text-zhs-white text-slate-900">
          Page Not Found
        </p>
        <p className="mt-2 text-sm dark:text-zhs-muted text-slate-500">
          The admin page you're looking for doesn't exist.
        </p>
        <Link
          to="/admin"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-zhs-accent px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-zhs-accent-3"
        >
          <Home className="h-4 w-4" />
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
