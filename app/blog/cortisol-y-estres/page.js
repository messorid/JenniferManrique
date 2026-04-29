import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { SITE_URL, CONTACT } from "@/lib/constants";

export const metadata = {
  title: "¿El cortisol mide el estrés? Lo que debes saber | Blog - Dra. Jennifer Manrique",
  description:
    "Mucha gente cree que un cortisol en sangre mide su nivel de estrés diario. En realidad, no funciona así. Endocrinóloga especialista explica qué mide el cortisol y cuándo sí tiene sentido pedirlo.",
  keywords: [
    "cortisol y estrés",
    "cortisol alto síntomas",
    "cuándo pedir cortisol",
    "síndrome de Cushing Venezuela",
    "insuficiencia suprarrenal Barinas",
    "cortisol endocrinólogo Venezuela",
    "cortisol en sangre significado",
  ],
  openGraph: {
    type: "article",
    locale: "es_VE",
    url: `${SITE_URL}/blog/cortisol-y-estres`,
    title: "¿Tiene sentido pedir un cortisol para medir el estrés?",
    description: "El cortisol en sangre no mide el estrés cotidiano. Te explicamos qué mide realmente y cuándo sí tiene sentido pedirlo.",
    images: [{ url: `${SITE_URL}/images/dr-jennifer-hero.jpg`, width: 1200, height: 630, alt: "Cortisol y estrés - Dra. Jennifer Manrique" }],
  },
  alternates: { canonical: `${SITE_URL}/blog/cortisol-y-estres` },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "¿Tiene sentido pedir un cortisol para medir el estrés?",
  description: "Aclaración sobre el uso del cortisol como marcador de estrés y cuándo sí tiene valor clínico real.",
  author: { "@type": "Person", name: "Dra. Jennifer Manrique", jobTitle: "Endocrinóloga" },
  publisher: { "@type": "Organization", name: "Dra. Jennifer Manrique - Endocrinóloga Barinas" },
  datePublished: "2026-04-21",
  url: `${SITE_URL}/blog/cortisol-y-estres`,
};

