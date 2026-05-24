import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import QuoteCard from "@/components/QuoteCard";
import TradingViewWidget from "@/components/TradingViewWidget";
import UniversalConverter from "@/components/UniversalConverter";
import EducationalSection from "@/components/EducationalSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Globe, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import useRealTimeQuotes from "@/hooks/useRealTimeQuotes";

const Index = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Cotação de Hoje",
    "description": "Plataforma de cotações financeiras em tempo real",
    "url": "https://cotacaodehoje.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://cotacaodehoje.com/busca?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const {
    quotes,
    loading
  } = useRealTimeQuotes(['USDBRL', 'EURBRL', 'GBPBRL', 'CADBRL']);
  const getQuoteData = (symbol: string, flags: {
    flag1: string;
    flag2: string;
  }, pairName: string) => {
    const quote = quotes[symbol];
    if (!quote) return null;
    return {
      pair: pairName,
      price: quote.price.toFixed(2),
      change: quote.change >= 0 ? `+${quote.change.toFixed(3)}` : quote.change.toFixed(3),
      changePercent: quote.changePercent >= 0 ? `+${quote.changePercent.toFixed(2)}%` : `${quote.changePercent.toFixed(2)}%`,
      flag1: flags.flag1,
      flag2: flags.flag2,
      isPositive: quote.change >= 0
    };
  };
  const popularQuotes = [getQuoteData('USDBRL', {
    flag1: "🇺🇸",
    flag2: "🇧🇷"
  }, "USD/BRL"), getQuoteData('EURBRL', {
    flag1: "🇪🇺",
    flag2: "🇧🇷"
  }, "EUR/BRL"), getQuoteData('GBPBRL', {
    flag1: "🇬🇧",
    flag2: "🇧🇷"
  }, "GBP/BRL"), getQuoteData('CADBRL', {
    flag1: "🇨🇦",
    flag2: "🇧🇷"
  }, "CAD/BRL")].filter(Boolean);
  const usdBrlQuote = quotes['USDBRL'];
  return <Layout>
      <SEO path="/" />
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <img
          src="/lovable-uploads/85bbe2bd-087d-450f-854b-df96d620b9ce.png"
          alt="Cotações financeiras em tempo real"
          width={1920}
          height={606}
          fetchpriority="high"
          className="absolute inset-1 w-full h-full object-cover"
        />
        <div className="absolute inset-1 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
              Cotações em <span className="text-primary">Tempo Real</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Acompanhe as principais moedas, criptomoedas, ações e forex com dados precisos e atualizados a cada segundo.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/ver-todas-cotacoes">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Ver Todas as Cotações
                </Button>
              </Link>
              <Link to="/calculadora-juros">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  Calculadora de Juros
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main USD/BRL Chart */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <img src="/lovable-uploads/5d06de04-992d-43a6-ac71-779bc6f6ff12.png" alt="Dollar Symbol" width={126} height={125} fetchpriority="high" className="w-24 h-24 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">Dólar Hoje</h2>
            <p className="text-muted-foreground">Acompanhe a cotação USD/BRL em tempo real</p>
          </div>
          
          <Card className="max-w-6xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center justify-center space-x-3">
                <span className="text-3xl">🇺🇸</span>
                <span className="text-2xl font-bold">USD/BRL</span>
                <span className="text-3xl">🇧🇷</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <TradingViewWidget symbol="USDBRL" height="384" />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Popular Quotes Grid */}
      

      {/* Currency Converter */}
      <UniversalConverter assetType="fiat" assetSymbol="USD" assetName="Dólar Americano" />

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Por que escolher a Cotação de Hoje?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Tempo Real</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Dados atualizados a cada segundo para você tomar as melhores decisões.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Cobertura Global</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Todas as principais moedas, criptomoedas e mercados financeiros mundiais.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-success" />
                </div>
                <CardTitle>Dados Confiáveis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Informações precisas fornecidas pelo TradingView, líder mundial em dados financeiros.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Educational Section */}
      <EducationalSection />
    </Layout>;
};
export default Index;