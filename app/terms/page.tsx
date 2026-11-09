
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Review the Terms of Service governing your use of the Cinorium website, digital marketing services, and professional engagements.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Service | Cinorium",
    description:
      "Review the Terms of Service governing your use of the Cinorium website, digital marketing services, and professional engagements.",
    url: "https://www.cinorium.com/terms",
    type: "website",
  },
};

export default function TermsOfServicePage() {
  const lastUpdated = "November 9, 2026";

  return (
    <div className="w-full bg-[#fcfbf7] min-h-screen text-gray-900">
      {/* Header Banner */}
      <section className="w-full bg-[#fdfbf7] border-b border-black/10 py-16 sm:py-20 md:py-24 px-5 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <span className="mb-3 inline-block border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-widest text-gray-800 sm:text-sm">
            Legal & Compliance
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm sm:text-base text-gray-600">
            Last Updated:{" "}
            <span className="font-medium text-gray-900">
              {lastUpdated}
            </span>
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-5 sm:px-8 md:px-12 py-12 sm:py-16 md:py-20">
        <div className="prose prose-gray max-w-none space-y-10 sm:space-y-12">

          {/* 1. Agreement */}
          <section className="space-y-4">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 border-b border-black/10 pb-3">
              1. Agreement to Terms
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              Welcome to Cinorium (&ldquo;we,&rdquo; &ldquo;our,&rdquo;
              or &ldquo;us&rdquo;), a digital marketing and growth
              agency founded and operated by Muhammad Huzaifa.
              These Terms of Service (&ldquo;Terms&rdquo;) govern
              your access to and use of our website located at{" "}
              <strong className="text-gray-900">cinorium.com</strong>
              (&ldquo;Website&rdquo;), including its content,
              resources, and interactive features.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              By accessing or using the Website, you agree to
              these Terms. If you do not agree with them, please
              discontinue your use of the Website.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              These Website Terms should be read alongside our{" "}
              <Link
                href="/privacy"
                className="underline font-semibold text-gray-900 hover:text-amber-800"
              >
                Privacy Policy
              </Link>
              . Specific professional engagements may also be
              subject to separate written agreements.
            </p>
          </section>

          {/* 2. Website Content */}
          <section className="space-y-4">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 border-b border-black/10 pb-3">
              2. Website Content and Informational Purpose
            </h2>

            <p className="text-base leading-relaxed text-gray-700">
              Content published on our Website, including service
              descriptions, case studies, articles in our{" "}
              <Link
                href="/journal"
                className="underline font-semibold text-gray-900 hover:text-amber-800"
              >
                Journal
              </Link>
              , educational resources, technical explanations,
              and marketing materials, is provided for general
              informational, educational, and promotional purposes.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              While we aim to provide useful and accurate
              information, website content should not be treated
              as individualized legal, financial, tax, or other
              regulated professional advice.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              Information published on the Website may change
              over time. You should independently assess whether
              any information is appropriate for your particular
              business, circumstances, or objectives before
              relying on it.
            </p>
          </section>

          {/* 3. Services and Engagements */}
          <section className="space-y-4">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 border-b border-black/10 pb-3">
              3. Services and Professional Engagements
            </h2>

            <div className="bg-white border border-black/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
              <h3 className="font-heading text-lg sm:text-xl font-bold text-gray-900">
                A. Scope of Services
              </h3>

              <p className="text-base leading-relaxed text-gray-700">
                Cinorium provides digital marketing, business
                growth, and supporting technical services. Depending
                on the agreed requirements, our services may include:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                <li>Digital marketing strategy and planning.</li>
                <li>Search engine optimization and search visibility.</li>
                <li>Content marketing and social media marketing.</li>
                <li>Paid advertising and customer acquisition.</li>
                <li>Email marketing and customer communication.</li>
                <li>E-commerce growth and customer retention.</li>
                <li>
                  Website development, technical implementation,
                  and supporting digital solutions.
                </li>
              </ul>

              <p className="text-base leading-relaxed text-gray-700">
                The availability, scope, and suitability of
                individual services depend on the requirements
                of each project and our mutual agreement.
              </p>
            </div>

            <div className="bg-white border border-black/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
              <h3 className="font-heading text-lg sm:text-xl font-bold text-gray-900">
                B. No Automatic Service Contract
              </h3>

              <p className="text-base leading-relaxed text-gray-700">
                Submitting a contact form, sending an email,
                communicating through WhatsApp, or using any
                website inquiry feature does not automatically
                establish a professional service contract or
                guarantee acceptance of a project.
              </p>

              <p className="text-base leading-relaxed text-gray-700">
                Service availability, project suitability,
                pricing, and proposed timelines are evaluated
                individually.
              </p>
            </div>

            <div className="bg-white border border-black/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
              <h3 className="font-heading text-lg sm:text-xl font-bold text-gray-900">
                C. Separate Project Agreements
              </h3>

              <p className="text-base leading-relaxed text-gray-700">
                Professional engagements are governed by separate
                written proposals, statements of work (SOW),
                service agreements, or other mutually accepted
                project documents.
              </p>

              <p className="text-base leading-relaxed text-gray-700">
                These documents may define:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                <li>Agreed scope of work and deliverables.</li>
                <li>Project fees and payment arrangements.</li>
                <li>Project milestones and estimated timelines.</li>
                <li>Client responsibilities and required resources.</li>
                <li>Revision limits and approval procedures.</li>
                <li>Ownership and licensing of project materials.</li>
                <li>Cancellation, termination, and refund conditions.</li>
                <li>Confidentiality and portfolio permissions.</li>
              </ul>

              <p className="text-base leading-relaxed text-gray-700">
                If a provision in a mutually accepted project
                agreement conflicts with these general Website
                Terms regarding that engagement, the specific
                project agreement will take precedence to the
                extent of the conflict.
              </p>
            </div>
          </section>

          {/* 4. No Guaranteed Results */}
          <section className="space-y-4">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 border-b border-black/10 pb-3">
              4. Marketing Results and Performance Limitations
            </h2>

            <p className="text-base leading-relaxed text-gray-700">
              Digital marketing, search visibility, advertising,
              website optimization, and other growth activities
              are influenced by factors that may be outside our
              direct control.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              These factors may include search engine algorithms,
              advertising platform policies, competition,
              market conditions, audience behaviour, client
              resources, third-party systems, and changes in
              technology.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              Accordingly, unless a specific measurable
              commitment is expressly included in a separate
              written agreement, Cinorium does not guarantee:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
              <li>Specific search engine rankings or positions.</li>
              <li>Guaranteed website traffic or lead volumes.</li>
              <li>Specific sales, revenue, or conversion figures.</li>
              <li>Advertising performance or return on investment.</li>
              <li>Approval or continued availability of third-party platforms.</li>
            </ul>

            <p className="text-base leading-relaxed text-gray-700">
              Our work is intended to support agreed business
              objectives through appropriate strategy,
              implementation, analysis, and ongoing improvement.
            </p>
          </section>

          {/* 5. Client Responsibilities */}
          <section className="space-y-4">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 border-b border-black/10 pb-3">
              5. Client Responsibilities
            </h2>

            <p className="text-base leading-relaxed text-gray-700">
              For professional engagements, clients are expected
              to provide accurate information, reasonable
              cooperation, and the materials or access required
              for the agreed work.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              Depending on the project, client responsibilities
              may include:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
              <li>
                Providing accurate business information,
                requirements, and project instructions.
              </li>
              <li>
                Supplying necessary content, assets, approvals,
                and authorized account access.
              </li>
              <li>
                Ensuring that supplied materials may lawfully
                be used for the agreed project.
              </li>
              <li>
                Reviewing deliverables and providing feedback
                within agreed timelines.
              </li>
              <li>
                Maintaining appropriate access, permissions,
                and subscriptions for third-party platforms
                where required.
              </li>
              <li>
                Meeting agreed payment obligations.
              </li>
            </ul>

            <p className="text-base leading-relaxed text-gray-700">
              Delays, incomplete information, missing approvals,
              or unavailable third-party resources may affect
              project schedules and deliverables. Any resulting
              adjustments will be handled in accordance with
              the applicable project agreement.
            </p>
          </section>

          {/* 6. Intellectual Property */}
          <section className="space-y-4">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 border-b border-black/10 pb-3">
              6. Intellectual Property Rights
            </h2>

            <p className="text-base leading-relaxed text-gray-700">
              Unless otherwise stated, the Website and its
              original content, including text, articles,
              graphics, logos, layouts, visual designs,
              original code, and other materials, are owned
              by or licensed to Cinorium and are protected
              by applicable intellectual property laws.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              You may access, read, and share links to public
              Website content for lawful personal or
              non-commercial reference purposes.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              Without prior written permission, you may not
              reproduce substantial portions of our original
              content, redistribute our proprietary materials,
              copy our website design, or use our branding
              in a manner that suggests an unauthorized
              association with Cinorium.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              Ownership and licensing of materials created
              for individual client projects, including
              websites, graphics, content, code, and other
              deliverables, will be determined by the relevant
              project agreement. Payment, transfer, and
              licensing conditions may be specified in that
              agreement.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              Pre-existing tools, reusable components,
              frameworks, methods, templates, and internal
              resources developed or licensed by Cinorium
              remain subject to their respective ownership
              and licensing terms unless otherwise agreed
              in writing.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              Third-party software, fonts, plugins, stock
              assets, open-source components, and other
              externally licensed materials remain subject
              to their respective owners' terms and licenses.
            </p>
          </section>

          {/* 7. Portfolio and Confidentiality */}
          <section className="space-y-4">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 border-b border-black/10 pb-3">
              7. Portfolio Showcase and Confidentiality
            </h2>

            <p className="text-base leading-relaxed text-gray-700">
              Cinorium may wish to showcase completed projects,
              publicly available work, or project outcomes
              in its portfolio, case studies, website,
              presentations, and marketing channels.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              However, client-specific work, business information,
              project materials, results, names, logos, and
              confidential details will only be presented
              where permitted by the applicable project
              agreement or with appropriate client authorization.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              Clients may request confidentiality restrictions,
              including limitations on public attribution,
              portfolio display, or disclosure of project
              information. Such arrangements should be agreed
              in writing, including through an applicable
              confidentiality agreement or project clause.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              Information that is already lawfully public
              or independently available may be treated
              differently, subject to applicable confidentiality
              obligations and intellectual property rights.
            </p>
          </section>

          {/* 8. AI and Third-Party Tools */}
          <section className="space-y-4">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 border-b border-black/10 pb-3">
              8. AI-Assisted Work and Third-Party Platforms
            </h2>

            <p className="text-base leading-relaxed text-gray-700">
              Depending on the nature of an engagement,
              Cinorium may use software tools, automation,
              artificial intelligence (AI) systems, analytics
              platforms, development frameworks, and other
              third-party technologies to support research,
              planning, content production, analysis,
              implementation, or operational tasks.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              AI-assisted tools may be used as part of a
              broader professional workflow. Their output
              may require human review, editing, verification,
              or adaptation before being used in deliverables.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              Third-party platforms and services are subject
              to their own availability, policies, licensing
              requirements, and technical limitations.
              Cinorium cannot guarantee uninterrupted
              operation or continued availability of
              external services.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              Any specific requirements concerning AI usage,
              confidential materials, third-party processing,
              or client data will be addressed in the
              applicable project agreement where necessary.
            </p>
          </section>

          {/* 9. Acceptable Use */}
          <section className="space-y-4">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 border-b border-black/10 pb-3">
              9. Acceptable Use
            </h2>

            <p className="text-base leading-relaxed text-gray-700">
              When visiting or interacting with our Website,
              you agree not to:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
              <li>
                Submit false, fraudulent, misleading,
                defamatory, or abusive information.
              </li>
              <li>
                Attempt unauthorized access to our Website,
                administrative systems, databases, or
                infrastructure.
              </li>
              <li>
                Interfere with website availability,
                security controls, or normal operation.
              </li>
              <li>
                Deploy automated bots, scrapers, or scripts
                in a manner that causes excessive load,
                disruption, or unauthorized data collection.
              </li>
              <li>
                Introduce malicious code, harmful files,
                or other security threats.
              </li>
              <li>
                Copy, exploit, or misuse Website content
                in violation of applicable intellectual
                property rights.
              </li>
              <li>
                Use the Website for unlawful, fraudulent,
                or otherwise prohibited purposes.
              </li>
            </ul>

            <p className="text-base leading-relaxed text-gray-700">
              We reserve the right to restrict or block
              access where reasonably necessary to protect
              the Website, its users, or our legitimate
              business interests.
            </p>
          </section>

          {/* 10. Website Availability */}
          <section className="space-y-4">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 border-b border-black/10 pb-3">
              10. Website Availability and Changes
            </h2>

            <p className="text-base leading-relaxed text-gray-700">
              We aim to maintain an accessible and functional
              Website, but we do not guarantee uninterrupted
              availability or error-free operation.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              We may update, modify, suspend, or discontinue
              Website features, content, resources, or
              functionality when reasonably necessary for
              maintenance, security, operational improvements,
              or business reasons.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              Such Website changes do not automatically
              modify an existing client agreement, which
              remains subject to its own terms.
            </p>
          </section>

          {/* 11. External Links */}
          <section className="space-y-4">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 border-b border-black/10 pb-3">
              11. External Links and Resources
            </h2>

            <p className="text-base leading-relaxed text-gray-700">
              Our Website may link to external websites,
              tools, platforms, publications, and services
              for convenience or informational purposes.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              These links do not necessarily represent
              an endorsement or guarantee of the external
              provider, its content, products, or services.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              We are not responsible for the availability,
              accuracy, security, or policies of external
              websites. Your use of those services is
              governed by their own applicable terms.
            </p>
          </section>

          {/* 12. Disclaimer and Liability */}
          <section className="space-y-4">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 border-b border-black/10 pb-3">
              12. Disclaimer of Warranties and Limitation
              of Liability
            </h2>

            <p className="text-base leading-relaxed text-gray-700">
              To the extent permitted by applicable law,
              the Website and its general content are
              provided on an &ldquo;as is&rdquo; and
              &ldquo;as available&rdquo; basis without
              warranties of any kind, whether express
              or implied.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              We do not guarantee that the Website will
              always be available, uninterrupted,
              completely secure, or free from technical
              errors.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              To the extent permitted by applicable law,
              Cinorium and Muhammad Huzaifa shall not
              be liable for indirect, incidental,
              consequential, special, or punitive losses
              arising solely from your general access
              to or use of the Website.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              Nothing in these Terms is intended to exclude
              or limit liability where such exclusion
              or limitation is prohibited by applicable
              law, or to override any express obligations
              established under a separate client agreement.
            </p>
          </section>

          {/* 13. Governing Law */}
          <section className="space-y-4">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 border-b border-black/10 pb-3">
              13. Governing Law and Jurisdiction
            </h2>

            <p className="text-base leading-relaxed text-gray-700">
              These Website Terms shall be governed by
              and interpreted in accordance with the
              laws of Pakistan, subject to applicable
              conflict-of-law principles and mandatory
              legal protections.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              Any dispute arising from the use of the
              Website shall be subject to the jurisdiction
              of the competent courts in Pakistan, unless
              applicable law requires otherwise.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              Separate client agreements may specify
              additional or different dispute resolution
              procedures and governing-law arrangements
              where mutually agreed and legally permissible.
            </p>
          </section>

          {/* 14. Changes to Terms */}
          <section className="space-y-4">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 border-b border-black/10 pb-3">
              14. Changes to These Terms
            </h2>

            <p className="text-base leading-relaxed text-gray-700">
              We may revise these Terms from time to time
              to reflect changes in our Website, services,
              business operations, or applicable legal
              requirements.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              Updated Terms will be published on this
              page with a revised update date. Continued
              use of the Website after updated Terms
              are published may be subject to the revised
              Terms, to the extent permitted by applicable
              law.
            </p>
          </section>

          {/* 15. Contact Information */}
          <section className="mt-12 p-8 bg-[#fdfbf7]/60 border border-black/10 rounded-2xl space-y-3">
            <h3 className="font-heading text-xl font-bold text-gray-900">
              Inquiries Regarding These Terms
            </h3>

            <p className="text-base text-gray-700 leading-relaxed">
              If you have questions or require clarification
              regarding these Terms of Service, please
              contact us:
            </p>

            <div className="pt-2 text-sm text-gray-800 space-y-1">
              <p>
                <strong className="text-gray-900">Brand:</strong>{" "}
                Cinorium
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
                  className="underline font-semibold hover:text-amber-800"
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
                  className="underline font-semibold hover:text-amber-800"
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
