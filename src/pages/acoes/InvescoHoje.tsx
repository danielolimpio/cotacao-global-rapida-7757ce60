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
  Landmark,
  PiggyBank,
} from "lucide-react";

const InvescoHoje = () => {
  return (
    <Layout>
      <SEO path="/acoes/invesco-hoje" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Landmark className="w-4 h-4" />
            AÇÕES · INVESCO · Asset Management Global
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação da Invesco (IVZ) Hoje
            <span className="block text-primary mt-2">Preço da Ação em Tempo Real, QQQ e Fundos Invesco</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Confira a cotação da <strong>Invesco Ltd. (IVZ)</strong> em tempo real na NYSE, a gestora
            responsável pelo lendário ETF <strong>QQQ (Nasdaq-100)</strong>, com mais de US$ 1,8 trilhão
            em ativos sob gestão e presença em mais de 20 países.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>Invesco Ltd. (IVZ) — Gráfico em Tempo Real</span>
                </div>
                <Badge variant="secondary">NYSE · Asset Manager · Dividendos Trimestrais</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <TradingViewWidget symbol="NYSE:IVZ" height="384" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Building2, label: "Empresa", value: "Invesco Ltd." },
            { icon: Globe2, label: "Sede", value: "Atlanta · EUA" },
            { icon: PiggyBank, label: "AUM", value: "US$ 1,8 trilhão+" },
            { icon: DollarSign, label: "Ticker", value: "NYSE:IVZ" },
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
                Quanto vale a ação da Invesco (IVZ) hoje?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              A <strong className="text-foreground">Invesco Ltd. (NYSE: IVZ)</strong> é uma das maiores
              gestoras independentes do mundo, com sede em Atlanta e mais de US$ 1,8 trilhão em ativos
              sob gestão. É a criadora e responsável pelo ETF <strong>QQQ</strong>, um dos mais negociados
              do planeta, que replica o índice Nasdaq-100.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              A <strong>cotação da ação IVZ hoje</strong> reflete o resultado da gestora, o crescimento do
              AUM, o desempenho do mercado americano e a política de dividendos trimestrais. É uma ação
              considerada "proxy" do mercado como um todo, já que a receita da Invesco cresce quando as
              bolsas globais sobem.
            </p>

            <Card className="border-l-4 border-l-primary bg-primary/5 my-6">
              <CardContent className="p-5 flex gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  <strong>Destaque:</strong> a Invesco é a gestora do <strong>QQQ</strong>, terceiro ETF
                  mais negociado dos EUA, com mais de <strong>US$ 300 bilhões</strong> em patrimônio.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <PiggyBank className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Principais produtos da Invesco
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                { title: "QQQ · Nasdaq-100 ETF", desc: "O ETF de tecnologia mais famoso do mundo, expondo o investidor às 100 maiores empresas não-financeiras da Nasdaq." },
                { title: "QQQM · Nasdaq-100 (baixo custo)", desc: "Versão do QQQ com taxa reduzida (0,15%), pensada para investidores buy-and-hold de longo prazo." },
                { title: "SPHD · High Dividend", desc: "ETF de dividendos altos e baixa volatilidade, ideal para renda passiva em dólar." },
                { title: "SPLV · Low Volatility", desc: "Estratégia de menor volatilidade dentro do S&P 500, buscando proteção em mercados turbulentos." },
                { title: "RSP · S&P Equal Weight", desc: "Versão equal-weight do S&P 500, com menor concentração nas Big Techs." },
                { title: "Invesco Mutual Funds", desc: "Mais de 200 fundos ativos globais em ações, renda fixa e alternativos." },
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
                Vale a pena comprar ações da Invesco?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              O IVZ costuma ser visto como uma <strong>ação de valor no setor de asset management</strong>,
              negociando com múltiplos descontados em relação a BlackRock (BLK) e T. Rowe Price (TROW).
              Para investidores que acreditam na continuidade do bull market em ETFs, a Invesco é uma
              boa forma de ganhar exposição indireta ao crescimento da indústria.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl">Vantagens</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Gestora do lendário ETF QQQ",
                      "Dividendos trimestrais recorrentes",
                      "Exposição diversificada global",
                      "Valuation historicamente atrativo",
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
                <CardHeader>
                  <CardTitle className="text-xl">Pontos de atenção</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Receita sensível a quedas do mercado",
                      "Pressão de taxas com competidores (BlackRock, Vanguard)",
                      "Endividamento acima da média histórica",
                      "Concorrência acirrada em ETFs",
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
                  <strong>Importante:</strong> avalie sempre P/L, dividend yield, payout ratio e AUM
                  antes de investir em ações de asset managers como a Invesco.
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
                Como comprar ações da Invesco no Brasil
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Para <strong>investir em IVZ no Brasil</strong>, abra conta em uma corretora internacional
              como Avenue, Nomad, Inter Global, XP US, C6 Global ou Interactive Brokers. Envie dólares,
              compre as ações IVZ diretamente na NYSE e receba os dividendos trimestrais em dólar.
              Investidores também podem acessar a Invesco indiretamente comprando ETFs como QQQ, QQQM,
              SPHD e RSP.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Perguntas frequentes sobre a Invesco (IVZ)
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1">
                <AccordionTrigger className="text-left">Quanto está a cotação da Invesco hoje?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  A cotação da Invesco Ltd. (IVZ) atualizada em tempo real está no gráfico acima, com
                  dados da NYSE.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger className="text-left">A Invesco é dona do QQQ?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sim. O Invesco QQQ Trust é o ETF que replica o índice Nasdaq-100. É um dos três ETFs
                  mais negociados do mundo, com mais de US$ 300 bilhões em patrimônio.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger className="text-left">A Invesco paga dividendos?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sim. A IVZ distribui dividendos trimestrais em dólar. Historicamente, o dividend yield
                  fica entre 3% e 5% ao ano.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger className="text-left">Quanto rende investir na Invesco?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  O retorno depende do preço da ação e dos dividendos. É comum somar valorização de capital
                  no médio prazo com renda passiva trimestral.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5">
                <AccordionTrigger className="text-left">Qual a diferença entre Invesco e BlackRock?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Ambas são grandes gestoras globais. A BlackRock é maior (US$ 10 trilhões em AUM) e dona
                  do iShares. A Invesco é menor, mas tem produtos icônicos como o QQQ e valuation mais
                  descontado.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q6">
                <AccordionTrigger className="text-left">Como declarar Invesco no Imposto de Renda?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  As ações da IVZ vão em Bens e Direitos ao custo em reais. Dividendos entram no
                  carnê-leão. Ganho de capital acima de R$ 35 mil/mês é tributado em 15%.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q7">
                <AccordionTrigger className="text-left">Onde comprar ações da Invesco no Brasil?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Em corretoras com acesso à NYSE, como Avenue, Nomad, Inter Global, XP US, C6 Global
                  Invest e Interactive Brokers.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default InvescoHoje;
