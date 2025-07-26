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
          <p className="text-xl text-muted-foreground">Cotação do CSI 300 ETF (510300.SS) em tempo real</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico 510300.SS</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="SSE:510300" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="510300.SS"
              price="¥ 4.285"
              change="+0.085"
              changePercent="+2.02"
              flag1="📊"
            />
            <QuoteCard
              pair="Net Assets"
              price="¥ 182B"
              change="+3.7B"
              changePercent="+2.08"
              flag1="💼"
            />
            <QuoteCard
              pair="Volume"
              price="158M"
              change="+28M"
              changePercent="+21.54"
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
              <p className="text-2xl font-bold text-success">¥ 4.325</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mínima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-destructive">¥ 4.200</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Volume</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary">158M</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default ETF300Hoje;