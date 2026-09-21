import { useEffect, useRef, type ReactNode } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  maxWidth?: string;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = "max-w-lg",
}: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      className={`rounded-2xl border dark:border-zhs-border dark:bg-zhs-dark-2 border-slate-200 bg-white p-0 shadow-xl backdrop:bg-black/50 ${maxWidth} w-full`}
    >
      {isOpen && (
        <div className="p-6">
          {title && (
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-bold dark:text-zhs-white text-slate-900">
                {title}
              </h2>
              <button
                onClick={onClose}
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg dark:text-zhs-muted dark:hover:text-zhs-white text-slate-400 hover:text-slate-900"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          )}
          {children}
        </div>
      )}
    </dialog>
  );
}
