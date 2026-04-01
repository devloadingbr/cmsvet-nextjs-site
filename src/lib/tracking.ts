/**
 * Utilitário para envio programático de eventos ao dataLayer (GTM/GA4).
 *
 * Use para casos onde data-track attributes não são possíveis,
 * como submissão de formulários ou eventos assíncronos.
 *
 * Exemplo:
 *   import { trackEvent } from "@/lib/tracking";
 *   trackEvent("form_submit", { location: "contato", label: "mensagem" });
 */
export function trackEvent(
  event: string,
  params?: Record<string, unknown>
) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}
