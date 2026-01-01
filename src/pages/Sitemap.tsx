import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { 
  Map, 
  Home, 
  DollarSign, 
  Bitcoin, 
  TrendingUp, 
  LineChart,
  BookOpen,
  Users,
  Mail,
  Calculator,
  Eye,
  Shield,
  Cookie,
  FileText,
  Globe,
  Building2,
  Coins,
  BarChart3,
  Landmark
} from "lucide-react";

const Sitemap = () => {
  const sitemapSections = [
    {
      title: "Páginas Principais",
      icon: Home,
      color: "from-primary to-primary/70",
      links: [
        { name: "Início", path: "/" },
        { name: "Sobre", path: "/sobre" },
        { name: "Contato", path: "/contato" },
        { name: "Blog", path: "/blog" },
        { name: "Calculadora de Juros", path: "/calculadora-juros" },
        { name: "Ver Todas Cotações", path: "/ver-todas-cotacoes" },
      ]
    },
    {
      title: "Câmbio",
      icon: DollarSign,
      color: "from-emerald-500 to-emerald-600",
      links: [
        { name: "Câmbio - Página Principal", path: "/cambio" },
        { name: "Dólar Hoje", path: "/cambio/dolar" },
        { name: "Euro Hoje", path: "/cambio/euro" },
        { name: "Franco Suíço Hoje", path: "/cambio/franco-suico" },
        { name: "Iene Hoje", path: "/cambio/iene" },
        { name: "Libras Esterlinas Hoje", path: "/cambio/libras" },
        { name: "Peso Argentino Hoje", path: "/cambio/peso-argentino" },
        { name: "Peso Chileno Hoje", path: "/cambio/peso-chileno" },
        { name: "Peso Mexicano Hoje", path: "/cambio/peso-mexicano" },
        { name: "Peso Uruguaio Hoje", path: "/cambio/peso-uruguaio" },
        { name: "Rand Sul-Africano Hoje", path: "/cambio/rand-sul-africano" },
        { name: "Rublo Russo Hoje", path: "/cambio/rublo-russo" },
        { name: "Rupia Indiana Hoje", path: "/cambio/rupia-indiana" },
        { name: "Yuan Chinês Hoje", path: "/cambio/yuan-chines" },
        { name: "Won Sul-Coreano Hoje", path: "/cambio/won-sul-coreano" },
        { name: "USD/BRL", path: "/cambio/usd-brl" },
        { name: "EUR/BRL", path: "/cambio/eur-brl" },
        { name: "GBP/BRL", path: "/cambio/gbp-brl" },
        { name: "CAD/BRL", path: "/cambio/cad-brl" },
      ]
    },
    {
      title: "Criptomoedas",
      icon: Bitcoin,
      color: "from-orange-500 to-amber-500",
      links: [
        { name: "Criptomoedas - Página Principal", path: "/crypto" },
        { name: "Bitcoin Hoje", path: "/crypto/bitcoin" },
        { name: "Ethereum Hoje", path: "/crypto/ethereum" },
        { name: "Binance Coin Hoje", path: "/crypto/binance-coin" },
        { name: "Ripple Hoje", path: "/crypto/ripple" },
        { name: "Cardano Hoje", path: "/crypto/cardano" },
        { name: "Litecoin Hoje", path: "/crypto/litecoin" },
        { name: "Polkadot Hoje", path: "/crypto/polkadot" },
        { name: "Avalanche Hoje", path: "/crypto/avalanche" },
        { name: "Dash Hoje", path: "/crypto/dash" },
        { name: "Solana Hoje", path: "/crypto/solana" },
        { name: "USDT (Tether) Hoje", path: "/crypto/usdt" },
        { name: "USDC Hoje", path: "/crypto/usdc" },
        { name: "DAI Hoje", path: "/crypto/dai" },
        { name: "Uniswap Hoje", path: "/crypto/uniswap" },
        { name: "Chainlink Hoje", path: "/crypto/chainlink" },
        { name: "Aave Hoje", path: "/crypto/aave" },
      ]
    },
    {
      title: "Ações - NYSE",
      icon: Building2,
      color: "from-blue-500 to-blue-600",
      links: [
        { name: "Ações - Página Principal", path: "/acoes" },
        { name: "PIMCO Hoje", path: "/acoes/pimco" },
        { name: "Nuveen Hoje", path: "/acoes/nuveen" },
        { name: "Eagle Point Hoje", path: "/acoes/eagle-point" },
        { name: "Invesco Hoje", path: "/acoes/invesco" },
        { name: "Allspring Hoje", path: "/acoes/allspring" },
        { name: "BlackRock Hoje", path: "/acoes/blackrock" },
      ]
    },
    {
      title: "Ações - NASDAQ",
      icon: TrendingUp,
      color: "from-purple-500 to-purple-600",
      links: [
        { name: "Apple Hoje", path: "/acoes/apple" },
        { name: "Amazon Hoje", path: "/acoes/amazon" },
        { name: "Cisco Hoje", path: "/acoes/cisco" },
        { name: "Intel Hoje", path: "/acoes/intel" },
        { name: "Kraft Heinz Hoje", path: "/acoes/kraft-heinz" },
        { name: "Microsoft Hoje", path: "/acoes/microsoft" },
        { name: "Monster Beverage Hoje", path: "/acoes/monster" },
        { name: "Meta Hoje", path: "/acoes/meta" },
        { name: "NVIDIA Hoje", path: "/acoes/nvidia" },
        { name: "Vertex Pharm Hoje", path: "/acoes/vertex" },
      ]
    },
    {
      title: "Ações - B3 Brasil",
      icon: Landmark,
      color: "from-green-500 to-green-600",
      links: [
        { name: "Carrefour Hoje", path: "/acoes/carrefour" },
        { name: "Hapvida Hoje", path: "/acoes/hapvida" },
        { name: "Magazine Luiz Hoje", path: "/acoes/magazine-luiz" },
        { name: "Bradesco Hoje", path: "/acoes/bradesco" },
        { name: "Ambev Hoje", path: "/acoes/ambev" },
        { name: "Assaí Hoje", path: "/acoes/assai" },
      ]
    },
    {
      title: "Ações - Xangai & Índices",
      icon: BarChart3,
      color: "from-red-500 to-red-600",
      links: [
        { name: "Bank of China Hoje", path: "/acoes/bank-of-china" },
        { name: "China Shenhua Energy Hoje", path: "/acoes/china-shenhua" },
        { name: "Harvest Fund Hoje", path: "/acoes/harvest-fund" },
        { name: "300 ETF Hoje", path: "/acoes/300-etf" },
        { name: "50 ETF Hoje", path: "/acoes/50-etf" },
        { name: "S&P 500 Hoje", path: "/acoes/sp500" },
      ]
    },
    {
      title: "Forex - Pares Principais",
      icon: Globe,
      color: "from-cyan-500 to-cyan-600",
      links: [
        { name: "Forex - Página Principal", path: "/forex" },
        { name: "EUR/USD Hoje", path: "/forex/principais/eur-usd" },
        { name: "USD/JPY Hoje", path: "/forex/principais/usd-jpy" },
        { name: "GBP/USD Hoje", path: "/forex/principais/gbp-usd" },
        { name: "USD/CHF Hoje", path: "/forex/principais/usd-chf" },
        { name: "AUD/USD Hoje", path: "/forex/principais/aud-usd" },
        { name: "USD/CAD Hoje", path: "/forex/principais/usd-cad" },
        { name: "NZD/USD Hoje", path: "/forex/principais/nzd-usd" },
      ]
    },
    {
      title: "Forex - Pares Secundários",
      icon: Coins,
      color: "from-teal-500 to-teal-600",
      links: [
        { name: "EUR/GBP Hoje", path: "/forex/secundarios/eur-gbp" },
        { name: "EUR/AUD Hoje", path: "/forex/secundarios/eur-aud" },
        { name: "EUR/CAD Hoje", path: "/forex/secundarios/eur-cad" },
        { name: "EUR/NZD Hoje", path: "/forex/secundarios/eur-nzd" },
        { name: "GBP/JPY Hoje", path: "/forex/secundarios/gbp-jpy" },
        { name: "GBP/AUD Hoje", path: "/forex/secundarios/gbp-aud" },
        { name: "GBP/CAD Hoje", path: "/forex/secundarios/gbp-cad" },
        { name: "AUD/JPY Hoje", path: "/forex/secundarios/aud-jpy" },
        { name: "CAD/JPY Hoje", path: "/forex/secundarios/cad-jpy" },
        { name: "NZD/JPY Hoje", path: "/forex/secundarios/nzd-jpy" },
        { name: "AUD/CAD Hoje", path: "/forex/secundarios/aud-cad" },
        { name: "AUD/NZD Hoje", path: "/forex/secundarios/aud-nzd" },
        { name: "CAD/CHF Hoje", path: "/forex/secundarios/cad-chf" },
        { name: "NZD/CAD Hoje", path: "/forex/secundarios/nzd-cad" },
      ]
    },
    {
      title: "Forex - Pares Exóticos",
      icon: LineChart,
      color: "from-indigo-500 to-indigo-600",
      links: [
        { name: "USD/TRY Hoje", path: "/forex/exoticos/usd-try" },
        { name: "USD/ZAR Hoje", path: "/forex/exoticos/usd-zar" },
        { name: "USD/MXN Hoje", path: "/forex/exoticos/usd-mxn" },
        { name: "USD/SEK Hoje", path: "/forex/exoticos/usd-sek" },
        { name: "USD/NOK Hoje", path: "/forex/exoticos/usd-nok" },
        { name: "USD/PLN Hoje", path: "/forex/exoticos/usd-pln" },
        { name: "EUR/TRY Hoje", path: "/forex/exoticos/eur-try" },
        { name: "GBP/TRY Hoje", path: "/forex/exoticos/gbp-try" },
        { name: "AUD/SGD Hoje", path: "/forex/exoticos/aud-sgd" },
        { name: "EUR/ZAR Hoje", path: "/forex/exoticos/eur-zar" },
        { name: "USD/HKD Hoje", path: "/forex/exoticos/usd-hkd" },
        { name: "USD/THB Hoje", path: "/forex/exoticos/usd-thb" },
        { name: "USD/INR Hoje", path: "/forex/exoticos/usd-inr" },
        { name: "USD/RUB Hoje", path: "/forex/exoticos/usd-rub" },
      ]
    },
    {
      title: "Páginas Legais",
      icon: Shield,
      color: "from-slate-500 to-slate-600",
      links: [
        { name: "Política de Privacidade", path: "/politica-de-privacidade" },
        { name: "Política de Cookies", path: "/politica-de-cookies" },
        { name: "Termos de Uso", path: "/termos-de-uso" },
      ]
    },
  ];

  // Count total links
  const totalLinks = sitemapSections.reduce((acc, section) => acc + section.links.length, 0);

  return (
    <Layout>
      <SEO path="/sitemap" />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/70 mb-6 shadow-lg">
            <Map className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Mapa do Site
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Navegue por todas as {totalLinks} páginas do Cotação de Hoje
          </p>
        </div>

        {/* Sitemap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sitemapSections.map((section, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl border border-border/50 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Section Header */}
              <div className={`bg-gradient-to-r ${section.color} p-4`}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">{section.title}</h2>
                    <p className="text-xs text-white/80">{section.links.length} páginas</p>
                  </div>
                </div>
              </div>
              
              {/* Links List */}
              <div className="p-4">
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        to={link.path}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-1 px-2 rounded-lg hover:bg-muted/50"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* XML Sitemap Link */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-muted/50 rounded-full px-6 py-3 border border-border/50">
            <FileText className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              Sitemap XML para buscadores: 
            </span>
            <a 
              href="/sitemap.xml" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline font-medium"
            >
              /sitemap.xml
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-card rounded-xl border border-border/50 p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-1">{totalLinks}</div>
            <div className="text-sm text-muted-foreground">Total de Páginas</div>
          </div>
          <div className="bg-card rounded-xl border border-border/50 p-6 text-center">
            <div className="text-3xl font-bold text-emerald-500 mb-1">19</div>
            <div className="text-sm text-muted-foreground">Cotações de Câmbio</div>
          </div>
          <div className="bg-card rounded-xl border border-border/50 p-6 text-center">
            <div className="text-3xl font-bold text-orange-500 mb-1">17</div>
            <div className="text-sm text-muted-foreground">Criptomoedas</div>
          </div>
          <div className="bg-card rounded-xl border border-border/50 p-6 text-center">
            <div className="text-3xl font-bold text-blue-500 mb-1">35</div>
            <div className="text-sm text-muted-foreground">Pares Forex</div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Sitemap;
