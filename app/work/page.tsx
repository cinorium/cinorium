import type { Metadata } from "next";
import Link from "next/link";
import {
  ExternalLink,
  ArrowRight,
  Gauge,
  CheckCircle2,
  Layers,
  Sparkles,
  Info,
  ShoppingBag,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "Work & Production Evidence Portfolio",
  description:
    "Explore Cinorium's digital marketing and web engineering portfolio, including live production platforms, lab performance benchmarks, and exploratory concept prototypes.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Work & Production Evidence Portfolio | Cinorium",
    description:
      "Explore Cinorium's digital marketing and web engineering portfolio, including live production platforms, lab performance benchmarks, and exploratory concept prototypes.",
    url: "https://www.cinorium.com/work",
    type: "website",
  },
};

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
          name: "Work",
          item: "https://www.cinorium.com/work",
        },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": "https://www.cinorium.com/work#webpage",
      url: "https://www.cinorium.com/work",
      name: "Work & Production Evidence Portfolio | Cinorium",
      description:
        "Explore Cinorium's digital marketing and web engineering portfolio, including live production platforms, lab performance benchmarks, and exploratory concept prototypes.",
      publisher: {
        "@id": "https://www.cinorium.com/#organization",
      },
    },
  ],
};

export default function WorkPage() {
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
        id="overview"
        className="w-full bg-[#fdfbf7] pt-28 sm:pt-36 pb-16 sm:pb-20 px-6 sm:px-10 md:px-16 lg:px-24 border-b border-black/10"
      >
        <div className="max-w-5xl mx-auto">
          {/* Eyebrow */}
          <div className="mb-4">
            <Badge variant="default" dot="amber" size="lg">
              Selected Work &amp; Case Studies
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 font-heading text-3xl font-bold tracking-tight leading-[1.1] text-[#0b131e] sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl">
            Platforms Engineered for Measurable Performance.
          </h1>

          {/* Supporting Copy */}
          <p className="max-w-3xl text-base leading-relaxed text-gray-700 sm:text-lg mb-8 font-light">
            Explore selected production platforms and exploratory concepts developed by Cinorium. Each project demonstrates our integrated approach: aligning customer intent, search visibility, and high-performance web engineering to turn visitors into confirmed inquiries.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link href="/contact">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto gap-2">
                <span>Discuss Your Project</span>
                <ArrowRight className="h-4 w-4 text-[#0b131e]" />
              </Button>
            </Link>

            <Link href="#featured-projects">
              <Button variant="slateOutline" size="lg" className="w-full sm:w-auto">
                <span>Explore Live Platforms</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Featured Projects Section (Live Client Websites) */}
      <section
        id="featured-projects"
        className="w-full bg-[#faf8f5] py-16 sm:py-20 lg:py-24 px-6 sm:px-10 md:px-16 lg:px-24 border-b border-black/10"
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 sm:mb-14 text-center sm:text-left">
            <Badge variant="secondary" size="sm" className="mb-3">
              Production Case Studies
            </Badge>
            <h2 className="mb-3 font-heading text-3xl font-bold tracking-tight leading-tight text-[#0b131e] sm:text-4xl md:text-5xl">
              Live Business Platforms
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg font-light">
              Active platforms operating in production, engineered for organic discoverability, speed, and conversion.
            </p>
          </div>

          <div className="flex flex-col gap-10 sm:gap-12">
            {/* Project 1: Clothing Nexus */}
            <article
              aria-labelledby="project-clothing-nexus-title"
              className="group relative flex flex-col rounded-3xl border-2 border-black bg-white p-6 sm:p-9 md:p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Header row: Badges and URL */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="success" size="sm">
                    Live Platform
                  </Badge>
                  <Badge variant="secondary" size="sm">
                    Next.js App Router
                  </Badge>
                  <Badge variant="amber" size="sm">
                    Product Catalogue
                  </Badge>
                </div>

                <span className="text-xs text-gray-500 font-mono">
                  clothingnexus.com
                </span>
              </div>

              {/* Title & Description */}
              <div className="mb-8">
                <h3
                  id="project-clothing-nexus-title"
                  className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#0b131e] mb-4"
                >
                  Clothing Nexus
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl font-light">
                  A custom B2B web platform with an extensive product catalogue, engineered with Next.js. Development included careful attention to hierarchical catalogue navigation, high-density product imagery compression, technical SEO, and conversion friction elimination.
                </p>
              </div>

              {/* Scope of Contribution */}
              <div className="mb-8 rounded-2xl border border-gray-200 bg-[#fdfbf7] p-6 sm:p-7">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-800 mb-4 flex items-center gap-2">
                  <Layers className="h-4 w-4 text-[#ffb703]" />
                  Scope of Technical Contribution
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Custom Next.js App Router architecture</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Automated product image optimization &amp; WebP delivery</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Search-intent taxonomy &amp; crawlable breadcrumbs</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>JSON-LD schema markup &amp; semantic HTML5 hierarchy</span>
                  </li>
                  <li className="flex items-start gap-2.5 sm:col-span-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Core Web Vitals performance tuning targeting sub-second renders</span>
                  </li>
                </ul>
              </div>

              {/* PageSpeed Insights Panel */}
              <div className="mb-8 rounded-2xl border-2 border-[#0b131e] bg-[#fdfbf7] p-6 sm:p-7">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-2.5">
                    <Gauge className="h-5 w-5 text-[#0b131e]" />
                    <h4 className="font-heading text-lg sm:text-xl font-bold tracking-tight text-[#0b131e]">
                      Google PageSpeed Insights Lab Report
                    </h4>
                  </div>
                  <span className="text-xs font-medium text-gray-600 bg-white border border-gray-300 rounded-lg px-3 py-1 w-max">
                    Audit Date: 29 October 2026
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
                  <div className="bg-white rounded-xl border border-gray-200 p-4 text-center shadow-xs flex flex-col justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-600 mb-1">
                      Desktop Perf.
                    </span>
                    <div className="my-1">
                      <span className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-emerald-600">
                        100
                      </span>
                      <span className="text-xs text-gray-400 font-medium">/100</span>
                    </div>
                    <span className="inline-flex items-center justify-center gap-1 text-[11px] font-medium text-emerald-800 bg-emerald-50 rounded-full px-2 py-0.5 mt-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Desktop Lab
                    </span>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-4 text-center shadow-xs flex flex-col justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-600 mb-1">
                      Mobile Perf.
                    </span>
                    <div className="my-1">
                      <span className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-[#0b131e]">
                        75
                      </span>
                      <span className="text-xs text-gray-400 font-medium">/100</span>
                    </div>
                    <span className="inline-flex items-center justify-center gap-1 text-[11px] font-medium text-amber-900 bg-[#faf8f5] border border-amber-200/60 rounded-full px-2 py-0.5 mt-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#ffb703]" />
                      Mobile Lab
                    </span>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-4 text-center shadow-xs flex flex-col justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-600 mb-1">
                      Accessibility
                    </span>
                    <div className="my-1">
                      <span className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-emerald-600">
                        96
                      </span>
                      <span className="text-xs text-gray-400 font-medium">/100</span>
                    </div>
                    <span className="inline-flex items-center justify-center gap-1 text-[11px] font-medium text-emerald-800 bg-emerald-50 rounded-full px-2 py-0.5 mt-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Verified
                    </span>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-4 text-center shadow-xs flex flex-col justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-600 mb-1">
                      Best Practices
                    </span>
                    <div className="my-1">
                      <span className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-emerald-600">
                        96
                      </span>
                      <span className="text-xs text-gray-400 font-medium">/100</span>
                    </div>
                    <span className="inline-flex items-center justify-center gap-1 text-[11px] font-medium text-emerald-800 bg-emerald-50 rounded-full px-2 py-0.5 mt-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Verified
                    </span>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-4 text-center shadow-xs flex flex-col justify-between col-span-2 sm:col-span-1">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-600 mb-1">
                      SEO
                    </span>
                    <div className="my-1">
                      <span className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-emerald-600">
                        92
                      </span>
                      <span className="text-xs text-gray-400 font-medium">/100</span>
                    </div>
                    <span className="inline-flex items-center justify-center gap-1 text-[11px] font-medium text-emerald-800 bg-emerald-50 rounded-full px-2 py-0.5 mt-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Verified
                    </span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-gray-200 flex items-start gap-2.5 text-xs text-gray-600 leading-relaxed font-light">
                  <Info className="h-4 w-4 text-gray-500 shrink-0 mt-0.5" />
                  <p>
                    <strong>Performance Disclosure:</strong> Results reflect a specific synthetic lab audit captured on 29 October 2026. Lab audits measure controlled environments; live Core Web Vitals differ based on real-world user devices, caching behavior, and ISP networks.
                  </p>
                </div>
              </div>

              {/* Action Link Button */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <a
                  href="https://www.clothingnexus.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5"
                >
                  <Button variant="default" size="default" className="gap-2">
                    <span>View Live Website</span>
                    <ExternalLink className="h-4 w-4 text-[#ffb703]" />
                  </Button>
                </a>

                <span className="text-xs text-gray-500">
                  Opens external website in a new tab
                </span>
              </div>
            </article>

            {/* Project 2: CN Fragrances */}
            <article
              aria-labelledby="project-cn-fragrances-title"
              className="group relative flex flex-col rounded-3xl border-2 border-black bg-white p-6 sm:p-9 md:p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="success" size="sm">
                    Live Platform
                  </Badge>
                  <Badge variant="secondary" size="sm">
                    Next.js App Router
                  </Badge>
                  <Badge variant="amber" size="sm">
                    <ShoppingBag className="h-3 w-3 mr-1 inline" />
                    DTC E-commerce Store
                  </Badge>
                </div>

                <span className="text-xs text-gray-500 font-mono">
                  cnfragrances.com
                </span>
              </div>

              <div className="mb-8">
                <h3
                  id="project-cn-fragrances-title"
                  className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#0b131e] mb-4"
                >
                  CN Fragrances
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl font-light">
                  A direct-to-consumer e-commerce store engineered with Next.js for a fragrance brand, featuring a curated product catalog, shopping cart, customer accounts, and real-time order tracking.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="rounded-2xl border border-gray-200 bg-[#fdfbf7] p-6 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-800 mb-3 flex items-center gap-2">
                      <Layers className="h-4 w-4 text-[#ffb703]" />
                      Scope of Contribution
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed mb-4 font-light">
                      Full-stack website development, e-commerce storefront, and mobile checkout UX.
                    </p>
                    <ul className="space-y-2.5 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Custom Next.js e-commerce storefront development</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Product catalog, variant selection &amp; shopping cart integration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Customer self-service portal &amp; real-time order tracking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Mobile-first shopping interface with bottom floating navigation</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-2xl border-2 border-black bg-[#faf8f5] p-6 flex flex-col justify-between shadow-xs">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#0b131e] mb-3 flex items-center gap-2">
                      <Info className="h-4 w-4 text-amber-600" />
                      Project Context &amp; Group Affiliation
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed font-light">
                      Developed as a dedicated online retail venture associated with the Clothing Nexus company group. Built to provide a direct-to-consumer digital shopping channel for the brand&apos;s fragrance line.
                    </p>
                  </div>
                  <p className="mt-4 text-xs text-gray-500 leading-relaxed border-t border-black/10 pt-3">
                    Presented as an independent live e-commerce platform within the broader Clothing Nexus group portfolio.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <a
                  href="https://www.cnfragrances.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5"
                >
                  <Button variant="default" size="default" className="gap-2">
                    <span>View Live Website</span>
                    <ExternalLink className="h-4 w-4 text-[#ffb703]" />
                  </Button>
                </a>

                <span className="text-xs text-gray-500">
                  Opens external website in a new tab
                </span>
              </div>
            </article>

            {/* Project 3: CN IT Solutions */}
            <article
              aria-labelledby="project-cn-it-title"
              className="group relative flex flex-col rounded-3xl border-2 border-black bg-white p-6 sm:p-9 md:p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="success" size="sm">
                    Live Platform
                  </Badge>
                  <Badge variant="secondary" size="sm">
                    IT Corporate Website
                  </Badge>
                </div>

                <span className="text-xs text-gray-500 font-mono">
                  cnitsolutions.com
                </span>
              </div>

              <div className="mb-8">
                <h3
                  id="project-cn-it-title"
                  className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#0b131e] mb-4"
                >
                  CN IT Solutions
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl font-light">
                  A dedicated website for an IT enterprise, presenting its technical service offerings, certifications, and corporate inquiry pathways.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="rounded-2xl border border-gray-200 bg-[#fdfbf7] p-6 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-800 mb-3 flex items-center gap-2">
                      <Layers className="h-4 w-4 text-[#ffb703]" />
                      Scope of Contribution
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed mb-4 font-light">
                      Corporate web presence engineering and service funnel implementation.
                    </p>
                    <ul className="space-y-2.5 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Corporate IT services presentation and taxonomy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Responsive, business-oriented layouts across all viewports</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Accessible typography and conversion contact funnels</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-2xl border-2 border-black bg-[#faf8f5] p-6 flex flex-col justify-between shadow-xs">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#0b131e] mb-3 flex items-center gap-2">
                      <Info className="h-4 w-4 text-amber-600" />
                      Project Context &amp; Group Affiliation
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed font-light">
                      Developed for an affiliate enterprise related to the same corporate group as Clothing Nexus to establish an authoritative online footprint for its IT consulting vertical.
                    </p>
                  </div>
                  <p className="mt-4 text-xs text-gray-500 leading-relaxed border-t border-black/10 pt-3">
                    Presented transparently as an affiliated engagement focused on website implementation and corporate presence.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <a
                  href="https://www.cnitsolutions.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5"
                >
                  <Button variant="default" size="default" className="gap-2">
                    <span>View Live Website</span>
                    <ExternalLink className="h-4 w-4 text-[#ffb703]" />
                  </Button>
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
        className="w-full bg-white py-16 sm:py-20 lg:py-24 px-6 sm:px-10 md:px-16 lg:px-24 border-b border-black/10"
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 sm:mb-14 text-center sm:text-left">
            <Badge variant="secondary" size="sm" className="mb-3">
              Exploratory Work
            </Badge>
            <h2 className="mb-3 font-heading text-3xl font-bold tracking-tight leading-tight text-[#0b131e] sm:text-4xl md:text-5xl">
              Concepts &amp; Industry Prototypes
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg font-light">
              Interactive concept prototypes developed to explore user journeys, sector-specific taxonomies, and conversion funnels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {/* Project 4: Zubair Law Associates */}
            <Card variant="tactile" className="p-6 sm:p-7 flex flex-col h-full">
              <div className="flex items-center justify-between gap-2 mb-4 min-h-[1.75rem]">
                <Badge variant="secondary" size="sm">
                  Client Pitch / Concept
                </Badge>
                <span className="text-xs text-gray-500 font-mono">Legal Services</span>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[#0b131e] mb-2.5 min-h-[3.5rem] flex items-center">
                Zubair Law Associates
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 font-light flex-grow">
                A modern website concept designed for an Advocate High Court legal chamber in Karachi. Demonstrates structured presentation of civil, criminal, and constitutional litigation services. Prepared as an exploratory client pitch.
              </p>

              <div className="mt-auto pt-6 border-t border-[#0b131e]/5">
                <a
                  href="https://zubair-law-associates.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0b131e] hover:text-amber-700 transition-colors"
                >
                  <span>View Concept Demo</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </Card>

            {/* Project 5: Tooni Wear */}
            <Card variant="tactile" className="p-6 sm:p-7 flex flex-col h-full">
              <div className="flex items-center justify-between gap-2 mb-4 min-h-[1.75rem]">
                <Badge variant="subtle" size="sm">
                  Project on hold
                </Badge>
                <span className="text-xs text-gray-500 font-mono">E-commerce</span>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[#0b131e] mb-2.5 min-h-[3.5rem] flex items-center">
                Tooni Wear
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 font-light flex-grow">
                A website concept for a children&apos;s apparel brand. Exploratory concept prototype; currently on hold and not an operating commercial store.
              </p>

              <div className="mt-auto pt-6 border-t border-[#0b131e]/5">
                <a
                  href="https://tooniwear.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0b131e] hover:text-amber-700 transition-colors"
                >
                  <span>View Concept Preview</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </Card>

            {/* Project 6: March Computer */}
            <Card variant="tactile" className="p-6 sm:p-7 flex flex-col h-full">
              <div className="flex items-center justify-between gap-2 mb-4 min-h-[1.75rem]">
                <Badge variant="secondary" size="sm">
                  Concept / Sample
                </Badge>
                <span className="text-xs text-gray-500 font-mono">Hardware</span>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[#0b131e] mb-2.5 min-h-[3.5rem] flex items-center">
                March Computer
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 font-light flex-grow">
                A website sample exploring structured product presentation for a computer hardware retail and enterprise business.
              </p>

              <div className="mt-auto pt-6 border-t border-[#0b131e]/5">
                <a
                  href="https://cinorium.github.io/march/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0b131e] hover:text-amber-700 transition-colors"
                >
                  <span>View Sample Website</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </Card>

            {/* Project 7: Lexway */}
            <Card variant="tactile" className="p-6 sm:p-7 flex flex-col h-full">
              <div className="flex items-center justify-between gap-2 mb-4 min-h-[1.75rem]">
                <Badge variant="secondary" size="sm">
                  Concept / Sample
                </Badge>
                <span className="text-xs text-gray-500 font-mono">Legal Services</span>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[#0b131e] mb-2.5 min-h-[3.5rem] flex items-center">
                Lexway
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 font-light flex-grow">
                A legal chamber website concept focused on presenting practice areas, attorney credentials, and inquiry consultation funnels.
              </p>

              <div className="mt-auto pt-6 border-t border-[#0b131e]/5">
                <a
                  href="https://cinorium.github.io/Lexway/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0b131e] hover:text-amber-700 transition-colors"
                >
                  <span>View Concept Website</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </Card>

            {/* Project 8: Khawar Law Associates */}
            <Card variant="tactile" className="p-6 sm:p-7 flex flex-col h-full">
              <div className="flex items-center justify-between gap-2 mb-4 min-h-[1.75rem]">
                <Badge variant="secondary" size="sm">
                  Concept / Sample
                </Badge>
                <span className="text-xs text-gray-500 font-mono">Legal Services</span>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[#0b131e] mb-2.5 min-h-[3.5rem] flex items-center">
                Khawar Law Associates
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 font-light flex-grow">
                A clean website sample developed for an advocacy and legal advisory firm, structuring litigation and arbitration services.
              </p>

              <div className="mt-auto pt-6 border-t border-[#0b131e]/5">
                <a
                  href="https://cinorium.github.io/khawar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0b131e] hover:text-amber-700 transition-colors"
                >
                  <span>View Sample Website</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </Card>

            {/* Project 9: 3G Leather */}
            <Card variant="tactile" className="p-6 sm:p-7 flex flex-col h-full">
              <div className="flex items-center justify-between gap-2 mb-4 min-h-[1.75rem]">
                <Badge variant="secondary" size="sm">
                  Concept / Sample
                </Badge>
                <span className="text-xs text-gray-500 font-mono">Export Goods</span>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[#0b131e] mb-2.5 min-h-[3.5rem] flex items-center">
                3G Leather
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 font-light flex-grow">
                A custom sample platform created during business development discussions to explore B2B leather garment and accessories export catalogues.
              </p>

              <div className="mt-auto pt-6 border-t border-[#0b131e]/5">
                <a
                  href="https://cinorium.github.io/3gleather/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0b131e] hover:text-amber-700 transition-colors"
                >
                  <span>View Sample Website</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. Engineering Principles Overview */}
      <section className="w-full bg-[#faf8f5] py-16 sm:py-20 px-6 sm:px-10 md:px-16 lg:px-24 border-b border-black/10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center sm:text-left">
            <Badge variant="secondary" size="sm" className="mb-3">
              Delivery Standards
            </Badge>
            <h2 className="mb-3 font-heading text-3xl font-bold tracking-tight leading-tight text-[#0b131e] sm:text-4xl">
              Principles Behind Every Build
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-gray-600 font-light">
              How we approach structure, speed, and real-world commercial usability across client platforms and concept prototypes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card variant="tactile" className="p-6 sm:p-7 bg-white flex flex-col h-full">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0b131e] text-[#ffb703] mb-4">
                <Layers className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-xl font-bold tracking-tight text-[#0b131e] mb-2 min-h-[2.5rem] flex items-center">
                Structured Foundations
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-gray-600 font-light flex-grow">
                Clean semantic hierarchy and intentional document flow that make pages intuitive for prospective clients and effortless for search engine bots.
              </p>
            </Card>

            <Card variant="tactile" className="p-6 sm:p-7 bg-white flex flex-col h-full">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0b131e] text-[#ffb703] mb-4">
                <Gauge className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-xl font-bold tracking-tight text-[#0b131e] mb-2 min-h-[2.5rem] flex items-center">
                Performance-Conscious
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-gray-600 font-light flex-grow">
                Sub-second loading, minimal client-side script bundles, and optimized Core Web Vitals to prevent buyer drop-off and support crawl equity.
              </p>
            </Card>

            <Card variant="tactile" className="p-6 sm:p-7 bg-white flex flex-col h-full">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0b131e] text-[#ffb703] mb-4">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-xl font-bold tracking-tight text-[#0b131e] mb-2 min-h-[2.5rem] flex items-center">
                Conversion Clarity
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-gray-600 font-light flex-grow">
                Layouts designed to articulate your commercial value proposition with authority and guide interested visitors smoothly toward meaningful inquiries.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 5. Bottom Unified CTA */}
      <FinalCta />
    </div>
  );
}
