// Shared real-time FX rate fetcher with multi-API fallback.
// Tries reliable CORS-enabled APIs first, then Frankfurter as last resort.
export async function fetchLiveRates(base: string): Promise<Record<string, number> | null> {
  // Primary: exchangerate-api (free, CORS-enabled)
  try {
    const r = await fetch(`https://api.exchangerate-api.com/v4/latest/${base}`);
    if (r.ok) {
      const d = await r.json();
      if (d?.rates) return d.rates;
    }
  } catch {}
  // Fallback: open.er-api.com
  try {
    const r = await fetch(`https://open.er-api.com/v6/latest/${base}`);
    if (r.ok) {
      const d = await r.json();
      if (d?.rates) return d.rates;
    }
  } catch {}
  // Last resort: Frankfurter (limited currency set, may CORS-fail)
  try {
    const r = await fetch(`https://api.frankfurter.app/latest?from=${base}`);
    if (r.ok) {
      const d = await r.json();
      if (d?.rates) return { ...d.rates, [base]: 1 };
    }
  } catch {}
  return null;
}

// Real-time auto-refresh interval (ms)
export const REALTIME_INTERVAL_MS = 30000;
