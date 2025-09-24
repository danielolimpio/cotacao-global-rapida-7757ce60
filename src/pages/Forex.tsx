import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import CurrencyConverter from "@/components/CurrencyConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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