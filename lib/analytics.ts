"use client";

type DataLayerEvent = Record<string, unknown> & { event: string };

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[];
  }
}

export function pushEvent(event: DataLayerEvent): void {
  if (typeof window === "undefined") return;
  if (!Array.isArray(window.dataLayer)) {
    window.dataLayer = [];
  }
  window.dataLayer.push(event);
}

export const Events = {
  leadSubmitted: (source: string) =>
    pushEvent({ event: "lead_submitted", source }),
  leadFailed: (source: string, reason: string) =>
    pushEvent({ event: "lead_failed", source, reason }),
  popupOpened: (source: string) =>
    pushEvent({ event: "popup_opened", source }),
  ctaClicked: (source: string) =>
    pushEvent({ event: "cta_clicked", source }),
};
