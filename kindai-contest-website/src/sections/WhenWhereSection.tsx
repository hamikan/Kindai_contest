import { Section } from "../components/Section";
import { CONTEST } from "../data/contest";

export function WhenWhereSection() {
  return (
    <Section id="whenwhere" kicker="WHEN / WHERE" title="日時・会場（オンライン）">
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border p-6 shadow-glow border-slate-200/70 bg-white dark:border-white/10 dark:bg-white/[0.03]">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">開催日時</h3>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            日時：{" "}
            <span className="font-semibold text-slate-900 dark:text-slate-100">
              {CONTEST.schedule.date}
            </span>
          </p>
          <div className="mt-4 space-y-2">
            {CONTEST.schedule.timetable.map((t) => (
              <div key={t.label} className="flex items-center justify-between text-sm">
                <span className="text-slate-700 dark:text-slate-300">{t.label}</span>
                <span className="font-semibold text-slate-900 dark:text-slate-100">{t.value}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-500 dark:text-slate-500">
            決まり次第、このページとSlackで更新します。
          </p>
        </div>

        <div className="rounded-2xl border p-6 shadow-glow border-slate-200/70 bg-white dark:border-white/10 dark:bg-white/[0.03]">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">オンライン運用</h3>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            会場：{" "}
            <span className="font-semibold text-slate-900 dark:text-slate-100">
              {CONTEST.venue.place}
            </span>
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {CONTEST.venue.tools.map((t) => (
              <div
                key={t.label}
                className="rounded-xl border p-4 border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5"
              >
                <p className="text-xs text-slate-500 dark:text-slate-400">{t.label}</p>
                <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {t.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl border p-4 border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5">
            <p className="text-xs text-slate-500 dark:text-slate-400">必要なもの</p>
            <ul className="mt-2 list-inside list-disc text-sm space-y-1 text-slate-700 dark:text-slate-300">
              {CONTEST.venue.required.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
