import React from "react";
import { ServiceCard } from "./ServiceCard";
import { Sparkle, Diamond, Code2, Plus } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Search",
    description:
      "Improve how your business is discovered through search engines and emerging AI-driven search experiences.",
    linkText: "Explore Search",
    href: "/search",
    icon: <Sparkle className="w-6 h-6 fill-black" />,
  },
  {
    id: 2,
    title: "Content",
    description:
      "Build useful, consistent content that attracts, informs and converts the right audience.",
    linkText: "Explore Content",
    href: "/content",
    icon: <Diamond className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "Web",
    description:
      "Create websites and landing pages designed to communicate clearly and turn visitors into enquiries.",
    linkText: "Explore Web",
    href: "/web",
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    id: 4,
    title: "Creative",
    description:
      "Build the graphics, brand assets and visual systems that make your marketing consistent and recognizable.",
    linkText: "Explore Creative",
    href: "/creative",
    icon: <Plus className="w-6 h-6 stroke-[3]" />,
  },
];

export default function WhatIDo() {
  return (
    <section
      id="what-i-do"
      className="w-full bg-amber-50/40 py-20 px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Header Section (Left Aligned & Aligned with Theme Max-Width) */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-3">
            What I Do
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-lg font-light leading-relaxed">
            I help businesses strengthen their online presence through search
            visibility, strategic content, effective websites, and creative
            execution.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              linkText={service.linkText}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
