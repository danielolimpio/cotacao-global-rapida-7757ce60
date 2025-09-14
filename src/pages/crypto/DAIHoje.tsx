import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import CurrencyConverter from "@/components/CurrencyConverter";
import Banner from "@/components/Banner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DAIHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">DAI Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Dai Stablecoin (DAI) em tempo real</p>
        </div>

        <Banner />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico DAI/USD</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="DAIUSD" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="DAI/USD"
              price="1.0000"
              change="+0.0001"
              changePercent="+0.01"
              flag1="🟠"
            />
            <QuoteCard
              pair="Market Cap"
              price="4.8B"
              change="+12M"
              changePercent="+0.25"
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


        <CurrencyConverter type="crypto" cryptoSymbol="DAI" />
        
        <Banner />
      </div>
    </Layout>
  );
};

export default DAIHoje;