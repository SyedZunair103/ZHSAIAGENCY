import type { SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
  placeholder?: string;
}

export default function Select({
  error,
  placeholder,
  children,
  className = "",
  ...props
}: SelectProps) {
  const base =
    "w-full rounded-xl border px-4 py-2.5 text-sm transition-colors outline-none dark:text-zhs-white text-slate-900";
  const normal =
    "dark:border-zhs-border dark:bg-zhs-dark border-slate-200 bg-white focus:border-zhs-accent focus:ring-2 focus:ring-zhs-accent/20";
  const errorState = "dark:border-zhs-rose border-rose-400";

  return (
    <select
      className={`${base} ${error ? errorState : normal} ${className}`}
      {...props}
    >
      {placeholder && (
        <option value="" className="dark:text-zhs-muted text-slate-400">
          {placeholder}
        </option>
      )}
      {children}
    </select>
  );
}
