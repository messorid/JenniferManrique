import Link from "next/link";
import { CONTACT } from "@/lib/constants";

const testimonials = [
  {
    initial: "M",
    name: "Maria A.",
    city: "Barinas",
    service: "Diabetes tipo 2",
    stars: 5,
    text: "La doctora me explico todo con mucha paciencia. Despues de meses con tratamiento ya logre estabilizar mi glicemia y me siento mucho mejor. Su seguimiento por WhatsApp entre consultas marca la diferencia.",
  },
  {
    initial: "L",
    name: "Luis R.",
    city: "Barinas",
    service: "Manejo de obesidad",
    stars: 5,
    text: "Con el tratamiento y seguimiento que me indico baje de peso de manera saludable. Lo mejor es que se siente un acompanamiento real, no solo una receta y adios.",
  },
  {
    initial: "C",
    name: "Carla P.",
    city: "Barinas",
    service: "Sindrome de ovario poliquistico",
    stars: 5,
    text: "Por fin encontre una endocrinologa que escucha y explica. El plan que me propuso me ayudo a regular mi ciclo y mejorar mi energia despues de anos sin un diagnostico claro.",
  },
  {
    initial: "A",
    name: "Andreina V.",
    city: "Barinas",
    service: "Hipotiroidismo",
    stars: 5,
    text: "Llevaba dos anos con cansancio y aumento de peso sin explicacion. La Dra. Manrique identifico que mi dosis de levotiroxina no era la correcta y ajusto el tratamiento. En tres meses note un cambio enorme.",
  },
  {
    initial: "J",
    name: "Jose M.",
    city: "Barinas",
    service: "Diabetes tipo 1 con CGM",
    stars: 5,
    text: "Gracias a la Dra. pude colocarme el monitor continuo de glucosa en Barinas sin necesidad de viajar a Caracas. Ahora tengo un control glucemico que nunca habia logrado antes.",
  },
  {
    initial: "P",
    name: "Patricia G.",
    city: "Santa Barbara de Barinas",
    service: "Obesidad con Mounjaro",
    stars: 5,
    text: "Vine desde Santa Barbara y valió completamente la pena. La evaluacion fue muy completa, me explico con detalle el tratamiento con Mounjaro y los resultados en dos meses han sido increibles.",
  },
  {
    initial: "R",
    name: "Rosa E.",
    city: "Barinas",
    service: "Menopausia y metabolismo",
    stars: 5,
    text: "Llegue preocupada por los cambios que sentia con la menopausia. La doctora evaluo todo el impacto metabolico y me explico cada aspecto. Me fui con un plan claro y mucha tranquilidad.",
  },
  {
    initial: "D",
    name: "Diego S.",
    city: "Barinas",
    service: "Nodulos tiroideos",
    stars: 5,
    text: "Me detectaron un nodulo y no sabia que hacer. La Dra. Manrique realizo la ecografia y la evaluacion completa aqui en Barinas, sin necesidad de ir a otra ciudad. Un alivio enorme.",
  },
  {
    initial: "V",
    name: "Valentina C.",
    city: "Barinas",
    service: "Infertilidad hormonal",
    stars: 5,
    text: "Estabamos buscando embarazo sin exito. La evaluacion hormonal que hizo la Dra. Manrique identifico el problema, optimizo mi tratamiento y a los cuatro meses quede embarazada. Le debo mucho.",
  },
  {
    initial: "N",
    name: "Nelson B.",
    city: "Barinas",
    service: "Resistencia a la insulina",
    stars: 5,
    text: "Mi medico general me dijo que tenia resistencia a la insulina pero no sabia como tratarla. La Dra. Manrique me explico todo y disenio un plan que junto con cambios de habitos ha mejorado mis valores notablemente.",
  },
  {
    initial: "G",
    name: "Gabriela T.",
    city: "Barinas",
    service: "SOP y perdida de peso",
    stars: 5,
    text: "Con el SOP siempre fue muy dificil bajar de peso. La doctora abordó el problema desde sus causas hormonales y metabolicas. Fue el enfoque que necesitaba y que ningún otro medico me habia dado.",
  },
  {
    initial: "E",
    name: "Elena M.",
    city: "Barinas",
    service: "Talla baja en ninos",
    stars: 5,
    text: "Mi hijo estaba por debajo del percentil para su edad. La Dra. Manrique hizo una evaluacion muy detallada, descarto causas hormonales y nos dio un seguimiento pediátrico especializado que nos tranquilizo mucho.",
  },
];

const stats = [
  { value: "500+", label: "Pacientes atendidos" },
  { value: "5★", label: "Valoracion promedio" },
  { value: "6+", label: "Anos de experiencia" },
  { value: "2", label: "Sedes en Barinas" },
];

