import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "success" | "warning" | "danger" | "info";
}

const variantClasses = {
  default:
    "dark:bg-zhs-dark-3 dark:text-zhs-muted bg-slate-100 text-slate-600",
  success:
    "dark:bg-zhs-emerald/10 dark:text-zhs-emerald bg-emerald-50 text-emerald-700",
  warning:
    "dark:bg-zhs-amber/10 dark:text-zhs-amber bg-amber-50 text-amber-700",
  danger:
    "dark:bg-zhs-rose/10 dark:text-zhs-rose bg-rose-50 text-rose-700",
  info:
    "dark:bg-zhs-accent/10 dark:text-zhs-accent bg-indigo-50 text-indigo-700",
};

export default function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variantClasses[variant]}`}
    >
      {children}
    </span>
  );
}
