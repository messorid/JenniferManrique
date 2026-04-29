import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EndocrinologoPortuguesaPage from "@/components/EndocrinologoPortuguesaPage";
import { SITE_URL } from "@/lib/constants";

export const metadata = {
  title: "Endocrinólogo en Portuguesa | Consulta en Barinas - Dra. Jennifer Manrique",
  description:
    "¿Buscas endocrinólogo en Portuguesa? La Dra. Jennifer Manrique atiende en Barinas, accesible desde Guanare y Acarigua. Diabetes, tiroides, obesidad, SOP, menopausia y más.",
  keywords: [
    "endocrinólogo en Portuguesa",
    "endocrinólogo Guanare",
    "endocrinólogo Acarigua",
    "especialista hormonal Portuguesa Venezuela",
    "endocrinólogo Barinas Portuguesa",
    "diabetes Portuguesa endocrinólogo",
    "tiroides Portuguesa especialista",
    "endocrinóloga llanos Venezuela",
  ],
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: `${SITE_URL}/endocrinologo-en-portuguesa`,
    title: "Endocrinólogo para Portuguesa — Consulta en Barinas | Dra. Jennifer Manrique",
    description:
      "La endocrinóloga más accesible desde Portuguesa atiende en Barinas. Guanare y Acarigua a pocas horas. Agenda por WhatsApp.",
    images: [{ url: `${SITE_URL}/images/dr-jennifer-hero.jpg`, width: 1200, height: 630, alt: "Dra. Jennifer Manrique - Endocrinóloga Barinas" }],
  },
  alternates: { canonical: `${SITE_URL}/endocrinologo-en-portuguesa` },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Dra. Jennifer Manrique - Endocrinóloga en Barinas (atención a pacientes de Portuguesa)",
  url: `${SITE_URL}/endocrinologo-en-portuguesa`,
  telephone: "+58-412-9339730",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hospital Privado San Juan, Consultorio 34, Piso 2",
    addressLocality: "Barinas",
    addressRegion: "Barinas",
    addressCountry: "VE",
  },
  areaServed: [
    { "@type": "State", name: "Barinas" },
    { "@type": "State", name: "Portuguesa" },
  ],
};

export default function EndocrinologoPortuguesa() {
  return (
    <>
      <Header />
      <main>
        <EndocrinologoPortuguesaPage />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
