import Link from "next/link";
import { ArrowRight, MoveRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[85vh] w-full flex-col items-center justify-center overflow-hidden bg-blue-100 px-6 py-20 text-center sm:px-10 md:px-20 lg:min-h-screen lg:px-32"
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-3">
        <span className="mb-3 inline-block w-max border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-widest text-gray-800 sm:text-sm">
          Technology · Marketing · Digital Growth
        </span>

        <h1 className="mb-4 font-heading text-3xl font-bold tracking-tight leading-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block">Built for Visibility.</span>
          <span className="block">Designed for Growth.</span>
        </h1>

        <p className="max-w-2xl text-base leading-relaxed text-gray-700 sm:text-lg md:text-xl">
          We don&apos;t just make things look right. We make them work right.
          Cinorium brings web development, SEO, and digital marketing
          together—using deep technical understanding to build digital systems
          that convert and endure.
        </p>

        <div className="mt-6 flex w-full flex-col items-center justify-center gap-3.5 sm:w-auto sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-2xl bg-black px-8 py-4 text-center text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-900 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 sm:w-auto sm:text-base"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="h-4 w-4 text-amber-400" />
          </Link>

          <Link
            href="/services"
            className="inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-2xl border-2 border-black bg-white/80 px-8 py-4 text-center text-sm font-semibold text-gray-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 sm:w-auto sm:text-base"
          >
            <span>Explore Services</span>
            <MoveRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Supporting credibility pill */}
        <div className="mt-8 pt-4 border-t border-black/10 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-gray-600 sm:text-sm">
          <span>Web Development &amp; Tech</span>
          <span className="text-gray-400">•</span>
          <span>SEO &amp; Search Visibility</span>
          <span className="text-gray-400">•</span>
          <span>Digital Marketing Strategy</span>
          <span className="text-gray-400">•</span>
          <span>E-commerce Growth</span>
        </div>
      </div>
    </section>
  );
}
