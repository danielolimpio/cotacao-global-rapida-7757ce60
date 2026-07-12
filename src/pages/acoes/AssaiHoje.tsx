import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import TradingViewWidget from "@/components/TradingViewWidget";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Store, Building2, Globe2, DollarSign, BarChart3, Sparkles, TrendingUp, CheckCircle2, AlertTriangle, Clock } from "lucide-react";

const AssaiHoje = () => {
  return (
    <Layout>
      <SEO path="/acoes/assai" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Store className="w-4 h-4" /> AÇÕES · ASSAÍ · B3: ASAI3
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação do Assaí (ASAI3) Hoje
            <span className="block text-primary mt-2">Preço da Ação em Tempo Real, Dividendos e Análise</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe a <strong>cotação do Assaí Atacadista (B3: ASAI3)</strong> em tempo real, a
            <strong> segunda maior rede de cash & carry (atacarejo) do Brasil</strong>. Veja preço,
            histórico, dividendos e como investir em uma das ações mais promissoras do varejo.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2"><BarChart3 className="w-5 h-5 text-primary" /><span>Assaí (ASAI3) — Gráfico em Tempo Real</span></div>
                <Badge variant="secondary">B3 · Varejo · Atacarejo</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4"><div className="h-96"><TradingViewWidget symbol="BMFBOVESPA:ASAI3" height="384" /></div></CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Building2, label: "Empresa", value: "Sendas Distribuidora" },
            { icon: Globe2, label: "Sede", value: "São Paulo · Brasil" },
            { icon: Store, label: "Setor", value: "Varejo · Cash & Carry" },
            { icon: DollarSign, label: "Ticker", value: "B3:ASAI3 · NYSE:ASAI" },
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
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><DollarSign className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Quanto vale a ação do Assaí hoje?</h2></div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              O <strong className="text-foreground">Assaí Atacadista (Sendas Distribuidora)</strong>, spin-off
              do Grupo Pão de Açúcar (GPA) listado separadamente em 2021, é a <strong>segunda maior rede
              de atacarejo do Brasil</strong>, atrás apenas do Atacadão. Com mais de 280 lojas e forte
              expansão, o modelo cash & carry cresce a taxas de dois dígitos ao ano, capturando a demanda
              por preços baixos.
            </p>
            <Card className="border-l-4 border-l-primary bg-primary/5 my-6"><CardContent className="p-5 flex gap-3"><Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" /><p className="text-sm md:text-base text-foreground"><strong>Destaque:</strong> o Assaí converteu mais de 70 lojas Extra Hiper em lojas cash & carry, acelerando a expansão em 2022-2024.</p></CardContent></Card>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><Store className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Modelo de negócio do Assaí</h2></div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Cash & Carry", desc: "Formato atacarejo — preços baixos, alto volume, foco em transformadores e consumidor final." },
                { title: "Expansão Nacional", desc: "Presença em todos os estados brasileiros, com plano agressivo de novas lojas." },
                { title: "Passa Fácil", desc: "Cartão de crédito próprio, gerando receita financeira crescente." },
                { title: "Marca Própria", desc: "Portfólio Qualitá, Taeq e outras marcas com margem superior." },
                { title: "Conversão Extra", desc: "Ex-lojas hipermercado convertidas em Assaí, ganhando escala rapidamente." },
                { title: "Foco B2B/B2C", desc: "Atende bares, restaurantes e famílias que compram grandes quantidades." },
              ].map((item) => (
                <Card key={item.title} className="hover:shadow-lg transition-all hover:-translate-y-0.5"><CardContent className="p-5"><h3 className="font-bold text-foreground mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><TrendingUp className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Vale a pena investir em Assaí (ASAI3) em 2026?</h2></div>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md"><CardHeader><CardTitle className="text-xl">Vantagens</CardTitle></CardHeader><CardContent><ul className="space-y-2.5">{["Setor de atacarejo em forte crescimento","Vice-líder nacional em cash & carry","Modelo resiliente à inflação","Expansão orgânica agressiva"].map((i) => (<li key={i} className="flex items-start gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>{i}</span></li>))}</ul></CardContent></Card>
              <Card className="border-2 hover:border-primary/40 transition-colors"><CardHeader><CardTitle className="text-xl">Pontos de atenção</CardTitle></CardHeader><CardContent><ul className="space-y-2.5">{["Endividamento elevado pós-conversões","Concorrência do Atacadão","Margens apertadas típicas do atacarejo","Sensibilidade à taxa Selic"].map((i) => (<li key={i} className="flex items-start gap-2 text-sm"><AlertTriangle className="w-4 h-4 text-yellow-600 shrink-0 mt-0.5" /><span>{i}</span></li>))}</ul></CardContent></Card>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><Clock className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Como comprar ações do Assaí (ASAI3)</h2></div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">Para <strong>investir em ASAI3</strong>, abra conta em qualquer corretora brasileira (XP, Rico, BTG, Nubank, Inter, Clear) e envie a ordem pelo home broker. Também é possível investir via ADRs ASAI na NYSE em dólares.</p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><Sparkles className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Perguntas frequentes sobre o Assaí (ASAI3)</h2></div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1"><AccordionTrigger className="text-left">Qual o preço da ASAI3 hoje?</AccordionTrigger><AccordionContent className="text-muted-foreground">O preço em tempo real está no gráfico acima, atualizado direto da B3.</AccordionContent></AccordionItem>
              <AccordionItem value="q2"><AccordionTrigger className="text-left">Assaí paga dividendos?</AccordionTrigger><AccordionContent className="text-muted-foreground">Sim, mas o payout ainda é modesto — a empresa prioriza reinvestimento em expansão de lojas e redução da dívida.</AccordionContent></AccordionItem>
              <AccordionItem value="q3"><AccordionTrigger className="text-left">Qual a diferença entre Assaí e Atacadão?</AccordionTrigger><AccordionContent className="text-muted-foreground">Ambos são redes de cash & carry (atacarejo). O Atacadão é líder e pertence ao Grupo Carrefour; o Assaí é vice-líder e é o Sendas, spin-off do GPA.</AccordionContent></AccordionItem>
              <AccordionItem value="q4"><AccordionTrigger className="text-left">Vale a pena investir em ASAI3 em 2026?</AccordionTrigger><AccordionContent className="text-muted-foreground">O setor de atacarejo continua crescendo acima da média do varejo. Analistas veem valuation atrativo com potencial de valorização à medida que o endividamento cai.</AccordionContent></AccordionItem>
              <AccordionItem value="q5"><AccordionTrigger className="text-left">Por que o Assaí caiu após o IPO?</AccordionTrigger><AccordionContent className="text-muted-foreground">A alta da Selic pós-2022 pressionou empresas alavancadas. O Assaí assumiu dívidas grandes para converter lojas Extra Hiper, o que impactou o papel no curto prazo.</AccordionContent></AccordionItem>
              <AccordionItem value="q6"><AccordionTrigger className="text-left">Como declarar Assaí no imposto de renda?</AccordionTrigger><AccordionContent className="text-muted-foreground">Ações vão em Bens e Direitos (código 31). Vendas acima de R$ 20.000/mês pagam 15% sobre o lucro. Dividendos são isentos no Brasil.</AccordionContent></AccordionItem>
            </Accordion>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default AssaiHoje;
