import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import CurrencyConverter from "@/components/CurrencyConverter";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AmbevHoje = () => {
  return (
    <Layout>
      <SEO path="/acoes/ambev-hoje" />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Ambev Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação da Ambev (ABEV3) em tempo real</p>
        </div>

        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Gráfico ABEV3</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <TradingViewWidget symbol="ABEV3" height="400" />
              </div>
            </CardContent>
          </Card>
        </div>

        <CurrencyConverter type="currency" mainCurrency="BRL" />
      </div>
    </Layout>
  );
};

export default AmbevHoje;