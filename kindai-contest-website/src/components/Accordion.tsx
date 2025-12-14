import React, { useState } from "react";

type Item = { q: string; a: React.ReactNode };

export function Accordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className="rounded-2xl border overflow-hidden shadow-glow border-slate-200/70 bg-white dark:border-white/10 dark:bg-white/[0.03]"
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 dark:hover:bg-white/[0.05] dark:focus-visible:ring-indigo-400/60"
            >
              <span className="font-semibold text-slate-900 dark:text-slate-100">
                {it.q}
              </span>
              <span
                className={[
                  "transition-transform duration-300 motion-reduce:transition-none",
                  "text-slate-500 dark:text-slate-400",
                  isOpen ? "rotate-45" : "rotate-0",
                ].join(" ")}
                aria-hidden="true"
              >
                +
              </span>
            </button>

            <div
              className={[
                "grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              ].join(" ")}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {it.a}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
