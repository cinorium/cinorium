"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import SubscribeModal from "./SubscribeModal";

const servicesList = [
  {
    id: "01",
    title: "Search Visibility",
    description:
      "SEO, local search optimization and AI-search visibility to help the right people discover your business.",
    linkText: "Explore Search Services",
    href: "/services/search",
    image: "/search-visibility.png",
  },
  {
    id: "02",
    title: "Content & Social",
    description:
      "Content planning, social media strategy and creative content that communicates your value.",
    linkText: "Explore Content Services",
    href: "/services/content",
    image: "/content-social.png",
  },
  {
    id: "03",
    title: "Web & Digital",
    description:
      "Websites and landing pages designed to present your business clearly and guide visitors towards enquiries.",
    linkText: "Explore Web & Digital",
    href: "/services/web",
    image: "/web-digital.png",
  },
  {
    id: "04",
    title: "Creative & Design",
    description:
      "Brand visuals, marketing graphics and design assets that make your business more recognizable.",
    linkText: "Explore Creative Services",
    href: "/services/creative",
    image: "/creative-design.png",
  },
];

export default function HowIHelp() {
  const [selectedService, setSelectedService] = useState<{
    id: string;
    title: string;
  } | null>(null);

  return (
    <section
      id="how-i-help"
      className="w-full bg-amber-50/40 py-24 px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            How I Help Businesses Grow
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            From improving search visibility to creating better digital
            experiences, I focus on the practical steps that help businesses
            strengthen their online presence.
          </p>
        </div>

        {/* Services List */}
        <div className="flex flex-col gap-10">
          {servicesList.map((service) => (
            <button
              key={service.id}
              onClick={() =>
                setSelectedService({
                  id: service.id,
                  title: service.title,
                })
              }
              className="group flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 p-4 rounded-2xl transition-all duration-300 hover:bg-amber-100/40 text-left w-full cursor-pointer focus:outline-none"
            >
              {/* Left Thumbnail with Yellow Border */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 shrink-0 rounded-lg overflow-hidden border-2 border-amber-400 p-1 bg-white shadow-sm">
                <div className="relative w-full h-full rounded overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Right Content */}
              <div className="flex flex-col justify-center flex-1 text-center sm:text-left pt-2">
                {/* Number + Title */}
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-3">
                  <span className="text-gray-800 mr-2">{service.id} —</span>{" "}
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light mb-4">
                  {service.description}
                </p>

                {/* Link styling */}
                <div className="inline-flex items-center justify-center sm:justify-start gap-2 text-sm font-medium text-gray-700 group-hover:text-amber-800 transition-colors">
                  <span>{service.linkText}</span>
                  <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Reusable Subscribe Modal Integration */}
      <SubscribeModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        title={`${selectedService?.title} — Under Development`}
        badgeText={`SERVICE ${selectedService?.id || ""}`}
        description="Detailed service offerings and case studies for this section are being prepared. Subscribe to get notified as soon as full details are published."
      />
    </section>
  );
}
