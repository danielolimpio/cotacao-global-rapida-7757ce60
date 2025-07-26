import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Crypto = () => {
  const cryptoQuotes = [
    { pair: "BTC/USD", price: "$43,250", change: "+1,250", changePercent: "+2.98%", flag1: "₿", flag2: "🇺🇸", isPositive: true },
    { pair: "ETH/USD", price: "$2,680", change: "+45", changePercent: "+1.71%", flag1: "Ξ", flag2: "🇺🇸", isPositive: true },
    { pair: "BNB/USD", price: "$285", change: "-8", changePercent: "-2.73%", flag1: "🟡", flag2: "🇺🇸", isPositive: false },
    { pair: "XRP/USD", price: "$0.58", change: "+0.02", changePercent: "+3.57%", flag1: "◉", flag2: "🇺🇸", isPositive: true },
    { pair: "ADA/USD", price: "$0.42", change: "-0.01", changePercent: "-2.33%", flag1: "₳", flag2: "🇺🇸", isPositive: false },
    { pair: "SOL/USD", price: "$102", change: "+3", changePercent: "+3.03%", flag1: "◎", flag2: "🇺🇸", isPositive: true },
    { pair: "DOT/USD", price: "$6.25", change: "-0.15", changePercent: "-2.34%", flag1: "●", flag2: "🇺🇸", isPositive: false },
    { pair: "LINK/USD", price: "$14.80", change: "+0.45", changePercent: "+3.14%", flag1: "🔗", flag2: "🇺🇸", isPositive: true },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Criptomoedas</h1>
          <p className="text-xl text-muted-foreground">
            Acompanhe as cotações das principais criptomoedas em tempo real
          </p>
        </div>

        {/* Featured Bitcoin Chart */}
        <Card className="max-w-6xl mx-auto mb-12">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-3xl">₿</span>
                <span className="text-2xl font-bold">Bitcoin</span>
                <span className="text-muted-foreground">(BTC/USD)</span>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-primary">$43,250</div>
                <div className="text-success flex items-center">
                  +$1,250 (+2.98%)
                </div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-96">
              <TradingViewWidget symbol="BTCUSD" height="384" />
            </div>
          </CardContent>
        </Card>

        {/* Ethereum Chart */}
        <Card className="max-w-6xl mx-auto mb-12">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-3xl">Ξ</span>
                <span className="text-2xl font-bold">Ethereum</span>
                <span className="text-muted-foreground">(ETH/USD)</span>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-primary">$2,680</div>
                <div className="text-success flex items-center">
                  +$45 (+1.71%)
                </div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-96">
              <TradingViewWidget symbol="ETHUSD" height="384" />
            </div>
          </CardContent>
        </Card>

        {/* Crypto Quotes Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-center text-foreground mb-8">
            Principais Criptomoedas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cryptoQuotes.map((quote, index) => (
              <div key={quote.pair} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <QuoteCard {...quote} />
              </div>
            ))}
          </div>
        </div>

        {/* Market Overview */}
        <Card className="max-w-6xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center">Visão Geral do Mercado Cripto</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-muted/50 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-2">Market Cap Total</h3>
                <p className="text-2xl font-bold text-primary">$1.68T</p>
                <p className="text-sm text-success">+2.45% (24h)</p>
              </div>
              <div className="p-6 bg-muted/50 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-2">Volume 24h</h3>
                <p className="text-2xl font-bold text-primary">$58.2B</p>
                <p className="text-sm text-destructive">-1.23% (24h)</p>
              </div>
              <div className="p-6 bg-muted/50 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-2">Dominância BTC</h3>
                <p className="text-2xl font-bold text-primary">52.3%</p>
                <p className="text-sm text-success">+0.8% (24h)</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Crypto;