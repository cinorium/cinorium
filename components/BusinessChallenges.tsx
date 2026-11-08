import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const challenges = [
  {
    step: "1",
    tag: "Search Discovery Friction",
    title: "Invisible to High-Intent Buyers",
    description:
      "When your business does not rank in organic search results or AI-powered search experiences, prospective buyers actively seeking your exact services find and hire your competitors instead.",
    consequence:
      "Results in fewer qualified enquiries and heavy reliance on unpredictable referrals.",
  },
  {
    step: "2",
    tag: "Conversion Friction",
    title: "A Website That Fails to Convert",
    description:
      "Slow loading pages, confusing navigation, and unclear messaging make it harder for visitors to take action. Even when people find your business, a poor website experience can drive them away before they enquire.",
    consequence:
      "Fewer enquiries and missed opportunities from the traffic you already attract.",
  },
  {
    step: "3",
    tag: "Marketing Strategy Gaps",
    title: "Marketing Without a Clear Direction",
    description:
      "Running campaigns, publishing content, or investing in multiple channels without a clear strategy can waste time and resources. Without defined goals and proper measurement, it's difficult to know what's working or where to improve.",
    consequence:
      "Wasted marketing resources, unclear results, and missed growth opportunities.",
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
            Common Digital Growth Challenges
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-[#0b131e] mb-4">
            Where Most Digital Strategies Break Down
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl font-light leading-relaxed">
            A modern-looking website alone doesn't guarantee business growth. If
            customers can't find your business, understand your value, or take
            the next step, your digital marketing efforts may not deliver their
            full potential.
          </p>
        </div>

        {/* 3 Tactile Cards Grid with Strictly Baseline-Aligned Footers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {challenges.map((item) => (
            <Card
              key={item.step}
              variant="tactile"
              className="p-7 flex flex-col h-full"
            >
              <CardHeader className="p-0 pb-4">
                <div className="flex items-center justify-between min-h-[3.5rem]">
                  <span className="font-modak text-5xl sm:text-6xl text-slate-500 leading-none select-none">
                    {item.step}
                  </span>
                  <Badge variant="secondary">{item.tag}</Badge>
                </div>
                <CardTitle className="text-xl sm:text-2xl mt-3 text-[#0b131e] min-h-[3.5rem] flex items-center">
                  {item.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="p-0 flex-grow">
                <CardDescription className="text-sm leading-relaxed text-gray-600 mb-3 font-light">
                  {item.description}
                </CardDescription>
                <div className="text-xs text-gray-500 font-medium pt-2 border-t border-gray-100">
                  <span className="text-gray-900 font-semibold">Impact: </span>
                  {item.consequence}
                </div>
              </CardContent>

              <CardFooter className="p-0 mt-auto pt-6 border-t border-[#0b131e]/5 flex items-center justify-between">
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
