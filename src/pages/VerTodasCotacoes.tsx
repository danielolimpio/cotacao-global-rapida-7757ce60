import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import CurrencyConverter from "@/components/CurrencyConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const VerTodasCotacoes = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Todas as Cotações</h1>
          <p className="text-xl text-muted-foreground">Acompanhe todas as cotações em tempo real</p>
        </div>

        <Tabs defaultValue="acoes" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="acoes">Ações</TabsTrigger>
            <TabsTrigger value="crypto">Criptomoedas</TabsTrigger>
            <TabsTrigger value="forex">Câmbio</TabsTrigger>
            <TabsTrigger value="commodities">Commodities</TabsTrigger>
          </TabsList>

          <TabsContent value="acoes" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Ações Brasileiras - Ibovespa</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-96">
                  <TradingViewWidget symbol="IBOV" height="384" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="crypto" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Bitcoin - Principal Criptomoeda</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-96">
                  <TradingViewWidget symbol="BTCUSD" height="384" />
                </div>
              </CardContent>
            </Card>
            <CurrencyConverter type="crypto" cryptoSymbol="BTC" />
          </TabsContent>

          <TabsContent value="forex" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>USD/BRL - Dólar vs Real</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-96">
                  <TradingViewWidget symbol="USDBRL" height="384" />
                </div>
              </CardContent>
            </Card>
            <CurrencyConverter type="dollar" />
          </TabsContent>

          <TabsContent value="commodities" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Petróleo WTI</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-96">
                  <TradingViewWidget symbol="USOIL" height="384" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default VerTodasCotacoes;