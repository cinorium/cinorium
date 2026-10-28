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
      "Cinorium offers technical SEO audits, on-page optimization, keyword research and content strategy, SEO content optimization, and off-page SEO guidance. These services can be scoped individually or combined depending on what your website and business currently need. Not every service is automatically included in every project — the scope is agreed before work begins.",
  },
  {
    id: "seo-faq-2",
    question: "What is included in a technical SEO audit?",
    answer:
      "A technical SEO audit typically covers crawlability and indexation, XML sitemap and robots.txt configuration, canonical URLs and redirect chains, internal linking and site structure, page speed and Core Web Vitals investigation, and metadata review. The depth and scope of an audit depend on the size and complexity of your website. Recommendations are prioritized by estimated impact and feasibility rather than presented as an overwhelming checklist.",
  },
  {
    id: "seo-faq-3",
    question: "Can you improve the SEO of an existing website?",
    answer:
      "Yes. Whether your website was built recently or has been running for years, there are usually meaningful technical, on-page, or content improvements that can be made. The starting point is understanding your current website, its existing search performance, and the most significant gaps or opportunities relative to your business goals.",
  },
  {
    id: "seo-faq-4",
    question: "Do you work with WordPress and custom-built websites?",
    answer:
      "Yes. SEO work can be applied to both WordPress websites and custom-built websites such as those built with Next.js. The specific implementation steps differ between platforms, but the underlying principles — clean structure, useful content, accessible pages, and sound technical foundations — apply to both.",
  },
  {
    id: "seo-faq-5",
    question: "What is the difference between technical SEO and on-page SEO?",
    answer:
      "Technical SEO focuses on how search engines can crawl, access, and index your website — covering areas like site structure, sitemaps, redirects, canonical tags, page speed, and mobile usability. On-page SEO focuses on the content and structure of individual pages — including headings, metadata, keyword alignment, internal links, and how well a page answers the questions your audience is searching for. Both work together and should be considered in combination.",
  },
  {
    id: "seo-faq-6",
    question: "Do you offer SEO content strategy and content optimization?",
    answer:
      "Yes. This can include identifying relevant search topics and audience questions, mapping search intent to existing or planned pages, developing a practical content roadmap, and improving the clarity, usefulness, and structure of existing website copy or articles. Content optimization focuses on accuracy, usefulness, and editorial quality rather than simply increasing word count or keyword density.",
  },
  {
    id: "seo-faq-7",
    question: "Can you help with Google AI Overviews and AI-powered search?",
    answer:
      "We can work on content practices that support visibility across evolving search experiences — including writing clear, accurate, well-organized content, using descriptive headings, structuring accessible pages, and maintaining consistent business information. However, no agency can guarantee that your website will be cited in Google AI Overviews, ChatGPT responses, or any other AI-generated answer. These systems use their own criteria for selecting content, which is not fully within anyone's control.",
  },
  {
    id: "seo-faq-8",
    question: "Do you offer link building?",
    answer:
      "Off-page SEO and ethical link acquisition can be included in a project scope depending on requirements and suitability. The focus is on relevant outreach, editorial link opportunities, and natural acquisition strategies rather than link purchasing or manipulative tactics. The availability, scope, and expected outcomes of link-building work vary by industry, website history, and available budget — and no specific number of backlinks or ranking improvements can be promised.",
  },
  {
    id: "seo-faq-9",
    question: "How long does SEO take to show results?",
    answer:
      "SEO timelines vary considerably depending on website history, current technical state, content quality, competitive landscape, and how consistently improvements are implemented. Technical fixes can sometimes produce relatively quick improvements, while building organic authority through content and links typically takes months. Setting realistic expectations is part of how we approach every engagement.",
  },
  {
    id: "seo-faq-10",
    question: "Can you guarantee first-page rankings?",
    answer:
      "No. Nobody can honestly guarantee first-page rankings for specific keywords, and anyone who does should be treated with caution. Search rankings are influenced by many factors outside any agency's control, including algorithm changes, competitor activity, domain history, and the quality of your content. We focus on building sound, sustainable SEO foundations and improving meaningful signals over time — not on short-term tactics or unverifiable promises.",
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
                ? "border-amber-400 bg-white"
                : "border-black/10 bg-white/70 hover:border-amber-300"
            }`}
          >
            <button
              type="button"
              id={`${faq.id}-question`}
              aria-expanded={isOpen}
              aria-controls={answerId}
              onClick={() => toggle(faq.id)}
              className="group flex w-full items-center justify-between gap-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-4"
            >
              <span className="font-serif text-base font-semibold leading-snug text-gray-900 sm:text-lg">
                {faq.question}
              </span>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-50 text-gray-800 transition-colors group-hover:bg-amber-100">
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

