import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import CurrencyConverter from "@/components/CurrencyConverter";
import Banner from "@/components/Banner";
import useRealTimeQuotes from "@/hooks/useRealTimeQuotes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EthereumHoje = () => {
  const { quotes, loading } = useRealTimeQuotes(['ETHUSD', 'BTCUSD', 'ADAUSD']);
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Ethereum Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Ethereum (ETH) em tempo real</p>
        </div>

        <Banner />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico ETH/USD</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="ETHUSD" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="ETH/USD"
              price={quotes.ETHUSD?.price || 3751.50}
              change={quotes.ETHUSD?.change || 185.25}
              changePercent={quotes.ETHUSD?.changePercent || 5.19}
              flag1="Ξ"
              flag2="🇺🇸"
              isLoading={loading}
            />
            <QuoteCard
              pair="ETH/BTC"
              price={(quotes.ETHUSD?.price || 3751.50) / (quotes.BTCUSD?.price || 91250.75)}
              change={((quotes.ETHUSD?.change || 185.25) / (quotes.BTCUSD?.price || 91250.75))}
              changePercent={quotes.ETHUSD?.changePercent || 5.19}
              flag1="Ξ"
              flag2="₿"
              isLoading={loading}
            />
            <QuoteCard
              pair="ADA/USD"
              price={quotes.ADAUSD?.price || 0.8950}
              change={quotes.ADAUSD?.change || 0.0425}
              changePercent={quotes.ADAUSD?.changePercent || 4.98}
              flag1="₳"
              flag2="🇺🇸"
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
                  ${quotes.ETHUSD?.high?.toLocaleString() || '3,795'}
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
                  ${quotes.ETHUSD?.low?.toLocaleString() || '3,680'}
                </p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Volume 24h</CardTitle>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="h-8 w-20 bg-muted animate-pulse rounded"></div>
              ) : (
                <p className="text-2xl font-bold text-primary">$24.8B</p>
              )}
            </CardContent>
          </Card>
        </div>

        <CurrencyConverter type="crypto" cryptoSymbol="ETH" />
        
        <Banner />
      </div>
    </Layout>
  );
};

export default EthereumHoje;