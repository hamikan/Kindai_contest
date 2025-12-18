import { Section } from "../components/Section";
import { CONTEST, LINKS } from "../data/contest";

export function EntrySection() {
  return (
    <Section id="entry" kicker="ENTRY" title="申し込み方法">
      <div className="rounded-2xl border p-6 shadow-glow border-slate-200/70 bg-white dark:border-white/10 dark:bg-white/[0.03]">
        <ol className="grid gap-3 md:grid-cols-3">
          {[
            { s: "STEP 1", t: "Googleフォームで登録", d: CONTEST.entry.method },
            { s: "STEP 2", t: "Slackへ招待", d: CONTEST.entry.after[0] },
            { s: "STEP 3", t: "当日案内を受け取る", d: CONTEST.entry.after[1] },
          ].map((x) => (
            <li
              key={x.s}
              className="rounded-xl border p-4 border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5"
            >
              <p className="text-xs text-slate-500 dark:text-slate-400">{x.s}</p>
              <p className="mt-1 font-semibold text-slate-900 dark:text-slate-100">{x.t}</p>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{x.d}</p>
            </li>
          ))}
        </ol>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={LINKS.form}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-400 bg-[length:200%_200%] px-5 py-3 font-semibold text-white shadow-glow transition hover:animate-shimmer"
          >
            参加登録（Googleフォーム）
          </a>

          <div className="flex-1 rounded-xl border p-4 text-sm border-slate-200 bg-slate-50 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
            <p>{CONTEST.entry.period}</p>
            <p className="mt-1">{CONTEST.entry.cap}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
