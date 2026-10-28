import Link from "next/link";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const plannedArticles = [
  {
    id: 1,
    category: "SEO & Search Visibility",
    title: "How to Improve Your Website's Search Visibility",
    description:
      "Understand the technical, on-page and content foundations that help search engines discover and understand your website.",
    href: "/journal/improve-website-search-visibility",
    isPublished: true,
  },
  {
    id: 2,
    category: "Web Development",
    title: "How Website Performance Affects SEO and User Experience",
    description:
      "Explore page experience, loading performance and practical improvements for a more usable website.",
    isPublished: false,
    badge: "Upcoming Guide",
  },
  {
    id: 3,
    category: "AI Search",
    title: "How to Make Your Website Easier for AI Search to Understand",
    description:
      "Learn how clear content, accessible pages and structured information support discovery across evolving search experiences.",
    isPublished: false,
    badge: "Upcoming Guide",
  },
];

export default function GrowthVault() {
  return (
    <section
      id="growth-vault"
      className="w-full border-t border-black/10 bg-amber-50/40 px-6 py-20 sm:px-10 md:px-20 lg:px-32"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-14 text-center md:text-left">
          <span className="mb-3 inline-block w-max border-b-2 border-amber-400 pb-1 text-sm font-semibold uppercase tracking-wider text-gray-800">
            Insights &amp; Resources
          </span>

          <h2 className="mb-3 font-serif text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            The Growth &amp; Tech Vault
          </h2>

          <p className="max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Practical guides on SEO, web development and search visibility.
            Clear explanations, useful frameworks and advice you can put
            into practice.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plannedArticles.map((article) => {
            if (article.isPublished && article.href) {
              return (
                <Link
                  key={article.id}
                  href={article.href}
                  className="group relative block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-4 rounded-2xl"
                >
                  <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-black opacity-0 transition-all duration-300 ease-out group-hover:translate-x-2 group-hover:translate-y-2 group-hover:rotate-2 group-hover:opacity-100" />

                  <Card className="relative flex h-full min-h-[330px] flex-col justify-between rounded-2xl border-2 border-black bg-white p-6 shadow-sm transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:-rotate-1 group-hover:shadow-lg sm:p-8">
                    <CardHeader className="p-0 pb-5">
                      <div className="mb-4 flex items-start justify-between gap-3">
                        <span className="rounded-full border border-amber-200 bg-amber-100/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-900">
                          {article.category}
                        </span>

                        <BookOpen className="h-5 w-5 shrink-0 text-gray-400 transition-colors group-hover:text-black" />
                      </div>
                    </CardHeader>

                    <CardContent className="flex-1 p-0">
                      <CardTitle className="font-serif text-xl font-bold leading-snug text-gray-900 sm:text-2xl">
                        {article.title}
                      </CardTitle>

                      <p className="mt-4 text-sm leading-relaxed text-gray-600">
                        {article.description}
                      </p>
                    </CardContent>

                    <CardFooter className="mt-6 border-t border-gray-100 p-0 pt-5">
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:text-amber-800 transition-colors">
                        Read Guide
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-amber-500" />
                      </span>
                    </CardFooter>
                  </Card>
                </Link>
              );
            }

            return (
              <div
                key={article.id}
                className="group relative block h-full"
              >
                <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-black opacity-0 transition-all duration-300 ease-out group-hover:translate-x-2 group-hover:translate-y-2 group-hover:rotate-2 group-hover:opacity-100" />

                <Card className="relative flex h-full min-h-[330px] flex-col justify-between rounded-2xl border-2 border-black bg-white p-6 shadow-sm transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:-rotate-1 group-hover:shadow-lg sm:p-8">
                  <CardHeader className="p-0 pb-5">
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <span className="rounded-full border border-amber-200 bg-amber-100/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-900">
                        {article.category}
                      </span>

                      <BookOpen className="h-5 w-5 shrink-0 text-gray-400 transition-colors group-hover:text-black" />
                    </div>
                  </CardHeader>

                  <CardContent className="flex-1 p-0">
                    <CardTitle className="font-serif text-xl font-bold leading-snug text-gray-900 sm:text-2xl">
                      {article.title}
                    </CardTitle>

                    <p className="mt-4 text-sm leading-relaxed text-gray-600">
                      {article.description}
                    </p>
                  </CardContent>

                  <CardFooter className="mt-6 border-t border-gray-100 p-0 pt-5">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-900">
                      <Sparkles className="h-3 w-3 text-amber-700" />
                      {article.badge}
                    </span>
                  </CardFooter>
                </Card>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 underline decoration-amber-500 decoration-2 underline-offset-4 transition-colors hover:text-amber-800"
          >
            Explore All Insights
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
