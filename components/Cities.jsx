import Link from "next/link";
import { CONTACT, LOCATION } from "@/lib/constants";

export default function Cities() {
  return (
    <section id="ubicacion" className="relative py-24 md:py-32 bg-white">
      <div className="container-page">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dorado/15 text-dorado-dark text-xs font-semibold uppercase tracking-[0.2em]">
            Ciudades donde atiende
          </span>
          <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl leading-tight text-malva-900">
            Consulta endocrinologica en <span className="text-dorado">Barinas</span>
          </h2>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-texto-suave">
            Atencion presencial previa cita. Consultorio moderno, equipado y de
            facil acceso.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <article className="lg:col-span-3 relative overflow-hidden rounded-3xl bg-gradient-to-br from-malva-700 to-malva-900 text-white p-8 md:p-12 shadow-[0_20px_60px_rgba(44,37,48,0.18)]">
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-dorado/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-malva-500/30 blur-3xl pointer-events-none" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-dorado font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-dorado" />
                Sede principal
              </span>

              <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold">
                Barinas
              </h3>
              <p className="mt-2 text-malva-200">
                {LOCATION.name}
                <br />
                {LOCATION.detail}
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="flex gap-3">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-dorado" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-malva-200">
                      Horario
                    </p>
                    <p className="mt-1 text-sm text-white font-medium leading-snug">
                      Lunes a Viernes
                      <br />
                      8:00 AM - 12:00 PM
                      <br />
                      2:00 PM - 6:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-dorado" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-malva-200">
                      Direccion
                    </p>
                    <p className="mt-1 text-sm text-white font-medium leading-snug">
                      {LOCATION.name},<br />
                      {LOCATION.detail},<br />
                      {LOCATION.city}, {LOCATION.country}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={CONTACT.whatsappMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-dorado text-white font-semibold hover:bg-dorado-dark transition-all duration-300"
                >
                  Agendar cita en Barinas
                </Link>
                <Link
                  href={CONTACT.whatsappMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  {CONTACT.phone}
                </Link>
              </div>

              <p className="mt-5 text-xs text-malva-200">
                {LOCATION.note}
              </p>
            </div>
          </article>

          <article className="lg:col-span-2 relative rounded-3xl bg-malva-50 p-8 md:p-10 border border-malva-100 flex flex-col">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-dorado-dark font-semibold">
              Sede secundaria
            </span>
            <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl md:text-3xl font-semibold text-malva-900">
              Santa Barbara de Barinas
            </h3>
            <p className="mt-3 text-sm text-texto-suave leading-relaxed">
              Consulta mensual disponible para pacientes del eje sur. Atencion
              presencial {LOCATION.secondary.frequency}.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-malva-900">
              <li className="flex items-start gap-2">
                <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-dorado" />
                Agenda con antelacion recomendada
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-dorado" />
                Fechas confirmadas por WhatsApp
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-dorado" />
                Misma calidad de atencion integral
              </li>
            </ul>

            <Link
              href={CONTACT.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-malva text-white font-semibold hover:bg-malva-700 hover:-translate-y-0.5 transition-all duration-300"
            >
              Consultar proxima fecha
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
