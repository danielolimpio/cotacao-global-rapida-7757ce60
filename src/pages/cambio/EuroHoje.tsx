import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import CurrencyConverter from "@/components/CurrencyConverter";
import useRealTimeQuotes from "@/hooks/useRealTimeQuotes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EuroHoje = () => {
  const { quotes, loading } = useRealTimeQuotes(['EURBRL', 'EURUSD', 'EURGBP']);
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": "Euro (EUR)",
    "description": "Cotação do Euro em tempo real com conversor e gráficos atualizados",
    "provider": {
      "@type": "Organization",
      "name": "Cotação de Hoje",
      "url": "https://cotacaodehoje.com"
    }
  };
  
  return (
    <Layout>
      <SEO
        title="Euro Hoje - Cotação EUR/BRL em Tempo Real"
        description="Cotação do euro (EUR) hoje em tempo real. Conversor euro para real, gráficos ao vivo e análise completa da moeda europeia."
        keywords="euro hoje, cotação euro, EUR BRL, euro real, conversão euro, preço euro, euro tempo real, câmbio euro"
        canonical="https://cotacaodehoje.com/cambio/euro"
        schema={schema}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Euro Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Euro (EUR) em tempo real</p>
        </div>

        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Gráfico EUR/BRL</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <TradingViewWidget symbol="EURBRL" height="400" />
              </div>
            </CardContent>
          </Card>
        </div>


        <CurrencyConverter type="euro" />
      </div>
    </Layout>
  );
};

export default EuroHoje;