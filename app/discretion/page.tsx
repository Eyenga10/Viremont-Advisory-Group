import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discretion Policy | Viremont Advisory Group",
  description:
    "Confidentiality and discretion principles governing Viremont Advisory Group’s advisory mandates.",
  alternates: {
    canonical: "https://viremontadvisorygroup.com/discretion",
  },
};

export default function DiscretionPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-16">
      <section className="max-w-4xl mx-auto px-4 space-y-10">

        <div>
          <p className="text-xs font-semibold text-sky-700 uppercase tracking-[0.3em]">
            Confidentiality
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
            Discretion Policy
          </h1>
        </div>

        <div className="space-y-6 text-sm md:text-base text-slate-700 leading-relaxed">

          <h2 className="text-lg font-semibold text-slate-900">Confidential Mandates</h2>
          <p>
            Many of our advisory engagements involve sensitive sovereign,
            defense or institutional matters. We do not publicly disclose client
            identities without explicit authorization.
          </p>

          <h2 className="text-lg font-semibold text-slate-900">Non-Public Positioning</h2>
          <p>
            Viremont Advisory Group does not use client logos, case studies or
            testimonials unless agreed in writing.
          </p>

          <h2 className="text-lg font-semibold text-slate-900">Secure Communications</h2>
          <p>
            Communication protocols are designed to protect commercially and
            politically sensitive information.
          </p>

          <h2 className="text-lg font-semibold text-slate-900">Reputational Safeguards</h2>
          <p>
            We avoid mandates that expose clients to undue reputational,
            regulatory or political risk.
          </p>

        </div>
      </section>
    </main>
  );
}
