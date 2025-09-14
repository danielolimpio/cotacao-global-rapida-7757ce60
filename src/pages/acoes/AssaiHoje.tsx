import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AssaiHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Assaí Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Assaí Atacadista (ASAI3) em tempo real</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico ASAI3</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="ASAI3" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="ASAI3"
              price="14.25"
              change="+0.35"
              changePercent="+2.52"
              flag1="🏪"
            />
            <QuoteCard
              pair="Market Cap"
              price="38.5B"
              change="+945M"
              changePercent="+2.52"
              flag1="💼"
            />
            <QuoteCard
              pair="Volume"
              price="18.5M"
              change="+1.8M"
              changePercent="+10.78"
              flag1="📈"
            />
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default AssaiHoje;