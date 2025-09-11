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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Máxima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="h-8 w-20 bg-muted animate-pulse rounded"></div>
              ) : (
                <p className="text-2xl font-bold text-success">
                  R$ {quotes.EURBRL?.high?.toFixed(4) || '6.5280'}
                </p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mínima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="h-8 w-20 bg-muted animate-pulse rounded"></div>
              ) : (
                <p className="text-2xl font-bold text-destructive">
                  R$ {quotes.EURBRL?.low?.toFixed(4) || '6.4820'}
                </p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Variação</CardTitle>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="h-8 w-20 bg-muted animate-pulse rounded"></div>
              ) : (
                <p className={`text-2xl font-bold ${(quotes.EURBRL?.changePercent || 0) >= 0 ? 'text-success' : 'text-destructive'}`}>
                  {(quotes.EURBRL?.changePercent || 0) >= 0 ? '+' : ''}{quotes.EURBRL?.changePercent?.toFixed(2) || '0.30'}%
                </p>
              )}
            </CardContent>
          </Card>
        </div>

        <CurrencyConverter type="euro" />
        
        <Banner />
      </div>
    </Layout>
  );
};

export default EuroHoje;