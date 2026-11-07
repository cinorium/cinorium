"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Layers,
  TrendingUp,
  Search,
  Sparkles,
  Code2,
  Palette,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import CinoriumLogo from "@/components/CinoriumLogo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/**
 * Cinorium Service Offerings for Header Navigation:
 * Clearly structured with Digital Marketing as Primary, and Web Dev/Design as Supporting Capabilities.
 */
const primaryMarketingServices = [
  {
    name: "All Services Overview",
    href: "/services",
    description: "Integrated digital marketing system for visibility, leads & growth.",
    icon: Layers,
    badge: "Integrated",
  },
  {
    name: "Digital Marketing Strategy",
    href: "/services#strategy",
    description: "Outcome-driven customer acquisition & measurable revenue growth.",
    icon: TrendingUp,
    badge: "Core",
  },
  {
    name: "Search Visibility & SEO",
    href: "/seo-services",
    description: "Technical SEO, site architecture & high-intent organic rankings.",
    icon: Search,
    badge: "Search",
  },
  {
    name: "AI Search Visibility (AEO / GEO)",
    href: "/services#ai-search",
    description: "Entity authority & knowledge optimization for AI search engines.",
    icon: Sparkles,
    badge: "AEO/GEO",
  },
];

const supportingCapabilities = [
  {
    name: "Web Development & Tech Optimization",
    href: "/web-development",
    description: "High-performance websites engineered to power marketing conversions.",
    icon: Code2,
    badge: "Conversion Engine",
  },
  {
    name: "Graphic Design & Visual Communication",
    href: "/services#visual-communication",
    description: "Brand identities & visual systems that build credibility and trust.",
    icon: Palette,
    badge: "Supporting Creative",
  },
];

