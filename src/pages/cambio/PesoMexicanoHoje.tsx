import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import CurrencyConverter from "@/components/CurrencyConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PesoMexicanoHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Peso Mexicano Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Peso Mexicano (MXN) em tempo real</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico MXN/USD</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="MXNUSD" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="MXN/USD"
              price="0.0582"
              change="+0.0012"
              changePercent="+2.10"
              flag1="🇲🇽"
            />
            <QuoteCard
              pair="MXN/BRL"
              price="0.3075"
              change="+0.0085"
              changePercent="+2.84"
              flag1="🇲🇽"
            />
            <QuoteCard
              pair="MXN/EUR"
              price="0.0537"
              change="+0.0015"
              changePercent="+2.87"
              flag1="🇲🇽"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Máxima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-success">$0.0595</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mínima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-destructive">$0.0570</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Variação</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-success">+2.10%</p>
            </CardContent>
          </Card>
        </div>

        <CurrencyConverter type="currency" mainCurrency="MXN" />
      </div>
    </Layout>
  );
};

export default PesoMexicanoHoje;