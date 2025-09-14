import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EaglePointHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Eagle Point Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação da Eagle Point (ECC) em tempo real</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico ECC</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="ECC" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="ECC"
              price="15.85"
              change="+0.25"
              changePercent="+1.60"
              flag1="🦅"
            />
            <QuoteCard
              pair="Dividend Yield"
              price="12.5%"
              change="+0.1%"
              changePercent="+0.81"
              flag1="💰"
            />
            <QuoteCard
              pair="Volume"
              price="45K"
              change="+2K"
              changePercent="+4.65"
              flag1="📈"
            />
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default EaglePointHoje;