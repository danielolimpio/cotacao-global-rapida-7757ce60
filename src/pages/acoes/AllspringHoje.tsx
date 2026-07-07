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

const AllspringHoje = () => {
  return (
    <Layout>
      <SEO path="/acoes/allspring-hoje" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Landmark className="w-4 h-4" />
            AÇÕES · ALLSPRING · Global Asset Management
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação da Allspring Hoje
            <span className="block text-primary mt-2">Fundos, Closed-End Funds e Renda Passiva em Dólar</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe em tempo real a cotação dos fundos da <strong>Allspring Global Investments</strong>,
            gestora sucessora da Wells Fargo Asset Management, com mais de US$ 570 bilhões sob gestão e
            forte atuação em multi-asset, renda fixa e income funds.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>Allspring Utilities & High Income (ERH) — Tempo Real</span>
                </div>
                <Badge variant="secondary">NYSE · Closed-End Fund · Income</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <TradingViewWidget symbol="NYSE:ERH" height="384" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Building2, label: "Gestora", value: "Allspring Global" },
            { icon: Globe2, label: "Origem", value: "Wells Fargo AM" },
            { icon: PiggyBank, label: "AUM", value: "US$ 570 bilhões" },
            { icon: DollarSign, label: "Foco", value: "Multi-asset e Income" },
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
                Quanto valem os fundos da Allspring hoje?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              A <strong className="text-foreground">Allspring Global Investments</strong> nasceu em 2021
              da separação da divisão de asset management da Wells Fargo, hoje operando de forma
              independente sob controle de GTCR e Reverence Capital Partners. Possui mais de 20
              Closed-End Funds negociados na NYSE, com destaque para os income funds e utilities.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              A cotação em tempo real dos CEFs Allspring (como ERH, EAD e EOD) reflete o valor dos
              ativos em carteira, o desempenho do mercado americano e o <strong>desconto sobre o NAV</strong>.
              São procurados por investidores de renda em dólar de longo prazo.
            </p>

            <Card className="border-l-4 border-l-primary bg-primary/5 my-6">
              <CardContent className="p-5 flex gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  <strong>Destaque:</strong> os fundos Allspring costumam negociar com
                  <strong> desconto de 5% a 12% em relação ao NAV</strong>, criando margem de segurança
                  interessante para investidores de valor.
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
                Principais Closed-End Funds da Allspring
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                { title: "ERH · Utilities & High Income", desc: "Combina utilities americanas e bonds high yield. Distribuição mensal em dólar." },
                { title: "EAD · Income Opportunities", desc: "Foco em high yield e senior loans. Ideal para renda mensal em dólar." },
                { title: "EOD · Global Dividend", desc: "Ações de dividendos globais com estratégia de covered call." },
                { title: "EOI · Enhanced Equity Income", desc: "Renda variável americana com sobreposição de opções para gerar income." },
                { title: "ETW · Tax-Advantaged World Equity", desc: "Ações globais com eficiência tributária." },
                { title: "ETV · Tax-Advantaged Dividend", desc: "Ações de dividendos com foco em eficiência tributária americana." },
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
                Vale a pena investir na Allspring?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              Os fundos Allspring são recomendados para investidores que buscam <strong>renda passiva
              mensal em dólar</strong> em produtos de perfil mais tradicional, com carteira misturando
              income, utilities e ações globais. É uma escolha frequente para complementar posições em
              PIMCO, Nuveen e Cohen & Steers na carteira internacional.
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
                      "Descontos frequentes sobre o NAV",
                      "Gestão herdada da Wells Fargo",
                      "Diversidade de estratégias",
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
                      "Baixa liquidez em alguns CEFs",
                      "Alavancagem pode ampliar perdas",
                      "IR de 30% sobre dividendos nos EUA",
                      "Menor cobertura de análise vs BlackRock/PIMCO",
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
                  <strong>Importante:</strong> analise sempre a distribution rate, o discount to NAV e a
                  qualidade do portfólio antes de comprar cotas de CEFs da Allspring.
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
                Como investir em Allspring no Brasil
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Para <strong>comprar cotas de fundos Allspring pelo Brasil</strong>, abra conta em uma
              corretora com acesso à NYSE — como Avenue, Nomad, Inter Global, XP US, C6 Global ou
              Interactive Brokers. Faça o câmbio para dólar, envie o valor e negocie os tickers ERH, EAD,
              EOD, EOI, ETW ou ETV. Os dividendos mensais serão creditados em dólar.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Perguntas frequentes sobre a Allspring
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1">
                <AccordionTrigger className="text-left">Quanto está a cotação da Allspring hoje?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  A cotação atualizada dos CEFs Allspring (como ERH) está no gráfico em tempo real acima,
                  com dados diretos da NYSE.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger className="text-left">Allspring é a mesma coisa que Wells Fargo?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  A Allspring Global Investments é a sucessora da Wells Fargo Asset Management, que foi
                  vendida em 2021 para os fundos GTCR e Reverence Capital. Hoje opera de forma
                  independente, mas herdou os fundos e equipes da Wells Fargo AM.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger className="text-left">Fundos Allspring pagam dividendos mensais?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sim. A maioria dos Closed-End Funds da Allspring, como ERH, EAD e EOD, distribui
                  dividendos mensais em dólar, com yields entre 7% e 12% ao ano.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger className="text-left">Qual o melhor fundo Allspring para renda passiva?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Depende do perfil. ERH e EAD são os favoritos para renda em dólar; EOI e ETW oferecem
                  exposição a ações globais com renda mensal via covered calls.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5">
                <AccordionTrigger className="text-left">Allspring é confiável?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sim. A Allspring é uma das maiores gestoras independentes dos EUA, com equipe herdada
                  da Wells Fargo, forte governança e mais de US$ 570 bilhões sob gestão.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q6">
                <AccordionTrigger className="text-left">Como declarar fundos Allspring no IR?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Cotas em "Bens e Direitos" ao custo em reais. Dividendos entram no carnê-leão. Ganho
                  de capital acima de R$ 35 mil/mês é tributado em 15%.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q7">
                <AccordionTrigger className="text-left">Onde comprar Allspring no Brasil?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Em corretoras internacionais como Avenue, Nomad, Inter Global, XP US, C6 Global e
                  Interactive Brokers.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default AllspringHoje;
