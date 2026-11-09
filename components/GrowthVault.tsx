import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getPublishedArticles } from "@/lib/journal";

export default async function GrowthVault() {
  const publishedArticles = await getPublishedArticles();
  const displayArticles = publishedArticles.slice(0, 3);

  return (
    <section
      id="growth-vault"
      className="w-full border-t border-gray-200/80 bg-[#fdfbf7] px-6 py-20 sm:px-10 sm:py-24 md:px-16 lg:px-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="text-center md:text-left">
            <Badge variant="default" dot="amber" className="mb-3">
              Ideas & Insights
            </Badge>

            <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-[#0b131e] sm:text-4xl lg:text-5xl">
              Knowledge That Moves Business Forward
            </h2>

            <p className="max-w-2xl text-base font-light leading-relaxed text-gray-600 sm:text-lg">
              Explore practical perspectives on digital marketing, search
              visibility, website performance, and business growth. Clear
              explanations, useful ideas, and insights you can put into
              practice.
            </p>
          </div>

          <Link
            href="/journal"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border-2 border-[#0b131e] px-5 py-3 text-sm font-semibold text-[#0b131e] transition-colors hover:bg-[#0b131e] hover:text-white"
          >
            <span>Explore the Journal</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {displayArticles.length > 0 ? (
          <div className="grid w-full grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {displayArticles.map((article) => (
              <Card
                key={article.slug}
                variant="tactile"
                className="grid h-full grid-rows-[auto_1fr_auto] p-7 sm:p-8"
              >
                <CardHeader className="grid grid-rows-[auto_minmax(4rem,auto)] gap-y-2 p-0 pb-4">
                  <div className="flex min-h-8 items-center justify-between gap-3">
                    <Badge variant="secondary" className="max-w-[70%]">
                      {article.category || "Insights"}
                    </Badge>

                    <span className="flex shrink-0 items-center gap-1.5 font-mono text-[11px] text-gray-600">
                      <Clock className="h-3 w-3 text-gray-400" />
                      {typeof article.readingTime === "number"
                        ? `${article.readingTime} min read`
                        : article.readingTime || "5 min read"}
                    </span>
                  </div>

                  <CardTitle className="flex items-center text-xl leading-snug text-[#0b131e] transition-colors hover:text-amber-800 sm:text-2xl">
                    <Link
                      href={`/journal/${article.slug}`}
                      className="focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                    >
                      {article.title}
                    </Link>
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-0">
                  <p className="text-sm font-light leading-relaxed text-gray-600">
                    {article.description}
                  </p>
                </CardContent>

                <CardFooter className="mt-5 border-t border-gray-100 p-0 pt-5">
                  <Link
                    href={`/journal/${article.slug}`}
                    className="group inline-flex w-full items-center justify-between text-sm font-semibold text-[#0b131e] transition-colors hover:text-amber-800"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border-2 border-dashed border-gray-300 p-10 text-center">
            <h3 className="mb-2 font-heading text-xl font-semibold text-[#0b131e]">
              New Insights Are on Their Way
            </h3>

            <p className="mb-5 text-sm text-gray-600">
              Explore the journal for practical ideas and perspectives.
            </p>

            <Link
              href="/journal"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0b131e] hover:text-amber-800"
            >
              Visit Journal
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
