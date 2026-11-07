import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Layers,
  Gauge,
  CheckCircle2,
  Search,
  RefreshCw,
  ShoppingBag,
  ExternalLink,
  Info,
  ShieldCheck,
  Compass,
  AlertTriangle,
  Zap,
} from "lucide-react";
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
import WebDevFaq from "./WebDevFaq";

export const metadata: Metadata = {
  title: "Web Development & Technical Optimization",
  description:
    "Explore Cinorium's supporting web engineering capabilities: Next.js and WordPress platforms built as a fast, conversion-engineered foundation for marketing.",
  alternates: {
    canonical: "/web-development",
  },
  openGraph: {
    title: "Web Development & Technical Optimization | Cinorium",
    description:
      "Explore Cinorium's supporting web engineering capabilities: Next.js and WordPress platforms built as a fast, conversion-engineered foundation for marketing.",
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
      "Purpose-built modern web platforms with sub-second loading, clean semantic markup, and maintainable architectures that support aggressive marketing growth.",
    icon: Code2,
    highlights: [
      "Custom Next.js App Router & React 19 architecture",
      "Sub-second page speeds and minimal dependency bloat",
      "Clean, scalable, maintainable codebase with full documentation",
    ],
  },
  {
    id: "wordpress-dev",
    title: "Engineered WordPress Development",
    description:
      "Clean, block-based WordPress setups configured without fragile plugin stacks, ensuring editorial freedom alongside rock-solid security and speed.",
    icon: Layers,
    highlights: [
      "Custom theme setups free of bloated multi-purpose themes",
      "Intuitive Gutenberg block editorial experience",
      "Hardened security configurations and managed update paths",
    ],
  },
  {
    id: "ecommerce-catalog",
    title: "Product Catalogue & E-commerce Platforms",
    description:
      "High-converting catalog architectures engineered for effortless product discovery, fast image rendering, and friction-free inquiry pathways.",
    icon: ShoppingBag,
    highlights: [
      "Structured catalogue hierarchies for intuitive browsing",
      "Aggressive product image optimization and WebP/AVIF delivery",
      "Frictionless lead generation and purchase inquiry flows",
    ],
  },
  {
    id: "redesign-improvement",
    title: "Website Modernization & Speed Overhauls",
    description:
      "Re-engineer existing sluggish websites to eliminate technical bottlenecks, modernize UI responsiveness, and preserve accumulated search equity.",
    icon: RefreshCw,
    highlights: [
      "Mobile-first responsive corrections across all devices",
      "Crawl-budget restoration and redirect preservation",
      "Core Web Vitals remediation (LCP, INP, CLS)",
    ],
  },
  {
    id: "seo-aware",
    title: "Search-Engineered Technical Architecture",
    description:
      "Websites engineered from line one with search crawlers in mind: structured data, semantic HTML5, breadcrumbs, and crawlable layouts.",
    icon: Search,
    highlights: [
      "Semantic HTML5 hierarchy and clean schema integration",
      "Crawl-friendly internal linking and URL structures",
      "Engineered to maximize organic crawl efficiency",
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
    title: "Engineered for Marketing Conversions",
    description:
      "We design page layouts with clear visual hierarchy, direct CTAs, and frictionless forms that maximize lead inquiries.",
  },
  {
    title: "Mobile Usability First",
    description:
      "Touch targets, font scaling, navigation drawers, and asset loading are rigorously tested on real mobile devices.",
  },
  {
    title: "Semantic & Crawlable HTML",
    description:
      "Search crawlers parse meaning through proper tags, semantic structures, and accurate metadata—not nested div bloat.",
  },
  {
    title: "Lean, Maintainable Code",
    description:
      "We avoid heavy, unvetted third-party plugins that introduce security liabilities and degrade site responsiveness.",
  },
  {
    title: "Scalable Growth Architecture",
    description:
      "Future landing pages, marketing campaigns, and journal articles can be published seamlessly without code regressions.",
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
        "High-performance Next.js and modern web development engineered as the fast, conversion-focused foundation for digital marketing campaigns.",
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
            A website is the core engine of your marketing system. As a digital marketing agency, Cinorium approaches web development not as isolated coding, but as the high-speed, search-aware technical foundation that captures high-intent traffic and turns visitors into qualified business inquiries.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link href="/contact">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto gap-2">
                <span>Discuss Your Project</span>
                <ArrowRight className="h-4 w-4 text-[#0b131e]" />
              </Button>
            </Link>

            <Link href="/work">
              <Button variant="slateOutline" size="lg" className="w-full sm:w-auto">
                <span>Explore Selected Work</span>
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
              Many corporate websites fail to generate commercial inquiries not because of poor graphic intent, but because underlying technical flaws sabotage the visitor experience.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {businessProblems.map((problem) => {
              const Icon = problem.icon;
              return (
                <Card
                  key={problem.title}
                  variant="tactile"
                  className="p-6"
                >
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
              Web Architecture Engineered for Conversion &amp; Speed
            </h2>
            <p className="text-base leading-relaxed text-gray-600 sm:text-lg font-light">
              We design and engineer bespoke web solutions tailored to your operational model, marketing goals, and audience demands.
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

                  <CardFooter className="p-0 border-t border-gray-100 pt-4 mt-auto">
                    <Link href="/contact" className="w-full">
                      <Button variant="slateOutline" size="sm" className="w-full gap-2">
                        <span>Inquire About This Service</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Button>
                    </Link>
                  </CardFooter>
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
              How We Engineer &amp; Launch Web Platforms
            </h2>
            <p className="text-base leading-relaxed text-gray-600 sm:text-lg font-light">
              A structured 4-step framework centered on clear architectural planning, clean development, and rigorous pre-launch QA.
            </p>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <Card key={step.number} variant="tactile" className="p-6">
                <div>
                  <span className="font-modak text-3xl text-[#ffb703] block mb-2">
                    {step.number}
                  </span>
                  <h3 className="mb-2 font-heading text-lg font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-gray-600 font-light">
                    {step.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="rounded-xl border border-gray-200 bg-[#faf8f5] p-5 text-xs sm:text-sm leading-relaxed text-gray-600 font-light">
            <strong className="font-semibold text-gray-900">
              Scope &amp; Delivery Commitments:
            </strong>{" "}
            Timelines, revisions, specialized third-party integrations, and content migration are defined transparently before any work starts. We set realistic milestones based on actual engineering scope.
          </div>
        </div>
      </section>

      {/* ── 5. Selected Project Experience ───────────────────────────────── */}
      <section
        id="selected-experience"
        aria-labelledby="selected-experience-heading"
        className={`w-full bg-[#faf8f5] border-b border-black/10 ${px} py-16 sm:py-20 lg:py-24`}
      >
        <div className={inner}>
          <div className="mb-10 flex flex-col gap-5 sm:mb-12 md:flex-row md:items-end md:justify-between">
            <div className="min-w-0">
              <Badge variant="secondary" size="sm" className="mb-3">
                Production Evidence
              </Badge>
              <h2
                id="selected-experience-heading"
                className="mb-2 font-heading text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl"
              >
                Production Engineering in Action
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-gray-600 font-light">
                Real production websites built with meticulous attention to performance, structure, and user conversion journeys.
              </p>
            </div>

            <Link href="/work" className="shrink-0">
              <Button variant="default" size="default" className="gap-2">
                <span>Explore All Selected Work</span>
                <ArrowRight className="h-4 w-4 text-[#ffb703]" />
              </Button>
            </Link>
          </div>

          <div className="flex flex-col gap-8">
            {/* Clothing Nexus card */}
            <article className="flex flex-col rounded-3xl border-2 border-black bg-white p-6 sm:p-10 shadow-sm">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="success" size="sm">
                    Live Production Platform
                  </Badge>
                  <Badge variant="secondary" size="sm">
                    Next.js App Router
                  </Badge>
                  <Badge variant="amber" size="sm">
                    Product Catalogue
                  </Badge>
                </div>
                <span className="shrink-0 font-mono text-xs text-gray-500">
                  clothingnexus.com
                </span>
              </div>

              <h3 className="mb-3 font-heading text-2xl font-bold text-gray-900 sm:text-3xl">
                Clothing Nexus
              </h3>

              <p className="mb-6 max-w-3xl text-base leading-relaxed text-gray-700 font-light">
                A custom B2B web platform with a substantial product catalogue, engineered with Next.js. Architecture highlights include aggressive image compression, semantic markup, and optimal Core Web Vitals to maximize buyer engagement.
              </p>

              {/* Lab Report Panel */}
              <div className="mb-6 rounded-2xl border-2 border-gray-900 bg-[#fdfbf7] p-5 sm:p-6">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 pb-3">
                  <div className="flex items-center gap-2">
                    <Gauge className="h-5 w-5 shrink-0 text-gray-900" aria-hidden="true" />
                    <span className="font-heading text-sm font-bold text-gray-900 sm:text-base">
                      Google PageSpeed Insights Lab Report
                    </span>
                  </div>
                  <span className="inline-block rounded-lg border border-gray-300 bg-white px-2.5 py-0.5 text-xs font-medium text-gray-600">
                    Audit Date: 29 October 2026
                  </span>
                </div>

                <div
                  className="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-5"
                  role="list"
                  aria-label="Lighthouse audit scores"
                >
                  {[
                    { label: "Desktop Perf.", score: 100, color: "text-emerald-600" },
                    { label: "Mobile Perf.", score: 75, color: "text-[#0b131e]" },
                    { label: "Accessibility", score: 96, color: "text-emerald-600" },
                    { label: "Best Practices", score: 96, color: "text-emerald-600" },
                    { label: "SEO", score: 92, color: "text-emerald-600" },
                  ].map((metric) => (
                    <div
                      key={metric.label}
                      role="listitem"
                      className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-white p-3 text-center"
                    >
                      <span className="mb-1 block text-[10px] font-semibold uppercase leading-tight tracking-wide text-gray-600 sm:text-[11px]">
                        {metric.label}
                      </span>
                      <span className={`font-heading text-2xl font-bold leading-none ${metric.color}`}>
                        {metric.score}
                      </span>
                      <span className="mt-0.5 text-xs text-gray-400">/100</span>
                    </div>
                  ))}
                </div>

                <p className="flex items-start gap-2 text-xs leading-relaxed text-gray-600 font-light">
                  <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gray-500" aria-hidden="true" />
                  <span>
                    Measured under synthetic Lighthouse lab audit conditions on 29 October 2026. While synthetic scores validate code efficiency, real-world user metrics (Core Web Vitals) vary based on visitor devices, caching, and network conditions.
                  </span>
                </p>
              </div>

              <div>
                <a
                  href="https://www.clothingnexus.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Button variant="default" size="default" className="gap-2">
                    <span>View Live Website</span>
                    <ExternalLink className="h-4 w-4 text-[#ffb703]" aria-hidden="true" />
                  </Button>
                </a>
              </div>
            </article>

            {/* CN IT Solutions card */}
            <article className="flex flex-col rounded-3xl border-2 border-black bg-white p-6 sm:p-10 shadow-sm">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="success" size="sm">
                    Live Production Platform
                  </Badge>
                  <Badge variant="secondary" size="sm">
                    IT Corporate Website
                  </Badge>
                </div>
                <span className="shrink-0 font-mono text-xs text-gray-500">
                  cnitsolutions.com
                </span>
              </div>

              <h3 className="mb-3 font-heading text-2xl font-bold text-gray-900 sm:text-3xl">
                CN IT Solutions
              </h3>

              <p className="mb-6 max-w-3xl text-base leading-relaxed text-gray-700 font-light">
                A structured corporate platform developed for an IT services provider, focused on clear presentation of enterprise service offerings and professional lead generation. Built for an affiliated entity within the same corporate group as Clothing Nexus.
              </p>

              <div>
                <a
                  href="https://www.cnitsolutions.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Button variant="default" size="default" className="gap-2">
                    <span>View Live Website</span>
                    <ExternalLink className="h-4 w-4 text-[#ffb703]" aria-hidden="true" />
                  </Button>
                </a>
              </div>
            </article>

            {/* Concepts callout */}
            <div className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h4 className="mb-1 font-heading text-lg font-bold text-gray-900">
                  Exploratory Concepts &amp; Interactive Prototypes
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-gray-600 font-light">
                  Our portfolio also features exploratory sector prototypes including Tooni Wear (on hold), March Computer, Lexway, Khawar Law Associates, and 3G Leather.
                </p>
              </div>
              <Link href="/work#concepts" className="shrink-0">
                <Button variant="slateOutline" size="sm" className="gap-2">
                  <span>View Concept Prototypes</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. What Makes the Approach Different ─────────────────────────── */}
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
              We connect web engineering directly with search discoverability and customer conversion from day one.
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
                  <ShieldCheck className="h-4 w-4 text-[#ffb703]" aria-hidden="true" />
                  Honest Promises
                </div>
                <h3 className="mb-2 font-heading text-lg font-bold text-gray-900">
                  Transparent Technical Advice
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-gray-600 font-light">
                  We don&apos;t claim that clean code alone replaces ongoing marketing strategy. We provide rigorous, battle-tested software engineering that ensures your marketing investments achieve maximum commercial yield.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Contextual Investigation Callout ────────────────────────── */}
      <section className={`w-full bg-[#fdfbf7] border-b border-black/10 ${px} py-12`}>
        <div className="max-w-5xl mx-auto rounded-3xl border-2 border-black bg-white p-7 sm:p-9 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
          <div className="max-w-xl">
            <Badge variant="amber" size="sm" className="mb-2">
              From Our Journal · The Internet, Under the Hood
            </Badge>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              How Website Development Improves Search Visibility
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
              Read our analysis on why technical foundations, site speed, and semantic page structure directly influence search discovery and business conversions.
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
              Clear answers regarding our web engineering workflows, technology stack selections, timelines, and SEO-aware foundations.
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
