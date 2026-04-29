import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { SITE_URL, CONTACT } from "@/lib/constants";

export const metadata = {
  title: "Menopausia: cambios hormonales y cómo manejarlos | Blog - Dra. Jennifer Manrique",
  description:
    "La menopausia es una transición hormonal que afecta el metabolismo, los huesos, el corazón y el bienestar. Endocrinóloga especialista explica qué ocurre y qué opciones de manejo existen.",
  keywords: [
    "menopausia y hormonas",
    "menopausia endocrinóloga Venezuela",
    "menopausia metabolismo",
    "tratamiento menopausia Barinas",
    "síntomas menopausia hormonal",
    "perimenopausia Barinas",
  ],
  openGraph: {
    type: "article",
    locale: "es_VE",
    url: `${SITE_URL}/blog/menopausia-y-hormonas`,
    title: "Menopausia: qué le pasa a tu cuerpo y cómo manejar esos cambios",
    description: "La menopausia no es solo el fin del período. Es una transición hormonal compleja que afecta el metabolismo, los huesos, el corazón y el bienestar.",
    images: [{ url: `${SITE_URL}/images/dr-jennifer-hero.jpg`, width: 1200, height: 630, alt: "Menopausia Dra. Jennifer Manrique" }],
  },
  alternates: { canonical: `${SITE_URL}/blog/menopausia-y-hormonas` },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Menopausia: qué le pasa a tu cuerpo y cómo manejar esos cambios",
  description: "La menopausia es una transición hormonal compleja que afecta el metabolismo, los huesos, el corazón y el bienestar general.",
  author: { "@type": "Person", name: "Dra. Jennifer Manrique", jobTitle: "Endocrinóloga" },
  publisher: { "@type": "Organization", name: "Dra. Jennifer Manrique - Endocrinóloga Barinas" },
  datePublished: "2026-04-21",
  url: `${SITE_URL}/blog/menopausia-y-hormonas`,
};

