import React, { useRef, useState } from "react";

type Props = {
  title: string;
  lead: string;
  icon: React.ReactNode;
  onClick: () => void;
  tag?: string;
};

export function SpotlightCard({ title, lead, icon, onClick, tag }: Props) {
  const ref = useRef<HTMLButtonElement | null>(null);
  const [xy, setXy] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setXy({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  return (
    <button
      ref={ref}
      type="button"
      onMouseMove={onMove}
      onFocus={() => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        setXy({ x: r.width / 2, y: r.height / 2 });
      }}
      onClick={onClick}
      style={
        {
          ["--mx" as any]: `${xy.x}px`,
          ["--my" as any]: `${xy.y}px`,
        } as React.CSSProperties
      }
      className={[
        "spotlight group relative overflow-hidden rounded-2xl border p-5 text-left shadow-glow",
        "transition duration-300 ease-out motion-reduce:transition-none",
        "border-slate-200/70 bg-white hover:-translate-y-1 hover:border-slate-300 hover:bg-sky-50/50",
        "dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20 dark:hover:bg-white/[0.05]",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 dark:focus-visible:ring-indigo-400/60",
      ].join(" ")}
    >
      <div className="relative z-[1] flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 rounded-xl border p-2 text-sky-700 border-sky-200 bg-sky-50 dark:border-white/10 dark:bg-white/5 dark:text-indigo-200">
            {icon}
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-base font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                {title}
              </h4>
              {tag ? (
                <span className="rounded-full border px-2 py-0.5 text-[11px] border-slate-200 bg-white text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                  {tag}
                </span>
              ) : null}
            </div>

            <p className="mt-1 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {lead}
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-[1] mt-4 h-px w-full bg-gradient-to-r from-slate-200/0 via-slate-200 to-slate-200/0 dark:from-white/0 dark:via-white/15 dark:to-white/0" />
    </button>
  );
}
