import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AmazonHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Amazon Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação da Amazon (AMZN) em tempo real</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico AMZN</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="AMZN" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="AMZN"
              price="145.85"
              change="+3.25"
              changePercent="+2.28"
              flag1="📦"
            />
            <QuoteCard
              pair="Market Cap"
              price="1.52T"
              change="+35B"
              changePercent="+2.35"
              flag1="💼"
            />
            <QuoteCard
              pair="P/E Ratio"
              price="52.8"
              change="+0.8"
              changePercent="+1.54"
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
              <p className="text-2xl font-bold text-success">$148.95</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mínima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-destructive">$142.60</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Volume</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary">28.5M</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default AmazonHoje;