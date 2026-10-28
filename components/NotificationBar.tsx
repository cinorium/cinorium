"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, X } from "lucide-react";

export default function NotificationBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="w-full bg-brand-dark text-gray-200 text-xs sm:text-sm py-2 px-4 flex items-center justify-between gap-2 border-b border-gray-800/80 transition-all duration-300">
      {/* Centered Message */}
      <div className="flex-1 flex items-center justify-center gap-2 text-center">
        <p className="font-light">
          Welcome to Cinorium! Some sections are currently being updated.
        </p>
        <Link
          href="/contact"
          className="text-brand-amber font-medium underline hover:text-white transition-colors whitespace-nowrap ml-1"
        >
          Get in touch →
        </Link>
      </div>

      {/* Optional Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="text-gray-400 hover:text-white transition-colors p-0.5 rounded-full"
        aria-label="Close notification"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
