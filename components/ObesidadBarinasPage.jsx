import Link from "next/link";
import { CONTACT, LOCATION } from "@/lib/constants";

const features = [
  {
    title: "Evaluación Hormonal del Peso",
    desc: "Hipotiroidismo, resistencia a la insulina, SOP y otras causas hormonales del sobrepeso que no se controlan solo con dieta.",
  },
  {
    title: "Ozempic (Semaglutida)",
    desc: "Inyectable GLP-1 semanal para reducción de peso y control glucémico. Prescripción y seguimiento especializado en Barinas.",
  },
  {
    title: "Mounjaro (Tirzepatida)",
    desc: "La terapia GLP-1/GIP más avanzada disponible. Mayor reducción de peso que Ozempic. Con seguimiento de la Dra. Manrique.",
  },
  {
    title: "Control Metabólico Integral",
    desc: "Colesterol, triglicéridos, glucosa, ácido úrico e inflamación: todo el perfil metabólico evaluado y tratado en conjunto.",
  },
  {
    title: "Plan Nutricional Médico",
    desc: "Orientación nutricional basada en el perfil metabólico del paciente. Sin dietas genéricas: todo adaptado a tu caso.",
  },
  {
    title: "Seguimiento a Largo Plazo",
    desc: "La obesidad requiere tratamiento continuo. La Dra. Manrique hace seguimiento periódico para mantener y mejorar los resultados.",
  },
];

const faqs = [
  {
    q: "¿Dónde trato la obesidad en Barinas?",
    a: "La Dra. Jennifer Manrique es la especialista en obesidad en Barinas. Atiende en el Hospital Privado San Juan, Consultorio 34, Piso 2. Agenda tu cita por WhatsApp al 0412-9337390.",
  },
  {
    q: "¿El endocrinólogo trata la obesidad o necesito otro especialista?",
    a: "El endocrinólogo es el especialista indicado para tratar la obesidad, ya que evalúa las causas hormonales y metabólicas. La Dra. Manrique maneja Ozempic, Mounjaro y otros tratamientos médicos para la pérdida de peso.",
  },
  {
    q: "¿Ozempic y Mounjaro están disponibles en Barinas?",
    a: "Sí. La Dra. Jennifer Manrique prescribe y hace seguimiento con Ozempic (semaglutida) y Mounjaro (tirzepatida) en Barinas. Ambos requieren evaluación previa y prescripción médica. Contáctanos por WhatsApp para más información.",
  },
  {
    q: "¿Cuánto peso se pierde con Mounjaro u Ozempic?",
    a: "Los estudios muestran pérdida de 15-22% del peso corporal con tirzepatida (Mounjaro) y 10-15% con semaglutida (Ozempic), en combinación con cambios de estilo de vida y bajo supervisión médica. Los resultados varían según cada paciente.",
  },
  {
    q: "¿La obesidad tiene causas hormonales?",
    a: "Sí. El hipotiroidismo, la resistencia a la insulina, el SOP, el síndrome de Cushing y otras alteraciones hormonales pueden causar o agravar el sobrepeso. Por eso es fundamental la evaluación endocrinológica antes de iniciar cualquier tratamiento.",
  },
  {
    q: "¿Se puede revertir la resistencia a la insulina?",
    a: "Sí. Con el tratamiento adecuado — que puede incluir medicación, cambios de alimentación, actividad física y control del peso — la resistencia a la insulina puede mejorar significativamente e incluso revertirse, previniendo la diabetes tipo 2.",
  },
];

