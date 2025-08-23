import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import CurrencyConverter from "@/components/CurrencyConverter";
import Banner from "@/components/Banner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AvalancheHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Avalanche Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Avalanche (AVAX) em tempo real</p>
        </div>

        <Banner />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico AVAX/USD</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="AVAXUSD" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="AVAX/USD"
              price="42.85"
              change="+2.15"
              changePercent="+5.28"
              flag1="🔺"
            />
            <QuoteCard
              pair="Market Cap"
              price="16.2B"
              change="+810M"
              changePercent="+5.26"
              flag1="💼"
            />
            <QuoteCard
              pair="Volume 24h"
              price="680M"
              change="+125M"
              changePercent="+22.50"
              flag1="📈"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Máxima 24h</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-success">$44.25</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mínima 24h</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-destructive">$40.15</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Variação 24h</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-success">+5.28%</p>
            </CardContent>
          </Card>
        </div>

        <CurrencyConverter type="crypto" cryptoSymbol="AVAX" />
        
        <Banner />
      </div>
    </Layout>
  );
};

export default AvalancheHoje;