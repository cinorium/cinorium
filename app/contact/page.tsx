import type { Metadata } from "next";
import { Mail, MessageCircle } from "lucide-react";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Cinorium | Discuss Your Website or Marketing Project",
  description:
    "Contact Cinorium to discuss web development, technical SEO, digital marketing strategy, and e-commerce growth for your business.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Cinorium | Discuss Your Website or Marketing Project",
    description:
      "Contact Cinorium to discuss web development, technical SEO, digital marketing strategy, and e-commerce growth for your business.",
    url: "https://www.cinorium.com/contact",
    type: "website",
  },
};

function LinkedinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

const whatsappUrl =
  "https://wa.me/923212481412?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20website%20or%20SEO%20project.";

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section
        id="contact-hero"
        className="w-full bg-blue-100 pt-28 sm:pt-36 pb-16 sm:pb-20 px-6 sm:px-10 md:px-16 lg:px-24 border-b border-black/10"
      >
        <div className="max-w-5xl mx-auto">
          {/* Eyebrow */}
          <span className="mb-4 inline-block w-max border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-widest text-gray-800 sm:text-sm">
            LET&apos;S TALK
          </span>

          {/* Heading */}
          <h1 className="mb-6 font-serif text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl">
            Let&apos;s Discuss Your Next Project.
          </h1>

          {/* Supporting Copy */}
          <p className="max-w-3xl text-base leading-relaxed text-gray-700 sm:text-lg">
            Whether you need a new website, improvements to an existing one, or
            a clearer SEO direction, tell us a little about your business and
            what you&apos;re trying to achieve. We&apos;ll use that information
            to understand your requirements and discuss the next practical steps.
          </p>
        </div>
      </section>

      {/* 2. Main Content & Form Grid */}
      <section
        id="contact-form-section"
        className="w-full bg-amber-50/40 py-16 sm:py-20 lg:py-24 px-6 sm:px-10 md:px-16 lg:px-24"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Direct Contact Information */}
            <aside
              aria-label="Contact Channels"
              className="lg:col-span-5 flex flex-col gap-6"
            >
              {/* Channels Card */}
              <div className="rounded-3xl border-2 border-black bg-white p-7 sm:p-9 shadow-sm">
                <h2 className="mb-2 font-serif text-2xl font-bold text-gray-900">
                  Contact Channels
                </h2>
                <p className="mb-8 text-sm leading-relaxed text-gray-600">
                  Direct ways to reach out, discuss requirements, or connect with
                  Cinorium.
                </p>

                <div className="flex flex-col gap-6">
                  {/* Channel: Email */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-2 border-gray-900 bg-amber-100 text-gray-900">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Business Email
                      </span>
                      <a
                        href="mailto:cinoriumadmin@gmail.com"
                        className="text-base font-semibold text-gray-900 transition-colors hover:text-amber-700 underline decoration-amber-400 underline-offset-4"
                      >
                        cinoriumadmin@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Channel: WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-2 border-gray-900 bg-amber-100 text-gray-900">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">
                        WhatsApp
                      </span>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-semibold text-gray-900 transition-colors hover:text-amber-700 underline decoration-amber-400 underline-offset-4"
                      >
                        Discuss on WhatsApp
                      </a>
                    </div>
                  </div>

                  {/* Channel: LinkedIn */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-2 border-gray-900 bg-amber-100 text-gray-900">
                      <LinkedinIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">
                        LinkedIn
                      </span>
                      <a
                        href="https://www.linkedin.com/in/cinorium/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-semibold text-gray-900 transition-colors hover:text-amber-700 underline decoration-amber-400 underline-offset-4"
                      >
                        linkedin.com/in/cinorium
                      </a>
                    </div>
                  </div>

                  {/* Channel: Instagram */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-2 border-gray-900 bg-amber-100 text-gray-900">
                      <InstagramIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Instagram
                      </span>
                      <a
                        href="https://www.instagram.com/cinorium_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-semibold text-gray-900 transition-colors hover:text-amber-700 underline decoration-amber-400 underline-offset-4"
                      >
                        @cinorium_
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* What Happens Next Card */}
              <div className="rounded-3xl border border-amber-200 bg-amber-100/40 p-7">
                <h3 className="mb-2 font-serif text-lg font-bold text-gray-900">
                  What Happens Next?
                </h3>
                <p className="text-sm leading-relaxed text-gray-700">
                  Your enquiry is received directly. We review your business
                  context, inspect your current digital setup if a website was
                  provided, and prepare thoughtful, practical next steps.
                </p>
              </div>
            </aside>

            {/* Right Column: Enquiry Form Card */}
            <main
              aria-labelledby="enquiry-form-heading"
              className="lg:col-span-7 rounded-3xl border-2 border-black bg-white p-7 sm:p-10 shadow-sm"
            >
              <div className="mb-8">
                <h2
                  id="enquiry-form-heading"
                  className="mb-2 font-serif text-2xl sm:text-3xl font-bold text-gray-900"
                >
                  Project Enquiry Form
                </h2>
                <p className="text-sm leading-relaxed text-gray-600">
                  Fill in your details below and we will follow up with you.
                </p>
              </div>

              {/* Client-side form with full validation & states */}
              <ContactForm />
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
