import type { Metadata } from "next";
import { Geist, Figtree } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import SignalsTracker from "@/components/signals/SignalsTracker";

const SignalsCaptureModal = dynamic(
  () => import("@/components/signals/SignalsCaptureModal")
);

const siteUrl = "https://www.cinorium.com";
const siteName = "Cinorium";
const personId = `${siteUrl}/#person`;
const organizationId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const siteDescription =
  "Cinorium is a technology-driven digital marketing agency. We combine web development, SEO, and strategic marketing to build digital systems that look right, function right, and drive business growth.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cinorium.com"),

  title: {
    default: "Cinorium — Technology-Driven Digital Marketing & Web Development",
    template: "%s | Cinorium",
  },

  description: siteDescription,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: "Cinorium | Built for Visibility. Designed for Growth.",
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
    title: "Cinorium | Built for Visibility. Designed for Growth.",
    description: siteDescription,
    images: ["/og-images/og-image.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: "Cinorium",
      url: siteUrl,
      logo: `${siteUrl}/og-images/og-image.webp`,
      description: siteDescription,
      slogan: "Built for Visibility. Designed for Growth.",
      knowsAbout: [
        "Digital Marketing",
        "Search Engine Optimization (SEO)",
        "Technical SEO",
        "Website Development",
        "WordPress Development",
        "Content Strategy",
        "Conversion Rate Optimization",
        "Answer Engine Optimization (AEO)",
        "Generative Engine Optimization (GEO)",
        "E-commerce Strategy",
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
      inLanguage: "en",
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
        geist.variable,
        figtree.variable,
        "font-sans",
      )}
    >
      <body className="min-h-screen font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        {/* Vercel Insights */}
        <SpeedInsights />
        <Analytics />

        {/* Cinorium Signals: First-Party Behaviour & Contextual Capture */}
        <SignalsTracker />
        <SignalsCaptureModal />

        <Header />

        <main className="w-full">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
