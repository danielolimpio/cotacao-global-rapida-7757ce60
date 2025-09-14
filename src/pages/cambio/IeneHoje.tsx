import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import CurrencyConverter from "@/components/CurrencyConverter";
import Banner from "@/components/Banner";
import useRealTimeQuotes from "@/hooks/useRealTimeQuotes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const IeneHoje = () => {
  const { quotes, loading } = useRealTimeQuotes(['JPYUSD', 'EURUSD', 'JPYBRL']);
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Iene Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Iene Japonês (JPY) em tempo real</p>
        </div>

        <Banner />

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
              price={quotes.JPYUSD?.price || 0.0068}
              change={quotes.JPYUSD?.change || 0.0001}
              changePercent={quotes.JPYUSD?.changePercent || 1.49}
              flag1="🇯🇵"
              flag2="🇺🇸"
              isLoading={loading}
            />
            <QuoteCard
              pair="JPY/EUR"
              price={(quotes.JPYUSD?.price || 0.0068) / (quotes.EURUSD?.price || 1.0892)}
              change={((quotes.JPYUSD?.change || 0.0001) / (quotes.EURUSD?.price || 1.0892))}
              changePercent={quotes.JPYUSD?.changePercent || 1.72}
              flag1="🇯🇵"
              flag2="🇪🇺"
              isLoading={loading}
            />
            <QuoteCard
              pair="JPY/BRL"
              price={quotes.JPYBRL?.price || 0.0378}
              change={quotes.JPYBRL?.change || 0.0006}
              changePercent={quotes.JPYBRL?.changePercent || 1.61}
              flag1="🇯🇵"
              flag2="🇧🇷"
              isLoading={loading}
            />
          </div>
        </div>


        <CurrencyConverter type="currency" mainCurrency="JPY" />
        
        <Banner />
      </div>
    </Layout>
  );
};

export default IeneHoje;