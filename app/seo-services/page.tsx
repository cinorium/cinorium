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
  Sparkles,
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
import SeoFaq from "./SeoFaq";

export const metadata: Metadata = {
  title: "Search Visibility & SEO Services",
  description:
    "Help customers discover your business through technical SEO, search intent research, useful content, and visibility across traditional and AI-powered search.",
  alternates: {
    canonical: "/seo-services",
  },
  openGraph: {
    title: "Search Visibility & SEO Services | Cinorium",
    description:
      "Improve how customers discover your business through technical SEO, useful content, and a stronger search presence.",
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
      "Broken links, indexing problems, slow pages, and unclear site structures can make important pages harder for search engines and visitors to access.",
  },
  {
    icon: MessageSquareX,
    title: "Content That Misses Intent",
    description:
      "Pages may target keywords but still fail to answer the questions, concerns, and comparisons that influence a customer's decision.",
  },
  {
    icon: RefreshCw,
    title: "No Consistent Search Strategy",
    description:
      "Without regular evaluation, content gaps, outdated pages, changing search behaviour, and competitor activity can go unnoticed.",
  },
];

const coreServices = [
  {
    id: "technical-seo",
    icon: FileSearch,
    title: "Technical SEO & Site Structure",
    description:
      "Improve the technical foundations that help search engines access, understand, and index your important website pages.",
    highlights: [
      "Crawlability, indexability, and sitemap checks",
      "Robots directives, canonical URLs, and redirects",
      "Website hierarchy and internal linking",
      "Page speed and Core Web Vitals assessment",
      "Relevant structured data and schema markup",
      "Prioritized technical improvement roadmap",
    ],
  },
  {
    id: "on-page-seo",
    icon: FileText,
    title: "On-Page SEO & Content Structure",
    description:
      "Make individual pages more relevant to the searches they are intended to serve and easier for visitors to understand.",
    highlights: [
      "Page titles and meta description optimization",
      "Clear headings and semantic page structure",
      "Search intent alignment",
      "Contextual internal links",
      "Image alt text and accessibility improvements",
      "Content clarity and page-level refinements",
    ],
  },
  {
    id: "keyword-research",
    icon: Search,
    title: "Keyword Research & Topic Planning",
    description:
      "Identify the searches, questions, and topics that matter to your audience and connect them to your business offerings.",
    highlights: [
      "Relevant commercial and informational keywords",
      "Search intent classification",
      "Topic clusters and content opportunities",
      "Keyword cannibalization checks",
      "Prioritization by relevance and business value",
    ],
  },
  {
    id: "content-optimization",
    icon: BookOpen,
    title: "Content Strategy & Optimization",
    description:
      "Build useful, well-organized content that addresses customer questions and supports your website's broader search strategy.",
    highlights: [
      "Existing content and landing page reviews",
      "Content gap identification",
      "Editorial planning and content briefs",
      "Clear explanations and useful supporting information",
      "Content accuracy, depth, and readability",
    ],
  },
  {
    id: "off-page-seo",
    icon: Link2,
    title: "Digital PR & Link Authority",
    description:
      "Strengthen your website's reputation through relevant mentions, editorial opportunities, and genuine industry relationships.",
    highlights: [
      "Relevant brand mentions and link opportunities",
      "Industry and publication research",
      "Contextual outreach planning",
      "Editorial relevance and quality assessment",
      "Transparent scope and agreed deliverables",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Diagnose & Audit",
    description:
      "Inspect technical crawl health, indexation coverage, current ranking footprint, and competitive search landscape.",
  },
  {
    number: "02",
    title: "Architect & Prioritize",
    description:
      "Create a clear, prioritized action roadmap addressing high-impact technical fixes and commercial intent gaps first.",
  },
  {
    number: "03",
    title: "Execute & Optimize",
    description:
      "Implement agreed structural changes, metadata updates, technical improvements, and high-value content refinements.",
  },
  {
    number: "04",
    title: "Measure & Iterate",
    description:
      "Review your website's technical health, existing search performance, content, and the search landscape around your business.",
  },
];

const webFoundations = [
  {
    icon: Code2,
    title: "Clear Page Structure",
    description:
      "Semantic HTML, descriptive headings, and accessible content help search engines and visitors understand your pages.",
  },
  {
    icon: Search,
    title: "Logical Website Navigation",
    description:
      "A well-organized site structure helps visitors find relevant information and gives search engines clearer paths between pages.",
  },
  {
    icon: TrendingUp,
    title: "Performance & Usability",
    description:
      "Responsive layouts, efficient loading, and good Core Web Vitals contribute to a better experience across devices.",
  },
  {
    icon: FileText,
    title: "Technical Search Signals",
    description:
      "Correct canonical tags, indexation settings, XML sitemaps, and metadata help search engines interpret your website.",
  },
];

const expectations = [
  {
    icon: Target,
    title: "Business-Led Priorities",
    description:
      "We prioritize improvements according to your audience, business goals, search opportunities, and available resources.",
  },
  {
    icon: ClipboardList,
    title: "Clear Scope & Deliverables",
    description:
      "Recommendations, implementation tasks, and agreed deliverables are defined before work begins.",
  },
  {
    icon: TrendingUp,
    title: "Ongoing Improvement",
    description:
      "Search performance needs regular evaluation. We use available data to identify what is improving and where further work is needed.",
  },
];

const aeoGeoPoints = [
  "Clear content that directly answers relevant customer questions",
  "Descriptive headings and logical content organization",
  "Accessible pages that search engines and AI crawlers can process",
  "Consistent business and brand information across relevant sources",
  "Accurate information supported by credible references where appropriate",
  "Relevant structured data that helps describe your pages and business",
];

/* ─── Shared layout tokens ─────────────────────────────────────────────── */
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
          name: "Search Visibility & SEO",
          item: "https://www.cinorium.com/seo-services",
        },
      ],
    },
    {
      "@type": "Service",
      name: "Search Visibility & SEO Services",
      serviceType: "Search Engine Optimization",
      provider: {
        "@id": "https://www.cinorium.com/#organization",
      },
      url: "https://www.cinorium.com/seo-services",
      description:
        "Comprehensive technical SEO audits, on-page optimization, search intent architecture, and entity authority engineered to capture high-intent buyers.",
      areaServed: ["Pakistan", "United States", "United Kingdom", "Worldwide"],
    },
  ],
};

