import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQPage from "@/components/FAQPage";
import { SITE_URL } from "@/lib/constants";

export const metadata = {
  title: "Preguntas Frecuentes | Endocrinóloga en Barinas - Dra. Jennifer Manrique",
  description:
    "Respuestas a las preguntas más comúnes sobre endocrinología en Barinas y Venezuela. Diabetes, tiroides, obesidad, SOP, Mounjaro, Ozempic y más. Dra. Jennifer Manrique.",
  keywords: [
    "preguntas frecuentes endocrinólogo Barinas",
    "FAQ endocrinología Barinas",
    "preguntas endocrinólogo Venezuela",
    "endocrinólogo Barinas dudas",
    "cómo agendar endocrinólogo Barinas",
    "diabetes preguntas Barinas",
    "tiroides preguntas Venezuela",
    "Mounjaro Venezuela preguntas",
    "Ozempic Venezuela cómo funcióna",
    "SOP tratamiento Barinas",
    "hipotiroidismo Barinas",
    "endocrinología Venezuela FAQ",
    "Dra Jennifer Manrique preguntas",
    "consulta endocrinóloga Barinas",
  ],
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: `${SITE_URL}/faq`,
    title: "Preguntas Frecuentes | Endocrinóloga en Barinas - Dra. Jennifer Manrique",
    description:
      "Respuestas claras sobre endocrinología en Barinas y Venezuela. Diabetes, obesidad, tiroides, salud hormonal, Mounjaro, Ozempic y más.",
    images: [
      {
        url: `${SITE_URL}/images/dr-jennifer-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Dra. Jennifer Manrique - Endocrinóloga en Barinas - Preguntas Frecuentes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Preguntas Frecuentes | Endocrinóloga en Barinas",
    description:
      "Respuestas claras sobre endocrinología en Barinas y Venezuela. Diabetes, obesidad, tiroides, salud hormonal, Mounjaro, Ozempic y más.",
    images: [`${SITE_URL}/images/dr-jennifer-hero.jpg`],
  },
  alternates: {
    canonical: `${SITE_URL}/faq`,
  },
};

export default function FAQRoute() {
  return (
    <>
      <Header />
      <main>
        <FAQPage />
      </main>
      <Footer />
    </>
  );
}
