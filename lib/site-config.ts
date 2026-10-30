/**
 * Centralised site configuration.
 *
 * - `siteUrl`   – Canonical origin used in robots.txt, sitemap.xml, and OG metadata.
 *                 Reads NEXT_PUBLIC_SITE_URL from the environment first, then falls
 *                 back to VERCEL_PROJECT_PRODUCTION_URL (populated automatically on
 *                 Vercel), and finally the hardcoded production origin.
 *
 * - `staticRoutes` – Single source of truth for every public static page.
 *                 Import this array wherever you need a full list of pages
 *                 (sitemap, search index, etc.) so you only update one file
 *                 when adding or removing pages.
 */

export const siteUrl: string =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://www.cinorium.com");

export interface StaticRoute {
  /** Path relative to the site root, e.g. "/" or "/about". */
  path: string;
  /**
   * How often the page is likely to change.
   * Used in sitemap.xml `<changefreq>`.
   */
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  /**
   * Priority relative to other pages on the same site (0.0–1.0).
   * Used in sitemap.xml `<priority>`.
   */
  priority: number;
  /**
   * Optional last-modified date. Omit to exclude `<lastmod>` from the entry.
   * Use an ISO-8601 date string: "YYYY-MM-DD".
   */
  lastModified?: string;
}

/**
 * All public static pages in priority order.
 *
 * Rules of thumb:
 *   1.0  → Homepage
 *   0.9  → Core service / product pages & Services overview
 *   0.8  → Portfolio, case studies, testimonials
 *   0.7  → Informational / about / contact
 *   0.6  → Blog / journal index
 *   0.5  → Legal & policy pages (still indexable, low editorial priority)
 */
export const staticRoutes: StaticRoute[] = [
  {
    path: "/",
    changeFrequency: "weekly",
    priority: 1.0,
  },
  {
    path: "/services",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    path: "/web-development",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/seo-services",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/work",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/about",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/contact",
    changeFrequency: "yearly",
    priority: 0.7,
  },
  {
    path: "/journal",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    path: "/privacy",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    path: "/terms",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    path: "/return-policy",
    changeFrequency: "yearly",
    priority: 0.5,
  },
];
