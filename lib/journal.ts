import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { z } from "zod";

/**
 * Journal category taxonomy.
 * Keep these categories aligned with Cinorium's service structure.
 */
export const ArticleCategorySchema = z.enum([
  "Digital Marketing",
  "SEO & Search Visibility",
  "Content Marketing",
  "E-commerce & Growth",
  "Web Development",
]);

export type ArticleCategory = z.infer<typeof ArticleCategorySchema>;

/**
 * Validates a date in YYYY-MM-DD format, including the actual calendar date.
 */
function isValidISODate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }

  const date = new Date(`${value}T00:00:00.000Z`);

  return (
    !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value
  );
}

/**
 * Runtime validation for article frontmatter.
 * Invalid articles are skipped instead of silently receiving incorrect data.
 */
export const ArticleFrontmatterSchema = z
  .object({
    title: z.string().trim().min(1, "Article title is required"),

    description: z.string().default(""),

    date: z
      .string()
      .refine(isValidISODate, "Date must be a valid YYYY-MM-DD date"),

    updatedAt: z
      .string()
      .refine(isValidISODate, "Updated date must be a valid YYYY-MM-DD date")
      .optional(),

    author: z
      .object({
        name: z.string().trim().min(1),
        role: z.string().optional(),
      })
      .optional(),

    category: ArticleCategorySchema,

    tags: z.array(z.string()).default([]),

    coverImage: z.string().url().optional(),

    coverImageAlt: z.string().trim().optional(),

    ogImage: z.string().url().optional(),

    imageWidth: z.number().int().positive().optional(),

    imageHeight: z.number().int().positive().optional(),

    featured: z.boolean().default(false),

    published: z.boolean().default(false),
  })
  .superRefine((article, ctx) => {
    if (article.coverImage && !article.coverImageAlt) {
      ctx.addIssue({
        code: "custom",
        path: ["coverImageAlt"],
        message: "Cover image alt text is required when coverImage is provided",
      });
    }
  });

export type ArticleFrontmatter = z.infer<typeof ArticleFrontmatterSchema>;

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
 * Minimum reading time is always 1 minute.
 */
function calculateReadingTime(text: string): string {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));

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
 * Extracts H2 and H3 headings from Markdown/MDX.
 *
 * Ignores headings inside fenced code blocks and creates unique IDs
 * when multiple headings have the same text.
 */
export function extractTableOfContents(rawContent: string): TocItem[] {
  const items: TocItem[] = [];
  const usedIds = new Map<string, number>();

  const lines = rawContent.split(/\r?\n/);

  let fenceCharacter: string | null = null;
  let fenceLength = 0;

  for (const line of lines) {
    const fenceMatch = line.match(/^\s*(`{3,}|~{3,})/);

    // Detect the opening or closing of fenced code blocks.
    if (fenceMatch) {
      const fence = fenceMatch[1];
      const character = fence[0];

      if (fenceCharacter === null) {
        fenceCharacter = character;
        fenceLength = fence.length;
      } else if (character === fenceCharacter && fence.length >= fenceLength) {
        fenceCharacter = null;
        fenceLength = 0;
      }

      continue;
    }

    // Ignore all content inside fenced code blocks.
    if (fenceCharacter !== null) {
      continue;
    }

    const headingMatch = line.match(/^(#{2,3})\s+(.+?)\s*#*\s*$/);

    if (!headingMatch) {
      continue;
    }

    const hashes = headingMatch[1];

    const cleanTitle = headingMatch[2]
      .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/[*_~`]/g, "")
      .trim();

    if (!cleanTitle) {
      continue;
    }

    const baseId = slugifyHeading(cleanTitle) || "section";
    const count = usedIds.get(baseId) ?? 0;

    usedIds.set(baseId, count + 1);

    const id = count === 0 ? baseId : `${baseId}-${count}`;

    items.push({
      id,
      title: cleanTitle,
      level: hashes.length,
    });
  }

  return items;
}

/**
 * Retrieves all valid articles from the content/journal folder,
 * regardless of published status.
 *
 * Invalid frontmatter or missing dates cause an article to be skipped.
 * Articles are sorted by date descending.
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
      !file.startsWith("."),
  );

  const articles: Article[] = [];

  for (const fileName of mdxFiles) {
    const slug = fileName.replace(/\.mdx?$/, "");

    const fullPath = path.join(JOURNAL_DIRECTORY, fileName);

    try {
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const { data, content } = matter(fileContents);

      const result = ArticleFrontmatterSchema.safeParse(data);

      if (!result.success) {
        const errors = result.error.issues
          .map((issue) => {
            const field = issue.path.join(".");
            return `${field || "frontmatter"}: ${issue.message}`;
          })
          .join("; ");

        console.warn(`[Journal] Skipping "${fileName}": ${errors}`);

        continue;
      }

      const frontmatter = result.data;

      articles.push({
        slug,
        ...frontmatter,

        author: frontmatter.author ?? {
          name: "Muhammad Huzaifa",
          role: "Founder, Cinorium",
        },

        readingTime: calculateReadingTime(content),
        content,
      });
    } catch (error) {
      console.error(`[Journal] Failed to process "${fileName}":`, error);
    }
  }

  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
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
 * Returns null if the article does not exist or is unpublished.
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
 * Retrieves related published articles sharing the same category,
 * excluding the current article.
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

  // If there are not enough articles in the same category,
  // backfill with other published articles.
  if (filtered.length < limit) {
    const others = published.filter(
      (item) => item.slug !== currentSlug && item.category !== category,
    );

    return [...filtered, ...others].slice(0, limit);
  }

  return filtered.slice(0, limit);
}

/**
 * Retrieves distinct categories from published articles.
 */
export async function getCategories(): Promise<string[]> {
  const published = await getPublishedArticles();

  const categories = new Set<string>();

  published.forEach((article) => {
    categories.add(article.category);
  });

  return Array.from(categories);
}
