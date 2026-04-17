import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { CONTACT, LOCATION, SITE_URL } from "@/lib/constants";

export const metadata = {
  title: "Ubicacion | Consultorio Endocrinologa en Barinas - Dra. Jennifer Manrique",
  description:
    "Donde queda el consultorio de la Dra. Jennifer Manrique en Barinas. Hospital Privado San Juan, Consultorio 34, Piso 2. Horario, direccion y como llegar.",
  keywords: [
    "consultorio endocrinologa Barinas",
    "donde queda endocrinologo Barinas",
    "Hospital San Juan Barinas endocrinologo",
    "direccion endocrinologa Barinas",
    "como llegar endocrinologo Barinas",
    "Dra Jennifer Manrique consultorio Barinas",
    "ubicacion endocrinologo Barinas Venezuela",
  ],
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: `${SITE_URL}/ubicacion`,
    title: "Ubicacion del Consultorio | Dra. Jennifer Manrique - Barinas",
    description:
      "Hospital Privado San Juan, Consultorio 34, Piso 2, Barinas. Lunes a viernes previa cita.",
    images: [{ url: `${SITE_URL}/images/dr-jennifer-hero.jpg`, width: 1200, height: 630, alt: "Consultorio Dra. Jennifer Manrique Barinas" }],
  },
  alternates: { canonical: `${SITE_URL}/ubicacion` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Ubicacion", item: `${SITE_URL}/ubicacion` },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Dra. Jennifer Manrique - Endocrinologa en Barinas",
  url: SITE_URL,
  telephone: "+58-412-9337390",
  image: `${SITE_URL}/images/dr-jennifer-hero.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hospital Privado San Juan, Consultorio 34, Piso 2",
    addressLocality: "Barinas",
    addressRegion: "Barinas",
    addressCountry: "VE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 8.62555759517227,
    longitude: -70.21492992431106,
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "12:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "14:00", closes: "18:00" },
  ],
  hasMap: "https://maps.google.com/?cid=17071225739697038960",
};

export default function UbicacionPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-36 pb-16 md:pt-44 md:pb-20 overflow-hidden bg-gradient-to-b from-malva-50 via-white to-white">
          <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-malva-200/40 blur-3xl pointer-events-none" />
          <div className="container-page relative max-w-3xl mx-auto text-center">
            <nav aria-label="Ruta de navegacion" className="mb-6">
              <ol className="flex justify-center flex-wrap gap-x-2 text-xs text-texto-suave">
                <li><Link href="/" className="hover:text-dorado transition-colors">Inicio</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-malva-900 font-medium" aria-current="page">Ubicacion</li>
              </ol>
            </nav>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-malva-100 text-malva-800 text-xs font-semibold uppercase tracking-[0.2em]">
              <span className="w-1.5 h-1.5 rounded-full bg-dorado" />
              Como llegar
            </span>
            <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-malva-900">
              Consultorio en{" "}
              <span className="text-dorado">Barinas</span>
            </h1>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-texto-suave max-w-xl mx-auto">
              Hospital Privado San Juan, Consultorio 34, Piso 2, Barinas.
              Atencion de lunes a viernes previa cita.
            </p>
          </div>
        </section>

        {/* Mapa + Info */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container-page max-w-5xl mx-auto">
            <div className="grid gap-8 lg:grid-cols-[1fr_340px] items-start">

              {/* Mapa */}
              <div className="rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(44,37,48,0.1)] border border-malva-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.6918006936403!2d-70.21492992431106!3d8.62555759517227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e7b59d9ffb32035%3A0xecc71ae0ee23d270!2sDra.%20Jennifer%20Manrique-%20Endocrin%C3%B3logo%20en%20Barinas!5e0!3m2!1ses-419!2sus!4v1776438575514!5m2!1ses-419!2sus"
                  width="100%"
                  height="460"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Consultorio Dra. Jennifer Manrique - Hospital Privado San Juan, Barinas"
                />
              </div>

              {/* Info */}
              <div className="space-y-5">
                {/* Sede principal */}
                <div className="rounded-3xl bg-malva-900 text-white p-7">
                  <span className="text-xs uppercase tracking-[0.25em] text-dorado font-semibold">Sede principal</span>
                  <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl">Barinas</h2>
                  <div className="mt-5 space-y-4">
                    {[
                      {
                        icon: "pin",
                        label: "Direccion",
                        value: `${LOCATION.name}, ${LOCATION.detail}, ${LOCATION.city}`,
                      },
                      {
                        icon: "clock",
                        label: "Horario",
                        value: "Lun - Vie: 8:00 AM - 12:00 PM\n2:00 PM - 6:00 PM",
                      },
                      {
                        icon: "phone",
                        label: "Telefono / WhatsApp",
                        value: CONTACT.phone,
                      },
                      {
                        icon: "info",
                        label: "Modalidad",
                        value: "Previa cita",
                      },
                    ].map((item) => (
                      <div key={item.label} className="flex gap-3">
                        <span className="shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-dorado">
                          <LocationIcon name={item.icon} />
                        </span>
                        <div>
                          <p className="text-xs uppercase tracking-wider text-malva-300">{item.label}</p>
                          <p className="mt-0.5 text-sm text-white leading-snug whitespace-pre-line">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={CONTACT.whatsappMessage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-dorado text-white text-sm font-semibold hover:bg-dorado-dark transition-colors"
                  >
                    Agendar cita por WhatsApp
                  </Link>
                </div>

                {/* Sede secundaria */}
                <div className="rounded-3xl bg-white border border-malva-100 p-6 shadow-[0_4px_20px_rgba(44,37,48,0.04)]">
                  <span className="text-xs uppercase tracking-[0.25em] text-dorado-dark font-semibold">Sede secundaria</span>
                  <h2 className="mt-2 font-[family-name:var(--font-display)] text-xl text-malva-900">
                    Santa Barbara de Barinas
                  </h2>
                  <p className="mt-2 text-sm text-texto-suave leading-relaxed">
                    Consulta mensual disponible. Fecha confirmada por WhatsApp con anticipacion.
                  </p>
                  <Link
                    href={CONTACT.whatsappMessage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-malva-700 hover:text-dorado-dark transition-colors"
                  >
                    Consultar proxima fecha →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Como llegar */}
        <section className="py-12 md:py-16 bg-malva-50">
          <div className="container-page max-w-3xl mx-auto">
            <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl text-malva-900 text-center mb-8">
              Como llegar al consultorio
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { icon: "car", title: "En vehiculo", desc: "El Hospital Privado San Juan se encuentra en una zona de facil acceso en Barinas. Hay estacionamiento disponible." },
                { icon: "walk", title: "Referencia", desc: "Consultorio 34, Piso 2. Al entrar al hospital, dirígete al segundo piso y busca el consultorio 34." },
                { icon: "map", title: "Google Maps", desc: "Busca 'Dra. Jennifer Manrique Endocrinologa Barinas' en Google Maps para obtener indicaciones desde tu ubicacion." },
              ].map((item) => (
                <div key={item.title} className="p-5 rounded-2xl bg-white border border-malva-100 shadow-[0_4px_20px_rgba(44,37,48,0.04)]">
                  <span className="inline-flex w-9 h-9 rounded-xl bg-dorado/10 items-center justify-center text-dorado-dark mb-3">
                    <LocationIcon name={item.icon} />
                  </span>
                  <h3 className="font-semibold text-sm text-malva-900">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-texto-suave leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}

function LocationIcon({ name }) {
  const p = { viewBox: "0 0 24 24", className: "w-4 h-4", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };
  switch (name) {
    case "pin": return <svg {...p}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
    case "clock": return <svg {...p}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
    case "phone": return <svg {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.12 12 19.86 19.86 0 0 1 2.1 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z"/></svg>;
    case "info": return <svg {...p}><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>;
    case "car": return <svg {...p}><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v9a2 2 0 0 1-2 2h-2"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="14.5" cy="17.5" r="2.5"/></svg>;
    case "walk": return <svg {...p}><circle cx="12" cy="5" r="2"/><path d="m12 7-3 9 3-2 3 2-3-9z"/><path d="m9 16-1 5"/><path d="m15 16 1 5"/></svg>;
    case "map": return <svg {...p}><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>;
    default: return null;
  }
}
