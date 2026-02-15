export default function Sectors() {
  const sectors = [
    {
      name: "Defence & National Security",
      desc:
        "Support to defence, security and law-enforcement programmes, including equipment, technology, logistics and situational-awareness solutions in regulated environments.",
    },
    {
      name: "Energy & Natural Resources",
      desc:
        "Power generation, transmission, renewables, oil & gas and critical minerals aligned with national energy and transition priorities.",
    },
    {
      name: "Infrastructure & Transport",
      desc:
        "Roads, rail, ports, airports and logistics corridors, with a focus on PPPs, sovereign-backed projects and long-term concession models.",
    },
    {
      name: "Agriculture & Food Security",
      desc:
        "Mechanisation, inputs, irrigation, storage, agro-processing and strategic grain or fertilizer programmes that support national food security.",
    },
    {
      name: "ICT, Cyber & Digital Identity",
      desc:
        "Digital public infrastructure, secure communications, e-government platforms, cyber, data centres and identity systems.",
    },
    {
      name: "Financial Services & FinTech",
      desc:
        "Digital payments, financial inclusion, lending platforms, capital-markets products and partnerships with banks and regulated entities.",
    },
    {
      name: "Health & Pharmaceuticals",
      desc:
        "Hospital and clinic projects, medical equipment, diagnostics, cold-chain logistics and digital health solutions.",
    },
    {
      name: "Education, Training & Skills",
      desc:
        "TVET, higher-education partnerships, defence and security training, and EdTech solutions focused on employable skills.",
    },
    {
      name: "Real Estate & Urban Development",
      desc:
        "Affordable housing, mixed-use developments, logistics parks and urban infrastructure tied to national development plans.",
    },
    {
      name: "Water, Climate & Environment",
      desc:
        "Bulk water supply, dams, irrigation, sanitation, climate-resilience and environmental management programmes.",
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
