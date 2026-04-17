import Link from "next/link";
import { CONTACT } from "@/lib/constants";

export default function CTAFinal() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-malva-700 via-malva-800 to-malva-900" />
      <div className="absolute -top-40 -right-20 w-[520px] h-[520px] rounded-full bg-dorado/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-20 w-[520px] h-[520px] rounded-full bg-malva-500/30 blur-3xl pointer-events-none" />

      <div className="relative container-page text-center max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-dorado text-xs font-semibold uppercase tracking-[0.25em] backdrop-blur-sm">
          Comienza hoy
        </span>

        <h2 className="mt-6 font-[family-name:var(--font-display)] text-3xl md:text-5xl lg:text-6xl leading-[1.08] text-white">
          Tu salud hormonal merece{" "}
          <span className="text-dorado">atención experta</span>
        </h2>

        <p className="mt-6 text-base md:text-lg leading-relaxed text-malva-200">
          Agenda tu consulta con la Dra. Jennifer Manrique y recibe un plan
          personalizado para diabetes, pérdida de peso, tiroides o salud
          hormonal. Atención en Barinas, previa cita.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={CONTACT.whatsappMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-dorado text-white font-semibold text-base shadow-[0_15px_40px_rgba(201,168,76,0.35)] hover:bg-dorado-dark hover:-translate-y-0.5 transition-all duration-300"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
              <path d="M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .18 5.32.18 11.86c0 2.09.55 4.13 1.6 5.93L0 24l6.4-1.68a11.85 11.85 0 0 0 5.64 1.44h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.15-3.39-8.42Zm-8.47 18.12a9.7 9.7 0 0 1-4.94-1.35l-.36-.21-3.8 1 1.01-3.7-.23-.38a9.76 9.76 0 0 1-1.5-5.1c0-5.4 4.4-9.8 9.83-9.8 2.62 0 5.08 1.02 6.94 2.87a9.74 9.74 0 0 1 2.87 6.93c0 5.4-4.4 9.8-9.81 9.8Z" />
            </svg>
            Agendar por WhatsApp
          </Link>

          <Link
            href={CONTACT.emailUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/25 text-white font-semibold text-base hover:bg-white/10 transition-all duration-300"
          >
            Escribir por correo
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3 text-left sm:text-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-dorado">
              Telefono
            </p>
            <p className="mt-1 text-sm font-medium text-white">
              {CONTACT.phone}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-dorado">
              Instagram
            </p>
            <p className="mt-1 text-sm font-medium text-white">
              {CONTACT.instagram}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-dorado">
              Consulta
            </p>
            <p className="mt-1 text-sm font-medium text-white">
              Previa cita - L a V
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
