import { Section } from "../components/Section";
import { CONTEST } from "../data/contest";

export function RulesSection() {
  return (
    <Section id="rules" kicker="RULES" title="ルール（公平性のため重要）">
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border p-6 shadow-glow border-rose-200 bg-rose-50 dark:border-rose-300/20 dark:bg-rose-500/10">
          <h3 className="text-lg font-semibold text-rose-900 dark:text-rose-200">禁止事項</h3>
          <ul className="mt-3 list-inside list-disc text-sm space-y-2 text-rose-800 dark:text-rose-100/90">
            {CONTEST.rules.internetForbidden.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-rose-700 dark:text-rose-100/70">
            ※ 最終ルールは開催前にSlackで明文化します。
          </p>
        </div>

        <div className="rounded-2xl border p-6 shadow-glow border-slate-200/70 bg-white dark:border-white/10 dark:bg-white/[0.03]">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">許可事項</h3>
          <ul className="mt-3 list-inside list-disc text-sm space-y-2 text-slate-700 dark:text-slate-300">
            {CONTEST.rules.internetAllowed.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>

          <div className="mt-5 rounded-xl border p-4 text-sm space-y-2 border-slate-200 bg-slate-50 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
            <p>参加者：{CONTEST.rules.who}</p>
            <p>コード：{CONTEST.rules.code}</p>
            <p>質問対応：{CONTEST.rules.questions}</p>
            <p>採点：{CONTEST.rules.scoring}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
