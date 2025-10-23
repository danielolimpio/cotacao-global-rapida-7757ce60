import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import CurrencyConverter from "@/components/CurrencyConverter";
import useRealTimeQuotes from "@/hooks/useRealTimeQuotes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const IeneHoje = () => {
  const { quotes, loading } = useRealTimeQuotes(['JPYUSD', 'EURUSD', 'JPYBRL']);
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Iene Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Iene Japonês (JPY) em tempo real</p>
        </div>

        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Gráfico JPY/USD</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <TradingViewWidget symbol="JPYUSD" height="400" />
              </div>
            </CardContent>
          </Card>
        </div>


        <CurrencyConverter type="currency" mainCurrency="JPY" />
      </div>
    </Layout>
  );
};

export default IeneHoje;