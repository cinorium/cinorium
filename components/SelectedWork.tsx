"use client";

import React, { useState } from "react";
import { Monitor, Palette, BookOpen, BarChart3 } from "lucide-react";
import SubscribeModal from "./SubscribeModal";

const projects = [
  {
    id: 1,
    title: "Web & Digital",
    href: "/work/web",
    icon: <Monitor className="w-10 h-10 text-gray-700" />,
    modalIcon: <Monitor className="w-6 h-6 text-amber-600" />,
  },
  {
    id: 2,
    title: "Creative Work",
    href: "/work/creative",
    icon: <Palette className="w-10 h-10 text-gray-700" />,
    modalIcon: <Palette className="w-6 h-6 text-amber-600" />,
  },
  {
    id: 3,
    title: "Publishing",
    href: "/work/publishing",
    icon: <BookOpen className="w-10 h-10 text-gray-700" />,
    modalIcon: <BookOpen className="w-6 h-6 text-amber-600" />,
  },
  {
    id: 4,
    title: "Marketing Projects",
    href: "/work/growth",
    icon: <BarChart3 className="w-10 h-10 text-gray-700" />,
    modalIcon: <BarChart3 className="w-6 h-6 text-amber-600" />,
  },
];

export default function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState<{
    title: string;
    icon: React.ReactNode;
  } | null>(null);

  return (
    <section
      id="selected-work"
      className="w-full bg-blue-100 py-24 px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-3">
          Selected Work
        </h2>
        <p className="text-sm md:text-base text-gray-600 max-w-md mx-auto mb-16 font-light leading-relaxed">
          A selection of projects across digital experiences, creative work, and
          independent publishing[cite: 8].
        </p>

        {/* 2x2 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() =>
                setSelectedProject({
                  title: project.title,
                  icon: project.modalIcon,
                })
              }
              className="group relative flex flex-col items-center justify-center bg-gray-100 rounded-3xl aspect-square p-8 transition-all duration-300 hover:bg-gray-200/80 hover:-translate-y-1 shadow-sm text-left w-full cursor-pointer focus:outline-none"
            >
              {/* Icon with smooth hover animation */}
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                {project.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-serif font-medium text-gray-900">
                {project.title}
              </h3>
            </button>
          ))}
        </div>
      </div>

      {/* Reusable Subscribe Modal Integration */}
      <SubscribeModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={`${selectedProject?.title} — In Progress`}
        icon={selectedProject?.icon}
        description="This section is currently under development. High-quality case studies, useful insights, and detailed content will be published here soon. Subscribe to get notified!"
      />
    </section>
  );
}
