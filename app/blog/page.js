import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog";
import { SITE_URL, CONTACT } from "@/lib/constants";

export const metadata = {
  title: "Blog | Endocrinología y Salud Hormonal - Dra. Jennifer Manrique",
  description:
    "Artículos sobre endocrinología, diabetes, tiroides, SOP, menopausia y salud hormonal escritos por la Dra. Jennifer Manrique, endocrinóloga especialista en Barinas.",
  keywords: [
    "blog endocrinología Venezuela",
    "artículos diabetes Barinas",
    "SOP información",
    "menopausia hormonal",
    "salud hormonal Venezuela",
    "tiroides blog",
    "Dra Jennifer Manrique blog",
  ],
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: `${SITE_URL}/blog`,
    title: "Blog de Endocrinología | Dra. Jennifer Manrique",
    description:
      "Información confiable sobre diabetes, tiroides, SOP, obesidad y salud hormonal por endocrinóloga especialista.",
    images: [{ url: `${SITE_URL}/images/dr-jennifer-hero.jpg`, width: 1200, height: 630, alt: "Blog Dra. Jennifer Manrique" }],
  },
  alternates: { canonical: `${SITE_URL}/blog` },
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-gradient-to-b from-malva-50 via-white to-white">
          <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-malva-200/40 blur-3xl pointer-events-none" />
          <div className="container-page relative max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-malva-100 text-malva-800 text-xs font-semibold uppercase tracking-[0.2em]">
              <span className="w-1.5 h-1.5 rounded-full bg-dorado" />
              Información confiable
            </span>
            <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-malva-900">
              Blog de{" "}
              <span className="text-dorado">Endocrinología</span>
            </h1>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-texto-suave">
              Artículos sobre diabetes, tiroides, SOP, obesidad, menopausia y salud
              hormonal escritos por la Dra. Jennifer Manrique, endocrinóloga
              especialista en Barinas.
            </p>
          </div>
        </section>

        {/* Lista de artículos */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-page max-w-4xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {BLOG_POSTS.map((post) => (
                <article
                  key={post.slug}
                  className="group flex flex-col rounded-3xl border border-malva-100 bg-white shadow-[0_4px_20px_rgba(44,37,48,0.04)] hover:shadow-[0_20px_50px_rgba(138,114,145,0.15)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-dorado">
                        {post.category}
                      </span>
                      <span className="text-malva-200">·</span>
                      <span className="text-xs text-texto-suave">{post.readTime}</span>
                    </div>
                    <h2 className="font-[family-name:var(--font-display)] text-lg text-malva-900 leading-snug group-hover:text-dorado-dark transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-sm text-texto-suave leading-relaxed flex-1">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-malva-700 hover:text-dorado-dark transition-colors"
                    >
                      Leer artículo
                      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                  </div>
                  <div className="px-7 pb-5 pt-4 border-t border-malva-100 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-malva-300 to-malva-500 flex items-center justify-center text-white text-xs font-semibold shrink-0">
                      JM
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-malva-900">Dra. Jennifer Manrique</p>
                      <p className="text-xs text-texto-suave">
                        {new Date(post.date).toLocaleDateString("es-VE", { year: "numeric", month: "long", day: "numeric" })}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-malva-50">
          <div className="container-page max-w-2xl mx-auto text-center">
            <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl text-malva-900">
              ¿Tienes preguntas sobre tu salud hormonal?
            </h2>
            <p className="mt-4 text-base text-texto-suave">
              La información del blog orienta, pero no reemplaza la consulta médica.
              Agenda tu cita con la Dra. Manrique para una evaluación personalizada.
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
              Agendar consulta por WhatsApp
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
