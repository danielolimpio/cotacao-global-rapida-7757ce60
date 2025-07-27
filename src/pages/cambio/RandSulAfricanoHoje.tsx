import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import CurrencyConverter from "@/components/CurrencyConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RandSulAfricanoHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Rand Sul-Africano Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Rand Sul-Africano (ZAR) em tempo real</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico ZAR/USD</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="ZARUSD" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="ZAR/USD"
              price="0.0560"
              change="+0.0015"
              changePercent="+2.75"
              flag1="🇿🇦"
            />
            <QuoteCard
              pair="ZAR/BRL"
              price="0.3114"
              change="+0.0086"
              changePercent="+2.84"
              flag1="🇿🇦"
            />
            <QuoteCard
              pair="ZAR/EUR"
              price="0.0479"
              change="+0.0013"
              changePercent="+2.79"
              flag1="🇿🇦"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Máxima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-success">$0.0565</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mínima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-destructive">$0.0535</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Variação</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-success">+2.80%</p>
            </CardContent>
          </Card>
        </div>

        <CurrencyConverter type="currency" mainCurrency="ZAR" />
      </div>
    </Layout>
  );
};

export default RandSulAfricanoHoje;