export default function ObesidadBarinasPage() {
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
              <li className="text-malva-900 font-medium" aria-current="page">Obesidad en Barinas</li>
            </ol>
          </nav>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-malva-100 text-malva-800 text-xs font-semibold uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 rounded-full bg-dorado" />
            Endocrinología · Barinas
          </span>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-malva-900">
            Tratamiento de{" "}
            <span className="text-dorado">Obesidad</span>{" "}
            en Barinas
          </h1>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-texto-suave max-w-2xl mx-auto">
            La Dra. Jennifer Manrique ofrece tratamiento médico especializado para
            la obesidad en Barinas. Evaluación hormonal completa, Ozempic, Mounjaro
            y planes personalizados para lograr y mantener un peso saludable.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href={CONTACT.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-dorado text-white font-semibold shadow-[0_10px_30px_rgba(201,168,76,0.3)] hover:bg-dorado-dark hover:-translate-y-0.5 transition-all duration-300"
            >
              Agendar consulta
            </Link>
            <Link
              href="/servicios/obesidad"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white border border-malva-200 text-malva-800 font-semibold hover:border-dorado/60 hover:text-dorado-dark transition-all duration-300"
            >
              Ver servicio completo
            </Link>
          </div>
        </div>
      </section>

      {/* Qué tratamos */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-page max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-dorado">Especialidad</span>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl md:text-3xl text-malva-900">
              Qué incluye el tratamiento de obesidad en Barinas
            </h2>
            <p className="mt-3 text-base text-texto-suave">
              Enfoque médico integral: causas hormonales, tratamientos avanzados y seguimiento continuo.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-6 rounded-2xl bg-malva-50 border border-malva-100 hover:shadow-[0_20px_50px_rgba(138,114,145,0.12)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-xl bg-dorado/15 flex items-center justify-center mb-4">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-dorado-dark" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-semibold text-sm text-malva-900">{f.title}</h3>
                <p className="mt-2 text-sm text-texto-suave leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ozempic/Mounjaro highlight */}
      <section className="py-16 md:py-20 bg-malva-50">
        <div className="container-page max-w-4xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl bg-white border border-malva-100 p-8 shadow-[0_4px_20px_rgba(44,37,48,0.04)]">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-dorado">Disponible en Barinas</span>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl text-malva-900">Ozempic (Semaglutida)</h3>
              <p className="mt-3 text-sm text-texto-suave leading-relaxed">
                Inyectable GLP-1 semanal aprobado para diabetes tipo 2 y obesidad.
                Reduce el apetito, mejora el control glucémico y produce pérdida de
                peso sostenida. Requiere prescripción y seguimiento médico.
              </p>
              <ul className="mt-4 space-y-2">
                {["Aplicación semanal", "Pérdida de 10-15% del peso", "Mejora glucemia y colesterol", "Supervisión médica incluida"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-texto-suave">
                    <span className="w-4 h-4 rounded-full bg-dorado/20 flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 text-dorado-dark" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/ozempic-en-barinas" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-malva-700 hover:text-dorado-dark transition-colors">
                Más información sobre Ozempic →
              </Link>
            </div>
            <div className="rounded-3xl bg-malva-900 text-white p-8">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-dorado">Disponible en Barinas</span>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl">Mounjaro (Tirzepatida)</h3>
              <p className="mt-3 text-sm text-malva-200 leading-relaxed">
                La terapia más avanzada para obesidad y diabetes tipo 2. Actúa sobre
                dos receptores (GLP-1 y GIP), logrando mayor reducción de peso que
                cualquier medicación oral o inyectable anterior.
              </p>
              <ul className="mt-4 space-y-2">
                {["Aplicación semanal", "Pérdida de hasta 22% del peso", "Tecnología dual GLP-1/GIP", "Seguimiento especializado"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-malva-100">
                    <span className="w-4 h-4 rounded-full bg-dorado/30 flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 text-dorado" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/mounjaro-en-venezuela" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-dorado hover:text-dorado-dark transition-colors">
                Más información sobre Mounjaro →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-page max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl text-malva-900 text-center mb-10">
            Preguntas sobre obesidad en Barinas
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
          <div className="mt-8 text-center">
            <Link href="/faq" className="inline-flex items-center gap-1.5 text-sm font-semibold text-malva-700 hover:text-dorado-dark transition-colors">
              Ver todas las preguntas frecuentes →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-malva-700 via-malva-800 to-malva-900 relative overflow-hidden">
        <div className="absolute -top-40 -right-20 w-[520px] h-[520px] rounded-full bg-dorado/20 blur-3xl pointer-events-none" />
        <div className="relative container-page text-center max-w-2xl mx-auto text-white">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl leading-tight">
            Agenda tu consulta para obesidad en Barinas
          </h2>
          <p className="mt-4 text-base text-malva-200">
            Hospital Privado San Juan, Consultorio 34, Piso 2, Barinas.
            Lunes a viernes previa cita.
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
