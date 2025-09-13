import Layout from "@/components/Layout";
import Banner from "@/components/Banner";
import QuoteCard from "@/components/QuoteCard";
import TradingViewWidget from "@/components/TradingViewWidget";
import CurrencyConverter from "@/components/CurrencyConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useRealTimeQuotes from "@/hooks/useRealTimeQuotes";

const UsdJpyHoje = () => {
  const { quotes, loading, error } = useRealTimeQuotes(['JPYUSD', 'JPYBRL', 'EURUSD']);

  const usdJpyPrice = quotes['JPYUSD'] ? (1 / quotes['JPYUSD'].price).toFixed(2) : '---.-';
  const usdJpyChange = quotes['JPYUSD'] ? (-quotes['JPYUSD'].change / (quotes['JPYUSD'].price * quotes['JPYUSD'].price)).toFixed(2) : '--';
  const usdJpyPercent = quotes['JPYUSD'] ? (-quotes['JPYUSD'].changePercent).toFixed(2) : '--';

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2 flex items-center justify-center space-x-4">
            <span className="text-6xl">🇺🇸</span>
            <span>USD/JPY Hoje</span>
            <span className="text-6xl">🇯🇵</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Acompanhe a cotação do Dólar Americano contra o Iene Japonês em tempo real com análises técnicas.
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
                    <span className="text-3xl">🇺🇸</span>
                    <span className="text-xl font-bold">USD/JPY</span>
                    <span className="text-3xl">🇯🇵</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">
                      ¥ {usdJpyPrice}
                    </div>
                    <div className={`text-sm ${parseFloat(usdJpyChange) >= 0 ? 'text-success' : 'text-destructive'}`}>
                      {parseFloat(usdJpyChange) >= 0 ? '+' : ''}{usdJpyChange} 
                      ({parseFloat(usdJpyPercent) >= 0 ? '+' : ''}{usdJpyPercent}%)
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-96">
                  <TradingViewWidget 
                    symbol="USDJPY" 
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
              pair="USD/JPY"
              price={`¥ ${usdJpyPrice}`}
              change={parseFloat(usdJpyChange) >= 0 ? `+${usdJpyChange}` : usdJpyChange}
              changePercent={parseFloat(usdJpyPercent) >= 0 ? `+${usdJpyPercent}%` : `${usdJpyPercent}%`}
              flag1="🇺🇸"
              flag2="🇯🇵"
              isPositive={parseFloat(usdJpyChange) >= 0}
            />
            <QuoteCard
              pair="JPY/BRL"
              price={quotes['JPYBRL'] ? `R$ ${quotes['JPYBRL'].price.toFixed(4)}` : "R$ -.----"}
              change={quotes['JPYBRL'] ? (quotes['JPYBRL'].change >= 0 ? `+${quotes['JPYBRL'].change.toFixed(4)}` : quotes['JPYBRL'].change.toFixed(4)) : "--"}
              changePercent={quotes['JPYBRL'] ? (quotes['JPYBRL'].changePercent >= 0 ? `+${quotes['JPYBRL'].changePercent.toFixed(2)}%` : `${quotes['JPYBRL'].changePercent.toFixed(2)}%`) : "--%"}
              flag1="🇯🇵"
              flag2="🇧🇷"
              isPositive={quotes['JPYBRL'] ? quotes['JPYBRL'].change >= 0 : true}
            />
            <QuoteCard
              pair="EUR/JPY"
              price={quotes['EURUSD'] && quotes['JPYUSD'] ? `¥ ${(quotes['EURUSD'].price / quotes['JPYUSD'].price).toFixed(2)}` : "¥ ---.--"}
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
                  ¥ {quotes['JPYUSD'] ? (1 / quotes['JPYUSD'].low).toFixed(2) : '---.--'}
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
                  ¥ {quotes['JPYUSD'] ? (1 / quotes['JPYUSD'].high).toFixed(2) : '---.--'}
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
                <p className="text-sm text-muted-foreground">Segundo par mais negociado</p>
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

export default UsdJpyHoje;