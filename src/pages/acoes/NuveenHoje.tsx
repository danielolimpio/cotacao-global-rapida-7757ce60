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

const NuveenHoje = () => {
  return (
    <Layout>
      <SEO path="/acoes/nuveen-hoje" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Landmark className="w-4 h-4" />
            AÇÕES · NUVEEN · Renda com Municipal Bonds
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação da Nuveen Hoje
            <span className="block text-primary mt-2">Preço do JQC, JPC e Fundos Municipais em Tempo Real</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Confira a cotação em tempo real dos principais Closed-End Funds da Nuveen, gestora de
            investimentos americana com mais de US$ 1,3 trilhão sob gestão, especialista em municipal
            bonds e renda mensal em dólar.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>Nuveen Credit Strategies Income Fund (JQC) — Tempo Real</span>
                </div>
                <Badge variant="secondary">NYSE · CEF · Renda Mensal</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <TradingViewWidget symbol="NYSE:JQC" height="384" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Building2, label: "Gestora", value: "Nuveen (TIAA)" },
            { icon: Globe2, label: "Fundada em", value: "1898 · Chicago" },
            { icon: PiggyBank, label: "AUM", value: "US$ 1,3 trilhão" },
            { icon: DollarSign, label: "Foco", value: "Municipal Bonds e Crédito" },
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
                Quanto vale a cota da Nuveen JQC hoje?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              A <strong className="text-foreground">Nuveen</strong> é uma das gestoras mais tradicionais dos
              Estados Unidos, fundada em 1898 e hoje subsidiária da TIAA. É referência mundial em
              <strong> municipal bonds tax-free</strong> e em Closed-End Funds de renda fixa e crédito.
              Para saber <strong>quanto vale o JQC hoje</strong>, consulte o gráfico ao vivo acima.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              O preço das cotas do JQC, JPC, JRO e demais fundos Nuveen negociados na NYSE reflete o valor
              dos bonds em carteira, o nível de alavancagem, a taxa de juros americana e o
              <strong> prêmio ou desconto sobre o NAV</strong>.
            </p>

            <Card className="border-l-4 border-l-primary bg-primary/5 my-6">
              <CardContent className="p-5 flex gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  <strong>Destaque:</strong> a Nuveen é a <strong>maior gestora de municipal bonds do
                  mundo</strong>, com dezenas de CEFs pagando dividendos mensais em dólar.
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
                Principais Closed-End Funds da Nuveen
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                { title: "JQC · Credit Strategies", desc: "Foco em senior loans e high yield corporativo. Dividendos mensais e liquidez diária na NYSE." },
                { title: "JPC · Preferred & Income", desc: "Investe em ações preferenciais bancárias e híbridos. Yield historicamente elevado." },
                { title: "JRO · Floating Rate Income", desc: "Bonds de taxa flutuante, protegendo contra alta de juros nos EUA." },
                { title: "NAD · Quality Municipal", desc: "Municipal bonds nacionais isentos de imposto federal americano." },
                { title: "JQC vs JHY", desc: "Comparação clássica de high yield vs senior loans para investidores de renda." },
                { title: "JEQ · Emerging Markets", desc: "Renda variável de mercados emergentes com viés de valor." },
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
                Vale a pena investir em fundos da Nuveen?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              Os CEFs da Nuveen são procurados por quem quer <strong>renda mensal em dólar</strong> com
              exposição a crédito e bonds americanos. São ideais para investidores que já têm renda
              variável na carteira e buscam <strong>diversificação e proteção cambial</strong> de longo
              prazo.
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
                      "Gestora com mais de 125 anos de história",
                      "Portfólio diversificado em crédito e bonds",
                      "Ampla variedade de estratégias",
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
                      "Sensibilidade a juros americanos",
                      "Uso de alavancagem",
                      "Retenção de 30% de IR sobre dividendos",
                      "Desconto sobre o NAV pode oscilar",
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
                  <strong>Importante:</strong> avalie o discount to NAV, a distribution rate e a
                  qualidade do crédito antes de comprar cotas de fundos alavancados da Nuveen.
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
                Como investir em fundos Nuveen a partir do Brasil
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Para <strong>comprar JQC, JPC ou JRO no Brasil</strong>, abra conta em uma corretora com
              acesso à NYSE — como Avenue, Nomad, Inter Global, XP US ou Interactive Brokers. Faça o
              câmbio para dólar, envie o valor para a conta internacional e compre as cotas do CEF Nuveen
              desejado. Os dividendos mensais em dólar caem automaticamente na sua conta de custódia.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Perguntas frequentes sobre a Nuveen
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1">
                <AccordionTrigger className="text-left">Quanto está a cotação do Nuveen JQC hoje?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  O preço das cotas do Nuveen Credit Strategies Income Fund (JQC) é atualizado em tempo real
                  no gráfico acima, com dados da NYSE. A cotação oscila conforme desempenho do portfólio,
                  taxa de juros americana e prêmio/desconto sobre o NAV.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger className="text-left">O que é a Nuveen e quem é o dono?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  A Nuveen é uma gestora americana fundada em 1898, hoje subsidiária integral da TIAA
                  (Teachers Insurance and Annuity Association). É a maior gestora de municipal bonds do
                  mundo, com mais de US$ 1,3 trilhão sob gestão.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger className="text-left">Os fundos Nuveen pagam dividendos mensais?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sim. A grande maioria dos Closed-End Funds da Nuveen paga dividendos mensais em dólar,
                  com distribution rates que costumam ficar entre 7% e 12% ao ano.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger className="text-left">Qual o melhor fundo da Nuveen para renda passiva?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Depende do perfil: JQC e JPC são muito procurados por renda; JRO oferece proteção contra
                  juros altos; e os fundos NAD e NEA são preferidos por investidores focados em municipal
                  bonds. Sempre analise NAV, alavancagem e histórico de distribuição.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5">
                <AccordionTrigger className="text-left">Como declarar Nuveen no Imposto de Renda?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  As cotas devem constar na ficha "Bens e Direitos" pelo custo de aquisição em reais.
                  Dividendos vão no carnê-leão. Ganhos de capital acima de R$ 35 mil/mês são tributados
                  em 15% no ganho de capital exterior.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q6">
                <AccordionTrigger className="text-left">CEF da Nuveen é mais seguro que ETF?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Não. CEFs geralmente têm alavancagem e podem negociar com prêmio ou desconto, o que
                  aumenta a volatilidade. ETFs de bonds tendem a ser mais estáveis. Por outro lado, os CEFs
                  oferecem yields superiores.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q7">
                <AccordionTrigger className="text-left">Como acompanhar o preço da Nuveen em tempo real?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Direto pelo gráfico TradingView desta página, ou pelos tickers JQC, JPC, JRO, NAD e NEA
                  no home broker da sua corretora internacional.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default NuveenHoje;
