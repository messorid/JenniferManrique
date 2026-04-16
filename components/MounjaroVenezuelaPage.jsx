import Link from "next/link";
import { CONTACT } from "@/lib/constants";

const faqs = [
  {
    q: "Que es Mounjaro y para que sirve?",
    a: "Mounjaro (tirzepatida) es un medicamento inyectable que actua sobre dos receptores hormonales: GLP-1 y GIP. Esta aprobado para el tratamiento de diabetes tipo 2 y obesidad. En estudios clinicos ha demostrado ser el agente farmacologico mas efectivo para perdida de peso disponible hasta la fecha.",
  },
  {
    q: "Mounjaro esta disponible en Venezuela?",
    a: "Si, Mounjaro (tirzepatida) se consigue actualmente en Venezuela bajo prescripcion medica. La Dra. Jennifer Manrique evalua candidatos, indica la dosis correcta y realiza el seguimiento necesario en Barinas para garantizar resultados seguros y sostenibles.",
  },
  {
    q: "Cuanto peso se puede bajar con Mounjaro en Venezuela?",
    a: "En los ensayos clinicos SURMOUNT, los pacientes con obesidad perdieron entre un 15% y un 22% de su peso corporal en 72 semanas con tirzepatida. Los resultados individuales dependen de la dosis, el plan alimentario y el seguimiento medico. La Dra. Manrique acompana cada caso en Barinas.",
  },
  {
    q: "Cual es la diferencia entre Mounjaro y Ozempic?",
    a: "Ozempic (semaglutida) actua sobre el receptor GLP-1. Mounjaro (tirzepatida) actua sobre GLP-1 y GIP simultaneamente, lo que explica su mayor eficacia en perdida de peso. La eleccion entre uno y otro depende del perfil clinico de cada paciente, que la Dra. Manrique evalua en consulta.",
  },
  {
    q: "Mounjaro tiene efectos secundarios?",
    a: "Los efectos secundarios mas frecuentes son nauseas, vomitos, diarrea o estrenimiento, especialmente al inicio del tratamiento. Suelen ser transitorios y se manejan con ajustes de dosis progresivos bajo supervision medica. Por esto es fundamental el seguimiento con un endocrinologo.",
  },
  {
    q: "Se puede usar Mounjaro sin ser diabetico solo para bajar de peso?",
    a: "Si, tirzepatida esta indicada para el manejo de la obesidad independientemente de la presencia de diabetes. Sin embargo, requiere evaluacion previa por un especialista para confirmar que el paciente es candidato adecuado y descartar contraindicaciones.",
  },
  {
    q: "Como agendo una consulta para Mounjaro en Venezuela?",
    a: "Escribiendo por WhatsApp al 0412-9337390. La Dra. Jennifer Manrique atiende en el Hospital Privado San Juan, Consultorio 34, Piso 2, Barinas, de lunes a viernes previa cita.",
  },
];

const comparativa = [
  { param: "Mecanismo", mounjaro: "GLP-1 + GIP (doble accion)", ozempic: "GLP-1" },
  { param: "Perdida de peso promedio", mounjaro: "15% - 22% del peso", ozempic: "10% - 15% del peso" },
  { param: "Indicacion principal", mounjaro: "Diabetes tipo 2 y obesidad", ozempic: "Diabetes tipo 2 y obesidad" },
  { param: "Administracion", mounjaro: "Inyeccion semanal", ozempic: "Inyeccion semanal" },
  { param: "Disponible en Venezuela", mounjaro: "Si", ozempic: "Si" },
];

