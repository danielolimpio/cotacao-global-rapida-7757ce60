import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MetaHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Meta Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação da Meta (META) em tempo real</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico META</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="META" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="META"
              price="485.25"
              change="+12.85"
              changePercent="+2.72"
              flag1="📘"
            />
            <QuoteCard
              pair="Market Cap"
              price="1.23T"
              change="+33B"
              changePercent="+2.76"
              flag1="💼"
            />
            <QuoteCard
              pair="P/E Ratio"
              price="24.1"
              change="+0.3"
              changePercent="+1.26"
              flag1="📈"
            />
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default MetaHoje;