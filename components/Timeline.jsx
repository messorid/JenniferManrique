const timeline = [
  {
    year: "2019",
    title: "Médico Cirujano",
    place: "Universidad Nacional Experimental Francisco de Miranda (UNEFM)",
    description:
      "Formación médica integral con enfasis en fisiopatologia, clínica y atención al paciente.",
    icon: "cap",
  },
  {
    year: "2019 - 2020",
    title: "Experiencia hospitalaria inicial",
    place: "Hospital Dr. Luis Razetti y Cruz Roja Barinas",
    description:
      "Rotaciónes clínicas y ejercicio médico hospitalario en medicina interna, emergencias y atención ambulatoria.",
    icon: "hospital",
  },
  {
    year: "2020 - 2024",
    title: "Residencia en Endocrinología",
    place: "Universidad de los Andes (ULA), Merida",
    description:
      "Cuatro años de formación de postgrado en endocrinología clínica, metabolismo y patologia hormonal, con pacientes de alta complejidad.",
    icon: "stethoscope",
  },
  {
    year: "2020 - 2024",
    title: "Practica en el Hospital Universitario de los Andes",
    place: "HULA, Merida",
    description:
      "Atención a pacientes con diabetes, obesidad, enfermedades tiroideas, hipófisis y suprarrenales dentro del centro de referencia naciónal.",
    icon: "hospital",
  },
  {
    year: "Junio - Julio 2024",
    title: "Rotación internacional",
    place: "CEMDI, Bogota - Colombia",
    description:
      "Entrenamiento en manejo avanzado de diabetes, tecnología aplicada (monitoreo continuo de glucosa) y terapias modernas en obesidad y metabolismo.",
    icon: "globe",
  },
  {
    year: "2024",
    title: "Tesis con mención publicación",
    place: "Universidad de los Andes",
    description:
      "Trabajo de investigación sobre Vitamina D en HTA y Diabetes tipo 2 con disfunción erectil. Recibio mención de publicación por su aporte clinico.",
    icon: "research",
  },
  {
    year: "2024",
    title: "Especialista en Endocrinología",
    place: "Universidad de los Andes (ULA)",
    description:
      "Obtencion del título de especialista en endocrinología, avalado por una de las escuelas médicas más prestigiosas del pais.",
    icon: "award",
  },
  {
    year: "2023 - 2025",
    title: "Congresos naciónales de endocrinología",
    place: "XXIV, XXV y XXVI Congreso Venezolano de Endocrinología",
    description:
      "Participacion activa y presentacion de 5 trabajos de investigación en los ultimos congresos naciónales de la especialidad.",
    icon: "speaker",
  },
  {
    year: "2025",
    title: "ENDOCONGRESS Medellin",
    place: "Medellin, Colombia",
    description:
      "Actualización en ultimos avances internacionales en diabetes, obesidad, hormonas y tecnologías aplicadas a la endocrinología.",
    icon: "globe",
  },
  {
    year: "Actualidad",
    title: "Consulta especializada en Barinas",
    place: "Hospital Privado San Juan - Consultorio 34, Piso 2",
    description:
      "Atención privada con enfoqué personalizado en diabetes, obesidad, tiroides, salud hormonal y fertilidad. Consulta mensual también en Santa Barbara de Barinas.",
    icon: "location",
  },
];

export default function Timeline() {
  return (
    <section id="trayectoria" className="relative py-24 md:py-32 bg-white">
      <div className="container-page">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-malva-100 text-malva-800 text-xs font-semibold uppercase tracking-[0.2em]">
            Trayectoria
          </span>
          <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl leading-tight text-malva-900">
            Una carrera dedicada a la <span className="text-dorado">salud hormonal</span>
          </h2>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-texto-suave">
            Más de una decada de formación, practica hospitalaria y actualización
            continua en centros de referencia naciónal e internacional.
          </p>
        </div>

        <ol className="mt-16 relative max-w-3xl mx-auto">
          <span className="absolute left-5 md:left-7 top-2 bottom-2 w-px bg-gradient-to-b from-dorado via-malva-300 to-transparent" />

          {timeline.map((item, i) => (
            <li key={`${item.year}-${item.title}`} className="relative pl-16 md:pl-20 pb-10 last:pb-0">
              <span
                className="absolute left-0 md:left-2 top-1 w-10 h-10 rounded-full bg-white border border-malva-100 shadow-[0_4px_20px_rgba(138,114,145,0.15)] flex items-center justify-center text-dorado-dark"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <TimelineIcon name={item.icon} />
              </span>

              <div className="rounded-2xl border border-malva-100 bg-malva-50/40 p-5 md:p-6 hover:border-dorado/40 hover:bg-white hover:shadow-[0_10px_40px_rgba(44,37,48,0.06)] transition-all duration-300">
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-dorado">
                  {item.year}
                </span>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl md:text-2xl text-malva-900 leading-tight">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-malva-700">
                  {item.place}
                </p>
                <p className="mt-3 text-sm md:text-base leading-relaxed text-texto-suave">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function TimelineIcon({ name }) {
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
    case "cap":
      return (
        <svg {...props}>
          <path d="M2 9l10-5 10 5-10 5L2 9Z" />
          <path d="M6 11v5c3 2 9 2 12 0v-5" />
          <path d="M22 9v5" />
        </svg>
      );
    case "hospital":
      return (
        <svg {...props}>
          <rect x="3" y="4" width="18" height="17" rx="2" />
          <path d="M12 8v8" />
          <path d="M8 12h8" />
        </svg>
      );
    case "stethoscope":
      return (
        <svg {...props}>
          <path d="M5 3v7a5 5 0 0 0 10 0V3" />
          <circle cx="18" cy="14" r="2" />
          <path d="M18 16v2a4 4 0 0 1-8 0" />
        </svg>
      );
    case "globe":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3c3 3 3 15 0 18" />
          <path d="M12 3c-3 3-3 15 0 18" />
        </svg>
      );
    case "research":
      return (
        <svg {...props}>
          <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Z" />
          <polyline points="14 3 14 9 20 9" />
          <line x1="8" y1="13" x2="16" y2="13" />
          <line x1="8" y1="17" x2="14" y2="17" />
        </svg>
      );
    case "award":
      return (
        <svg {...props}>
          <circle cx="12" cy="9" r="6" />
          <polyline points="8.5 13 7 22 12 19 17 22 15.5 13" />
        </svg>
      );
    case "speaker":
      return (
        <svg {...props}>
          <path d="M3 10v4h4l5 4V6L7 10H3Z" />
          <path d="M16 8a5 5 0 0 1 0 8" />
          <path d="M19 5a9 9 0 0 1 0 14" />
        </svg>
      );
    case "location":
      return (
        <svg {...props}>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="5" />
        </svg>
      );
  }
}
