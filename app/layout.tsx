import type { Metadata } from "next";
import { Montserrat, Playfair_Display, Geist, Figtree } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import NotificationBar from "@/components/NotificationBar";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });

// Load Montserrat as primary sans font
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

// Load Playfair Display as secondary serif font
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cinorium",
  description: "Digital goods store, portfolio, blog, and platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema Structured Data Object
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://cinorium.com/#person",
        name: "Muhammad Huzaifa",
        jobTitle: "Digital Creative & SEO Specialist",
        url: "https://cinorium.com",
        sameAs: [
          "https://instagram.com/yourhandle",
          "https://linkedin.com/in/yourhandle",
          "https://youtube.com/@yourchannel",
        ],
        knowsAbout: [
          "Digital Marketing",
          "Search Engine Optimization (SEO)",
          "Web Development",
          "Graphic Design",
          "Content Strategy",
        ],
        worksFor: {
          "@type": "Organization",
          name: "Cinorium",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://cinorium.com/#website",
        url: "https://cinorium.com",
        name: "Muhammad Huzaifa - Digital Portfolio",
        description:
          "Digital marketing, creative thinking and useful digital experiences built around real business needs.",
        publisher: {
          "@id": "https://cinorium.com/#person",
        },
        inLanguage: "en-US",
      },
    ],
  };
  return (
    <html
      lang="en"
      className={cn(
        montserrat.variable,
        playfair.variable,
        "font-sans",
        figtree.variable,
      )}
    >
      <head>
        {/* Schema JSON-LD Injection */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans min-h-screen antialiased">
        <NotificationBar />
        <Header />
        <main className="w-lvw">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
