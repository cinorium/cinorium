import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function FinalCta() {
  return (
    <section
      id="contact-cta"
      className="w-full bg-[#0b131e] text-white py-20 sm:py-24 lg:py-28 px-6 sm:px-10 md:px-16 lg:px-24 border-t border-gray-800/80"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <Badge
          variant="default"
          dot="amber"
          size="lg"
          className="mb-6 bg-gray-900 border-gray-700"
        >
          Ready to Turn Online Visibility into Business Growth?
        </Badge>

        <h2 className="mb-6 max-w-3xl font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white">
          Ready to Turn Online Visibility into Business Growth?
        </h2>

        <p className="mb-9 max-w-2xl text-base sm:text-lg text-gray-300 font-light leading-relaxed">
          Tell us about your business, what you're trying to achieve, and where
          you're facing challenges. We'll explore your needs and discuss
          practical ways forward.
        </p>

        <div className="flex w-full flex-col sm:flex-row items-center justify-center gap-5 sm:w-auto">
          <Link
            href="/contact"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#ffb703] px-8 py-4 text-base font-semibold text-[#0b131e] hover:bg-[#ffc52b] transition-colors"
          >
            Discuss Your Project
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-[#ffb703] transition-colors"
          >
            Explore Our Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800/80 w-full max-w-2xl flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm text-gray-400 font-light">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#ffb703]" />
            Direct Consultation with Founder
          </span>

          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#ffb703]" />
            Clear Scope & Deliverables
          </span>

          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#ffb703]" />
            Practical, Business-Focused Advice
          </span>
        </div>
      </div>
    </section>
  );
}
