import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-config";

/**
 * Dynamic robots.txt
 *
 * Behaviour varies by deployment environment so that preview and staging
 * deployments are never inadvertently indexed:
 *
 *   VERCEL_ENV = "production"  → full crawling allowed for known bots,
 *                                 /api/ disallowed, canonical sitemap declared.
 *   VERCEL_ENV = "preview"     → all user-agents blocked (Disallow: /).
 *   VERCEL_ENV = "development" → all user-agents blocked (Disallow: /).
 *   (local / unset)            → treated the same as "development"; blocked.
 *
 * AI-crawler–specific rules (production only):
 *   - GPTBot, Claude-Web, Google-Extended, Bytespider, PerplexityBot
 *     are allowed so that the site can be discovered via AI-powered search.
 *   - DotBot and AhrefsBot (paid SEO crawlers) are disallowed to conserve
 *     crawl budget. Adjust to taste.
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */
export default function robots(): MetadataRoute.Robots {
  const env = process.env.VERCEL_ENV ?? process.env.NODE_ENV ?? "development";
  const isProduction = env === "production";

  // ── Non-production: block everything ────────────────────────────────────────
  if (!isProduction) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
      // Do NOT declare the sitemap on non-production environments so that
      // search engines cannot accidentally queue non-canonical URLs.
    };
  }

  // ── Production: granular per-bot rules ──────────────────────────────────────
  return {
    rules: [
      // ── Default: all crawlers ──────────────────────────────────────────────
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",          // Server-side API endpoints
        ],
      },

      // ── AI crawlers — explicitly allowed ──────────────────────────────────
      // Keeping these separate makes it easy to adjust AI-crawler policy
      // independently from the default wildcard rule.
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Claude-Web",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Bytespider",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/api/"],
      },

      // ── Paid SEO crawlers — disallowed to save crawl budget ───────────────
      {
        userAgent: "DotBot",
        disallow: "/",
      },
      {
        userAgent: "AhrefsBot",
        disallow: "/",
      },
    ],

    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
