import type { Metadata } from "next";
import Link from "next/link";
import {
  TrendingUp,
  Search,
  Sparkles,
  Code2,
  Palette,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Compass,
  Zap,
  Layers,
  Target,
  BarChart3,
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

export const metadata: Metadata = {
  title: "Services | Digital Marketing & Growth Systems",
  description:
    "Explore Cinorium's services: Digital Marketing Strategy, Search Visibility & SEO, AI Search (AEO/GEO), supported by high-performance Web Development and Visual Design.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | Digital Marketing & Growth Systems | Cinorium",
    description:
      "Explore Cinorium's services: Digital Marketing Strategy, Search Visibility & SEO, AI Search (AEO/GEO), supported by high-performance Web Development and Visual Design.",
    url: "https://www.cinorium.com/services",
    type: "website",
  },
};

/* ─── Strategic Framework ─────────────────────────────────────────────────── */
const strategicFramework = [
  {
    step: "01",
    phase: "Positioning & Demand",
    title: "Marketing Strategy",
    description:
      "Identify high-intent buyer segments, clarify your commercial offer, and map channels that deliver qualified leads rather than passive traffic.",
  },
  {
    step: "02",
    phase: "Organic Discovery",
    title: "Search Visibility & SEO",
    description:
      "Structure your website architecture, content topics, and technical signals so customers find your business at the exact moment of search intent.",
  },
  {
    step: "03",
    phase: "Evolving Channels",
    title: "AI Search & Entities",
    description:
      "Optimize brand entities and factual knowledge so modern answer engines (Google AI Overviews, Perplexity, ChatGPT) cite your business accurately.",
  },
  {
    step: "04",
    phase: "Conversion Engine",
    title: "Foundational Systems",
    description:
      "High-speed web architecture and distinct visual assets turn incoming search visitors into confirmed inquiries and measurable revenue.",
  },
];

/* ─── Primary Marketing Services ─────────────────────────────────────────── */
const primaryServices = [
  {
    id: "strategy",
    number: "01",
    title: "Digital Marketing Strategy",
    tagline: "Customer acquisition campaigns focused on qualified pipeline and measurable revenue.",
    description:
      "Traffic without commercial intent is an expensive vanity metric. We design cohesive marketing systems that connect audience discovery, content relevance, and conversion pathways to drive predictable business growth.",
    icon: TrendingUp,
    badgeText: "Customer Acquisition",
    actionHref: "/contact",
    actionText: "Discuss Marketing Strategy",
    deliverables: [
      {
        name: "Go-to-Market & Acquisition Strategy",
        desc: "Define high-value target audiences, channel economics, and commercial messaging.",
      },
      {
        name: "Content Marketing & Editorial Direction",
        desc: "Produce educational guides, articles, and commercial assets that demonstrate domain authority.",
      },
      {
        name: "Conversion Rate Optimization (CRO)",
        desc: "Audit user friction, landing page structure, and enquiry pathways to maximize lead flow.",
      },
      {
        name: "Channel Alignment & Measurement",
        desc: "Connect organic search, direct touchpoints, and social channels with privacy-conscious analytics.",
      },
    ],
  },
  {
    id: "seo-search-visibility",
    number: "02",
    title: "Search Visibility & SEO",
    tagline: "Connecting your business with customers at the precise moment of intent.",
    description:
      "Modern search visibility requires more than inserting keywords. We align technical crawlability, semantic site hierarchy, and comprehensive topic coverage so search engines understand and prioritize your offerings.",
    icon: Search,
    badgeText: "Organic Visibility",
    actionHref: "/seo-services",
    actionText: "Explore Dedicated SEO Services",
    deliverables: [
      {
        name: "Technical SEO Audits & Crawl Architecture",
        desc: "Fix indexation hurdles, sitemap directives, redirect chains, and internal link equity.",
      },
      {
        name: "On-Page SEO & Semantic Structuring",
        desc: "Intent-aligned page titles, semantic heading hierarchies, metadata, and schema markup.",
      },
      {
        name: "Keyword Research & Topic Clustering",
        desc: "Identify high-commercial-intent search queries and build topical authority around your core business.",
      },
      {
        name: "Search Performance Monitoring",
        desc: "Track rankings, impressions, organic clicks, and search intent shifts with honest reporting.",
      },
    ],
  },
  {
    id: "ai-search",
    number: "03",
    title: "AI Search Visibility (AEO & GEO)",
    tagline: "Preparing your business for generative discovery and AI-powered answer engines.",
    description:
      "As prospective buyers query AI platforms like Perplexity, ChatGPT, and Google AI Overviews, businesses need structured factual footprints. We organize your digital entities and content clarity for generative discovery.",
    icon: Sparkles,
    badgeText: "Generative Reach",
    actionHref: "/contact",
    actionText: "Discuss AI Search Discovery",
    deliverables: [
      {
        name: "Entity Authority & Knowledge Modeling",
        desc: "Ensure consistent brand naming, entity relationships, and industry citations across the web.",
      },
      {
        name: "Answer Engine Optimization (AEO)",
        desc: "Structure concise, factual answers to direct customer questions for easy machine ingestion.",
      },
      {
        name: "Generative Engine Optimization (GEO)",
        desc: "Organize long-form editorial content with clear headings, data tables, and verifiable evidence.",
      },
      {
        name: "Structured Data & Schema Implementation",
        desc: "Deploy comprehensive JSON-LD schema (Organization, Service, FAQ, Article) for machine readability.",
      },
    ],
  },
];

