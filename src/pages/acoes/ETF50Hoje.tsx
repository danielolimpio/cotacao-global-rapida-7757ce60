import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ETF50Hoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">50 ETF Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Shanghai 50 ETF em tempo real</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico Shanghai 50 ETF</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="ASHR" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="ASHR"
              price="24.85"
              change="+0.35"
              changePercent="+1.43"
              flag1="📊"
            />
            <QuoteCard
              pair="Net Assets"
              price="1.8B USD"
              change="+25M USD"
              changePercent="+1.41"
              flag1="💼"
            />
            <QuoteCard
              pair="Volume"
              price="3.2M"
              change="+420K"
              changePercent="+15.11"
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
              <p className="text-2xl font-bold text-success">$25.15</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mínima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-destructive">$24.50</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Volume</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary">3.2M</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default ETF50Hoje;