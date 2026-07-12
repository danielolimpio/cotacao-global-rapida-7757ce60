import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import TradingViewWidget from "@/components/TradingViewWidget";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BarChart3, Building2, Globe2, DollarSign, Sparkles, TrendingUp, CheckCircle2, AlertTriangle, Clock, PieChart } from "lucide-react";

const ETF300Hoje = () => {
  return (
    <Layout>
      <SEO path="/acoes/300-etf" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <PieChart className="w-4 h-4" /> ETF · CSI 300 · SSE: 510300
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação do 300 ETF (CSI 300) Hoje
            <span className="block text-primary mt-2">Preço em Tempo Real do Maior ETF de Ações da China</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe a <strong>cotação do 300 ETF (SSE: 510300)</strong>, que replica o
            <strong> índice CSI 300</strong>, benchmark das 300 maiores empresas da China continental
            listadas em Shanghai e Shenzhen. Veja preço e análise em tempo real.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2"><BarChart3 className="w-5 h-5 text-primary" /><span>CSI 300 ETF (510300) — Gráfico em Tempo Real</span></div>
                <Badge variant="secondary">SSE · China A-Shares · ETF</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4"><div className="h-96"><TradingViewWidget symbol="SSE:510300" height="384" /></div></CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Building2, label: "ETF", value: "Huatai-PB CSI 300" },
            { icon: Globe2, label: "Bolsa", value: "Shanghai (SSE)" },
            { icon: PieChart, label: "Índice", value: "CSI 300 (Top 300)" },
            { icon: DollarSign, label: "Ticker", value: "510300.SS" },
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
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><DollarSign className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">O que é o 300 ETF?</h2></div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              O <strong className="text-foreground">300 ETF (510300.SS)</strong> é um fundo passivo
              que replica o <strong>CSI 300 Index</strong>, o principal benchmark de ações da China
              continental (A-Shares). O índice reúne as 300 maiores empresas de Shanghai e Shenzhen
              por capitalização e liquidez, cobrindo cerca de <strong>70% da capitalização total do
              mercado chinês</strong>.
            </p>
            <Card className="border-l-4 border-l-primary bg-primary/5 my-6"><CardContent className="p-5 flex gap-3"><Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" /><p className="text-sm md:text-base text-foreground"><strong>Destaque:</strong> o 300 ETF é o ETF mais líquido da China A-Share, considerado o <strong>"S&P 500 chinês"</strong>.</p></CardContent></Card>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><PieChart className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Principais setores do CSI 300</h2></div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Financeiro", desc: "Bancos como ICBC, CCB, Ping An — maior peso do índice." },
                { title: "Consumo", desc: "Kweichow Moutai, Wuliangye Yibin, Midea Group." },
                { title: "Tecnologia", desc: "BYD, CATL, foxconn Industrial Internet." },
                { title: "Saúde", desc: "Wuxi Biologics, Jiangsu Hengrui Medicine." },
                { title: "Energia", desc: "PetroChina, Sinopec, China Shenhua Energy." },
                { title: "Industrial", desc: "CRRC, SAIC Motor, China State Construction." },
              ].map((item) => (
                <Card key={item.title} className="hover:shadow-lg transition-all hover:-translate-y-0.5"><CardContent className="p-5"><h3 className="font-bold text-foreground mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><TrendingUp className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Vale a pena investir no 300 ETF?</h2></div>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md"><CardHeader><CardTitle className="text-xl">Vantagens</CardTitle></CardHeader><CardContent><ul className="space-y-2.5">{["Diversificação em 300 blue chips","Baixa taxa de administração","Alta liquidez em Shanghai","Exposição direta ao PIB chinês"].map((i) => (<li key={i} className="flex items-start gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>{i}</span></li>))}</ul></CardContent></Card>
              <Card className="border-2 hover:border-primary/40 transition-colors"><CardHeader><CardTitle className="text-xl">Pontos de atenção</CardTitle></CardHeader><CardContent><ul className="space-y-2.5">{["Acesso restrito para estrangeiros (Stock Connect)","Volatilidade das A-Shares","Risco cambial (yuan)","Regulação chinesa"].map((i) => (<li key={i} className="flex items-start gap-2 text-sm"><AlertTriangle className="w-4 h-4 text-yellow-600 shrink-0 mt-0.5" /><span>{i}</span></li>))}</ul></CardContent></Card>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><Clock className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Como investir no CSI 300 do Brasil</h2></div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">Para brasileiros, o caminho mais prático é via <strong>ETFs listados nos EUA que replicam o CSI 300</strong>, como <strong>ASHR (Xtrackers Harvest CSI 300 China A-Shares)</strong>. Basta abrir conta em uma corretora internacional (Avenue, Nomad, Interactive Brokers) e comprar em dólares.</p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><Sparkles className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Perguntas frequentes sobre o 300 ETF</h2></div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1"><AccordionTrigger className="text-left">O que é o CSI 300?</AccordionTrigger><AccordionContent className="text-muted-foreground">É o principal índice das ações A da China (mercado continental), formado pelas 300 maiores empresas de Shanghai e Shenzhen.</AccordionContent></AccordionItem>
              <AccordionItem value="q2"><AccordionTrigger className="text-left">Como brasileiros compram o 300 ETF?</AccordionTrigger><AccordionContent className="text-muted-foreground">Não é possível comprar diretamente o 510300.SS em Shanghai. A alternativa é o ETF ASHR nos EUA, que replica o mesmo índice.</AccordionContent></AccordionItem>
              <AccordionItem value="q3"><AccordionTrigger className="text-left">Qual a taxa do 300 ETF?</AccordionTrigger><AccordionContent className="text-muted-foreground">O ETF chinês tem taxa em torno de 0,5% ao ano. O ASHR nos EUA cobra cerca de 0,65% de expense ratio.</AccordionContent></AccordionItem>
              <AccordionItem value="q4"><AccordionTrigger className="text-left">O 300 ETF paga dividendos?</AccordionTrigger><AccordionContent className="text-muted-foreground">Sim. Distribui dividendos das empresas que compõem o índice, geralmente reinvestidos ou pagos anualmente conforme o gestor.</AccordionContent></AccordionItem>
              <AccordionItem value="q5"><AccordionTrigger className="text-left">Vale a pena investir no CSI 300 em 2026?</AccordionTrigger><AccordionContent className="text-muted-foreground">O mercado chinês negocia com valuation historicamente baixo. Para investidores com apetite a risco emergente, pode ser oportunidade de diversificação global.</AccordionContent></AccordionItem>
            </Accordion>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default ETF300Hoje;
