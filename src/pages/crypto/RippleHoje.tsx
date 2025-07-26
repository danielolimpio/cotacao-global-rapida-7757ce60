import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RippleHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Ripple Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Ripple (XRP) em tempo real</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico XRP/USD</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="XRPUSD" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="XRP/USD"
              price="0.6250"
              change="+0.0385"
              changePercent="+6.56"
              flag1="💎"
            />
            <QuoteCard
              pair="XRP/BTC"
              price="0.0000139"
              change="+0.0000008"
              changePercent="+6.11"
              flag1="💎"
            />
            <QuoteCard
              pair="XRP/ETH"
              price="0.0002195"
              change="+0.0000125"
              changePercent="+6.04"
              flag1="💎"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Máxima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-success">$0.6485</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mínima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-destructive">$0.5865</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Volume 24h</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary">$3.2B</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default RippleHoje;