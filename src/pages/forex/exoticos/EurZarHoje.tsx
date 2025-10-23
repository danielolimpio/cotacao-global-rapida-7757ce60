import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import UniversalConverter from "@/components/UniversalConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EurZarHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">EUR/ZAR Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do par Euro x Rand Sul-Africano em tempo real</p>
        </div>

        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Gráfico EUR/ZAR</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <TradingViewWidget symbol="EURZAR" height="400" />
              </div>
            </CardContent>
          </Card>
        </div>

        <UniversalConverter assetType="fiat" assetSymbol="ZAR" assetName="Rand Sul-Africano" />
      </div>
    </Layout>
  );
};

export default EurZarHoje;
