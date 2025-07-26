import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BankOfChinaHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Bank of China Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação do Bank of China (3988.HK) em tempo real</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico 3988.HK</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="SSE:601988" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="3988.HK"
              price="3.85"
              change="+0.08"
              changePercent="+2.12"
              flag1="🏦"
            />
            <QuoteCard
              pair="Market Cap"
              price="1.15T HKD"
              change="+24B HKD"
              changePercent="+2.13"
              flag1="💼"
            />
            <QuoteCard
              pair="Volume"
              price="125M"
              change="+8M"
              changePercent="+6.84"
              flag1="📈"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Máxima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-success">HK$ 3.95</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mínima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-destructive">HK$ 3.77</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Volume</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary">125M</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default BankOfChinaHoje;