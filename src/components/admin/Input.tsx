import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export default function Input({ error, className = "", ...props }: InputProps) {
  const base =
    "w-full rounded-xl border px-4 py-2.5 text-sm transition-colors outline-none dark:text-zhs-white text-slate-900 dark:placeholder-zhs-muted/60 placeholder-slate-400";
  const normal =
    "dark:border-zhs-border dark:bg-zhs-dark border-slate-200 bg-white focus:border-zhs-accent focus:ring-2 focus:ring-zhs-accent/20";
  const errorState = "dark:border-zhs-rose border-rose-400";

  return (
    <input
      className={`${base} ${error ? errorState : normal} ${className}`}
      {...props}
    />
  );
}
