"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import SubscribeModal from "./SubscribeModal";

// Dummy Articles Array (Baad me CMS/Blog se fetch hoga)
const articlesList = [
  {
    id: "1",
    category: "GRAPHIC DESIGN · TUTORIAL",
    title: "A Practical Guide to Cleaner Vector Artwork",
    description:
      "A walkthrough of shape construction, path cleanup and common mistakes.",
    href: "/articles/cleaner-vector-artwork",
    image: "/vector-artwork.png",
  },
  {
    id: "2",
    category: "DESIGN PROCESS · BREAKDOWN",
    title: "How I Approach a Graphic Design Project",
    description:
      "From the brief and visual direction to the final design decisions.",
    href: "/articles/approach-graphic-design",
    image: "/design-process.png",
  },
  {
    id: "3",
    category: "PUBLISHING · EXPERIENCE",
    title: "What I Learned From Creating My First KDP Books",
    description: "Practical observations from your own publishing experience.",
    href: "/articles/kdp-books-lessons",
    image: "/kdp-books.png",
  },
];

export default function IdeasWorthExploring() {
  const [selectedArticle, setSelectedArticle] = useState<{
    title: string;
    category: string;
  } | null>(null);

  return (
    <section className="w-full bg-blue-100 py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-3">
            Ideas Worth Exploring
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-lg mx-auto font-light leading-relaxed">
            Practical tips, detailed guides and lessons from real creative work.
          </p>
        </div>

        {/* Articles List */}
        <div className="flex flex-col gap-12">
          {articlesList.map((article) => (
            <button
              key={article.id}
              onClick={() =>
                setSelectedArticle({
                  title: article.title,
                  category: article.category,
                })
              }
              className="group flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 p-4 rounded-2xl transition-all duration-300 hover:bg-white/60 text-left w-full cursor-pointer focus:outline-none"
            >
              {/* Left Thumbnail with Yellow Border */}
              <div className="relative w-40 h-32 sm:w-48 sm:h-36 shrink-0 rounded-lg overflow-hidden border-2 border-amber-400 p-1 bg-white shadow-sm">
                <div className="relative w-full h-full rounded overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Right Content */}
              <div className="flex flex-col justify-center flex-1 text-center sm:text-left">
                {/* Category Eyebrow with Bottom Border */}
                <span className="inline-block text-[11px] font-semibold tracking-wider text-gray-700 uppercase mb-2 border-b-2 border-amber-400 pb-1 w-max mx-auto sm:mx-0">
                  {article.category}
                </span>

                {/* Article Title */}
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-2 group-hover:text-amber-800 transition-colors">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light mb-4">
                  {article.description}
                </p>

                {/* Read Article Link */}
                <div className="inline-flex items-center justify-center sm:justify-start gap-2 text-sm font-medium text-gray-700 group-hover:text-black">
                  <span>Read Article</span>
                  <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Reusable Subscribe Modal Integration */}
      <SubscribeModal
        isOpen={!!selectedArticle}
        onClose={() => setSelectedArticle(null)}
        title={`${selectedArticle?.title} — Coming Soon`}
        badgeText={selectedArticle?.category}
        description="Yeh article abhi likha aur format kiya ja raha hai. Complete guide publish hote hi notification pane ke liye apna email subscribe karein."
      />
    </section>
  );
}
