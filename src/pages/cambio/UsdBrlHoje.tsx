import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import UniversalConverter from "@/components/UniversalConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const UsdBrlHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Dólar x Real Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação USD/BRL em tempo real</p>
        </div>

        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Gráfico USD/BRL</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <TradingViewWidget symbol="USDBRL" height="400" />
              </div>
            </CardContent>
          </Card>
        </div>

        <UniversalConverter assetType="fiat" assetSymbol="USD" assetName="Dólar Americano" />
      </div>
    </Layout>
  );
};

export default UsdBrlHoje;
