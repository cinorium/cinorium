"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import SubscribeModal from "./SubscribeModal";

const courses = [
  {
    title: "Graphic Design Classes",
    subtitle: "Watch lessons",
    href: "/lessons/graphic-design",
    image: "/graphic-design-course.png",
    borderColor: "border-blue-400",
  },
  {
    title: "Tips & Techniques",
    subtitle: "Explore tutorials",
    href: "/lessons/tips-techniques",
    image: "/tips-techniques.png",
    borderColor: "border-amber-400",
  },
];

export default function LearnByCreating() {
  const [modalTitle, setModalTitle] = useState<string | null>(null);

  return (
    <section
      id="learn-by-creating"
      className="w-full bg-amber-50/40 py-24 px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-3">
            Learn by Creating
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-lg font-light leading-relaxed">
            Practical tutorials, design lessons and creative workflows to help
            you build real skills.
          </p>
        </div>

        {/* Two Big Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {courses.map((course, index) => (
            <button
              key={index}
              onClick={() => setModalTitle(course.title)}
              className="group flex flex-col gap-4 text-left w-full cursor-pointer focus:outline-none"
            >
              {/* Image Container with Custom Border */}
              <div
                className={`relative w-full aspect-[4/3] rounded-3xl overflow-hidden border-2 ${course.borderColor} p-2 bg-white shadow-sm transition-transform duration-300 group-hover:-translate-y-1`}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Card Title & Link */}
              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-1">
                  {course.title}
                </h3>
                <div className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 group-hover:text-black transition-colors">
                  <span>{course.subtitle}</span>
                  <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Bottom Centered Button */}
        <div className="flex justify-center">
          <button
            onClick={() => setModalTitle("Explore All Lessons")}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-gray-900 text-gray-900 text-sm font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 cursor-pointer"
          >
            <span>Explore All Lessons</span>
            <MoveRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Reusable Subscribe Modal Integration */}
      <SubscribeModal
        isOpen={!!modalTitle}
        onClose={() => setModalTitle(null)}
        title={`${modalTitle} — Under Development`}
        badgeText="TUTORIALS & LESSONS"
        description="Yeh lessons aur tutorials section abhi tayar ho raha hai. Naye design resources aur video guides ki update pane ke liye apna email subscribe karein."
      />
    </section>
  );
}
