import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EndocrinologoApurePage from "@/components/EndocrinologoApurePage";
import { SITE_URL } from "@/lib/constants";

export const metadata = {
  title: "Endocrinólogo en Apure | Consulta en Barinas - Dra. Jennifer Manrique",
  description:
    "¿Buscas endocrinólogo en Apure? La Dra. Jennifer Manrique atiende en Barinas, la opción más cercana para pacientes de San Fernando de Apure. Diabetes, tiroides, obesidad, SOP y más.",
  keywords: [
    "endocrinólogo en Apure",
    "endocrinólogo cerca de Apure",
    "endocrinólogo San Fernando de Apure",
    "especialista hormonal Apure Venezuela",
    "endocrinólogo Barinas Apure",
    "diabetes Apure endocrinólogo",
    "tiroides Apure especialista",
    "endocrinóloga llanos Venezuela",
  ],
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: `${SITE_URL}/endocrinologo-en-apure`,
    title: "Endocrinólogo para Apure — Consulta en Barinas | Dra. Jennifer Manrique",
    description:
      "La endocrinóloga más cercana al estado Apure atiende en Barinas. Agenda tu cita por WhatsApp.",
    images: [{ url: `${SITE_URL}/images/dr-jennifer-hero.jpg`, width: 1200, height: 630, alt: "Dra. Jennifer Manrique - Endocrinóloga Barinas" }],
  },
  alternates: { canonical: `${SITE_URL}/endocrinologo-en-apure` },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Dra. Jennifer Manrique - Endocrinóloga en Barinas (atención a pacientes de Apure)",
  url: `${SITE_URL}/endocrinologo-en-apure`,
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
    { "@type": "State", name: "Apure" },
  ],
};

export default function EndocrinologoApure() {
  return (
    <>
      <Header />
      <main>
        <EndocrinologoApurePage />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
