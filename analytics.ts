// src/analytics.ts

export const GA_MEASUREMENT_ID = 'G-WGBQPLPKMQ';

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

// Helper to safely get gtag
function getGtag(): ((...args: any[]) => void) | null {
  if (typeof window === 'undefined') return null;
  if (typeof window.gtag === 'function') return window.gtag;
  return null;
}

// Optional page-view helper (you’re already getting auto page_view)
export function trackPageView(path: string) {
  const gtag = getGtag();
  if (!gtag) {
    console.log('[GA] gtag not available for page_view', path);
    return;
  }

  console.log('[GA] page_view', path);
  gtag('event', 'page_view', {
    page_path: path,
  });
}

// Main event helper your Home.tsx uses
export function trackEvent(params: {
  action: string;
  category?: string;
  label?: string;
  value?: number;
}) {
  const gtag = getGtag();

  if (!gtag) {
    console.log('[GA] gtag not available for event', params.action, params);
    return;
  }

  console.log('[GA] sending event', params.action, params);

  gtag('event', params.action, {
    event_category: params.category,
    event_label: params.label,
    value: params.value,
  });
}

