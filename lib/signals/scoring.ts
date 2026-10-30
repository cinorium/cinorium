import { EventType, InterestLevel } from "./types";

export interface ScoringRule {
  eventType: EventType;
  pathMatch?: (path: string) => boolean;
  score: number;
  description: string;
}

export const SCORING_RULES: ScoringRule[] = [
  {
    eventType: "contact_page_view",
    pathMatch: (path) => path.startsWith("/contact"),
    score: 20,
    description: "Visited the contact page",
  },
  {
    eventType: "service_page_view",
    pathMatch: (path) =>
      path.startsWith("/web-development") ||
      path.startsWith("/seo-services") ||
      path.startsWith("/services"),
    score: 15,
    description: "Visited a primary service page",
  },
  {
    eventType: "primary_cta_click",
    score: 25,
    description: "Clicked a key action CTA button",
  },
  {
    eventType: "form_start",
    score: 15,
    description: "Began interacting with a contact or consultation form",
  },
  {
    eventType: "scroll_depth",
    score: 5,
    description: "Scrolled deeply (70%+) through high-intent or journal content",
  },
  {
    eventType: "page_view",
    score: 2,
    description: "General page view across the website",
  },
];

export const INTEREST_THRESHOLDS = {
  MEDIUM: 25,
  HIGH: 50,
};

export function calculateScoreDelta(
  eventType: EventType,
  pagePath: string
): number {
  // Check path-specific rules first
  for (const rule of SCORING_RULES) {
    if (rule.eventType === eventType) {
      if (rule.pathMatch) {
        if (rule.pathMatch(pagePath)) {
          return rule.score;
        }
      } else {
        return rule.score;
      }
    }
  }
  return 0;
}

export function determineInterestLevel(score: number): InterestLevel {
  if (score >= INTEREST_THRESHOLDS.HIGH) return "HIGH";
  if (score >= INTEREST_THRESHOLDS.MEDIUM) return "MEDIUM";
  return "LOW";
}

