import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsPage from "@/components/TestimonialsPage";
import { SITE_URL } from "@/lib/constants";

export const metadata = {
  title: "Testimonios de Pacientes | Endocrinóloga en Barinas - Dra. Jennifer Manrique",
  description:
    "Opiniones y testimonios de pacientes de la Dra. Jennifer Manrique, endocrinóloga en Barinas, Venezuela. Resultados reales en diabetes, tiroides, obesidad, SOP y más.",
  keywords: [
    "testimonios endocrinóloga Barinas",
    "opiniones endocrinólogo Barinas",
    "pacientes endocrinóloga Barinas Venezuela",
    "resultados tratamiento diabetes Barinas",
    "testimonios Dra Jennifer Manrique",
    "endocrinóloga recomendada Barinas",
    "opiniones endocrinólogo Venezuela",
    "mejores endocrinologos Barinas",
    "testimonios obesidad tratamiento Venezuela",
    "pacientes tiroides Barinas",
    "SOP tratamiento testimonios Venezuela",
    "Mounjaro resultados Venezuela",
    "Ozempic resultados Barinas",
    "endocrinología Barinas resenas",
  ],
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: `${SITE_URL}/testimonios`,
    title:
      "Testimonios de Pacientes | Endocrinóloga en Barinas - Dra. Jennifer Manrique",
    description:
      "Opiniones y testimonios de pacientes reales de la Dra. Jennifer Manrique, endocrinóloga especialista en Barinas, Venezuela.",
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
    title: "Testimonios de Pacientes | Endocrinóloga en Barinas",
    description:
      "Opiniones y testimonios de pacientes reales de la Dra. Jennifer Manrique, endocrinóloga especialista en Barinas, Venezuela.",
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
