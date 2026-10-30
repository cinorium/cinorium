"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  Phone,
  Globe,
  Calendar,
  Sparkles,
  MessageSquare,
  Plus,
  Loader2,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import { Lead, LeadNote, LeadStatus } from "@/lib/signals/types";

interface Props {
  initialLead: Lead;
  initialNotes: LeadNote[];
}

const STATUS_COLORS: Record<LeadStatus, { bg: string; text: string; border: string }> = {
  NEW: { bg: "bg-blue-50", text: "text-blue-800", border: "border-blue-300" },
  CONTACTED: { bg: "bg-purple-50", text: "text-purple-800", border: "border-purple-300" },
  QUALIFIED: { bg: "bg-amber-50", text: "text-amber-900", border: "border-amber-300" },
  CONVERTED: { bg: "bg-emerald-50", text: "text-emerald-900", border: "border-emerald-300" },
  LOST: { bg: "bg-gray-100", text: "text-gray-700", border: "border-gray-300" },
};

export default function LeadDetailView({ initialLead, initialNotes }: Props) {
  const [lead, setLead] = useState<Lead>(initialLead);
  const [notes, setNotes] = useState<LeadNote[]>(initialNotes);
  const [newNote, setNewNote] = useState("");
  const [isAddingNote, setIsAddingNote] = useState(false);
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false);

  const handleStatusChange = async (newStatus: LeadStatus) => {
    setIsUpdatingStatus(true);
    try {
      const res = await fetch(`/api/signals/admin/leads/${lead.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        setLead((prev) => ({ ...prev, status: newStatus }));
        // Refresh notes to show audit log
        const detailRes = await fetch(`/api/signals/admin/leads/${lead.id}`);
        if (detailRes.ok) {
          const detailData = await detailRes.json();
          if (detailData.notes) setNotes(detailData.notes);
        }
      }
    } catch (err) {
      console.error("Failed to update status:", err);
    } finally {
      setIsUpdatingStatus(false);
    }
  };

  const handleAddNote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNote.trim()) return;

    setIsAddingNote(true);
    try {
      const res = await fetch(`/api/signals/admin/leads/${lead.id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: newNote.trim(), author: "Cinorium Founder" }),
      });
      if (res.ok) {
        const data = await res.json();
        setNotes((prev) => [data.note, ...prev]);
        setNewNote("");
      }
    } catch (err) {
      console.error("Failed to add note:", err);
    } finally {
      setIsAddingNote(false);
    }
  };

  const statusStyle = STATUS_COLORS[lead.status];
  const formattedDate = new Date(lead.createdAt).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const whatsappCleanPhone = lead.phone ? lead.phone.replace(/[^0-9]/g, "") : "";

  return (
    <div className="space-y-6">
      {/* Back button */}
      <div>
        <Link
          href="/admin/signals"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700 hover:text-black transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to All Leads</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Main Column */}
        <div className="lg:col-span-8 space-y-6">
          {/* Header Card */}
          <div className="rounded-3xl border-2 border-black bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6 pb-6 border-b border-black/10">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 block mb-1">
                  {lead.interestArea}
                </span>
                <h1 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                  {lead.fullName}
                </h1>
                <span className="text-xs text-gray-500 mt-1 block">
                  Captured on {formattedDate}
                </span>
              </div>

              {/* Status Switcher */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500 font-medium">Status:</span>
                <select
                  disabled={isUpdatingStatus}
                  value={lead.status}
                  onChange={(e) => handleStatusChange(e.target.value as LeadStatus)}
                  className={`rounded-xl border px-3 py-1.5 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-black ${statusStyle.bg} ${statusStyle.text} ${statusStyle.border}`}
                >
                  <option value="NEW">NEW</option>
                  <option value="CONTACTED">CONTACTED</option>
                  <option value="QUALIFIED">QUALIFIED</option>
                  <option value="CONVERTED">CONVERTED</option>
                  <option value="LOST">LOST</option>
                </select>
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <a
                href={`mailto:${lead.email}?subject=Regarding%20your%20enquiry%20with%20Cinorium`}
                className="inline-flex items-center gap-2 rounded-xl bg-black px-4 py-2.5 text-xs font-semibold text-white hover:bg-gray-900 transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-amber-400" />
                <span>Send Email</span>
              </a>

              {whatsappCleanPhone && (
                <a
                  href={`https://wa.me/${whatsappCleanPhone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-black bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-900 hover:bg-emerald-100 transition-colors"
                >
                  <MessageCircle className="h-3.5 w-3.5 text-emerald-700" />
                  <span>WhatsApp Message</span>
                </a>
              )}

              {lead.websiteUrl && (
                <a
                  href={
                    lead.websiteUrl.startsWith("http")
                      ? lead.websiteUrl
                      : `https://${lead.websiteUrl}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2 text-xs font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
                >
                  <Globe className="h-3.5 w-3.5 text-gray-500" />
                  <span>Visit Website</span>
                  <ExternalLink className="h-3 w-3 text-gray-400" />
                </a>
              )}
            </div>

            {/* Submitted Message */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                Enquiry Details / Message
              </h3>
              <div className="rounded-2xl border border-gray-200 bg-gray-50/70 p-4 sm:p-5 text-sm text-gray-800 leading-relaxed whitespace-pre-wrap">
                {lead.message}
              </div>
            </div>
          </div>

          {/* CRM Internal Notes */}
          <div className="rounded-3xl border-2 border-black bg-white p-6 sm:p-8 shadow-sm">
            <h3 className="font-heading text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-amber-600" />
              <span>Internal CRM Notes &amp; Activity Log</span>
            </h3>

            {/* Note form */}
            <form onSubmit={handleAddNote} className="mb-6">
              <textarea
                rows={3}
                placeholder="Add an internal note (e.g. called client, sent proposal, requested clarification)..."
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                className="w-full rounded-2xl border border-gray-300 p-3.5 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black resize-none"
              />
              <div className="mt-2.5 flex justify-end">
                <button
                  type="submit"
                  disabled={isAddingNote || !newNote.trim()}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-black px-4 py-2 text-xs font-semibold text-white hover:bg-gray-900 disabled:opacity-40"
                >
                  {isAddingNote ? (
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  ) : (
                    <Plus className="h-3.5 w-3.5" />
                  )}
                  <span>Post Note</span>
                </button>
              </div>
            </form>

            {/* Notes history */}
            <div className="space-y-3">
              {notes.length === 0 ? (
                <p className="text-xs text-gray-500 italic">
                  No internal notes posted yet.
                </p>
              ) : (
                notes.map((note) => (
                  <div
                    key={note.id}
                    className="rounded-2xl border border-gray-200 bg-gray-50/50 p-4 text-xs leading-relaxed"
                  >
                    <div className="flex items-center justify-between text-[11px] text-gray-500 mb-1.5">
                      <span className="font-semibold text-gray-900">
                        {note.author}
                      </span>
                      <span>
                        {new Date(note.createdAt).toLocaleString("en-US", {
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                    <p className="text-gray-800 whitespace-pre-wrap">
                      {note.content}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Sidebar Column: Signal Attribution Info */}
        <div className="lg:col-span-4 space-y-6">
          <div className="rounded-3xl border-2 border-black bg-white p-6 shadow-sm space-y-5">
            <h3 className="font-heading text-base font-bold text-gray-900 pb-3 border-b border-gray-100">
              Signal Attribution &amp; Context
            </h3>

            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 block mb-1">
                Engagement Score at Capture
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-bold text-amber-900">
                <Sparkles className="h-3.5 w-3.5 text-amber-700" />
                <span>{lead.interestScoreAtCapture} points</span>
              </span>
            </div>

            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 block mb-1">
                Triggered Campaign
              </span>
              <span className="font-mono text-xs bg-gray-100 rounded-lg px-2.5 py-1 text-gray-800 inline-block">
                {lead.campaignId}
              </span>
            </div>

            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 block mb-1">
                Source Page
              </span>
              <span className="text-xs text-gray-700 break-all font-mono">
                {lead.sourcePage}
              </span>
            </div>

            {lead.phone && (
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 block mb-1">
                  Contact Phone
                </span>
                <span className="text-xs font-medium text-gray-900 flex items-center gap-1.5">
                  <Phone className="h-3.5 w-3.5 text-gray-400" />
                  <span>{lead.phone}</span>
                </span>
              </div>
            )}

            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 block mb-1">
                Lead Record ID
              </span>
              <span className="text-[11px] text-gray-400 font-mono break-all">
                {lead.id}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

