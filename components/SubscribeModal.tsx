"use client";

import React, { useState } from "react";
import { X, Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  badgeText?: string;
  icon?: React.ReactNode;
  description?: string;
  googleScriptUrl?: string;
}

export default function SubscribeModal({
  isOpen,
  onClose,
  title,
  badgeText,
  icon,
  description = "This section is under development. Subscribe with your email to receive updates, guides, and notifications when full case studies are published.",
  googleScriptUrl = "https://script.google.com/macros/s/AKfycbzjiv95GqsdWSOKXj1aYIaei-HHc853pT04iOS1Qv-92HCcPPIlE65Qqu3nBf8grSYrUw/exec",
}: SubscribeModalProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    try {
      await fetch(googleScriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify({
          email: email,
          project: title,
        }),
      });

      setSubscribed(true);
      setEmail("");
    } catch (error) {
      console.error("Subscription Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSubscribed(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white border-2 border-amber-400 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-xl relative flex flex-col items-center text-center">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Dynamic Icon / Badge Render */}
        {icon ? (
          <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
            {icon}
          </div>
        ) : badgeText ? (
          <div className="px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 font-serif font-bold text-sm tracking-widest border border-amber-300 mb-4">
            {badgeText}
          </div>
        ) : (
          <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
            <Mail className="w-5 h-5" />
          </div>
        )}

        {/* Modal Heading */}
        <h4 className="text-2xl font-serif font-bold text-gray-900 mb-2">
          {title}
        </h4>

        {/* Modal Description */}
        <p className="text-sm text-gray-600 font-light leading-relaxed mb-6">
          {description}
        </p>

        {/* Subscription Form */}
        {!subscribed ? (
          <form
            onSubmit={handleSubscribe}
            className="w-full flex flex-col gap-3 mb-6"
          >
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                required
                className="w-full pl-11 pr-4 py-3 rounded-full border-2 border-gray-200 focus:border-amber-400 focus:outline-none text-sm text-gray-900 bg-gray-50"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-medium py-3 rounded-full text-sm transition-all"
            >
              {loading ? "Subscribing..." : "Subscribe for Updates"}
            </button>
          </form>
        ) : (
          <div className="w-full flex items-center justify-center gap-2 bg-green-50 text-green-800 border border-green-200 px-4 py-3 rounded-full text-sm mb-6">
            <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
            <span>Subscribed successfully! We'll keep you updated.</span>
          </div>
        )}

        {/* Contact Redirect Link */}
        <div className="pt-4 border-t border-gray-100 w-full flex items-center justify-center">
          <Link
            href="/contact"
            onClick={handleClose}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-900 hover:text-amber-600 transition-colors group"
          >
            <span>Ready to work? Go to contact page</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
