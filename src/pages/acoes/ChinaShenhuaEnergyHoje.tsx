import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ChinaShenhuaEnergyHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">China Shenhua Energy Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação da China Shenhua Energy (1088.HK) em tempo real</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico 1088.HK</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="SSE:601088" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="1088.HK"
              price="HK$ 16.85"
              change="+0.45"
              changePercent="+2.74"
              flag1="⛽"
            />
            <QuoteCard
              pair="Market Cap"
              price="HK$ 335B"
              change="+9.2B"
              changePercent="+2.82"
              flag1="💼"
            />
            <QuoteCard
              pair="Volume"
              price="48.5M"
              change="+6.8M"
              changePercent="+16.31"
              flag1="📈"
            />
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default ChinaShenhuaEnergyHoje;