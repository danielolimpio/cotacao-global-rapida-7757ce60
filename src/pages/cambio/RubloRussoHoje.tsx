import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import UniversalConverter from "@/components/UniversalConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RubloRussoHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Rublo Russo Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Rublo Russo (RUB) em tempo real</p>
        </div>

        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Gráfico RUB/USD</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <TradingViewWidget symbol="RUBUSD" height="400" />
              </div>
            </CardContent>
          </Card>
        </div>


        <UniversalConverter assetType="fiat" assetSymbol="RUB" assetName="Rublo Russo" />
      </div>
    </Layout>
  );
};

export default RubloRussoHoje;