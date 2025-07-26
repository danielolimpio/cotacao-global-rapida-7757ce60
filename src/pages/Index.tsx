import Layout from "@/components/Layout";
import QuoteCard from "@/components/QuoteCard";
import TradingViewWidget from "@/components/TradingViewWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Globe, Shield, Zap } from "lucide-react";

const Index = () => {
  const popularQuotes = [
    {
      pair: "USD/BRL",
      price: "5.18",
      change: "+0.05",
      changePercent: "+0.97%",
      flag1: "🇺🇸",
      flag2: "🇧🇷",
      isPositive: true
    },
    {
      pair: "EUR/BRL", 
      price: "5.45",
      change: "-0.02",
      changePercent: "-0.37%",
      flag1: "🇪🇺",
      flag2: "🇧🇷", 
      isPositive: false
    },
    {
      pair: "GBP/BRL",
      price: "6.32",
      change: "+0.08",
      changePercent: "+1.28%",
      flag1: "🇬🇧",
      flag2: "🇧🇷",
      isPositive: true
    },
    {
      pair: "CAD/BRL",
      price: "3.78",
      change: "+0.03",
      changePercent: "+0.80%",
      flag1: "🇨🇦",
      flag2: "🇧🇷",
      isPositive: true
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-4 animate-fade-in">
              Cotações em <span className="text-primary">Tempo Real</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Acompanhe as principais moedas, criptomoedas, ações e forex com dados precisos e atualizados a cada segundo.
            </p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <TrendingUp className="mr-2 h-5 w-5" />
                Ver Todas as Cotações
              </Button>
              <Button variant="outline" size="lg">
                Calculadora de Câmbio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main USD/BRL Chart */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
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
                  <div className="text-3xl font-bold text-primary">R$ 5,18</div>
                  <div className="text-success flex items-center">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    +0.05 (+0.97%)
                  </div>
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
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Cotações Populares
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularQuotes.map((quote, index) => (
              <div key={quote.pair} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <QuoteCard {...quote} />
              </div>
            ))}
          </div>
        </div>
      </section>

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
    </Layout>
  );
};

export default Index;
