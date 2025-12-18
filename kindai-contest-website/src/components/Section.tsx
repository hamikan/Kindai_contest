import React from "react";

type Props = {
  id: string;
  kicker: string;
  title: string;
  children: React.ReactNode;
};

export function Section({ id, kicker, title, children }: Props) {
  return (
    <section id={id} className="scroll-mt-24 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 dark:text-slate-400">
          {kicker}
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-3xl">
          {title}
        </h2>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}

