import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  Code2,
  Layers,
  CheckCircle2,
  RefreshCw,
  ShoppingBag,
  ShieldCheck,
  AlertTriangle,
  Compass,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import FinalCta from "@/components/FinalCta";
import WebDevFaq from "./WebDevFaq";

export const metadata: Metadata = {
  title: "Web Development & Technical Optimization",
  description:
    "Explore Cinorium's web development capabilities, including custom Next.js websites, WordPress, e-commerce experiences, and website modernization.",
  alternates: {
    canonical: "/web-development",
  },
  openGraph: {
    title: "Web Development & Technical Optimization | Cinorium",
    description:
      "Custom Next.js and WordPress websites, e-commerce experiences, and website modernization focused on usability and performance.",
    url: "https://www.cinorium.com/web-development",
    type: "website",
  },
};

const businessProblems = [
  {
    title: "High Bounce Rates on Mobile",
    description:
      "Slow render speeds, shifting layouts, and sluggish response times cause high-intent mobile visitors to abandon pages before reading your value proposition.",
    icon: AlertTriangle,
  },
  {
    title: "Weak Search & Technical Foundations",
    description:
      "Bloated code, absent semantic tags, uncompressed assets, and messy URL paths limit crawl efficiency and prevent marketing content from performing.",
    icon: Layers,
  },
  {
    title: "Websites Built Without Conversion Paths",
    description:
      "Pages designed purely as visual showcases often lack clear conversion hierarchy, direct inquiry pathways, and intuitive information architecture.",
    icon: Compass,
  },
];

const coreServices = [
  {
    id: "custom-dev",
    title: "Custom Next.js Web Development",
    description:
      "Purpose-built websites and web platforms developed around your business requirements, user journeys, and long-term technical needs.",
    icon: Code2,
    highlights: [
      "Custom Next.js App Router and React architecture",
      "Responsive interfaces and performance optimization",
      "Semantic markup and maintainable code structure",
    ],
  },
  {
    id: "wordpress-dev",
    title: "WordPress Website Development",
    description:
      "Flexible WordPress websites with a practical content management experience, clean implementation, and room to grow.",
    icon: Layers,
    highlights: [
      "Custom theme and block-based implementations",
      "Gutenberg editing and content management",
      "Security-conscious setup and maintainable configurations",
    ],
  },
  {
    id: "ecommerce-catalog",
    title: "Product Catalogue & E-commerce Websites",
    description:
      "Organized product experiences that make browsing easier, present product information clearly, and support the buying or inquiry journey.",
    icon: ShoppingBag,
    highlights: [
      "Structured product categories and catalogue navigation",
      "Optimized product images and responsive layouts",
      "Product inquiries or checkout functionality based on project scope",
    ],
  },
  {
    id: "redesign-improvement",
    title: "Website Modernization & Optimization",
    description:
      "Improve existing websites through better structure, responsive layouts, performance improvements, and a more manageable technical foundation.",
    icon: RefreshCw,
    highlights: [
      "Mobile usability and responsive layout improvements",
      "Performance and Core Web Vitals optimization",
      "URL, redirect, and existing content preservation planning",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery & Architecture",
    description:
      "Map out commercial objectives, customer buyer journeys, page hierarchies, and technical specifications.",
  },
  {
    number: "02",
    title: "Engineering & Speed",
    description:
      "Develop custom components with semantic HTML, responsive touch states, and strict Core Web Vitals targets.",
  },
  {
    number: "03",
    title: "Content & Integration",
    description:
      "Populate intent-focused copy, optimize media assets, and wire up analytics and conversion tracking points.",
  },
  {
    number: "04",
    title: "Validation & Launch",
    description:
      "Audit cross-browser performance, indexation readiness, and accessibility before switching domain records.",
  },
];

const approachDifferences = [
  {
    title: "Designed Around Business Goals",
    description:
      "We plan page layouts around your audience, information priorities, and the actions visitors should be able to take.",
  },
  {
    title: "Mobile Usability First",
    description:
      "We consider touch targets, readable typography, responsive navigation, and layout behavior across screen sizes.",
  },
  {
    title: "Semantic & Accessible Structure",
    description:
      "Clear HTML structure, meaningful headings, descriptive links, and accessibility considerations help people and search crawlers understand your pages.",
  },
  {
    title: "Lean, Maintainable Implementation",
    description:
      "We choose practical tools and dependencies, avoiding unnecessary complexity that makes websites harder to maintain.",
  },
  {
    title: "Built to Support Future Growth",
    description:
      "The structure should make it easier to add pages, publish content, introduce campaigns, and extend functionality as requirements evolve.",
  },
];

const px = "px-6 sm:px-10 md:px-16 lg:px-24";
const inner = "max-w-5xl mx-auto";

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
          name: "Services",
          item: "https://www.cinorium.com/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Web Development & Tech Optimization",
          item: "https://www.cinorium.com/web-development",
        },
      ],
    },
    {
      "@type": "Service",
      name: "Web Development & Tech Optimization",
      serviceType: "Web Development",
      provider: {
        "@id": "https://www.cinorium.com/#organization",
      },
      url: "https://www.cinorium.com/web-development",
      description:
        "Custom Next.js and WordPress development, product catalogue and e-commerce websites, and website modernization focused on usability, performance, and maintainability.",
      areaServed: ["Pakistan", "United States", "United Kingdom", "Worldwide"],
    },
  ],
};

