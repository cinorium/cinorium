import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  FileSearch,
  FileText,
  BookOpen,
  Link2,
  AlertTriangle,
  MessageSquareX,
  RefreshCw,
  CheckCircle2,
  Code2,
  ShieldCheck,
  Target,
  ClipboardList,
  TrendingUp,
} from "lucide-react";
import SeoFaq from "./SeoFaq";

export const metadata: Metadata = {
  title: "SEO Services & Search Optimization | Cinorium",
  description:
    "Improve your website's search visibility with technical SEO, on-page optimization, strategic content and ongoing search performance improvements.",
  alternates: {
    canonical: "/seo-services",
  },
  openGraph: {
    title: "SEO Services & Search Optimization | Cinorium",
    description:
      "Improve your website's search visibility with technical SEO, on-page optimization, strategic content and ongoing search performance improvements.",
    url: "https://www.cinorium.com/seo-services",
    type: "website",
  },
};

/* ─── Data ─────────────────────────────────────────────────────────────── */

const challenges = [
  {
    icon: AlertTriangle,
    title: "Technical Issues",
    description:
      "Crawlability, indexation, internal linking, site structure, and performance problems that may prevent important pages from being discovered or understood correctly.",
  },
  {
    icon: MessageSquareX,
    title: "Pages That Miss Search Intent",
    description:
      "Pages with unclear headings, weak content structure, irrelevant targeting, or insufficient answers to the questions potential customers actually have.",
  },
  {
    icon: RefreshCw,
    title: "No Consistent Improvement Process",
    description:
      "Websites that receive little ongoing attention to content quality, search performance, technical issues, or changing business priorities.",
  },
];

