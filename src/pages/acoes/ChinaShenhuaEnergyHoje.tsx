import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import TradingViewWidget from "@/components/TradingViewWidget";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Flame, Building2, Globe2, DollarSign, BarChart3, Sparkles, TrendingUp, CheckCircle2, AlertTriangle, Clock } from "lucide-react";

const ChinaShenhuaEnergyHoje = () => {
  return (
    <Layout>
      <SEO path="/acoes/china-shenhua" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Flame className="w-4 h-4" /> AÇÕES · CHINA SHENHUA · SSE: 601088 · HKEX: 1088
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação da China Shenhua Energy Hoje
            <span className="block text-primary mt-2">Preço da Ação em Tempo Real, Dividendos e Análise</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe a <strong>cotação da China Shenhua Energy (SSE: 601088 / HKEX: 1088)</strong>
            em tempo real, a <strong>maior mineradora de carvão do mundo</strong> e uma das principais
            geradoras de energia da China. Veja preço, dividendos e como investir.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2"><BarChart3 className="w-5 h-5 text-primary" /><span>China Shenhua (601088) — Gráfico em Tempo Real</span></div>
                <Badge variant="secondary">Shanghai/HK · Energia · Dividendos</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4"><div className="h-96"><TradingViewWidget symbol="SSE:601088" height="384" /></div></CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Building2, label: "Empresa", value: "China Shenhua Energy" },
            { icon: Globe2, label: "Sede", value: "Pequim · China" },
            { icon: Flame, label: "Setor", value: "Carvão · Energia" },
            { icon: DollarSign, label: "Ticker", value: "601088.SS · 1088.HK" },
          ].map((item) => (
            <Card key={item.label} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10"><item.icon className="w-5 h-5 text-primary" /></div>
                <div><div className="text-xs text-muted-foreground uppercase tracking-wide">{item.label}</div><div className="font-semibold text-foreground">{item.value}</div></div>
              </CardContent>
            </Card>
          ))}
        </div>

        <article className="space-y-12 max-w-4xl mx-auto">
          <section>
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><DollarSign className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Quanto vale a ação da China Shenhua hoje?</h2></div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              A <strong className="text-foreground">China Shenhua Energy</strong>, subsidiária do gigante
              estatal China Energy Investment Corporation, é a <strong>maior mineradora de carvão do
              mundo</strong> por produção. Além da mineração, opera termelétricas, ferrovias, portos e
              refinarias — um verdadeiro <strong>conglomerado integrado de energia</strong>.
            </p>
            <Card className="border-l-4 border-l-primary bg-primary/5 my-6"><CardContent className="p-5 flex gap-3"><Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" /><p className="text-sm md:text-base text-foreground"><strong>Destaque:</strong> a China Shenhua paga <strong>dividendos anuais robustos com yield entre 8% e 12%</strong>, sendo queridinha de investidores value em Hong Kong.</p></CardContent></Card>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><Flame className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Modelo integrado da Shenhua</h2></div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Mineração de Carvão", desc: "Maior produção mundial, com minas de baixo custo na Mongólia Interior." },
                { title: "Geração Termelétrica", desc: "Usinas movidas a carvão próprio, integração vertical eficiente." },
                { title: "Ferrovias", desc: "Milhares de km de ferrovias próprias transportando o carvão às usinas." },
                { title: "Portos", desc: "Terminais próprios em Huanghua e Tianjin para exportação." },
                { title: "Química", desc: "Produção de metanol e olefinas a partir do carvão." },
                { title: "Novas Energias", desc: "Investimentos crescentes em eólica e solar para diversificação." },
              ].map((item) => (
                <Card key={item.title} className="hover:shadow-lg transition-all hover:-translate-y-0.5"><CardContent className="p-5"><h3 className="font-bold text-foreground mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><TrendingUp className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Vale a pena investir em China Shenhua em 2026?</h2></div>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md"><CardHeader><CardTitle className="text-xl">Vantagens</CardTitle></CardHeader><CardContent><ul className="space-y-2.5">{["Dividend yield elevadíssimo (8-12%)","Baixo custo de produção","Modelo verticalmente integrado","Forte geração de caixa"].map((i) => (<li key={i} className="flex items-start gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>{i}</span></li>))}</ul></CardContent></Card>
              <Card className="border-2 hover:border-primary/40 transition-colors"><CardHeader><CardTitle className="text-xl">Pontos de atenção</CardTitle></CardHeader><CardContent><ul className="space-y-2.5">{["Setor de carvão em declínio secular (ESG)","Regulação chinesa de energia","Controle estatal","Volatilidade do preço do carvão"].map((i) => (<li key={i} className="flex items-start gap-2 text-sm"><AlertTriangle className="w-4 h-4 text-yellow-600 shrink-0 mt-0.5" /><span>{i}</span></li>))}</ul></CardContent></Card>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><Clock className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Como comprar ações da China Shenhua no Brasil</h2></div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">Para <strong>investir na China Shenhua</strong>, o caminho mais prático é comprar as <strong>ações H em Hong Kong (1088.HK)</strong> via corretora internacional como Interactive Brokers. As ações A (601088.SS) exigem acesso ao Stock Connect. ETFs de commodities chinesas também podem incluir a Shenhua.</p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><Sparkles className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Perguntas frequentes sobre a China Shenhua Energy</h2></div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1"><AccordionTrigger className="text-left">Qual o preço da China Shenhua hoje?</AccordionTrigger><AccordionContent className="text-muted-foreground">O preço em tempo real está no gráfico acima, cotado em yuan em Shanghai (601088) ou HKD em Hong Kong (1088).</AccordionContent></AccordionItem>
              <AccordionItem value="q2"><AccordionTrigger className="text-left">Shenhua paga bons dividendos?</AccordionTrigger><AccordionContent className="text-muted-foreground">Sim, é famosa pelo alto payout — dividend yield histórico entre 8% e 12% ao ano, pago anualmente após aprovação em assembleia.</AccordionContent></AccordionItem>
              <AccordionItem value="q3"><AccordionTrigger className="text-left">China Shenhua ainda é boa aposta com ESG em alta?</AccordionTrigger><AccordionContent className="text-muted-foreground">É controverso. Muitos fundos ESG excluem carvão, mas a Shenhua segue gerando muito caixa. A empresa diversifica para renováveis, mas o núcleo do negócio ainda é carvão.</AccordionContent></AccordionItem>
              <AccordionItem value="q4"><AccordionTrigger className="text-left">A China ainda depende do carvão?</AccordionTrigger><AccordionContent className="text-muted-foreground">Sim. Apesar dos avanços em renováveis, o carvão ainda responde por cerca de 60% da matriz elétrica chinesa e deve seguir relevante por décadas.</AccordionContent></AccordionItem>
              <AccordionItem value="q5"><AccordionTrigger className="text-left">Qual a diferença entre 601088.SS e 1088.HK?</AccordionTrigger><AccordionContent className="text-muted-foreground">601088.SS são ações A em Shanghai em yuan (investidores chineses/QFII). 1088.HK são ações H em Hong Kong em HKD, acessíveis a estrangeiros.</AccordionContent></AccordionItem>
              <AccordionItem value="q6"><AccordionTrigger className="text-left">Como declarar Shenhua no imposto de renda?</AccordionTrigger><AccordionContent className="text-muted-foreground">Ações vão em Bens e Direitos ao custo em reais no exterior. Dividendos entram no carnê-leão mensal.</AccordionContent></AccordionItem>
            </Accordion>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default ChinaShenhuaEnergyHoje;
