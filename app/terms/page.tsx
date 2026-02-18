import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Engagement | Viremont Advisory Group",
  description:
    "Terms of engagement governing advisory services provided by Viremont Advisory Group.",
  alternates: {
    canonical: "https://viremontadvisorygroup.com/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-16">
      <section className="max-w-4xl mx-auto px-4 space-y-10">

        <div>
          <p className="text-xs font-semibold text-sky-700 uppercase tracking-[0.3em]">
            Legal
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
            Terms of Engagement
          </h1>
        </div>

        <div className="space-y-6 text-sm md:text-base text-slate-700 leading-relaxed">

          <h2 className="text-lg font-semibold text-slate-900">1. Scope of Services</h2>
          <p>
            Viremont Advisory Group provides strategic advisory services relating to
            government engagement, defense procurement, infrastructure,
            investment structuring and institutional strategy. All engagements are
            governed by a written mandate agreement specifying scope, duration,
            deliverables and fee structure.
          </p>

          <h2 className="text-lg font-semibold text-slate-900">2. No Guarantee of Outcome</h2>
          <p>
            Advisory services are strategic in nature. Viremont Advisory Group
            does not guarantee the award of tenders, contracts, licenses or
            regulatory approvals. 
          </p>

          <h2 className="text-lg font-semibold text-slate-900">3. Compliance</h2>
          <p>
            All mandates are executed in accordance with applicable laws,
            procurement regulations and anti-corruption frameworks. We do not
            participate in or facilitate unlawful conduct.
          </p>

          <h2 className="text-lg font-semibold text-slate-900">4. Confidentiality</h2>
          <p>
            Information shared by clients is treated as confidential unless
            disclosure is required by law or agreed in writing.
          </p>

          <h2 className="text-lg font-semibold text-slate-900">5. Fees & Payment</h2>
          <p>
            Fee structures may include retainers, milestone-based payments,
            advisory fees or success-based components, as defined in the
            engagement agreement.
          </p>

          <h2 className="text-lg font-semibold text-slate-900">6. Limitation of Liability</h2>
          <p>
            Viremont Advisory Group’s liability is limited to the extent
            permitted under applicable law and shall not extend to indirect or
            consequential damages.
          </p>

        </div>
      </section>
    </main>
  );
}
