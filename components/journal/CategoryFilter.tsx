"use client";

import { useState, useMemo } from "react";
import { Search, X, FolderX } from "lucide-react";
import type { Article } from "@/lib/journal";
import ArticleCard from "./ArticleCard";

interface CategoryFilterProps {
  articles: Article[];
  categories: string[];
}

export default function CategoryFilter({ articles, categories }: CategoryFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        selectedCategory === "All" || article.category === selectedCategory;

      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        q === "" ||
        article.title.toLowerCase().includes(q) ||
        article.description.toLowerCase().includes(q) ||
        article.tags.some((tag) => tag.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [articles, selectedCategory, searchQuery]);

  return (
    <div className="w-full">
      {/* Filter and Search Bar Row */}
      <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        {/* Category Pills */}
        <div
          role="group"
          aria-label="Filter articles by category"
          className="flex flex-wrap items-center gap-2"
        >
          {["All", ...categories].map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                aria-pressed={isSelected}
                className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                  isSelected
                    ? "bg-black text-white shadow-sm"
                    : "border border-gray-300 bg-white text-gray-700 hover:border-gray-900 hover:bg-gray-50"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <label htmlFor="journal-search" className="sr-only">
            Search articles by topic or keyword
          </label>
          <Search
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
            aria-hidden="true"
          />
          <input
            id="journal-search"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search guides by keyword..."
            className="w-full rounded-xl border border-gray-300 bg-white py-2 pl-9 pr-9 text-xs sm:text-sm text-gray-900 transition-colors placeholder:text-gray-400 focus:border-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              aria-label="Clear search query"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Results Count Notification for Screen Readers */}
      <div className="sr-only" aria-live="polite">
        Showing {filteredArticles.length} of {articles.length} articles
      </div>

      {/* Articles Grid or Empty State */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border-2 border-dashed border-gray-300 bg-amber-50/30 p-10 text-center sm:p-14">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-900">
            <FolderX className="h-6 w-6" aria-hidden="true" />
          </div>
          <h3 className="mb-2 font-serif text-xl font-bold text-gray-900">
            No Published Articles Found
          </h3>
          <p className="mx-auto max-w-md text-sm leading-relaxed text-gray-600 mb-6">
            We couldn&apos;t find any articles matching your selected category or
            search term &ldquo;{searchQuery}&rdquo;.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="inline-flex items-center justify-center rounded-xl border border-black bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}

