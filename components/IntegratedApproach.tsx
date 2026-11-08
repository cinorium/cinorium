import Link from "next/link";
import { TrendingUp, Search, Sparkles, Code2, ArrowRight } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    num: "01",
    tier: "Customer Acquisition",
    title: "Outcome-Driven Marketing Strategy",
    description:
      "We develop marketing strategies around your business goals and target audience. From understanding customer needs to selecting the right channels, we help create a clearer path towards attracting and acquiring customers.",
    icon: TrendingUp,
    href: "/services#strategy",
    cta: "Explore Marketing Strategy",
  },
  {
    num: "02",
    tier: "Organic Visibility",
    title: "Search Visibility & Technical SEO",
    description:
      "Help the right customers discover your business through search. We improve website structure, technical SEO, keyword targeting, and content to strengthen your organic visibility and reach people actively looking for your products or services.",
    icon: Search,
    href: "/seo-services",
    cta: "Explore SEO Architecture",
  },
  {
    num: "03",
    tier: "Generative Reach",
    title: "AI Search Visibility (AEO / GEO)",
    description:
      "Search is evolving beyond traditional search engines. We help businesses strengthen their digital presence for AI-powered search experiences through clear content, structured information, and better brand visibility across emerging answer platforms.",
    icon: Sparkles,
    href: "/services#ai-search",
    cta: "Explore AI Visibility",
  },
  {
    num: "04",
    tier: "Website Experience",
    title: "A Stronger Website Foundation",
    description:
      "Your website plays an important role in how customers discover, understand, and interact with your business. We improve website structure, usability, responsiveness, and technical performance to create a stronger foundation for your digital marketing efforts.",
    icon: Code2,
    href: "/web-development",
    cta: "Explore Website Solutions",
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
            Connecting Strategy, Search & Conversion
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl font-light leading-relaxed">
            Effective digital marketing brings strategy, visibility, and
            customer experience together. We combine the right channels and
            capabilities to help businesses reach relevant audiences, build
            trust, and turn opportunities into meaningful enquiries.
          </p>
        </div>

        {/* 2x2 Grid of Tactile Solution Cards with Baseline-Aligned Footers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.num}
                variant="tactile"
                className="p-7 sm:p-8 flex flex-col h-full"
              >
                <CardHeader className="p-0 pb-4">
                  <div className="flex items-center justify-between min-h-[2.5rem]">
                    <span className="font-modak text-3xl sm:text-4xl text-slate-500">
                      {item.num}
                    </span>
                    <Badge variant="secondary">{item.tier}</Badge>
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
