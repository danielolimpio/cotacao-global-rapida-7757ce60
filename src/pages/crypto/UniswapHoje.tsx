import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import CurrencyConverter from "@/components/CurrencyConverter";
import Banner from "@/components/Banner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const UniswapHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Uniswap Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Uniswap (UNI) em tempo real</p>
        </div>

        <Banner />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico UNI/USD</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="UNIUSD" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="UNI/USD"
              price="8.45"
              change="+0.35"
              changePercent="+4.32"
              flag1="🦄"
            />
            <QuoteCard
              pair="UNI/BTC"
              price="0.0001875"
              change="+0.0000058"
              changePercent="+3.18"
              flag1="🦄"
            />
            <QuoteCard
              pair="UNI/ETH"
              price="0.00297"
              change="+0.000085"
              changePercent="+2.95"
              flag1="🦄"
            />
          </div>
        </div>


        <CurrencyConverter type="crypto" cryptoSymbol="UNI" />
        
        <Banner />
      </div>
    </Layout>
  );
};

export default UniswapHoje;