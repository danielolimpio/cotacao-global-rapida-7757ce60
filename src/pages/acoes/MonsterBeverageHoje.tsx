import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MonsterBeverageHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Monster Beverage Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação da Monster Beverage (MNST) em tempo real</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico MNST</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="MNST" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="MNST"
              price="52.85"
              change="+1.15"
              changePercent="+2.22"
              flag1="👹"
            />
            <QuoteCard
              pair="Market Cap"
              price="55.8B"
              change="+1.2B"
              changePercent="+2.20"
              flag1="💼"
            />
            <QuoteCard
              pair="P/E Ratio"
              price="33.2"
              change="+0.3"
              changePercent="+0.91"
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
              <p className="text-2xl font-bold text-success">$53.45</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mínima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-destructive">$51.70</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Volume</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary">2.8M</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default MonsterBeverageHoje;