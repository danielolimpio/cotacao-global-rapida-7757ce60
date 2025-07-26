import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import CurrencyConverter from "@/components/CurrencyConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SolanaHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Solana Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Solana (SOL) em tempo real</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico SOL/USD</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="SOLUSD" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="SOL/USD"
              price="185.40"
              change="+8.25"
              changePercent="+4.66"
              flag1="☀️"
            />
            <QuoteCard
              pair="Market Cap"
              price="87.5B"
              change="+3.9B"
              changePercent="+4.68"
              flag1="💼"
            />
            <QuoteCard
              pair="Volume 24h"
              price="3.2B"
              change="+580M"
              changePercent="+22.15"
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
              <p className="text-2xl font-bold text-success">$192.85</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mínima 24h</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-destructive">$176.20</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Variação 24h</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-success">+4.66%</p>
            </CardContent>
          </Card>
        </div>

        <CurrencyConverter type="crypto" cryptoSymbol="SOL" mainCurrency="SOL" />
      </div>
    </Layout>
  );
};

export default SolanaHoje;