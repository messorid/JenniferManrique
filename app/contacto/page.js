import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";
import { SITE_URL } from "@/lib/constants";

export const metadata = {
  title: "Contacto | Agendar consulta con la Dra. Jennifer Manrique",
  description:
    "Agenda tu consulta de endocrinologia en Barinas con la Dra. Jennifer Manrique. Contacto por WhatsApp, correo o Instagram. Atencion de lunes a viernes en Hospital Privado San Juan.",
  keywords: [
    "contacto endocrinologa Barinas",
    "agendar consulta endocrinologia Barinas",
    "Dra Jennifer Manrique cita",
    "endocrinologa Barinas WhatsApp",
    "Hospital Privado San Juan Barinas endocrinologia",
  ],
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: `${SITE_URL}/contacto`,
    title: "Contacto | Dra. Jennifer Manrique - Endocrinologa en Barinas",
    description:
      "Agenda tu consulta de endocrinologia en Barinas. Contacto por WhatsApp, correo e Instagram.",
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
    canonical: `${SITE_URL}/contacto`,
  },
};

export default function ContactoPage() {
  return (
    <>
      <Header />
      <main>
        <ContactInfo />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
