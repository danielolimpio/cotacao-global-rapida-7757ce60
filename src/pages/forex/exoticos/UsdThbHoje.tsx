import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import UniversalConverter from "@/components/UniversalConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const UsdThbHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">USD/THB Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do par Dólar Americano x Baht Tailandês em tempo real</p>
        </div>

        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Gráfico USD/THB</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <TradingViewWidget symbol="USDTHB" height="400" />
              </div>
            </CardContent>
          </Card>
        </div>

        <UniversalConverter assetType="fiat" assetSymbol="THB" assetName="Baht Tailandês" />
      </div>
    </Layout>
  );
};

export default UsdThbHoje;
