
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Cinorium collects, uses, processes, and protects personal information through its website, analytics, and business inquiry systems.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Cinorium",
    description:
      "Learn how Cinorium collects, uses, processes, and protects personal information through its website, analytics, and business inquiry systems.",
    url: "https://www.cinorium.com/privacy",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "November 9, 2026";

  return (
    <div className="w-full bg-[#fcfbf7] min-h-screen text-gray-900">
      {/* Header Banner */}
      <section className="w-full bg-[#fdfbf7] border-b border-black/10 py-16 sm:py-20 md:py-24 px-5 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <span className="mb-3 inline-block border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-widest text-gray-800 sm:text-sm">
            Legal & Transparency
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
            Privacy Policy
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

          {/* 1. Overview */}
          <section className="space-y-4">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 border-b border-black/10 pb-3">
              1. Overview
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              Cinorium (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
              &ldquo;us&rdquo;), founded and operated by Muhammad Huzaifa,
              is a digital marketing and growth agency providing services
              that may include digital marketing strategy, search engine
              optimization (SEO), search visibility, content and social
              media marketing, paid advertising, email marketing,
              e-commerce growth, and supporting website development and
              technical services.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              We respect your privacy and are committed to handling
              personal information responsibly, transparently, and with
              appropriate safeguards.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              This Privacy Policy explains what information we may
              collect when you visit{" "}
              <strong className="text-gray-900">cinorium.com</strong>,
              interact with our website, use its features, or submit a
              business inquiry. It also explains how we use, store,
              disclose, and protect that information and the choices
              available to you.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section className="space-y-4">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 border-b border-black/10 pb-3">
              2. Information We Collect
            </h2>

            <p className="text-base leading-relaxed text-gray-700">
              The information we collect depends on how you interact
              with our website and services. This may include the
              following categories:
            </p>

            <div className="bg-white border border-black/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
              <h3 className="font-heading text-lg sm:text-xl font-bold text-gray-900">
                A. Information You Voluntarily Provide
              </h3>

              <p className="text-base leading-relaxed text-gray-700">
                When you contact us through our{" "}
                <Link
                  href="/contact"
                  className="underline font-semibold text-gray-900 hover:text-amber-800"
                >
                  contact page
                </Link>
                , email, WhatsApp, or another communication channel,
                you may provide:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                <li>
                  <strong className="text-gray-900">
                    Contact Information:
                  </strong>{" "}
                  Your name, email address, phone number, WhatsApp
                  number, or other contact details.
                </li>

                <li>
                  <strong className="text-gray-900">
                    Business Information:
                  </strong>{" "}
                  Your business name, website address, industry,
                  business stage, or relevant digital presence details.
                </li>

                <li>
                  <strong className="text-gray-900">
                    Project Information:
                  </strong>{" "}
                  Your service interests, project requirements,
                  estimated budget, objectives, challenges, and
                  descriptions you choose to submit.
                </li>

                <li>
                  <strong className="text-gray-900">
                    Communication Preferences:
                  </strong>{" "}
                  Your preferred contact method and any additional
                  information you voluntarily share during
                  communications.
                </li>
              </ul>
            </div>

            <div className="bg-white border border-black/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
              <h3 className="font-heading text-lg sm:text-xl font-bold text-gray-900">
                B. Website Usage and Technical Information
              </h3>

              <p className="text-base leading-relaxed text-gray-700">
                When you visit our website, certain technical and
                usage-related information may be collected automatically
                through our hosting infrastructure, analytics services,
                and website functionality.
              </p>

              <p className="text-base leading-relaxed text-gray-700">
                Depending on the technologies used and your consent
                preferences, this information may include:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                <li>IP address and approximate network information.</li>
                <li>Browser type, operating system, and device information.</li>
                <li>Pages visited, referring URLs, and timestamps.</li>
                <li>General website navigation and interaction data.</li>
                <li>Performance, loading, and technical diagnostic metrics.</li>
                <li>
                  Cookies, local storage entries, session identifiers,
                  or similar technologies where applicable.
                </li>
              </ul>
            </div>

            <div className="bg-white border border-black/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
              <h3 className="font-heading text-lg sm:text-xl font-bold text-gray-900">
                C. Visitor Interaction and Cinorium Signals
              </h3>

              <p className="text-base leading-relaxed text-gray-700">
                Our website may use Cinorium Signals, an internal
                visitor engagement and intent-analysis system, to
                understand how visitors interact with our website and
                identify potential interest in our services.
              </p>

              <p className="text-base leading-relaxed text-gray-700">
                Depending on the features enabled and the information
                available during a visit, this system may process:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                <li>Pages and service sections viewed.</li>
                <li>Interactions with website elements and contextual prompts.</li>
                <li>Service interests and engagement patterns.</li>
                <li>Session-related or technical identifiers, where used.</li>
                <li>Information voluntarily submitted through website forms.</li>
              </ul>

              <p className="text-base leading-relaxed text-gray-700">
                These signals may be used to understand general visitor
                interests, improve website experiences, evaluate
                potential business inquiries, and support relevant
                follow-up communications.
              </p>

              <p className="text-base leading-relaxed text-gray-700">
                Relevant information may be stored in our Supabase-based
                infrastructure for internal business and operational
                purposes. We do not use visitor interaction data to
                make decisions about a person's eligibility for
                employment, credit, insurance, or other similarly
                significant matters.
              </p>
            </div>

            <div className="bg-white border border-black/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
              <h3 className="font-heading text-lg sm:text-xl font-bold text-gray-900">
                D. Security and Abuse Prevention Data
              </h3>

              <p className="text-base leading-relaxed text-gray-700">
                We may process technical request information, including
                IP addresses and request patterns, to protect our
                website against spam, unauthorized access, automated
                abuse, and other security threats.
              </p>

              <p className="text-base leading-relaxed text-gray-700">
                Our contact forms may use rate-limiting and other
                protective mechanisms to restrict excessive or
                suspicious submissions. The information used for these
                checks is handled for security and operational purposes.
              </p>
            </div>
          </section>

          {/* 3. Cookies and Tracking */}
          <section className="space-y-4">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 border-b border-black/10 pb-3">
              3. Cookies, Analytics and Tracking Technologies
            </h2>

            <p className="text-base leading-relaxed text-gray-700">
              Cinorium uses cookies, browser storage, analytics
              technologies, and similar mechanisms where applicable
              to operate its website, understand website performance,
              improve user experience, and manage visitor preferences.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              The technologies used may include the following
              categories:
            </p>

            <div className="bg-white border border-black/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
              <h3 className="font-heading text-lg sm:text-xl font-bold text-gray-900">
                A. Essential and Functional Technologies
              </h3>

              <p className="text-base leading-relaxed text-gray-700">
                Certain technologies may be necessary for website
                security, basic functionality, session handling,
                network delivery, or the storage of relevant privacy
                preferences.
              </p>
            </div>

            <div className="bg-white border border-black/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
              <h3 className="font-heading text-lg sm:text-xl font-bold text-gray-900">
                B. Analytics and Performance Measurement
              </h3>

              <p className="text-base leading-relaxed text-gray-700">
                We may use the following services to understand
                website traffic, visitor engagement, and technical
                performance:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                <li>
                  <strong className="text-gray-900">
                    Google Analytics 4 (GA4):
                  </strong>{" "}
                  Helps us understand website usage, traffic sources,
                  visitor interactions, and general engagement trends.
                </li>

                <li>
                  <strong className="text-gray-900">
                    Vercel Analytics:
                  </strong>{" "}
                  Helps us evaluate website traffic and usage patterns
                  through website analytics.
                </li>

                <li>
                  <strong className="text-gray-900">
                    Vercel Speed Insights:
                  </strong>{" "}
                  Helps us monitor website performance and technical
                  metrics, including real-world page performance.
                </li>
              </ul>

              <p className="text-base leading-relaxed text-gray-700">
                These services may process technical information,
                usage data, or device-related metrics according to
                their respective configurations and privacy policies.
                Their data collection and storage behaviour may differ.
              </p>
            </div>

            <div className="bg-white border border-black/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
              <h3 className="font-heading text-lg sm:text-xl font-bold text-gray-900">
                C. Consent and Privacy Preferences
              </h3>

              <p className="text-base leading-relaxed text-gray-700">
                We use InMobi Consent Management Platform (CMP) to
                support the presentation and management of applicable
                privacy and cookie consent preferences.
              </p>

              <p className="text-base leading-relaxed text-gray-700">
                Where applicable, visitors may be able to review or
                change their consent choices through our Cookie
                Preferences interface.
              </p>

              <p className="text-base leading-relaxed text-gray-700">
                The technologies controlled by consent preferences
                depend on their classification, applicable legal
                requirements, and the actual configuration of our
                consent management system.
              </p>
            </div>

            <div className="bg-white border border-black/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
              <h3 className="font-heading text-lg sm:text-xl font-bold text-gray-900">
                D. Advertising and Cross-Site Tracking
              </h3>

              <p className="text-base leading-relaxed text-gray-700">
                Our use of analytics and visitor engagement technologies
                should not automatically be interpreted as permission
                for advertising or cross-site tracking.
              </p>

              <p className="text-base leading-relaxed text-gray-700">
                We do not sell personal information to advertisers
                or data brokers. Any future advertising or additional
                tracking technologies will be handled in accordance
                with applicable consent requirements and this
                Privacy Policy.
              </p>
            </div>

            <p className="text-base leading-relaxed text-gray-700">
              You can manage available cookie and privacy choices
              through the Cookie Preferences feature on our website,
              where provided. You may also manage cookies through
              your browser settings. Blocking certain technologies
              may affect some website functionality.
            </p>
          </section>

          {/* 4. How We Use Your Information */}
          <section className="space-y-4">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 border-b border-black/10 pb-3">
              4. How We Use Your Information
            </h2>

            <p className="text-base leading-relaxed text-gray-700">
              We may use collected information for legitimate
              business, operational, analytical, and security purposes,
              including:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
              <li>
                Reviewing business inquiries and understanding
                prospective clients' requirements.
              </li>
              <li>
                Providing information about our digital marketing,
                growth, and supporting technical services.
              </li>
              <li>
                Communicating about consultations, proposals,
                project requirements, and service agreements.
              </li>
              <li>
                Understanding general visitor interests and improving
                website navigation and content relevance.
              </li>
              <li>
                Analysing website traffic, performance, and user
                engagement trends.
              </li>
              <li>
                Operating and improving Cinorium Signals and other
                internal website features.
              </li>
              <li>
                Maintaining website security, preventing abuse,
                and troubleshooting technical issues.
              </li>
              <li>
                Maintaining business records and meeting applicable
                legal or administrative obligations.
              </li>
            </ul>

            <p className="text-base leading-relaxed text-gray-700 font-medium text-gray-900">
              We do not sell, rent, or trade your personal contact
              information or project inquiry details to third-party
              advertisers or data brokers.
            </p>
          </section>

          {/* 5. Service Providers */}
          <section className="space-y-4">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 border-b border-black/10 pb-3">
              5. Service Providers and Third Parties
            </h2>

            <p className="text-base leading-relaxed text-gray-700">
              We rely on selected third-party services and
              infrastructure providers to operate our website,
              process information, maintain security, and communicate
              with prospective clients.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              Depending on the functionality being used, these may
              include:
            </p>

            <ul className="list-disc pl-6 space-y-3 text-base text-gray-700">
              <li>
                <strong className="text-gray-900">
                  Vercel:
                </strong>{" "}
                Website hosting, deployment, content delivery,
                analytics, and performance monitoring.
              </li>

              <li>
                <strong className="text-gray-900">
                  Google:
                </strong>{" "}
                Google Analytics 4 for website analytics and Google
                Workspace or Gmail SMTP, where used, for email
                communication and inquiry delivery.
              </li>

              <li>
                <strong className="text-gray-900">
                  Supabase:
                </strong>{" "}
                Database infrastructure used for storing and
                managing relevant website and Cinorium Signals data.
              </li>

              <li>
                <strong className="text-gray-900">
                  InMobi:
                </strong>{" "}
                Consent management services used to support privacy
                and cookie preference handling.
              </li>

              <li>
                <strong className="text-gray-900">
                  Other Infrastructure Providers:
                </strong>{" "}
                Additional technical providers may be used where
                necessary to deliver, secure, or maintain website
                functionality.
              </li>
            </ul>

            <p className="text-base leading-relaxed text-gray-700">
              These providers may process information on our behalf
              or as independent service providers under their
              respective terms and privacy policies. Their access
              is intended to be limited to the purposes for which
              their services are used.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              We do not control the independent privacy practices
              of third-party providers. We encourage visitors to
              review their respective privacy documentation.
            </p>
          </section>

          {/* 6. International Data Processing */}
          <section className="space-y-4">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 border-b border-black/10 pb-3">
              6. International Data Processing
            </h2>

            <p className="text-base leading-relaxed text-gray-700">
              Cinorium operates from Pakistan and may work with
              prospective and existing clients in other countries.
              Some of our hosting, analytics, database, and
              communication providers may process or store information
              on infrastructure located outside Pakistan.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              As a result, information submitted through our website
              may be transferred to or processed in other countries,
              subject to the practices of the relevant service
              providers and applicable legal requirements.
            </p>
          </section>

          {/* 7. External Links */}
          <section className="space-y-4">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 border-b border-black/10 pb-3">
              7. External Links and Social Platforms
            </h2>

            <p className="text-base leading-relaxed text-gray-700">
              Our website may contain links to external websites,
              social platforms, resources, and third-party services,
              including LinkedIn, Instagram, YouTube, and other
              websites.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              When you follow an external link, you leave our website
              and become subject to the privacy practices and terms
              of the destination platform. We are not responsible
              for the content, security, or privacy practices of
              external websites.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              We recommend reviewing the applicable privacy policies
              of those platforms before sharing personal information
              with them.
            </p>
          </section>

          {/* 8. Data Retention and Security */}
          <section className="space-y-4">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 border-b border-black/10 pb-3">
              8. Data Retention and Security
            </h2>

            <p className="text-base leading-relaxed text-gray-700">
              We retain personal information only for as long as
              reasonably necessary for the purposes described in
              this Privacy Policy, including business communication,
              service delivery, security, recordkeeping, and
              applicable legal obligations.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              Different categories of information may be retained
              for different periods depending on their purpose,
              operational requirements, and the retention settings
              of the relevant service providers.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              Where information is no longer required, we may delete
              it, anonymize it, or otherwise dispose of it, subject
              to applicable recordkeeping requirements and legitimate
              operational needs.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              We use reasonable administrative and technical
              safeguards intended to protect information against
              unauthorized access, loss, misuse, alteration, or
              disclosure. These measures may include HTTPS
              encryption, access controls, secure configuration,
              and appropriate handling of system credentials.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              However, no method of internet transmission or
              electronic storage can be guaranteed to be completely
              secure. We cannot promise absolute security.
            </p>
          </section>

          {/* 9. Your Rights and Choices */}
          <section className="space-y-4">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 border-b border-black/10 pb-3">
              9. Your Rights and Choices
            </h2>

            <p className="text-base leading-relaxed text-gray-700">
              Depending on your location and applicable privacy
              laws, you may have certain rights regarding your
              personal information. These may include:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
              <li>
                Requesting access to personal information we hold
                about you.
              </li>
              <li>
                Requesting correction of inaccurate or incomplete
                information.
              </li>
              <li>
                Requesting deletion of personal information,
                subject to applicable legal and operational
                requirements.
              </li>
              <li>
                Withdrawing consent where processing is based on
                consent.
              </li>
              <li>
                Objecting to or requesting restrictions on certain
                types of processing, where applicable.
              </li>
              <li>
                Changing available cookie and analytics consent
                preferences through our Cookie Preferences feature.
              </li>
            </ul>

            <p className="text-base leading-relaxed text-gray-700">
              To exercise an applicable privacy right or ask a
              question about information you have submitted,
              contact us using the email address provided below.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              We may need to verify your identity or request
              additional information before responding. We will
              handle valid requests in accordance with applicable
              legal requirements.
            </p>
          </section>

          {/* 10. Children's Privacy */}
          <section className="space-y-4">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 border-b border-black/10 pb-3">
              10. Children's Privacy
            </h2>

            <p className="text-base leading-relaxed text-gray-700">
              Our website and business services are intended for
              general business audiences and are not specifically
              directed at children.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              We do not knowingly seek to collect personal
              information from children in circumstances where
              parental or guardian consent is required. If you
              believe that a child has provided personal information
              to us inappropriately, please contact us so that
              we can review the matter.
            </p>
          </section>

          {/* 11. Policy Updates */}
          <section className="space-y-4">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 border-b border-black/10 pb-3">
              11. Changes to This Privacy Policy
            </h2>

            <p className="text-base leading-relaxed text-gray-700">
              We may update this Privacy Policy from time to time
              to reflect changes in our services, website features,
              data processing practices, third-party providers,
              or applicable legal requirements.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              Any revised version will be published on this page
              with an updated revision date. We encourage visitors
              to review this page periodically to remain informed
              about our privacy practices.
            </p>
          </section>

          {/* 12. Contact Information */}
          <section className="mt-12 p-8 bg-[#fdfbf7]/60 border border-black/10 rounded-2xl space-y-3">
            <h3 className="font-heading text-xl font-bold text-gray-900">
              Questions or Privacy Requests?
            </h3>

            <p className="text-base text-gray-700 leading-relaxed">
              If you have questions about this Privacy Policy,
              our data practices, or wish to submit a privacy
              request, please contact us:
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
