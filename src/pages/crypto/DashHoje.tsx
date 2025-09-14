import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import CurrencyConverter from "@/components/CurrencyConverter";
import Banner from "@/components/Banner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DashHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Dash Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Dash (DASH) em tempo real</p>
        </div>

        <Banner />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico DASH/USD</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="DASHUSD" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="DASH/USD"
              price="35.80"
              change="+1.25"
              changePercent="+3.62"
              flag1="💸"
            />
            <QuoteCard
              pair="Market Cap"
              price="425M"
              change="+15M"
              changePercent="+3.66"
              flag1="💼"
            />
            <QuoteCard
              pair="Volume 24h"
              price="85M"
              change="+12M"
              changePercent="+16.44"
              flag1="📈"
            />
          </div>
        </div>


        <CurrencyConverter type="crypto" cryptoSymbol="DASH" />
        
        <Banner />
      </div>
    </Layout>
  );
};

export default DashHoje;