"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * TrackingProvider — listener global de cliques para dataLayer/GTM.
 *
 * Captura automaticamente cliques em qualquer elemento (ou ancestral) que
 * tenha o atributo `data-track`. Os dados são enviados para window.dataLayer.
 *
 * Atributos suportados:
 *   data-track="whatsapp_click"         → nome do evento
 *   data-track-location="hero"          → seção da página (hero, footer, etc.)
 *   data-track-label="vacinacao"        → informação adicional (opcional)
 *
 * Exemplo de uso:
 *   <a href="..." data-track="whatsapp_click" data-track-location="hero">
 *     WhatsApp
 *   </a>
 */
export function TrackingProvider() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest("[data-track]");
      if (!target) return;

      const event = target.getAttribute("data-track");
      if (!event) return;

      const location = target.getAttribute("data-track-location") || undefined;
      const label = target.getAttribute("data-track-label") || undefined;

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event,
        ...(location && { location }),
        ...(label && { label }),
      });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
