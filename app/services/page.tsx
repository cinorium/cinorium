import type { Metadata } from "next";
import Link from "next/link";
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
  title: "Digital Marketing & Growth Services | Cinorium",
  description:
    "Explore Cinorium's digital marketing services, including marketing strategy, SEO, AI search visibility, content, social media, paid advertising, email marketing, and e-commerce growth.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Digital Marketing & Growth Services | Cinorium",
    description:
      "Explore integrated digital marketing and growth services, supported by technically sound web development and visual communication.",
    url: "https://www.cinorium.com/services",
    type: "website",
  },
};

/* ─── Core Marketing Services ───────────────────────────────────────────── */

const primaryServices = [
  {
    id: "marketing-strategy",
    number: "01",
    title: "Marketing Strategy & Planning",
    tagline:
      "A clear direction that connects your business goals with the right audiences, channels, and opportunities.",
    description:
      "Effective marketing starts with understanding the business, not simply choosing platforms or launching campaigns. We bring your positioning, audience research, commercial objectives, and marketing activities together into a practical strategy.",
    badgeText: "Strategic Direction",
    actionHref: "/marketing-strategy",
    actionText: "Explore Marketing Strategy",
    deliverables: [
      {
        name: "Business & Audience Research",
        desc: "Understand your market, customer segments, buying behaviour, and competitive landscape.",
      },
      {
        name: "Positioning & Messaging",
        desc: "Clarify your value proposition and develop messaging that speaks to customer needs.",
      },
      {
        name: "Marketing & Channel Strategy",
        desc: "Choose relevant channels and plan how they work together across the customer journey.",
      },
      {
        name: "Campaign Planning & Measurement",
        desc: "Set campaign objectives, define meaningful KPIs, and establish a practical measurement plan.",
      },
    ],
  },
  {
    id: "search-visibility",
    number: "02",
    title: "Search Visibility & SEO",
    tagline:
      "Make it easier for customers to discover, understand, and evaluate your business through search.",
    description:
      "Search visibility goes beyond inserting keywords into pages. We work across technical SEO, content relevance, site architecture, and brand authority to help search platforms understand your business and connect your pages with relevant searches.",
    badgeText: "Organic & AI Discovery",
    actionHref: "/seo-services",
    actionText: "Explore Search Visibility Services",
    deliverables: [
      {
        name: "Technical SEO & Site Architecture",
        desc: "Improve crawlability, indexation, internal linking, site structure, and technical search foundations.",
      },
      {
        name: "Keyword Research & Content Strategy",
        desc: "Identify relevant search demand, customer questions, and opportunities for useful content.",
      },
      {
        name: "On-Page SEO & Content Optimization",
        desc: "Improve page structure, metadata, search intent alignment, and content clarity.",
      },
      {
        name: "AI Search Visibility (AEO & GEO)",
        desc: "Strengthen entity clarity, structured information, and content accessibility for AI-powered discovery.",
      },
      {
        name: "Authority & Performance Monitoring",
        desc: "Monitor search performance and develop sustainable opportunities to strengthen topical and brand authority.",
      },
    ],
  },
  {
    id: "content-social-media",
    number: "03",
    title: "Content & Social Media Marketing",
    tagline:
      "Create useful content and meaningful brand touchpoints that build awareness, trust, and engagement.",
    description:
      "Your audience needs more than occasional posts. We connect content planning, brand communication, and social media activity to help your business communicate consistently, answer customer questions, and stay relevant across digital channels.",
    badgeText: "Content & Engagement",
    actionHref: "/content-marketing",
    actionText: "Explore Content Marketing",
    deliverables: [
      {
        name: "Content Strategy & Editorial Planning",
        desc: "Plan content themes, formats, publishing priorities, and topics around audience needs.",
      },
      {
        name: "Social Media Strategy & Management",
        desc: "Develop channel-specific plans for consistent communication and audience engagement.",
      },
      {
        name: "Content Development & Distribution",
        desc: "Create and organize articles, guides, social content, and other useful marketing assets.",
      },
      {
        name: "Brand Communication & Engagement",
        desc: "Build a consistent brand voice and improve how your business communicates with its audience.",
      },
    ],
  },
  {
    id: "paid-advertising",
    number: "04",
    title: "Paid Advertising & Customer Acquisition",
    tagline:
      "Put your offers in front of relevant audiences through purposeful, measurable campaigns.",
    description:
      "Paid campaigns can accelerate discovery when they are built around the right audience, offer, and conversion path. We connect campaign planning, advertising creative, landing pages, and performance measurement to make your advertising spend more accountable.",
    badgeText: "Paid Campaigns",
    actionHref: "/paid-advertising",
    actionText: "Explore Paid Advertising",
    deliverables: [
      {
        name: "Google Ads Campaigns",
        desc: "Plan and manage search-focused campaigns around relevant customer intent and business objectives.",
      },
      {
        name: "Meta Ads Campaigns",
        desc: "Develop Facebook and Instagram campaigns for audience discovery, engagement, and acquisition.",
      },
      {
        name: "Landing Pages & Conversion Paths",
        desc: "Align advertising messages with relevant landing pages and clear customer actions.",
      },
      {
        name: "Campaign Optimization & Reporting",
        desc: "Review campaign performance, audience response, and conversion data to guide improvements.",
      },
    ],
  },
  {
    id: "email-ecommerce-growth",
    number: "05",
    title: "Email, E-commerce & Customer Growth",
    tagline:
      "Build stronger customer relationships and create more value beyond the first interaction.",
    description:
      "Sustainable growth is not only about finding new customers. We help businesses improve customer communication, support the e-commerce journey, and use performance insights to identify opportunities for repeat engagement and long-term growth.",
    badgeText: "Retention & Growth",
    actionHref: "/contact",
    actionText: "Discuss Customer Growth",
    deliverables: [
      {
        name: "Email Marketing & Campaigns",
        desc: "Plan relevant email communication, promotional campaigns, and customer updates.",
      },
      {
        name: "Email Automation & Customer Journeys",
        desc: "Structure useful follow-up sequences and lifecycle communication around customer actions.",
      },
      {
        name: "E-commerce Marketing & Optimization",
        desc: "Improve product discovery, shopping journeys, promotional activity, and store performance.",
      },
      {
        name: "Customer Retention & Loyalty",
        desc: "Identify opportunities to encourage repeat purchases, strengthen relationships, and improve customer value.",
      },
      {
        name: "Analytics & Performance Insights",
        desc: "Use meaningful performance data to understand results and guide ongoing marketing decisions.",
      },
    ],
  },
];

