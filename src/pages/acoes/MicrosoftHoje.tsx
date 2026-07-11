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
  Cloud,
  Bot,
} from "lucide-react";

const MicrosoftHoje = () => {
  return (
    <Layout>
      <SEO path="/acoes/microsoft" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Cloud className="w-4 h-4" />
            AÇÕES · MICROSOFT · NASDAQ: MSFT
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação da Microsoft (MSFT) Hoje
            <span className="block text-primary mt-2">Preço em Tempo Real, Azure, OpenAI e BDR MSFT34</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe a <strong>cotação da Microsoft (NASDAQ: MSFT)</strong> em tempo real, uma das
            maiores empresas do mundo, líder em <strong>cloud (Azure)</strong>, produtividade (Office
            365) e parceira estratégica da <strong>OpenAI (ChatGPT)</strong>.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>Microsoft Corp. (MSFT) — Gráfico em Tempo Real</span>
                </div>
                <Badge variant="secondary">NASDAQ · Big Tech · Cloud & AI</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <TradingViewWidget symbol="NASDAQ:MSFT" height="384" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Building2, label: "Empresa", value: "Microsoft Corporation" },
            { icon: Globe2, label: "Sede", value: "Redmond · EUA" },
            { icon: Bot, label: "Setor", value: "Software · Cloud · IA" },
            { icon: DollarSign, label: "Ticker", value: "NASDAQ:MSFT · BDR MSFT34" },
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
                Quanto vale a ação da Microsoft (MSFT) hoje?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              A <strong className="text-foreground">Microsoft</strong>, fundada em 1975 por Bill Gates e
              Paul Allen, é uma das empresas mais valiosas do planeta. A cotação da MSFT hoje é impulsionada
              principalmente pelo crescimento do <strong>Azure</strong>, pela integração de IA generativa
              via <strong>Copilot</strong> e pela consolidação de Microsoft 365, GitHub, LinkedIn e Xbox.
            </p>
            <Card className="border-l-4 border-l-primary bg-primary/5 my-6">
              <CardContent className="p-5 flex gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  <strong>Destaque:</strong> a Microsoft investiu mais de <strong>US$ 13 bilhões</strong>
                  na OpenAI, integrando o GPT-4 ao Bing, Windows e Office (Copilot), tornando-se referência
                  global em IA para empresas.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Cloud className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Principais divisões da Microsoft
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Azure", desc: "2ª maior nuvem do mundo, crescimento acelerado por IA e workloads corporativos." },
                { title: "Microsoft 365", desc: "Office, Teams, Outlook e OneDrive em modelo SaaS recorrente global." },
                { title: "Copilot / IA", desc: "IA generativa integrada a Windows, Office, GitHub e Dynamics 365." },
                { title: "LinkedIn", desc: "Maior rede social profissional do mundo, com receita de ads e Premium." },
                { title: "Gaming / Xbox", desc: "Xbox, Game Pass e a aquisição da Activision Blizzard (Call of Duty)." },
                { title: "Windows & Devices", desc: "Windows 11, Surface, Xbox e servidores próprios ao redor do mundo." },
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
                Vale a pena investir em Microsoft (MSFT) em 2026?
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md">
                <CardHeader><CardTitle className="text-xl">Vantagens</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Liderança em cloud e IA corporativa",
                      "Receita recorrente forte em SaaS",
                      "Dividendo crescente há mais de 20 anos",
                      "Balanço com muito caixa e pouco endividamento",
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
                      "Múltiplos elevados após rally de IA",
                      "Alto capex em data centers pressiona fluxo de caixa",
                      "Escrutínio antitruste global",
                      "Concorrência com AWS e Google Cloud",
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
                  <strong>Importante:</strong> boa parte da tese de IA já está precificada — resultados
                  precisam confirmar o crescimento do Azure para sustentar múltiplos elevados.
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
                Como comprar ações da Microsoft (MSFT) no Brasil
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Compre MSFT em corretoras internacionais (Avenue, Nomad, Inter Global, XP US, C6 Global) ou
              em reais pelo <strong>BDR MSFT34</strong> na B3, que replica a ação da Nasdaq e paga dividendos
              convertidos em real.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Perguntas frequentes sobre a Microsoft (MSFT)
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1">
                <AccordionTrigger className="text-left">Quanto vale a ação da Microsoft hoje?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  A cotação em tempo real da MSFT está no gráfico acima. Basta multiplicar o preço em dólar pelo
                  câmbio do dia para saber o valor em reais.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger className="text-left">Microsoft paga dividendos?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sim. A MSFT paga dividendos trimestrais em dólar e aumenta o valor há mais de 20 anos consecutivos,
                  sendo uma referência de dividend growth global.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger className="text-left">O que é o BDR MSFT34?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  É o BDR da Microsoft na B3, negociado em reais, que replica a MSFT da Nasdaq. Ideal para quem quer
                  investir sem abrir conta internacional.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger className="text-left">Microsoft é uma boa ação para longo prazo?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sim. É uma das ações mais estáveis e valorizadas nas últimas décadas, com exposição a cloud, IA,
                  produtividade e games. Considerada "core holding" de carteiras globais.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5">
                <AccordionTrigger className="text-left">Microsoft é dona do ChatGPT?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Não é dona, mas é a maior investidora da OpenAI (criadora do ChatGPT) e tem exclusividade de
                  distribuição dos modelos GPT no Azure e nos produtos Microsoft (Copilot).
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q6">
                <AccordionTrigger className="text-left">Como declarar Microsoft no imposto de renda?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Ações MSFT vão em Bens e Direitos no exterior, ao custo em reais. Dividendos entram no carnê-leão.
                  BDRs MSFT34 seguem regras da B3, tributados como rendimentos comuns.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q7">
                <AccordionTrigger className="text-left">Como comprar MSFT com pouco dinheiro?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Corretoras internacionais permitem frações de MSFT a partir de US$ 1. Na B3, o BDR MSFT34 é
                  acessível com poucas dezenas de reais.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default MicrosoftHoje;
