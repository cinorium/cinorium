import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "About Cinorium | Digital Marketing & Growth Agency",
  description:
    "Discover Cinorium, a digital marketing and growth agency connecting business-first strategy, search visibility, content, customer acquisition and technical foundations.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Cinorium | Digital Marketing & Growth Agency",
    description:
      "Learn how Cinorium connects digital marketing strategy, search visibility, content and technology to support sustainable business growth.",
    url: "https://www.cinorium.com/about",
    type: "website",
  },
};

const workingStages = [
  {
    step: "01",
    title: "Understand",
    description:
      "Understand your business model, audience, products or services, current digital presence and the challenges affecting growth.",
  },
  {
    step: "02",
    title: "Assess",
    description:
      "Review your website, search presence, marketing activities and customer journey to identify gaps and opportunities.",
  },
  {
    step: "03",
    title: "Prioritize",
    description:
      "Identify the most relevant channels, improvements and actions based on your objectives, resources and business priorities.",
  },
  {
    step: "04",
    title: "Implement",
    description:
      "Put the agreed strategy into action through relevant marketing activities, content improvements and technical implementation.",
  },
  {
    step: "05",
    title: "Measure",
    description:
      "Evaluate meaningful indicators such as visibility, engagement, enquiries and website performance against defined objectives.",
  },
  {
    step: "06",
    title: "Improve",
    description:
      "Use findings and performance data to refine the approach, address new opportunities and improve the overall customer journey.",
  },
];

const principles = [
  {
    number: "01",
    title: "Look Deeper",
    description:
      "Understand the business behind the brief. We look beyond individual marketing tasks to examine the underlying challenges, customer needs and opportunities.",
  },
  {
    number: "02",
    title: "Build Smarter",
    description:
      "Make informed decisions before investing time and resources. We prioritize purposeful strategies, useful technology and solutions that support real business objectives.",
  },
  {
    number: "03",
    title: "Grow Better",
    description:
      "Focus on sustainable progress rather than shortcuts. We value meaningful visibility, stronger customer relationships and continuous improvement over vanity metrics.",
  },
];

