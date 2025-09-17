import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import CurrencyConverter from "@/components/CurrencyConverter";
import Banner from "@/components/Banner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EaglePointHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Eagle Point Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação da Eagle Point (ECC) em tempo real</p>
        </div>

        <Banner />

        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Gráfico ECC</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <TradingViewWidget symbol="ECC" height="400" />
              </div>
            </CardContent>
          </Card>
        </div>

        <CurrencyConverter type="currency" />

      </div>
    </Layout>
  );
};

export default EaglePointHoje;