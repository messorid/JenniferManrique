import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { SITE_URL, CONTACT } from "@/lib/constants";

export const metadata = {
  title: "¿El SOP solo lo trata el ginecólogo? | Blog - Dra. Jennifer Manrique",
  description:
    "El síndrome de ovario poliquístico tiene un componente hormonal y metabólico que el ginecólogo no siempre maneja. La endocrinóloga es clave para el diagnóstico y tratamiento completo del SOP.",
  keywords: [
    "SOP ginecólogo o endocrinólogo",
    "quién trata el SOP",
    "síndrome ovario poliquístico especialista",
    "SOP tratamiento Barinas",
    "endocrinóloga SOP Venezuela",
  ],
  openGraph: {
    type: "article",
    locale: "es_VE",
    url: `${SITE_URL}/blog/sop-solo-lo-trata-el-ginecologo`,
    title: "¿El SOP solo lo trata el ginecólogo?",
    description: "El SOP tiene un componente hormonal y metabólico fundamental que requiere la mirada del endocrinólogo.",
    images: [{ url: `${SITE_URL}/images/dr-jennifer-hero.jpg`, width: 1200, height: 630, alt: "Dra. Jennifer Manrique - SOP" }],
  },
  alternates: { canonical: `${SITE_URL}/blog/sop-solo-lo-trata-el-ginecologo` },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "¿El SOP solo lo trata el ginecólogo?",
  description: "El síndrome de ovario poliquístico tiene un componente hormonal y metabólico que requiere la mirada del endocrinólogo.",
  author: { "@type": "Person", name: "Dra. Jennifer Manrique", jobTitle: "Endocrinóloga" },
  publisher: { "@type": "Organization", name: "Dra. Jennifer Manrique - Endocrinóloga Barinas" },
  datePublished: "2026-04-21",
  url: `${SITE_URL}/blog/sop-solo-lo-trata-el-ginecologo`,
};

