// src/analytics.ts
export const GA_MEASUREMENT_ID = "G-WGBQPLPKMQ";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

// Track a page view (for route changes)
export function trackPageView(path: string) {
  if (!window.gtag) return;
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: path,
  });
}

// Generic event tracking helper
export function trackEvent(params: {
  action: string;
  category?: string;
  label?: string;
  value?: number;
}) {
  if (!window.gtag) return;

  const { action, category, label, value } = params;

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
}

