import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section className="w-full bg-amber-50/40 py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto flex flex-col items-start">
        {/* Top Eyebrow Label with Yellow Underline */}
        <span className="inline-block text-[11px] font-semibold tracking-wider text-gray-700 uppercase mb-4 border-b-2 border-amber-400 pb-0.5">
          HAVE A PROJECT IN MIND?
        </span>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-tight mb-4 max-w-3xl">
          Let's Build Something That Moves Your Business Forward.
        </h2>

        {/* Subtitle Paragraph */}
        <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed mb-8 max-w-2xl">
          Tell me what you're working on, what you want to improve, and where
          you want to go. Let's explore the right next step for your business.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          {/* Primary Amber Button */}
          <Link href="/contact">
            <Button className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-medium px-8 py-6 rounded-full text-sm sm:text-base shadow-none transition-all duration-300">
              Start a Project
            </Button>
          </Link>

          {/* Outline Button */}
          <Link href="/work">
            <Button
              variant="outline"
              className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-medium px-8 py-6 rounded-full text-sm sm:text-base transition-all duration-300"
            >
              View My Work
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
