// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://cinorium.com/" },
    { url: "https://cinorium.com/contact" },
  ];
}
