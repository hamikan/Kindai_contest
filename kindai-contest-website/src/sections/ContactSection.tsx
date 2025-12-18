import { Section } from "../components/Section";
import { IconMail } from "../components/Icons";
import { CONTEST, LINKS } from "../data/contest";

export function ContactSection() {
  return (
    <Section id="contact" kicker="CONTACT" title="主催・問い合わせ">
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border p-6 shadow-glow border-slate-200/70 bg-white dark:border-white/10 dark:bg-white/[0.03]">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">主催</h3>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{CONTEST.organizer}</p>

          <div className="mt-5 rounded-xl border p-4 border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5">
            <p className="text-xs text-slate-500 dark:text-slate-400">質問・要望フォーム</p>
            <a
              href={LINKS.contact}
              className="mt-2 inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-semibold transition-colors border-slate-200 bg-slate-50 text-slate-900 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10"
            >
              <IconMail className="h-4 w-4" />
              Google Forms で質問する
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
