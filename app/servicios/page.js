import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesPage from "@/components/ServicesPage";
import { SITE_URL } from "@/lib/constants";

export const metadata = {
  title: "Servicios de Endocrinología en Barinas | Endocrinólogo Venezuela | Dra. Jennifer Manrique",
  description:
    "Endocrinóloga en Barinas con servicios especializados en diabetes, obesidad, tiroides, salud hormonal, fertilidad y crecimiento. La mejor endocrinóloga en Venezuela. Agenda en Barinas.",
  keywords: [
    "endocrinóloga Barinas",
    "endocrinólogo Barinas",
    "endocrino Barinas Venezuela",
    "servicios endocrinología Barinas",
    "endocrinólogo Venezuela",
    "endocrino Venezuela",
    "diabetes Barinas",
    "tiroides Barinas Venezuela",
    "obesidad endocrinólogo Venezuela",
    "Mounjaro Venezuela",
    "Ozempic Barinas",
    "SOP Barinas Venezuela",
    "Dra Jennifer Manrique servicios",
  ],
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: `${SITE_URL}/servicios`,
    title: "Servicios de Endocrinología en Barinas | Dra. Jennifer Manrique",
    description:
      "Endocrinóloga en Barinas con servicios especializados en diabetes, obesidad, tiroides, salud hormonal, fertilidad y crecimiento. Disponible en Venezuela.",
    images: [
      {
        url: "/images/dr-jennifer-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Dra. Jennifer Manrique, Endocrinóloga en Barinas",
      },
    ],
  },
  alternates: {
    canonical: `${SITE_URL}/servicios`,
  },
};

export default function ServiciosPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesPage />
      </main>
      <Footer />
    </>
  );
}
