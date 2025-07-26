import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Acoes = () => {
  const usStocks = [
    { pair: "AAPL", price: "$192.53", change: "+2.45", changePercent: "+1.29%", flag1: "🍎", flag2: "🇺🇸", isPositive: true },
    { pair: "MSFT", price: "$378.85", change: "-1.23", changePercent: "-0.32%", flag1: "🪟", flag2: "🇺🇸", isPositive: false },
    { pair: "GOOGL", price: "$142.56", change: "+0.89", changePercent: "+0.63%", flag1: "🔍", flag2: "🇺🇸", isPositive: true },
    { pair: "AMZN", price: "$151.94", change: "+1.67", changePercent: "+1.11%", flag1: "📦", flag2: "🇺🇸", isPositive: true },
    { pair: "TSLA", price: "$248.50", change: "-3.25", changePercent: "-1.29%", flag1: "⚡", flag2: "🇺🇸", isPositive: false },
    { pair: "META", price: "$338.79", change: "+4.12", changePercent: "+1.23%", flag1: "📘", flag2: "🇺🇸", isPositive: true },
    { pair: "NVDA", price: "$484.86", change: "+7.23", changePercent: "+1.51%", flag1: "🟢", flag2: "🇺🇸", isPositive: true },
    { pair: "NFLX", price: "$458.12", change: "-2.89", changePercent: "-0.63%", flag1: "🎬", flag2: "🇺🇸", isPositive: false },
  ];

  const brStocks = [
    { pair: "PETR4", price: "R$ 34.82", change: "+0.45", changePercent: "+1.31%", flag1: "⛽", flag2: "🇧🇷", isPositive: true },
    { pair: "VALE3", price: "R$ 62.15", change: "-0.89", changePercent: "-1.41%", flag1: "⛏️", flag2: "🇧🇷", isPositive: false },
    { pair: "ITUB4", price: "R$ 32.56", change: "+0.23", changePercent: "+0.71%", flag1: "🏦", flag2: "🇧🇷", isPositive: true },
    { pair: "BBDC4", price: "R$ 13.98", change: "+0.12", changePercent: "+0.87%", flag1: "🏛️", flag2: "🇧🇷", isPositive: true },
    { pair: "ABEV3", price: "R$ 11.45", change: "-0.08", changePercent: "-0.69%", flag1: "🍺", flag2: "🇧🇷", isPositive: false },
    { pair: "WEGE3", price: "R$ 45.23", change: "+1.15", changePercent: "+2.61%", flag1: "⚙️", flag2: "🇧🇷", isPositive: true },
    { pair: "MGLU3", price: "R$ 8.92", change: "-0.34", changePercent: "-3.67%", flag1: "🛒", flag2: "🇧🇷", isPositive: false },
    { pair: "RENT3", price: "R$ 28.67", change: "+0.78", changePercent: "+2.80%", flag1: "🚗", flag2: "🇧🇷", isPositive: true },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Ações</h1>
          <p className="text-xl text-muted-foreground">
            Acompanhe as cotações das principais ações brasileiras e americanas
          </p>
        </div>

        <Tabs defaultValue="us" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
            <TabsTrigger value="us">Ações Americanas</TabsTrigger>
            <TabsTrigger value="br">Ações Brasileiras</TabsTrigger>
          </TabsList>

          <TabsContent value="us" className="space-y-8">
            {/* Featured SPY Chart */}
            <Card className="max-w-6xl mx-auto">
              <CardHeader>
                <CardTitle className="text-center">S&P 500 (SPY)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-96">
                  <TradingViewWidget symbol="SPY" height="384" />
                </div>
              </CardContent>
            </Card>

            {/* US Stocks Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {usStocks.map((stock, index) => (
                <div key={stock.pair} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <QuoteCard {...stock} />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="br" className="space-y-8">
            {/* Featured IBOV Chart */}
            <Card className="max-w-6xl mx-auto">
              <CardHeader>
                <CardTitle className="text-center">Ibovespa (IBOV)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-96">
                  <TradingViewWidget symbol="BMFBOVESPA:IBOV" height="384" />
                </div>
              </CardContent>
            </Card>

            {/* BR Stocks Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {brStocks.map((stock, index) => (
                <div key={stock.pair} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <QuoteCard {...stock} />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Market Overview */}
        <Card className="max-w-6xl mx-auto mt-12">
          <CardHeader>
            <CardTitle className="text-center">Visão Geral dos Mercados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Mercado Americano</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/50 rounded-lg text-center">
                    <p className="text-sm text-muted-foreground">S&P 500</p>
                    <p className="text-xl font-bold text-primary">4,567.80</p>
                    <p className="text-sm text-success">+0.85%</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg text-center">
                    <p className="text-sm text-muted-foreground">NASDAQ</p>
                    <p className="text-xl font-bold text-primary">14,567.90</p>
                    <p className="text-sm text-success">+1.23%</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Mercado Brasileiro</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/50 rounded-lg text-center">
                    <p className="text-sm text-muted-foreground">Ibovespa</p>
                    <p className="text-xl font-bold text-primary">124,567</p>
                    <p className="text-sm text-destructive">-0.42%</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg text-center">
                    <p className="text-sm text-muted-foreground">Ifix</p>
                    <p className="text-xl font-bold text-primary">2,856</p>
                    <p className="text-sm text-success">+0.67%</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Acoes;