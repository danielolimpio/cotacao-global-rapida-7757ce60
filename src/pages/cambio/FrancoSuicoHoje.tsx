import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import CurrencyConverter from "@/components/CurrencyConverter";
import useRealTimeQuotes from "@/hooks/useRealTimeQuotes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FrancoSuicoHoje = () => {
  const { quotes, loading } = useRealTimeQuotes(['CHFUSD', 'EURUSD', 'CHFBRL']);
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Franco Suíço Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Franco Suíço (CHF) em tempo real</p>
        </div>

        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Gráfico CHF/USD</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <TradingViewWidget symbol="CHFUSD" height="400" />
              </div>
            </CardContent>
          </Card>
        </div>


        <CurrencyConverter type="currency" mainCurrency="CHF" />
      </div>
    </Layout>
  );
};

export default FrancoSuicoHoje;