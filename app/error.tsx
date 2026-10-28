"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RotateCcw, Home } from "lucide-react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to console (or an error tracking service if configured)
    console.error("Application error captured by error boundary:", error);
  }, [error]);

  return (
    <div className="w-full bg-blue-100 min-h-[75vh] flex items-center justify-center border-b border-black/10 px-5 sm:px-8 md:px-12 lg:px-16 py-24 sm:py-28 md:py-32">
      <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
        {/* Large Typographic 500 Accent */}
        <span
          aria-hidden="true"
          className="select-none font-serif text-7xl sm:text-8xl md:text-9xl font-bold tracking-tight text-gray-900/15 leading-none mb-2"
        >
          500
        </span>

        {/* Eyebrow */}
        <span className="mb-4 inline-block border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-widest text-gray-800 sm:text-sm">
          Something went wrong
        </span>

        {/* Heading */}
        <h1 className="mb-5 font-serif text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
          An unexpected error occurred.
        </h1>

        {/* Supporting Copy */}
        <p className="mb-8 max-w-xl text-base leading-relaxed text-gray-700 sm:text-lg">
          We encountered an issue while loading this page. You can try refreshing
          the page, returning to the homepage, or getting in touch if the problem
          persists.
        </p>

        {/* Actions Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => reset()}
            className="group inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-black px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-900 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 sm:text-base cursor-pointer"
          >
            <RotateCcw className="h-4 w-4 text-amber-400 shrink-0" aria-hidden="true" />
            <span>Try Again</span>
          </button>

          <Link
            href="/"
            className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border-2 border-black bg-white/80 px-7 py-3.5 text-sm font-semibold text-gray-900 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 sm:text-base"
          >
            <Home className="h-4 w-4 text-gray-900 shrink-0" aria-hidden="true" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Tertiary Contact Link */}
        <div className="mt-8 pt-6 border-t border-black/10 w-full">
          <p className="text-xs text-gray-600 sm:text-sm">
            Need help or seeing this repeatedly?{" "}
            <Link
              href="/contact"
              className="font-semibold text-gray-900 underline decoration-amber-400 decoration-2 underline-offset-4 hover:text-amber-800 transition-colors"
            >
              Contact Cinorium
            </Link>
          </p>
          {error.digest && (
            <p className="mt-2 text-xs text-gray-500 font-mono">
              Reference code: {error.digest}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
