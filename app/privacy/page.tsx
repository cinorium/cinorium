import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Cinorium",
  description:
    "Learn how Cinorium collects, uses, and protects your information when you browse our website or submit an inquiry.",
  alternates: {
    canonical: "https://cinorium.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Cinorium",
    description:
      "Learn how Cinorium collects, uses, and protects your information when you browse our website or submit an inquiry.",
    url: "https://cinorium.com/privacy",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "October 29, 2026";

  return (
    <div className="w-full bg-[#fcfbf7] min-h-screen text-gray-900">
      {/* Header Banner */}
      <section className="w-full bg-blue-100 border-b border-black/10 py-16 sm:py-20 md:py-24 px-5 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <span className="mb-3 inline-block border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-widest text-gray-800 sm:text-sm">
            Legal & Transparency
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm sm:text-base text-gray-600">
            Last Updated: <span className="font-medium text-gray-900">{lastUpdated}</span>
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-5 sm:px-8 md:px-12 py-12 sm:py-16 md:py-20">
        <div className="prose prose-gray max-w-none space-y-10 sm:space-y-12">
          {/* Introduction */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 border-b border-black/10 pb-3">
              1. Overview
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              Cinorium (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), founded and operated by Muhammad Huzaifa, provides website development and search engine optimization (SEO) consulting services. We respect your privacy and are committed to handling any personal information you share with us honestly, transparently, and securely.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              This Privacy Policy explains what information we collect when you visit <strong className="text-gray-900">cinorium.com</strong>, how we use that information, and the choices you have regarding your personal data.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 border-b border-black/10 pb-3">
              2. Information We Collect
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              Cinorium is a specialized digital service brand. We do not operate customer account portals, membership systems, public discussion boards, or self-service shopping carts on this website. Consequently, we collect only the minimal data necessary to communicate with you:
            </p>

            <div className="bg-white border border-black/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-900">
                A. Information You Voluntarily Provide
              </h3>
              <p className="text-base leading-relaxed text-gray-700">
                When you contact us via our contact form (<Link href="/contact" className="underline font-semibold text-gray-900 hover:text-amber-800">cinorium.com/contact</Link>) or directly via email or messaging apps, you may provide:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                <li><strong className="text-gray-900">Contact Information:</strong> Your name and email address.</li>
                <li><strong className="text-gray-900">Project Details:</strong> Your selected service interest (Web Development, SEO, or General Consultation), estimated budget range, and project description.</li>
                <li><strong className="text-gray-900">Communication Preferences:</strong> How you prefer us to reply (email or WhatsApp) and any phone or handle you choose to supply.</li>
              </ul>
            </div>

            <div className="bg-white border border-black/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-900">
                B. Technical and Server Logs
              </h3>
              <p className="text-base leading-relaxed text-gray-700">
                Like virtually all web applications, our web hosting infrastructure automatically receives standard HTTP request data when your browser requests a page. This may include your IP address, browser type, operating system, referring URL, and timestamp.
              </p>
              <p className="text-base leading-relaxed text-gray-700">
                Additionally, our contact form uses an automated, in-memory IP rate-limiting mechanism (such as limiting submissions to a reasonable window) to protect against automated spam, credential attacks, and distributed denial-of-service (DDoS) abuse.
              </p>
            </div>
          </section>

          {/* Cookies and Tracking */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 border-b border-black/10 pb-3">
              3. Cookies and Tracking Technologies
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              <strong className="text-gray-900">We do not use advertising tracking pixels or cross-site tracking cookies.</strong>
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              Cinorium does not install behavioral advertising cookies (such as Facebook Pixel, Google Ads remarketing pixels, or third-party data broker scripts) on this website. Any cookies that may be utilized by our hosting platform (e.g., Vercel) are strictly functional or security-related, intended solely to ensure network stability and protect web traffic.
            </p>
          </section>

          {/* How We Use Your Information */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 border-b border-black/10 pb-3">
              4. How We Use Your Information
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              Any information collected is used exclusively for legitimate business purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
              <li>To evaluate your project inquiry and determine if our services align with your goals.</li>
              <li>To communicate with you regarding quotes, project discovery, and technical consultations.</li>
              <li>To draft proposals, statements of work, or service agreements if you choose to work together.</li>
              <li>To safeguard the security and integrity of our website infrastructure.</li>
            </ul>
            <p className="text-base leading-relaxed text-gray-700 font-medium text-gray-900">
              We never sell, rent, lease, or monetize your contact information or project details to third-party advertisers or data brokers.
            </p>
          </section>

          {/* Third-Party Service Providers */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 border-b border-black/10 pb-3">
              5. Service Providers & Third Parties
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              We may utilize trusted infrastructure partners to operate our website and communicate with prospective clients:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
              <li><strong className="text-gray-900">Hosting & Delivery:</strong> Vercel (cloud hosting and global edge delivery).</li>
              <li><strong className="text-gray-900">Email Transmission:</strong> Secure SMTP email delivery providers (such as Google Workspace / Gmail SMTP) to route contact form inquiries directly to our administrative inbox.</li>
            </ul>
            <p className="text-base leading-relaxed text-gray-700">
              These service providers process data only as instructed to fulfill hosting and email routing operations.
            </p>
          </section>

          {/* External Links */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 border-b border-black/10 pb-3">
              6. External Links & Social Platforms
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              Our website may contain links to external websites, client case studies, or third-party platforms (such as LinkedIn, Instagram, or YouTube). We are not responsible for the privacy practices, content, or data policies of these external sites. We encourage you to review their policies when navigating away from our domain.
            </p>
          </section>

          {/* Data Retention & Security */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 border-b border-black/10 pb-3">
              7. Data Retention & Security
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              We retain project inquiries and business correspondence for as long as necessary to fulfill the business relationship, provide ongoing support, maintain accurate accounting records, or satisfy regulatory requirements.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              We employ standard administrative and technical safeguards (including HTTPS encryption, TLS email transfer, and environment isolation) to protect your personal details against unauthorized access or disclosure.
            </p>
          </section>

          {/* Your Data Rights */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 border-b border-black/10 pb-3">
              8. Your Rights & Choices
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              Depending on your location, you may have statutory rights regarding your personal information, including the right to request access, correction, or deletion of your information from our direct business records.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              To submit a request or inquire about any data you have submitted to us, please email us directly at <a href="mailto:cinoriumadmin@gmail.com" className="font-semibold text-gray-900 underline decoration-amber-400 underline-offset-4 hover:text-amber-800">cinoriumadmin@gmail.com</a>. We will respond promptly.
            </p>
          </section>

          {/* Changes to this Policy */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 border-b border-black/10 pb-3">
              9. Policy Updates
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              We may update this Privacy Policy from time to time to reflect changes in our service offerings, operational practices, or legal requirements. Any modifications will be posted directly to this page with an updated revision date.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mt-12 p-8 bg-blue-100/60 border border-black/10 rounded-2xl space-y-3">
            <h3 className="font-serif text-xl font-bold text-gray-900">
              Questions or Concerns?
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              For any questions regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="pt-2 text-sm text-gray-800 space-y-1">
              <p><strong className="text-gray-900">Brand:</strong> Cinorium</p>
              <p><strong className="text-gray-900">Founder / Principal:</strong> Muhammad Huzaifa</p>
              <p>
                <strong className="text-gray-900">Email:</strong>{" "}
                <a href="mailto:cinoriumadmin@gmail.com" className="underline font-semibold hover:text-amber-800">
                  cinoriumadmin@gmail.com
                </a>
              </p>
              <p>
                <strong className="text-gray-900">WhatsApp:</strong>{" "}
                <a href="https://wa.me/923212481412" target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:text-amber-800">
                  +92 321 2481412
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
