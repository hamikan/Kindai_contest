export const LINKS = {
  form: "https://forms.gle/xxxxxxxxxxxxxxxxx", // TODO: GoogleフォームURLに差し替え
  slack: "#", // TODO: Slack招待の説明ページがあれば。なければ # のままでOK
  contact: "mailto:you@example.com", // TODO: 学内メールなどに差し替え
};

export const CONTEST = {
  title: "近畿大学 学内オンライン競技プログラミングコンテスト",
  organizer: "KDIXLab: 競プロやろうよ",
  badges: ["学内限定", "オンライン", "初心者歓迎", "個人戦"],
  lead:
    "学内で競技プログラミングを楽しむ場をつくり、アルゴリズム・実装力の向上と学生同士の交流を目指します。",

  schedule: {
    date: "未定（1月ごろを予定）",
    timetable: [
      { label: "コンテスト本編", value: "2〜3時間（予定）" },
      { label: "結果発表・解説", value: "Slack, WEBにて公開予定" },
    ],
  },

  venue: {
    place: "オンライン（大学・研究室などから参加）",
    tools: [
      { label: "連絡・アナウンス", value: "Slack（専用チャンネル）" },
      { label: "申し込み", value: "Googleフォーム" },
      { label: "ジャッジ方式", value: "オンラインジャッジ" },
    ],
    required: ["インターネット接続環境", "ノートPC または デスクトップPC"],
  },

  eligibility: {
    target: "本学の学生、院生、教員のみ",
    outside: "学外からの参加：不可（学内限定）",
    experience: "プログラミング経験：不問（初心者〜経験者まで歓迎）",
    account: "個人戦：1人1アカウントで参加",
  },

  format: {
    style: "個人戦",
    timeLimit: "未定（例：2〜3時間を想定）",
    problems: "未定（複数問を予定）",
    languages: "未定（C++ / Python など一般的な言語を想定）",
    ranking: "正答数と解答時間などをもとに決定予定",
  },

  problems: {
    origin: "主催側による自作問題",
    difficulty: "初心者向け〜経験者向けまで用意予定",
    after:
      "コンテスト終了後、問題文・想定解法・解説資料をSlackチャンネル内で公開予定",
  },

  rules: {
    who: "参加者は本学の学生に限る",
    code: "競技中のコードは参加者本人が作成したものに限る",
    internetAllowed: [
      "一般的なリファレンスサイト・公式ドキュメントの閲覧",
      "（例）言語公式リファレンス、標準ライブラリの使い方など",
    ],
    internetForbidden: [
      "AIツールの利用（例：ChatGPT、Copilot、その他コード生成AIなど）",
      "他人に相談したり、コードを書いてもらう行為",
      "問題文をそのまま検索して答えを見るなど、実質的に他人の解答を利用する行為",
    ],
    questions:
      "Slack専用チャンネル内に用意する質問用フォーム（Googleフォーム予定）から運営に質問（予定）。不明点は全参加者に共有する場合があります。",
    scoring: "オンラインジャッジ",
  },

  entry: {
    method: "Googleフォームから事前登録",
    after: [
      "登録してくれた方を、後日運営が専用Slackチャンネルに招待",
      "当日の案内・問題URLなどはSlackで共有予定",
    ],
    period: "受付期間：未定",
    cap: "定員：未定",
  },

  prize: {
    award: "上位入賞者を表彰予定",
    goods: "賞品：未定（決まり次第、Slackや案内ページで告知）",
  },
};
