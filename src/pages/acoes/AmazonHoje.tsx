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
  ShoppingCart,
  Cloud,
} from "lucide-react";

const AmazonHoje = () => {
  return (
    <Layout>
      <SEO path="/acoes/amazon" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <ShoppingCart className="w-4 h-4" />
            AÇÕES · AMAZON · NASDAQ: AMZN
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação da Amazon (AMZN) Hoje
            <span className="block text-primary mt-2">Preço em Tempo Real, AWS, E-commerce e BDR AMZO34</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe a <strong>cotação da Amazon.com Inc. (NASDAQ: AMZN)</strong> em tempo real, a
            gigante do e-commerce e da <strong>AWS (Amazon Web Services)</strong>, líder mundial em
            cloud computing. Veja gráfico, análise, BDR AMZO34 e como investir.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>Amazon.com Inc. (AMZN) — Gráfico em Tempo Real</span>
                </div>
                <Badge variant="secondary">NASDAQ · Big Tech · E-commerce & Cloud</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <TradingViewWidget symbol="NASDAQ:AMZN" height="384" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Building2, label: "Empresa", value: "Amazon.com Inc." },
            { icon: Globe2, label: "Sede", value: "Seattle · EUA" },
            { icon: Cloud, label: "Divisões", value: "E-commerce · AWS · Ads · Prime" },
            { icon: DollarSign, label: "Ticker", value: "NASDAQ:AMZN · BDR AMZO34" },
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
                Quanto vale a ação da Amazon (AMZN) hoje?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              A <strong className="text-foreground">Amazon</strong>, fundada por Jeff Bezos em 1994, é a
              maior varejista online do mundo e líder global em computação em nuvem via AWS. A
              <strong> cotação da AMZN hoje</strong> depende do crescimento do e-commerce global, do
              avanço da AWS em IA generativa, do segmento de Ads em rápida expansão e da eficiência
              operacional logística (com fulfillment e Prime).
            </p>
            <Card className="border-l-4 border-l-primary bg-primary/5 my-6">
              <CardContent className="p-5 flex gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  <strong>Destaque:</strong> a AWS responde por cerca de <strong>65-70% do lucro operacional</strong>
                  da Amazon, mesmo representando menos de 20% da receita — é o motor real dos resultados.
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
                Principais divisões da Amazon
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "AWS", desc: "Líder global em cloud (>30% de share) com margens acima de 30% e forte demanda por IA." },
                { title: "E-commerce", desc: "Maior loja online do mundo, com Marketplace, logística Prime e frota própria." },
                { title: "Prime & Vídeo", desc: "Mais de 200 milhões de assinantes Prime globais e conteúdo original em streaming." },
                { title: "Advertising", desc: "3º maior negócio de ads digital do mundo, atrás só de Google e Meta." },
                { title: "Alexa & Devices", desc: "Echo, Kindle, Fire TV e Ring formam o ecossistema de hardware conectado." },
                { title: "Logística", desc: "Rede global de fulfillment centers, aviões, caminhões e delivery de última milha." },
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
                Vale a pena investir em Amazon (AMZN) em 2026?
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md">
                <CardHeader><CardTitle className="text-xl">Vantagens</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Líder global em cloud (AWS)",
                      "Ads é o segmento que mais cresce",
                      "Ecossistema Prime cria receita recorrente",
                      "Escala logística difícil de replicar",
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
                      "Margens de e-commerce ainda apertadas",
                      "Não paga dividendos",
                      "Concorrência forte em cloud (Azure, Google)",
                      "Regulação antitruste nos EUA e Europa",
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
                  <strong>Importante:</strong> a Amazon <strong>não paga dividendos</strong> — o retorno vem
                  exclusivamente da valorização da ação e, recentemente, do início de recompras.
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
                Como comprar ações da Amazon (AMZN) no Brasil
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Você pode comprar AMZN em corretoras internacionais (Avenue, Nomad, Inter Global, XP US,
              C6 Global) ou investir em reais via BDR <strong>AMZO34</strong> na B3. O BDR replica a
              ação da Nasdaq e pode ser comprado com valores acessíveis, sem precisar de câmbio.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Perguntas frequentes sobre a Amazon (AMZN)
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1">
                <AccordionTrigger className="text-left">Quanto vale a ação da Amazon hoje em dólar e em real?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  O gráfico acima mostra a cotação da AMZN em tempo real na Nasdaq. Multiplique pelo dólar
                  do dia para saber o valor em reais.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger className="text-left">Amazon paga dividendos?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Não. A AMZN historicamente reinveste 100% do lucro em crescimento. Recentemente iniciou
                  programa de recompra, mas ainda não distribui dividendos regulares.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger className="text-left">O que é o BDR AMZO34 da Amazon?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  AMZO34 é o BDR nível II da Amazon negociado na B3, permitindo investir na AMZN em reais
                  sem precisar abrir conta internacional.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger className="text-left">Como comprar ações da Amazon com pouco dinheiro?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Em corretoras como Avenue e Nomad você compra frações de AMZN a partir de US$ 1. No Brasil,
                  BDR AMZO34 pode ser comprado por poucas dezenas de reais.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5">
                <AccordionTrigger className="text-left">Amazon é uma boa ação para longo prazo?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Historicamente é uma das ações mais valorizadas do mercado americano, impulsionada pela AWS,
                  Ads e liderança em e-commerce. Volatilidade é maior que a média.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q6">
                <AccordionTrigger className="text-left">Qual a diferença entre Amazon e AWS?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  AWS é uma divisão da Amazon focada em cloud computing (servidores, IA, banco de dados). É a
                  divisão mais lucrativa e principal motor do lucro operacional consolidado.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q7">
                <AccordionTrigger className="text-left">Como declarar ações da Amazon no imposto de renda?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Ações AMZN entram em Bens e Direitos ao custo em reais. Ganho de capital em vendas acima de
                  R$ 35 mil/mês tem imposto de 15%. BDR AMZO34 segue regras da B3.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default AmazonHoje;
