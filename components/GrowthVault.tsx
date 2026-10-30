import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { getAllArticles } from "@/lib/journal";

export default async function GrowthVault() {
  const allArticles = await getAllArticles();
  const publishedArticles = allArticles.filter((article) => article.published);
  const upcomingArticles = allArticles.filter((article) => !article.published);

  // Take up to 3 published articles first (sorted by date descending)
  const displayPublished = publishedArticles.slice(0, 3);
  // Backfill with upcoming guides if fewer than 3 published exist
  const remainingSlots = Math.max(0, 3 - displayPublished.length);
  const displayUpcoming = upcomingArticles.slice(0, remainingSlots);

  return (
    <section
      id="growth-vault"
      className="w-full border-t border-black/10 bg-amber-50/40 px-6 py-20 sm:px-10 md:px-20 lg:px-32"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-14 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="mb-3 inline-block w-max border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-wider text-gray-800 sm:text-sm">
              THE INTERNET, UNDER THE HOOD
            </span>

            <h2 className="mb-3 font-heading text-3xl font-bold tracking-tight leading-tight text-gray-900 sm:text-4xl md:text-5xl">
              The Growth &amp; Tech Vault
            </h2>

            <p className="max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg font-light">
              Website investigations, technical explanations, and grounded strategies
              on SEO, web development, and digital marketing. Clear advice without
              agency fluff.
            </p>
          </div>

          <Link
            href="/journal"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-amber-800 transition-colors shrink-0 underline decoration-amber-400 decoration-2 underline-offset-4"
          >
            <span>Browse All Insights</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Published Articles */}
          {displayPublished.map((article) => (
            <Link
              key={article.slug}
              href={`/journal/${article.slug}`}
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
                  <CardTitle className="font-heading text-xl font-semibold tracking-tight leading-snug text-gray-900 sm:text-2xl">
                    {article.title}
                  </CardTitle>

                  <p className="mt-4 text-sm leading-relaxed text-gray-600 font-light">
                    {article.description}
                  </p>
                </CardContent>

                <CardFooter className="mt-6 border-t border-gray-100 p-0 pt-5">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:text-amber-800 transition-colors">
                    Read Investigation
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-amber-500" />
                  </span>
                </CardFooter>
              </Card>
            </Link>
          ))}

          {/* Upcoming Draft Articles (if slots remaining) */}
          {displayUpcoming.map((article) => (
            <div
              key={article.slug}
              className="relative flex h-full min-h-[330px] flex-col justify-between rounded-2xl border border-gray-200 bg-white/70 p-6 opacity-85 sm:p-8"
            >
              <div>
                <div className="mb-4 flex items-start justify-between gap-3">
                  <span className="rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                    {article.category}
                  </span>
                  <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-[11px] font-semibold text-amber-900">
                    Upcoming Guide
                  </span>
                </div>

                <h3 className="font-heading text-xl font-semibold tracking-tight leading-snug text-gray-800 sm:text-2xl">
                  {article.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-gray-500 font-light">
                  {article.description}
                </p>
              </div>

              <div className="mt-6 border-t border-gray-100 pt-5">
                <span className="text-xs font-medium text-gray-400">
                  Draft in research &amp; review
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
