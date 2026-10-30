import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ArticleFrontmatter {
  title: string;
  description: string;
  date: string; // ISO format e.g. "2026-10-29"
  updatedAt?: string;
  author?: {
    name: string;
    role?: string;
  };
  category: "SEO & Search Visibility" | "Web Development" | "AI Search";
  tags: string[];
  coverImage?: string;
  featured?: boolean;
  published: boolean;
}

export interface Article extends ArticleFrontmatter {
  slug: string;
  readingTime: string;
  content: string;
}

export interface TocItem {
  id: string;
  title: string;
  level: number;
}

const JOURNAL_DIRECTORY = path.join(process.cwd(), "content", "journal");

/**
 * Calculates estimated reading time based on 200 words per minute.
 */
function calculateReadingTime(text: string): string {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
}

/**
 * Generates URL-friendly anchor ID from heading text.
 */
export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

/**
 * Extracts H2 and H3 table of contents from raw markdown/MDX content.
 */
export function extractTableOfContents(rawContent: string): TocItem[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const items: TocItem[] = [];
  let match;

  while ((match = headingRegex.exec(rawContent)) !== null) {
    const hashes = match[1];
    const title = match[2].trim();
    // Strip markdown formatting if any
    const cleanTitle = title.replace(/\*\*/g, "").replace(/`/g, "");
    items.push({
      id: slugifyHeading(cleanTitle),
      title: cleanTitle,
      level: hashes.length, // 2 for h2, 3 for h3
    });
  }

  return items;
}

/**
 * Retrieves all articles from the content/journal folder regardless of published status.
 * Internal use only.
 */
export async function getAllArticles(): Promise<Article[]> {
  if (!fs.existsSync(JOURNAL_DIRECTORY)) {
    return [];
  }

  const fileNames = fs.readdirSync(JOURNAL_DIRECTORY);
  const mdxFiles = fileNames.filter(
    (file) =>
      (file.endsWith(".mdx") || file.endsWith(".md")) &&
      !file.includes(" ") &&
      !file.startsWith(".")
  );

  const articles = mdxFiles.map((fileName) => {
    const slug = fileName.replace(/\.mdx?$/, "");
    const fullPath = path.join(JOURNAL_DIRECTORY, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const frontmatter = data as ArticleFrontmatter;

    return {
      slug,
      title: frontmatter.title || "Untitled Article",
      description: frontmatter.description || "",
      date: frontmatter.date || new Date().toISOString().split("T")[0],
      updatedAt: frontmatter.updatedAt,
      author: frontmatter.author || {
        name: "Muhammad Huzaifa",
        role: "Founder, Cinorium",
      },
      category: frontmatter.category || "SEO & Search Visibility",
      tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
      coverImage: frontmatter.coverImage,
      featured: Boolean(frontmatter.featured),
      published: Boolean(frontmatter.published),
      readingTime: calculateReadingTime(content),
      content,
    };
  });

  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Retrieves only published articles, sorted by date descending.
 * Safe for public listings, sitemaps, and feeds.
 */
export async function getPublishedArticles(): Promise<Article[]> {
  const all = await getAllArticles();
  return all.filter((article) => article.published === true);
}

/**
 * Retrieves a single published article by its slug.
 * Returns null if the article does not exist or is unpublished (draft).
 */
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const cleanSlug = slug.replace(/[^a-zA-Z0-9_-]/g, "");
  const all = await getAllArticles();
  const article = all.find((item) => item.slug === cleanSlug);

  if (!article || !article.published) {
    return null;
  }

  return article;
}

/**
 * Retrieves the primary featured published article, if any.
 */
export async function getFeaturedArticle(): Promise<Article | null> {
  const published = await getPublishedArticles();
  return published.find((article) => article.featured) || published[0] || null;
}

/**
 * Retrieves related published articles sharing the same category, excluding the current article.
 */
export async function getRelatedArticles(
  currentSlug: string,
  category: string,
  limit = 2,
): Promise<Article[]> {
  const published = await getPublishedArticles();
  const filtered = published.filter(
    (item) => item.slug !== currentSlug && item.category === category,
  );

  // If not enough in same category, backfill with other published articles
  if (filtered.length < limit) {
    const others = published.filter(
      (item) => item.slug !== currentSlug && item.category !== category,
    );
    return [...filtered, ...others].slice(0, limit);
  }

  return filtered.slice(0, limit);
}

/**
 * Retrieves distinct list of categories from published articles.
 */
export async function getCategories(): Promise<string[]> {
  const published = await getPublishedArticles();
  const set = new Set<string>();
  published.forEach((a) => set.add(a.category));
  return Array.from(set);
}

