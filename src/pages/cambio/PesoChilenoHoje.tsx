import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import CurrencyConverter from "@/components/CurrencyConverter";
import Banner from "@/components/Banner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PesoChilenoHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Peso Chileno Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Peso Chileno (CLP) em tempo real</p>
        </div>

        <Banner />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico CLP/USD</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="CLPUSD" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="CLP/USD"
              price="0.00100"
              change="+0.00003"
              changePercent="+3.09"
              flag1="🇨🇱"
            />
            <QuoteCard
              pair="CLP/BRL"
              price="0.00556"
              change="+0.00017"
              changePercent="+3.15"
              flag1="🇨🇱"
            />
            <QuoteCard
              pair="CLP/EUR"
              price="0.00085"
              change="+0.00003"
              changePercent="+3.66"
              flag1="🇨🇱"
            />
          </div>
        </div>


        <CurrencyConverter type="currency" mainCurrency="CLP" />
        
        <Banner />
      </div>
    </Layout>
  );
};

export default PesoChilenoHoje;