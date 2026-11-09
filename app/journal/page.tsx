import type { Metadata } from "next";
import {
  getPublishedArticles,
  getCategories,
  getFeaturedArticle,
} from "@/lib/journal";
import ArticleCard from "@/components/journal/ArticleCard";
import CategoryFilter from "@/components/journal/CategoryFilter";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "The Growth & Digital Marketing Journal",
  description:
    "Practical guides and technical investigations on customer acquisition, SEO, search visibility, Core Web Vitals, and web architecture by Cinorium.",
  alternates: {
    canonical: "/journal",
  },
  openGraph: {
    title: "The Growth & Digital Marketing Journal | Cinorium",
    description:
      "Practical guides and technical investigations on customer acquisition, SEO, search visibility, Core Web Vitals, and web architecture by Cinorium.",
    url: "https://www.cinorium.com/journal",
    type: "website",
  },
};

const px = "px-6 sm:px-10 md:px-16 lg:px-24";
const inner = "max-w-5xl mx-auto";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.cinorium.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Journal",
          item: "https://www.cinorium.com/journal",
        },
      ],
    },
    {
      "@type": "Blog",
      "@id": "https://www.cinorium.com/journal#blog",
      url: "https://www.cinorium.com/journal",
      name: "The Growth & Tech Vault | SEO & Digital Marketing Journal",
      description:
        "Practical guides and technical investigations on customer acquisition, SEO, search visibility, Core Web Vitals, and web architecture by Cinorium.",
      publisher: {
        "@id": "https://www.cinorium.com/#organization",
      },
    },
  ],
};

export default async function JournalPage() {
  const publishedArticles = await getPublishedArticles();
  const categories = await getCategories();
  const featuredArticle = await getFeaturedArticle();

  return (
    <div className="w-full">
      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {/* ── 1. Hero ──────────────────────────────────────────────────────── */}
      <section
        id="journal-hero"
        aria-labelledby="journal-hero-heading"
        className={`w-full bg-[#fdfbf7] border-b border-black/10 ${px} pt-28 pb-16 sm:pt-36 sm:pb-20`}
      >
        <div className={inner}>
          <div className="mb-4">
            <Badge variant="default" dot="amber" size="lg">
              The Internet, Under the Hood · Journal &amp; Insights
            </Badge>
          </div>

          <h1
            id="journal-hero-heading"
            className="mb-5 font-heading text-3xl font-bold tracking-tight leading-[1.1] text-[#0b131e] sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl"
          >
            The Growth &amp; Tech Vault
          </h1>

          <p className="max-w-3xl text-base leading-relaxed text-gray-700 sm:text-lg font-light">
            Website investigations, architectural explanations, and practical
            frameworks across digital marketing strategy, search visibility
            (SEO/AEO), Core Web Vitals, and web engineering. Clear advice
            without generic agency fluff.
          </p>
        </div>
      </section>

      {/* ── 2. Featured Article (only if one exists) ───────────────────────── */}
      {featuredArticle && (
        <section
          id="featured-article"
          aria-labelledby="featured-heading"
          className={`w-full bg-[#faf8f5] border-b border-black/10 ${px} py-14 sm:py-16`}
        >
          <div className={inner}>
            <div className="mb-6 flex items-center justify-between">
              <Badge variant="secondary" size="sm" id="featured-heading">
                Featured Release
              </Badge>
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
            <Badge variant="secondary" size="sm" className="mb-3">
              All Articles
            </Badge>
            <h2
              id="articles-heading"
              className="mb-3 font-heading text-2xl font-bold tracking-tight leading-tight text-[#0b131e] sm:text-3xl md:text-4xl"
            >
              Explore the Archive
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base font-light">
              Browse technical analyses and marketing guides categorized by
              search visibility, web engineering, and evolving AI search
              experiences.
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
