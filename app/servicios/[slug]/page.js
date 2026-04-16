import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceDetail from "@/components/ServiceDetail";
import { SERVICES } from "@/lib/services";
import { SITE_URL } from "@/lib/constants";

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
    openGraph: {
      type: "website",
      locale: "es_VE",
      url: `${SITE_URL}/servicios/${slug}`,
      title: service.seo.title,
      description: service.seo.description,
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: `Dra. Jennifer Manrique - ${service.title} en Barinas`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.seo.title,
      description: service.seo.description,
      images: [service.image],
    },
    alternates: {
      canonical: `${SITE_URL}/servicios/${slug}`,
    },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <Header />
      <main>
        <ServiceDetail service={service} />
      </main>
      <Footer />
    </>
  );
}
