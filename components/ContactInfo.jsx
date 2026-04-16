import Link from "next/link";
import { CONTACT, LOCATION } from "@/lib/constants";

const methods = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: CONTACT.phone,
    detail: "Respuesta rapida en horas de atencion",
    href: CONTACT.whatsappMessage,
    external: true,
    color: "bg-green-50 border-green-200 hover:border-green-400",
    iconColor: "text-green-600 bg-green-100",
    icon: "whatsapp",
  },
  {
    id: "email",
    label: "Correo electronico",
    value: CONTACT.email,
    detail: "Para consultas generales y seguimiento",
    href: CONTACT.emailUrl,
    external: false,
    color: "bg-malva-50 border-malva-200 hover:border-malva-400",
    iconColor: "text-malva-700 bg-malva-100",
    icon: "mail",
  },
  {
    id: "instagram",
    label: "Instagram",
    value: CONTACT.instagram,
    detail: "Contenido educativo sobre endocrinologia",
    href: CONTACT.instagramUrl,
    external: true,
    color: "bg-dorado/5 border-dorado/30 hover:border-dorado/60",
    iconColor: "text-dorado-dark bg-dorado/15",
    icon: "instagram",
  },
];

export default function ContactInfo() {
  return (
    <>
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-gradient-to-b from-malva-50 via-white to-white">
        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-malva-200/40 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full bg-dorado/10 blur-3xl pointer-events-none" />

        <div className="container-page relative max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-malva-100 text-malva-800 text-xs font-semibold uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 rounded-full bg-dorado" />
            Contacto
          </span>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-malva-900">
            Agenda tu <span className="text-dorado">consulta</span>
          </h1>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-texto-suave max-w-xl mx-auto">
            Contactanos por WhatsApp para agendar tu cita con la Dra. Jennifer
            Manrique. Atencion personalizada de lunes a viernes en Barinas.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-page">
          <div className="grid gap-5 sm:grid-cols-3">
            {methods.map((m) => (
              <Link
                key={m.id}
                href={m.href}
                target={m.external ? "_blank" : undefined}
                rel={m.external ? "noopener noreferrer" : undefined}
                className={`group flex flex-col gap-4 p-7 rounded-3xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(44,37,48,0.08)] ${m.color}`}
              >
                <span className={`w-12 h-12 rounded-2xl flex items-center justify-center ${m.iconColor}`}>
                  <ContactIcon name={m.icon} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] font-semibold text-texto-suave">
                    {m.label}
                  </p>
                  <p className="mt-1 text-base font-semibold text-malva-900 break-all">
                    {m.value}
                  </p>
                  <p className="mt-2 text-sm text-texto-suave leading-snug">
                    {m.detail}
                  </p>
                </div>
                <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-malva-700 group-hover:text-dorado-dark transition-colors">
                  Escribir ahora
                  <svg viewBox="0 0 24 24" className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-malva-50">
        <div className="container-page">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dorado/15 text-dorado-dark text-xs font-semibold uppercase tracking-[0.2em]">
              Sedes de atencion
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl md:text-4xl text-malva-900">
              Donde encontrarnos
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-5">
            <article className="lg:col-span-3 relative overflow-hidden rounded-3xl bg-gradient-to-br from-malva-700 to-malva-900 text-white p-8 md:p-12 shadow-[0_20px_60px_rgba(44,37,48,0.18)]">
              <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-dorado/20 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-malva-500/30 blur-3xl pointer-events-none" />

              <div className="relative">
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-dorado font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-dorado" />
                  Sede principal
                </span>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold">
                  Barinas
                </h3>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div className="flex gap-3">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 text-dorado" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-malva-200">Direccion</p>
                      <p className="mt-1 text-sm text-white font-medium leading-snug">
                        {LOCATION.name}
                        <br />{LOCATION.detail}
                        <br />{LOCATION.city}, {LOCATION.country}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 text-dorado" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-malva-200">Horario</p>
                      <p className="mt-1 text-sm text-white font-medium leading-snug">
                        Lunes a Viernes
                        <br />8:00 AM - 12:00 PM
                        <br />2:00 PM - 6:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 text-dorado" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.12 12 19.86 19.86 0 0 1 2.1 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-malva-200">Telefono</p>
                      <p className="mt-1 text-sm text-white font-medium">{CONTACT.phone}</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 text-dorado" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-malva-200">Modalidad</p>
                      <p className="mt-1 text-sm text-white font-medium">Previa cita</p>
                    </div>
                  </div>
                </div>

                <Link
                  href={CONTACT.whatsappMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-dorado text-white font-semibold hover:bg-dorado-dark transition-all duration-300"
                >
                  Agendar cita en Barinas
                </Link>
              </div>
            </article>

            <article className="lg:col-span-2 rounded-3xl bg-white border border-malva-100 p-8 md:p-10 flex flex-col shadow-[0_4px_20px_rgba(44,37,48,0.05)]">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-dorado-dark font-semibold">
                Sede secundaria
              </span>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl md:text-3xl font-semibold text-malva-900">
                Santa Barbara de Barinas
              </h3>
              <p className="mt-3 text-sm text-texto-suave leading-relaxed">
                Consulta mensual disponible para pacientes del eje sur. Misma
                calidad de atencion, con fecha confirmada por WhatsApp con
                antelacion.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Disponible una vez al mes",
                  "Fecha confirmada por WhatsApp",
                  "Agenda con anticipacion recomendada",
                  "Misma atencion integral personalizada",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-malva-900">
                    <span className="shrink-0 mt-1 w-4 h-4 rounded-full bg-dorado/15 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 text-dorado-dark" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href={CONTACT.whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-malva text-white font-semibold hover:bg-malva-700 hover:-translate-y-0.5 transition-all duration-300"
              >
                Consultar proxima fecha
              </Link>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactIcon({ name }) {
  const props = {
    viewBox: "0 0 24 24",
    className: "w-6 h-6",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };
  switch (name) {
    case "whatsapp":
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true">
          <path d="M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .18 5.32.18 11.86c0 2.09.55 4.13 1.6 5.93L0 24l6.4-1.68a11.85 11.85 0 0 0 5.64 1.44h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.15-3.39-8.42Zm-8.47 18.12a9.7 9.7 0 0 1-4.94-1.35l-.36-.21-3.8 1 1.01-3.7-.23-.38a9.76 9.76 0 0 1-1.5-5.1c0-5.4 4.4-9.8 9.83-9.8 2.62 0 5.08 1.02 6.94 2.87a9.74 9.74 0 0 1 2.87 6.93c0 5.4-4.4 9.8-9.81 9.8Zm5.4-7.34c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.76.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.91-2.2-.24-.58-.48-.5-.67-.5l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5 0 1.48 1.07 2.9 1.22 3.1.15.2 2.12 3.23 5.14 4.53.72.3 1.28.48 1.72.62.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...props}>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...props}>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );
    default:
      return null;
  }
}
