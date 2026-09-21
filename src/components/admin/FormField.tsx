import type { ReactNode } from "react";

interface FormFieldProps {
  label: string;
  htmlFor?: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
  hint?: string;
}

export default function FormField({
  label,
  htmlFor,
  error,
  required,
  children,
  hint,
}: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-medium dark:text-zhs-text text-slate-700"
      >
        {label}
        {required && <span className="text-zhs-rose ml-0.5">*</span>}
      </label>
      {children}
      {hint && !error && (
        <p className="mt-1 text-xs dark:text-zhs-muted/60 text-slate-400">
          {hint}
        </p>
      )}
      {error && <p className="mt-1 text-xs text-zhs-rose">{error}</p>}
    </div>
  );
}
