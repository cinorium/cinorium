import Link from "next/link";
import { ArrowRight, Code2, Search, Megaphone, TrendingUp } from "lucide-react";

const pillars = [
  {
    number: "01",
    title: "Web Development & Technology",
    description:
      "Engineering custom Next.js and WordPress platforms designed for speed, usability, and a clean technical hierarchy that users and search engines reward.",
    linkText: "Explore Web Development",
    href: "/web-development",
    icon: Code2,
  },
  {
    number: "02",
    title: "SEO & Search Visibility",
    description:
      "Technical audits, on-page architecture, intent-focused content strategy, and entity optimization for both standard search engines and modern AI answer engines.",
    linkText: "Explore SEO Services",
    href: "/seo-services",
    icon: Search,
  },
  {
    number: "03",
    title: "Digital Marketing & Strategy",
    description:
      "Strategic content distribution, audience nurturing, and brand positioning that connect your technical assets with high-intent business inquiries.",
    linkText: "Learn About Marketing",
    href: "/services#digital-marketing",
    icon: Megaphone,
  },
  {
    number: "04",
    title: "E-commerce & Growth Systems",
    description:
      "Streamlining product catalogs, customer discovery paths, and checkout journeys to maximize conversion rates and digital store performance.",
    linkText: "Learn About E-commerce",
    href: "/services#ecommerce-growth",
    icon: TrendingUp,
  },
];

export default function HowWeFixIt() {
  return (
    <section
      id="services-overview"
      className="w-full border-t border-black/10 bg-blue-100 px-6 py-20 sm:px-10 md:px-20 lg:px-32"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-3 inline-block w-max border-b-2 border-amber-400 pb-1 text-sm font-semibold uppercase tracking-wider text-gray-800">
            INTEGRATED SERVICE ARCHITECTURE
          </span>

          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            A Stronger Tech Foundation. A Smarter Marketing Engine.
          </h2>

          <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
            Your website and your marketing strategy should never exist in isolation.
            We combine web engineering, search visibility, and strategic marketing
            into a synchronized system built for sustainable growth.
          </p>
        </div>

        <div className="flex w-full flex-col gap-6">
          {pillars.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.number}
                href={service.href}
                className="group relative grid grid-cols-1 items-center gap-6 rounded-2xl border-2 border-black bg-white/90 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 lg:grid-cols-[auto_1fr_auto] lg:gap-10 lg:p-8"
              >
                <div className="flex shrink-0 items-center justify-center">
                  <span className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 font-heading text-2xl font-bold text-amber-800 transition-colors group-hover:bg-amber-100 sm:text-3xl">
                    {service.number}
                  </span>
                </div>

                <div className="space-y-2 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2.5">
                    <Icon className="h-5 w-5 text-amber-600 hidden sm:inline" />
                    <h3 className="font-heading text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                    {service.description}
                  </p>
                </div>

                <div className="flex shrink-0 items-center justify-center gap-3 border-t border-gray-100 pt-4 lg:justify-end lg:border-t-0 lg:pt-0">
                  <span className="text-sm font-semibold text-gray-900 group-hover:underline">
                    {service.linkText}
                  </span>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-white transition-transform group-hover:translate-x-1">
                    <ArrowRight className="h-4 w-4 text-amber-400" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 underline decoration-amber-500 decoration-2 underline-offset-4 hover:text-amber-800 transition-colors"
          >
            <span>View Complete Service Specifications &amp; Deliverables</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
