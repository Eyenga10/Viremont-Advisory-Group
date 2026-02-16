import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Defense Advisory & Government Procurement Support | Viremont Advisory Group",
  description:
    "Viremont Advisory Group supports institutional clients pursuing defense and national security opportunities in East Africa—tender strategy, government engagement, compliance, partner structuring, and risk intelligence.",
  alternates: {
    canonical: "https://viremontadvisorygroup.com/defense",
  },
  openGraph: {
    title: "Defense Advisory & Government Procurement Support | Viremont Advisory Group",
    description:
      "Defense and national security advisory: procurement strategy, government engagement, compliance, partner structuring, and risk intelligence across East Africa.",
    url: "https://viremontadvisorygroup.com/defense",
    siteName: "Viremont Advisory Group",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Defense Advisory | Viremont Advisory Group",
    description:
      "Tender strategy, government engagement, compliance, and risk intelligence for defense and national security opportunities in East Africa.",
  },
};

const ORG_NAME = "Viremont Advisory Group";
const SITE_URL = "https://viremontadvisorygroup.com";
const CONTACT_URL = `${SITE_URL}/contact`;

export default function DefensePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: ORG_NAME,
      url: SITE_URL,
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "Business Inquiries",
          email: "info@viremontadvisorygroup.com",
          availableLanguage: ["en"],
        },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nairobi",
        addressCountry: "KE",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Defense Advisory & Government Procurement Support",
      serviceType:
        "Defense and national security advisory, government engagement, procurement strategy, compliance and risk intelligence",
      provider: { "@type": "Organization", name: ORG_NAME, url: SITE_URL },
      areaServed: [
        { "@type": "Country", name: "Kenya" },
        { "@type": "Country", name: "Uganda" },
        { "@type": "Country", name: "Tanzania" },
        { "@type": "Country", name: "Rwanda" },
        { "@type": "Country", name: "Ethiopia" },
        { "@type": "Country", name: "South Sudan" },
      ],
      url: `${SITE_URL}/defense`,
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        url: CONTACT_URL,
      },
    },
  ];

  const pillars = [
    {
      title: "Procurement Strategy & Tender Positioning",
      body:
        "Opportunity mapping, bid strategy, compliance review, and submission readiness for defense and security procurement.",
    },
    {
      title: "Government Engagement & Stakeholder Navigation",
      body:
        "Structured engagement planning aligned to procurement rules, institutional protocols, and reputational safeguards.",
    },
    {
      title: "Partner & Consortium Structuring",
      body:
        "Local partner identification, consortium design, JV pathways, and governance structures that withstand scrutiny.",
    },
    {
      title: "Risk, Integrity & Strategic Intelligence",
      body:
        "Political/regulatory risk assessments, counterparty screening support, and decision-grade briefings for boards and ICs.",
    },
  ];

  const deliverables = [
    "Tender compliance checklist & submission plan",
    "Stakeholder map & engagement schedule (by institution)",
    "Partner/consortium shortlist with rationale and risk flags",
    "Regulatory/procurement pathway memo (country-specific)",
    "Board-level brief: political, regulatory and reputational risk",
    "Negotiation and implementation guardrails for contract stage",
  ];

  const sectors = [
    "Defense logistics & sustainment",
    "Secure communications & command systems",
    "Border security & surveillance",
    "Cybersecurity & critical infrastructure protection",
    "Training, simulation & capability development",
    "Aviation, maritime and mobility support (regulated)",
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-20 md:pt-24">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950 text-white">
        <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 py-14 md:py-16">
          <p className="text-xs font-semibold tracking-[0.35em] uppercase text-sky-200/90">
            Defense & National Security
          </p>

          <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-[1.08]">
            Defense Advisory & Government Procurement Support
          </h1>

          <p className="mt-5 text-slate-200/90 text-base md:text-lg max-w-3xl leading-relaxed">
            Viremont Advisory Group supports institutional clients pursuing defense and national
            security opportunities in East Africa—through disciplined government engagement,
            tender strategy, compliance oversight, partner structuring and decision-grade risk intelligence.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-sky-600 px-6 py-3 text-sm md:text-base font-semibold text-white hover:bg-sky-500 transition shadow-sm"
            >
              Request a Confidential Consultation
            </Link>

            <a
              href="#capabilities"
              className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-6 py-3 text-sm md:text-base font-semibold text-white hover:bg-white/10 transition"
            >
              View Capabilities
            </a>
          </div>

          <div className="mt-8 grid sm:grid-cols-3 gap-4 text-sm">
            {[
              { k: "Procurement", v: "Tender strategy & compliance discipline" },
              { k: "Engagement", v: "Institutional navigation & stakeholder mapping" },
              { k: "Risk", v: "Integrity, regulatory and political intelligence" },
            ].map((item) => (
              <div
                key={item.k}
                className="rounded-xl border border-white/15 bg-white/5 p-4"
              >
                <p className="font-semibold">{item.k}</p>
                <p className="mt-1 text-slate-200/80">{item.v}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-slate-300/80 max-w-3xl">
            We operate within legal and procurement frameworks and do not facilitate improper payments
            or influence. Our work is designed to strengthen compliance, governance and decision quality.
          </p>
        </div>
      </section>

      {/* TRUST / WHO THIS IS FOR */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-14">
        <div className="grid lg:grid-cols-[2fr,1fr] gap-8 items-start">
          <div className="rounded-2xl bg-white border border-slate-200 p-7 shadow-sm">
            <p className="text-xs font-semibold text-sky-700 uppercase tracking-[0.3em]">
              Who We Support
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">
              Decision-grade advisory for regulated environments
            </h2>
            <p className="mt-4 text-sm md:text-base text-slate-700 leading-relaxed">
              Defense procurement requires disciplined engagement, clear documentation, and strong
              governance. We support clients with board-level expectations who need reliable local
              intelligence and structured execution.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm text-slate-700">
              <ul className="list-disc list-inside space-y-2">
                <li>Defense, aerospace and security contractors</li>
                <li>Secure communications & cyber providers</li>
                <li>Logistics, sustainment and mobility firms</li>
              </ul>
              <ul className="list-disc list-inside space-y-2">
                <li>Institutional investors and consortium leads</li>
                <li>Training, simulation and capability partners</li>
                <li>Professional services supporting bids</li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl bg-slate-950 text-white p-7 shadow-sm">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-sky-200/90">
              Quick Contact
            </p>
            <p className="mt-3 text-sm text-slate-200/90">
              For confidential inquiries:
            </p>

            <div className="mt-4 text-sm space-y-2">
              <p>
                <span className="text-slate-300">Email:</span>{" "}
                <a
                  className="font-semibold hover:underline"
                  href="mailto:info@viremontadvisorygroup.com"
                >
                  info@viremontadvisorygroup.com
                </a>
              </p>
              <p>
                <span className="text-slate-300">WhatsApp:</span>{" "}
                <a
                  className="font-semibold hover:underline"
                  href="https://wa.me/254108675410"
                  target="_blank"
                  rel="noreferrer"
                >
                  +254 108 675 410
                </a>
              </p>
            </div>

            <Link
              href="/contact"
              className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-white text-slate-900 px-5 py-3 text-sm font-semibold hover:bg-slate-100 transition"
            >
              Go to Contact Form
            </Link>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" className="border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-14">
          <p className="text-xs font-semibold text-sky-700 uppercase tracking-[0.3em]">
            Capabilities
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">
            What we deliver across the defense procurement lifecycle
          </h2>
          <p className="mt-4 text-sm md:text-base text-slate-700 max-w-3xl leading-relaxed">
            From early opportunity qualification to submission readiness and post-award guardrails,
            we provide structured support designed for regulated, high-scrutiny environments.
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 hover:shadow-md hover:-translate-y-1 transition"
              >
                <h3 className="text-base font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid lg:grid-cols-[2fr,1fr] gap-6 items-start">
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-base font-semibold text-slate-900">
                Common deliverables
              </h3>
              <ul className="mt-4 text-sm text-slate-700 list-disc list-inside space-y-2">
                {deliverables.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
              <h3 className="text-base font-semibold text-slate-900">
                Typical focus areas
              </h3>
              <ul className="mt-4 text-sm text-slate-700 list-disc list-inside space-y-2">
                {sectors.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>

              <p className="mt-5 text-xs text-slate-500 leading-relaxed">
                Where applicable, we help clients align to lawful procurement pathways and
                institutional protocols, including documentary standards and governance expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-14">
          <p className="text-xs font-semibold text-sky-700 uppercase tracking-[0.3em]">
            Approach
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">
            A disciplined, compliance-first operating model
          </h2>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "1) Qualify",
                body:
                  "Define objectives, scope, eligibility, and constraints. We identify the correct procurement pathway and decision stakeholders.",
              },
              {
                title: "2) Structure",
                body:
                  "Build the engagement plan, partner approach, and bid narrative. Compliance requirements and documentary standards are clarified early.",
              },
              {
                title: "3) Execute",
                body:
                  "Submission readiness, stakeholder communications, and post-submission support—while maintaining governance guardrails and reputational controls.",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm"
              >
                <h3 className="font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-7">
            <h3 className="text-base font-semibold text-slate-900">
              Compliance & integrity note
            </h3>
            <p className="mt-2 text-sm text-slate-700 leading-relaxed">
              We do not offer services intended to improperly influence procurement outcomes. We work
              to strengthen client compliance, documentation quality, governance and decision-making—
              which is essential in defense and national security environments.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-slate-950 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold">
              Discuss a defense mandate confidentially
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-200/90 leading-relaxed">
              If you are assessing an opportunity or preparing a compliant bid, we can help structure the pathway,
              strengthen the submission, and provide decision-grade risk intelligence.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-white text-slate-900 px-6 py-3 text-sm md:text-base font-semibold hover:bg-slate-100 transition"
            >
              Request Consultation
            </Link>
            <a
              href="mailto:info@viremontadvisorygroup.com"
              className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-6 py-3 text-sm md:text-base font-semibold text-white hover:bg-white/10 transition"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
