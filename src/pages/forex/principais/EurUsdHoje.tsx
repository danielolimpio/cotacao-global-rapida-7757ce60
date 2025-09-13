import Layout from "@/components/Layout";
import Banner from "@/components/Banner";
import QuoteCard from "@/components/QuoteCard";
import TradingViewWidget from "@/components/TradingViewWidget";
import CurrencyConverter from "@/components/CurrencyConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useRealTimeQuotes from "@/hooks/useRealTimeQuotes";

const EurUsdHoje = () => {
  const { quotes, loading, error } = useRealTimeQuotes(['EURUSD', 'EURBRL', 'EURJPY']);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2 flex items-center justify-center space-x-4">
            <span className="text-6xl">🇪🇺</span>
            <span>EUR/USD Hoje</span>
            <span className="text-6xl">🇺🇸</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Acompanhe a cotação do Euro contra o Dólar Americano em tempo real com análises técnicas e indicadores.
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
                    <span className="text-3xl">🇪🇺</span>
                    <span className="text-xl font-bold">EUR/USD</span>
                    <span className="text-3xl">🇺🇸</span>
                  </div>
                  {quotes['EURUSD'] && (
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">
                        ${quotes['EURUSD'].price.toFixed(4)}
                      </div>
                      <div className={`text-sm ${quotes['EURUSD'].change >= 0 ? 'text-success' : 'text-destructive'}`}>
                        {quotes['EURUSD'].change >= 0 ? '+' : ''}{quotes['EURUSD'].change.toFixed(4)} 
                        ({quotes['EURUSD'].changePercent >= 0 ? '+' : ''}{quotes['EURUSD'].changePercent.toFixed(2)}%)
                      </div>
                    </div>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-96">
                  <TradingViewWidget 
                    symbol="EURUSD" 
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
              pair="EUR/USD"
              price={quotes['EURUSD'] ? quotes['EURUSD'].price.toFixed(4) : "-.----"}
              change={quotes['EURUSD'] ? (quotes['EURUSD'].change >= 0 ? `+${quotes['EURUSD'].change.toFixed(4)}` : quotes['EURUSD'].change.toFixed(4)) : "--"}
              changePercent={quotes['EURUSD'] ? (quotes['EURUSD'].changePercent >= 0 ? `+${quotes['EURUSD'].changePercent.toFixed(2)}%` : `${quotes['EURUSD'].changePercent.toFixed(2)}%`) : "--%"}
              flag1="🇪🇺"
              flag2="🇺🇸"
              isPositive={quotes['EURUSD'] ? quotes['EURUSD'].change >= 0 : true}
            />
            <QuoteCard
              pair="EUR/BRL"
              price={quotes['EURBRL'] ? `R$ ${quotes['EURBRL'].price.toFixed(2)}` : "R$ -.--"}
              change={quotes['EURBRL'] ? (quotes['EURBRL'].change >= 0 ? `+${quotes['EURBRL'].change.toFixed(3)}` : quotes['EURBRL'].change.toFixed(3)) : "--"}
              changePercent={quotes['EURBRL'] ? (quotes['EURBRL'].changePercent >= 0 ? `+${quotes['EURBRL'].changePercent.toFixed(2)}%` : `${quotes['EURBRL'].changePercent.toFixed(2)}%`) : "--%"}
              flag1="🇪🇺"
              flag2="🇧🇷"
              isPositive={quotes['EURBRL'] ? quotes['EURBRL'].change >= 0 : true}
            />
            <QuoteCard
              pair="EUR/JPY"
              price={quotes['EURJPY'] ? `¥ ${(quotes['EURUSD']?.price * (1/quotes['JPYUSD']?.price || 147)).toFixed(2)}` : "¥ ---.--"}
              change="--"
              changePercent="--%"
              flag1="🇪🇺"
              flag2="🇯🇵"
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
                  ${quotes['EURUSD'] ? quotes['EURUSD'].high.toFixed(4) : '-.----'}
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
                  ${quotes['EURUSD'] ? quotes['EURUSD'].low.toFixed(4) : '-.----'}
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
                <p className="text-sm text-muted-foreground">Par mais líquido do mundo</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Currency Converter */}
        <CurrencyConverter type="euro" />

        <Banner />
      </div>
    </Layout>
  );
};

export default EurUsdHoje;