export default function ArticleSOP() {
  return (
    <>
      <Header />
      <main>
        <article className="pt-36 pb-20 md:pt-44 md:pb-28">
          {/* Hero del artículo */}
          <div className="relative overflow-hidden bg-gradient-to-b from-malva-50 via-white to-white pb-10">
            <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-malva-200/40 blur-3xl pointer-events-none" />
            <div className="container-page relative max-w-3xl mx-auto">
              <nav aria-label="Ruta de navegación" className="mb-6">
                <ol className="flex flex-wrap gap-x-2 text-xs text-texto-suave">
                  <li><Link href="/" className="hover:text-dorado transition-colors">Inicio</Link></li>
                  <li aria-hidden="true">/</li>
                  <li><Link href="/blog" className="hover:text-dorado transition-colors">Blog</Link></li>
                  <li aria-hidden="true">/</li>
                  <li className="text-malva-900 font-medium" aria-current="page">SOP: ¿solo ginecólogo?</li>
                </ol>
              </nav>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-malva-100 text-malva-800 text-xs font-semibold uppercase tracking-[0.2em]">
                <span className="w-1.5 h-1.5 rounded-full bg-dorado" />
                Salud Hormonal
              </span>
              <h1 className="mt-6 font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-malva-900">
                ¿El SOP solo lo trata el ginecólogo?
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
          <div className="container-page max-w-3xl mx-auto mt-10 prose prose-malva max-w-none">
            <p className="text-base md:text-lg leading-relaxed text-texto-suave">
              Es una pregunta que escucho constantemente en el consultorio. Una paciente lleva meses —a veces años— con ciclos irregulares, dificultad para bajar de peso, acné o vello en exceso, y cuando finalmente busca ayuda, va al ginecólogo. Le hacen una ecografía, le dicen que tiene &quot;ovarios poliquísticos&quot; y le recetan anticonceptivos.
            </p>
            <p className="mt-5 text-base leading-relaxed text-texto-suave">
              El anticonceptivo regula el ciclo, sí. Pero no trata el problema de fondo.
            </p>

            <h2 className="mt-10 font-[family-name:var(--font-display)] text-2xl text-malva-900">¿Qué es realmente el SOP?</h2>
            <p className="mt-4 text-base leading-relaxed text-texto-suave">
              El síndrome de ovario poliquístico (SOP) es el trastorno hormonal más frecuente en mujeres en edad reproductiva. Se diagnostica cuando están presentes al menos 2 de estos 3 criterios (Criterios de Rotterdam):
            </p>
            <ul className="mt-4 space-y-2 text-base text-texto-suave">
              <li className="flex gap-2"><span className="text-dorado font-bold shrink-0">1.</span> Ciclos irregulares u ovulación poco frecuente</li>
              <li className="flex gap-2"><span className="text-dorado font-bold shrink-0">2.</span> Exceso de andrógenos (testosterona alta, acné, hirsutismo)</li>
              <li className="flex gap-2"><span className="text-dorado font-bold shrink-0">3.</span> Apariencia poliquística en la ecografía ovárica</li>
            </ul>
            <p className="mt-5 text-base leading-relaxed text-texto-suave">
              Lo importante es entender que los &quot;quistes&quot; no son el problema principal, sino una consecuencia. La raíz del SOP es <strong>hormonal y metabólica</strong>.
            </p>

            <h2 className="mt-10 font-[family-name:var(--font-display)] text-2xl text-malva-900">¿Por qué el SOP necesita también al endocrinólogo?</h2>
            <p className="mt-4 text-base leading-relaxed text-texto-suave">
              El ginecólogo es fundamental para el manejo reproductivo del SOP: regularizar el ciclo, evaluar la anatomía pélvica y manejar la fertilidad con procedimientos. Pero el SOP tiene dimensiones que van más allá de lo ginecológico:
            </p>

            <div className="mt-6 space-y-5">
              {[
                {
                  title: "Resistencia a la insulina",
                  text: "Entre el 50% y el 70% de las mujeres con SOP tienen resistencia a la insulina, independientemente de su peso. Esto no solo dificulta bajar de peso: aumenta el riesgo de diabetes tipo 2 a largo plazo. El endocrinólogo evalúa y trata esta condición con fármacos como la metformina o ajustes de estilo de vida.",
                },
                {
                  title: "Alteraciones del metabolismo lipídico",
                  text: "El SOP frecuentemente se acompaña de colesterol alterado y triglicéridos elevados. Estos factores de riesgo cardiovascular deben ser evaluados y manejados.",
                },
                {
                  title: "Andrógenos elevados",
                  text: "El exceso de testosterona y DHEA-S no solo causa acné e hirsutismo: puede tener consecuencias metabólicas y cardiovasculares. El endocrinólogo puede identificar la fuente (ovárica o suprarrenal) y tratarla de forma específica.",
                },
                {
                  title: "Tiroides y prolactina",
                  text: "El hipotiroidismo y la hiperprolactinemia pueden imitar o empeorar el SOP. Antes de asumir que el diagnóstico es SOP, hay que descartar estas condiciones. Eso lo hace el endocrinólogo.",
                },
                {
                  title: "Fertilidad a largo plazo",
                  text: "Si una paciente con SOP quiere quedar embarazada, el endocrinólogo optimiza el ambiente hormonal y metabólico antes de la concepción. Muchas veces, corregir la resistencia a la insulina y regularizar la ovulación es suficiente sin necesidad de procedimientos más invasivos.",
                },
              ].map((item) => (
                <div key={item.title} className="p-5 rounded-2xl bg-malva-50 border border-malva-100">
                  <h3 className="font-semibold text-malva-900 text-sm">{item.title}</h3>
                  <p className="mt-2 text-sm text-texto-suave leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <h2 className="mt-10 font-[family-name:var(--font-display)] text-2xl text-malva-900">¿Ginecólogo, endocrinólogo o ambos?</h2>
            <p className="mt-4 text-base leading-relaxed text-texto-suave">
              La respuesta honesta es: <strong>ambos, de forma coordinada</strong>. El SOP es una condición compleja que se beneficia del trabajo conjunto. El ginecólogo maneja la parte reproductiva y el endocrinólogo la parte metabólica y hormonal.
            </p>
            <p className="mt-4 text-base leading-relaxed text-texto-suave">
              En la práctica, muchas pacientes llegan al endocrinólogo porque el anticonceptivo regula el ciclo pero no mejoran el peso, el acné, ni el cansancio. Eso es exactamente lo que el enfoque endocrinológico aborda.
            </p>

            <h2 className="mt-10 font-[family-name:var(--font-display)] text-2xl text-malva-900">¿Cuándo consultar con una endocrinóloga por SOP?</h2>
            <ul className="mt-4 space-y-2 text-base text-texto-suave">
              {[
                "Si tienes dificultad para bajar de peso a pesar de hacer dieta y ejercicio",
                "Si te cuesta quedar embarazada y tienes diagnóstico de SOP",
                "Si tienes acné o vello en exceso que no mejora solo con tratamiento dermatológico",
                "Si te diagnosticaron SOP pero nunca te han medido insulina, glucosa ni perfil lipídico",
                "Si tomas anticonceptivos hace años pero siguen los síntomas al suspenderlos",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-dorado shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 p-6 rounded-3xl bg-malva-900 text-white">
              <p className="text-sm text-malva-200 uppercase tracking-[0.2em] font-semibold">Escrito por</p>
              <p className="mt-2 font-[family-name:var(--font-display)] text-xl">Dra. Jennifer Manrique</p>
              <p className="mt-1 text-sm text-malva-300">Especialista en Endocrinología · ULA · Barinas, Venezuela</p>
              <p className="mt-3 text-sm text-malva-200 leading-relaxed">
                El SOP es una de las condiciones más frecuentes en mi consulta. El manejo correcto
                puede transformar la calidad de vida de una paciente a largo plazo.
              </p>
              <Link
                href={CONTACT.whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-dorado text-white text-sm font-semibold hover:bg-dorado-dark transition-colors"
              >
                Agendar consulta por SOP
              </Link>
            </div>
          </div>

          {/* Más artículos */}
          <div className="container-page max-w-3xl mx-auto mt-16 pt-10 border-t border-malva-100">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-dorado">Seguir leyendo</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Link href="/blog/menopausia-y-hormonas" className="group p-5 rounded-2xl border border-malva-100 hover:border-dorado/40 hover:shadow-[0_8px_30px_rgba(138,114,145,0.12)] transition-all">
                <p className="text-xs text-texto-suave">Salud Hormonal</p>
                <p className="mt-1 text-sm font-semibold text-malva-900 group-hover:text-dorado-dark transition-colors leading-snug">Menopausia: qué le pasa a tu cuerpo y cómo manejarlo</p>
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
