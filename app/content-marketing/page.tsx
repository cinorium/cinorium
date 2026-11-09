import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  MessageSquare,
  Share2,
  TrendingUp,
  Target,
  Sparkles,
  Layers,
  Search,
  CheckCircle2,
  FileText,
  Video,
  Radio,
  BarChart3,
  Calendar,
  Eye,
  BookOpen,
  ShieldCheck,
  Code2,
  Megaphone,
  Mail,
  HelpCircle,
  Compass,
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
import ContentFaq from "./ContentFaq";
import { contentFaqs } from "./content-faq-data";

/* ─── Platform SVG Icons ─────────────────────────────────────────────────── */

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function YoutubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "Content & Social Media Marketing | Cinorium",
  description:
    "Strategic content and social media marketing to help businesses build brand awareness, engage relevant audiences and support sustainable growth.",
  alternates: {
    canonical: "/content-marketing",
  },
  openGraph: {
    title: "Content & Social Media Marketing | Cinorium",
    description:
      "Strategic content and social media marketing to help businesses build brand awareness, engage relevant audiences and support sustainable growth.",
    url: "https://www.cinorium.com/content-marketing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Content & Social Media Marketing | Cinorium",
    description:
      "Strategic content and social media marketing to help businesses build brand awareness, engage relevant audiences and support sustainable growth.",
  },
};

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
          name: "Content & Social Media Marketing",
          item: "https://www.cinorium.com/content-marketing",
        },
      ],
    },
    {
      "@type": "Service",
      name: "Content & Social Media Marketing Services",
      serviceType: "Content Marketing and Social Media Management",
      provider: {
        "@id": "https://www.cinorium.com/#organization",
      },
      url: "https://www.cinorium.com/content-marketing",
      description:
        "Strategic content and social media marketing to help businesses build brand awareness, engage relevant audiences and support sustainable growth.",
      areaServed: ["Pakistan", "United States", "United Kingdom", "Worldwide"],
    },
    {
      "@type": "FAQPage",
      mainEntity: contentFaqs.map((faq) => ({
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

const contentChallenges = [
  {
    icon: MessageSquare,
    title: "Inconsistent Communication",
    description:
      "Content is published erratically without a consistent message, clear direction, or recognizable brand voice that audiences can remember.",
  },
  {
    icon: Target,
    title: "Content Without Purpose",
    description:
      "Posts generate superficial activity but fail to consistently educate audiences, build commercial trust, or support meaningful business objectives.",
  },
  {
    icon: Layers,
    title: "Disconnected Platforms",
    description:
      "Different social channels communicate conflicting messages in isolation instead of contributing to a cohesive, unified brand presence.",
  },
  {
    icon: BarChart3,
    title: "No Meaningful Measurement",
    description:
      "Attention is wasted tracking follower counts and likes without understanding whether content actually drives brand awareness, inquiries, or business value.",
  },
];

const capabilities = [
  {
    icon: Compass,
    title: "Content Strategy & Planning",
    tagline: "Connecting editorial direction with commercial goals.",
    points: [
      "Audience research and customer content needs analysis",
      "Core content themes, messaging pillars, and topic planning",
      "Structured editorial calendars and publishing direction",
      "Brand messaging guidelines and cross-channel voice consistency",
    ],
  },
  {
    icon: FileText,
    title: "Content Development",
    tagline: "Creating substantive, platform-appropriate assets.",
    points: [
      "Engaging social media copy, captions, and hook architecture",
      "Educational articles, informative guides, and industry breakdowns",
      "Promotional campaigns and launch announcement copy",
      "Creative direction and supporting visual asset coordination",
      "Content adaptation across short-form, carousel, and visual formats",
    ],
  },
  {
    icon: Share2,
    title: "Social Media Management",
    tagline: "Maintaining an active, professional brand presence.",
    points: [
      "Platform-specific content scheduling and publishing coordination",
      "Profile presentation and brand bio consistency",
      "Active community interaction and audience engagement guidelines",
      "Monitoring audience sentiment, comments, and inquiries",
      "Ongoing adjustments based on publishing response",
    ],
  },
  {
    icon: TrendingUp,
    title: "Content Performance & Improvement",
    tagline: "Refining the strategy based on real engagement data.",
    points: [
      "Content reach, resonance, and audience retention monitoring",
      "Audience response analysis across different content formats",
      "Identifying high-performing topics and repurposing opportunities",
      "Actionable recommendations for editorial refinement",
      "Continuous improvement of the overall content approach",
    ],
  },
];

const customerJourneyStages = [
  {
    step: "01",
    title: "Awareness — Get Discovered",
    role: "First Impressions",
    description:
      "Introduce your business, core expertise, products, and solutions to relevant audiences who are encountering your brand for the first time.",
    contentTypes: [
      "Thought leadership insights",
      "Industry observations",
      "Short-form educational posts",
      "Broad-reach visual content",
    ],
  },
  {
    step: "02",
    title: "Education — Build Understanding",
    role: "Problem Clarification",
    description:
      "Answer key customer questions, explain common industry challenges, and help potential buyers understand how to evaluate their options.",
    contentTypes: [
      "How-to guides & practical breakdowns",
      "Comparison frameworks",
      "Detailed carousels",
      "Explanatory videos",
    ],
  },
  {
    step: "03",
    title: "Trust — Strengthen Relationships",
    role: "Credibility & Validation",
    description:
      "Demonstrate real-world competence, communicate consistently, and build lasting confidence through verified insights and credible perspectives.",
    contentTypes: [
      "Methodology deep dives",
      "Behind-the-scenes processes",
      "Direct answers to objections",
      "Client scenario breakdowns",
    ],
  },
  {
    step: "04",
    title: "Action — Encourage the Next Step",
    role: "Commercial Transition",
    description:
      "Use clear, context-appropriate calls to action that guide interested audiences toward consultations, project discussions, or subscriptions.",
    contentTypes: [
      "Direct consultation prompts",
      "Service capability overviews",
      "Resource & guide downloads",
      "Clear contact pathways",
    ],
  },
];

const distributionChannels = [
  {
    icon: InstagramIcon,
    name: "Instagram",
    purpose: "Visual Storytelling & Brand Identity",
    description:
      "Ideal for brand presence, product showcases, aesthetic communication, behind-the-scenes culture, and active community engagement.",
  },
  {
    icon: LinkedinIcon,
    name: "LinkedIn",
    purpose: "B2B Authority & Professional Insights",
    description:
      "Engineered for executive thought leadership, company milestones, industry analysis, B2B lead nurturing, and professional networking.",
  },
  {
    icon: FacebookIcon,
    name: "Facebook",
    purpose: "Community Interaction & Updates",
    description:
      "Effective for targeted audience communication, local business updates, community groups, event announcements, and broad demographic reach.",
  },
  {
    icon: YoutubeIcon,
    name: "YouTube",
    purpose: "Long-Form Video & In-Depth Education",
    description:
      "Unmatched for comprehensive video walkthroughs, deep-dive tutorials, product demonstrations, and evergreen search discoverability.",
  },
  {
    icon: Radio,
    name: "Specialized Channels",
    purpose: "Audience-Specific Distribution",
    description:
      "Selected selectively based on your industry, including Threads, X, or niche forums where your target buyers actively congregate.",
  },
];

const integratedMarketingPillars = [
  {
    icon: Search,
    title: "SEO & Search Visibility",
    href: "/seo-services",
    linkText: "Explore Search Services",
    role: "Compounds Organic Discovery",
    description:
      "Thorough content and educational guides directly support organic search visibility, building topical authority that attracts high-intent searchers over time.",
  },
  {
    icon: Compass,
    title: "Marketing Strategy",
    href: "/marketing-strategy",
    linkText: "Explore Marketing Strategy",
    role: "Directs Commercial Messaging",
    description:
      "Content priorities reflect overall business positioning, audience segmentation, and channel economics mapped out in your overarching marketing strategy.",
  },
  {
    icon: Megaphone,
    title: "Paid Advertising",
    href: "/paid-advertising",
    linkText: "Explore Paid Campaigns",
    role: "Amplifies Validated Content",
    description:
      "High-performing organic content provides proven messaging angles, creative frameworks, and hooks that can be scaled effectively through paid advertising campaigns.",
  },
  {
    icon: Mail,
    title: "Email & Customer Growth",
    href: "/services#email-ecommerce-growth",
    linkText: "Explore Retention Services",
    role: "Nurtures Existing Relationships",
    description:
      "Social and educational content fuels ongoing newsletter communication, customer onboarding, and retention workflows that drive repeat engagement.",
  },
  {
    icon: Code2,
    title: "Website & Conversion Experience",
    href: "/web-development",
    linkText: "Explore Web Engineering",
    role: "Converts Engaged Visitors",
    description:
      "Content and social touchpoints channel interested prospects toward fast, conversion-engineered website pages designed to turn attention into qualified inquiries.",
  },
];

export default function ContentMarketingPage() {
  return (
    <div className="w-full">
      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── 1. Hero Section ───────────────────────────────────────────────── */}
      <section
        id="content-hero"
        aria-label="Content & Social Media Marketing Hero"
        className={`w-full bg-[#fdfbf7] border-b border-black/10 ${px} pt-28 pb-14 sm:pt-32 sm:pb-16 md:pb-20 lg:pt-36`}
      >
        <div className={inner}>
          <div className="flex flex-col items-start max-w-3xl">
            <Badge variant="amber" size="sm" className="mb-4">
              Content & Social Media Marketing
            </Badge>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-gray-900 tracking-tight leading-[1.15] mb-4">
              Content That Builds Attention, Trust and Business Growth.
            </h1>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light mb-8 max-w-2xl">
              Your audience needs more than occasional posts. Cinorium helps businesses
              develop purposeful content and social media systems that communicate
              their value, build meaningful connections and support long-term growth.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  variant="accent"
                  size="lg"
                  className="w-full sm:w-auto font-semibold gap-2 shadow-sm"
                >
                  <span>Discuss Your Content Strategy</span>
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

            {/* Practical commitments banner */}
            <div className="mt-10 pt-6 border-t border-black/10 w-full grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 font-light">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ffb703] shrink-0" />
                <span>Purpose-driven content planning</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ffb703] shrink-0" />
                <span>Audience-focused distribution</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ffb703] shrink-0" />
                <span>Meaningful performance metrics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. The Content Problem ─────────────────────────────────────────── */}
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
              Being Active Online Doesn&apos;t Always Mean Making Progress.
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
              Many businesses publish regularly but struggle to turn their activity
              into meaningful results. The issue is often not a lack of content; it is
              the absence of a clear purpose and a connected approach.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {contentChallenges.map((challenge) => {
              const Icon = challenge.icon;
              return (
                <Card
                  key={challenge.title}
                  className="flex flex-col h-full bg-[#fdfbf7] border border-black/10 rounded-2xl p-5 sm:p-6 transition-all duration-200 hover:border-black/25"
                >
                  <CardHeader className="p-0 mb-3.5">
                    <div className="h-10 w-10 rounded-xl bg-white border border-black/10 flex items-center justify-center text-gray-900 mb-3 shadow-2xs">
                      <Icon className="h-5 w-5 text-[#0b131e]" />
                    </div>
                    <CardTitle className="font-heading text-base sm:text-lg font-bold text-gray-900 leading-snug">
                      {challenge.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 flex-grow">
                    <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                      {challenge.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. Content & Social Media Capabilities ─────────────────────────── */}
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
              A Connected Content System, Built Around Your Business.
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
              We bring planning, production, publishing and engagement together so
              your content has a clear role across the customer journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <Card
                  key={cap.title}
                  className="flex flex-col h-full bg-white border border-black/10 rounded-2xl p-5 sm:p-6 transition-all duration-200 hover:border-black/25"
                >
                  <CardHeader className="p-0 mb-3">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-9 w-9 rounded-lg bg-[#faf8f5] border border-black/10 flex items-center justify-center text-gray-900 shadow-2xs">
                        <Icon className="h-4 w-4 text-[#0b131e]" />
                      </div>
                      <CardTitle className="font-heading text-lg sm:text-xl font-bold text-gray-900">
                        {cap.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-xs sm:text-sm text-gray-600 font-light">
                      {cap.tagline}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-0 flex-grow mt-3 pt-3 border-t border-black/5">
                    <ul className="space-y-2 text-xs sm:text-sm text-gray-700 font-light">
                      {cap.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2.5">
                          <CheckCircle2 className="h-4 w-4 text-[#ffb703] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="p-0 mt-auto pt-3 border-t border-black/5">
                    <span className="text-xs font-medium text-gray-500">
                      Scoped to Project Scope & Retainer
                    </span>
                  </CardFooter>
                </Card>
              );
            })}
          </div>

          <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-white border border-black/10 flex items-start gap-3.5 text-xs sm:text-sm text-gray-600 font-light">
            <ShieldCheck className="h-5 w-5 text-[#0b131e] shrink-0 mt-0.5" />
            <p>
              <strong className="font-semibold text-gray-900">
                Transparent scope boundaries:
              </strong>{" "}
              Not every format, platform, or production asset is required for every
              engagement. We scope content deliverables around your agreed objectives,
              production budget, and where your audience actually consumes information.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. Our Content Approach ────────────────────────────────────────── */}
      <section
        id="approach"
        aria-labelledby="approach-heading"
        className={`w-full bg-white border-b border-black/10 ${px} py-14 sm:py-16 md:py-20`}
      >
        <div className={inner}>
          <div className="max-w-2xl mb-8 sm:mb-10">
            <Badge variant="secondary" size="sm" className="mb-3">
              How Content Works
            </Badge>
            <h2
              id="approach-heading"
              className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-3"
            >
              Give Every Piece of Content a Purpose.
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
              Not every post needs to sell. Different content serves different
              functions across the customer journey—from first discovery to confident
              decision-making.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {customerJourneyStages.map((stage) => (
              <div
                key={stage.step}
                className="flex flex-col h-full bg-[#fdfbf7] border border-black/10 rounded-2xl p-5 sm:p-6 relative overflow-hidden transition-all duration-200 hover:border-black/25"
              >
                <div
                  aria-hidden="true"
                  className="absolute top-2 right-3 font-modak text-5xl text-[#475569]/15 select-none pointer-events-none"
                >
                  {stage.step}
                </div>

                <div className="mb-3 relative z-10">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 mb-1 block">
                    {stage.role}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-gray-900 pr-8">
                    {stage.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed flex-grow mb-4 relative z-10">
                  {stage.description}
                </p>

                <div className="mt-auto pt-3 border-t border-black/5 relative z-10">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 block mb-2">
                    Key Formats
                  </span>
                  <ul className="space-y-1 text-xs text-gray-700 font-light">
                    {stage.contentTypes.map((type) => (
                      <li key={type} className="flex items-center gap-1.5">
                        <span className="h-1 w-1 rounded-full bg-[#ffb703] shrink-0" />
                        <span>{type}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Platform & Content Distribution ─────────────────────────────── */}
      <section
        id="platforms"
        aria-labelledby="platforms-heading"
        className={`w-full bg-[#faf8f5] border-b border-black/10 ${px} py-14 sm:py-16 md:py-20`}
      >
        <div className={inner}>
          <div className="max-w-2xl mb-8 sm:mb-10">
            <Badge variant="amber" size="sm" className="mb-3">
              The Right Channels
            </Badge>
            <h2
              id="platforms-heading"
              className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-3"
            >
              Create for the Audience, Not Just the Platform.
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
              Platform selection must be based on relevance, not popularity. We tailor
              your content to the native formats and communication styles of the
              channels where your customers actively engage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {distributionChannels.map((channel) => {
              const Icon = channel.icon;
              return (
                <Card
                  key={channel.name}
                  className="flex flex-col h-full bg-white border border-black/10 rounded-2xl p-5 sm:p-6 transition-all duration-200 hover:border-black/25"
                >
                  <CardHeader className="p-0 mb-3">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <div className="h-9 w-9 rounded-lg bg-[#faf8f5] border border-black/10 flex items-center justify-center text-gray-900 shadow-2xs">
                        <Icon className="h-4 w-4 text-[#0b131e]" />
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                        {channel.name}
                      </span>
                    </div>
                    <CardTitle className="font-heading text-lg font-bold text-gray-900">
                      {channel.purpose}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="p-0 flex-grow mt-1">
                    <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                      {channel.description}
                    </p>
                  </CardContent>

                  <CardFooter className="p-0 mt-auto pt-3 border-t border-black/5">
                    <span className="text-xs font-medium text-gray-500">
                      Platform Strategy & Formatting
                    </span>
                  </CardFooter>
                </Card>
              );
            })}
          </div>

          <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-white border border-black/10 flex items-start gap-3.5 text-xs sm:text-sm text-gray-600 font-light">
            <ShieldCheck className="h-5 w-5 text-[#0b131e] shrink-0 mt-0.5" />
            <p>
              <strong className="font-semibold text-gray-900">
                Focus over ubiquity:
              </strong>{" "}
              You do not need to be on every platform. Focusing on two or three
              well-chosen channels with high consistency and substance yields
              consistently better business outcomes than spreading shallow content across
              every emerging network.
            </p>
          </div>
        </div>
      </section>

      {/* ── 6. Integrated Marketing ─────────────────────────────────────────── */}
      <section
        id="integrated-marketing"
        aria-labelledby="integrated-heading"
        className={`w-full bg-white border-b border-black/10 ${px} py-14 sm:py-16 md:py-20`}
      >
        <div className={inner}>
          <div className="max-w-2xl mb-8 sm:mb-10">
            <Badge variant="secondary" size="sm" className="mb-3">
              Connected Growth
            </Badge>
            <h2
              id="integrated-heading"
              className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-3"
            >
              Content Works Better When It Connects With the Rest of Your Marketing.
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
              Content is not an isolated discipline. When planned strategically, it
              strengthens and accelerates every other marketing channel across the
              Cinorium ecosystem:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {integratedMarketingPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="flex flex-col h-full bg-[#fdfbf7] border border-black/10 rounded-2xl p-5 sm:p-6 transition-all duration-200 hover:border-black/25"
                >
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="h-9 w-9 rounded-lg bg-white border border-black/10 flex items-center justify-center text-gray-900 shadow-2xs">
                      <Icon className="h-4 w-4 text-[#0b131e]" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                      {pillar.role}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed flex-grow mb-4">
                    {pillar.description}
                  </p>

                  <div className="mt-auto pt-3 border-t border-black/5">
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
      </section>

      {/* ── 7. Is This Service Right for Your Business? ────────────────────── */}
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
              A Better Content Approach for Businesses Ready to Communicate With Purpose.
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
              We focus on building sustainable content systems that compound value over
              time, rather than pursuing short-lived vanity metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Where it helps most */}
            <div className="flex flex-col h-full bg-white border border-black/10 rounded-2xl p-5 sm:p-6">
              <div className="flex items-center gap-2.5 mb-3.5">
                <div className="h-8 w-8 rounded-lg bg-white border border-black/10 shadow-2xs flex items-center justify-center">
                  <CheckCircle2 className="h-4 w-4 text-[#ffb703]" />
                </div>
                <h3 className="font-heading text-lg font-bold text-gray-900">
                  Where This Service Delivers Strongest Value
                </h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-gray-700 font-light flex-grow">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#ffb703] shrink-0 mt-0.5" />
                  <span>
                    Businesses that need a more consistent, recognizable online presence across key channels.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#ffb703] shrink-0 mt-0.5" />
                  <span>
                    Brands struggling to explain their unique value proposition and service offerings clearly.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#ffb703] shrink-0 mt-0.5" />
                  <span>
                    Companies currently publishing sporadic content without a defined commercial direction.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#ffb703] shrink-0 mt-0.5" />
                  <span>
                    Growing firms wanting to build long-term audience trust, credibility, and organic reach.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#ffb703] shrink-0 mt-0.5" />
                  <span>
                    Teams needing a structured, organized content calendar and professional publishing process.
                  </span>
                </li>
              </ul>
            </div>

            {/* What to realistically expect */}
            <div className="flex flex-col h-full bg-white border border-black/10 rounded-2xl p-5 sm:p-6">
              <div className="flex items-center gap-2.5 mb-3.5">
                <div className="h-8 w-8 rounded-lg bg-[#faf8f5] border border-black/10 shadow-2xs flex items-center justify-center">
                  <HelpCircle className="h-4 w-4 text-[#0b131e]" />
                </div>
                <h3 className="font-heading text-lg font-bold text-gray-900">
                  What to Realistically Expect
                </h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-gray-700 font-light flex-grow">
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ffb703] shrink-0 mt-2" />
                  <span>
                    This service is not a guarantee of instant viral follower spikes or overnight sales surges.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ffb703] shrink-0 mt-2" />
                  <span>
                    Meaningful audience relationships require patience, active context, and sustained execution over months.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ffb703] shrink-0 mt-2" />
                  <span>
                    Content outcomes depend on market demand, competitive positioning, and genuine product/service quality.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ffb703] shrink-0 mt-2" />
                  <span>
                    We prioritize commercial relevance, qualified inquiries, and trust over empty follower counts.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. FAQs & Final CTA ────────────────────────────────────────────── */}
      <section
        id="content-faqs"
        aria-labelledby="content-faq-heading"
        className={`w-full bg-white border-b border-black/10 ${px} py-14 sm:py-16 md:py-20`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 sm:mb-10">
            <Badge variant="secondary" size="sm" className="mb-3">
              Common Questions
            </Badge>
            <h2
              id="content-faq-heading"
              className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-3"
            >
              Content &amp; Social Media Marketing — FAQs
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed max-w-2xl">
              Direct, transparent answers regarding publishing frequency, platform
              focus, management retainers, and realistic outcomes.
            </p>
          </div>

          <ContentFaq />
        </div>
      </section>

      {/* ── Custom Final CTA Section ───────────────────────────────────────── */}
      <section
        id="content-final-cta"
        className="w-full bg-[#0b131e] text-white py-16 sm:py-20 lg:py-24 px-6 sm:px-10 md:px-16 lg:px-24 border-t border-gray-800/80"
      >
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <Badge
            variant="default"
            dot="amber"
            size="lg"
            className="mb-6 bg-gray-900 border-gray-700"
          >
            Ready to Communicate With Purpose?
          </Badge>

          <h2 className="mb-6 max-w-3xl font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] text-white">
            Let&apos;s Give Your Content a Clearer Direction.
          </h2>

          <p className="mb-9 max-w-2xl text-base sm:text-lg text-gray-300 font-light leading-relaxed">
            Whether you need a more consistent social presence or a structured
            content approach, let&apos;s discuss what makes sense for your business.
          </p>

          <div className="flex w-full flex-col sm:flex-row items-center justify-center gap-4 sm:w-auto">
            <Link
              href="/contact"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#ffb703] px-8 py-4 text-base font-semibold text-[#0b131e] hover:bg-[#ffc52b] transition-colors"
            >
              Start a Conversation
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
              Strategic Editorial Planning
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#ffb703]" />
              Platform-Native Formatting
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#ffb703]" />
              Direct, Realistic Advice
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

