import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import TradingViewWidget from "@/components/TradingViewWidget";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ShoppingBag, Building2, Globe2, DollarSign, BarChart3, Sparkles, TrendingUp, CheckCircle2, AlertTriangle, Clock } from "lucide-react";

const MagazineLuizHoje = () => {
  return (
    <Layout>
      <SEO path="/acoes/magazine-luiz" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <ShoppingBag className="w-4 h-4" /> AÇÕES · MAGAZINE LUIZA · B3: MGLU3
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação do Magazine Luiza (MGLU3) Hoje
            <span className="block text-primary mt-2">Preço da Ação em Tempo Real, Análise e Perspectivas</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe a <strong>cotação do Magazine Luiza (B3: MGLU3)</strong> em tempo real, uma das
            <strong> maiores redes de varejo do Brasil</strong> e referência em e-commerce. Veja preço,
            histórico, análise e como investir na Magalu.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2"><BarChart3 className="w-5 h-5 text-primary" /><span>Magazine Luiza (MGLU3) — Gráfico em Tempo Real</span></div>
                <Badge variant="secondary">B3 · Varejo · Marketplace</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4"><div className="h-96"><TradingViewWidget symbol="BMFBOVESPA:MGLU3" height="384" /></div></CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Building2, label: "Empresa", value: "Magazine Luiza S.A." },
            { icon: Globe2, label: "Sede", value: "Franca · SP · Brasil" },
            { icon: ShoppingBag, label: "Setor", value: "Varejo · E-commerce" },
            { icon: DollarSign, label: "Ticker", value: "B3:MGLU3" },
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
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><DollarSign className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Quanto vale a ação do Magazine Luiza hoje?</h2></div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              O <strong className="text-foreground">Magazine Luiza (Magalu)</strong>, fundado em 1957 em Franca (SP),
              é um dos <strong>maiores varejistas do Brasil</strong>, com mais de <strong>1.300 lojas físicas</strong>,
              marketplace com milhares de sellers e uma das plataformas de e-commerce mais fortes do país.
              A MGLU3 se tornou queridinha do mercado entre 2015-2020, valorizando mais de 40.000% no período.
            </p>
            <Card className="border-l-4 border-l-primary bg-primary/5 my-6"><CardContent className="p-5 flex gap-3"><Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" /><p className="text-sm md:text-base text-foreground"><strong>Destaque:</strong> a Magalu foi uma das maiores histórias de valorização da bolsa brasileira, saindo de R$ 0,10 (ajustado) para mais de R$ 25 no auge de 2020.</p></CardContent></Card>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><ShoppingBag className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Modelo de negócio da Magalu</h2></div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Lojas Físicas", desc: "1.300+ lojas em 21 estados brasileiros, com forte capilaridade no interior." },
                { title: "E-commerce", desc: "Um dos maiores sites de comércio eletrônico do Brasil, com app top-ranked." },
                { title: "Marketplace", desc: "Plataforma com milhares de sellers, gerando comissões e escala." },
                { title: "Magalu Pay", desc: "Fintech interna com carteira digital, cartão e crédito ao consumidor." },
                { title: "Logística (Magalog)", desc: "Rede logística própria com centros de distribuição em todo o país." },
                { title: "Ecossistema Digital", desc: "Aquisições de startups (Netshoes, KaBuM!, Estante Virtual, Época Cosméticos)." },
              ].map((item) => (
                <Card key={item.title} className="hover:shadow-lg transition-all hover:-translate-y-0.5"><CardContent className="p-5"><h3 className="font-bold text-foreground mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><TrendingUp className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Vale a pena investir em MGLU3 em 2026?</h2></div>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md"><CardHeader><CardTitle className="text-xl">Vantagens</CardTitle></CardHeader><CardContent><ul className="space-y-2.5">{["Marca forte e capilaridade nacional","Ecossistema digital consolidado","Preço historicamente baixo hoje","Marketplace em crescimento"].map((i) => (<li key={i} className="flex items-start gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>{i}</span></li>))}</ul></CardContent></Card>
              <Card className="border-2 hover:border-primary/40 transition-colors"><CardHeader><CardTitle className="text-xl">Pontos de atenção</CardTitle></CardHeader><CardContent><ul className="space-y-2.5">{["Alta sensibilidade à Selic","Concorrência acirrada (Mercado Livre, Shopee, Amazon)","Margens pressionadas","Endividamento elevado"].map((i) => (<li key={i} className="flex items-start gap-2 text-sm"><AlertTriangle className="w-4 h-4 text-yellow-600 shrink-0 mt-0.5" /><span>{i}</span></li>))}</ul></CardContent></Card>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><Clock className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Como comprar ações da Magalu (MGLU3)</h2></div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">Para <strong>investir em MGLU3</strong>, abra conta em corretora brasileira (XP, Rico, BTG, Nubank, Inter, Clear) e compre pelo home broker. As ações são negociadas na B3 no Novo Mercado, com altíssima liquidez.</p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><Sparkles className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Perguntas frequentes sobre Magazine Luiza (MGLU3)</h2></div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1"><AccordionTrigger className="text-left">Qual o preço da MGLU3 hoje?</AccordionTrigger><AccordionContent className="text-muted-foreground">O preço em tempo real está no gráfico acima, atualizado direto da B3.</AccordionContent></AccordionItem>
              <AccordionItem value="q2"><AccordionTrigger className="text-left">Por que a Magalu caiu tanto?</AccordionTrigger><AccordionContent className="text-muted-foreground">A alta da Selic pós-2021, endividamento, concorrência de Shopee e Mercado Livre e desaceleração do consumo pressionaram o papel após o auge de 2020.</AccordionContent></AccordionItem>
              <AccordionItem value="q3"><AccordionTrigger className="text-left">Magazine Luiza paga dividendos?</AccordionTrigger><AccordionContent className="text-muted-foreground">A Magalu paga dividendos ocasionais, mas o payout é baixo — a empresa prioriza reinvestimento no crescimento digital.</AccordionContent></AccordionItem>
              <AccordionItem value="q4"><AccordionTrigger className="text-left">Vale a pena comprar MGLU3 em 2026?</AccordionTrigger><AccordionContent className="text-muted-foreground">Depende do perfil. Investidores de longo prazo veem valuation atrativo; conservadores devem observar o alto risco setorial e a sensibilidade à taxa de juros.</AccordionContent></AccordionItem>
              <AccordionItem value="q5"><AccordionTrigger className="text-left">Qual o histórico de valorização da MGLU3?</AccordionTrigger><AccordionContent className="text-muted-foreground">Entre 2015 e 2020 valorizou mais de 40.000%, sendo uma das maiores histórias da bolsa brasileira. Desde 2021, corrigiu fortemente com a alta de juros.</AccordionContent></AccordionItem>
              <AccordionItem value="q6"><AccordionTrigger className="text-left">Como declarar Magalu no imposto de renda?</AccordionTrigger><AccordionContent className="text-muted-foreground">Ações vão em Bens e Direitos (código 31). Vendas acima de R$ 20.000/mês pagam 15% sobre o lucro. Dividendos são isentos no Brasil.</AccordionContent></AccordionItem>
            </Accordion>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default MagazineLuizHoje;
