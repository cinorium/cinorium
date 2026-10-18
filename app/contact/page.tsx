"use client";

import React, { useState } from "react";
import { submitContactForm } from "./actions";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const formData = new FormData(event.currentTarget);
    const res = await submitContactForm(null, formData);

    setStatus(res);
    setIsSubmitting(false);

    if (res.success) {
      (event.target as HTMLFormElement).reset();
    }
  }

  return (
    <section className="w-full bg-white pt-32 pb-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="mb-16">
          <span className="inline-block text-xs uppercase tracking-widest font-semibold text-gray-700 border-b-2 border-amber-400 pb-1 mb-4">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 leading-tight mb-4">
            Let's Start a Conversation.
          </h1>
          <p className="text-base md:text-lg text-gray-600 font-light max-w-2xl leading-relaxed">
            Have a project in mind, need help with marketing and SEO, or just
            want to say hello? Send a message and let's discuss your next step.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5 flex flex-col gap-8 bg-amber-50/40 p-8 rounded-3xl border border-amber-200/60">
            <div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                Contact Details
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                Fill out the form or reach out directly through email.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full  border border-amber-400 flex items-center justify-center text-gray-900 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-medium text-gray-500 block">
                    Email Me
                  </span>
                  <a
                    href="mailto:cinoriumadmin@gmail.com"
                    className="text-base font-medium text-gray-900 hover:text-amber-800 transition-colors"
                  >
                    cinoriumadmin@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full  border border-amber-400 flex items-center justify-center text-gray-900 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-medium text-gray-500 block">
                    Location
                  </span>
                  <span className="text-base font-medium text-gray-900">
                    Remote / Available Worldwide
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-amber-200/80">
              <span className="text-xs font-medium text-gray-700 uppercase tracking-wider block mb-2">
                Response Time
              </span>
              <p className="text-sm text-gray-600 font-light">
                Usually reply within 24–48 working hours.
              </p>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 bg-white p-2 rounded-3xl">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Name Input */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-900"
                >
                  Your Name <span className="text-amber-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="e.g. John Doe"
                  className="w-full px-5 py-3.5 rounded-2xl border-2 border-gray-200 focus:border-amber-400 focus:outline-none transition-colors text-sm text-gray-900 bg-gray-50/50"
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-900"
                >
                  Email Address <span className="text-amber-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="e.g. john@example.com"
                  className="w-full px-5 py-3.5 rounded-2xl border-2 border-gray-200 focus:border-amber-400 focus:outline-none transition-colors text-sm text-gray-900 bg-gray-50/50"
                />
              </div>

              {/* Service Select Options */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="service"
                  className="text-sm font-medium text-gray-900"
                >
                  What service are you looking for?
                </label>
                <select
                  id="service"
                  name="service"
                  defaultValue="Digital Marketing & SEO"
                  className="w-full px-5 py-3.5 rounded-2xl border-2 border-gray-200 focus:border-amber-400 focus:outline-none transition-colors text-sm text-gray-900 bg-gray-50/50"
                >
                  <option value="Digital Marketing & SEO">
                    Digital Marketing & SEO
                  </option>
                  <option value="Web & Digital Development">
                    Web & Digital Development
                  </option>
                  <option value="Graphic Design & Creative Work">
                    Graphic Design & Creative Work
                  </option>
                  <option value="Other / General Query">
                    Other / General Query
                  </option>
                </select>
              </div>

              {/* Message Textarea */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-900"
                >
                  Project Details / Message{" "}
                  <span className="text-amber-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me a little about your project, goals, or requirements..."
                  className="w-full px-5 py-3.5 rounded-2xl border-2 border-gray-200 focus:border-amber-400 focus:outline-none transition-colors text-sm text-gray-900 bg-gray-50/50 resize-none"
                ></textarea>
              </div>

              {/* Status Alert */}
              {status && (
                <div
                  className={`p-4 rounded-2xl text-sm flex items-center gap-3 ${
                    status.success
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {status.success && (
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-medium py-6 px-8 rounded-full text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2 mt-2 shadow-none"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
