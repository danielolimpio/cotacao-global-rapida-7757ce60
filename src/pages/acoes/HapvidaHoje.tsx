import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HapvidaHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Hapvida Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação da Hapvida (HAPV3) em tempo real</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico HAPV3</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="HAPV3" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="HAPV3"
              price="3.25"
              change="+0.08"
              changePercent="+2.52"
              flag1="🏥"
            />
            <QuoteCard
              pair="Market Cap"
              price="21.8B"
              change="+535M"
              changePercent="+2.52"
              flag1="💼"
            />
            <QuoteCard
              pair="Volume"
              price="15.2M"
              change="+1.2M"
              changePercent="+8.57"
              flag1="📈"
            />
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default HapvidaHoje;