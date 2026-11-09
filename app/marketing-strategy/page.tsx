import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  Target,
  BarChart3,
  Layers,
  Search,
  Users,
  AlertTriangle,
  TrendingDown,
  Split,
  CheckCircle2,
  HelpCircle,
  FileText,
  PieChart,
  CalendarDays,
  ShieldCheck,
  Globe,
  Share2,
  Megaphone,
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
import StrategyFaq from "./StrategyFaq";
import { strategyFaqs } from "./strategy-faq-data";

export const metadata: Metadata = {
  title: "Digital Marketing Strategy & Planning Services | Cinorium",
  description:
    "Understand your market, identify the right opportunities, and bring your marketing activities together through a practical strategy built around your business goals.",
  alternates: {
    canonical: "/marketing-strategy",
  },
  openGraph: {
    title: "Digital Marketing Strategy & Planning Services | Cinorium",
    description:
      "Understand your market, identify the right opportunities, and bring your marketing activities together through a practical strategy built around your business goals.",
    url: "https://www.cinorium.com/marketing-strategy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Strategy & Planning Services | Cinorium",
    description:
      "Understand your market, identify the right opportunities, and bring your marketing activities together through a practical strategy built around your business goals.",
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
          name: "Marketing Strategy & Planning",
          item: "https://www.cinorium.com/marketing-strategy",
        },
      ],
    },
    {
      "@type": "Service",
      name: "Digital Marketing Strategy & Planning Services",
      serviceType: "Digital Marketing Strategy and Growth Planning",
      provider: {
        "@id": "https://www.cinorium.com/#organization",
      },
      url: "https://www.cinorium.com/marketing-strategy",
      description:
        "Practical digital marketing strategy, competitive research, customer journey planning, and channel prioritization built around your business goals.",
      areaServed: ["Pakistan", "United States", "United Kingdom", "Worldwide"],
    },
    {
      "@type": "FAQPage",
      mainEntity: strategyFaqs.map((faq) => ({
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

const challenges = [
  {
    icon: Split,
    title: "Siloed Channel Activities",
    description:
      "When SEO, paid ads, content, and social media run independently without a shared direction, messages clash and customer journeys become fragmented.",
  },
  {
    icon: AlertTriangle,
    title: "Unclear Channel Prioritization",
    description:
      "Spreading time and budget thinly across every available platform often dilutes results instead of focusing resources where your best customers actually make decisions.",
  },
  {
    icon: TrendingDown,
    title: "Activity Mistaken for Progress",
    description:
      "Publishing posts and generating traffic metrics without connecting them to qualified inquiries, customer retention, or revenue creates an illusion of momentum.",
  },
];

const strategyPhases = [
  {
    phase: "01",
    title: "Market & Customer Understanding",
    tagline: "Grounding decisions in reality before spending marketing budget.",
    points: [
      "Clarifying core commercial objectives and revenue priorities",
      "In-depth target audience research and customer segmentation",
      "Mapping customer needs, evaluation criteria, and buying behaviour",
      "Competitor landscape, messaging differentiation, and market gaps",
    ],
  },
  {
    phase: "02",
    title: "Positioning & Opportunity Identification",
    tagline: "Articulating why customers should choose your offering.",
    points: [
      "Defining clear, credible value propositions and brand strengths",
      "Establishing sustainable commercial positioning within your category",
      "Identifying unserved audience segments and high-value opportunities",
      "Prioritizing growth angles by commercial impact and operational feasibility",
    ],
  },
  {
    phase: "03",
    title: "Marketing Channel & Customer Journey Planning",
    tagline: "Connecting channels into a cohesive, full-funnel customer path.",
    points: [
      "Organic search visibility, technical SEO, and AI answer discovery",
      "Content strategy, editorial themes, and social distribution",
      "Paid advertising acquisition funnels and messaging alignment",
      "Email marketing workflows, retention touchpoints, and e-commerce growth",
    ],
  },
  {
    phase: "04",
    title: "Measurement & Performance Planning",
    tagline: "Setting meaningful metrics and a realistic review cadence.",
    points: [
      "Defining relevant leading and lagging business KPIs",
      "Channel performance measurement and conversion tracking structure",
      "Pragmatic budget planning and resource allocation recommendations",
      "Regular reporting, review milestones, and continuous improvement priorities",
    ],
  },
];

const deliverables = [
  {
    icon: Search,
    title: "Market & Competitive Research",
    description:
      "Evaluation of category dynamics, competitor positioning, and available search demand proportionate to your project requirements.",
    deliverableItems: [
      "Competitor channel and positioning audit",
      "Category messaging and commercial context",
      "Audience demand and search landscape analysis",
    ],
  },
  {
    icon: Users,
    title: "Audience & Customer Journey Research",
    description:
      "Structured mapping of how your ideal buyers recognize a need, evaluate alternatives, and decide to engage with your business.",
    deliverableItems: [
      "Customer segment profiles and decision triggers",
      "Touchpoint mapping from discovery to purchase",
      "Key customer objections and information requirements",
    ],
  },
  {
    icon: Target,
    title: "Channel Selection & Prioritization",
    description:
      "Objective evaluation of marketing channels to concentrate investment where your potential customers are genuinely reachable.",
    deliverableItems: [
      "Channel viability and suitability assessment",
      "Primary acquisition vs. retention channel matrix",
      "Specific rationale for excluded or deprioritized channels",
    ],
  },
  {
    icon: PieChart,
    title: "Budget Planning & Allocation Recommendations",
    description:
      "Practical guidance on distributing budget between initial testing, proven channels, and brand foundations according to agreed scope.",
    deliverableItems: [
      "Phased budget allocation recommendations",
      "Testing considerations and channel suitability",
      "Guidelines for evaluating spend as performance data matures",
    ],
  },
  {
    icon: CalendarDays,
    title: "Integrated Marketing Planning",
    description:
      "Bringing campaign themes, content calendars, channel initiatives, and promotional timing into a synchronized plan.",
    deliverableItems: [
      "Cohesive campaign themes and core messaging",
      "Cross-channel editorial and promotional scheduling",
      "Coordination across organic, paid, and owned touchpoints",
    ],
  },
  {
    icon: BarChart3,
    title: "Performance Measurement Framework",
    description:
      "Clear definitions of meaningful success metrics and review checkpoints to maintain focus on commercial progress.",
    deliverableItems: [
      "Defined business and channel-specific KPIs",
      "Recommended tracking requirements based on available data",
      "Structured review milestones and adjustment criteria",
    ],
  },
  {
    icon: FileText,
    title: "Actionable Marketing Roadmaps",
    description:
      "A sequenced implementation plan that organizes tasks into manageable phases with clear dependencies and resource guidelines.",
    deliverableItems: [
      "Phased implementation roadmap (typically 60–90 days)",
      "Task prioritization aligned with team capacity and resources",
      "Clear guidelines for internal teams or agency partners",
    ],
  },
];

const integratedChannels = [
  {
    icon: Search,
    name: "Search Visibility & SEO",
    href: "/seo-services",
    role: "Informs Organic Intent & Discovery",
    description:
      "Strategy identifies high-value commercial search intent, content authority topics, and site architecture priorities so organic search drives qualified inquiries rather than empty traffic.",
  },
  {
    icon: Share2,
    name: "Content & Social Media",
    href: "/content-marketing",
    role: "Builds Topical Authority & Trust",
    description:
      "Strategy defines the core themes, customer questions, and distribution formats that educate potential clients and establish credible brand authority across social platforms.",
  },
  {
    icon: Megaphone,
    name: "Paid Advertising & Acquisition",
    href: "/paid-advertising",
    role: "Validates Angles & Drives Intent",
    description:
      "Strategy establishes target audience criteria, messaging angles, and funnel pathways, ensuring advertising budget is spent on high-intent prospects with clear commercial follow-through.",
  },
  {
    icon: ShoppingBag,
    name: "Email & E-commerce Growth",
    href: "/services#email-ecommerce-growth",
    role: "Nurtures Pipeline & Retention",
    description:
      "Strategy maps customer lifecycle touchpoints, post-purchase communication, and segmented email workflows to increase repeat engagement and long-term customer value.",
  },
  {
    icon: Code2,
    name: "Web Development & Foundations",
    href: "/web-development",
    role: "Engineers Speed & Conversion",
    description:
      "Strategy guides website architecture, page layout, mobile speed, and conversion journeys—ensuring your web infrastructure effectively captures and converts marketing traffic.",
  },
];

export default function MarketingStrategyPage() {
  return (
    <div className="w-full">
      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── 1. Hero Section ───────────────────────────────────────────────── */}
      <section
        id="strategy-hero"
        aria-label="Digital Marketing Strategy & Planning Hero"
        className={`w-full bg-[#fdfbf7] border-b border-black/10 ${px} pt-28 pb-14 sm:pt-32 sm:pb-16 md:pb-20 lg:pt-36`}
      >
        <div className={inner}>
          <div className="flex flex-col items-start max-w-3xl">
            <Badge variant="amber" size="sm" className="mb-4">
              Digital Marketing Strategy & Planning
            </Badge>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-gray-900 tracking-tight leading-[1.15] mb-4">
              Digital Marketing Strategy That Gives Your Growth a Clear Direction.
            </h1>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light mb-8 max-w-2xl">
              Understand your market, identify the right opportunities, and bring
              your marketing activities together through a practical strategy built
              around your business goals.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  variant="accent"
                  size="lg"
                  className="w-full sm:w-auto font-semibold gap-2 shadow-sm"
                >
                  <span>Discuss Your Marketing Strategy</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>

              <Link href="#framework" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-black/20 text-gray-900 hover:bg-black/5"
                >
                  Explore Our Framework
                </Button>
              </Link>
            </div>

            {/* Practical commitments banner */}
            <div className="mt-10 pt-6 border-t border-black/10 w-full grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 font-light">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ffb703] shrink-0" />
                <span>Evidence-based market research</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ffb703] shrink-0" />
                <span>Objective channel prioritization</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ffb703] shrink-0" />
                <span>Tailored implementation roadmaps</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. The Core Challenge (Context & Reality) ──────────────────────── */}
      <section
        id="challenges"
        aria-labelledby="challenges-heading"
        className={`w-full bg-white border-b border-black/10 ${px} py-14 sm:py-16 md:py-20`}
      >
        <div className={inner}>
          <div className="max-w-2xl mb-8 sm:mb-10">
            <Badge variant="secondary" size="sm" className="mb-3">
              Market Reality
            </Badge>
            <h2
              id="challenges-heading"
              className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-3"
            >
              Why Marketing Often Falls Short of Expectations
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
              When tactics are chosen before strategy is established, marketing
              budgets get dispersed across too many channels without clear customer
              connection or commercial accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {challenges.map((challenge) => {
              const Icon = challenge.icon;
              return (
                <Card
                  key={challenge.title}
                  className="flex flex-col h-full bg-[#fdfbf7] border border-black/10 rounded-2xl p-5 sm:p-6 transition-all duration-200 hover:border-black/25"
                >
                  <CardHeader className="p-0 mb-4">
                    <div className="h-10 w-10 rounded-xl bg-white border border-black/10 flex items-center justify-center text-gray-900 mb-3.5 shadow-2xs">
                      <Icon className="h-5 w-5 text-[#0b131e]" />
                    </div>
                    <CardTitle className="font-heading text-lg font-bold text-gray-900">
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

      {/* ── 3. Four-Phase Strategy Framework ───────────────────────────────── */}
      <section
        id="framework"
        aria-labelledby="framework-heading"
        className={`w-full bg-[#faf8f5] border-b border-black/10 ${px} py-14 sm:py-16 md:py-20`}
      >
        <div className={inner}>
          <div className="max-w-2xl mb-8 sm:mb-10">
            <Badge variant="amber" size="sm" className="mb-3">
              Our Methodology
            </Badge>
            <h2
              id="framework-heading"
              className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-3"
            >
              A Practical, Four-Phase Strategy Framework
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
              We follow a structured progression designed to understand your business,
              clarify positioning, select appropriate channels, and establish realistic
              measurement standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {strategyPhases.map((phase) => (
              <Card
                key={phase.phase}
                className="flex flex-col h-full bg-white border border-black/10 rounded-2xl p-5 sm:p-6 relative overflow-hidden transition-all duration-200 hover:border-black/25"
              >
                {/* Decorative milestone number */}
                <div
                  aria-hidden="true"
                  className="absolute top-3 right-4 font-modak text-5xl sm:text-6xl text-[#475569]/15 select-none pointer-events-none"
                >
                  {phase.phase}
                </div>

                <CardHeader className="p-0 mb-3 relative z-10">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1 block">
                    Phase {phase.phase}
                  </span>
                  <CardTitle className="font-heading text-xl font-bold text-gray-900 pr-12">
                    {phase.title}
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm text-gray-600 font-light mt-1">
                    {phase.tagline}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-0 flex-grow relative z-10 mt-3 pt-3 border-t border-black/5">
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-700 font-light">
                    {phase.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-[#ffb703] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-white border border-black/10 flex items-start gap-3.5 text-xs sm:text-sm text-gray-600 font-light">
            <ShieldCheck className="h-5 w-5 text-[#0b131e] shrink-0 mt-0.5" />
            <p>
              <strong className="font-semibold text-gray-900">
                Scope calibrated to business reality:
              </strong>{" "}
              We do not impose complex financial modeling or arbitrary metrics on
              businesses where baseline customer data is still forming. Strategy is
              tailored to what is realistically useful and executable for your team.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. Capabilities & Deliverables ─────────────────────────────────── */}
      <section
        id="deliverables"
        aria-labelledby="deliverables-heading"
        className={`w-full bg-white border-b border-black/10 ${px} py-14 sm:py-16 md:py-20`}
      >
        <div className={inner}>
          <div className="max-w-2xl mb-8 sm:mb-10">
            <Badge variant="secondary" size="sm" className="mb-3">
              Capabilities & Deliverables
            </Badge>
            <h2
              id="deliverables-heading"
              className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-3"
            >
              Practical Assets Produced During Strategy
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
              Deliverables are selected and shaped around your business objectives,
              market maturity, and data availability—ensuring recommendations are
              practical and directly actionable for your team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {deliverables.map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="flex flex-col h-full bg-[#fdfbf7] border border-black/10 rounded-2xl p-5 sm:p-6 transition-all duration-200 hover:border-black/25"
                >
                  <CardHeader className="p-0 mb-3.5">
                    <div className="h-9 w-9 rounded-lg bg-white border border-black/10 flex items-center justify-center text-gray-900 mb-3 shadow-2xs">
                      <Icon className="h-4 w-4 text-[#0b131e]" />
                    </div>
                    <CardTitle className="font-heading text-lg font-bold text-gray-900 leading-snug">
                      {item.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="p-0 flex-grow mb-4">
                    <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <ul className="space-y-1.5 text-xs text-gray-600 font-light pt-2 border-t border-black/5">
                      {item.deliverableItems.map((detail) => (
                        <li key={detail} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#ffb703] shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="p-0 mt-auto pt-3 border-t border-black/5">
                    <span className="text-xs font-medium text-gray-500">
                      Scoped to Business Needs
                    </span>
                  </CardFooter>
                </Card>
              );
            })}
          </div>

          <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-[#faf8f5] border border-black/10 flex items-start gap-3.5 text-xs sm:text-sm text-gray-600 font-light">
            <ShieldCheck className="h-5 w-5 text-[#0b131e] shrink-0 mt-0.5" />
            <p>
              <strong className="font-semibold text-gray-900">
                Tailored engagement scope:
              </strong>{" "}
              Not every engagement requires every deliverable. Depth, duration, and
              specific assets are aligned with your business requirements, available data,
              and team capacity to focus effort where it creates the greatest impact.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. Cross-Service Ecosystem Integration ─────────────────────────── */}
      <section
        id="integrated-ecosystem"
        aria-labelledby="ecosystem-heading"
        className={`w-full bg-[#faf8f5] border-b border-black/10 ${px} py-14 sm:py-16 md:py-20`}
      >
        <div className={inner}>
          <div className="max-w-2xl mb-8 sm:mb-10">
            <Badge variant="amber" size="sm" className="mb-3">
              The Complete Picture
            </Badge>
            <h2
              id="ecosystem-heading"
              className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-3"
            >
              How Strategy Directs Every Marketing Channel
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
              Execution channels produce better results when guided by a unified
              commercial strategy. Here is how strategy coordinates the complete
              Cinorium service ecosystem:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {integratedChannels.map((channel) => {
              const Icon = channel.icon;
              return (
                <div
                  key={channel.name}
                  className="flex flex-col h-full bg-white border border-black/10 rounded-2xl p-5 sm:p-6 transition-all duration-200 hover:border-black/25"
                >
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="h-9 w-9 rounded-lg bg-[#faf8f5] border border-black/10 flex items-center justify-center text-gray-900 shadow-2xs">
                      <Icon className="h-4 w-4 text-[#0b131e]" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                      {channel.role}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">
                    {channel.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed flex-grow mb-4">
                    {channel.description}
                  </p>

                  <div className="mt-auto pt-3 border-t border-black/5">
                    <Link
                      href={channel.href}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-900 hover:text-[#ffb703] transition-colors"
                    >
                      <span>Explore this capability</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 6. Fit & Qualification Matrix ──────────────────────────────────── */}
      <section
        id="qualification"
        aria-labelledby="qualification-heading"
        className={`w-full bg-white border-b border-black/10 ${px} py-14 sm:py-16 md:py-20`}
      >
        <div className={inner}>
          <div className="max-w-2xl mb-8 sm:mb-10">
            <Badge variant="secondary" size="sm" className="mb-3">
              Project Fit
            </Badge>
            <h2
              id="qualification-heading"
              className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-3"
            >
              Is Strategic Planning the Right Investment Today?
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
              We believe in transparent alignment. Strategy delivers strong results
              when there is clear readiness to collaborate and act on findings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* When it works best */}
            <div className="flex flex-col h-full bg-[#fdfbf7] border border-black/10 rounded-2xl p-5 sm:p-6">
              <div className="flex items-center gap-2.5 mb-3.5">
                <div className="h-8 w-8 rounded-lg bg-white border border-black/10 shadow-2xs flex items-center justify-center">
                  <CheckCircle2 className="h-4 w-4 text-[#ffb703]" />
                </div>
                <h3 className="font-heading text-lg font-bold text-gray-900">
                  Where Strategy Delivers Strongest Value
                </h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-gray-700 font-light flex-grow">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#ffb703] shrink-0 mt-0.5" />
                  <span>
                    Businesses seeking to transition from random marketing tactics
                    into a cohesive, goal-oriented plan.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#ffb703] shrink-0 mt-0.5" />
                  <span>
                    Companies introducing a new product or service and needing clear
                    channel prioritization.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#ffb703] shrink-0 mt-0.5" />
                  <span>
                    Brands currently spending on advertising or content but seeing
                    diminishing customer acquisition returns.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#ffb703] shrink-0 mt-0.5" />
                  <span>
                    Leadership teams requiring an objective, outside assessment of
                    commercial positioning and competitor movements.
                  </span>
                </li>
              </ul>
            </div>

            {/* When another path may be better */}
            <div className="flex flex-col h-full bg-[#fdfbf7] border border-black/10 rounded-2xl p-5 sm:p-6">
              <div className="flex items-center gap-2.5 mb-3.5">
                <div className="h-8 w-8 rounded-lg bg-[#faf8f5] border border-black/10 shadow-2xs flex items-center justify-center">
                  <HelpCircle className="h-4 w-4 text-[#0b131e]" />
                </div>
                <h3 className="font-heading text-lg font-bold text-gray-900">
                  When Another Direction May Be Appropriate
                </h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-gray-700 font-light flex-grow">
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ffb703] shrink-0 mt-2" />
                  <span>
                    Organizations looking for overnight hacks, quick viral spikes, or
                    guaranteed revenue formulas.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ffb703] shrink-0 mt-2" />
                  <span>
                    Businesses needing urgent ad execution before basic product,
                    pricing, or market validation has taken place.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ffb703] shrink-0 mt-2" />
                  <span>
                    Teams currently unable to commit time for discovery interviews
                    or access to relevant historical data.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ffb703] shrink-0 mt-2" />
                  <span>
                    Projects where a single standalone deliverable (e.g., technical
                    audit) solves the immediate bottleneck.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. FAQ ────────────────────────────────────────────────────────── */}
      <section
        id="strategy-faqs"
        aria-labelledby="strategy-faq-heading"
        className={`w-full bg-[#faf8f5] border-b border-black/10 ${px} py-14 sm:py-16 md:py-20`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 sm:mb-10">
            <Badge variant="secondary" size="sm" className="mb-3">
              Common Questions
            </Badge>
            <h2
              id="strategy-faq-heading"
              className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-3"
            >
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed max-w-2xl">
              Practical answers regarding project scope, timelines, deliverables,
              and how strategy connects to execution.
            </p>
          </div>

          <StrategyFaq />
        </div>
      </section>

      {/* ── 8. Unified Bottom CTA ─────────────────────────────────────────── */}
      <FinalCta />
    </div>
  );
}
