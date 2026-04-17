import Image from "next/image";
import Link from "next/link";
import { CONTACT, LOCATION, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-malva-900 text-malva-100">
      <div className="container-page py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="inline-block p-3 rounded-2xl bg-white/95">
              <Image
                src="/images/logo.png"
                alt="Dra. Jennifer Manrique, Endocrinóloga"
                width={200}
                height={112}
                loading="lazy"
                className="h-14 w-auto"
              />
            </div>
            <p className="mt-5 text-sm leading-relaxed text-malva-200">
              Atención médica integral en endocrinología. Diabetes, obesidad,
              tiroides y salud hormonal en Barinas, Venezuela.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navegacion
            </h3>
            <ul className="mt-5 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-malva-200 hover:text-dorado transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contacto
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  href={CONTACT.whatsappMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-malva-200 hover:text-dorado transition-colors"
                >
                  <IconPhone />
                  {CONTACT.phone}
                </Link>
              </li>
              <li>
                <Link
                  href={CONTACT.emailUrl}
                  className="inline-flex items-center gap-2 text-malva-200 hover:text-dorado transition-colors break-all"
                >
                  <IconMail />
                  {CONTACT.email}
                </Link>
              </li>
              <li>
                <Link
                  href={CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-malva-200 hover:text-dorado transition-colors"
                >
                  <IconInstagram />
                  {CONTACT.instagram}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Ubicación
            </h3>
            <address className="mt-5 not-italic text-sm leading-relaxed text-malva-200">
              {LOCATION.name}
              <br />
              {LOCATION.detail}
              <br />
              {LOCATION.city}, {LOCATION.country}
            </address>
            <p className="mt-4 text-xs uppercase tracking-wider text-dorado">
              Horario
            </p>
            <p className="mt-1 text-sm text-malva-200">
              Lunes a Viernes
              <br />
              8:00 AM - 12:00 PM
              <br />
              2:00 PM - 6:00 PM
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-malva-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-malva-300">
            &copy; {year} Dra. Jennifer Manrique. Todos los derechos reservados.
          </p>
          <p className="text-xs text-malva-300">
            Atención previa cita en Barinas y Santa Barbara.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-4 gap-y-1">
            <Link href="/privacidad" className="text-xs text-malva-400 hover:text-dorado transition-colors">
              Privacidad
            </Link>
            <Link href="/cookies" className="text-xs text-malva-400 hover:text-dorado transition-colors">
              Cookies
            </Link>
            <span className="text-xs text-malva-600 select-none hidden md:inline">|</span>
            <p className="text-xs text-malva-400">
              Creada por{" "}
              <Link
                href="https://www.boostoriweb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-malva-300 hover:text-dorado transition-colors"
              >
                Boostori
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-dorado" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-dorado" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-dorado" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
