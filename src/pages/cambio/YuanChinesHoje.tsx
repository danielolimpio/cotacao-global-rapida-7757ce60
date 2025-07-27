import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import CurrencyConverter from "@/components/CurrencyConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const YuanChinesHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Yuan Chinês Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Yuan Chinês (CNY) em tempo real</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico CNY/USD</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="CNYUSD" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="CNY/USD"
              price="0.1400"
              change="+0.0028"
              changePercent="+2.04"
              flag1="🇨🇳"
            />
            <QuoteCard
              pair="CNY/BRL"
              price="0.7784"
              change="+0.0156"
              changePercent="+2.04"
              flag1="🇨🇳"
            />
            <QuoteCard
              pair="CNY/EUR"
              price="0.1197"
              change="+0.0024"
              changePercent="+2.04"
              flag1="🇨🇳"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Máxima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-success">$0.1410</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mínima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-destructive">$0.1360</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Variação</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-success">+1.84%</p>
            </CardContent>
          </Card>
        </div>

        <CurrencyConverter type="currency" mainCurrency="CNY" />
      </div>
    </Layout>
  );
};

export default YuanChinesHoje;