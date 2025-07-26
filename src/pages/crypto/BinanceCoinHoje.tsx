import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import CurrencyConverter from "@/components/CurrencyConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BinanceCoinHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Binance Coin Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Binance Coin (BNB) em tempo real</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico BNB/USD</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="BNBUSD" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="BNB/USD"
              price="485.20"
              change="+18.75"
              changePercent="+4.02"
              flag1="🟡"
            />
            <QuoteCard
              pair="BNB/BTC"
              price="0.0108"
              change="+0.0003"
              changePercent="+2.86"
              flag1="🟡"
            />
            <QuoteCard
              pair="BNB/ETH"
              price="0.1703"
              change="+0.0045"
              changePercent="+2.71"
              flag1="🟡"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Máxima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-success">$495.80</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mínima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-destructive">$466.45</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Volume 24h</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary">$2.8B</p>
            </CardContent>
          </Card>
        </div>

        <CurrencyConverter type="crypto" cryptoSymbol="BNB" />
      </div>
    </Layout>
  );
};

export default BinanceCoinHoje;