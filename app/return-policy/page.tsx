
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Return & Refund Policy",
  description:
    "Read Cinorium's cancellation, payment, refund, and revision policies for digital marketing, growth, and technical services.",
  alternates: {
    canonical: "/return-policy",
  },
  openGraph: {
    title: "Return & Refund Policy | Cinorium",
    description:
      "Read Cinorium's cancellation, payment, refund, and revision policies for digital marketing, growth, and technical services.",
    url: "https://www.cinorium.com/return-policy",
    type: "website",
  },
};

export default function ReturnPolicyPage() {
  const lastUpdated = "November 9, 2026";

  return (
    <div className="w-full min-h-screen bg-[#fcfbf7] text-gray-900">
      {/* Header Banner */}
      <section className="w-full border-b border-black/10 bg-[#fdfbf7] px-5 py-16 sm:px-8 sm:py-20 md:px-12 md:py-24 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <span className="mb-3 inline-block border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-widest text-gray-800 sm:text-sm">
            Service Terms
          </span>

          <h1 className="font-heading text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Return & Refund Policy
          </h1>

          <p className="mt-4 text-sm text-gray-600 sm:text-base">
            Last Updated:{" "}
            <span className="font-medium text-gray-900">{lastUpdated}</span>
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16 md:px-12 md:py-20">
        <div className="prose prose-gray max-w-none space-y-10 sm:space-y-12">

          {/* Introduction */}
          <section className="space-y-4">
            <h2 className="border-b border-black/10 pb-3 font-heading text-2xl font-bold text-gray-900 sm:text-3xl">
              1. Scope of This Policy
            </h2>

            <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
              This Return & Refund Policy explains how Cinorium handles
              payments, cancellations, refunds, and service-related revision
              requests for its digital marketing and growth services.
            </p>

            <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
              Our services may include digital marketing strategy, search
              engine optimization and search visibility, content and social
              media marketing, paid advertising management, email marketing,
              e-commerce growth, customer retention, web development, and
              related technical implementation.
            </p>

            <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
              Since these engagements involve professional time, customized
              work, planning, research, and resources allocated to individual
              clients, they are not generally treated like ordinary retail
              product returns. Refund eligibility depends on the work
              performed, payments made, applicable project agreement, and
              circumstances of cancellation.
            </p>

            <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
              Any separately agreed terms for a particular project or service
              will take precedence over this general policy where they
              specifically address payment, cancellation, or refunds.
            </p>
          </section>

          {/* Proposals and Payments */}
          <section className="space-y-4">
            <h2 className="border-b border-black/10 pb-3 font-heading text-2xl font-bold text-gray-900 sm:text-3xl">
              2. Proposals, Payments & Billing
            </h2>

            <p className="text-base leading-relaxed text-gray-700">
              Before starting a project or ongoing engagement, Cinorium and
              the client may agree on a written proposal, quotation, invoice,
              service agreement, or Statement of Work (SOW). The applicable
              document will explain the agreed scope, fees, payment schedule,
              deliverables, and other relevant conditions.
            </p>

            <div className="space-y-4 rounded-2xl border border-black/10 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-base leading-relaxed text-gray-700">
                Depending on the nature of the engagement, payments may be
                structured in one or more of the following ways:
              </p>

              <ul className="list-disc space-y-3 pl-6 text-base text-gray-700">
                <li>
                  <strong className="text-gray-900">
                    Initial Deposit or Discovery Fee:
                  </strong>{" "}
                  An advance payment to reserve project capacity, begin
                  discovery, conduct research, develop a strategy, or initiate
                  planning and preparation.
                </li>

                <li>
                  <strong className="text-gray-900">
                    Project Milestone Payments:
                  </strong>{" "}
                  Payments linked to agreed stages, deliverables, or project
                  progress.
                </li>

                <li>
                  <strong className="text-gray-900">
                    Monthly or Recurring Fees:
                  </strong>{" "}
                  Payments for ongoing services such as SEO, content
                  marketing, social media management, advertising management,
                  or consulting.
                </li>

                <li>
                  <strong className="text-gray-900">
                    Third-Party and Additional Costs:
                  </strong>{" "}
                  Separate charges for advertising budgets, hosting, domains,
                  software, subscriptions, licenses, or other external
                  services, where applicable.
                </li>
              </ul>
            </div>

            <p className="text-base leading-relaxed text-gray-700">
              Payment amounts, due dates, accepted payment methods, and any
              applicable taxes or additional charges will be communicated
              before payment is required.
            </p>
          </section>

          {/* Deposits */}
          <section className="space-y-4">
            <h2 className="border-b border-black/10 pb-3 font-heading text-2xl font-bold text-gray-900 sm:text-3xl">
              3. Deposits & Advance Payments
            </h2>

            <p className="text-base leading-relaxed text-gray-700">
              An initial deposit may be used to reserve time, allocate
              resources, conduct discovery, perform research, or begin work
              specific to the client's requirements.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              Once the agreed work has commenced or resources have been
              committed, the portion of the deposit corresponding to work
              performed, time reserved where applicable, and non-recoverable
              costs may not be refundable.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              However, any advance amount that remains unearned and is not
              required to cover agreed or committed costs will be assessed
              for refund eligibility under the applicable project agreement
              and this policy.
            </p>
          </section>

          {/* Cancellation */}
          <section className="space-y-4">
            <h2 className="border-b border-black/10 pb-3 font-heading text-2xl font-bold text-gray-900 sm:text-3xl">
              4. Cancellation & Refund Guidelines
            </h2>

            <div className="space-y-4">
              <div className="space-y-2 rounded-2xl border border-black/10 bg-white p-6">
                <h3 className="font-heading text-lg font-bold text-gray-900">
                  A. Client-Initiated Project Cancellation
                </h3>

                <p className="text-base leading-relaxed text-gray-700">
                  If a client decides to cancel or terminate a project before
                  completion, written notice must be provided to Cinorium.
                </p>

                <p className="text-base leading-relaxed text-gray-700">
                  The client remains responsible for payment covering work
                  completed, milestones achieved, services already delivered,
                  and any approved or non-cancellable expenses incurred up to
                  the effective cancellation date.
                </p>

                <p className="text-base leading-relaxed text-gray-700">
                  Where the client has paid more than the amount due for work
                  performed and committed costs, the eligible unearned balance
                  will be assessed for refund. Any completed work or assets
                  will be handed over in accordance with the applicable
                  agreement and after outstanding payments have been settled.
                </p>
              </div>

              <div className="space-y-2 rounded-2xl border border-black/10 bg-white p-6">
                <h3 className="font-heading text-lg font-bold text-gray-900">
                  B. Cinorium-Initiated Cancellation
                </h3>

                <p className="text-base leading-relaxed text-gray-700">
                  If Cinorium is unable to continue an engagement and
                  terminates it without the client's breach or failure to
                  meet agreed responsibilities, the client will be informed
                  in writing.
                </p>

                <p className="text-base leading-relaxed text-gray-700">
                  Any eligible advance payment for services not performed
                  will be assessed for refund, after accounting for completed
                  work and agreed non-recoverable costs. Where appropriate,
                  completed deliverables will be provided subject to
                  settlement of outstanding amounts and the applicable
                  agreement.
                </p>
              </div>

              <div className="space-y-2 rounded-2xl border border-black/10 bg-white p-6">
                <h3 className="font-heading text-lg font-bold text-gray-900">
                  C. Monthly Services & Retainers
                </h3>

                <p className="text-base leading-relaxed text-gray-700">
                  Ongoing services, including SEO, content marketing, social
                  media management, advertising management, and consulting,
                  may be cancelled by providing written notice in accordance
                  with the relevant service agreement.
                </p>

                <p className="text-base leading-relaxed text-gray-700">
                  Where no specific notice period has been agreed, the
                  cancellation will generally take effect at the end of the
                  current paid billing period, subject to reasonable notice
                  and any outstanding commitments.
                </p>

                <p className="text-base leading-relaxed text-gray-700">
                  Fees for services already delivered or billing periods
                  already completed are generally non-refundable. If a
                  payment covers a future period in which services will not
                  be provided, the unused portion may be assessed for refund
                  according to the agreement and applicable circumstances.
                </p>
              </div>

              <div className="space-y-2 rounded-2xl border border-black/10 bg-white p-6">
                <h3 className="font-heading text-lg font-bold text-gray-900">
                  D. Cancellation Due to Client Non-Cooperation
                </h3>

                <p className="text-base leading-relaxed text-gray-700">
                  Projects may be delayed or affected if a client does not
                  provide required information, materials, account access,
                  approvals, feedback, or payments.
                </p>

                <p className="text-base leading-relaxed text-gray-700">
                  Cinorium may pause or terminate an engagement in accordance
                  with the project agreement if these issues remain
                  unresolved. Any refund assessment will take into account
                  work already performed, committed resources, and
                  non-recoverable expenses.
                </p>
              </div>
            </div>
          </section>

          {/* Third Party Costs */}
          <section className="space-y-4">
            <h2 className="border-b border-black/10 pb-3 font-heading text-2xl font-bold text-gray-900 sm:text-3xl">
              5. Third-Party Expenses & External Services
            </h2>

            <p className="text-base leading-relaxed text-gray-700">
              Some projects require third-party products or services that are
              separate from Cinorium's professional fees. These may include:
            </p>

            <ul className="list-disc space-y-2 pl-6 text-base text-gray-700">
              <li>Paid advertising budgets and platform charges.</li>
              <li>Domain registrations and web hosting.</li>
              <li>Software subscriptions and marketing tools.</li>
              <li>Premium themes, plugins, fonts, stock assets, and licenses.</li>
              <li>External contractor, vendor, or service-provider costs.</li>
            </ul>

            <p className="text-base leading-relaxed text-gray-700">
              Where these expenses have been approved by the client and paid
              to, or committed with, an external provider, they may be
              non-refundable and subject to that provider's own policies.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              Cinorium cannot guarantee refunds for charges controlled by
              external platforms or providers. Any recoverable amount will
              be handled according to the relevant provider's terms and the
              client's agreement with Cinorium.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              Advertising budgets and third-party subscription charges
              should not be confused with Cinorium's service fees.
            </p>
          </section>

          {/* Revisions and Defects */}
          <section className="space-y-4">
            <h2 className="border-b border-black/10 pb-3 font-heading text-2xl font-bold text-gray-900 sm:text-3xl">
              6. Revisions, Corrections & Technical Issues
            </h2>

            <p className="text-base leading-relaxed text-gray-700">
              Cinorium aims to deliver work in accordance with the agreed
              project scope and approved requirements. Revision limits,
              review stages, and approval procedures will be defined in the
              relevant proposal or service agreement.
            </p>

            <ul className="list-disc space-y-3 pl-6 text-base text-gray-700">
              <li>
                <strong className="text-gray-900">
                  Included Revisions:
                </strong>{" "}
                Clients may request revisions within the number of rounds
                and scope specified in their agreement.
              </li>

              <li>
                <strong className="text-gray-900">
                  Additional Requests:
                </strong>{" "}
                New features, substantial changes in direction, expanded
                requirements, or work outside the agreed scope may require
                additional fees and revised timelines.
              </li>

              <li>
                <strong className="text-gray-900">
                  Technical Defects:
                </strong>{" "}
                If a technical deliverable contains a reproducible defect
                directly caused by Cinorium's implementation and covered by
                the agreed scope, Cinorium will make reasonable efforts to
                correct it without additional service fees within the
                applicable support or correction period specified in the
                agreement.
              </li>

              <li>
                <strong className="text-gray-900">
                  Excluded Issues:
                </strong>{" "}
                Issues caused by third-party updates, external platforms,
                unauthorized modifications, client-provided materials,
                hosting failures, or changes outside Cinorium's control may
                fall outside the included correction commitment.
              </li>
            </ul>

            <p className="text-base leading-relaxed text-gray-700">
              A revision request, change in preference, or request for
              additional work does not automatically qualify for a refund.
              Any concerns about a deliverable should first be raised with
              Cinorium so that the matter can be reviewed against the agreed
              scope.
            </p>
          </section>

          {/* Marketing Performance */}
          <section className="space-y-4">
            <h2 className="border-b border-black/10 pb-3 font-heading text-2xl font-bold text-gray-900 sm:text-3xl">
              7. Marketing Performance & Expected Results
            </h2>

            <p className="text-base leading-relaxed text-gray-700">
              Digital marketing and growth services depend on many factors,
              including market conditions, competition, customer behaviour,
              advertising platforms, search engine algorithms, website
              performance, and client participation.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              Unless a specific outcome is expressly guaranteed in a
              separate written agreement, Cinorium does not guarantee
              particular search rankings, website traffic, leads, sales,
              revenue, conversion rates, advertising returns, or business
              growth.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              Failure to achieve a particular marketing target or expected
              commercial result does not, by itself, establish eligibility
              for a refund where the agreed services have been performed.
              Concerns about service delivery will be reviewed against the
              agreed scope and commitments.
            </p>
          </section>

          {/* Refund Process */}
          <section className="space-y-4">
            <h2 className="border-b border-black/10 pb-3 font-heading text-2xl font-bold text-gray-900 sm:text-3xl">
              8. How to Request a Refund
            </h2>

            <p className="text-base leading-relaxed text-gray-700">
              To request a cancellation or refund review, the client should
              contact Cinorium in writing using the contact details below.
              Please include:
            </p>

            <ul className="list-disc space-y-2 pl-6 text-base text-gray-700">
              <li>Your name and the email address used for the engagement.</li>
              <li>The relevant project, service, or invoice reference.</li>
              <li>The payment amount and date, where available.</li>
              <li>The reason for the cancellation or refund request.</li>
              <li>Any relevant supporting information.</li>
            </ul>

            <p className="text-base leading-relaxed text-gray-700">
              Cinorium will review the request, the applicable agreement,
              completed work, outstanding obligations, and any relevant
              third-party costs before communicating its decision.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              If a refund is approved, it will generally be processed using
              the original payment method where reasonably possible. The
              processing time may depend on the payment provider, bank, or
              financial institution involved.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              If the original payment method is unavailable, an alternative
              arrangement may be agreed upon with the client.
            </p>
          </section>

          {/* Legal Rights */}
          <section className="space-y-4">
            <h2 className="border-b border-black/10 pb-3 font-heading text-2xl font-bold text-gray-900 sm:text-3xl">
              9. Applicable Rights & Exceptions
            </h2>

            <p className="text-base leading-relaxed text-gray-700">
              Nothing in this policy is intended to exclude, restrict, or
              override any consumer or other legal rights that cannot
              lawfully be excluded or restricted under applicable law.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              Where a mandatory legal requirement provides a refund,
              cancellation, or other remedy, that requirement will apply
              notwithstanding any general provision in this policy.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              This policy should be read together with Cinorium's{" "}
              <a
                href="/terms"
                className="font-semibold underline decoration-amber-500 underline-offset-2 hover:text-amber-800"
              >
                Terms of Service
              </a>{" "}
              and any separate written agreement applicable to the client's
              engagement.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mt-12 space-y-3 rounded-2xl border border-black/10 bg-[#fdfbf7]/60 p-8">
            <h3 className="font-heading text-xl font-bold text-gray-900">
              Questions About Payments or Refunds?
            </h3>

            <p className="text-base leading-relaxed text-gray-700">
              For questions about invoices, project payments, cancellations,
              or refund requests, contact Cinorium using the details below:
            </p>

            <div className="space-y-1 pt-2 text-sm text-gray-800">
              <p>
                <strong className="text-gray-900">Brand:</strong> Cinorium
              </p>

              <p>
                <strong className="text-gray-900">
                  Founder / Principal:
                </strong>{" "}
                Muhammad Huzaifa
              </p>

              <p>
                <strong className="text-gray-900">Email:</strong>{" "}
                <a
                  href="mailto:cinoriumadmin@gmail.com"
                  className="font-semibold underline hover:text-amber-800"
                >
                  cinoriumadmin@gmail.com
                </a>
              </p>

              <p>
                <strong className="text-gray-900">WhatsApp:</strong>{" "}
                <a
                  href="https://wa.me/923212481412"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline hover:text-amber-800"
                >
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
