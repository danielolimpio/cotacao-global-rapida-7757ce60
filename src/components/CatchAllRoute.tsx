import { Navigate, useLocation } from "react-router-dom";
import NotFound from "@/pages/NotFound";

/**
 * Catches every unmatched route. If the path ends in the legacy `-hoje`
 * suffix (from the site's earlier URL scheme still indexed by Google),
 * client-side redirects to the canonical clean URL. Otherwise renders
 * the real 404 page.
 */
const CatchAllRoute = () => {
  const location = useLocation();
  const pathname = location.pathname;

  if (/-hoje\/?$/i.test(pathname)) {
    const stripped = pathname.replace(/-hoje\/?$/i, "");
    if (stripped && stripped !== pathname) {
      return <Navigate to={stripped + location.search + location.hash} replace />;
    }
  }

  return <NotFound />;
};

export default CatchAllRoute;
