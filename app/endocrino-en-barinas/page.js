import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EndocrinoBarinasPage from "@/components/EndocrinoBarinasPage";
import { SITE_URL } from "@/lib/constants";

export const metadata = {
  title: "Endocrino en Barinas | Dra. Jennifer Manrique - Especialista en Endocrinología",
  description:
    "Busca endocrino en Barinas? La Dra. Jennifer Manrique es la endocrinóloga especialista de referencia en Barinas. Diabetes, obesidad, tiroides, SOP, Mounjaro, Ozempic. Cita por WhatsApp.",
  keywords: [
    "endocrino en Barinas",
    "endocrinólogo en Barinas",
    "endocrinóloga en Barinas",
    "mejor endocrinólogo Barinas",
    "médico endocrinólogo Barinas Venezuela",
    "especialista endocrino Barinas",
    "consulta endocrinólogo Barinas",
    "endocrino diabetes Barinas",
    "endocrino tiroides Barinas",
    "endocrino obesidad Barinas",
    "endocrino SOP Barinas",
    "Mounjaro Barinas endocrinologo",
    "Ozempic Barinas Venezuela",
    "Dra Jennifer Manrique endocrinóloga Barinas",
    "endocrinología Barinas Venezuela",
    "Hospital San Juan Barinas endocrinologo",
    "cita endocrinólogo Barinas WhatsApp",
  ],
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: `${SITE_URL}/endocrino-en-barinas`,
    title: "Endocrino en Barinas | Dra. Jennifer Manrique - Especialista",
    description:
      "La Dra. Jennifer Manrique es la endocrinóloga de referencia en Barinas. Diabetes, obesidad, tiroides, SOP y más. Agenda tu cita por WhatsApp.",
    images: [
      {
        url: `${SITE_URL}/images/dr-jennifer-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Endocrino en Barinas - Dra. Jennifer Manrique, Endocrinóloga",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Endocrino en Barinas | Dra. Jennifer Manrique",
    description:
      "La Dra. Jennifer Manrique es la endocrinóloga de referencia en Barinas. Diabetes, obesidad, tiroides, SOP y más.",
    images: [`${SITE_URL}/images/dr-jennifer-hero.jpg`],
  },
  alternates: {
    canonical: `${SITE_URL}/endocrino-en-barinas`,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quién es el endocrino en Barinas de referencia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La Dra. Jennifer Manrique es la endocrinóloga de referencia en Barinas. Egresada de la ULA con entrenamiento internacional en el CEMDI Bogota, atiende en el Hospital Privado San Juan, Consultorio 34, Piso 2.",
      },
    },
    {
      "@type": "Question",
      name: "Dónde queda el consultorio del endocrino en Barinas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El consultorio de la Dra. Jennifer Manrique esta en el Hospital Privado San Juan, Consultorio 34, Piso 2, Barinas. Atiende de lunes a viernes de 8:00 AM a 12:00 PM y de 2:00 PM a 6:00 PM, previa cita.",
      },
    },
    {
      "@type": "Question",
      name: "Cómo agendo cita con el endocrino en Barinas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La forma más rápida es por WhatsApp al 0412-9339730. También atiende pacientes de Santa Barbara de Barinas y otras ciudades de Venezuela con coordinación previa.",
      },
    },
    {
      "@type": "Question",
      name: "Qué enfermedades trata el endocrinólogo en Barinas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La Dra. Manrique trata diabetes tipo 1, 2 y gestacional, obesidad, hipotiroidismo, hipertiroidismo, nódulos tiroideos, síndrome de ovario poliquístico, menopausia, trastornos hormonales, infertilidad hormonal y talla baja en niños.",
      },
    },
    {
      "@type": "Question",
      name: "El endocrino en Barinas maneja Mounjaro y Ozempic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si. La Dra. Jennifer Manrique prescribe y hace seguimiento con Mounjaro (tirzepatida) y Ozempic (semaglutida), ambos disponibles en Venezuela, evaluando el perfil de cada paciente para garantizar resultados seguros.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Endocrino en Barinas",
      item: `${SITE_URL}/endocrino-en-barinas`,
    },
  ],
};

export default function EndocrinoBarinasRoute() {
  return (
    <>
      <Header />
      <main>
        <EndocrinoBarinasPage />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