export default function ArticuloMenuopausia() {
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
                  <li className="text-malva-900 font-medium" aria-current="page">Menopausia y hormonas</li>
                </ol>
              </nav>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-malva-100 text-malva-800 text-xs font-semibold uppercase tracking-[0.2em]">
                <span className="w-1.5 h-1.5 rounded-full bg-dorado" />
                Salud Hormonal
              </span>
              <h1 className="mt-6 font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-malva-900">
                Menopausia: qué le pasa a tu cuerpo y cómo manejar esos cambios
              </h1>
              <div className="mt-5 flex items-center gap-4 text-sm text-texto-suave">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-malva-300 to-malva-500 flex items-center justify-center text-white text-xs font-semibold">JM</div>
                  <span>Dra. Jennifer Manrique</span>
                </div>
                <span className="text-malva-200">·</span>
                <span>21 de abril de 2026</span>
                <span className="text-malva-200">·</span>
                <span>6 min de lectura</span>
              </div>
            </div>
          </div>

          {/* Contenido */}
          <div className="container-page max-w-3xl mx-auto mt-10">
            <p className="text-base md:text-lg leading-relaxed text-texto-suave">
              Muchas mujeres piensan que la menopausia es simplemente "dejar de menstruar". Y aunque eso es la definición médica —12 meses consecutivos sin período— lo que ocurre en el cuerpo va mucho más allá de ese dato.
            </p>
            <p className="mt-5 text-base leading-relaxed text-texto-suave">
              La menopausia es una de las transiciones hormonales más importantes en la vida de una mujer. Y entenderla bien puede marcar la diferencia entre vivirla con calidad o con sufrimiento innecesario.
            </p>

            <h2 className="mt-10 font-[family-name:var(--font-display)] text-2xl text-malva-900">¿Qué ocurre hormonalmente en la menopausia?</h2>
            <p className="mt-4 text-base leading-relaxed text-texto-suave">
              Los ovarios van disminuyendo progresivamente la producción de estrógenos y progesterona. Este descenso hormonal comienza años antes de la última menstruación —en la perimenopausia— y es responsable de la mayoría de los síntomas.
            </p>
            <p className="mt-4 text-base leading-relaxed text-texto-suave">
              El estrógeno no solo regula el ciclo menstrual: tiene receptores en prácticamente todos los tejidos del cuerpo. Por eso su caída afecta tantos sistemas a la vez.
            </p>

            <h2 className="mt-10 font-[family-name:var(--font-display)] text-2xl text-malva-900">¿Qué síntomas produce la menopausia?</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                { cat: "Síntomas vasomotores", items: ["Sofocos o calores", "Sudoración nocturna", "Palpitaciones"] },
                { cat: "Sistema nervioso", items: ["Insomnio", "Irritabilidad", "Dificultad de concentración", "Cambios de humor"] },
                { cat: "Metabolismo", items: ["Aumento de peso (especialmente abdominal)", "Colesterol alterado", "Mayor riesgo de resistencia a la insulina"] },
                { cat: "Huesos y articulaciones", items: ["Disminución de la densidad ósea", "Mayor riesgo de osteoporosis", "Dolores articulares"] },
                { cat: "Salud urogenital", items: ["Sequedad vaginal", "Molestias en las relaciones", "Infecciones urinarias recurrentes"] },
                { cat: "Piel y cabello", items: ["Piel más seca y fina", "Cabello más débil", "Cambios en la elasticidad"] },
              ].map((group) => (
                <div key={group.cat} className="p-5 rounded-2xl bg-malva-50 border border-malva-100">
                  <h3 className="font-semibold text-malva-900 text-sm">{group.cat}</h3>
                  <ul className="mt-3 space-y-1">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-texto-suave">
                        <span className="text-dorado shrink-0">·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h2 className="mt-10 font-[family-name:var(--font-display)] text-2xl text-malva-900">¿Por qué la endocrinóloga maneja la menopausia?</h2>
            <p className="mt-4 text-base leading-relaxed text-texto-suave">
              El enfoque endocrinológico de la menopausia va más allá de los síntomas inmediatos. Lo que me preocupa como endocrinóloga es el impacto metabólico a largo plazo:
            </p>
            <div className="mt-5 space-y-4">
              {[
                {
                  title: "Riesgo cardiovascular",
                  text: "El estrógeno tiene un efecto protector sobre el sistema cardiovascular. Al caer, aumenta el riesgo de enfermedad cardíaca, hipertensión y alteraciones lipídicas. Evaluar y manejar este riesgo es fundamental.",
                },
                {
                  title: "Osteoporosis",
                  text: "La pérdida de masa ósea se acelera en los primeros años de la menopausia. Evalúo el riesgo de cada paciente y tomo medidas preventivas oportunas antes de que ocurran fracturas.",
                },
                {
                  title: "Resistencia a la insulina y diabetes",
                  text: "La caída del estrógeno promueve la acumulación de grasa abdominal y la resistencia a la insulina. El riesgo de diabetes tipo 2 aumenta significativamente en esta etapa.",
                },
                {
                  title: "Tiroides",
                  text: "La disfunción tiroidea es frecuente en mujeres perimenopáusicas y sus síntomas se superponen con los de la menopausia. Es importante descartar hipotiroidismo antes de atribuir todo a la menopausia.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-5 rounded-2xl border border-malva-100">
                  <div className="w-8 h-8 rounded-xl bg-dorado/15 flex items-center justify-center shrink-0 mt-0.5">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-dorado-dark" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-malva-900 text-sm">{item.title}</h3>
                    <p className="mt-1.5 text-sm text-texto-suave leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="mt-10 font-[family-name:var(--font-display)] text-2xl text-malva-900">¿Qué opciones de tratamiento existen?</h2>
            <p className="mt-4 text-base leading-relaxed text-texto-suave">
              El manejo de la menopausia es individualizado. No hay una sola respuesta correcta para todas las mujeres. Las opciones incluyen:
            </p>
            <ul className="mt-5 space-y-3 text-base text-texto-suave">
              {[
                { title: "Terapia hormonal de la menopausia (THM):", desc: "En mujeres sin contraindicaciones, puede aliviar los síntomas vasomotores, proteger los huesos y mejorar la calidad de vida. Se evalúa el perfil de riesgo individual antes de indicarla." },
                { title: "Tratamiento no hormonal:", desc: "Para mujeres con contraindicaciones o que prefieren no usar hormonas. Incluye opciones farmacológicas para sofocos, y medidas para el hueso y el metabolismo." },
                { title: "Cambios de estilo de vida:", desc: "Alimentación, actividad física regular y control del peso son fundamentales en esta etapa. Protegen el hueso, el corazón y el metabolismo." },
                { title: "Suplementación:", desc: "Calcio, vitamina D y otros micronutrientes según el perfil de cada paciente." },
              ].map((item) => (
                <li key={item.title} className="flex gap-2">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-dorado shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span><strong className="text-malva-900">{item.title}</strong> {item.desc}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-base leading-relaxed text-texto-suave">
              La menopausia no tiene por qué ser una época de deterioro. Con el seguimiento adecuado y las medidas correctas, es posible mantener una calidad de vida óptima y reducir los riesgos a largo plazo.
            </p>

            <div className="mt-10 p-6 rounded-3xl bg-malva-900 text-white">
              <p className="text-sm text-malva-200 uppercase tracking-[0.2em] font-semibold">Escrito por</p>
              <p className="mt-2 font-[family-name:var(--font-display)] text-xl">Dra. Jennifer Manrique</p>
              <p className="mt-1 text-sm text-malva-300">Especialista en Endocrinología · ULA · Barinas, Venezuela</p>
              <p className="mt-3 text-sm text-malva-200 leading-relaxed">
                El manejo de la menopausia desde la endocrinología permite atender no solo los síntomas
                inmediatos, sino proteger la salud metabólica y ósea a largo plazo.
              </p>
              <Link
                href={CONTACT.whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-dorado text-white text-sm font-semibold hover:bg-dorado-dark transition-colors"
              >
                Agendar consulta de menopausia
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
              <Link href="/blog/cortisol-y-estres" className="group p-5 rounded-2xl border border-malva-100 hover:border-dorado/40 hover:shadow-[0_8px_30px_rgba(138,114,145,0.12)] transition-all">
                <p className="text-xs text-texto-suave">Endocrinología</p>
                <p className="mt-1 text-sm font-semibold text-malva-900 group-hover:text-dorado-dark transition-colors leading-snug">¿Tiene sentido pedir un cortisol para medir el estrés?</p>
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
