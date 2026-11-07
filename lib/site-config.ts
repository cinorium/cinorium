/**
 * Centralised site configuration and navigation architecture.
 *
 * Primary identity: Digital Marketing Agency
 * Supporting technical capabilities: Web Development & Graphic Design
 * Tagline: Built for Visibility. Designed for Growth.
 */

export const siteUrl: string =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.cinorium.com";

export const siteConfig = {
  name: "Cinorium",
  legalName: "Cinorium",
  identity: "Digital Marketing Agency",
  tagline: "Built for Visibility. Designed for Growth.",
  description:
    "Cinorium is a digital marketing agency helping ambitious businesses build organic visibility, acquire qualified leads, and turn web traffic into predictable revenue. Web development and technical SEO serve as our supporting engineering foundation.",
  url: siteUrl,
  links: {
    youtube: "https://www.youtube.com/@cinoriumacademy",
    instagram: "https://www.instagram.com/cinorium_/",
    linkedin: "https://www.linkedin.com/in/cinorium/",
  },
} as const;

export interface ServiceItem {
  id: string;
  name: string;
  shortName: string;
  href: string;
  description: string;
  tier: "primary" | "supporting";
  category: "strategy" | "search" | "ai" | "foundation" | "creative";
}

/**
 * Cinorium 5 Core Service Taxonomy:
 * - Primary Agency Services: Digital Marketing Strategy, Search Visibility & SEO, AI Search Visibility (AEO/GEO)
 * - Supporting Technical & Creative Capabilities: Web Development & Tech Optimization, Graphic Design & Visual Communication
 */
export const servicesConfig: ServiceItem[] = [
  {
    id: "digital-marketing-strategy",
    name: "Digital Marketing Strategy",
    shortName: "Marketing Strategy",
    href: "/services#strategy",
    description: "Commercially grounded customer acquisition campaigns focused on qualified pipeline and measurable revenue growth.",
    tier: "primary",
    category: "strategy",
  },
  {
    id: "search-visibility-seo",
    name: "Search Visibility & SEO",
    shortName: "Search & SEO",
    href: "/seo-services",
    description: "Comprehensive technical SEO, on-page architecture, and content authority engineered to capture high-intent buyers.",
    tier: "primary",
    category: "search",
  },
  {
    id: "ai-search-visibility",
    name: "AI Search Visibility (AEO / GEO)",
    shortName: "AI Search (AEO)",
    href: "/services#ai-search",
    description: "Entity authority, knowledge graph modeling, and structured data optimization for AI answer engines and ChatGPT/Perplexity.",
    tier: "primary",
    category: "ai",
  },
  {
    id: "web-development-optimization",
    name: "Web Development & Tech Optimization",
    shortName: "Web Development",
    href: "/web-development",
    description: "High-performance Next.js websites built as the fast, conversion-engineered foundation for your marketing campaigns.",
    tier: "supporting",
    category: "foundation",
  },
  {
    id: "graphic-design-visual-communication",
    name: "Graphic Design & Visual Communication",
    shortName: "Visual Design",
    href: "/services#visual-communication",
    description: "Distinctive brand identities, marketing assets, and visual communication systems that build credibility and trust.",
    tier: "supporting",
    category: "creative",
  },
];

export interface PrimaryNavItem {
  name: string;
  href: string;
  isCta?: boolean;
}

/**
 * Primary Header Navigation Hierarchy (Strict Strategy Document Alignment):
 * 1. Services (Dropdown / Strategic Overview)
 * 2. About
 * 3. Work
 * 4. Journal
 * 5. Contact (Action/CTA Focus)
 */
export const primaryNavigation: PrimaryNavItem[] = [
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Journal",
    href: "/journal",
  },
  {
    name: "Contact",
    href: "/contact",
    isCta: true,
  },
];

export interface StaticRoute {
  path: string;
  changeFrequency:
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";
  priority: number;
  lastModified?: string;
}

/**
 * All public static pages in priority order for sitemap.xml.
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
    path: "/seo-services",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/web-development",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    path: "/about",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/journal",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    path: "/contact",
    changeFrequency: "yearly",
    priority: 0.7,
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
