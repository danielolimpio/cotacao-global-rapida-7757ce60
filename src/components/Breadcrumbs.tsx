import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { useEffect } from "react";

interface BreadcrumbItem {
  label: string;
  path: string;
}

const Breadcrumbs = () => {
  const location = useLocation();
  
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const paths = location.pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [{ label: 'Início', path: '/' }];
    
    const routeLabels: Record<string, string> = {
      'cambio': 'Câmbio',
      'crypto': 'Criptomoedas',
      'acoes': 'Ações',
      'forex': 'Forex',
      'sobre': 'Sobre',
      'contato': 'Contato',
      'calculadora-juros': 'Calculadora de Juros',
      'ver-todas-cotacoes': 'Ver Todas Cotações',
      'blog': 'Blog',
      
      // Páginas Legais
      'politica-de-privacidade': 'Política de Privacidade',
      'politica-de-cookies': 'Política de Cookies',
      'termos-de-uso': 'Termos de Uso',
      'sitemap': 'Sitemap',
      
      // Câmbio
      'dolar': 'Dólar Hoje',
      'euro': 'Euro Hoje',
      'franco-suico': 'Franco Suíço Hoje',
      'iene': 'Iene Japonês Hoje',
      'libras': 'Libras Esterlinas Hoje',
      'peso-argentino': 'Peso Argentino Hoje',
      'peso-chileno': 'Peso Chileno Hoje',
      'peso-mexicano': 'Peso Mexicano Hoje',
      'peso-uruguaio': 'Peso Uruguaio Hoje',
      'rand-sul-africano': 'Rand Sul-Africano Hoje',
      'rublo-russo': 'Rublo Russo Hoje',
      'rupia-indiana': 'Rupia Indiana Hoje',
      'yuan-chines': 'Yuan Chinês Hoje',
      'won-sul-coreano': 'Won Sul-Coreano Hoje',
      'usd-brl': 'USD/BRL Hoje',
      'eur-brl': 'EUR/BRL Hoje',
      'gbp-brl': 'GBP/BRL Hoje',
      'cad-brl': 'CAD/BRL Hoje',
      
      // Crypto
      'bitcoin': 'Bitcoin Hoje',
      'ethereum': 'Ethereum Hoje',
      'binance-coin': 'Binance Coin Hoje',
      'ripple': 'Ripple (XRP) Hoje',
      'cardano': 'Cardano Hoje',
      'litecoin': 'Litecoin Hoje',
      'polkadot': 'Polkadot Hoje',
      'avalanche': 'Avalanche Hoje',
      'dash': 'Dash Hoje',
      'solana': 'Solana Hoje',
      'usdt': 'USDT (Tether) Hoje',
      'usdc': 'USDC Hoje',
      'dai': 'DAI Hoje',
      'uniswap': 'Uniswap Hoje',
      'chainlink': 'Chainlink Hoje',
      'aave': 'Aave Hoje',
      
      // Ações
      'pimco': 'PIMCO Hoje',
      'nuveen': 'Nuveen Hoje',
      'eagle-point': 'Eagle Point Hoje',
      'invesco': 'Invesco Hoje',
      'allspring': 'Allspring Hoje',
      'blackrock': 'BlackRock Hoje',
      'apple': 'Apple Hoje',
      'amazon': 'Amazon Hoje',
      'cisco': 'Cisco Hoje',
      'intel': 'Intel Hoje',
      'kraft-heinz': 'Kraft Heinz Hoje',
      'microsoft': 'Microsoft Hoje',
      'monster': 'Monster Beverage Hoje',
      'meta': 'Meta Hoje',
      'nvidia': 'NVIDIA Hoje',
      'vertex': 'Vertex Pharmaceuticals Hoje',
      'carrefour': 'Carrefour Hoje',
      'hapvida': 'Hapvida Hoje',
      'magazine-luiz': 'Magazine Luiza Hoje',
      'bradesco': 'Bradesco Hoje',
      'ambev': 'Ambev Hoje',
      'assai': 'Assaí Hoje',
      'bank-of-china': 'Bank of China Hoje',
      'china-shenhua': 'China Shenhua Energy Hoje',
      'harvest-fund': 'Harvest Fund Hoje',
      '300-etf': '300 ETF Hoje',
      '50-etf': '50 ETF Hoje',
      'sp500': 'S&P 500 Hoje',
      
      // Forex
      'principais': 'Pares Principais',
      'secundarios': 'Pares Secundários',
      'exoticos': 'Pares Exóticos',
      'eur-usd': 'EUR/USD Hoje',
      'usd-jpy': 'USD/JPY Hoje',
      'gbp-usd': 'GBP/USD Hoje',
      'usd-chf': 'USD/CHF Hoje',
      'aud-usd': 'AUD/USD Hoje',
      'usd-cad': 'USD/CAD Hoje',
      'nzd-usd': 'NZD/USD Hoje',
      'eur-gbp': 'EUR/GBP Hoje',
      'eur-aud': 'EUR/AUD Hoje',
      'eur-cad': 'EUR/CAD Hoje',
      'eur-nzd': 'EUR/NZD Hoje',
      'gbp-jpy': 'GBP/JPY Hoje',
      'gbp-aud': 'GBP/AUD Hoje',
      'gbp-cad': 'GBP/CAD Hoje',
      'aud-jpy': 'AUD/JPY Hoje',
      'cad-jpy': 'CAD/JPY Hoje',
      'nzd-jpy': 'NZD/JPY Hoje',
      'aud-cad': 'AUD/CAD Hoje',
      'aud-nzd': 'AUD/NZD Hoje',
      'cad-chf': 'CAD/CHF Hoje',
      'nzd-cad': 'NZD/CAD Hoje',
      'usd-try': 'USD/TRY Hoje',
      'usd-zar': 'USD/ZAR Hoje',
      'usd-mxn': 'USD/MXN Hoje',
      'usd-sek': 'USD/SEK Hoje',
      'usd-nok': 'USD/NOK Hoje',
      'usd-pln': 'USD/PLN Hoje',
      'eur-try': 'EUR/TRY Hoje',
      'gbp-try': 'GBP/TRY Hoje',
      'aud-sgd': 'AUD/SGD Hoje',
      'eur-zar': 'EUR/ZAR Hoje',
      'usd-hkd': 'USD/HKD Hoje',
      'usd-thb': 'USD/THB Hoje',
      'usd-inr': 'USD/INR Hoje',
      'usd-rub': 'USD/RUB Hoje',
    };
    
    let currentPath = '';
    paths.forEach((segment) => {
      currentPath += `/${segment}`;
      const label = routeLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
      breadcrumbs.push({ label, path: currentPath });
    });
    
    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();
  
  // Don't show breadcrumbs on homepage
  if (location.pathname === '/') {
    return null;
  }

  // Generate Schema.org structured data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.label,
      "item": `https://cotacaodehoje.com${crumb.path}`
    }))
  };

  useEffect(() => {
    // Inject schema.org data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    script.id = 'breadcrumb-schema';
    
    // Remove previous schema if exists
    const existingSchema = document.getElementById('breadcrumb-schema');
    if (existingSchema) {
      existingSchema.remove();
    }
    
    document.head.appendChild(script);
    
    return () => {
      const schemaToRemove = document.getElementById('breadcrumb-schema');
      if (schemaToRemove) {
        schemaToRemove.remove();
      }
    };
  }, [location.pathname]);

  return (
    <nav aria-label="Breadcrumb" className="bg-muted/30 border-b">
      <div className="container mx-auto px-4 py-3">
        <ol className="flex flex-wrap items-center gap-2 text-sm">
          {breadcrumbs.map((crumb, index) => (
            <li key={crumb.path} className="flex items-center gap-2">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              )}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-foreground font-medium flex items-center gap-1.5">
                  {index === 0 && <Home className="w-4 h-4" />}
                  {crumb.label}
                </span>
              ) : (
                <Link
                  to={crumb.path}
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5"
                >
                  {index === 0 && <Home className="w-4 h-4" />}
                  {crumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
