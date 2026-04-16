import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQPage from "@/components/FAQPage";
import { SITE_URL } from "@/lib/constants";

export const metadata = {
  title: "Preguntas Frecuentes | Endocrinologa en Barinas - Dra. Jennifer Manrique",
  description:
    "Respuestas a las preguntas mas comunes sobre endocrinologia en Barinas y Venezuela. Diabetes, tiroides, obesidad, SOP, Mounjaro, Ozempic y mas. Dra. Jennifer Manrique.",
  keywords: [
    "preguntas frecuentes endocrinologo Barinas",
    "FAQ endocrinologia Barinas",
    "preguntas endocrinologo Venezuela",
    "endocrinologo Barinas dudas",
    "como agendar endocrinologo Barinas",
    "diabetes preguntas Barinas",
    "tiroides preguntas Venezuela",
    "Mounjaro Venezuela preguntas",
    "Ozempic Venezuela como funciona",
    "SOP tratamiento Barinas",
    "hipotiroidismo Barinas",
    "endocrinologia Venezuela FAQ",
    "Dra Jennifer Manrique preguntas",
    "consulta endocrinologa Barinas",
  ],
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: `${SITE_URL}/faq`,
    title: "Preguntas Frecuentes | Endocrinologa en Barinas - Dra. Jennifer Manrique",
    description:
      "Respuestas claras sobre endocrinologia en Barinas y Venezuela. Diabetes, obesidad, tiroides, salud hormonal, Mounjaro, Ozempic y mas.",
    images: [
      {
        url: `${SITE_URL}/images/dr-jennifer-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Dra. Jennifer Manrique - Endocrinologa en Barinas - Preguntas Frecuentes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Preguntas Frecuentes | Endocrinologa en Barinas",
    description:
      "Respuestas claras sobre endocrinologia en Barinas y Venezuela. Diabetes, obesidad, tiroides, salud hormonal, Mounjaro, Ozempic y mas.",
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
