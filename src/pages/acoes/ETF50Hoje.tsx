import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import TradingViewWidget from "@/components/TradingViewWidget";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BarChart3, Building2, Globe2, DollarSign, Sparkles, TrendingUp, CheckCircle2, AlertTriangle, Clock, PieChart } from "lucide-react";

const ETF50Hoje = () => {
  return (
    <Layout>
      <SEO path="/acoes/50-etf" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <PieChart className="w-4 h-4" /> ETF · SSE 50 · SSE: 510050
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação do 50 ETF (SSE 50) Hoje
            <span className="block text-primary mt-2">Preço em Tempo Real do ETF das 50 Maiores Blue Chips Chinesas</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe a <strong>cotação do 50 ETF (SSE: 510050)</strong>, que replica o
            <strong> índice SSE 50</strong>, composto pelas 50 maiores e mais líquidas empresas da
            Bolsa de Shanghai. É o <strong>"Dow Jones da China"</strong>.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2"><BarChart3 className="w-5 h-5 text-primary" /><span>SSE 50 ETF (510050) — Gráfico em Tempo Real</span></div>
                <Badge variant="secondary">SSE · Blue Chips · ETF</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4"><div className="h-96"><TradingViewWidget symbol="SSE:510050" height="384" /></div></CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Building2, label: "ETF", value: "ChinaAMC SSE 50" },
            { icon: Globe2, label: "Bolsa", value: "Shanghai (SSE)" },
            { icon: PieChart, label: "Índice", value: "SSE 50 (Top 50)" },
            { icon: DollarSign, label: "Ticker", value: "510050.SS" },
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
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><DollarSign className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">O que é o 50 ETF?</h2></div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              O <strong className="text-foreground">50 ETF (510050.SS)</strong> foi o
              <strong> primeiro ETF lançado na China</strong> (em 2004) e replica o SSE 50 Index,
              formado pelas <strong>50 maiores empresas listadas na Bolsa de Shanghai</strong>,
              incluindo os grandes bancos, seguradoras, petroleiras e conglomerados estatais chineses.
            </p>
            <Card className="border-l-4 border-l-primary bg-primary/5 my-6"><CardContent className="p-5 flex gap-3"><Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" /><p className="text-sm md:text-base text-foreground"><strong>Destaque:</strong> o 50 ETF tem exposição forte a <strong>bancos estatais e blue chips defensivas</strong>, sendo ideal para exposição value ao mercado chinês.</p></CardContent></Card>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><PieChart className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Principais componentes do SSE 50</h2></div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Kweichow Moutai", desc: "Maior fabricante de baijiu do mundo, com marca premium chinesa." },
                { title: "ICBC & CCB", desc: "Os dois maiores bancos do mundo por ativos totais." },
                { title: "Ping An", desc: "Maior seguradora da China e um dos maiores conglomerados financeiros." },
                { title: "China Shenhua", desc: "Maior mineradora de carvão do mundo." },
                { title: "PetroChina & Sinopec", desc: "Gigantes estatais de petróleo e gás." },
                { title: "Merchants Bank", desc: "Um dos bancos comerciais mais eficientes da China." },
              ].map((item) => (
                <Card key={item.title} className="hover:shadow-lg transition-all hover:-translate-y-0.5"><CardContent className="p-5"><h3 className="font-bold text-foreground mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><TrendingUp className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">SSE 50 vs. CSI 300</h2></div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">O SSE 50 tem <strong>menos empresas (50 vs. 300)</strong> e concentração maior em setores financeiros e estatais, tornando-o mais defensivo. Já o CSI 300 é mais diversificado, incluindo empresas de Shenzhen (mais tech e consumo).</p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md"><CardHeader><CardTitle className="text-xl">Vantagens</CardTitle></CardHeader><CardContent><ul className="space-y-2.5">{["Blue chips defensivas","Alta liquidez","Baixa taxa de administração","Dividendos consistentes"].map((i) => (<li key={i} className="flex items-start gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>{i}</span></li>))}</ul></CardContent></Card>
              <Card className="border-2 hover:border-primary/40 transition-colors"><CardHeader><CardTitle className="text-xl">Pontos de atenção</CardTitle></CardHeader><CardContent><ul className="space-y-2.5">{["Concentração em setor financeiro","Menos exposição a tech","Acesso restrito a estrangeiros","Volatilidade das A-Shares"].map((i) => (<li key={i} className="flex items-start gap-2 text-sm"><AlertTriangle className="w-4 h-4 text-yellow-600 shrink-0 mt-0.5" /><span>{i}</span></li>))}</ul></CardContent></Card>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><Clock className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Como investir no SSE 50 do Brasil</h2></div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">O 510050.SS listado em Shanghai só é acessível via Stock Connect. Para brasileiros, a alternativa é comprar <strong>ETFs China A-Shares nos EUA</strong> (como ASHR, KBA) via corretora internacional, que oferecem exposição semelhante às blue chips chinesas.</p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><Sparkles className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Perguntas frequentes sobre o 50 ETF</h2></div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1"><AccordionTrigger className="text-left">O que é o SSE 50?</AccordionTrigger><AccordionContent className="text-muted-foreground">É o índice das 50 maiores e mais líquidas empresas da Bolsa de Shanghai, criado em 2004.</AccordionContent></AccordionItem>
              <AccordionItem value="q2"><AccordionTrigger className="text-left">Qual a diferença entre 50 ETF e 300 ETF?</AccordionTrigger><AccordionContent className="text-muted-foreground">O 50 ETF replica só as 50 maiores blue chips de Shanghai; o 300 ETF replica as 300 maiores de Shanghai e Shenzhen, com maior diversificação setorial.</AccordionContent></AccordionItem>
              <AccordionItem value="q3"><AccordionTrigger className="text-left">Como brasileiros investem no SSE 50?</AccordionTrigger><AccordionContent className="text-muted-foreground">Não há acesso direto ao 510050.SS. A alternativa é comprar ETFs China A-Shares (ASHR, KBA) nos EUA via corretora internacional.</AccordionContent></AccordionItem>
              <AccordionItem value="q4"><AccordionTrigger className="text-left">O 50 ETF paga dividendos?</AccordionTrigger><AccordionContent className="text-muted-foreground">Sim, geralmente pago anualmente. Como o índice é concentrado em bancos e estatais pagadoras, o yield tende a ser atrativo.</AccordionContent></AccordionItem>
              <AccordionItem value="q5"><AccordionTrigger className="text-left">Vale a pena investir em blue chips chinesas?</AccordionTrigger><AccordionContent className="text-muted-foreground">O mercado A-Share negocia com valuation baixo e alto yield. Para carteiras globais diversificadas, uma pequena alocação em China pode reduzir risco.</AccordionContent></AccordionItem>
            </Accordion>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default ETF50Hoje;
