"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import SubscribeModal from "./SubscribeModal";

const productsList = [
  {
    id: 1,
    title: "Storybooks",
    description: "Stories, adventures and illustrated books.",
    linkText: "Explore Books",
    href: "/publishing/storybooks",
    image: "/storybook.png",
  },
  {
    id: 2,
    title: "Coloring Books",
    description: "Creative activities for young learners.",
    linkText: "View Collection",
    href: "/publishing/coloring-books",
    image: "/coloring-book.png",
  },
  {
    id: 3,
    title: "Planners & Printables",
    description: "Practical downloadable resources.",
    linkText: "Explore Resources",
    href: "/publishing/planners-printables",
    image: "/planners.png",
  },
  {
    id: 4,
    title: "Kids' Activities",
    description: "Activity sheets and learning resources.",
    linkText: "Discover Activities",
    href: "/publishing/kids-activities",
    image: "/kids-activities.png",
  },
];

export default function PublishingProducts() {
  const [selectedProduct, setSelectedProduct] = useState<{
    title: string;
    id: number;
  } | null>(null);

  return (
    <section className="w-full bg-amber-50/40 py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-3">
            Publishing & Digital Products
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-lg font-light leading-relaxed">
            Creative ideas turned into books, activities and useful digital
            resources.
          </p>
        </div>

        {/* 2x2 Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
          {productsList.map((product) => (
            <button
              key={product.id}
              onClick={() =>
                setSelectedProduct({
                  title: product.title,
                  id: product.id,
                })
              }
              className="group flex flex-col gap-4 text-left w-full cursor-pointer focus:outline-none"
            >
              {/* Image Container with Yellow Border */}
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border-2 border-amber-400 p-1.5 bg-white shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Title & Content Below Image */}
              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-1">
                  {product.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 font-light mb-3">
                  {product.description}
                </p>

                {/* Link */}
                <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700 group-hover:text-black transition-colors">
                  <span>{product.linkText}</span>
                  <MoveRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Reusable Subscribe Modal Integration */}
      <SubscribeModal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        title={`${selectedProduct?.title} — Coming Soon`}
        badgeText={`COLLECTION 0${selectedProduct?.id || ""}`}
        description="Yeh publishing collection abhi launch hone wali hai. Naye books aur printables live hote hi notification pane ke liye apna email subscribe karein."
      />
    </section>
  );
}
