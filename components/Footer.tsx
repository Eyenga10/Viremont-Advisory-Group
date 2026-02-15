import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col md:flex-row gap-4 md:justify-between text-xs md:text-sm text-slate-700">
        <div>
          <p className="font-semibold text-slate-900">
            Viremont Advisory Group
          </p>
          <p>East Africa — Government & Investment Advisory</p>
        </div>

        <div className="flex flex-col gap-1">
          <p>
            Email:{" "}
            <a
              href="mailto:info@viremontadvisorygroup.com"
              className="text-sky-700 hover:underline"
            >
              info@viremontadvisorygroup.com
            </a>
          </p>
          <p>Nairobi, Kenya</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link href="/about" className="hover:text-sky-700">
            About
          </Link>
          <Link href="/services" className="hover:text-sky-700">
            Services
          </Link>
          <Link href="/sectors" className="hover:text-sky-700">
            Sectors
          </Link>
          <Link href="/contact" className="hover:text-sky-700">
            Contact
          </Link>
        </div>
      </div>

      <div className="border-t border-slate-200 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 py-3 text-[0.7rem] text-slate-500 flex justify-between">
          <p>© {new Date().getFullYear()} Viremont Advisory Group</p>
          <p>Confidential, discreet advisory.</p>
        </div>
      </div>
    </footer>
  );
}
