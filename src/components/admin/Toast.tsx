import { useEffect, useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";

interface Toast {
  id: number;
  type: "success" | "error";
  message: string;
}

let toastId = 0;
let listeners: Array<(toasts: Toast[]) => void> = [];
let toasts: Toast[] = [];

function notifyListeners() {
  for (const listener of listeners) {
    listener([...toasts]);
  }
}

export function showToast(type: "success" | "error", message: string) {
  const id = ++toastId;
  toasts = [...toasts, { id, type, message }];
  notifyListeners();

  setTimeout(() => {
    toasts = toasts.filter((t) => t.id !== id);
    notifyListeners();
  }, 3000);
}

export default function ToastContainer() {
  const [items, setItems] = useState<Toast[]>([]);

  useEffect(() => {
    listeners.push(setItems);
    return () => {
      listeners = listeners.filter((l) => l !== setItems);
    };
  }, []);

  if (items.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {items.map((toast) => (
        <div
          key={toast.id}
          className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium shadow-lg backdrop-blur-sm ${
            toast.type === "success"
              ? "dark:border-zhs-emerald/30 dark:bg-zhs-emerald/10 dark:text-zhs-emerald border-emerald-200 bg-emerald-50 text-emerald-700"
              : "dark:border-zhs-rose/30 dark:bg-zhs-rose/10 dark:text-zhs-rose border-rose-200 bg-rose-50 text-rose-700"
          }`}
        >
          {toast.type === "success" ? (
            <CheckCircle className="h-4 w-4 shrink-0" />
          ) : (
            <XCircle className="h-4 w-4 shrink-0" />
          )}
          {toast.message}
        </div>
      ))}
    </div>
  );
}
