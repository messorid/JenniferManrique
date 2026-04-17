import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OzempicBarinaPage from "@/components/OzempicBarinaPage";
import { SITE_URL } from "@/lib/constants";

export const metadata = {
  title: "Ozempic en Barinas | Semaglutida Venezuela - Dra. Jennifer Manrique",
  description:
    "Ozempic (semaglutida) disponible en Barinas, Venezuela. La Dra. Jennifer Manrique, endocrinologa, prescribe y hace seguimiento para diabetes tipo 2 y manejo del peso. Cita por WhatsApp.",
  keywords: [
    "Ozempic en Barinas",
    "semaglutida Barinas",
    "Ozempic Venezuela",
    "semaglutida Venezuela",
    "Ozempic endocrinólogo Barinas",
    "Ozempic para bajar de peso Venezuela",
    "Ozempic diabetes Barinas",
    "dónde conseguir Ozempic Venezuela",
    "Ozempic precio Venezuela",
    "GLP-1 Barinas Venezuela",
    "Ozempic vs Mounjaro Venezuela",
    "Wegovy semaglutida Venezuela",
    "tratamiento obesidad Ozempic Barinas",
    "Dra Jennifer Manrique Ozempic",
  ],
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: `${SITE_URL}/ozempic-en-barinas`,
    title: "Ozempic en Barinas | Semaglutida Venezuela - Dra. Jennifer Manrique",
    description:
      "Ozempic disponible en Barinas. Prescripción y seguimiento con la Dra. Jennifer Manrique, endocrinóloga especialista en Venezuela.",
    images: [{ url: `${SITE_URL}/images/dr-jennifer-hero.jpg`, width: 1200, height: 630, alt: "Ozempic en Barinas - Dra. Jennifer Manrique" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ozempic en Barinas | Venezuela",
    description: "Ozempic (semaglutida) en Barinas. Prescripción y seguimiento con endocrinóloga especialista.",
    images: [`${SITE_URL}/images/dr-jennifer-hero.jpg`],
  },
  alternates: { canonical: `${SITE_URL}/ozempic-en-barinas` },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Ozempic esta disponible en Barinas Venezuela?",
      acceptedAnswer: { "@type": "Answer", text: "Si, Ozempic (semaglutida) esta disponible en Venezuela bajo prescripción médica. La Dra. Jennifer Manrique lo prescribe y hace seguimiento en Barinas." },
    },
    {
      "@type": "Question",
      name: "Para qué sirve Ozempic?",
      acceptedAnswer: { "@type": "Answer", text: "Ozempic esta aprobado para diabetes tipo 2 y se usa bajo supervisión médica para manejo del peso. Reduce el apetito, mejora el control glucémico y favorece la pérdida de peso sostenida." },
    },
    {
      "@type": "Question",
      name: "Cual es la diferencia entre Ozempic y Mounjaro?",
      acceptedAnswer: { "@type": "Answer", text: "Ozempic actua sobre el receptor GLP-1. Mounjaro actua sobre GLP-1 y GIP (doble acción), mostrando mayor eficacia en pérdida de peso. La eleccion depende del perfil de cada paciente." },
    },
    {
      "@type": "Question",
      name: "Cómo agendo cita para Ozempic en Barinas?",
      acceptedAnswer: { "@type": "Answer", text: "Por WhatsApp al 0412-9337390. La Dra. Manrique atiende en el Hospital Privado San Juan, Consultorio 34, Piso 2, Barinas, lunes a viernes previa cita." },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Ozempic en Barinas", item: `${SITE_URL}/ozempic-en-barinas` },
  ],
};

export default function OzempicBarinaRoute() {
  return (
    <>
      <Header />
      <main><OzempicBarinaPage /></main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
