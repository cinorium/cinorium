import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import Hero from "@/components/Hero";
import HowIHelp from "@/components/HowIHelp";
import IdeasWorthExploring from "@/components/IdeasWorthExploring";
import LearnByCreating from "@/components/LearnByCreating";
import PublishingProducts from "@/components/PublishingProducts";
import PainPoints from "@/components/PainPoints";
import SelectedWork from "@/components/SelectedWork";
import WhatIDo from "@/components/WhatIDo";
import HowWeFixIt from "@/components/HowWeFixIt";
import GrowthVault from "@/components/GrowthVault";
import AboutCinorium from "@/components/AboutCinorium";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <PainPoints />
      <HowWeFixIt />
      <GrowthVault />
      <AboutCinorium />
      {/* <WhatIDo /> */}
      {/* <SelectedWork /> */}
      {/* <HowIHelp /> */}
      {/* <LearnByCreating /> */}
      {/* <IdeasWorthExploring /> */}
      {/* <PublishingProducts /> */}
      <FaqSection />
      <CtaSection />
    </div>
  );
}
