import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DiabetesBarinasPage from "@/components/DiabetasBarinasPage";
import { SITE_URL } from "@/lib/constants";

export const metadata = {
  title: "Diabetes en Barinas | Dra. Jennifer Manrique - Endocrinóloga Especialista",
  description:
    "Tratamiento de diabetes en Barinas. La Dra. Jennifer Manrique maneja diabetes tipo 1, tipo 2 y gestacional con monitores de glucosa, Ozempic y Mounjaro. Cita por WhatsApp.",
  keywords: [
    "diabetes en Barinas",
    "tratamiento diabetes Barinas",
    "médico diabetes Barinas",
    "endocrinólogo diabetes Barinas",
    "diabetes tipo 2 Barinas",
    "diabetes tipo 1 Barinas",
    "control diabetes Barinas Venezuela",
    "monitor glucosa Barinas",
    "hemoglobina glicosilada Barinas",
    "Ozempic diabetes Barinas",
    "Mounjaro diabetes Barinas",
    "resistencia insulina Barinas",
    "prediabetes Barinas",
    "Dra Jennifer Manrique diabetes",
    "endocrinología diabetes Venezuela Barinas",
  ],
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: `${SITE_URL}/diabetes-en-barinas`,
    title: "Diabetes en Barinas | Dra. Jennifer Manrique - Endocrinóloga",
    description:
      "Endocrinóloga especialista en diabetes en Barinas. Tipo 1, tipo 2, gestacional. Monitores de glucosa, Ozempic y Mounjaro disponibles.",
    images: [{ url: `${SITE_URL}/images/dr-jennifer-hero.jpg`, width: 1200, height: 630, alt: "Tratamiento diabetes en Barinas - Dra. Jennifer Manrique" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diabetes en Barinas | Dra. Jennifer Manrique",
    description: "Especialista en diabetes en Barinas. Tipo 1, 2 y gestacional. Monitores CGM, Ozempic, Mounjaro.",
    images: [`${SITE_URL}/images/dr-jennifer-hero.jpg`],
  },
  alternates: { canonical: `${SITE_URL}/diabetes-en-barinas` },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Dónde trato la diabetes en Barinas?",
      acceptedAnswer: { "@type": "Answer", text: "La Dra. Jennifer Manrique es la endocrinóloga especialista en diabetes en Barinas. Atiende en el Hospital Privado San Juan, Consultorio 34, Piso 2. Agenda tu cita por WhatsApp al 0412-9339730." },
    },
    {
      "@type": "Question",
      name: "Qué tipos de diabetes trata el endocrinólogo en Barinas?",
      acceptedAnswer: { "@type": "Answer", text: "La Dra. Manrique trata diabetes tipo 1, tipo 2 y gestacional. También resistencia a la insulina y prediabetes, con tratamientos actualizados que incluyen monitores continuos de glucosa, Ozempic y Mounjaro." },
    },
    {
      "@type": "Question",
      name: "El monitor continuo de glucosa está disponible en Barinas?",
      acceptedAnswer: { "@type": "Answer", text: "Sí. La Dra. Jennifer Manrique trabaja con monitores continuos de glucosa (CGM) en Barinas, que miden la glucosa en tiempo real sin necesidad de pinchazos frecuentes." },
    },
    {
      "@type": "Question",
      name: "Ozempic y Mounjaro sirven para la diabetes?",
      acceptedAnswer: { "@type": "Answer", text: "Sí. Ozempic (semaglutida) y Mounjaro (tirzepatida) son terapias GLP-1 aprobadas para diabetes tipo 2. Mejoran el control glucémico y producen pérdida de peso. La Dra. Manrique los prescribe y hace seguimiento en Barinas." },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Diabetes en Barinas", item: `${SITE_URL}/diabetes-en-barinas` },
  ],
};

export default function DiabetesBarinasRoute() {
  return (
    <>
      <Header />
      <main><DiabetesBarinasPage /></main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
