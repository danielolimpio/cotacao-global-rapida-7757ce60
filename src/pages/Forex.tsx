import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Forex = () => {
  const majorPairs = [
    { pair: "EUR/USD", price: "1.0542", change: "-0.0023", changePercent: "-0.22%", flag1: "🇪🇺", flag2: "🇺🇸", isPositive: false },
    { pair: "GBP/USD", price: "1.2198", change: "+0.0045", changePercent: "+0.37%", flag1: "🇬🇧", flag2: "🇺🇸", isPositive: true },
    { pair: "USD/JPY", price: "148.75", change: "+0.85", changePercent: "+0.58%", flag1: "🇺🇸", flag2: "🇯🇵", isPositive: true },
    { pair: "USD/CHF", price: "0.8945", change: "+0.0012", changePercent: "+0.13%", flag1: "🇺🇸", flag2: "🇨🇭", isPositive: true },
  ];

  const minorPairs = [
    { pair: "EUR/GBP", price: "0.8642", change: "-0.0018", changePercent: "-0.21%", flag1: "🇪🇺", flag2: "🇬🇧", isPositive: false },
    { pair: "EUR/JPY", price: "156.82", change: "+0.45", changePercent: "+0.29%", flag1: "🇪🇺", flag2: "🇯🇵", isPositive: true },
    { pair: "GBP/JPY", price: "181.45", change: "+1.23", changePercent: "+0.68%", flag1: "🇬🇧", flag2: "🇯🇵", isPositive: true },
    { pair: "EUR/CHF", price: "0.9435", change: "-0.0008", changePercent: "-0.08%", flag1: "🇪🇺", flag2: "🇨🇭", isPositive: false },
  ];

  const exoticPairs = [
    { pair: "USD/BRL", price: "5.1845", change: "+0.0523", changePercent: "+1.02%", flag1: "🇺🇸", flag2: "🇧🇷", isPositive: true },
    { pair: "USD/MXN", price: "17.2456", change: "-0.1234", changePercent: "-0.71%", flag1: "🇺🇸", flag2: "🇲🇽", isPositive: false },
    { pair: "USD/ZAR", price: "18.9567", change: "+0.2345", changePercent: "+1.25%", flag1: "🇺🇸", flag2: "🇿🇦", isPositive: true },
    { pair: "USD/TRY", price: "28.5634", change: "+0.4567", changePercent: "+1.62%", flag1: "🇺🇸", flag2: "🇹🇷", isPositive: true },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Forex</h1>
          <p className="text-xl text-muted-foreground">
            Mercado de câmbio internacional - Pares de moedas principais, menores e exóticos
          </p>
        </div>

        {/* Featured EUR/USD Chart */}
        <Card className="max-w-6xl mx-auto mb-12">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-3xl">🇪🇺</span>
                <span className="text-2xl font-bold">EUR/USD</span>
                <span className="text-3xl">🇺🇸</span>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-primary">1.0542</div>
                <div className="text-destructive flex items-center">
                  -0.0023 (-0.22%)
                </div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-96">
              <TradingViewWidget symbol="EURUSD" height="384" />
            </div>
          </CardContent>
        </Card>

        {/* Major Pairs */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center text-foreground mb-8">
            Pares Principais (Majors)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {majorPairs.map((pair, index) => (
              <div key={pair.pair} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <QuoteCard {...pair} />
              </div>
            ))}
          </div>
        </div>

        {/* GBP/USD Chart */}
        <Card className="max-w-6xl mx-auto mb-12">
          <CardHeader>
            <CardTitle className="text-center">Libra Esterlina x Dólar Americano (GBP/USD)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-96">
              <TradingViewWidget symbol="GBPUSD" height="384" />
            </div>
          </CardContent>
        </Card>

        {/* Minor Pairs */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center text-foreground mb-8">
            Pares Menores (Minors)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {minorPairs.map((pair, index) => (
              <div key={pair.pair} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <QuoteCard {...pair} />
              </div>
            ))}
          </div>
        </div>

        {/* Exotic Pairs */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center text-foreground mb-8">
            Pares Exóticos (Exotics)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {exoticPairs.map((pair, index) => (
              <div key={pair.pair} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <QuoteCard {...pair} />
              </div>
            ))}
          </div>
        </div>

        {/* Market Sessions */}
        <Card className="max-w-6xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center">Sessões de Trading Forex</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">🇦🇺 Sydney</h3>
                <p className="text-sm text-muted-foreground">22:00 - 07:00 UTC</p>
                <p className="text-sm text-destructive">Fechado</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">🇯🇵 Tóquio</h3>
                <p className="text-sm text-muted-foreground">00:00 - 09:00 UTC</p>
                <p className="text-sm text-destructive">Fechado</p>
              </div>
              <div className="text-center p-4 bg-success/10 rounded-lg border border-success/20">
                <h3 className="font-semibold text-foreground mb-2">🇬🇧 Londres</h3>
                <p className="text-sm text-muted-foreground">08:00 - 17:00 UTC</p>
                <p className="text-sm text-success font-semibold">Aberto</p>
              </div>
              <div className="text-center p-4 bg-success/10 rounded-lg border border-success/20">
                <h3 className="font-semibold text-foreground mb-2">🇺🇸 Nova York</h3>
                <p className="text-sm text-muted-foreground">13:00 - 22:00 UTC</p>
                <p className="text-sm text-success font-semibold">Aberto</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Forex;