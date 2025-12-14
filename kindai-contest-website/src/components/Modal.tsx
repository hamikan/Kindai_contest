import React, { useEffect, useRef } from "react";

type ModalProps = {
  open: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
};

export function Modal({ open, title, onClose, children }: ModalProps) {
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;

    document.body.classList.add("modal-open");
    const prev = document.activeElement as HTMLElement | null;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    requestAnimationFrame(() => closeRef.current?.focus());

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKeyDown);
      prev?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80]">
      <button
        aria-label="閉じる"
        className="absolute inset-0 cursor-default bg-slate-950/25 backdrop-blur-sm dark:bg-black/60"
        onClick={onClose}
      />

      <div className="relative mx-auto flex min-h-full max-w-3xl items-center px-4 py-10">
        <div
          className={[
            "relative w-full rounded-2xl border shadow-glow",
            "transition duration-300 ease-out motion-reduce:transition-none",
            "animate-fadeUp",
            "border-slate-200/70 bg-white/90",
            "dark:border-white/10 dark:bg-slate-950/80",
          ].join(" ")}
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          <div className="flex items-start justify-between gap-4 border-b px-5 py-4 border-slate-200/70 dark:border-white/10">
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-400">DETAIL</p>
              <h3 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                {title}
              </h3>
            </div>

            <button
              ref={closeRef}
              onClick={onClose}
              className="rounded-lg border px-3 py-1.5 text-sm transition-colors border-slate-200 bg-slate-50 text-slate-800 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10 dark:focus-visible:ring-indigo-400/60"
            >
              閉じる
            </button>
          </div>

          <div className="px-5 py-5 text-slate-800 dark:text-slate-200">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
