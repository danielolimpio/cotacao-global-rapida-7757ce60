import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import CurrencyConverter from "@/components/CurrencyConverter";
import Banner from "@/components/Banner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const USDCHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">USDC Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do USD Coin (USDC) em tempo real</p>
        </div>

        <Banner />

        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Gráfico USDC/USD</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <TradingViewWidget symbol="USDCUSD" height="400" />
              </div>
            </CardContent>
          </Card>
        </div>


        <CurrencyConverter type="crypto" cryptoSymbol="USDC" />
        
        <Banner />
      </div>
    </Layout>
  );
};

export default USDCHoje;