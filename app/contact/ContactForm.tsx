"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  service: string;
  companyOrWebsite: string;
  budget: string;
  preferredContact: string;
  message: string;
  website_hp: string;
}

const initialFormState: FormState = {
  name: "",
  email: "",
  service: "Website Development",
  companyOrWebsite: "",
  budget: "Not decided yet",
  preferredContact: "Email",
  message: "",
  website_hp: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => null);

      if (res.ok && data?.success) {
        setStatus({
          success: true,
          message:
            data.message ||
            "Thank you for contacting Cinorium. Your enquiry has been submitted successfully.",
        });
        setFormData(initialFormState);
      } else {
        setStatus({
          success: false,
          message:
            data?.message ||
            "Unable to submit your enquiry right now. Please check your inputs or message us on WhatsApp.",
        });
      }
    } catch {
      setStatus({
        success: false,
        message:
          "Network error encountered. Please check your connection or reach out directly on WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="w-full">
      {status?.success ? (
        <div
          role="status"
          aria-live="polite"
          className="rounded-2xl border-2 border-emerald-500/40 bg-emerald-50/80 p-8 text-center sm:p-10"
        >
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h3 className="mb-2 font-serif text-2xl font-bold text-gray-900">
            Enquiry Received
          </h3>
          <p className="mx-auto max-w-md text-base leading-relaxed text-gray-700">
            {status.message}
          </p>
          <p className="mt-3 text-sm text-gray-600">
            We will review your requirements and follow up via your preferred
            contact method.
          </p>
          <button
            type="button"
            onClick={() => setStatus(null)}
            className="mt-6 inline-flex items-center justify-center rounded-xl border border-gray-900 bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            Send Another Enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
          {/* Honeypot field for bot mitigation (hidden from real users) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website_hp">Leave this empty</label>
            <input
              type="text"
              id="website_hp"
              name="website_hp"
              value={formData.website_hp}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* Feedback error alert if any */}
          {status && !status.success && (
            <div
              role="alert"
              aria-live="polite"
              className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50/90 p-4 text-sm text-red-800"
            >
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
              <div className="leading-relaxed">{status.message}</div>
            </div>
          )}

          {/* Name & Email Row */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Full Name */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-gray-900"
              >
                Full Name <span className="text-amber-600">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Sarah Jenkins"
                className="w-full rounded-2xl border-2 border-gray-200 bg-gray-50/60 px-4 py-3.5 text-sm text-gray-900 transition-colors focus:border-amber-400 focus:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              />
            </div>

            {/* Email Address */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-900"
              >
                Email Address <span className="text-amber-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
                className="w-full rounded-2xl border-2 border-gray-200 bg-gray-50/60 px-4 py-3.5 text-sm text-gray-900 transition-colors focus:border-amber-400 focus:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              />
            </div>
          </div>

          {/* Service & Company Row */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Service Interested In */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="service"
                className="text-sm font-semibold text-gray-900"
              >
                Service Interested In <span className="text-amber-600">*</span>
              </label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full rounded-2xl border-2 border-gray-200 bg-gray-50/60 px-4 py-3.5 text-sm text-gray-900 transition-colors focus:border-amber-400 focus:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <option value="Website Development">Website Development</option>
                <option value="WordPress Development">
                  WordPress Development
                </option>
                <option value="SEO & Search Visibility">
                  SEO & Search Visibility
                </option>
                <option value="Technical SEO">Technical SEO</option>
                <option value="On-Page SEO & Content">
                  On-Page SEO & Content
                </option>
                <option value="Other / Not Sure Yet">
                  Other / Not Sure Yet
                </option>
              </select>
            </div>

            {/* Company or Website URL (Optional) */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="companyOrWebsite"
                className="text-sm font-semibold text-gray-900"
              >
                Company or Website{" "}
                <span className="text-xs font-normal text-gray-500">
                  (Optional)
                </span>
              </label>
              <input
                type="text"
                id="companyOrWebsite"
                name="companyOrWebsite"
                value={formData.companyOrWebsite}
                onChange={handleChange}
                placeholder="e.g. yourcompany.com"
                className="w-full rounded-2xl border-2 border-gray-200 bg-gray-50/60 px-4 py-3.5 text-sm text-gray-900 transition-colors focus:border-amber-400 focus:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              />
            </div>
          </div>

          {/* Budget & Preferred Contact Method Row */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Budget Range (Optional) */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="budget"
                className="text-sm font-semibold text-gray-900"
              >
                Estimated Budget{" "}
                <span className="text-xs font-normal text-gray-500">
                  (Optional)
                </span>
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full rounded-2xl border-2 border-gray-200 bg-gray-50/60 px-4 py-3.5 text-sm text-gray-900 transition-colors focus:border-amber-400 focus:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <option value="Not decided yet">Not decided yet</option>
                <option value="Under $1,000">Under $1,000</option>
                <option value="$1,000 – $2,500">$1,000 – $2,500</option>
                <option value="$2,500 – $5,000">$2,500 – $5,000</option>
                <option value="$5,000+">$5,000+</option>
              </select>
            </div>

            {/* Preferred Contact Method (Optional) */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="preferredContact"
                className="text-sm font-semibold text-gray-900"
              >
                Preferred Contact Method{" "}
                <span className="text-xs font-normal text-gray-500">
                  (Optional)
                </span>
              </label>
              <select
                id="preferredContact"
                name="preferredContact"
                value={formData.preferredContact}
                onChange={handleChange}
                className="w-full rounded-2xl border-2 border-gray-200 bg-gray-50/60 px-4 py-3.5 text-sm text-gray-900 transition-colors focus:border-amber-400 focus:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <option value="Email">Email</option>
                <option value="WhatsApp">WhatsApp</option>
                <option value="Phone Call">Phone Call</option>
              </select>
            </div>
          </div>

          {/* Project Details Textarea */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm font-semibold text-gray-900"
            >
              Project Details <span className="text-amber-600">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your business, what you want to achieve with your website or SEO, and any specific requirements or questions..."
              className="w-full resize-none rounded-2xl border-2 border-gray-200 bg-gray-50/60 px-4 py-3.5 text-sm leading-relaxed text-gray-900 transition-colors focus:border-amber-400 focus:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            />
          </div>

          {/* Submit Action */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl bg-black px-8 py-4 text-center text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-900 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:text-base"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin text-amber-400" />
                  <span>Sending Project Enquiry...</span>
                </>
              ) : (
                <>
                  <span>Send Project Enquiry</span>
                  <Send className="h-4 w-4 text-amber-400 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
