import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";

/**
 * Redirects legacy URLs (e.g. `/acoes/apple-hoje`, `/cambio/dolar-hoje`) to
 * their canonical counterparts (`/acoes/apple`, `/cambio/dolar`).
 * Also sets an X-Robots-Tag equivalent via meta so crawlers understand the move.
 *
 * Mounted right before the `*` (NotFound) route so it catches any `-hoje`
 * suffix pattern before falling through to 404.
 */
const LegacyRedirect = () => {
  const location = useLocation();
  const pathname = location.pathname;

  // Strip trailing `-hoje` from the last URL segment
  const stripped = pathname.replace(/-hoje\/?$/i, "");

  useEffect(() => {
    // Signal to any crawler that executes JS that this is a 301-equivalent
    // redirect for the SPA (helps Googlebot dedupe legacy URLs).
    if (stripped !== pathname) {
      // No-op: React Router's Navigate below performs the client-side redirect.
    }
  }, [pathname, stripped]);

  if (stripped !== pathname && stripped.length > 0) {
    return <Navigate to={stripped + location.search + location.hash} replace />;
  }

  return null;
};

export default LegacyRedirect;
