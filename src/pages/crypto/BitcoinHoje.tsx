import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import CurrencyConverter from "@/components/CurrencyConverter";
import Banner from "@/components/Banner";
import useRealTimeQuotes from "@/hooks/useRealTimeQuotes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BitcoinHoje = () => {
  const { quotes, loading } = useRealTimeQuotes(['BTCUSD', 'ETHUSD']);
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Bitcoin Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Bitcoin (BTC) em tempo real</p>
        </div>

        <Banner />

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
              price={quotes.BTCUSD?.price || 91250.75}
              change={quotes.BTCUSD?.change || 2845.50}
              changePercent={quotes.BTCUSD?.changePercent || 3.22}
              flag1="₿"
              flag2="🇺🇸"
              isLoading={loading}
            />
            <QuoteCard
              pair="BTC/BRL"
              price={(quotes.BTCUSD?.price || 91250.75) * 5.56}
              change={((quotes.BTCUSD?.change || 2845.50) * 5.56)}
              changePercent={quotes.BTCUSD?.changePercent || 3.22}
              flag1="₿"
              flag2="🇧🇷"
              isLoading={loading}
            />
            <QuoteCard
              pair="ETH/USD"
              price={quotes.ETHUSD?.price || 3751.50}
              change={quotes.ETHUSD?.change || 185.25}
              changePercent={quotes.ETHUSD?.changePercent || 5.19}
              flag1="Ξ"
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
                  ${quotes.BTCUSD?.high?.toLocaleString('en-US', { maximumFractionDigits: 2 }) || '92,500'}
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
                  ${quotes.BTCUSD?.low?.toLocaleString('en-US', { maximumFractionDigits: 2 }) || '88,800'}
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
                <p className={`text-2xl font-bold ${(quotes.BTCUSD?.changePercent || 0) >= 0 ? 'text-success' : 'text-destructive'}`}>
                  {(quotes.BTCUSD?.changePercent || 0) >= 0 ? '+' : ''}{quotes.BTCUSD?.changePercent?.toFixed(2) || '3.22'}%
                </p>
              )}
            </CardContent>
          </Card>
        </div>

        <CurrencyConverter type="crypto" cryptoSymbol="BTC" />
        
        <Banner />
      </div>
    </Layout>
  );
};

export default BitcoinHoje;