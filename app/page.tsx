import AboutMe from "@/components/AboutMe";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import Hero from "@/components/Hero";
import HowIHelp from "@/components/HowIHelp";
import IdeasWorthExploring from "@/components/IdeasWorthExploring";
import LearnByCreating from "@/components/LearnByCreating";
import PublishingProducts from "@/components/PublishingProducts";
import SelectedWork from "@/components/SelectedWork";
import WhatIDo from "@/components/WhatIDo";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhatIDo />
      <SelectedWork />
      <HowIHelp />
      <AboutMe />
      <LearnByCreating />
      <IdeasWorthExploring />
      <PublishingProducts />
      <FaqSection />
      <CtaSection />
    </div>
  );
}
