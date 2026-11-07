import Link from "next/link";
import { Gauge, CheckCircle2, ShieldCheck, ArrowRight, ExternalLink } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
            Verified Technical Standards
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-[#0b131e] mb-4">
            Speed as a Strategic Marketing Advantage
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl font-light leading-relaxed">
            Search engines reward responsiveness and buyers abandon delay. We engineer every marketing platform to verifiable performance benchmarks—ensuring speed compounds your organic ranking and ad ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Evidence Card: Clothing Nexus 100/100 Desktop Lighthouse */}
          <div className="lg:col-span-7">
            <Card variant="tactile" className="p-7 sm:p-9 h-full flex flex-col justify-between">
              <CardHeader className="p-0 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="success" dot="emerald">
                      Live Production Audit
                    </Badge>
                    <Badge variant="secondary">
                      Desktop Report
                    </Badge>
                  </div>
                  <span className="text-xs font-mono text-gray-500">
                    clothingnexus.com
                  </span>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-gray-500 block">
                      Google Lighthouse Score
                    </span>
                    <span className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mt-1 block">
                      Performance: 100 / 100
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-800 font-semibold text-sm bg-emerald-50 border border-emerald-200 px-3.5 py-2 rounded-xl shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>Passing All Core Web Vitals</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-0">
                <CardTitle className="text-xl sm:text-2xl text-[#0b131e] mb-3">
                  Clothing Nexus — Digital Catalogue Platform
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed text-gray-600 font-light mb-4">
                  Built on modern Next.js App Router architecture. Featuring automated image optimization via CDN, zero cumulative layout shift (CLS 0.0), and instant paint metrics that maximize visitor engagement.
                </CardDescription>

                <div className="p-3.5 rounded-xl bg-slate-100/80 border border-slate-200 text-xs text-gray-700 font-light leading-relaxed mb-4">
                  <strong className="text-gray-900 font-semibold">Performance Context: </strong>
                  Lighthouse scores evaluate technical delivery and Core Web Vitals under controlled lab conditions. They represent technical excellence that supports—rather than directly guarantees—commercial rankings or sales conversions.
                </div>
              </CardContent>

              <CardFooter className="p-0 pt-4 border-t border-gray-100 flex items-center justify-between">
                <Link
                  href="https://clothingnexus.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#0b131e] hover:text-amber-800 transition-colors"
                >
                  <span>Visit Live Platform</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
                <Link href="/work">
                  <Button variant="slateOutline" size="sm" className="gap-1.5">
                    <span>Explore All Projects</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          {/* Side Explanatory Pillar Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Card variant="tactile" className="p-7 flex-1 flex flex-col justify-between">
              <CardHeader className="p-0 pb-3">
                <Badge variant="amber" className="mb-2">
                  The Conversion Equation
                </Badge>
                <CardTitle className="text-xl text-[#0b131e]">
                  Why Technical Speed Powers Marketing
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-3.5 text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <Gauge className="w-4 h-4 text-[#ffb703] shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-gray-900 font-medium">Bounce Rate Reduction: </strong>
                    Google research confirms that as page load time goes from 1s to 3s, the probability of a mobile bounce increases by 32%.
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#ffb703] shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-gray-900 font-medium">Search Crawl Efficiency: </strong>
                    Search bots crawl and index fast, lightweight pages more frequently, accelerating new content discovery.
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#ffb703] shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-gray-900 font-medium">Paid Ad Efficiency: </strong>
                    High landing page experience scores reduce target CPC bids on Google Ads and Meta campaigns.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="p-0 pt-4 border-t border-gray-100">
                <span className="text-xs text-gray-500 font-mono">
                  Engineered to convert traffic into revenue
                </span>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

