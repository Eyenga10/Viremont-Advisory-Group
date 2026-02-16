"use client";

import Link from "next/link";
import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mbdaoerg";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactClient() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const fd = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" },
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(
          data?.errors?.[0]?.message ||
            data?.error ||
            "Submission failed. Please try again."
        );
        return;
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 pt-20 md:pt-24 pb-14 md:pb-16">
      <section className="max-w-6xl mx-auto px-4 space-y-10">
        {/* Header */}
        <div>
          <p className="text-xs font-semibold text-sky-700 uppercase tracking-[0.3em]">
            Contact
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
            Contact Viremont Advisory Group
          </h1>
          <p className="mt-4 text-sm md:text-base text-slate-700 max-w-3xl leading-relaxed">
            For strategic mandates, partnerships or confidential discussions,
            please reach our advisory team. We prioritise clearly defined,
            institution-level engagements.
          </p>
        </div>

        <div className="grid lg:grid-cols-[2fr,3fr] gap-8 md:gap-10 items-start">
          {/* Left column */}
          <div className="space-y-6">
            <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
              <h2 className="text-base font-semibold text-slate-900">
                Primary Contact
              </h2>

              <div className="mt-4 space-y-3 text-sm text-slate-700">
                <p>
                  <span className="font-semibold text-slate-900">Email:</span>{" "}
                  <a
                    href="mailto:info@viremontadvisorygroup.com"
                    className="text-sky-700 hover:underline"
                  >
                    info@viremontadvisorygroup.com
                  </a>
                </p>

                <p>
                  <span className="font-semibold text-slate-900">WhatsApp:</span>{" "}
                  <a
                    href="https://wa.me/254108675410"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-700 hover:underline"
                  >
                    +254 108 675 410
                  </a>
                </p>

                <p>
                  <span className="font-semibold text-slate-900">Location:</span>{" "}
                  Nairobi, Kenya
                </p>
              </div>

              <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs text-slate-700 leading-relaxed">
                  We typically respond within{" "}
                  <span className="font-semibold text-slate-900">
                    2–3 business days
                  </span>
                  .
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-950 text-white p-6">
              <h2 className="text-base font-semibold">Useful Links</h2>
              <div className="mt-4 grid gap-2 text-sm">
                <Link
                  href="/services"
                  className="rounded-lg bg-white/10 border border-white/10 px-4 py-2 hover:bg-white/15 transition"
                >
                  View Services
                </Link>
                <Link
                  href="/sectors"
                  className="rounded-lg bg-white/10 border border-white/10 px-4 py-2 hover:bg-white/15 transition"
                >
                  Explore Sectors
                </Link>
              </div>
            </div>
          </div>

          {/* Right column: Form */}
          <div className="rounded-2xl bg-white border border-slate-200 p-6 md:p-7 shadow-sm">
            <h2 className="text-base font-semibold text-slate-900">
              Enquiry Form
            </h2>

            {status === "sent" && (
              <div className="mt-5 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
                Message sent successfully. We will respond shortly.
              </div>
            )}

            {status === "error" && (
              <div className="mt-5 rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-900">
                {errorMsg}
              </div>
            )}

            <form onSubmit={onSubmit} className="mt-6 space-y-4 text-sm">
              <input
                type="hidden"
                name="_subject"
                value="New enquiry — Viremont Advisory Group"
              />

              <input
                name="fullName"
                required
                placeholder="Full Name"
                className="w-full rounded-md border border-slate-300 px-3 py-2 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:border-sky-700"
              />

              <input
                name="organisation"
                placeholder="Organisation"
                className="w-full rounded-md border border-slate-300 px-3 py-2 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:border-sky-700"
              />

              <input
                name="email"
                type="email"
                required
                placeholder="Email"
                className="w-full rounded-md border border-slate-300 px-3 py-2 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:border-sky-700"
              />

              <textarea
                name="message"
                required
                rows={5}
                placeholder="Briefly describe your enquiry..."
                className="w-full rounded-md border border-slate-300 px-3 py-2 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:border-sky-700"
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-md bg-sky-700 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-800 transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Submit Enquiry"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
