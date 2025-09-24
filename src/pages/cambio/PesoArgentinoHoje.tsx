import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import UniversalConverter from "@/components/UniversalConverter";
import Banner from "@/components/Banner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PesoArgentinoHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Peso Argentino Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Peso Argentino (ARS) em tempo real</p>
        </div>

        <Banner />

        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Gráfico ARS/USD</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <TradingViewWidget symbol="ARSUSD" height="400" />
              </div>
            </CardContent>
          </Card>
        </div>


        <UniversalConverter assetType="fiat" assetSymbol="ARS" assetName="Peso Argentino" />
        
        <Banner />
      </div>
    </Layout>
  );
};

export default PesoArgentinoHoje;