import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MounjaroVenezuelaPage from "@/components/MounjaroVenezuelaPage";
import { SITE_URL } from "@/lib/constants";

export const metadata = {
  title: "Mounjaro en Venezuela | Tirzepatida disponible en Barinas - Dra. Jennifer Manrique",
  description:
    "Mounjaro (tirzepatida) disponible en Venezuela. La Dra. Jennifer Manrique, endocrinóloga en Barinas, prescribe y hace seguimiento con Mounjaro para obesidad y diabetes tipo 2. Agenda por WhatsApp.",
  keywords: [
    "Mounjaro en Venezuela",
    "tirzepatida Venezuela",
    "Mounjaro Barinas",
    "tirzepatida Barinas",
    "Mounjaro dónde conseguir Venezuela",
    "Mounjaro precio Venezuela",
    "Mounjaro endocrinólogo Venezuela",
    "tratamiento obesidad Mounjaro Venezuela",
    "Mounjaro diabetes Venezuela",
    "GLP-1 Venezuela Barinas",
    "tirzepatida endocrinólogo Barinas",
    "Mounjaro vs Ozempic Venezuela",
    "pérdida de peso Mounjaro Barinas",
    "Dra Jennifer Manrique Mounjaro",
  ],
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: `${SITE_URL}/mounjaro-en-venezuela`,
    title: "Mounjaro en Venezuela | Tirzepatida disponible en Barinas",
    description:
      "Mounjaro (tirzepatida) disponible en Venezuela. Prescripción y seguimiento con la Dra. Jennifer Manrique, endocrinóloga en Barinas.",
    images: [{ url: `${SITE_URL}/images/dr-jennifer-hero.jpg`, width: 1200, height: 630, alt: "Mounjaro en Venezuela - Dra. Jennifer Manrique Barinas" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mounjaro en Venezuela | Barinas",
    description: "Mounjaro (tirzepatida) disponible en Venezuela. Prescripción y seguimiento con la Dra. Jennifer Manrique en Barinas.",
    images: [`${SITE_URL}/images/dr-jennifer-hero.jpg`],
  },
  alternates: { canonical: `${SITE_URL}/mounjaro-en-venezuela` },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Mounjaro esta disponible en Venezuela?",
      acceptedAnswer: { "@type": "Answer", text: "Si, Mounjaro (tirzepatida) se consigue actualmente en Venezuela bajo prescripción médica. La Dra. Jennifer Manrique lo prescribe y hace seguimiento en Barinas." },
    },
    {
      "@type": "Question",
      name: "Cual es la diferencia entre Mounjaro y Ozempic?",
      acceptedAnswer: { "@type": "Answer", text: "Ozempic actua sobre GLP-1. Mounjaro actua sobre GLP-1 y GIP (doble acción), mostrando mayor eficacia en pérdida de peso en estudios comparativos directos." },
    },
    {
      "@type": "Question",
      name: "Cuánto peso se puede bajar con Mounjaro en Venezuela?",
      acceptedAnswer: { "@type": "Answer", text: "En estudios clinicos SURMOUNT, los pacientes perdieron entre 15% y 22% de su peso corporal. Los resultados individuales dependen de la dosis, el plan alimentario y el seguimiento médico." },
    },
    {
      "@type": "Question",
      name: "Cómo agendo consulta para Mounjaro en Barinas?",
      acceptedAnswer: { "@type": "Answer", text: "Por WhatsApp al 0412-9337390. La Dra. Manrique atiende en el Hospital Privado San Juan, Consultorio 34, Piso 2, Barinas, lunes a viernes previa cita." },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Mounjaro en Venezuela", item: `${SITE_URL}/mounjaro-en-venezuela` },
  ],
};

export default function MounjaroVenezuelaRoute() {
  return (
    <>
      <Header />
      <main><MounjaroVenezuelaPage /></main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
