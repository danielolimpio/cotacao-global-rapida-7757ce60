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

const PimcoHoje = () => {
  return (
    <Layout>
      <SEO path="/acoes/pimco-hoje" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Landmark className="w-4 h-4" />
            AÇÕES · PIMCO · Renda Fixa Global
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação da PIMCO Hoje
            <span className="block text-primary mt-2">Preço dos Fundos PDI, PTY e PCN em Tempo Real</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe a cotação dos principais Closed-End Funds (CEFs) da PIMCO, uma das maiores
            gestoras de renda fixa do mundo, com mais de US$ 2 trilhões sob gestão. Veja o preço
            do PDI hoje, o histórico, os dividendos mensais e como investir na PIMCO a partir do Brasil.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>PIMCO Dynamic Income Fund (PDI) — Gráfico em Tempo Real</span>
                </div>
                <Badge variant="secondary">NYSE · Closed-End Fund · Dividendos Mensais</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <TradingViewWidget symbol="NYSE:PDI" height="384" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Building2, label: "Gestora", value: "PIMCO" },
            { icon: Globe2, label: "Fundada em", value: "1971 · Newport Beach" },
            { icon: PiggyBank, label: "AUM", value: "US$ 2 trilhões+" },
            { icon: DollarSign, label: "Foco", value: "Renda Fixa Global" },
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
                Quanto vale um fundo da PIMCO hoje?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              A <strong className="text-foreground">PIMCO (Pacific Investment Management Company)</strong> é
              uma das maiores gestoras de renda fixa do planeta, fundada em 1971 e sediada em Newport Beach,
              Califórnia. Seus <strong>Closed-End Funds (CEFs)</strong> mais conhecidos — como PDI, PTY,
              PCN, PDO e PAXS — são negociados diretamente na NYSE e distribuem dividendos mensais em dólar.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              A <strong>cotação da PIMCO PDI hoje</strong> reflete o valor de mercado das cotas do fundo,
              que investem em títulos de dívida corporativa, MBS, dívida de mercados emergentes e ativos de
              alta renda. O preço pode negociar com <strong>ágio ou desconto</strong> em relação ao NAV
              (Net Asset Value) do fundo, criando oportunidades para investidores atentos.
            </p>

            <Card className="border-l-4 border-l-primary bg-primary/5 my-6">
              <CardContent className="p-5 flex gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  <strong>Destaque:</strong> o PDI é um dos CEFs mais populares do mundo por pagar
                  <strong> dividendos mensais consistentes</strong>, com yield historicamente entre 10% e
                  14% ao ano em dólar.
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
                Principais fundos da PIMCO negociados na NYSE
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                { title: "PDI · Dynamic Income", desc: "Fundo multiestratégia de renda fixa global, foco em MBS, high yield e emergentes. Dividendo mensal." },
                { title: "PTY · Corporate & Income", desc: "Investe em bonds corporativos investment grade e high yield, com uso de alavancagem moderada." },
                { title: "PCN · Corporate & Income Strategy", desc: "Estratégia flexível de crédito global, foco em geração de renda mensal para investidor conservador em dólar." },
                { title: "PDO · Dynamic Income Opportunities", desc: "Fundo mais novo, com mandato amplo em crédito privado, mortgage e dívida emergente." },
                { title: "PAXS · Access Income", desc: "Combina crédito público e privado com discount frequente em relação ao NAV." },
                { title: "PCM · Capital Fund", desc: "Foco em mortgage-backed securities e dívida securitizada. Um dos CEFs mais antigos da casa." },
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
                Vale a pena investir em fundos PIMCO no Brasil?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              Investir em PIMCO PDI e outros CEFs é uma forma de diversificar internacionalmente, ter
              <strong> renda em dólar</strong> e reduzir a exposição concentrada em renda variável.
              É ideal para o investidor que busca <strong>proventos mensais</strong> e proteção cambial
              de longo prazo.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl">Vantagens</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Dividendos mensais em dólar",
                      "Gestão profissional líder mundial em renda fixa",
                      "Diversificação global e proteção cambial",
                      "Liquidez diária na NYSE",
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
                      "Sensibilidade a alta de juros nos EUA",
                      "Alavancagem pode ampliar perdas",
                      "IR sobre dividendos (30% retido nos EUA)",
                      "Prêmio/desconto pode variar bastante",
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
                  <strong>Importante:</strong> CEFs alavancados como o PDI podem sofrer quedas expressivas
                  em ciclos de aperto monetário. Avalie o prêmio/desconto sobre o NAV antes de comprar.
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
                Como comprar ações da PIMCO PDI no Brasil
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Para <strong>investir em PDI, PTY ou PCN</strong> a partir do Brasil, abra conta em uma
              corretora com acesso ao mercado americano — como Avenue, Nomad, Inter Global, XP US, Passfolio
              ou Interactive Brokers. Faça o câmbio para dólar, envie o dinheiro para a conta internacional
              e compre as cotas dos fundos PIMCO na NYSE como se fossem uma ação comum. Os dividendos
              caem mensalmente em dólar direto na conta.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Perguntas frequentes sobre a PIMCO
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1">
                <AccordionTrigger className="text-left">Quanto está a cotação da PIMCO PDI hoje?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  A cotação do PIMCO Dynamic Income Fund (PDI) hoje pode ser acompanhada em tempo real no
                  gráfico acima, atualizada com os dados da NYSE. O preço varia conforme oferta e demanda,
                  taxa de juros dos EUA e desempenho dos ativos de renda fixa em carteira.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger className="text-left">O que é um Closed-End Fund da PIMCO?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Closed-End Fund (CEF) é um fundo fechado com número fixo de cotas negociadas em bolsa.
                  Diferente de ETFs, o preço pode divergir do NAV, negociando com ágio ou desconto. A PIMCO
                  é uma das maiores emissoras de CEFs de renda fixa do mundo.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger className="text-left">A PIMCO paga dividendos mensais?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sim. Os CEFs da PIMCO como PDI, PTY, PCN, PDO e PAXS pagam dividendos mensais em dólar,
                  com yields historicamente entre 8% e 14% ao ano, dependendo do fundo e do momento de mercado.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger className="text-left">Como brasileiro paga imposto sobre dividendos PIMCO?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Os EUA retêm 30% de imposto na fonte sobre dividendos pagos a residentes brasileiros. No
                  Brasil, os dividendos entram no carnê-leão. Ganhos de capital acima de R$ 35 mil no mês
                  são tributados em 15%. Consulte seu contador para planejamento tributário.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5">
                <AccordionTrigger className="text-left">PDI é melhor que PTY ou PCN?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Não existe "melhor": cada CEF tem mandato, alavancagem e nível de risco diferente. O PDI
                  tem foco multiestratégia mais amplo, o PTY concentra em bonds corporativos e o PCN é mais
                  conservador. Muitos investidores combinam vários para diversificar.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q6">
                <AccordionTrigger className="text-left">Vale a pena investir em PIMCO em 2026?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Para quem busca renda passiva em dólar e diversificação de renda fixa global, os fundos
                  PIMCO seguem sendo uma opção sólida. É importante avaliar o ciclo de juros americano,
                  o desconto sobre o NAV e o custo da alavancagem antes de investir.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q7">
                <AccordionTrigger className="text-left">Onde comprar cotas da PIMCO no Brasil?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Em qualquer corretora com acesso à NYSE: Avenue, Nomad, Inter Global, XP US, Passfolio,
                  Interactive Brokers, C6 Global Invest, entre outras. Basta procurar pelos tickers PDI,
                  PTY, PCN, PDO ou PAXS.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default PimcoHoje;
