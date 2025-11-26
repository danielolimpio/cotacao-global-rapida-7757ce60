import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import UniversalConverter from "@/components/UniversalConverter";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const YuanChinesHoje = () => {
  return (
    <Layout>
      <SEO path="/cambio/yuan-chines-hoje" />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Yuan Chinês Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Yuan Chinês (CNY) em tempo real</p>
        </div>

        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Gráfico CNY/USD</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <TradingViewWidget symbol="CNYUSD" height="400" />
              </div>
            </CardContent>
          </Card>
        </div>


        <UniversalConverter assetType="fiat" assetSymbol="CNY" assetName="Yuan Chinês" />
      </div>
    </Layout>
  );
};

export default YuanChinesHoje;