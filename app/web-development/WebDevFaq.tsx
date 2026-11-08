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
      "It depends on your business requirements and how you plan to manage your website. A custom website built with a framework like Next.js can suit projects that need tailored functionality, custom user experiences, or a specific technical architecture. WordPress is often a practical choice for businesses that want to publish articles, update pages, and manage content through a familiar dashboard. We consider your goals, functionality, budget, and future needs before recommending an approach.",
  },
  {
    id: "webdev-faq-2",
    question: "Can you build a website for my existing business?",
    answer:
      "Yes. We can help businesses establish a new online presence or improve an existing one. Whether you currently rely on social media, referrals, or an outdated website, we plan the structure and functionality around your business, audience, and the information customers need to make decisions.",
  },
  {
    id: "webdev-faq-3",
    question: "Do you build websites with SEO in mind?",
    answer:
      "Yes. Our development work considers technical foundations such as semantic HTML, responsive layouts, logical URL structures, metadata, crawlability, and performance. These practices help create a website that is easier to access and understand. However, technical implementation alone does not guarantee search rankings or organic traffic. Ongoing SEO strategy and content work may also be needed.",
  },
  {
    id: "webdev-faq-4",
    question: "Can you redesign or improve an existing website?",
    answer:
      "Yes. We can review an existing website and identify opportunities to improve its structure, mobile usability, performance, appearance, and maintainability. Depending on the condition and requirements of the current website, the work may involve targeted improvements, a redesign, or migration to a different platform. Existing URLs, content, and search visibility considerations are reviewed when relevant.",
  },
  {
    id: "webdev-faq-5",
    question: "Can you build an e-commerce website or product catalogue?",
    answer:
      "Yes. We can develop product catalogue experiences that organize products, categories, images, and product information for easier browsing. Depending on your requirements, the website can support product inquiries or a complete purchasing journey with checkout and payment functionality. The platform, integrations, and exact scope are agreed before development begins.",
  },
  {
    id: "webdev-faq-6",
    question: "Do you provide website maintenance and ongoing support?",
    answer:
      "Ongoing maintenance and technical support can be discussed as part of your project or as a separate arrangement. Depending on the platform and agreed scope, this may include updates, backups, security checks, troubleshooting, performance reviews, and feature improvements. The exact responsibilities and support arrangements are defined before work begins.",
  },
  {
    id: "webdev-faq-7",
    question: "How much does a business website cost?",
    answer:
      "The cost depends on the number of pages, design requirements, functionality, platform, content readiness, and any specialized integrations. After understanding your requirements, we provide a clear project scope and quotation so you know what is included before work starts.",
  },
  {
    id: "webdev-faq-8",
    question: "How long does a website project take?",
    answer:
      "Timelines depend on the website's size, functionality, content requirements, and feedback process. A straightforward business website generally requires less work than a custom platform or e-commerce project. We establish realistic milestones after reviewing the scope, required materials, and dependencies.",
  },
];

export default function WebDevFaq() {
  const [openId, setOpenId] = useState<string | null>("webdev-faq-1");

  const toggleFaq = (id: string) => {
    setOpenId((currentId) => (currentId === id ? null : id));
  };

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq) => {
        const isOpen = openId === faq.id;
        const answerId = `${faq.id}-answer`;

        return (
          <div
            key={faq.id}
            className={`w-full min-w-0 rounded-2xl border-2 p-5 transition-colors duration-300 sm:px-6 sm:py-5 ${
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
              onClick={() => toggleFaq(faq.id)}
              className="group flex w-full min-w-0 items-center justify-between gap-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb703] focus-visible:ring-offset-4"
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
                <p className="border-t border-gray-100 pt-4 text-sm leading-relaxed text-gray-600 font-light sm:text-base">
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