export default function TestimonialsPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-gradient-to-b from-malva-50 via-white to-white">
        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-malva-200/40 blur-3xl pointer-events-none" />
        <div className="container-page relative max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-malva-100 text-malva-800 text-xs font-semibold uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 rounded-full bg-dorado" />
            Testimonios de pacientes
          </span>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-malva-900">
            Pacientes que mejoran su salud{" "}
            <span className="text-dorado">en Barinas</span>
          </h1>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-texto-suave">
            Experiencias reales de pacientes de Barinas y Venezuela que han
            mejorado su calidad de vida con la Dra. Jennifer Manrique,
            endocrinologa especialista.
          </p>
        </div>
      </section>

      <section className="py-10 bg-white border-y border-malva-100">
        <div className="container-page">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-dorado font-bold">
                  {s.value}
                </p>
                <p className="mt-1 text-sm text-texto-suave">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <article
                key={t.name}
                className="group relative p-8 rounded-3xl bg-white border border-malva-100 shadow-[0_4px_20px_rgba(44,37,48,0.04)] hover:shadow-[0_20px_50px_rgba(138,114,145,0.15)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between gap-2">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-dorado/70 shrink-0"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M6 17h3l2-4V7H5v6h3Zm8 0h3l2-4V7h-6v6h3Z" />
                  </svg>
                  <div className="flex gap-0.5" aria-label={`${t.stars} estrellas`}>
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <svg key={i} viewBox="0 0 24 24" className="w-4 h-4 text-dorado" fill="currentColor" aria-hidden="true">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </div>

                <p className="mt-4 text-sm md:text-base text-malva-900 leading-relaxed flex-1">
                  {t.text}
                </p>

                <div className="mt-6 flex items-center gap-3 pt-6 border-t border-malva-100">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-malva-300 to-malva-500 text-white font-semibold flex items-center justify-center shrink-0">
                    {t.initial}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-malva-900">{t.name}</p>
                    <p className="text-xs text-texto-suave">{t.service}</p>
                    <p className="text-xs text-malva-400">{t.city}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-malva-50">
        <div className="container-page max-w-2xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-malva-200 text-malva-800 text-xs font-semibold uppercase tracking-[0.2em]">
            Comparte tu experiencia
          </span>
          <h2 className="mt-6 font-[family-name:var(--font-display)] text-2xl md:text-3xl text-malva-900 leading-tight">
            Fuiste paciente de la Dra. Manrique?
          </h2>
          <p className="mt-4 text-base text-texto-suave">
            Tu experiencia puede ayudar a otros pacientes en Barinas y Venezuela
            a encontrar la atencion que necesitan. Escribenos y comparte tu historia.
          </p>
          <Link
            href={CONTACT.whatsappMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-dorado text-white font-semibold shadow-[0_15px_40px_rgba(201,168,76,0.35)] hover:bg-dorado-dark hover:-translate-y-0.5 transition-all duration-300"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
              <path d="M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .18 5.32.18 11.86c0 2.09.55 4.13 1.6 5.93L0 24l6.4-1.68a11.85 11.85 0 0 0 5.64 1.44h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.15-3.39-8.42Zm-8.47 18.12a9.7 9.7 0 0 1-4.94-1.35l-.36-.21-3.8 1 1.01-3.7-.23-.38a9.76 9.76 0 0 1-1.5-5.1c0-5.4 4.4-9.8 9.83-9.8 2.62 0 5.08 1.02 6.94 2.87a9.74 9.74 0 0 1 2.87 6.93c0 5.4-4.4 9.8-9.81 9.8Z" />
            </svg>
            Compartir mi experiencia
          </Link>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-malva-700 via-malva-800 to-malva-900 relative overflow-hidden">
        <div className="absolute -top-40 -right-20 w-[520px] h-[520px] rounded-full bg-dorado/20 blur-3xl pointer-events-none" />
        <div className="relative container-page text-center max-w-2xl mx-auto text-white">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl leading-tight">
            Comienza tu tratamiento en Barinas
          </h2>
          <p className="mt-4 text-base text-malva-200">
            Agenda tu consulta con la Dra. Jennifer Manrique y da el primer paso
            hacia una mejor salud endocrinologica.
          </p>
          <Link
            href={CONTACT.whatsappMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-dorado text-white font-semibold shadow-[0_15px_40px_rgba(201,168,76,0.35)] hover:bg-dorado-dark hover:-translate-y-0.5 transition-all duration-300"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
              <path d="M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .18 5.32.18 11.86c0 2.09.55 4.13 1.6 5.93L0 24l6.4-1.68a11.85 11.85 0 0 0 5.64 1.44h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.15-3.39-8.42Zm-8.47 18.12a9.7 9.7 0 0 1-4.94-1.35l-.36-.21-3.8 1 1.01-3.7-.23-.38a9.76 9.76 0 0 1-1.5-5.1c0-5.4 4.4-9.8 9.83-9.8 2.62 0 5.08 1.02 6.94 2.87a9.74 9.74 0 0 1 2.87 6.93c0 5.4-4.4 9.8-9.81 9.8Z" />
            </svg>
            Agendar consulta por WhatsApp
          </Link>
        </div>
      </section>
    </>
  );
}
