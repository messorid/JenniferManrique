const testimonials = [
  {
    initial: "M",
    name: "Maria A.",
    service: "Control de diabetes tipo 2",
    text: "La doctora me explico todo con mucha paciencia. Despues de meses con tratamiento ya logre estabilizar mi glicemia y me siento mucho mejor.",
  },
  {
    initial: "L",
    name: "Luis R.",
    service: "Manejo de obesidad",
    text: "Con el tratamiento y seguimiento qué me indico baje de peso de manera saludable. Lo mejor es qué se siente un acompañamiento real.",
  },
  {
    initial: "C",
    name: "Carla P.",
    service: "Síndrome de ovario poliquístico",
    text: "Por fin encontre una endocrinóloga qué escucha y explica. El plan qué me propuso me ayudo a regular mi ciclo y mejorar mi energia.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="relative py-24 md:py-32 bg-gradient-to-b from-white via-malva-50 to-white"
    >
      <div className="container-page">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-malva-100 text-malva-800 text-xs font-semibold uppercase tracking-[0.2em]">
            Testimonios
          </span>
          <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl leading-tight text-malva-900">
            Pacientes qué confian en <span className="text-dorado">su salud</span>
          </h2>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-texto-suave">
            Historias reales de pacientes qué han mejorado su calidad de vida
            con un acompañamiento médico personalizado.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="group relative p-8 rounded-3xl bg-white border border-malva-100 shadow-[0_4px_20px_rgba(44,37,48,0.04)] hover:shadow-[0_20px_50px_rgba(138,114,145,0.15)] hover:-translate-y-1 transition-all duration-300"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-8 h-8 text-dorado/70"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6 17h3l2-4V7H5v6h3Zm8 0h3l2-4V7h-6v6h3Z" />
              </svg>

              <p className="mt-4 text-sm md:text-base text-malva-900 leading-relaxed">
                {t.text}
              </p>

              <div className="mt-6 flex items-center gap-3 pt-6 border-t border-malva-100">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-malva-300 to-malva-500 text-white font-semibold flex items-center justify-center">
                  {t.initial}
                </div>
                <div>
                  <p className="text-sm font-semibold text-malva-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-texto-suave">{t.service}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
