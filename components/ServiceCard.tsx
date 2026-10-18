import React from "react";
import Link from "next/link";
import { MoveRight } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText: string;
  href?: string;
}

export const ServiceCard = ({
  icon,
  title,
  description,
  linkText,
  href = "#",
}: ServiceCardProps) => {
  return (
    <Link href={href} className="relative group block flex-1 min-w-[250px]">
      {/* Layer 1 (Sabse peeche) */}
      <div className="absolute inset-0 border-2 border-black rounded-2xl rotate-3 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-300 ease-out pointer-events-none" />

      {/* Layer 2 (Middle layer) */}
      <div className="absolute inset-0 border-2 border-black rounded-2xl rotate-1 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-300 ease-out pointer-events-none" />

      {/* Layer 3 (Left-tilt layer) */}
      <div className="absolute inset-0 border-2 border-black rounded-2xl -rotate-2 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-x-1 transition-all duration-300 ease-out pointer-events-none" />

      {/* Main Top Card */}
      <div className="relative flex flex-col items-center justify-between p-8 text-center bg-white rounded-2xl border-2 border-black h-full min-h-[380px] transition-all duration-300 ease-out group-hover:-rotate-1 cursor-pointer">
        {/* Top Icon */}
        <div className="text-2xl text-black mb-4 flex items-center justify-center">
          {icon}
        </div>

        {/* Title & Description */}
        <div className="flex-1 flex flex-col justify-start">
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
            {title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed font-light">
            {description}
          </p>
        </div>

        {/* Bottom Link Text & Arrow */}
        <div className="mt-6 pt-4">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 group-hover:text-black group-hover:underline transition-all">
            <span>{linkText}</span>
            <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
};
