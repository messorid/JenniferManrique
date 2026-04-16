import Link from "next/link";
import { CONTACT } from "@/lib/constants";

export default function WhatsAppSticky() {
  return (
    <div className="fixed bottom-5 right-5 z-40">
      <Link
        href={CONTACT.whatsappMessage}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar cita por WhatsApp"
        data-track="whatsapp"
        className="flex items-center gap-3 px-5 py-3.5 rounded-full text-white font-semibold shadow-[0_8px_30px_rgba(201,168,76,0.4)] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(201,168,76,0.55)] transition-all duration-300"
        style={{ background: "linear-gradient(135deg, #6E5A74 0%, #C9A84C 100%)" }}
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="currentColor" aria-hidden="true">
          <path d="M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .18 5.32.18 11.86c0 2.09.55 4.13 1.6 5.93L0 24l6.4-1.68a11.85 11.85 0 0 0 5.64 1.44h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.15-3.39-8.42Zm-8.47 18.12a9.7 9.7 0 0 1-4.94-1.35l-.36-.21-3.8 1 1.01-3.7-.23-.38a9.76 9.76 0 0 1-1.5-5.1c0-5.4 4.4-9.8 9.83-9.8 2.62 0 5.08 1.02 6.94 2.87a9.74 9.74 0 0 1 2.87 6.93c0 5.4-4.4 9.8-9.81 9.8Z" />
        </svg>
        <span className="text-sm">Agendar Cita Ahora</span>
      </Link>
    </div>
  );
}
