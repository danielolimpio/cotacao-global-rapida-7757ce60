import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MagazineLuizHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Magazine Luiza Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação da Magazine Luiza (MGLU3) em tempo real</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico MGLU3</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="MGLU3" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="MGLU3"
              price="4.85"
              change="+0.15"
              changePercent="+3.19"
              flag1="🛍️"
            />
            <QuoteCard
              pair="Market Cap"
              price="32.5B"
              change="+1.0B"
              changePercent="+3.17"
              flag1="💼"
            />
            <QuoteCard
              pair="Volume"
              price="28.5M"
              change="+2.5M"
              changePercent="+9.62"
              flag1="📈"
            />
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default MagazineLuizHoje;