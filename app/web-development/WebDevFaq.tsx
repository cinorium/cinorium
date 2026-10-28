"use client";

import { useState } from "react";
import { MoveDown, MoveRight } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: "webdev-faq-1",
    question: "Should I choose a custom website or WordPress?",
    answer:
      "It depends on your business requirements. A custom website (built with modern frameworks like Next.js) is ideal for businesses that prioritize speed, bespoke product catalogues, tailored user journeys and minimal plugin dependencies. WordPress is well-suited for businesses that need a familiar editorial workflow to publish articles or update page content regularly. We evaluate your goals and recommend the platform that best fits your needs rather than forcing a single technology.",
  },
  {
    id: "webdev-faq-2",
    question: "Can you build a website for my existing business?",
    answer:
      "Yes. Whether your business currently relies on social media, offline referrals, or an outdated website, we can build a modern online presence from scratch. We work with established companies, service providers, local businesses and growing brands to design websites that clearly present what they offer.",
  },
  {
    id: "webdev-faq-3",
    question: "Do you build websites with SEO in mind?",
    answer:
      "Yes. Every website we build includes solid technical SEO foundations: clean URL structures, semantic HTML5 markup, responsive layouts, metadata configuration, crawlability and page speed considerations. While sound technical development creates an essential foundation for discovery, it does not automatically guarantee specific search rankings or traffic volumes on its own.",
  },
  {
    id: "webdev-faq-4",
    question: "Can you redesign or improve an existing website?",
    answer:
      "Yes. If your current website is slow, hard to use on mobile devices, visually dated, or difficult to maintain, we can evaluate its existing architecture and implement targeted improvements. Redesign projects can range from structural and responsive polish to a complete re-platforming, depending on what best serves your business.",
  },
  {
    id: "webdev-faq-5",
    question: "Do you provide website maintenance and ongoing support?",
    answer:
      "Ongoing maintenance and technical support are available options that we can discuss based on your requirements. For WordPress sites, this can cover plugin updates, backups and security monitoring. For custom builds, we deliver clean, documented code and remain available for feature additions, performance reviews and continued improvements.",
  },
  {
    id: "webdev-faq-6",
    question: "How much does a business website cost?",
    answer:
      "Website costs vary depending on the scope of work, technical complexity, custom design requirements, content readiness and whether specialized catalogue or CMS functionality is required. We discuss your objectives and provide a clear, transparent scope and fixed quote before work begins, with no unexpected hidden costs.",
  },
  {
    id: "webdev-faq-7",
    question: "How long does a website project take?",
    answer:
      "Project timelines depend on the size of the website, custom feature requirements, and how quickly content, branding assets and feedback are available. During the planning stage, we establish realistic milestone estimates based on your project's specific scope.",
  },
];

export default function WebDevFaq() {
  const [openId, setOpenId] = useState<string | null>("webdev-faq-1");

  const toggleFaq = (id: string) => {
    setOpenId((currentId) => (currentId === id ? null : id));
  };

  return (
    <div className="flex flex-col gap-4">
      {faqs.map((faq) => {
        const isOpen = openId === faq.id;
        const answerId = `${faq.id}-answer`;

        return (
          <div
            key={faq.id}
            className={`w-full rounded-2xl border-2 p-5 transition-colors duration-300 sm:px-7 sm:py-6 ${
              isOpen
                ? "border-amber-400 bg-white"
                : "border-black/10 bg-white/70 hover:border-amber-300"
            }`}
          >
            <button
              type="button"
              id={`${faq.id}-question`}
              aria-expanded={isOpen}
              aria-controls={answerId}
              onClick={() => toggleFaq(faq.id)}
              className="group flex w-full items-center justify-between gap-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-4"
            >
              <span className="font-serif text-base font-semibold leading-snug text-gray-900 sm:text-lg">
                {faq.question}
              </span>

              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-50 text-gray-800 transition-colors group-hover:bg-amber-100">
                {isOpen ? (
                  <MoveDown aria-hidden="true" className="h-5 w-5" />
                ) : (
                  <MoveRight
                    aria-hidden="true"
                    className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
                  />
                )}
              </span>
            </button>

            <div
              id={answerId}
              role="region"
              aria-labelledby={`${faq.id}-question`}
              aria-hidden={!isOpen}
              className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ease-in-out ${
                isOpen
                  ? "mt-4 grid-rows-[1fr] opacity-100"
                  : "mt-0 grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="border-t border-amber-200/80 pt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
