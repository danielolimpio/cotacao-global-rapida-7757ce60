import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AllspringHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Allspring Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação da Allspring (ALSN) em tempo real</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico ALSN</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="ALSN" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="ALSN"
              price="25.40"
              change="+0.65"
              changePercent="+2.62"
              flag1="🏦"
            />
            <QuoteCard
              pair="Market Cap"
              price="5.2B"
              change="+135M"
              changePercent="+2.67"
              flag1="💼"
            />
            <QuoteCard
              pair="P/E Ratio"
              price="14.8"
              change="+0.2"
              changePercent="+1.37"
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
              <p className="text-2xl font-bold text-success">$25.95</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mínima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-destructive">$24.75</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Volume</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary">850K</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default AllspringHoje;