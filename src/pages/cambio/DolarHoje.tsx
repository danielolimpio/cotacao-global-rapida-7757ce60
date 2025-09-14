import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import CurrencyConverter from "@/components/CurrencyConverter";
import Banner from "@/components/Banner";
import useRealTimeQuotes from "@/hooks/useRealTimeQuotes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DolarHoje = () => {
  const { quotes, loading } = useRealTimeQuotes(['USDBRL', 'EURUSD', 'GBPUSD']);
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Dólar Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Dólar Americano (USD) em tempo real</p>
        </div>

        <Banner />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico USD/BRL</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="USDBRL" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="USD/BRL"
              price={quotes.USDBRL?.price || 5.3899}
              change={quotes.USDBRL?.change || -0.0130}
              changePercent={quotes.USDBRL?.changePercent || -0.24}
              flag1="🇺🇸"
              flag2="🇧🇷"
              isLoading={loading}
            />
            <QuoteCard
              pair="USD/EUR"
              price={1 / (quotes.EURUSD?.price || 1.17)}
              change={-(quotes.EURUSD?.change || 0.0028) / (quotes.EURUSD?.price || 1.17)}
              changePercent={-(quotes.EURUSD?.changePercent || 0.24)}
              flag1="🇺🇸"
              flag2="🇪🇺"
              isLoading={loading}
            />
            <QuoteCard
              pair="USD/GBP"
              price={1 / (quotes.GBPUSD?.price || 1.34)}
              change={-(quotes.GBPUSD?.change || 0.0135) / (quotes.GBPUSD?.price || 1.34)}
              changePercent={-(quotes.GBPUSD?.changePercent || 1.02)}
              flag1="🇺🇸"
              flag2="🇬🇧"
              isLoading={loading}
            />
          </div>
        </div>


        <CurrencyConverter type="dollar" />
        
        <Banner />
      </div>
    </Layout>
  );
};

export default DolarHoje;