export default function Header() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesAccordion, setMobileServicesAccordion] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close menus on route change
  useEffect(() => {
    setServicesOpen(false);
    setMobileMenuOpen(false);
    setMobileServicesAccordion(false);
  }, [pathname]);

  // Handle outside click for services dropdown
  useEffect(() => {
    if (!servicesOpen) return;

    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [servicesOpen]);

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
    <>
      {/* Floating / Sticky Header Container */}
      <header className="fixed z-50 left-1/2 -translate-x-1/2 w-[94%] max-w-6xl top-4 sm:top-6 transform-gpu transition-all duration-300">
        <div className="bg-[#0b131e]/95 backdrop-blur-md text-gray-200 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between shadow-2xl border border-gray-800/80">
          {/* Brand Vector Logo — Wordmark (/cinorium-logo-light.svg) */}
          <div className="flex items-center gap-3 shrink-0">
            <CinoriumLogo
              variant="light"
              size="sm"
              withTagline={false}
              className="inline-flex shrink-0"
            />
          </div>

          {/* Desktop Navigation Links — Strictly Strategic Order:
              1. Services (Dropdown)
              2. About
              3. Work
              4. Journal
              5. Contact (CTA Focus) */}
          <nav
            aria-label="Primary desktop navigation"
            className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300"
          >
            {/* 1. Services Dropdown Menu */}
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
                    ? "text-[#ffb703] font-semibold"
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
                  className="text-gray-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 p-0.5 rounded cursor-pointer"
                >
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180 text-[#ffb703]" : ""
                      }`}
                  />
                </button>
              </div>

              {/* Desktop Services Dropdown Popover */}
              {servicesOpen && (
                <div
                  role="menu"
                  aria-orientation="vertical"
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[420px] transition-all duration-200"
                >
                  <div className="rounded-2xl border-2 border-[#0b131e] bg-white p-3.5 shadow-xl space-y-3">
                    {/* Primary Marketing Services */}
                    <div>
                      <div className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500 border-b border-gray-100 mb-1.5 flex items-center justify-between">
                        <span>Digital Marketing Services</span>
                        <span className="text-[9px] text-slate-400 font-mono">Core</span>
                      </div>
                      <div className="space-y-1">
                        {primaryMarketingServices.map((item) => {
                          const Icon = item.icon;
                          const isActive = pathname === item.href;
                          return (
                            <Link
                              key={item.name}
                              href={item.href}
                              role="menuitem"
                              onClick={() => setServicesOpen(false)}
                              className={`group flex items-start gap-3 p-2.5 rounded-xl transition-all ${isActive
                                  ? "bg-[#faf8f5] text-[#0b131e] ring-1 ring-[#0b131e]/15"
                                  : "text-[#0b131e] hover:bg-[#faf8f5]"
                                }`}
                            >
                              <div className="p-2 rounded-xl bg-slate-100 text-[#0b131e] group-hover:bg-[#0b131e] group-hover:text-[#ffb703] transition-colors shrink-0 mt-0.5">
                                <Icon className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="font-heading text-xs font-bold text-[#0b131e]">
                                  {item.name}
                                </div>
                                <div className="text-[11px] text-[#0b131e]/70 leading-relaxed mt-0.5 font-light">
                                  {item.description}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>

                    {/* Supporting Capabilities */}
                    <div className="pt-2 border-t border-gray-100">
                      <div className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500 border-b border-gray-100 mb-1.5 flex items-center justify-between">
                        <span>Supporting Capabilities</span>
                        <span className="text-[9px] text-slate-400 font-mono">Foundation</span>
                      </div>
                      <div className="space-y-1">
                        {supportingCapabilities.map((item) => {
                          const Icon = item.icon;
                          const isActive = pathname === item.href;
                          return (
                            <Link
                              key={item.name}
                              href={item.href}
                              role="menuitem"
                              onClick={() => setServicesOpen(false)}
                              className={`group flex items-start gap-3 p-2.5 rounded-xl transition-all ${isActive
                                  ? "bg-[#faf8f5] text-[#0b131e] ring-1 ring-[#0b131e]/15"
                                  : "text-[#0b131e] hover:bg-[#faf8f5]"
                                }`}
                            >
                              <div className="p-2 rounded-xl bg-slate-100 text-[#0b131e] group-hover:bg-[#0b131e] group-hover:text-[#ffb703] transition-colors shrink-0 mt-0.5">
                                <Icon className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="font-heading text-xs font-bold text-[#0b131e]">
                                  {item.name}
                                </div>
                                <div className="text-[11px] text-[#0b131e]/70 leading-relaxed mt-0.5 font-light">
                                  {item.description}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 2. About */}
            <Link
              href="/about"
              className={`transition-colors duration-200 ${isLinkActive("/about")
                ? "text-[#ffb703] font-semibold"
                : "hover:text-white text-gray-300"
                }`}
            >
              About
            </Link>

            {/* 3. Journal */}
            <Link
              href="/journal"
              className={`transition-colors duration-200 ${isLinkActive("/journal")
                ? "text-[#ffb703] font-semibold"
                : "hover:text-white text-gray-300"
                }`}
            >
              Journal
            </Link>
          </nav>

          {/* Desktop Primary CTA Button: "Discuss Your Project" */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact">
              <Button
                variant="secondary"
                size="sm"
                className="gap-1.5 text-xs font-semibold px-4 rounded-full"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="h-3.5 w-3.5 text-[#0b131e]" />
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link href="/contact" className="mr-1">
              <Button
                variant="secondary"
                size="xs"
                className="text-[11px] font-semibold px-3 py-1 rounded-full"
              >
                <span>Discuss Project</span>
              </Button>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-menu"
              aria-label="Toggle navigation menu"
              className="p-1.5 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#ffb703]" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer / Popover */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation-menu"
            role="dialog"
            aria-label="Mobile Navigation"
            className="md:hidden mt-2 bg-[#0b131e]/98 backdrop-blur-xl border border-gray-800 rounded-3xl p-5 shadow-2xl text-gray-200 max-h-[82vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-3">
              {/* Services Accordion */}
              <div className="border-b border-gray-800/80 pb-3">
                <button
                  type="button"
                  onClick={() => setMobileServicesAccordion((prev) => !prev)}
                  className="flex items-center justify-between w-full py-2 text-sm font-semibold text-white"
                >
                  <span className={isLinkActive("/services") ? "text-[#ffb703]" : ""}>
                    Services
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${mobileServicesAccordion ? "rotate-180 text-[#ffb703]" : "text-gray-400"
                      }`}
                  />
                </button>

                {mobileServicesAccordion && (
                  <div className="mt-2 space-y-2 pl-2">
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-amber-400/90 pt-1">
                      Digital Marketing
                    </div>
                    {primaryMarketingServices.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-xs text-gray-300 hover:text-white py-1"
                      >
                        {item.name}
                      </Link>
                    ))}

                    <div className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 pt-2 border-t border-gray-800/60">
                      Supporting Capabilities
                    </div>
                    {supportingCapabilities.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-xs text-gray-400 hover:text-white py-1"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* About */}
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 text-sm font-medium border-b border-gray-800/80 ${isLinkActive("/about") ? "text-[#ffb703] font-semibold" : "text-gray-200"
                  }`}
              >
                About
              </Link>

              {/* Journal */}
              <Link
                href="/journal"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 text-sm font-medium border-b border-gray-800/80 ${isLinkActive("/journal") ? "text-[#ffb703] font-semibold" : "text-gray-200"
                  }`}
              >
                Journal
              </Link>

              {/* Contact CTA */}
              <div className="pt-2">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full"
                >
                  <Button variant="secondary" size="default" className="w-full justify-center gap-2">
                    <span>Discuss Your Project</span>
                    <ArrowRight className="w-4 h-4 text-[#0b131e]" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
