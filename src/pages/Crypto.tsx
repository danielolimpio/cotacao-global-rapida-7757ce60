import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Crypto = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Criptomoedas</h1>
          <p className="text-xl text-muted-foreground">
            Acompanhe as cotações das principais criptomoedas em tempo real
          </p>
        </div>

        {/* Featured Bitcoin Chart */}
        <Card className="max-w-6xl mx-auto mb-12">
          <CardHeader>
            <CardTitle className="flex items-center justify-center">
              <div className="flex items-center space-x-3">
                <span className="text-3xl">₿</span>
                <span className="text-2xl font-bold">Bitcoin (BTC/USD)</span>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-96">
              <TradingViewWidget symbol="BTCUSD" height="384" />
            </div>
          </CardContent>
        </Card>

        {/* Ethereum Chart */}
        <Card className="max-w-6xl mx-auto mb-12">
          <CardHeader>
            <CardTitle className="flex items-center justify-center">
              <div className="flex items-center space-x-3">
                <span className="text-3xl">Ξ</span>
                <span className="text-2xl font-bold">Ethereum (ETH/USD)</span>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-96">
              <TradingViewWidget symbol="ETHUSD" height="384" />
            </div>
          </CardContent>
        </Card>

      </div>
    </Layout>
  );
};

export default Crypto;