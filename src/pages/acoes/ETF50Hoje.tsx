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
          <p className="text-xl text-muted-foreground">Cotação do SSE 50 ETF (510050.SS) em tempo real</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico 510050.SS</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="SSE:510050" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="510050.SS"
              price="¥ 2.885"
              change="+0.055"
              changePercent="+1.94"
              flag1="📊"
            />
            <QuoteCard
              pair="Net Assets"
              price="¥ 495B"
              change="+9.6B"
              changePercent="+1.98"
              flag1="💼"
            />
            <QuoteCard
              pair="Volume"
              price="285M"
              change="+48M"
              changePercent="+20.25"
              flag1="📈"
            />
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default ETF50Hoje;