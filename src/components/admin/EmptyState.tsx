import type { ReactNode } from "react";

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description: string;
  action?: ReactNode;
}

export default function EmptyState({
  icon,
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <div className="py-16 text-center">
      {icon && (
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl dark:bg-zhs-dark-2 bg-slate-100 dark:text-zhs-muted text-slate-400">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold dark:text-zhs-white text-slate-900">
        {title}
      </h3>
      <p className="mt-2 text-sm dark:text-zhs-muted text-slate-500">
        {description}
      </p>
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
