import Link from "next/link";
import { ArrowRight, MoveRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const capabilities = [
  "Digital Marketing Strategy",
  "Search Visibility & SEO",
  "Content & Audience Engagement",
  "E-commerce & Growth Systems",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[#fdfbf7] px-6 pt-24 pb-16 text-center sm:px-10 sm:pt-28 sm:pb-20 md:px-20 md:pt-32 lg:px-32"
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center">
        <Badge variant="default" dot="amber" size="lg" className="mb-6">
          Digital Marketing Agency
        </Badge>

        <h1 className="mb-6 font-heading text-4xl font-bold leading-[1.08] tracking-tight text-[#0b131e] sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block">Built for Visibility.</span>
          <span className="block">Designed for Growth.</span>
        </h1>

        <p className="mb-8 max-w-2xl text-base font-light leading-relaxed text-gray-700 sm:text-lg md:text-xl">
          We help businesses strengthen their digital presence, reach the right
          audiences, turn interest into meaningful action, and build a stronger
          foundation for sustainable growth.
        </p>

        <div className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-[#0b131e] bg-[#0b131e] px-8 py-4 text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg sm:w-auto"
          >
            Discuss Your Project
            <ArrowRight className="h-4 w-4 text-[#ffb703]" />
          </Link>

          <Link
            href="/services"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-[#0b131e] bg-transparent px-8 py-4 text-base font-semibold text-[#0b131e] transition-all hover:-translate-y-0.5 hover:bg-[#0b131e]/5 sm:w-auto"
          >
            Explore Services
            <MoveRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:mt-12 sm:gap-3">
          {capabilities.map((capability) => (
            <span
              key={capability}
              className="inline-flex items-center gap-2 rounded-full border border-[#0b131e]/10 bg-white px-3.5 py-1.5 text-xs font-medium text-[#0b131e] shadow-xs sm:text-sm"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 text-[#ffb703]" />
              {capability}
            </span>
          ))}
        </div>

        <p className="mt-5 text-xs font-medium tracking-wide text-[#0b131e]/75 sm:text-sm">
          Supported by thoughtful website development and technical
          optimization.
        </p>
      </div>
    </section>
  );
}
