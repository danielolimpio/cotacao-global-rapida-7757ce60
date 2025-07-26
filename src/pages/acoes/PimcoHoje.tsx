import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PimcoHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">PIMCO Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação da PIMCO em tempo real</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico PIMCO</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="PDI" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="PDI"
              price="12.85"
              change="+0.15"
              changePercent="+1.18"
              flag1="📊"
            />
            <QuoteCard
              pair="Volume"
              price="125K"
              change="+5K"
              changePercent="+4.17"
              flag1="📈"
            />
            <QuoteCard
              pair="P/E Ratio"
              price="8.75"
              change="+0.05"
              changePercent="+0.57"
              flag1="💼"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Máxima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-success">$13.05</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mínima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-destructive">$12.70</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Volume</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary">125K</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default PimcoHoje;