import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const InvescoHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Invesco Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação da Invesco (IVZ) em tempo real</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico IVZ</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="IVZ" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="IVZ"
              price="16.85"
              change="+0.35"
              changePercent="+2.12"
              flag1="📊"
            />
            <QuoteCard
              pair="Market Cap"
              price="7.8B"
              change="+165M"
              changePercent="+2.16"
              flag1="💼"
            />
            <QuoteCard
              pair="P/E Ratio"
              price="11.2"
              change="+0.1"
              changePercent="+0.90"
              flag1="📈"
            />
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default InvescoHoje;