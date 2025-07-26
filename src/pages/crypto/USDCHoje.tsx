import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import CurrencyConverter from "@/components/CurrencyConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const USDCHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">USDC Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do USD Coin (USDC) em tempo real</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico USDC/USD</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="USDCUSD" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="USDC/USD"
              price="1.0001"
              change="+0.0000"
              changePercent="+0.00"
              flag1="🔵"
            />
            <QuoteCard
              pair="Market Cap"
              price="34.2B"
              change="+42M"
              changePercent="+0.12"
              flag1="💼"
            />
            <QuoteCard
              pair="Volume 24h"
              price="5.8B"
              change="+685M"
              changePercent="+13.40"
              flag1="📈"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Máxima 24h</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-success">$1.0003</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mínima 24h</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-destructive">$0.9999</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Variação 24h</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-success">+0.00%</p>
            </CardContent>
          </Card>
        </div>

        <CurrencyConverter type="crypto" cryptoSymbol="USDC" mainCurrency="USDC" />
      </div>
    </Layout>
  );
};

export default USDCHoje;