/* ─── Supporting Technical & Creative Capabilities ───────────────────────── */
const supportingCapabilities = [
  {
    id: "web-development-optimization",
    title: "Web Development & Technical Optimization",
    badgeText: "Conversion Engine",
    tagline: "High-performance web architecture engineered as the foundation for marketing conversions.",
    description:
      "A slow or fragile website sabotages marketing campaigns before they have a chance to convert. We engineer fast, semantic Next.js and modern websites that load instantly, score high in Core Web Vitals, and provide a seamless mobile journey.",
    icon: Code2,
    actionHref: "/web-development",
    actionText: "Explore Web Development",
    deliverables: [
      "Custom Next.js & modern React web platforms",
      "Sub-second load times & Core Web Vitals optimization",
      "Clean, semantic HTML5 structure for search crawlers",
      "WordPress architectures configured without bloated plugins",
      "Mobile-first responsive design across all viewports",
    ],
  },
  {
    id: "visual-communication",
    title: "Graphic Design & Visual Communication",
    badgeText: "Brand Identity & UX",
    tagline: "Distinctive visual systems that establish immediate credibility and elevate marketing touchpoints.",
    description:
      "Visual communication is the silent salesman of your brand. We design professional marketing assets, brand identities, and commercial layouts that reinforce credibility and make complex business offerings instantly understandable.",
    icon: Palette,
    actionHref: "/contact",
    actionText: "Discuss Creative Projects",
    deliverables: [
      "Brand identity systems (typography, color palettes, visual guidelines)",
      "Marketing collateral & sales enablement graphics",
      "Digital advertising creative & social media templates",
      "Infographics, custom diagrams & process visualizations",
      "High-converting landing page layouts and visual hierarchy",
    ],
  },
];

/* ─── Delivery Principles ─────────────────────────────────────────────────── */
const deliveryPrinciples = [
  {
    icon: ShieldCheck,
    title: "No Artificial Ranking Guarantees",
    description:
      "No agency controls search engine algorithms or generative AI models. We promise rigorous technical execution, clean structure, and strategic content—not deceptive ranking claims.",
  },
  {
    icon: Target,
    title: "Commercial Outcomes Over Vanity Traffic",
    description:
      "We focus on high-intent visitors who represent genuine sales inquiries and commercial opportunities, rather than artificially inflating pageviews that never convert.",
  },
  {
    icon: BarChart3,
    title: "Transparent Scopes & Direct Access",
    description:
      "Every project begins with a clear written scope, milestone roadmap, and direct collaboration with the agency founder. No opaque retainers or outsourced handoffs.",
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
          name: "Services",
          item: "https://www.cinorium.com/services",
        },
      ],
    },
    {
      "@type": "Service",
      serviceType: "Digital Marketing & Growth Systems",
      provider: {
        "@id": "https://www.cinorium.com/#organization",
      },
      areaServed: ["Pakistan", "United States", "United Kingdom", "Worldwide"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Cinorium Core Marketing & Technical Capabilities",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Digital Marketing Strategy",
              description:
                "Commercially grounded customer acquisition campaigns focused on qualified pipeline and measurable revenue growth.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Search Visibility & SEO",
              description:
                "Comprehensive technical SEO, on-page architecture, and content authority engineered to capture high-intent buyers.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Search Visibility (AEO / GEO)",
              description:
                "Entity authority, knowledge graph modeling, and structured data optimization for AI answer engines and ChatGPT/Perplexity.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Web Development & Tech Optimization",
              description:
                "High-performance Next.js websites built as the fast, conversion-engineered foundation for your marketing campaigns.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Graphic Design & Visual Communication",
              description:
                "Distinctive brand identities, marketing assets, and visual communication systems that build credibility and trust.",
            },
          },
        ],
      },
    },
  ],
};

