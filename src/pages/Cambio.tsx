import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Cambio = () => {
  const brlQuotes = [
    { pair: "USD/BRL", price: "5.18", change: "+0.05", changePercent: "+0.97%", flag1: "🇺🇸", flag2: "🇧🇷", isPositive: true },
    { pair: "EUR/BRL", price: "5.45", change: "-0.02", changePercent: "-0.37%", flag1: "🇪🇺", flag2: "🇧🇷", isPositive: false },
    { pair: "GBP/BRL", price: "6.32", change: "+0.08", changePercent: "+1.28%", flag1: "🇬🇧", flag2: "🇧🇷", isPositive: true },
    { pair: "CAD/BRL", price: "3.78", change: "+0.03", changePercent: "+0.80%", flag1: "🇨🇦", flag2: "🇧🇷", isPositive: true },
    { pair: "AUD/BRL", price: "3.42", change: "-0.01", changePercent: "-0.29%", flag1: "🇦🇺", flag2: "🇧🇷", isPositive: false },
    { pair: "JPY/BRL", price: "0.035", change: "+0.001", changePercent: "+2.86%", flag1: "🇯🇵", flag2: "🇧🇷", isPositive: true },
    { pair: "CHF/BRL", price: "5.82", change: "+0.04", changePercent: "+0.69%", flag1: "🇨🇭", flag2: "🇧🇷", isPositive: true },
    { pair: "CNY/BRL", price: "0.72", change: "-0.01", changePercent: "-1.39%", flag1: "🇨🇳", flag2: "🇧🇷", isPositive: false },
  ];

  const usdQuotes = [
    { pair: "EUR/USD", price: "1.05", change: "-0.003", changePercent: "-0.29%", flag1: "🇪🇺", flag2: "🇺🇸", isPositive: false },
    { pair: "GBP/USD", price: "1.22", change: "+0.002", changePercent: "+0.16%", flag1: "🇬🇧", flag2: "🇺🇸", isPositive: true },
    { pair: "USD/JPY", price: "148.75", change: "+0.25", changePercent: "+0.17%", flag1: "🇺🇸", flag2: "🇯🇵", isPositive: true },
    { pair: "AUD/USD", price: "0.66", change: "-0.001", changePercent: "-0.15%", flag1: "🇦🇺", flag2: "🇺🇸", isPositive: false },
    { pair: "USD/CAD", price: "1.37", change: "+0.002", changePercent: "+0.15%", flag1: "🇺🇸", flag2: "🇨🇦", isPositive: true },
    { pair: "USD/CHF", price: "0.89", change: "+0.001", changePercent: "+0.11%", flag1: "🇺🇸", flag2: "🇨🇭", isPositive: true },
    { pair: "NZD/USD", price: "0.59", change: "-0.002", changePercent: "-0.34%", flag1: "🇳🇿", flag2: "🇺🇸", isPositive: false },
    { pair: "USD/CNY", price: "7.20", change: "+0.05", changePercent: "+0.69%", flag1: "🇺🇸", flag2: "🇨🇳", isPositive: true },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Câmbio</h1>
          <p className="text-xl text-muted-foreground">
            Acompanhe as cotações das principais moedas mundiais em tempo real
          </p>
        </div>

        <Tabs defaultValue="brl" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
            <TabsTrigger value="brl">Moedas vs Real (BRL)</TabsTrigger>
            <TabsTrigger value="usd">Moedas vs Dólar (USD)</TabsTrigger>
          </TabsList>

          <TabsContent value="brl" className="space-y-8">
            {/* Featured USD/BRL Chart */}
            <Card className="max-w-6xl mx-auto">
              <CardHeader>
                <CardTitle className="text-center">Dólar Americano x Real Brasileiro</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-96">
                  <TradingViewWidget symbol="USDBRL" height="384" />
                </div>
              </CardContent>
            </Card>

            {/* BRL Quotes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {brlQuotes.map((quote, index) => (
                <div key={quote.pair} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <QuoteCard {...quote} />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="usd" className="space-y-8">
            {/* Featured EUR/USD Chart */}
            <Card className="max-w-6xl mx-auto">
              <CardHeader>
                <CardTitle className="text-center">Euro x Dólar Americano</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-96">
                  <TradingViewWidget symbol="EURUSD" height="384" />
                </div>
              </CardContent>
            </Card>

            {/* USD Quotes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {usdQuotes.map((quote, index) => (
                <div key={quote.pair} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <QuoteCard {...quote} />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Cambio;