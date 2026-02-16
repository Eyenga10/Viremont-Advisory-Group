import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategic Advisory & Government Relations in East Africa",
  description:
    "Viremont Advisory Group provides government relations, tender advisory, market entry strategy and risk intelligence for institutional investors and multinationals operating in East Africa.",
  keywords: [
    "Government relations East Africa",
    "Tender advisory Africa",
    "Market entry Kenya",
    "Political risk advisory",
    "East Africa investment advisory",
    "Defence advisory Africa",
  ],
  alternates: {
    canonical: "https://viremontadvisorygroup.com",
  },
  openGraph: {
    title:
      "Strategic Advisory & Government Relations in East Africa | Viremont Advisory Group",
    description:
      "Institution-level advisory across government engagement, infrastructure, defence, energy and investment strategy in East Africa.",
    url: "https://viremontadvisorygroup.com",
  },
};

import Link from "next/link";

export default function Home() {
  const sectors = [
    "Defence & National Security",
    "Energy & Natural Resources",
    "Infrastructure & Transport",
    "Agriculture & Food Security",
    "ICT & Digital Economy",
    "Financial Services & FinTech",
    "Health & Pharmaceuticals",
    "Education & Training",
    "Real Estate & Urban Development",
    "Water & Environment",
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden pt-28 md:pt-32 pb-20">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[url('/home-hero.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-slate-950/75" />
        </div>

        {/* Subtle institutional glow */}
        <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-[1.3fr,0.7fr] gap-12 items-start">
            {/* Left */}
            <div>
              <p className="text-xs font-semibold tracking-[0.35em] uppercase text-sky-200">
                Viremont Advisory Group • East Africa
              </p>

              <h1 className="mt-5 text-4xl md:text-5xl font-bold text-white leading-tight">
                Your Gateway to East Africa’s{" "}
                <span className="text-sky-300">Government & Investment</span>{" "}
                Landscape
              </h1>

              <p className="mt-6 text-slate-200 text-base md:text-lg max-w-2xl leading-relaxed">
                Viremont Advisory Group provides discreet strategic advisory for
                investors, institutions, and multinationals navigating public
                sector, defence, infrastructure, and investment opportunities in
                East Africa.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-md bg-sky-600 px-7 py-3 text-sm md:text-base font-semibold text-white hover:bg-sky-500 transition shadow-sm"
                >
                  Request Consultation
                </Link>

                <Link
                  href="#home-services"
                  className="rounded-md border border-white/30 px-7 py-3 text-sm md:text-base font-semibold text-white hover:bg-white/10 transition"
                >
                  View Services
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-300">
                {[
                  "Government engagement",
                  "Market entry & investment",
                  "Risk & compliance intelligence",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-sky-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Insight Card */}
            <div>
              <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-sm font-semibold text-white">
                    East Africa at a Glance
                  </h2>
                  <span className="text-[11px] font-semibold text-sky-200 border border-white/20 px-2.5 py-1 rounded-full">
                    Insights
                  </span>
                </div>

                <p className="text-sm text-slate-200 leading-relaxed">
                  A rapidly growing region with strategic priorities in defence,
                  infrastructure, energy, agriculture and digital transformation.
                </p>

                <div className="mt-5 grid grid-cols-2 gap-4 text-sm">
                  {[
                    ["High-Growth", "Strong demographics & reform momentum."],
                    ["Strategic Projects", "Defence, energy & infrastructure."],
                    ["Regional Hub", "Gateway to COMESA & Africa."],
                    ["Public–Private", "PPPs & blended finance models."],
                  ].map(([title, body]) => (
                    <div
                      key={title}
                      className="rounded-xl border border-white/10 bg-white/5 p-4"
                    >
                      <p className="font-semibold text-white">{title}</p>
                      <p className="mt-1 text-slate-200 text-xs leading-relaxed">
                        {body}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="block w-full text-center rounded-md bg-white text-slate-900 px-5 py-3 text-sm font-semibold hover:bg-slate-100 transition"
                  >
                    Speak to an Advisor
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section
        id="home-services"
        className="max-w-6xl mx-auto px-4 py-16 border-t border-slate-200"
      >
        <p className="text-xs font-semibold text-sky-700 uppercase tracking-[0.3em]">
          Services
        </p>
        <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">
          How We Support Our Clients
        </h2>

        <p className="mt-3 text-base text-slate-700 max-w-3xl">
          Advisory services focused on government engagement, market entry and
          strategic risk for institutional decision-makers.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            [
              "/services#government-relations",
              "Government Relations & Tender Advisory",
              "Navigate ministries, agencies and public procurement with clarity and compliance.",
            ],
            [
              "/services#investment-entry",
              "Investment & Market Entry",
              "Structured pathways for investors and multinationals entering East Africa.",
            ],
            [
              "/services#risk-intelligence",
              "Risk, Compliance & Intelligence",
              "Independent political, regulatory and integrity assessments.",
            ],
          ].map(([href, title, body]) => (
            <Link
              key={title}
              href={href}
              className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition"
            >
              <p className="font-semibold text-slate-900">{title}</p>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                {body}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= SECTORS ================= */}
      <section className="max-w-6xl mx-auto px-4 pb-16 border-t border-slate-200 pt-12">
        <p className="text-xs font-semibold text-sky-700 uppercase tracking-[0.3em]">
          Coverage
        </p>
        <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">
          Strategic Sectors We Serve
        </h2>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sectors.map((sector) => (
            <div
              key={sector}
              className="rounded-xl bg-white border border-slate-200 px-4 py-3 shadow-sm hover:shadow-md hover:-translate-y-1 transition text-sm text-slate-800"
            >
              {sector}
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-slate-950 text-white">
        <div className="max-w-6xl mx-auto px-4 py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Planning to enter East Africa?
            </h2>
            <p className="mt-3 text-slate-300 max-w-xl">
              Engage Viremont Advisory Group for disciplined government engagement
              and strategic market entry.
            </p>
          </div>

          <Link
            href="/contact"
            className="rounded-md bg-white text-slate-900 px-6 py-3 text-sm md:text-base font-semibold hover:bg-slate-100 transition"
          >
            Speak to an Advisor
          </Link>
        </div>
      </section>
    </main>
  );
}
