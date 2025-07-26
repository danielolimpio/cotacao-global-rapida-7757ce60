import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import CurrencyConverter from "@/components/CurrencyConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FrancoSuicoHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Franco Suíço Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Franco Suíço (CHF) em tempo real</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico CHF/USD</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="CHFUSD" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="CHF/USD"
              price="1.0985"
              change="+0.0035"
              changePercent="+0.32"
              flag1="🇨🇭"
            />
            <QuoteCard
              pair="CHF/EUR"
              price="0.9325"
              change="+0.0025"
              changePercent="+0.27"
              flag1="🇨🇭"
            />
            <QuoteCard
              pair="CHF/BRL"
              price="5.68"
              change="+0.08"
              changePercent="+1.43"
              flag1="🇨🇭"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Máxima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-success">$1.1025</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mínima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-destructive">$1.0950</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Variação</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-success">+0.32%</p>
            </CardContent>
          </Card>
        </div>

        <CurrencyConverter type="currency" mainCurrency="CHF" />
      </div>
    </Layout>
  );
};

export default FrancoSuicoHoje;