export default function WebDevelopmentPage() {
  return (
    <div className="w-full">
      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {/* ── 1. Hero ──────────────────────────────────────────────────────── */}
      <section
        id="webdev-hero"
        aria-labelledby="webdev-hero-heading"
        className={`w-full bg-[#fdfbf7] border-b border-black/10 ${px} pt-28 pb-20 sm:pt-36 sm:pb-24`}
      >
        <div className={inner}>
          <div className="mb-4">
            <Badge variant="default" dot="amber" size="lg">
              Supporting Technical Capability
            </Badge>
          </div>

          <h1
            id="webdev-hero-heading"
            className="mb-6 font-heading text-3xl font-bold tracking-tight leading-[1.1] text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl"
          >
            High-Performance Web Foundations Built for Marketing Results.
          </h1>

          <p className="mb-8 max-w-3xl text-base leading-relaxed text-gray-700 sm:text-lg font-light">
            A website is the core engine of your marketing system. As a digital
            marketing agency, Cinorium approaches web development not as
            isolated coding, but as the high-speed, search-aware technical
            foundation that captures high-intent traffic and turns visitors into
            qualified business inquiries.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link href="/contact">
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto gap-2"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="h-4 w-4 text-[#0b131e]" />
              </Button>
            </Link>

            <Link href="#core-services">
              <Button
                variant="slateOutline"
                size="lg"
                className="w-full sm:w-auto"
              >
                <span>Explore Our Capabilities</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. Common Challenges ─────────────────────────────────────────── */}
      <section
        id="business-problems"
        aria-labelledby="business-problems-heading"
        className={`w-full bg-white border-b border-black/10 ${px} py-16 sm:py-20 lg:py-24`}
      >
        <div className={inner}>
          <div className="mb-10 sm:mb-14 max-w-3xl">
            <Badge variant="secondary" size="sm" className="mb-3">
              Common Technical Hurdles
            </Badge>
            <h2
              id="business-problems-heading"
              className="mb-3 font-heading text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl"
            >
              A Business Website Must Do Far More Than Look Modern
            </h2>
            <p className="text-base leading-relaxed text-gray-600 font-light">
              Many corporate websites fail to generate commercial inquiries not
              because of poor graphic intent, but because underlying technical
              flaws sabotage the visitor experience.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {businessProblems.map((problem) => {
              const Icon = problem.icon;
              return (
                <Card key={problem.title} variant="tactile" className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <div className="mb-3 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0b131e] text-[#ffb703]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <CardTitle className="font-heading text-lg font-bold text-gray-900 sm:text-xl">
                      {problem.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <CardDescription className="text-sm leading-relaxed text-gray-600 font-light">
                      {problem.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. Core Development Capabilities ─────────────────────────────── */}
      <section
        id="core-services"
        aria-labelledby="core-services-heading"
        className={`w-full bg-[#faf8f5] border-b border-black/10 ${px} py-16 sm:py-20 lg:py-24`}
      >
        <div className={inner}>
          <div className="mb-10 sm:mb-14 max-w-3xl">
            <Badge variant="default" dot="amber" size="sm" className="mb-3">
              Technical Capabilities
            </Badge>
            <h2
              id="core-services-heading"
              className="mb-3 font-heading text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl"
            >
              Web Architecture Engineered for Conversion & Speed
            </h2>
            <p className="text-base leading-relaxed text-gray-600 sm:text-lg font-light">
              We design and engineer bespoke web solutions tailored to your
              operational model, marketing goals, and audience demands.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.id}
                  variant="tactile"
                  className="p-6 bg-white"
                >
                  <CardHeader className="p-0 mb-4">
                    <div className="mb-3 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0b131e] text-[#ffb703]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>

                    <CardTitle className="font-heading text-lg font-bold text-gray-900 sm:text-xl">
                      {service.title}
                    </CardTitle>

                    <CardDescription className="text-sm leading-relaxed text-gray-600 font-light mt-1">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-0 mb-6 flex-1">
                    <div className="rounded-xl border border-gray-100 bg-[#fdfbf7] p-4 h-full">
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-800 block mb-2.5">
                        Technical Deliverables
                      </span>
                      <ul className="space-y-2">
                        {service.highlights.map((point) => (
                          <li key={point} className="flex items-start gap-2">
                            <CheckCircle2
                              className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600"
                              aria-hidden="true"
                            />
                            <span className="text-xs leading-relaxed text-gray-600">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. The Engineering Process ───────────────────────────────────── */}
      <section
        id="process"
        aria-labelledby="process-heading"
        className={`w-full bg-white border-b border-black/10 ${px} py-16 sm:py-20 lg:py-24`}
      >
        <div className={inner}>
          <div className="mb-10 sm:mb-12 max-w-3xl">
            <Badge variant="secondary" size="sm" className="mb-3">
              Delivery Process
            </Badge>
            <h2
              id="process-heading"
              className="mb-3 font-heading text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl"
            >
              How We Engineer & Launch Web Platforms
            </h2>
            <p className="text-base leading-relaxed text-gray-600 sm:text-lg font-light">
              A structured 4-step framework centered on clear architectural
              planning, clean development, and rigorous pre-launch QA.
            </p>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
            {processSteps.map((step) => (
              <Card
                key={step.number}
                variant="tactile"
                className="p-6 bg-white grid grid-rows-[auto_minmax(3.5rem,auto)_1fr] gap-y-2 h-full"
              >
                <span
                  className="font-modak text-3xl text-slate-500 leading-none"
                  aria-hidden="true"
                >
                  {step.number}
                </span>

                <h3 className="font-heading text-lg font-bold text-gray-900 leading-tight">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm leading-relaxed text-gray-600 font-light">
                  {step.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="rounded-xl border border-gray-200 bg-[#faf8f5] p-5 text-xs sm:text-sm leading-relaxed text-gray-600 font-light">
            <strong className="font-semibold text-gray-900">
              Scope & Delivery Commitments:
            </strong>{" "}
            Timelines, revisions, specialized third-party integrations, and
            content migration are defined transparently before any work starts.
            We set realistic milestones based on actual engineering scope.
          </div>
        </div>
      </section>

      {/* ── 5. What Makes the Approach Different ─────────────────────────── */}
      <section
        id="approach-difference"
        aria-labelledby="approach-heading"
        className={`w-full bg-white border-b border-black/10 ${px} py-16 sm:py-20 lg:py-24`}
      >
        <div className={inner}>
          <div className="mb-10 sm:mb-12 max-w-3xl">
            <Badge variant="secondary" size="sm" className="mb-3">
              Engineering Standards
            </Badge>
            <h2
              id="approach-heading"
              className="mb-3 font-heading text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl"
            >
              Why Our Development Principles Drive Marketing Outcomes
            </h2>
            <p className="text-base leading-relaxed text-gray-600 sm:text-lg font-light">
              We connect web engineering directly with search discoverability
              and customer conversion from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {approachDifferences.map((diff) => (
              <Card key={diff.title} variant="tactile" className="p-6">
                <div>
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-[#0b131e] text-xs font-bold text-[#ffb703]">
                    ✓
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-bold text-gray-900">
                    {diff.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-gray-600 font-light">
                    {diff.description}
                  </p>
                </div>
              </Card>
            ))}

            {/* 6th Card: Realistic Expectations */}
            <div className="rounded-2xl border-2 border-black bg-[#faf8f5] p-6 flex flex-col justify-between">
              <div>
                <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-800">
                  <ShieldCheck
                    className="h-4 w-4 text-[#ffb703]"
                    aria-hidden="true"
                  />
                  Honest Promises
                </div>
                <h3 className="mb-2 font-heading text-lg font-bold text-gray-900">
                  Transparent Technical Advice
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-gray-600 font-light">
                  A well-built website supports your marketing efforts, but it
                  does not replace a sound marketing strategy. We focus on the
                  technical foundation, usability, and implementation decisions
                  that help your wider growth activities work more effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Contextual Investigation Callout ────────────────────────── */}
      <section
        className={`w-full bg-[#fdfbf7] border-b border-black/10 ${px} py-12`}
      >
        <div className="max-w-5xl mx-auto rounded-3xl border-2 border-black bg-white p-7 sm:p-9 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
          <div className="max-w-xl">
            <Badge variant="amber" size="sm" className="mb-2">
              From Our Journal
            </Badge>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              How Website Development Improves Search Visibility
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
              Read our analysis on why technical foundations, site speed, and
              semantic page structure directly influence search discovery and
              business conversions.
            </p>
          </div>
          <Link
            href="/journal/website-development-search-visibility-conversions"
            className="shrink-0"
          >
            <Button variant="default" size="default" className="gap-2">
              <span>Read Investigation</span>
              <ArrowRight className="h-4 w-4 text-[#ffb703]" />
            </Button>
          </Link>
        </div>
      </section>

      {/* ── 8. FAQ ───────────────────────────────────────────────────────── */}
      <section
        id="webdev-faqs"
        aria-labelledby="webdev-faq-heading"
        className={`w-full bg-white border-b border-black/10 ${px} py-16 sm:py-20 lg:py-24`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 sm:mb-12">
            <Badge variant="secondary" size="sm" className="mb-3">
              Common Questions
            </Badge>
            <h2
              id="webdev-faq-heading"
              className="mb-3 font-heading text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl"
            >
              Frequently Asked Questions
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-gray-600 font-light">
              Clear answers regarding our web engineering workflows, technology
              stack selections, timelines, and SEO-aware foundations.
            </p>
          </div>

          <WebDevFaq />
        </div>
      </section>

      {/* ── 9. Unified Bottom CTA ────────────────────────────────────────── */}
      <FinalCta />
    </div>
  );
}
