import { Section } from "../components/Section";
import { CONTEST } from "../data/contest";

export function FormatSection() {
  return (
    <Section id="format" kicker="FORMAT" title="競技形式・問題">
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border p-6 shadow-glow border-slate-200/70 bg-white dark:border-white/10 dark:bg-white/[0.03]">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">競技形式</h3>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              { k: "形式", v: CONTEST.format.style },
              { k: "制限時間", v: CONTEST.format.timeLimit },
              { k: "問題数", v: CONTEST.format.problems },
              { k: "使用可能言語", v: CONTEST.format.languages },
            ].map((x) => (
              <div
                key={x.k}
                className="rounded-xl border p-4 border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5"
              >
                <p className="text-xs text-slate-500 dark:text-slate-400">{x.k}</p>
                <p className="mt-1 font-semibold text-slate-900 dark:text-slate-100">{x.v}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl border p-4 border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5">
            <p className="text-xs text-slate-500 dark:text-slate-400">順位</p>
            <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">{CONTEST.format.ranking}</p>
          </div>
        </div>

        <div className="rounded-2xl border p-6 shadow-glow border-slate-200/70 bg-white dark:border-white/10 dark:bg-white/[0.03]">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">問題について</h3>
          <div className="mt-4 rounded-xl border p-4 text-sm space-y-2 border-slate-200 bg-slate-50 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
            <p>
              問題：{" "}
              <span className="font-semibold text-slate-900 dark:text-slate-100">
                {CONTEST.problems.origin}
              </span>
            </p>
            <p>難易度：{CONTEST.problems.difficulty}</p>
            <p>公開：{CONTEST.problems.after}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
