import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ETF300Hoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">300 ETF Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do CSI 300 ETF em tempo real</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico CSI 300 ETF</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="FXI" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="FXI"
              price="28.85"
              change="+0.45"
              changePercent="+1.58"
              flag1="📊"
            />
            <QuoteCard
              pair="Net Assets"
              price="4.2B USD"
              change="+65M USD"
              changePercent="+1.57"
              flag1="💼"
            />
            <QuoteCard
              pair="Volume"
              price="8.5M"
              change="+850K"
              changePercent="+11.11"
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
              <p className="text-2xl font-bold text-success">$29.25</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mínima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-destructive">$28.40</p>
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

export default ETF300Hoje;