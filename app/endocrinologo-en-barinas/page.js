import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EndocrinologoBarinasPage from "@/components/EndocrinologoBarinasPage";
import { SITE_URL } from "@/lib/constants";

export const metadata = {
  title: "Endocrinologo en Barinas | Dra. Jennifer Manrique - Especialista",
  description:
    "Buscas endocrinologo en Barinas? La Dra. Jennifer Manrique es la especialista de referencia. Diabetes, obesidad, tiroides, SOP, Mounjaro, Ozempic. Hospital San Juan. Cita por WhatsApp.",
  keywords: [
    "endocrinologo en Barinas",
    "endocrinologa en Barinas",
    "mejor endocrinologo Barinas",
    "endocrinologo Barinas Venezuela",
    "especialista endocrinologo Barinas",
    "medico endocrinologo Barinas",
    "endocrinologo diabetes Barinas",
    "endocrinologo tiroides Barinas",
    "endocrinologo obesidad Barinas",
    "endocrinologo SOP Barinas",
    "Dra Jennifer Manrique endocrinologa",
    "Hospital San Juan Barinas endocrinologo",
    "cita endocrinologo Barinas",
    "endocrinologo Venezuela Barinas",
    "endocrinologia Barinas consultorio",
  ],
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: `${SITE_URL}/endocrinologo-en-barinas`,
    title: "Endocrinologo en Barinas | Dra. Jennifer Manrique - Especialista",
    description:
      "La Dra. Jennifer Manrique es la endocrinologa especialista de referencia en Barinas. Diabetes, obesidad, tiroides, SOP y mas.",
    images: [{ url: `${SITE_URL}/images/dr-jennifer-hero.jpg`, width: 1200, height: 630, alt: "Endocrinologo en Barinas - Dra. Jennifer Manrique" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Endocrinologo en Barinas | Dra. Jennifer Manrique",
    description: "La endocrinologa de referencia en Barinas. Diabetes, obesidad, tiroides, SOP, Mounjaro y Ozempic.",
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
      name: "Donde esta el endocrinologo en Barinas?",
      acceptedAnswer: { "@type": "Answer", text: "La Dra. Jennifer Manrique atiende en el Hospital Privado San Juan, Consultorio 34, Piso 2, Barinas. Es la endocrinologa de referencia en la ciudad." },
    },
    {
      "@type": "Question",
      name: "Como saco cita con el endocrinologo en Barinas?",
      acceptedAnswer: { "@type": "Answer", text: "Por WhatsApp al 0412-9337390. Atiende lunes a viernes de 8:00 AM a 12:00 PM y 2:00 PM a 6:00 PM previa cita." },
    },
    {
      "@type": "Question",
      name: "Que trata el endocrinologo en Barinas?",
      acceptedAnswer: { "@type": "Answer", text: "Diabetes tipo 1, 2 y gestacional, obesidad, hipotiroidismo, hipertiroidismo, nodulos tiroideos, sindrome de ovario poliquistico, menopausia, infertilidad hormonal y talla baja en ninos." },
    },
    {
      "@type": "Question",
      name: "El endocrinologo en Barinas maneja Mounjaro y Ozempic?",
      acceptedAnswer: { "@type": "Answer", text: "Si. La Dra. Jennifer Manrique prescribe y hace seguimiento con Mounjaro (tirzepatida) y Ozempic (semaglutida), ambos disponibles en Venezuela." },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Endocrinologo en Barinas", item: `${SITE_URL}/endocrinologo-en-barinas` },
  ],
};

export default function EndocrinologoBarinasRoute() {
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
