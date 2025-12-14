import React, { useMemo, useState } from "react";
import { CONTEST, LINKS } from "./data/contest";
import { Navbar } from "./components/Navbar";
import { ScrollProgress } from "./components/ScrollProgress";
import { SpotlightCard } from "./components/SpotlightCard";
import { Modal } from "./components/Modal";
import { Accordion } from "./components/Accordion";
import { Footer } from "./components/Footer";
import {
  IconCalendar,
  IconGlobe,
  IconGavel,
  IconMail,
  IconSpark,
  IconTrophy,
  IconUser,
} from "./components/Icons";

type Card = {
  id: string;
  title: string;
  lead: string;
  tag?: string;
  icon: React.ReactNode;
  detail: React.ReactNode;
};

function Section({
  id,
  kicker,
  title,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  children: React.ReactNode;
}) {
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

export default function App() {
  const [active, setActive] = useState<Card | null>(null);

  const cards: Card[] = useMemo(
    () => [
      {
        id: "overview",
        title: "コンテスト概要",
        lead: "学内で競プロを楽しむ場をつくり、実装力・交流を育てます。",
        tag: "目的",
        icon: <IconSpark className="h-5 w-5" />,
        detail: (
          <div className="space-y-3">
            <p className="leading-relaxed text-slate-800 dark:text-slate-200">
              {CONTEST.lead}
            </p>
            <ul className="list-inside list-disc text-sm space-y-1 text-slate-700 dark:text-slate-300">
              <li>学内で競技プログラミングを楽しむ場をつくる</li>
              <li>アルゴリズム・実装力の向上</li>
              <li>プログラミングに興味のある学生同士の交流</li>
            </ul>
          </div>
        ),
      },
      {
        id: "date",
        title: "開催日時",
        lead: "日時・タイムテーブルは調整中。確定次第更新します。",
        tag: "未定あり",
        icon: <IconCalendar className="h-5 w-5" />,
        detail: (
          <div className="space-y-4">
            <div className="rounded-xl border p-4 border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5">
              <p className="text-sm text-slate-600 dark:text-slate-300">日時</p>
              <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100">
                {CONTEST.schedule.date}
              </p>
            </div>

            <div className="rounded-xl border p-4 border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5">
              <p className="text-sm text-slate-600 dark:text-slate-300">タイムテーブル（予定）</p>
              <div className="mt-3 space-y-2">
                {CONTEST.schedule.timetable.map((t) => (
                  <div key={t.label} className="flex items-center justify-between gap-4 text-sm">
                    <span className="text-slate-700 dark:text-slate-300">{t.label}</span>
                    <span className="font-semibold text-slate-900 dark:text-slate-100">{t.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              ※ 最新情報はSlackで案内予定です。
            </p>
          </div>
        ),
      },
      {
        id: "venue",
        title: "会場・形式",
        lead: "オンライン開催。Slackで案内し、オンラインジャッジで採点します。",
        tag: "オンライン",
        icon: <IconGlobe className="h-5 w-5" />,
        detail: (
          <div className="space-y-4">
            <div className="rounded-xl border p-4 border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5">
              <p className="text-sm text-slate-600 dark:text-slate-300">会場</p>
              <p className="mt-1 font-semibold text-slate-900 dark:text-slate-100">
                {CONTEST.venue.place}
              </p>
            </div>

            <div className="rounded-xl border p-4 border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5">
              <p className="text-sm text-slate-600 dark:text-slate-300">使用ツール</p>
              <div className="mt-3 space-y-2">
                {CONTEST.venue.tools.map((t) => (
                  <div key={t.label} className="text-sm">
                    <span className="text-slate-700 dark:text-slate-300">{t.label}：</span>
                    <span className="font-semibold text-slate-900 dark:text-slate-100">{t.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border p-4 border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5">
              <p className="text-sm text-slate-600 dark:text-slate-300">必要なもの</p>
              <ul className="mt-2 list-inside list-disc text-sm space-y-1 text-slate-700 dark:text-slate-300">
                {CONTEST.venue.required.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
        ),
      },
      {
        id: "who",
        title: "対象・参加条件",
        lead: "本学の学生のみ。初心者〜経験者まで歓迎です。",
        tag: "学内限定",
        icon: <IconUser className="h-5 w-5" />,
        detail: (
          <div className="space-y-3">
            <div className="rounded-xl border p-4 text-sm space-y-2 border-slate-200 bg-slate-50 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              <p>
                対象：<span className="font-semibold text-slate-900 dark:text-slate-100">{CONTEST.eligibility.target}</span>
              </p>
              <p>{CONTEST.eligibility.outside}</p>
              <p>{CONTEST.eligibility.experience}</p>
              <p>{CONTEST.eligibility.account}</p>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              “初参加”でも楽しめる難易度帯を用意する予定です（詳細は確定次第更新）。
            </p>
          </div>
        ),
      },
      {
        id: "style",
        title: "競技形式",
        lead: "個人戦。制限時間・問題数・対応言語は確定次第公開します。",
        tag: "個人戦",
        icon: <IconSpark className="h-5 w-5" />,
        detail: (
          <div className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { k: "形式", v: CONTEST.format.style },
                { k: "制限時間", v: CONTEST.format.timeLimit },
                { k: "問題数", v: CONTEST.format.problems },
                { k: "使用可能言語", v: CONTEST.format.languages },
              ].map((x) => (
                <div key={x.k} className="rounded-xl border p-4 border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5">
                  <p className="text-sm text-slate-600 dark:text-slate-300">{x.k}</p>
                  <p className="mt-1 font-semibold text-slate-900 dark:text-slate-100">{x.v}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border p-4 border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5">
              <p className="text-sm text-slate-600 dark:text-slate-300">順位</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {CONTEST.format.ranking}
              </p>
            </div>
          </div>
        ),
      },
      {
        id: "rules",
        title: "ルール（重要）",
        lead: "公平性のため、競技中のAIツール利用は禁止予定です。",
        tag: "要チェック",
        icon: <IconGavel className="h-5 w-5" />,
        detail: (
          <div className="space-y-4">
            <div className="rounded-xl border p-4 border-rose-200 bg-rose-50 dark:border-rose-300/20 dark:bg-rose-500/10">
              <p className="text-sm font-semibold text-rose-900 dark:text-rose-200">
                競技中：AIツール利用は禁止（予定）
              </p>
              <p className="mt-1 text-sm leading-relaxed text-rose-800 dark:text-rose-100/90">
                {CONTEST.rules.internetForbidden[0]}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border p-4 border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5">
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">許可</p>
                <ul className="mt-2 list-inside list-disc text-sm space-y-1 text-slate-700 dark:text-slate-300">
                  {CONTEST.rules.internetAllowed.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border p-4 border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5">
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">禁止</p>
                <ul className="mt-2 list-inside list-disc text-sm space-y-1 text-slate-700 dark:text-slate-300">
                  {CONTEST.rules.internetForbidden.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-xl border p-4 text-sm space-y-2 border-slate-200 bg-slate-50 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              <p>参加条件：{CONTEST.rules.who}</p>
              <p>コード：{CONTEST.rules.code}</p>
              <p>質問対応：{CONTEST.rules.questions}</p>
              <p>採点：{CONTEST.rules.scoring}</p>
            </div>
          </div>
        ),
      },
      {
        id: "entry",
        title: "申し込み",
        lead: "Googleフォーム登録 → 後日Slack招待 → 当日案内はSlackで共有。",
        tag: "手順",
        icon: <IconMail className="h-5 w-5" />,
        detail: (
          <div className="space-y-4">
            <div className="rounded-xl border p-4 border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5">
              <p className="text-sm text-slate-600 dark:text-slate-300">申込方法</p>
              <p className="mt-1 font-semibold text-slate-900 dark:text-slate-100">{CONTEST.entry.method}</p>

              <a
                href={LINKS.form}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 dark:bg-white/10 dark:text-slate-100 dark:hover:bg-white/15"
              >
                フォームを開く →
              </a>
            </div>

            <div className="rounded-xl border p-4 border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5">
              <p className="text-sm text-slate-600 dark:text-slate-300">登録後の流れ</p>
              <ol className="mt-2 list-inside list-decimal text-sm space-y-1 text-slate-700 dark:text-slate-300">
                {CONTEST.entry.after.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ol>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border p-4 border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5">
                <p className="text-sm text-slate-700 dark:text-slate-300">{CONTEST.entry.period}</p>
              </div>
              <div className="rounded-xl border p-4 border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5">
                <p className="text-sm text-slate-700 dark:text-slate-300">{CONTEST.entry.cap}</p>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: "prize",
        title: "表彰・賞品",
        lead: "上位入賞者を表彰予定。賞品は決まり次第告知します。",
        tag: "更新あり",
        icon: <IconTrophy className="h-5 w-5" />,
        detail: (
          <div className="space-y-3">
            <div className="rounded-xl border p-4 text-sm space-y-2 border-slate-200 bg-slate-50 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              <p>{CONTEST.prize.award}</p>
              <p>{CONTEST.prize.goods}</p>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              賞品が確定したら、このページ or Slack で追記する運用がスムーズです。
            </p>
          </div>
        ),
      },
    ],
    []
  );

  const faqItems = useMemo(
    () => [
      {
        q: "初心者でも参加できますか？",
        a: (
          <>
            参加できます。対象は{" "}
            <span className="font-semibold text-slate-900 dark:text-slate-100">本学の学生、院生、教員</span>{" "}
            で、プログラミング経験は不問です。初心者向け〜経験者向けまで難易度帯を用意する予定です。
          </>
        ),
      },
      {
        q: "使える言語は決まっていますか？",
        a: (
          <>
            現在未定ですが、{" "}
            <span className="font-semibold text-slate-900 dark:text-slate-100">C++ / Python</span>{" "}
            など一般的な言語を想定しています。確定次第、このページとSlackで案内予定です。
          </>
        ),
      },
      {
        q: "競技中に公式ドキュメントは見ていいですか？",
        a: <>はい。一般的なリファレンス閲覧は許可予定です。</>,
      },
      {
        q: "AIツールは本当に禁止ですか？",
        a: (
          <>
            公平性の観点から、競技中のAIツール（ChatGPT / Copilot 等）の利用は禁止予定です。
            ルールの最終版は開催前にSlackで明文化します。
          </>
        ),
      },
      {
        q: "問題の解説はありますか？",
        a: <>はい。終了後に解説資料をSlackチャンネル内で公開予定です。</>,
      },
    ],
    []
  );

  return (
    <div id="top" className="min-h-screen">
      <ScrollProgress />
      <Navbar />

      {/* HERO */}
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
{`// 競プロは "思考の筋トレ" みたいなもの
for (let i = 0; i < N; i++) {
  // 試して、壊して、直して、速くする
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <Section id="about" kicker="EXPLORE" title="気になるところを押して確認">

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <SpotlightCard
              key={c.id}
              title={c.title}
              lead={c.lead}
              tag={c.tag}
              icon={c.icon}
              onClick={() => setActive(c)}
            />
          ))}
        </div>

        <Modal open={!!active} title={active?.title ?? ""} onClose={() => setActive(null)}>
          {active?.detail}
        </Modal>
      </Section>

      {/* WHEN/WHERE */}
      <Section id="whenwhere" kicker="WHEN / WHERE" title="日時・会場（オンライン）">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border p-6 shadow-glow border-slate-200/70 bg-white dark:border-white/10 dark:bg-white/[0.03]">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">開催日時</h3>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
              日時：<span className="font-semibold text-slate-900 dark:text-slate-100">{CONTEST.schedule.date}</span>
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
              会場：<span className="font-semibold text-slate-900 dark:text-slate-100">{CONTEST.venue.place}</span>
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {CONTEST.venue.tools.map((t) => (
                <div key={t.label} className="rounded-xl border p-4 border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5">
                  <p className="text-xs text-slate-500 dark:text-slate-400">{t.label}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-slate-100">{t.value}</p>
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

      {/* FORMAT */}
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
                <div key={x.k} className="rounded-xl border p-4 border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5">
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
                問題：<span className="font-semibold text-slate-900 dark:text-slate-100">{CONTEST.problems.origin}</span>
              </p>
              <p>難易度：{CONTEST.problems.difficulty}</p>
              <p>公開：{CONTEST.problems.after}</p>
            </div>

            <div className="mt-4 rounded-xl border p-4 border-slate-900/10 bg-slate-950/90 text-slate-100 dark:border-white/10 dark:bg-black/30 dark:text-slate-200">
              <p className="text-xs text-slate-300 dark:text-slate-400">ヒント</p>
              <p className="mt-1 text-sm leading-relaxed">
                “速く書く”より“正しく考える”が勝ち筋です。  
                まずは参加して、解説で伸びるやつ。
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* RULES */}
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

      {/* ENTRY */}
      <Section id="entry" kicker="ENTRY" title="申し込み方法">
        <div className="rounded-2xl border p-6 shadow-glow border-slate-200/70 bg-white dark:border-white/10 dark:bg-white/[0.03]">
          <ol className="grid gap-3 md:grid-cols-3">
            {[
              { s: "STEP 1", t: "Googleフォームで登録", d: CONTEST.entry.method },
              { s: "STEP 2", t: "Slackへ招待", d: CONTEST.entry.after[0] },
              { s: "STEP 3", t: "当日案内を受け取る", d: CONTEST.entry.after[1] },
            ].map((x) => (
              <li key={x.s} className="rounded-xl border p-4 border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5">
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

      {/* FAQ */}
      <Section id="faq" kicker="FAQ" title="よくある質問">
        <Accordion items={faqItems} />
      </Section>

      {/* CONTACT */}
      <Section id="contact" kicker="CONTACT" title="主催・問い合わせ">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border p-6 shadow-glow border-slate-200/70 bg-white dark:border-white/10 dark:bg-white/[0.03]">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">主催</h3>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{CONTEST.organizer}</p>

            <div className="mt-5 rounded-xl border p-4 border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs text-slate-500 dark:text-slate-400">連絡先（予定）</p>
              <a
                href={LINKS.contact}
                className="mt-2 inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-semibold transition-colors border-slate-200 bg-slate-50 text-slate-900 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10"
              >
                <IconMail className="h-4 w-4" />
                メールで問い合わせ
              </a>
            </div>
          </div>

          <div className="rounded-2xl border p-6 shadow-glow border-slate-200/70 bg-white dark:border-white/10 dark:bg-white/[0.03]">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">表彰・賞品</h3>
            <div className="mt-4 rounded-xl border p-4 text-sm space-y-2 border-slate-200 bg-slate-50 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              <p>{CONTEST.prize.award}</p>
              <p>{CONTEST.prize.goods}</p>
            </div>

            <div className="mt-4 rounded-xl border p-4 border-slate-900/10 bg-slate-950/90 text-slate-100 dark:border-white/10 dark:bg-black/30 dark:text-slate-200">
              <p className="text-xs text-slate-300 dark:text-slate-400">運営メモ（便利）</p>
              <p className="mt-1 text-sm leading-relaxed">
                “未定”が確定したら <span className="font-semibold text-white dark:text-slate-100">contest.ts</span>{" "}
                を更新するだけで、全ページに反映されます。
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
