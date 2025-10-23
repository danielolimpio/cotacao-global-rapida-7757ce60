import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SP500Hoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">S&P 500 Hoje</h1>
          <p className="text-xl text-muted-foreground">Índice S&P 500 (SPX) em tempo real</p>
        </div>

        <Card className="max-w-6xl mx-auto">
          <CardHeader>
            <CardTitle>Gráfico S&P 500</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-96">
              <TradingViewWidget symbol="SPX" height="400" />
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default SP500Hoje;