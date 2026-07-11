import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import TradingViewWidget from "@/components/TradingViewWidget";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle2,
  AlertTriangle,
  BarChart3,
  Sparkles,
  Building2,
  Globe2,
  Utensils,
  PiggyBank,
} from "lucide-react";

const KraftHeinzHoje = () => {
  return (
    <Layout>
      <SEO path="/acoes/kraft-heinz" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Utensils className="w-4 h-4" />
            AÇÕES · KRAFT HEINZ · NASDAQ: KHC
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação da Kraft Heinz (KHC) Hoje
            <span className="block text-primary mt-2">Preço em Tempo Real, Dividendos e Alimentos Globais</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe a <strong>cotação da Kraft Heinz (NASDAQ: KHC)</strong> em tempo real, uma das
            maiores empresas de <strong>alimentos e bebidas do mundo</strong>, controlada por Berkshire
            Hathaway e 3G Capital, com marcas como <strong>Heinz, Kraft, Philadelphia e Oscar Mayer</strong>.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>The Kraft Heinz Company (KHC) — Gráfico em Tempo Real</span>
                </div>
                <Badge variant="secondary">NASDAQ · Consumer Staples · High Yield</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <TradingViewWidget symbol="NASDAQ:KHC" height="384" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Building2, label: "Empresa", value: "The Kraft Heinz Co." },
            { icon: Globe2, label: "Sede", value: "Pittsburgh · Chicago · EUA" },
            { icon: Utensils, label: "Setor", value: "Consumer Staples · Alimentos" },
            { icon: PiggyBank, label: "Dividend Yield", value: "~4-5% em dólar" },
          ].map((item) => (
            <Card key={item.label} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">{item.label}</div>
                  <div className="font-semibold text-foreground">{item.value}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <article className="space-y-12 max-w-4xl mx-auto">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Quanto vale a ação da Kraft Heinz (KHC) hoje?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              A <strong className="text-foreground">Kraft Heinz</strong> foi formada em 2015 pela fusão da
              Kraft Foods com a H.J. Heinz, orquestrada por Warren Buffett (Berkshire) e 3G Capital. É dona
              de marcas globais como <strong>Heinz Ketchup, Philadelphia, Oscar Mayer, Kraft Mac & Cheese
              e Jell-O</strong>. A cotação da KHC hoje reflete preços de commodities agrícolas, volume de
              vendas e execução da estratégia de crescimento em mercados emergentes.
            </p>
            <Card className="border-l-4 border-l-primary bg-primary/5 my-6">
              <CardContent className="p-5 flex gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  <strong>Destaque:</strong> a Berkshire Hathaway ainda detém cerca de <strong>27% da KHC</strong>,
                  posição histórica de Warren Buffett no setor de consumo.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Utensils className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Principais marcas da Kraft Heinz
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Heinz", desc: "Ketchup líder mundial, molhos, sopas e alimentos infantis." },
                { title: "Kraft", desc: "Queijos, molhos e Mac & Cheese, ícones do consumo americano." },
                { title: "Philadelphia", desc: "Cream cheese líder global com forte reconhecimento de marca." },
                { title: "Oscar Mayer", desc: "Salsichas, bacon e frios processados nos EUA." },
                { title: "Jell-O", desc: "Gelatinas e sobremesas com presença centenária." },
                { title: "Emergentes", desc: "Expansão de Heinz e outras marcas em Brasil, México e Ásia." },
              ].map((item) => (
                <Card key={item.title} className="hover:shadow-lg transition-all hover:-translate-y-0.5">
                  <CardContent className="p-5">
                    <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Vale a pena investir em Kraft Heinz (KHC) em 2026?
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md">
                <CardHeader><CardTitle className="text-xl">Vantagens</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Dividend yield elevado (4-5% em dólar)",
                      "Marcas globais com precificação forte",
                      "Berkshire Hathaway é grande acionista",
                      "Baixa volatilidade vs. tech",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-primary/40 transition-colors">
                <CardHeader><CardTitle className="text-xl">Pontos de atenção</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Crescimento orgânico limitado",
                      "Pressão de private labels no varejo",
                      "Endividamento historicamente alto",
                      "Tendência de alimentos saudáveis",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            <Card className="border-l-4 border-l-yellow-500 bg-yellow-500/5">
              <CardContent className="p-5 flex gap-3">
                <AlertTriangle className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
                <p className="text-sm md:text-base">
                  <strong>Importante:</strong> KHC é ação de <strong>renda em dólar</strong>, não de alto
                  crescimento. Ideal para carteiras defensivas e diversificação em consumo básico.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Como comprar ações da Kraft Heinz (KHC) no Brasil
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Basta abrir conta em corretora internacional (Avenue, Nomad, Inter Global, XP US, C6 Global) e
              comprar KHC diretamente na Nasdaq. Dividendos são pagos trimestralmente em dólar.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Perguntas frequentes sobre a Kraft Heinz (KHC)
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1">
                <AccordionTrigger className="text-left">Quanto vale a ação da Kraft Heinz hoje?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  A cotação em tempo real da KHC está no gráfico acima. Multiplique pelo dólar do dia para o valor
                  em reais.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger className="text-left">Kraft Heinz paga bons dividendos?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sim. A KHC paga dividendos trimestrais em dólar, com dividend yield historicamente entre 4% e 5%,
                  atraente para renda em moeda forte.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger className="text-left">A Berkshire de Warren Buffett é dona da Kraft Heinz?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  A Berkshire Hathaway é a maior acionista, com cerca de 27% da KHC, junto com a 3G Capital.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger className="text-left">Quais marcas pertencem à Kraft Heinz?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Heinz, Kraft, Philadelphia, Oscar Mayer, Jell-O, Planters (vendida), Ore-Ida, Lunchables, entre
                  outras.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5">
                <AccordionTrigger className="text-left">Kraft Heinz é boa ação para longo prazo?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Para quem busca renda em dólar e exposição defensiva ao consumo global, sim. Não é uma ação de alto
                  crescimento.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q6">
                <AccordionTrigger className="text-left">Como comprar KHC com pouco dinheiro?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Em Avenue e Nomad, você compra frações de KHC a partir de US$ 1.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q7">
                <AccordionTrigger className="text-left">Como declarar Kraft Heinz no imposto de renda?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Ações KHC em Bens e Direitos no exterior ao custo em reais. Dividendos no carnê-leão mensal.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default KraftHeinzHoje;
