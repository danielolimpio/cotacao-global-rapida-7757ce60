import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ChinaShenhuaEnergyHoje = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">China Shenhua Energy Hoje</h1>
          <p className="text-xl text-muted-foreground">Cotação da China Shenhua Energy (1088.HK) em tempo real</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico 1088.HK</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewWidget symbol="HKEX:1088" height="400" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <QuoteCard
              pair="1088.HK"
              price="18.45"
              change="+0.65"
              changePercent="+3.65"
              flag1="⚡"
            />
            <QuoteCard
              pair="Market Cap"
              price="365B HKD"
              change="+12.8B HKD"
              changePercent="+3.64"
              flag1="💼"
            />
            <QuoteCard
              pair="Volume"
              price="48M"
              change="+5.2M"
              changePercent="+12.15"
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
              <p className="text-2xl font-bold text-success">HK$ 18.85</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mínima do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-destructive">HK$ 17.80</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Volume</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary">48M</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default ChinaShenhuaEnergyHoje;