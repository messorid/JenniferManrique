import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/lib/constants";

const quickCreds = [
  "Especialista ULA 2024",
  "Medico Cirujano UNEFM",
  "Formacion en HULA y Hospital Luis Razetti",
  "Rotacion internacional CEMDI Bogota",
];

export default function About() {
  return (
    <section id="sobre-mi" className="relative py-24 md:py-32 bg-white">
      <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -top-4 -left-4 w-32 h-32 rounded-full bg-dorado/20 blur-2xl" />
          <div className="absolute -bottom-4 -right-4 w-40 h-40 rounded-full bg-malva-200/50 blur-2xl" />

          <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(138,114,145,0.18)]">
            <Image
              src="/images/dr-jennifer-about.jpg"
              alt="Dra. Jennifer Manrique, Especialista en Endocrinologia"
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 90vw, 540px"
              className="object-cover object-top"
            />
          </div>

          <div className="absolute -bottom-8 left-8 right-8 lg:left-12 lg:right-12 bg-white rounded-2xl shadow-[0_20px_60px_rgba(44,37,48,0.12)] p-5 border border-malva-100">
            <p className="text-xs uppercase tracking-[0.25em] text-dorado font-semibold">
              Mencion publicacion
            </p>
            <p className="mt-2 text-sm text-malva-900 font-medium leading-snug">
              Tesis sobre Vitamina D en HTA y Diabetes tipo 2, 2024
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dorado/15 text-dorado-dark text-xs font-semibold uppercase tracking-[0.2em]">
            Sobre la doctora
          </span>

          <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl leading-tight text-malva-900">
            Formacion solida y enfoque integral
          </h2>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-texto-suave">
            <p>
              La <strong className="text-malva-900">Dra. Jennifer Manrique</strong>{" "}
              es Medico Cirujano y Especialista en Endocrinologia, formada en la
              UNEFM y especializada en la Universidad de los Andes, con
              experiencia en hospitales reconocidos y centros especializados en
              diabetes y tecnologia aplicada.
            </p>
            <p>
              Su enfoque se basa en una atencion integral: evalua cada paciente
              de manera individual para ofrecer tratamientos efectivos, seguros
              y adaptados a cada caso.
            </p>
          </div>

          <ul className="mt-8 flex flex-wrap gap-2.5">
            {quickCreds.map((c) => (
              <li
                key={c}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-malva-50 border border-malva-100 text-sm text-malva-800"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-dorado" />
                {c}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/sobre-mi"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-malva text-white font-semibold shadow-[0_10px_30px_rgba(138,114,145,0.25)] hover:bg-malva-700 hover:-translate-y-0.5 transition-all duration-300"
            >
              Conoce mi trayectoria
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link
              href={CONTACT.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-malva-300 text-malva-800 font-semibold hover:bg-malva-50 hover:border-malva transition-all duration-300"
            >
              Agendar consulta
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
