import Layout from "@/components/Layout";
import Banner from "@/components/Banner";
import QuoteCard from "@/components/QuoteCard";
import TradingViewWidget from "@/components/TradingViewWidget";
import CurrencyConverter from "@/components/CurrencyConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useRealTimeQuotes from "@/hooks/useRealTimeQuotes";

const NzdUsdHoje = () => {
  const { quotes, loading, error } = useRealTimeQuotes(['NZDUSD', 'AUDUSD', 'EURUSD']);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2 flex items-center justify-center space-x-4">
            <span className="text-6xl">🇳🇿</span>
            <span>NZD/USD Hoje</span>
            <span className="text-6xl">🇺🇸</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Acompanhe a cotação do Dólar Neozelandês contra o Dólar Americano em tempo real - "Kiwi".
          </p>
        </div>

        <Banner />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Main Chart */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">🇳🇿</span>
                    <span className="text-xl font-bold">NZD/USD</span>
                    <span className="text-3xl">🇺🇸</span>
                  </div>
                  {quotes['NZDUSD'] && (
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">
                        ${quotes['NZDUSD'].price.toFixed(4)}
                      </div>
                      <div className={`text-sm ${quotes['NZDUSD'].change >= 0 ? 'text-success' : 'text-destructive'}`}>
                        {quotes['NZDUSD'].change >= 0 ? '+' : ''}{quotes['NZDUSD'].change.toFixed(4)} 
                        ({quotes['NZDUSD'].changePercent >= 0 ? '+' : ''}{quotes['NZDUSD'].changePercent.toFixed(2)}%)
                      </div>
                    </div>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-96">
                  <TradingViewWidget 
                    symbol="NZDUSD" 
                    height="384"
                    theme="light"
                    style="advanced"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quote Cards */}
          <div className="space-y-4">
            <QuoteCard
              pair="NZD/USD"
              price={quotes['NZDUSD'] ? quotes['NZDUSD'].price.toFixed(4) : "-.----"}
              change={quotes['NZDUSD'] ? (quotes['NZDUSD'].change >= 0 ? `+${quotes['NZDUSD'].change.toFixed(4)}` : quotes['NZDUSD'].change.toFixed(4)) : "--"}
              changePercent={quotes['NZDUSD'] ? (quotes['NZDUSD'].changePercent >= 0 ? `+${quotes['NZDUSD'].changePercent.toFixed(2)}%` : `${quotes['NZDUSD'].changePercent.toFixed(2)}%`) : "--%"}
              flag1="🇳🇿"
              flag2="🇺🇸"
              isPositive={quotes['NZDUSD'] ? quotes['NZDUSD'].change >= 0 : true}
            />
            <QuoteCard
              pair="NZD/AUD"
              price={quotes['NZDUSD'] && quotes['AUDUSD'] ? `A$ ${(quotes['NZDUSD'].price / quotes['AUDUSD'].price).toFixed(4)}` : "A$ -.----"}
              change="--"
              changePercent="--%"
              flag1="🇳🇿"
              flag2="🇦🇺"
              isPositive={true}
            />
            <QuoteCard
              pair="NZD/EUR"
              price={quotes['NZDUSD'] && quotes['EURUSD'] ? `€ ${(quotes['NZDUSD'].price / quotes['EURUSD'].price).toFixed(4)}` : "€ -.----"}
              change="--"
              changePercent="--%"
              flag1="🇳🇿"
              flag2="🇪🇺"
              isPositive={true}
            />
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Máxima 24h</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-2xl font-bold text-success">
                  ${quotes['NZDUSD'] ? quotes['NZDUSD'].high.toFixed(4) : '-.----'}
                </div>
                <p className="text-sm text-muted-foreground">Nível de resistência</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">Mínima 24h</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-2xl font-bold text-destructive">
                  ${quotes['NZDUSD'] ? quotes['NZDUSD'].low.toFixed(4) : '-.----'}
                </div>
                <p className="text-sm text-muted-foreground">Nível de suporte</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">Liquidez</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">Média</div>
                <p className="text-sm text-muted-foreground">Correlacionado com AUD</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Currency Converter */}
        <CurrencyConverter type="currency" />

        <Banner />
      </div>
    </Layout>
  );
};

export default NzdUsdHoje;