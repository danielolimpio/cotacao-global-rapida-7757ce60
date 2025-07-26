import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import CurrencyConverter from "@/components/CurrencyConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ChainlinkHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Chainlink Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Chainlink (LINK) em tempo real</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico LINK/USD</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="LINKUSD" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="LINK/USD"
              price="14.75"
              change="+0.65"
              changePercent="+4.61"
              flag1="🔗"
            />
            <QuoteCard
              pair="LINK/BTC"
              price="0.0003275"
              change="+0.0000125"
              changePercent="+3.97"
              flag1="🔗"
            />
            <QuoteCard
              pair="LINK/ETH"
              price="0.00518"
              change="+0.000165"
              changePercent="+3.29"
              flag1="🔗"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Máxima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-success">$15.20</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mínima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-destructive">$14.10</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Volume 24h</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary">$385M</p>
            </CardContent>
          </Card>
        </div>

        <CurrencyConverter type="crypto" cryptoSymbol="LINK" />
      </div>
    </Layout>
  );
};

export default ChainlinkHoje;