import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EndocrinologoBarinasPage from "@/components/EndocrinologoBarinasPage";
import { SITE_URL } from "@/lib/constants";

export const metadata = {
  title: "Endocrinólogo en Barinas | Dra. Jennifer Manrique - Especialista",
  description:
    "Buscas endocrinólogo en Barinas? La Dra. Jennifer Manrique es la especialista de referencia. Diabetes, obesidad, tiroides, SOP, Mounjaro, Ozempic. Hospital San Juan. Cita por WhatsApp.",
  keywords: [
    "endocrinólogo en Barinas",
    "endocrinóloga en Barinas",
    "mejor endocrinólogo Barinas",
    "endocrinólogo Barinas Venezuela",
    "especialista endocrinólogo Barinas",
    "médico endocrinólogo Barinas",
    "endocrinólogo diabetes Barinas",
    "endocrinólogo tiroides Barinas",
    "endocrinólogo obesidad Barinas",
    "endocrinólogo SOP Barinas",
    "Dra Jennifer Manrique endocrinologa",
    "Hospital San Juan Barinas endocrinologo",
    "cita endocrinólogo Barinas",
    "endocrinólogo Venezuela Barinas",
    "endocrinología Barinas consultorio",
  ],
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: `${SITE_URL}/endocrinologo-en-barinas`,
    title: "Endocrinólogo en Barinas | Dra. Jennifer Manrique - Especialista",
    description:
      "La Dra. Jennifer Manrique es la endocrinóloga especialista de referencia en Barinas. Diabetes, obesidad, tiroides, SOP y más.",
    images: [{ url: `${SITE_URL}/images/dr-jennifer-hero.jpg`, width: 1200, height: 630, alt: "Endocrinólogo en Barinas - Dra. Jennifer Manrique" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Endocrinólogo en Barinas | Dra. Jennifer Manrique",
    description: "La endocrinóloga de referencia en Barinas. Diabetes, obesidad, tiroides, SOP, Mounjaro y Ozempic.",
    images: [`${SITE_URL}/images/dr-jennifer-hero.jpg`],
  },
  alternates: { canonical: `${SITE_URL}/endocrinologo-en-barinas` },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Dónde esta el endocrinólogo en Barinas?",
      acceptedAnswer: { "@type": "Answer", text: "La Dra. Jennifer Manrique atiende en el Hospital Privado San Juan, Consultorio 34, Piso 2, Barinas. Es la endocrinóloga de referencia en la ciudad." },
    },
    {
      "@type": "Question",
      name: "Cómo saco cita con el endocrinólogo en Barinas?",
      acceptedAnswer: { "@type": "Answer", text: "Por WhatsApp al 0412-9337390. Atiende lunes a viernes de 8:00 AM a 12:00 PM y 2:00 PM a 6:00 PM previa cita." },
    },
    {
      "@type": "Question",
      name: "Qué trata el endocrinólogo en Barinas?",
      acceptedAnswer: { "@type": "Answer", text: "Diabetes tipo 1, 2 y gestacional, obesidad, hipotiroidismo, hipertiroidismo, nódulos tiroideos, síndrome de ovario poliquístico, menopausia, infertilidad hormonal y talla baja en niños." },
    },
    {
      "@type": "Question",
      name: "El endocrinólogo en Barinas maneja Mounjaro y Ozempic?",
      acceptedAnswer: { "@type": "Answer", text: "Si. La Dra. Jennifer Manrique prescribe y hace seguimiento con Mounjaro (tirzepatida) y Ozempic (semaglutida), ambos disponibles en Venezuela." },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Endocrinólogo en Barinas", item: `${SITE_URL}/endocrinologo-en-barinas` },
  ],
};

export default function EndocrinólogoBarinasRoute() {
  return (
    <>
      <Header />
      <main><EndocrinologoBarinasPage /></main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
