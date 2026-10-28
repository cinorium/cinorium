import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Cinorium",
  description:
    "Review the Terms of Service governing your use of the Cinorium website and our service engagement terms.",
  alternates: {
    canonical: "https://cinorium.com/terms",
  },
  openGraph: {
    title: "Terms of Service | Cinorium",
    description:
      "Review the Terms of Service governing your use of the Cinorium website and our service engagement terms.",
    url: "https://cinorium.com/terms",
    type: "website",
  },
};

export default function TermsOfServicePage() {
  const lastUpdated = "October 29, 2026";

  return (
    <div className="w-full bg-[#fcfbf7] min-h-screen text-gray-900">
      {/* Header Banner */}
      <section className="w-full bg-blue-100 border-b border-black/10 py-16 sm:py-20 md:py-24 px-5 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <span className="mb-3 inline-block border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-widest text-gray-800 sm:text-sm">
            Legal & Compliance
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm sm:text-base text-gray-600">
            Last Updated: <span className="font-medium text-gray-900">{lastUpdated}</span>
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-5 sm:px-8 md:px-12 py-12 sm:py-16 md:py-20">
        <div className="prose prose-gray max-w-none space-y-10 sm:space-y-12">
          {/* Agreement */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 border-b border-black/10 pb-3">
              1. Agreement to Terms
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              Welcome to Cinorium (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), operated by Muhammad Huzaifa. By accessing or using our website located at <strong className="text-gray-900">cinorium.com</strong> (&ldquo;the Website&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you disagree with any part of these Terms, please discontinue use of the Website.
            </p>
          </section>

          {/* Website Content & Purpose */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 border-b border-black/10 pb-3">
              2. Informational Purpose & No Professional Advice
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              The content provided across our website—including case studies, articles in our <Link href="/journal" className="underline font-semibold text-gray-900 hover:text-amber-800">Journal</Link>, service overviews, and technical writeups—is presented for general informational, educational, and marketing purposes only.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              While we share practical insights based on hands-on web development and search visibility experience, website content does not constitute formal legal, financial, or binding technical guarantees. Search engine algorithms, technology stacks, and market conditions continually evolve.
            </p>
          </section>

          {/* Services & Separate Client Agreements */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 border-b border-black/10 pb-3">
              3. Service Engagements & Written Contracts
            </h2>
            <div className="bg-white border border-black/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
              <p className="text-base leading-relaxed text-gray-700">
                <strong className="text-gray-900">No Self-Service Purchases:</strong> We do not sell pre-packaged items, physical merchandise, or instant digital downloads through an automated checkout on this website. Submitting an inquiry through our contact form does not create a binding client contract or impose a service obligation on either party.
              </p>
              <p className="text-base leading-relaxed text-gray-700">
                <strong className="text-gray-900">Separate Project Contracts:</strong> All professional web development, website engineering, and SEO consulting engagements are governed by separate, mutually agreed written proposals, statements of work (SOW), or service agreements. Such agreements define specific scopes of work, deliverables, payment milestones, timelines, and revision terms. In the event of any conflict between these Website Terms and a signed client contract, the signed client contract shall prevail.
              </p>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 border-b border-black/10 pb-3">
              4. Intellectual Property Rights
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              Unless otherwise noted, all content published on the Website—including text, graphics, logos, code snippets, articles, layouts, and visual design—is the intellectual property of Muhammad Huzaifa / Cinorium and is protected under copyright, trademark, and intellectual property laws.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              You may view, read, and share links to our public pages for non-commercial personal or evaluation use. You may not reproduce, redistribute, republish, or duplicate substantial portions of our site code, articles, or design without prior written consent.
            </p>
          </section>

          {/* Portfolio & Case Study Rights */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 border-b border-black/10 pb-3">
              5. Portfolio Showcase & Attribution
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              Cinorium reserves the right to showcase publicly available websites, technical architecture summaries, and non-confidential case studies in our portfolio, marketing materials, and social channels, unless explicitly prohibited by a signed Non-Disclosure Agreement (NDA) or custom contractual clause with the respective client.
            </p>
          </section>

          {/* Acceptable Use */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 border-b border-black/10 pb-3">
              6. Acceptable Use
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              When visiting or interacting with our Website, you agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
              <li>Submit false, fraudulent, defamatory, or abusive information through our contact forms.</li>
              <li>Attempt to compromise the security, rate-limiting systems, or availability of our servers or endpoints.</li>
              <li>Deploy automated bots, spiders, or scrapers that cause excessive server load or disrupt standard operation.</li>
              <li>Use the Website in any manner that violates applicable local, national, or international regulations.</li>
            </ul>
          </section>

          {/* Disclaimer of Warranties & Limitation of Liability */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 border-b border-black/10 pb-3">
              7. Disclaimer of Warranties & Limitation of Liability
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              The Website and its contents are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind, either express or implied. Cinorium makes no warranty that the site will be error-free, uninterrupted, or completely free of technical glitches.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              To the fullest extent permitted by law, Cinorium and Muhammad Huzaifa shall not be liable for any indirect, incidental, consequential, special, or punitive damages arising from your access to, use of, or inability to access the Website.
            </p>
          </section>

          {/* Governing Law */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 border-b border-black/10 pb-3">
              8. Governing Law
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              These Website Terms of Service shall be governed by and construed in accordance with the applicable laws governing digital communications and commerce. Specific project service agreements signed with clients may designate mutually agreed governing jurisdictions suited to the contracting entities.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mt-12 p-8 bg-blue-100/60 border border-black/10 rounded-2xl space-y-3">
            <h3 className="font-serif text-xl font-bold text-gray-900">
              Inquiries Regarding Terms
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              If you have any questions or require clarification regarding these Terms of Service, please reach out to us:
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

