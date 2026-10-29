import type { MetadataRoute } from "next";
import { siteUrl, staticRoutes } from "@/lib/site-config";
import { getPublishedArticles } from "@/lib/journal";

/**
 * Dynamic sitemap.xml
 *
 * Builds the full sitemap at request time (ISR-compatible) by combining:
 *
 *   1. Static routes — defined once in `lib/site-config.ts`.
 *      Each route carries `changeFrequency` and `priority` metadata so that
 *      search engines can tune their crawl cadence per page type.
 *
 *   2. Dynamic journal article routes — read from the filesystem via
 *      `getPublishedArticles()`. Each entry uses the article's `updatedAt`
 *      date when available, falling back to its original publish `date`.
 *      Draft (unpublished) articles are excluded automatically.
 *
 * Adding a new static page:
 *   → Edit the `staticRoutes` array in `lib/site-config.ts`.
 *   → No changes needed here.
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // ── 1. Static pages ─────────────────────────────────────────────────────────
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    ...(route.lastModified ? { lastModified: new Date(route.lastModified) } : {}),
  }));

  // ── 2. Published journal articles ────────────────────────────────────────────
  let articleEntries: MetadataRoute.Sitemap = [];

  try {
    const publishedArticles = await getPublishedArticles();

    articleEntries = publishedArticles.map((article) => ({
      url: `${siteUrl}/journal/${article.slug}`,
      lastModified: article.updatedAt
        ? new Date(article.updatedAt)
        : new Date(article.date),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    }));
  } catch {
    // If the content directory is empty or unavailable during build, skip
    // article routes gracefully rather than failing the entire sitemap.
    console.warn("[sitemap] Could not load published articles — skipping article entries.");
  }

  return [...staticEntries, ...articleEntries];
}
