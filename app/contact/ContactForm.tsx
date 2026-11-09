"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

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
  service: "Digital Marketing Strategy",
  companyOrWebsite: "",
  budget: "Not decided yet",
  preferredContact: "Email",
  message: "",
  website_hp: "",
};

const serviceOptions = [
  "Digital Marketing Strategy",
  "Search Visibility & SEO",
  "Content & Social Media Marketing",
  "Paid Advertising & Customer Acquisition",
  "Email & E-commerce Growth",
  "Website Development & Optimization",
  "Graphic Design & Creative Support",
  "Comprehensive Growth Consultation",
  "Not Sure Yet",
];

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

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus(null);

    try {
      const payload = {
        ...formData,
        name: formData.name.trim(),
        email: formData.email.trim(),
        companyOrWebsite: formData.companyOrWebsite.trim(),
        message: formData.message.trim(),
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
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
            "Unable to submit your enquiry right now. Please check your inputs or contact us directly.",
        });
      }
    } catch {
      setStatus({
        success: false,
        message:
          "A network error occurred. Please check your connection or contact us directly.",
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
          className="rounded-3xl border-2 border-emerald-500/40 bg-emerald-50/80 p-8 text-center sm:p-10"
        >
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
            <CheckCircle2 className="h-8 w-8" />
          </div>

          <h3 className="mb-2 font-heading text-2xl font-bold text-[#0b131e]">
            Enquiry Received
          </h3>

          <p className="mx-auto max-w-md text-base font-light leading-relaxed text-gray-700">
            {status.message}
          </p>

          <p className="mt-3 text-sm font-light text-gray-600">
            We will review your requirements and follow up with a concrete next
            step via your preferred contact channel.
          </p>

          <Button
            type="button"
            variant="default"
            size="default"
            onClick={() => setStatus(null)}
            className="mt-6"
          >
            Send Another Enquiry
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Honeypot field for bot mitigation */}
          <div
            className="pointer-events-none absolute -left-[9999px] h-px w-px overflow-hidden"
            aria-hidden="true"
          >
            <label htmlFor="website_hp">Leave this field empty</label>
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

          {/* Error feedback */}
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

          {/* Name & Email */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-[#0b131e]"
              >
                Full Name <span className="text-[#ffb703]">*</span>
              </label>

              <Input
                type="text"
                id="name"
                name="name"
                required
                minLength={2}
                maxLength={100}
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Sarah Jenkins"
                autoComplete="name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-[#0b131e]"
              >
                Work Email <span className="text-[#ffb703]">*</span>
              </label>

              <Input
                type="email"
                id="email"
                name="email"
                required
                maxLength={150}
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
                autoComplete="email"
              />
            </div>
          </div>

          {/* Service & Company */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="service"
                className="text-sm font-semibold text-[#0b131e]"
              >
                Primary Objective <span className="text-[#ffb703]">*</span>
              </label>

              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="h-12 w-full rounded-2xl border-2 border-gray-200 bg-[#fdfbf7]/60 px-4 py-2 text-sm text-[#0b131e] transition-colors focus-visible:border-[#ffb703] focus-visible:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb703]"
              >
                {serviceOptions.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="companyOrWebsite"
                className="text-sm font-semibold text-[#0b131e]"
              >
                Company Name or Website{" "}
                <span className="text-xs font-normal text-gray-500">
                  (Optional)
                </span>
              </label>

              <Input
                type="text"
                id="companyOrWebsite"
                name="companyOrWebsite"
                maxLength={200}
                value={formData.companyOrWebsite}
                onChange={handleChange}
                placeholder="e.g. company.com"
              />
            </div>
          </div>

          {/* Budget & Preferred Contact */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="budget"
                className="text-sm font-semibold text-[#0b131e]"
              >
                Estimated Project Budget{" "}
                <span className="text-xs font-normal text-gray-500">
                  (Optional)
                </span>
              </label>

              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="h-12 w-full rounded-2xl border-2 border-gray-200 bg-[#fdfbf7]/60 px-4 py-2 text-sm text-[#0b131e] transition-colors focus-visible:border-[#ffb703] focus-visible:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb703]"
              >
                <option value="Not decided yet">Not decided yet</option>
                <option value="Under $1,000">Under $1,000</option>
                <option value="$1,000 – $2,500">$1,000 – $2,500</option>
                <option value="$2,500 – $5,000">$2,500 – $5,000</option>
                <option value="$5,000+">$5,000+</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="preferredContact"
                className="text-sm font-semibold text-[#0b131e]"
              >
                Preferred Contact Channel{" "}
                <span className="text-xs font-normal text-gray-500">
                  (Optional)
                </span>
              </label>

              <select
                id="preferredContact"
                name="preferredContact"
                value={formData.preferredContact}
                onChange={handleChange}
                className="h-12 w-full rounded-2xl border-2 border-gray-200 bg-[#fdfbf7]/60 px-4 py-2 text-sm text-[#0b131e] transition-colors focus-visible:border-[#ffb703] focus-visible:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb703]"
              >
                <option value="Email">Email</option>
                <option value="WhatsApp">WhatsApp</option>
                <option value="Phone Call">Phone Call</option>
              </select>
            </div>
          </div>

          {/* Project Details */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm font-semibold text-[#0b131e]"
            >
              Needs, Objectives &amp; Current Challenges{" "}
              <span className="text-[#ffb703]">*</span>
            </label>

            <Textarea
              id="message"
              name="message"
              rows={5}
              required
              minLength={10}
              maxLength={3000}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your business, current visibility roadblocks, target audience, and what commercial outcomes you want to achieve..."
            />
          </div>

          {/* Submit */}
          <div className="pt-2">
            <Button
              type="submit"
              variant="default"
              size="lg"
              disabled={isSubmitting}
              className="w-full gap-2 sm:w-auto"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin text-[#ffb703]" />
                  <span>Submitting Project Enquiry...</span>
                </>
              ) : (
                <>
                  <span>Send Project Enquiry</span>
                  <Send className="h-4 w-4 text-[#ffb703]" />
                </>
              )}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
