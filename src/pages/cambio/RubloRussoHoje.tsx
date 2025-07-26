import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import CurrencyConverter from "@/components/CurrencyConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RubloRussoHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Rublo Russo Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Rublo Russo (RUB) em tempo real</p>
        </div>

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
              price="0.0102"
              change="+0.0003"
              changePercent="+3.03"
              flag1="🇷🇺"
            />
            <QuoteCard
              pair="RUB/BRL"
              price="0.0539"
              change="+0.0018"
              changePercent="+3.45"
              flag1="🇷🇺"
            />
            <QuoteCard
              pair="RUB/EUR"
              price="0.0094"
              change="+0.0004"
              changePercent="+4.44"
              flag1="🇷🇺"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Máxima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-success">$0.0105</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mínima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-destructive">$0.0099</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Variação</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-success">+3.03%</p>
            </CardContent>
          </Card>
        </div>

        <CurrencyConverter type="currency" mainCurrency="RUB" />
      </div>
    </Layout>
  );
};

export default RubloRussoHoje;