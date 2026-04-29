import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ObesidadBarinasPage from "@/components/ObesidadBarinasPage";
import { SITE_URL } from "@/lib/constants";

export const metadata = {
  title: "Obesidad en Barinas | Dra. Jennifer Manrique - Endocrinóloga Especialista",
  description:
    "Tratamiento médico de obesidad en Barinas. La Dra. Jennifer Manrique evalúa causas hormonales del sobrepeso y prescribe Ozempic y Mounjaro con seguimiento especializado.",
  keywords: [
    "obesidad en Barinas",
    "tratamiento obesidad Barinas",
    "médico obesidad Barinas",
    "endocrinólogo obesidad Barinas",
    "pérdida de peso Barinas",
    "Ozempic Barinas",
    "Mounjaro Barinas",
    "GLP-1 Barinas",
    "bajar de peso Barinas médico",
    "resistencia insulina Barinas",
    "causas hormonales sobrepeso Barinas",
    "control metabólico Barinas",
    "Dra Jennifer Manrique obesidad",
    "endocrinología peso Venezuela Barinas",
    "tirzepatida Barinas",
  ],
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: `${SITE_URL}/obesidad-en-barinas`,
    title: "Obesidad en Barinas | Dra. Jennifer Manrique - Endocrinóloga",
    description:
      "Tratamiento médico de obesidad en Barinas. Evaluación hormonal, Ozempic, Mounjaro y plan personalizado con seguimiento especializado.",
    images: [{ url: `${SITE_URL}/images/dr-jennifer-hero.jpg`, width: 1200, height: 630, alt: "Tratamiento obesidad en Barinas - Dra. Jennifer Manrique" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Obesidad en Barinas | Dra. Jennifer Manrique",
    description: "Endocrinóloga especialista en obesidad en Barinas. Ozempic, Mounjaro y tratamiento hormonal personalizado.",
    images: [`${SITE_URL}/images/dr-jennifer-hero.jpg`],
  },
  alternates: { canonical: `${SITE_URL}/obesidad-en-barinas` },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Dónde trato la obesidad en Barinas?",
      acceptedAnswer: { "@type": "Answer", text: "La Dra. Jennifer Manrique es la endocrinóloga especialista en obesidad en Barinas. Atiende en el Hospital Privado San Juan, Consultorio 34, Piso 2. Agenda tu cita por WhatsApp al 0412-9339730." },
    },
    {
      "@type": "Question",
      name: "Ozempic y Mounjaro están disponibles en Barinas?",
      acceptedAnswer: { "@type": "Answer", text: "Sí. La Dra. Jennifer Manrique prescribe y hace seguimiento con Ozempic (semaglutida) y Mounjaro (tirzepatida) en Barinas. Ambos requieren evaluación previa y prescripción médica." },
    },
    {
      "@type": "Question",
      name: "El endocrinólogo trata la obesidad o necesito otro especialista?",
      acceptedAnswer: { "@type": "Answer", text: "El endocrinólogo es el especialista indicado, ya que evalúa las causas hormonales y metabólicas del sobrepeso. La Dra. Manrique maneja el tratamiento médico completo para la obesidad en Barinas." },
    },
    {
      "@type": "Question",
      name: "Cuánto peso se pierde con Mounjaro u Ozempic?",
      acceptedAnswer: { "@type": "Answer", text: "Los estudios muestran pérdida de 15-22% del peso con tirzepatida (Mounjaro) y 10-15% con semaglutida (Ozempic), bajo supervisión médica. Los resultados varían según cada paciente y el plan de tratamiento." },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Obesidad en Barinas", item: `${SITE_URL}/obesidad-en-barinas` },
  ],
};

export default function ObesidadBarinasRoute() {
  return (
    <>
      <Header />
      <main><ObesidadBarinasPage /></main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