/* ─── Supporting Technical & Creative Capabilities ──────────────────────── */

const supportingCapabilities = [
  {
    id: "web-development",
    number: "06",
    title: "Web Development & Technical Optimization",
    badgeText: "Technical Foundation",
    tagline:
      "Fast, reliable websites engineered to support marketing, search visibility, and conversions.",
    description:
      "Your website is where many digital marketing journeys lead. We build and improve modern web experiences with a strong focus on performance, technical quality, accessibility, and usability. Our engineering approach targets excellent Core Web Vitals and sub-second loading where project conditions allow.",
    actionHref: "/web-development",
    actionText: "Explore Web Development",
    deliverables: [
      "Custom Next.js & modern React web platforms",
      "Sub-second performance targets & Core Web Vitals optimization",
      "WordPress development with carefully selected plugins",
      "Semantic HTML, structured architecture & technical SEO foundations",
      "Responsive, mobile-first user experiences",
    ],
  },
  {
    id: "visual-communication",
    number: "07",
    title: "Graphic Design & Visual Communication",
    badgeText: "Creative Support",
    tagline:
      "Consistent visual communication that strengthens brand recognition and marketing messages.",
    description:
      "Visual design plays an important role in how customers recognize and understand a business. We create purposeful visual assets that support brand identity, communicate offers clearly, and maintain consistency across digital and marketing touchpoints.",
    actionHref: "/contact",
    actionText: "Discuss Creative Projects",
    deliverables: [
      "Brand identity systems and visual guidelines",
      "Marketing collateral & sales enablement graphics",
      "Digital advertising creative & social media assets",
      "Infographics, diagrams & process visualizations",
      "Landing page layouts and visual hierarchy",
    ],
  },
];

