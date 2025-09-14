import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import CurrencyConverter from "@/components/CurrencyConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PesoUruguaioHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Peso Uruguaio Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Peso Uruguaio (UYU) em tempo real</p>
        </div>

        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Gráfico UYU/USD</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <TradingViewWidget symbol="UYUUSD" height="400" />
              </div>
            </CardContent>
          </Card>
        </div>


        <CurrencyConverter type="currency" mainCurrency="UYU" />
      </div>
    </Layout>
  );
};

export default PesoUruguaioHoje;