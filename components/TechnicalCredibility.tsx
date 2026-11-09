import Link from "next/link";
import {
  Gauge,
  ShieldCheck,
  MousePointerClick,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function TechnicalCredibility() {
  return (
    <section
      id="credibility"
      className="w-full bg-[#faf8f5] py-20 sm:py-24 px-6 sm:px-10 md:px-16 lg:px-24 border-t border-gray-200/80"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="mb-14 text-center md:text-left">
          <Badge variant="secondary" className="mb-3">
            Technical Foundations
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-[#0b131e] mb-4">
            Your Website Is Part of Your Marketing
          </h2>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl font-light leading-relaxed">
            Your website supports almost every part of your digital presence.
            Its performance, structure, accessibility, and usability influence
            how people discover your business and experience it. We pay
            attention to these foundations so your marketing efforts have a
            stronger platform to build on.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Project Evidence */}
          <div className="lg:col-span-7">
            <Card
              variant="tactile"
              className="p-7 sm:p-9 h-full flex flex-col justify-between"
            >
              <CardHeader className="p-0 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="secondary">Project Performance</Badge>
                    <Badge variant="outline">Desktop Lighthouse Audit</Badge>
                  </div>

                  <span className="text-xs font-mono text-gray-500">
                    clothingnexus.com
                  </span>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-gray-500 block">
                      Google Lighthouse
                    </span>
                    <span className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mt-1 block">
                      Performance: 100 / 100
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-700 font-semibold text-sm bg-white border border-gray-200 px-3.5 py-2 rounded-xl shrink-0">
                    <Gauge className="w-5 h-5 text-amber-600 shrink-0" />
                    <span>Performance Score</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-0">
                <CardTitle className="text-xl sm:text-2xl text-[#0b131e] mb-3">
                  Clothing Nexus — Digital Catalogue Platform
                </CardTitle>

                <CardDescription className="text-sm leading-relaxed text-gray-600 font-light mb-4">
                  A digital catalogue platform built with Next.js, featuring
                  optimized image delivery and a responsive user experience. The
                  project demonstrates how thoughtful technical implementation
                  can contribute to a fast and accessible digital experience.
                </CardDescription>

                <div className="p-3.5 rounded-xl bg-slate-100/80 border border-slate-200 text-xs text-gray-700 font-light leading-relaxed mb-4">
                  <strong className="text-gray-900 font-semibold">
                    Understanding the result:{" "}
                  </strong>
                  Lighthouse scores represent performance under specific testing
                  conditions. A lab score is useful for evaluating technical
                  performance, but it does not independently establish
                  real-world Core Web Vitals, search rankings, enquiries, or
                  sales.
                </div>
              </CardContent>

              <CardFooter className="p-0 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                <Link
                  href="https://clothingnexus.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#0b131e] hover:text-amber-800 transition-colors"
                >
                  <span>Explore Live Platform</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 rounded-xl border-2 border-[#0b131e] px-3.5 py-2 text-sm font-semibold text-[#0b131e] hover:bg-[#0b131e] hover:text-white transition-colors"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </CardFooter>
            </Card>
          </div>

          {/* Supporting Principles */}
          <div className="lg:col-span-5 flex flex-col">
            <Card
              variant="tactile"
              className="p-7 h-full flex flex-col justify-between"
            >
              <CardHeader className="p-0 pb-3">
                <Badge variant="amber" className="mb-2">
                  The Technical Foundation
                </Badge>

                <CardTitle className="text-xl text-[#0b131e]">
                  What Makes a Website Work Better?
                </CardTitle>
              </CardHeader>

              <CardContent className="p-0 space-y-5 text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                <div className="flex items-start gap-3">
                  <Gauge className="w-5 h-5 text-[#d99b00] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900 font-medium block mb-1">
                      Performance & Usability
                    </strong>
                    A responsive, fast-loading experience helps visitors access
                    information and interact with your business without
                    unnecessary friction.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#d99b00] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900 font-medium block mb-1">
                      Structure & Search Accessibility
                    </strong>
                    Clear site architecture, accessible content, and sound
                    technical foundations help search engines discover and
                    understand your website.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MousePointerClick className="w-5 h-5 text-[#d99b00] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900 font-medium block mb-1">
                      User Journey & Conversion
                    </strong>
                    Clear messaging, useful landing pages, and intuitive
                    navigation help visitors understand your offering and take
                    the next step.
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-0 pt-5 mt-5 border-t border-gray-100">
                <span className="text-xs text-gray-500 font-mono">
                  Technical quality is part of the bigger growth picture.
                </span>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