export default function MounjaroVenezuelaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-gradient-to-b from-malva-50 via-white to-white">
        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-malva-200/40 blur-3xl pointer-events-none" />
        <div className="container-page relative max-w-3xl mx-auto text-center">
          <nav aria-label="Ruta de navegacion" className="mb-6">
            <ol className="flex justify-center flex-wrap gap-x-2 text-xs text-texto-suave">
              <li><Link href="/" className="hover:text-dorado transition-colors">Inicio</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-malva-900 font-medium" aria-current="page">Mounjaro en Venezuela</li>
            </ol>
          </nav>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-malva-100 text-malva-800 text-xs font-semibold uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 rounded-full bg-dorado" />
            Tratamiento de obesidad en Venezuela
          </span>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-malva-900">
            Mounjaro en Venezuela,{" "}
            <span className="text-dorado">disponible en Barinas</span>
          </h1>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-texto-suave max-w-2xl mx-auto">
            Mounjaro (tirzepatida) ya esta disponible en Venezuela. La Dra. Jennifer
            Manrique, endocrinologa en Barinas, prescribe y hace seguimiento con
            Mounjaro para pacientes con obesidad o diabetes tipo 2, con resultados
            seguros y monitoreados.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href={CONTACT.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-dorado text-white font-semibold shadow-[0_10px_30px_rgba(201,168,76,0.3)] hover:bg-dorado-dark hover:-translate-y-0.5 transition-all duration-300"
            >
              Consultar por Mounjaro
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

      {/* Que es */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-page max-w-4xl mx-auto">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-dorado">
                Tirzepatida
              </span>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl md:text-3xl text-malva-900 leading-tight">
                Que es Mounjaro y como funciona
              </h2>
              <p className="mt-4 text-base leading-relaxed text-texto-suave">
                Mounjaro (tirzepatida) es el primer medicamento de su clase que actua
                sobre dos receptores hormonales de forma simultanea: GLP-1 (glucagon-like
                peptide-1) y GIP (glucose-dependent insulinotropic polypeptide). Esta
                doble accion lo convierte en el agente farmacologico mas efectivo para
                perdida de peso disponible hasta la fecha.
              </p>
              <p className="mt-3 text-base leading-relaxed text-texto-suave">
                Reduce el apetito, mejora la sensibilidad a la insulina, optimiza el
                control glucemico y favorece la perdida de masa grasa. Se administra
                en inyeccion subcutanea una vez por semana.
              </p>
              <p className="mt-3 text-base leading-relaxed text-texto-suave">
                En los estudios clinicos SURMOUNT y SURPASS, los pacientes tratados
                con tirzepatida perdieron entre un 15% y un 22% de su peso corporal,
                superando los resultados de cualquier otro medicamento para obesidad.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { icon: "check", title: "Mayor eficacia que Ozempic", desc: "Doble mecanismo GLP-1 + GIP con mayor perdida de peso en estudios comparativos." },
                { icon: "check", title: "Una inyeccion semanal", desc: "Administracion simple, subcutanea, una vez por semana con autoinyector." },
                { icon: "check", title: "Control glucemico y peso", desc: "Indicado tanto para diabetes tipo 2 como para obesidad con o sin diabetes." },
                { icon: "check", title: "Seguimiento especializado", desc: "La Dra. Manrique monitorea la evolucion y ajusta la dosis en Barinas." },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 p-4 rounded-2xl bg-malva-50 border border-malva-100">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-dorado/20 text-dorado-dark flex items-center justify-center mt-0.5">
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-malva-900">{item.title}</p>
                    <p className="text-sm text-texto-suave mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Candidatos */}
      <section className="py-16 md:py-20 bg-malva-50">
        <div className="container-page max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl text-malva-900">
              Quien es candidato para Mounjaro en Venezuela
            </h2>
            <p className="mt-3 text-base text-texto-suave">
              No todas las personas son candidatas. La Dra. Manrique realiza una
              evaluacion completa antes de indicar el tratamiento.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Obesidad (IMC mayor de 30)", desc: "Personas con indice de masa corporal mayor a 30 que no han respondido a dieta y ejercicio solos." },
              { title: "Sobrepeso con comorbilidades", desc: "IMC mayor a 27 con hipertension, diabetes, apnea del sueno, colesterol alto o resistencia a la insulina." },
              { title: "Diabetes tipo 2", desc: "Pacientes con diabetes tipo 2 que necesitan mejor control glucemico o reduccion de peso." },
              { title: "Resistencia a la insulina", desc: "Personas con resistencia a la insulina que no responden bien a otros tratamientos." },
              { title: "SOP con obesidad", desc: "Mujeres con sindrome de ovario poliquistico que presentan sobrepeso y resistencia metabolica." },
              { title: "Prediabetes con obesidad", desc: "Pacientes con prediabetes que buscan revertir su riesgo metabolico mediante perdida de peso significativa." },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-white border border-malva-100 shadow-[0_4px_20px_rgba(44,37,48,0.04)]">
                <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-malva-900">{item.title}</h3>
                <p className="mt-2 text-sm text-texto-suave leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-texto-suave">
            Tambien existen contraindicaciones. La evaluacion medica previa es obligatoria.{" "}
            <Link href={CONTACT.whatsappMessage} target="_blank" rel="noopener noreferrer" className="text-dorado-dark font-semibold hover:underline">
              Consulta con la Dra. Manrique.
            </Link>
          </p>
        </div>
      </section>

      {/* Comparativa */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-page max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl text-malva-900">
              Mounjaro vs Ozempic en Venezuela
            </h2>
            <p className="mt-3 text-base text-texto-suave">
              Ambos estan disponibles en Venezuela. La eleccion depende del perfil de cada paciente.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-malva-100 shadow-[0_4px_20px_rgba(44,37,48,0.04)]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-malva-50 border-b border-malva-100">
                  <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-malva-600">Parametro</th>
                  <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-dorado-dark">Mounjaro</th>
                  <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-malva-600">Ozempic</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-malva-100 bg-white">
                {comparativa.map((row) => (
                  <tr key={row.param}>
                    <td className="px-5 py-3.5 font-medium text-malva-900">{row.param}</td>
                    <td className="px-5 py-3.5 text-malva-900 font-semibold">{row.mounjaro}</td>
                    <td className="px-5 py-3.5 text-texto-suave">{row.ozempic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-center text-texto-suave">
            La eleccion entre Mounjaro y Ozempic debe ser indicada por un especialista segun tu caso clinico.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-malva-50">
        <div className="container-page max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl text-malva-900 text-center mb-10">
            Preguntas frecuentes sobre Mounjaro en Venezuela
          </h2>
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <details key={i} className="group border border-malva-100 rounded-2xl bg-white open:shadow-[0_4px_20px_rgba(44,37,48,0.06)] transition-all">
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
            Comienza tu tratamiento con Mounjaro en Barinas
          </h2>
          <p className="mt-4 text-base text-malva-200">
            La Dra. Jennifer Manrique evalua tu caso, indica la dosis correcta y
            realiza el seguimiento necesario para obtener resultados seguros.
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
            Consultar disponibilidad por WhatsApp
          </Link>
        </div>
      </section>
    </>
  );
}
