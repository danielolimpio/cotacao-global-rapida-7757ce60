import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import CurrencyConverter from "@/components/CurrencyConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Forex = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Forex</h1>
          <p className="text-xl text-muted-foreground">
            Mercado de câmbio internacional - Pares de moedas principais
          </p>
        </div>

        {/* Featured EUR/USD Chart */}
        <Card className="max-w-6xl mx-auto mb-12">
          <CardHeader>
            <CardTitle className="flex items-center justify-center">
              <div className="flex items-center space-x-3">
                <span className="text-3xl">🇪🇺</span>
                <span className="text-2xl font-bold">EUR/USD</span>
                <span className="text-3xl">🇺🇸</span>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-96">
              <TradingViewWidget symbol="EURUSD" height="384" />
            </div>
          </CardContent>
        </Card>

        <CurrencyConverter type="euro" />

        {/* GBP/USD Chart */}
        <Card className="max-w-6xl mx-auto mb-12 mt-12">
          <CardHeader>
            <CardTitle className="text-center">Libra Esterlina x Dólar Americano (GBP/USD)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-96">
              <TradingViewWidget symbol="GBPUSD" height="384" />
            </div>
          </CardContent>
        </Card>

        <CurrencyConverter type="currency" mainCurrency="GBP" />

        {/* Pares Principais */}
        <Card className="max-w-6xl mx-auto mt-12">
          <CardHeader>
            <CardTitle className="text-center">Pares de Forex Principais</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link to="/forex/principais/eur-usd" className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-2xl">🇪🇺</span>
                  <span className="text-2xl">🇺🇸</span>
                </div>
                <p className="font-semibold">EUR/USD</p>
              </Link>
              <Link to="/forex/principais/gbp-usd" className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-2xl">🇬🇧</span>
                  <span className="text-2xl">🇺🇸</span>
                </div>
                <p className="font-semibold">GBP/USD</p>
              </Link>
              <Link to="/forex/principais/usd-jpy" className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-2xl">🇺🇸</span>
                  <span className="text-2xl">🇯🇵</span>
                </div>
                <p className="font-semibold">USD/JPY</p>
              </Link>
              <Link to="/forex/principais/usd-chf" className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-2xl">🇺🇸</span>
                  <span className="text-2xl">🇨🇭</span>
                </div>
                <p className="font-semibold">USD/CHF</p>
              </Link>
              <Link to="/forex/principais/aud-usd" className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-2xl">🇦🇺</span>
                  <span className="text-2xl">🇺🇸</span>
                </div>
                <p className="font-semibold">AUD/USD</p>
              </Link>
              <Link to="/forex/principais/usd-cad" className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-2xl">🇺🇸</span>
                  <span className="text-2xl">🇨🇦</span>
                </div>
                <p className="font-semibold">USD/CAD</p>
              </Link>
              <Link to="/forex/principais/nzd-usd" className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-2xl">🇳🇿</span>
                  <span className="text-2xl">🇺🇸</span>
                </div>
                <p className="font-semibold">NZD/USD</p>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Pares Secundários */}
        <Card className="max-w-6xl mx-auto mt-12">
          <CardHeader>
            <CardTitle className="text-center">Pares de Forex Secundários</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link to="/forex/secundarios/eur-gbp" className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-2xl">🇪🇺</span>
                  <span className="text-2xl">🇬🇧</span>
                </div>
                <p className="font-semibold">EUR/GBP</p>
              </Link>
              <Link to="/forex/secundarios/eur-aud" className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-2xl">🇪🇺</span>
                  <span className="text-2xl">🇦🇺</span>
                </div>
                <p className="font-semibold">EUR/AUD</p>
              </Link>
              <Link to="/forex/secundarios/eur-cad" className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-2xl">🇪🇺</span>
                  <span className="text-2xl">🇨🇦</span>
                </div>
                <p className="font-semibold">EUR/CAD</p>
              </Link>
              <Link to="/forex/secundarios/eur-nzd" className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-2xl">🇪🇺</span>
                  <span className="text-2xl">🇳🇿</span>
                </div>
                <p className="font-semibold">EUR/NZD</p>
              </Link>
              <Link to="/forex/secundarios/gbp-jpy" className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-2xl">🇬🇧</span>
                  <span className="text-2xl">🇯🇵</span>
                </div>
                <p className="font-semibold">GBP/JPY</p>
              </Link>
              <Link to="/forex/secundarios/gbp-aud" className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-2xl">🇬🇧</span>
                  <span className="text-2xl">🇦🇺</span>
                </div>
                <p className="font-semibold">GBP/AUD</p>
              </Link>
              <Link to="/forex/secundarios/gbp-cad" className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-2xl">🇬🇧</span>
                  <span className="text-2xl">🇨🇦</span>
                </div>
                <p className="font-semibold">GBP/CAD</p>
              </Link>
              <Link to="/forex/secundarios/aud-jpy" className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-2xl">🇦🇺</span>
                  <span className="text-2xl">🇯🇵</span>
                </div>
                <p className="font-semibold">AUD/JPY</p>
              </Link>
              <Link to="/forex/secundarios/cad-jpy" className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-2xl">🇨🇦</span>
                  <span className="text-2xl">🇯🇵</span>
                </div>
                <p className="font-semibold">CAD/JPY</p>
              </Link>
              <Link to="/forex/secundarios/nzd-jpy" className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-2xl">🇳🇿</span>
                  <span className="text-2xl">🇯🇵</span>
                </div>
                <p className="font-semibold">NZD/JPY</p>
              </Link>
              <Link to="/forex/secundarios/aud-cad" className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-2xl">🇦🇺</span>
                  <span className="text-2xl">🇨🇦</span>
                </div>
                <p className="font-semibold">AUD/CAD</p>
              </Link>
              <Link to="/forex/secundarios/aud-nzd" className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-2xl">🇦🇺</span>
                  <span className="text-2xl">🇳🇿</span>
                </div>
                <p className="font-semibold">AUD/NZD</p>
              </Link>
              <Link to="/forex/secundarios/cad-chf" className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-2xl">🇨🇦</span>
                  <span className="text-2xl">🇨🇭</span>
                </div>
                <p className="font-semibold">CAD/CHF</p>
              </Link>
              <Link to="/forex/secundarios/nzd-cad" className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-2xl">🇳🇿</span>
                  <span className="text-2xl">🇨🇦</span>
                </div>
                <p className="font-semibold">NZD/CAD</p>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Pares Exóticos */}
        <Card className="max-w-6xl mx-auto mt-12">
          <CardHeader>
            <CardTitle className="text-center">Pares de Forex Exóticos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
              <Link to="/forex/exoticos/usd-try" className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-2xl">🇺🇸</span>
                  <span className="text-2xl">🇹🇷</span>
                </div>
                <p className="font-semibold">USD/TRY</p>
              </Link>
              <Link to="/forex/exoticos/usd-zar" className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-2xl">🇺🇸</span>
                  <span className="text-2xl">🇿🇦</span>
                </div>
                <p className="font-semibold">USD/ZAR</p>
              </Link>
              <Link to="/forex/exoticos/usd-mxn" className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-2xl">🇺🇸</span>
                  <span className="text-2xl">🇲🇽</span>
                </div>
                <p className="font-semibold">USD/MXN</p>
              </Link>
              <Link to="/forex/exoticos/usd-sek" className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-2xl">🇺🇸</span>
                  <span className="text-2xl">🇸🇪</span>
                </div>
                <p className="font-semibold">USD/SEK</p>
              </Link>
              <Link to="/forex/exoticos/usd-nok" className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-2xl">🇺🇸</span>
                  <span className="text-2xl">🇳🇴</span>
                </div>
                <p className="font-semibold">USD/NOK</p>
              </Link>
              <Link to="/forex/exoticos/usd-pln" className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-2xl">🇺🇸</span>
                  <span className="text-2xl">🇵🇱</span>
                </div>
                <p className="font-semibold">USD/PLN</p>
              </Link>
              <Link to="/forex/exoticos/eur-try" className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-2xl">🇪🇺</span>
                  <span className="text-2xl">🇹🇷</span>
                </div>
                <p className="font-semibold">EUR/TRY</p>
              </Link>
              <Link to="/forex/exoticos/gbp-try" className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-2xl">🇬🇧</span>
                  <span className="text-2xl">🇹🇷</span>
                </div>
                <p className="font-semibold">GBP/TRY</p>
              </Link>
              <Link to="/forex/exoticos/aud-sgd" className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-2xl">🇦🇺</span>
                  <span className="text-2xl">🇸🇬</span>
                </div>
                <p className="font-semibold">AUD/SGD</p>
              </Link>
              <Link to="/forex/exoticos/eur-zar" className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-2xl">🇪🇺</span>
                  <span className="text-2xl">🇿🇦</span>
                </div>
                <p className="font-semibold">EUR/ZAR</p>
              </Link>
              <Link to="/forex/exoticos/usd-hkd" className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-2xl">🇺🇸</span>
                  <span className="text-2xl">🇭🇰</span>
                </div>
                <p className="font-semibold">USD/HKD</p>
              </Link>
              <Link to="/forex/exoticos/usd-thb" className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-2xl">🇺🇸</span>
                  <span className="text-2xl">🇹🇭</span>
                </div>
                <p className="font-semibold">USD/THB</p>
              </Link>
              <Link to="/forex/exoticos/usd-inr" className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-2xl">🇺🇸</span>
                  <span className="text-2xl">🇮🇳</span>
                </div>
                <p className="font-semibold">USD/INR</p>
              </Link>
              <Link to="/forex/exoticos/usd-rub" className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-2xl">🇺🇸</span>
                  <span className="text-2xl">🇷🇺</span>
                </div>
                <p className="font-semibold">USD/RUB</p>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Market Sessions */}
        <Card className="max-w-6xl mx-auto mt-12">
          <CardHeader>
            <CardTitle className="text-center">Sessões de Trading Forex</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">🇦🇺 Sydney</h3>
                <p className="text-sm text-muted-foreground">22:00 - 07:00 UTC</p>
                <p className="text-sm text-destructive">Fechado</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">🇯🇵 Tóquio</h3>
                <p className="text-sm text-muted-foreground">00:00 - 09:00 UTC</p>
                <p className="text-sm text-destructive">Fechado</p>
              </div>
              <div className="text-center p-4 bg-success/10 rounded-lg border border-success/20">
                <h3 className="font-semibold text-foreground mb-2">🇬🇧 Londres</h3>
                <p className="text-sm text-muted-foreground">08:00 - 17:00 UTC</p>
                <p className="text-sm text-success font-semibold">Aberto</p>
              </div>
              <div className="text-center p-4 bg-success/10 rounded-lg border border-success/20">
                <h3 className="font-semibold text-foreground mb-2">🇺🇸 Nova York</h3>
                <p className="text-sm text-muted-foreground">13:00 - 22:00 UTC</p>
                <p className="text-sm text-success font-semibold">Aberto</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Forex;