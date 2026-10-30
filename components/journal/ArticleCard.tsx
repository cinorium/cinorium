import Link from "next/link";
import { ArrowRight, Calendar, Clock, BookOpen } from "lucide-react";
import type { Article } from "@/lib/journal";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (featured) {
    return (
      <article className="group relative flex flex-col justify-between rounded-3xl border-2 border-black bg-white p-7 sm:p-9 md:p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-900">
                Featured Article
              </span>
              <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700">
                {article.category}
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                <time dateTime={article.date}>{formattedDate}</time>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{article.readingTime}</span>
              </span>
            </div>
          </div>

          <h2 className="mb-4 font-heading text-2xl font-bold tracking-tight leading-tight text-gray-900 sm:text-3xl md:text-4xl">
            <Link
              href={`/journal/${article.slug}`}
              className="transition-colors hover:text-amber-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm"
            >
              {article.title}
            </Link>
          </h2>

          <p className="mb-8 max-w-3xl text-base leading-relaxed text-gray-700 sm:text-lg">
            {article.description}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-5">
          <div className="text-xs text-gray-600">
            <span>By </span>
            <strong className="text-gray-900">{article.author?.name || "Cinorium"}</strong>
          </div>

          <Link
            href={`/journal/${article.slug}`}
            className="group/btn inline-flex items-center gap-2 rounded-xl bg-black px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
          >
            <span>Read Article</span>
            <ArrowRight
              className="h-4 w-4 text-amber-400 transition-transform group-hover/btn:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex flex-col justify-between rounded-2xl border-2 border-black bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7">
      <div>
        <div className="mb-4 flex items-center justify-between gap-2">
          <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-amber-900">
            {article.category}
          </span>
          <BookOpen className="h-4 w-4 text-gray-400 transition-colors group-hover:text-black" aria-hidden="true" />
        </div>

        <h3 className="mb-3 font-heading text-xl font-semibold tracking-tight leading-snug text-gray-900 sm:text-2xl">
          <Link
            href={`/journal/${article.slug}`}
            className="transition-colors hover:text-amber-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm"
          >
            {article.title}
          </Link>
        </h3>

        <p className="mb-6 text-sm leading-relaxed text-gray-600">
          {article.description}
        </p>
      </div>

      <div className="border-t border-gray-100 pt-4">
        <div className="mb-3 flex items-center justify-between text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" aria-hidden="true" />
            <time dateTime={article.date}>{formattedDate}</time>
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" aria-hidden="true" />
            <span>{article.readingTime}</span>
          </span>
        </div>

        <Link
          href={`/journal/${article.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900 transition-colors hover:text-amber-700 group-hover:underline"
        >
          <span>Read Full Article</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-amber-500" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

