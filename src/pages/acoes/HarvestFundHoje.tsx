import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import TradingViewWidget from "@/components/TradingViewWidget";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PiggyBank, Building2, Globe2, DollarSign, BarChart3, Sparkles, TrendingUp, CheckCircle2, AlertTriangle, Clock } from "lucide-react";

const HarvestFundHoje = () => {
  return (
    <Layout>
      <SEO path="/acoes/harvest-fund" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <PiggyBank className="w-4 h-4" /> ASSET MANAGEMENT · HARVEST FUND
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação Harvest Fund Hoje
            <span className="block text-primary mt-2">Gestora Chinesa, ETFs e Fundos em Tempo Real</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça a <strong>Harvest Fund Management</strong>, uma das <strong>maiores gestoras de
            fundos da China</strong>, com mais de US$ 200 bilhões sob gestão. Veja como acessar seus
            ETFs, fundos e cotas relacionadas em tempo real.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2"><BarChart3 className="w-5 h-5 text-primary" /><span>Harvest / CSI 300 (Proxy) — Gráfico em Tempo Real</span></div>
                <Badge variant="secondary">Asset Management · China</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4"><div className="h-96"><TradingViewWidget symbol="SSE:510300" height="384" /></div></CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Building2, label: "Empresa", value: "Harvest Fund Management" },
            { icon: Globe2, label: "Sede", value: "Pequim · China" },
            { icon: PiggyBank, label: "Setor", value: "Gestão de Ativos" },
            { icon: DollarSign, label: "AUM", value: "US$ 200+ bilhões" },
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
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><DollarSign className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">O que é a Harvest Fund Management?</h2></div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              A <strong className="text-foreground">Harvest Fund Management</strong>, fundada em 1999,
              é uma das <strong>Big Four gestoras chinesas</strong>, com atuação em fundos mútuos,
              ETFs, previdência e mandatos institucionais. É reconhecida pelos <strong>ETFs
              indexados ao CSI 300</strong> e por parcerias globais (Deutsche Bank foi acionista até 2020).
            </p>
            <Card className="border-l-4 border-l-primary bg-primary/5 my-6"><CardContent className="p-5 flex gap-3"><Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" /><p className="text-sm md:text-base text-foreground"><strong>Destaque:</strong> a Harvest lançou um dos primeiros <strong>ETFs QDII</strong>, permitindo investidores chineses acessarem mercados internacionais.</p></CardContent></Card>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><PiggyBank className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Produtos e áreas de atuação</h2></div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "ETFs China A", desc: "Rastreiam CSI 300, CSI 500 e setoriais chineses." },
                { title: "Fundos Mútuos", desc: "Ações, renda fixa e balanceados para varejo chinês." },
                { title: "QDII", desc: "Fundos que investem fora da China para clientes chineses." },
                { title: "Previdência", desc: "Gestão de aposentadoria corporativa (Enterprise Annuity)." },
                { title: "Institucional", desc: "Mandatos para seguradoras, soberanos e endowments." },
                { title: "Alternativos", desc: "Real estate, private equity e infraestrutura." },
              ].map((item) => (
                <Card key={item.title} className="hover:shadow-lg transition-all hover:-translate-y-0.5"><CardContent className="p-5"><h3 className="font-bold text-foreground mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><TrendingUp className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Vale a pena investir em produtos Harvest?</h2></div>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md"><CardHeader><CardTitle className="text-xl">Vantagens</CardTitle></CardHeader><CardContent><ul className="space-y-2.5">{["Exposição ao mercado chinês","Escala e reputação","ETFs de baixo custo","Diversificação global via QDII"].map((i) => (<li key={i} className="flex items-start gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>{i}</span></li>))}</ul></CardContent></Card>
              <Card className="border-2 hover:border-primary/40 transition-colors"><CardHeader><CardTitle className="text-xl">Pontos de atenção</CardTitle></CardHeader><CardContent><ul className="space-y-2.5">{["Acesso restrito para estrangeiros","Regulação chinesa","Volatilidade do mercado A","Risco cambial (yuan)"].map((i) => (<li key={i} className="flex items-start gap-2 text-sm"><AlertTriangle className="w-4 h-4 text-yellow-600 shrink-0 mt-0.5" /><span>{i}</span></li>))}</ul></CardContent></Card>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><Clock className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Como investir na China do Brasil</h2></div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">A Harvest é uma <strong>gestora privada não listada em bolsa</strong>. O jeito prático para brasileiros ganharem exposição à China é via ETFs internacionais como <strong>MCHI (iShares MSCI China), FXI (Large Cap China) ou KWEB (China Internet)</strong>, negociados nos EUA e acessíveis por corretoras como Avenue, Nomad e Interactive Brokers.</p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><Sparkles className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Perguntas frequentes sobre a Harvest Fund</h2></div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1"><AccordionTrigger className="text-left">A Harvest Fund é listada em bolsa?</AccordionTrigger><AccordionContent className="text-muted-foreground">Não. A gestora é privada. O que se pode negociar são as cotas dos seus ETFs e fundos, principalmente na China continental e Hong Kong.</AccordionContent></AccordionItem>
              <AccordionItem value="q2"><AccordionTrigger className="text-left">Qual o tamanho da Harvest?</AccordionTrigger><AccordionContent className="text-muted-foreground">Harvest é uma das Big Four gestoras chinesas, com mais de US$ 200 bilhões em ativos sob gestão (AUM).</AccordionContent></AccordionItem>
              <AccordionItem value="q3"><AccordionTrigger className="text-left">Como brasileiros investem em ETFs chineses?</AccordionTrigger><AccordionContent className="text-muted-foreground">Via corretoras internacionais (Avenue, Nomad, Interactive Brokers) comprando ETFs de exposição China como MCHI, FXI, KWEB nos EUA em dólares.</AccordionContent></AccordionItem>
              <AccordionItem value="q4"><AccordionTrigger className="text-left">O que é o CSI 300?</AccordionTrigger><AccordionContent className="text-muted-foreground">É o principal índice de ações da China continental (mercado A), composto pelas 300 maiores empresas listadas em Shanghai e Shenzhen.</AccordionContent></AccordionItem>
              <AccordionItem value="q5"><AccordionTrigger className="text-left">É seguro investir em fundos chineses?</AccordionTrigger><AccordionContent className="text-muted-foreground">Envolve risco regulatório, cambial e geopolítico. Recomenda-se limitar a exposição como parte diversificada de uma carteira global.</AccordionContent></AccordionItem>
            </Accordion>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default HarvestFundHoje;
