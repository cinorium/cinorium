import React from "react";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import CinoriumLogo from "@/components/CinoriumLogo";

// Custom SVG Icons for Social Links
function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function YoutubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#0b131e] text-gray-300 pt-16 pb-28 md:pt-20 md:pb-16 px-6 sm:px-10 md:px-16 lg:px-24 border-t border-gray-800/60">
      <div className="max-w-6xl mx-auto flex flex-col gap-14">
        {/* Top CTA Row */}
        {/* <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-gray-800/80">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#ffb703] block mb-2">
              Digital Marketing Agency
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-white mb-2">
              Built for Visibility. Designed for Growth.
            </h2>
            <p className="text-sm sm:text-base text-gray-400 font-light max-w-xl">
              Turn modern customer search behavior into qualified enquiries and
              measurable revenue.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#0b131e] hover:bg-gray-800 border border-gray-700 px-5 py-3 rounded-2xl transition-colors group shrink-0"
          >
            <span>Discuss Your Project</span>
            <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#ffb703]" />
          </Link>
        </div> */}

        {/* 4-Column Structured Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand & Tagline + Brief Positioning Statement */}
          <div className="space-y-4">
            <CinoriumLogo
              variant="light"
              size="md"
              withTagline={false}
              className="mb-2"
            />
            <p className="text-xs text-[#ffb703] font-semibold tracking-wide uppercase">
              Built for Visibility. Designed for Growth.
            </p>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              Cinorium is a digital marketing agency helping ambitious
              businesses build organic visibility, acquire qualified leads, and
              turn web traffic into predictable revenue. Web development and
              technical SEO serve as our supporting engineering foundation.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2 text-gray-400">
              <a
                href="https://www.instagram.com/cinorium_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cinorium Instagram"
                className="hover:text-[#ffb703] transition-colors p-1"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/cinorium/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cinorium LinkedIn"
                className="hover:text-[#ffb703] transition-colors p-1"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@cinoriumacademy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cinorium Academy YouTube"
                className="hover:text-[#ffb703] transition-colors p-1"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Capabilities (Digital Marketing as Primary, Tech as Supporting) */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Capabilities
            </h3>
            <ul className="space-y-1.5 text-xs text-gray-400 font-light">
              <li>
                <Link
                  href="/marketing-strategy"
                  className="hover:text-white transition-colors block py-0.5"
                >
                  Digital Marketing Strategy
                </Link>
              </li>
              <li>
                <Link
                  href="/seo-services"
                  className="hover:text-white transition-colors block py-0.5"
                >
                  Search Visibility &amp; Technical SEO
                </Link>
              </li>
              <li>
                <Link
                  href="/content-marketing"
                  className="hover:text-white transition-colors block py-0.5"
                >
                  Content &amp; Social Media
                </Link>
              </li>
              <li>
                <Link
                  href="/paid-advertising"
                  className="hover:text-white transition-colors block py-0.5"
                >
                  Paid Advertising &amp; Acquisition
                </Link>
              </li>
              <li>
                <Link
                  href="/services#ai-search"
                  className="hover:text-white transition-colors block py-0.5"
                >
                  AI Search Visibility (AEO / GEO)
                </Link>
              </li>
              <li className="pt-2 border-t border-gray-800/60">
                <span className="text-[10px] uppercase font-semibold text-gray-400 block mb-1">
                  Supporting Capabilities
                </span>
                <Link
                  href="/web-development"
                  className="hover:text-white transition-colors block py-1"
                >
                  Web Development &amp; Tech Optimization
                </Link>
                <Link
                  href="/services#visual-communication"
                  className="hover:text-white transition-colors block py-1"
                >
                  Graphic Design &amp; Visual Communication
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs text-gray-400 font-light">
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/journal"
                  className="hover:text-white transition-colors"
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Legal
            </h3>
            <ul className="space-y-2 text-xs text-gray-400 font-light">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/return-policy"
                  className="hover:text-white transition-colors"
                >
                  Return &amp; Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Tagline */}
        <div className="pt-8 border-t border-gray-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-light">
          <p>© 2026 Cinorium. All rights reserved.</p>
          <p className="text-gray-400">
            Built for Visibility. Designed for Growth.
          </p>
        </div>
      </div>
    </footer>
  );
}
