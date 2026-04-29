"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Cuándo debería consultar con una endocrinóloga?",
    a: "Si presentas cansancio persistente, cambios de peso sin explicación, alteraciones en el ciclo menstrual, caída de cabello, antecedentes familiares de diabetes o tiroides, problemas de fertilidad o resistencia a la insulina, es recomendable una evaluación endocrinológica integral.",
  },
  {
    q: "Tratan el Síndrome de Ovario Poliquístico (SOP)?",
    a: "Sí. El SOP es una de las consultas más frecuentes. Se evalúa el perfil hormonal, metabólico y ginecológico, y se diseña un plan individualizado que puede incluir cambios de hábitos, medicación, control de peso y acompañamiento para fertilidad si es necesario.",
  },
  {
    q: "Usan Mounjaro u Ozempic para bajar de peso?",
    a: "Sí, se utilizan terapias basadas en análogos de GLP-1 como Ozempic y Mounjaro, siempre con indicación médica, evaluación previa y seguimiento clínico. Son una herramienta dentro de un tratamiento integral para obesidad y diabetes tipo 2.",
  },
  {
    q: "¿Qué estudios se hacen en la evaluación de tiroides?",
    a: "Según el caso se solicitan perfil tiroideo completo, anticuerpos, ecografía tiroidea y, si es necesario, punción con aguja fina (PAAF) para evaluar nódulos. El objetivo es obtener un diagnóstico preciso y proponer el tratamiento adecuado.",
  },
  {
    q: "¿Atiende pacientes con problemas de fertilidad?",
    a: "Sí. Se evalúa el componente hormonal en infertilidad, se diseñan protocolos pre-concepcionales, se trata el hipogonadismo y se optimiza el perfil hormonal para favorecer el embarazo, en conjunto con el equipo de ginecología cuando aplica.",
  },
  {
    q: "¿Se atienden niños y adolescentes?",
    a: "Sí, se evalúan talla baja, pubertad precoz o retrasada, deficiencia de hormona de crecimiento y otras alteraciones endocrinas del crecimiento y desarrollo.",
  },
  {
    q: "¿Cómo agendo una cita?",
    a: "La forma más rápida es por WhatsApp al 0412-9339730. La atención es previa cita, de lunes a viernes en Barinas, y una vez al mes en Santa Barbara de Barinas.",
  },
  {
    q: "¿Qué debo llevar a la primera consulta?",
    a: "Estudios previos de laboratorio, ecografías, listado de medicamentos actuales e informes de especialistas si los tienes. Si no cuentas con estudios recientes, se indicarán los necesarios en la consulta.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative py-24 md:py-32 bg-white">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dorado/15 text-dorado-dark text-xs font-semibold uppercase tracking-[0.2em]">
              Preguntas frecuentes
            </span>
            <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl leading-tight text-malva-900">
              Resolvemos tus <span className="text-dorado">dudas</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-texto-suave">
              Respuestas claras a las preguntas más comunes sobre endocrinología,
              diabetes, obesidad, tiroides y salud hormonal.
            </p>
            <p className="mt-4 text-sm text-texto-suave">
              Si tu duda no aparece aquí, escríbenos por WhatsApp y con gusto te
              orientamos.
            </p>
          </div>

          <div className="divide-y divide-malva-100 rounded-3xl border border-malva-100 bg-malva-50/40">
            {faqs.map((f, i) => {
              const open = i === openIndex;
              return (
                <div key={f.q} className="px-6 md:px-8">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? -1 : i)}
                    className="w-full flex items-start gap-4 py-5 text-left"
                    aria-expanded={open}
                  >
                    <span className="shrink-0 mt-1 w-7 h-7 rounded-full bg-white border border-malva-100 flex items-center justify-center text-malva-800">
                      <svg
                        viewBox="0 0 24 24"
                        className={`w-4 h-4 transition-transform duration-300 ${
                          open ? "rotate-45 text-dorado" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                    <span className="flex-1 text-base md:text-lg font-semibold text-malva-900 leading-snug">
                      {f.q}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      open
                        ? "grid-rows-[1fr] opacity-100 pb-5"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pl-11 text-sm md:text-base leading-relaxed text-texto-suave">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
