"use client";

import { useState } from "react";
import { CONTACT } from "@/lib/constants";

const services = [
  "Diabetes y control de glucosa",
  "Manejo de obesidad y perdida de peso",
  "Patologia tiroidea",
  "Salud hormonal",
  "Fertilidad y salud reproductiva",
  "Crecimiento y desarrollo",
  "Consulta general de endocrinologia",
];

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = [
      `Hola Dra. Jennifer, mi nombre es ${form.name}.`,
      form.service ? `Me interesa consulta sobre: ${form.service}.` : "",
      form.message ? form.message : "",
    ]
      .filter(Boolean)
      .join(" ");
    window.open(
      `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-malva-100 text-malva-800 text-xs font-semibold uppercase tracking-[0.2em]">
              Escribenos
            </span>
            <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl md:text-4xl text-malva-900 leading-tight">
              Cuentanos como podemos{" "}
              <span className="text-dorado">ayudarte</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-texto-suave">
              Completa el formulario y te redirigiremos a WhatsApp con tu
              mensaje prellenado. Sin esperas, atencion directa con la Dra.
              Jennifer Manrique.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                {
                  icon: "clock",
                  title: "Respuesta rapida",
                  text: "Respondemos en horas habiles de lunes a viernes.",
                },
                {
                  icon: "lock",
                  title: "Confidencialidad",
                  text: "Tus datos son tratados con total privacidad medica.",
                },
                {
                  icon: "calendar",
                  title: "Cita confirmada",
                  text: "Coordinamos dia y hora segun disponibilidad.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="shrink-0 w-10 h-10 rounded-xl bg-malva-50 border border-malva-100 flex items-center justify-center text-dorado-dark">
                    <FormIcon name={item.icon} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-malva-900">{item.title}</p>
                    <p className="text-sm text-texto-suave">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-malva-100 bg-malva-50/40 p-8 md:p-10 shadow-[0_4px_20px_rgba(44,37,48,0.05)]"
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-malva-900 mb-1.5"
                >
                  Tu nombre <span className="text-dorado">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Nombre completo"
                  className="w-full px-4 py-3 rounded-xl border border-malva-200 bg-white text-malva-900 placeholder-malva-300 focus:outline-none focus:border-malva focus:ring-2 focus:ring-malva/20 transition"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-semibold text-malva-900 mb-1.5"
                >
                  Motivo de consulta
                </label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-malva-200 bg-white text-malva-900 focus:outline-none focus:border-malva focus:ring-2 focus:ring-malva/20 transition appearance-none"
                >
                  <option value="">Selecciona una opcion</option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-malva-900 mb-1.5"
                >
                  Mensaje adicional
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Describe brevemente tu consulta o sintomas..."
                  className="w-full px-4 py-3 rounded-xl border border-malva-200 bg-white text-malva-900 placeholder-malva-300 focus:outline-none focus:border-malva focus:ring-2 focus:ring-malva/20 transition resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={!form.name}
              className="mt-7 w-full inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-malva text-white font-semibold shadow-[0_10px_30px_rgba(138,114,145,0.25)] hover:bg-malva-700 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0 transition-all duration-300"
            >
              {sent ? (
                <>
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Abriendo WhatsApp...
                </>
              ) : (
                <>
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                    <path d="M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .18 5.32.18 11.86c0 2.09.55 4.13 1.6 5.93L0 24l6.4-1.68a11.85 11.85 0 0 0 5.64 1.44h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.15-3.39-8.42Zm-8.47 18.12a9.7 9.7 0 0 1-4.94-1.35l-.36-.21-3.8 1 1.01-3.7-.23-.38a9.76 9.76 0 0 1-1.5-5.1c0-5.4 4.4-9.8 9.83-9.8 2.62 0 5.08 1.02 6.94 2.87a9.74 9.74 0 0 1 2.87 6.93c0 5.4-4.4 9.8-9.81 9.8Z" />
                  </svg>
                  Enviar por WhatsApp
                </>
              )}
            </button>

            <p className="mt-4 text-center text-xs text-texto-suave">
              Se abrira WhatsApp con tu mensaje prellenado
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function FormIcon({ name }) {
  const props = {
    viewBox: "0 0 24 24",
    className: "w-5 h-5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };
  switch (name) {
    case "clock":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );
    case "lock":
      return (
        <svg {...props}>
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...props}>
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      );
    default:
      return null;
  }
}
