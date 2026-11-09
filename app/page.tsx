import Hero from "@/components/Hero";
import BusinessChallenges from "@/components/BusinessChallenges";
import IntegratedApproach from "@/components/IntegratedApproach";
import WorkingMethodology from "@/components/WorkingMethodology";
import TechnicalCredibility from "@/components/TechnicalCredibility";
import GrowthVault from "@/components/GrowthVault";
import FinalCta from "@/components/FinalCta";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fdfbf7]">
      {/* 1. Hero: Digital Marketing Agency Value Proposition */}
      <Hero />

      {/* 2. Business Challenges: Common Friction Points in Online Growth */}
      <BusinessChallenges />

      {/* 3. Integrated Approach: Strategy, Search Visibility & Conversion */}
      <IntegratedApproach />

      {/* 4. Working Methodology: 6-Stage Framework */}
      <WorkingMethodology />

      {/* 5. Technical Credibility: Speed as a Marketing Advantage & Performance Evidence */}
      <TechnicalCredibility />

      {/* 6. Growth Vault: Latest Journal Insights & Investigations */}
      <GrowthVault />

      {/* 7. Final Conversion Section: Start Project Discussion */}
      <FinalCta />
    </div>
  );
}
