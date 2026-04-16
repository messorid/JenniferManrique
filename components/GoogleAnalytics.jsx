"use client";

import Script from "next/script";
import { useEffect } from "react";

const GA_ID = "G-917LJF7W8W";

export default function GoogleAnalytics() {
  useEffect(() => {
    function handleClick(e) {
      const anchor = e.target.closest("a");
      if (!anchor) return;

      const href = anchor.href || "";
      const isWhatsApp = href.includes("wa.me") || anchor.dataset.track === "whatsapp";
      const isAgenda =
        anchor.dataset.track === "agenda" ||
        anchor.textContent?.toLowerCase().includes("agendar");

      if (isWhatsApp) {
        if (typeof window.gtag === "function") {
          window.gtag("event", "whatsapp_click", {
            event_category: "CTA",
            event_label: anchor.textContent?.trim() || "WhatsApp",
            value: 1,
          });
        }
        return;
      }

      if (isAgenda) {
        if (typeof window.gtag === "function") {
          window.gtag("event", "agenda_click", {
            event_category: "CTA",
            event_label: anchor.textContent?.trim() || "Agendar",
            value: 1,
          });
        }
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
