import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Governance & Compliance | Viremont Advisory Group",
  description:
    "Governance and compliance framework guiding Viremont Advisory Group’s advisory mandates.",
  alternates: {
    canonical: "https://viremontadvisorygroup.com/governance",
  },
};

export default function GovernancePage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-16">
      <section className="max-w-4xl mx-auto px-4 space-y-10">

        <div>
          <p className="text-xs font-semibold text-sky-700 uppercase tracking-[0.3em]">
            Institutional Framework
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
            Governance & Compliance
          </h1>
        </div>

        <div className="space-y-6 text-sm md:text-base text-slate-700 leading-relaxed">

          <h2 className="text-lg font-semibold text-slate-900">Principled Advisory</h2>
          <p>
            Viremont Advisory Group operates under a strict internal framework
            prioritizing legality, integrity and reputational protection for our
            clients and partners.
          </p>

            <h2 className="text-lg font-semibold text-slate-900">Conflict of Interest Policy</h2>
          <p>
            Potential conflicts are assessed prior to engagement. We decline
            mandates that create irreconcilable conflicts or compromise neutrality.
          </p>

          <h2 className="text-lg font-semibold text-slate-900">Data Protection</h2>
          <p>
            Sensitive client data is stored and handled securely in accordance
            with applicable data protection regulations.
          </p>

          <h2 className="text-lg font-semibold text-slate-900">Engagement Discipline</h2>
          <p>
            Mandates are executed through structured analysis, documented
            advisory outputs and formal reporting mechanisms suitable for
            board-level review.
          </p>

        </div>
      </section>
    </main>
  );
}
