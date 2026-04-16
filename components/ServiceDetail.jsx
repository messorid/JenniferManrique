import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/lib/constants";
import ServiceFAQ from "@/components/ServiceFAQ";

export default function ServiceDetail({ service }) {
  return (
    <>
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-gradient-to-b from-malva-50 via-white to-white">
        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-malva-200/40 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[360px] h-[360px] rounded-full bg-dorado/10 blur-3xl pointer-events-none" />

        <div className="container-page relative">
          <nav className="flex items-center gap-2 text-sm text-texto-suave mb-8" aria-label="Ruta de navegacion">
            <Link href="/" className="hover:text-malva transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/servicios" className="hover:text-malva transition-colors">Servicios</Link>
            <span>/</span>
            <span className="text-malva-900 font-medium">{service.title}</span>
          </nav>

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dorado/15 text-dorado-dark text-xs font-semibold uppercase tracking-[0.2em]">
                Endocrinologa en Barinas
              </span>
              <h1 className="mt-5 font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-malva-900">
                {service.title}
              </h1>
              <p className="mt-4 text-lg md:text-xl text-malva-700 font-medium leading-snug">
                {service.tagline}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
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
                  href="/servicios"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-malva-300 text-malva-800 font-semibold hover:bg-malva-50 hover:border-malva transition-all duration-300"
                >
                  Ver todos los servicios
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-tr from-malva-200 via-malva-100 to-dorado/30 blur-2xl opacity-60" />
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(138,114,145,0.18)]">
                <Image
                  src={service.image}
                  alt={`Dra. Jennifer Manrique - ${service.title} en Barinas`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 540px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container-page">
          <div className="grid gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-5 text-base md:text-lg leading-relaxed text-texto-suave">
              {service.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="space-y-3">
              <div className="p-6 rounded-3xl bg-malva-50 border border-malva-100">
                <p className="text-xs uppercase tracking-[0.2em] font-semibold text-dorado-dark mb-4">
                  Sede Barinas
                </p>
                <p className="text-sm text-malva-900 font-medium leading-snug">
                  Hospital Privado San Juan
                  <br />Consultorio 34, Piso 2
                  <br />Barinas, Venezuela
                </p>
                <p className="mt-3 text-xs text-texto-suave">
                  Lun - Vie: 8:00 AM - 12:00 PM
                  <br />Lun - Vie: 2:00 PM - 6:00 PM
                </p>
              </div>
              <Link
                href={CONTACT.whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-malva text-white font-semibold text-sm hover:bg-malva-700 transition"
              >
                Agendar por WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-gradient-to-b from-white to-malva-50">
        <div className="container-page">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl text-malva-900 mb-6">
                Condiciones que tratamos
              </h2>
              <ul className="space-y-3">
                {service.conditions.map((c) => (
                  <li key={c} className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-malva-100 hover:border-dorado/40 hover:-translate-y-0.5 transition-all duration-300">
                    <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-malva-100 text-malva-700 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-sm md:text-base text-malva-900">{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl text-malva-900 mb-6">
                Tratamientos disponibles
              </h2>
              <ul className="space-y-3">
                {service.treatments.map((t) => (
                  <li key={t} className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-malva-100 hover:border-dorado/40 hover:-translate-y-0.5 transition-all duration-300">
                    <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-dorado/15 text-dorado-dark flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                    <span className="text-sm md:text-base text-malva-900">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container-page max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dorado/15 text-dorado-dark text-xs font-semibold uppercase tracking-[0.2em]">
              Preguntas frecuentes
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl md:text-4xl text-malva-900">
              Dudas sobre {service.title.toLowerCase()}
            </h2>
          </div>
          <ServiceFAQ faqs={service.faqs} />
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-malva-700 via-malva-800 to-malva-900 relative overflow-hidden">
        <div className="absolute -top-40 -right-20 w-[520px] h-[520px] rounded-full bg-dorado/20 blur-3xl pointer-events-none" />
        <div className="container-page relative text-center max-w-2xl mx-auto text-white">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl leading-tight">
            Lista para tu <span className="text-dorado">consulta en Barinas?</span>
          </h2>
          <p className="mt-5 text-base text-malva-200">
            Agenda tu cita con la Dra. Jennifer Manrique. Atencion personalizada
            en {service.title.toLowerCase()} en Barinas, Venezuela.
          </p>
          <Link
            href={CONTACT.whatsappMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-dorado text-white font-semibold text-base shadow-[0_15px_40px_rgba(201,168,76,0.35)] hover:bg-dorado-dark hover:-translate-y-0.5 transition-all duration-300"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
              <path d="M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .18 5.32.18 11.86c0 2.09.55 4.13 1.6 5.93L0 24l6.4-1.68a11.85 11.85 0 0 0 5.64 1.44h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.15-3.39-8.42Zm-8.47 18.12a9.7 9.7 0 0 1-4.94-1.35l-.36-.21-3.8 1 1.01-3.7-.23-.38a9.76 9.76 0 0 1-1.5-5.1c0-5.4 4.4-9.8 9.83-9.8 2.62 0 5.08 1.02 6.94 2.87a9.74 9.74 0 0 1 2.87 6.93c0 5.4-4.4 9.8-9.81 9.8Z" />
            </svg>
            Agendar por WhatsApp
          </Link>
        </div>
      </section>
    </>
  );
}
