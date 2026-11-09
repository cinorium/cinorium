import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const stages = [
  {
    step: "01",
    title: "Understand",
    description:
      "We learn about your business, target audience, goals, existing digital presence, and the challenges you're looking to address.",
  },
  {
    step: "02",
    title: "Diagnose",
    description:
      "We assess your website, search visibility, marketing activities, and customer journey to uncover weaknesses, gaps, and growth opportunities.",
  },
  {
    step: "03",
    title: "Strategize",
    description:
      "We turn our findings into a practical roadmap, prioritizing the actions and channels that best support your business goals and available resources.",
  },
  {
    step: "04",
    title: "Execute",
    description:
      "We put the agreed strategy into action through relevant marketing activities, content, search optimization, and website improvements within the project's scope.",
  },
  {
    step: "05",
    title: "Measure",
    description:
      "We track relevant performance indicators, such as search visibility, website engagement, enquiries, and the specific outcomes defined for your project.",
  },
  {
    step: "06",
    title: "Improve",
    description:
      "We review performance insights, identify what is working and what needs attention, then refine the approach and prioritize the next growth opportunities.",
  },
];

export default function WorkingMethodology() {
  return (
    <section
      id="methodology"
      className="w-full border-t border-gray-800/80 bg-[#0b131e] px-6 py-20 text-white sm:px-10 sm:py-24 md:px-16 lg:px-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-14 text-center md:text-left">
          <Badge
            variant="default"
            dot="amber"
            className="mb-3 border-gray-700 bg-gray-900"
          >
            Our Approach
          </Badge>

          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            From Understanding to Continuous Improvement
          </h2>

          <p className="max-w-2xl text-base font-light leading-relaxed text-gray-300 sm:text-lg">
            Good marketing starts with understanding the business behind it. Our
            structured process helps us identify what needs attention, build a
            focused plan, put it into action, and learn from the results.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stages.map((stage) => (
            <Card
              key={stage.step}
              variant="dark"
              className="grid h-full grid-rows-[auto_1fr] border border-gray-800 bg-[#0f1724] p-6 transition-colors hover:border-gray-700 sm:p-7"
            >
              <CardHeader className="grid grid-rows-[auto_minmax(2.5rem,auto)] gap-y-2 p-0 pb-1">
                <div className="flex min-h-10 items-center justify-between">
                  <span className="select-none font-modak text-4xl leading-none text-brand-amber sm:text-5xl">
                    {stage.step}
                  </span>

                  <span className="font-mono text-[11px] uppercase tracking-wider text-gray-500">
                    Phase {stage.step}
                  </span>
                </div>

                <CardTitle className="flex items-center font-heading text-xl text-white sm:text-2xl">
                  {stage.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="p-0">
                <CardDescription className="text-sm font-light leading-relaxed text-gray-300">
                  {stage.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
