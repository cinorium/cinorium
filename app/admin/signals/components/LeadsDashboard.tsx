"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  Filter,
  ArrowUpRight,
  User,
  Mail,
  Globe,
  Calendar,
  Sparkles,
  TrendingUp,
  Inbox,
  CheckCircle2,
  Clock,
  Layers,
} from "lucide-react";
import { Lead, LeadStatus, SignalsAnalyticsSummary } from "@/lib/signals/types";

interface Props {
  initialLeads: Lead[];
  summary: SignalsAnalyticsSummary;
  diagnostics?: {
    engine: "supabase" | "local";
    isSupabaseConfigured: boolean;
    supabaseUrl: string;
    hasServiceRoleKey: boolean;
    hasAnonKey: boolean;
    connectionStatus: "connected" | "error" | "not_configured";
    connectionError?: string;
  };
}

const STATUS_COLORS: Record<LeadStatus, { bg: string; text: string; border: string }> = {
  NEW: { bg: "bg-blue-50", text: "text-blue-800", border: "border-blue-300" },
  CONTACTED: { bg: "bg-purple-50", text: "text-purple-800", border: "border-purple-300" },
  QUALIFIED: { bg: "bg-amber-50", text: "text-amber-900", border: "border-amber-300" },
  CONVERTED: { bg: "bg-emerald-50", text: "text-emerald-900", border: "border-emerald-300" },
  LOST: { bg: "bg-gray-100", text: "text-gray-700", border: "border-gray-300" },
};

