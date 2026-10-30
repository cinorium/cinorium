import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Return & Refund Policy | Cinorium",
  description:
    "Review Cinorium's return, refund, and cancellation policies for custom web development and digital marketing services.",
  alternates: {
    canonical: "/return-policy",
  },
  openGraph: {
    title: "Return & Refund Policy | Cinorium",
    description:
      "Review Cinorium's return, refund, and cancellation policies for custom web development and digital marketing services.",
    url: "https://www.cinorium.com/return-policy",
    type: "website",
  },
};

export default function ReturnPolicyPage() {
  const lastUpdated = "October 29, 2026";

  return (
    <div className="w-full bg-[#fcfbf7] min-h-screen text-gray-900">
      {/* Header Banner */}
      <section className="w-full bg-blue-100 border-b border-black/10 py-16 sm:py-20 md:py-24 px-5 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <span className="mb-3 inline-block border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-widest text-gray-800 sm:text-sm">
            Service Terms
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
            Return & Refund Policy
          </h1>
          <p className="mt-4 text-sm sm:text-base text-gray-600">
            Last Updated: <span className="font-medium text-gray-900">{lastUpdated}</span>
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-5 sm:px-8 md:px-12 py-12 sm:py-16 md:py-20">
        <div className="prose prose-gray max-w-none space-y-10 sm:space-y-12">
          {/* Nature of Services */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 border-b border-black/10 pb-3">
              1. Nature of Our Services
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              Cinorium provides bespoke website development, full-stack web engineering, and technical SEO consulting. We do <strong className="text-gray-900">not</strong> operate an e-commerce retail store, nor do we sell boxed physical goods or automated digital instant downloads.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              Because our work involves custom labor, intellectual effort, technical strategy, and dedicated time reserved specifically for your business, standard retail return policies do not apply. This policy outlines how milestone billing, cancellations, and revision requests are handled.
            </p>
          </section>

          {/* Project Billing & Milestone Structure */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 border-b border-black/10 pb-3">
              2. Custom Proposals & Milestone Billing
            </h2>
            <div className="bg-white border border-black/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
              <p className="text-base leading-relaxed text-gray-700">
                Prior to commencing any web development or SEO engagement, both parties agree upon a detailed written proposal or Statement of Work (SOW). Projects typically operate on a phased milestone schedule:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                <li><strong className="text-gray-900">Project Deposit / Discovery Fee:</strong> An initial payment required to secure calendar scheduling, conduct discovery analysis, and begin initial architecture or research.</li>
                <li><strong className="text-gray-900">Progress Milestones:</strong> Intermediate payments scheduled upon achieving specific deliverables (e.g., prototype approval, core feature implementation, or technical SEO audit completion).</li>
                <li><strong className="text-gray-900">Final Milestone / Launch Payment:</strong> Due upon final quality assurance, client sign-off, and handover or deployment to production servers.</li>
              </ul>
            </div>
          </section>

          {/* Cancellation & Refund Terms */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 border-b border-black/10 pb-3">
              3. Cancellation & Refund Guidelines
            </h2>
            <div className="space-y-4">
              <div className="border border-black/10 rounded-2xl p-6 bg-white space-y-2">
                <h3 className="font-serif text-lg font-bold text-gray-900">
                  Initial Project Deposits
                </h3>
                <p className="text-base leading-relaxed text-gray-700">
                  Initial deposits are generally non-refundable once work has commenced. The deposit compensates for dedicated calendar reservation, initial technical scoping, client consultations, and architectural planning.
                </p>
              </div>

              <div className="border border-black/10 rounded-2xl p-6 bg-white space-y-2">
                <h3 className="font-serif text-lg font-bold text-gray-900">
                  Client-Initiated Cancellation During Active Projects
                </h3>
                <p className="text-base leading-relaxed text-gray-700">
                  If a client chooses to pause or terminate an active project before completion, written notice must be provided. The client is responsible for payment covering all hours invested and milestones achieved up to the cancellation notice. Any unearned portion of advance milestone payments for work not yet initiated will be promptly refunded. Completed work and code assets delivered up to that point will be transferred to the client upon settlement.
                </p>
              </div>

              <div className="border border-black/10 rounded-2xl p-6 bg-white space-y-2">
                <h3 className="font-serif text-lg font-bold text-gray-900">
                  SEO Retainers & Ongoing Consulting
                </h3>
                <p className="text-base leading-relaxed text-gray-700">
                  Monthly SEO retainers or ongoing advisory agreements can be cancelled with written notice according to the timeline specified in the service agreement (typically 14 to 30 days prior to the start of the next billing cycle). Fees for months already completed or underway are non-refundable.
                </p>
              </div>
            </div>
          </section>

          {/* Quality Assurance & Revision Process */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 border-b border-black/10 pb-3">
              4. Revisions & Satisfaction Process
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              Our goal is to build long-term relationships through high-quality craftsmanship and clear communication. To ensure complete alignment:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
              <li>Each project scope includes specified rounds of revisions at key milestones (wireframing, visual review, and staging acceptance).</li>
              <li>Clients have the opportunity to review and request modifications before code is deployed to live environments.</li>
              <li>Should unexpected technical issues or bugs occur within 30 days of launch that were part of the agreed scope, we provide corrective maintenance at no extra charge.</li>
            </ul>
          </section>

          {/* Contact Information */}
          <section className="mt-12 p-8 bg-blue-100/60 border border-black/10 rounded-2xl space-y-3">
            <h3 className="font-serif text-xl font-bold text-gray-900">
              Questions About Your Project or Billing?
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              If you have any questions about an invoice, project milestone, or cancellation terms, please reach out directly:
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
