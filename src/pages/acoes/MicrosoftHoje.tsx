import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MicrosoftHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Microsoft Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação da Microsoft (MSFT) em tempo real</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico MSFT</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="MSFT" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="MSFT"
              price="385.50"
              change="+8.25"
              changePercent="+2.19"
              flag1="🪟"
            />
            <QuoteCard
              pair="Market Cap"
              price="2.87T"
              change="+62B"
              changePercent="+2.21"
              flag1="💼"
            />
            <QuoteCard
              pair="P/E Ratio"
              price="32.8"
              change="+0.4"
              changePercent="+1.23"
              flag1="📈"
            />
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default MicrosoftHoje;