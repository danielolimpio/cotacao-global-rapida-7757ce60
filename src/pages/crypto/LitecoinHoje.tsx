import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import CurrencyConverter from "@/components/CurrencyConverter";
import Banner from "@/components/Banner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LitecoinHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Litecoin Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Litecoin (LTC) em tempo real</p>
        </div>

        <Banner />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico LTC/USD</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="LTCUSD" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="LTC/USD"
              price="95.80"
              change="+3.85"
              changePercent="+4.19"
              flag1="🥈"
            />
            <QuoteCard
              pair="LTC/BTC"
              price="0.00213"
              change="+0.000075"
              changePercent="+3.65"
              flag1="🥈"
            />
            <QuoteCard
              pair="LTC/ETH"
              price="0.03365"
              change="+0.00115"
              changePercent="+3.54"
              flag1="🥈"
            />
          </div>
        </div>


        <CurrencyConverter type="crypto" cryptoSymbol="LTC" />
        
        <Banner />
      </div>
    </Layout>
  );
};

export default LitecoinHoje;