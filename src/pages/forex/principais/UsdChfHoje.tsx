import Layout from "@/components/Layout";
import Banner from "@/components/Banner";
import QuoteCard from "@/components/QuoteCard";
import TradingViewWidget from "@/components/TradingViewWidget";
import CurrencyConverter from "@/components/CurrencyConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useRealTimeQuotes from "@/hooks/useRealTimeQuotes";

const UsdChfHoje = () => {
  const { quotes, loading, error } = useRealTimeQuotes(['CHFUSD', 'CHFBRL', 'EURUSD']);

  const usdChfPrice = quotes['CHFUSD'] ? (1 / quotes['CHFUSD'].price).toFixed(4) : '---.----';
  const usdChfChange = quotes['CHFUSD'] ? (-quotes['CHFUSD'].change / (quotes['CHFUSD'].price * quotes['CHFUSD'].price)).toFixed(4) : '--';
  const usdChfPercent = quotes['CHFUSD'] ? (-quotes['CHFUSD'].changePercent).toFixed(2) : '--';

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2 flex items-center justify-center space-x-4">
            <span className="text-6xl">🇺🇸</span>
            <span>USD/CHF Hoje</span>
            <span className="text-6xl">🇨🇭</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Acompanhe a cotação do Dólar Americano contra o Franco Suíço em tempo real - "Swissie".
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
                    <span className="text-xl font-bold">USD/CHF</span>
                    <span className="text-3xl">🇨🇭</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">
                      ₣ {usdChfPrice}
                    </div>
                    <div className={`text-sm ${parseFloat(usdChfChange) >= 0 ? 'text-success' : 'text-destructive'}`}>
                      {parseFloat(usdChfChange) >= 0 ? '+' : ''}{usdChfChange} 
                      ({parseFloat(usdChfPercent) >= 0 ? '+' : ''}{usdChfPercent}%)
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-96">
                  <TradingViewWidget 
                    symbol="USDCHF" 
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
              pair="USD/CHF"
              price={`₣ ${usdChfPrice}`}
              change={parseFloat(usdChfChange) >= 0 ? `+${usdChfChange}` : usdChfChange}
              changePercent={parseFloat(usdChfPercent) >= 0 ? `+${usdChfPercent}%` : `${usdChfPercent}%`}
              flag1="🇺🇸"
              flag2="🇨🇭"
              isPositive={parseFloat(usdChfChange) >= 0}
            />
            <QuoteCard
              pair="CHF/BRL"
              price={quotes['CHFBRL'] ? `R$ ${quotes['CHFBRL'].price.toFixed(4)}` : "R$ -.----"}
              change={quotes['CHFBRL'] ? (quotes['CHFBRL'].change >= 0 ? `+${quotes['CHFBRL'].change.toFixed(4)}` : quotes['CHFBRL'].change.toFixed(4)) : "--"}
              changePercent={quotes['CHFBRL'] ? (quotes['CHFBRL'].changePercent >= 0 ? `+${quotes['CHFBRL'].changePercent.toFixed(2)}%` : `${quotes['CHFBRL'].changePercent.toFixed(2)}%`) : "--%"}
              flag1="🇨🇭"
              flag2="🇧🇷"
              isPositive={quotes['CHFBRL'] ? quotes['CHFBRL'].change >= 0 : true}
            />
            <QuoteCard
              pair="EUR/CHF"
              price={quotes['EURUSD'] && quotes['CHFUSD'] ? `₣ ${(quotes['EURUSD'].price / quotes['CHFUSD'].price).toFixed(4)}` : "₣ -.----"}
              change="--"
              changePercent="--%"
              flag1="🇪🇺"
              flag2="🇨🇭"
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
                  ₣ {quotes['CHFUSD'] ? (1 / quotes['CHFUSD'].low).toFixed(4) : '-.----'}
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
                  ₣ {quotes['CHFUSD'] ? (1 / quotes['CHFUSD'].high).toFixed(4) : '-.----'}
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
                <p className="text-sm text-muted-foreground">Moeda de porto seguro</p>
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

export default UsdChfHoje;