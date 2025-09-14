import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import CurrencyConverter from "@/components/CurrencyConverter";
import Banner from "@/components/Banner";
import useRealTimeQuotes from "@/hooks/useRealTimeQuotes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EuroHoje = () => {
  const { quotes, loading } = useRealTimeQuotes(['EURBRL', 'EURUSD', 'EURGBP']);
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Euro Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Euro (EUR) em tempo real</p>
        </div>

        <Banner />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico EUR/BRL</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="EURBRL" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="EUR/BRL"
              price={quotes.EURBRL?.price || 6.5052}
              change={quotes.EURBRL?.change || 0.0195}
              changePercent={quotes.EURBRL?.changePercent || 0.30}
              flag1="🇪🇺"
              flag2="🇧🇷"
              isLoading={loading}
            />
            <QuoteCard
              pair="EUR/USD"
              price={quotes.EURUSD?.price || 1.1700}
              change={quotes.EURUSD?.change || 0.0028}
              changePercent={quotes.EURUSD?.changePercent || 0.24}
              flag1="🇪🇺"
              flag2="🇺🇸"
              isLoading={loading}
            />
            <QuoteCard
              pair="EUR/GBP"
              price={quotes.EURGBP?.price || 0.8731}
              change={quotes.EURGBP?.change || -0.0012}
              changePercent={quotes.EURGBP?.changePercent || -0.14}
              flag1="🇪🇺"
              flag2="🇬🇧"
              isLoading={loading}
            />
          </div>
        </div>


        <CurrencyConverter type="euro" />
        
        <Banner />
      </div>
    </Layout>
  );
};

export default EuroHoje;