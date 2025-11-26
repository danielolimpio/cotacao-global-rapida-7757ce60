import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import UniversalConverter from "@/components/UniversalConverter";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SolanaHoje = () => {
  return (
    <Layout>
      <SEO path="/crypto/solana-hoje" />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Solana Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Solana (SOL) em tempo real</p>
        </div>

        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Gráfico SOL/USD</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <TradingViewWidget symbol="SOLUSD" height="400" />
              </div>
            </CardContent>
          </Card>
        </div>


        <UniversalConverter assetType="crypto" assetSymbol="SOL" assetName="Solana" />
      </div>
    </Layout>
  );
};

export default SolanaHoje;