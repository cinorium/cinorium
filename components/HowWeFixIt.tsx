
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "SEO & Search Visibility",
    description:
      "Improve your website's search foundations through technical SEO, on-page optimization, keyword research and useful content. We also consider how people discover businesses through AI-powered search.",
    linkText: "Explore SEO Services",
    href: "/seo-services",
  },
  {
    number: "02",
    title: "Website Development",
    description:
      "Build or improve your business website with a focus on usability, performance, responsive design and a strong technical foundation for search.",
    linkText: "Explore Web Development",
    href: "/web-development",
  },
];

export default function HowWeFixIt() {
  return (
    <section
      id="what-i-do"
      className="w-full border-t border-black/10 bg-blue-100 px-6 py-20 sm:px-10 md:px-20 lg:px-32"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-3 inline-block w-max border-b-2 border-amber-400 pb-1 text-sm font-semibold uppercase tracking-wider text-gray-800">
            What We Do
          </span>

          <h2 className="mb-4 font-serif text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            A Stronger Website. A Smarter Search Strategy.
          </h2>

          <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
            Your website and your search strategy should work together.
            We help businesses build a stronger technical foundation and
            improve how potential customers discover them online.
          </p>
        </div>

        <div className="flex w-full flex-col gap-6">
          {services.map((service) => (
            <Link
              key={service.number}
              href={service.href}
              className="group relative grid grid-cols-1 items-center gap-6 rounded-2xl border-2 border-black bg-white/90 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 lg:grid-cols-[auto_1fr_auto] lg:gap-10 lg:p-8"
            >
              <div className="flex shrink-0 items-center justify-center">
                <span className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 font-serif text-2xl font-bold text-amber-700 transition-colors group-hover:bg-amber-100 sm:text-3xl">
                  {service.number}
                </span>
              </div>

              <div className="space-y-2 text-center lg:text-left">
                <h3 className="font-serif text-xl font-bold text-gray-900 sm:text-2xl">
                  {service.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                  {service.description}
                </p>
              </div>

              <div className="flex shrink-0 items-center justify-center gap-3 border-t border-gray-100 pt-4 lg:justify-end lg:border-t-0 lg:pt-0">
                <span className="text-sm font-semibold text-gray-900 group-hover:underline">
                  {service.linkText}
                </span>

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-white transition-transform group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
