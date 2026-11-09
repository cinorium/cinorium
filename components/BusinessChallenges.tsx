import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const challenges = [
  {
    step: "01",
    tag: "Discovery",
    title: "The Right People Can't Find You",
    description:
      "Potential customers are already searching for products, services, and solutions like yours. Without strong visibility across search engines and relevant discovery platforms, those opportunities can go to competitors instead.",
    consequence:
      "Limited qualified traffic and missed opportunities to reach potential customers.",
  },
  {
    step: "02",
    tag: "Conversion",
    title: "Visitors Aren't Taking Action",
    description:
      "People may reach your website but leave without enquiring or buying. Unclear messaging, confusing navigation, weak calls to action, and poor user experience can create friction throughout their journey.",
    consequence:
      "Lost enquiries and sales from the audience you have already attracted.",
  },
  {
    step: "03",
    tag: "Marketing Direction",
    title: "Marketing Activities Lack Direction",
    description:
      "Campaigns, content, and marketing channels need to work towards connected business objectives. Without a clear strategy and meaningful measurement, it becomes difficult to identify what is working and where to focus next.",
    consequence:
      "Disconnected efforts, wasted resources, and unclear growth priorities.",
  },
];

export default function BusinessChallenges() {
  return (
    <section
      id="challenges"
      className="w-full border-t border-gray-200/80 bg-[#faf8f5] px-6 py-20 sm:px-10 sm:py-24 md:px-16 lg:px-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-14 text-center md:text-left">
          <Badge variant="secondary" className="mb-3">
            Common Digital Growth Challenges
          </Badge>

          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-[#0b131e] sm:text-4xl lg:text-5xl">
            Growth Gets Difficult When the Pieces Don't Connect
          </h2>

          <p className="max-w-2xl text-base font-light leading-relaxed text-gray-600 sm:text-lg">
            Getting online is only the beginning. Your business needs to be
            discoverable, communicate its value clearly, and make it easy for
            potential customers to take the next step. When these pieces fall
            short, growth becomes harder than it needs to be.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3 lg:gap-8">
          {challenges.map((item) => (
            <Card
              key={item.step}
              variant="tactile"
              className="grid h-full grid-rows-[auto_1fr] p-7"
            >
              <CardHeader className="grid grid-rows-[auto_minmax(3rem,auto)] gap-y-2 p-0 pb-2">
                <div className="flex min-h-8 items-center justify-between gap-3">
                  <span className="select-none font-modak text-5xl leading-none text-slate-500 sm:text-6xl">
                    {item.step}
                  </span>

                  <Badge variant="secondary">{item.tag}</Badge>
                </div>

                <CardTitle className="flex items-center text-xl leading-tight text-[#0b131e] sm:text-2xl">
                  {item.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex flex-col p-0">
                <CardDescription className="mb-5 text-sm font-light leading-relaxed text-gray-600">
                  {item.description}
                </CardDescription>

                <div className="mt-auto border-t border-[#0b131e]/10 pt-4 text-xs font-medium leading-relaxed text-gray-500">
                  <span className="font-semibold text-[#0b131e]">
                    The impact:{" "}
                  </span>
                  {item.consequence}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
