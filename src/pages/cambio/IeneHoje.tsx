import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import CurrencyConverter from "@/components/CurrencyConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const IeneHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Iene Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Iene Japonês (JPY) em tempo real</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico JPY/USD</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="JPYUSD" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="JPY/USD"
              price="0.0067"
              change="+0.0001"
              changePercent="+1.52"
              flag1="🇯🇵"
            />
            <QuoteCard
              pair="JPY/EUR"
              price="0.0062"
              change="+0.0001"
              changePercent="+1.64"
              flag1="🇯🇵"
            />
            <QuoteCard
              pair="JPY/BRL"
              price="0.0354"
              change="+0.0006"
              changePercent="+1.72"
              flag1="🇯🇵"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Máxima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-success">$0.0068</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mínima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-destructive">$0.0066</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Variação</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-success">+1.52%</p>
            </CardContent>
          </Card>
        </div>

        <CurrencyConverter type="currency" mainCurrency="JPY" />
      </div>
    </Layout>
  );
};

export default IeneHoje;