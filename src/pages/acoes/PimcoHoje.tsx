import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import CurrencyConverter from "@/components/CurrencyConverter";
import Banner from "@/components/Banner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PimcoHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">PIMCO Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação da PIMCO em tempo real</p>
        </div>

        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Gráfico PDI</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <TradingViewWidget symbol="PDI" height="400" />
              </div>
            </CardContent>
          </Card>
        </div>

        <CurrencyConverter type="currency" />
        
        <Banner />
      </div>
    </Layout>
  );
};

export default PimcoHoje;