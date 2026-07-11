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
  Cpu,
  Factory,
} from "lucide-react";

const IntelHoje = () => {
  return (
    <Layout>
      <SEO path="/acoes/intel" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Cpu className="w-4 h-4" />
            AÇÕES · INTEL · NASDAQ: INTC
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação da Intel (INTC) Hoje
            <span className="block text-primary mt-2">Preço em Tempo Real, Foundry, Chips e BDR ITLC34</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe a <strong>cotação da Intel (NASDAQ: INTC)</strong> em tempo real, uma das maiores
            fabricantes de <strong>processadores x86</strong> do mundo, em plena reestruturação com a
            estratégia IDM 2.0 e Intel Foundry. Veja gráfico, dividendos e como investir.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>Intel Corporation (INTC) — Gráfico em Tempo Real</span>
                </div>
                <Badge variant="secondary">NASDAQ · Semicondutores · Turnaround</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <TradingViewWidget symbol="NASDAQ:INTC" height="384" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Building2, label: "Empresa", value: "Intel Corporation" },
            { icon: Globe2, label: "Sede", value: "Santa Clara · EUA" },
            { icon: Factory, label: "Setor", value: "Semicondutores · Foundry" },
            { icon: DollarSign, label: "Ticker", value: "NASDAQ:INTC · BDR ITLC34" },
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
                Quanto vale a ação da Intel (INTC) hoje?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              A <strong className="text-foreground">Intel Corporation</strong>, fundada em 1968, é uma
              lenda dos semicondutores e domina o padrão x86 há décadas em PCs e servidores. Nos últimos
              anos perdeu liderança tecnológica para TSMC e AMD, mas iniciou um agressivo <strong>plano de
              turnaround (IDM 2.0)</strong> com foco em fabricar chips para terceiros via Intel Foundry.
              A cotação da INTC hoje reflete essas expectativas de recuperação e ganhos com o CHIPS Act.
            </p>
            <Card className="border-l-4 border-l-primary bg-primary/5 my-6">
              <CardContent className="p-5 flex gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  <strong>Destaque:</strong> a Intel deve receber cerca de <strong>US$ 8,5 bilhões</strong>
                  do CHIPS Act americano para construir novas fábricas nos EUA, mudando o mapa geopolítico
                  dos chips.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Factory className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Principais negócios da Intel
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Client Computing (CCG)", desc: "Processadores Core para notebooks e desktops — maior receita histórica." },
                { title: "Data Center (DCAI)", desc: "Xeon e aceleradores para servidores, ainda líder em share mas pressionada por AMD." },
                { title: "Intel Foundry", desc: "Divisão de fabricação para terceiros com nós 18A/20A — nova aposta estratégica." },
                { title: "Networking & Edge", desc: "Soluções para 5G, edge computing e infraestrutura de rede." },
                { title: "Mobileye", desc: "Subsidiária listada (MBLY) líder em ADAS e direção autônoma." },
                { title: "Altera / FPGAs", desc: "Chips programáveis (spin-off em curso), fortes em telecom e defesa." },
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
                Vale a pena investir em Intel (INTC) em 2026?
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md">
                <CardHeader><CardTitle className="text-xl">Vantagens</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Preço historicamente descontado (P/L baixo)",
                      "Beneficiada por CHIPS Act e onshoring",
                      "Ativos de foundry raros no Ocidente",
                      "Marca forte em servidores e PCs",
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
                      "Perda de share para AMD e ARM",
                      "Fluxo de caixa livre negativo em ciclo de capex",
                      "Dividendo já foi cortado",
                      "Execução do plano IDM 2.0 é o principal risco",
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
                  <strong>Importante:</strong> a INTC é considerada uma <strong>tese de turnaround</strong>
                  — maior potencial de retorno, mas também maior risco de execução.
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
                Como comprar ações da Intel (INTC) no Brasil
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Você pode comprar INTC em corretoras internacionais (Avenue, Nomad, Inter Global, XP US, C6
              Global) ou em reais via BDR <strong>ITLC34</strong> na B3.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Perguntas frequentes sobre a Intel (INTC)
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1">
                <AccordionTrigger className="text-left">Quanto vale a ação da Intel hoje?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  A cotação em tempo real da INTC está no gráfico acima. Multiplique pelo dólar do dia para o valor
                  em reais.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger className="text-left">Intel ainda paga dividendos?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  O dividendo foi reduzido em 2023 para preservar caixa no ciclo de investimentos em foundry.
                  Continua distribuindo, mas em valor bem menor que historicamente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger className="text-left">O que é o BDR ITLC34?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  É o BDR da Intel na B3, negociado em reais, que replica a INTC da Nasdaq.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger className="text-left">Por que a ação da Intel caiu tanto?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Perda de liderança tecnológica para TSMC, avanço da AMD em servidores, corte de dividendo e
                  capex elevado para virar foundry pressionaram a ação nos últimos anos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5">
                <AccordionTrigger className="text-left">Intel é boa oportunidade em 2026?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Alguns investidores veem valor em preços deprimidos e potencial de turnaround, mas é preciso
                  paciência e tolerância a volatilidade.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q6">
                <AccordionTrigger className="text-left">O que é Intel Foundry?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  É a divisão que fabrica chips para outras empresas (como a TSMC faz), competindo por clientes
                  externos e usando dinheiro do CHIPS Act para expandir capacidade nos EUA.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q7">
                <AccordionTrigger className="text-left">Como declarar Intel no imposto de renda?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Ações INTC em Bens e Direitos no exterior ao custo em reais; dividendos no carnê-leão. BDR ITLC34
                  segue regras da B3.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default IntelHoje;
