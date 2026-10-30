"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Code2, Search, Layers } from "lucide-react";

// Custom Brand SVG Icons
function YoutubeIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

const serviceSubmenu = [
  {
    name: "All Services Overview",
    href: "/services",
    description: "Our integrated 4-pillar approach to technology & marketing.",
    icon: Layers,
  },
  {
    name: "Web Development",
    href: "/web-development",
    description: "High-performance custom Next.js & WordPress platforms.",
    icon: Code2,
  },
  {
    name: "SEO Services",
    href: "/seo-services",
    description: "Technical SEO, on-page architecture & search discovery.",
    icon: Search,
  },
];

export default function Header() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click or route change
  useEffect(() => {
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!servicesOpen && !mobileServicesOpen) return;

    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
      if (
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target as Node)
      ) {
        setMobileServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [servicesOpen, mobileServicesOpen]);

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    if (href === "/services") {
      return (
        pathname === "/services" ||
        pathname === "/web-development" ||
        pathname === "/seo-services"
      );
    }
    return (
      pathname === href || (href !== "/" && Boolean(pathname?.startsWith(href)))
    );
  };

  return (
    <header className="fixed z-50 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl bottom-4 md:bottom-auto md:top-6 transform-gpu transition-all duration-300">
      <div className="bg-brand-dark/95 backdrop-blur-md text-gray-200 rounded-full px-4 md:px-6 py-3 flex items-center justify-between shadow-2xl border border-gray-800/80 transform-gpu">
        {/* Brand Logo - Desktop Only */}
        <Link
          href="/"
          className="hidden lg:block font-heading text-xl font-semibold tracking-tight text-white hover:opacity-80 transition-opacity shrink-0"
        >
          cinorium
        </Link>

        {/* Full Navigation Links - Desktop Only */}
        <nav
          aria-label="Desktop primary navigation"
          className="hidden lg:flex items-center gap-6 text-sm font-normal text-gray-300"
        >
          <Link
            href="/work"
            className={`transition-colors duration-200 ${isLinkActive("/work")
                ? "text-brand-amber font-medium"
                : "hover:text-white text-gray-300"
              }`}
          >
            Work
          </Link>

          {/* Accessible Services Dropdown Menu */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <div className="flex items-center gap-1">
              <Link
                href="/services"
                className={`transition-colors duration-200 ${isLinkActive("/services")
                    ? "text-brand-amber font-medium"
                    : "hover:text-white text-gray-300"
                  }`}
              >
                Services
              </Link>
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                aria-label="Toggle services menu"
                onClick={() => setServicesOpen((prev) => !prev)}
                className="text-gray-400 hover:text-white focus:outline-none p-0.5 rounded"
              >
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180 text-brand-amber" : ""
                    }`}
                />
              </button>
            </div>

            {/* Desktop Dropdown Flyout */}
            {servicesOpen && (
              <div
                role="menu"
                aria-orientation="vertical"
                className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-72 transition-all duration-200"
              >
                <div className="rounded-2xl border border-gray-800 bg-[#0b131e]/95 backdrop-blur-xl p-2.5 shadow-2xl">
                  {serviceSubmenu.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        role="menuitem"
                        onClick={() => setServicesOpen(false)}
                        className={`flex items-start gap-3 p-2.5 rounded-xl transition-colors ${isActive
                            ? "bg-amber-400/10 text-white"
                            : "text-gray-300 hover:bg-gray-800/60 hover:text-white"
                          }`}
                      >
                        <div className="p-1.5 rounded-lg bg-gray-800/80 text-amber-400 shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white">
                            {item.name}
                          </div>
                          <div className="text-[11px] text-gray-400 leading-tight mt-0.5 font-light">
                            {item.description}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/journal"
            className={`transition-colors duration-200 ${isLinkActive("/journal")
                ? "text-brand-amber font-medium"
                : "hover:text-white text-gray-300"
              }`}
          >
            Insights
          </Link>

          <Link
            href="/about"
            className={`transition-colors duration-200 ${isLinkActive("/about")
                ? "text-brand-amber font-medium"
                : "hover:text-white text-gray-300"
              }`}
          >
            About
          </Link>

          <Link
            href="/contact"
            className={`transition-colors duration-200 ${isLinkActive("/contact")
                ? "text-brand-amber font-medium"
                : "hover:text-white text-gray-300"
              }`}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Navigation - Accessible pill layout with Services popover */}
        <div ref={mobileDropdownRef} className="relative w-full lg:hidden">
          {/* Mobile Popover Menu (opens upward from bottom bar) */}
          {mobileServicesOpen && (
            <div
              role="dialog"
              aria-label="Services Submenu"
              className="absolute bottom-full left-0 right-0 mb-3 bg-[#0b131e]/98 border border-gray-800 rounded-2xl p-3 shadow-2xl backdrop-blur-xl"
            >
              <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 px-2 py-1 border-b border-gray-800/80 mb-2">
                Services Architecture
              </div>
              <div className="flex flex-col gap-1.5">
                {serviceSubmenu.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileServicesOpen(false)}
                      className="flex items-center gap-2.5 p-2 rounded-xl text-xs text-gray-200 hover:bg-gray-800/80 hover:text-white"
                    >
                      <Icon className="w-4 h-4 text-amber-400 shrink-0" />
                      <div>
                        <span className="font-semibold block">{item.name}</span>
                        <span className="text-[10px] text-gray-400 block font-light">
                          {item.description}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          <nav
            aria-label="Mobile primary navigation"
            className="flex items-center justify-around w-full text-xs font-medium px-1"
          >
            <Link
              href="/"
              className={`transition-colors py-1 px-1.5 text-center ${isLinkActive("/")
                  ? "text-brand-amber font-semibold"
                  : "text-gray-300 hover:text-white"
                }`}
            >
              Home
            </Link>

            <button
              type="button"
              aria-expanded={mobileServicesOpen}
              onClick={() => setMobileServicesOpen((prev) => !prev)}
              className={`inline-flex items-center gap-0.5 py-1 px-1.5 text-center transition-colors ${isLinkActive("/services")
                  ? "text-brand-amber font-semibold"
                  : "text-gray-300 hover:text-white"
                }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-3 h-3 transition-transform ${mobileServicesOpen ? "rotate-180 text-brand-amber" : ""
                  }`}
              />
            </button>

            <Link
              href="/work"
              className={`transition-colors py-1 px-1.5 text-center ${isLinkActive("/work")
                  ? "text-brand-amber font-semibold"
                  : "text-gray-300 hover:text-white"
                }`}
            >
              Work
            </Link>

            <Link
              href="/journal"
              className={`transition-colors py-1 px-1.5 text-center ${isLinkActive("/journal")
                  ? "text-brand-amber font-semibold"
                  : "text-gray-300 hover:text-white"
                }`}
            >
              Insights
            </Link>

            <Link
              href="/about"
              className={`transition-colors py-1 px-1.5 text-center ${isLinkActive("/about")
                  ? "text-brand-amber font-semibold"
                  : "text-gray-300 hover:text-white"
                }`}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={`transition-colors py-1 px-1.5 text-center ${isLinkActive("/contact")
                  ? "text-brand-amber font-semibold"
                  : "text-gray-300 hover:text-white"
                }`}
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Social Icons - Desktop Only (`hidden lg:flex`) */}
        <div className="hidden lg:flex items-center gap-2.5 shrink-0">
          <a
            href="https://www.youtube.com/@cinoriumacademy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="w-8 h-8 rounded-full bg-[#4f6bf6] flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 shadow-md"
          >
            <YoutubeIcon size={14} />
          </a>

          <a
            href="https://www.instagram.com/cinorium_/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-8 h-8 rounded-full bg-[#ff4252] flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 shadow-md"
          >
            <InstagramIcon size={14} />
          </a>

          <a
            href="https://www.linkedin.com/in/cinorium/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-8 h-8 rounded-full bg-[#ffb703] flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 shadow-md"
          >
            <LinkedinIcon size={14} />
          </a>
        </div>
      </div>
    </header>
  );
}
