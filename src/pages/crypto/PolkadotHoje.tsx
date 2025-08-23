import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import CurrencyConverter from "@/components/CurrencyConverter";
import Banner from "@/components/Banner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PolkadotHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Polkadot Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Polkadot (DOT) em tempo real</p>
        </div>

        <Banner />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico DOT/USD</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="DOTUSD" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="DOT/USD"
              price="7.85"
              change="+0.42"
              changePercent="+5.65"
              flag1="🔴"
            />
            <QuoteCard
              pair="Market Cap"
              price="9.8B"
              change="+520M"
              changePercent="+5.61"
              flag1="💼"
            />
            <QuoteCard
              pair="Volume 24h"
              price="285M"
              change="+45M"
              changePercent="+18.75"
              flag1="📈"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Máxima 24h</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-success">$8.15</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mínima 24h</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-destructive">$7.32</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Variação 24h</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-success">+5.65%</p>
            </CardContent>
          </Card>
        </div>

        <CurrencyConverter type="crypto" cryptoSymbol="DOT" />
        
        <Banner />
      </div>
    </Layout>
  );
};

export default PolkadotHoje;