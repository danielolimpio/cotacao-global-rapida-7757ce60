import Layout from "@/components/Layout";
import Banner from "@/components/Banner";
import QuoteCard from "@/components/QuoteCard";
import TradingViewWidget from "@/components/TradingViewWidget";
import CurrencyConverter from "@/components/CurrencyConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useRealTimeQuotes from "@/hooks/useRealTimeQuotes";

const AudUsdHoje = () => {
  const { quotes, loading, error } = useRealTimeQuotes(['AUDUSD', 'AUDBRL', 'EURUSD']);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2 flex items-center justify-center space-x-4">
            <span className="text-6xl">🇦🇺</span>
            <span>AUD/USD Hoje</span>
            <span className="text-6xl">🇺🇸</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Acompanhe a cotação do Dólar Australiano contra o Dólar Americano em tempo real - "Aussie".
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
                    <span className="text-3xl">🇦🇺</span>
                    <span className="text-xl font-bold">AUD/USD</span>
                    <span className="text-3xl">🇺🇸</span>
                  </div>
                  {quotes['AUDUSD'] && (
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">
                        ${quotes['AUDUSD'].price.toFixed(4)}
                      </div>
                      <div className={`text-sm ${quotes['AUDUSD'].change >= 0 ? 'text-success' : 'text-destructive'}`}>
                        {quotes['AUDUSD'].change >= 0 ? '+' : ''}{quotes['AUDUSD'].change.toFixed(4)} 
                        ({quotes['AUDUSD'].changePercent >= 0 ? '+' : ''}{quotes['AUDUSD'].changePercent.toFixed(2)}%)
                      </div>
                    </div>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-96">
                  <TradingViewWidget 
                    symbol="AUDUSD" 
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
              pair="AUD/USD"
              price={quotes['AUDUSD'] ? quotes['AUDUSD'].price.toFixed(4) : "-.----"}
              change={quotes['AUDUSD'] ? (quotes['AUDUSD'].change >= 0 ? `+${quotes['AUDUSD'].change.toFixed(4)}` : quotes['AUDUSD'].change.toFixed(4)) : "--"}
              changePercent={quotes['AUDUSD'] ? (quotes['AUDUSD'].changePercent >= 0 ? `+${quotes['AUDUSD'].changePercent.toFixed(2)}%` : `${quotes['AUDUSD'].changePercent.toFixed(2)}%`) : "--%"}
              flag1="🇦🇺"
              flag2="🇺🇸"
              isPositive={quotes['AUDUSD'] ? quotes['AUDUSD'].change >= 0 : true}
            />
            <QuoteCard
              pair="AUD/BRL"
              price={quotes['AUDBRL'] ? `R$ ${quotes['AUDBRL'].price.toFixed(2)}` : "R$ -.--"}
              change={quotes['AUDBRL'] ? (quotes['AUDBRL'].change >= 0 ? `+${quotes['AUDBRL'].change.toFixed(3)}` : quotes['AUDBRL'].change.toFixed(3)) : "--"}
              changePercent={quotes['AUDBRL'] ? (quotes['AUDBRL'].changePercent >= 0 ? `+${quotes['AUDBRL'].changePercent.toFixed(2)}%` : `${quotes['AUDBRL'].changePercent.toFixed(2)}%`) : "--%"}
              flag1="🇦🇺"
              flag2="🇧🇷"
              isPositive={quotes['AUDBRL'] ? quotes['AUDBRL'].change >= 0 : true}
            />
            <QuoteCard
              pair="AUD/EUR"
              price={quotes['AUDUSD'] && quotes['EURUSD'] ? `€ ${(quotes['AUDUSD'].price / quotes['EURUSD'].price).toFixed(4)}` : "€ -.----"}
              change="--"
              changePercent="--%"
              flag1="🇦🇺"
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
                  ${quotes['AUDUSD'] ? quotes['AUDUSD'].high.toFixed(4) : '-.----'}
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
                  ${quotes['AUDUSD'] ? quotes['AUDUSD'].low.toFixed(4) : '-.----'}
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
                <div className="text-2xl font-bold text-primary">Alta</div>
                <p className="text-sm text-muted-foreground">Correlacionado com commodities</p>
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

export default AudUsdHoje;