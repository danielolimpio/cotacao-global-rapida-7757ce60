import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import CurrencyConverter from "@/components/CurrencyConverter";
import Banner from "@/components/Banner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AaveHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Aave Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Aave (AAVE) em tempo real</p>
        </div>

        <Banner />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico AAVE/USD</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="AAVEUSD" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="AAVE/USD"
              price="185.40"
              change="+8.25"
              changePercent="+4.65"
              flag1="👻"
            />
            <QuoteCard
              pair="AAVE/BTC"
              price="0.004115"
              change="+0.000158"
              changePercent="+3.99"
              flag1="👻"
            />
            <QuoteCard
              pair="AAVE/ETH"
              price="0.0651"
              change="+0.00218"
              changePercent="+3.46"
              flag1="👻"
            />
          </div>
        </div>


        <CurrencyConverter type="crypto" cryptoSymbol="AAVE" />
        
        <Banner />
      </div>
    </Layout>
  );
};

export default AaveHoje;