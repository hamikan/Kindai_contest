import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

const KEY = "theme";

function safeGetInitialTheme(): Theme {
  const saved = localStorage.getItem(KEY);
  if (saved === "light" || saved === "dark") return saved;

  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
  return prefersDark ? "dark" : "light";
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "light";
    try {
      return safeGetInitialTheme();
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");

    try {
      localStorage.setItem(KEY, theme);
    } catch {}
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return { theme, setTheme, toggle };
}
