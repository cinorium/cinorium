import type { Metadata } from "next";
import Link from "next/link";
import {
  Code2,
  Search,
  Megaphone,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Layers,
  Sparkles,
  ShieldCheck,
  Compass,
  Zap,
} from "lucide-react";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Services | Technology-Driven Digital Marketing & Web Development",
  description:
    "Explore Cinorium's four service pillars: Web Development & Technology, SEO & Search Visibility, Digital Marketing, and E-commerce & Growth. Built for visibility, designed for growth.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | Cinorium Digital Marketing Agency",
    description:
      "Explore Cinorium's four service pillars: Web Development & Technology, SEO & Search Visibility, Digital Marketing, and E-commerce & Growth. Built for visibility, designed for growth.",
    url: "https://www.cinorium.com/services",
    type: "website",
  },
};

const servicePillars = [
  {
    id: "web-development",
    pillarNumber: "01",
    title: "Web Development & Technology",
    tagline: "High-performance web architecture built to convert.",
    description:
      "A website is the core engine of your digital presence. We engineer custom and WordPress web platforms with clean semantic markup, fast load times, and structured content that users appreciate and search engines easily interpret.",
    icon: Code2,
    dedicatedPageHref: "/web-development",
    dedicatedPageText: "Explore Web Development",
    subservices: [
      {
        name: "Custom Website Development",
        desc: "Tailored Next.js and modern web applications built for speed, responsiveness, and unique business workflows.",
      },
      {
        name: "WordPress Development",
        desc: "Clean, block-based WordPress setups configured without bloated plugins, ensuring stability and easy editorial control.",
      },
      {
        name: "E-commerce Website Development",
        desc: "Fast, user-centric store architectures designed to streamline browsing, checkout, and inventory cataloguing.",
      },
      {
        name: "Website Redesign & Modernization",
        desc: "Transform outdated, sluggish websites into modern, accessible platforms without sacrificing existing search equity.",
      },
      {
        name: "Performance & Core Web Vitals Optimization",
        desc: "Audit and eliminate render-blocking assets, oversized imagery, and script bloat to deliver sub-second response times.",
      },
      {
        name: "Technical Audits & Troubleshooting",
        desc: "Diagnose broken layouts, crawl errors, server-side bottlenecks, and code regressions with precision.",
      },
    ],
  },
  {
    id: "seo-search-visibility",
    pillarNumber: "02",
    title: "SEO & Search Visibility",
    tagline: "Connecting your business with customers at the moment of intent.",
    description:
      "Search visibility is not about chasing tricks or keyword stuffing. It is about understanding what your prospective customers are looking for, organizing your site architecture to answer their questions, and ensuring search engines can crawl, render, and index your content effortlessly.",
    icon: Search,
    dedicatedPageHref: "/seo-services",
    dedicatedPageText: "Explore SEO Services",
    subservices: [
      {
        name: "Technical SEO Audits & Architecture",
        desc: "Robots directives, XML sitemaps, canonical tags, indexation health, and crawl budget optimization.",
      },
      {
        name: "On-Page SEO & Hierarchy",
        desc: "Intent-aligned page titles, semantic heading structures, meta descriptions, and descriptive internal linking.",
      },
      {
        name: "Keyword Research & Topic Clustering",
        desc: "Identify high-commercial-intent search queries and build topical authority around your core offerings.",
      },
      {
        name: "Content Strategy & Editorial Optimization",
        desc: "Plan and refine informative, well-researched content that demonstrates firsthand experience and addresses real buyer questions.",
      },
      {
        name: "Local SEO Foundations",
        desc: "Google Business Profile optimization, local schema markup, and geographic relevance for local service areas.",
      },
      {
        name: "AEO, GEO & AI Search Discovery",
        desc: "Structure your business data and entity information to ensure discovery across modern AI answer engines like Perplexity, ChatGPT, and Google AI Overviews.",
      },
    ],
  },
  {
    id: "digital-marketing",
    pillarNumber: "03",
    title: "Digital Marketing & Strategy",
    tagline: "Purposeful marketing systems connecting traffic to business outcomes.",
    description:
      "Traffic is only valuable if it engages the right people and drives meaningful business inquiries. We align content marketing, organic channels, and brand positioning to build sustainable audience touchpoints without reliance on fleeting gimmicks.",
    icon: Megaphone,
    dedicatedPageHref: "/contact",
    dedicatedPageText: "Discuss Marketing Strategy",
    subservices: [
      {
        name: "Integrated Marketing Strategy",
        desc: "Align your website, content assets, and brand communications into a unified, measurable growth plan.",
      },
      {
        name: "Content Marketing & Editorial Direction",
        desc: "Produce educational articles, case studies, and practical guides that establish industry trust and nurture prospects.",
      },
      {
        name: "Social Media Channel Alignment",
        desc: "Curate professional, consistent presence across key business platforms (LinkedIn, YouTube, Instagram) to amplify your work.",
      },
      {
        name: "Conversion Rate Optimization (CRO)",
        desc: "Evaluate landing page friction, call-to-action placement, and user paths to turn visitors into confirmed inquiries.",
      },
      {
        name: "Brand & Creative Support",
        desc: "Clean typography, visual assets, and marketing collateral designed to ensure your digital touchpoints look credible and cohesive.",
      },
    ],
  },
  {
    id: "ecommerce-growth",
    pillarNumber: "04",
    title: "E-commerce & Growth Systems",
    tagline: "Structured product discovery and friction-free user journeys.",
    description:
      "Growing an online store requires more than uploading products. It requires intuitive category taxonomies, fast filter systems, informative product pages, and transparent checkout experiences that foster customer confidence.",
    icon: TrendingUp,
    dedicatedPageHref: "/contact",
    dedicatedPageText: "Discuss E-commerce Growth",
    subservices: [
      {
        name: "E-commerce Strategy & Planning",
        desc: "Map product catalogs, customer segments, and technical requirements before investing in custom engineering.",
      },
      {
        name: "Product & Category Page Optimization",
        desc: "Optimize metadata, schema specifications, product imagery, and descriptions for organic search discovery.",
      },
      {
        name: "Customer Journey & Navigation Design",
        desc: "Reduce navigation friction with clear search, logical categorization, and transparent purchase paths.",
      },
      {
        name: "Performance & Checkout Reliability",
        desc: "Ensure rapid mobile performance and smooth interactions so customers don't abandon baskets due to technical delays.",
      },
      {
        name: "Measurement & Funnel Analytics",
        desc: "Set up privacy-conscious analytics and tracking to understand where customers drop off and where opportunities lie.",
      },
    ],
  },
];

