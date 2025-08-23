import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import CurrencyConverter from "@/components/CurrencyConverter";
import Banner from "@/components/Banner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EthereumHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Ethereum Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Ethereum (ETH) em tempo real</p>
        </div>

        <Banner />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico ETH/USD</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="ETHUSD" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="ETH/USD"
              price="3,751.50"
              change="+185.25"
              changePercent="+5.19"
              flag1="⚡"
            />
            <QuoteCard
              pair="ETH/BTC"
              price="0.0318"
              change="+0.0012"
              changePercent="+3.93"
              flag1="⚡"
            />
            <QuoteCard
              pair="ETH/EUR"
              price="3,206.84"
              change="+158.34"
              changePercent="+5.19"
              flag1="⚡"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Máxima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-success">$3,795</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mínima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-destructive">$3,680</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Volume 24h</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary">$24.8B</p>
            </CardContent>
          </Card>
        </div>

        <CurrencyConverter type="crypto" cryptoSymbol="ETH" />
        
        <Banner />
      </div>
    </Layout>
  );
};

export default EthereumHoje;