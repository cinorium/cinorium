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
} from "lucide-react";
import WebDevFaq from "./WebDevFaq";

export const metadata: Metadata = {
  title: "Website Development Services | Custom & WordPress | Cinorium",
  description:
    "Explore custom and WordPress website development by Cinorium, with a focus on responsive design, usability, performance and SEO-aware technical foundations.",
  alternates: {
    canonical: "/web-development",
  },
  openGraph: {
    title: "Website Development Services | Custom & WordPress | Cinorium",
    description:
      "Explore custom and WordPress website development by Cinorium, with a focus on responsive design, usability, performance and SEO-aware technical foundations.",
    url: "https://www.cinorium.com/web-development",
    type: "website",
  },
};

const businessProblems = [
  {
    title: "Difficult to Use",
    description:
      "A confusing structure or poor mobile experience can make it harder for visitors to find information and take action.",
    icon: AlertTriangle,
  },
  {
    title: "Weak Technical Foundations",
    description:
      "Poorly structured pages, unnecessary code and performance problems can affect usability and make a website harder to maintain.",
    icon: Layers,
  },
  {
    title: "Built Without a Clear Purpose",
    description:
      "A website should reflect its audience, services and business objectives instead of simply filling pages with content.",
    icon: Compass,
  },
];

const coreServices = [
  {
    id: "custom-dev",
    title: "Custom Website Development",
    description:
      "Purpose-built websites using appropriate modern web technologies, with attention to structure, responsive layouts, maintainability and project requirements.",
    icon: Code2,
    highlights: [
      "Tailored Next.js and React architecture",
      "Fast page load times and minimal dependencies",
      "Clean, scalable and maintainable codebase",
    ],
  },
  {
    id: "wordpress-dev",
    title: "WordPress Website Development",
    description:
      "WordPress websites for businesses that need a practical content-management workflow and the ability to update relevant site content.",
    icon: Layers,
    highlights: [
      "Custom theme setups without plugin bloat",
      "Intuitive content editing and page management",
      "Security-conscious configuration and clean code",
    ],
  },
  {
    id: "ecommerce-catalog",
    title: "E-commerce & Product Catalogue Websites",
    description:
      "Web experiences for businesses presenting products online, with attention to product structure, imagery, navigation and usability.",
    icon: ShoppingBag,
    highlights: [
      "Structured catalogue layouts for easy browsing",
      "High-density product image optimization",
      "Intuitive inquiry and conversion pathways",
    ],
  },
  {
    id: "redesign-improvement",
    title: "Website Redesign & Improvement",
    description:
      "Improve an existing website's structure, responsiveness, usability or technical implementation according to the agreed project scope.",
    icon: RefreshCw,
    highlights: [
      "Responsive layout corrections for mobile and tablet",
      "Navigation and content restructuring",
      "Performance and page-speed improvements",
    ],
  },
  {
    id: "seo-aware",
    title: "SEO-Aware Development",
    description:
      "Build with sensible URL structures, semantic HTML, metadata support, crawlability, responsive layouts and performance considerations where relevant.",
    icon: Search,
    highlights: [
      "Semantic HTML5 hierarchy and clean markup",
      "Search-engine-friendly URLs and breadcrumbs",
      "Solid technical foundation (rankings require ongoing SEO)",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Discuss the business, audience, requirements and purpose of the website.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Define the page structure, functionality, content requirements and appropriate technical approach.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Develop the agreed solution, checking responsive behaviour, usability and relevant technical foundations.",
  },
  {
    number: "04",
    title: "Review and Launch",
    description:
      "Test the implementation, address agreed issues and prepare the website for launch.",
  },
];

const approachDifferences = [
  {
    title: "Understandable Structure",
    description:
      "Structure pages so content and navigation are immediately understandable to prospective clients.",
  },
  {
    title: "Mobile Usability First",
    description:
      "Consider touch targets, typography scaling and mobile performance throughout implementation.",
  },
  {
    title: "Semantic & Search-Ready",
    description:
      "Use appropriate metadata, semantic tags and clean markup that search crawlers can parse accurately.",
  },
  {
    title: "Maintainable Code",
    description:
      "Keep the implementation maintainable, avoiding fragile workarounds or heavy plugin dependencies.",
  },
  {
    title: "Future-Proof Growth",
    description:
      "Make future content updates, landing-page additions and ongoing SEO optimization practical.",
  },
];

/* ─── Shared layout tokens ──────────────────────────────────────────────────
   Applied consistently across every section so padding and max-width never
   drift between sections.
──────────────────────────────────────────────────────────────────────────── */
const px = "px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20";
const inner = "max-w-5xl mx-auto";

export default function WebDevelopmentPage() {
  return (
    <div className="w-full">

      {/* ─────────────────────────────────────────────────────────────────
          1. Hero
          ─────────────────────────────────────────────────────────────────
          Layout context:
          • NotificationBar is static and sits above everything (~34px tall).
          • Header is position:fixed; on desktop it floats at top-6 from the
            viewport top (not from below the notification bar). Its pill is
            roughly 50–56px tall, so the bottom of the header reaches about
            top-6 + 56px ≈ 80px below the viewport top.
          • When the notification bar is visible the effective offset before
            the header clears is ~34px (bar) + ~80px (header) = ~114px.
          • pt-28 (112px) on mobile-to-sm is close enough; we bump to pt-32
            at md+ to be safe.
          • On mobile the header is pinned to bottom-4, so no top offset is
            needed for nav — but we add pb-24 so content isn't hidden under
            the bottom nav.
          ───────────────────────────────────────────────────────────────── */}
      <section
        id="webdev-hero"
        aria-labelledby="webdev-hero-heading"
        className={`w-full bg-blue-100 border-b border-black/10 ${px} pt-28 pb-24 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24`}
      >
        <div className={inner}>
          {/* Eyebrow */}
          <span className="mb-4 inline-block border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-widest text-gray-800 sm:text-sm">
            Website Development Services
          </span>

          {/* H1 */}
          <h1
            id="webdev-hero-heading"
            className="mb-5 font-serif text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl max-w-3xl"
          >
            Websites Built Around Your Business Goals.
          </h1>

          {/* Supporting copy */}
          <p className="mb-8 max-w-2xl text-base leading-relaxed text-gray-700 sm:text-lg">
            From custom-built websites to WordPress solutions, Cinorium helps
            businesses create useful, responsive and search-aware digital
            experiences. Every project starts with understanding what the
            website needs to accomplish.
          </p>

          {/* CTAs — stack on mobile, inline at sm+ */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="/contact"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-black px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-900 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 sm:text-base"
            >
              <span>Discuss Your Project</span>
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 text-amber-400"
              />
            </Link>

            <Link
              href="/work"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border-2 border-black bg-white/80 px-7 py-3.5 text-sm font-semibold text-gray-900 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 sm:text-base"
            >
              <span>Explore Selected Work</span>
              <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          2. Business Problems
          ───────────────────────────────────────────────────────────────── */}
      <section
        id="business-problems"
        aria-labelledby="business-problems-heading"
        className={`w-full bg-white border-b border-black/10 ${px} py-16 sm:py-20 lg:py-24`}
      >
        <div className={inner}>
          <div className="mb-10 sm:mb-12">
            <span className="mb-3 inline-block border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-wider text-gray-800 sm:text-sm">
              Common Challenges
            </span>
            <h2
              id="business-problems-heading"
              className="mb-3 font-serif text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl max-w-2xl"
            >
              A Business Website Needs to Do More Than Look Good.
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-gray-600">
              Many business websites struggle not because of poor visual intent,
              but because of structural, technical, and strategic shortcomings.
            </p>
          </div>

          {/* 1 → 2 → 3 column responsive grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {businessProblems.map((problem) => {
              const Icon = problem.icon;
              return (
                <div
                  key={problem.title}
                  className="flex flex-col rounded-2xl border-2 border-black bg-white p-6 shadow-xs transition-shadow duration-200 hover:shadow-md"
                >
                  <div className="mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-amber-300 bg-amber-50 text-amber-800">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 font-serif text-lg font-bold text-gray-900 sm:text-xl">
                    {problem.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {problem.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          3. Core Services (5 cards)
          ─────────────────────────────────────────────────────────────────
          5 cards in a 3-col desktop grid → row 1: cards 1-2-3, row 2: cards 4-5.
          The last row is left-aligned (standard grid behaviour). No col-span
          tricks are applied — they were previously no-ops and have been removed.
          ───────────────────────────────────────────────────────────────── */}
      <section
        id="core-services"
        aria-labelledby="core-services-heading"
        className={`w-full bg-amber-50/40 border-b border-black/10 ${px} py-16 sm:py-20 lg:py-24`}
      >
        <div className={inner}>
          <div className="mb-10 sm:mb-12">
            <span className="mb-3 inline-block border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-wider text-gray-800 sm:text-sm">
              Our Expertise
            </span>
            <h2
              id="core-services-heading"
              className="mb-3 font-serif text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl max-w-2xl"
            >
              Website Development Services
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
              We design and develop solutions tailored to your business model,
              technical requirements and audience expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="flex flex-col rounded-2xl border-2 border-black bg-white p-6 shadow-xs transition-shadow duration-200 hover:shadow-lg"
                >
                  {/* Icon */}
                  <div className="mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-amber-300 bg-amber-100 text-amber-900">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-2 font-serif text-lg font-bold text-gray-900 sm:text-xl">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-5 text-sm leading-relaxed text-gray-700">
                    {service.description}
                  </p>

                  {/* Highlights box — grow fills remaining card height */}
                  <div className="mb-5 grow rounded-xl border border-gray-100 bg-gray-50 p-4">
                    <ul className="space-y-2">
                      {service.highlights.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <CheckCircle2
                            className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600"
                            aria-hidden="true"
                          />
                          <span className="text-xs leading-relaxed text-gray-600 sm:text-sm">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card footer */}
                  <div className="border-t border-gray-100 pt-4">
                    <Link
                      href="/contact"
                      className="group inline-flex items-center gap-2 text-sm font-semibold text-gray-900 transition-colors hover:text-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowRight
                        className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 text-amber-500"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          4. Process
          ───────────────────────────────────────────────────────────────── */}
      <section
        id="process"
        aria-labelledby="process-heading"
        className={`w-full bg-white border-b border-black/10 ${px} py-16 sm:py-20 lg:py-24`}
      >
        <div className={inner}>
          <div className="mb-10 sm:mb-12">
            <span className="mb-3 inline-block border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-wider text-gray-800 sm:text-sm">
              The Process
            </span>
            <h2
              id="process-heading"
              className="mb-3 font-serif text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl"
            >
              How We Work
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
              A structured four-step approach focused on clarity, practical
              milestones and solid implementation.
            </p>
          </div>

          <div className="mb-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col rounded-2xl border-2 border-black bg-white p-6"
              >
                <span className="mb-4 inline-block w-max rounded-xl border border-amber-300 bg-amber-50 px-3 py-1.5 font-serif text-xl font-bold text-amber-900">
                  {step.number}
                </span>
                <h3 className="mb-2 font-serif text-lg font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Scope note */}
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 text-xs leading-relaxed text-gray-600 sm:p-6 sm:text-sm">
            <strong className="font-semibold text-gray-900">
              Scope &amp; Delivery Note:
            </strong>{" "}
            Timelines, revisions, specialized third-party integrations, content
            production and ongoing support depend strictly on the agreed scope
            for each project. We avoid arbitrary fixed-timeline promises,
            focusing instead on realistic, well-defined milestones.
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          5. Selected Project Experience
          ───────────────────────────────────────────────────────────────── */}
      <section
        id="selected-experience"
        aria-labelledby="selected-experience-heading"
        className={`w-full bg-amber-50/30 border-b border-black/10 ${px} py-16 sm:py-20 lg:py-24`}
      >
        <div className={inner}>
          {/* Section header + link */}
          <div className="mb-10 flex flex-col gap-5 sm:mb-12 md:flex-row md:items-end md:justify-between">
            <div className="min-w-0">
              <span className="mb-3 inline-block border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-wider text-gray-800 sm:text-sm">
                Portfolio Evidence
              </span>
              <h2
                id="selected-experience-heading"
                className="mb-2 font-serif text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl"
              >
                Selected Project Experience
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-gray-600">
                Real production websites built for businesses with performance,
                structure, and user journey in mind.
              </p>
            </div>

            <Link
              href="/work"
              className="group inline-flex shrink-0 items-center gap-2 rounded-2xl bg-black px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-gray-900 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
            >
              <span>Explore All Selected Work</span>
              <ArrowRight
                className="h-4 w-4 shrink-0 text-amber-400 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>

          <div className="flex flex-col gap-8">

            {/* ── Clothing Nexus card ─────────────────────────────────── */}
            <article className="flex flex-col rounded-2xl border-2 border-black bg-white p-6 shadow-xs sm:p-8">
              {/* Badge row */}
              <div className="mb-5 flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                    Live Website
                  </span>
                  <span className="rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-800">
                    Next.js
                  </span>
                  <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-900">
                    Product Catalogue
                  </span>
                </div>
                <span className="shrink-0 font-mono text-xs text-gray-500">
                  clothingnexus.com
                </span>
              </div>

              <h3 className="mb-3 font-serif text-2xl font-bold text-gray-900 sm:text-3xl">
                Clothing Nexus
              </h3>

              <p className="mb-6 max-w-3xl text-base leading-relaxed text-gray-700">
                A custom business website with a substantial product catalogue,
                built with Next.js. Development included careful attention to
                website structure, product image optimization, technical SEO,
                and performance.
              </p>

              {/* PageSpeed Insights panel */}
              <div className="mb-6 rounded-xl border-2 border-gray-900 bg-amber-50/40 p-5 sm:p-6">
                {/* Panel header */}
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 pb-3">
                  <div className="flex items-center gap-2">
                    <Gauge
                      className="h-5 w-5 shrink-0 text-gray-900"
                      aria-hidden="true"
                    />
                    <span className="font-serif text-sm font-bold text-gray-900 sm:text-base">
                      PageSpeed Insights Lab Report
                    </span>
                  </div>
                  <span className="inline-block rounded-lg border border-gray-300 bg-white px-2.5 py-0.5 text-xs font-medium text-gray-600">
                    Captured 29 October 2026
                  </span>
                </div>

                {/* Score grid: 2 cols on mobile, 5 cols at sm+
                    The last (5th) card does NOT need col-span on mobile
                    because we use a simple 2-col grid; at sm it becomes 5-col. */}
                <div
                  className="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-5"
                  role="list"
                  aria-label="Lighthouse audit scores"
                >
                  {[
                    { label: "Desktop Perf.", score: 100, color: "text-emerald-600" },
                    { label: "Mobile Perf.",  score: 75,  color: "text-amber-600"   },
                    { label: "Accessibility", score: 96,  color: "text-emerald-600" },
                    { label: "Best Practices",score: 96,  color: "text-emerald-600" },
                    { label: "SEO",           score: 92,  color: "text-emerald-600" },
                  ].map((metric) => (
                    <div
                      key={metric.label}
                      role="listitem"
                      className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-white p-3 text-center"
                    >
                      <span className="mb-1 block text-[10px] font-semibold uppercase leading-tight tracking-wide text-gray-600 sm:text-[11px]">
                        {metric.label}
                      </span>
                      <span
                        className={`font-serif text-2xl font-bold leading-none ${metric.color}`}
                      >
                        {metric.score}
                      </span>
                      <span className="mt-0.5 text-xs text-gray-400">/100</span>
                    </div>
                  ))}
                </div>

                {/* Disclaimer */}
                <p className="flex items-start gap-2 text-xs leading-relaxed text-gray-600">
                  <Info
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gray-500"
                    aria-hidden="true"
                  />
                  <span>
                    Results from a specific Lighthouse lab audit captured on 29
                    October 2026. Lab scores test synthetic conditions and differ
                    from field-user Core Web Vitals; live performance varies with
                    real-world networks and devices.
                  </span>
                </p>
              </div>

              <div>
                <a
                  href="https://www.clothingnexus.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                >
                  <span>View Live Website</span>
                  <ExternalLink
                    className="h-4 w-4 shrink-0 text-amber-400"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </article>

            {/* ── CN IT Solutions card ────────────────────────────────── */}
            <article className="flex flex-col rounded-2xl border-2 border-black bg-white p-6 shadow-xs sm:p-8">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                    Live Website
                  </span>
                  <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-900">
                    IT Business Website
                  </span>
                </div>
                <span className="shrink-0 font-mono text-xs text-gray-500">
                  cnitsolutions.com
                </span>
              </div>

              <h3 className="mb-3 font-serif text-2xl font-bold text-gray-900 sm:text-3xl">
                CN IT Solutions
              </h3>

              <p className="mb-6 max-w-3xl text-base leading-relaxed text-gray-700">
                A dedicated website developed for an IT services business,
                focused on clearly presenting its service offerings and
                establishing an online presence. Developed for an affiliated
                business within the same corporate group as Clothing Nexus.
              </p>

              <div>
                <a
                  href="https://www.cnitsolutions.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                >
                  <span>View Live Website</span>
                  <ExternalLink
                    className="h-4 w-4 shrink-0 text-amber-400"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </article>

            {/* Concepts callout */}
            <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white/70 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div>
                <h4 className="mb-1 font-serif text-lg font-bold text-gray-900">
                  Exploratory Concepts &amp; Samples
                </h4>
                <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
                  Our portfolio also features industry concept prototypes
                  including Tooni Wear (on hold), March Computer, Lexway, Khawar
                  Law Associates and 3G Leather.
                </p>
              </div>
              <Link
                href="/work#concepts"
                className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-gray-900 underline decoration-amber-400 underline-offset-4 transition-colors hover:text-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
              >
                <span>View Concept Samples</span>
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          6. What Makes the Approach Different
          ─────────────────────────────────────────────────────────────────
          5 approach cards + 1 "Honest Promises" card = 6 total.
          lg:grid-cols-3 → exactly 2 rows of 3. Perfectly balanced.
          ───────────────────────────────────────────────────────────────── */}
      <section
        id="approach-difference"
        aria-labelledby="approach-heading"
        className={`w-full bg-white border-b border-black/10 ${px} py-16 sm:py-20 lg:py-24`}
      >
        <div className={inner}>
          <div className="mb-10 sm:mb-12">
            <span className="mb-3 inline-block border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-wider text-gray-800 sm:text-sm">
              Our Standard
            </span>
            <h2
              id="approach-heading"
              className="mb-3 font-serif text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl max-w-2xl"
            >
              What Makes the Approach Different
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
              We connect website development with search foundations from day
              one, creating practical value without unsupported claims.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {approachDifferences.map((diff) => (
              <div
                key={diff.title}
                className="rounded-2xl border-2 border-black bg-white p-6"
              >
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-sm font-bold text-amber-900">
                  ✓
                </div>
                <h3 className="mb-2 font-serif text-lg font-bold text-gray-900">
                  {diff.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {diff.description}
                </p>
              </div>
            ))}

            {/* 6th card — "Honest Promises" completes the 2×3 grid */}
            <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-6">
              <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-900">
                <ShieldCheck
                  className="h-4 w-4 shrink-0 text-amber-700"
                  aria-hidden="true"
                />
                Realistic Expectations
              </div>
              <h3 className="mb-2 font-serif text-lg font-bold text-gray-900">
                Honest Promises
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                We don&apos;t claim that every line of code is magically
                optimized or that technical SEO alone guarantees top rankings.
                We provide solid technical engineering that supports long-term
                commercial success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contextual Investigation Callout ────────────────────────── */}
      <section className={`w-full bg-[#fcfbf7] border-b border-black/10 ${px} py-12`}>
        <div className="max-w-4xl mx-auto rounded-3xl border-2 border-black bg-blue-100 p-7 sm:p-9 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-700 block mb-1">
              From Our Journal · The Internet, Under the Hood
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              How Website Development Improves Search Visibility
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed font-light">
              Read our analysis on why technical foundations, site speed, and semantic page structure directly influence search discovery and business conversions.
            </p>
          </div>
          <Link
            href="/journal/improve-website-search-visibility"
            className="inline-flex items-center gap-2 rounded-2xl bg-black px-6 py-3.5 text-sm font-semibold text-white hover:bg-gray-900 transition-all shrink-0"
          >
            <span>Read Investigation</span>
            <ArrowRight className="h-4 w-4 text-amber-400" />
          </Link>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          7. FAQ
          ───────────────────────────────────────────────────────────────── */}
      <section
        id="webdev-faqs"
        aria-labelledby="webdev-faq-heading"
        className={`w-full bg-amber-50/40 border-b border-black/10 ${px} py-16 sm:py-20 lg:py-24`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 sm:mb-12">
            <span className="mb-3 inline-block border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-widest text-gray-700 sm:text-sm">
              Common Questions
            </span>
            <h2
              id="webdev-faq-heading"
              className="mb-3 font-serif text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl"
            >
              Frequently Asked Questions
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
              Clear answers about our website development process, technology
              choices, costs, timelines and SEO foundations.
            </p>
          </div>

          <WebDevFaq />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          8. Final CTA
          ───────────────────────────────────────────────────────────────── */}
      <section
        id="webdev-cta"
        aria-labelledby="webdev-cta-heading"
        className={`w-full bg-blue-100 ${px} py-20 lg:py-24`}
      >
        <div className={inner}>
          <span className="mb-4 inline-block border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-widest text-gray-800 sm:text-sm">
            Let&apos;s Talk About Your Project
          </span>

          <h2
            id="webdev-cta-heading"
            className="mb-4 font-serif text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl max-w-2xl"
          >
            Ready to Build a Better Website?
          </h2>

          <p className="mb-8 max-w-2xl text-base leading-relaxed text-gray-700 sm:text-lg">
            Tell us what your business needs, what your current website is
            missing, or what you want to build from scratch. We&apos;ll discuss
            the requirements and identify a practical next step.
          </p>

          <Link
            href="/contact"
            className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-black px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-900 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 sm:text-base"
          >
            <span>Discuss Your Project</span>
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 text-amber-400"
            />
          </Link>
        </div>
      </section>
    </div>
  );
}