const capabilities = [
  {
    number: "01",
    tier: "Strategy & Planning",
    title: "Marketing Strategy & Planning",
    description:
      "A business-first approach to planning marketing activities around your audience, commercial objectives and customer journey.",
    points: [
      "Business and audience understanding",
      "Marketing strategy and channel planning",
      "Customer journey and conversion planning",
    ],
    href: "/services",
    cta: "Explore Our Services",
  },
  {
    number: "02",
    tier: "Search & Discovery",
    title: "Search Visibility & SEO",
    description:
      "Improve how people discover, understand and evaluate your business through search engines and emerging AI-powered discovery platforms.",
    points: [
      "Technical and on-page SEO",
      "Keyword research and content architecture",
      "Local SEO, AEO and GEO foundations",
    ],
    href: "/seo-services",
    cta: "Explore Search Visibility",
  },
  {
    number: "03",
    tier: "Content & Engagement",
    title: "Content & Social Media Marketing",
    description:
      "Develop useful, relevant content that communicates your value, supports audience discovery and helps build stronger customer relationships.",
    points: [
      "Content planning and editorial direction",
      "Brand messaging and content development",
      "Social media strategy and distribution",
    ],
    href: "/services",
    cta: "Explore Our Services",
  },
  {
    number: "04",
    tier: "Acquisition & Advertising",
    title: "Paid Advertising & Customer Acquisition",
    description:
      "Plan and manage paid campaigns to reach relevant audiences, support customer acquisition and make better use of advertising budgets.",
    points: [
      "Google Ads and search campaigns",
      "Meta Ads and paid social campaigns",
      "Campaign measurement and optimization",
    ],
    href: "/services",
    cta: "Explore Our Services",
  },
  {
    number: "05",
    tier: "Retention & E-commerce",
    title: "Email, E-commerce & Customer Growth",
    description:
      "Connect customer communication, online shopping experiences and retention activities to support stronger long-term customer relationships.",
    points: [
      "Email campaigns and marketing automation",
      "E-commerce marketing and customer experience",
      "Retention, loyalty and customer growth",
    ],
    href: "/services",
    cta: "Explore Our Services",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.cinorium.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About",
          item: "https://www.cinorium.com/about",
        },
      ],
    },
    {
      "@type": "AboutPage",
      "@id": "https://www.cinorium.com/about#webpage",
      url: "https://www.cinorium.com/about",
      name: "About Cinorium | Digital Marketing & Growth Agency",
      description:
        "Learn about Cinorium's business-first approach to digital marketing, search visibility, content, customer acquisition and technical foundations.",
      mainEntity: {
        "@id": "https://www.cinorium.com/#organization",
      },
    },
  ],
};

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* 1. Hero */}
      <section
        id="about-hero"
        className="w-full border-b border-black/10 bg-[#fdfbf7] px-6 pb-16 pt-28 sm:px-10 sm:pb-20 sm:pt-36 md:px-16 lg:px-24"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-4">
            <Badge variant="default" dot="amber" size="lg">
              About Cinorium
            </Badge>
          </div>

          <h1 className="mb-6 max-w-4xl font-heading text-3xl font-bold leading-[1.1] tracking-tight text-[#0b131e] sm:text-4xl md:text-5xl lg:text-6xl">
            Built for Visibility. Designed for Growth.
          </h1>

          <p className="mb-8 max-w-3xl text-base font-light leading-relaxed text-gray-700 sm:text-lg">
            Cinorium is a digital marketing and growth agency focused on helping
            businesses build a stronger digital presence. We connect marketing
            strategy, search visibility, content and customer experience with
            the technical foundations that support them. Because effective
            digital growth requires more than disconnected marketing activities.
          </p>

          <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
            <Link href="/contact">
              <Button
                variant="secondary"
                size="lg"
                className="w-full gap-2 sm:w-auto"
              >
                <span>Discuss Your Goals</span>
                <ArrowRight className="h-4 w-4 text-[#0b131e]" />
              </Button>
            </Link>

            <Link href="/services">
              <Button
                variant="slateOutline"
                size="lg"
                className="w-full sm:w-auto"
              >
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. The Thinking Behind Cinorium */}
      <section
        id="the-thinking"
        className="w-full border-b border-black/10 bg-white px-6 py-16 sm:px-10 sm:py-20 md:px-16 lg:px-24 lg:py-24"
      >
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <Badge variant="secondary" size="sm" className="mb-3">
                Beyond the Surface
              </Badge>

              <h2 className="mb-6 font-heading text-3xl font-bold leading-tight tracking-tight text-[#0b131e] sm:text-4xl">
                Digital growth starts with understanding what is happening
                beneath the surface.
              </h2>

              <div className="space-y-4 text-base font-light leading-relaxed text-gray-700">
                <p>
                  A business can invest in a new website, publish content,
                  improve its social presence and run marketing campaigns
                  without seeing the progress it expected. Often, the problem is
                  not a lack of activity. It is a lack of connection between
                  those activities.
                </p>

                <p>
                  Marketing cannot work in isolation from the business it
                  represents. The website, customer journey, search presence,
                  messaging and conversion experience all influence how
                  effectively a business attracts and serves its audience.
                </p>

                <p>
                  Cinorium brings these elements together. We approach digital
                  marketing with an understanding of the systems behind it,
                  examining how different parts of a digital presence work
                  together before deciding what needs to change.
                </p>

                <p>
                  Technology and AI can make execution more efficient, but tools
                  alone do not create a sound strategy. Understanding the
                  problem, making informed decisions and maintaining quality
                  remain essential.
                </p>
              </div>
            </div>

            {/* Founder-led callout */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border-2 border-black bg-[#faf8f5] p-7 shadow-sm sm:p-9">
                <div className="mb-4">
                  <Badge variant="amber" size="sm">
                    Founder-Led Agency
                  </Badge>
                </div>

                <h3 className="mb-3 font-heading text-xl font-bold tracking-tight text-[#0b131e] sm:text-2xl">
                  Direct Involvement. Clear Accountability.
                </h3>

                <p className="mb-6 text-sm font-light leading-relaxed text-gray-600">
                  Cinorium is founded and led by Muhammad Huzaifa. The approach
                  combines marketing, design and technical understanding to look
                  at business challenges from more than one perspective. Clients
                  benefit from direct communication, considered recommendations
                  and a clear understanding of the work being undertaken.
                </p>

                <div className="flex flex-col gap-2.5 border-t border-gray-200 pt-5 text-xs font-medium text-[#0b131e]">
                  <p>Direct founder involvement</p>
                  <p>Business-first recommendations</p>
                  <p>Technical and marketing alignment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Marketing Capabilities */}
      <section
        id="capabilities-overview"
        className="w-full border-b border-black/10 bg-[#faf8f5] px-6 py-16 sm:px-10 sm:py-20 md:px-16 lg:px-24 lg:py-24"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 sm:mb-12">
            <Badge variant="default" dot="amber" size="sm" className="mb-3">
              What We Focus On
            </Badge>

            <h2 className="mb-3 font-heading text-3xl font-bold leading-tight tracking-tight text-[#0b131e] sm:text-4xl md:text-5xl">
              Connected Capabilities. One Growth Direction.
            </h2>

            <p className="max-w-2xl text-base font-light leading-relaxed text-gray-600 sm:text-lg">
              Our capabilities cover the key areas of digital marketing and
              growth. Each has a distinct role, but they are most effective when
              planned around the same business objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 lg:gap-5">
            {capabilities.map((item) => (
              <Card
                key={item.number}
                variant="tactile"
                className="grid h-full grid-rows-[auto_1fr_auto] bg-white p-5 sm:p-6"
              >
                <CardHeader className="mb-4 grid grid-rows-[auto_3.5rem_1fr] p-0">
                  <div className="mb-4 flex min-h-10 items-center justify-between gap-3">
                    <span className="font-modak text-3xl text-slate-500 sm:text-4xl">
                      {item.number}
                    </span>

                    <Badge variant="secondary" size="sm">
                      {item.tier}
                    </Badge>
                  </div>

                  <div className="grid grid-rows-[1fr] items-start">
                    <CardTitle className="font-heading text-xl font-bold text-[#0b131e] sm:text-2xl">
                      {item.title}
                    </CardTitle>
                  </div>

                  <CardDescription className="mt-3 text-sm font-light leading-relaxed text-gray-600">
                    {item.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="mb-4 p-0">
                  <div className="border-t border-gray-200 pt-4">
                    <span className="mb-3 block text-xs font-semibold uppercase tracking-wider text-gray-800">
                      Focus Areas
                    </span>

                    <ul className="space-y-2">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-xs text-gray-600 sm:text-sm"
                        >
                          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ffb703]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="mt-auto border-t border-[#0b131e]/5 p-0 pt-4">
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-[#0b131e] transition-colors hover:text-amber-700"
                  >
                    {item.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Supporting Technical Foundation */}
          <div className="mt-8 rounded-2xl border-2 border-black bg-[#0b131e] p-7 text-white sm:p-9">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <div className="mb-4">
                  <Badge variant="amber" size="sm">
                    Supporting Foundation
                  </Badge>
                </div>

                <h3 className="mb-3 font-heading text-2xl font-bold sm:text-3xl">
                  Technology That Supports Marketing.
                </h3>

                <p className="text-sm font-light leading-relaxed text-gray-300 sm:text-base">
                  Websites, technical performance and implementation influence
                  how effectively marketing works. Our web engineering
                  capability supports search visibility, usability and
                  conversion objectives through purposeful technical solutions.
                </p>
              </div>

              <Link href="/web-development" className="shrink-0">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full gap-2 md:w-auto"
                >
                  Explore Web Engineering
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Working Methodology */}
      <section
        id="methodology"
        className="w-full border-b border-gray-800/80 bg-[#0b131e] px-6 py-20 text-white sm:px-10 sm:py-24 md:px-16 lg:px-24"
      >
        <div className="mx-auto w-full max-w-5xl">
          <div className="mb-12 text-center md:mb-14 md:text-left">
            <Badge
              variant="default"
              dot="amber"
              className="mb-3 border-gray-700 bg-gray-900"
            >
              How We Work
            </Badge>

            <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              A Clearer Approach to Digital Growth.
            </h2>

            <p className="max-w-2xl text-base font-light leading-relaxed text-gray-400 sm:text-lg">
              Every business has different needs. Our working framework provides
              a structured way to understand the situation, prioritize the right
              actions and improve through ongoing evaluation.
            </p>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {workingStages.map((stage) => (
              <Card
                key={stage.step}
                variant="dark"
                className="grid h-full grid-rows-[auto_1fr] border border-gray-800 bg-[#0f1724] p-5 transition-colors hover:border-gray-700 sm:p-6"
              >
                <CardHeader className="grid grid-rows-[auto_1.5rem] p-0 pb-2">
                  <div className="mb-1 flex min-h-10 items-center justify-between">
                    <span className="font-modak text-4xl leading-none text-brand-amber select-none sm:text-5xl">
                      {stage.step}
                    </span>

                    <span className="font-mono text-[11px] uppercase tracking-wider text-gray-500">
                      Stage {stage.step}
                    </span>
                  </div>

                  <CardTitle className="min-h-[2rem] font-heading text-xl text-white sm:text-2xl">
                    {stage.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-grow p-0">
                  <CardDescription className="text-sm font-light leading-relaxed text-gray-400">
                    {stage.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-gray-800 bg-[#0f1724]/80 p-5 text-xs font-light leading-relaxed text-gray-400 sm:p-6 sm:text-sm">
            <strong className="font-semibold text-white">
              A Flexible Working Approach:
            </strong>{" "}
            Not every engagement requires all six stages in the same way. The
            scope depends on the business, its current digital presence and the
            objectives of the project. We define the relevant work before
            implementation begins.
          </div>
        </div>
      </section>

      {/* 5. Operating Principles */}
      <section
        id="principles"
        className="w-full border-b border-black/10 bg-white px-6 py-16 sm:px-10 sm:py-20 md:px-16 lg:px-24 lg:py-24"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 sm:mb-12">
            <Badge variant="secondary" size="sm" className="mb-3">
              Our Philosophy
            </Badge>

            <h2 className="mb-3 font-heading text-3xl font-bold leading-tight tracking-tight text-[#0b131e] sm:text-4xl md:text-5xl">
              Look Deeper. Build Smarter. Grow Better.
            </h2>

            <p className="max-w-2xl text-base font-light leading-relaxed text-gray-600 sm:text-lg">
              Three principles that shape how we understand problems, make
              decisions and approach every opportunity for improvement.
            </p>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-3">
            {principles.map((principle) => (
              <Card
                key={principle.number}
                variant="tactile"
                className="grid h-full grid-rows-[auto_auto_1fr] p-6 sm:p-7"
              >
                <div className="mb-1">
                  <span className="font-modak text-3xl text-slate-400 sm:text-4xl">
                    {principle.number}
                  </span>
                </div>

                <h3 className="mb-1 font-heading text-xl font-bold tracking-tight text-[#0b131e]">
                  {principle.title}
                </h3>

                <p className="text-sm font-light leading-relaxed text-gray-600">
                  {principle.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Final CTA */}
      <FinalCta />
    </div>
  );
}
