import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AppleHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Apple Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação da Apple Inc. (AAPL) em tempo real</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico AAPL</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="AAPL" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="AAPL"
              price="185.42"
              change="+2.18"
              changePercent="+1.19"
              flag1="🍎"
            />
            <QuoteCard
              pair="Market Cap"
              price="2.89T"
              change="+34.5B"
              changePercent="+1.21"
              flag1="📊"
            />
            <QuoteCard
              pair="P/E Ratio"
              price="28.45"
              change="+0.32"
              changePercent="+1.14"
              flag1="📈"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Máxima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-success">$186.95</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mínima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-destructive">$183.20</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Volume</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary">52.8M</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default AppleHoje;