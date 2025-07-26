import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CarrefourHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Carrefour Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Carrefour Brasil (CRFB3) em tempo real</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico CRFB3</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="CRFB3" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="CRFB3"
              price="15.85"
              change="+0.35"
              changePercent="+2.26"
              flag1="🛒"
            />
            <QuoteCard
              pair="Market Cap"
              price="12.8B"
              change="+285M"
              changePercent="+2.28"
              flag1="💼"
            />
            <QuoteCard
              pair="Volume"
              price="8.5M"
              change="+450K"
              changePercent="+5.59"
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
              <p className="text-2xl font-bold text-success">R$ 16.15</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mínima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-destructive">R$ 15.50</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Volume</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary">8.5M</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default CarrefourHoje;