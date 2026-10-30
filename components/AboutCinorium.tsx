import Link from "next/link";
import { ArrowRight, Search, Code2, ChartNoAxesCombined } from "lucide-react";

const principles = [
  {
    icon: Code2,
    title: "Technically Grounded",
    description: "Websites engineered around clean architecture, speed, and usability.",
  },
  {
    icon: Search,
    title: "Search-Aware",
    description: "Semantic structure and intent-aligned content built for organic discovery.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Growth-Focused",
    description: "Practical digital marketing and user flows tied to measurable business goals.",
  },
];

export default function AboutCinorium() {
  return (
    <section
      id="about-cinorium"
      className="w-full border-t border-black/10 bg-blue-100 px-6 py-20 sm:px-10 md:px-16 lg:px-24"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12">
        <div className="flex w-full flex-col items-center justify-between gap-10 lg:flex-row lg:gap-16">
          <div className="w-full shrink-0 lg:w-[42%]">
            <div className="relative overflow-hidden rounded-3xl border-2 border-black bg-white/80 p-7 shadow-sm sm:p-9">
              <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-amber-200/60 blur-2xl transform-gpu" />
              <div className="pointer-events-none absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-blue-200/70 blur-2xl transform-gpu" />

              <div className="relative">
                <span className="inline-block rounded-full border border-amber-200 bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-900">
                  THE GUIDING PRINCIPLE
                </span>

                <h3 className="mt-7 font-heading text-3xl font-bold tracking-tight leading-tight text-gray-900 sm:text-4xl">
                  Look deeper. Build smarter. Grow better.
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base font-light">
                  Meaningful digital growth begins with genuine technical understanding.
                  We don&apos;t rely on superficial templates or vanity metrics.
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left">
            <span className="mb-4 inline-block border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-widest text-gray-700">
              ABOUT CINORIUM
            </span>

            <h2 className="mb-6 font-heading text-3xl font-bold tracking-tight leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Technology-Driven Digital Marketing.
            </h2>

            <p className="mb-4 text-sm leading-relaxed text-gray-700 sm:text-base">
              Cinorium is a digital marketing agency with a strong web development foundation.
              We bring web development, SEO, search visibility, and digital marketing
              together into a coherent growth strategy.
            </p>

            <p className="mb-6 text-sm leading-relaxed text-gray-700 sm:text-base">
              Our distinctive strength is understanding how digital systems are built,
              how they function, how search engines interpret them, and how they support
              business growth. We don&apos;t just make things look right—we make them
              work right.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 underline decoration-amber-500 decoration-2 underline-offset-4 transition-colors hover:text-amber-800"
            >
              Get to Know Cinorium
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
          {principles.map((principle) => {
            const Icon = principle.icon;

            return (
              <div
                key={principle.title}
                className="rounded-2xl border border-black/15 bg-white/60 p-5 text-center transition-colors hover:bg-white sm:p-6"
              >
                <Icon className="mx-auto mb-3 h-6 w-6 text-amber-700" />

                <h3 className="font-semibold text-gray-900">
                  {principle.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-gray-600 font-light">
                  {principle.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
