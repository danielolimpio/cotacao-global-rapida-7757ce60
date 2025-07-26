import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import CurrencyConverter from "@/components/CurrencyConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PesoChilenoHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Peso Chileno Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Peso Chileno (CLP) em tempo real</p>
        </div>

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
              price="0.0010"
              change="+0.0001"
              changePercent="+10.00"
              flag1="🇨🇱"
            />
            <QuoteCard
              pair="CLP/BRL"
              price="0.0055"
              change="+0.0002"
              changePercent="+3.77"
              flag1="🇨🇱"
            />
            <QuoteCard
              pair="CLP/EUR"
              price="0.0009"
              change="+0.0001"
              changePercent="+12.50"
              flag1="🇨🇱"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Máxima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-success">$0.0011</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mínima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-destructive">$0.0009</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Variação</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-success">+10.00%</p>
            </CardContent>
          </Card>
        </div>

        <CurrencyConverter type="currency" mainCurrency="CLP" />
      </div>
    </Layout>
  );
};

export default PesoChilenoHoje;