import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const IntelHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Intel Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação da Intel (INTC) em tempo real</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico INTC</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="INTC" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="INTC"
              price="25.85"
              change="+0.45"
              changePercent="+1.77"
              flag1="💻"
            />
            <QuoteCard
              pair="Market Cap"
              price="110.2B"
              change="+1.9B"
              changePercent="+1.76"
              flag1="💼"
            />
            <QuoteCard
              pair="P/E Ratio"
              price="25.6"
              change="+0.2"
              changePercent="+0.79"
              flag1="📈"
            />
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default IntelHoje;