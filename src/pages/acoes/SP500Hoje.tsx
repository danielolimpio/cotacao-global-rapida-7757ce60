import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import TradingViewWidget from "@/components/TradingViewWidget";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BarChart3, Building2, Globe2, DollarSign, Sparkles, TrendingUp, CheckCircle2, AlertTriangle, Clock, PieChart } from "lucide-react";

const SP500Hoje = () => {
  return (
    <Layout>
      <SEO path="/acoes/sp500" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <PieChart className="w-4 h-4" /> ÍNDICE · S&P 500 · SPX
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação do S&P 500 Hoje
            <span className="block text-primary mt-2">Índice em Tempo Real, Análise e Como Investir no SPY / IVV / VOO</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe a <strong>cotação do S&P 500 (SPX)</strong> em tempo real, o
            <strong> principal índice do mercado americano</strong>, composto pelas 500 maiores empresas
            listadas nas bolsas dos EUA. Referência mundial de renda variável.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2"><BarChart3 className="w-5 h-5 text-primary" /><span>S&P 500 (SPX) — Gráfico em Tempo Real</span></div>
                <Badge variant="secondary">EUA · Benchmark Global</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4"><div className="h-96"><TradingViewWidget symbol="SPX" height="384" /></div></CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Building2, label: "Índice", value: "S&P 500 Index" },
            { icon: Globe2, label: "Mercado", value: "EUA (NYSE + Nasdaq)" },
            { icon: PieChart, label: "Composição", value: "500 maiores empresas" },
            { icon: DollarSign, label: "ETFs", value: "SPY · IVV · VOO · IVVB11" },
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
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><DollarSign className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">O que é o S&P 500?</h2></div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              O <strong className="text-foreground">S&P 500 (Standard & Poor's 500)</strong> é o
              <strong> principal índice do mercado acionário dos Estados Unidos</strong>, composto
              pelas 500 maiores empresas listadas em bolsa americana ponderadas por valor de mercado.
              É considerado o <strong>melhor termômetro da economia americana</strong> e o benchmark
              global de renda variável, batendo a maioria dos fundos ativos no longo prazo.
            </p>
            <Card className="border-l-4 border-l-primary bg-primary/5 my-6"><CardContent className="p-5 flex gap-3"><Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" /><p className="text-sm md:text-base text-foreground"><strong>Destaque:</strong> Warren Buffett recomenda para investidores comuns simplesmente comprar e segurar um ETF do S&P 500 (como VOO ou SPY) — histórico de retorno médio de <strong>~10% ao ano</strong> ao longo de décadas.</p></CardContent></Card>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><PieChart className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Maiores empresas do S&P 500</h2></div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Apple (AAPL)", desc: "Maior empresa do mundo, com mais de US$ 3 trilhões em market cap." },
                { title: "Microsoft (MSFT)", desc: "Gigante de software, cloud (Azure) e IA (via OpenAI)." },
                { title: "Nvidia (NVDA)", desc: "Líder mundial em chips para IA e computação de alto desempenho." },
                { title: "Amazon (AMZN)", desc: "E-commerce, AWS (líder em cloud) e mídia (Prime Video)." },
                { title: "Alphabet (GOOGL)", desc: "Dona do Google, YouTube e Google Cloud." },
                { title: "Meta (META)", desc: "Facebook, Instagram, WhatsApp e Reality Labs." },
              ].map((item) => (
                <Card key={item.title} className="hover:shadow-lg transition-all hover:-translate-y-0.5"><CardContent className="p-5"><h3 className="font-bold text-foreground mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><TrendingUp className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Vale a pena investir no S&P 500 em 2026?</h2></div>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md"><CardHeader><CardTitle className="text-xl">Vantagens</CardTitle></CardHeader><CardContent><ul className="space-y-2.5">{["Diversificação nas 500 maiores empresas dos EUA","Retorno médio histórico de ~10% ao ano","Exposição ao dólar (proteção cambial)","Bate a maioria dos fundos ativos"].map((i) => (<li key={i} className="flex items-start gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>{i}</span></li>))}</ul></CardContent></Card>
              <Card className="border-2 hover:border-primary/40 transition-colors"><CardHeader><CardTitle className="text-xl">Pontos de atenção</CardTitle></CardHeader><CardContent><ul className="space-y-2.5">{["Concentração em Big Techs (30%+ do índice)","P/L acima da média histórica","Volatilidade em ciclos de recessão","Dependência do ciclo econômico dos EUA"].map((i) => (<li key={i} className="flex items-start gap-2 text-sm"><AlertTriangle className="w-4 h-4 text-yellow-600 shrink-0 mt-0.5" /><span>{i}</span></li>))}</ul></CardContent></Card>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><Clock className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Como investir no S&P 500 do Brasil</h2></div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              Há duas formas principais de <strong>investir no S&P 500 sendo brasileiro</strong>:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span><strong>Em dólar (EUA):</strong> abrir conta em corretora internacional (Avenue, Nomad, Interactive Brokers, XP US) e comprar ETFs <strong>SPY, IVV ou VOO</strong>.</span></li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span><strong>Em real (B3):</strong> comprar o <strong>BDR IVVB11</strong> ou o ETF <strong>SPXI11</strong> em qualquer corretora brasileira.</span></li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><Sparkles className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Perguntas frequentes sobre o S&P 500</h2></div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1"><AccordionTrigger className="text-left">Quanto está o S&P 500 hoje?</AccordionTrigger><AccordionContent className="text-muted-foreground">A cotação em tempo real do S&P 500 está no gráfico acima, atualizada durante o pregão americano (10h30 às 17h no horário de Brasília).</AccordionContent></AccordionItem>
              <AccordionItem value="q2"><AccordionTrigger className="text-left">Qual a diferença entre SPX, SPY, IVV e VOO?</AccordionTrigger><AccordionContent className="text-muted-foreground">SPX é o índice em si (não se compra). SPY, IVV e VOO são ETFs que replicam o SPX — todos praticamente equivalentes, sendo o VOO da Vanguard o mais barato (0,03% ao ano).</AccordionContent></AccordionItem>
              <AccordionItem value="q3"><AccordionTrigger className="text-left">O S&P 500 paga dividendos?</AccordionTrigger><AccordionContent className="text-muted-foreground">Sim, os ETFs distribuem os dividendos das empresas que compõem o índice, geralmente trimestralmente, com yield médio de 1,3% a 2% ao ano.</AccordionContent></AccordionItem>
              <AccordionItem value="q4"><AccordionTrigger className="text-left">O que é o BDR IVVB11?</AccordionTrigger><AccordionContent className="text-muted-foreground">É um BDR na B3 que replica o ETF IVV do S&P 500. Permite investir no índice em reais sem precisar abrir conta no exterior.</AccordionContent></AccordionItem>
              <AccordionItem value="q5"><AccordionTrigger className="text-left">Qual o retorno médio do S&P 500?</AccordionTrigger><AccordionContent className="text-muted-foreground">Historicamente, o S&P 500 retornou cerca de 10% ao ano em dólares (com dividendos reinvestidos), superando a inflação americana em 6-7% ao ano.</AccordionContent></AccordionItem>
              <AccordionItem value="q6"><AccordionTrigger className="text-left">Como declarar S&P 500 no imposto de renda?</AccordionTrigger><AccordionContent className="text-muted-foreground">ETFs no exterior vão em Bens e Direitos em reais. Dividendos entram no carnê-leão. BDR IVVB11 segue regras da B3, com dividendos tributados como rendimentos comuns.</AccordionContent></AccordionItem>
            </Accordion>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default SP500Hoje;
