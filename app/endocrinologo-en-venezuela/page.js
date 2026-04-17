import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EndocrinologoVenezuelaPage from "@/components/EndocrinologoVenezuelaPage";
import { SITE_URL } from "@/lib/constants";

export const metadata = {
  title: "Endocrinólogo en Venezuela | Dra. Jennifer Manrique - Especialista",
  description:
    "Endocrinólogo en Venezuela. La Dra. Jennifer Manrique atiende desde Barinas a pacientes de toda Venezuela. Diabetes, obesidad, tiroides, SOP, Mounjaro, Ozempic. Cita por WhatsApp.",
  keywords: [
    "endocrinólogo en Venezuela",
    "endocrinóloga en Venezuela",
    "mejor endocrinólogo Venezuela",
    "endocrinólogo Venezuela online",
    "especialista endocrino Venezuela",
    "endocrinólogo diabetes Venezuela",
    "endocrinólogo tiroides Venezuela",
    "endocrinólogo obesidad Venezuela",
    "Mounjaro Venezuela endocrinologo",
    "Ozempic Venezuela endocrinologo",
    "endocrinólogo SOP Venezuela",
    "Dra Jennifer Manrique endocrinóloga Venezuela",
    "endocrinología Venezuela Barinas",
    "consulta endocrinólogo Venezuela WhatsApp",
    "endocrinólogo Venezuela cita",
  ],
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: `${SITE_URL}/endocrinologo-en-venezuela`,
    title: "Endocrinólogo en Venezuela | Dra. Jennifer Manrique",
    description:
      "La Dra. Jennifer Manrique atiende pacientes de toda Venezuela. Diabetes, obesidad, tiroides, SOP, Mounjaro y Ozempic. Cita por WhatsApp.",
    images: [{ url: `${SITE_URL}/images/dr-jennifer-hero.jpg`, width: 1200, height: 630, alt: "Endocrinólogo en Venezuela - Dra. Jennifer Manrique" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Endocrinólogo en Venezuela | Dra. Jennifer Manrique",
    description: "Endocrinóloga especialista con atención para pacientes de toda Venezuela. Barinas.",
    images: [`${SITE_URL}/images/dr-jennifer-hero.jpg`],
  },
  alternates: { canonical: `${SITE_URL}/endocrinologo-en-venezuela` },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quién es la mejor endocrinóloga en Venezuela?",
      acceptedAnswer: { "@type": "Answer", text: "La Dra. Jennifer Manrique es una de las endocrinologas de mayor referencia en Venezuela. Egresada de la ULA con entrenamiento internacional en el CEMDI Bogota, atiende en Barinas y coordina consultas para pacientes de todo el pais." },
    },
    {
      "@type": "Question",
      name: "Se puede consultar al endocrinólogo en Venezuela por WhatsApp?",
      acceptedAnswer: { "@type": "Answer", text: "Si. La Dra. Manrique coordina citas para pacientes de toda Venezuela por WhatsApp al 0412-9337390." },
    },
    {
      "@type": "Question",
      name: "El endocrinólogo en Venezuela maneja Mounjaro y Ozempic?",
      acceptedAnswer: { "@type": "Answer", text: "Si. La Dra. Jennifer Manrique prescribe Mounjaro (tirzepatida) y Ozempic (semaglutida), ambos disponibles en Venezuela bajo prescripción médica." },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Endocrinólogo en Venezuela", item: `${SITE_URL}/endocrinologo-en-venezuela` },
  ],
};

export default function EndocrinólogoVenezuelaRoute() {
  return (
    <>
      <Header />
      <main><EndocrinologoVenezuelaPage /></main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
