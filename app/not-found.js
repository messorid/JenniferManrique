import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CONTACT } from "@/lib/constants";

export const metadata = {
  title: "Pagina no encontrada | Dra. Jennifer Manrique",
  description: "La pagina que buscas no existe. Vuelve al inicio o agenda tu consulta con la endocrinóloga en Barinas.",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-malva-50 via-white to-white pt-24">
        <div className="container-page max-w-2xl mx-auto text-center py-20">
          <div className="inline-flex w-24 h-24 rounded-full bg-malva-100 items-center justify-center mx-auto mb-8">
            <svg viewBox="0 0 24 24" className="w-12 h-12 text-malva-400" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </div>

          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-malva-100 text-malva-800 text-xs font-semibold uppercase tracking-[0.2em] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-dorado" />
            Error 404
          </span>

          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-malva-900 leading-tight">
            Pagina no encontrada
          </h1>
          <p className="mt-5 text-base md:text-lg text-texto-suave leading-relaxed">
            La pagina que buscas no existe o fue movida. Puedes volver al inicio
            o agendar directamente tu consulta con la Dra. Jennifer Manrique.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-malva-900 text-white font-semibold hover:bg-malva-800 hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              Volver al inicio
            </Link>
            <Link
              href={CONTACT.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-dorado text-white font-semibold shadow-[0_10px_30px_rgba(201,168,76,0.3)] hover:bg-dorado-dark hover:-translate-y-0.5 transition-all duration-300"
            >
              Agendar consulta
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg mx-auto">
            {[
              { href: "/servicios", label: "Servicios" },
              { href: "/sobre-mi", label: "Sobre mi" },
              { href: "/faq", label: "Preguntas" },
              { href: "/contacto", label: "Contacto" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2.5 rounded-xl bg-white border border-malva-100 text-sm text-malva-800 text-center hover:border-dorado/60 hover:text-dorado-dark transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
