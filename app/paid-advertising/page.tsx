import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Users,
  Compass,
  Layers,
  Search,
  CheckCircle2,
  FileText,
  BarChart3,
  TrendingDown,
  Split,
  Eye,
  ShieldCheck,
  Code2,
  Megaphone,
  Mail,
  HelpCircle,
  Share2,
  Sliders,
  DollarSign,
  MousePointerClick,
  Sparkles,
  ArrowDown,
  Workflow,
  Check,
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
import PaidFaq from "./PaidFaq";
import { paidFaqs } from "./paid-faq-data";

export const metadata: Metadata = {
  title: "Paid Advertising & Customer Acquisition | Cinorium",
  description:
    "Strategic paid advertising and customer acquisition to help businesses reach relevant audiences, improve campaign performance and support measurable growth.",
  alternates: {
    canonical: "/paid-advertising",
  },
  openGraph: {
    title: "Paid Advertising & Customer Acquisition | Cinorium",
    description:
      "Strategic paid advertising and customer acquisition to help businesses reach relevant audiences, improve campaign performance and support measurable growth.",
    url: "https://www.cinorium.com/paid-advertising",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paid Advertising & Customer Acquisition | Cinorium",
    description:
      "Strategic paid advertising and customer acquisition to help businesses reach relevant audiences, improve campaign performance and support measurable growth.",
  },
};

/* ─── Platform SVG Icons ─────────────────────────────────────────────────── */

function GoogleIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
    </svg>
  );
}

function MetaIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12.001 7.2c-3.15 0-4.99 2.15-6.03 3.82-1.04-1.67-2.88-3.82-6.03-3.82C-1.049 7.2-.009 17.8 8.001 17.8c2.25 0 3.32-1.08 4-1.92.68.84 1.75 1.92 4 1.92 8.01 0 9.05-10.6 8.06-10.6-3.15 0-4.99 2.15-6.03 3.82-1.04-1.67-2.88-3.82-6.03-3.82zm-4 7.6c-4.42 0-4.42-4.6 0-4.6 1.76 0 3.03 1.84 4 3.06-.97 1.22-2.24 1.54-4 1.54zm8 0c-1.76 0-3.03-.32-4-1.54.97-1.22 2.24-3.06 4-3.06 4.42 0 4.42 4.6 0 4.6z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

/* ─── Shared Layout Tokens ─────────────────────────────────────────────── */
const px = "px-6 sm:px-10 md:px-16 lg:px-24";
const inner = "max-w-5xl mx-auto";

