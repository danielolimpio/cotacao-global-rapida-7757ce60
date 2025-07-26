import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import CurrencyConverter from "@/components/CurrencyConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LibrasEsterlinasHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Libras Esterlinas Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação da Libra Esterlina (GBP) em tempo real</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico GBP/USD</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="GBPUSD" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="GBP/USD"
              price="1.2685"
              change="+0.0125"
              changePercent="+0.99"
              flag1="🇬🇧"
            />
            <QuoteCard
              pair="GBP/EUR"
              price="1.1725"
              change="+0.0085"
              changePercent="+0.73"
              flag1="🇬🇧"
            />
            <QuoteCard
              pair="GBP/BRL"
              price="6.7125"
              change="+0.0685"
              changePercent="+1.03"
              flag1="🇬🇧"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Máxima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-success">$1.2742</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mínima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-destructive">$1.2560</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Variação</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-success">+0.99%</p>
            </CardContent>
          </Card>
        </div>

        <CurrencyConverter type="currency" mainCurrency="GBP" />
      </div>
    </Layout>
  );
};

export default LibrasEsterlinasHoje;