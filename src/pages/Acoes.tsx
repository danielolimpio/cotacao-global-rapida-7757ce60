import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import QuoteCard from "@/components/QuoteCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Acoes = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Ações</h1>
          <p className="text-xl text-muted-foreground">
            Acompanhe as cotações das principais ações brasileiras e americanas
          </p>
        </div>

        <Tabs defaultValue="us" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-8">
            <TabsTrigger value="us">Ações Americanas</TabsTrigger>
            <TabsTrigger value="br">Ações Brasileiras</TabsTrigger>
            <TabsTrigger value="indices">Índices</TabsTrigger>
          </TabsList>

          <TabsContent value="indices" className="space-y-8">
            {/* S&P 500 Chart */}
            <Card className="max-w-6xl mx-auto">
              <CardHeader>
                <CardTitle className="text-center">S&P 500 (SPX)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-96">
                  <TradingViewWidget symbol="SPX" height="384" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="us" className="space-y-8">
            {/* Featured SPY Chart */}
            <Card className="max-w-6xl mx-auto">
              <CardHeader>
                <CardTitle className="text-center">S&P 500 (SPY)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-96">
                  <TradingViewWidget symbol="SPY" height="384" />
                </div>
              </CardContent>
            </Card>

          </TabsContent>

          <TabsContent value="br" className="space-y-8">
            {/* Featured IBOV Chart */}
            <Card className="max-w-6xl mx-auto">
              <CardHeader>
                <CardTitle className="text-center">Ibovespa (IBOV)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-96">
                  <TradingViewWidget symbol="BMFBOVESPA:IBOV" height="384" />
                </div>
              </CardContent>
            </Card>

          </TabsContent>
        </Tabs>

      </div>
    </Layout>
  );
};

export default Acoes;