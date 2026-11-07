import Link from "next/link";
import { ArrowRight, MoveRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[#fdfbf7] px-6 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 text-center sm:px-10 md:px-20 lg:px-32"
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center">
        {/* Eyebrow Badge */}
        <Badge variant="default" dot="amber" size="lg" className="mb-6">
          Digital Marketing Agency
        </Badge>

        {/* Display Heading — Sora Bold */}
        <h1 className="mb-6 font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-[#0b131e]">
          <span className="block">Built for Visibility.</span>
          <span className="block">Designed for Growth.</span>
        </h1>

        {/* Outcome-focused Value Proposition */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-700 font-light leading-relaxed mb-8">
          We help ambitious businesses build a stronger digital presence, capture high-intent search traffic, and turn online visibility into predictable revenue and growth.
        </p>

        {/* Action CTAs */}
        <div className="flex w-full flex-col sm:flex-row items-center justify-center gap-4 sm:w-auto">
          <Link href="/contact" className="w-full sm:w-auto">
            <Button
              variant="default"
              size="lg"
              className="w-full sm:w-auto gap-2 px-8 py-6 text-base font-semibold shadow-md hover:shadow-lg"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="h-4 w-4 text-[#ffb703]" />
            </Button>
          </Link>

          <Link href="/services" className="w-full sm:w-auto">
            <Button
              variant="slateOutline"
              size="lg"
              className="w-full sm:w-auto gap-2 px-8 py-6 text-base font-semibold"
            >
              <span>Explore Services</span>
              <MoveRight className="h-4 w-4 text-[#0b131e]" />
            </Button>
          </Link>
        </div>

        {/* Supporting Credibility Signals / Feature Tags as Tactile Badges */}
        <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#0b131e]/10 shadow-xs text-xs sm:text-sm font-medium text-[#0b131e]">
            <CheckCircle2 className="w-4 h-4 text-[#ffb703] shrink-0" />
            Digital Marketing Strategy
          </span>
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#0b131e]/10 shadow-xs text-xs sm:text-sm font-medium text-[#0b131e]">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            Search Visibility &amp; SEO
          </span>
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#0b131e]/10 shadow-xs text-xs sm:text-sm font-medium text-[#0b131e]">
            <CheckCircle2 className="w-4 h-4 text-[#ffb703] shrink-0" />
            AI Search (AEO / GEO)
          </span>
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#0b131e]/10 shadow-xs text-xs sm:text-sm font-medium text-[#0b131e]">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            Fast Web Foundation
          </span>
        </div>
      </div>
    </section>
  );
}
