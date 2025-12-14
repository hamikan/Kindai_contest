import React from "react";
import { useTheme } from "../hooks/useTheme";

function SunIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 2v2.2M12 19.8V22M4.2 12H2M22 12h-2.2M5.2 5.2l1.6 1.6M17.2 17.2l1.6 1.6M18.8 5.2l-1.6 1.6M6.8 17.2l-1.6 1.6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M21 14.5A8.5 8.5 0 0 1 9.5 3a7 7 0 1 0 11.5 11.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      className={[
        "inline-flex items-center justify-center rounded-lg border px-2.5 py-2 transition-colors",
        "border-slate-200 bg-white/70 text-slate-700 hover:bg-slate-100",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70",
        "dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10",
        "dark:focus-visible:ring-indigo-400/60",
      ].join(" ")}
      aria-label="テーマを切り替える"
      title={isDark ? "ライトテーマに切り替え" : "ダークテーマに切り替え"}
    >
      {isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
    </button>
  );
}
