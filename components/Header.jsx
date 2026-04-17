"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { CONTACT, NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_4px_20px_rgba(44,37,48,0.06)]"
          : "bg-white/60 backdrop-blur-sm"
      }`}
    >
      <div className="container-page flex items-center justify-between py-4">
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setOpen(false)}
          aria-label="Dra. Jennifer Manrique - Inicio"
        >
          <Image
            src="/images/logo.png"
            alt="Dra. Jennifer Manrique, Endocrinóloga"
            width={200}
            height={112}
            priority
            className="h-20 md:h-24 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-malva-800 hover:text-dorado transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block w-[180px]" />

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full text-malva-900 hover:bg-malva-100 transition"
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container-page pb-5 flex flex-col gap-1 border-t border-malva-100 pt-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2.5 text-base font-medium text-malva-800 hover:text-dorado transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
