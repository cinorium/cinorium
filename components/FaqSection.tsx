
"use client";

import { useState } from "react";
import { MoveDown, MoveRight } from "lucide-react";

const faqData = [
  {
    id: "faq-1",
    question: "What services does Cinorium offer?",
    answer:
      "Cinorium focuses on two connected services: website development and SEO. We build custom and WordPress websites, improve technical and on-page SEO, and help businesses create useful content that supports their search visibility. AI search optimization can also be considered as part of a broader search strategy.",
  },
  {
    id: "faq-2",
    question: "Can I hire you for web development or SEO separately?",
    answer:
      "Yes. You can enquire about a new website, improvements to an existing website, an SEO review, or ongoing search optimization. We can discuss your current needs and determine the most suitable scope before work begins.",
  },
  {
    id: "faq-3",
    question: "How does website development work together with SEO?",
    answer:
      "A website's structure, accessibility, mobile experience, performance and content all affect how useful it is to visitors and how well search engines can understand it. Considering SEO during development can help establish a stronger foundation, although rankings and business results also depend on factors beyond the website itself.",
  },
  {
    id: "faq-4",
    question: "Can you help my business appear in AI-powered search?",
    answer:
      "We can work on clear, useful content, accessible website structure, relevant business information and sound SEO fundamentals that support discovery across evolving search experiences. However, no agency can guarantee that ChatGPT, Google AI Overviews or another AI platform will mention or recommend a particular business.",
  },
  {
    id: "faq-5",
    question: "Do you work with small businesses and new brands?",
    answer:
      "Yes. You can get in touch whether you are launching a new business website, improving an existing online presence, or looking to make your website more useful to potential customers. The recommended approach will depend on your goals, current setup and available budget.",
  },
  {
    id: "faq-6",
    question: "What happens after I enquire about a project?",
    answer:
      "We start by discussing your business, current website or online presence, goals and main challenges. From there, we can identify suitable next steps, clarify the proposed scope and discuss timelines and pricing before any work begins.",
  },
  {
    id: "faq-7",
    question: "How do I get a quote for my project?",
    answer:
      "Contact Cinorium with a short description of your business, the service you need and what you want to achieve. If you already have a website, include its URL. This helps us understand your requirements and discuss a suitable next step.",
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
            Common Questions
          </span>

          <h2
            id="faq-heading"
            className="mb-4 font-serif text-3xl font-bold leading-tight text-gray-900 sm:text-4xl"
          >
            Frequently Asked Questions
          </h2>

          <p className="max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
            Learn how our website development and SEO services work,
            what to expect, and how to discuss your project with Cinorium.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqData.map((faq) => {
            const isOpen = openId === faq.id;
            const answerId = `${faq.id}-answer`;

            return (
              <div
                key={faq.id}
                className={`w-full rounded-2xl border-2 p-5 transition-colors duration-300 sm:px-7 sm:py-6 ${isOpen
                    ? "border-amber-400 bg-white"
                    : "border-black/10 bg-white/60 hover:border-amber-300"
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
                      <MoveDown
                        aria-hidden="true"
                        className="h-5 w-5"
                      />
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
                  className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ease-in-out ${isOpen
                      ? "mt-4 grid-rows-[1fr] opacity-100"
                      : "mt-0 grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-amber-200 pt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
