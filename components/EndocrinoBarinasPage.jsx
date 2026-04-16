import Link from "next/link";
import { CONTACT, LOCATION, SITE_URL } from "@/lib/constants";

const services = [
  {
    slug: "diabetes",
    title: "Diabetes",
    desc: "Control glucemico, insulinoterapia y monitores continuos de glucosa para tipo 1, tipo 2 y gestacional.",
  },
  {
    slug: "obesidad",
    title: "Obesidad y Metabolismo",
    desc: "Tratamientos medicos con Mounjaro (tirzepatida) y Ozempic (semaglutida). Evaluacion de causas hormonales.",
  },
  {
    slug: "tiroides",
    title: "Tiroides",
    desc: "Hipotiroidismo, hipertiroidismo, nodulos tiroideos, ecografia y puncion (PAAF) en Barinas.",
  },
  {
    slug: "salud-hormonal",
    title: "Salud Hormonal y SOP",
    desc: "Sindrome de ovario poliquistico, menopausia, andropausia y trastornos hormonales en hombres y mujeres.",
  },
  {
    slug: "fertilidad",
    title: "Fertilidad",
    desc: "Evaluacion hormonal para infertilidad, protocolos pre-concepcionales y optimizacion hormonal para embarazo.",
  },
  {
    slug: "crecimiento",
    title: "Crecimiento y Desarrollo",
    desc: "Talla baja, pubertad precoz o retrasada y deficiencia de hormona de crecimiento en ninos.",
  },
];

const faqs = [
  {
    q: "Quien es el endocrino en Barinas de referencia?",
    a: "La Dra. Jennifer Manrique es la endocrinologa de referencia en Barinas. Egresada de la ULA con entrenamiento internacional en el CEMDI Bogota, atiende en el Hospital Privado San Juan, Consultorio 34, Piso 2.",
  },
  {
    q: "Donde queda el consultorio del endocrino en Barinas?",
    a: "El consultorio de la Dra. Jennifer Manrique esta ubicado en el Hospital Privado San Juan, Consultorio 34, Piso 2, Barinas. Atiende de lunes a viernes de 8:00 AM a 12:00 PM y de 2:00 PM a 6:00 PM, previa cita.",
  },
  {
    q: "Como agendo cita con el endocrino en Barinas?",
    a: "La forma mas rapida es por WhatsApp al 0412-9337390. Tambien atiende pacientes de Santa Barbara de Barinas y otras ciudades de Venezuela con coordinacion previa.",
  },
  {
    q: "Que enfermedades trata el endocrinologo en Barinas?",
    a: "La Dra. Manrique trata diabetes (tipo 1, 2 y gestacional), obesidad, hipotiroidismo, hipertiroidismo, nodulos tiroideos, sindrome de ovario poliquistico, menopausia, trastornos hormonales, infertilidad hormonal y talla baja en ninos.",
  },
  {
    q: "El endocrino en Barinas maneja Mounjaro y Ozempic?",
    a: "Si. La Dra. Jennifer Manrique prescribe y hace seguimiento con Mounjaro (tirzepatida) y Ozempic (semaglutida), ambos disponibles en Venezuela, evaluando el perfil de cada paciente para garantizar resultados seguros.",
  },
  {
    q: "Atienden pacientes de otras ciudades de Venezuela?",
    a: "Si. Ademas de Barinas, la Dra. Manrique tiene consulta mensual en Santa Barbara de Barinas y coordina atencion para pacientes de otras ciudades de Venezuela via WhatsApp.",
  },
];

const credentials = [
  { label: "Especialidad", value: "Endocrinologia - Universidad de Los Andes (ULA)" },
  { label: "Formacion internacional", value: "CEMDI, Bogota, Colombia" },
  { label: "Sede principal", value: "Hospital Privado San Juan, Barinas" },
  { label: "Sede secundaria", value: "Santa Barbara de Barinas (mensual)" },
  { label: "Horario", value: "Lun - Vie, 8:00 AM - 12:00 PM y 2:00 PM - 6:00 PM" },
  { label: "Citas", value: "WhatsApp 0412-9337390" },
];

