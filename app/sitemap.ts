// app/sitemap.ts
import type { MetadataRoute } from "next";
import { getPublishedArticles } from "@/lib/journal";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const publishedArticles = await getPublishedArticles();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: "https://cinorium.com" },
    { url: "https://cinorium.com/work" },
    { url: "https://cinorium.com/about" },
    { url: "https://cinorium.com/web-development" },
    { url: "https://cinorium.com/seo-services" },
    { url: "https://cinorium.com/journal" },
    { url: "https://cinorium.com/contact" },
    { url: "https://cinorium.com/privacy" },
    { url: "https://cinorium.com/terms" },
    { url: "https://cinorium.com/return-policy" },
  ];

  const articleRoutes: MetadataRoute.Sitemap = publishedArticles.map((article) => ({
    url: `https://cinorium.com/journal/${article.slug}`,
    lastModified: article.updatedAt ? new Date(article.updatedAt) : new Date(article.date),
  }));

  return [...staticRoutes, ...articleRoutes];
}
