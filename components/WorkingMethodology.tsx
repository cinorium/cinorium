import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const stages = [
  {
    step: "01",
    title: "Understand",
    description:
      "Deep dive into your business model, customer economics, competitive landscape, and commercial acquisition targets.",
  },
  {
    step: "02",
    title: "Diagnose",
    description:
      "Rigorous technical audit of your organic search footprint, speed metrics, tracking integrity, and buyer conversion leaks.",
  },
  {
    step: "03",
    title: "Strategize",
    description:
      "Formulate the target keyword architecture, positioning narrative, entity data map, and high-converting user journey.",
  },
  {
    step: "04",
    title: "Execute",
    description:
      "Deploy fast, semantic web infrastructure, authoritative content assets, structured schema, and telemetry systems.",
  },
  {
    step: "05",
    title: "Measure",
    description:
      "Monitor qualified lead pipeline, search ranking trajectory, engagement scores, and campaign return on investment.",
  },
  {
    step: "06",
    title: "Improve",
    description:
      "Iterate continuously on buyer data to refine conversion rates, expand organic reach, and compound growth over time.",
  },
];

export default function WorkingMethodology() {
  return (
    <section
      id="methodology"
      className="w-full bg-[#0b131e] py-20 sm:py-24 px-6 sm:px-10 md:px-16 lg:px-24 text-white border-t border-gray-800/80"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="mb-14 text-center md:text-left">
          <Badge variant="default" dot="amber" className="mb-3 bg-gray-900 border-gray-700">
            Disciplined Execution
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-white mb-4">
            The 6-Stage Working Framework
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl font-light leading-relaxed">
            We replace marketing guesswork and bloated agency promises with a structured, step-by-step framework built for predictable visibility and compounding return.
          </p>
        </div>

        {/* 6-Stage Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {stages.map((stage) => (
            <Card
              key={stage.step}
              variant="dark"
              className="p-6 sm:p-7 border border-gray-800 bg-[#0f1724] hover:border-gray-700 transition-colors flex flex-col h-full"
            >
              <CardHeader className="p-0 pb-3">
                <div className="flex items-center justify-between min-h-[2.5rem]">
                  <span className="font-modak text-4xl sm:text-5xl text-[#ffb703] leading-none select-none">
                    {stage.step}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-gray-500">
                    Phase {stage.step}
                  </span>
                </div>
                <CardTitle className="text-xl sm:text-2xl text-white mt-2 font-heading min-h-[3.5rem] flex items-center">
                  {stage.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="p-0 flex-grow">
                <CardDescription className="text-sm leading-relaxed text-gray-300 font-light">
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

