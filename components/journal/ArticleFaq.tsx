"use client";

import React, { useState } from "react";
import { MoveDown } from "lucide-react";

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
    <div className={`my-8 not-prose flex w-full flex-col gap-4 ${className}`}>
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
      className={`group w-full overflow-hidden rounded-2xl border-2 border-black bg-white transition-all duration-200 ${
        isOpen
          ? "shadow-sm"
          : "shadow-xs hover:border-black hover:bg-gray-50/50"
      }`}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-inset"
      >
        <span className="font-heading text-lg font-semibold tracking-tight text-gray-900 sm:text-xl pr-2">
          {question}
        </span>

        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/10 transition-transform duration-200 ${
            isOpen
              ? "rotate-180 bg-amber-400 text-black border-transparent"
              : "bg-gray-100 text-gray-700 group-hover:bg-gray-200"
          }`}
          aria-hidden="true"
        >
          <MoveDown className="h-4 w-4" />
        </span>
      </button>

      {isOpen && (
        <div className="border-t border-gray-100 px-6 pb-6 pt-4 text-sm leading-relaxed text-gray-600 sm:px-7 sm:pb-7 sm:text-base font-light">
          {children}
        </div>
      )}
    </div>
  );
}

export default FaqAccordion;


