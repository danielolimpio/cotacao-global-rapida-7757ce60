import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import UniversalConverter from "@/components/UniversalConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EurTryHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">EUR/TRY Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do par Euro x Lira Turca em tempo real</p>
        </div>

        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Gráfico EUR/TRY</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <TradingViewWidget symbol="EURTRY" height="400" />
              </div>
            </CardContent>
          </Card>
        </div>

        <UniversalConverter assetType="fiat" assetSymbol="TRY" assetName="Lira Turca" />
      </div>
    </Layout>
  );
};

export default EurTryHoje;
