import Image from "next/image";

const values = [
  {
    icon: "person",
    title: "Atencion personalizada",
    text: "Cada paciente es evaluado de manera individual. El mismo diagnostico puede tener causas distintas en diferentes personas.",
  },
  {
    icon: "science",
    title: "Basada en evidencia",
    text: "Tratamientos actualizados con los ultimos avances en endocrinologia, tecnologia de monitoreo y terapias metabolicas.",
  },
  {
    icon: "integral",
    title: "Vision integral",
    text: "El sistema endocrino afecta todo el organismo. La evaluacion va mas alla del sintoma y considera al paciente en su totalidad.",
  },
  {
    icon: "tech",
    title: "Tecnologia aplicada",
    text: "Uso de monitores continuos de glucosa, ecografia tiroidea y terapias GLP-1 para un manejo mas preciso y efectivo.",
  },
];

export default function Philosophy() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-malva-50 via-white to-white overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-malva-100/60 blur-3xl pointer-events-none" />

      <div className="container-page">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dorado/15 text-dorado-dark text-xs font-semibold uppercase tracking-[0.2em]">
              Enfoque medico
            </span>

            <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl leading-tight text-malva-900">
              Una medicina que <span className="text-dorado">escucha</span> y acompana
            </h2>

            <blockquote className="mt-8 pl-5 border-l-4 border-dorado">
              <p className="font-[family-name:var(--font-display)] text-xl md:text-2xl italic text-malva-900 leading-snug">
                Cada paciente es unico. Mi enfoque es evaluar de manera
                individual para ofrecer tratamientos efectivos, seguros y
                adaptados a cada caso.
              </p>
              <footer className="mt-4 text-sm font-semibold text-dorado-dark uppercase tracking-[0.2em]">
                Dra. Jennifer Manrique
              </footer>
            </blockquote>

            <p className="mt-7 text-base leading-relaxed text-texto-suave">
              La endocrinologia abarca desde la diabetes y la obesidad hasta las
              patologias tiroideas, hormonales y reproductivas. Una atencion de
              calidad requiere tiempo, escucha y un plan adaptado a la realidad
              de cada paciente.
            </p>

            <ul className="mt-10 grid gap-5 sm:grid-cols-2">
              {values.map((v) => (
                <li
                  key={v.title}
                  className="flex gap-4 p-5 rounded-2xl bg-white border border-malva-100 shadow-[0_4px_20px_rgba(44,37,48,0.04)] hover:border-dorado/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span className="shrink-0 w-10 h-10 rounded-xl bg-malva-50 flex items-center justify-center text-dorado-dark">
                    <PhilosophyIcon name={v.icon} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-malva-900">{v.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-texto-suave">{v.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-tr from-malva-100 to-dorado/20 blur-2xl opacity-60" />
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(138,114,145,0.18)]">
              <Image
                src="/images/OZR_7472 (1).jpg"
                alt="Dra. Jennifer Manrique con glucometro, Endocrinologa en Barinas"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 90vw, 540px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhilosophyIcon({ name }) {
  const props = {
    viewBox: "0 0 24 24",
    className: "w-5 h-5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };
  switch (name) {
    case "person":
      return (
        <svg {...props}>
          <circle cx="12" cy="7" r="4" />
          <path d="M5.5 20a7.5 7.5 0 0 1 13 0" />
        </svg>
      );
    case "science":
      return (
        <svg {...props}>
          <path d="M9 3h6v5l4 9H5L9 8V3Z" />
          <path d="M6 17h12" />
        </svg>
      );
    case "integral":
      return (
        <svg {...props}>
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
        </svg>
      );
    case "tech":
      return (
        <svg {...props}>
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      );
    default:
      return null;
  }
}
