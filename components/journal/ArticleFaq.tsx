"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqAccordionProps {
  children: React.ReactNode;
  className?: string;
}

interface FaqItemProps {
  question: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

/**
 * Container for FAQ items in articles.
 * Matches Cinorium's brand identity: clean typography, 2px borders,
 * restrained amber accents, and responsive layout.
 */
export function FaqAccordion({ children, className = "" }: FaqAccordionProps) {
  return (
    <div className={`my-8 not-prose flex w-full flex-col gap-3.5 ${className}`}>
      {children}
    </div>
  );
}

/**
 * Individual FAQ accordion item.
 * Provides accessible, smooth interactive disclosure matching
 * Cinorium's FaqSection and service page FAQ patterns.
 */
export function FaqItem({
  question,
  children,
  defaultOpen = false,
}: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className={`group w-full overflow-hidden rounded-2xl border-2 bg-white transition-all duration-200 ${
        isOpen
          ? "border-black shadow-md ring-2 ring-amber-400/20"
          : "border-black shadow-xs hover:-translate-y-0.5 hover:border-black hover:shadow-md"
      }`}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left transition-colors hover:bg-amber-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-inset"
      >
        <span className="font-heading text-lg font-bold tracking-tight text-gray-900 sm:text-xl group-hover:text-black pr-2">
          {question}
        </span>

        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${
            isOpen
              ? "rotate-180 border-black bg-amber-400 text-black shadow-xs"
              : "border-black/10 bg-gray-100 text-gray-700 group-hover:border-black/30 group-hover:bg-amber-100 group-hover:text-black"
          }`}
          aria-hidden="true"
        >
          <ChevronDown className="h-4 w-4" />
        </span>
      </button>

      {isOpen && (
        <div className="border-t border-gray-100 bg-amber-50/15 px-5 pb-6 pt-4 text-base leading-relaxed text-gray-700 sm:px-6 sm:pb-7 sm:text-lg font-light">
          {children}
        </div>
      )}
    </div>
  );
}

export default FaqAccordion;

