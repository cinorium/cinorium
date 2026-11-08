import Link from "next/link";
import { ArrowRight, MoveRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function FinalCta() {
  return (
    <section
      id="contact-cta"
      className="w-full bg-[#0b131e] text-white py-20 sm:py-24 lg:py-28 px-6 sm:px-10 md:px-16 lg:px-24 border-t border-gray-800/80"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        {/* Eyebrow */}
        <Badge
          variant="default"
          dot="amber"
          size="lg"
          className="mb-6 bg-gray-900 border-gray-700"
        >
          Start Your Project Discussion
        </Badge>

        {/* Display Heading */}
        <h2 className="mb-6 max-w-3xl font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white">
          Ready to Turn Online Visibility into Business Growth?
        </h2>

        {/* Supporting Copy */}
        <p className="mb-10 max-w-2xl text-base sm:text-lg text-gray-300 font-light leading-relaxed">
          Tell us about your business, current challenges, and what you want to
          achieve. We'll discuss your needs, explore relevant opportunities, and
          help you understand the next practical steps.
        </p>

        {/* Action CTAs */}
        <div className="flex w-full flex-col sm:flex-row items-center justify-center gap-4 sm:w-auto">
          <Link href="/contact" className="w-full sm:w-auto">
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto gap-2 px-8 py-6 text-base font-semibold shadow-lg"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="h-4 w-4 text-[#0b131e]" />
            </Button>
          </Link>

          <Link href="/services" className="w-full sm:w-auto">
            <Button
              variant="slateOutline"
              size="lg"
              className="w-full sm:w-auto gap-2 px-8 py-6 text-base font-semibold border-gray-700 text-white hover:bg-gray-800 hover:text-white"
            >
              <span>Explore All Services</span>
              <MoveRight className="h-4 w-4 text-white" />
            </Button>
          </Link>
        </div>

        {/* Trust Guarantees */}
        <div className="mt-12 pt-8 border-t border-gray-800/80 w-full max-w-2xl flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs sm:text-sm text-gray-400 font-light">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#ffb703]" />
            Direct Consultation with Founder
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#ffb703]" />
            Clear Written Scope & Deliverables
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#ffb703]" />
            No Unnecessary Marketing Fluff
          </span>
        </div>
      </div>
    </section>
  );
}