export default function SeoServicesPage() {
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
        id="seo-hero"
        aria-labelledby="seo-hero-heading"
        className={`w-full bg-[#fdfbf7] border-b border-black/10 ${px} pt-28 pb-20 sm:pt-36 sm:pb-24`}
      >
        <div className={inner}>
          <div className="mb-4">
            <Badge variant="default" dot="amber" size="lg">
              Search Visibility &amp; SEO
            </Badge>
          </div>

          <h1
            id="seo-hero-heading"
            className="mb-6 font-heading text-3xl font-bold tracking-tight leading-[1.1] text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl"
          >
            Connect with Prospective Customers at the Moment of High Intent.
          </h1>

          <p className="mb-8 max-w-3xl text-base leading-relaxed text-gray-700 sm:text-lg font-light">
            Search visibility requires far more than scattering keywords across
            a page. As a digital marketing agency, Cinorium aligns technical
            site architecture, semantic content hierarchy, and crawl efficiency
            so search engines understand your value and buyers easily discover
            your business.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link href="/contact">
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto gap-2"
              >
                <span>Discuss Your SEO Project</span>
                <ArrowRight className="h-4 w-4 text-[#0b131e]" />
              </Button>
            </Link>

            <Link href="#core-seo-services">
              <Button
                variant="slateOutline"
                size="lg"
                className="w-full sm:w-auto"
              >
                <span>Explore SEO Capabilities</span>
              </Button>
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
          <div className="mb-10 sm:mb-14 max-w-3xl">
            <Badge variant="secondary" size="sm" className="mb-3">
              Common Bottlenecks
            </Badge>
            <h2
              id="seo-challenges-heading"
              className="mb-3 font-heading text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl"
            >
              Why Most Business Websites Underperform in Search
            </h2>
            <p className="text-base leading-relaxed text-gray-600 font-light">
              Websites rarely fail in organic search due to one catastrophic
              error. Instead, they struggle under accumulated technical debt,
              unclear page hierarchies, and content that fails to answer the
              questions real buyers ask.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {challenges.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} variant="tactile" className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <div className="mb-3 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0b131e] text-[#ffb703]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <CardTitle className="font-heading text-lg font-bold text-gray-900 sm:text-xl">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <CardDescription className="text-sm leading-relaxed text-gray-600 font-light">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. Core SEO Services ─────────────────────────────────────────── */}
      <section
        id="core-seo-services"
        aria-labelledby="core-seo-services-heading"
        className={`w-full bg-[#faf8f5] border-b border-black/10 ${px} py-16 sm:py-20 lg:py-24`}
      >
        <div className={inner}>
          <div className="mb-10 sm:mb-14 max-w-3xl">
            <Badge variant="default" dot="amber" size="sm" className="mb-3">
              Core SEO Capabilities
            </Badge>
            <h2
              id="core-seo-services-heading"
              className="mb-3 font-heading text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl"
            >
              SEO Capabilities Engineered for Commercial Growth
            </h2>
            <p className="text-base leading-relaxed text-gray-600 sm:text-lg font-light">
              Our search visibility services are tailored to your current
              technical health and market opportunities. Every project is scoped
              with transparent deliverables before work commences.
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
                        Key Areas of Work
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
                      <Button
                        variant="slateOutline"
                        size="sm"
                        className="w-full gap-2"
                      >
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

      {/* ── 4. SEO, AEO & GEO ───────────────────────────────────────────── */}
      <section
        id="seo-aeo-geo"
        aria-labelledby="seo-aeo-geo-heading"
        className={`w-full bg-white border-b border-black/10 ${px} py-16 sm:py-20 lg:py-24`}
      >
        <div className={inner}>
          <div className="mb-10 sm:mb-12 max-w-3xl">
            <Badge variant="secondary" size="sm" className="mb-3">
              Modern Search Realities
            </Badge>
            <h2
              id="seo-aeo-geo-heading"
              className="mb-3 font-heading text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl"
            >
              Preparing Content for Traditional and Generative AI Search
            </h2>
            <p className="text-base leading-relaxed text-gray-600 sm:text-lg font-light">
              Traditional organic search, AI-powered summaries (Google AI
              Overviews), and generative answer engines (Perplexity, ChatGPT)
              all depend on the exact same underlying fundamentals: clarity,
              structure, and factual authority.
            </p>
          </div>

          <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                label: "SEO",
                heading: "Search Engine Optimization",
                body: "Helping search engines discover, crawl, understand, and index relevant pages so your business can appear for useful customer searches.",
              },
              {
                label: "AEO",
                heading: "Answer Engine Optimization",
                body: "Organizing content to answer specific questions clearly, making useful information easier to understand across answer-focused search experiences.",
              },
              {
                label: "GEO",
                heading: "Generative Engine Optimization",
                body: "Improving content quality, brand information, and entity consistency to support discoverability across generative AI search experiences.",
              },
            ].map((concept) => (
              <Card key={concept.label} variant="tactile" className="p-6">
                <div>
                  <Badge variant="amber" size="sm" className="mb-3">
                    {concept.label}
                  </Badge>
                  <h3 className="mb-2 font-heading text-lg font-bold text-gray-900">
                    {concept.heading}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 font-light">
                    {concept.body}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="rounded-2xl border-2 border-black bg-[#faf8f5] p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-[#ffb703]" />
              <h4 className="font-heading text-base font-bold text-gray-900">
                Foundational Best Practices for Generative Discovery
              </h4>
            </div>
            <p className="mb-5 text-sm leading-relaxed text-gray-700 font-light">
              SEO, AEO, and GEO share many foundational practices. Clear
              information, useful content, accessible website architecture, and
              consistent business details can support discoverability across
              different search experiences. However, no agency can control or
              guarantee whether a search engine or AI platform will feature or
              cite a particular website.
            </p>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {aeoGeoPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600"
                    aria-hidden="true"
                  />
                  <span className="text-xs sm:text-sm leading-relaxed text-gray-700">
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
        className={`w-full bg-[#faf8f5] border-b border-black/10 ${px} py-16 sm:py-20 lg:py-24`}
      >
        <div className={inner}>
          <div className="mb-10 sm:mb-12 max-w-3xl">
            <Badge variant="secondary" size="sm" className="mb-3">
              Methodology
            </Badge>
            <h2
              id="seo-approach-heading"
              className="mb-3 font-heading text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl"
            >
              A Disciplined, 4-Stage Search Methodology
            </h2>
            <p className="text-base leading-relaxed text-gray-600 sm:text-lg font-light">
              We operate through an evidence-based roadmap tailored to your
              website&apos;s unique competitive position.
            </p>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
            {processSteps.map((step) => (
              <Card
                key={step.number}
                variant="tactile"
                className="p-6 bg-white grid grid-rows-[auto_minmax(3.5rem,auto)_1fr] gap-y-2 h-full"
              >
                <span className="font-modak text-3xl text-slate-500 leading-none" aria-hidden="true">
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

          <div className="rounded-xl border border-gray-200 bg-white p-5 text-xs sm:text-sm leading-relaxed text-gray-600 font-light">
            <strong className="font-semibold text-gray-900">
              Realistic Outcomes &amp; Timelines:
            </strong>{" "}
            Organic search performance is influenced by domain authority, crawl
            frequency, market competition, and algorithmic updates. We focus on
            building durable foundations and improving verifiable signals over
            time—not on hollow overnight ranking promises.
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
          <div className="mb-10 sm:mb-12 max-w-3xl">
            <Badge variant="secondary" size="sm" className="mb-3">
              Conversion Engine
            </Badge>
            <h2
              id="seo-web-dev-heading"
              className="mb-3 font-heading text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl"
            >
              Search Strategy Needs a Sound Website Foundation
            </h2>

            <p className="text-base leading-relaxed text-gray-600 sm:text-lg font-light">
              SEO is not separate from the website itself. Page structure,
              navigation, accessibility, and performance all influence how
              people and search engines experience your content. When deeper
              technical implementation is needed, our web development
              capabilities support the work.
            </p>
          </div>

          <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2 items-stretch">
            {webFoundations.map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  variant="tactile"
                  className="p-6 flex flex-col h-full"
                >
                  <div className="flex items-start gap-4 flex-grow">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0b131e] text-[#ffb703]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="mb-1.5 font-heading text-lg font-bold text-gray-900 min-h-[2.5rem] flex items-center">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed text-gray-600 font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="flex flex-col gap-6 rounded-2xl border-2 border-black bg-[#faf8f5] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="max-w-xl">
              <h3 className="mb-2 font-heading text-lg font-bold text-gray-900">
                Explore Our Web Development Capabilities
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-gray-600 font-light">
                Explore our approach to building and improving websites, from
                custom Next.js projects to WordPress and e-commerce
                implementations. Performance and technical outcomes depend on
                the project's requirements and conditions.
              </p>
            </div>
            <Link href="/web-development" className="shrink-0">
              <Button variant="default" size="default" className="gap-2">
                <span>Explore Web Development</span>
                <ArrowRight className="h-4 w-4 text-[#ffb703]" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 7. What You Can Expect ───────────────────────────────────────── */}
      <section
        id="seo-expectations"
        aria-labelledby="seo-expectations-heading"
        className={`w-full bg-[#faf8f5] border-b border-black/10 ${px} py-16 sm:py-20 lg:py-24`}
      >
        <div className={inner}>
          <div className="mb-10 sm:mb-12 max-w-3xl">
            <Badge variant="secondary" size="sm" className="mb-3">
              Accountability
            </Badge>
            <h2
              id="seo-expectations-heading"
              className="mb-3 font-heading text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl"
            >
              Practical Recommendations. Measurable Priorities.
            </h2>
            <p className="text-base leading-relaxed text-gray-600 sm:text-lg font-light">
              Honest, prioritized work focused on what genuinely drives business
              inquiries—not on inflating checklist counts or making
              unsubstantiated claims.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mb-6">
            {expectations.map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  variant="tactile"
                  className="p-6 bg-white"
                >
                  <div>
                    <div className="mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0b131e] text-[#ffb703]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="mb-2 font-heading text-lg font-bold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-gray-600 font-light">
                      {item.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-5 sm:p-6">
            <ShieldCheck
              className="mt-0.5 h-5 w-5 shrink-0 text-[#ffb703]"
              aria-hidden="true"
            />
            <p className="text-xs sm:text-sm leading-relaxed text-gray-600 font-light">
              <strong className="font-semibold text-gray-900">
                Zero fabricated metrics or invented outcomes:
              </strong>{" "}
              We do not fabricate case studies, invent testimonials, or promise
              unverified ranking guarantees. Timelines vary by competitive
              sector—and direct honesty is our operating baseline.
            </p>
          </div>
        </div>
      </section>

      {/* ── 8. Contextual Investigation Callout ────────────────────────── */}
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
              Explore how site speed, crawling efficiency, semantic markup, and
              on-page structure combine to support organic search performance
              and conversion rates.
            </p>
          </div>
          <Link
            href="/journal/website-development-search-visibility-conversions"
            className="shrink-0"
          >
            <Button variant="default" size="default" className="gap-2">
              <span>Read Guide</span>
              <ArrowRight className="h-4 w-4 text-[#ffb703]" />
            </Button>
          </Link>
        </div>
      </section>

      {/* ── 9. FAQ ───────────────────────────────────────────────────────── */}
      <section
        id="seo-faqs"
        aria-labelledby="seo-faq-heading"
        className={`w-full bg-white border-b border-black/10 ${px} py-16 sm:py-20 lg:py-24`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 sm:mb-12">
            <Badge variant="secondary" size="sm" className="mb-3">
              Common Questions
            </Badge>
            <h2
              id="seo-faq-heading"
              className="mb-3 font-heading text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl"
            >
              Frequently Asked Questions
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-gray-600 font-light">
              Direct answers about what SEO requires, what it can realistically
              deliver, and how Cinorium structures each engagement.
            </p>
          </div>

          <SeoFaq />
        </div>
      </section>

      {/* ── 10. Unified Bottom CTA ────────────────────────────────────────── */}
      <FinalCta />
    </div>
  );
}
