import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import CurrencyConverter from "@/components/CurrencyConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WonSulCoreanoHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Won Sul-Coreano Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Won Sul-Coreano (KRW) em tempo real</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico KRW/USD</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="KRWUSD" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="KRW/USD"
              price="0.00072"
              change="+0.00001"
              changePercent="+1.41"
              flag1="🇰🇷"
            />
            <QuoteCard
              pair="KRW/BRL"
              price="0.00400"
              change="+0.00006"
              changePercent="+1.52"
              flag1="🇰🇷"
            />
            <QuoteCard
              pair="KRW/EUR"
              price="0.00062"
              change="+0.00001"
              changePercent="+1.64"
              flag1="🇰🇷"
            />
          </div>
        </div>


        <CurrencyConverter type="currency" mainCurrency="KRW" />
      </div>
    </Layout>
  );
};

export default WonSulCoreanoHoje;