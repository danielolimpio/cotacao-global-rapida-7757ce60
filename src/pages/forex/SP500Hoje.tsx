import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SP500Hoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">S&P 500 Hoje</h1>
          <p className="text-xl text-muted-foreground">Índice S&P 500 (SPX) em tempo real</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico S&P 500</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="SPX" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="S&P 500"
              price="4,825.30"
              change="+42.80"
              changePercent="+0.90"
              flag1="🇺🇸"
            />
            <QuoteCard
              pair="NASDAQ"
              price="15,240.85"
              change="+125.40"
              changePercent="+0.83"
              flag1="📊"
            />
            <QuoteCard
              pair="DOW JONES"
              price="38,520.15"
              change="+285.60"
              changePercent="+0.75"
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
              <p className="text-2xl font-bold text-success">4,842.75</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mínima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-destructive">4,798.20</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Variação</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-success">+0.90%</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default SP500Hoje;