/* ─── Structured Data (JSON-LD) ────────────────────────────────────────── */
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
          name: "Paid Advertising & Customer Acquisition",
          item: "https://www.cinorium.com/paid-advertising",
        },
      ],
    },
    {
      "@type": "Service",
      name: "Paid Advertising & Customer Acquisition Services",
      serviceType: "Paid Advertising and Customer Acquisition",
      provider: {
        "@id": "https://www.cinorium.com/#organization",
      },
      url: "https://www.cinorium.com/paid-advertising",
      description:
        "Strategic paid advertising and customer acquisition to help businesses reach relevant audiences, improve campaign performance and support measurable growth.",
      areaServed: ["Pakistan", "United States", "United Kingdom", "Worldwide"],
    },
    {
      "@type": "FAQPage",
      mainEntity: paidFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

/* ─── Page Data ─────────────────────────────────────────────────────────── */

const advertisingChallenges = [
  {
    number: "01",
    tag: "Goal Clarity",
    icon: Target,
    title: "Unclear Campaign Objectives",
    description:
      "Campaigns are launched without clearly defining whether the primary priority is brand awareness, qualified inquiries, direct purchases, or another business outcome.",
    impact: "Result: Budget is spent without a clear standard for success.",
  },
  {
    number: "02",
    tag: "Targeting Fit",
    icon: Users,
    title: "Poor Audience Alignment",
    description:
      "Advertisements reach audiences who have little relevance to the business, its actual commercial offer, or its ideal customer profile.",
    impact: "Result: High click volume with minimal sales engagement.",
  },
  {
    number: "03",
    tag: "Funnel Continuity",
    icon: Split,
    title: "Disconnected Conversion Journeys",
    description:
      "An advertisement successfully attracts attention, but the destination landing page, offer, or next step fails to support the intended commercial action.",
    impact: "Result: High bounce rates and wasted media spend.",
  },
  {
    number: "04",
    tag: "Data Quality",
    icon: BarChart3,
    title: "Limited Performance Insight",
    description:
      "Attention is consumed by impressions, clicks, or surface-level metrics without understanding true acquisition costs, lead quality, or meaningful outcomes.",
    impact: "Result: Optimization decisions made on vanity metrics.",
  },
];

const capabilities = [
  {
    tag: "Strategy & Allocation",
    icon: Compass,
    title: "Campaign Strategy & Planning",
    tagline: "Aligning media investment with commercial priorities.",
    points: [
      "Defining clear advertising objectives and campaign targets",
      "Audience, market landscape, and competitive research",
      "Core offer structuring and messaging direction",
      "Channel selection based strictly on business requirements",
      "Campaign architecture and realistic budget allocation planning",
    ],
  },
  {
    tag: "Targeting & Setup",
    icon: Target,
    title: "Audience Targeting & Campaign Setup",
    tagline: "Structuring campaigns to reach qualified prospects.",
    points: [
      "Audience segmentation and high-intent targeting criteria",
      "Structured campaign and ad group hierarchy",
      "Commercial keyword and search-intent planning where applicable",
      "Geographic, demographic, and behavioral targeting parameters",
      "Conversion tracking and measurement requirement verification",
    ],
  },
  {
    tag: "Creative & Journey",
    icon: FileText,
    title: "Ad Creative & Conversion Alignment",
    tagline: "Connecting messaging with the post-click destination.",
    points: [
      "Strategic ad copywriting and compelling value propositions",
      "Creative concepts, headline testing, and variation planning",
      "Coordination of supporting visual assets and creative formats",
      "Landing-page alignment with specific advertisement messaging",
      "Clear calls to action and frictionless conversion journeys",
    ],
  },
  {
    tag: "Data & Optimization",
    icon: Sliders,
    title: "Performance Monitoring & Optimization",
    tagline: "Iterating based on verified acquisition performance.",
    points: [
      "Continuous campaign performance monitoring and data reviews",
      "Budget reallocation and bidding adjustments where appropriate",
      "Controlled audience, copy, and creative variation testing",
      "Cost per qualified lead and acquisition quality analysis",
      "Actionable recommendations based on empirical performance",
    ],
  },
];

const advertisingStages = [
  {
    step: "01",
    phase: "Understand",
    role: "Define the Objective",
    description:
      "Understand the business, ideal customer profile, commercial offer, market conditions, and the specific intended outcome of the campaign.",
    deliverables: [
      "Customer & offer review",
      "Commercial goal definition",
      "Measurement baseline audit",
    ],
  },
  {
    step: "02",
    phase: "Plan",
    role: "Build the Campaign",
    description:
      "Select suitable advertising channels, define audience segments, organize campaign structure, craft messaging, and establish budget guidelines.",
    deliverables: [
      "Channel prioritization",
      "Audience & keyword mapping",
      "Budget & flighting plan",
    ],
  },
  {
    step: "03",
    phase: "Launch",
    role: "Reach the Right Audience",
    description:
      "Deploy campaigns, coordinate relevant creative assets with landing page experiences, and verify that conversion measurement is tracking accurately.",
    deliverables: [
      "Campaign implementation",
      "Creative & landing page sync",
      "Tracking verification",
    ],
  },
  {
    step: "04",
    phase: "Improve",
    role: "Learn From Performance",
    description:
      "Review incoming data, identify efficiency opportunities, test purposeful changes, and systematically refine campaigns based on verified results.",
    deliverables: [
      "Cost & conversion analysis",
      "Controlled A/B variations",
      "Iterative budget refinement",
    ],
  },
];

const primaryChannels = [
  {
    icon: GoogleIcon,
    name: "Google Ads",
    role: "High-Intent Search & Discovery",
    badge: "Search & Intent",
    description:
      "Capture prospects actively seeking your solutions. Search campaigns aligned with commercial intent, supplemented with Display and YouTube advertising where relevant.",
    keyStrengths: [
      "Intent-driven search campaigns",
      "Google Display network reach",
      "YouTube video advertising",
      "Direct commercial keyword alignment",
    ],
  },
  {
    icon: MetaIcon,
    name: "Meta Ads",
    role: "Targeted Audience Discovery",
    badge: "Social Discovery",
    description:
      "Reach prospective buyers across Facebook and Instagram using demographic, interest, and behavioral targeting to build consideration and drive inquiries.",
    keyStrengths: [
      "Visual feed & story ad formats",
      "Precise audience segmentation",
      "Lead generation & inquiry funnels",
      "Retargeting engaged prospects",
    ],
  },
  {
    icon: LinkedinIcon,
    name: "LinkedIn Ads",
    role: "B2B Professional Acquisition",
    badge: "B2B & Enterprise",
    description:
      "Target decision-makers by job role, seniority, company size, and industry sector to generate qualified commercial leads and executive engagement.",
    keyStrengths: [
      "Job role & industry targeting",
      "Account-based marketing support",
      "B2B lead generation forms",
      "Executive decision-maker reach",
    ],
  },
];

const conversionElements = [
  {
    step: "01",
    title: "The Offer",
    description:
      "The advertisement must communicate an understandable, relevant reason for the audience to take action, addressing real customer needs.",
  },
  {
    step: "02",
    title: "The Landing Experience",
    description:
      "The destination page must seamlessly match the advertisement's message, maintaining continuity and clarifying the next step.",
  },
  {
    step: "03",
    title: "The Conversion Process",
    description:
      "Inquiry forms, consultation bookings, or checkout steps should be straightforward, fast, and easy to complete on any device.",
  },
  {
    step: "04",
    title: "Measurement & Feedback",
    description:
      "Accurate tracking enables the business to understand which campaigns, channels, and ads contribute to meaningful business outcomes.",
  },
];

const integratedMarketingPillars = [
  {
    icon: Compass,
    title: "Marketing Strategy & Planning",
    href: "/marketing-strategy",
    linkText: "Explore Strategy",
    role: "Directs Objectives",
    description:
      "Overarching strategy establishes the commercial goals, customer profile, and business priorities that guide campaign architecture.",
  },
  {
    icon: Share2,
    title: "Content & Social Media",
    href: "/content-marketing",
    linkText: "Explore Content",
    role: "Powers Creative",
    description:
      "Organic content insights, validated value propositions, and customer questions supply high-impact messaging angles for paid campaigns.",
  },
  {
    icon: Search,
    title: "SEO & Search Visibility",
    href: "/seo-services",
    linkText: "Explore Search",
    role: "Balances Search",
    description:
      "Paid search and organic SEO complement each other, providing comprehensive visibility across high-intent queries while building topical authority.",
  },
  {
    icon: Code2,
    title: "Web Development",
    href: "/web-development",
    linkText: "Explore Web Engineering",
    role: "Engineers Landing Pages",
    description:
      "Fast, conversion-focused website architecture ensures advertising traffic lands on pages engineered for sub-second speeds and high conversion rates.",
  },
  {
    icon: Mail,
    title: "Email & Customer Growth",
    href: "/services#email-ecommerce-growth",
    linkText: "Explore Retention",
    role: "Maximizes Value",
    description:
      "Automated email communication and post-acquisition workflows nurture new inquiries and customers to build repeat value beyond the initial click.",
  },
];

export default function PaidAdvertisingPage() {
  return (
    <div className="w-full">
      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── 1. Hero Section ───────────────────────────────────────────────── */}
      <section
        id="paid-hero"
        aria-label="Paid Advertising & Customer Acquisition Hero"
        className={`w-full bg-[#fdfbf7] border-b border-black/10 ${px} pt-28 pb-14 sm:pt-32 sm:pb-16 md:pb-20 lg:pt-36`}
      >
        <div className={inner}>
          <div className="flex flex-col items-start max-w-3xl">
            <Badge variant="amber" size="sm" className="mb-4">
              Paid Advertising & Customer Acquisition
            </Badge>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-gray-900 tracking-tight leading-[1.15] mb-4">
              Advertising That Reaches the Right Audience and Drives Meaningful
              Action.
            </h1>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light mb-8 max-w-2xl">
              Getting attention is only the beginning. Cinorium helps businesses
              plan, launch and improve paid advertising campaigns that connect
              relevant audiences with the right offer, support customer
              acquisition and make better use of advertising budgets.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  variant="accent"
                  size="lg"
                  className="w-full sm:w-auto font-semibold gap-2 shadow-sm"
                >
                  <span>Discuss Your Advertising Goals</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>

              <Link href="#approach" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-black/20 text-gray-900 hover:bg-black/5"
                >
                  Explore Our Approach
                </Button>
              </Link>
            </div>

            {/* Practical commitments banner — clean flex row */}
            <div className="mt-10 pt-6 border-t border-black/10 w-full flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs sm:text-sm text-gray-600 font-light">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ffb703] shrink-0" />
                <span>Audience-intent alignment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ffb703] shrink-0" />
                <span>Cohesive conversion journeys</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ffb703] shrink-0" />
                <span>Transparent performance metrics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. The Advertising Challenge ───────────────────────────────────── */}
      <section
        id="challenges"
        aria-labelledby="challenges-heading"
        className={`w-full bg-white border-b border-black/10 ${px} py-14 sm:py-16 md:py-20`}
      >
        <div className={inner}>
          <div className="max-w-2xl mb-8 sm:mb-10">
            <Badge variant="secondary" size="sm" className="mb-3">
              The Challenge
            </Badge>
            <h2
              id="challenges-heading"
              className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-3"
            >
              More Ad Spend Doesn&apos;t Automatically Mean Better Results.
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
              Businesses can spend money on advertising without understanding
              what is actually working. Campaigns often struggle because
              targeting, messaging, budgets and conversion experiences are not
              properly connected.
            </p>
          </div>

          {/* Structured 2x2 problem diagnosis grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {advertisingChallenges.map((challenge) => {
              const Icon = challenge.icon;
              return (
                <div
                  key={challenge.title}
                  className="flex flex-col h-full bg-[#fdfbf7] border border-black/10 rounded-2xl p-5 sm:p-6 transition-all duration-200 hover:border-black/25"
                >
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="h-9 w-9 rounded-lg bg-white border border-black/10 flex items-center justify-center text-gray-900 shadow-2xs">
                      <Icon className="h-4 w-4 text-[#0b131e]" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                      {challenge.tag}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">
                    {challenge.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed flex-grow mb-4">
                    {challenge.description}
                  </p>

                  <div className="mt-auto pt-3 border-t border-black/5 text-xs text-gray-600 font-medium flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ffb703] shrink-0" />
                    <span>{challenge.impact}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. Paid Advertising Capabilities ───────────────────────────────── */}
      <section
        id="capabilities"
        aria-labelledby="capabilities-heading"
        className={`w-full bg-[#faf8f5] border-b border-black/10 ${px} py-14 sm:py-16 md:py-20`}
      >
        <div className={inner}>
          <div className="max-w-2xl mb-8 sm:mb-10">
            <Badge variant="amber" size="sm" className="mb-3">
              What We Do
            </Badge>
            <h2
              id="capabilities-heading"
              className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-3"
            >
              A Structured Approach to Paid Customer Acquisition.
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
              We connect campaign planning, audience targeting, advertising
              execution and performance improvement around the objectives that
              matter to your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="flex flex-col h-full bg-white border border-black/10 rounded-2xl p-5 sm:p-6 transition-all duration-200 hover:border-black/25"
                >
                  <div className="flex items-center justify-between gap-3 mb-2.5">
                    <div className="h-9 w-9 rounded-lg bg-[#faf8f5] border border-black/10 flex items-center justify-center text-gray-900 shadow-2xs">
                      <Icon className="h-4 w-4 text-[#0b131e]" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                      {cap.tag}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg sm:text-xl font-bold text-gray-900 mb-1">
                    {cap.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed mb-4">
                    {cap.tagline}
                  </p>

                  <div className="mt-auto pt-3 border-t border-black/5">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 block mb-2">
                      Included Work Areas
                    </span>
                    <ul className="space-y-1.5 text-xs text-gray-700 font-light">
                      {cap.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#ffb703] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-white border border-black/10 flex items-start gap-3.5 text-xs sm:text-sm text-gray-600 font-light">
            <ShieldCheck className="h-5 w-5 text-[#0b131e] shrink-0 mt-0.5" />
            <p>
              <strong className="font-semibold text-gray-900">
                Tailored engagement scope:
              </strong>{" "}
              Not every platform, creative asset, or targeting feature is
              necessary for every campaign. Actual scope depends on your
              specific business goals, available budget, and target audience
              behavior.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. Our Advertising Approach ────────────────────────────────────── */}
      <section
        id="approach"
        aria-labelledby="approach-heading"
        className={`w-full bg-white border-b border-black/10 ${px} py-14 sm:py-16 md:py-20`}
      >
        <div className={inner}>
          <div className="max-w-2xl mb-8 sm:mb-10">
            <Badge variant="secondary" size="sm" className="mb-3">
              How Campaigns Work
            </Badge>
            <h2
              id="approach-heading"
              className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-3"
            >
              From Business Objective to Measurable Campaign Improvement.
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
              Optimization is continuous. A campaign should not be judged only
              by its initial launch or a single short-term metric. We guide paid
              acquisition through four disciplined stages:
            </p>
          </div>

          {/* Sequential 4-stage progression */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5">
            {advertisingStages.map((stage) => (
              <div
                key={stage.step}
                className="flex flex-col h-full bg-[#fdfbf7] border border-black/10 rounded-2xl p-5 relative overflow-hidden transition-all duration-200 hover:border-black/25"
              >
                <div
                  aria-hidden="true"
                  className="absolute top-2 right-3 font-modak text-4xl text-[#475569]/15 select-none pointer-events-none"
                >
                  {stage.step}
                </div>

                <div className="mb-3 relative z-10">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 px-2 py-0.5 inline-block mb-2">
                    Phase {stage.step}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-gray-900">
                    {stage.phase}
                  </h3>
                  <p className="text-xs text-gray-500 font-medium">
                    {stage.role}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed flex-grow mb-4 relative z-10">
                  {stage.description}
                </p>

                <div className="mt-auto pt-3 border-t border-black/5 relative z-10">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 block mb-1.5">
                    Key Activities
                  </span>
                  <ul className="space-y-1 text-xs text-gray-700 font-light">
                    {stage.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-1.5">
                        <span className="h-1 w-1 rounded-full bg-[#ffb703] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Advertising Channels ────────────────────────────────────────── */}
      <section
        id="channels"
        aria-labelledby="channels-heading"
        className={`w-full bg-[#faf8f5] border-b border-black/10 ${px} py-14 sm:py-16 md:py-20`}
      >
        <div className={inner}>
          <div className="max-w-2xl mb-8 sm:mb-10">
            <Badge variant="amber" size="sm" className="mb-3">
              Channel Selection
            </Badge>
            <h2
              id="channels-heading"
              className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-3"
            >
              Choose Advertising Channels That Match Your Customers.
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
              Different advertising platforms serve different purposes. The
              right channel depends on how customers discover products and
              services, how they make decisions and what the business wants to
              achieve.
            </p>
          </div>

          {/* 3 Core Primary Platforms */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
            {primaryChannels.map((channel) => {
              const Icon = channel.icon;
              return (
                <div
                  key={channel.name}
                  className="flex flex-col h-full bg-white border border-black/10 rounded-2xl p-5 sm:p-6 transition-all duration-200 hover:border-black/25"
                >
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="h-10 w-10 rounded-xl bg-[#faf8f5] border border-black/10 flex items-center justify-center text-gray-900 shadow-2xs">
                      <Icon className="h-5 w-5 text-[#0b131e]" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                      {channel.badge}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-1">
                    {channel.name}
                  </h3>
                  <p className="text-xs text-gray-500 font-medium mb-3">
                    {channel.role}
                  </p>

                  <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed flex-grow mb-4">
                    {channel.description}
                  </p>

                  <div className="mt-auto pt-3 border-t border-black/5">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 block mb-2">
                      Core Strengths
                    </span>
                    <ul className="space-y-1.5 text-xs text-gray-700 font-light">
                      {channel.keyStrengths.map((str) => (
                        <li key={str} className="flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#ffb703] shrink-0" />
                          <span>{str}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Complementary Specialized Platforms Panel */}
          <div className="rounded-2xl bg-white border border-black/10 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-1">
                <Layers className="h-4 w-4 text-[#ffb703]" />
                <h4 className="font-heading text-base font-bold text-gray-900">
                  Other Relevant & Specialized Advertising Platforms
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                Additional networks (such as niche industry directories,
                specialized B2B forums, or emerging channels) are considered
                selectively when audience behavior and unit economics justify
                their inclusion.
              </p>
            </div>
            <div className="shrink-0 text-xs text-gray-500 font-medium bg-[#faf8f5] px-3.5 py-2 rounded-xl border border-black/5">
              Selected by Customer Intent
            </div>
          </div>

          <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-white border border-black/10 flex items-start gap-3.5 text-xs sm:text-sm text-gray-600 font-light">
            <ShieldCheck className="h-5 w-5 text-[#0b131e] shrink-0 mt-0.5" />
            <p>
              <strong className="font-semibold text-gray-900">
                Objective channel selection:
              </strong>{" "}
              We do not advertise on every platform simply because it exists.
              Platform selection must be justified by target audience behavior,
              business model, and unit economics.
            </p>
          </div>
        </div>
      </section>

      {/* ── 6. The Conversion Journey ───────────────────────────────────────── */}
      <section
        id="conversion-journey"
        aria-labelledby="journey-heading"
        className={`w-full bg-white border-b border-black/10 ${px} py-14 sm:py-16 md:py-20`}
      >
        <div className={inner}>
          <div className="max-w-2xl mb-8 sm:mb-10">
            <Badge variant="secondary" size="sm" className="mb-3">
              Beyond the Advertisement
            </Badge>
            <h2
              id="journey-heading"
              className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-3"
            >
              A click only Valuable When the Next Step Makes Sense.
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
              Advertising performance depends on more than the advertisement
              itself. The customer journey after the click influences whether an
              interested visitor becomes a qualified lead or customer.
            </p>
          </div>

          {/* 4 Connected conversion elements pipeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {conversionElements.map((el) => (
              <div
                key={el.step}
                className="flex flex-col h-full bg-[#fdfbf7] border border-black/10 rounded-2xl p-5 transition-all duration-200 hover:border-black/25"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="font-modak text-lg text-[#ffb703] leading-none shrink-0"
                    aria-hidden="true"
                  >
                    {el.step}
                  </span>
                  <h3 className="font-heading text-base font-bold text-gray-900">
                    {el.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                  {el.description}
                </p>
              </div>
            ))}
          </div>

          {/* Integrated ecosystem connections */}
          <div className="pt-8 border-t border-black/10">
            <div className="max-w-2xl mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1 block">
                Connected Growth
              </span>
              <h3 className="font-heading text-xl font-bold text-gray-900">
                How Paid Advertising Connects With Other Growth Channels
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {integratedMarketingPillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="flex flex-col h-full bg-[#faf8f5] border border-black/10 rounded-2xl p-5 transition-all duration-200 hover:border-black/25"
                  >
                    <div className="flex items-center justify-between gap-3 mb-2.5">
                      <div className="h-8 w-8 rounded-lg bg-white border border-black/10 flex items-center justify-center text-gray-900 shadow-2xs">
                        <Icon className="h-4 w-4 text-[#0b131e]" />
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                        {pillar.role}
                      </span>
                    </div>

                    <h4 className="font-heading text-base font-bold text-gray-900 mb-1.5">
                      {pillar.title}
                    </h4>

                    <p className="text-xs text-gray-600 font-light leading-relaxed flex-grow mb-3">
                      {pillar.description}
                    </p>

                    <div className="mt-auto pt-2.5 border-t border-black/5">
                      <Link
                        href={pillar.href}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-900 hover:text-[#ffb703] transition-colors"
                      >
                        <span>{pillar.linkText}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Is Paid Advertising Right for Your Business? ─────────────────── */}
      <section
        id="qualification"
        aria-labelledby="qualification-heading"
        className={`w-full bg-[#faf8f5] border-b border-black/10 ${px} py-14 sm:py-16 md:py-20`}
      >
        <div className={inner}>
          <div className="max-w-2xl mb-8 sm:mb-10">
            <Badge variant="amber" size="sm" className="mb-3">
              The Right Fit
            </Badge>
            <h2
              id="qualification-heading"
              className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-3"
            >
              Advertising Works Best When the Business Is Ready to Convert
              Attention Into Action.
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
              We focus on purposeful customer acquisition campaigns where there
              is commercial clarity and readiness to handle incoming inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {/* Where it helps most */}
            <div className="flex flex-col h-full bg-white border border-black/10 rounded-2xl p-5 sm:p-6">
              <div className="flex items-center gap-2.5 mb-3.5">
                <div className="h-8 w-8 rounded-lg bg-white border border-black/10 shadow-2xs flex items-center justify-center">
                  <CheckCircle2 className="h-4 w-4 text-[#ffb703]" />
                </div>
                <h3 className="font-heading text-lg font-bold text-gray-900">
                  Where Paid Advertising Delivers Strong Value
                </h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-gray-700 font-light flex-grow">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#ffb703] shrink-0 mt-0.5" />
                  <span>
                    Businesses with a clearly defined commercial product or
                    service offering.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#ffb703] shrink-0 mt-0.5" />
                  <span>
                    Companies looking to generate qualified inquiries from
                    high-intent audiences.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#ffb703] shrink-0 mt-0.5" />
                  <span>
                    E-commerce businesses seeking focused, measurable customer
                    acquisition.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#ffb703] shrink-0 mt-0.5" />
                  <span>
                    Businesses entering new markets or targeting specific
                    geographic/demographic segments.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#ffb703] shrink-0 mt-0.5" />
                  <span>
                    Established firms that want a structured, data-driven
                    approach to existing paid campaigns.
                  </span>
                </li>
              </ul>
            </div>

            {/* When more preparation may be necessary */}
            <div className="flex flex-col h-full bg-[#fdfbf7] border border-black/10 rounded-2xl p-5 sm:p-6">
              <div className="flex items-center gap-2.5 mb-3.5">
                <div className="h-8 w-8 rounded-lg bg-[#faf8f5] border border-black/10 shadow-2xs flex items-center justify-center">
                  <HelpCircle className="h-4 w-4 text-[#0b131e]" />
                </div>
                <h3 className="font-heading text-lg font-bold text-gray-900">
                  When More Preparation May Be Necessary
                </h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-gray-700 font-light flex-grow">
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ffb703] shrink-0 mt-2" />
                  <span>
                    The core offer or value proposition is unclear or has not
                    been validated by the market.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ffb703] shrink-0 mt-2" />
                  <span>
                    The website or landing page experience is slow, confusing,
                    or unready to convert visitors.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ffb703] shrink-0 mt-2" />
                  <span>
                    The business has not allocated a realistic media budget for
                    testing and audience discovery.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ffb703] shrink-0 mt-2" />
                  <span>
                    Conversion tracking, sales follow-up processes, or lead
                    management systems are missing.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ffb703] shrink-0 mt-2" />
                  <span>
                    The business expects instant, guaranteed sales or ROAS
                    without allowing for testing.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-white border border-black/10 flex items-start gap-3.5 text-xs sm:text-sm text-gray-600 font-light">
            <ShieldCheck className="h-5 w-5 text-[#0b131e] shrink-0 mt-0.5" />
            <p>
              <strong className="font-semibold text-gray-900">
                Transparent financial model:
              </strong>{" "}
              Advertising platforms charge media spend directly to your payment
              method. Media budgets are separate from Cinorium&apos;s service
              fees. We do not promise guaranteed sales, leads, or artificial
              ROAS metrics; results depend on market dynamics, offer strength,
              and consistent optimization.
            </p>
          </div>
        </div>
      </section>

      {/* ── 8. FAQs & Final CTA ────────────────────────────────────────────── */}
      <section
        id="paid-faqs"
        aria-labelledby="paid-faq-heading"
        className={`w-full bg-white border-b border-black/10 ${px} py-14 sm:py-16 md:py-20`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 sm:mb-10">
            <Badge variant="secondary" size="sm" className="mb-3">
              Common Questions
            </Badge>
            <h2
              id="paid-faq-heading"
              className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-3"
            >
              Paid Advertising & Customer Acquisition — FAQs
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed max-w-2xl">
              Practical, transparent answers regarding platform choices, budget
              management, ad creative, landing page requirements, and
              performance expectations.
            </p>
          </div>

          <PaidFaq />
        </div>
      </section>

      {/* ── Custom Final CTA Section ───────────────────────────────────────── */}
      <section
        id="paid-final-cta"
        className="w-full bg-[#0b131e] text-white py-16 sm:py-20 lg:py-24 px-6 sm:px-10 md:px-16 lg:px-24 border-t border-gray-800/80"
      >
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <Badge
            variant="default"
            dot="amber"
            size="lg"
            className="mb-6 bg-gray-900 border-gray-700"
          >
            Ready to Accelerate Qualified Acquisition?
          </Badge>

          <h2 className="mb-6 max-w-3xl font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] text-white">
            Let&apos;s Build a More Focused Customer Acquisition Approach.
          </h2>

          <p className="mb-9 max-w-2xl text-base sm:text-lg text-gray-300 font-light leading-relaxed">
            Whether you&apos;re planning your first campaign or looking to
            improve existing advertising activity, let&apos;s discuss your
            business goals and the right next step.
          </p>

          <div className="flex w-full flex-col sm:flex-row items-center justify-center gap-4 sm:w-auto">
            <Link
              href="/contact"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#ffb703] px-8 py-4 text-base font-semibold text-[#0b131e] hover:bg-[#ffc52b] transition-colors"
            >
              Discuss Your Advertising Goals
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-[#ffb703] transition-colors py-2 px-4"
            >
              Explore All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800/80 w-full max-w-2xl flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm text-gray-400 font-light">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#ffb703]" />
              Intent-Driven Targeting
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#ffb703]" />
              Direct Platform Billing
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#ffb703]" />
              Conversion-Focused Alignment
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
