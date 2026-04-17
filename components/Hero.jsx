import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/lib/constants";

const stats = [
  { value: "6+", label: "Especialidades" },
  { value: "ULA", label: "Formación" },
  { value: "CEMDI", label: "Internacional" },
  { value: "100%", label: "Personalizado" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-malva-50 via-white to-white"
    >
      {/* Blobs de fondo */}
      <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-malva-200/40 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full bg-dorado/10 blur-3xl pointer-events-none" />

      <div className="container-page relative">
        <div className="grid lg:grid-cols-2 lg:items-center lg:gap-14 lg:pt-40 lg:pb-28">

          {/* ── FOTO (orden 1 en mobile, orden 2 en desktop) ── */}
          <div className="relative order-first lg:order-last pt-24 lg:pt-0">

            {/* Marco con gradiente */}
            <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-tr from-malva-300/50 via-malva-100/30 to-dorado/25 blur-2xl opacity-80 pointer-events-none" />

            {/* Foto principal */}
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-[0_24px_70px_rgba(138,114,145,0.22)]">
                <Image
                  src="/images/dr-jennifer-hero.jpg"
                  alt="Dra. Jennifer Manrique, Endocrinóloga en Barinas"
                  fill
                  priority
                  sizes="(max-width: 1024px) 85vw, 520px"
                  className="object-cover object-top"
                />
                {/* Gradiente inferior sobre la foto */}
                <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-malva-900/60 to-transparent pointer-events-none" />

                {/* Nombre sobre la foto (sólo mobile/tablet) */}
                <div className="absolute bottom-5 left-5 right-5 lg:hidden">
                  <p className="text-white font-[family-name:var(--font-display)] text-xl font-semibold leading-tight">
                    Dra. Jennifer Manrique
                  </p>
                  <p className="text-malva-200 text-sm mt-0.5">Endocrinóloga en Barinas</p>
                </div>
              </div>

              {/* Badge ULA — izquierda */}
              <div className="absolute -left-3 md:-left-6 bottom-20 lg:bottom-10 flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-white shadow-[0_10px_40px_rgba(44,37,48,0.14)] border border-malva-50">
                <div className="w-9 h-9 rounded-full bg-malva-100 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 text-malva-700" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-texto-suave">Especialista</p>
                  <p className="text-sm font-semibold text-malva-900 leading-tight">Endocrinología ULA</p>
                </div>
              </div>

              {/* Badge GLP-1 — derecha */}
              <div className="absolute -right-3 md:-right-6 top-8 lg:top-10 flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-white shadow-[0_10px_40px_rgba(44,37,48,0.14)] border border-malva-50">
                <div className="w-9 h-9 rounded-full bg-dorado/20 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 text-dorado-dark" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-texto-suave">Tratamientos</p>
                  <p className="text-sm font-semibold text-malva-900 leading-tight">GLP-1 y Tecnología</p>
                </div>
              </div>

              {/* Badge disponible — sólo mobile, arriba */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 lg:hidden">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm shadow-md text-xs font-semibold text-malva-800 border border-malva-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Agenda disponible
                </span>
              </div>
            </div>
          </div>

          {/* ── TEXTO (orden 2 en mobile, orden 1 en desktop) ── */}
          <div className="order-last lg:order-first pt-8 pb-10 lg:pt-0 lg:pb-0 [animation:var(--animate-slide-up)]">

            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-malva-100 text-malva-800 text-xs font-semibold uppercase tracking-[0.2em]">
              <span className="w-1.5 h-1.5 rounded-full bg-dorado" />
              Endocrinóloga en Barinas
            </span>

            <h1 className="mt-5 font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl leading-[1.06] text-malva-900">
              Especialista en{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-dorado">diabetes,</span>
              </span>{" "}
              <span className="text-dorado">obesidad</span> y salud hormonal
            </h1>

            <p className="mt-5 text-base md:text-lg leading-relaxed text-texto-suave max-w-lg">
              Tratamientos personalizados con tecnología avanzada para ayudarte a
              controlar tu salud metabólica, peso y equilibrio hormonal en Barinas.
            </p>

            {/* Trust signal */}
            <div className="mt-5 inline-flex items-center gap-2 text-sm text-texto-suave">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-dorado shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              Atención previa cita — Lunes a Viernes
            </div>

            {/* CTAs */}
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Link
                href={CONTACT.whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-malva text-white font-semibold shadow-[0_10px_30px_rgba(138,114,145,0.3)] hover:bg-malva-700 hover:-translate-y-0.5 transition-all duration-300 text-sm md:text-base"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="currentColor" aria-hidden="true">
                  <path d="M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .18 5.32.18 11.86c0 2.09.55 4.13 1.6 5.93L0 24l6.4-1.68a11.85 11.85 0 0 0 5.64 1.44h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.15-3.39-8.42Zm-8.47 18.12a9.7 9.7 0 0 1-4.94-1.35l-.36-.21-3.8 1 1.01-3.7-.23-.38a9.76 9.76 0 0 1-1.5-5.1c0-5.4 4.4-9.8 9.83-9.8 2.62 0 5.08 1.02 6.94 2.87a9.74 9.74 0 0 1 2.87 6.93c0 5.4-4.4 9.8-9.81 9.8Z" />
                </svg>
                Agendar consulta
              </Link>
              <Link
                href="/servicios"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-malva-300 text-malva-800 font-semibold hover:bg-malva-50 hover:border-malva transition-all duration-300 text-sm md:text-base"
              >
                Ver servicios
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-4 gap-3 max-w-sm lg:max-w-md">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center text-center p-3 rounded-2xl bg-white border border-malva-100 shadow-[0_2px_12px_rgba(44,37,48,0.05)]"
                >
                  <span className="font-[family-name:var(--font-display)] text-lg md:text-2xl font-semibold text-malva-900 leading-none">
                    {s.value}
                  </span>
                  <span className="mt-1 text-[10px] md:text-xs text-texto-suave leading-tight">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
