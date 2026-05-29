import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import ForexPairConverter from "@/components/ForexPairConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GbpAudHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2 flex items-center justify-center space-x-4">
            <span className="text-6xl">🇬🇧</span>
            <span>GBP/AUD Hoje</span>
            <span className="text-6xl">🇦🇺</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Acompanhe a cotação da Libra Esterlina contra o Dólar Australiano em tempo real.
          </p>
        </div>

        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-center space-x-3">
                <span className="text-3xl">🇬🇧</span>
                <span className="text-xl font-bold">GBP/AUD - Gráfico em Tempo Real</span>
                <span className="text-3xl">🇦🇺</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <TradingViewWidget 
                  symbol="GBPAUD" 
                  height="384"
                  theme="light"
                  style="advanced"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <ForexPairConverter baseCurrency="GBP" quoteCurrency="AUD" baseCurrencyName="Libra Esterlina" quoteCurrencyName="Dólar Australiano" pairSymbol="GBPAUD" />
      </div>
    </Layout>
  );
};

export default GbpAudHoje;