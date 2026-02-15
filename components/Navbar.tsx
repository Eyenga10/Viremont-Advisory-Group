"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/sectors", label: "Sectors" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // close mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-20 md:h-24 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logov1.png"
            alt="Viremont Advisory Group"
            width={520}
            height={200}
            priority
            className="h-16 md:h-20 w-auto object-contain"
            sizes="(max-width: 768px) 260px, 360px"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-700">
          {links.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  "pb-1 border-b-2 transition duration-200 " +
                  (active
                    ? "border-slate-900 text-slate-900"
                    : "border-transparent hover:border-slate-400 hover:text-slate-900")
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-md border border-slate-300 px-3 py-2 text-slate-700"
        >
          <span className="text-lg leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden">
          {/* overlay (starts under navbar on both breakpoints) */}
          <button
            aria-label="Close overlay"
            onClick={() => setOpen(false)}
            className="fixed inset-0 top-20 md:top-24 bg-black/30"
          />

          {/* panel (starts under navbar on both breakpoints) */}
          <div className="fixed top-20 md:top-24 inset-x-0 bg-white border-b border-slate-200 shadow-lg">
            <div className="max-w-7xl mx-auto px-6 py-6 grid gap-4">
              {links.map((link) => {
                const active =
                  link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={
                      "text-base font-semibold transition " +
                      (active
                        ? "text-slate-900"
                        : "text-slate-600 hover:text-slate-900")
                    }
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
