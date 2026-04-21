import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HipotiroidismoBarinasPage from "@/components/HipotiroidismoBarinasPage";
import { SITE_URL } from "@/lib/constants";

export const metadata = {
  title: "Hipotiroidismo en Barinas | Tratamiento - Dra. Jennifer Manrique",
  description:
    "Tratamiento del hipotiroidismo en Barinas con la Dra. Jennifer Manrique, endocrinóloga especialista. Ajuste de levotiroxina, Hashimoto, hipotiroidismo en el embarazo y seguimiento especializado.",
  keywords: [
    "hipotiroidismo en Barinas",
    "tratamiento hipotiroidismo Barinas",
    "endocrinóloga hipotiroidismo Barinas",
    "levotiroxina Barinas",
    "Hashimoto Barinas",
    "hipotiroidismo embarazo Venezuela",
    "TSH alta Barinas",
    "tiroides hipotiroidismo Barinas Venezuela",
  ],
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: `${SITE_URL}/hipotiroidismo-en-barinas`,
    title: "Hipotiroidismo en Barinas | Dra. Jennifer Manrique - Endocrinóloga",
    description:
      "Diagnóstico y ajuste de levotiroxina para hipotiroidismo en Barinas. Hashimoto e hipotiroidismo en el embarazo con endocrinóloga especialista.",
    images: [{ url: `${SITE_URL}/images/dr-jennifer-hero.jpg`, width: 1200, height: 630, alt: "Dra. Jennifer Manrique - Hipotiroidismo Barinas" }],
  },
  alternates: { canonical: `${SITE_URL}/hipotiroidismo-en-barinas` },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Hipotiroidismo en Barinas - Dra. Jennifer Manrique",
  description: "Diagnóstico y tratamiento del hipotiroidismo en Barinas",
  url: `${SITE_URL}/hipotiroidismo-en-barinas`,
  medicalAudience: { "@type": "MedicalAudience", audienceType: "Patient" },
  about: { "@type": "MedicalCondition", name: "Hipotiroidismo" },
};

export default function HipotiroidismoBarinas() {
  return (
    <>
      <Header />
      <main>
        <HipotiroidismoBarinasPage />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
