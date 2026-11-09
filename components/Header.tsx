"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ArrowRight,
  House,
  Layers,
  UserRound,
  BookOpen,
  Mail,
} from "lucide-react";

import CinoriumLogo from "@/components/CinoriumLogo";
import { Button } from "@/components/ui/button";

const primaryServices = [
  { name: "Services Overview", href: "/services" },
  { name: "Digital Marketing Strategy", href: "/marketing-strategy" },
  { name: "Search Visibility & SEO", href: "/seo-services" },
  { name: "Content & Social Media", href: "/content-marketing" },
  { name: "Paid Advertising & Acquisition", href: "/paid-advertising" },
  { name: "AI Search Visibility (AEO / GEO)", href: "/services#ai-search" },
];

const supportingServices = [
  { name: "Website Development & Tech Optimization", href: "/web-development" },
  {
    name: "Graphic Design & Visual Communication",
    href: "/services#visual-communication",
  },
];

const mobileLinks = [
  { name: "Home", href: "/", icon: House },
  { name: "Services", href: "/services", icon: Layers },
  { name: "About", href: "/about", icon: UserRound },
  { name: "Journal", href: "/journal", icon: BookOpen },
  { name: "Contact", href: "/contact", icon: Mail },
];

export default function Header() {
  const pathname = usePathname() ?? "/";
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown after navigation.
  useEffect(() => {
    setServicesOpen(false);
  }, [pathname]);

  // Close dropdown when clicking outside or pressing Escape.
  useEffect(() => {
    if (!servicesOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setServicesOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [servicesOpen]);

  // Active page detection, including nested routes.
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";

    if (href === "/services") {
      return (
        pathname === "/services" ||
        pathname.startsWith("/services/") ||
        pathname === "/marketing-strategy" ||
        pathname.startsWith("/marketing-strategy/") ||
        pathname === "/content-marketing" ||
        pathname.startsWith("/content-marketing/") ||
        pathname === "/paid-advertising" ||
        pathname.startsWith("/paid-advertising/") ||
        pathname === "/seo-services" ||
        pathname.startsWith("/seo-services/") ||
        pathname === "/web-development" ||
        pathname.startsWith("/web-development/")
      );
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      {/* Floating Header */}
      <header className="fixed left-1/2 top-4 z-40 w-[94%] max-w-6xl -translate-x-1/2 sm:top-6">
        <div className="flex items-center justify-between rounded-full border border-gray-800/80 bg-[#0b131e]/95 px-4 py-2.5 text-gray-200 shadow-2xl backdrop-blur-md sm:px-6 sm:py-3">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Cinorium Home"
            className="inline-flex shrink-0 mx-auto md:mx-0"
          >
            <CinoriumLogo
              variant="light"
              size="sm"
              withTagline={false}
              className="inline-flex shrink-0"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-6 text-sm font-medium text-gray-300 md:flex"
          >
            {/* Services Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <div className="flex items-center gap-1">
                <Link
                  href="/services"
                  className={`transition-colors duration-200 ${
                    isActive("/services")
                      ? "font-semibold text-[#ffb703]"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  Services
                </Link>

                <button
                  type="button"
                  aria-label="Toggle services dropdown"
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen((prev) => !prev)}
                  className="rounded p-1 text-gray-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      servicesOpen ? "rotate-180 text-[#ffb703]" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Simple Services Dropdown */}
              {servicesOpen && (
                <div className="absolute left-1/2 top-full z-50 w-[280px] -translate-x-1/2 pt-3">
                  <div className="overflow-hidden rounded-xl border border-gray-200 bg-[#fcfbf7] p-3 shadow-xl">
                    <p className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                      Digital Marketing
                    </p>

                    <div className="space-y-0.5">
                      {primaryServices.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setServicesOpen(false)}
                          className="block rounded-lg px-2.5 py-2 text-xs font-medium text-[#0b131e] transition-colors hover:bg-[#ffb703]/15 hover:text-[#0b131e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb703]"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>

                    <div className="my-2 border-t border-gray-200" />

                    <p className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                      Supporting Capabilities
                    </p>

                    <div className="space-y-0.5">
                      {supportingServices.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setServicesOpen(false)}
                          className="block rounded-lg px-2.5 py-2 text-xs font-medium text-[#0b131e] transition-colors hover:bg-[#ffb703]/15 hover:text-[#0b131e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb703]"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* About */}
            <Link
              href="/about"
              className={`transition-colors duration-200 ${
                isActive("/about")
                  ? "font-semibold text-[#ffb703]"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              About
            </Link>

            {/* Journal */}
            <Link
              href="/journal"
              className={`transition-colors duration-200 ${
                isActive("/journal")
                  ? "font-semibold text-[#ffb703]"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Journal
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Link href="/contact">
              <Button
                variant="secondary"
                size="sm"
                className="gap-1.5 rounded-full px-4 text-xs font-semibold"
              >
                Discuss Your Project
                <ArrowRight className="h-3.5 w-3.5 text-[#0b131e]" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav
        aria-label="Mobile navigation"
        className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-700/70 bg-[#0b131e]/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_25px_rgba(0,0,0,0.12)] backdrop-blur-xl md:hidden"
      >
        <div className="mx-auto grid min-h-[64px] max-w-lg grid-cols-5">
          {mobileLinks.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-label={item.name}
                aria-current={active ? "page" : undefined}
                className={`flex min-h-[64px] flex-col items-center justify-center gap-1 px-1 py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#ffb703] ${
                  active
                    ? "text-[#ffb703]"
                    : "text-gray-400 hover:text-gray-100"
                }`}
              >
                <Icon
                  className={`h-[19px] w-[19px] ${
                    active ? "stroke-[2.3]" : "stroke-[1.8]"
                  }`}
                />

                <span
                  className={`text-[10px] leading-none ${
                    active ? "font-semibold" : "font-medium"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