const coreServices = [
  {
    id: "technical-seo",
    icon: FileSearch,
    title: "Technical SEO",
    description:
      "Review the technical foundations that affect how search engines can access, crawl, and understand your website.",
    highlights: [
      "Crawlability and indexation checks",
      "XML sitemap and robots.txt review",
      "Canonical URL and redirect checks",
      "Site structure and internal-linking review",
      "Performance and Core Web Vitals investigation",
      "Prioritized technical recommendations",
    ],
  },
  {
    id: "on-page-seo",
    icon: FileText,
    title: "On-Page SEO",
    description:
      "Improve individual page relevance, structure, and metadata so pages better match what your audience is searching for.",
    highlights: [
      "Page title and meta description optimization",
      "Heading hierarchy and content structure",
      "Search intent and keyword mapping",
      "Internal linking improvements",
      "Image alt text and optimization",
      "Content relevance and page-level recommendations",
    ],
  },
  {
    id: "keyword-research",
    icon: Search,
    title: "Keyword Research & Content Strategy",
    description:
      "Identify the topics and questions your audience searches for, and map them to a practical, prioritized content plan.",
    highlights: [
      "Relevant search topics and customer questions",
      "Search intent mapping to existing pages",
      "Practical content roadmap development",
      "Reduce unnecessary page overlap",
      "Prioritized by business relevance and evidence",
    ],
  },
  {
    id: "content-optimization",
    icon: BookOpen,
    title: "SEO Content Optimization",
    description:
      "Improve the usefulness, accuracy, structure, and topical coverage of existing content — and develop new content where scope allows.",
    highlights: [
      "Improve existing website copy and articles",
      "Identify content gaps and opportunities",
      "Improve clarity, usefulness, and structure",
      "Topical coverage and page-level improvements",
      "Editorial review for accuracy and relevance",
    ],
  },
  {
    id: "off-page-seo",
    icon: Link2,
    title: "Off-Page SEO & Link Building",
    description:
      "Support ethical link acquisition through relevant outreach and natural link opportunities. Scope and suitability depend on each project.",
    highlights: [
      "Ethical link acquisition and relevant outreach",
      "Focus on editorial value and relevance",
      "Natural link opportunity identification",
      "No link purchasing or manipulative tactics",
      "Scope and outcomes discussed per project",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand the business, target audience, website, services, and search objectives before any recommendations are made.",
  },
  {
    number: "02",
    title: "Audit & Prioritize",
    description:
      "Review technical, on-page, content, and search-performance issues. Prioritize meaningful recommendations rather than an overwhelming checklist.",
  },
  {
    number: "03",
    title: "Implement",
    description:
      "Carry out agreed improvements or provide actionable recommendations, depending on the agreed project scope.",
  },
  {
    number: "04",
    title: "Measure & Refine",
    description:
      "Review available performance data, identify new opportunities, and adjust the plan as the website and business evolve.",
  },
];

const webFoundations = [
  {
    icon: Code2,
    title: "Clean, Semantic Architecture",
    description:
      "Meaningful HTML structure, logical heading hierarchy, and clean markup that search engines can parse accurately.",
  },
  {
    icon: Search,
    title: "Accessible Navigation & Linking",
    description:
      "Clear site structure and internal linking so both users and crawlers can reach and understand every important page.",
  },
  {
    icon: TrendingUp,
    title: "Performance & Usability",
    description:
      "Responsive layouts, appropriate loading speeds, and mobile usability that support both visitor experience and search signals.",
  },
  {
    icon: FileText,
    title: "Indexability & Metadata",
    description:
      "Correctly configured canonical URLs, sitemaps, robots directives, and metadata so search engines understand your pages.",
  },
];

const expectations = [
  {
    icon: Target,
    title: "Prioritized Work",
    description:
      "Focus on meaningful issues and opportunities instead of treating every SEO recommendation as equally important.",
  },
  {
    icon: ClipboardList,
    title: "Transparent Scope",
    description:
      "Clarify what will be audited, implemented, delivered, and measured before work begins — with no ambiguity about inclusions.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Perspective",
    description:
      "Build sustainable foundations and improve them over time rather than relying on shortcuts or ranking guarantees.",
  },
];

const aeoGeoPoints = [
  "Clear, accurate, well-organized content that directly answers audience questions",
  "Descriptive headings and meaningful page structure for easy comprehension",
  "Accessible, indexable pages that search and AI systems can reach",
  "Consistent business name, address, and contact information where applicable",
  "Useful supporting evidence and links to trustworthy sources",
  "Structured data when appropriate and accurately implemented",
];

/* ─── Shared layout tokens ─────────────────────────────────────────────── */
const px = "px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20";
const inner = "max-w-5xl mx-auto";

/* ─── Page ─────────────────────────────────────────────────────────────── */
export default function SeoServicesPage() {
  return (
    <div className="w-full">

      {/* ── 1. Hero ──────────────────────────────────────────────────────── */}
      <section
        id="seo-hero"
        aria-labelledby="seo-hero-heading"
        className={`w-full bg-blue-100 border-b border-black/10 ${px} pt-28 pb-24 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24`}
      >
        <div className={inner}>
          <span className="mb-4 inline-block border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-widest text-gray-800 sm:text-sm">
            SEO Services &amp; Search Visibility
          </span>

          <h1
            id="seo-hero-heading"
            className="mb-5 font-serif text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl max-w-3xl"
          >
            Improve Your Search Visibility with a Stronger SEO Foundation.
          </h1>

          <p className="mb-8 max-w-2xl text-base leading-relaxed text-gray-700 sm:text-lg">
            Search visibility takes more than adding keywords to a page.
            Cinorium helps businesses improve their technical SEO, on-page
            structure and content so search engines can better understand their
            websites and potential customers can find relevant information.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="/contact"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-black px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-900 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 sm:text-base"
            >
              <span>Discuss Your SEO Project</span>
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 text-amber-400"
              />
            </Link>

            <Link
              href="#seo-approach"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border-2 border-black bg-white/80 px-7 py-3.5 text-sm font-semibold text-gray-900 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 sm:text-base"
            >
              <span>Explore Our Approach</span>
              <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. Common SEO Challenges ─────────────────────────────────────── */}
      <section
        id="seo-challenges"
        aria-labelledby="seo-challenges-heading"
        className={`w-full bg-white border-b border-black/10 ${px} py-16 sm:py-20 lg:py-24`}
      >
        <div className={inner}>
          <div className="mb-10 sm:mb-12">
            <span className="mb-3 inline-block border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-wider text-gray-800 sm:text-sm">
              Common Challenges
            </span>
            <h2
              id="seo-challenges-heading"
              className="mb-3 font-serif text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl max-w-2xl"
            >
              Your Website May Be Holding Back Its Own Visibility.
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-gray-600">
              Many businesses have websites that could perform better in search
              — not because of a single dramatic failure, but because of
              accumulated structural, technical, and content gaps.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {challenges.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex flex-col rounded-2xl border-2 border-black bg-white p-6 shadow-xs transition-shadow duration-200 hover:shadow-md"
                >
                  <div className="mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-amber-300 bg-amber-50 text-amber-800">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 font-serif text-lg font-bold text-gray-900 sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. Core SEO Services ─────────────────────────────────────────── */}
      <section
        id="core-seo-services"
        aria-labelledby="core-seo-services-heading"
        className={`w-full bg-amber-50/40 border-b border-black/10 ${px} py-16 sm:py-20 lg:py-24`}
      >
        <div className={inner}>
          <div className="mb-10 sm:mb-12">
            <span className="mb-3 inline-block border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-wider text-gray-800 sm:text-sm">
              Our Expertise
            </span>
            <h2
              id="core-seo-services-heading"
              className="mb-3 font-serif text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl max-w-2xl"
            >
              SEO Services Built Around Your Website and Business Goals.
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
              These services can be scoped individually or combined depending on
              your current priorities. Not every service is included in every
              project — scope is agreed before work begins.
            </p>
          </div>

          {/* 5-card grid: 1 → 2 → 3 cols */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="flex flex-col rounded-2xl border-2 border-black bg-white p-6 shadow-xs transition-shadow duration-200 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-amber-300 bg-amber-100 text-amber-900">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <h3 className="mb-2 font-serif text-lg font-bold text-gray-900 sm:text-xl">
                    {service.title}
                  </h3>

                  <p className="mb-5 text-sm leading-relaxed text-gray-700">
                    {service.description}
                  </p>

                  {/* Highlights — grows to fill card height */}
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

      {/* ── 4. SEO, AEO & GEO ───────────────────────────────────────────── */}
      <section
        id="seo-aeo-geo"
        aria-labelledby="seo-aeo-geo-heading"
        className={`w-full bg-white border-b border-black/10 ${px} py-16 sm:py-20 lg:py-24`}
      >
        <div className={inner}>
          <div className="mb-10 sm:mb-12">
            <span className="mb-3 inline-block border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-wider text-gray-800 sm:text-sm">
              Evolving Search
            </span>
            <h2
              id="seo-aeo-geo-heading"
              className="mb-3 font-serif text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl max-w-2xl"
            >
              Prepare Your Content for an Evolving Search Landscape.
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
              Traditional search, AI-generated answers, and answer-oriented
              experiences increasingly overlap. The same fundamentals underpin
              all of them.
            </p>
          </div>

          {/* Three concept cards */}
          <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {[
              {
                label: "SEO",
                heading: "Search Engine Optimization",
                body: "Help search engines discover, crawl, index, and evaluate your pages so relevant content appears for appropriate searches.",
              },
              {
                label: "AEO",
                heading: "Answer Engine Optimization",
                body: "Structure useful, accurate answers so information is easier to identify and understand across answer-oriented search experiences.",
              },
              {
                label: "GEO",
                heading: "Generative Engine Optimization",
                body: "Improve content clarity, factual grounding, organization, and usefulness so it is more easily understood within generative AI experiences.",
              },
            ].map((concept) => (
              <div
                key={concept.label}
                className="rounded-2xl border-2 border-black bg-white p-6"
              >
                <span className="mb-3 inline-block rounded-lg border border-amber-300 bg-amber-50 px-3 py-1 font-serif text-sm font-bold text-amber-900">
                  {concept.label}
                </span>
                <h3 className="mb-2 font-serif text-lg font-bold text-gray-900">
                  {concept.heading}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {concept.body}
                </p>
              </div>
            ))}
          </div>

          {/* Overlap note + practical list */}
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 sm:p-6">
            <p className="mb-5 text-sm leading-relaxed text-gray-700 sm:text-base">
              These approaches overlap considerably. No special technique
              guarantees inclusion in AI-generated answers — the same content
              practices that support sound SEO also tend to support discovery
              across AI-powered experiences. Relevant practices include:
            </p>
            <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {aeoGeoPoints.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600"
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-relaxed text-gray-600">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 5. Process ───────────────────────────────────────────────────── */}
      <section
        id="seo-approach"
        aria-labelledby="seo-approach-heading"
        className={`w-full bg-amber-50/40 border-b border-black/10 ${px} py-16 sm:py-20 lg:py-24`}
      >
        <div className={inner}>
          <div className="mb-10 sm:mb-12">
            <span className="mb-3 inline-block border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-wider text-gray-800 sm:text-sm">
              The Process
            </span>
            <h2
              id="seo-approach-heading"
              className="mb-3 font-serif text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl"
            >
              A Clear Process, From Audit to Improvement.
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
              A structured approach that prioritizes what matters for your
              specific website and business — not a generic checklist.
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

          {/* Outcomes note */}
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 text-xs leading-relaxed text-gray-600 sm:p-6 sm:text-sm">
            <strong className="font-semibold text-gray-900">
              On Timelines and Outcomes:
            </strong>{" "}
            SEO results depend on factors including competition, website
            history, implementation quality, content depth, and algorithm
            changes. Timelines vary and specific results cannot be guaranteed.
            We focus on building sound, sustainable foundations and improving
            meaningful signals over time.
          </div>
        </div>
      </section>

      {/* ── 6. SEO & Web Development Together ───────────────────────────── */}
      <section
        id="seo-web-dev"
        aria-labelledby="seo-web-dev-heading"
        className={`w-full bg-white border-b border-black/10 ${px} py-16 sm:py-20 lg:py-24`}
      >
        <div className={inner}>
          <div className="mb-10 sm:mb-12">
            <span className="mb-3 inline-block border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-wider text-gray-800 sm:text-sm">
              Website Foundations
            </span>
            <h2
              id="seo-web-dev-heading"
              className="mb-3 font-serif text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl max-w-2xl"
            >
              SEO Works Better When the Website Foundation Is Sound.
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
              Website structure and SEO are most effective when planned
              together. A well-built website reduces the technical debt that
              SEO work later has to compensate for.
            </p>
          </div>

          <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {webFoundations.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-2xl border-2 border-black bg-white p-6"
                >
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-300 bg-amber-50 text-amber-800">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="mb-1.5 font-serif text-lg font-bold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Platform-agnostic note + CTA */}
          <div className="flex flex-col gap-6 rounded-xl border border-amber-200 bg-amber-50/60 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <h3 className="mb-1.5 font-serif text-lg font-bold text-gray-900">
                Custom or WordPress — It Depends on Your Needs
              </h3>
              <p className="max-w-xl text-sm leading-relaxed text-gray-700">
                The right platform depends on your business model, content
                workflows, budget, and technical requirements. Both custom-built
                and WordPress websites can support a strong SEO foundation when
                built correctly.
              </p>
            </div>
            <Link
              href="/web-development"
              className="group inline-flex shrink-0 items-center gap-2 rounded-2xl bg-black px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-gray-900 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
            >
              <span>Explore Web Development</span>
              <ArrowRight
                className="h-4 w-4 shrink-0 text-amber-400 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 7. What You Can Expect ───────────────────────────────────────── */}
      <section
        id="seo-expectations"
        aria-labelledby="seo-expectations-heading"
        className={`w-full bg-amber-50/40 border-b border-black/10 ${px} py-16 sm:py-20 lg:py-24`}
      >
        <div className={inner}>
          <div className="mb-10 sm:mb-12">
            <span className="mb-3 inline-block border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-wider text-gray-800 sm:text-sm">
              What to Expect
            </span>
            <h2
              id="seo-expectations-heading"
              className="mb-3 font-serif text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl"
            >
              Practical Recommendations. Clear Priorities.
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
              Honest, prioritized work focused on what genuinely matters for
              your website — not on inflating deliverable counts or making
              unverifiable promises.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {expectations.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex flex-col rounded-2xl border-2 border-black bg-white p-6"
                >
                  <div className="mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-amber-300 bg-amber-100 text-amber-900">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 font-serif text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Honesty note */}
          <div className="mt-6 flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-5 sm:p-6">
            <ShieldCheck
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-700"
              aria-hidden="true"
            />
            <p className="text-sm leading-relaxed text-gray-600">
              <strong className="font-semibold text-gray-900">
                No fabricated metrics or invented results.
              </strong>{" "}
              We do not present unverified case studies, invent testimonials, or
              cite performance statistics that cannot be substantiated. SEO
              timelines and outcomes vary — and that is something we will always
              be honest about.
            </p>
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
              Explore how technical foundations, crawling efficiency, semantic markup, and on-page structure combine to support organic search performance.
            </p>
          </div>
          <Link
            href="/journal/improve-website-search-visibility"
            className="inline-flex items-center gap-2 rounded-2xl bg-black px-6 py-3.5 text-sm font-semibold text-white hover:bg-gray-900 transition-all shrink-0"
          >
            <span>Read Guide</span>
            <ArrowRight className="h-4 w-4 text-amber-400" />
          </Link>
        </div>
      </section>

      {/* ── 8. FAQ ───────────────────────────────────────────────────────── */}
      <section
        id="seo-faqs"
        aria-labelledby="seo-faq-heading"
        className={`w-full bg-white border-b border-black/10 ${px} py-16 sm:py-20 lg:py-24`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 sm:mb-12">
            <span className="mb-3 inline-block border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-widest text-gray-700 sm:text-sm">
              Common Questions
            </span>
            <h2
              id="seo-faq-heading"
              className="mb-3 font-serif text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl"
            >
              Frequently Asked Questions
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
              Honest answers about what SEO involves, what it can and cannot
              achieve, and how Cinorium approaches each project.
            </p>
          </div>

          <SeoFaq />
        </div>
      </section>

      {/* ── 9. Final CTA ─────────────────────────────────────────────────── */}
      <section
        id="seo-cta"
        aria-labelledby="seo-cta-heading"
        className={`w-full bg-blue-100 ${px} py-20 lg:py-24`}
      >
        <div className={inner}>
          <span className="mb-4 inline-block border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-widest text-gray-800 sm:text-sm">
            Let&apos;s Talk About Your Project
          </span>

          <h2
            id="seo-cta-heading"
            className="mb-4 font-serif text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl max-w-2xl"
          >
            Make Your Website Easier to Find.
          </h2>

          <p className="mb-8 max-w-2xl text-base leading-relaxed text-gray-700 sm:text-lg">
            Tell us about your website, your audience and the search visibility
            challenges you&apos;re facing. We&apos;ll discuss your goals and
            identify a practical next step.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-black px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-900 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 sm:text-base"
            >
              <span>Discuss Your SEO Project</span>
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 text-amber-400"
              />
            </Link>

            <Link
              href="/web-development"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 underline decoration-amber-400 decoration-2 underline-offset-4 transition-colors hover:text-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
            >
              <span>Explore Web Development</span>
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

