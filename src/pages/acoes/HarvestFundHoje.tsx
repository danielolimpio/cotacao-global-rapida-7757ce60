import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HarvestFundHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Harvest Fund Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Harvest Fund Management em tempo real</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico Harvest Fund</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="HSC" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="HSC"
              price="12.85"
              change="+0.25"
              changePercent="+1.98"
              flag1="🌾"
            />
            <QuoteCard
              pair="Market Cap"
              price="28.5B CNY"
              change="+545M CNY"
              changePercent="+1.95"
              flag1="💼"
            />
            <QuoteCard
              pair="Volume"
              price="15.8M"
              change="+1.5M"
              changePercent="+10.49"
              flag1="📈"
            />
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default HarvestFundHoje;