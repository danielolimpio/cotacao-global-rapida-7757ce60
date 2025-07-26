import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EuroHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Euro Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Euro (EUR) em tempo real</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico EUR/BRL</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="EURBRL" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="EUR/BRL"
              price="5.7240"
              change="+0.0180"
              changePercent="+0.32"
              flag1="🇪🇺"
            />
            <QuoteCard
              pair="EUR/USD"
              price="1.0835"
              change="+0.0025"
              changePercent="+0.23"
              flag1="🇪🇺"
            />
            <QuoteCard
              pair="EUR/GBP"
              price="0.8530"
              change="-0.0015"
              changePercent="-0.18"
              flag1="🇪🇺"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Máxima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-success">R$ 5.7580</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mínima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-destructive">R$ 5.7100</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Variação</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-success">+0.32%</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default EuroHoje;