import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  ShieldCheck,
  Layers,
  Compass,
  CheckCircle2,
  TrendingUp,
  FileText,
  ShoppingBag,
  Code2,
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
  title: "About Cinorium | Digital Marketing & Growth Agency",
  description:
    "Discover Cinorium, a digital marketing and growth agency combining business-first strategy, search visibility, content, e-commerce and technical foundations.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Cinorium | Digital Marketing & Growth Agency",
    description:
      "Discover how Cinorium connects digital marketing strategy, search visibility, content and technology to support sustainable business growth.",
    url: "https://www.cinorium.com/about",
    type: "website",
  },
};

const workingStages = [
  {
    step: "01",
    title: "Understand",
    description:
      "Understand your business model, audience, products or services, current digital presence and the challenges affecting growth.",
  },
  {
    step: "02",
    title: "Assess",
    description:
      "Review your website, search presence, marketing activities and customer journey to identify gaps and opportunities.",
  },
  {
    step: "03",
    title: "Prioritize",
    description:
      "Identify the most relevant channels, improvements and actions based on your objectives, resources and business priorities.",
  },
  {
    step: "04",
    title: "Implement",
    description:
      "Put the agreed strategy into action through relevant marketing activities, content improvements and technical implementation.",
  },
  {
    step: "05",
    title: "Measure",
    description:
      "Evaluate meaningful indicators such as visibility, engagement, enquiries and website performance against defined objectives.",
  },
  {
    step: "06",
    title: "Improve",
    description:
      "Use findings and performance data to refine the approach, address new opportunities and improve the overall customer journey.",
  },
];

const principles = [
  {
    title: "Look Deeper",
    description:
      "Understand the business behind the brief. We look beyond individual marketing tasks to examine the underlying challenges, customer needs and opportunities.",
    icon: Layers,
  },
  {
    title: "Build Smarter",
    description:
      "Make informed decisions before investing time and resources. We prioritize purposeful strategies, useful technology and solutions that support real business objectives.",
    icon: Compass,
  },
  {
    title: "Grow Better",
    description:
      "Focus on sustainable progress rather than shortcuts. We value meaningful visibility, stronger customer relationships and continuous improvement over vanity metrics.",
    icon: ShieldCheck,
  },
];

