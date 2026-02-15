import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-20 md:pt-24 pb-14 md:pb-16">
      <section className="max-w-6xl mx-auto px-4 space-y-10">
        {/* Header */}
        <div>
          <p className="text-xs font-semibold text-sky-700 uppercase tracking-[0.3em]">
            Services
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
            Strategic Advisory & Government Engagement
          </h1>
          <p className="mt-4 text-sm md:text-base text-slate-700 max-w-3xl leading-relaxed">
            Viremont Advisory Group supports clients across the full investment,
            procurement and government engagement lifecycle — from early
            opportunity identification and tender positioning through to
            execution and long-term risk management.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Government Relations */}
          <div
            id="government-relations"
            className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold text-slate-900 mb-1">
              Government Relations & Tender Advisory
            </h2>
            <p className="text-xs uppercase tracking-[0.25em] text-sky-700 mb-4">
              Positioning • Access • Compliance
            </p>
            <p className="text-sm text-slate-700 mb-4 leading-relaxed">
              We help clients understand how strategic programmes and tenders are
              conceived, structured and awarded — and how to engage institutions
              in a disciplined, compliant manner.
            </p>
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
              <li>Tender and opportunity mapping across key ministries & agencies</li>
              <li>Bid strategy, structuring and documentation support</li>
              <li>Stakeholder mapping and engagement planning</li>
              <li>Guidance on procurement, policy and regulatory frameworks</li>
            </ul>
          </div>

          {/* Investment & Market Entry */}
          <div
            id="investment-entry"
            className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold text-slate-900 mb-1">
              Investment & Market Entry Advisory
            </h2>
            <p className="text-xs uppercase tracking-[0.25em] text-sky-700 mb-4">
              Strategy • Structuring • Localisation
            </p>
            <p className="text-sm text-slate-700 mb-4 leading-relaxed">
              We support institutional and corporate investors to move from
              initial interest to an actionable, well-structured market entry or
              expansion strategy in East Africa.
            </p>
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
              <li>Market scans and sector-specific opportunity assessments</li>
              <li>Regulatory mapping and licensing pathways</li>
              <li>Partner, JV and consortium identification</li>
              <li>Entry strategies aligned with national policy priorities</li>
            </ul>
          </div>

          {/* Risk & Intelligence */}
          <div
            id="risk-intelligence"
            className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold text-slate-900 mb-1">
              Risk, Compliance & Strategic Intelligence
            </h2>
            <p className="text-xs uppercase tracking-[0.25em] text-sky-700 mb-4">
              Risk • Oversight • Board Reporting
            </p>
            <p className="text-sm text-slate-700 mb-4 leading-relaxed">
              We provide structured insights into political, regulatory and
              counterparty risk — enabling boards and investment committees to
              make informed decisions.
            </p>
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
              <li>Political, regulatory and policy risk assessments</li>
              <li>Counterparty and integrity due diligence support</li>
              <li>Monitoring of reforms and key public appointments</li>
              <li>Board- and IC-ready briefing notes and dashboards</li>
            </ul>
          </div>

          {/* Custom Mandates */}
          <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-lg font-semibold text-slate-900 mb-1">
              Custom Mandates & Special Situations
            </h2>
            <p className="text-xs uppercase tracking-[0.25em] text-sky-700 mb-4">
              Sensitive • Complex • Cross-Border
            </p>
            <p className="text-sm text-slate-700 mb-4 leading-relaxed">
              Some mandates do not fit standard categories. We design bespoke
              advisory support for sensitive, complex and high-stakes
              engagements.
            </p>
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
              <li>Support on strategic restructurings or exits</li>
              <li>Advisory on high-level negotiations and alignment</li>
              <li>Discreet diagnostics on complex counterparties</li>
              <li>Design of governance and oversight structures</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl bg-slate-900 text-white p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-bold">
              Discuss a potential mandate
            </h3>
            <p className="mt-2 text-sm md:text-base text-slate-300 max-w-xl">
              Engage Viremont Advisory Group for disciplined government
              engagement, market-entry strategy and risk advisory across East
              Africa.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-white text-slate-900 px-6 py-3 text-sm md:text-base font-semibold hover:bg-slate-100 transition"
          >
            Speak to an Advisor
          </Link>
        </div>
      </section>
    </main>
  );
}
