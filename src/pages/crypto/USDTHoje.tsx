import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import CurrencyConverter from "@/components/CurrencyConverter";
import Banner from "@/components/Banner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const USDTHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">USDT Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Tether (USDT) em tempo real</p>
        </div>

        <Banner />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico USDT/USD</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="USDTUSD" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="USDT/USD"
              price="1.0002"
              change="+0.0001"
              changePercent="+0.01"
              flag1="💵"
            />
            <QuoteCard
              pair="Market Cap"
              price="119.8B"
              change="+85M"
              changePercent="+0.07"
              flag1="💼"
            />
            <QuoteCard
              pair="Volume 24h"
              price="48.5B"
              change="+2.8B"
              changePercent="+6.12"
              flag1="📈"
            />
          </div>
        </div>


        <CurrencyConverter type="crypto" cryptoSymbol="USDT" />
        
        <Banner />
      </div>
    </Layout>
  );
};

export default USDTHoje;