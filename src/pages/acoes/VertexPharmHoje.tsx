import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const VertexPharmHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Vertex Pharma Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação da Vertex Pharmaceuticals (VRTX) em tempo real</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico VRTX</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="VRTX" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="VRTX"
              price="425.85"
              change="+8.45"
              changePercent="+2.02"
              flag1="🧬"
            />
            <QuoteCard
              pair="Market Cap"
              price="109.5B"
              change="+2.2B"
              changePercent="+2.05"
              flag1="💼"
            />
            <QuoteCard
              pair="P/E Ratio"
              price="28.6"
              change="+0.2"
              changePercent="+0.70"
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
              <p className="text-2xl font-bold text-success">$432.75</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mínima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-destructive">$417.40</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Volume</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary">1.8M</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default VertexPharmHoje;