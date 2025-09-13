import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import CurrencyConverter from "@/components/CurrencyConverter";
import Banner from "@/components/Banner";
import useRealTimeQuotes from "@/hooks/useRealTimeQuotes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FrancoSuicoHoje = () => {
  const { quotes, loading } = useRealTimeQuotes(['CHFUSD', 'EURUSD', 'CHFBRL']);
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Franco Suíço Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Franco Suíço (CHF) em tempo real</p>
        </div>

        <Banner />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico CHF/USD</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="CHFUSD" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="CHF/USD"
              price={quotes.CHFUSD?.price || 1.2600}
              change={quotes.CHFUSD?.change || 0.0040}
              changePercent={quotes.CHFUSD?.changePercent || 0.32}
              flag1="🇨🇭"
              flag2="🇺🇸"
              isLoading={loading}
            />
            <QuoteCard
              pair="CHF/EUR"
              price={(quotes.CHFUSD?.price || 1.2600) / (quotes.EURUSD?.price || 1.0892)}
              change={((quotes.CHFUSD?.change || 0.0040) / (quotes.EURUSD?.price || 1.0892))}
              changePercent={quotes.CHFUSD?.changePercent || 0.32}
              flag1="🇨🇭"
              flag2="🇪🇺"
              isLoading={loading}
            />
            <QuoteCard
              pair="CHF/BRL"
              price={quotes.CHFBRL?.price || 7.0056}
              change={quotes.CHFBRL?.change || 0.0950}
              changePercent={quotes.CHFBRL?.changePercent || 1.38}
              flag1="🇨🇭"
              flag2="🇧🇷"
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
                  ${quotes.CHFUSD?.high?.toFixed(4) || '1.2650'}
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
                  ${quotes.CHFUSD?.low?.toFixed(4) || '1.2550'}
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
                <p className={`text-2xl font-bold ${(quotes.CHFUSD?.changePercent || 0) >= 0 ? 'text-success' : 'text-destructive'}`}>
                  {(quotes.CHFUSD?.changePercent || 0) >= 0 ? '+' : ''}{quotes.CHFUSD?.changePercent?.toFixed(2) || '0.32'}%
                </p>
              )}
            </CardContent>
          </Card>
        </div>

        <CurrencyConverter type="currency" mainCurrency="CHF" />
        
        <Banner />
      </div>
    </Layout>
  );
};

export default FrancoSuicoHoje;