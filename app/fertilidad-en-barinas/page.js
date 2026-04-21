import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FertilizadBarinasPage from "@/components/FertilizadBarinasPage";
import { SITE_URL } from "@/lib/constants";

export const metadata = {
  title: "Fertilidad en Barinas | Evaluación Hormonal - Dra. Jennifer Manrique",
  description:
    "Evaluación hormonal de fertilidad en Barinas con la Dra. Jennifer Manrique, endocrinóloga especialista. SOP, hipotiroidismo, hiperprolactinemia y protocolo pre-concepcional.",
  keywords: [
    "fertilidad en Barinas",
    "evaluación hormonal fertilidad Barinas",
    "infertilidad hormonal Barinas",
    "SOP fertilidad Barinas",
    "hipotiroidismo embarazo Barinas",
    "endocrinóloga fertilidad Venezuela",
    "protocolo pre-concepcional Barinas",
    "prolactina alta infertilidad Barinas",
  ],
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: `${SITE_URL}/fertilidad-en-barinas`,
    title: "Fertilidad en Barinas | Dra. Jennifer Manrique - Endocrinóloga",
    description:
      "Evaluación y manejo endocrinológico de la infertilidad en Barinas. SOP, hipotiroidismo, hiperprolactinemia y optimización hormonal pre-concepcional.",
    images: [{ url: `${SITE_URL}/images/dr-jennifer-hero.jpg`, width: 1200, height: 630, alt: "Dra. Jennifer Manrique - Fertilidad Barinas" }],
  },
  alternates: { canonical: `${SITE_URL}/fertilidad-en-barinas` },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Fertilidad en Barinas - Dra. Jennifer Manrique",
  description: "Evaluación hormonal de fertilidad e infertilidad en Barinas",
  url: `${SITE_URL}/fertilidad-en-barinas`,
  medicalAudience: { "@type": "MedicalAudience", audienceType: "Patient" },
  about: { "@type": "MedicalCondition", name: "Infertilidad hormonal" },
};

export default function FertilizadBarinas() {
  return (
    <>
      <Header />
      <main>
        <FertilizadBarinasPage />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