const capabilities = [
  {
    number: "01",
    tier: "Strategy & Planning",
    title: "Digital Marketing Strategy",
    description:
      "A business-first approach to planning marketing activities around your audience, commercial objectives and customer journey.",
    icon: TrendingUp,
    href: "/digital-marketing",
    cta: "Explore Marketing Strategy",
    points: [
      "Business and audience understanding",
      "Marketing strategy and channel planning",
      "Customer journey and conversion planning",
    ],
  },
  {
    number: "02",
    tier: "Search & Discovery",
    title: "Search Visibility & SEO",
    description:
      "Improve how people discover, understand and evaluate your business through search engines and emerging AI-powered discovery platforms.",
    icon: Search,
    href: "/seo-services",
    cta: "Explore Search Visibility",
    points: [
      "Technical and on-page SEO",
      "Keyword research and content architecture",
      "Local SEO, AEO and GEO foundations",
    ],
  },
  {
    number: "03",
    tier: "Content & Engagement",
    title: "Content & Audience Engagement",
    description:
      "Develop useful, relevant content that communicates your value, supports audience discovery and helps build stronger customer relationships.",
    icon: FileText,
    href: "/services",
    cta: "Explore Our Services",
    points: [
      "Content planning and editorial direction",
      "Brand messaging and content development",
      "Organic channel alignment and distribution",
    ],
  },
  {
    number: "04",
    tier: "E-commerce & Growth",
    title: "E-commerce & Growth Systems",
    description:
      "Connect product discovery, customer experience and conversion improvements to create a more effective online shopping journey.",
    icon: ShoppingBag,
    href: "/services",
    cta: "Explore Our Services",
    points: [
      "E-commerce experience and product discovery",
      "Conversion and customer journey improvements",
      "Customer retention and loyalty foundations",
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
      name: "About Cinorium | Digital Marketing & Growth Agency",
      description:
        "Learn about Cinorium's business-first approach to digital marketing, search visibility, content, e-commerce and technical foundations.",
      mainEntity: {
        "@id": "https://www.cinorium.com/#organization",
      },
    },
  ],
};

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* 1. Hero */}
      <section
        id="about-hero"
        className="w-full bg-[#fdfbf7] pt-28 sm:pt-36 pb-16 sm:pb-20 px-6 sm:px-10 md:px-16 lg:px-24 border-b border-black/10"
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-4">
            <Badge variant="default" dot="amber" size="lg">
              About Cinorium
            </Badge>
          </div>

          <h1 className="mb-6 font-heading text-3xl font-bold tracking-tight leading-[1.1] text-[#0b131e] sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl">
            Built for Visibility. Designed for Growth.
          </h1>

          <p className="max-w-3xl text-base leading-relaxed text-gray-700 sm:text-lg mb-8 font-light">
            Cinorium is a digital marketing and growth agency focused on helping
            businesses build a stronger digital presence. We connect marketing
            strategy, search visibility, content and customer experience with
            the technical foundations that support them. Because effective
            digital growth requires more than disconnected marketing activities.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link href="/contact">
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto gap-2"
              >
                <span>Discuss Your Goals</span>
                <ArrowRight className="h-4 w-4 text-[#0b131e]" />
              </Button>
            </Link>

            <Link href="/services">
              <Button
                variant="slateOutline"
                size="lg"
                className="w-full sm:w-auto"
              >
                Explore Our Services
              </Button>
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
            <div className="lg:col-span-7">
              <Badge variant="secondary" size="sm" className="mb-3">
                Beyond the Surface
              </Badge>

              <h2 className="mb-6 font-heading text-3xl font-bold tracking-tight leading-tight text-[#0b131e] sm:text-4xl">
                Digital growth starts with understanding what is happening
                beneath the surface.
              </h2>

              <div className="space-y-4 text-base leading-relaxed text-gray-700 font-light">
                <p>
                  A business can invest in a new website, publish content,
                  improve its social presence and run marketing campaigns
                  without seeing the progress it expected. Often, the problem is
                  not a lack of activity. It is a lack of connection between
                  those activities.
                </p>

                <p>
                  Marketing cannot work in isolation from the business it
                  represents. The website, customer journey, search presence,
                  messaging and conversion experience all influence how
                  effectively a business attracts and serves its audience.
                </p>

                <p>
                  Cinorium brings these elements together. We approach digital
                  marketing with an understanding of the systems behind it,
                  examining how different parts of a digital presence work
                  together before deciding what needs to change.
                </p>

                <p>
                  Technology and AI can make execution more efficient, but tools
                  alone do not create a sound strategy. Understanding the
                  problem, making informed decisions and maintaining quality
                  remain essential.
                </p>
              </div>
            </div>

            {/* Founder-led callout */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border-2 border-black bg-[#faf8f5] p-7 sm:p-9 shadow-sm">
                <div className="mb-4">
                  <Badge variant="amber" size="sm">
                    Founder-Led Agency
                  </Badge>
                </div>

                <h3 className="mb-3 font-heading text-xl sm:text-2xl font-bold tracking-tight text-[#0b131e]">
                  Direct Involvement. Clear Accountability.
                </h3>

                <p className="text-sm leading-relaxed text-gray-600 mb-6 font-light">
                  Cinorium is founded and led by Muhammad Huzaifa. The approach
                  combines marketing, design and technical understanding to look
                  at business challenges from more than one perspective. Clients
                  benefit from direct communication, considered recommendations
                  and a clear understanding of the work being undertaken.
                </p>

                <div className="pt-5 border-t border-gray-200 flex flex-col gap-2.5 text-xs font-medium text-[#0b131e]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Direct founder involvement</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Business-first recommendations</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Technical and marketing alignment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Marketing Capabilities */}
      <section
        id="capabilities-overview"
        className="w-full bg-[#faf8f5] py-16 sm:py-20 lg:py-24 px-6 sm:px-10 md:px-16 lg:px-24 border-b border-black/10"
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 sm:mb-14">
            <Badge variant="default" dot="amber" size="sm" className="mb-3">
              What We Focus On
            </Badge>

            <h2 className="mb-3 font-heading text-3xl font-bold tracking-tight leading-tight text-[#0b131e] sm:text-4xl md:text-5xl">
              Connected Capabilities. One Growth Direction.
            </h2>

            <p className="max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg font-light">
              Our capabilities cover the key areas of digital marketing and
              growth. Each has a distinct role, but they are most effective when
              planned around the same business objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <Card
                  key={item.number}
                  variant="tactile"
                  className="p-7 sm:p-9 bg-white flex flex-col h-full"
                >
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
                        Focus Areas
                      </span>

                      <ul className="space-y-2">
                        {item.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2 text-xs sm:text-sm text-gray-600"
                          >
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>

                  <CardFooter className="p-0 border-t border-[#0b131e]/5 pt-6 mt-auto">
                    <Link href={item.href} className="w-full">
                      <Button
                        variant="slateOutline"
                        size="sm"
                        className="w-full justify-between"
                      >
                        <span>{item.cta}</span>
                        <ArrowRight className="h-4 w-4 text-[#0b131e]" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              );
            })}
          </div>

          {/* Supporting Technical Foundation */}
          <div className="mt-10 rounded-2xl border-2 border-black bg-[#0b131e] p-7 sm:p-9 text-white">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#ffb703]">
                    <Code2 className="h-5 w-5" />
                  </div>

                  <Badge variant="amber" size="sm">
                    Supporting Foundation
                  </Badge>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-3">
                  Technology That Supports Marketing.
                </h3>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
                  Websites, technical performance and implementation influence
                  how effectively marketing works. Our web engineering
                  capability supports search visibility, usability and
                  conversion objectives through purposeful technical solutions.
                </p>
              </div>

              <Link href="/web-development" className="shrink-0">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full md:w-auto gap-2"
                >
                  Explore Web Engineering
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Working Methodology */}
      <section
        id="methodology"
        className="w-full bg-[#0b131e] py-20 sm:py-24 px-6 sm:px-10 md:px-16 lg:px-24 text-white border-b border-gray-800/80"
      >
        <div className="max-w-5xl mx-auto w-full">
          <div className="mb-14 text-center md:text-left">
            <Badge
              variant="default"
              dot="amber"
              className="mb-3 bg-gray-900 border-gray-700"
            >
              How We Work
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-white mb-4">
              A Clearer Approach to Digital Growth.
            </h2>

            <p className="text-base sm:text-lg text-gray-400 max-w-2xl font-light leading-relaxed">
              Every business has different needs. Our working framework provides
              a structured way to understand the situation, prioritize the right
              actions and improve through ongoing evaluation.
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
                      Stage {stage.step}
                    </span>
                  </div>

                  <CardTitle className="text-xl sm:text-2xl text-white mt-2 font-heading">
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
            <strong className="text-white font-semibold">
              A Flexible Working Approach:
            </strong>{" "}
            Not every engagement requires all six stages in the same way. The
            scope depends on the business, its current digital presence and the
            objectives of the project. We define the relevant work before
            implementation begins.
          </div>
        </div>
      </section>

      {/* 5. Operating Principles */}
      <section
        id="principles"
        className="w-full bg-white py-16 sm:py-20 lg:py-24 px-6 sm:px-10 md:px-16 lg:px-24 border-b border-black/10"
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 sm:mb-14">
            <Badge variant="secondary" size="sm" className="mb-3">
              Our Philosophy
            </Badge>

            <h2 className="mb-3 font-heading text-3xl font-bold tracking-tight leading-tight text-[#0b131e] sm:text-4xl md:text-5xl">
              Look Deeper. Build Smarter. Grow Better.
            </h2>

            <p className="max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg font-light">
              Three principles that shape how we understand problems, make
              decisions and approach every opportunity for improvement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <Card
                  key={principle.title}
                  variant="tactile"
                  className="p-7 sm:p-8"
                >
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

      {/* 6. Final CTA */}
      <FinalCta />
    </div>
  );
}
