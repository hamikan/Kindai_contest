import { Navbar } from "./components/Navbar";
import { ScrollProgress } from "./components/ScrollProgress";
import { Footer } from "./components/Footer";
import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";
import { WhenWhereSection } from "./sections/WhenWhereSection";
import { FormatSection } from "./sections/FormatSection";
import { RulesSection } from "./sections/RulesSection";
import { EntrySection } from "./sections/EntrySection";
import { FaqSection } from "./sections/FaqSection";
import { ContactSection } from "./sections/ContactSection";

export default function App() {
  return (
    <div id="top" className="min-h-screen">
      <ScrollProgress />
      <Navbar />

      <HeroSection />
      <AboutSection />
      <WhenWhereSection />
      <FormatSection />
      <RulesSection />
      <EntrySection />
      <FaqSection />
      <ContactSection />

      <Footer />
    </div>
  );
}

