import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import TradingViewWidget from "@/components/TradingViewWidget";
import CurrencyConverter from "@/components/CurrencyConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Cambio = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Câmbio - Cotações de Moedas",
    "description": "Cotações das principais moedas mundiais em tempo real",
    "provider": {
      "@type": "Organization",
      "name": "Cotação de Hoje",
      "url": "https://cotacaodehoje.com"
    }
  };

  return (
    <Layout>
      <SEO path="/cambio" />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Câmbio</h1>
          <p className="text-xl text-muted-foreground">
            Acompanhe as cotações das principais moedas mundiais em tempo real
          </p>
        </div>

        <Tabs defaultValue="brl" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
            <TabsTrigger value="brl">Moedas vs Real (BRL)</TabsTrigger>
            <TabsTrigger value="usd">Moedas vs Dólar (USD)</TabsTrigger>
          </TabsList>

          <TabsContent value="brl" className="space-y-8">
            {/* Featured USD/BRL Chart */}
            <Card className="max-w-6xl mx-auto">
              <CardHeader>
                <CardTitle className="text-center">Dólar Americano x Real Brasileiro</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-96">
                  <TradingViewWidget symbol="USDBRL" height="384" />
                </div>
              </CardContent>
            </Card>

            <CurrencyConverter type="dollar" />
          </TabsContent>

          <TabsContent value="usd" className="space-y-8">
            {/* Featured EUR/USD Chart */}
            <Card className="max-w-6xl mx-auto">
              <CardHeader>
                <CardTitle className="text-center">Euro x Dólar Americano</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-96">
                  <TradingViewWidget symbol="EURUSD" height="384" />
                </div>
              </CardContent>
            </Card>

            <CurrencyConverter type="euro" />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Cambio;