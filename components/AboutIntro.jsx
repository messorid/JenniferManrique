import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/lib/constants";

const stats = [
  { value: "2024", label: "Especialista ULA" },
  { value: "5+", label: "Trabajos de investigación" },
  { value: "6", label: "Areas de especialidad" },
  { value: "2", label: "Sedes de atención" },
];

export default function AboutIntro() {
  return (
    <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-gradient-to-b from-malva-50 via-white to-white">
      <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-malva-200/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full bg-dorado/10 blur-3xl pointer-events-none" />

      <div className="container-page relative grid gap-14 lg:grid-cols-2 lg:items-center">
        <div className="[animation:var(--animate-slide-up)]">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-malva-100 text-malva-800 text-xs font-semibold uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 rounded-full bg-dorado" />
            Endocrinóloga en Barinas
          </span>

          <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-malva-900">
            Dra. Jennifer{" "}
            <span className="text-dorado">Manrique</span>
          </h1>

          <p className="mt-2 text-lg md:text-xl text-malva-700 font-medium">
            Médico Cirujano y Especialista en Endocrinología
          </p>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-texto-suave">
            <p>
              La Dra. Jennifer Manrique es Médico Cirujano y Especialista en
              Endocrinología, con formación en la Universidad Nacional
              Experimental Francisco de Miranda y especializacion de tres
              años en la Universidad de los Andes, Merida.
            </p>
            <p>
              Cuenta con experiencia en centros de referencia naciónal cómo el
              Hospital Universitario de los Andes y el Hospital Dr. Luis
              Razetti, además de una rotación internacional en el CEMDI de
              Bogota. Ha participado activamente en congresos naciónales e
              internacionales de endocrinología.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-5">
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

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={CONTACT.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-malva text-white font-semibold shadow-[0_10px_30px_rgba(138,114,145,0.25)] hover:bg-malva-700 hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                <path d="M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .18 5.32.18 11.86c0 2.09.55 4.13 1.6 5.93L0 24l6.4-1.68a11.85 11.85 0 0 0 5.64 1.44h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.15-3.39-8.42Zm-8.47 18.12a9.7 9.7 0 0 1-4.94-1.35l-.36-.21-3.8 1 1.01-3.7-.23-.38a9.76 9.76 0 0 1-1.5-5.1c0-5.4 4.4-9.8 9.83-9.8 2.62 0 5.08 1.02 6.94 2.87a9.74 9.74 0 0 1 2.87 6.93c0 5.4-4.4 9.8-9.81 9.8Z" />
              </svg>
              Agendar consulta
            </Link>
            <Link
              href="#trayectoria"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-malva-300 text-malva-800 font-semibold hover:bg-malva-50 hover:border-malva transition-all duration-300"
            >
              Ver trayectoria
            </Link>
          </div>
        </div>

        <div className="relative [animation:var(--animate-scale-in)]">
          <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-tr from-malva-200 via-malva-100 to-dorado/30 blur-2xl opacity-70" />
          <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(138,114,145,0.18)]">
            <Image
              src="/images/OZR_7464 (1).jpg"
              alt="Dra. Jennifer Manrique, Endocrinóloga en Barinas"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 540px"
              className="object-cover object-top"
            />
          </div>

          <div className="hidden md:flex absolute -left-6 bottom-16 items-center gap-3 px-5 py-4 rounded-2xl bg-white shadow-[0_10px_40px_rgba(44,37,48,0.12)]">
            <div className="w-10 h-10 rounded-full bg-dorado/20 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-dorado-dark" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="9" r="6" />
                <polyline points="8.5 13 7 22 12 19 17 22 15.5 13" />
              </svg>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-texto-suave">Postgrado</p>
              <p className="text-sm font-semibold text-malva-900">Universidad de los Andes</p>
            </div>
          </div>

          <div className="hidden md:flex absolute -right-4 top-12 items-center gap-3 px-5 py-4 rounded-2xl bg-white shadow-[0_10px_40px_rgba(44,37,48,0.12)]">
            <div className="w-10 h-10 rounded-full bg-malva-100 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-malva-700" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
              </svg>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-texto-suave">Internacional</p>
              <p className="text-sm font-semibold text-malva-900">CEMDI Bogota 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
