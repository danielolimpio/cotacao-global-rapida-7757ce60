import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import CurrencyConverter from "@/components/CurrencyConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BitcoinHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Bitcoin Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Bitcoin (BTC) em tempo real</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico BTC/USD</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="BTCUSD" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="BTC/USD"
              price="117,942.00"
              change="+2,850.00"
              changePercent="+2.48"
              flag1="₿"
            />
            <QuoteCard
              pair="BTC/BRL"
              price="655,761.52"
              change="+15,846.00"
              changePercent="+2.48"
              flag1="₿"
            />
            <QuoteCard
              pair="BTC/EUR"
              price="94,754.00"
              change="+1,150.00"
              changePercent="+2.84"
              flag1="₿"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Máxima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-success">$45,890</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mínima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-destructive">$43,850</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Volume 24h</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary">$28.5B</p>
            </CardContent>
          </Card>
        </div>

        <CurrencyConverter type="crypto" cryptoSymbol="BTC" />
      </div>
    </Layout>
  );
};

export default BitcoinHoje;