export default function LeadsDashboard({ initialLeads, summary, diagnostics }: Props) {
  const [leads, setLeads] = useState<Lead[]>(initialLeads);
  const [selectedStatus, setSelectedStatus] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const filteredLeads = leads.filter((lead) => {
    const matchesStatus =
      selectedStatus === "ALL" || lead.status === selectedStatus;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      lead.fullName.toLowerCase().includes(query) ||
      lead.email.toLowerCase().includes(query) ||
      lead.interestArea.toLowerCase().includes(query) ||
      (lead.websiteUrl && lead.websiteUrl.toLowerCase().includes(query));

    return matchesStatus && matchesSearch;
  });

  const handleStatusChange = async (leadId: string, newStatus: LeadStatus) => {
    setUpdatingId(leadId);
    try {
      const res = await fetch(`/api/signals/admin/leads/${leadId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        setLeads((prev) =>
          prev.map((l) => (l.id === leadId ? { ...l, status: newStatus } : l))
        );
      }
    } catch (err) {
      console.error("Failed to update lead status:", err);
    } finally {
      setUpdatingId(null);
    }
  };

  return (
    <div className="space-y-8">
      {/* Storage Diagnostics Notice */}
      {diagnostics?.connectionStatus === "error" && (
        <div className="rounded-2xl border-2 border-amber-500 bg-amber-50 p-5 text-xs text-amber-950 shadow-sm">
          <div className="flex items-center gap-2 font-bold text-sm mb-2 text-amber-900">
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500 animate-pulse" />
            Supabase Setup Required: Tables Not Found in Database
          </div>
          <p className="mb-2 font-mono text-[11px] bg-white/70 p-2 rounded-lg border border-amber-200 text-gray-800">
            {diagnostics.connectionError}
          </p>
          <p className="mb-3 text-xs leading-relaxed text-amber-900">
            The error code <strong>PGRST205</strong> indicates that the <code>leads</code> table has not been created yet in your Supabase project. To create all required tables, copy the SQL below, paste it into your <strong>Supabase SQL Editor</strong>, and click <strong>Run</strong>:
          </p>
          <pre className="p-3 bg-white rounded-xl border border-amber-200 font-mono text-[11px] overflow-x-auto text-gray-900 leading-relaxed max-h-56">
{`CREATE TABLE IF NOT EXISTS visitor_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_token VARCHAR(64) UNIQUE NOT NULL,
  interest_score INT DEFAULT 0 NOT NULL,
  interest_level VARCHAR(20) DEFAULT 'LOW' NOT NULL,
  first_page VARCHAR(255) NOT NULL,
  last_page VARCHAR(255) NOT NULL,
  page_views_count INT DEFAULT 1 NOT NULL,
  last_category VARCHAR(100),
  converted BOOLEAN DEFAULT FALSE NOT NULL,
  first_seen_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  last_seen_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE TABLE IF NOT EXISTS visitor_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_token VARCHAR(64) NOT NULL,
  event_type VARCHAR(50) NOT NULL,
  page_path VARCHAR(255) NOT NULL,
  metadata JSONB DEFAULT '{}'::jsonb,
  score_delta INT DEFAULT 0 NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_token VARCHAR(64),
  full_name VARCHAR(150) NOT NULL,
  email VARCHAR(150) NOT NULL,
  website_url VARCHAR(255),
  phone VARCHAR(50),
  interest_area VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  source_page VARCHAR(255) NOT NULL,
  campaign_id VARCHAR(100) NOT NULL,
  interest_score_at_capture INT DEFAULT 0 NOT NULL,
  status VARCHAR(50) DEFAULT 'NEW' NOT NULL,
  ip_hash VARCHAR(64),
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE TABLE IF NOT EXISTS lead_notes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  author VARCHAR(100) DEFAULT 'Cinorium Team' NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

ALTER TABLE visitor_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE visitor_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE lead_notes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow all access" ON leads FOR ALL TO authenticated, anon, service_role USING (true) WITH CHECK (true);
CREATE POLICY "Allow all access" ON lead_notes FOR ALL TO authenticated, anon, service_role USING (true) WITH CHECK (true);
CREATE POLICY "Allow all access" ON visitor_sessions FOR ALL TO authenticated, anon, service_role USING (true) WITH CHECK (true);
CREATE POLICY "Allow all access" ON visitor_events FOR ALL TO authenticated, anon, service_role USING (true) WITH CHECK (true);`}
          </pre>
        </div>
      )}

      {diagnostics?.engine === "local" && (
        <div className="rounded-2xl border border-amber-300 bg-amber-50 p-3.5 text-xs text-amber-900 flex items-center justify-between">
          <span>
            Storage Mode: <strong>Local File Fallback</strong> (.signals_store.json). Note: on Vercel serverless, Supabase environment variables must be configured to persist leads.
          </span>
          <span className="font-semibold text-amber-800 text-[11px]">Local Dev</span>
        </div>
      )}
      {/* ── 1. Top KPI Summary Cards ─────────────────────────────────────── */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-5">
        <div className="rounded-2xl border-2 border-black bg-white p-4 sm:p-5 shadow-xs">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 block mb-1">
            Total Leads
          </span>
          <div className="flex items-baseline gap-2">
            <span className="font-heading text-2xl sm:text-3xl font-bold text-gray-900">
              {summary.totalLeads}
            </span>
          </div>
          <span className="text-[11px] text-gray-500 mt-1 block">
            Across all campaigns
          </span>
        </div>

        <div className="rounded-2xl border-2 border-black bg-blue-50/60 p-4 sm:p-5 shadow-xs">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-900 block mb-1">
            New Enquiries
          </span>
          <div className="flex items-baseline gap-2">
            <span className="font-heading text-2xl sm:text-3xl font-bold text-blue-900">
              {summary.newLeads}
            </span>
          </div>
          <span className="text-[11px] text-blue-700 mt-1 block">
            Awaiting first outreach
          </span>
        </div>

        <div className="rounded-2xl border-2 border-black bg-amber-50/80 p-4 sm:p-5 shadow-xs">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-900 block mb-1">
            Qualified
          </span>
          <div className="flex items-baseline gap-2">
            <span className="font-heading text-2xl sm:text-3xl font-bold text-amber-900">
              {summary.qualifiedLeads}
            </span>
          </div>
          <span className="text-[11px] text-amber-800 mt-1 block">
            High intent & fit
          </span>
        </div>

        <div className="rounded-2xl border-2 border-black bg-emerald-50/80 p-4 sm:p-5 shadow-xs">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-900 block mb-1">
            Converted
          </span>
          <div className="flex items-baseline gap-2">
            <span className="font-heading text-2xl sm:text-3xl font-bold text-emerald-900">
              {summary.convertedLeads}
            </span>
          </div>
          <span className="text-[11px] text-emerald-800 mt-1 block">
            Active clients
          </span>
        </div>

        <div className="rounded-2xl border-2 border-black bg-white p-4 sm:p-5 shadow-xs col-span-2 lg:col-span-1">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 block mb-1">
            Conversion Rate
          </span>
          <div className="flex items-baseline gap-2">
            <span className="font-heading text-2xl sm:text-3xl font-bold text-gray-900">
              {summary.conversionRate}%
            </span>
          </div>
          <span className="text-[11px] text-gray-500 mt-1 block">
            From {summary.totalSessions} sessions
          </span>
        </div>
      </div>

      {/* ── 2. Filters & Search Bar ───────────────────────────────────────── */}
      <div className="rounded-3xl border-2 border-black bg-white p-4 sm:p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, email, interest, or website..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-2xl border border-gray-300 pl-10 pr-4 py-2.5 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          {/* Status Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {["ALL", "NEW", "CONTACTED", "QUALIFIED", "CONVERTED", "LOST"].map(
              (st) => (
                <button
                  key={st}
                  onClick={() => setSelectedStatus(st)}
                  type="button"
                  className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition-all ${
                    selectedStatus === st
                      ? "bg-black text-white shadow-xs"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {st}
                  {st !== "ALL" && (
                    <span className="ml-1.5 opacity-70">
                      (
                      {
                        leads.filter(
                          (l) => l.status === (st as LeadStatus)
                        ).length
                      }
                      )
                    </span>
                  )}
                </button>
              )
            )}
          </div>
        </div>

        {/* ── 3. Leads List ─────────────────────────────────────────────────── */}
        {filteredLeads.length === 0 ? (
          <div className="py-16 text-center border-2 border-dashed border-gray-200 rounded-2xl">
            <Inbox className="mx-auto h-10 w-10 text-gray-300 mb-2" />
            <h3 className="font-heading text-base font-bold text-gray-900">
              No matching leads found
            </h3>
            <p className="text-xs text-gray-500 max-w-sm mx-auto mt-1">
              {searchQuery
                ? "Try clearing your search query or choosing another status tab."
                : "When visitors interact and voluntary submit signals enquiries, they will appear here."}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b-2 border-black/10 text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                  <th className="py-3 px-3">Lead Contact</th>
                  <th className="py-3 px-3">Interest &amp; Campaign</th>
                  <th className="py-3 px-3">Score</th>
                  <th className="py-3 px-3">Date</th>
                  <th className="py-3 px-3">Status</th>
                  <th className="py-3 px-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredLeads.map((lead) => {
                  const statusStyle = STATUS_COLORS[lead.status];
                  const formattedDate = new Date(lead.createdAt).toLocaleDateString(
                    "en-US",
                    {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    }
                  );

                  return (
                    <tr
                      key={lead.id}
                      className="hover:bg-amber-50/30 transition-colors group"
                    >
                      {/* Name & Contact */}
                      <td className="py-3.5 px-3">
                        <div className="font-semibold text-gray-900">
                          {lead.fullName}
                        </div>
                        <div className="flex items-center gap-2 mt-0.5 text-xs text-gray-600">
                          <a
                            href={`mailto:${lead.email}`}
                            className="hover:text-amber-800 hover:underline flex items-center gap-1"
                          >
                            <Mail className="h-3 w-3 text-gray-400" />
                            <span>{lead.email}</span>
                          </a>
                        </div>
                        {lead.websiteUrl && (
                          <div className="mt-0.5 text-[11px] text-gray-500">
                            <a
                              href={
                                lead.websiteUrl.startsWith("http")
                                  ? lead.websiteUrl
                                  : `https://${lead.websiteUrl}`
                              }
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline flex items-center gap-1"
                            >
                              <Globe className="h-3 w-3 text-gray-400" />
                              <span className="truncate max-w-[180px]">
                                {lead.websiteUrl.replace(/^https?:\/\//, "")}
                              </span>
                            </a>
                          </div>
                        )}
                      </td>

                      {/* Interest Area */}
                      <td className="py-3.5 px-3">
                        <span className="font-medium text-gray-900 block">
                          {lead.interestArea}
                        </span>
                        <span className="inline-block text-[11px] text-gray-500 font-mono mt-0.5">
                          {lead.campaignId}
                        </span>
                      </td>

                      {/* Engagement Score */}
                      <td className="py-3.5 px-3">
                        <span className="inline-flex items-center gap-1 rounded-full border border-amber-300 bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-900">
                          <Sparkles className="h-3 w-3 text-amber-700" />
                          <span>{lead.interestScoreAtCapture} pts</span>
                        </span>
                      </td>

                      {/* Date */}
                      <td className="py-3.5 px-3 text-xs text-gray-600 whitespace-nowrap">
                        {formattedDate}
                      </td>

                      {/* Status Selector */}
                      <td className="py-3.5 px-3">
                        <select
                          disabled={updatingId === lead.id}
                          value={lead.status}
                          onChange={(e) =>
                            handleStatusChange(
                              lead.id,
                              e.target.value as LeadStatus
                            )
                          }
                          className={`rounded-lg border px-2 py-1 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-black ${statusStyle.bg} ${statusStyle.text} ${statusStyle.border}`}
                        >
                          <option value="NEW">NEW</option>
                          <option value="CONTACTED">CONTACTED</option>
                          <option value="QUALIFIED">QUALIFIED</option>
                          <option value="CONVERTED">CONVERTED</option>
                          <option value="LOST">LOST</option>
                        </select>
                      </td>

                      {/* Action */}
                      <td className="py-3.5 px-3 text-right">
                        <Link
                          href={`/admin/signals/${lead.id}`}
                          className="inline-flex items-center gap-1 rounded-xl bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-800 hover:bg-black hover:text-white transition-colors"
                        >
                          <span>Review</span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

