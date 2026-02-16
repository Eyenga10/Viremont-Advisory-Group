import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Viremont Advisory Group",
  description:
    "Learn about Viremont Advisory Group — a strategic advisory firm focused on government engagement, infrastructure, defence and institutional investment across East Africa.",
  alternates: {
    canonical: "https://viremontadvisorygroup.com/about",
  },
};

import Link from "next/link";

export default function About() {
  const whoWeWorkWithLeft = [
    "Global defence, aerospace and security companies",
    "Infrastructure, energy and logistics developers",
    "Impact and blended-finance investors",
    "Technology, ICT and digital identity providers",
  ];

  const whoWeWorkWithRight = [
    "Development finance institutions and funds",
    "Regional banks and financial institutions",
    "Agri-business and food-security focused firms",
    "Professional services and strategic partners",
  ];

  const principles = [
    {
      title: "Discreet and Principled",
      body:
        "We operate quietly, within the law and aligned with clients’ governance standards and reputational expectations.",
    },
    {
      title: "Insight-Driven",
      body:
        "Our work is grounded in facts, nuanced local understanding, and a clear view of political and institutional dynamics.",
    },
    {
      title: "Long-Term Focus",
      body:
        "We prioritise durable relationships and repeatable outcomes over short-term wins or one-off transactions.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-24 md:pt-28 pb-14 md:pb-16">
      <section className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-semibold text-sky-700 uppercase tracking-[0.3em]">
            About
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
            Viremont Advisory Group
          </h1>
          <p className="mt-4 text-sm md:text-base text-slate-700 max-w-3xl leading-relaxed">
            Viremont Advisory Group is an East Africa focused advisory firm
            operating at the intersection of government, strategic sectors and
            international capital. We support decision-makers who require clear,
            independent intelligence and structured engagement with public
            institutions.
          </p>

          {/* Optional quick actions */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-500 transition shadow-sm"
            >
              Request a Consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition"
            >
              View Services
            </Link>
          </div>
        </div>

        {/* Mission + How We Work */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Our Mission</h2>
            <p className="mt-3 text-sm text-slate-700 leading-relaxed">
              To enable global investors, multinationals and institutions to
              navigate East Africa’s public sector and strategic markets with
              confidence, discipline and discretion while unlocking opportunity
              and managing risk.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">How We Work</h2>
            <p className="mt-3 text-sm text-slate-700 leading-relaxed">
              We combine senior-level networks, sector expertise and on-the-ground
              intelligence with rigorous analysis. Each mandate is handled
              discretely, guided by clear strategy, accountable execution and a
              long-term perspective.
            </p>
          </div>
        </div>

        {/* Who we work with */}
        <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm mb-8">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <h2 className="text-lg font-semibold text-slate-900">
              Who We Work With
            </h2>
            <span className="text-[11px] font-semibold text-sky-700 bg-sky-50 border border-sky-100 px-2.5 py-1 rounded-full">
              Institutional clients
            </span>
          </div>

          <div className="mt-4 grid md:grid-cols-2 gap-6 text-sm text-slate-700">
            <ul className="list-disc list-inside space-y-1.5">
              {whoWeWorkWithLeft.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>

            <ul className="list-disc list-inside space-y-1.5">
              {whoWeWorkWithRight.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Principles */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {principles.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition"
            >
              <h3 className="font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* Geographic focus */}
        <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">
            Geographic Focus
          </h2>
          <p className="mt-3 text-sm text-slate-700 leading-relaxed">
            Viremont Advisory Group is headquartered in Nairobi and supports
            mandates across East Africa and the wider COMESA region, including:
          </p>

          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <ul className="text-sm text-slate-700 list-disc list-inside space-y-1.5">
              <li>Kenya, Uganda, Tanzania, Rwanda and Burundi</li>
              <li>Ethiopia, South Sudan and neighbouring states</li>
            </ul>
            <ul className="text-sm text-slate-700 list-disc list-inside space-y-1.5">
              <li>Cross-border and regional programmes spanning COMESA</li>
              <li>Government-linked and institutional mandates</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
