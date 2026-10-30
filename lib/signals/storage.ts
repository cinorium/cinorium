import fs from "fs";
import path from "path";
import crypto from "crypto";
import {
  VisitorSession,
  VisitorEvent,
  Lead,
  LeadNote,
  LeadStatus,
  SignalsAnalyticsSummary,
} from "./types";
import { determineInterestLevel } from "./scoring";

// File-based fallback path for zero-dependency local development & testing
const LOCAL_DATA_FILE = path.join(process.cwd(), ".signals_store.json");

interface LocalStoreData {
  sessions: VisitorSession[];
  events: VisitorEvent[];
  leads: Lead[];
  notes: LeadNote[];
}

function loadLocalStore(): LocalStoreData {
  try {
    if (fs.existsSync(LOCAL_DATA_FILE)) {
      const raw = fs.readFileSync(LOCAL_DATA_FILE, "utf-8");
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error("[Signals] Failed to load local store file:", err);
  }
  return { sessions: [], events: [], leads: [], notes: [] };
}

function saveLocalStore(data: LocalStoreData): void {
  try {
    fs.writeFileSync(LOCAL_DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
  } catch (err) {
    console.error("[Signals] Failed to persist local store file:", err);
  }
}

// Check if Supabase credentials exist
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const isSupabaseConfigured = Boolean(SUPABASE_URL && SUPABASE_KEY);

class SupabaseStorageAdapter {
  private url = SUPABASE_URL!;
  private key = SUPABASE_KEY!;

  private async fetchSupabase(endpoint: string, options: RequestInit = {}) {
    const res = await fetch(`${this.url}/rest/v1/${endpoint}`, {
      ...options,
      headers: {
        apikey: this.key,
        Authorization: `Bearer ${this.key}`,
        "Content-Type": "application/json",
        Prefer: "return=representation",
        ...options.headers,
      },
    });
    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Supabase request error [${res.status}]: ${err}`);
    }
    return res.json();
  }

  async getOrCreateSession(token: string, initialPage: string): Promise<VisitorSession> {
    const existing = await this.fetchSupabase(
      `visitor_sessions?session_token=eq.${encodeURIComponent(token)}&select=*`
    );
    if (existing && existing.length > 0) {
      const row = existing[0];
      return {
        id: row.id,
        sessionToken: row.session_token,
        interestScore: row.interest_score,
        interestLevel: row.interest_level,
        firstPage: row.first_page,
        lastPage: row.last_page,
        pageViewsCount: row.page_views_count,
        lastCategory: row.last_category,
        converted: row.converted,
        firstSeenAt: row.first_seen_at,
        lastSeenAt: row.last_seen_at,
      };
    }

    const created = await this.fetchSupabase(`visitor_sessions`, {
      method: "POST",
      body: JSON.stringify({
        session_token: token,
        interest_score: 0,
        interest_level: "LOW",
        first_page: initialPage,
        last_page: initialPage,
        page_views_count: 1,
        converted: false,
      }),
    });
    const row = created[0];
    return {
      id: row.id,
      sessionToken: row.session_token,
      interestScore: row.interest_score,
      interestLevel: row.interest_level,
      firstPage: row.first_page,
      lastPage: row.last_page,
      pageViewsCount: row.page_views_count,
      lastCategory: row.last_category,
      converted: row.converted,
      firstSeenAt: row.first_seen_at,
      lastSeenAt: row.last_seen_at,
    };
  }

  async updateSessionScore(
    token: string,
    delta: number,
    lastPage: string,
    lastCategory?: string
  ): Promise<VisitorSession> {
    const session = await this.getOrCreateSession(token, lastPage);
    const newScore = Math.max(0, session.interestScore + delta);
    const newLevel = determineInterestLevel(newScore);

    const updatePayload: Record<string, unknown> = {
      interest_score: newScore,
      interest_level: newLevel,
      last_page: lastPage,
      page_views_count: session.pageViewsCount + 1,
      last_seen_at: new Date().toISOString(),
    };
    if (lastCategory) {
      updatePayload.last_category = lastCategory;
    }

    const updated = await this.fetchSupabase(
      `visitor_sessions?session_token=eq.${encodeURIComponent(token)}`,
      {
        method: "PATCH",
        body: JSON.stringify(updatePayload),
      }
    );
    const row = updated[0];
    return {
      id: row.id,
      sessionToken: row.session_token,
      interestScore: row.interest_score,
      interestLevel: row.interest_level,
      firstPage: row.first_page,
      lastPage: row.last_page,
      pageViewsCount: row.page_views_count,
      lastCategory: row.last_category,
      converted: row.converted,
      firstSeenAt: row.first_seen_at,
      lastSeenAt: row.last_seen_at,
    };
  }

  async recordEvent(event: Omit<VisitorEvent, "id" | "createdAt">): Promise<void> {
    await this.fetchSupabase(`visitor_events`, {
      method: "POST",
      body: JSON.stringify({
        session_token: event.sessionToken,
        event_type: event.eventType,
        page_path: event.pagePath,
        metadata: event.metadata || {},
        score_delta: event.scoreDelta,
      }),
    });
  }

  async saveLead(data: Omit<Lead, "id" | "createdAt" | "updatedAt">): Promise<Lead> {
    const res = await this.fetchSupabase(`leads`, {
      method: "POST",
      body: JSON.stringify({
        session_token: data.sessionToken,
        full_name: data.fullName,
        email: data.email,
        website_url: data.websiteUrl,
        phone: data.phone,
        interest_area: data.interestArea,
        message: data.message,
        source_page: data.sourcePage,
        campaign_id: data.campaignId,
        interest_score_at_capture: data.interestScoreAtCapture,
        status: data.status,
        ip_hash: data.ipHash,
      }),
    });
    const row = res[0];
    return {
      id: row.id,
      sessionToken: row.session_token,
      fullName: row.full_name,
      email: row.email,
      websiteUrl: row.website_url,
      phone: row.phone,
      interestArea: row.interest_area,
      message: row.message,
      sourcePage: row.source_page,
      campaignId: row.campaign_id,
      interestScoreAtCapture: row.interest_score_at_capture,
      status: row.status,
      ipHash: row.ip_hash,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    };
  }

  async getLeads(): Promise<Lead[]> {
    const rows = await this.fetchSupabase(`leads?order=created_at.desc&select=*`);
    return rows.map((row: any) => ({
      id: row.id,
      sessionToken: row.session_token,
      fullName: row.full_name,
      email: row.email,
      websiteUrl: row.website_url,
      phone: row.phone,
      interestArea: row.interest_area,
      message: row.message,
      sourcePage: row.source_page,
      campaignId: row.campaign_id,
      interestScoreAtCapture: row.interest_score_at_capture,
      status: row.status,
      ipHash: row.ip_hash,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    }));
  }

  async getLeadById(id: string): Promise<Lead | null> {
    const rows = await this.fetchSupabase(`leads?id=eq.${encodeURIComponent(id)}&select=*`);
    if (!rows || rows.length === 0) return null;
    const row = rows[0];
    return {
      id: row.id,
      sessionToken: row.session_token,
      fullName: row.full_name,
      email: row.email,
      websiteUrl: row.website_url,
      phone: row.phone,
      interestArea: row.interest_area,
      message: row.message,
      sourcePage: row.source_page,
      campaignId: row.campaign_id,
      interestScoreAtCapture: row.interest_score_at_capture,
      status: row.status,
      ipHash: row.ip_hash,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    };
  }

  async updateLeadStatus(id: string, status: LeadStatus): Promise<void> {
    await this.fetchSupabase(`leads?id=eq.${encodeURIComponent(id)}`, {
      method: "PATCH",
      body: JSON.stringify({
        status,
        updated_at: new Date().toISOString(),
      }),
    });
  }

  async addLeadNote(note: Omit<LeadNote, "id" | "createdAt">): Promise<LeadNote> {
    const res = await this.fetchSupabase(`lead_notes`, {
      method: "POST",
      body: JSON.stringify({
        lead_id: note.leadId,
        author: note.author,
        content: note.content,
      }),
    });
    const row = res[0];
    return {
      id: row.id,
      leadId: row.lead_id,
      author: row.author,
      content: row.content,
      createdAt: row.created_at,
    };
  }

  async getLeadNotes(leadId: string): Promise<LeadNote[]> {
    const rows = await this.fetchSupabase(
      `lead_notes?lead_id=eq.${encodeURIComponent(leadId)}&order=created_at.desc&select=*`
    );
    return rows.map((r: any) => ({
      id: r.id,
      leadId: r.lead_id,
      author: r.author,
      content: r.content,
      createdAt: r.created_at,
    }));
  }
}

// Local Fallback Storage Adapter
class LocalStorageAdapter {
  async getOrCreateSession(token: string, initialPage: string): Promise<VisitorSession> {
    const store = loadLocalStore();
    let session = store.sessions.find((s) => s.sessionToken === token);
    if (!session) {
      session = {
        id: crypto.randomUUID(),
        sessionToken: token,
        interestScore: 0,
        interestLevel: "LOW",
        firstPage: initialPage,
        lastPage: initialPage,
        pageViewsCount: 1,
        converted: false,
        firstSeenAt: new Date().toISOString(),
        lastSeenAt: new Date().toISOString(),
      };
      store.sessions.push(session);
      saveLocalStore(store);
    }
    return session;
  }

  async updateSessionScore(
    token: string,
    delta: number,
    lastPage: string,
    lastCategory?: string
  ): Promise<VisitorSession> {
    const store = loadLocalStore();
    let session = store.sessions.find((s) => s.sessionToken === token);
    if (!session) {
      session = {
        id: crypto.randomUUID(),
        sessionToken: token,
        interestScore: 0,
        interestLevel: "LOW",
        firstPage: lastPage,
        lastPage: lastPage,
        pageViewsCount: 0,
        converted: false,
        firstSeenAt: new Date().toISOString(),
        lastSeenAt: new Date().toISOString(),
      };
      store.sessions.push(session);
    }

    session.interestScore = Math.max(0, session.interestScore + delta);
    session.interestLevel = determineInterestLevel(session.interestScore);
    session.lastPage = lastPage;
    session.pageViewsCount += 1;
    session.lastSeenAt = new Date().toISOString();
    if (lastCategory) {
      session.lastCategory = lastCategory;
    }

    saveLocalStore(store);
    return session;
  }

  async markSessionConverted(token: string): Promise<void> {
    const store = loadLocalStore();
    const session = store.sessions.find((s) => s.sessionToken === token);
    if (session) {
      session.converted = true;
      saveLocalStore(store);
    }
  }

  async recordEvent(event: Omit<VisitorEvent, "id" | "createdAt">): Promise<void> {
    const store = loadLocalStore();
    store.events.push({
      ...event,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    });
    saveLocalStore(store);
  }

  async saveLead(data: Omit<Lead, "id" | "createdAt" | "updatedAt">): Promise<Lead> {
    const store = loadLocalStore();
    const lead: Lead = {
      ...data,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    store.leads.unshift(lead);

    if (data.sessionToken) {
      const session = store.sessions.find((s) => s.sessionToken === data.sessionToken);
      if (session) {
        session.converted = true;
      }
    }

    saveLocalStore(store);
    return lead;
  }

  async getLeads(): Promise<Lead[]> {
    const store = loadLocalStore();
    return [...store.leads].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async getLeadById(id: string): Promise<Lead | null> {
    const store = loadLocalStore();
    return store.leads.find((l) => l.id === id) || null;
  }

  async updateLeadStatus(id: string, status: LeadStatus): Promise<void> {
    const store = loadLocalStore();
    const lead = store.leads.find((l) => l.id === id);
    if (lead) {
      lead.status = status;
      lead.updatedAt = new Date().toISOString();
      saveLocalStore(store);
    }
  }

  async addLeadNote(note: Omit<LeadNote, "id" | "createdAt">): Promise<LeadNote> {
    const store = loadLocalStore();
    const created: LeadNote = {
      ...note,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    store.notes.unshift(created);
    saveLocalStore(store);
    return created;
  }

  async getLeadNotes(leadId: string): Promise<LeadNote[]> {
    const store = loadLocalStore();
    return store.notes
      .filter((n) => n.leadId === leadId)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  async getAnalyticsSummary(): Promise<SignalsAnalyticsSummary> {
    const store = loadLocalStore();
    const leads = store.leads;
    const events = store.events;
    const sessions = store.sessions;

    const totalLeads = leads.length;
    const newLeads = leads.filter((l) => l.status === "NEW").length;
    const qualifiedLeads = leads.filter((l) => l.status === "QUALIFIED").length;
    const convertedLeads = leads.filter((l) => l.status === "CONVERTED").length;

    const leadsByInterest: Record<string, number> = {};
    const leadsByCampaign: Record<string, number> = {};
    const leadsByStatus: Record<LeadStatus, number> = {
      NEW: 0,
      CONTACTED: 0,
      QUALIFIED: 0,
      CONVERTED: 0,
      LOST: 0,
    };

    for (const lead of leads) {
      leadsByInterest[lead.interestArea] =
        (leadsByInterest[lead.interestArea] || 0) + 1;
      leadsByCampaign[lead.campaignId] =
        (leadsByCampaign[lead.campaignId] || 0) + 1;
      if (leadsByStatus[lead.status] !== undefined) {
        leadsByStatus[lead.status] += 1;
      }
    }

    const totalImpressions = events.filter(
      (e) => e.eventType === "popup_impression"
    ).length;
    const totalDismissals = events.filter(
      (e) => e.eventType === "popup_dismiss"
    ).length;

    const totalSessions = sessions.length;
    const conversionRate =
      totalSessions > 0 ? Number(((totalLeads / totalSessions) * 100).toFixed(1)) : 0;

    return {
      totalLeads,
      newLeads,
      qualifiedLeads,
      convertedLeads,
      leadsByInterest,
      leadsByCampaign,
      leadsByStatus,
      totalSessions,
      totalImpressions,
      totalDismissals,
      conversionRate,
    };
  }
}

// Export singleton storage provider
export const signalsStorage = isSupabaseConfigured
  ? (new SupabaseStorageAdapter() as unknown as LocalStorageAdapter)
  : new LocalStorageAdapter();

