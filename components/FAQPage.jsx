import Link from "next/link";
import { CONTACT } from "@/lib/constants";
import ServiceFAQ from "@/components/ServiceFAQ";

const categories = [
  {
    id: "consulta",
    label: "Consulta y atención en Barinas",
    faqs: [
      {
        q: "¿Cómo agendo una cita con la endocrinóloga en Barinas?",
        a: "La forma más rápida es por WhatsApp al 0412-9337390. La Dra. Jennifer Manrique atiende en el Hospital Privado San Juan, Consultorio 34, Piso 2, Barinas. La atención es de lunes a viernes de 8:00 AM a 12:00 PM y de 2:00 PM a 6:00 PM, previa cita.",
      },
      {
        q: "¿Qué debo llevar a la primera consulta con la endocrinóloga?",
        a: "Estudios recientes de laboratorio (glucemia, perfil tiroideo, hemoglobina glicosilada si los tienes), listado de medicamentos actuales, informes de otros especialistas e historia clínica relevante. Si no tienes estudios previos, se indicarán en la consulta.",
      },
      {
        q: "¿Atienden pacientes de otras ciudades de Venezuela?",
        a: "Sí. Además de la sede principal en Barinas, la Dra. Manrique ofrece consulta mensual en Santa Bárbara de Barinas. Pacientes de otras ciudades de Venezuela también son atendidos, con coordinación previa por WhatsApp.",
      },
      {
        q: "¿Cuándo es necesario consultar a un endocrinólogo y no solo al médico general?",
        a: "Cuando presentas síntomas como cansancio persistente, cambios de peso sin explicación, alteraciones del ciclo menstrual, caída de cabello, cambios en el ritmo cardíaco, dificultad para concebir, o si tienes diagnóstico de diabetes, tiroides, SOP, o trastornos hormonales que requieren seguimiento especializado.",
      },
      {
        q: "¿Cuánto dura la consulta de endocrinología en Barinas?",
        a: "La primera consulta suele durar entre 30 y 45 minutos. Se realiza una historia clínica detallada, evaluación del caso y se diseña un plan de estudios y tratamiento personalizado. Las consultas de seguimiento son más cortas.",
      },
      {
        q: "¿Se puede recibir seguimiento por WhatsApp entre consultas?",
        a: "La Dra. Manrique responde consultas breves y dudas sobre el tratamiento por WhatsApp en horario habitual. Para cambios significativos en el tratamiento, se recomienda una consulta presencial.",
      },
    ],
  },
  {
    id: "diabetes",
    label: "Diabetes en Barinas y Venezuela",
    faqs: [
      {
        q: "¿Cuál es el mejor endocrinólogo para diabetes en Barinas?",
        a: "La Dra. Jennifer Manrique es la endocrinóloga de referencia para diabetes en Barinas. Cuenta con formación especializada en la ULA, entrenamiento internacional en el CEMDI Bogotá y experiencia en el uso de tecnología avanzada para el control glucémico.",
      },
      {
        q: "¿Qué es el monitor continuo de glucosa y está disponible en Venezuela?",
        a: "El monitor continuo de glucosa (CGM) es un sensor que mide la glucosa en tiempo real a lo largo del día sin punciones frecuentes. Sí, está disponible en Venezuela. La Dra. Manrique tiene formación específica en su colocación e interpretación en Barinas.",
      },
      {
        q: "¿Se consigue insulina en Barinas actualmente?",
        a: "La disponibilidad de insulina en Venezuela ha mejorado. La Dra. Manrique orienta a cada paciente sobre las opciones disponibles en Barinas y cómo optimizar el tratamiento según la insulina accesible.",
      },
      {
        q: "¿Cuál es la diferencia entre diabetes tipo 1 y tipo 2 en términos de tratamiento?",
        a: "La diabetes tipo 1 requiere insulina de por vida ya que el páncreas no la produce. La tipo 2 puede manejarse inicialmente con cambios de hábitos y medicamentos orales, aunque en algunos casos también requiere insulina. El endocrinólogo en Barinas diseña el plan según el tipo y la evolución de cada paciente.",
      },
    ],
  },
  {
    id: "obesidad",
    label: "Obesidad, Mounjaro y Ozempic en Venezuela",
    faqs: [
      {
        q: "¿Mounjaro está disponible en Venezuela para bajar de peso?",
        a: "Sí, Mounjaro (tirzepatida) se consigue actualmente en Venezuela bajo prescripción médica. La Dra. Manrique evalúa si eres candidato ideal, indica la dosis correcta y realiza el seguimiento necesario en Barinas para garantizar resultados seguros.",
      },
      {
        q: "¿Cuál es la diferencia entre Ozempic y Mounjaro?",
        a: "Ozempic (semaglutida) actúa sobre el receptor GLP-1 y está indicado para diabetes tipo 2 y obesidad. Mounjaro (tirzepatida) actúa sobre dos receptores (GLP-1 y GIP), mostrando mayor eficacia en pérdida de peso en estudios clínicos. La elección depende del perfil de cada paciente.",
      },
      {
        q: "¿La obesidad tiene causas hormonales que un endocrinólogo puede tratar en Venezuela?",
        a: "Sí. El hipotiroidismo, el Síndrome de Cushing, el SOP, la resistencia a la insulina y el déficit de hormona de crecimiento pueden causar o agravar la obesidad. La Dra. Manrique descarta o trata estas causas en Barinas antes de diseñar el plan terapéutico.",
      },
      {
        q: "¿Cuánto tiempo tarda en verse resultados con el tratamiento de obesidad?",
        a: "Depende del tratamiento. Con GLP-1 como Mounjaro u Ozempic, los primeros resultados suelen verse en 4 a 8 semanas. El plan de la Dra. Manrique incluye ajustes progresivos y seguimiento para optimizar los resultados de forma segura.",
      },
    ],
  },
  {
    id: "tiroides",
    label: "Tiroides en Barinas",
    faqs: [
      {
        q: "¿El hipotiroidismo causa aumento de peso en Venezuela?",
        a: "Sí, el hipotiroidismo no tratado o mal controlado puede causar aumento de peso, cansancio, caída de cabello y otros síntomas. Con el tratamiento correcto con levotiroxina y seguimiento de un endocrinólogo en Barinas, estos síntomas mejoran significativamente.",
      },
      {
        q: "¿Con qué frecuencia debo controlar la tiroides con un endocrinólogo en Barinas?",
        a: "Para pacientes con hipotiroidismo estable, el control es cada 6 a 12 meses. Si hay ajustes recientes de dosis, nódulos en seguimiento o hipertiroidismo activo, el control puede ser más frecuente. La Dra. Manrique establece la frecuencia según el caso.",
      },
      {
        q: "¿Los nódulos tiroideos son peligrosos?",
        a: "La gran mayoría de los nódulos tiroideos son benignos. Sin embargo, requieren evaluación con ecografía y en algunos casos biopsia (PAAF) para descartar malignidad. La Dra. Manrique realiza esta evaluación completa en Barinas.",
      },
      {
        q: "¿La enfermedad tiroidea afecta la fertilidad en mujeres venezolanas?",
        a: "Sí. Tanto el hipotiroidismo como el hipertiroidismo pueden alterar la ovulación y aumentar el riesgo de aborto. La Dra. Manrique optimiza el control tiroideo en mujeres que desean quedar embarazadas en Barinas.",
      },
    ],
  },
  {
    id: "hormonal",
    label: "Salud Hormonal, SOP y Menopausia",
    faqs: [
      {
        q: "¿Cómo saber si tengo SOP en Venezuela?",
        a: "El SOP se diagnostica con al menos dos de tres criterios: ciclos menstruales irregulares, signos de exceso de andrógenos (acné, vello) o quistes en los ovarios en la ecografía. La evaluación hormonal completa con un endocrinólogo en Barinas confirma el diagnóstico.",
      },
      {
        q: "¿El SOP tiene cura o es de por vida?",
        a: "El SOP no tiene cura definitiva, pero sí tiene tratamiento efectivo. Con el manejo correcto (hormonal, metabólico y de estilo de vida), los síntomas se controlan significativamente y la calidad de vida mejora. La Dra. Manrique ofrece este seguimiento integral en Barinas.",
      },
      {
        q: "¿Qué síntomas de menopausia trata un endocrinólogo en Venezuela?",
        a: "El endocrinólogo evalúa el impacto metabólico de la menopausia: cambios de peso, resistencia a la insulina, pérdida de masa ósea, colesterol elevado y trastornos hormonales asociados. La Dra. Manrique ofrece orientación integral en Barinas.",
      },
      {
        q: "¿El estrés puede desbalancear las hormonas?",
        a: "Sí. El estrés crónico eleva el cortisol, lo que puede alterar el ciclo menstrual, favorecer el aumento de peso abdominal, empeorar la resistencia a la insulina y afectar la tiroides. La evaluación endocrinológica incluye el análisis de estas interacciones.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-gradient-to-b from-malva-50 via-white to-white">
        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-malva-200/40 blur-3xl pointer-events-none" />
        <div className="container-page relative max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-malva-100 text-malva-800 text-xs font-semibold uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 rounded-full bg-dorado" />
            Preguntas frecuentes
          </span>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-malva-900">
            Endocrinología en Barinas,{" "}
            <span className="text-dorado">respondemos tus dudas</span>
          </h1>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-texto-suave">
            Respuestas claras sobre endocrinología en Barinas y Venezuela. Diabetes,
            obesidad, tiroides, salud hormonal, Mounjaro, Ozempic y más.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="px-4 py-1.5 rounded-full bg-white border border-malva-200 text-sm text-malva-800 hover:border-dorado/60 hover:text-dorado-dark transition-all duration-200"
              >
                {c.label.split(" ").slice(0, 2).join(" ")}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-page max-w-3xl mx-auto space-y-16">
          {categories.map((cat) => (
            <div key={cat.id} id={cat.id}>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-full bg-dorado/15 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-dorado-dark" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                </span>
                <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl text-malva-900">
                  {cat.label}
                </h2>
              </div>
              <ServiceFAQ faqs={cat.faqs} />
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-malva-700 via-malva-800 to-malva-900 relative overflow-hidden">
        <div className="absolute -top-40 -right-20 w-[520px] h-[520px] rounded-full bg-dorado/20 blur-3xl pointer-events-none" />
        <div className="relative container-page text-center max-w-2xl mx-auto text-white">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl leading-tight">
            ¿Tu pregunta no aparece aquí?
          </h2>
          <p className="mt-4 text-base text-malva-200">
            Escríbenos directamente y la Dra. Jennifer Manrique te responde
            personalmente en Barinas.
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
            Preguntar por WhatsApp
          </Link>
        </div>
      </section>
    </>
  );
}
