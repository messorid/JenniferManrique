import Link from "next/link";
import { CONTACT, LOCATION } from "@/lib/constants";

const reasons = [
  {
    title: "La endocrinóloga más accesible desde Portuguesa",
    desc: "Barinas es la ciudad más cercana con especialista en endocrinología para pacientes de Guanare, Acarigua y otros municipios del estado Portuguesa.",
  },
  {
    title: "Especialista formada en centros de referencia",
    desc: "Egresada de la Universidad de los Andes (ULA) con residencia en el HULA y rotación internacional en el CEMDI de Bogotá. La misma formación de los centros del país, disponible en Barinas.",
  },
  {
    title: "Cita en pocos días por WhatsApp",
    desc: "Sin meses de espera. La Dra. Manrique atiende en consulta privada con agenda ágil. Coordina tu cita desde Portuguesa directamente por WhatsApp.",
  },
  {
    title: "Evaluación completa en una sola visita",
    desc: "Diagnóstico, solicitud de exámenes, plan de tratamiento y seguimiento desde la primera consulta. Optimiza tu viaje a Barinas con una atención integral.",
  },
  {
    title: "Seguimiento por WhatsApp entre consultas",
    desc: "Para pacientes de Portuguesa, la Dra. Manrique ofrece seguimiento entre consultas por WhatsApp para ajustar tratamientos sin necesidad de viajar por cada control.",
  },
  {
    title: "Procedimientos disponibles en Barinas",
    desc: "Ecografía tiroidea, punción de tiroides (PAAF) y monitores continuos de glucosa (CGM) en Barinas. Sin necesidad de trasladarse a Caracas o Valencia.",
  },
];

const faqs = [
  {
    q: "¿Hay endocrinólogos en Portuguesa?",
    a: "La oferta de especialistas en endocrinología en el estado Portuguesa es escasa. Barinas, con acceso directo desde Guanare y Acarigua, es la opción más cercana con atención especializada de calidad.",
  },
  {
    q: "¿Cuánto se tarda de Portuguesa a Barinas?",
    a: "Desde Guanare, capital de Portuguesa, Barinas está a aproximadamente 2 a 3 horas por vía terrestre. Desde Acarigua, el tiempo es similar o algo mayor dependiendo de la ruta.",
  },
  {
    q: "¿Puedo agendar cita desde Portuguesa sin ir primero a Barinas?",
    a: "Sí. Las citas se agendan por WhatsApp al 0412-9339730. La Dra. Manrique coordina el horario con anticipación para pacientes que vienen de otros estados.",
  },
  {
    q: "¿Qué condiciones trata la endocrinóloga?",
    a: "Diabetes tipo 1, 2 y gestacional, obesidad y pérdida de peso, hipotiroidismo, hipertiroidismo, nódulos tiroideos, SOP, menopausia, andropausia, talla baja, fertilidad hormonal y resistencia a la insulina.",
  },
  {
    q: "¿Puedo llevar mis resultados de exámenes previos?",
    a: "Sí, y es recomendable. Si ya tienes exámenes recientes de Portuguesa, la Dra. Manrique los evalúa directamente y determina qué estudios adicionales necesitas, aprovechando al máximo tu consulta.",
  },
  {
    q: "¿Con qué frecuencia tendría que viajar a Barinas?",
    a: "Depende de cada caso. Muchos pacientes de otros estados visitan a la Dra. Manrique cada 3 a 6 meses para control presencial, con seguimiento por WhatsApp entre visitas para ajustar el tratamiento.",
  },
];

export default function EndocrinologoPortuguesaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-gradient-to-b from-malva-50 via-white to-white">
        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-malva-200/40 blur-3xl pointer-events-none" />
        <div className="container-page relative max-w-3xl mx-auto text-center">
          <nav aria-label="Ruta de navegación" className="mb-6">
            <ol className="flex justify-center flex-wrap gap-x-2 text-xs text-texto-suave">
              <li><Link href="/" className="hover:text-dorado transition-colors">Inicio</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-malva-900 font-medium" aria-current="page">Endocrinólogo en Portuguesa</li>
            </ol>
          </nav>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-malva-100 text-malva-800 text-xs font-semibold uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 rounded-full bg-dorado" />
            Pacientes de Portuguesa · Atención en Barinas
          </span>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-malva-900">
            Endocrinólogo para{" "}
            <span className="text-dorado">Portuguesa</span>{" "}
            — Consulta en Barinas
          </h1>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-texto-suave max-w-2xl mx-auto">
            Si buscas un endocrinólogo en el estado Portuguesa, la Dra. Jennifer
            Manrique atiende en Barinas — accesible desde Guanare, Acarigua y
            municipios vecinos para una consulta especializada de calidad.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href={CONTACT.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-dorado text-white font-semibold shadow-[0_10px_30px_rgba(201,168,76,0.3)] hover:bg-dorado-dark hover:-translate-y-0.5 transition-all duration-300"
            >
              Agendar consulta desde Portuguesa
            </Link>
            <Link
              href="/ubicacion"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white border border-malva-200 text-malva-800 font-semibold hover:border-dorado/60 hover:text-dorado-dark transition-all duration-300"
            >
              Ver ubicación en Barinas
            </Link>
          </div>
        </div>
      </section>

      {/* Distancia */}
      <section className="py-10 bg-white border-y border-malva-100">
        <div className="container-page max-w-3xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "~2-3h", label: "Guanare → Barinas" },
              { value: "Lun-Vie", label: "Días de atención" },
              { value: "WhatsApp", label: "Agenda tu cita" },
              { value: "Previa cita", label: "Sin esperas largas" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-[family-name:var(--font-display)] text-2xl md:text-3xl text-dorado font-bold">{s.value}</p>
                <p className="mt-1 text-sm text-texto-suave">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué venir a Barinas */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-page max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-dorado">Por qué elegir Barinas</span>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl md:text-3xl text-malva-900">
              Por qué pacientes de Portuguesa viajan a consultar con la Dra. Manrique
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="p-6 rounded-2xl bg-malva-50 border border-malva-100 hover:shadow-[0_20px_50px_rgba(138,114,145,0.12)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-xl bg-dorado/15 flex items-center justify-center mb-4">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-dorado-dark" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-semibold text-sm text-malva-900">{r.title}</h3>
                <p className="mt-2 text-sm text-texto-suave leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info consultorio */}
      <section className="py-16 md:py-20 bg-malva-50">
        <div className="container-page max-w-4xl mx-auto">
          <div className="grid gap-10 lg:grid-cols-[1fr_300px] items-start">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-dorado">La especialista</span>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl md:text-3xl text-malva-900 leading-tight">
                Dra. Jennifer Manrique — Endocrinóloga en Barinas
              </h2>
              <p className="mt-4 text-base leading-relaxed text-texto-suave">
                La Dra. Jennifer Manrique es Médico Cirujano y Especialista en
                Endocrinología, egresada de la Universidad de los Andes (ULA).
                Miembro de la Sociedad Venezolana de Endocrinología, con experiencia
                en el HULA y formación internacional en el CEMDI, Bogotá.
              </p>
              <p className="mt-3 text-base leading-relaxed text-texto-suave">
                Atiende diabetes, obesidad, tiroides, SOP, menopausia, talla baja,
                fertilidad hormonal y todas las patologías endocrinas con un enfoque
                personalizado y actualizado.
              </p>
              <p className="mt-3 text-base leading-relaxed text-texto-suave">
                Para pacientes de Portuguesa, coordina el plan de seguimiento para
                reducir la frecuencia de viajes a Barinas al mínimo necesario.
              </p>
              <Link href="/sobre-mi" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-malva-700 hover:text-dorado-dark transition-colors">
                Ver trayectoria completa
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
            <div className="rounded-3xl bg-malva-900 text-white p-7 space-y-5">
              <h3 className="font-[family-name:var(--font-display)] text-lg">Datos del consultorio</h3>
              {[
                { label: "Especialista", value: "Endocrinología - ULA" },
                { label: "Sede", value: `${LOCATION.name}, ${LOCATION.detail}` },
                { label: "Ciudad", value: "Barinas, Venezuela" },
                { label: "Horario", value: "Lun - Vie, 8AM-12PM / 2PM-6PM" },
                { label: "Citas", value: "WhatsApp 0412-9339730" },
                { label: "Modalidad", value: "Previa cita" },
              ].map((item) => (
                <div key={item.label}>
                  <span className="text-xs uppercase tracking-wider text-dorado font-semibold block">{item.label}</span>
                  <span className="text-sm text-malva-100">{item.value}</span>
                </div>
              ))}
              <Link
                href={CONTACT.whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-dorado text-white text-sm font-semibold hover:bg-dorado-dark transition-colors"
              >
                Agendar cita
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-page max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl text-malva-900 text-center mb-10">
            Preguntas de pacientes de Portuguesa
          </h2>
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <details key={i} className="group border border-malva-100 rounded-2xl bg-malva-50 open:bg-white open:shadow-[0_4px_20px_rgba(44,37,48,0.06)] transition-all">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold text-malva-900 text-sm md:text-base">
                  {item.q}
                  <span className="shrink-0 w-6 h-6 rounded-full border border-malva-200 flex items-center justify-center group-open:bg-dorado group-open:border-dorado transition-colors">
                    <svg viewBox="0 0 24 24" className="w-3 h-3 text-malva-600 group-open:text-white group-open:rotate-180 transition-all" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </summary>
                <p className="px-6 pb-5 text-sm md:text-base text-texto-suave leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-malva-700 via-malva-800 to-malva-900 relative overflow-hidden">
        <div className="absolute -top-40 -right-20 w-[520px] h-[520px] rounded-full bg-dorado/20 blur-3xl pointer-events-none" />
        <div className="relative container-page text-center max-w-2xl mx-auto text-white">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl leading-tight">
            Agenda tu consulta en Barinas desde Portuguesa
          </h2>
          <p className="mt-4 text-base text-malva-200">
            Hospital Privado San Juan, Consultorio 34, Piso 2, Barinas.
            Coordina tu cita por WhatsApp con anticipación.
          </p>
          <Link
            href={CONTACT.whatsappMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-dorado text-white font-semibold shadow-[0_15px_40px_rgba(201,168,76,0.35)] hover:bg-dorado-dark hover:-translate-y-0.5 transition-all duration-300"
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
