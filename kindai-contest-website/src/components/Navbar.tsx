import { useEffect, useState } from "react";
import { NAV_SECTIONS } from "../config/sections";
import { LINKS } from "../data/contest";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const sections = NAV_SECTIONS;

  const [active, setActive] = useState<string>("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    if (els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { threshold: [0.2, 0.35, 0.5, 0.7], rootMargin: "-10% 0px -60% 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sections]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={[
        "fixed left-0 right-0 top-0 z-50 transition duration-300 motion-reduce:transition-none",
        scrolled
          ? "bg-white/75 backdrop-blur border-b border-slate-200/70 dark:bg-slate-950/70 dark:border-white/10"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <button
          onClick={() => scrollTo("top")}
          className="group flex items-center gap-2 rounded-lg px-2 py-1 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 dark:focus-visible:ring-indigo-400/60"
          type="button"
        >
          <span className="text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-100">
            KDU ProCon
          </span>
          <span className="hidden text-xs text-slate-500 dark:text-slate-400 sm:inline">
            / 学内オンライン競プロ
          </span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {sections.map((s) => {
            const is = active === s.id;
            return (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={[
                  "rounded-lg px-3 py-1.5 text-sm transition",
                  "hover:bg-slate-100 hover:text-slate-900",
                  "dark:hover:bg-white/5 dark:hover:text-slate-50",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 dark:focus-visible:ring-indigo-400/60",
                  is
                    ? "bg-sky-100 text-slate-900 dark:bg-white/10 dark:text-slate-50"
                    : "text-slate-600 dark:text-slate-300",
                ].join(" ")}
                type="button"
              >
                {s.label}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={LINKS.form}
            className="rounded-lg bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-400 bg-[length:200%_200%] px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:animate-shimmer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 dark:focus-visible:ring-indigo-400/60"
            target="_blank"
            rel="noreferrer"
          >
            参加登録（Googleフォーム）
          </a>
        </div>
      </div>
    </header>
  );
}
