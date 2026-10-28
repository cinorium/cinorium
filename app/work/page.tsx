import type { Metadata } from "next";
import Link from "next/link";
import {
  ExternalLink,
  ArrowDown,
  ArrowRight,
  MessageCircle,
  Gauge,
  CheckCircle2,
  Layers,
  Sparkles,
  Info,
} from "lucide-react";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Work & Website Development Portfolio",
  description:
    "Explore Cinorium's website development work, including live business websites and selected concepts built for different industries.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Work & Website Development Portfolio | Cinorium",
    description:
      "Explore Cinorium's website development work, including live business websites and selected concepts built for different industries.",
    url: "https://cinorium.com/work",
    type: "website",
  },
};

const whatsappUrl =
  "https://wa.me/923212481412?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20website%20or%20SEO%20project.";

export default function WorkPage() {
  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section
        id="overview"
        className="w-full bg-blue-100 pt-28 sm:pt-36 pb-16 sm:pb-20 px-6 sm:px-10 md:px-16 lg:px-24 border-b border-black/10"
      >
        <div className="max-w-5xl mx-auto">
          {/* Eyebrow */}
          <span className="mb-4 inline-block w-max border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-widest text-gray-800 sm:text-sm">
            SELECTED WORK
          </span>

          {/* Main Heading */}
          <h1 className="mb-6 font-serif text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl">
            Websites Built Around Real Business Needs.
          </h1>

          {/* Supporting Copy */}
          <p className="max-w-3xl text-base leading-relaxed text-gray-700 sm:text-lg mb-8">
            Explore selected website development projects, from live business
            websites to tailored concepts created for different industries. Each
            project reflects a considered approach to website structure, user
            experience and implementation.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-black px-7 py-4 text-center text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 sm:text-base"
            >
              <MessageCircle
                aria-hidden="true"
                className="h-5 w-5 text-amber-400"
              />
              <span>Discuss Your Project</span>
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="#featured-projects"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border-2 border-black bg-white/80 px-7 py-4 text-center text-sm font-semibold text-gray-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 sm:text-base"
            >
              <span>Explore Projects</span>
              <ArrowDown aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Featured Projects Section (Live Client Websites) */}
      <section
        id="featured-projects"
        className="w-full bg-amber-50/40 py-16 sm:py-20 lg:py-24 px-6 sm:px-10 md:px-16 lg:px-24"
      >
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 sm:mb-14 text-center sm:text-left">
            <span className="mb-3 inline-block w-max border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-wider text-gray-800 sm:text-sm">
              FEATURED CLIENT WORK
            </span>
            <h2 className="mb-3 font-serif text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
              Live Business Websites
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
              Production websites running in production. Built with a focus on
              performance, structured content and clean implementation.
            </p>
          </div>

          <div className="flex flex-col gap-10 sm:gap-12">
            {/* Project 1: Clothing Nexus */}
            <article
              aria-labelledby="project-clothing-nexus-title"
              className="group relative flex flex-col rounded-3xl border-2 border-black bg-white p-6 sm:p-9 md:p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-4"
            >
              {/* Header row: Badges and URL */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs font-semibold tracking-wide text-emerald-800">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    Live Website
                  </span>

                  <span className="rounded-full border border-gray-300 bg-gray-100 px-3 py-1 text-xs font-semibold tracking-wide text-gray-800">
                    Next.js
                  </span>

                  <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-900">
                    Business Website / Product Catalogue
                  </span>
                </div>

                <span className="text-xs text-gray-500 font-mono">
                  clothingnexus.com
                </span>
              </div>

              {/* Title & Description */}
              <div className="mb-8">
                <h3
                  id="project-clothing-nexus-title"
                  className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                >
                  Clothing Nexus
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl">
                  A custom business website with a substantial product
                  catalogue, SEO-conscious architecture and carefully optimized
                  product imagery.
                </p>
              </div>

              {/* Scope of Contribution */}
              <div className="mb-8 rounded-2xl border border-gray-200 bg-gray-50/70 p-6 sm:p-7">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-800 mb-4 flex items-center gap-2">
                  <Layers className="h-4 w-4 text-amber-600" />
                  Scope of Contribution
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Custom Next.js website development</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Product image optimization for large catalogues</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>SEO-conscious website structure and hierarchy</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Technical SEO considerations &amp; clean markup</span>
                  </li>
                  <li className="flex items-start gap-2.5 sm:col-span-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Performance-conscious implementation</span>
                  </li>
                </ul>
              </div>

              {/* Performance Proof Section (Reworked PageSpeed Insights Panel) */}
              <div className="mb-8 rounded-2xl border-2 border-gray-900 bg-amber-50/40 p-6 sm:p-7">
                {/* Panel Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-2.5">
                    <Gauge className="h-5 w-5 text-gray-900" />
                    <h4 className="font-serif text-lg sm:text-xl font-bold text-gray-900">
                      PageSpeed Insights
                    </h4>
                  </div>
                  <span className="text-xs font-medium text-gray-600 bg-white border border-gray-300 rounded-lg px-3 py-1 w-max">
                    Captured 29 October 2026
                  </span>
                </div>

                {/* Responsive Metrics Grid (5 Balanced Cards) */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
                  {/* Metric 1: Desktop Performance */}
                  <div className="bg-white rounded-xl border border-gray-200 p-4 text-center shadow-xs flex flex-col justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-600 mb-1">
                      Desktop Perf.
                    </span>
                    <div className="my-1">
                      <span className="text-3xl sm:text-4xl font-serif font-bold text-emerald-600">
                        100
                      </span>
                      <span className="text-xs text-gray-400 font-medium">
                        /100
                      </span>
                    </div>
                    <span className="inline-flex items-center justify-center gap-1 text-[11px] font-medium text-emerald-800 bg-emerald-50 rounded-full px-2 py-0.5 mt-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Desktop
                    </span>
                  </div>

                  {/* Metric 2: Mobile Performance */}
                  <div className="bg-white rounded-xl border border-gray-200 p-4 text-center shadow-xs flex flex-col justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-600 mb-1">
                      Mobile Perf.
                    </span>
                    <div className="my-1">
                      <span className="text-3xl sm:text-4xl font-serif font-bold text-amber-600">
                        75
                      </span>
                      <span className="text-xs text-gray-400 font-medium">
                        /100
                      </span>
                    </div>
                    <span className="inline-flex items-center justify-center gap-1 text-[11px] font-medium text-amber-800 bg-amber-50 rounded-full px-2 py-0.5 mt-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      Mobile
                    </span>
                  </div>

                  {/* Metric 3: Accessibility */}
                  <div className="bg-white rounded-xl border border-gray-200 p-4 text-center shadow-xs flex flex-col justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-600 mb-1">
                      Accessibility
                    </span>
                    <div className="my-1">
                      <span className="text-3xl sm:text-4xl font-serif font-bold text-emerald-600">
                        96
                      </span>
                      <span className="text-xs text-gray-400 font-medium">
                        /100
                      </span>
                    </div>
                    <span className="inline-flex items-center justify-center gap-1 text-[11px] font-medium text-emerald-800 bg-emerald-50 rounded-full px-2 py-0.5 mt-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Verified
                    </span>
                  </div>

                  {/* Metric 4: Best Practices */}
                  <div className="bg-white rounded-xl border border-gray-200 p-4 text-center shadow-xs flex flex-col justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-600 mb-1">
                      Best Practices
                    </span>
                    <div className="my-1">
                      <span className="text-3xl sm:text-4xl font-serif font-bold text-emerald-600">
                        96
                      </span>
                      <span className="text-xs text-gray-400 font-medium">
                        /100
                      </span>
                    </div>
                    <span className="inline-flex items-center justify-center gap-1 text-[11px] font-medium text-emerald-800 bg-emerald-50 rounded-full px-2 py-0.5 mt-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Verified
                    </span>
                  </div>

                  {/* Metric 5: SEO */}
                  <div className="bg-white rounded-xl border border-gray-200 p-4 text-center shadow-xs flex flex-col justify-between col-span-2 sm:col-span-1">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-600 mb-1">
                      SEO
                    </span>
                    <div className="my-1">
                      <span className="text-3xl sm:text-4xl font-serif font-bold text-emerald-600">
                        92
                      </span>
                      <span className="text-xs text-gray-400 font-medium">
                        /100
                      </span>
                    </div>
                    <span className="inline-flex items-center justify-center gap-1 text-[11px] font-medium text-emerald-800 bg-emerald-50 rounded-full px-2 py-0.5 mt-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Verified
                    </span>
                  </div>
                </div>

                {/* Honest Transparency Caption */}
                <div className="mt-5 pt-4 border-t border-gray-200/80 flex items-start gap-2.5 text-xs text-gray-600 leading-relaxed">
                  <Info className="h-4 w-4 text-gray-500 shrink-0 mt-0.5" />
                  <p>
                    Results from a captured Lighthouse report dated 29 October
                    2026. Desktop performance achieved 100/100 alongside 75/100
                    on mobile. Scores reflect this specific test run and can vary
                    with subsequent audits, user device hardware, and real-time
                    network conditions.
                  </p>
                </div>
              </div>

              {/* Action Link Button */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <a
                  href="https://www.clothingnexus.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-2xl bg-black px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-gray-900 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                >
                  <span>View Live Website</span>
                  <ExternalLink className="h-4 w-4 text-amber-400" />
                </a>

                <span className="text-xs text-gray-500">
                  Opens external website in a new tab
                </span>
              </div>
            </article>

            {/* Project 2: CN IT Solutions */}
            <article
              aria-labelledby="project-cn-it-title"
              className="group relative flex flex-col rounded-3xl border-2 border-black bg-white p-6 sm:p-9 md:p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-4"
            >
              {/* Header row: Badges and URL */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs font-semibold tracking-wide text-emerald-800">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    Live Website
                  </span>

                  <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-900">
                    IT Business Website
                  </span>
                </div>

                <span className="text-xs text-gray-500 font-mono">
                  cnitsolutions.com
                </span>
              </div>

              {/* Title & Description */}
              <div className="mb-8">
                <h3
                  id="project-cn-it-title"
                  className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                >
                  CN IT Solutions
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl">
                  A dedicated website for an IT business, presenting its
                  services and online business presence.
                </p>
              </div>

              {/* Scope & Context Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Scope of Contribution */}
                <div className="rounded-2xl border border-gray-200 bg-gray-50/70 p-6 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-800 mb-3 flex items-center gap-2">
                      <Layers className="h-4 w-4 text-amber-600" />
                      Scope of Contribution
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed mb-4">
                      Website development and implementation.
                    </p>
                    <ul className="space-y-2.5 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Corporate IT services presentation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Responsive, business-oriented layouts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Accessible typography and contact pathways</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Context Note (Honest relationship disclosure) */}
                <div className="rounded-2xl border border-amber-200/80 bg-amber-50/50 p-6 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-900 mb-3 flex items-center gap-2">
                      <Info className="h-4 w-4 text-amber-700" />
                      Project Context &amp; Group Affiliation
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      This website was developed for an entity related to the
                      same company group as Clothing Nexus to establish an
                      online presence for its dedicated IT services.
                    </p>
                  </div>
                  <p className="mt-4 text-xs text-gray-500 leading-relaxed border-t border-amber-200/60 pt-3">
                    Presented transparently as an affiliated engagement focused
                    on website implementation and online presence.
                  </p>
                </div>
              </div>

              {/* Action Link Button */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <a
                  href="https://www.cnitsolutions.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-2xl bg-black px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-gray-900 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                >
                  <span>View Live Website</span>
                  <ExternalLink className="h-4 w-4 text-amber-400" />
                </a>

                <span className="text-xs text-gray-500">
                  Opens external website in a new tab
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 3. Concepts & Selected Samples Section */}
      <section
        id="concepts"
        className="w-full border-t border-black/10 bg-white py-16 sm:py-20 lg:py-24 px-6 sm:px-10 md:px-16 lg:px-24"
      >
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 sm:mb-14 text-center sm:text-left">
            <span className="mb-3 inline-block w-max border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-wider text-gray-800 sm:text-sm">
              EXPLORATORY WORK
            </span>
            <h2 className="mb-3 font-serif text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
              Concepts &amp; Selected Samples
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
              Selected website concepts and samples developed to explore how
              different businesses can present their services, products and
              customer journeys online.
            </p>
          </div>

          {/* Grid of Concept Cards (Balanced 5-Project Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Project 3: Tooni Wear */}
            <div className="group relative flex flex-col h-full rounded-2xl border-2 border-black bg-white p-6 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div>
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="rounded-full border border-slate-300 bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                    Project on hold
                  </span>
                  <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-900">
                    E-commerce Concept
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 mb-2.5">
                  Tooni Wear
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  A website concept for a children&apos;s clothing brand.
                  Exploratory concept prototype; currently on hold and not an
                  operating store.
                </p>
              </div>

              {/* Action Link pinned to bottom */}
              <div className="mt-auto pt-4 border-t border-gray-100">
                <a
                  href="https://tooniwear.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 transition-colors hover:text-amber-700 group-hover:underline"
                >
                  <span>View Concept Preview</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Project 4: March Computer */}
            <div className="group relative flex flex-col h-full rounded-2xl border-2 border-black bg-white p-6 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div>
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="rounded-full border border-amber-200 bg-amber-100/70 px-3 py-1 text-xs font-semibold text-amber-900">
                    Concept / Sample
                  </span>
                  <span className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700">
                    Computer Hardware
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 mb-2.5">
                  March Computer
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  A website sample exploring product presentation for a computer
                  hardware business.
                </p>
              </div>

              {/* Action Link pinned to bottom */}
              <div className="mt-auto pt-4 border-t border-gray-100">
                <a
                  href="https://cinorium.github.io/march/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 transition-colors hover:text-amber-700 group-hover:underline"
                >
                  <span>View Sample Website</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Project 5: Lexway */}
            <div className="group relative flex flex-col h-full rounded-2xl border-2 border-black bg-white p-6 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div>
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="rounded-full border border-amber-200 bg-amber-100/70 px-3 py-1 text-xs font-semibold text-amber-900">
                    Concept / Sample
                  </span>
                  <span className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700">
                    Legal Services
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 mb-2.5">
                  Lexway
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  A legal services website concept focused on presenting
                  professional services clearly.
                </p>
              </div>

              {/* Action Link pinned to bottom */}
              <div className="mt-auto pt-4 border-t border-gray-100">
                <a
                  href="https://cinorium.github.io/Lexway/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 transition-colors hover:text-amber-700 group-hover:underline"
                >
                  <span>View Concept Website</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Project 6: Khawar Law Associates */}
            <div className="group relative flex flex-col h-full rounded-2xl border-2 border-black bg-white p-6 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div>
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="rounded-full border border-amber-200 bg-amber-100/70 px-3 py-1 text-xs font-semibold text-amber-900">
                    Concept / Sample
                  </span>
                  <span className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700">
                    Legal Services
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 mb-2.5">
                  Khawar Law Associates
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  A website sample for a legal practice.
                </p>
              </div>

              {/* Action Link pinned to bottom */}
              <div className="mt-auto pt-4 border-t border-gray-100">
                <a
                  href="https://cinorium.github.io/khawar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 transition-colors hover:text-amber-700 group-hover:underline"
                >
                  <span>View Sample Website</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Project 7: 3G Leather */}
            <div className="group relative flex flex-col h-full rounded-2xl border-2 border-black bg-white p-6 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div>
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="rounded-full border border-amber-200 bg-amber-100/70 px-3 py-1 text-xs font-semibold text-amber-900">
                    Concept / Sample
                  </span>
                  <span className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700">
                    Leather Products
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 mb-2.5">
                  3G Leather
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  A website sample created during a potential partnership
                  discussion.
                </p>
              </div>

              {/* Action Link pinned to bottom (URL verified resolving with HTTP 200) */}
              <div className="mt-auto pt-4 border-t border-gray-100">
                <a
                  href="https://cinorium.github.io/3gleather/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 transition-colors hover:text-amber-700 group-hover:underline"
                >
                  <span>View Sample Website</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Cinorium Approach Overview */}
      <section className="w-full border-t border-black/10 bg-amber-50/30 py-16 sm:py-20 px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 text-center sm:text-left">
            <span className="mb-3 inline-block w-max border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-wider text-gray-800 sm:text-sm">
              OUR APPROACH
            </span>
            <h2 className="mb-3 font-serif text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Principles Behind Every Build
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-gray-600">
              How we approach structure, speed, and real-world usability across
              client and concept projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="rounded-2xl border border-black/15 bg-white p-6 sm:p-7 shadow-xs">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-800 mb-4">
                <Layers className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">
                Structured Foundations
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Clean semantic hierarchy and intentional architecture that make
                pages easy to navigate for users and clear for search engines.
              </p>
            </div>

            <div className="rounded-2xl border border-black/15 bg-white p-6 sm:p-7 shadow-xs">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-800 mb-4">
                <Gauge className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">
                Performance-Conscious
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Lightweight assets, responsive imagery and minimal bundle sizes
                for fast initial load times and smooth interactions.
              </p>
            </div>

            <div className="rounded-2xl border border-black/15 bg-white p-6 sm:p-7 shadow-xs">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-800 mb-4">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">
                Clear Communication
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Design focused on communicating your value proposition clearly
                and guiding visitors toward meaningful enquiries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom Call to Action Section */}
      <CtaSection />
    </div>
  );
}
