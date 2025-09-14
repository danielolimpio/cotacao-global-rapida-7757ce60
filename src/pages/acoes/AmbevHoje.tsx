import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import CurrencyConverter from "@/components/CurrencyConverter";
import Banner from "@/components/Banner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AmbevHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Ambev Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação da Ambev (ABEV3) em tempo real</p>
        </div>

        <Banner />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico ABEV3</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="ABEV3" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="ABEV3"
              price="12.45"
              change="+0.18"
              changePercent="+1.47"
              flag1="🍺"
            />
            <QuoteCard
              pair="Market Cap"
              price="195.8B"
              change="+2.8B"
              changePercent="+1.45"
              flag1="💼"
            />
            <QuoteCard
              pair="Volume"
              price="32.8M"
              change="+2.5M"
              changePercent="+8.25"
              flag1="📈"
            />
          </div>
        </div>


        <CurrencyConverter type="currency" />
        
        <Banner />
      </div>
    </Layout>
  );
};

export default AmbevHoje;