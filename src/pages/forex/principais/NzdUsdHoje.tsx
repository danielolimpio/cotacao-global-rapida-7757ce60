import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import ForexPairConverter from "@/components/ForexPairConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const NzdUsdHoje = () => {

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

        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-center space-x-3">
                <span className="text-3xl">🇳🇿</span>
                <span className="text-xl font-bold">NZD/USD - Gráfico em Tempo Real</span>
                <span className="text-3xl">🇺🇸</span>
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

        <ForexPairConverter 
          baseCurrency="NZD"
          quoteCurrency="USD"
          baseCurrencyName="Dólar Neozelandês"
          quoteCurrencyName="Dólar Americano"
          pairSymbol="NZDUSD"
        />
      </div>
    </Layout>
  );
};

export default NzdUsdHoje;