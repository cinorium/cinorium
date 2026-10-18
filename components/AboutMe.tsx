import React from "react";
import Image from "next/image";

const badges = [
  "Creative Thinking",
  "Practical Execution",
  "Continuous Learning",
];

export default function AboutMe() {
  return (
    <section
      id="about-me"
      className="w-full bg-blue-100 py-20 px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-12">
        {/* Top Grid: Image Left, Text Right */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 w-full">
          {/* Left: Round Avatar with Yellow Ring */}
          <div className="relative shrink-0">
            {/* Outer Yellow Border Ring */}
            <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full border-2 border-amber-400 p-2 flex items-center justify-center">
              {/* Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/avatar.png" // Apni image Path yahan add karein
                  alt="Cinorium CEO Avatar"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Small Label */}
            <span className="inline-block text-xs uppercase tracking-widest font-semibold text-gray-700 border-b-2 border-amber-400 pb-1 mb-4">
              About Me
            </span>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-tight mb-6">
              A Creative Mind. A Growth-Focused Approach.
            </h2>

            {/* Paragraph 1 */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 font-light">
              I'm a digital creative building my expertise across marketing,
              search visibility, content, and web experiences. My background in
              design, development, and publishing helps me approach digital
              challenges from both a creative and practical perspective.
            </p>

            {/* Paragraph 2 */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light">
              My focus is on understanding the problem first, choosing the right
              approach, and creating useful digital solutions around real
              business needs.
            </p>
          </div>
        </div>

        {/* Bottom Pill Badges */}
        <div className="flex flex-wrap justify-center items-center gap-4 mt-4 w-full">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="px-8 py-3 rounded-full border border-gray-800 text-gray-800 font-medium text-sm hover:bg-gray-900 hover:text-white transition-colors duration-300 cursor-default"
            >
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
