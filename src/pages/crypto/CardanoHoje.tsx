import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import UniversalConverter from "@/components/UniversalConverter";
import Banner from "@/components/Banner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CardanoHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Cardano Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Cardano (ADA) em tempo real</p>
        </div>

        <Banner />

        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Gráfico ADA/USD</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <TradingViewWidget symbol="ADAUSD" height="400" />
              </div>
            </CardContent>
          </Card>
        </div>


        <UniversalConverter assetType="crypto" assetSymbol="ADA" assetName="Cardano" />
        
        <Banner />
      </div>
    </Layout>
  );
};

export default CardanoHoje;