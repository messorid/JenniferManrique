import Link from "next/link";
import { CONTACT } from "@/lib/constants";

const faqs = [
  {
    q: "¿Ozempic está disponible en Barinas Venezuela?",
    a: "Sí, Ozempic (semaglutida) está disponible en Venezuela bajo prescripción médica. La Dra. Jennifer Manrique lo prescribe y hace seguimiento en su consultorio del Hospital Privado San Juan, Consultorio 34, Piso 2, Barinas.",
  },
  {
    q: "¿Para qué sirve Ozempic?",
    a: "Ozempic (semaglutida 0.5 mg y 1 mg) está aprobado para el tratamiento de diabetes tipo 2. También se utiliza bajo supervisión médica para el manejo de la obesidad, dado su efecto en la reducción del apetito y la pérdida de peso.",
  },
  {
    q: "¿Ozempic engorda o adelgaza?",
    a: "Ozempic produce pérdida de peso. Al activar el receptor GLP-1, reduce el apetito, enlentece el vaciamiento gástrico y genera mayor sensación de saciedad. En estudios clínicos, los pacientes perdieron entre un 10% y un 15% de su peso corporal.",
  },
  {
    q: "¿Cuál es la diferencia entre Ozempic y Mounjaro?",
    a: "Ozempic actúa solo sobre el receptor GLP-1. Mounjaro actúa sobre GLP-1 y GIP (doble acción), lo que le confiere mayor eficacia en pérdida de peso en comparación directa. La Dra. Manrique evalúa cuál es el más adecuado según el perfil de cada paciente en Barinas.",
  },
  {
    q: "¿Ozempic tiene efectos secundarios?",
    a: "Los más frecuentes son náuseas, vómitos y diarrea al inicio del tratamiento, especialmente con los primeros aumentos de dosis. Con una titulación gradual y supervisión médica estos efectos son manejables y suelen disminuir con el tiempo.",
  },
  {
    q: "¿Wegovy es lo mismo que Ozempic?",
    a: "Ambos contienen semaglutida, pero en dosis distintas. Ozempic (hasta 2 mg) está indicado para diabetes tipo 2. Wegovy (hasta 2.4 mg) está aprobado específicamente para obesidad. En Venezuela, la disponibilidad de cada presentación varía. La Dra. Manrique orienta según lo disponible.",
  },
  {
    q: "¿Cómo agendo cita para Ozempic en Barinas?",
    a: "Por WhatsApp al 0412-9339730. La Dra. Jennifer Manrique atiende de lunes a viernes de 8:00 AM a 12:00 PM y de 2:00 PM a 6:00 PM en el Hospital Privado San Juan, Barinas, previa cita.",
  },
];

