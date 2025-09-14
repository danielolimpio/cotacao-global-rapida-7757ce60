import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CiscoHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Cisco Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação da Cisco (CSCO) em tempo real</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico CSCO</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="CSCO" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="CSCO"
              price="51.75"
              change="+0.85"
              changePercent="+1.67"
              flag1="🌐"
            />
            <QuoteCard
              pair="Market Cap"
              price="213.5B"
              change="+3.5B"
              changePercent="+1.67"
              flag1="💼"
            />
            <QuoteCard
              pair="P/E Ratio"
              price="15.2"
              change="+0.1"
              changePercent="+0.66"
              flag1="📈"
            />
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default CiscoHoje;