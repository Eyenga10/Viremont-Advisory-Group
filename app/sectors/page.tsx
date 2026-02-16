import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategic Sectors: Defence, Energy, Infrastructure & More",
  description:
    "We advise across defence, infrastructure, energy, ICT, agriculture, finance and climate-related sectors aligned with East Africa’s strategic priorities.",
  alternates: {
    canonical: "https://viremontadvisorygroup.com/sectors",
  },
};

export default function Sectors() {
  const sectors = [
    {
      name: "Defence & National Security",
      desc:
        "Viremont Advisory Group provides strategic advisory support to defence, national security and law-enforcement related programmes across East Africa. We assist international defence manufacturers, technology providers and institutional investors in navigating regulatory frameworks, procurement structures and sovereign engagement processes., logistics and situational-awareness solutions in regulated environments.",
    },
    {
      name: "Energy & Natural Resources",
      desc:
        "Advisory support for government-linked energy projects including power generation contracts, grid expansion, renewable energy procurement, oil & gas concessions and critical mineral development. We assist sponsors and contractors navigating public-sector frameworks, tender positioning and sovereign energy initiatives across East Africa.",
    },
    {
      name: "Infrastructure & Transport",
      desc:
        "Advisory services supporting roads, railways, ports, airports and logistics corridor development under public–private partnerships (PPP), sovereign procurement frameworks and long-term concession agreements. We assist clients navigating government infrastructure tenders, regulatory approvals and state-backed project structures across East Africa.",
    },
    {
      name: "Agriculture & Food Security",
      desc:
        "Advisory support for mechanisation projects, irrigation infrastructure, fertilizer supply programmes, strategic grain reserves, agro-processing facilities and government food-security tenders. We assist clients participating in public-sector agricultural procurement and state-backed resilience initiatives across East Africa.",
    },
    {
      name: "ICT, Cyber & Digital Identity",
      desc:
        "Advisory support for digital public infrastructure projects, cybersecurity programs, secure government communications, national ID systems, data centre development and e-government modernization tenders. We assist clients participating in regulated ICT procurement and sovereign digital transformation initiatives across East Africa.",
    },
    {
      name: "Financial Services & FinTech",
      desc:
        "Advisory support for government-linked digital payment systems, financial inclusion tenders, regulated lending platforms, capital market participation and partnerships with licensed banks and public financial institutions across East Africa. We assist clients engaging in central bank-regulated and sovereign-backed financial infrastructure projects.",
    },
    {
      name: "Health & Pharmaceuticals",
      desc:
        "Advisory for government hospital projects, medical equipment tenders, diagnostics systems, cold-chain logistics, pharmaceutical distribution frameworks and digital health infrastructure across East Africa. We assist clients engaging in regulated public health procurement and sovereign health system modernisation programmes.",
    },
    {
      name: "Education, Training & Skills",
      desc:
        "Advisory for government TVET projects, defence and security training contracts, higher-education partnerships, digital learning infrastructure and national skills development programmes across East Africa.",
    },
    {
      name: "Real Estate & Urban Development",
      desc:
        "Engagement across affordable housing initiatives, urban regeneration schemes, logistics corridors, sovereign-backed developments and concession-based real estate projects across East Africa.",
    },
    {
      name: "Water, Climate & Environment",
      desc:
        "Engagement across dam construction, irrigation expansion, urban water systems, sanitation upgrades and climate adaptation initiatives funded through sovereign budgets, multilateral finance and PPP structures.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-20 md:pt-24 pb-12 md:pb-16">
      <section className="max-w-5xl mx-auto px-4 space-y-8">
        <div>
          <p className="text-xs font-semibold text-sky-700 uppercase tracking-[0.3em]">
            Sectors
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
            Strategic Sectors We Serve
          </h1>
          <p className="mt-3 text-sm md:text-base text-slate-700 max-w-3xl">
            Our work is concentrated in sectors where public policy, security,
            infrastructure and long-term investment intersect. Many of these
            require sustained engagement with government, regulators and
            state-owned enterprises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {sectors.map((sector) => (
            <div
              key={sector.name}
              className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition"
            >
              <h2 className="text-sm md:text-base font-semibold text-slate-900 mb-2">
                {sector.name}
              </h2>
              <p className="text-xs md:text-sm text-slate-700">{sector.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
