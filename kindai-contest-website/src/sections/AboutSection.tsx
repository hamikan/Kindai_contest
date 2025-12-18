import { useState } from "react";
import { SpotlightCard } from "../components/SpotlightCard";
import { Modal } from "../components/Modal";
import { Section } from "../components/Section";
import { ABOUT_CARDS } from "../content/cards";

export function AboutSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = activeId ? ABOUT_CARDS.find((c) => c.id === activeId) ?? null : null;

  return (
    <Section id="about" kicker="EXPLORE" title="気になるところを押して確認">
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ABOUT_CARDS.map((c) => (
          <SpotlightCard
            key={c.id}
            title={c.title}
            lead={c.lead}
            tag={c.tag}
            icon={c.icon}
            onClick={() => setActiveId(c.id)}
          />
        ))}
      </div>

      <Modal open={!!active} title={active?.title ?? ""} onClose={() => setActiveId(null)}>
        {active?.detail}
      </Modal>
    </Section>
  );
}
