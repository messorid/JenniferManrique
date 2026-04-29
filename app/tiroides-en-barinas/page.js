import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TiroidesBarinasPage from "@/components/TiroidesBarinasPage";
import { SITE_URL } from "@/lib/constants";

export const metadata = {
  title: "Tiroides en Barinas | Dra. Jennifer Manrique - Endocrinóloga Especialista",
  description:
    "Tratamiento del tiroides en Barinas. La Dra. Jennifer Manrique atiende hipotiroidismo, hipertiroidismo, nódulos tiroideos, ecografía y punción PAAF. Cita por WhatsApp.",
  keywords: [
    "tiroides en Barinas",
    "hipotiroidismo Barinas",
    "hipertiroidismo Barinas",
    "médico tiroides Barinas",
    "endocrinólogo tiroides Barinas",
    "nódulos tiroideos Barinas",
    "ecografía tiroidea Barinas",
    "PAAF tiroides Barinas",
    "Hashimoto Barinas",
    "TSH T4 Barinas",
    "levotiroxina ajuste Barinas",
    "bocio Barinas",
    "Graves Basedow Barinas",
    "Dra Jennifer Manrique tiroides",
    "endocrinología tiroides Venezuela Barinas",
  ],
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: `${SITE_URL}/tiroides-en-barinas`,
    title: "Tiroides en Barinas | Dra. Jennifer Manrique - Endocrinóloga",
    description:
      "Endocrinóloga especialista en tiroides en Barinas. Hipotiroidismo, hipertiroidismo, nódulos, ecografía y PAAF disponibles en el Hospital San Juan.",
    images: [{ url: `${SITE_URL}/images/dr-jennifer-hero.jpg`, width: 1200, height: 630, alt: "Tratamiento tiroides en Barinas - Dra. Jennifer Manrique" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiroides en Barinas | Dra. Jennifer Manrique",
    description: "Especialista en tiroides en Barinas. Hipotiroidismo, hipertiroidismo, nódulos, ecografía tiroidea y PAAF.",
    images: [`${SITE_URL}/images/dr-jennifer-hero.jpg`],
  },
  alternates: { canonical: `${SITE_URL}/tiroides-en-barinas` },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Dónde trato el tiroides en Barinas?",
      acceptedAnswer: { "@type": "Answer", text: "La Dra. Jennifer Manrique es la endocrinóloga especialista en patologías tiroideas en Barinas. Atiende en el Hospital Privado San Juan, Consultorio 34, Piso 2. Agenda tu cita por WhatsApp al 0412-9339730." },
    },
    {
      "@type": "Question",
      name: "Cuáles son los síntomas del hipotiroidismo?",
      acceptedAnswer: { "@type": "Answer", text: "Cansancio, aumento de peso, frío excesivo, caída del cabello, piel seca, estreñimiento y ciclos menstruales irregulares. Si tienes varios de estos síntomas, un perfil tiroideo puede confirmar el diagnóstico." },
    },
    {
      "@type": "Question",
      name: "Un nódulo tiroideo es peligroso?",
      acceptedAnswer: { "@type": "Answer", text: "La mayoría de los nódulos tiroideos son benignos. La ecografía y la clasificación TIRADS permiten decidir si requieren punción (PAAF) o solo seguimiento. La Dra. Manrique realiza este proceso completo en Barinas." },
    },
    {
      "@type": "Question",
      name: "Qué estudios necesito para el tiroides?",
      acceptedAnswer: { "@type": "Answer", text: "El perfil tiroideo incluye TSH, T4 libre y, en algunos casos, T3 libre y anticuerpos (anti-TPO). Si hay nódulos o bocio, también se solicita ecografía tiroidea. La Dra. Manrique indica los estudios necesarios en la primera consulta." },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Tiroides en Barinas", item: `${SITE_URL}/tiroides-en-barinas` },
  ],
};

export default function TiroidesBarinasRoute() {
  return (
    <>
      <Header />
      <main><TiroidesBarinasPage /></main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