export default function ArticuloCortisol() {
  return (
    <>
      <Header />
      <main>
        <article className="pt-36 pb-20 md:pt-44 md:pb-28">
          {/* Hero */}
          <div className="relative overflow-hidden bg-gradient-to-b from-malva-50 via-white to-white pb-10">
            <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-malva-200/40 blur-3xl pointer-events-none" />
            <div className="container-page relative max-w-3xl mx-auto">
              <nav aria-label="Ruta de navegación" className="mb-6">
                <ol className="flex flex-wrap gap-x-2 text-xs text-texto-suave">
                  <li><Link href="/" className="hover:text-dorado transition-colors">Inicio</Link></li>
                  <li aria-hidden="true">/</li>
                  <li><Link href="/blog" className="hover:text-dorado transition-colors">Blog</Link></li>
                  <li aria-hidden="true">/</li>
                  <li className="text-malva-900 font-medium" aria-current="page">Cortisol y estrés</li>
                </ol>
              </nav>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-malva-100 text-malva-800 text-xs font-semibold uppercase tracking-[0.2em]">
                <span className="w-1.5 h-1.5 rounded-full bg-dorado" />
                Endocrinología
              </span>
              <h1 className="mt-6 font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-malva-900">
                ¿Tiene sentido pedir un cortisol para medir el estrés?
              </h1>
              <div className="mt-5 flex items-center gap-4 text-sm text-texto-suave">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-malva-300 to-malva-500 flex items-center justify-center text-white text-xs font-semibold">JM</div>
                  <span>Dra. Jennifer Manrique</span>
                </div>
                <span className="text-malva-200">·</span>
                <span>21 de abril de 2026</span>
                <span className="text-malva-200">·</span>
                <span>5 min de lectura</span>
              </div>
            </div>
          </div>

          {/* Contenido */}
          <div className="container-page max-w-3xl mx-auto mt-10">
            <p className="text-base md:text-lg leading-relaxed text-texto-suave">
              Una de las consultas que recibo con más frecuencia —tanto en el consultorio como en redes sociales— es esta: <em>"Doctora, me siento muy estresada, ¿me pido un cortisol para ver si lo tengo alto?"</em>
            </p>
            <p className="mt-5 text-base leading-relaxed text-texto-suave">
              Es una pregunta completamente razonable. El cortisol se conoce popularmente como "la hormona del estrés", y la lógica parece obvia: si estoy estresada, debería tener el cortisol alto, y eso debería verse en un análisis de sangre.
            </p>
            <p className="mt-4 text-base leading-relaxed text-texto-suave">
              El problema es que eso no es exactamente lo que mide un cortisol en sangre.
            </p>

            <h2 className="mt-10 font-[family-name:var(--font-display)] text-2xl text-malva-900">¿Qué es el cortisol?</h2>
            <p className="mt-4 text-base leading-relaxed text-texto-suave">
              El cortisol es una hormona producida por las glándulas suprarrenales (que están sobre los riñones). Tiene muchas funciones vitales: regula el metabolismo de la glucosa, controla la inflamación, regula la presión arterial y ayuda al cuerpo a responder ante situaciones de emergencia.
            </p>
            <p className="mt-4 text-base leading-relaxed text-texto-suave">
              Sí, el cortisol sube en situaciones de estrés agudo —como un accidente o un susto— como parte de la respuesta de supervivencia del cuerpo. Pero eso no significa que un análisis de sangre rutinario pueda medir tu nivel de estrés crónico.
            </p>

            <h2 className="mt-10 font-[family-name:var(--font-display)] text-2xl text-malva-900">Por qué el cortisol en sangre no mide el estrés del día a día</h2>
            <div className="mt-5 space-y-5">
              {[
                {
                  title: "El cortisol varía enormemente a lo largo del día",
                  text: "La concentración de cortisol sigue un ritmo circadiano: es máxima entre las 6 y las 8 de la mañana, y va disminuyendo durante el día hasta ser mínima a medianoche. Un valor de cortisol solo tiene sentido interpretarlo si se sabe exactamente a qué hora se tomó la muestra.",
                },
                {
                  title: "El simple acto de ir al médico sube el cortisol",
                  text: "La ansiedad de hacerse un examen de sangre, el trasladarse al laboratorio, la espera: todo eso activa la respuesta de estrés agudo y eleva el cortisol. Un valor alto puede ser simplemente el reflejo de ese momento, no de tu nivel de estrés crónico.",
                },
                {
                  title: "El estrés crónico no siempre da cortisol alto",
                  text: "Contrario a lo que mucha gente cree, el estrés crónico prolongado puede estar asociado tanto a cortisol elevado como a cortisol bajo (por agotamiento suprarrenal). No hay una relación simple entre “más estrés = más cortisol” que se pueda medir con un análisis puntual.",
                },
                {
                  title: "No existe un valor de referencia para el \"estrés\"",
                  text: "Los rangos normales del cortisol están establecidos para detectar enfermedades específicas (síndrome de Cushing, insuficiencia suprarrenal), no para cuantificar el estrés psicológico. Un valor dentro del rango normal no significa \"no estás estresada\".",
                },
              ].map((item) => (
                <div key={item.title} className="p-5 rounded-2xl bg-malva-50 border border-malva-100">
                  <h3 className="font-semibold text-malva-900 text-sm">{item.title}</h3>
                  <p className="mt-2 text-sm text-texto-suave leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <h2 className="mt-10 font-[family-name:var(--font-display)] text-2xl text-malva-900">¿Cuándo sí tiene sentido pedir el cortisol?</h2>
            <p className="mt-4 text-base leading-relaxed text-texto-suave">
              El cortisol tiene mucho valor clínico cuando hay sospecha de patologías específicas de las glándulas suprarrenales. Estas son las situaciones en las que como endocrinóloga sí lo pido:
            </p>
            <ul className="mt-5 space-y-3 text-base text-texto-suave">
              {[
                { title: "Sospecha de síndrome de Cushing:", desc: "Cuando hay obesidad central, estrías violáceas en el abdomen, cara redondeada, hipertensión de difícil control, debilidad muscular o diabetes de instalación rápida. Aquí el cortisol está crónicamente elevado." },
                { title: "Sospecha de insuficiencia suprarrenal:", desc: "Cuando hay cansancio extremo, pérdida de peso sin causa aparente, presión arterial baja, náuseas, mareos o pigmentación anormal de la piel. Aquí el cortisol puede estar crónicamente bajo." },
                { title: "Seguimiento de tumores suprarrenales:", desc: "En pacientes con incidentalomas suprarrenales que requieren evaluación funcional." },
                { title: "Ciertos casos de hipertensión resistente:", desc: "Cuando el exceso de cortisol puede estar contribuyendo a una presión arterial difícil de controlar." },
              ].map((item) => (
                <li key={item.title} className="flex gap-2">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-dorado shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span><strong className="text-malva-900">{item.title}</strong> {item.desc}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-10 font-[family-name:var(--font-display)] text-2xl text-malva-900">¿Qué hacer si me siento muy estresada?</h2>
            <p className="mt-4 text-base leading-relaxed text-texto-suave">
              Si estás agotada, ansiosa, con problemas de sueño o con dificultad para manejar el estrés, lo que necesitas no es un cortisol en sangre. Lo que necesitas es:
            </p>
            <ul className="mt-4 space-y-2 text-base text-texto-suave">
              {[
                "Descartar condiciones médicas que causen estos síntomas (tiroides, anemia, glucosa, vitamina D)",
                "Evaluar tu estilo de vida: sueño, alimentación, actividad física",
                "Apoyo psicológico o psiquiátrico si el estrés es de origen emocional o laboral",
                "Consultar con el médico si los síntomas son persistentes e interfieren con tu calidad de vida",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-dorado shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-base leading-relaxed text-texto-suave">
              El cortisol es una herramienta diagnóstica poderosa, pero para lo que fue diseñada: detectar enfermedades de las glándulas suprarrenales. No es un medidor de estrés cotidiano, y interpretar un valor aislado fuera de contexto puede generar más confusión que claridad.
            </p>

            <div className="mt-10 p-6 rounded-3xl bg-malva-900 text-white">
              <p className="text-sm text-malva-200 uppercase tracking-[0.2em] font-semibold">Escrito por</p>
              <p className="mt-2 font-[family-name:var(--font-display)] text-xl">Dra. Jennifer Manrique</p>
              <p className="mt-1 text-sm text-malva-300">Especialista en Endocrinología · ULA · Barinas, Venezuela</p>
              <p className="mt-3 text-sm text-malva-200 leading-relaxed">
                Si tienes síntomas que te hacen sospechar una patología suprarrenal,
                la evaluación debe ser con un endocrinólogo para interpretar correctamente los resultados.
              </p>
              <Link
                href={CONTACT.whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-dorado text-white text-sm font-semibold hover:bg-dorado-dark transition-colors"
              >
                Agendar consulta
              </Link>
            </div>
          </div>

          {/* Más artículos */}
          <div className="container-page max-w-3xl mx-auto mt-16 pt-10 border-t border-malva-100">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-dorado">Seguir leyendo</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Link href="/blog/sop-solo-lo-trata-el-ginecologo" className="group p-5 rounded-2xl border border-malva-100 hover:border-dorado/40 hover:shadow-[0_8px_30px_rgba(138,114,145,0.12)] transition-all">
                <p className="text-xs text-texto-suave">Salud Hormonal</p>
                <p className="mt-1 text-sm font-semibold text-malva-900 group-hover:text-dorado-dark transition-colors leading-snug">¿El SOP solo lo trata el ginecólogo?</p>
              </Link>
              <Link href="/blog/menopausia-y-hormonas" className="group p-5 rounded-2xl border border-malva-100 hover:border-dorado/40 hover:shadow-[0_8px_30px_rgba(138,114,145,0.12)] transition-all">
                <p className="text-xs text-texto-suave">Salud Hormonal</p>
                <p className="mt-1 text-sm font-semibold text-malva-900 group-hover:text-dorado-dark transition-colors leading-snug">Menopausia: qué le pasa a tu cuerpo y cómo manejarlo</p>
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    </>
  );
}
