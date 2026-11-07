import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Search,
  Sparkles,
  ShieldCheck,
  Layers,
  Compass,
  CheckCircle2,
  TrendingUp,
  Palette,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "About | Digital Marketing Agency with Engineering Depth",
  description:
    "Cinorium is a digital marketing agency combining customer acquisition strategy, search visibility (SEO/AEO), and high-performance web engineering to drive measurable commercial growth.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Cinorium | Digital Marketing Agency with Engineering Depth",
    description:
      "Cinorium is a digital marketing agency combining customer acquisition strategy, search visibility (SEO/AEO), and high-performance web engineering to drive measurable commercial growth.",
    url: "https://www.cinorium.com/about",
    type: "website",
  },
};

const workingStages = [
  {
    step: "01",
    title: "Understand",
    description:
      "Deep dive into your business model, customer economics, competitive landscape, and commercial acquisition targets.",
  },
  {
    step: "02",
    title: "Diagnose",
    description:
      "Rigorous technical audit of your organic search footprint, speed metrics, tracking integrity, and buyer conversion leaks.",
  },
  {
    step: "03",
    title: "Strategize",
    description:
      "Formulate the target keyword architecture, positioning narrative, entity data map, and high-converting user journey.",
  },
  {
    step: "04",
    title: "Execute",
    description:
      "Deploy fast, semantic web infrastructure, authoritative content assets, structured schema, and telemetry systems.",
  },
  {
    step: "05",
    title: "Measure",
    description:
      "Monitor qualified lead pipeline, search ranking trajectory, engagement scores, and campaign return on investment.",
  },
  {
    step: "06",
    title: "Improve",
    description:
      "Iterate continuously on buyer data to refine conversion rates, expand organic reach, and compound growth over time.",
  },
];

const principles = [
  {
    title: "Look Deeper",
    description:
      "We address root commercial challenges rather than treating surface symptoms. Fast code, semantic structures, and genuine audience relevance make growth sustainable.",
    icon: Layers,
  },
  {
    title: "Build Smarter",
    description:
      "We prioritize decisions that generate verified commercial yield—completely avoiding fragile shortcuts, vanity traffic claims, and bloated plugins.",
    icon: Compass,
  },
  {
    title: "Grow Better",
    description:
      "We build durable discoverability across both traditional search and AI answer engines through honest expectations and direct technical accountability.",
    icon: ShieldCheck,
  },
];

