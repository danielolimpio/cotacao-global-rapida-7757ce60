import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import CurrencyConverter from "@/components/CurrencyConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PesoArgentinoHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Peso Argentino Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Peso Argentino (ARS) em tempo real</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico ARS/USD</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="ARSUSD" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="ARS/USD"
              price="0.00079"
              change="+0.00002"
              changePercent="+2.59"
              flag1="🇦🇷"
            />
            <QuoteCard
              pair="ARS/BRL"
              price="0.00439"
              change="+0.00011"
              changePercent="+2.57"
              flag1="🇦🇷"
            />
            <QuoteCard
              pair="ARS/EUR"
              price="0.00068"
              change="+0.00002"
              changePercent="+3.03"
              flag1="🇦🇷"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Máxima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-success">$0.00081</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mínima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-destructive">$0.00077</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Variação</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-success">+2.59%</p>
            </CardContent>
          </Card>
        </div>

        <CurrencyConverter type="currency" mainCurrency="ARS" />
      </div>
    </Layout>
  );
};

export default PesoArgentinoHoje;