import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Search,
  Compass,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Cinorium | Web Development & SEO",
  description:
    "Learn about Cinorium's approach to website development, technical SEO and search visibility, bringing stronger website foundations and practical optimization together.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Cinorium | Web Development & SEO",
    description:
      "Learn about Cinorium's approach to website development, technical SEO and search visibility, bringing stronger website foundations and practical optimization together.",
    url: "https://cinorium.com/about",
    type: "website",
  },
};

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Learn about the business, its audience, existing website and objectives.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Identify the appropriate scope, priorities and technical or search requirements.",
  },
  {
    number: "03",
    title: "Build or Improve",
    description:
      "Implement the agreed website development or SEO work.",
  },
  {
    number: "04",
    title: "Refine",
    description:
      "Identify further improvements based on the project's needs and available performance data.",
  },
];

const principles = [
  {
    title: "Thoughtful Foundations",
    description:
      "Structure and technical decisions should serve a clear purpose, establishing codebases and site hierarchies that remain maintainable over time.",
    icon: Layers,
  },
  {
    title: "Practical Execution",
    description:
      "Prioritize improvements that make genuine commercial and technical sense for your business, avoiding vanity metrics or over-engineered solutions.",
    icon: Compass,
  },
  {
    title: "Clear Communication",
    description:
      "Explain the scope, technical decisions, trade-offs and next steps honestly, keeping you informed and confident throughout the engagement.",
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
            ABOUT CINORIUM
          </span>

          {/* Heading */}
          <h1 className="mb-6 font-serif text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl">
            Where Web Development Meets Search Growth.
          </h1>

          {/* Introduction */}
          <p className="max-w-3xl text-base leading-relaxed text-gray-700 sm:text-lg mb-8">
            Cinorium brings website development and search optimization together
            to help businesses build a stronger online foundation. The focus is on
            creating useful, well-structured websites and improving the ways
            potential customers can discover them.
          </p>

          {/* Primary CTA */}
          <div>
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
          </div>
        </div>
      </section>

      {/* 2. The Thinking Behind Cinorium */}
      <section
        id="the-thinking"
        className="w-full bg-white py-16 sm:py-20 lg:py-24 px-6 sm:px-10 md:px-16 lg:px-24 border-b border-black/10"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <span className="mb-3 inline-block w-max border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-wider text-gray-800 sm:text-sm">
                OUR PHILOSOPHY
              </span>

              <h2 className="mb-6 font-serif text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                A Website Should Be More Than an Online Presence.
              </h2>

              <div className="space-y-4 text-base leading-relaxed text-gray-700">
                <p>
                  Publishing a website is only one part of building a useful
                  digital presence. Its structure, usability, loading performance
                  and content all directly influence how effectively it serves its
                  audience. A beautifully designed website delivers little value
                  if prospective customers struggle to navigate it or cannot find
                  it in search results.
                </p>

                <p>
                  Cinorium operates on a connected approach: we consider search
                  structure and technical foundations from the very beginning of
                  development. Rather than treating SEO as an afterthought added to
                  a finished template, we design site hierarchies, URL models,
                  semantic markup and page speed considerations into the build
                  itself.
                </p>

                <p>
                  Once a website is established, we identify practical
                  opportunities for continued optimization. This founder-led
                  approach ensures close collaboration, careful craftsmanship and
                  solutions built around real business objectives rather than
                  generic industry buzzwords.
                </p>
              </div>
            </div>

            {/* Right Callout Box */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border-2 border-black bg-amber-50/50 p-7 sm:p-9 shadow-sm">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-amber-900">
                  <Sparkles className="h-3.5 w-3.5 text-amber-700" />
                  Founder-Led Attention
                </div>

                <h3 className="mb-3 font-serif text-xl sm:text-2xl font-bold text-gray-900">
                  Practical Direction, Not Bloated Process
                </h3>

                <p className="text-sm leading-relaxed text-gray-700 mb-6">
                  Every project at Cinorium is led directly by Muhammad Huzaifa.
                  You work directly with the person architecting, building, and
                  optimizing your digital presence, ensuring clarity, accountability
                  and consistent execution.
                </p>

                <div className="pt-5 border-t border-amber-200/80 flex flex-col gap-2.5 text-xs font-medium text-gray-800">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Technical foundations integrated from day one</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>No generic templates or rigid agency bloat</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Direct, honest communication throughout</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Two Connected Areas of Work */}
      <section
        id="services-overview"
        className="w-full bg-amber-50/40 py-16 sm:py-20 lg:py-24 px-6 sm:px-10 md:px-16 lg:px-24 border-b border-black/10"
      >
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 sm:mb-14 text-center sm:text-left">
            <span className="mb-3 inline-block w-max border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-wider text-gray-800 sm:text-sm">
              CORE CAPABILITIES
            </span>
            <h2 className="mb-3 font-serif text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
              Two Connected Areas of Work
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
              Website development and search visibility are most effective when
              planned and built to support one another from the beginning.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card A: Website Development */}
            <div className="flex flex-col justify-between rounded-3xl border-2 border-black bg-white p-7 sm:p-9 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-300 bg-amber-100 text-amber-900">
                    <Code2 className="h-6 w-6" />
                  </div>
                  <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-700">
                    Custom &amp; WordPress
                  </span>
                </div>

                <h3 className="mb-3 font-serif text-2xl font-bold text-gray-900">
                  Website Development
                </h3>

                <p className="mb-6 text-sm sm:text-base leading-relaxed text-gray-700">
                  We build custom websites and WordPress platforms designed
                  around responsive layouts, usability, fast loading times, and a
                  maintainable technical foundation.
                </p>

                <div className="mb-8 rounded-2xl border border-gray-100 bg-gray-50/70 p-5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-800 mb-3">
                    Key Considerations
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Custom Next.js &amp; modern React architecture</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Clean WordPress setups without plugin bloat</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Mobile-first responsive design &amp; fast page speeds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Accessible, semantic markup built for longevity</span>
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

            {/* Card B: SEO & Search Visibility */}
            <div className="flex flex-col justify-between rounded-3xl border-2 border-black bg-white p-7 sm:p-9 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-300 bg-amber-100 text-amber-900">
                    <Search className="h-6 w-6" />
                  </div>
                  <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-700">
                    Technical &amp; Content
                  </span>
                </div>

                <h3 className="mb-3 font-serif text-2xl font-bold text-gray-900">
                  SEO &amp; Search Visibility
                </h3>

                <p className="mb-6 text-sm sm:text-base leading-relaxed text-gray-700">
                  We improve search foundations through technical SEO, on-page
                  optimization, keyword research and useful content, helping
                  businesses become easier for potential customers to discover.
                </p>

                <div className="mb-8 rounded-2xl border border-gray-100 bg-gray-50/70 p-5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-800 mb-3">
                    Key Considerations
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Technical SEO audits, indexing &amp; crawlability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>On-page structure, metadata &amp; content alignment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Information architecture built around customer intent</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Evolving consideration of AI-assisted search discovery</span>
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
              THE PROCESS
            </span>
            <h2 className="mb-3 font-serif text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
              How We Approach Projects
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
              A clear, practical framework to move your website from initial
              requirements to a solid, functional online foundation.
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
                  <span className="inline-block rounded-xl border border-amber-300 bg-amber-50 px-3.5 py-1.5 font-serif text-xl font-bold text-amber-900 mb-4">
                    {step.number}
                  </span>
                  <h3 className="mb-2 font-serif text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Scope Transparency Note */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50/70 p-5 sm:p-6 text-xs sm:text-sm text-gray-600 leading-relaxed">
            <strong className="text-gray-900">Scope Note:</strong> Not every
            project automatically requires all four stages or ongoing retainers.
            Some engagements focus purely on a targeted website build, while
            others involve a focused technical SEO audit or content restructuring.
            The exact scope is tailored around your business objectives.
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
              <h2 className="mb-3 font-serif text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Real Projects &amp; Tailored Concepts
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-gray-600">
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

                <h3 className="mb-2 font-serif text-2xl font-bold text-gray-900">
                  Clothing Nexus
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mb-6">
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

                <h3 className="mb-2 font-serif text-2xl font-bold text-gray-900">
                  CN IT Solutions
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mb-6">
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
            <h2 className="mb-3 font-serif text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
              Principles Behind the Work
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
              The foundational standards that guide every recommendation,
              technical decision and optimization.
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
                  <h3 className="mb-3 font-serif text-xl font-bold text-gray-900">
                    {principle.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
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

          <h2 className="mb-4 font-serif text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl max-w-3xl">
            Have a Project in Mind?
          </h2>

          <p className="max-w-2xl text-base leading-relaxed text-gray-700 sm:text-lg mb-8">
            Whether you&apos;re planning a new website or looking to improve your
            existing search visibility, let&apos;s discuss your goals and identify
            a practical starting point.
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
