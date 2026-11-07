import type { Metadata } from "next";
import { ArrowRight, MoveRight, Sparkles, CheckCircle2, ShieldCheck, Compass, Gauge, ShoppingBag } from "lucide-react";
import CinoriumLogo from "@/components/CinoriumLogo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Cinorium Design System & Typography Specimen Preview",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DesignSystemPreviewPage() {
  return (
    <div className="w-full min-h-screen bg-brand-cream text-[#0b131e] font-sans pb-32">
      {/* ── Top Header Notice ────────────────────────────────────────────── */}
      <section className="w-full bg-[#0b131e] text-white py-12 px-6 sm:px-10 border-b border-gray-800">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <Badge variant="default" dot="amber" className="mb-3">
              Stage B · Visual Foundation Preview
            </Badge>
            <h1 className="text-2xl sm:text-3xl font-heading font-bold tracking-tight text-white">
              Cinorium Design System &amp; Component Specimens
            </h1>
            <p className="text-sm text-gray-400 mt-1 max-w-2xl font-light">
              Official vector logo assets, Sora display headings, clean secondary button &amp; badge styling, and baseline-aligned grid cards.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400 font-mono bg-gray-900 border border-gray-800 rounded-lg px-3 py-1.5">
              Route: /preview/design-system
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 sm:px-10 pt-16 space-y-20">
        {/* ── 1. Official Logo & Tagline Treatments ─────────────────────────── */}
        <section className="space-y-6">
          <div>
            <Badge variant="secondary" className="mb-2">
              Brand Identity 01
            </Badge>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Official Vector Logo Assets
            </h2>
            <p className="text-sm text-gray-600 font-light mt-1">
              Official SVG vector assets with custom exclamation &apos;i&apos; stems and vibrant amber accent dots (#ffb703) on both light and dark slate (#0b131e) surfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Main Display with Tagline - Light Surface */}
            <div className="p-8 rounded-3xl border-2 border-black bg-white shadow-sm flex flex-col justify-between min-h-[220px]">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Main Display / Featured (/cinorium-logo-with-tagline.svg)
              </span>
              <div className="py-6">
                <CinoriumLogo variant="dark" withTagline={true} size="lg" asLink={false} />
              </div>
              <span className="text-[11px] text-gray-400 font-mono">
                Asset: /cinorium-logo-with-tagline.svg · Surface: Light (#ffffff / #fdfbf7)
              </span>
            </div>

            {/* Main Display with Tagline - Dark Surface */}
            <div className="p-8 rounded-3xl border border-gray-800 bg-[#0b131e] shadow-xl flex flex-col justify-between min-h-[220px]">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Dark Surface / Footer (/cinorium-logo-with-tagline-light.svg)
              </span>
              <div className="py-6">
                <CinoriumLogo variant="light" withTagline={true} size="lg" asLink={false} />
              </div>
              <span className="text-[11px] text-gray-500 font-mono">
                Asset: /cinorium-logo-with-tagline-light.svg · Surface: Deep Slate (#0b131e)
              </span>
            </div>

            {/* Wordmark Only - Light Surface */}
            <div className="p-8 rounded-3xl border-2 border-black bg-white shadow-sm flex flex-col justify-between min-h-[180px]">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Wordmark Only / Compact (/cinorium-logo.svg)
              </span>
              <div className="py-4">
                <CinoriumLogo variant="dark" withTagline={false} size="md" asLink={false} />
              </div>
              <span className="text-[11px] text-gray-400 font-mono">
                Asset: /cinorium-logo.svg · Compact headers &amp; cards
              </span>
            </div>

            {/* Wordmark Only - Dark Surface (Header) */}
            <div className="p-8 rounded-3xl border border-gray-800 bg-[#0b131e] shadow-xl flex flex-col justify-between min-h-[180px]">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Wordmark Only / Floating Nav (/cinorium-logo-light.svg)
              </span>
              <div className="py-4">
                <CinoriumLogo variant="light" withTagline={false} size="md" asLink={false} />
              </div>
              <span className="text-[11px] text-gray-500 font-mono">
                Asset: /cinorium-logo-light.svg · Floating nav pill &amp; mobile bar
              </span>
            </div>
          </div>
        </section>

        {/* ── 2. Finalized Display Headings: Sora ─────────────────────────── */}
        <section className="space-y-8">
          <div>
            <Badge variant="secondary" className="mb-2">
              Approved Heading Typography 02
            </Badge>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Finalized Display Headings: Sora
            </h2>
            <p className="text-sm text-gray-600 font-light mt-1">
              Sora selected as the display heading font, paired with Figtree body prose, providing geometric structure, authority, and high contrast with 2px borders.
            </p>
          </div>

          <div className="p-8 rounded-3xl border-2 border-black bg-white shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-gray-200">
              <div className="flex items-center gap-2.5">
                <span className="h-3 w-3 rounded-full bg-[#ffb703]" />
                <h3 className="font-sora text-lg font-bold text-gray-900">
                  Sora Display Headings · Figtree Body Prose
                </h3>
              </div>
              <span className="text-xs font-mono font-medium text-slate-800 bg-slate-100 border border-slate-200 rounded-md px-2.5 py-1">
                --font-heading: var(--font-sora) · Finalized
              </span>
            </div>

            <div className="space-y-4">
              <h4 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
                Built for Visibility. Designed for Growth.
              </h4>
              <p className="font-sans text-base text-gray-700 leading-relaxed font-light max-w-3xl">
                Cinorium is a digital marketing agency with a strong web development foundation.
                We help businesses turn search visibility into qualified inquiries and measurable revenue.
              </p>
            </div>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="font-sora text-base font-bold text-gray-900 block">
                  A Stronger Tech Foundation. A Smarter Marketing Engine.
                </span>
                <p className="font-sans text-xs text-gray-600 leading-relaxed">
                  Web engineering and search visibility synchronized into an integrated acquisition system.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="font-sora text-base font-bold text-gray-900 block">
                  Why Websites Fail Beyond Appearance
                </span>
                <p className="font-sans text-xs text-gray-600 leading-relaxed">
                  Without discoverability, rapid load times, and structured buyer journeys, digital investments underperform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. Modak Decorative Numerals ─────────────────────────────────── */}
        <section className="space-y-6">
          <div>
            <Badge variant="secondary" className="mb-2">
              Numerical Accents 03
            </Badge>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Modak Numerical Accents
            </h2>
            <p className="text-sm text-gray-600 font-light mt-1">
              Applied strictly to numbers and oversized numerical markers (#ffb703) to create bold visual anchor points.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl border-2 border-black bg-white shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="font-modak text-6xl text-[#ffb703] leading-none select-none">
                  1
                </span>
                <Badge variant="secondary">Step 01</Badge>
              </div>
              <h3 className="font-sora font-bold text-lg text-gray-900 mt-4">
                Slow Loading Pages
              </h3>
              <p className="text-xs text-gray-600 font-light mt-2">
                If your site takes too long to load, visitors leave before learning what you offer.
              </p>
              <div className="mt-4">
                <Badge variant="subtle">Speed Friction</Badge>
              </div>
            </div>

            <div className="p-6 rounded-3xl border-2 border-black bg-white shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="font-modak text-6xl text-[#ffb703] leading-none select-none">
                  2
                </span>
                <Badge variant="secondary">Step 02</Badge>
              </div>
              <h3 className="font-sora font-bold text-lg text-gray-900 mt-4">
                Confusing Navigation
              </h3>
              <p className="text-xs text-gray-600 font-light mt-2">
                If prospective clients cannot find answers, they won&apos;t inquire.
              </p>
              <div className="mt-4">
                <Badge variant="subtle">Usability</Badge>
              </div>
            </div>

            <div className="p-6 rounded-3xl border-2 border-black bg-white shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="font-modak text-6xl text-[#ffb703] leading-none select-none">
                  3
                </span>
                <Badge variant="secondary">Step 03</Badge>
              </div>
              <h3 className="font-sora font-bold text-lg text-gray-900 mt-4">
                Invisible to Search
              </h3>
              <p className="text-xs text-gray-600 font-light mt-2">
                A beautiful website without organic search visibility generates zero customer pipeline.
              </p>
              <div className="mt-4">
                <Badge variant="subtle">Discovery</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. Eyebrow & Badge Treatments Overhaul ───────────────────────── */}
        <section className="space-y-6">
          <div>
            <Badge variant="secondary" className="mb-2">
              Badge System 04
            </Badge>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Badge Styling Suite (Zero Pale Yellow Tint)
            </h2>
            <p className="text-sm text-gray-600 font-light mt-1">
              Pale amber-tint (#fff8e7) backgrounds completely eliminated. Replaced with Deep Slate (#0b131e), Clean Slate Outline, and Solid Amber (#ffb703).
            </p>
          </div>

          <div className="p-8 rounded-3xl border-2 border-black bg-white shadow-sm space-y-6">
            <div className="flex flex-wrap items-center gap-4">
              <Badge variant="default" dot="amber">
                Primary: Deep Slate Eyebrow
              </Badge>

              <Badge variant="secondary">
                Secondary: Clean Slate Outline
              </Badge>

              <Badge variant="amber">
                High-Impact: Solid Amber (#ffb703)
              </Badge>

              <Badge variant="outline">
                Tactile: 2px Outline Pill
              </Badge>

              <Badge variant="subtle">
                Neutral: Slate Subtle
              </Badge>

              <Badge variant="success" dot="emerald">
                Live Production
              </Badge>
            </div>

            <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-gray-500 font-light">
              <p>
                <strong>Standard:</strong> <code>variant=&quot;default&quot;</code> (deep slate + amber dot) for section eyebrows; <code>variant=&quot;secondary&quot;</code> (slate outline) for sub-tags; <code>variant=&quot;amber&quot;</code> for callout pills.
              </p>
              <span className="font-mono text-gray-400">
                Zero pale yellow tint · Clean contrast
              </span>
            </div>
          </div>
        </section>

        {/* ── 5. Button Suite Overhaul ─────────────────────────────────────── */}
        <section className="space-y-6">
          <div>
            <Badge variant="secondary" className="mb-2">
              Interactive Elements 05
            </Badge>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Button Hierarchy &amp; Secondary Variant
            </h2>
            <p className="text-sm text-gray-600 font-light mt-1">
              Standardized button variants with rounded-2xl geometry. Secondary variant updated to Solid Amber Accent or Clean Slate Outline.
            </p>
          </div>

          <div className="p-8 rounded-3xl border-2 border-black bg-white shadow-sm space-y-8">
            <div className="flex flex-wrap items-center gap-4">
              {/* Primary */}
              <Button variant="default" size="lg" className="gap-2">
                <span>Primary: Discuss Your Project</span>
                <ArrowRight className="h-4 w-4 text-[#ffb703]" />
              </Button>

              {/* Secondary: Solid Amber Accent */}
              <Button variant="secondary" size="lg" className="gap-2">
                <span>Secondary: Solid Amber (#ffb703)</span>
                <ArrowRight className="h-4 w-4 text-[#0b131e]" />
              </Button>

              {/* Slate Outline */}
              <Button variant="slateOutline" size="lg" className="gap-2">
                <span>Slate Outline (Border 1px #0b131e)</span>
                <MoveRight className="h-4 w-4 text-[#0b131e]" />
              </Button>

              {/* Tactile 2px Outline */}
              <Button variant="outline" size="lg" className="gap-2">
                <span>Tactile 2px Black Border</span>
              </Button>

              {/* Dark Slate Pill */}
              <Button variant="dark" size="lg">
                <span>Dark Slate Pill</span>
              </Button>

              {/* Ghost */}
              <Button variant="ghost" size="lg">
                <span>Ghost (Slate-100 Hover)</span>
              </Button>
            </div>

            <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center gap-3 text-xs text-gray-500">
              <span>Variants: <code>default</code> (black pill), <code>secondary</code> (solid amber accent), <code>slateOutline</code> (1px slate border), <code>outline</code> (2px black), <code>ghost</code> (slate-100 hover).</span>
            </div>
          </div>
        </section>

        {/* ── 6. Card Alignment & Height Uniformity ─────────────────────────── */}
        <section className="space-y-6">
          <div>
            <Badge variant="secondary" className="mb-2">
              Surfaces &amp; Containers 06
            </Badge>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Card Alignment &amp; Uniform Height Test
            </h2>
            <p className="text-sm text-gray-600 font-light mt-1">
              Demonstrating <code>flex flex-col justify-between h-full</code> with <code>CardContent flex-1</code> and <code>CardFooter mt-auto</code>. Buttons across adjacent cards with varying text lengths strictly align on the exact same horizontal baseline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Card 1: Short content */}
            <Card variant="tactile">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="default" dot="amber">
                    Search SEO
                  </Badge>
                  <Compass className="h-5 w-5 text-gray-400" />
                </div>
                <CardTitle className="mt-2">
                  Technical SEO Architecture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Clean site architecture, indexability, and schema metadata to ensure crawl efficiency.
                </CardDescription>
              </CardContent>
              <CardFooter className="flex items-center justify-between border-t border-gray-100">
                <Button variant="slateOutline" size="sm" className="w-full justify-between">
                  <span>Explore SEO</span>
                  <MoveRight className="h-3.5 w-3.5 text-[#0b131e]" />
                </Button>
              </CardFooter>
            </Card>

            {/* Card 2: Medium/Long content */}
            <Card variant="tactile">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">
                    Web Foundation
                  </Badge>
                  <Gauge className="h-5 w-5 text-gray-400" />
                </div>
                <CardTitle className="mt-2">
                  High-Performance Web Platforms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Engineered with Next.js and sub-second loading speeds. Speed directly impacts Google Core Web Vitals, visitor bounce rates, and paid ad quality scores, creating a dependable foundation for all marketing campaigns.
                </CardDescription>
              </CardContent>
              <CardFooter className="flex items-center justify-between border-t border-gray-100">
                <Button variant="slateOutline" size="sm" className="w-full justify-between">
                  <span>Explore Web Dev</span>
                  <MoveRight className="h-3.5 w-3.5 text-[#0b131e]" />
                </Button>
              </CardFooter>
            </Card>

            {/* Card 3: Dark variant with varying content */}
            <Card variant="dark">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="amber">
                    AI Search
                  </Badge>
                  <ShieldCheck className="h-5 w-5 text-[#ffb703]" />
                </div>
                <CardTitle className="text-white mt-2">
                  Generative Engine Optimization (GEO)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">
                  Entity authority and knowledge graph modeling to position your brand inside ChatGPT, Perplexity, and Google AI Overviews.
                </CardDescription>
              </CardContent>
              <CardFooter className="flex items-center justify-between border-t border-gray-800">
                <Button variant="secondary" size="sm" className="w-full justify-between">
                  <span>Explore GEO</span>
                  <MoveRight className="h-3.5 w-3.5 text-[#0b131e]" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* ── 7. Brand Color Tokens ────────────────────────────────────────── */}
        <section className="space-y-6">
          <div>
            <Badge variant="secondary" className="mb-2">
              Color Architecture 07
            </Badge>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Cinorium Palette &amp; Contrast Values
            </h2>
            <p className="text-sm text-gray-600 font-light mt-1">
              Established brand palette ensuring high contrast and WCAG AA accessibility without muddy yellow washes.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl border-2 border-black bg-[#ffb703] text-black">
              <span className="block text-xs uppercase font-bold tracking-wider mb-8">Brand Amber</span>
              <span className="block font-mono text-xs font-bold">#ffb703</span>
              <span className="block text-[11px] opacity-75">Accent / Highlights</span>
            </div>

            <div className="p-4 rounded-2xl border-2 border-black bg-[#0b131e] text-white">
              <span className="block text-xs uppercase font-bold tracking-wider mb-8">Deep Slate</span>
              <span className="block font-mono text-xs font-bold">#0b131e</span>
              <span className="block text-[11px] opacity-75">Surfaces / Contrast</span>
            </div>

            <div className="p-4 rounded-2xl border-2 border-black bg-white text-gray-900">
              <span className="block text-xs uppercase font-bold tracking-wider mb-8">Crisp White</span>
              <span className="block font-mono text-xs font-bold">#ffffff</span>
              <span className="block text-[11px] opacity-75">Primary Cards</span>
            </div>

            <div className="p-4 rounded-2xl border-2 border-black bg-[#fdfbf7] text-gray-900">
              <span className="block text-xs uppercase font-bold tracking-wider mb-8">Warm Cream</span>
              <span className="block font-mono text-xs font-bold">#fdfbf7</span>
              <span className="block text-[11px] opacity-75">Page Background</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
