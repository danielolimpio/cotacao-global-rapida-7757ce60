import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DolarHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Dólar Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Dólar Americano (USD) em tempo real</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico USD/BRL</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="USDBRL" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="USD/BRL"
              price="5.2850"
              change="+0.0125"
              changePercent="+0.24"
              flag1="🇺🇸"
            />
            <QuoteCard
              pair="USD/EUR"
              price="0.9245"
              change="-0.0032"
              changePercent="-0.34"
              flag1="🇺🇸"
            />
            <QuoteCard
              pair="USD/GBP"
              price="0.7890"
              change="+0.0015"
              changePercent="+0.19"
              flag1="🇺🇸"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Máxima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-success">R$ 5.3120</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mínima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-destructive">R$ 5.2680</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Variação</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-success">+0.24%</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default DolarHoje;