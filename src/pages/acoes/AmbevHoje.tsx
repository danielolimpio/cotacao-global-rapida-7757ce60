import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import TradingViewWidget from "@/components/TradingViewWidget";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Beer, Building2, Globe2, DollarSign, BarChart3, Sparkles, TrendingUp, CheckCircle2, AlertTriangle, Clock } from "lucide-react";

const AmbevHoje = () => {
  return (
    <Layout>
      <SEO path="/acoes/ambev" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Beer className="w-4 h-4" /> AÇÕES · AMBEV · B3: ABEV3
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação da Ambev (ABEV3) Hoje
            <span className="block text-primary mt-2">Preço da Ação em Tempo Real, Dividendos e Análise</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe a <strong>cotação da Ambev (B3: ABEV3)</strong> em tempo real, a
            <strong> maior cervejaria da América Latina</strong> e dona de marcas como Skol, Brahma,
            Antarctica, Stella Artois e Corona. Veja preço, dividendos e como investir.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2"><BarChart3 className="w-5 h-5 text-primary" /><span>Ambev (ABEV3) — Gráfico em Tempo Real</span></div>
                <Badge variant="secondary">B3 · Bebidas · Dividendos</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4"><div className="h-96"><TradingViewWidget symbol="BMFBOVESPA:ABEV3" height="384" /></div></CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Building2, label: "Empresa", value: "Ambev S.A." },
            { icon: Globe2, label: "Sede", value: "São Paulo · Brasil" },
            { icon: Beer, label: "Setor", value: "Bebidas · Cervejas" },
            { icon: DollarSign, label: "Ticker", value: "B3:ABEV3 · NYSE:ABEV" },
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
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><DollarSign className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Quanto vale a ação da Ambev hoje?</h2></div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              A <strong className="text-foreground">Ambev S.A.</strong>, subsidiária da belga AB InBev
              (maior cervejaria do mundo), é a <strong>maior fabricante de bebidas da América Latina</strong>,
              com operações em 18 países e portfólio que inclui cervejas, refrigerantes (via engarrafadora
              Pepsi), energéticos, isotônicos, chás e água. A ABEV3 é conhecida como <strong>ação defensiva
              e pagadora consistente de dividendos e JCP</strong>.
            </p>
            <Card className="border-l-4 border-l-primary bg-primary/5 my-6"><CardContent className="p-5 flex gap-3"><Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" /><p className="text-sm md:text-base text-foreground"><strong>Destaque:</strong> a Ambev tem <strong>líder absoluto no mercado brasileiro de cervejas</strong>, com participação superior a 60% em volume.</p></CardContent></Card>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><Beer className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Marcas e portfólio da Ambev</h2></div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Skol, Brahma, Antarctica", desc: "As três maiores cervejas do Brasil em volume de vendas." },
                { title: "Premium (Stella, Corona)", desc: "Portfólio premium em rápido crescimento e maior margem." },
                { title: "Guaraná Antarctica", desc: "Refrigerante icônico brasileiro, patrimônio da marca." },
                { title: "Pepsi (BRA)", desc: "Engarrafamento e distribuição da linha PepsiCo no Brasil." },
                { title: "Beats, Skol Beats", desc: "Bebidas mistas com foco em público jovem, alta margem." },
                { title: "Operações LATAM", desc: "Argentina, Chile, Paraguai, Bolívia, Uruguai e América Central." },
              ].map((item) => (
                <Card key={item.title} className="hover:shadow-lg transition-all hover:-translate-y-0.5"><CardContent className="p-5"><h3 className="font-bold text-foreground mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><TrendingUp className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Vale a pena investir em Ambev (ABEV3) em 2026?</h2></div>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md"><CardHeader><CardTitle className="text-xl">Vantagens</CardTitle></CardHeader><CardContent><ul className="space-y-2.5">{["Líder absoluta no Brasil (60%+ share)","Alto dividend yield (7% a 9%)","Setor defensivo e resiliente","Baixo endividamento"].map((i) => (<li key={i} className="flex items-start gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>{i}</span></li>))}</ul></CardContent></Card>
              <Card className="border-2 hover:border-primary/40 transition-colors"><CardHeader><CardTitle className="text-xl">Pontos de atenção</CardTitle></CardHeader><CardContent><ul className="space-y-2.5">{["Baixo crescimento de volume","Concorrência de artesanais e Heineken","Câmbio afeta custos de insumos","Regulação e impostos sobre bebidas alcoólicas"].map((i) => (<li key={i} className="flex items-start gap-2 text-sm"><AlertTriangle className="w-4 h-4 text-yellow-600 shrink-0 mt-0.5" /><span>{i}</span></li>))}</ul></CardContent></Card>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><Clock className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Como comprar ações da Ambev (ABEV3)</h2></div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">Para <strong>investir em ABEV3</strong>, abra conta em qualquer corretora brasileira (XP, Rico, BTG, Nubank, Inter, Clear) e compre pelo home broker. Também é possível investir via ADRs ABEV listadas na NYSE em dólares.</p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><Sparkles className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Perguntas frequentes sobre a Ambev (ABEV3)</h2></div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1"><AccordionTrigger className="text-left">Qual o preço da ABEV3 hoje?</AccordionTrigger><AccordionContent className="text-muted-foreground">O preço em tempo real está no gráfico acima, atualizado direto da B3.</AccordionContent></AccordionItem>
              <AccordionItem value="q2"><AccordionTrigger className="text-left">Ambev paga bons dividendos?</AccordionTrigger><AccordionContent className="text-muted-foreground">Sim. A Ambev é uma das principais pagadoras de dividendos e JCP da bolsa, com yield entre 7% e 9% ao ano, distribuindo trimestralmente.</AccordionContent></AccordionItem>
              <AccordionItem value="q3"><AccordionTrigger className="text-left">Qual a relação Ambev x AB InBev?</AccordionTrigger><AccordionContent className="text-muted-foreground">A AB InBev é controladora da Ambev, detendo cerca de 62% do capital. A Ambev opera as marcas do grupo na América Latina.</AccordionContent></AccordionItem>
              <AccordionItem value="q4"><AccordionTrigger className="text-left">Vale a pena comprar ABEV3 em 2026?</AccordionTrigger><AccordionContent className="text-muted-foreground">Para investidores focados em dividendos e proteção contra volatilidade, sim. Para quem busca crescimento agressivo, existem opções mais dinâmicas na bolsa.</AccordionContent></AccordionItem>
              <AccordionItem value="q5"><AccordionTrigger className="text-left">A Ambev tem risco de perder mercado?</AccordionTrigger><AccordionContent className="text-muted-foreground">A concorrência de cervejarias artesanais e da Heineken vem crescendo, mas a Ambev mantém liderança confortável e responde com premiumização e novos produtos.</AccordionContent></AccordionItem>
              <AccordionItem value="q6"><AccordionTrigger className="text-left">Como declarar Ambev no imposto de renda?</AccordionTrigger><AccordionContent className="text-muted-foreground">Ações vão em Bens e Direitos (código 31). Vendas acima de R$ 20.000/mês pagam 15% sobre o lucro. Dividendos são isentos no Brasil.</AccordionContent></AccordionItem>
            </Accordion>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default AmbevHoje;
