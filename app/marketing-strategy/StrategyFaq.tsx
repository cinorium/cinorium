"use client";

import { useState } from "react";
import { MoveDown, MoveRight } from "lucide-react";
import { strategyFaqs } from "./strategy-faq-data";

export default function StrategyFaq() {
  const [openId, setOpenId] = useState<string | null>("strategy-faq-1");

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <div className="flex flex-col gap-3">
      {strategyFaqs.map((faq) => {
        const isOpen = openId === faq.id;
        const answerId = `${faq.id}-answer`;

        return (
          <div
            key={faq.id}
            className={`w-full rounded-2xl border-2 p-5 transition-colors duration-200 sm:px-6 sm:py-5 ${
              isOpen
                ? "border-[#ffb703] bg-white shadow-sm"
                : "border-black/10 bg-white/70 hover:border-black/30"
            }`}
          >
            <button
              type="button"
              id={`${faq.id}-question`}
              aria-expanded={isOpen}
              aria-controls={answerId}
              onClick={() => toggle(faq.id)}
              className="group flex w-full items-center justify-between gap-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb703] focus-visible:ring-offset-4"
            >
              <span className="min-w-0 font-heading text-base font-bold leading-snug text-gray-900 sm:text-lg">
                {faq.question}
              </span>

              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#faf8f5] text-gray-800 transition-colors group-hover:bg-[#ffb703]/20">
                {isOpen ? (
                  <MoveDown aria-hidden="true" className="h-4 w-4" />
                ) : (
                  <MoveRight aria-hidden="true" className="h-4 w-4" />
                )}
              </span>
            </button>

            <div
              id={answerId}
              role="region"
              aria-labelledby={`${faq.id}-question`}
              hidden={!isOpen}
              className={`mt-3 pt-3 border-t border-black/5 text-xs sm:text-sm leading-relaxed text-gray-600 font-light ${
                !isOpen ? "hidden" : "block"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