const integrationFramework = [
  {
    step: "01",
    title: "Technical Foundations",
    subtitle: "Web Development",
    description:
      "A fast, secure, and semantic codebase ensures every subsequent marketing effort has a reliable home that loads instantly and never breaks.",
  },
  {
    step: "02",
    title: "Intent Discovery",
    subtitle: "SEO & Search Visibility",
    description:
      "Structure pages to match user search intent, ensuring your business is found when prospective buyers are actively seeking solutions.",
  },
  {
    step: "03",
    title: "Audience Engagement",
    subtitle: "Digital Marketing",
    description:
      "Useful content, cohesive brand messaging, and clear value propositions build trust and turn casual visitors into informed prospects.",
  },
  {
    step: "04",
    title: "Commercial Action",
    subtitle: "Conversion & Growth",
    description:
      "Streamlined inquiry pathways and friction-free customer journeys ensure that visibility translates into real commercial inquiries and revenue.",
  },
];

export default function ServicesPage() {
  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section
        id="services-hero"
        className="w-full bg-blue-100 pt-28 sm:pt-36 pb-16 sm:pb-20 px-6 sm:px-10 md:px-16 lg:px-24 border-b border-black/10"
      >
        <div className="max-w-5xl mx-auto">
          <span className="mb-4 inline-block w-max border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-widest text-gray-800 sm:text-sm">
            TECHNOLOGY · MARKETING · DIGITAL GROWTH
          </span>

          <h1 className="mb-6 font-heading text-3xl font-bold tracking-tight leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl">
            Built for Visibility. Designed for Growth.
          </h1>

          <p className="max-w-3xl text-base leading-relaxed text-gray-700 sm:text-lg mb-8">
            Cinorium brings web development, SEO, and digital marketing together
            into an integrated service system. We don&apos;t just make things
            look right—we make them work right, combining deep technical
            understanding with purposeful marketing execution.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-black px-7 py-4 text-center text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 sm:text-base"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-amber-400" />
            </Link>

            <Link
              href="#service-pillars"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border-2 border-black bg-white/80 px-7 py-4 text-center text-sm font-semibold text-gray-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 sm:text-base"
            >
              <span>Explore The 4 Pillars</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. The Integrated Philosophy: Beyond the Surface */}
      <section className="w-full bg-white border-b border-black/10 py-16 sm:py-20 lg:py-24 px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="mb-3 inline-block w-max border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-wider text-gray-800 sm:text-sm">
              THE CINORIUM CONCEPT
            </span>
            <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight leading-tight text-gray-900 sm:text-4xl">
              Beyond the Surface: Why Technology &amp; Marketing Belong Together
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              Most digital agencies treat web design, search visibility, and marketing as separate silos. Designers produce visual mockups without understanding search crawlers; marketers drive traffic to sites that take six seconds to load; and developers build systems without considering user conversion journeys.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {integrationFramework.map((item) => (
              <div
                key={item.step}
                className="relative flex flex-col justify-between rounded-2xl border-2 border-black bg-[#fcfbf7] p-6 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div>
                  <span className="font-heading text-2xl sm:text-3xl font-bold text-amber-700 block mb-2">
                    {item.step}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="font-heading text-lg font-semibold tracking-tight text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The 4 Main Service Pillars */}
      <section
        id="service-pillars"
        className="w-full bg-amber-50/40 py-20 lg:py-28 px-6 sm:px-10 md:px-16 lg:px-24"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center sm:text-left mb-16 sm:mb-20">
            <span className="mb-3 inline-block w-max border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-wider text-gray-800 sm:text-sm">
              SERVICE ARCHITECTURE
            </span>
            <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight leading-tight text-gray-900 sm:text-4xl md:text-5xl">
              Four Core Service Pillars
            </h2>
            <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-gray-600 font-light">
              Each pillar is designed to function as an independent engagement
              or as part of a synchronized digital growth strategy.
            </p>
          </div>

          <div className="flex flex-col gap-12 sm:gap-16">
            {servicePillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article
                  key={pillar.id}
                  id={pillar.id}
                  aria-labelledby={`pillar-${pillar.id}-title`}
                  className="group relative flex flex-col rounded-3xl border-2 border-black bg-white p-6 sm:p-10 md:p-12 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Top Bar: Pillar Number, Icon & Heading */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100 mb-8">
                    <div className="flex items-center gap-4">
                      <span className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-2 font-heading text-2xl font-bold text-amber-800 sm:text-3xl">
                        {pillar.pillarNumber}
                      </span>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 block">
                          Service Pillar
                        </span>
                        <h3
                          id={`pillar-${pillar.id}-title`}
                          className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-gray-900"
                        >
                          {pillar.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-black text-amber-400 shadow-sm">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  {/* Tagline & Main Description */}
                  <div className="mb-8 max-w-3xl">
                    <p className="text-base sm:text-lg font-medium text-amber-900 mb-3">
                      {pillar.tagline}
                    </p>
                    <p className="text-base text-gray-700 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Subservices Grid */}
                  <div className="mb-8 rounded-2xl border border-gray-200 bg-[#fcfbf7] p-6 sm:p-8">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-800 mb-5 flex items-center gap-2">
                      <Layers className="h-4 w-4 text-amber-600" />
                      Core Capabilities &amp; Deliverables
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      {pillar.subservices.map((sub) => (
                        <div
                          key={sub.name}
                          className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200/80 shadow-2xs"
                        >
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <div>
                            <h5 className="text-sm font-semibold text-gray-900 mb-1">
                              {sub.name}
                            </h5>
                            <p className="text-xs text-gray-600 leading-relaxed font-light">
                              {sub.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Link / CTA Row */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <Link
                      href={pillar.dedicatedPageHref}
                      className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-black px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-gray-900 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                    >
                      <span>{pillar.dedicatedPageText}</span>
                      <ArrowRight className="h-4 w-4 text-amber-400" />
                    </Link>

                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 text-sm font-medium text-gray-700 hover:text-black transition-colors"
                    >
                      <span>Request a proposal for this service</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Cross-Discipline Integrity: Practical Rules */}
      <section className="w-full bg-white border-t border-black/10 py-16 sm:py-20 px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="mb-3 inline-block w-max border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-wider text-gray-800 sm:text-sm">
              AUTHENTIC DELIVERY
            </span>
            <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight leading-tight text-gray-900 sm:text-4xl">
              How We Work: Transparent &amp; Evidence-Based
            </h2>
            <p className="text-base text-gray-600 leading-relaxed font-light">
              We believe in honest digital partnerships. Here is our commitment
              to every client before any work begins:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="rounded-2xl border border-black/15 bg-amber-50/30 p-6 sm:p-7">
              <ShieldCheck className="h-6 w-6 text-amber-700 mb-3" />
              <h3 className="font-heading text-lg font-semibold tracking-tight text-gray-900 mb-2">
                No Guaranteed Rankings
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                No honest agency controls search engine algorithms. We promise rigorous technical execution, clean structure, and strategic content—not hollow ranking guarantees.
              </p>
            </div>

            <div className="rounded-2xl border border-black/15 bg-amber-50/30 p-6 sm:p-7">
              <Compass className="h-6 w-6 text-amber-700 mb-3" />
              <h3 className="font-heading text-lg font-semibold tracking-tight text-gray-900 mb-2">
                No Manufactured Traffic Claims
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                We focus on high-intent visitors likely to convert into clients or customers, rather than inflating vanity pageview metrics that don&apos;t move revenue.
              </p>
            </div>

            <div className="rounded-2xl border border-black/15 bg-amber-50/30 p-6 sm:p-7">
              <Zap className="h-6 w-6 text-amber-700 mb-3" />
              <h3 className="font-heading text-lg font-semibold tracking-tight text-gray-900 mb-2">
                AI As An Engineering Tool
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                We leverage modern AI tools for analysis and productivity, but our differentiators remain firsthand technical judgment, architectural inspection, and careful craft.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contextual Article Callout */}
      <section className="w-full bg-[#fcfbf7] border-t border-black/10 py-12 sm:py-16 px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto rounded-3xl border-2 border-black bg-blue-100 p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-700 block mb-2">
              From Our Journal · The Internet, Under the Hood
            </span>
            <h3 className="font-heading text-2xl font-bold tracking-tight text-gray-900 mb-3">
              How Website Development Improves Search Visibility
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Read our in-depth investigation on how site speed, semantic markup, and crawlable hierarchy directly impact search indexation and conversion rates.
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

      {/* 6. Bottom CTA */}
      <CtaSection />
    </div>
  );
}

