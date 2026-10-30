"use client";

import React, { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import {
  X,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ShieldCheck,
} from "lucide-react";
import { SignalCampaign } from "@/lib/signals/types";
import { getOrCreateSessionToken } from "./SignalsTracker";

const DISMISSED_KEY = "cinorium_signals_dismissed_until";
const CONVERTED_KEY = "cinorium_signals_converted";
const DISMISS_COOLDOWN_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

export default function SignalsCaptureModal() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeCampaign, setActiveCampaign] = useState<SignalCampaign | null>(null);
  const [currentScore, setCurrentScore] = useState(0);

  // Form State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [phone, setPhone] = useState("");
  const [interestArea, setInterestArea] = useState("");
  const [message, setMessage] = useState("");
  const [websiteHp, setWebsiteHp] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Check whether popups are permitted
  const isEligible = useCallback(() => {
    if (typeof window === "undefined") return false;
    // URL override for testing/preview: ?signals=test or ?signals=preview
    if (window.location.search.includes("signals=test") || window.location.search.includes("signals=preview")) {
      return true;
    }
    // Don't show on admin or contact page
    if (pathname.startsWith("/admin") || pathname.startsWith("/contact")) {
      return false;
    }
    // Don't show if already converted
    if (localStorage.getItem(CONVERTED_KEY) === "true") {
      return false;
    }
    // Don't show if dismissed recently
    const dismissedUntil = localStorage.getItem(DISMISSED_KEY);
    if (dismissedUntil && Number(dismissedUntil) > Date.now()) {
      return false;
    }
    return true;
  }, [pathname]);

  // Expose reset helper in browser console for testing
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).__CINORIUM_SIGNALS_RESET = () => {
        localStorage.removeItem(DISMISSED_KEY);
        localStorage.removeItem(CONVERTED_KEY);
        localStorage.removeItem("cinorium_signals_token");
        console.log("✅ Cinorium Signals local test state has been reset.");
      };
    }
  }, []);

  // Listen for signal evaluation updates from tracker
  useEffect(() => {
    const handleUpdate = (e: Event) => {
      const customEvent = e as CustomEvent;
      const data = customEvent.detail;
      if (!data || !isEligible()) return;

      const score = data.interestScore || 0;
      setCurrentScore(score);

      const campaign = data.suggestedCampaign as SignalCampaign;
      if (campaign) {
        setActiveCampaign(campaign);
        if (!interestArea) {
          setInterestArea(campaign.interestArea);
        }
      }

      // Check if threshold reached or preview forced
      const isPreview =
        typeof window !== "undefined" &&
        (window.location.search.includes("signals=test") ||
          window.location.search.includes("signals=preview"));
      const triggerScore = isPreview ? 0 : campaign?.triggerMinScore || 20;

      if ((score >= triggerScore || isPreview) && !isOpen) {
        // Enforce a natural 3-second dwell time before displaying
        setTimeout(() => {
          if (isEligible()) {
            setIsOpen(true);
            // Track impression
            const sessionToken = getOrCreateSessionToken();
            fetch("/api/signals/track", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                sessionToken,
                eventType: "popup_impression",
                pagePath: window.location.pathname,
                metadata: { campaignId: campaign?.id },
              }),
            }).catch(() => {});
          }
        }, 3000);
      }
    };

    window.addEventListener("signals_evaluation_update", handleUpdate);
    return () => window.removeEventListener("signals_evaluation_update", handleUpdate);
  }, [isOpen, isEligible, interestArea]);

  // Keyboard close with Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleDismiss();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleDismiss = () => {
    setIsOpen(false);
    setIsExpanded(false);
    localStorage.setItem(
      DISMISSED_KEY,
      (Date.now() + DISMISS_COOLDOWN_MS).toString()
    );

    // Track dismissal event
    const sessionToken = getOrCreateSessionToken();
    fetch("/api/signals/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sessionToken,
        eventType: "popup_dismiss",
        pagePath: window.location.pathname,
        metadata: { campaignId: activeCampaign?.id },
      }),
    }).catch(() => {});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const sessionToken = getOrCreateSessionToken();
      const res = await fetch("/api/signals/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionToken,
          fullName,
          email,
          websiteUrl,
          phone,
          interestArea: interestArea || activeCampaign?.interestArea || "General Consultation",
          message,
          sourcePage: window.location.pathname,
          campaignId: activeCampaign?.id || "general-consultation",
          interestScoreAtCapture: currentScore,
          website_hp: websiteHp,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
        localStorage.setItem(CONVERTED_KEY, "true");
        setTimeout(() => {
          setIsOpen(false);
        }, 4000);
      } else {
        setErrorMessage(data.message || "Unable to submit your enquiry. Please verify your inputs.");
      }
    } catch {
      setErrorMessage("Network error. Please try again or message directly via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen || !activeCampaign) return null;

  return (
    <aside
      role="dialog"
      aria-modal="false"
      aria-label="Contextual enquiry prompt"
      className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40 w-[calc(100vw-2rem)] sm:w-[420px] max-h-[calc(100dvh-6rem)] overflow-y-auto transition-all duration-300 ease-out"
    >
      <div className="relative rounded-2xl border-2 border-black bg-white p-5 sm:p-6 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={handleDismiss}
          type="button"
          aria-label="Close message"
          className="absolute top-4 right-4 rounded-xl border border-gray-200 bg-gray-50 p-1.5 text-gray-500 hover:bg-gray-100 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
        >
          <X className="h-4 w-4" />
        </button>

        {submitted ? (
          <div className="py-4 text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h4 className="font-heading text-lg font-bold text-gray-900 mb-1">
              Enquiry Received
            </h4>
            <p className="text-xs text-gray-600">
              Thank you for reaching out. We will review your project details and get back to you shortly.
            </p>
          </div>
        ) : !isExpanded ? (
          /* Compact Contextual Teaser */
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-50 px-2.5 py-0.5 text-[11px] font-semibold text-amber-900">
                <Sparkles className="h-3 w-3 text-amber-700" />
                {activeCampaign.tagline}
              </span>
            </div>

            <h3 className="font-heading text-base sm:text-lg font-bold tracking-tight text-gray-900 mb-2 pr-6">
              {activeCampaign.title}
            </h3>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
              {activeCampaign.description}
            </p>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsExpanded(true)}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-black px-4 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <span>{activeCampaign.ctaText}</span>
                <ArrowRight className="h-3.5 w-3.5 text-amber-400" />
              </button>
              <button
                type="button"
                onClick={handleDismiss}
                className="text-xs font-medium text-gray-500 hover:text-gray-900 px-2 py-2"
              >
                Not now
              </button>
            </div>
          </div>
        ) : (
          /* Expanded Lead Capture Form */
          <div>
            <div className="mb-3 pr-6">
              <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-amber-800 mb-1">
                {activeCampaign.interestArea}
              </span>
              <h3 className="font-heading text-base font-bold tracking-tight text-gray-900">
                {activeCampaign.ctaText}
              </h3>
            </div>

            {errorMessage && (
              <div className="mb-3 flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-2.5 text-xs text-red-800">
                <AlertCircle className="h-4 w-4 shrink-0 text-red-600 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Honeypot */}
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={websiteHp}
                  onChange={(e) => setWebsiteHp(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Johnson"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Work Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Website URL (optional)
                  </label>
                  <input
                    type="url"
                    placeholder="https://example.com"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Phone / WhatsApp (optional)
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 555 0192"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Project Details / Questions <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={2}
                  placeholder="Tell us briefly about your goals or current challenges..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="flex items-center gap-1 text-[10px] text-gray-500">
                  <ShieldCheck className="h-3 w-3 text-emerald-600" />
                  No spam. Privacy respected.
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsExpanded(false)}
                    className="rounded-lg px-2.5 py-1.5 text-xs text-gray-600 hover:text-black"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-black px-4 py-2 text-xs font-semibold text-white hover:bg-gray-900 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit</span>
                        <ArrowRight className="h-3.5 w-3.5 text-amber-400" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </aside>
  );
}

