import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import Banner from "@/components/Banner";
import useRealTimeQuotes from "@/hooks/useRealTimeQuotes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AppleHoje = () => {
  const { quotes, loading } = useRealTimeQuotes(['AAPL', 'MSFT', 'GOOGL']);
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Apple Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação da Apple (AAPL) em tempo real</p>
        </div>

        <Banner />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico AAPL</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="AAPL" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="AAPL"
              price={quotes.AAPL?.price || 228.87}
              change={quotes.AAPL?.change || 4.25}
              changePercent={quotes.AAPL?.changePercent || 1.89}
              flag1="🍎"
              isLoading={loading}
            />
            <QuoteCard
              pair="MSFT"
              price={quotes.MSFT?.price || 415.26}
              change={quotes.MSFT?.change || 8.50}
              changePercent={quotes.MSFT?.changePercent || 2.09}
              flag1="📊"
              isLoading={loading}
            />
            <QuoteCard
              pair="GOOGL"
              price={quotes.GOOGL?.price || 175.32}
              change={quotes.GOOGL?.change || 3.25}
              changePercent={quotes.GOOGL?.changePercent || 1.89}
              flag1="📈"
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
                  ${quotes.AAPL?.high?.toFixed(2) || '231.20'}
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
                  ${quotes.AAPL?.low?.toFixed(2) || '226.45'}
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
                <p className={`text-2xl font-bold ${(quotes.AAPL?.changePercent || 0) >= 0 ? 'text-success' : 'text-destructive'}`}>
                  {(quotes.AAPL?.changePercent || 0) >= 0 ? '+' : ''}{quotes.AAPL?.changePercent?.toFixed(2) || '1.89'}%
                </p>
              )}
            </CardContent>
          </Card>
        </div>

        <Banner />
      </div>
    </Layout>
  );
};

export default AppleHoje;