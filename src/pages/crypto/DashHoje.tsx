import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import CurrencyConverter from "@/components/CurrencyConverter";
import Banner from "@/components/Banner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DashHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Dash Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Dash (DASH) em tempo real</p>
        </div>

        <Banner />

        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Gráfico DASH/USD</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <TradingViewWidget symbol="DASHUSD" height="400" />
              </div>
            </CardContent>
          </Card>
        </div>


        <CurrencyConverter type="crypto" cryptoSymbol="DASH" />
        
        <Banner />
      </div>
    </Layout>
  );
};

export default DashHoje;