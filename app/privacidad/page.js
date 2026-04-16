import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL, CONTACT } from "@/lib/constants";

export const metadata = {
  title: "Politica de Privacidad | Dra. Jennifer Manrique",
  description:
    "Politica de privacidad del sitio web de la Dra. Jennifer Manrique, endocrinologa en Barinas. Informacion sobre el tratamiento de datos personales.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE_URL}/privacidad` },
};

export default function PrivacidadPage() {
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
            Politica de Privacidad
          </h1>
          <p className="mt-3 text-sm text-texto-suave">
            Ultima actualizacion: {year}
          </p>

          <div className="mt-10 prose-section space-y-10">

            <Section title="1. Responsable del tratamiento">
              <p>
                El responsable del sitio web <strong>www.drajennifermanrique.com</strong> es
                la Dra. Jennifer Manrique, medica especialista en Endocrinologia,
                con consultorio en el Hospital Privado San Juan, Consultorio 34,
                Piso 2, Barinas, Venezuela.
              </p>
              <p>Contacto: <a href={`mailto:${CONTACT.email}`} className="text-dorado-dark hover:underline">{CONTACT.email}</a></p>
            </Section>

            <Section title="2. Datos que recopilamos">
              <p>Este sitio web puede recopilar los siguientes datos:</p>
              <ul>
                <li><strong>Datos de contacto:</strong> nombre, numero de telefono y mensaje cuando el usuario inicia contacto a traves de WhatsApp o el formulario de contacto.</li>
                <li><strong>Datos de navegacion:</strong> direccion IP, tipo de navegador, paginas visitadas y tiempo de permanencia, a traves de cookies tecnicas y analiticas.</li>
              </ul>
              <p>
                No recopilamos datos sensibles de salud a traves de este sitio web.
                La informacion medica se gestiona exclusivamente en el entorno de
                la consulta medica presencial.
              </p>
            </Section>

            <Section title="3. Finalidad del tratamiento">
              <p>Los datos recopilados se utilizan para:</p>
              <ul>
                <li>Gestionar solicitudes de citas y consultas realizadas por el usuario.</li>
                <li>Mejorar la experiencia de navegacion en el sitio web.</li>
                <li>Analizar el trafico del sitio de forma anonima y agregada.</li>
              </ul>
              <p>
                No utilizamos los datos para envio de comunicaciones comerciales
                no solicitadas ni los cedemos a terceros salvo obligacion legal.
              </p>
            </Section>

            <Section title="4. Base legal">
              <p>
                El tratamiento de datos se basa en el consentimiento del usuario
                al utilizar el sitio web y en el interes legitimo de gestionar
                las solicitudes de informacion recibidas.
              </p>
            </Section>

            <Section title="5. Conservacion de los datos">
              <p>
                Los datos de contacto se conservan durante el tiempo necesario
                para responder a la solicitud y, en su caso, durante el plazo
                de prescripcion de posibles responsabilidades legales.
              </p>
            </Section>

            <Section title="6. Derechos del usuario">
              <p>El usuario tiene derecho a:</p>
              <ul>
                <li>Acceder a sus datos personales.</li>
                <li>Solicitar la rectificacion o supresion de sus datos.</li>
                <li>Oponerse al tratamiento o solicitar su limitacion.</li>
                <li>Retirar el consentimiento en cualquier momento.</li>
              </ul>
              <p>
                Para ejercer estos derechos, puede contactar a{" "}
                <a href={`mailto:${CONTACT.email}`} className="text-dorado-dark hover:underline">{CONTACT.email}</a>.
              </p>
            </Section>

            <Section title="7. Cookies">
              <p>
                Este sitio utiliza cookies. Para informacion detallada sobre
                el uso de cookies, consulta nuestra{" "}
                <a href="/cookies" className="text-dorado-dark hover:underline">Politica de Cookies</a>.
              </p>
            </Section>

            <Section title="8. Seguridad">
              <p>
                Adoptamos medidas tecnicas y organizativas para proteger los
                datos personales contra acceso no autorizado, perdida o
                destruccion. El sitio web usa protocolo HTTPS para la
                transmision segura de datos.
              </p>
            </Section>

            <Section title="9. Cambios en esta politica">
              <p>
                Podemos actualizar esta politica periodicamente. La fecha de
                ultima actualizacion aparece al inicio de este documento.
                El uso continuado del sitio implica la aceptacion de los cambios.
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
