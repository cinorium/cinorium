"use client";

import { useEffect, useRef, useState } from "react";
import { List, ChevronDown } from "lucide-react";
import type { TocItem } from "@/lib/journal";

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const listContainerRef = useRef<HTMLDivElement>(null);
  const activeLinkRef = useRef<HTMLAnchorElement>(null);

  // Track active heading via IntersectionObserver
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

  // Keep active heading visible inside the independently scrollable TOC
  useEffect(() => {
    if (activeId && activeLinkRef.current && listContainerRef.current) {
      activeLinkRef.current.scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });
    }
  }, [activeId]);

  if (items.length === 0) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="flex flex-col max-h-[calc(100vh-9rem)] rounded-2xl border-2 border-black bg-white p-5 sm:p-6 shadow-xs"
    >
      {/* Pinned TOC Header */}
      <div className="flex shrink-0 items-center justify-between pb-1">
        <h3 className="flex items-center gap-2 font-heading text-base font-bold text-gray-900">
          <List className="h-4 w-4 text-amber-600" aria-hidden="true" />
          <span>Table of Contents</span>
        </h3>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex lg:hidden items-center text-xs font-semibold text-gray-600 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm px-1.5 py-0.5"
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

      {/* Independently Scrollable Headings Container */}
      <div
        ref={listContainerRef}
        className={`${
          isOpen ? "block mt-4" : "hidden"
        } lg:block lg:mt-3 flex-1 overflow-y-auto overscroll-contain toc-scrollbar pr-1 min-h-0`}
      >
        <ul className="space-y-1.5 border-t border-gray-100 pt-3 text-xs sm:text-sm">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li
                key={item.id}
                className={item.level === 3 ? "pl-3.5 border-l border-gray-200 ml-1" : ""}
              >
                <a
                  ref={isActive ? activeLinkRef : undefined}
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-md px-2 py-1.5 transition-colors ${
                    isActive
                      ? "bg-amber-50 font-semibold text-amber-900 border-l-2 border-amber-500 -ml-[2px]"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
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
