interface LoadingSpinnerProps {
  message?: string;
}

export default function LoadingSpinner({
  message = "Loading...",
}: LoadingSpinnerProps) {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="text-center">
        <div className="mx-auto mb-3 h-8 w-8 animate-spin rounded-full border-2 border-zhs-accent border-t-transparent" />
        <p className="text-sm dark:text-zhs-muted text-slate-500">{message}</p>
      </div>
    </div>
  );
}
