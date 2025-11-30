import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import TradingViewWidget from "@/components/TradingViewWidget";
import CurrencyConverter from "@/components/CurrencyConverter";
import DolarEducationalContent from "@/components/DolarEducationalContent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DolarHoje = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": "Dólar Americano (USD)",
    "description": "Cotação do Dólar Americano em tempo real com conversor e gráficos atualizados",
    "provider": {
      "@type": "Organization",
      "name": "Cotação de Hoje",
      "url": "https://cotacaodehoje.com"
    }
  };

  return (
    <Layout>
      <SEO path="/cambio/dolar-hoje" />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Dólar Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Dólar Americano (USD) em tempo real</p>
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


        <CurrencyConverter type="dollar" />

        <DolarEducationalContent />
      </div>
    </Layout>
  );
};

export default DolarHoje;