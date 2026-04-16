import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsPage from "@/components/TestimonialsPage";
import { SITE_URL } from "@/lib/constants";

export const metadata = {
  title: "Testimonios de Pacientes | Endocrinologa en Barinas - Dra. Jennifer Manrique",
  description:
    "Opiniones y testimonios de pacientes de la Dra. Jennifer Manrique, endocrinologa en Barinas, Venezuela. Resultados reales en diabetes, tiroides, obesidad, SOP y mas.",
  keywords: [
    "testimonios endocrinologa Barinas",
    "opiniones endocrinologo Barinas",
    "pacientes endocrinologa Barinas Venezuela",
    "resultados tratamiento diabetes Barinas",
    "testimonios Dra Jennifer Manrique",
    "endocrinologa recomendada Barinas",
    "opiniones endocrinologo Venezuela",
    "mejores endocrinologos Barinas",
    "testimonios obesidad tratamiento Venezuela",
    "pacientes tiroides Barinas",
    "SOP tratamiento testimonios Venezuela",
    "Mounjaro resultados Venezuela",
    "Ozempic resultados Barinas",
    "endocrinologia Barinas resenas",
  ],
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: `${SITE_URL}/testimonios`,
    title:
      "Testimonios de Pacientes | Endocrinologa en Barinas - Dra. Jennifer Manrique",
    description:
      "Opiniones y testimonios de pacientes reales de la Dra. Jennifer Manrique, endocrinologa especialista en Barinas, Venezuela.",
    images: [
      {
        url: `${SITE_URL}/images/dr-jennifer-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Dra. Jennifer Manrique - Testimonios de Pacientes Barinas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Testimonios de Pacientes | Endocrinologa en Barinas",
    description:
      "Opiniones y testimonios de pacientes reales de la Dra. Jennifer Manrique, endocrinologa especialista en Barinas, Venezuela.",
    images: [`${SITE_URL}/images/dr-jennifer-hero.jpg`],
  },
  alternates: {
    canonical: `${SITE_URL}/testimonios`,
  },
};

export default function TestimoniosRoute() {
  return (
    <>
      <Header />
      <main>
        <TestimonialsPage />
      </main>
      <Footer />
    </>
  );
}
