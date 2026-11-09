import type { Metadata, Viewport } from "next";
import { Figtree, Sora, Modak } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import SignalsTracker from "@/components/signals/SignalsTracker";

const SignalsCaptureModal = dynamic(
  () => import("@/components/signals/SignalsCaptureModal"),
);

const siteUrl = "https://www.cinorium.com";
const siteName = "Cinorium";
// const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "G-CM37CKLDL4"; // temporarily disabled
const personId = `${siteUrl}/#person`;
const organizationId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b131e",
};

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const modak = Modak({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-modak",
  display: "swap",
  preload: false,
});

const siteDescription =
  "Cinorium is a digital marketing agency helping businesses improve search visibility, customer acquisition, and measurable revenue growth through strategic SEO, AI search visibility, and high-performance web foundations.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cinorium.com"),

  title: {
    default: "Cinorium — Digital Marketing Agency for Business Growth",
    template: "%s | Cinorium",
  },

  description: siteDescription,

  alternates: {
    canonical: "https://www.cinorium.com",
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: "Cinorium — Digital Marketing Agency for Business Growth",
    description: siteDescription,
    locale: "en_US",
    images: [
      {
        url: "/og-images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Cinorium — Built for Visibility. Designed for Growth.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cinorium — Digital Marketing Agency for Business Growth",
    description: siteDescription,
    images: ["/og-images/og-image.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": organizationId,
      name: "Cinorium",
      alternateName: "Cinorium Digital Marketing Agency",
      url: siteUrl,
      logo: `${siteUrl}/cinorium-logo.svg`,
      image: `${siteUrl}/og-images/og-image.webp`,
      description: siteDescription,
      slogan: "Built for Visibility. Designed for Growth.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Karachi",
        addressRegion: "Sindh",
        addressCountry: "PK",
      },
      areaServed: [
        {
          "@type": "Country",
          name: "Pakistan",
        },
        {
          "@type": "Country",
          name: "United States",
        },
        {
          "@type": "Country",
          name: "United Kingdom",
        },
        {
          "@type": "Country",
          name: "United Arab Emirates",
        },
      ],
      knowsAbout: [
        "Digital Marketing Strategy",
        "Search Engine Optimization (SEO)",
        "Technical SEO Audits",
        "Answer Engine Optimization (AEO)",
        "Generative Engine Optimization (GEO)",
        "Website Development",
        "Core Web Vitals Optimization",
        "Conversion Rate Optimization (CRO)",
        "Visual Communication & Branding",
      ],
      founder: {
        "@id": personId,
      },
      sameAs: [
        "https://www.linkedin.com/in/cinorium/",
        "https://www.instagram.com/cinorium_/",
        "https://www.youtube.com/@cinoriumacademy",
      ],
    },
    {
      "@type": "Person",
      "@id": personId,
      name: "Muhammad Huzaifa",
      url: `${siteUrl}/about`,
      jobTitle: "Founder & Technical Director",
      worksFor: {
        "@id": organizationId,
      },
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteUrl,
      name: "Cinorium",
      alternateName: "Cinorium Digital Marketing Agency",
      publisher: {
        "@id": organizationId,
      },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        figtree.variable,
        sora.variable,
        modak.variable,
        "font-sans",
      )}
    >
      <body className="min-h-screen font-sans antialiased">
        {/* Skip to Main Content Link for Keyboard Accessibility (WCAG 2.4.1) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#ffb703] focus:text-[#0b131e] focus:rounded-full focus:font-semibold focus:shadow-xl focus:outline-none"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        {/* Google Consent Mode / CMP — temporarily disabled */}
        {/* <Script id="choice-cmp-config" strategy="beforeInteractive">...</Script> */}

        {/* Vercel Insights — temporarily disabled */}
        {/* <SpeedInsights /> */}
        {/* <Analytics /> */}

        {/* Google Analytics 4 — temporarily disabled */}
        {/* <Script src="https://www.googletagmanager.com/gtag/..." strategy="afterInteractive" /> */}

        {/* Cinorium Signals: First-Party Behaviour & Contextual Capture */}
        <SignalsTracker />
        <SignalsCaptureModal />

        <Header />

        <main id="main-content" className="w-full">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
