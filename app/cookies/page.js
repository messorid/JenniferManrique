import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL, CONTACT } from "@/lib/constants";

export const metadata = {
  title: "Politica de Cookies | Dra. Jennifer Manrique",
  description:
    "Politica de uso de cookies del sitio web de la Dra. Jennifer Manrique, endocrinologa en Barinas.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE_URL}/cookies` },
};

const cookieTable = [
  {
    nombre: "cookie_consent",
    tipo: "Tecnica / Funcional",
    duracion: "1 ano",
    finalidad: "Almacena la preferencia de cookies del usuario para no volver a mostrar el aviso.",
    tercero: "No",
  },
  {
    nombre: "_ga, _ga_*",
    tipo: "Analitica",
    duracion: "2 anos",
    finalidad: "Google Analytics. Contabiliza visitas y comportamiento de navegacion de forma anonima.",
    tercero: "Google LLC",
  },
  {
    nombre: "_gid",
    tipo: "Analitica",
    duracion: "24 horas",
    finalidad: "Google Analytics. Distingue usuarios unicos durante una sesion.",
    tercero: "Google LLC",
  },
];

export default function CookiesPage() {
  const year = new Date().getFullYear();
  return (
    <>
      <Header />
      <main className="pt-32 pb-20 bg-gradient-to-b from-malva-50 via-white to-white">
        <div className="container-page max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-malva-100 text-malva-800 text-xs font-semibold uppercase tracking-[0.2em]">
            Legal
          </span>
          <h1 className="mt-5 font-[family-name:var(--font-display)] text-3xl md:text-4xl text-malva-900">
            Politica de Cookies
          </h1>
          <p className="mt-3 text-sm text-texto-suave">
            Ultima actualizacion: {year}
          </p>

          <div className="mt-10 space-y-10">

            <Section title="1. Que son las cookies">
              <p>
                Las cookies son pequenos archivos de texto que los sitios web
                almacenan en el navegador del usuario. Permiten al sitio
                recordar informacion sobre tu visita, como el idioma de
                preferencia y la configuracion, lo que facilita tu proxima
                visita y hace que el sitio te resulte mas util.
              </p>
            </Section>

            <Section title="2. Como usamos las cookies">
              <p>
                El sitio <strong>www.drajennifermanrique.com</strong> utiliza
                cookies propias y de terceros con las siguientes finalidades:
              </p>
              <ul>
                <li><strong>Cookies tecnicas:</strong> Necesarias para el funcionamiento basico del sitio, como recordar tu preferencia de cookies.</li>
                <li><strong>Cookies analiticas:</strong> Nos permiten conocer el numero de visitas y el comportamiento de los usuarios en el sitio de forma anonima, para mejorar la navegacion.</li>
              </ul>
              <p>
                No utilizamos cookies de publicidad ni de seguimiento publicitario.
              </p>
            </Section>

            <Section title="3. Detalle de cookies utilizadas">
              <div className="overflow-x-auto rounded-xl border border-malva-100">
                <table className="w-full text-sm text-left">
                  <thead className="bg-malva-50 text-malva-800 text-xs uppercase tracking-wider">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Cookie</th>
                      <th className="px-4 py-3 font-semibold">Tipo</th>
                      <th className="px-4 py-3 font-semibold">Duracion</th>
                      <th className="px-4 py-3 font-semibold">Finalidad</th>
                      <th className="px-4 py-3 font-semibold">Tercero</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-malva-100">
                    {cookieTable.map((row) => (
                      <tr key={row.nombre} className="bg-white hover:bg-malva-50 transition-colors">
                        <td className="px-4 py-3 font-mono text-xs text-malva-900 whitespace-nowrap">{row.nombre}</td>
                        <td className="px-4 py-3 text-texto-suave">{row.tipo}</td>
                        <td className="px-4 py-3 text-texto-suave whitespace-nowrap">{row.duracion}</td>
                        <td className="px-4 py-3 text-texto-suave">{row.finalidad}</td>
                        <td className="px-4 py-3 text-texto-suave">{row.tercero}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>

            <Section title="4. Como gestionar las cookies">
              <p>
                Al acceder al sitio por primera vez, se muestra un aviso que
                permite aceptar o rechazar las cookies no esenciales.
              </p>
              <p>
                Tambien puedes gestionar o deshabilitar las cookies desde la
                configuracion de tu navegador:
              </p>
              <ul>
                <li><strong>Google Chrome:</strong> Configuracion &gt; Privacidad y seguridad &gt; Cookies</li>
                <li><strong>Mozilla Firefox:</strong> Opciones &gt; Privacidad y seguridad</li>
                <li><strong>Safari:</strong> Preferencias &gt; Privacidad</li>
                <li><strong>Microsoft Edge:</strong> Configuracion &gt; Privacidad, busqueda y servicios</li>
              </ul>
              <p>
                Ten en cuenta que deshabilitar ciertas cookies puede afectar
                la funcionalidad del sitio.
              </p>
            </Section>

            <Section title="5. Cookies de terceros">
              <p>
                Este sitio puede utilizar Google Analytics (Google LLC) para
                el analisis del trafico web. Google puede utilizar estos datos
                de acuerdo con su propia politica de privacidad, disponible en
                su sitio oficial. No tenemos control sobre las cookies que
                establece Google.
              </p>
            </Section>

            <Section title="6. Actualizaciones de esta politica">
              <p>
                Podemos actualizar esta politica para reflejar cambios en las
                cookies que utilizamos. La fecha de ultima actualizacion
                aparece al inicio del documento.
              </p>
            </Section>

            <Section title="7. Contacto">
              <p>
                Para cualquier consulta sobre esta politica de cookies, puedes
                contactarnos en{" "}
                <a href={`mailto:${CONTACT.email}`} className="text-dorado-dark hover:underline">
                  {CONTACT.email}
                </a>.
              </p>
            </Section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children }) {
  return (
    <div className="pb-8 border-b border-malva-100 last:border-0 last:pb-0">
      <h2 className="font-[family-name:var(--font-display)] text-xl text-malva-900 mb-4">
        {title}
      </h2>
      <div className="space-y-3 text-base text-texto-suave leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_strong]:text-malva-900 [&_strong]:font-semibold">
        {children}
      </div>
    </div>
  );
}