/* ─── Delivery Principles ───────────────────────────────────────────────── */

const deliveryPrinciples = [
  {
    number: "01",
    title: "Honest Expectations",
    description:
      "We do not promise guaranteed rankings, instant results, or outcomes outside our control. We focus on sound execution, clear objectives, and continuous improvement.",
  },
  {
    number: "02",
    title: "Business Goals First",
    description:
      "Marketing activity should serve a business purpose. We prioritize relevant audiences, meaningful conversions, and commercial progress over vanity metrics.",
  },
  {
    number: "03",
    title: "Transparent Collaboration",
    description:
      "Every engagement should have a clear scope, defined priorities, and understandable reporting. You stay informed about the work and the decisions behind it.",
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
      serviceType: "Digital Marketing & Growth",
      provider: {
        "@id": "https://www.cinorium.com/#organization",
      },
      areaServed: ["Pakistan", "United States", "United Kingdom", "Worldwide"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Cinorium Digital Marketing & Growth Services",
        itemListElement: [
          "Marketing Strategy & Planning",
          "Search Visibility & SEO",
          "Content & Social Media Marketing",
          "Paid Advertising & Customer Acquisition",
          "Email, E-commerce & Customer Growth",
          "Web Development & Technical Optimization",
          "Graphic Design & Visual Communication",
        ].map((name) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name,
          },
        })),
      },
    },
  ],
};

