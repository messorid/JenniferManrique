"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("cookie_consent");
      if (!consent) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function accept() {
    try { localStorage.setItem("cookie_consent", "accepted"); } catch {}
    setVisible(false);
  }

  function reject() {
    try { localStorage.setItem("cookie_consent", "rejected"); } catch {}
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 md:bottom-4 md:left-4 md:right-auto md:max-w-md"
    >
      <div className="rounded-2xl bg-malva-900 text-white shadow-[0_20px_60px_rgba(44,37,48,0.4)] border border-malva-700 p-5 md:p-6">
        <div className="flex items-start gap-3 mb-4">
          <span className="shrink-0 w-9 h-9 rounded-xl bg-dorado/20 flex items-center justify-center text-dorado">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
              <path d="M8.5 8.5v.01M16 15.5v.01M12 12v.01" />
            </svg>
          </span>
          <div>
            <p className="font-semibold text-sm text-white">Usamos cookies</p>
            <p className="text-xs text-malva-300 mt-0.5">
              Utilizamos cookies para mejorar tu experiencia en este sitio.{" "}
              <Link href="/cookies" className="underline text-dorado-light hover:text-dorado transition-colors">
                Politica de cookies
              </Link>
              {" "}y{" "}
              <Link href="/privacidad" className="underline text-dorado-light hover:text-dorado transition-colors">
                Privacidad
              </Link>.
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={accept}
            className="flex-1 px-4 py-2.5 rounded-full bg-dorado text-white text-sm font-semibold hover:bg-dorado-dark transition-colors"
          >
            Aceptar
          </button>
          <button
            onClick={reject}
            className="flex-1 px-4 py-2.5 rounded-full bg-malva-800 text-malva-200 text-sm font-semibold hover:bg-malva-700 transition-colors border border-malva-700"
          >
            Rechazar
          </button>
        </div>
      </div>
    </div>
  );
}
