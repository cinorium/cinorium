import Link from "next/link";
import { Home, BookOpen } from "lucide-react";

export const metadata = {
  title: "Page Not Found (404) | Cinorium",
  description: "The page you are looking for could not be found.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="w-full bg-blue-100 min-h-[75vh] flex items-center justify-center border-b border-black/10 px-5 sm:px-8 md:px-12 lg:px-16 py-24 sm:py-28 md:py-32">
      <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
        {/* Large Typographic 404 Accent */}
        <span
          aria-hidden="true"
          className="select-none font-serif text-7xl sm:text-8xl md:text-9xl font-bold tracking-tight text-gray-900/15 leading-none mb-2"
        >
          404
        </span>

        {/* Eyebrow */}
        <span className="mb-4 inline-block border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-widest text-gray-800 sm:text-sm">
          404 — Page Not Found
        </span>

        {/* Heading */}
        <h1 className="mb-5 font-serif text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
          Looks like this page took a different route.
        </h1>

        {/* Supporting Copy */}
        <p className="mb-8 max-w-xl text-base leading-relaxed text-gray-700 sm:text-lg">
          The page may have moved, the link may be outdated, or the address may
          be incorrect. Use the pathways below to get back on track.
        </p>

        {/* Actions Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
          <Link
            href="/"
            className="group inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-black px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-900 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 sm:text-base"
          >
            <Home className="h-4 w-4 text-amber-400 shrink-0" aria-hidden="true" />
            <span>Back to Home</span>
          </Link>

          <Link
            href="/journal"
            className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border-2 border-black bg-white/80 px-7 py-3.5 text-sm font-semibold text-gray-900 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 sm:text-base"
          >
            <BookOpen className="h-4 w-4 text-gray-900 shrink-0" aria-hidden="true" />
            <span>Explore Insights</span>
          </Link>
        </div>

        {/* Tertiary Contact Link */}
        <div className="mt-8 pt-6 border-t border-black/10 w-full">
          <p className="text-xs text-gray-600 sm:text-sm">
            Need direct assistance?{" "}
            <Link
              href="/contact"
              className="font-semibold text-gray-900 underline decoration-amber-400 decoration-2 underline-offset-4 hover:text-amber-800 transition-colors"
            >
              Contact Cinorium
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