export default function ServicesPage() {
  return (
    <div className="w-full">
      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {/* ── 1. Hero Section ──────────────────────────────────────────────── */}
      <section
        id="services-hero"
        className="w-full bg-[#fdfbf7] pt-28 sm:pt-36 pb-16 sm:pb-20 px-6 sm:px-10 md:px-16 lg:px-24 border-b border-black/10"
      >
        <div className="max-w-5xl mx-auto">
          {/* Eyebrow */}
          <div className="mb-4">
            <Badge variant="default" dot="amber" size="lg">
              Digital Marketing Agency · Services
            </Badge>
          </div>

          <h1 className="mb-6 font-heading text-3xl font-bold tracking-tight leading-[1.1] text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl">
            Strategic Marketing Systems Built for Discoverability and Growth.
          </h1>

          <p className="max-w-3xl text-base leading-relaxed text-gray-700 sm:text-lg mb-8">
            Cinorium helps ambitious businesses build organic visibility, acquire qualified leads, and turn web traffic into predictable revenue. Web development and visual design serve as our supporting engineering foundation—ensuring every marketing initiative rests on a fast, reliable technical bedrock.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link href="/contact">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto gap-2">
                <span>Discuss Your Project</span>
                <ArrowRight className="h-4 w-4 text-[#0b131e]" />
              </Button>
            </Link>

            <Link href="#primary-services">
              <Button variant="slateOutline" size="lg" className="w-full sm:w-auto">
                <span>Explore Core Services</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. Strategic Framework: The Integrated Approach ───────────────── */}
      <section className="w-full bg-white border-b border-black/10 py-16 sm:py-20 lg:py-24 px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <Badge variant="secondary" size="sm" className="mb-3">
              Strategic Architecture
            </Badge>
            <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight leading-tight text-gray-900 sm:text-4xl">
              Why Marketing and Technical Foundations Belong Together
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              Most digital service providers operate in isolated silos: designers create mockups without search crawlers in mind; marketers spend budgets driving traffic to sluggish websites; and developers build systems without conversion paths. We unify marketing strategy and technical execution into a coherent growth system.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {strategicFramework.map((item) => (
              <Card key={item.step} variant="tactile" className="p-6 flex flex-col h-full">
                <span className="font-modak text-3xl sm:text-4xl text-slate-500 block mb-1">
                  {item.step}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 block mb-1">
                  {item.phase}
                </span>
                <h3 className="font-heading text-lg font-bold tracking-tight text-gray-900 mb-2 min-h-[3rem] flex items-center">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light flex-grow">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Primary Marketing Services ─────────────────────────────────── */}
      <section
        id="primary-services"
        className="w-full bg-[#faf8f5] border-b border-black/10 py-20 lg:py-28 px-6 sm:px-10 md:px-16 lg:px-24"
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-14 sm:mb-18">
            <Badge variant="default" dot="amber" size="default" className="mb-3">
              Customer Acquisition &amp; Growth
            </Badge>
            <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight leading-tight text-gray-900 sm:text-4xl md:text-5xl">
              Core Digital Marketing Services
            </h2>
            <p className="max-w-3xl text-base sm:text-lg leading-relaxed text-gray-600 font-light">
              Our primary agency capabilities are focused on customer acquisition, search discoverability, and commercial growth. Each service can be engaged individually or as part of a multi-channel growth engagement.
            </p>
          </div>

          <div className="flex flex-col gap-12 sm:gap-14">
            {primaryServices.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.id}
                  id={service.id}
                  aria-labelledby={`service-${service.id}-title`}
                  className="group relative flex flex-col rounded-3xl border-2 border-black bg-white p-6 sm:p-10 md:p-12 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Top Bar: Number, Badge, Title & Icon */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100 mb-8">
                    <div className="flex items-center gap-4">
                      <span className="font-modak text-3xl sm:text-4xl text-slate-500">
                        {service.number}
                      </span>
                      <div>
                        <Badge variant="secondary" size="sm" className="mb-1">
                          {service.badgeText}
                        </Badge>
                        <h3
                          id={`service-${service.id}-title`}
                          className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-gray-900"
                        >
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0b131e] text-[#ffb703] shadow-sm">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  {/* Tagline & Main Description */}
                  <div className="mb-8 max-w-3xl">
                    <p className="text-base sm:text-lg font-medium text-gray-900 mb-3">
                      {service.tagline}
                    </p>
                    <p className="text-base text-gray-600 leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>

                  {/* Deliverables Grid */}
                  <div className="mb-8 rounded-2xl border border-gray-200 bg-[#fdfbf7] p-6 sm:p-8">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-800 mb-5 flex items-center gap-2">
                      <Layers className="h-4 w-4 text-[#ffb703]" />
                      Core Capabilities &amp; Deliverables
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      {service.deliverables.map((item) => (
                        <div
                          key={item.name}
                          className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200/80 shadow-2xs"
                        >
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <div>
                            <h5 className="text-sm font-semibold text-gray-900 mb-1">
                              {item.name}
                            </h5>
                            <p className="text-xs text-gray-600 leading-relaxed font-light">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Row */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <Link href={service.actionHref}>
                      <Button variant="default" size="default" className="gap-2">
                        <span>{service.actionText}</span>
                        <ArrowRight className="h-4 w-4 text-[#ffb703]" />
                      </Button>
                    </Link>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black transition-colors"
                    >
                      <span>Inquire about this service</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. Supporting Capabilities: Web Dev & Visual Design ───────────── */}
      <section
        id="supporting-capabilities"
        className="w-full bg-white border-b border-black/10 py-20 lg:py-28 px-6 sm:px-10 md:px-16 lg:px-24"
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-14 sm:mb-18">
            <Badge variant="secondary" size="default" className="mb-3">
              Technical &amp; Creative Foundations
            </Badge>
            <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight leading-tight text-gray-900 sm:text-4xl md:text-5xl">
              Supporting Capabilities
            </h2>
            <p className="max-w-3xl text-base sm:text-lg leading-relaxed text-gray-600 font-light">
              We do not treat web development or graphic design as detached agency offerings. They are the essential structural pillars that guarantee your marketing campaigns load at lightning speed and present an undeniable standard of credibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {supportingCapabilities.map((capability) => {
              const Icon = capability.icon;
              return (
                <Card
                  key={capability.id}
                  id={capability.id}
                  variant="tactile"
                  className="p-6 sm:p-8 flex flex-col h-full"
                >
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-center justify-between mb-4 min-h-[2.75rem]">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0b131e] text-[#ffb703]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <Badge variant="secondary" size="sm">
                        {capability.badgeText}
                      </Badge>
                    </div>
                    <CardTitle className="font-heading text-xl sm:text-2xl font-bold text-gray-900 mb-2 min-h-[3.5rem] flex items-center">
                      {capability.title}
                    </CardTitle>
                    <p className="text-sm font-medium text-gray-900 mb-2">
                      {capability.tagline}
                    </p>
                    <CardDescription className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                      {capability.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-0 mb-6 flex-grow">
                    <div className="rounded-xl border border-gray-200 bg-[#fdfbf7] p-4 h-full">
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-800 block mb-3">
                        Key Deliverables
                      </span>
                      <ul className="space-y-2">
                        {capability.deliverables.map((del) => (
                          <li key={del} className="flex items-start gap-2 text-xs text-gray-600 leading-relaxed">
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>

                  <CardFooter className="p-0 border-t border-[#0b131e]/5 pt-6 mt-auto">
                    <Link href={capability.actionHref} className="w-full">
                      <Button variant="slateOutline" size="default" className="w-full gap-2">
                        <span>{capability.actionText}</span>
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. Operating Principles & Authentic Delivery ─────────────────── */}
      <section className="w-full bg-[#faf8f5] border-b border-black/10 py-16 sm:py-20 px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl mb-12">
            <Badge variant="secondary" size="sm" className="mb-3">
              Authentic Delivery
            </Badge>
            <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight leading-tight text-gray-900 sm:text-4xl">
              How We Work: Transparent &amp; Evidence-Based
            </h2>
            <p className="text-base text-gray-600 leading-relaxed font-light">
              We believe in honest client partnerships. Here is our operating commitment to every business before any engagement begins:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {deliveryPrinciples.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex flex-col justify-between rounded-2xl border-2 border-black bg-white p-6 shadow-xs"
                >
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0b131e] text-[#ffb703] mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading text-lg font-bold tracking-tight text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 6. Contextual Journal Investigation Callout ─────────────────── */}
      <section className="w-full bg-[#fdfbf7] border-b border-black/10 py-12 sm:py-16 px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto rounded-3xl border-2 border-black bg-white p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
          <div className="max-w-2xl">
            <Badge variant="amber" size="sm" className="mb-2">
              From Our Journal · The Internet, Under the Hood
            </Badge>
            <h3 className="font-heading text-2xl font-bold tracking-tight text-gray-900 mb-3">
              How Website Development Improves Search Visibility
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed font-light">
              Read our in-depth investigation on how site speed, semantic markup, and crawlable hierarchy directly impact search indexation and conversion rates.
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

      {/* ── 7. Unified Bottom CTA ────────────────────────────────────────── */}
      <FinalCta />
    </div>
  );
}
