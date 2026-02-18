import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8 text-sm text-slate-700">

        {/* Brand */}
        <div>
          <p className="font-semibold text-slate-900 text-base">
            Viremont Advisory Group
          </p>
          <p className="mt-2 leading-relaxed">
            Strategic government engagement, defense advisory and institutional
            investment strategy across East Africa and priority markets.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="font-semibold text-slate-900 mb-3">Firm</p>
          <div className="flex flex-col gap-2">
            <Link href="/about" className="hover:text-slate-900 transition">
              About
            </Link>
            <Link href="/services" className="hover:text-slate-900 transition">
              Services
            </Link>
            <Link href="/sectors" className="hover:text-slate-900 transition">
              Sectors
            </Link>
            <Link href="/defense" className="hover:text-slate-900 transition">
              Defense Contracts
            </Link>
            <Link href="/contact" className="hover:text-slate-900 transition">
              Contact
            </Link>
          </div>
        </div>

        {/* Governance */}
        <div>
          <p className="font-semibold text-slate-900 mb-3">Governance</p>
          <div className="flex flex-col gap-2">
            <Link href="/terms" className="hover:text-slate-900 transition">
              Terms of Engagement
            </Link>
            <Link href="/governance" className="hover:text-slate-900 transition">
              Governance & Compliance
            </Link>
            <Link href="/discretion" className="hover:text-slate-900 transition">
              Discretion Policy
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="font-semibold text-slate-900 mb-3">Contact</p>
          <div className="flex flex-col gap-2">
            <a
              href="mailto:info@viremontadvisorygroup.com"
              className="text-sky-700 hover:underline"
            >
              info@viremontadvisorygroup.com
            </a>
            <a
              href="https://wa.me/254108675410"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 transition"
            >
              WhatsApp: +254 108 675 410
            </a>
            <p>Nairobi, Kenya</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Viremont Advisory Group. All rights reserved.</p>
          <p>Confidential. Institutional advisory. Principled engagement.</p>
        </div>
      </div>
    </footer>
  );
}
