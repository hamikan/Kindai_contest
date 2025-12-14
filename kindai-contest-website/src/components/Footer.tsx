import React from "react";
import { CONTEST, LINKS } from "../data/contest";

export function Footer() {
  return (
    <footer className="border-t bg-white/80 border-slate-200/70 dark:bg-slate-950/60 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row">
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              {CONTEST.title}
            </p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              主催：{CONTEST.organizer}
            </p>
            <p className="mt-3 text-xs text-slate-500 dark:text-slate-500">
              ※ 本ページの内容は予告なく変更される場合があります。最新情報はSlackで案内予定です。
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href={LINKS.form}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border px-4 py-2 text-sm transition-colors border-slate-200 bg-slate-50 text-slate-800 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
            >
              参加登録
            </a>
            <a
              href={LINKS.contact}
              className="rounded-lg border px-4 py-2 text-sm transition-colors border-slate-200 bg-slate-50 text-slate-800 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
            >
              お問い合わせ
            </a>
          </div>
        </div>

        <div className="mt-8 h-px w-full bg-gradient-to-r from-slate-200/0 via-slate-200 to-slate-200/0 dark:from-white/0 dark:via-white/10 dark:to-white/0" />

        <p className="mt-6 text-xs text-slate-500 dark:text-slate-500">
          © {new Date().getFullYear()} {CONTEST.organizer}
        </p>
      </div>
    </footer>
  );
}
