import { CONTEST, LINKS } from "../data/contest";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.14] dark:opacity-[0.22]" />
      <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-500/15 blur-3xl dark:bg-indigo-500/20" />
      <div className="absolute -top-10 right-[-120px] h-[420px] w-[420px] rounded-full bg-sky-500/15 blur-3xl dark:bg-sky-500/20" />
      <div className="absolute bottom-[-140px] left-[-140px] h-[520px] w-[520px] rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-28 sm:pt-32">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="flex flex-wrap gap-2">
              {CONTEST.badges.map((b) => (
                <span
                  key={b}
                  className="rounded-full border px-3 py-1 text-xs border-slate-200/70 bg-white/70 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                >
                  {b}
                </span>
              ))}
            </div>

            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
              {CONTEST.title}
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700 dark:text-slate-300">
              {CONTEST.lead}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={LINKS.form}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-400 bg-[length:200%_200%] px-5 py-3 font-semibold text-white shadow-glow transition hover:animate-shimmer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 dark:focus-visible:ring-indigo-400/60"
              >
                参加登録（Googleフォーム）
              </a>

              <button
                type="button"
                onClick={() =>
                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center justify-center rounded-xl border px-5 py-3 font-semibold transition-colors border-slate-200 bg-white/70 text-slate-900 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10 dark:focus-visible:ring-indigo-400/60"
              >
                詳細を見る
              </button>
            </div>

            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
              主催：<span className="text-slate-800 dark:text-slate-200">{CONTEST.organizer}</span>
            </p>
          </div>

          {/* code card */}
          <div className="rounded-2xl border p-5 shadow-glow border-slate-200/70 bg-white/70 dark:border-white/10 dark:bg-slate-950/50">
            <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 dark:text-slate-400">
              QUICK GLANCE
            </p>

            <div className="mt-4 space-y-3">
              <div className="rounded-xl border p-4 border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5">
                <p className="text-sm text-slate-600 dark:text-slate-300">開催</p>
                <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {CONTEST.schedule.date}
                </p>
              </div>

              <div className="rounded-xl border p-4 border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5">
                <p className="text-sm text-slate-600 dark:text-slate-300">形式</p>
                <p className="mt-1 font-semibold text-slate-900 dark:text-slate-100">
                  {CONTEST.format.style} / オンライン
                </p>
                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                  競技中：AIツール利用は禁止予定
                </p>
              </div>

              <pre className="overflow-hidden rounded-xl border p-4 text-xs leading-relaxed border-slate-900/10 bg-slate-950/90 text-slate-100 dark:border-white/10 dark:bg-black/40 dark:text-slate-200">
{`for (let i = 0; i < N; i++) {
  // 試して、直して、速くする
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
