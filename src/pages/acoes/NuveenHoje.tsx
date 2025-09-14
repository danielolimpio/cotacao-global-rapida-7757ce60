import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const NuveenHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Nuveen Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação da Nuveen (JQC) em tempo real</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico JQC</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="JQC" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="JQC"
              price="10.25"
              change="+0.08"
              changePercent="+0.79"
              flag1="📊"
            />
            <QuoteCard
              pair="Dividend Yield"
              price="8.45%"
              change="+0.02%"
              changePercent="+0.24"
              flag1="💰"
            />
            <QuoteCard
              pair="Volume"
              price="85K"
              change="+3K"
              changePercent="+3.66"
              flag1="📈"
            />
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default NuveenHoje;