import Link from "next/link";
import { Sparkle, Diamond, Plus, MoveRight } from "lucide-react";

const painPoints = [
  {
    id: 1,
    title: "Invisible to Modern Customers",
    description:
      "If your business doesn't rank in modern search results or AI recommendations, your ideal buyers are giving their money to your competitors every single day.",
    linkText: "Fix Your Search Presence",
    href: "/seo-services",
    icon: <Sparkle className="w-6 h-6 fill-black text-black" />,
  },
  {
    id: 2,
    title: "Slow, Broken & Non-Converting Web Tech",
    description:
      "Heavy plugins, slow load times, and poor user flow destroy your ad budget and SEO efforts. A visitor leaves within 3 seconds if your platform feels clunky.",
    linkText: "Upgrade Your Tech Stack",
    href: "/web-development",
    icon: <Diamond className="w-6 h-6 text-black" />,
  },
  {
    id: 3,
    title: "Marketing Without Technical Foundation",
    description:
      "Running ads or posting content on top of a weak website engine is like pouring water into a leaking bucket. Growth requires a strong, integrated system.",
    linkText: "Build Your Foundation",
    href: "/about",
    icon: <Plus className="w-6 h-6 text-black stroke-[3]" />,
  },
];

export default function RealRevenue() {
  return (
    <section
      id="real-revenue"
      className="w-full bg-amber-50/40 py-20 px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-14 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-3">
            Why Most Websites Fail to Generate Real Revenue
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-lg font-light leading-relaxed">
            Having a pretty site means nothing if no one can find it or if it
            takes 5 seconds to load.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 w-full">
          {painPoints.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="relative group block flex-1 min-w-[250px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-2xl"
            >
              {/* Layer 1 (Desktop Hover & Mobile Active Outline) */}
              <div className="absolute inset-0 border-2 border-black rounded-2xl rotate-3 scale-95 opacity-0 lg:group-hover:opacity-100 lg:group-hover:scale-100 lg:group-hover:translate-x-2 lg:group-hover:translate-y-2 active:opacity-100 active:scale-100 active:translate-x-2 active:translate-y-2 transition-all duration-300 ease-out pointer-events-none" />

              {/* Layer 2 */}
              <div className="absolute inset-0 border-2 border-black rounded-2xl rotate-1 scale-95 opacity-0 lg:group-hover:opacity-100 lg:group-hover:scale-100 lg:group-hover:translate-x-1 lg:group-hover:translate-y-1 active:opacity-100 active:scale-100 active:translate-x-1 active:translate-y-1 transition-all duration-300 ease-out pointer-events-none" />

              {/* Layer 3 */}
              <div className="absolute inset-0 border-2 border-black rounded-2xl -rotate-2 scale-95 opacity-0 lg:group-hover:opacity-100 lg:group-hover:scale-100 lg:group-hover:-translate-x-1 active:opacity-100 active:scale-100 active:-translate-x-1 transition-all duration-300 ease-out pointer-events-none" />

              {/* Main Top Card */}
              <div className="relative flex flex-col items-center justify-between p-8 text-center bg-white rounded-2xl border-2 border-black h-full min-h-[380px] transition-all duration-300 ease-out lg:group-hover:-rotate-1 active:-rotate-1 cursor-pointer shadow-sm">
                {/* Top Icon */}
                <div className="text-2xl text-black mb-4 flex items-center justify-center">
                  {item.icon}
                </div>

                {/* Title & Description */}
                <div className="flex-1 flex flex-col justify-start">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Link Text & Arrow */}
                <div className="mt-6 pt-4 w-full">
                  <div className="inline-flex items-center justify-center gap-2 text-sm font-medium text-gray-700 lg:group-hover:text-black lg:group-hover:underline transition-all">
                    <span>{item.linkText}</span>
                    <MoveRight className="w-4 h-4 transition-transform lg:group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
