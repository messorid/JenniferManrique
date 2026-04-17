import Link from "next/link";
import { CONTACT, LOCATION } from "@/lib/constants";

const features = [
  {
    title: "Diabetes Tipo 1",
    desc: "Manejo con insulinoterapia intensiva, ajuste de dosis y tecnología avanzada. Monitores continuos de glucosa (CGM) disponibles en Barinas.",
  },
  {
    title: "Diabetes Tipo 2",
    desc: "Tratamiento personalizado con medicación oral, inyectables y cambios de estilo de vida. Control de hemoglobina glicosilada y complicaciones.",
  },
  {
    title: "Diabetes Gestacional",
    desc: "Seguimiento especializado durante el embarazo para proteger la salud de la madre y el bebé. Coordinación con ginecología.",
  },
  {
    title: "Monitores de Glucosa (CGM)",
    desc: "Dispositivos de monitoreo continuo que eliminan los pinchazos frecuentes y permiten un control glucémico más preciso.",
  },
  {
    title: "Resistencia a la Insulina",
    desc: "Diagnóstico y tratamiento de prediabetes y resistencia a la insulina antes de que se convierta en diabetes tipo 2.",
  },
  {
    title: "Complicaciones de la Diabetes",
    desc: "Evaluación y manejo de neuropatía, nefropatía y pie diabético. Control integral para prevenir complicaciones a largo plazo.",
  },
];

const faqs = [
  {
    q: "Dónde trato la diabetes en Barinas?",
    a: "La Dra. Jennifer Manrique es la endocrinóloga especialista en diabetes en Barinas. Atiende en el Hospital Privado San Juan, Consultorio 34, Piso 2. Agrega su cita por WhatsApp al 0412-9337390.",
  },
  {
    q: "Cuál es el mejor tratamiento para la diabetes tipo 2 en Venezuela?",
    a: "El tratamiento depende de cada paciente. La Dra. Manrique evalúa el perfil metabólico completo y puede incluir medicación oral, inyectables como Ozempic o Mounjaro (GLP-1), cambios de alimentación y actividad física. Todo personalizado.",
  },
  {
    q: "Qué es la hemoglobina glicosilada y por qué es importante?",
    a: "La hemoglobina glicosilada (HbA1c) mide el promedio de glucosa en sangre en los últimos 3 meses. Es el mejor indicador del control de la diabetes a largo plazo. El objetivo ideal es menos de 7% en la mayoría de los pacientes diabéticos.",
  },
  {
    q: "Puedo controlar la diabetes sin insulina?",
    a: "En diabetes tipo 2, sí es posible en muchos casos con medicación oral, inyectables tipo GLP-1 y cambios de estilo de vida. En diabetes tipo 1 la insulina es imprescindible. La Dra. Manrique evalúa cada caso individualmente.",
  },
  {
    q: "El monitor continuo de glucosa está disponible en Barinas?",
    a: "Sí. La Dra. Jennifer Manrique trabaja con monitores continuos de glucosa (CGM) en Barinas. Son dispositivos que miden la glucosa en tiempo real sin necesidad de pinchazos frecuentes, mejorando significativamente el control de la diabetes.",
  },
  {
    q: "Cuánto tarda en controlarse la diabetes?",
    a: "Depende del tipo y estado inicial. Con el tratamiento adecuado, es posible ver mejoras en la hemoglobina glicosilada en 3 meses. La diabetes tipo 2 en etapas tempranas puede llegar a remisión con cambios de peso y tratamiento. La Dra. Manrique establece metas claras desde la primera consulta.",
  },
];

export default function DiabetesBarinasPage() {
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
              <li className="text-malva-900 font-medium" aria-current="page">Diabetes en Barinas</li>
            </ol>
          </nav>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-malva-100 text-malva-800 text-xs font-semibold uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 rounded-full bg-dorado" />
            Endocrinología · Barinas
          </span>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-malva-900">
            Tratamiento de{" "}
            <span className="text-dorado">Diabetes</span>{" "}
            en Barinas
          </h1>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-texto-suave max-w-2xl mx-auto">
            La Dra. Jennifer Manrique es la endocrinóloga especialista en diabetes en
            Barinas. Maneja diabetes tipo 1, tipo 2 y gestacional con tecnología
            avanzada, monitores continuos de glucosa y terapias GLP-1.
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
              href="/servicios/diabetes"
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
              Qué incluye el tratamiento de diabetes en Barinas
            </h2>
            <p className="mt-3 text-base text-texto-suave">
              Atención integral con tecnología de vanguardia para todos los tipos de diabetes.
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

      {/* Perfil + Info */}
      <section className="py-16 md:py-20 bg-malva-50">
        <div className="container-page max-w-4xl mx-auto">
          <div className="grid gap-10 lg:grid-cols-[1fr_300px] items-start">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-dorado">Por qué elegirnos</span>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl md:text-3xl text-malva-900 leading-tight">
                Especialista en diabetes con tecnología avanzada en Barinas
              </h2>
              <p className="mt-4 text-base leading-relaxed text-texto-suave">
                La Dra. Jennifer Manrique es médica especialista en Endocrinología
                egresada de la Universidad de Los Andes (ULA) y con formación
                internacional en el CEMDI Bogota, Colombia — uno de los centros
                de referencia en diabetes y metabolismo de América Latina.
              </p>
              <p className="mt-3 text-base leading-relaxed text-texto-suave">
                Trabaja con monitores continuos de glucosa (CGM), terapias GLP-1
                como Ozempic y Mounjaro, y protocolos de insulinoterapia actualizados.
                Su enfoque es personalizado: cada paciente recibe un plan específico
                según su tipo de diabetes, estilo de vida y objetivos de control.
              </p>
              <p className="mt-3 text-base leading-relaxed text-texto-suave">
                Atiende en el Hospital Privado San Juan, Consultorio 34, Piso 2,
                Barinas. También coordina atención para pacientes de otras ciudades
                de Venezuela vía WhatsApp.
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
                { label: "Formación", value: "CEMDI Bogota, Colombia" },
                { label: "Sede", value: `${LOCATION.name}, ${LOCATION.detail}` },
                { label: "Ciudad", value: "Barinas, Venezuela" },
                { label: "Horario", value: "Lun - Vie, 8AM-12PM / 2PM-6PM" },
                { label: "Citas", value: "WhatsApp 0412-9337390" },
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
            Preguntas sobre diabetes en Barinas
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
            Agenda tu consulta para diabetes en Barinas
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
