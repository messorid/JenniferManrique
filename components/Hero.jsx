import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/lib/constants";

const stats = [
  { value: "6+", label: "Areas de especialidad" },
  { value: "ULA", label: "Especialista en Endocrinologia" },
  { value: "100%", label: "Atencion personalizada" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-malva-50 via-white to-white"
    >
      <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-malva-200/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full bg-dorado/10 blur-3xl pointer-events-none" />

      <div className="container-page relative grid gap-14 lg:grid-cols-2 lg:items-center">
        <div className="[animation:var(--animate-slide-up)]">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-malva-100 text-malva-800 text-xs font-semibold uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 rounded-full bg-dorado" />
            Endocrinologa en Barinas
          </span>

          <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-malva-900">
            Endocrinologa en Barinas especializada en{" "}
            <span className="text-dorado">diabetes, obesidad</span> y salud
            hormonal
          </h1>

          <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-texto-suave">
            Tratamientos personalizados con tecnologia avanzada para ayudarte a
            controlar tu salud metabolica, peso y equilibrio hormonal.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={CONTACT.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-malva text-white font-semibold shadow-[0_10px_30px_rgba(138,114,145,0.25)] hover:bg-malva-700 hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                <path d="M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .18 5.32.18 11.86c0 2.09.55 4.13 1.6 5.93L0 24l6.4-1.68a11.85 11.85 0 0 0 5.64 1.44h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.15-3.39-8.42Zm-8.47 18.12a9.7 9.7 0 0 1-4.94-1.35l-.36-.21-3.8 1 1.01-3.7-.23-.38a9.76 9.76 0 0 1-1.5-5.1c0-5.4 4.4-9.8 9.83-9.8 2.62 0 5.08 1.02 6.94 2.87a9.74 9.74 0 0 1 2.87 6.93c0 5.4-4.4 9.8-9.81 9.8Z" />
              </svg>
              Agendar consulta por WhatsApp
            </Link>
            <Link
              href="#servicios"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-malva-300 text-malva-800 font-semibold hover:bg-malva-50 hover:border-malva transition-all duration-300"
            >
              Ver servicios
            </Link>
          </div>

          <p className="mt-6 text-sm text-texto-suave flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-dorado" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            Atencion previa cita - Lunes a Viernes
          </p>

          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {stats.map((s) => (
              <div key={s.label} className="border-l-2 border-dorado pl-4">
                <dt className="font-[family-name:var(--font-display)] text-2xl md:text-3xl text-malva-900 font-semibold">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs text-texto-suave leading-snug">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative [animation:var(--animate-scale-in)]">
          <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-tr from-malva-200 via-malva-100 to-dorado/30 blur-2xl opacity-70" />

          <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(138,114,145,0.18)]">
            <Image
              src="/images/dr-jennifer-hero.jpg"
              alt="Dra. Jennifer Manrique, Endocrinologa en Barinas"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 540px"
              className="object-cover object-top"
            />
          </div>

          <div className="hidden md:flex absolute -left-6 bottom-10 items-center gap-3 px-5 py-4 rounded-2xl bg-white shadow-[0_10px_40px_rgba(44,37,48,0.12)]">
            <div className="w-10 h-10 rounded-full bg-malva-100 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-malva-700" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
              </svg>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-texto-suave">
                Especialista
              </p>
              <p className="text-sm font-semibold text-malva-900">
                Endocrinologia ULA
              </p>
            </div>
          </div>

          <div className="hidden md:flex absolute -right-4 top-10 items-center gap-3 px-5 py-4 rounded-2xl bg-white shadow-[0_10px_40px_rgba(44,37,48,0.12)]">
            <div className="w-10 h-10 rounded-full bg-dorado/20 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-dorado-dark" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-texto-suave">
                Tratamientos
              </p>
              <p className="text-sm font-semibold text-malva-900">
                GLP-1 y tecnologia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