export default function EndocrinoBarinasPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-gradient-to-b from-malva-50 via-white to-white">
        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-malva-200/40 blur-3xl pointer-events-none" />
        <div className="container-page relative max-w-3xl mx-auto text-center">
          <nav aria-label="Ruta de navegacion" className="mb-6">
            <ol className="flex justify-center flex-wrap gap-x-2 text-xs text-texto-suave">
              <li>
                <Link href="/" className="hover:text-dorado transition-colors">Inicio</Link>
              </li>
              <li aria-hidden="true" className="select-none">/</li>
              <li className="text-malva-900 font-medium" aria-current="page">
                Endocrino en Barinas
              </li>
            </ol>
          </nav>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-malva-100 text-malva-800 text-xs font-semibold uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 rounded-full bg-dorado" />
            Endocrinologia en Barinas
          </span>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-malva-900">
            Endocrino en Barinas,{" "}
            <span className="text-dorado">atencion especializada</span>
          </h1>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-texto-suave max-w-2xl mx-auto">
            La Dra. Jennifer Manrique es la endocrinologa de referencia en Barinas,
            Venezuela. Especialista en diabetes, obesidad, tiroides, salud hormonal
            y tratamientos con Mounjaro y Ozempic. Atencion previa cita en el
            Hospital Privado San Juan.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href={CONTACT.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-dorado text-white font-semibold shadow-[0_10px_30px_rgba(201,168,76,0.3)] hover:bg-dorado-dark hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                <path d="M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .18 5.32.18 11.86c0 2.09.55 4.13 1.6 5.93L0 24l6.4-1.68a11.85 11.85 0 0 0 5.64 1.44h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.15-3.39-8.42Zm-8.47 18.12a9.7 9.7 0 0 1-4.94-1.35l-.36-.21-3.8 1 1.01-3.7-.23-.38a9.76 9.76 0 0 1-1.5-5.1c0-5.4 4.4-9.8 9.83-9.8 2.62 0 5.08 1.02 6.94 2.87a9.74 9.74 0 0 1 2.87 6.93c0 5.4-4.4 9.8-9.81 9.8Z" />
              </svg>
              Agendar cita por WhatsApp
            </Link>
            <Link
              href="/sobre-mi"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white border border-malva-200 text-malva-800 font-semibold hover:border-dorado/60 hover:text-dorado-dark transition-all duration-300"
            >
              Conocer a la doctora
            </Link>
          </div>
        </div>
      </section>

      {/* Quien es */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-page max-w-4xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-[1fr_340px] items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-dorado">
                La endocrinologa en Barinas
              </span>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl md:text-3xl lg:text-4xl text-malva-900 leading-tight">
                Dra. Jennifer Manrique, especialista en Barinas
              </h2>
              <p className="mt-5 text-base leading-relaxed text-texto-suave">
                La Dra. Jennifer Manrique es medica especialista en Endocrinologia
                egresada de la Universidad de Los Andes (ULA). Cuenta con formacion
                internacional en el Centro de Endocrinologia y Metabolismo (CEMDI)
                en Bogota, Colombia, y experiencia en el manejo de tecnologia avanzada
                para el control glucemico como el monitor continuo de glucosa (CGM).
              </p>
              <p className="mt-4 text-base leading-relaxed text-texto-suave">
                Como endocrino en Barinas, ofrece atencion integral para diabetes,
                obesidad, tiroides, salud hormonal, fertilidad y crecimiento, con
                tratamientos actualizados y un enfoque centrado en el paciente.
                Atiende en el Hospital Privado San Juan y adicionalmente realiza
                consulta mensual en Santa Barbara de Barinas.
              </p>
              <Link
                href="/sobre-mi"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-malva-700 hover:text-dorado-dark transition-colors"
              >
                Ver trayectoria completa
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>

            <div className="rounded-3xl bg-malva-50 border border-malva-100 p-6 space-y-4">
              <h3 className="font-[family-name:var(--font-display)] text-lg text-malva-900 mb-2">
                Datos del consultorio
              </h3>
              {credentials.map((c) => (
                <div key={c.label} className="flex flex-col gap-0.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-dorado">{c.label}</span>
                  <span className="text-sm text-malva-900">{c.value}</span>
                </div>
              ))}
              <Link
                href={CONTACT.whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-dorado text-white text-sm font-semibold hover:bg-dorado-dark transition-colors"
              >
                Agendar cita ahora
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Por que consultar */}
      <section className="py-16 md:py-20 bg-malva-50">
        <div className="container-page max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl lg:text-4xl text-malva-900 leading-tight">
              Por que consultar a un{" "}
              <span className="text-dorado">endocrino en Barinas</span>
            </h2>
            <p className="mt-4 text-base text-texto-suave">
              El endocrinologo es el especialista del sistema hormonal. Muchos
              sintomas cotidianos tienen una causa hormonal que solo un endocrinólogo
              puede diagnosticar y tratar correctamente.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "weight",
                title: "Aumento de peso inexplicable",
                desc: "El hipotiroidismo, el Sindrome de Cushing y la resistencia a la insulina son causas hormonales frecuentes del sobrepeso que requieren atencion endocrinologica.",
              },
              {
                icon: "energy",
                title: "Cansancio persistente",
                desc: "La fatiga cronica puede originarse en problemas tiroideos, diabetes no diagnosticada o deficiencias hormonales. El endocrino identifica la causa.",
              },
              {
                icon: "glucose",
                title: "Glucemia elevada o diabetes",
                desc: "La diabetes requiere seguimiento especializado. El endocrinologo en Barinas diseña el plan de control glucemico y ajusta el tratamiento segun cada caso.",
              },
              {
                icon: "cycle",
                title: "Alteraciones del ciclo menstrual",
                desc: "Ciclos irregulares, ausencia de menstruacion o sangrado excesivo pueden indicar SOP, alteraciones tiroideas u otros trastornos hormonales.",
              },
              {
                icon: "thyroid",
                title: "Problemas de tiroides",
                desc: "El hipotiroidismo, hipertiroidismo y los nodulos tiroideos necesitan evaluacion especializada con ecografia y seguimiento continuo.",
              },
              {
                icon: "fertility",
                title: "Dificultad para concebir",
                desc: "Las alteraciones hormonales son una causa comun de infertilidad. El endocrinologo evalua y optimiza el perfil hormonal para favorecer el embarazo.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-white border border-malva-100 shadow-[0_4px_20px_rgba(44,37,48,0.04)]"
              >
                <span className="inline-flex w-10 h-10 rounded-xl bg-dorado/10 items-center justify-center text-dorado-dark mb-4">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 8v4l3 3" />
                  </svg>
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-malva-900 leading-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-texto-suave leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-page max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl lg:text-4xl text-malva-900 leading-tight">
              Servicios del endocrino en Barinas
            </h2>
            <p className="mt-4 text-base text-texto-suave">
              Atencion integral para todas las condiciones endocrinologicas, con
              tratamientos actualizados y tecnologia avanzada disponible en Barinas.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/servicios/${s.slug}`}
                className="group p-6 rounded-2xl bg-white border border-malva-100 shadow-[0_4px_20px_rgba(44,37,48,0.04)] hover:shadow-[0_20px_50px_rgba(138,114,145,0.15)] hover:-translate-y-1 hover:border-dorado/40 transition-all duration-300 flex flex-col"
              >
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-malva-900 group-hover:text-dorado-dark transition-colors">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-texto-suave leading-relaxed flex-1">{s.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-malva-600 group-hover:text-dorado-dark transition-colors">
                  Ver tratamiento
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-malva-200 text-sm font-semibold text-malva-800 hover:border-dorado/60 hover:text-dorado-dark transition-all duration-300"
            >
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Ubicacion */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-malva-50 to-white">
        <div className="container-page max-w-4xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-dorado">
                Donde encontrarnos
              </span>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl md:text-3xl text-malva-900 leading-tight">
                Consultorio del endocrino en Barinas
              </h2>
              <p className="mt-4 text-base text-texto-suave">
                La Dra. Jennifer Manrique atiende en Barinas en el Hospital Privado
                San Juan, una de las clinicas de referencia de la ciudad.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  { label: "Sede principal", value: `${LOCATION.name}, ${LOCATION.detail}, Barinas` },
                  { label: "Sede secundaria", value: "Santa Barbara de Barinas (1 vez al mes, previa cita)" },
                  { label: "Horario", value: "Lunes a Viernes: 8:00 AM - 12:00 PM y 2:00 PM - 6:00 PM" },
                  { label: "Citas", value: "Previa cita por WhatsApp: 0412-9337390" },
                ].map((item) => (
                  <li key={item.label} className="flex gap-3">
                    <span className="shrink-0 w-5 h-5 rounded-full bg-dorado/15 text-dorado-dark flex items-center justify-center mt-0.5">
                      <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wide text-dorado block">{item.label}</span>
                      <span className="text-sm text-malva-900">{item.value}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-malva-900 text-white p-8 shadow-[0_20px_60px_rgba(44,37,48,0.2)]">
              <p className="text-sm text-malva-200 uppercase tracking-wider font-semibold mb-6">
                Agenda tu cita ahora
              </p>
              <p className="font-[family-name:var(--font-display)] text-2xl leading-snug">
                Atendemos en Barinas y Santa Barbara. Escribe por WhatsApp y te
                confirmamos disponibilidad de inmediato.
              </p>
              <Link
                href={CONTACT.whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-dorado text-white font-semibold shadow-[0_10px_30px_rgba(201,168,76,0.4)] hover:bg-dorado-dark transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                  <path d="M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .18 5.32.18 11.86c0 2.09.55 4.13 1.6 5.93L0 24l6.4-1.68a11.85 11.85 0 0 0 5.64 1.44h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.15-3.39-8.42Zm-8.47 18.12a9.7 9.7 0 0 1-4.94-1.35l-.36-.21-3.8 1 1.01-3.7-.23-.38a9.76 9.76 0 0 1-1.5-5.1c0-5.4 4.4-9.8 9.83-9.8 2.62 0 5.08 1.02 6.94 2.87a9.74 9.74 0 0 1 2.87 6.93c0 5.4-4.4 9.8-9.81 9.8Z" />
                </svg>
                WhatsApp: 0412-9337390
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-page max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl text-malva-900">
              Preguntas frecuentes sobre el endocrino en Barinas
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <details
                key={i}
                className="group border border-malva-100 rounded-2xl bg-malva-50 open:bg-white open:shadow-[0_4px_20px_rgba(44,37,48,0.06)] transition-all duration-200"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold text-malva-900 text-sm md:text-base">
                  {item.q}
                  <span className="shrink-0 w-6 h-6 rounded-full border border-malva-200 flex items-center justify-center group-open:bg-dorado group-open:border-dorado transition-colors">
                    <svg viewBox="0 0 24 24" className="w-3 h-3 text-malva-600 group-open:text-white group-open:rotate-180 transition-all" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </summary>
                <p className="px-6 pb-5 text-sm md:text-base text-texto-suave leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-malva-700 hover:text-dorado-dark transition-colors"
            >
              Ver todas las preguntas frecuentes
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-gradient-to-br from-malva-700 via-malva-800 to-malva-900 relative overflow-hidden">
        <div className="absolute -top-40 -right-20 w-[520px] h-[520px] rounded-full bg-dorado/20 blur-3xl pointer-events-none" />
        <div className="relative container-page text-center max-w-2xl mx-auto text-white">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl leading-tight">
            Agenda tu consulta con la endocrinologa en Barinas
          </h2>
          <p className="mt-4 text-base text-malva-200">
            La Dra. Jennifer Manrique te atiende en el Hospital Privado San Juan,
            Consultorio 34, Piso 2, Barinas. Lunes a viernes, previa cita.
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
            Agendar cita por WhatsApp
          </Link>
        </div>
      </section>
    </>
  );
}
