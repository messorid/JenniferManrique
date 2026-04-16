import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutIntro from "@/components/AboutIntro";
import Timeline from "@/components/Timeline";
import Philosophy from "@/components/Philosophy";
import CTAFinal from "@/components/CTAFinal";
import { SITE_URL } from "@/lib/constants";

export const metadata = {
  title: "Sobre la Dra. Jennifer Manrique | Endocrinologa en Barinas",
  description:
    "Conoce la formacion, trayectoria y enfoque medico de la Dra. Jennifer Manrique, Especialista en Endocrinologia graduada en la ULA con experiencia en HULA, Luis Razetti y rotacion internacional en CEMDI Bogota.",
  keywords: [
    "Dra Jennifer Manrique endocrinologa",
    "endocrinologa formacion ULA",
    "especialista endocrinologia Barinas",
    "medico endocrinologa Venezuela",
    "curriculum Dra Jennifer Manrique",
  ],
  openGraph: {
    type: "profile",
    locale: "es_VE",
    url: `${SITE_URL}/sobre-mi`,
    title: "Sobre la Dra. Jennifer Manrique | Endocrinologa en Barinas",
    description:
      "Formacion, trayectoria y enfoque medico de la Dra. Jennifer Manrique, Especialista en Endocrinologia.",
    images: [
      {
        url: "/images/dr-jennifer-about.jpg",
        width: 1200,
        height: 630,
        alt: "Dra. Jennifer Manrique, Endocrinologa en Barinas",
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
