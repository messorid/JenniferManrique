import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SopBarinasPage from "@/components/SopBarinasPage";
import { SITE_URL } from "@/lib/constants";

export const metadata = {
  title: "SOP en Barinas | Síndrome de Ovario Poliquístico - Dra. Jennifer Manrique",
  description:
    "Tratamiento del síndrome de ovario poliquístico (SOP) en Barinas con la Dra. Jennifer Manrique, endocrinóloga especialista. Diagnóstico hormonal, ciclo irregular, control de peso y fertilidad.",
  keywords: [
    "SOP en Barinas",
    "síndrome de ovario poliquístico Barinas",
    "SOP endocrinóloga Barinas",
    "tratamiento SOP Venezuela",
    "SOP ciclo irregular Barinas",
    "ovario poliquístico Barinas",
    "SOP fertilidad Barinas",
    "endocrinóloga SOP Barinas Venezuela",
  ],
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: `${SITE_URL}/sop-en-barinas`,
    title: "SOP en Barinas | Dra. Jennifer Manrique - Endocrinóloga",
    description:
      "Diagnóstico y tratamiento del síndrome de ovario poliquístico en Barinas. Ciclo irregular, control de peso y fertilidad con endocrinóloga especialista.",
    images: [{ url: `${SITE_URL}/images/dr-jennifer-hero.jpg`, width: 1200, height: 630, alt: "Dra. Jennifer Manrique - SOP Barinas" }],
  },
  alternates: { canonical: `${SITE_URL}/sop-en-barinas` },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "SOP en Barinas - Dra. Jennifer Manrique",
  description: "Diagnóstico y tratamiento del síndrome de ovario poliquístico en Barinas",
  url: `${SITE_URL}/sop-en-barinas`,
  medicalAudience: { "@type": "MedicalAudience", audienceType: "Patient" },
  about: { "@type": "MedicalCondition", name: "Síndrome de ovario poliquístico" },
};

export default function SopBarinas() {
  return (
    <>
      <Header />
      <main>
        <SopBarinasPage />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