export default function OzempicBarinaPage() {
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
              <li className="text-malva-900 font-medium" aria-current="page">Ozempic en Barinas</li>
            </ol>
          </nav>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-malva-100 text-malva-800 text-xs font-semibold uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 rounded-full bg-dorado" />
            Semaglutida en Barinas, Venezuela
          </span>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-malva-900">
            Ozempic en Barinas,{" "}
            <span className="text-dorado">prescripción y seguimiento</span>
          </h1>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-texto-suave max-w-2xl mx-auto">
            Ozempic (semaglutida) está disponible en Venezuela. La Dra. Jennifer
            Manrique, endocrinóloga en Barinas, evalúa si eres candidato, indica
            la dosis correcta y hace el seguimiento para garantizar resultados
            seguros en diabetes tipo 2 y manejo del peso.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href={CONTACT.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-dorado text-white font-semibold shadow-[0_10px_30px_rgba(201,168,76,0.3)] hover:bg-dorado-dark hover:-translate-y-0.5 transition-all duration-300"
            >
              Consultar por Ozempic
            </Link>
            <Link
              href="/servicios/obesidad"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white border border-malva-200 text-malva-800 font-semibold hover:border-dorado/60 hover:text-dorado-dark transition-all duration-300"
            >
              Ver servicio de obesidad
            </Link>
          </div>
        </div>
      </section>

      {/* Qué es */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-page max-w-4xl mx-auto">
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-dorado">Semaglutida</span>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl md:text-3xl text-malva-900 leading-tight">
                Qué es Ozempic y cómo actúa
              </h2>
              <p className="mt-4 text-base leading-relaxed text-texto-suave">
                Ozempic (semaglutida) es un medicamento inyectable de la clase
                GLP-1 (glucagon-like peptide-1). Imita la acción de una hormona
                intestinal natural que el organismo libera después de comer.
                Al activar el receptor GLP-1, produce varios efectos beneficiosos
                para el control metabólico.
              </p>
              <p className="mt-3 text-base leading-relaxed text-texto-suave">
                Actúa reduciendo la producción de glucosa hepática, estimulando
                la secreción de insulina de forma dependiente de glucosa, retrasando
                el vaciamiento gástrico y reduciendo el apetito a nivel cerebral.
                El resultado es mejor control glucémico y pérdida de peso sostenida.
              </p>
              <p className="mt-3 text-base leading-relaxed text-texto-suave">
                Se administra en inyección subcutánea una vez por semana con un
                autoinyector precargado, con dosis que se aumentan gradualmente
                para minimizar efectos secundarios.
              </p>
            </div>
            <div className="space-y-3">
              {[
                { label: "Principio activo", value: "Semaglutida" },
                { label: "Clase", value: "Agonista del receptor GLP-1" },
                { label: "Administración", value: "Inyección subcutánea semanal" },
                { label: "Indicación principal", value: "Diabetes tipo 2 y obesidad" },
                { label: "Pérdida de peso promedio", value: "10% - 15% del peso corporal" },
                { label: "Disponible en Venezuela", value: "Sí, bajo prescripción médica" },
                { label: "Seguimiento en Barinas", value: "Dra. Jennifer Manrique, endocrinóloga" },
              ].map((item) => (
                <div key={item.label} className="flex items-start justify-between gap-4 py-3 border-b border-malva-100 last:border-0">
                  <span className="text-sm font-semibold text-malva-900">{item.label}</span>
                  <span className="text-sm text-texto-suave text-right">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Por qué con especialista */}
      <section className="py-16 md:py-20 bg-malva-50">
        <div className="container-page max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl text-malva-900">
              Por qué usar Ozempic con un endocrinólogo en Barinas
            </h2>
            <p className="mt-3 text-base text-texto-suave">
              Ozempic no es un medicamento de venta libre. Requiere evaluación,
              prescripción y seguimiento por un especialista.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Evaluación de candidatura", desc: "No todos los pacientes son candidatos. Existen contraindicaciones como antecedentes de cáncer tiroideo medular o pancreatitis." },
              { title: "Dosis correcta", desc: "La titulación progresiva de la dosis reduce los efectos secundarios y optimiza la tolerancia al tratamiento." },
              { title: "Monitoreo metabólico", desc: "La Dra. Manrique solicita los exámenes necesarios para evaluar la respuesta al tratamiento y detectar efectos adversos." },
              { title: "Ajuste del plan completo", desc: "Ozempic funciona mejor combinado con cambios en la alimentación. El endocrinólogo diseña el plan integral." },
              { title: "Gestión de efectos secundarios", desc: "Náuseas, vómitos u otros efectos se manejan ajustando la dosis y con indicaciones específicas de la especialista." },
              { title: "Resultados sostenibles", desc: "El seguimiento médico garantiza que los resultados se mantengan y que el tratamiento se ajuste según la evolución." },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-2xl bg-white border border-malva-100 shadow-[0_4px_20px_rgba(44,37,48,0.04)]">
                <span className="inline-flex w-8 h-8 rounded-lg bg-dorado/10 items-center justify-center text-dorado-dark mb-3">
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <h3 className="font-semibold text-sm text-malva-900">{item.title}</h3>
                <p className="mt-1.5 text-sm text-texto-suave leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-page max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl text-malva-900 text-center mb-10">
            Preguntas frecuentes sobre Ozempic en Barinas
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
            <Link href="/mounjaro-en-venezuela" className="text-sm font-semibold text-malva-700 hover:text-dorado-dark transition-colors">
              Comparar Ozempic con Mounjaro →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-malva-700 via-malva-800 to-malva-900 relative overflow-hidden">
        <div className="absolute -top-40 -right-20 w-[520px] h-[520px] rounded-full bg-dorado/20 blur-3xl pointer-events-none" />
        <div className="relative container-page text-center max-w-2xl mx-auto text-white">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl leading-tight">
            Agenda tu consulta para Ozempic en Barinas
          </h2>
          <p className="mt-4 text-base text-malva-200">
            La Dra. Jennifer Manrique evalúa tu caso, indica el tratamiento
            correcto y hace seguimiento personalizado en Barinas.
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
            Consultar por WhatsApp
          </Link>
        </div>
      </section>
    </>
  );
}
