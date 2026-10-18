import type { Metadata } from "next";
import { Montserrat, Playfair_Display, Figtree } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NotificationBar from "@/components/NotificationBar";
import { cn } from "@/lib/utils";

const siteUrl = "https://cinorium.com";
const siteName = "Cinorium";
const personId = `${siteUrl}/#person`;
const organizationId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const siteDescription =
  "Muhammad Huzaifa helps businesses strengthen their online presence through search visibility, strategic content, effective websites, and creative execution.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Muhammad Huzaifa | Digital Marketing & Creative Web",
    template: "%s | Muhammad Huzaifa",
  },

  description: siteDescription,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: "Muhammad Huzaifa | Digital Marketing & Creative Web",
    description: siteDescription,
    locale: "en_US",
    images: [
      {
        url: "/og-images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Muhammad Huzaifa — Digital Marketing, Web and Creative Work",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Muhammad Huzaifa | Digital Marketing & Creative Web",
    description: siteDescription,
    images: ["/og-images/og-image.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: "Muhammad Huzaifa",
      url: siteUrl,
      jobTitle: "Digital Marketing & Creative Professional",
      description:
        "A digital creative working across digital marketing, search visibility, web development, graphic design, content, and publishing.",
      knowsAbout: [
        "Digital Marketing",
        "Search Engine Optimization (SEO)",
        "Local SEO",
        "Content Strategy",
        "Social Media Marketing",
        "Answer Engine Optimization (AEO)",
        "Generative Engine Optimization (GEO)",
        "Web Development",
        "Graphic Design",
        "Digital Publishing",
        "Amazon Kindle Direct Publishing",
      ],
      worksFor: {
        "@id": organizationId,
      },
    },
    {
      "@type": "Organization",
      "@id": organizationId,
      name: "Cinorium",
      url: siteUrl,
      description:
        "A digital brand focused on marketing, search visibility, content, web experiences, creative work, and educational resources.",
      founder: {
        "@id": personId,
      },
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteUrl,
      name: "Cinorium",
      alternateName: "Muhammad Huzaifa",
      description: siteDescription,
      inLanguage: "en",
      publisher: {
        "@id": organizationId,
      },
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
        montserrat.variable,
        playfair.variable,
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

        <NotificationBar />
        <Header />

        <main className="w-full">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