const capabilities = [
  {
    number: "01",
    tier: "Customer Acquisition",
    title: "Digital Marketing Strategy",
    description:
      "Outcome-driven customer acquisition campaigns designed to generate qualified business enquiries and predictable revenue pipeline.",
    icon: TrendingUp,
    href: "/services#strategy",
    cta: "Explore Strategy",
    points: [
      "Target audience & commercial positioning",
      "Conversion Rate Optimization (CRO) & funnel audits",
      "Content marketing & editorial authority",
    ],
  },
  {
    number: "02",
    tier: "Organic Visibility",
    title: "Search Visibility & SEO",
    description:
      "Technical audits, on-page architecture, and intent-focused content designed to capture high-intent buyers across Google search.",
    icon: Search,
    href: "/seo-services",
    cta: "Explore SEO",
    points: [
      "Technical SEO audits, indexing & crawlability",
      "High-intent keyword intelligence & topic clusters",
      "Semantic markup & internal linking architecture",
    ],
  },
  {
    number: "03",
    tier: "Generative Reach",
    title: "AI Search Visibility (AEO / GEO)",
    description:
      "Entity modeling and factual grounding structured for conversational AI platforms, including ChatGPT, Perplexity, and Google AI Overviews.",
    icon: Sparkles,
    href: "/services#ai-search",
    cta: "Explore AI Visibility",
    points: [
      "Entity authority & knowledge graph alignment",
      "Answer Engine Optimization (AEO) direct Q&A structuring",
      "Generative Engine Optimization (GEO) data tables & schema",
    ],
  },
  {
    number: "04",
    tier: "Conversion Engine",
    title: "Web Engineering & Design",
    description:
      "Fast, custom Next.js platforms and distinct visual assets built as the dependable, high-converting foundation for marketing campaigns.",
    icon: Code2,
    href: "/web-development",
    cta: "Explore Foundations",
    points: [
      "Sub-second load times & Core Web Vitals optimization",
      "Clean, semantic Next.js App Router architectures",
      "Credibility-first brand identity & marketing creative",
    ],
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
          name: "About",
          item: "https://www.cinorium.com/about",
        },
      ],
    },
    {
      "@type": "AboutPage",
      "@id": "https://www.cinorium.com/about#webpage",
      url: "https://www.cinorium.com/about",
      name: "About Cinorium | Digital Marketing Agency with Engineering Depth",
      description:
        "Cinorium is a digital marketing agency combining customer acquisition strategy, search visibility (SEO/AEO), and high-performance web engineering to drive measurable commercial growth.",
      mainEntity: {
        "@id": "https://www.cinorium.com/#organization",
      },
    },
  ],
};

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {/* 1. Hero Section */}
      <section
        id="about-hero"
        className="w-full bg-[#fdfbf7] pt-28 sm:pt-36 pb-16 sm:pb-20 px-6 sm:px-10 md:px-16 lg:px-24 border-b border-black/10"
      >
        <div className="max-w-5xl mx-auto">
          {/* Eyebrow */}
          <div className="mb-4">
            <Badge variant="default" dot="amber" size="lg">
              Digital Marketing Agency
            </Badge>
          </div>

          {/* Heading */}
          <h1 className="mb-6 font-heading text-3xl font-bold tracking-tight leading-[1.1] text-[#0b131e] sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl">
            Built for Visibility. Designed for Growth.
          </h1>

          {/* Introduction */}
          <p className="max-w-3xl text-base leading-relaxed text-gray-700 sm:text-lg mb-8 font-light">
            Cinorium is a digital marketing agency built on technical foundations. We help ambitious businesses capture qualified buyer demand, establish durable organic visibility, and transform web traffic into predictable revenue. Web development and technical SEO serve as our supporting engineering bedrock.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link href="/contact">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto gap-2">
                <span>Discuss Your Project</span>
                <ArrowRight className="h-4 w-4 text-[#0b131e]" />
              </Button>
            </Link>

            <Link href="/services">
              <Button variant="slateOutline" size="lg" className="w-full sm:w-auto">
                <span>Explore Agency Capabilities</span>
              </Button>
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
              <Badge variant="secondary" size="sm" className="mb-3">
                Beyond the Surface
              </Badge>

              <h2 className="mb-6 font-heading text-3xl font-bold tracking-tight leading-tight text-[#0b131e] sm:text-4xl">
                We don&apos;t just make things look right. We make them work right.
              </h2>

              <div className="space-y-4 text-base leading-relaxed text-gray-700 font-light">
                <p>
                  Most businesses run into the exact same commercial friction: design agencies build visually ornate layouts that search engine bots can barely crawl, while conventional marketing agencies drive expensive traffic to sluggish, poorly structured pages that leak conversions.
                </p>

                <p>
                  Cinorium was founded to solve this disconnect. We unite commercial marketing strategy with rigorous web engineering. By mastering the underlying technical systems—server response times, clean DOM hierarchies, Core Web Vitals, and semantic entity markup—we build digital presences that satisfy both discerning human buyers and complex search algorithms.
                </p>

                <p>
                  AI is an engineering tool in our workflow, not a substitute for firsthand technical judgment. Our true differentiators remain architectural problem-solving, meticulous quality, and an unwavering focus on measurable business growth.
                </p>
              </div>
            </div>

            {/* Right Callout Box */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border-2 border-black bg-[#faf8f5] p-7 sm:p-9 shadow-sm">
                <div className="mb-4">
                  <Badge variant="amber" size="sm">
                    Founder-Led Execution
                  </Badge>
                </div>

                <h3 className="mb-3 font-heading text-xl sm:text-2xl font-bold tracking-tight text-[#0b131e]">
                  Direct Technical Accountability
                </h3>

                <p className="text-sm leading-relaxed text-gray-600 mb-6 font-light">
                  Cinorium is founder-led by Muhammad Huzaifa. You collaborate directly with the strategist analyzing your search footprint, architecting your campaigns, and engineering your web foundations—ensuring complete transparency, fast execution, and zero account-manager bureaucracy.
                </p>

                <div className="pt-5 border-t border-gray-200 flex flex-col gap-2.5 text-xs font-medium text-[#0b131e]">
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

      {/* 3. Core Capabilities: Strategic Architecture */}
      <section
        id="capabilities-overview"
        className="w-full bg-[#faf8f5] py-16 sm:py-20 lg:py-24 px-6 sm:px-10 md:px-16 lg:px-24 border-b border-black/10"
      >
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 sm:mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <Badge variant="default" dot="amber" size="sm" className="mb-3">
                Capability Framework
              </Badge>
              <h2 className="mb-3 font-heading text-3xl font-bold tracking-tight leading-tight text-[#0b131e] sm:text-4xl md:text-5xl">
                Connected Marketing &amp; Technical Capabilities
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg font-light">
                Digital marketing achieves peak ROI when customer acquisition, search visibility, and high-performance technical engineering reinforce one another.
              </p>
            </div>

            <Link href="/services" className="shrink-0">
              <Button variant="slateOutline" size="sm" className="gap-2">
                <span>View All Services</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.number} variant="tactile" className="p-7 sm:p-9 bg-white flex flex-col h-full">
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-center justify-between mb-4 min-h-[2.5rem]">
                      <span className="font-modak text-3xl sm:text-4xl text-slate-500">
                        {item.number}
                      </span>
                      <Badge variant="secondary" size="sm">
                        {item.tier}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-3 min-h-[3.5rem]">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0b131e] text-[#ffb703]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <CardTitle className="font-heading text-xl sm:text-2xl font-bold text-[#0b131e]">
                        {item.title}
                      </CardTitle>
                    </div>

                    <CardDescription className="text-sm leading-relaxed text-gray-600 font-light mt-3">
                      {item.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-0 mb-6 flex-grow">
                    <div className="rounded-xl border border-gray-100 bg-[#fdfbf7] p-4 h-full">
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-800 block mb-2.5">
                        Key Capabilities
                      </span>
                      <ul className="space-y-2">
                        {item.points.map((pt) => (
                          <li key={pt} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>

                  <CardFooter className="p-0 border-t border-[#0b131e]/5 pt-6 mt-auto">
                    <Link href={item.href} className="w-full">
                      <Button variant="slateOutline" size="sm" className="w-full justify-between">
                        <span>{item.cta}</span>
                        <ArrowRight className="h-4 w-4 text-[#0b131e]" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. The 6-Stage Working Methodology */}
      <section
        id="methodology"
        className="w-full bg-[#0b131e] py-20 sm:py-24 px-6 sm:px-10 md:px-16 lg:px-24 text-white border-b border-gray-800/80"
      >
        <div className="max-w-5xl mx-auto w-full">
          <div className="mb-14 text-center md:text-left">
            <Badge variant="default" dot="amber" className="mb-3 bg-gray-900 border-gray-700">
              Disciplined Execution
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-white mb-4">
              The 6-Stage Working Framework
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl font-light leading-relaxed">
              We replace marketing guesswork and bloated agency promises with a structured, step-by-step framework built for predictable visibility and compounding return.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {workingStages.map((stage) => (
              <Card
                key={stage.step}
                variant="dark"
                className="p-6 sm:p-7 border border-gray-800 bg-[#0f1724] hover:border-gray-700 transition-colors flex flex-col h-full"
              >
                <CardHeader className="p-0 pb-3">
                  <div className="flex items-center justify-between min-h-[2.5rem]">
                    <span className="font-modak text-4xl sm:text-5xl text-brand-amber leading-none select-none">
                      {stage.step}
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-gray-500">
                      Phase {stage.step}
                    </span>
                  </div>
                  <CardTitle className="text-xl sm:text-2xl text-white mt-2 font-heading min-h-[3.5rem] flex items-center">
                    {stage.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-0 flex-grow">
                  <CardDescription className="text-sm leading-relaxed text-gray-400 font-light">
                    {stage.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-gray-800 bg-[#0f1724]/80 p-5 sm:p-6 text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
            <strong className="text-white font-semibold">Scope Transparency:</strong>{" "}
            Every engagement is customized to your commercial goals. Some clients partner with us for multi-channel digital marketing campaigns supported by custom Next.js engineering; others engage us for focused technical SEO remediation or content restructuring.
          </div>
        </div>
      </section>

      {/* 5. Core Principles */}
      <section
        id="principles"
        className="w-full bg-white py-16 sm:py-20 lg:py-24 px-6 sm:px-10 md:px-16 lg:px-24 border-b border-black/10"
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 sm:mb-14">
            <Badge variant="secondary" size="sm" className="mb-3">
              Operating Values
            </Badge>
            <h2 className="mb-3 font-heading text-3xl font-bold tracking-tight leading-tight text-[#0b131e] sm:text-4xl md:text-5xl">
              Look Deeper. Build Smarter. Grow Better.
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg font-light">
              The foundational standards that guide every recommendation, architectural choice, and marketing strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((principle) => {
              const Icon = principle.icon;
              return (
                <Card key={principle.title} variant="tactile" className="p-7 sm:p-8">
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b131e] text-[#ffb703] mb-5">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-3 font-heading text-xl font-bold tracking-tight text-[#0b131e]">
                      {principle.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600 font-light">
                      {principle.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Bottom Unified CTA */}
      <FinalCta />
    </div>
  );
}
