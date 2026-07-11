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
  Users,
  MessageCircle,
} from "lucide-react";

const MetaHoje = () => {
  return (
    <Layout>
      <SEO path="/acoes/meta" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Users className="w-4 h-4" />
            AÇÕES · META · NASDAQ: META
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação da Meta (META) Hoje
            <span className="block text-primary mt-2">Preço em Tempo Real, Facebook, Instagram, WhatsApp e BDR M1TA34</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe a <strong>cotação da Meta Platforms (NASDAQ: META)</strong> em tempo real, dona do
            <strong> Facebook, Instagram, WhatsApp, Threads e Reality Labs</strong>. Veja gráfico, receita
            com ads, aposta em IA e Metaverso, e como investir em reais via BDR M1TA34.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>Meta Platforms (META) — Gráfico em Tempo Real</span>
                </div>
                <Badge variant="secondary">NASDAQ · Big Tech · Ads & IA</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <TradingViewWidget symbol="NASDAQ:META" height="384" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Building2, label: "Empresa", value: "Meta Platforms Inc." },
            { icon: Globe2, label: "Sede", value: "Menlo Park · EUA" },
            { icon: MessageCircle, label: "Setor", value: "Redes Sociais · Ads · IA" },
            { icon: DollarSign, label: "Ticker", value: "NASDAQ:META · BDR M1TA34" },
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
                Quanto vale a ação da Meta (META) hoje?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              A <strong className="text-foreground">Meta Platforms</strong> (ex-Facebook Inc.) reúne
              Facebook, Instagram, WhatsApp, Messenger, Threads e a divisão Reality Labs (Oculus, Ray-Ban
              Meta, óculos de realidade aumentada). A <strong>cotação da META hoje</strong> depende do
              crescimento da receita de anúncios, dos avanços em IA (Llama, Meta AI) e do capex bilionário
              em data centers e óculos inteligentes.
            </p>
            <Card className="border-l-4 border-l-primary bg-primary/5 my-6">
              <CardContent className="p-5 flex gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  <strong>Destaque:</strong> a Meta é dona de plataformas usadas por mais de <strong>3,9 bilhões
                  de pessoas por mês</strong>, a maior base de usuários já reunida por uma única empresa da história.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Principais negócios da Meta
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Facebook & Instagram", desc: "Redes sociais líderes com mais de 3 bilhões de usuários combinados por dia." },
                { title: "WhatsApp Business", desc: "Monetização por API paga e mensagens comerciais, ainda em fase inicial." },
                { title: "Reels & Ads", desc: "Formato de vídeo curto que competiu com TikTok e monetiza em ritmo acelerado." },
                { title: "Meta AI / Llama", desc: "Família de modelos open source integrados aos apps e infraestrutura própria." },
                { title: "Reality Labs", desc: "Oculus Quest, Ray-Ban Meta e óculos de AR — aposta de longo prazo em novos devices." },
                { title: "Threads", desc: "Rede social pública tipo X/Twitter, com dezenas de milhões de usuários ativos." },
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
                Vale a pena investir em Meta (META) em 2026?
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md">
                <CardHeader><CardTitle className="text-xl">Vantagens</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Maior audiência global (Facebook + IG + WhatsApp)",
                      "Margens de Family of Apps acima de 45%",
                      "Iniciou dividendo e recompra bilionária",
                      "Liderança em IA open source com Llama",
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
                      "Reality Labs queima US$ 15-20 bi/ano",
                      "Capex agressivo em IA pressiona caixa",
                      "Regulação de privacidade e antitruste",
                      "Dependência do mercado de ads",
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
                  <strong>Importante:</strong> em 2022 a META caiu mais de 70% — é uma ação que pode oscilar
                  fortemente quando o mercado questiona os gastos com Reality Labs e IA.
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
                Como comprar ações da Meta (META) no Brasil
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Compre META em corretoras internacionais (Avenue, Nomad, Inter Global, XP US, C6 Global) ou
              em reais via <strong>BDR M1TA34</strong> na B3, que replica a ação da Nasdaq e evita a
              necessidade de câmbio.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Perguntas frequentes sobre a Meta (META)
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1">
                <AccordionTrigger className="text-left">Quanto vale a ação da Meta hoje?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  A cotação em tempo real da META está no gráfico acima. Basta multiplicar pelo dólar comercial
                  do dia para saber o valor em reais.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger className="text-left">Meta paga dividendos?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sim. A Meta iniciou o pagamento de dividendos trimestrais em 2024, além de recompras bilionárias
                  de ações próprias.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger className="text-left">O que é o BDR M1TA34?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  É o BDR da Meta na B3, negociado em reais. Cada BDR representa uma fração da META da Nasdaq.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger className="text-left">Meta é dona do WhatsApp e Instagram?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sim. A Meta comprou o Instagram em 2012 e o WhatsApp em 2014. Também é dona de Messenger e Threads.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5">
                <AccordionTrigger className="text-left">Como comprar Meta com pouco dinheiro?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Frações em corretoras internacionais a partir de US$ 1, ou BDR M1TA34 na B3 por dezenas de reais.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q6">
                <AccordionTrigger className="text-left">Meta é uma boa ação para longo prazo?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Analistas consideram sim, pela posição dominante em ads e IA, mas com volatilidade alta devido ao
                  ciclo de investimentos em Reality Labs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q7">
                <AccordionTrigger className="text-left">Como declarar Meta no imposto de renda?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Ações META em Bens e Direitos ao custo em reais no exterior. Ganhos acima de R$ 35 mil/mês são
                  tributados em 15%. BDR M1TA34 segue regras da B3.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default MetaHoje;
