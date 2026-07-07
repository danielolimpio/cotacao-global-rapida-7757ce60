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

const EaglePointHoje = () => {
  return (
    <Layout>
      <SEO path="/acoes/eagle-point-hoje" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Landmark className="w-4 h-4" />
            AÇÕES · EAGLE POINT · CLO Equity
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação da Eagle Point (ECC) Hoje
            <span className="block text-primary mt-2">Preço do ECC em Tempo Real e Dividendos Mensais</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe a cotação do <strong>Eagle Point Credit Company (ECC)</strong> em tempo real, um dos
            Closed-End Funds mais populares dos EUA especializado em <strong>CLO Equity</strong>, com
            distribuição mensal de dividendos em dólar e yield historicamente entre os mais altos da NYSE.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>Eagle Point Credit Company (ECC) — Tempo Real</span>
                </div>
                <Badge variant="secondary">NYSE · CLO Equity · Dividendos Mensais</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <TradingViewWidget symbol="NYSE:ECC" height="384" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Building2, label: "Empresa", value: "Eagle Point Credit" },
            { icon: Globe2, label: "Sede", value: "Greenwich · EUA" },
            { icon: PiggyBank, label: "Ativo", value: "CLO Equity" },
            { icon: DollarSign, label: "Ticker", value: "NYSE:ECC" },
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
                Quanto vale a ação da Eagle Point (ECC) hoje?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              A <strong className="text-foreground">Eagle Point Credit Company (ECC)</strong> é uma
              empresa de investimentos listada na NYSE especializada em <strong>CLO Equity</strong> —
              a tranche mais subordinada e de maior yield dos Collateralized Loan Obligations. É um dos
              CEFs favoritos de investidores que buscam <strong>renda passiva mensal em dólar</strong>
              com yields historicamente superiores a 15% ao ano.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              A cotação do ECC hoje reflete o preço de mercado das ações e é influenciada pela
              performance dos senior loans subjacentes, taxa SOFR, spread de crédito e distribuição de
              dividendos declarada pela gestora Eagle Point Credit Management.
            </p>

            <Card className="border-l-4 border-l-primary bg-primary/5 my-6">
              <CardContent className="p-5 flex gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  <strong>Destaque:</strong> o ECC paga <strong>dividendos mensais em dólar</strong> e
                  costuma anunciar distribuições especiais no fim do ano, sendo um dos maiores
                  distribution yields do universo de CEFs americanos.
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
                O que é CLO Equity e como o ECC gera renda
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              <strong>CLOs (Collateralized Loan Obligations)</strong> são estruturas que agregam centenas
              de senior secured loans de empresas americanas. O ECC investe na <strong>tranche equity</strong>,
              que fica no fundo da estrutura de capital e recebe o "resíduo" dos juros — em troca de mais
              risco, oferece o maior potencial de retorno.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                { title: "Portfólio diversificado", desc: "Cada CLO possui 150-300 empréstimos corporativos senior secured, reduzindo risco idiossincrático." },
                { title: "Cash flow mensal", desc: "Os CLOs recebem juros dos loans e repassam ao equity holder (ECC), que distribui aos acionistas." },
                { title: "Reinvestimento ativo", desc: "Durante o reinvestment period, os CLOs podem trocar loans, capturando spreads e oportunidades." },
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
                Vale a pena investir em ECC hoje?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              O ECC é indicado para investidores <strong>arrojados</strong> que buscam renda mensal alta
              em dólar e aceitam volatilidade. Não substitui bonds tradicionais nem é adequado como única
              posição de renda fixa, mas pode compor uma <strong>parcela de yield turbinado</strong> na
              carteira internacional.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl">Vantagens</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Yield mensal historicamente entre 15% e 20%",
                      "Dividendos mensais em dólar",
                      "Exposição a senior loans corporativos",
                      "Gestora especialista líder em CLO",
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
                      "Alta volatilidade em recessões",
                      "Uso de alavancagem",
                      "Return of Capital em algumas distribuições",
                      "Risco de default em ciclos de crédito",
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
                  <strong>Importante:</strong> parte da distribuição do ECC pode ser Return of Capital
                  (ROC). Sempre acompanhe os relatórios semestrais para entender a real geração de caixa
                  do fundo.
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
                Como comprar ações da Eagle Point (ECC) no Brasil
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Para <strong>investir em ECC pelo Brasil</strong>, abra conta em uma corretora internacional
              como Avenue, Nomad, Inter Global, XP US, C6 Global ou Interactive Brokers. Faça o câmbio,
              envie os dólares para a conta internacional e compre as ações ECC pelo home broker. Os
              dividendos mensais serão creditados automaticamente em USD.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Perguntas frequentes sobre a Eagle Point (ECC)
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1">
                <AccordionTrigger className="text-left">Quanto está a cotação do ECC hoje?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  A cotação atualizada do Eagle Point Credit Company (ECC) está no gráfico em tempo real
                  acima, com dados diretos da NYSE.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger className="text-left">Quanto o ECC paga de dividendos por mês?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  O ECC paga dividendos mensais em dólar. O valor é anunciado a cada trimestre pela gestora
                  e o distribution yield anualizado costuma ficar entre 15% e 20%, incluindo distribuições
                  especiais.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger className="text-left">O que é CLO Equity?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  É a tranche mais subordinada de um Collateralized Loan Obligation, que recebe o fluxo
                  residual dos juros pagos pelos empréstimos corporativos empacotados. Tem retorno
                  potencial alto e risco maior.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger className="text-left">ECC é seguro?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  O ECC é um investimento de risco elevado, com alavancagem e exposição a crédito
                  corporativo americano. É indicado apenas para investidores arrojados que buscam yield
                  alto em dólar, dentro de uma carteira diversificada.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5">
                <AccordionTrigger className="text-left">Qual a diferença entre ECC e OXLC?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Tanto ECC quanto OXLC (Oxford Lane Capital) investem em CLO Equity. O ECC costuma ser
                  visto como o "premium" do setor, com gestão mais transparente; o OXLC oferece yield ainda
                  maior porém com histórico mais volátil.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q6">
                <AccordionTrigger className="text-left">Como declarar ECC no Imposto de Renda?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  As ações vão em "Bens e Direitos" ao custo em reais. Dividendos entram no carnê-leão.
                  Ganho de capital acima de R$ 35 mil/mês é tributado em 15%.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q7">
                <AccordionTrigger className="text-left">Onde comprar ECC no Brasil?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Em corretoras internacionais como Avenue, Nomad, Inter Global, XP US, Passfolio, C6
                  Global Invest e Interactive Brokers.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default EaglePointHoje;
