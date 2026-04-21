import Link from "next/link";
import { CONTACT } from "@/lib/constants";

const services = [
  {
    slug: "diabetes",
    icon: "diabetes",
    title: "Diabetes y Tecnología Aplicada",
    items: [
      "Diabetes tipo 1, tipo 2 y gestacional",
      "Control y seguimiento personalizado",
      "Monitores continuos de glucosa",
      "Ajustes con tecnología avanzada",
    ],
  },
  {
    slug: "obesidad",
    icon: "weight",
    title: "Manejo de Obesidad y Metabolismo",
    items: [
      "Causas hormonales del sobrepeso",
      "Tratamientos médicos para pérdida de peso",
      "Terapias GLP-1 (Ozempic, Mounjaro)",
      "Colesterol, triglicéridos y resistencia a la insulina",
    ],
  },
  {
    slug: "tiroides",
    icon: "thyroid",
    title: "Patologías Tiroideas",
    items: [
      "Hipotiroidismo e hipertiroidismo",
      "Evaluación de nódulos tiroideos",
      "Ecografía tiroidea",
      "Punción de tiroides (PAAF)",
    ],
  },
  {
    slug: "salud-hormonal",
    icon: "hormone",
    title: "Salud Hormonal",
    items: [
      "Síndrome de ovario poliquístico (SOP)",
      "Trastornos hormonales en hombres y mujeres",
      "Menopausia y andropausia",
      "Hipófisis y glándulas suprarrenales",
    ],
  },
  {
    slug: "fertilidad",
    icon: "fertility",
    title: "Fertilidad y Salud Reproductiva",
    items: [
      "Evaluación hormonal para infertilidad",
      "Protocolos pre-concepcionales",
      "Tratamiento de hipogonadismo",
      "Optimización hormonal para embarazo",
    ],
  },
  {
    slug: "crecimiento",
    icon: "growth",
    title: "Crecimiento y Desarrollo",
    items: [
      "Evaluación de talla baja",
      "Pubertad precoz o retrasada",
      "Deficiencia de hormona de crecimiento",
      "Seguimiento pediátrico endocrino",
    ],
  },
];

const reasons = [
  "Atención personalizada",
  "Tratamientos actualizados y basados en evidencia",
  "Uso de tecnología avanzada",
  "Enfoque integral en cada paciente",
  "Experiencia en centros especializados",
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="relative py-24 md:py-32 bg-gradient-to-b from-malva-50 via-white to-white"
    >
      <div className="container-page">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-malva-100 text-malva-800 text-xs font-semibold uppercase tracking-[0.2em]">
            Servicios especializados
          </span>
          <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl leading-tight text-malva-900">
            Atención endocrinológica <span className="text-dorado">integral</span>
          </h2>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-texto-suave">
            Evaluación completa y tratamientos adaptados para diabetes, obesidad,
            tiroides, salud hormonal, fertilidad y crecimiento.
          </p>
        </div>

        <div className="relative mt-14">
          <div className="pointer-events-none absolute right-0 top-0 bottom-4 w-20 bg-gradient-to-l from-malva-50 to-transparent z-10 lg:hidden" />

          <div className="grid grid-flow-col auto-cols-[82vw] sm:auto-cols-[56vw] md:auto-cols-[44vw] lg:grid-flow-row lg:grid-cols-3 lg:auto-cols-auto gap-5 lg:gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none scrollbar-none pb-3 lg:pb-0 px-1 lg:px-0">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative snap-start p-7 rounded-3xl bg-white border border-malva-100 shadow-[0_4px_20px_rgba(44,37,48,0.04)] hover:shadow-[0_20px_50px_rgba(138,114,145,0.15)] hover:-translate-y-1 hover:border-dorado/40 transition-all duration-300 flex flex-col"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-malva-100 to-malva-50 flex items-center justify-center text-malva-700 group-hover:from-dorado/20 group-hover:to-dorado/5 group-hover:text-dorado-dark transition-colors duration-300">
                <ServiceIcon name={s.icon} />
              </div>
              <h3 className="mt-5 font-[family-name:var(--font-display)] text-xl font-semibold text-malva-900 leading-tight">
                {s.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {s.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-texto-suave leading-snug">
                    <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-dorado" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={`/servicios/${s.slug}`}
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-malva-700 group-hover:text-dorado-dark transition-colors"
              >
                Ver más
                <svg viewBox="0 0 24 24" className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </article>
          ))}
          </div>

          <p className="mt-3 text-center text-xs text-texto-suave lg:hidden">
            Desliza para ver más servicios
          </p>
        </div>

        <div className="mt-16 rounded-3xl bg-white border border-malva-100 p-8 md:p-12 shadow-[0_10px_40px_rgba(44,37,48,0.05)]">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-dorado">
                Por qué elegirnos
              </span>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl md:text-3xl text-malva-900 leading-tight">
                Una experiencia de consulta distinta
              </h3>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {reasons.map((r) => (
                  <li key={r} className="flex items-start gap-2.5 text-sm text-malva-900">
                    <span className="shrink-0 w-5 h-5 rounded-full bg-dorado/15 text-dorado-dark flex items-center justify-center mt-0.5">
                      <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href={CONTACT.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-dorado text-white font-semibold shadow-[0_10px_30px_rgba(201,168,76,0.3)] hover:bg-dorado-dark hover:-translate-y-0.5 transition-all duration-300"
            >
              Agendar mi consulta
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceIcon({ name }) {
  const props = {
    viewBox: "0 0 24 24",
    className: "w-7 h-7",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };
  switch (name) {
    case "diabetes":
      return (
        <svg {...props}>
          <path d="M12 2c-2 4-6 7-6 11a6 6 0 0 0 12 0c0-4-4-7-6-11Z" />
          <path d="M9 14h6" />
        </svg>
      );
    case "weight":
      return (
        <svg {...props}>
          <path d="M6 4h12l2 16H4Z" />
          <path d="M9 4c0-1.7 1.3-3 3-3s3 1.3 3 3" />
          <path d="M10 12h4" />
        </svg>
      );
    case "thyroid":
      return (
        <svg {...props}>
          <path d="M12 2v4" />
          <path d="M8 6c-2 2-4 5-4 9a4 4 0 0 0 8 0" />
          <path d="M16 6c2 2 4 5 4 9a4 4 0 0 1-8 0" />
        </svg>
      );
    case "hormone":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3a9 9 0 0 1 0 18" />
          <path d="M8 8h8M8 12h8M8 16h8" />
        </svg>
      );
    case "fertility":
      return (
        <svg {...props}>
          <circle cx="12" cy="9" r="5" />
          <path d="M12 14v8" />
          <path d="M9 19h6" />
        </svg>
      );
    case "growth":
      return (
        <svg {...props}>
          <path d="M4 20V8" />
          <path d="M4 14h6" />
          <path d="M10 20v-9" />
          <path d="M10 17h6" />
          <path d="M16 20V6" />
          <path d="M16 11h4" />
        </svg>
      );
    default:
      return null;
  }
}
