import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CrecimientoBarinasPage from "@/components/CrecimientoBarinasPage";
import { SITE_URL } from "@/lib/constants";

export const metadata = {
  title: "Talla Baja en Barinas | Crecimiento Infantil - Dra. Jennifer Manrique",
  description:
    "Evaluación de talla baja y alteraciones del crecimiento en Barinas con la Dra. Jennifer Manrique, endocrinóloga especialista. Pubertad precoz, retrasada y deficiencia de hormona de crecimiento.",
  keywords: [
    "talla baja Barinas",
    "crecimiento infantil Barinas",
    "endocrinóloga talla baja Barinas",
    "pubertad precoz Barinas",
    "hormona de crecimiento Venezuela",
    "talla baja endocrinólogo Venezuela",
    "pubertad retrasada Barinas",
    "evaluación crecimiento niños Barinas",
  ],
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: `${SITE_URL}/crecimiento-en-barinas`,
    title: "Talla Baja en Barinas | Dra. Jennifer Manrique - Endocrinóloga",
    description:
      "Evaluación endocrinológica de talla baja, pubertad precoz y alteraciones del crecimiento en Barinas.",
    images: [{ url: `${SITE_URL}/images/dr-jennifer-hero.jpg`, width: 1200, height: 630, alt: "Dra. Jennifer Manrique - Crecimiento Barinas" }],
  },
  alternates: { canonical: `${SITE_URL}/crecimiento-en-barinas` },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Talla Baja en Barinas - Dra. Jennifer Manrique",
  description: "Evaluación y tratamiento de talla baja y alteraciones del crecimiento en Barinas",
  url: `${SITE_URL}/crecimiento-en-barinas`,
  medicalAudience: { "@type": "MedicalAudience", audienceType: "Patient" },
  about: { "@type": "MedicalCondition", name: "Talla baja" },
};

export default function CrecimientoBarinas() {
  return (
    <>
      <Header />
      <main>
        <CrecimientoBarinasPage />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
