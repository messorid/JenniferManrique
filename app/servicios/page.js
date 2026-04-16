import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesPage from "@/components/ServicesPage";
import { SITE_URL } from "@/lib/constants";

export const metadata = {
  title: "Servicios de Endocrinologia en Barinas | Endocrinologo Venezuela | Dra. Jennifer Manrique",
  description:
    "Endocrinologa en Barinas con servicios especializados en diabetes, obesidad, tiroides, salud hormonal, fertilidad y crecimiento. La mejor endocrinologa en Venezuela. Agenda en Barinas.",
  keywords: [
    "endocrinologa Barinas",
    "endocrinologo Barinas",
    "endocrino Barinas Venezuela",
    "servicios endocrinologia Barinas",
    "endocrinologo Venezuela",
    "endocrino Venezuela",
    "diabetes Barinas",
    "tiroides Barinas Venezuela",
    "obesidad endocrinologo Venezuela",
    "Mounjaro Venezuela",
    "Ozempic Barinas",
    "SOP Barinas Venezuela",
    "Dra Jennifer Manrique servicios",
  ],
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: `${SITE_URL}/servicios`,
    title: "Servicios de Endocrinologia en Barinas | Dra. Jennifer Manrique",
    description:
      "Endocrinologa en Barinas con servicios especializados en diabetes, obesidad, tiroides, salud hormonal, fertilidad y crecimiento. Disponible en Venezuela.",
    images: [
      {
        url: "/images/dr-jennifer-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Dra. Jennifer Manrique, Endocrinologa en Barinas",
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