export default function ServicesPage() {
  return (
    <div className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* ── 1. Hero ─────────────────────────────────────────────────────── */}

      <section
        id="services-hero"
        className="w-full bg-[#fdfbf7] pt-28 sm:pt-36 pb-16 sm:pb-20 px-5 sm:px-10 md:px-16 lg:px-24 border-b border-black/10"
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-4">
            <Badge variant="default" dot="amber" size="lg">
              Digital Marketing Agency · Services
            </Badge>
          </div>

          <h1 className="mb-6 font-heading text-3xl font-bold tracking-tight leading-[1.1] text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl">
            Digital Marketing Systems Built for Visibility and Growth.
          </h1>

          <p className="max-w-3xl text-base leading-relaxed text-gray-700 sm:text-lg mb-8">
            Cinorium brings strategy, search visibility, content, advertising,
            and customer growth together to help businesses attract relevant
            audiences and build stronger digital foundations. Our supporting web
            development and visual capabilities help connect marketing strategy
            with the experience customers actually encounter.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Discuss Your Project
              </Button>
            </Link>

            <Link href="#primary-services" className="w-full sm:w-auto">
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

      {/* ── 2. Integrated Growth Approach ───────────────────────────────── */}

      <section className="w-full bg-white border-b border-black/10 py-16 sm:py-20 px-5 sm:px-10 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
          <div>
            <Badge variant="secondary" size="sm" className="mb-3">
              An Integrated Approach
            </Badge>

            <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight leading-tight text-gray-900 sm:text-4xl">
              Marketing Works Better When Every Part Works Together.
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              A campaign cannot do its best work when the website is difficult
              to use. Content needs a clear strategy, advertising needs relevant
              landing pages, and traffic needs a meaningful next step. We look
              at the complete customer journey rather than treating every
              marketing activity as an isolated task.
            </p>
          </div>

          <div className="space-y-5">
            {[
              {
                title: "Understand the Business",
                description:
                  "Start with your goals, customers, offer, and market context.",
              },
              {
                title: "Connect the Right Channels",
                description:
                  "Align search, content, social media, advertising, and customer communication.",
              },
              {
                title: "Improve What Matters",
                description:
                  "Measure meaningful activity and refine the experience over time.",
              },
            ].map((item, index) => (
              <div key={item.title} className="flex items-start gap-4">
                <span className="font-modak text-2xl sm:text-3xl leading-none text-[#ffb703] shrink-0" aria-hidden="true">
                  0{index + 1}
                </span>

                <div className="min-w-0">
                  <h3 className="font-heading text-base font-bold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Core Marketing Services ──────────────────────────────────── */}

      <section
        id="primary-services"
        className="w-full bg-[#faf8f5] border-b border-black/10 py-16 sm:py-20 lg:py-28 px-5 sm:px-10 md:px-16 lg:px-24"
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 sm:mb-14">
            <Badge
              variant="default"
              dot="amber"
              size="default"
              className="mb-3"
            >
              Strategy · Execution · Growth
            </Badge>

            <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight leading-tight text-gray-900 sm:text-4xl md:text-5xl">
              Core Digital Marketing Services
            </h2>

            <p className="max-w-3xl text-base sm:text-lg leading-relaxed text-gray-600 font-light">
              From building a marketing strategy to attracting customers and
              strengthening long-term relationships, our services address
              different stages of your business growth. Work can be scoped
              individually or combined into a connected marketing engagement.
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:gap-10 md:gap-12">
            {primaryServices.map((service) => (
              <article
                key={service.id}
                id={service.id}
                aria-labelledby={`service-${service.id}-title`}
                className="group relative flex flex-col rounded-3xl border-2 border-black bg-white p-5 sm:p-8 md:p-10 lg:p-12 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Number + Heading */}

                <div className="flex items-start gap-4 sm:gap-6 pb-6 border-b border-gray-100 mb-6 sm:mb-8">
                  <span className="font-modak text-4xl sm:text-5xl md:text-6xl leading-none text-[#ffb703] shrink-0 pt-1" aria-hidden="true">
                    {service.number}
                  </span>

                  <div className="min-w-0 flex-1">
                    <Badge variant="secondary" size="sm" className="mb-2">
                      {service.badgeText}
                    </Badge>

                    <h3
                      id={`service-${service.id}-title`}
                      className="font-heading text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-gray-900 leading-tight break-words"
                    >
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}

                <div className="mb-6 sm:mb-8 max-w-3xl">
                  <p className="text-base sm:text-lg font-medium text-gray-900 mb-3">
                    {service.tagline}
                  </p>

                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                {/* Deliverables */}

                <div className="mb-6 sm:mb-8 rounded-2xl border border-gray-200 bg-[#fdfbf7] p-4 sm:p-6 md:p-8">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-800 mb-4 sm:mb-5">
                    Core Capabilities
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    {service.deliverables.map((item, index) => (
                      <div
                        key={item.name}
                        id={item.name.includes("AI Search") ? "ai-search" : undefined}
                        className="flex items-start gap-3 bg-white p-3 sm:p-4 rounded-xl border border-gray-200/80 shadow-2xs min-w-0 scroll-mt-28"
                      >
                        <span className="font-modak text-lg text-[#ffb703] leading-none shrink-0 pt-0.5" aria-hidden="true">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <div className="min-w-0">
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

                {/* Action */}

                <div className="pt-1">
                  <Link
                    href={service.actionHref}
                    className="inline-block w-full sm:w-auto"
                  >
                    <Button
                      variant="default"
                      size="default"
                      className="w-full sm:w-auto"
                    >
                      {service.actionText}
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Supporting Capabilities ──────────────────────────────────── */}

      <section
        id="supporting-capabilities"
        className="w-full bg-white border-b border-black/10 py-16 sm:py-20 lg:py-28 px-5 sm:px-10 md:px-16 lg:px-24"
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 sm:mb-14">
            <Badge variant="secondary" size="default" className="mb-3">
              Technical & Creative Foundations
            </Badge>

            <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight leading-tight text-gray-900 sm:text-4xl md:text-5xl">
              Supporting Capabilities
            </h2>

            <p className="max-w-3xl text-base sm:text-lg leading-relaxed text-gray-600 font-light">
              Strong marketing also depends on the experience behind it. Our
              technical and creative capabilities support the websites,
              campaigns, and brand touchpoints that bring your marketing
              strategy to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 items-stretch">
            {supportingCapabilities.map((capability) => (
              <Card
                key={capability.id}
                id={capability.id}
                variant="tactile"
                className="p-5 sm:p-8 flex flex-col h-full min-w-0"
              >
                <CardHeader className="p-0 mb-6">
                  <div className="flex items-start gap-4 sm:gap-6 pb-6 border-b border-gray-100">
                    <span className="font-modak text-4xl sm:text-5xl md:text-6xl leading-none text-[#ffb703] shrink-0 pt-1" aria-hidden="true">
                      {capability.number}
                    </span>

                    <div className="min-w-0 flex-1">
                      <Badge variant="secondary" size="sm" className="mb-2">
                        {capability.badgeText}
                      </Badge>

                      <CardTitle className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight break-words">
                        {capability.title}
                      </CardTitle>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base font-medium text-gray-900 mt-5 mb-2">
                    {capability.tagline}
                  </p>

                  <CardDescription className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                    {capability.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-0 mb-6 flex-grow">
                  <div className="rounded-xl border border-gray-200 bg-[#fdfbf7] p-4 sm:p-5 h-full">
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-800 block mb-3">
                      Key Capabilities
                    </span>

                    <ul className="space-y-3">
                      {capability.deliverables.map((del, index) => (
                        <li
                          key={del}
                          className="flex items-start gap-3 text-xs sm:text-sm text-gray-600 leading-relaxed min-w-0"
                        >
                          <span className="font-modak text-base text-[#ffb703] leading-none shrink-0 pt-0.5" aria-hidden="true">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="min-w-0">{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="p-0 border-t border-[#0b131e]/5 pt-5 sm:pt-6 mt-auto">
                  <Link href={capability.actionHref} className="w-full">
                    <Button
                      variant="slateOutline"
                      size="default"
                      className="w-full"
                    >
                      {capability.actionText}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. How We Work ───────────────────────────────────────────────── */}

      <section className="w-full bg-[#faf8f5] border-b border-black/10 py-16 sm:py-20 px-5 sm:px-10 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl mb-10 sm:mb-12">
            <Badge variant="secondary" size="sm" className="mb-3">
              How We Work
            </Badge>

            <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight leading-tight text-gray-900 sm:text-4xl">
              Clear Priorities. Honest Work. Measurable Progress.
            </h2>

            <p className="text-base text-gray-600 leading-relaxed font-light">
              Good marketing requires more than activity. We believe in
              understanding the problem, choosing the right work, and being
              transparent about what is being done and what the results show.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {deliveryPrinciples.map((item) => (
              <div
                key={item.title}
                className="flex flex-col rounded-2xl border-2 border-black bg-white p-5 sm:p-6 shadow-xs min-w-0"
              >
                <span className="font-modak text-4xl sm:text-5xl leading-none text-[#ffb703] mb-5" aria-hidden="true">
                  {item.number}
                </span>

                <h3 className="font-heading text-lg font-bold tracking-tight text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Relevant Journal Resource ────────────────────────────────── */}

      <section className="w-full bg-[#fdfbf7] border-b border-black/10 py-12 sm:py-16 px-5 sm:px-10 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto rounded-3xl border-2 border-black bg-white p-5 sm:p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
          <div className="max-w-2xl min-w-0 w-full">
            <div className="mb-3">
              <Badge
                variant="amber"
                size="sm"
                className="max-w-full whitespace-nowrap text-[10px] sm:text-xs"
              >
                From Our Journal
              </Badge>
            </div>

            <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-gray-900 mb-3 leading-tight break-words">
              How Website Development Improves Search Visibility
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed font-light">
              Explore how site speed, semantic structure, and technical
              foundations influence the way websites are discovered, understood,
              and experienced.
            </p>
          </div>

          <Link
            href="/journal/website-development-search-visibility-conversions"
            className="w-full md:w-auto shrink-0"
          >
            <Button
              variant="default"
              size="default"
              className="w-full md:w-auto"
            >
              Read the Article
            </Button>
          </Link>
        </div>
      </section>

      {/* ── 7. Final CTA ─────────────────────────────────────────────────── */}

      <FinalCta />
    </div>
  );
}
