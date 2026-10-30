import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function CtaSection() {
  const whatsappUrl =
    "https://wa.me/923212481412?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20website%20or%20marketing%20project.";

  return (
    <section
      id="contact-cta"
      className="w-full border-t border-black/10 bg-blue-100 px-6 py-20 sm:px-10 md:px-20 lg:px-32 lg:py-24"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col items-start">
        <span className="mb-4 inline-block w-max border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-widest text-gray-800 sm:text-sm">
          LET&apos;S TALK ABOUT YOUR PROJECT
        </span>

        <h2 className="mb-5 max-w-3xl font-heading text-3xl font-bold tracking-tight leading-tight text-gray-900 sm:text-4xl md:text-5xl">
          Built for Visibility. Designed for Growth.
        </h2>

        <p className="mb-8 max-w-2xl text-sm leading-relaxed text-gray-700 sm:text-base md:text-lg font-light">
          We don&apos;t just make things look right. We make them work right.
          Whether you need a high-performance web platform, a technical SEO
          audit, or an integrated marketing strategy, let&apos;s evaluate your
          requirements and map out a practical roadmap.
        </p>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
          <Link
            href="/contact"
            className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl bg-black px-7 py-4 text-center text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 sm:w-auto sm:text-base"
          >
            <span>Start a Conversation</span>
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform group-hover:translate-x-1 text-amber-400"
            />
          </Link>

          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl border-2 border-black bg-white/80 px-7 py-4 text-center text-sm font-semibold text-gray-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 sm:w-auto sm:text-base"
          >
            <MessageCircle className="h-5 w-5 text-emerald-700" />
            <span>Chat on WhatsApp</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
