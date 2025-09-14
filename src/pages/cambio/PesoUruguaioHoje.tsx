import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import CurrencyConverter from "@/components/CurrencyConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PesoUruguaioHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Peso Uruguaio Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Peso Uruguaio (UYU) em tempo real</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico UYU/USD</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="UYUUSD" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="UYU/USD"
              price="0.0250"
              change="+0.0005"
              changePercent="+2.04"
              flag1="🇺🇾"
            />
            <QuoteCard
              pair="UYU/BRL"
              price="0.1390"
              change="+0.0028"
              changePercent="+2.05"
              flag1="🇺🇾"
            />
            <QuoteCard
              pair="UYU/EUR"
              price="0.0214"
              change="+0.0004"
              changePercent="+1.90"
              flag1="🇺🇾"
            />
          </div>
        </div>


        <CurrencyConverter type="currency" mainCurrency="UYU" />
      </div>
    </Layout>
  );
};

export default PesoUruguaioHoje;