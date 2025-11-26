import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import CurrencyConverter from "@/components/CurrencyConverter";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BankOfChinaHoje = () => {
  return (
    <Layout>
      <SEO path="/acoes/bank-of-china-hoje" />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Bank of China Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Bank of China (3988.HK) em tempo real</p>
        </div>

        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Gráfico 3988.HK</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <TradingViewWidget symbol="SSE:601988" height="400" />
              </div>
            </CardContent>
          </Card>
        </div>

        <CurrencyConverter type="currency" mainCurrency="CNY" />
      </div>
    </Layout>
  );
};

export default BankOfChinaHoje;