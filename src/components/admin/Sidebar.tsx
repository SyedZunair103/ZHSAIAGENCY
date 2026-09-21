import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Bot,
  FolderOpen,
  BookOpen,
  HelpCircle,
  Users,
  Settings,
  LogOut,
  X,
} from "lucide-react";
import Logo from "../brand/Logo";
import { useAuth } from "../../context/useAuth";

const navItems = [
  { label: "Dashboard", path: "/admin", icon: LayoutDashboard },
  { label: "Services", path: "/admin/services", icon: Bot },
  { label: "Case Studies", path: "/admin/case-studies", icon: FolderOpen },
  { label: "Blog", path: "/admin/blog", icon: BookOpen },
  { label: "FAQs", path: "/admin/faqs", icon: HelpCircle },
];

const adminOnlyItems = [
  { label: "Leads", path: "/admin/leads", icon: Users },
  { label: "Settings", path: "/admin/settings", icon: Settings },
];

interface SidebarProps {
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
}

export default function Sidebar({
  isMobileOpen = false,
  onCloseMobile,
}: SidebarProps) {
  const location = useLocation();
  const { isAdmin, signOut } = useAuth();

  const isActive = (path: string) => {
    if (path === "/admin") return location.pathname === "/admin";
    return location.pathname.startsWith(path);
  };

  const handleLogout = async () => {
    await signOut();
    window.location.href = "/admin/login";
  };

  const sidebarContent = (
    <div className="flex h-full flex-col">
      {/* Logo */}
      <div className="flex h-16 items-center justify-between border-b dark:border-zhs-border border-slate-200 px-4">
        <Link to="/admin" className="flex items-center gap-2">
          <Logo tagline={false} />
        </Link>
        {onCloseMobile && (
          <button
            onClick={onCloseMobile}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg dark:text-zhs-muted dark:hover:text-zhs-white text-slate-400 hover:text-slate-900 lg:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={onCloseMobile}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive(item.path)
                  ? "bg-zhs-accent/10 text-zhs-accent"
                  : "dark:text-zhs-muted dark:hover:text-zhs-white dark:hover:bg-white/5 text-slate-500 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}

        {/* Admin-only section */}
        {isAdmin && (
          <div className="pt-4">
            <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider dark:text-zhs-muted/60 text-slate-400">
              Admin
            </p>
            {adminOnlyItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={onCloseMobile}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? "bg-zhs-accent/10 text-zhs-accent"
                      : "dark:text-zhs-muted dark:hover:text-zhs-white dark:hover:bg-white/5 text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        )}
      </nav>

      {/* Logout */}
      <div className="border-t dark:border-zhs-border border-slate-200 p-3">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium dark:text-zhs-muted dark:hover:text-zhs-rose dark:hover:bg-white/5 text-slate-500 hover:text-rose-600 hover:bg-slate-100 transition-colors"
        >
          <LogOut className="h-5 w-5" />
          Sign Out
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="fixed left-0 top-0 z-30 hidden h-full w-64 border-r dark:border-zhs-border dark:bg-zhs-dark border-slate-200 bg-white lg:block">
        {sidebarContent}
      </aside>

      {/* Mobile sidebar overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onCloseMobile}
          />
          <aside className="absolute left-0 top-0 h-full w-64 border-r dark:border-zhs-border dark:bg-zhs-dark border-slate-200 bg-white">
            {sidebarContent}
          </aside>
        </div>
      )}
    </>
  );
}
