import { useState } from "react";
import { Menu, User } from "lucide-react";
import Sidebar from "./Sidebar";
import { useAuth } from "../../context/useAuth";

export default function Topbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user } = useAuth();

  return (
    <>
      <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b dark:border-zhs-border dark:bg-zhs-dark/80 border-slate-200 bg-white/80 px-4 backdrop-blur-sm lg:px-8">
        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(true)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg dark:text-zhs-muted dark:hover:text-zhs-white dark:hover:bg-white/5 text-slate-400 hover:text-slate-900 hover:bg-slate-100 lg:hidden"
          aria-label="Open sidebar"
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Spacer for desktop */}
        <div className="hidden lg:block" />

        {/* User info */}
        {user?.email && (
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg dark:bg-zhs-dark-2 bg-slate-100">
              <User className="h-4 w-4 dark:text-zhs-muted text-slate-500" />
            </div>
            <span className="text-sm dark:text-zhs-muted text-slate-500 hidden sm:inline">
              {user.email}
            </span>
          </div>
        )}
      </header>

      {/* Mobile sidebar */}
      <Sidebar
        isMobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
      />
    </>
  );
}
