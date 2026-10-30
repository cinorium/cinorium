import { SignalCampaign } from "./types";

export const SIGNAL_CAMPAIGNS: SignalCampaign[] = [
  {
    id: "web-development",
    title: "Planning a New Business Website?",
    tagline: "Custom Next.js & WordPress Development",
    description:
      "Get a practical review of your site architecture, performance goals, and tech stack options before writing a line of code.",
    ctaText: "Request Website Consultation",
    interestArea: "Website Development",
    triggerMinScore: 20,
    relevantPathPrefixes: ["/web-development", "/work"],
  },
  {
    id: "technical-seo",
    title: "Want to Uncover Technical SEO Obstacles?",
    tagline: "Search Visibility & Crawl Diagnostics",
    description:
      "Identify rendering issues, indexing blockers, and structural bottlenecks affecting your organic search rankings.",
    ctaText: "Request Technical Assessment",
    interestArea: "SEO & Search Visibility",
    triggerMinScore: 20,
    relevantPathPrefixes: ["/seo-services", "/journal"],
  },
  {
    id: "digital-growth",
    title: "Need a Clearer Growth Direction?",
    tagline: "Technology-Driven Digital Marketing",
    description:
      "Align your website design with targeted organic visibility and measurable enquiry generation.",
    ctaText: "Discuss Your Marketing Goals",
    interestArea: "Digital Marketing & Growth",
    triggerMinScore: 20,
    relevantPathPrefixes: ["/services", "/about"],
  },
  {
    id: "general-consultation",
    title: "Have a Project in Mind?",
    tagline: "Direct Founder Consultation",
    description:
      "Discuss your website or organic visibility goals with founder Muhammad Huzaifa for an honest, actionable plan.",
    ctaText: "Schedule a Quick Discussion",
    interestArea: "General Consultation",
    triggerMinScore: 25,
    relevantPathPrefixes: ["/"],
  },
];

export function resolveContextualCampaign(
  currentPath: string,
  lastCategory?: string
): SignalCampaign {
  // If lastCategory matches an interestArea directly
  if (lastCategory) {
    const match = SIGNAL_CAMPAIGNS.find(
      (c) => c.interestArea.toLowerCase() === lastCategory.toLowerCase()
    );
    if (match) return match;
  }

  // Match by path prefix
  for (const campaign of SIGNAL_CAMPAIGNS) {
    for (const prefix of campaign.relevantPathPrefixes) {
      if (prefix !== "/" && currentPath.startsWith(prefix)) {
        return campaign;
      }
    }
  }

  // Fallback to general consultation
  return (
    SIGNAL_CAMPAIGNS.find((c) => c.id === "general-consultation") ||
    SIGNAL_CAMPAIGNS[0]
  );
}

