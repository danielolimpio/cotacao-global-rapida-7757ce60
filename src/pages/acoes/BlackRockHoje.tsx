import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BlackRockHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">BlackRock Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação da BlackRock (BLK) em tempo real</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico BLK</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="BLK" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="BLK"
              price="785.50"
              change="+18.25"
              changePercent="+2.38"
              flag1="⚫"
            />
            <QuoteCard
              pair="Market Cap"
              price="118.5B"
              change="+2.8B"
              changePercent="+2.42"
              flag1="💼"
            />
            <QuoteCard
              pair="P/E Ratio"
              price="22.4"
              change="+0.3"
              changePercent="+1.36"
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
              <p className="text-2xl font-bold text-success">$798.75</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mínima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-destructive">$767.25</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Volume</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary">485K</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default BlackRockHoje;