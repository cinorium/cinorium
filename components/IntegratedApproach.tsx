import Link from "next/link";
import { ArrowRight } from "lucide-react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const solutions = [
  {
    num: "01",
    tier: "Strategy & Planning",
    title: "Digital Marketing Strategy",
    description:
      "Build marketing around your business goals and audience. We help understand customer needs, identify opportunities, select suitable channels, and create a focused plan with clear priorities.",
    href: "/marketing-strategy",
    cta: "Explore Marketing Strategy",
  },
  {
    num: "02",
    tier: "Search & Discovery",
    title: "Search Visibility & Discovery",
    description:
      "Help the right people discover your business. We work on technical SEO, keyword research, on-page optimization, local search, and content visibility across traditional and AI-powered search experiences.",
    href: "/seo-services",
    cta: "Explore Search Visibility",
  },
  {
    num: "03",
    tier: "Content & Engagement",
    title: "Content & Audience Engagement",
    description:
      "Build meaningful connections through content marketing, social media, and email. We help businesses attract attention, establish trust, nurture leads, and maintain stronger customer relationships.",
    href: "/content-marketing",
    cta: "Explore Content & Engagement",
  },
  {
    num: "04",
    tier: "Commerce & Growth",
    title: "E-commerce & Growth Systems",
    description:
      "Improve how customers discover, evaluate, and purchase your products. We focus on e-commerce growth, conversion optimization, performance measurement, retention, and customer loyalty.",
    href: "",
    cta: "Explore E-commerce Growth",
  },
];

export default function IntegratedApproach() {
  return (
    <section
      id="approach"
      className="w-full border-t border-gray-200/80 bg-[#fdfbf7] px-6 py-20 sm:px-10 sm:py-24 md:px-16 lg:px-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-14 text-center md:text-left">
          <Badge variant="default" dot="amber" className="mb-3">
            Integrated Marketing Capabilities
          </Badge>

          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-[#0b131e] sm:text-4xl lg:text-5xl">
            One Connected Approach to Digital Growth
          </h2>

          <p className="max-w-2xl text-base font-light leading-relaxed text-gray-600 sm:text-lg">
            Effective digital growth requires different marketing activities to
            work together. We connect strategy, search visibility, content, and
            customer experience to help businesses attract the right audience,
            build trust, and create meaningful opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:gap-8">
          {solutions.map((item) => (
            <Card
              key={item.num}
              variant="tactile"
              className="grid h-full grid-rows-[auto_1fr] p-7 sm:p-8"
            >
              <CardHeader className="grid grid-rows-[auto_minmax(2rem,auto)] gap-y-2 p-0 pb-2">
                <div className="flex min-h-10 items-center justify-between gap-3">
                  <span
                    className="font-modak text-3xl leading-none text-slate-500 sm:text-4xl"
                    aria-hidden="true"
                  >
                    {item.num}
                  </span>

                  <Badge variant="secondary">{item.tier}</Badge>
                </div>

                <CardTitle className="flex items-center text-xl leading-tight text-[#0b131e] sm:text-2xl">
                  {item.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex flex-col p-0">
                <CardDescription className="mb-6 text-sm font-light leading-relaxed text-gray-600 sm:text-base">
                  {item.description}
                </CardDescription>

                <div className="mt-auto border-t border-[#0b131e]/10 pt-5">
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-[#0b131e] transition-colors hover:text-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb703] focus-visible:ring-offset-2"
                  >
                    <span>{item.cta}</span>
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-5 rounded-xl border-2 border-[#0b131e] bg-[#0b131e] p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#ffb703]">
              Supporting Technical Capability
            </p>

            <h3 className="mb-2 text-lg font-bold sm:text-xl">
              Website & Technical Optimization
            </h3>

            <p className="max-w-2xl text-sm font-light leading-relaxed text-white/75">
              A stronger technical foundation for your marketing efforts. From
              custom website development and WordPress to performance,
              usability, and technical improvements.
            </p>
          </div>

          <Link
            href="/web-development"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#ffb703] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b131e]"
          >
            Explore Website & Technical Optimization
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
