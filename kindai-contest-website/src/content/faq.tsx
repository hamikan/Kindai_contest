import React from "react";

export type FaqItem = { q: string; a: React.ReactNode };

export const FAQ_ITEMS: FaqItem[] = [
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
        <span className="font-semibold text-slate-900 dark:text-slate-100">formsで希望を募り</span>{" "}
        確定次第、このページとSlackで案内予定です。
        また、formsで使用したい言語に指定された言語に関してはできる限り使えるようにしたいと考えています。
      </>
    ),
  },
  {
    q: "競技中に公式ドキュメントは見ていいですか？",
    a: <>はい。一般的なリファレンス閲覧は許可予定です。</>,
  },
  {
    q: "AIツールは禁止ですか？",
    a: (
      <>
        公平性の観点から、競技中のAIツール（ChatGPT / Copilot 等）の利用は禁止です。
        ルールの最終版は開催前にSlackで明文化します。
      </>
    ),
  },
  {
    q: "問題の解説はありますか？",
    a: <>はい。終了後に解説資料をSlackチャンネル内で公開予定です。</>,
  },
];

