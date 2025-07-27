import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import CurrencyConverter from "@/components/CurrencyConverter";
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
              price="6.5052"
              change="+0.0195"
              changePercent="+0.30"
              flag1="🇪🇺"
            />
            <QuoteCard
              pair="EUR/USD"
              price="1.1700"
              change="+0.0028"
              changePercent="+0.24"
              flag1="🇪🇺"
            />
            <QuoteCard
              pair="EUR/GBP"
              price="0.8731"
              change="-0.0012"
              changePercent="-0.14"
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
              <p className="text-2xl font-bold text-success">R$ 6.5280</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mínima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-destructive">R$ 6.4820</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Variação</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-success">+0.30%</p>
            </CardContent>
          </Card>
        </div>

        <CurrencyConverter type="euro" />
      </div>
    </Layout>
  );
};

export default EuroHoje;