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
  Zap,
} from "lucide-react";

const NvidiaHoje = () => {
  return (
    <Layout>
      <SEO path="/acoes/nvidia" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Cpu className="w-4 h-4" />
            AÇÕES · NVIDIA · NASDAQ: NVDA
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação da NVIDIA (NVDA) Hoje
            <span className="block text-primary mt-2">Preço em Tempo Real, GPUs de IA e BDR NVDC34</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe a <strong>cotação da NVIDIA (NASDAQ: NVDA)</strong> em tempo real, líder absoluta em
            <strong> GPUs para inteligência artificial</strong> e uma das ações mais valorizadas da história
            recente do mercado americano. Veja gráfico, análise e como investir.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>NVIDIA Corp. (NVDA) — Gráfico em Tempo Real</span>
                </div>
                <Badge variant="secondary">NASDAQ · Semicondutores · IA</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <TradingViewWidget symbol="NASDAQ:NVDA" height="384" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Building2, label: "Empresa", value: "NVIDIA Corporation" },
            { icon: Globe2, label: "Sede", value: "Santa Clara · EUA" },
            { icon: Zap, label: "Setor", value: "GPUs · IA · Data Center" },
            { icon: DollarSign, label: "Ticker", value: "NASDAQ:NVDA · BDR NVDC34" },
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
                Quanto vale a ação da NVIDIA (NVDA) hoje?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              A <strong className="text-foreground">NVIDIA</strong>, fundada em 1993, tornou-se a empresa
              mais valiosa do mundo em vários momentos de 2024 e 2025 graças à demanda explosiva por
              <strong> GPUs H100, H200 e Blackwell</strong> para treinar modelos de IA. A cotação da NVDA
              hoje é altamente sensível às expectativas de capex de Big Techs (Microsoft, Meta, Google,
              Amazon), ao ciclo de novas arquiteturas e à concorrência de AMD, Intel e chips próprios.
            </p>
            <Card className="border-l-4 border-l-primary bg-primary/5 my-6">
              <CardContent className="p-5 flex gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  <strong>Destaque:</strong> a divisão de <strong>Data Center</strong> já responde por mais
                  de 85% da receita da NVIDIA, superando o segmento histórico de placas de vídeo Gaming.
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
                Principais produtos da NVIDIA
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "GPUs H100 / H200", desc: "Chips para treinamento e inferência de LLMs — padrão de mercado global em IA." },
                { title: "Arquitetura Blackwell", desc: "Nova geração B100/B200/GB200, foco em performance/watt e clusters gigantes." },
                { title: "CUDA", desc: "Ecossistema de software que cria lock-in real para desenvolvedores de IA e HPC." },
                { title: "GeForce Gaming", desc: "Linha RTX (4090, 5090) domina o mercado de placas de vídeo para jogos e IA local." },
                { title: "Automotive & Robótica", desc: "Plataformas DRIVE e Isaac para carros autônomos e robôs industriais." },
                { title: "DGX & Networking", desc: "Servidores DGX e switches Mellanox/InfiniBand para clusters de IA em escala." },
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
                Vale a pena investir em NVIDIA (NVDA) em 2026?
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md">
                <CardHeader><CardTitle className="text-xl">Vantagens</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Domínio quase monopolista em GPUs de IA",
                      "Ecossistema CUDA cria lock-in de software",
                      "Margens brutas acima de 70%",
                      "Fluxo de caixa livre recorde",
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
                      "Volatilidade muito acima da média",
                      "Concentração de clientes (poucas Big Techs)",
                      "Chips próprios (Google TPU, MSFT Maia) ameaçam share",
                      "Restrições de exportação para a China",
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
                  <strong>Importante:</strong> a NVDA já teve quedas de 30-50% em ciclos anteriores. É uma ação
                  de alto crescimento com volatilidade elevada — dimensione a posição com cuidado.
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
                Como comprar ações da NVIDIA (NVDA) no Brasil
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Compre NVDA em corretoras internacionais (Avenue, Nomad, Inter Global, XP US, C6 Global,
              Interactive Brokers) ou em reais via BDR <strong>NVDC34</strong> na B3. O BDR replica a NVDA
              da Nasdaq e é uma alternativa acessível para investir sem câmbio.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Perguntas frequentes sobre a NVIDIA (NVDA)
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1">
                <AccordionTrigger className="text-left">Quanto vale a ação da NVIDIA hoje?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  A cotação em tempo real da NVDA está no gráfico acima. Multiplique pelo dólar do dia para o
                  valor em reais.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger className="text-left">NVIDIA paga dividendos?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sim, mas o dividend yield é muito baixo (menor que 0,1%) — o retorno da NVDA vem essencialmente
                  da valorização e das recompras de ações.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger className="text-left">Como comprar NVIDIA com pouco dinheiro?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Em Avenue e Nomad, você compra frações de NVDA a partir de US$ 1. No Brasil, o BDR NVDC34 é
                  negociado por poucas dezenas de reais.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger className="text-left">O que é o BDR NVDC34 da NVIDIA?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  É o BDR da NVIDIA na B3, em reais. Cada BDR representa uma fração da NVDA da Nasdaq e replica a
                  variação da ação americana.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5">
                <AccordionTrigger className="text-left">Por que a NVIDIA subiu tanto?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Pela explosão da demanda por GPUs em IA generativa (ChatGPT, Gemini, Claude etc.), com Big Techs
                  investindo dezenas de bilhões em data centers baseados em Hopper e Blackwell.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q6">
                <AccordionTrigger className="text-left">NVIDIA é boa ação para longo prazo?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Muitos analistas consideram sim, pela posição dominante em IA e CUDA. Mas exige tolerância à
                  volatilidade e revisões constantes de tese conforme o ciclo de capex evolui.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q7">
                <AccordionTrigger className="text-left">Como declarar NVIDIA no imposto de renda?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Ações NVDA vão em Bens e Direitos ao custo em reais. Ganhos acima de R$ 35 mil/mês em vendas são
                  tributados em 15%. BDR NVDC34 segue regras da B3.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default NvidiaHoje;
