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
    id: "seo-faq-1",
    question: "What SEO services does Cinorium offer?",
    answer:
      "Cinorium offers technical SEO, on-page optimization, keyword research, content strategy, content optimization, and digital PR and link authority services. We also work on practices that support visibility across AI-powered search experiences. Services can be scoped individually or combined according to your website and business requirements.",
  },
  {
    id: "seo-faq-2",
    question: "What is included in a technical SEO audit?",
    answer:
      "A technical SEO audit can cover crawlability, indexation, XML sitemaps, robots.txt, canonical URLs, redirects, internal linking, website structure, page performance, Core Web Vitals, and relevant metadata. The audit is tailored to your website's size and complexity, with recommendations prioritized by impact and feasibility.",
  },
  {
    id: "seo-faq-3",
    question: "Can you improve the SEO of an existing website?",
    answer:
      "Yes. We can assess an existing website to identify technical issues, content gaps, search intent mismatches, and opportunities for improvement. The process starts with understanding your website, its current search performance, and your business objectives before recommending the next steps.",
  },
  {
    id: "seo-faq-4",
    question: "Do you work with WordPress and custom-built websites?",
    answer:
      "Yes. SEO improvements can be applied to WordPress websites as well as custom-built platforms such as Next.js. The implementation process differs depending on the technology, but the underlying priorities remain useful content, accessible pages, clear structure, and sound technical foundations.",
  },
  {
    id: "seo-faq-5",
    question: "Do you provide SEO content strategy and optimization?",
    answer:
      "Yes. This can include keyword and topic research, search intent mapping, content gap analysis, editorial planning, and improving existing website pages or articles. Our focus is on useful, accurate, well-structured content rather than increasing word count or repeating keywords unnecessarily.",
  },
  {
    id: "seo-faq-6",
    question: "Can you help improve visibility in AI-powered search?",
    answer:
      "We work on practices that support discoverability across evolving search experiences, including clear and accurate content, descriptive headings, accessible website architecture, structured data, and consistent brand information. These practices can support AI search visibility, but no agency can guarantee inclusion or citations in Google AI Overviews, ChatGPT, Perplexity, or other AI-generated answers.",
  },
  {
    id: "seo-faq-7",
    question: "Do you offer link building and digital PR?",
    answer:
      "Digital PR and link authority work can be included when relevant to your project. This may involve researching industry publications, identifying editorial opportunities, and planning relevant outreach. We prioritize genuine relevance and editorial value rather than purchased links or manipulative link-building tactics. The scope and outcomes depend on your industry, website, and available resources.",
  },
  {
    id: "seo-faq-8",
    question: "How long does SEO take, and can you guarantee rankings?",
    answer:
      "SEO timelines vary according to your website's history, technical condition, content quality, competition, and the consistency of implementation. Some technical improvements may show effects sooner, while building organic visibility and authority generally takes longer. We do not guarantee first-page rankings or specific positions. Instead, we focus on sound improvements and measurable progress over time.",
  },
];

export default function SeoFaq() {
  const [openId, setOpenId] = useState<string | null>("seo-faq-1");

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq) => {
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
                  <MoveRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
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
                <p className="border-t border-gray-100 pt-4 text-sm leading-relaxed text-gray-600 sm:text-base font-light">
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
