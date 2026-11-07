import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const challenges = [
  {
    step: "1",
    tag: "Search Discovery Friction",
    title: "Invisible to High-Intent Buyers",
    description:
      "When your business does not rank in organic search results or AI answer engines, prospective buyers actively seeking your exact services find and hire your competitors instead.",
    consequence: "Results in weak customer pipeline and heavy reliance on unpredictable referrals.",
  },
  {
    step: "2",
    tag: "Conversion Friction",
    title: "Sluggish & Low-Converting Experiences",
    description:
      "Bloated templates, slow mobile load times, and confusing navigation kill buyer interest in seconds. Visitors abandon clunky platforms long before they reach an enquiry form.",
    consequence: "Wastes marketing spend and deflates visitor-to-lead conversion rates.",
  },
  {
    step: "3",
    tag: "Acquisition Friction",
    title: "Marketing Without A Solid Foundation",
    description:
      "Driving traffic or publishing content on top of a fragile, unoptimized website is like pouring water into a leaking bucket. Sustainable marketing requires technology and strategy operating in tandem.",
    consequence: "Produces inflated acquisition costs and flatline commercial growth.",
  },
];

export default function BusinessChallenges() {
  return (
    <section
      id="challenges"
      className="w-full bg-[#faf8f5] py-20 sm:py-24 px-6 sm:px-10 md:px-16 lg:px-24 border-t border-gray-200/80"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-14 text-center md:text-left">
          <Badge variant="secondary" className="mb-3">
            Commercial Growth Roadblocks
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-[#0b131e] mb-4">
            Where Most Digital Strategies Break Down
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl font-light leading-relaxed">
            A website can look modern and still fail commercially. Without commanding search discoverability, rapid load times, and structured buyer journeys, digital investments underperform.
          </p>
        </div>

        {/* 3 Tactile Cards Grid with Strictly Baseline-Aligned Footers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {challenges.map((item) => (
            <Card key={item.step} variant="tactile" className="p-7">
              <CardHeader className="p-0 pb-4">
                <div className="flex items-center justify-between">
                  <span className="font-modak text-5xl sm:text-6xl text-[#ffb703] leading-none select-none">
                    {item.step}
                  </span>
                  <Badge variant="secondary">{item.tag}</Badge>
                </div>
                <CardTitle className="text-xl sm:text-2xl mt-3 text-[#0b131e]">
                  {item.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="p-0">
                <CardDescription className="text-sm leading-relaxed text-gray-600 mb-3 font-light">
                  {item.description}
                </CardDescription>
                <div className="text-xs text-gray-500 font-medium pt-2 border-t border-gray-100">
                  <span className="text-gray-900 font-semibold">Impact: </span>
                  {item.consequence}
                </div>
              </CardContent>

              <CardFooter className="p-0 pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-400 font-mono">
                  Challenge 0{item.step}
                </span>
                <span className="text-xs font-semibold text-[#0b131e]">
                  Problem Solved Below ↓
                </span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

