"use client";

import { useEffect, useState } from "react";
import { List, ChevronDown } from "lucide-react";
import type { TocItem } from "@/lib/journal";

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -70% 0px" },
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="rounded-2xl border-2 border-black bg-white p-5 sm:p-6 shadow-xs"
    >
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 font-serif text-base font-bold text-gray-900">
          <List className="h-4 w-4 text-amber-600" aria-hidden="true" />
          <span>Table of Contents</span>
        </h3>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex lg:hidden items-center text-xs font-semibold text-gray-600 hover:text-gray-900"
          aria-expanded={isOpen}
          aria-label="Toggle table of contents"
        >
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      <div className={`${isOpen ? "block mt-4" : "hidden"} lg:block lg:mt-4`}>
        <ul className="space-y-2 border-t border-gray-100 pt-3 text-xs sm:text-sm">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li
                key={item.id}
                className={item.level === 3 ? "pl-3.5 border-l border-gray-200" : ""}
              >
                <a
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`block transition-colors py-0.5 ${
                    isActive
                      ? "font-semibold text-amber-700"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

