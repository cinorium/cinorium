import Link from "next/link";
import { TrendingUp, Search, Sparkles, Code2, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    num: "01",
    tier: "Customer Acquisition",
    title: "Outcome-Driven Marketing Strategy",
    description:
      "Grounded customer acquisition campaigns focused on qualified pipeline and measurable commercial growth. We map audience intent, refine positioning, and architect high-converting visitor journeys.",
    icon: TrendingUp,
    href: "/services#strategy",
    cta: "Explore Marketing Strategy",
  },
  {
    num: "02",
    tier: "Organic Visibility",
    title: "Search Visibility & Technical SEO",
    description:
      "Comprehensive technical audits, semantic keyword architecture, and content authority engineered to capture high-intent buyers at the exact moment they search for your solutions.",
    icon: Search,
    href: "/seo-services",
    cta: "Explore SEO Architecture",
  },
  {
    num: "03",
    tier: "Generative Reach",
    title: "AI Search Visibility (AEO / GEO)",
    description:
      "Entity authority, knowledge graph modeling, and structured data optimization so conversational AI platforms—including ChatGPT, Perplexity, and Google AI Overviews—cite and recommend your business.",
    icon: Sparkles,
    href: "/services#ai-search",
    cta: "Explore AI Visibility",
  },
  {
    num: "04",
    tier: "Conversion Engine",
    title: "High-Performance Web Foundation",
    description:
      "Fast, custom Next.js platforms built as the conversion engine for your marketing campaigns. Rapid load times, rock-solid Core Web Vitals, and responsive UX that ensure marketing spend never goes to waste.",
    icon: Code2,
    href: "/web-development",
    cta: "Explore Web Engineering",
  },
];

export default function IntegratedApproach() {
  return (
    <section
      id="approach"
      className="w-full bg-[#fdfbf7] py-20 sm:py-24 px-6 sm:px-10 md:px-16 lg:px-24 border-t border-gray-200/80"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="mb-14 text-center md:text-left">
          <Badge variant="default" dot="amber" className="mb-3">
            Integrated Marketing Capabilities
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-[#0b131e] mb-4">
            Connecting Strategy, Search &amp; Conversion
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl font-light leading-relaxed">
            We don&apos;t separate marketing from technology. We build synchronized acquisition engines where organic search discoverability and rapid technical performance work together to turn clicks into qualified enquiries.
          </p>
        </div>

        {/* 2x2 Grid of Tactile Solution Cards with Baseline-Aligned Footers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.num} variant="tactile" className="p-7 sm:p-8 flex flex-col h-full">
                <CardHeader className="p-0 pb-4">
                  <div className="flex items-center justify-between min-h-[2.5rem]">
                    <span className="font-modak text-3xl sm:text-4xl text-slate-500">
                      {item.num}
                    </span>
                    <Badge variant="secondary">
                      {item.tier}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-3 mt-4 min-h-[3.5rem]">
                    <div className="p-2 rounded-xl bg-slate-100 text-[#0b131e] shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-xl sm:text-2xl text-[#0b131e]">
                      {item.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="p-0 flex-grow">
                  <CardDescription className="text-sm sm:text-base leading-relaxed text-gray-600 font-light mb-4">
                    {item.description}
                  </CardDescription>
                </CardContent>

                <CardFooter className="p-0 mt-auto pt-6 border-t border-[#0b131e]/5 flex items-center justify-between">
                  <Link href={item.href} className="w-full">
                    <Button
                      variant="slateOutline"
                      size="sm"
                      className="w-full justify-between"
                    >
                      <span>{item.cta}</span>
                      <ArrowRight className="w-4 h-4 text-[#0b131e]" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

