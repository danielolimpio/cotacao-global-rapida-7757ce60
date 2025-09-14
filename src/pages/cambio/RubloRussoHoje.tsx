import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import CurrencyConverter from "@/components/CurrencyConverter";
import Banner from "@/components/Banner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RubloRussoHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Rublo Russo Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Rublo Russo (RUB) em tempo real</p>
        </div>

        <Banner />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico RUB/USD</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="RUBUSD" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="RUB/USD"
              price="0.0130"
              change="+0.0003"
              changePercent="+2.36"
              flag1="🇷🇺"
            />
            <QuoteCard
              pair="RUB/BRL"
              price="0.0723"
              change="+0.0017"
              changePercent="+2.41"
              flag1="🇷🇺"
            />
            <QuoteCard
              pair="RUB/EUR"
              price="0.0111"
              change="+0.0003"
              changePercent="+2.78"
              flag1="🇷🇺"
            />
          </div>
        </div>


        <CurrencyConverter type="currency" mainCurrency="RUB" />
        
        <Banner />
      </div>
    </Layout>
  );
};

export default RubloRussoHoje;