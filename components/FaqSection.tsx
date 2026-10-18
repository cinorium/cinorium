"use client";

import React, { useState } from "react";
import { MoveDown, MoveRight } from "lucide-react";

const faqData = [
  {
    id: "faq-1",
    question: "What digital marketing services do you offer?",
    answer:
      "I work across search visibility, SEO, content and social media, websites, and creative execution. The exact scope depends on your business goals and the requirements of your project.",
  },
  {
    id: "faq-2",
    question: "Do you work with small businesses and startups?",
    answer:
      "Yes, my services are intended to support businesses that want to strengthen their online presence. We can first discuss your goals, current setup, and priorities to determine what makes sense for your business.",
  },
  {
    id: "faq-3",
    question: "Can you build a website and help market it?",
    answer:
      "Yes. Website development and digital marketing can work together, from creating a useful website to improving its search visibility, content, and visitor journey. The services included will be agreed upon before work begins.",
  },
  {
    id: "faq-4",
    question: "Do you offer SEO and AI-search optimization?",
    answer:
      "My focus includes SEO and improving how useful, well-structured content can be discovered. I also explore emerging areas such as answer engine optimization (AEO) and generative engine optimization (GEO). No particular search ranking or AI citation can be guaranteed.",
  },
  {
    id: "faq-5",
    question: "Can I hire you for graphic design or creative work only?",
    answer:
      "Yes. Projects can focus on graphic design and creative assets when that is the main requirement. We can discuss the deliverables and scope before starting.",
  },
  {
    id: "faq-6",
    question: "How does your project process work?",
    answer:
      "We begin by discussing your goals, requirements, and priorities. From there, I outline a suitable scope, deliverables, timeline, and pricing before work begins.",
  },
  {
    id: "faq-7",
    question: "How can I get a quote for my project?",
    answer:
      "Use the contact form to share a little about your business, what you need, and your main goal. I can then review the requirements and discuss the next steps with you.",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full bg-blue-100 py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-3">
            FAQ (Frequently Asked Questions)
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-lg font-light leading-relaxed">
            A few answers to help you understand how I work and whether we're a
            good fit.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {faqData.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="w-full border-2 border-amber-400 rounded-3xl p-5 sm:px-8 sm:py-5 transition-all duration-300"
              >
                {/* Question Row */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between text-left gap-4 focus:outline-none group"
                >
                  <span className="text-base sm:text-lg font-serif font-medium text-gray-900">
                    {faq.question}
                  </span>

                  {/* Icon with smooth rotation transition */}
                  <span className="shrink-0 text-gray-700 transition-transform duration-300">
                    {isOpen ? (
                      <MoveDown className="w-5 h-5 text-gray-800" />
                    ) : (
                      <MoveRight className="w-5 h-5 text-gray-800 group-hover:translate-x-1 transition-transform" />
                    )}
                  </span>
                </button>

                {/* Smooth Expandable Content using CSS Grid */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-4 pt-3 border-t border-amber-400"
                      : "grid-rows-[0fr] opacity-0 mt-0 pt-0 border-t-0"
                  }`}
                >
                  <div className="overflow-hidden text-sm sm:text-base text-gray-600 leading-relaxed font-light">
                    {faq.answer}
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
