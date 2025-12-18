import React from "react";
import { CONTEST, LINKS } from "../data/contest";
import {
  IconCalendar,
  IconGlobe,
  IconGavel,
  IconMail,
  IconSpark,
  IconTrophy,
  IconUser,
} from "../components/Icons";

export type AboutCard = {
  id: string;
  title: string;
  lead: string;
  tag?: string;
  icon: React.ReactNode;
  detail: React.ReactNode;
};

export const ABOUT_CARDS: AboutCard[] = [
  {
    id: "overview",
    title: "コンテスト概要",
    lead: "学内で競プロを楽しむ場をつくり、実装力・交流を育てます。",
    tag: "目的",
    icon: <IconSpark className="h-5 w-5" />,
    detail: (
      <div className="space-y-3">
        <p className="leading-relaxed text-slate-800 dark:text-slate-200">{CONTEST.lead}</p>
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

        <p className="text-xs text-slate-500 dark:text-slate-400">※ 最新情報はSlackで案内予定です。</p>
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
          <p className="mt-1 font-semibold text-slate-900 dark:text-slate-100">{CONTEST.venue.place}</p>
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
            対象：{" "}
            <span className="font-semibold text-slate-900 dark:text-slate-100">
              {CONTEST.eligibility.target}
            </span>
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
            <div
              key={x.k}
              className="rounded-xl border p-4 border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5"
            >
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
          <p className="mt-1 font-semibold text-slate-900 dark:text-slate-100">
            {CONTEST.entry.method}
          </p>

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
];

