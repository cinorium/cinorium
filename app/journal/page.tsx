import type { Metadata } from "next";
import { getPublishedArticles, getCategories, getFeaturedArticle } from "@/lib/journal";
import ArticleCard from "@/components/journal/ArticleCard";
import CategoryFilter from "@/components/journal/CategoryFilter";

export const metadata: Metadata = {
  title: "The Growth & Tech Vault | SEO & Web Development Journal | Cinorium",
  description:
    "Practical guides and technical resources on SEO, website development, Core Web Vitals, and search visibility by Cinorium.",
  alternates: {
    canonical: "/journal",
  },
  openGraph: {
    title: "The Growth & Tech Vault | SEO & Web Development Journal | Cinorium",
    description:
      "Practical guides and technical resources on SEO, website development, Core Web Vitals, and search visibility by Cinorium.",
    url: "https://www.cinorium.com/journal",
    type: "website",
  },
};

const px = "px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20";
const inner = "max-w-5xl mx-auto";

export default async function JournalPage() {
  const publishedArticles = await getPublishedArticles();
  const categories = await getCategories();
  const featuredArticle = await getFeaturedArticle();

  return (
    <div className="w-full">
      {/* ── 1. Hero ──────────────────────────────────────────────────────── */}
      <section
        id="journal-hero"
        aria-labelledby="journal-hero-heading"
        className={`w-full bg-blue-100 border-b border-black/10 ${px} pt-28 pb-20 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24`}
      >
        <div className={inner}>
          <span className="mb-4 inline-block border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-widest text-gray-800 sm:text-sm">
            THE INTERNET, UNDER THE HOOD · JOURNAL &amp; INSIGHTS
          </span>

          <h1
            id="journal-hero-heading"
            className="mb-5 font-heading text-3xl font-bold tracking-tight leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl max-w-3xl"
          >
            The Growth &amp; Tech Vault
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-gray-700 sm:text-lg">
            Website investigations, technical explanations, and practical
            frameworks on web development, SEO, search visibility, and digital
            marketing. Clear advice without agency fluff or unsupported claims.
          </p>
        </div>
      </section>

      {/* ── 2. Featured Article (only if one exists) ───────────────────────── */}
      {featuredArticle && (
        <section
          id="featured-article"
          aria-labelledby="featured-heading"
          className={`w-full bg-amber-50/30 border-b border-black/10 ${px} py-14 sm:py-16`}
        >
          <div className={inner}>
            <div className="mb-6 flex items-center justify-between">
              <span
                id="featured-heading"
                className="inline-block border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-wider text-gray-800 sm:text-sm"
              >
                Featured Release
              </span>
            </div>

            <ArticleCard article={featuredArticle} featured={true} />
          </div>
        </section>
      )}

      {/* ── 3. Articles Collection & Interactive Filter ───────────────────── */}
      <section
        id="all-articles"
        aria-labelledby="articles-heading"
        className={`w-full bg-white border-b border-black/10 ${px} py-16 sm:py-20 lg:py-24`}
      >
        <div className={inner}>
          <div className="mb-10">
            <span className="mb-3 inline-block border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-wider text-gray-800 sm:text-sm">
              All Articles
            </span>
            <h2
              id="articles-heading"
              className="mb-3 font-heading text-2xl font-bold tracking-tight leading-tight text-gray-900 sm:text-3xl md:text-4xl"
            >
              Explore the Archive
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
              Browse technical and strategy guides categorized by search visibility,
              web development, and evolving AI search experiences.
            </p>
          </div>

          <CategoryFilter
            articles={publishedArticles}
            categories={categories}
          />
        </div>
      </section>
    </div>
  );
}
