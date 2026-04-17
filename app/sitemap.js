import { SITE_URL } from "@/lib/constants";
import { SERVICES } from "@/lib/services";

export default function sitemap() {
  const now = new Date().toISOString();

  const staticRoutes = [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/endocrino-en-barinas`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${SITE_URL}/endocrinologo-en-barinas`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${SITE_URL}/mounjaro-en-venezuela`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/ozempic-en-barinas`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/endocrinologo-en-venezuela`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/servicios`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/sobre-mi`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/testimonios`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${SITE_URL}/ubicacion`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${SITE_URL}/contacto`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE_URL}/privacidad`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/cookies`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const serviceRoutes = SERVICES.map((s) => ({
    url: `${SITE_URL}/servicios/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
