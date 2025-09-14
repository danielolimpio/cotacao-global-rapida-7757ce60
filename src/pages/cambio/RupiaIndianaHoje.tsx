import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import CurrencyConverter from "@/components/CurrencyConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RupiaIndianaHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Rupia Indiana Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação da Rupia Indiana (INR) em tempo real</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico INR/USD</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="INRUSD" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="INR/USD"
              price="0.0120"
              change="+0.0002"
              changePercent="+1.69"
              flag1="🇮🇳"
            />
            <QuoteCard
              pair="INR/BRL"
              price="0.0667"
              change="+0.0011"
              changePercent="+1.68"
              flag1="🇮🇳"
            />
            <QuoteCard
              pair="INR/EUR"
              price="0.0103"
              change="+0.0002"
              changePercent="+1.98"
              flag1="🇮🇳"
            />
          </div>
        </div>


        <CurrencyConverter type="currency" mainCurrency="INR" />
      </div>
    </Layout>
  );
};

export default RupiaIndianaHoje;