import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WonSulCoreanoHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Won Sul-Coreano Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Won Sul-Coreano (KRW) em tempo real</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico KRW/USD</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="KRWUSD" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="KRW/USD"
              price="0.0007"
              change="+0.00001"
              changePercent="+1.45"
              flag1="🇰🇷"
            />
            <QuoteCard
              pair="KRW/BRL"
              price="0.0040"
              change="+0.0001"
              changePercent="+2.56"
              flag1="🇰🇷"
            />
            <QuoteCard
              pair="KRW/EUR"
              price="0.0007"
              change="+0.00002"
              changePercent="+2.94"
              flag1="🇰🇷"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Máxima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-success">$0.0008</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mínima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-destructive">$0.0007</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Variação</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-success">+1.45%</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default WonSulCoreanoHoje;