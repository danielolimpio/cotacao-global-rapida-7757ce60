import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const KraftHeinzHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Kraft Heinz Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação da Kraft Heinz (KHC) em tempo real</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico KHC</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="KHC" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="KHC"
              price="34.25"
              change="+0.65"
              changePercent="+1.93"
              flag1="🍅"
            />
            <QuoteCard
              pair="Market Cap"
              price="41.8B"
              change="+795M"
              changePercent="+1.94"
              flag1="💼"
            />
            <QuoteCard
              pair="P/E Ratio"
              price="13.1"
              change="+0.1"
              changePercent="+0.77"
              flag1="📈"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Máxima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-success">$34.75</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mínima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-destructive">$33.60</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Volume</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary">5.2M</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default KraftHeinzHoje;