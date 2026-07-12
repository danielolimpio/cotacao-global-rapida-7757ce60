import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import TradingViewWidget from "@/components/TradingViewWidget";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Landmark, Building2, Globe2, DollarSign, BarChart3, Sparkles, TrendingUp, CheckCircle2, AlertTriangle, Clock } from "lucide-react";

const BradescoHoje = () => {
  return (
    <Layout>
      <SEO path="/acoes/bradesco" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Landmark className="w-4 h-4" /> AÇÕES · BRADESCO · B3: BBDC4
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação do Bradesco (BBDC4) Hoje
            <span className="block text-primary mt-2">Preço da Ação em Tempo Real, Dividendos e Análise</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe a <strong>cotação do Bradesco (B3: BBDC4)</strong> em tempo real, um dos
            <strong> maiores bancos privados da América Latina</strong>. Veja preço, histórico, dividendos,
            JCP e como investir nas ações preferenciais do Bradesco.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2"><BarChart3 className="w-5 h-5 text-primary" /><span>Bradesco (BBDC4) — Gráfico em Tempo Real</span></div>
                <Badge variant="secondary">B3 · Bancos · Dividendos</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4"><div className="h-96"><TradingViewWidget symbol="BMFBOVESPA:BBDC4" height="384" /></div></CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Building2, label: "Empresa", value: "Banco Bradesco S.A." },
            { icon: Globe2, label: "Sede", value: "Osasco · SP · Brasil" },
            { icon: Landmark, label: "Setor", value: "Bancos · Financeiro" },
            { icon: DollarSign, label: "Ticker", value: "BBDC4 (PN) · BBDC3 (ON)" },
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
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><DollarSign className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Quanto vale a ação do Bradesco hoje?</h2></div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              O <strong className="text-foreground">Banco Bradesco</strong>, fundado em 1943 por Amador Aguiar,
              é um dos <strong>maiores bancos do Brasil e da América Latina</strong>, com mais de 70 milhões
              de clientes, atuação em bancos, seguros (Bradesco Seguros), previdência, capitalização e
              cartões. A <strong>BBDC4 (preferencial)</strong> é uma das ações mais negociadas do Ibovespa.
            </p>
            <Card className="border-l-4 border-l-primary bg-primary/5 my-6"><CardContent className="p-5 flex gap-3"><Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" /><p className="text-sm md:text-base text-foreground"><strong>Destaque:</strong> o Bradesco paga <strong>dividendos e JCP mensalmente</strong>, sendo uma das queridinhas de quem busca renda passiva na bolsa brasileira.</p></CardContent></Card>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><Landmark className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Modelo de negócio do Bradesco</h2></div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Banco de Varejo", desc: "Contas correntes, cartões, crédito e financiamento para pessoas físicas." },
                { title: "Banco Corporativo", desc: "Atendimento a empresas, financiamento e capital de giro." },
                { title: "Bradesco Seguros", desc: "Líder do mercado brasileiro em seguros, com forte contribuição ao lucro." },
                { title: "Cartões", desc: "Ampla base de cartões de crédito e débito com receita recorrente de tarifas." },
                { title: "Bradesco BBI", desc: "Banco de investimento com atuação forte em M&A e ofertas." },
                { title: "Digital (Next)", desc: "Banco digital 100% mobile para atender público jovem." },
              ].map((item) => (
                <Card key={item.title} className="hover:shadow-lg transition-all hover:-translate-y-0.5"><CardContent className="p-5"><h3 className="font-bold text-foreground mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><TrendingUp className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Vale a pena investir em BBDC4 em 2026?</h2></div>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md"><CardHeader><CardTitle className="text-xl">Vantagens</CardTitle></CardHeader><CardContent><ul className="space-y-2.5">{["Dividendos e JCP mensais","Preço historicamente descontado","Setor bancário lucrativo e regulado","Bradesco Seguros como diferencial"].map((i) => (<li key={i} className="flex items-start gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>{i}</span></li>))}</ul></CardContent></Card>
              <Card className="border-2 hover:border-primary/40 transition-colors"><CardHeader><CardTitle className="text-xl">Pontos de atenção</CardTitle></CardHeader><CardContent><ul className="space-y-2.5">{["Perda de share para bancos digitais (Nubank, Inter)","Inadimplência elevada em ciclos","Reestruturação em curso","Baixo crescimento de lucro nos últimos anos"].map((i) => (<li key={i} className="flex items-start gap-2 text-sm"><AlertTriangle className="w-4 h-4 text-yellow-600 shrink-0 mt-0.5" /><span>{i}</span></li>))}</ul></CardContent></Card>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><Clock className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Como comprar ações do Bradesco (BBDC4)</h2></div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">Para <strong>investir em BBDC4</strong>, abra conta em qualquer corretora brasileira (XP, Rico, BTG, Nubank, Inter, Clear) e envie a ordem pelo home broker. Também é possível investir em BBDC3 (ordinária, com direito a voto) ou em ADRs BBD listadas na NYSE.</p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><Sparkles className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Perguntas frequentes sobre o Bradesco (BBDC4)</h2></div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1"><AccordionTrigger className="text-left">Qual o preço da BBDC4 hoje?</AccordionTrigger><AccordionContent className="text-muted-foreground">O preço em tempo real está no gráfico acima, atualizado direto da B3.</AccordionContent></AccordionItem>
              <AccordionItem value="q2"><AccordionTrigger className="text-left">Qual a diferença entre BBDC3 e BBDC4?</AccordionTrigger><AccordionContent className="text-muted-foreground">BBDC3 são ações ordinárias (ON) com direito a voto. BBDC4 são preferenciais (PN), sem voto mas com prioridade em dividendos e maior liquidez.</AccordionContent></AccordionItem>
              <AccordionItem value="q3"><AccordionTrigger className="text-left">Bradesco paga bons dividendos?</AccordionTrigger><AccordionContent className="text-muted-foreground">Sim. O Bradesco distribui dividendos e Juros sobre Capital Próprio (JCP) mensalmente, com dividend yield histórico entre 5% e 8% ao ano.</AccordionContent></AccordionItem>
              <AccordionItem value="q4"><AccordionTrigger className="text-left">Vale a pena investir em Bradesco em 2026?</AccordionTrigger><AccordionContent className="text-muted-foreground">O papel está historicamente descontado (P/VP abaixo de 1), com bom yield. É atrativo para dividendos, mas o crescimento é limitado pela concorrência dos bancos digitais.</AccordionContent></AccordionItem>
              <AccordionItem value="q5"><AccordionTrigger className="text-left">Como funciona o JCP do Bradesco?</AccordionTrigger><AccordionContent className="text-muted-foreground">O JCP é uma forma de remuneração aos acionistas com desconto de 15% de IR na fonte. É pago mensalmente pelo Bradesco, gerando renda passiva regular.</AccordionContent></AccordionItem>
              <AccordionItem value="q6"><AccordionTrigger className="text-left">Como declarar BBDC4 no imposto de renda?</AccordionTrigger><AccordionContent className="text-muted-foreground">Ações vão em Bens e Direitos (código 31). Vendas acima de R$ 20.000/mês pagam 15% sobre o lucro. Dividendos são isentos e JCP já vem com IR retido na fonte.</AccordionContent></AccordionItem>
            </Accordion>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default BradescoHoje;
