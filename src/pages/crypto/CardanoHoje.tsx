import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import CurrencyConverter from "@/components/CurrencyConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CardanoHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Cardano Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Cardano (ADA) em tempo real</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico ADA/USD</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="ADAUSD" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="ADA/USD"
              price="0.4850"
              change="+0.0245"
              changePercent="+5.32"
              flag1="🔷"
            />
            <QuoteCard
              pair="ADA/BTC"
              price="0.0000108"
              change="+0.0000005"
              changePercent="+4.85"
              flag1="🔷"
            />
            <QuoteCard
              pair="ADA/ETH"
              price="0.0001702"
              change="+0.0000078"
              changePercent="+4.80"
              flag1="🔷"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Máxima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-success">$0.4950</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mínima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-destructive">$0.4605</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Volume 24h</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary">$850M</p>
            </CardContent>
          </Card>
        </div>

        <CurrencyConverter type="crypto" cryptoSymbol="ADA" />
      </div>
    </Layout>
  );
};

export default CardanoHoje;