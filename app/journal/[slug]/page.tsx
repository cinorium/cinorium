import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  User,
  ChevronRight,
  Sparkles,
} from "lucide-react";

import {
  getArticleBySlug,
  getPublishedArticles,
  getRelatedArticles,
  extractTableOfContents,
} from "@/lib/journal";
import { mdxComponents } from "@/components/journal/MdxComponents";
import TableOfContents from "@/components/journal/TableOfContents";
import ArticleCard from "@/components/journal/ArticleCard";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const published = await getPublishedArticles();
  return published.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found | Cinorium",
    };
  }

  const url = `https://www.cinorium.com/journal/${article.slug}`;

  return {
    title: `${article.title} | Cinorium Journal`,
    description: article.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${article.title} | Cinorium`,
      description: article.description,
      url,
      type: "article",
      publishedTime: article.date,
      modifiedTime: article.updatedAt || article.date,
      authors: [article.author?.name || "Muhammad Huzaifa"],
      tags: article.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

const px = "px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20";
const inner = "max-w-5xl mx-auto";

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = await getRelatedArticles(article.slug, article.category, 2);
  const tocItems = extractTableOfContents(article.content);

  const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // JSON-LD structured data
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
          {
            "@type": "ListItem",
            position: 3,
            name: article.title,
            item: `https://www.cinorium.com/journal/${article.slug}`,
          },
        ],
      },
      {
        "@type": "BlogPosting",
        "@id": `https://www.cinorium.com/journal/${article.slug}#article`,
        headline: article.title,
        description: article.description,
        datePublished: article.date,
        dateModified: article.updatedAt || article.date,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://www.cinorium.com/journal/${article.slug}`,
        },
        author: {
          "@type": "Person",
          name: article.author?.name || "Muhammad Huzaifa",
          url: "https://www.cinorium.com/about",
        },
        publisher: {
          "@type": "Organization",
          name: "Cinorium",
          url: "https://www.cinorium.com",
        },
        articleSection: article.category,
        keywords: article.tags.join(", "),
      },
    ],
  };

  return (
    <div className="w-full">
      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* ── 1. Article Header ─────────────────────────────────────────────── */}
      <header
        aria-label="Article header"
        className={`w-full bg-blue-100 border-b border-black/10 ${px} pt-28 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24`}
      >
        <div className={inner}>
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumbs" className="mb-6 flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-900 transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-gray-400 shrink-0" aria-hidden="true" />
            <Link href="/journal" className="hover:text-gray-900 transition-colors">
              Journal
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-gray-400 shrink-0" aria-hidden="true" />
            <span className="text-gray-900 font-medium truncate max-w-[200px] sm:max-w-xs md:max-w-md">
              {article.title}
            </span>
          </nav>

          {/* Category Badge & Metadata Pill */}
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="inline-block rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-900">
              {article.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-600">
              <Calendar className="h-3.5 w-3.5 text-gray-500" aria-hidden="true" />
              <time dateTime={article.date}>{formattedDate}</time>
            </span>
            <span className="text-gray-400">•</span>
            <span className="flex items-center gap-1 text-xs text-gray-600">
              <Clock className="h-3.5 w-3.5 text-gray-500" aria-hidden="true" />
              <span>{article.readingTime}</span>
            </span>
          </div>

          {/* Article Title */}
          <h1 className="mb-6 font-heading text-3xl font-bold tracking-tight leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl">
            {article.title}
          </h1>

          {/* Intro description */}
          <p className="max-w-3xl text-base leading-relaxed text-gray-700 sm:text-xl">
            {article.description}
          </p>

          {/* Author row */}
          <div className="mt-8 flex items-center gap-3 border-t border-black/10 pt-5 text-xs sm:text-sm text-gray-700">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-900 bg-white text-gray-900">
              <User className="h-4 w-4" aria-hidden="true" />
            </div>
            <div>
              <span className="block font-semibold text-gray-900">
                {article.author?.name || "Muhammad Huzaifa"}
              </span>
              <span className="text-xs text-gray-600">
                {article.author?.role || "Founder, Cinorium"}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* ── 2. Article Body & Sidebar ─────────────────────────────────────── */}
      <div className={`w-full bg-white border-b border-black/10 ${px} py-14 sm:py-20`}>
        <div className={inner}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Main Content Column */}
            <main className="lg:col-span-8 min-w-0">
              <article className="prose prose-gray max-w-none">
                <MDXRemote
                  source={article.content.replace(
                    /<a\s+[^>]*href="([^"]+)"[^>]*download[^>]*>([\s\S]*?)<\/a>/gi,
                    '<DownloadCard href="$1" title="$2" />'
                  )}
                  components={mdxComponents}
                  options={{
                    mdxOptions: {
                      remarkPlugins: [remarkGfm],
                    },
                  }}
                />
              </article>

              {/* Tags Row */}
              {article.tags.length > 0 && (
                <div className="mt-12 pt-6 border-t border-gray-200 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 mr-2">
                    Topics:
                  </span>
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs text-gray-700"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Author Box */}
              <div className="mt-10 rounded-2xl border-2 border-black bg-amber-50/50 p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-2 border-black bg-white font-heading text-xl font-bold tracking-tight text-gray-900">
                  MH
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold tracking-tight text-gray-900 mb-1">
                    Written by {article.author?.name || "Muhammad Huzaifa"}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    Founder of Cinorium. Working at the intersection of custom website
                    development, technical SEO, and search visibility to help businesses build
                    maintainable digital foundations.
                  </p>
                </div>
              </div>

              {/* Back to Journal Link */}
              <div className="mt-10">
                <Link
                  href="/journal"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-amber-800 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  <span>Back to all insights</span>
                </Link>
              </div>
            </main>

            {/* Sidebar Column (Desktop Table of Contents & Quick Action) */}
            <aside aria-label="Article navigation" className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              <TableOfContents items={tocItems} />

              {/* Contextual CTA Card */}
              <div className="rounded-2xl border-2 border-black bg-blue-100/70 p-6 shadow-xs">
                <span className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-900">
                  <Sparkles className="h-3 w-3 text-amber-700" aria-hidden="true" />
                  Project Support
                </span>
                <h4 className="font-heading text-lg font-bold tracking-tight text-gray-900 mb-2">
                  Need Help with Search Visibility?
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-gray-700 mb-5">
                  Let&apos;s evaluate your current website structure, technical SEO, and
                  content foundations to determine a practical roadmap.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-black px-4 py-3 text-center text-xs sm:text-sm font-semibold text-white transition-all hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="h-4 w-4 text-amber-400" aria-hidden="true" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* ── 3. Related Articles Section ───────────────────────────────────── */}
      {relatedArticles.length > 0 && (
        <section
          id="related-articles"
          aria-labelledby="related-heading"
          className={`w-full bg-amber-50/30 border-b border-black/10 ${px} py-16 sm:py-20`}
        >
          <div className={inner}>
            <div className="mb-10">
              <span className="mb-3 inline-block border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-wider text-gray-800 sm:text-sm">
                Further Reading
              </span>
              <h2
                id="related-heading"
                className="font-heading text-2xl font-bold tracking-tight leading-tight text-gray-900 sm:text-3xl"
              >
                Related Resources
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {relatedArticles.map((item) => (
                <ArticleCard key={item.slug} article={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 4. Final CTA ─────────────────────────────────────────────────── */}
      <section
        id="journal-cta"
        aria-labelledby="journal-cta-heading"
        className={`w-full bg-blue-100 ${px} py-20 lg:py-24`}
      >
        <div className={inner}>
          <span className="mb-4 inline-block border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-widest text-gray-800 sm:text-sm">
            Work With Cinorium
          </span>

          <h2
            id="journal-cta-heading"
            className="mb-4 font-heading text-3xl font-bold tracking-tight leading-tight text-gray-900 sm:text-4xl md:text-5xl max-w-2xl"
          >
            Ready to Build a Better Search Foundation?
          </h2>

          <p className="mb-8 max-w-2xl text-base leading-relaxed text-gray-700 sm:text-lg">
            Whether you&apos;re building a new website or working to improve search
            performance on an existing one, let&apos;s discuss your goals and identify
            the most effective next steps.
          </p>

          <Link
            href="/contact"
            className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-black px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-900 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 sm:text-base"
          >
            <span>Discuss Your Project</span>
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 text-amber-400"
            />
          </Link>
        </div>
      </section>
    </div>
  );
}
