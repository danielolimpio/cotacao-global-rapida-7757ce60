import Layout from "@/components/Layout";
import Banner from "@/components/Banner";
import QuoteCard from "@/components/QuoteCard";
import TradingViewWidget from "@/components/TradingViewWidget";
import CurrencyConverter from "@/components/CurrencyConverter";
import CurrencyTicker from "@/components/CurrencyTicker";
import useRealTimeQuotes from "@/hooks/useRealTimeQuotes";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Globe, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
const Index = () => {
  const { quotes, loading } = useRealTimeQuotes(['USDBRL', 'EURBRL', 'GBPUSD', 'CADBRL']);
  
  const popularQuotes = [
    {
      pair: "USD/BRL",
      price: quotes.USDBRL?.price || 5.56,
      change: quotes.USDBRL?.change || 0.05,
      changePercent: quotes.USDBRL?.changePercent || 0.90,
      flag1: "🇺🇸",
      flag2: "🇧🇷",
      isLoading: loading
    },
    {
      pair: "EUR/BRL", 
      price: quotes.EURBRL?.price || 5.45,
      change: quotes.EURBRL?.change || -0.02,
      changePercent: quotes.EURBRL?.changePercent || -0.37,
      flag1: "🇪🇺",
      flag2: "🇧🇷", 
      isLoading: loading
    },
    {
      pair: "GBP/BRL",
      price: (quotes.GBPUSD?.price || 1.34) * (quotes.USDBRL?.price || 5.56) / 1.34 * 1.134,
      change: 0.08,
      changePercent: 1.28,
      flag1: "🇬🇧",
      flag2: "🇧🇷",
      isLoading: loading
    },
    {
      pair: "CAD/BRL",
      price: quotes.CADBRL?.price || 3.78,
      change: quotes.CADBRL?.change || 0.03,
      changePercent: quotes.CADBRL?.changePercent || 0.80,
      flag1: "🇨🇦",
      flag2: "🇧🇷",
      isLoading: loading
    }
  ];
  return <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/lovable-uploads/85bbe2bd-087d-450f-854b-df96d620b9ce.png')`
    }}>
        <div className="container mx-auto px-4">
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
                <Button variant="outline" size="lg" className="border-white bg-white/10 text-white hover:bg-white/20 hover:text-white">
                  Calculadora de Juros
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CurrencyTicker />

      {/* Main USD/BRL Chart */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <img src="/lovable-uploads/5d06de04-992d-43a6-ac71-779bc6f6ff12.png" alt="Dollar Symbol" className="w-24 h-24 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">Dólar Hoje</h2>
            <p className="text-muted-foreground">Acompanhe a cotação USD/BRL em tempo real</p>
          </div>
          
          <Card className="max-w-6xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">🇺🇸</span>
                  <span className="text-2xl font-bold">USD/BRL</span>
                  <span className="text-3xl">🇧🇷</span>
                </div>
                <div className="text-right">
                  {loading ? (
                    <div className="space-y-2">
                      <div className="h-8 w-24 bg-muted animate-pulse rounded"></div>
                      <div className="h-4 w-20 bg-muted animate-pulse rounded"></div>
                    </div>
                  ) : (
                    <>
                      <div className="text-3xl font-bold text-primary">
                        R$ {quotes.USDBRL?.price?.toFixed(4) || '5.56'}
                      </div>
                      <div className={`flex items-center ${
                        (quotes.USDBRL?.change || 0) >= 0 ? 'text-success' : 'text-destructive'
                      }`}>
                        <TrendingUp className="h-4 w-4 mr-1" />
                        {(quotes.USDBRL?.change || 0) >= 0 ? '+' : ''}{quotes.USDBRL?.change?.toFixed(4) || '0.05'} 
                        ({(quotes.USDBRL?.changePercent || 0) >= 0 ? '+' : ''}{quotes.USDBRL?.changePercent?.toFixed(2) || '0.90'}%)
                      </div>
                    </>
                  )}
                </div>
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
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <img src="/lovable-uploads/d6b0e3b9-996c-4858-a90a-4c5c17f95789.png" alt="Financial Symbol" className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground">Cotações em Tempo Real</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularQuotes.map((quote, index) => <div key={quote.pair} className="animate-fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <QuoteCard {...quote} />
              </div>)}
          </div>
        </div>
      </section>

      {/* Currency Converter */}
      <CurrencyConverter type="dollar" />

      <Banner />

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
    </Layout>;
};
export default Index;