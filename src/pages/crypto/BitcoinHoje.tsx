import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import TradingViewWidget from "@/components/TradingViewWidget";
import UniversalConverter from "@/components/UniversalConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BitcoinHoje = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": "Bitcoin (BTC)",
    "description": "Cotação do Bitcoin em tempo real com gráficos e conversor",
    "provider": {
      "@type": "Organization",
      "name": "Cotação de Hoje",
      "url": "https://cotacaodehoje.com"
    },
    "category": "Cryptocurrency"
  };
  
  return (
    <Layout>
      <SEO
        title="Bitcoin Hoje - Cotação BTC em Tempo Real"
        description="Acompanhe a cotação do Bitcoin (BTC) em tempo real. Preço atualizado, gráficos ao vivo, conversor BTC/BRL e análise completa da principal criptomoeda do mundo."
        keywords="bitcoin hoje, BTC, cotação bitcoin, preço bitcoin, bitcoin tempo real, bitcoin BRL, bitcoin USD, comprar bitcoin, valor bitcoin"
        canonical="https://cotacaodehoje.com/crypto/bitcoin"
        schema={schema}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Bitcoin Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Bitcoin (BTC) em tempo real</p>
        </div>

        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-center space-x-3">
                <span className="text-3xl">₿</span>
                <span className="text-xl font-bold">Bitcoin - Gráfico em Tempo Real</span>
                <span className="text-3xl">🇺🇸</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <TradingViewWidget 
                  symbol="BTCUSD" 
                  height="384"
                  theme="light"
                  style="advanced"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <UniversalConverter assetType="crypto" assetSymbol="BTC" assetName="Bitcoin" />
      </div>
    </Layout>
  );
};

export default BitcoinHoje;