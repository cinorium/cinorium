"use client";

import { useState } from "react";
import { MoveDown, MoveRight } from "lucide-react";

const faqData = [
  {
    id: "faq-1",
    question: "What does Cinorium do as a digital marketing agency?",
    answer:
      "Cinorium is a technology-driven digital marketing agency. We combine web development, search visibility (SEO), content strategy, and digital marketing into an integrated system. Unlike agencies that separate design from engineering, our differentiator is understanding how digital systems are built under the hood, how search engines and AI crawl them, and how they convert visitors into business inquiries.",
  },
  {
    id: "faq-2",
    question: "What are your four service pillars?",
    answer:
      "Our services are structured across four areas: (1) Web Development & Technology (custom Next.js and clean WordPress platforms), (2) SEO & Search Visibility (technical audits, on-page optimization, content strategy, and AI search discovery), (3) Digital Marketing & Strategy (intent-driven content, brand positioning, and conversion rate optimization), and (4) E-commerce & Growth Systems (store journey optimization and catalog visibility).",
  },
  {
    id: "faq-3",
    question: "Can I engage Cinorium for web development or SEO individually?",
    answer:
      "Yes. While our services are designed to work together, you can hire Cinorium for standalone engagements—such as engineering a new website, redesigning an existing platform, conducting a technical SEO audit, or implementing an on-page search strategy. We tailor the project scope directly to your current business priorities.",
  },
  {
    id: "faq-4",
    question: "How does web development directly impact digital marketing?",
    answer:
      "Your website is the destination for all marketing traffic. If a site takes five seconds to load, has broken layout shifts on mobile, or lacks clean semantic markup, search engine rankings suffer and paid or organic visitors bounce before taking action. Strong technical foundations ensure your marketing spend actually converts.",
  },
  {
    id: "faq-5",
    question: "Do you guarantee rankings or traffic numbers?",
    answer:
      "No, and you should be cautious of any agency that does. Search algorithms and AI citation engines evolve constantly and are controlled exclusively by third-party search platforms. What we guarantee is rigorous technical execution, clean architecture, intent-focused content, and transparent communication based on verified performance metrics.",
  },
  {
    id: "faq-6",
    question: "How do you approach AI search (AEO and GEO)?",
    answer:
      "We structure your business entity data, authoritativeness, and page markup so that modern answer engines—including Perplexity, ChatGPT, and Google AI Overviews—can accurately parse, understand, and cite your services. AI search rewards clarity, technical accessibility, and topical depth.",
  },
  {
    id: "faq-7",
    question: "What is your typical project process?",
    answer:
      "Every project starts with an initial discovery discussion to understand your business model, current digital presence, and commercial targets. From there, we provide a clear written proposal outlining milestones, scope of work, technical specifications, and timelines before any development or optimization begins.",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId((currentId) => (currentId === id ? null : id));
  };

  return (
    <section
      id="faqs"
      aria-labelledby="faq-heading"
      className="w-full border-t border-black/10 bg-amber-50/40 px-6 py-20 sm:px-10 md:px-16 lg:px-24 lg:py-24"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 sm:mb-12">
          <span className="mb-3 inline-block border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-widest text-gray-700 sm:text-sm">
            COMMON QUESTIONS
          </span>

          <h2
            id="faq-heading"
            className="mb-4 font-heading text-3xl font-bold tracking-tight leading-tight text-gray-900 sm:text-4xl"
          >
            Frequently Asked Questions
          </h2>

          <p className="max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base font-light">
            Learn how our technology-driven digital marketing and web development
            approach works, what to expect, and how we collaborate with clients.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqData.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="overflow-hidden rounded-2xl border-2 border-black bg-white transition-all duration-200"
              >
                <button
                  type="button"
                  id={`faq-btn-${faq.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-ans-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-inset sm:p-7"
                >
                  <span className="pr-4 font-heading text-lg font-semibold tracking-tight text-gray-900 sm:text-xl">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/10 transition-transform duration-200 ${
                      isOpen
                        ? "rotate-180 bg-amber-400 text-black"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    <MoveDown className="h-4 w-4" />
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-ans-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${faq.id}`}
                    className="border-t border-gray-100 px-6 pb-6 pt-4 text-sm leading-relaxed text-gray-600 sm:px-7 sm:pb-7 sm:text-base font-light"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
