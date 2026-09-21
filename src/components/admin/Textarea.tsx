import type { TextareaHTMLAttributes } from "react";

interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export default function Textarea({
  error,
  className = "",
  ...props
}: TextareaProps) {
  const base =
    "w-full rounded-xl border px-4 py-2.5 text-sm transition-colors outline-none resize-none dark:text-zhs-white text-slate-900 dark:placeholder-zhs-muted/60 placeholder-slate-400";
  const normal =
    "dark:border-zhs-border dark:bg-zhs-dark border-slate-200 bg-white focus:border-zhs-accent focus:ring-2 focus:ring-zhs-accent/20";
  const errorState = "dark:border-zhs-rose border-rose-400";

  return (
    <textarea
      className={`${base} ${error ? errorState : normal} ${className}`}
      {...props}
    />
  );
}
