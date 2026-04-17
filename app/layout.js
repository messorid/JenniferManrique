import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SITE_URL, CONTACT, LOCATION } from "@/lib/constants";
import CookieBanner from "@/components/CookieBanner";
import WhatsAppSticky from "@/components/WhatsAppSticky";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Dra. Jennifer Manrique | Endocrinóloga en Barinas - Diabetes, Obesidad y Hormonas",
    template: "%s | Dra. Jennifer Manrique",
  },
  description:
    "Endocrinóloga en Barinas especializada en diabetes, obesidad, tiroides y salud hormonal. Tratamientos con Mounjaro, Ozempic y tecnología avanzada. Agenda tu consulta por WhatsApp.",
  applicationName: "Dra. Jennifer Manrique",
  keywords: [
    "endocrino en Barinas",
    "endocrinólogo en Barinas",
    "endocrinóloga en Barinas",
    "Mounjaro en Venezuela",
    "Ozempic Barinas",
    "pérdida de peso Barinas",
    "diabetes Barinas",
    "tiroides Barinas",
    "SOP Barinas",
    "menopausia Barinas",
    "hormonas Barinas",
    "Dra Jennifer Manrique",
  ],
  authors: [{ name: "Dra. Jennifer Manrique" }],
  creator: "Dra. Jennifer Manrique",
  publisher: "Dra. Jennifer Manrique",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: SITE_URL,
    siteName: "Dra. Jennifer Manrique",
    title:
      "Dra. Jennifer Manrique | Endocrinóloga en Barinas",
    description:
      "Endocrinóloga en Barinas especializada en diabetes, obesidad, tiroides y salud hormonal. Agenda tu consulta por WhatsApp.",
    images: [
      {
        url: "/images/dr-jennifer-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Dra. Jennifer Manrique, Endocrinóloga en Barinas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Jennifer Manrique | Endocrinóloga en Barinas",
    description:
      "Endocrinóloga en Barinas. Diabetes, obesidad, tiroides y salud hormonal. Agenda por WhatsApp.",
    images: ["/images/dr-jennifer-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
    other: [
      { rel: "android-chrome", url: "/android-chrome-192x192.png", sizes: "192x192" },
      { rel: "android-chrome", url: "/android-chrome-512x512.png", sizes: "512x512" },
    ],
  },
  category: "health",
};

export const viewport = {
  themeColor: "#A58EAA",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${SITE_URL}/#physician`,
    name: "Dra. Jennifer Manrique",
    alternateName: "Jennifer Kariana Manrique Davila",
    médicalSpecialty: "Endocrinology",
    url: SITE_URL,
    image: `${SITE_URL}/images/dr-jennifer-hero.jpg`,
    telephone: "+58-412-9337390",
    email: CONTACT.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${LOCATION.name}, ${LOCATION.detail}`,
      addressLocality: LOCATION.city,
      addressRegion: "Barinas",
      addressCountry: "VE",
    },
    areaServed: [
      { "@type": "City", name: "Barinas" },
      { "@type": "City", name: "Santa Barbara de Barinas" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "12:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "14:00",
        closes: "18:00",
      },
    ],
    sameAs: [CONTACT.instagramUrl],
    availableService: [
      { "@type": "MedicalProcedure", name: "Tratamiento de diabetes tipo 1, 2 y gestacional" },
      { "@type": "MedicalProcedure", name: "Manejo de obesidad con GLP-1 (Mounjaro, Ozempic)" },
      { "@type": "MedicalProcedure", name: "Evaluación y tratamiento de tiroides" },
      { "@type": "MedicalProcedure", name: "Ecografía tiroidea y PAAF" },
      { "@type": "MedicalProcedure", name: "Síndrome de ovario poliquístico" },
      { "@type": "MedicalProcedure", name: "Menopausia y andropausia" },
      { "@type": "MedicalProcedure", name: "Evaluación hormonal para fertilidad" },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Dra. Jennifer Manrique",
    inLanguage: "es-VE",
    publisher: { "@id": `${SITE_URL}/#physician` },
  };

  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        {children}
        <GoogleAnalytics />
        <WhatsAppSticky />
        <CookieBanner />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </body>
    </html>
  );
}
