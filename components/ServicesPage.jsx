import Link from "next/link";
import { SERVICES } from "@/lib/services";
import { CONTACT } from "@/lib/constants";

const serviceIcons = {
  diabetes: (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2c-2 4-6 7-6 11a6 6 0 0 0 12 0c0-4-4-7-6-11Z" />
      <path d="M9 14h6" />
    </svg>
  ),
  weight: (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 4h12l2 16H4Z" />
      <path d="M9 4c0-1.7 1.3-3 3-3s3 1.3 3 3" />
      <path d="M10 12h4" />
    </svg>
  ),
  thyroid: (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2v4" />
      <path d="M8 6c-2 2-4 5-4 9a4 4 0 0 0 8 0" />
      <path d="M16 6c2 2 4 5 4 9a4 4 0 0 1-8 0" />
    </svg>
  ),
  hormone: (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3a9 9 0 0 1 0 18" />
      <path d="M8 8h8M8 12h8M8 16h8" />
    </svg>
  ),
  fertility: (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="9" r="5" />
      <path d="M12 14v8" />
      <path d="M9 19h6" />
    </svg>
  ),
  growth: (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 20V8" />
      <path d="M4 14h6" />
      <path d="M10 20v-9" />
      <path d="M10 17h6" />
      <path d="M16 20V6" />
      <path d="M16 11h4" />
    </svg>
  ),
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-gradient-to-b from-malva-50 via-white to-white">
        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-malva-200/40 blur-3xl pointer-events-none" />
        <div className="container-page relative max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-malva-100 text-malva-800 text-xs font-semibold uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 rounded-full bg-dorado" />
            Endocrinologa en Barinas, Venezuela
          </span>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-malva-900">
            Servicios de <span className="text-dorado">Endocrinologia</span> en Barinas
          </h1>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-texto-suave max-w-2xl mx-auto">
            La Dra. Jennifer Manrique es la endocrinologa de referencia en Barinas con
            atencion especializada en diabetes, obesidad, tiroides, salud hormonal,
            fertilidad y crecimiento. Tambien disponible para pacientes de toda Venezuela.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-page">
          <div className="relative">
            <div className="pointer-events-none absolute right-0 top-0 bottom-4 w-20 bg-gradient-to-l from-white to-transparent z-10 lg:hidden" />
            <div className="grid grid-flow-col auto-cols-[82vw] sm:auto-cols-[56vw] md:auto-cols-[44vw] lg:grid-flow-row lg:grid-cols-3 lg:auto-cols-auto gap-5 lg:gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none scrollbar-none pb-3 lg:pb-0 px-1 lg:px-0">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/servicios/${s.slug}`}
                className="group relative snap-start p-7 rounded-3xl bg-white border border-malva-100 shadow-[0_4px_20px_rgba(44,37,48,0.04)] hover:shadow-[0_20px_50px_rgba(138,114,145,0.15)] hover:-translate-y-1 hover:border-dorado/40 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-malva-100 to-malva-50 flex items-center justify-center text-malva-700 group-hover:from-dorado/20 group-hover:to-dorado/5 group-hover:text-dorado-dark transition-colors duration-300">
                  {serviceIcons[s.icon]}
                </div>
                <h2 className="mt-5 font-[family-name:var(--font-display)] text-xl font-semibold text-malva-900 leading-tight">
                  {s.title}
                </h2>
                <p className="mt-2 text-sm text-texto-suave leading-snug line-clamp-2">
                  {s.tagline}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {s.conditions.slice(0, 3).map((c) => (
                    <li key={c} className="flex gap-2 text-sm text-texto-suave">
                      <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-dorado" />
                      {c}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-malva-700 group-hover:text-dorado-dark transition-colors">
                  Ver mas sobre este servicio
                  <svg viewBox="0 0 24 24" className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </Link>
            ))}
            </div>
            <p className="mt-3 text-center text-xs text-texto-suave lg:hidden">
              Desliza para ver mas servicios
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-malva-50">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dorado/15 text-dorado-dark text-xs font-semibold uppercase tracking-[0.2em]">
              Por que elegirnos
            </span>
            <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl md:text-4xl text-malva-900 leading-tight">
              La endocrinologa de referencia en Barinas y Venezuela
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Especialista ULA", text: "Postgrado en endocrinologia por la Universidad de los Andes, una de las escuelas medicas mas prestigiosas de Venezuela." },
              { title: "Formacion internacional", text: "Rotacion en el CEMDI, Bogota, con enfoque en tecnologia avanzada para diabetes y metabolismo." },
              { title: "Tecnologia aplicada", text: "Monitores continuos de glucosa, terapias GLP-1 (Mounjaro, Ozempic) y protocolos de precision." },
              { title: "Atencion personalizada", text: "Cada paciente recibe un plan adaptado a su caso, sin protocolos genericos." },
              { title: "Barinas y Venezuela", text: "Atencion en Barinas con cobertura regional. Disponible tambien para pacientes de Santa Barbara y toda Venezuela." },
              { title: "Actualizacion continua", text: "Participacion activa en congresos nacionales e internacionales de endocrinologia." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-6 rounded-2xl bg-white border border-malva-100 shadow-[0_4px_20px_rgba(44,37,48,0.03)]">
                <span className="shrink-0 w-8 h-8 rounded-full bg-dorado/15 flex items-center justify-center text-dorado-dark">
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-malva-900">{item.title}</p>
                  <p className="mt-1 text-sm text-texto-suave leading-snug">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href={CONTACT.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-malva text-white font-semibold shadow-[0_10px_30px_rgba(138,114,145,0.25)] hover:bg-malva-700 hover:-translate-y-0.5 transition-all duration-300"
            >
              Agendar consulta en Barinas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
