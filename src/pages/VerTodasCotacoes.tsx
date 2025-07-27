import Layout from "@/components/Layout";
import QuoteCard from "@/components/QuoteCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const VerTodasCotacoes = () => {
  const acoesData = [
    { pair: "PETR4", price: "R$ 38.45", change: "+1.25", changePercent: "+3.36", flag1: "🛢️", isPositive: true },
    { pair: "VALE3", price: "R$ 65.89", change: "-0.78", changePercent: "-1.17", flag1: "⛏️", isPositive: false },
    { pair: "ITUB4", price: "R$ 28.90", change: "+0.45", changePercent: "+1.58", flag1: "🏦", isPositive: true },
    { pair: "BBDC4", price: "R$ 23.76", change: "+0.12", changePercent: "+0.51", flag1: "🏛️", isPositive: true },
    { pair: "ABEV3", price: "R$ 11.85", change: "-0.15", changePercent: "-1.25", flag1: "🍺", isPositive: false },
    { pair: "MGLU3", price: "R$ 8.45", change: "+0.25", changePercent: "+3.05", flag1: "🛒", isPositive: true },
    { pair: "CRFB3", price: "R$ 15.85", change: "+0.35", changePercent: "+2.26", flag1: "🛒", isPositive: true },
    { pair: "HAPV3", price: "R$ 2.87", change: "-0.08", changePercent: "-2.71", flag1: "🏥", isPositive: false },
  ];

  const cryptoData = [
    { pair: "BTC/USD", price: "$43,250", change: "+1,125", changePercent: "+2.67", flag1: "₿", isPositive: true },
    { pair: "ETH/USD", price: "$2,580", change: "+85", changePercent: "+3.41", flag1: "Ξ", isPositive: true },
    { pair: "BNB/USD", price: "$315", change: "-8", changePercent: "-2.48", flag1: "🔶", isPositive: false },
    { pair: "ADA/USD", price: "$0.48", change: "+0.02", changePercent: "+4.35", flag1: "🔷", isPositive: true },
    { pair: "SOL/USD", price: "$98", change: "+3.5", changePercent: "+3.70", flag1: "☀️", isPositive: true },
    { pair: "XRP/USD", price: "$0.62", change: "-0.01", changePercent: "-1.59", flag1: "💧", isPositive: false },
  ];

  const forexData = [
    { pair: "USD/BRL", price: "R$ 4.98", change: "+0.05", changePercent: "+1.02", flag1: "🇺🇸", flag2: "🇧🇷", isPositive: true },
    { pair: "EUR/BRL", price: "R$ 5.42", change: "-0.02", changePercent: "-0.37", flag1: "🇪🇺", flag2: "🇧🇷", isPositive: false },
    { pair: "GBP/BRL", price: "R$ 6.25", change: "+0.08", changePercent: "+1.30", flag1: "🇬🇧", flag2: "🇧🇷", isPositive: true },
    { pair: "JPY/BRL", price: "R$ 0.0335", change: "+0.0005", changePercent: "+1.52", flag1: "🇯🇵", flag2: "🇧🇷", isPositive: true },
    { pair: "CHF/BRL", price: "R$ 5.58", change: "-0.03", changePercent: "-0.53", flag1: "🇨🇭", flag2: "🇧🇷", isPositive: false },
  ];

  const commoditiesData = [
    { pair: "Petróleo WTI", price: "$75.85", change: "+1.25", changePercent: "+1.67", flag1: "🛢️", isPositive: true },
    { pair: "Ouro", price: "$2,048", change: "-8.50", changePercent: "-0.41", flag1: "🥇", isPositive: false },
    { pair: "Prata", price: "$24.15", change: "+0.35", changePercent: "+1.47", flag1: "🥈", isPositive: true },
    { pair: "Cobre", price: "$8,450", change: "+125", changePercent: "+1.50", flag1: "🔶", isPositive: true },
  ];

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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {acoesData.map((quote, index) => (
                    <QuoteCard
                      key={index}
                      pair={quote.pair}
                      price={quote.price}
                      change={quote.change}
                      changePercent={quote.changePercent}
                      flag1={quote.flag1}
                      isPositive={quote.isPositive}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="crypto" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Criptomoedas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {cryptoData.map((quote, index) => (
                    <QuoteCard
                      key={index}
                      pair={quote.pair}
                      price={quote.price}
                      change={quote.change}
                      changePercent={quote.changePercent}
                      flag1={quote.flag1}
                      isPositive={quote.isPositive}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="forex" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Moedas vs Real Brasileiro</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {forexData.map((quote, index) => (
                    <QuoteCard
                      key={index}
                      pair={quote.pair}
                      price={quote.price}
                      change={quote.change}
                      changePercent={quote.changePercent}
                      flag1={quote.flag1}
                      flag2={quote.flag2}
                      isPositive={quote.isPositive}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="commodities" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Commodities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {commoditiesData.map((quote, index) => (
                    <QuoteCard
                      key={index}
                      pair={quote.pair}
                      price={quote.price}
                      change={quote.change}
                      changePercent={quote.changePercent}
                      flag1={quote.flag1}
                      isPositive={quote.isPositive}
                    />
                  ))}
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