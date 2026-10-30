export type InterestLevel = "LOW" | "MEDIUM" | "HIGH";

export type EventType =
  | "page_view"
  | "scroll_depth"
  | "service_page_view"
  | "contact_page_view"
  | "primary_cta_click"
  | "form_start"
  | "form_submit"
  | "popup_impression"
  | "popup_dismiss";

export type LeadStatus =
  | "NEW"
  | "CONTACTED"
  | "QUALIFIED"
  | "CONVERTED"
  | "LOST";

export interface VisitorSession {
  id: string;
  sessionToken: string;
  interestScore: number;
  interestLevel: InterestLevel;
  firstPage: string;
  lastPage: string;
  pageViewsCount: number;
  lastCategory?: string;
  converted: boolean;
  firstSeenAt: string;
  lastSeenAt: string;
}

export interface VisitorEvent {
  id: string;
  sessionToken: string;
  eventType: EventType;
  pagePath: string;
  metadata?: Record<string, unknown>;
  scoreDelta: number;
  createdAt: string;
}

export interface SignalCampaign {
  id: string;
  title: string;
  tagline: string;
  description: string;
  ctaText: string;
  interestArea: string;
  triggerMinScore: number;
  relevantPathPrefixes: string[];
}

export interface Lead {
  id: string;
  sessionToken?: string;
  fullName: string;
  email: string;
  websiteUrl?: string;
  phone?: string;
  interestArea: string;
  message: string;
  sourcePage: string;
  campaignId: string;
  interestScoreAtCapture: number;
  status: LeadStatus;
  ipHash?: string;
  createdAt: string;
  updatedAt: string;
}

export interface LeadNote {
  id: string;
  leadId: string;
  author: string;
  content: string;
  createdAt: string;
}

export interface SignalsAnalyticsSummary {
  totalLeads: number;
  newLeads: number;
  qualifiedLeads: number;
  convertedLeads: number;
  leadsByInterest: Record<string, number>;
  leadsByCampaign: Record<string, number>;
  leadsByStatus: Record<LeadStatus, number>;
  totalSessions: number;
  totalImpressions: number;
  totalDismissals: number;
  conversionRate: number; // calculated percentage
}

