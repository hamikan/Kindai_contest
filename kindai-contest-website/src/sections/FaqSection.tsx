import { Accordion } from "../components/Accordion";
import { Section } from "../components/Section";
import { FAQ_ITEMS } from "../content/faq";

export function FaqSection() {
  return (
    <Section id="faq" kicker="FAQ" title="よくある質問">
      <Accordion items={FAQ_ITEMS} />
    </Section>
  );
}
