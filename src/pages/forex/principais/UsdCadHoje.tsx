import Layout from "@/components/Layout";
import Banner from "@/components/Banner";
import QuoteCard from "@/components/QuoteCard";
import TradingViewWidget from "@/components/TradingViewWidget";
import CurrencyConverter from "@/components/CurrencyConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useRealTimeQuotes from "@/hooks/useRealTimeQuotes";

const UsdCadHoje = () => {
  const { quotes, loading, error } = useRealTimeQuotes(['CADUSD', 'CADBRL', 'EURUSD']);

  const usdCadPrice = quotes['CADUSD'] ? (1 / quotes['CADUSD'].price).toFixed(4) : '---.----';
  const usdCadChange = quotes['CADUSD'] ? (-quotes['CADUSD'].change / (quotes['CADUSD'].price * quotes['CADUSD'].price)).toFixed(4) : '--';
  const usdCadPercent = quotes['CADUSD'] ? (-quotes['CADUSD'].changePercent).toFixed(2) : '--';

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2 flex items-center justify-center space-x-4">
            <span className="text-6xl">🇺🇸</span>
            <span>USD/CAD Hoje</span>
            <span className="text-6xl">🇨🇦</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Acompanhe a cotação do Dólar Americano contra o Dólar Canadense em tempo real - "Loonie".
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
                    <span className="text-xl font-bold">USD/CAD</span>
                    <span className="text-3xl">🇨🇦</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">
                      C$ {usdCadPrice}
                    </div>
                    <div className={`text-sm ${parseFloat(usdCadChange) >= 0 ? 'text-success' : 'text-destructive'}`}>
                      {parseFloat(usdCadChange) >= 0 ? '+' : ''}{usdCadChange} 
                      ({parseFloat(usdCadPercent) >= 0 ? '+' : ''}{usdCadPercent}%)
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-96">
                  <TradingViewWidget 
                    symbol="USDCAD" 
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
              pair="USD/CAD"
              price={`C$ ${usdCadPrice}`}
              change={parseFloat(usdCadChange) >= 0 ? `+${usdCadChange}` : usdCadChange}
              changePercent={parseFloat(usdCadPercent) >= 0 ? `+${usdCadPercent}%` : `${usdCadPercent}%`}
              flag1="🇺🇸"
              flag2="🇨🇦"
              isPositive={parseFloat(usdCadChange) >= 0}
            />
            <QuoteCard
              pair="CAD/BRL"
              price={quotes['CADBRL'] ? `R$ ${quotes['CADBRL'].price.toFixed(2)}` : "R$ -.--"}
              change={quotes['CADBRL'] ? (quotes['CADBRL'].change >= 0 ? `+${quotes['CADBRL'].change.toFixed(3)}` : quotes['CADBRL'].change.toFixed(3)) : "--"}
              changePercent={quotes['CADBRL'] ? (quotes['CADBRL'].changePercent >= 0 ? `+${quotes['CADBRL'].changePercent.toFixed(2)}%` : `${quotes['CADBRL'].changePercent.toFixed(2)}%`) : "--%"}
              flag1="🇨🇦"
              flag2="🇧🇷"
              isPositive={quotes['CADBRL'] ? quotes['CADBRL'].change >= 0 : true}
            />
            <QuoteCard
              pair="EUR/CAD"
              price={quotes['EURUSD'] && quotes['CADUSD'] ? `C$ ${(quotes['EURUSD'].price / quotes['CADUSD'].price).toFixed(4)}` : "C$ -.----"}
              change="--"
              changePercent="--%"
              flag1="🇪🇺"
              flag2="🇨🇦"
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
                  C$ {quotes['CADUSD'] ? (1 / quotes['CADUSD'].low).toFixed(4) : '-.----'}
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
                  C$ {quotes['CADUSD'] ? (1 / quotes['CADUSD'].high).toFixed(4) : '-.----'}
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
                <p className="text-sm text-muted-foreground">Correlacionado com petróleo</p>
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

export default UsdCadHoje;