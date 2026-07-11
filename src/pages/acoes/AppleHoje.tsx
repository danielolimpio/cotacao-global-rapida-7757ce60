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
  Smartphone,
} from "lucide-react";

const AppleHoje = () => {
  return (
    <Layout>
      <SEO path="/acoes/apple" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Smartphone className="w-4 h-4" />
            AÇÕES · APPLE · NASDAQ: AAPL
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação da Apple (AAPL) Hoje
            <span className="block text-primary mt-2">Preço da Ação em Tempo Real, Dividendos e BDR AAPL34</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe a <strong>cotação da Apple Inc. (NASDAQ: AAPL)</strong> em tempo real, a empresa
            mais valiosa do mundo, com <strong>market cap acima de US$ 3 trilhões</strong>. Veja preço,
            histórico, dividendos, BDR AAPL34 na B3 e como investir na dona do iPhone.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>Apple Inc. (AAPL) — Gráfico em Tempo Real</span>
                </div>
                <Badge variant="secondary">NASDAQ · Big Tech · Dividend Growth</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <TradingViewWidget symbol="NASDAQ:AAPL" height="384" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Building2, label: "Empresa", value: "Apple Inc." },
            { icon: Globe2, label: "Sede", value: "Cupertino · EUA" },
            { icon: Cpu, label: "Setor", value: "Tecnologia · Hardware" },
            { icon: DollarSign, label: "Ticker", value: "NASDAQ:AAPL · BDR AAPL34" },
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
                Quanto vale a ação da Apple (AAPL) hoje?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              A <strong className="text-foreground">Apple Inc.</strong>, fundada em 1976 por Steve Jobs,
              Steve Wozniak e Ronald Wayne, é hoje a maior empresa listada em bolsa do mundo. A
              <strong> cotação da AAPL hoje</strong> reflete vendas do iPhone (que ainda respondem por
              cerca de 50% da receita), crescimento acelerado da divisão de Serviços (App Store,
              iCloud, Apple Music, Apple TV+, Apple Pay), recompras massivas de ações e a expectativa
              em torno da Apple Intelligence e do Vision Pro.
            </p>

            <Card className="border-l-4 border-l-primary bg-primary/5 my-6">
              <CardContent className="p-5 flex gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  <strong>Destaque:</strong> a Apple já recomprou mais de <strong>US$ 700 bilhões</strong>
                  em ações próprias na última década, sendo o maior programa de buyback da história do
                  mercado americano.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Cpu className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Principais produtos e receitas da Apple
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "iPhone", desc: "Cerca de 50% da receita. Segmento premium com margens líderes globais em smartphones." },
                { title: "Serviços", desc: "App Store, iCloud, Apple Music, TV+, Pay e AppleCare — margens acima de 70%." },
                { title: "Mac & iPad", desc: "Linha renovada com chips Apple Silicon (M1/M2/M3/M4), ganhando share em PCs." },
                { title: "Wearables", desc: "Apple Watch, AirPods e Vision Pro consolidam o ecossistema premium." },
                { title: "Apple Intelligence", desc: "IA generativa integrada ao iOS, macOS e iPadOS — novo motor de upgrade." },
                { title: "Apple Silicon", desc: "Chips próprios (M-series) reduzem custos e aumentam eficiência energética." },
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
                Vale a pena investir em Apple (AAPL) em 2026?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              A AAPL é referência global em <strong>qualidade, moat de ecossistema e geração de caixa</strong>.
              A base instalada de mais de 2,2 bilhões de dispositivos ativos alimenta a receita recorrente de
              Serviços, mantendo margens elevadas mesmo em ciclos fracos de hardware.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md">
                <CardHeader><CardTitle className="text-xl">Vantagens</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Maior empresa do mundo em valor de mercado",
                      "Receita recorrente forte em Serviços",
                      "Recompras bilionárias e dividendo crescente",
                      "Ecossistema iOS/macOS extremamente fiel",
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
                      "Dependência do iPhone e do mercado chinês",
                      "Regulação de App Store (Europa e EUA)",
                      "P/L acima da média histórica",
                      "Ciclo de inovação em IA ainda em prova",
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
                  <strong>Importante:</strong> a AAPL tem beta próximo de 1,2 — em correções fortes do
                  Nasdaq, tende a cair na média do índice, apesar da robustez financeira.
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
                Como comprar ações da Apple (AAPL) no Brasil
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Para <strong>investir na Apple no Brasil</strong>, abra conta em uma corretora internacional
              (Avenue, Nomad, Inter Global, XP US, C6 Global, Interactive Brokers), remeta dólares e
              compre AAPL diretamente na Nasdaq. Também é possível investir em reais pelo BDR
              <strong> AAPL34</strong> na B3, que replica a ação americana e paga dividendos convertidos.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Perguntas frequentes sobre a Apple (AAPL)
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1">
                <AccordionTrigger className="text-left">Quanto está a cotação da Apple hoje em dólar e em real?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  A cotação da AAPL em tempo real está no gráfico acima em dólar. Para o valor em real, multiplique
                  o preço atual pelo dólar comercial do dia — nosso conversor faz isso automaticamente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger className="text-left">Qual o valor de mercado da Apple?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  A Apple ultrapassou US$ 3 trilhões em market cap, sendo a empresa mais valiosa do mundo, à
                  frente de Microsoft, Nvidia, Amazon e Alphabet.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger className="text-left">A Apple paga dividendos?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sim. A AAPL paga dividendos trimestrais em dólar desde 2012 e aumenta o valor todo ano,
                  além de recomprar bilhões em ações próprias.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger className="text-left">Como funciona o BDR AAPL34 da Apple?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  O BDR AAPL34 é negociado na B3 em reais e representa uma fração da ação AAPL da Nasdaq,
                  permitindo investir sem abrir conta internacional. Dividendos são pagos convertidos em real.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5">
                <AccordionTrigger className="text-left">Como comprar ações da Apple com pouco dinheiro?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Você pode comprar frações de AAPL em corretoras internacionais como Avenue e Nomad a partir
                  de US$ 1, ou comprar BDR AAPL34 na B3 a partir do preço de 1 BDR (cerca de R$ 40 a R$ 80).
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q6">
                <AccordionTrigger className="text-left">Apple é uma boa ação para longo prazo?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Historicamente sim. A AAPL é uma das ações mais valorizadas das últimas décadas, com moat
                  competitivo forte, ecossistema fiel e forte geração de caixa livre para investir e recomprar.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q7">
                <AccordionTrigger className="text-left">Como declarar Apple e AAPL34 no imposto de renda?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Ações AAPL vão em Bens e Direitos ao custo em reais no exterior. Dividendos entram no
                  carnê-leão mensal. BDRs AAPL34 seguem regras da B3, com dividendos tributados como
                  rendimentos comuns.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default AppleHoje;
