import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Search,
  Megaphone,
  TrendingUp,
  Compass,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Cinorium | Technology-Driven Digital Marketing Agency",
  description:
    "Cinorium is a technology-driven digital marketing agency with a strong web development foundation. Built for visibility, designed for growth.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Cinorium | Technology-Driven Digital Marketing Agency",
    description:
      "Cinorium is a technology-driven digital marketing agency with a strong web development foundation. Built for visibility, designed for growth.",
    url: "https://www.cinorium.com/about",
    type: "website",
  },
};

const processSteps = [
  {
    number: "01",
    title: "Inspect & Understand",
    description:
      "Analyze the business model, technical infrastructure, target audience, and current search footprint.",
  },
  {
    number: "02",
    title: "Architect & Plan",
    description:
      "Map out code architecture, content intent, and technical priorities to eliminate guesswork.",
  },
  {
    number: "03",
    title: "Build & Optimize",
    description:
      "Implement high-performance web development, technical SEO, and conversion-focused user journeys.",
  },
  {
    number: "04",
    title: "Refine & Grow",
    description:
      "Evaluate verified data, optimize conversion funnels, and expand topical search authority over time.",
  },
];

const principles = [
  {
    title: "Look Deeper",
    description:
      "Inspect underlying systems rather than treating surface symptoms. Fast loading speeds, clean codebases, and semantic hierarchies make sites durable.",
    icon: Layers,
  },
  {
    title: "Build Smarter",
    description:
      "Prioritize technical choices that make genuine commercial sense, avoiding plugin bloat, vanity metrics, and fragile shortcuts.",
    icon: Compass,
  },
  {
    title: "Grow Better",
    description:
      "Build sustainable, organic customer discovery through transparent communication, honest expectations, and measurable improvements.",
    icon: ShieldCheck,
  },
];

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section
        id="about-hero"
        className="w-full bg-blue-100 pt-28 sm:pt-36 pb-16 sm:pb-20 px-6 sm:px-10 md:px-16 lg:px-24 border-b border-black/10"
      >
        <div className="max-w-5xl mx-auto">
          {/* Eyebrow */}
          <span className="mb-4 inline-block w-max border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-widest text-gray-800 sm:text-sm">
            TECHNOLOGY · MARKETING · DIGITAL GROWTH
          </span>

          {/* Heading */}
          <h1 className="mb-6 font-heading text-3xl font-bold tracking-tight leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl">
            Built for Visibility. Designed for Growth.
          </h1>

          {/* Introduction */}
          <p className="max-w-3xl text-base leading-relaxed text-gray-700 sm:text-lg mb-8">
            Cinorium is a technology-driven digital marketing agency. We bring
            web development, SEO, search visibility, and digital marketing
            together. Our distinctive strength is understanding how digital
            systems are built, how search engines interpret them, and how they
            turn prospective visitors into real business inquiries.
          </p>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-black px-7 py-4 text-center text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-900 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 sm:text-base"
            >
              <span>Discuss Your Project</span>
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:translate-x-1 text-amber-400"
              />
            </Link>

            <Link
              href="/services"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border-2 border-black bg-white/80 px-7 py-4 text-center text-sm font-semibold text-gray-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 sm:text-base"
            >
              <span>Explore The 4 Pillars</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. The Thinking Behind Cinorium: Beyond the Surface */}
      <section
        id="the-thinking"
        className="w-full bg-white py-16 sm:py-20 lg:py-24 px-6 sm:px-10 md:px-16 lg:px-24 border-b border-black/10"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <span className="mb-3 inline-block w-max border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-wider text-gray-800 sm:text-sm">
                BEYOND THE SURFACE
              </span>

              <h2 className="mb-6 font-heading text-3xl font-bold tracking-tight leading-tight text-gray-900 sm:text-4xl">
                We don&apos;t just make things look right. We make them work right.
              </h2>

              <div className="space-y-4 text-base leading-relaxed text-gray-700">
                <p>
                  Most businesses run into the same digital roadblock: their
                  designers build visually pleasing layouts that search engines
                  can barely crawl, while generic marketing agencies drive paid
                  clicks to slow, unoptimized landing pages that leak conversions.
                </p>

                <p>
                  Cinorium was founded to bridge this divide. We combine web
                  development and digital marketing into a synchronized discipline.
                  By understanding the technical underpinnings—server response times,
                  clean DOM hierarchies, Core Web Vitals, and semantic entity
                  markup—we build websites that satisfy both human visitors and
                  complex search algorithms.
                </p>

                <p>
                  AI is an engineering tool in our workflow, not a substitute for
                  firsthand judgment. Our real differentiators remain rigorous
                  technical inspection, architectural problem-solving, and
                  purposeful execution.
                </p>
              </div>
            </div>

            {/* Right Callout Box */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border-2 border-black bg-amber-50/50 p-7 sm:p-9 shadow-sm">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-amber-900">
                  <Sparkles className="h-3.5 w-3.5 text-amber-700" />
                  Founder-Led Execution
                </div>

                <h3 className="mb-3 font-heading text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
                  Direct Technical Accountability
                </h3>

                <p className="text-sm leading-relaxed text-gray-700 mb-6 font-light">
                  Cinorium is founder-led by Muhammad Huzaifa. You collaborate
                  directly with the person analyzing, engineering, and optimizing
                  your digital presence—delivering transparent communication,
                  fast execution, and zero account-manager bureaucracy.
                </p>

                <div className="pt-5 border-t border-amber-200/80 flex flex-col gap-2.5 text-xs font-medium text-gray-800">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Technical foundations integrated from day one</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Zero bloated plugin dependencies or black-box SEO</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Evidence-based strategies built for commercial ROI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 4 Service Pillars */}
      <section
        id="services-overview"
        className="w-full bg-amber-50/40 py-16 sm:py-20 lg:py-24 px-6 sm:px-10 md:px-16 lg:px-24 border-b border-black/10"
      >
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 sm:mb-14 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <span className="mb-3 inline-block w-max border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-wider text-gray-800 sm:text-sm">
                SERVICE ARCHITECTURE
              </span>
              <h2 className="mb-3 font-heading text-3xl font-bold tracking-tight leading-tight text-gray-900 sm:text-4xl md:text-5xl">
                Four Connected Service Pillars
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg font-light">
                Digital marketing is most effective when technical foundations,
                search discovery, and customer journey optimization reinforce each other.
              </p>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-amber-800 underline decoration-amber-500 decoration-2 underline-offset-4 shrink-0"
            >
              <span>View All Services</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Service Cards Grid (4 Pillars) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pillar 1: Web Development & Technology */}
            <div className="flex flex-col justify-between rounded-3xl border-2 border-black bg-white p-7 sm:p-9 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-300 bg-amber-100 text-amber-900">
                    <Code2 className="h-6 w-6" />
                  </div>
                  <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-700">
                    Pillar 01
                  </span>
                </div>

                <h3 className="mb-3 font-heading text-2xl font-bold tracking-tight text-gray-900">
                  Web Development &amp; Technology
                </h3>

                <p className="mb-6 text-sm sm:text-base leading-relaxed text-gray-700 font-light">
                  Custom Next.js and clean WordPress development built for
                  responsive performance, speed, security, and a maintainable
                  technical architecture.
                </p>

                <div className="mb-8 rounded-2xl border border-gray-100 bg-gray-50/70 p-5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-800 mb-3">
                    Core Capabilities
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Custom Next.js web application architecture</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Performance tuning &amp; Core Web Vitals optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Clean WordPress development without bloated plugins</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-2 border-t border-gray-100">
                <Link
                  href="/web-development"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-amber-700 transition-colors group"
                >
                  <span>Explore Web Development</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-amber-500" />
                </Link>
              </div>
            </div>

            {/* Pillar 2: SEO & Search Visibility */}
            <div className="flex flex-col justify-between rounded-3xl border-2 border-black bg-white p-7 sm:p-9 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-300 bg-amber-100 text-amber-900">
                    <Search className="h-6 w-6" />
                  </div>
                  <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-700">
                    Pillar 02
                  </span>
                </div>

                <h3 className="mb-3 font-heading text-2xl font-bold tracking-tight text-gray-900">
                  SEO &amp; Search Visibility
                </h3>

                <p className="mb-6 text-sm sm:text-base leading-relaxed text-gray-700 font-light">
                  Technical SEO audits, indexing optimization, intent-aligned
                  content strategy, and modern AI answer engine discovery (AEO/GEO).
                </p>

                <div className="mb-8 rounded-2xl border border-gray-100 bg-gray-50/70 p-5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-800 mb-3">
                    Core Capabilities
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Technical SEO audits, sitemaps, robots &amp; canonicals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Intent-focused keyword mapping &amp; topical clusters</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>AI search visibility (ChatGPT, Perplexity, AI Overviews)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-2 border-t border-gray-100">
                <Link
                  href="/seo-services"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-amber-700 transition-colors group"
                >
                  <span>Explore SEO Services</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-amber-500" />
                </Link>
              </div>
            </div>

            {/* Pillar 3: Digital Marketing */}
            <div className="flex flex-col justify-between rounded-3xl border-2 border-black bg-white p-7 sm:p-9 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-300 bg-amber-100 text-amber-900">
                    <Megaphone className="h-6 w-6" />
                  </div>
                  <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-700">
                    Pillar 03
                  </span>
                </div>

                <h3 className="mb-3 font-heading text-2xl font-bold tracking-tight text-gray-900">
                  Digital Marketing &amp; Strategy
                </h3>

                <p className="mb-6 text-sm sm:text-base leading-relaxed text-gray-700 font-light">
                  Strategic content marketing, professional brand alignment,
                  and conversion rate optimization to turn organic visibility
                  into confirmed client enquiries.
                </p>

                <div className="mb-8 rounded-2xl border border-gray-100 bg-gray-50/70 p-5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-800 mb-3">
                    Core Capabilities
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Conversion rate optimization &amp; friction analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Educational content marketing &amp; case study development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Professional social channel positioning</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-2 border-t border-gray-100">
                <Link
                  href="/services#digital-marketing"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-amber-700 transition-colors group"
                >
                  <span>Learn About Marketing</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-amber-500" />
                </Link>
              </div>
            </div>

            {/* Pillar 4: E-commerce & Growth Systems */}
            <div className="flex flex-col justify-between rounded-3xl border-2 border-black bg-white p-7 sm:p-9 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-300 bg-amber-100 text-amber-900">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-700">
                    Pillar 04
                  </span>
                </div>

                <h3 className="mb-3 font-heading text-2xl font-bold tracking-tight text-gray-900">
                  E-commerce &amp; Growth Systems
                </h3>

                <p className="mb-6 text-sm sm:text-base leading-relaxed text-gray-700 font-light">
                  Store journey optimization, catalog structuring, and
                  friction-free mobile experiences to improve checkout
                  completion and buyer trust.
                </p>

                <div className="mb-8 rounded-2xl border border-gray-100 bg-gray-50/70 p-5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-800 mb-3">
                    Core Capabilities
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Catalog taxonomy &amp; category discovery structure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Mobile checkout UX and payment flow streamlining</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Funnel analytics &amp; drop-off point measurement</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-2 border-t border-gray-100">
                <Link
                  href="/services#ecommerce-growth"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-amber-700 transition-colors group"
                >
                  <span>Learn About E-commerce</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-amber-500" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. How We Approach Projects */}
      <section
        id="process"
        className="w-full bg-white py-16 sm:py-20 lg:py-24 px-6 sm:px-10 md:px-16 lg:px-24 border-b border-black/10"
      >
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 sm:mb-14 text-center sm:text-left">
            <span className="mb-3 inline-block w-max border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-wider text-gray-800 sm:text-sm">
              THE METHODOLOGY
            </span>
            <h2 className="mb-3 font-heading text-3xl font-bold tracking-tight leading-tight text-gray-900 sm:text-4xl md:text-5xl">
              How We Approach Engagements
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg font-light">
              A clear, practical framework to move your digital presence from
              initial discovery to measurable business momentum.
            </p>
          </div>

          {/* 4-Step Process Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col justify-between rounded-2xl border-2 border-black bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div>
                  <span className="inline-block rounded-xl border border-amber-300 bg-amber-50 px-3.5 py-1.5 font-heading text-xl font-bold text-amber-900 mb-4">
                    {step.number}
                  </span>
                  <h3 className="mb-2 font-heading text-xl font-bold tracking-tight text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Scope Transparency Note */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50/70 p-5 sm:p-6 text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
            <strong className="text-gray-900 font-semibold">Scope Note:</strong>{" "}
            Engagements are strictly customized. Some clients partner with us for
            a comprehensive Next.js web application build; others engage us for
            focused technical SEO remediation or content restructuring. We scope
            work based on your actual commercial goals.
          </div>
        </div>
      </section>

      {/* 5. Selected Work (Compact Section) */}
      <section
        id="about-selected-work"
        className="w-full bg-amber-50/30 py-16 sm:py-20 lg:py-24 px-6 sm:px-10 md:px-16 lg:px-24 border-b border-black/10"
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="mb-3 inline-block w-max border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-wider text-gray-800 sm:text-sm">
                SELECTED WORK
              </span>
              <h2 className="mb-3 font-heading text-3xl font-bold tracking-tight leading-tight text-gray-900 sm:text-4xl">
                Real Projects &amp; Tailored Concepts
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-gray-600 font-light">
                Explore real business websites running in production alongside
                exploratory concepts created for different industries.
              </p>
            </div>

            <Link
              href="/work"
              className="group inline-flex shrink-0 items-center gap-2 rounded-2xl bg-black px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-gray-900 hover:-translate-y-0.5 hover:shadow-md"
            >
              <span>Explore Selected Work</span>
              <ArrowRight className="h-4 w-4 text-amber-400 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Compact 2-Card Preview of Live Work */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Clothing Nexus */}
            <div className="flex flex-col justify-between rounded-3xl border-2 border-black bg-white p-7 shadow-xs">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Live Website
                  </span>
                  <span className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700">
                    Next.js
                  </span>
                </div>

                <h3 className="mb-2 font-heading text-2xl font-bold tracking-tight text-gray-900">
                  Clothing Nexus
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mb-6 font-light">
                  A custom business website with a substantial product catalogue,
                  SEO-conscious architecture and carefully optimized product imagery.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-mono">
                <span>clothingnexus.com</span>
                <span className="text-emerald-700 font-semibold font-sans">
                  Production Site
                </span>
              </div>
            </div>

            {/* CN IT Solutions */}
            <div className="flex flex-col justify-between rounded-3xl border-2 border-black bg-white p-7 shadow-xs">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Live Website
                  </span>
                  <span className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700">
                    IT Business
                  </span>
                </div>

                <h3 className="mb-2 font-heading text-2xl font-bold tracking-tight text-gray-900">
                  CN IT Solutions
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mb-6 font-light">
                  A dedicated website for an IT business, presenting its services
                  and online business presence (affiliated group project).
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-mono">
                <span>cnitsolutions.com</span>
                <span className="text-emerald-700 font-semibold font-sans">
                  Production Site
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Principles */}
      <section
        id="principles"
        className="w-full bg-white py-16 sm:py-20 lg:py-24 px-6 sm:px-10 md:px-16 lg:px-24 border-b border-black/10"
      >
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 sm:mb-14 text-center sm:text-left">
            <span className="mb-3 inline-block w-max border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-wider text-gray-800 sm:text-sm">
              CORE VALUES
            </span>
            <h2 className="mb-3 font-heading text-3xl font-bold tracking-tight leading-tight text-gray-900 sm:text-4xl md:text-5xl">
              Look Deeper. Build Smarter. Grow Better.
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg font-light">
              The foundational standards that guide every recommendation,
              technical decision, and marketing strategy.
            </p>
          </div>

          {/* 3 Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((principle) => {
              const Icon = principle.icon;
              return (
                <div
                  key={principle.title}
                  className="rounded-3xl border-2 border-black bg-white p-7 sm:p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-300 bg-amber-100 text-amber-900 mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 font-heading text-xl font-bold tracking-tight text-gray-900">
                    {principle.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 font-light">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Final Call to Action Section */}
      <section
        id="about-cta"
        className="w-full bg-blue-100 py-20 px-6 sm:px-10 md:px-16 lg:px-24"
      >
        <div className="max-w-5xl mx-auto">
          <span className="mb-4 inline-block w-max border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-widest text-gray-800 sm:text-sm">
            LET&apos;S TALK ABOUT YOUR PROJECT
          </span>

          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight leading-tight text-gray-900 sm:text-4xl md:text-5xl max-w-3xl">
            Ready to Build for Visibility and Growth?
          </h2>

          <p className="max-w-2xl text-base leading-relaxed text-gray-700 sm:text-lg mb-8 font-light">
            Whether you&apos;re planning a new website, addressing search
            visibility deficits, or aligning your digital marketing strategy,
            let&apos;s discuss your goals and map out a practical starting point.
          </p>

          <div>
            <Link
              href="/contact"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-black px-8 py-4 text-center text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-900 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 sm:text-base"
            >
              <span>Discuss Your Project</span>
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:translate-x-1 text-amber-400"
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
