import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutIntro from "@/components/AboutIntro";
import Timeline from "@/components/Timeline";
import Philosophy from "@/components/Philosophy";
import CTAFinal from "@/components/CTAFinal";
import { SITE_URL } from "@/lib/constants";

export const metadata = {
  title: "Sobre la Dra. Jennifer Manrique | Endocrinóloga en Barinas",
  description:
    "Conoce la formación, trayectoria y enfoque médico de la Dra. Jennifer Manrique, Especialista en Endocrinología graduada en la ULA con experiencia en HULA, Luis Razetti y rotación internacional en CEMDI Bogotá.",
  keywords: [
    "Dra Jennifer Manrique endocrinóloga",
    "endocrinóloga formación ULA",
    "especialista endocrinología Barinas",
    "médico endocrinóloga Venezuela",
    "curriculum Dra Jennifer Manrique",
  ],
  openGraph: {
    type: "profile",
    locale: "es_VE",
    url: `${SITE_URL}/sobre-mi`,
    title: "Sobre la Dra. Jennifer Manrique | Endocrinóloga en Barinas",
    description:
      "Formación, trayectoria y enfoque médico de la Dra. Jennifer Manrique, Especialista en Endocrinología.",
    images: [
      {
        url: "/images/dr-jennifer-about.jpg",
        width: 1200,
        height: 630,
        alt: "Dra. Jennifer Manrique, Endocrinóloga en Barinas",
      },
    ],
  },
  alternates: {
    canonical: `${SITE_URL}/sobre-mi`,
  },
};

export default function SobreMiPage() {
  return (
    <>
      <Header />
      <main>
        <AboutIntro />
        <Timeline />
        <Philosophy />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
