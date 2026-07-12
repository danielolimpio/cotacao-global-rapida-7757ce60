import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import TradingViewWidget from "@/components/TradingViewWidget";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Landmark, Building2, Globe2, DollarSign, BarChart3, Sparkles, TrendingUp, CheckCircle2, AlertTriangle, Clock } from "lucide-react";

const BankOfChinaHoje = () => {
  return (
    <Layout>
      <SEO path="/acoes/bank-of-china" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Landmark className="w-4 h-4" /> AÇÕES · BANK OF CHINA · SSE: 601988 · HKEX: 3988
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação do Bank of China Hoje
            <span className="block text-primary mt-2">Preço da Ação em Tempo Real, Dividendos e Análise</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe a <strong>cotação do Bank of China (SSE: 601988 / HKEX: 3988)</strong> em tempo real,
            um dos <strong>quatro maiores bancos estatais da China</strong> e uma das maiores instituições
            financeiras do mundo por ativos. Veja preço, dividendos e análise.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2"><BarChart3 className="w-5 h-5 text-primary" /><span>Bank of China (601988) — Gráfico em Tempo Real</span></div>
                <Badge variant="secondary">Shanghai/HK · Big Four China</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4"><div className="h-96"><TradingViewWidget symbol="SSE:601988" height="384" /></div></CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Building2, label: "Empresa", value: "Bank of China Ltd." },
            { icon: Globe2, label: "Sede", value: "Pequim · China" },
            { icon: Landmark, label: "Setor", value: "Bancos · Estatal" },
            { icon: DollarSign, label: "Ticker", value: "601988.SS · 3988.HK" },
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
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><DollarSign className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Quanto vale a ação do Bank of China hoje?</h2></div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              O <strong className="text-foreground">Bank of China (BoC)</strong>, fundado em 1912, é o
              <strong> quarto maior banco da China</strong> e um dos maiores do mundo em ativos totais.
              É um dos <strong>"Big Four" estatais chineses</strong> (junto com ICBC, CCB e ABC), com
              operações em mais de 60 países e forte atuação em comércio internacional, câmbio e
              financiamento da Nova Rota da Seda (Belt & Road Initiative).
            </p>
            <Card className="border-l-4 border-l-primary bg-primary/5 my-6"><CardContent className="p-5 flex gap-3"><Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" /><p className="text-sm md:text-base text-foreground"><strong>Destaque:</strong> o Bank of China é considerado um dos bancos <strong>Systemically Important (G-SIB)</strong> pelo Financial Stability Board, com <strong>dividend yield entre 7% e 9%</strong>.</p></CardContent></Card>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><Landmark className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Áreas de atuação do Bank of China</h2></div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Varejo China", desc: "Crédito, cartões, hipotecas e investimentos para milhões de clientes chineses." },
                { title: "Corporate Banking", desc: "Financiamento a grandes empresas chinesas e multinacionais." },
                { title: "Comércio Exterior", desc: "Historicamente o banco especialista em câmbio e trade finance da China." },
                { title: "Belt & Road", desc: "Financia projetos de infraestrutura globais da iniciativa chinesa." },
                { title: "Operações Globais", desc: "Presença em 60+ países, incluindo Brasil (Bank of China Brasil)." },
                { title: "BOC Aviation", desc: "Subsidiária de leasing de aeronaves, uma das maiores do mundo." },
              ].map((item) => (
                <Card key={item.title} className="hover:shadow-lg transition-all hover:-translate-y-0.5"><CardContent className="p-5"><h3 className="font-bold text-foreground mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><TrendingUp className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Vale a pena investir em Bank of China em 2026?</h2></div>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md"><CardHeader><CardTitle className="text-xl">Vantagens</CardTitle></CardHeader><CardContent><ul className="space-y-2.5">{["Alto dividend yield (7% a 9%)","P/L historicamente baixo","Banco Sistemicamente Importante (G-SIB)","Suporte implícito do governo chinês"].map((i) => (<li key={i} className="flex items-start gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>{i}</span></li>))}</ul></CardContent></Card>
              <Card className="border-2 hover:border-primary/40 transition-colors"><CardHeader><CardTitle className="text-xl">Pontos de atenção</CardTitle></CardHeader><CardContent><ul className="space-y-2.5">{["Exposição ao setor imobiliário chinês em crise","Governança estatal (Estado é controlador)","Risco geopolítico EUA-China","Baixo crescimento e ADR delisted nos EUA"].map((i) => (<li key={i} className="flex items-start gap-2 text-sm"><AlertTriangle className="w-4 h-4 text-yellow-600 shrink-0 mt-0.5" /><span>{i}</span></li>))}</ul></CardContent></Card>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><Clock className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Como comprar ações do Bank of China no Brasil</h2></div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">Para <strong>investir em Bank of China</strong>, o caminho mais acessível é via ações H (Hong Kong) com ticker <strong>3988.HK</strong> em corretoras internacionais como Interactive Brokers. As ações A na SSE (601988) exigem contas específicas com acesso ao Stock Connect. Outra opção é buscar ETFs chineses (MCHI, KWEB) que incluam o BoC.</p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><Sparkles className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Perguntas frequentes sobre o Bank of China</h2></div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1"><AccordionTrigger className="text-left">Qual o preço do Bank of China hoje?</AccordionTrigger><AccordionContent className="text-muted-foreground">O preço em tempo real está no gráfico acima. Ações A (601988) são cotadas em yuan em Shanghai; H (3988) em dólares de Hong Kong.</AccordionContent></AccordionItem>
              <AccordionItem value="q2"><AccordionTrigger className="text-left">Bank of China paga bons dividendos?</AccordionTrigger><AccordionContent className="text-muted-foreground">Sim. O BoC tem um dos maiores dividend yields entre bancos globais, historicamente entre 7% e 9% ao ano, pago semestralmente.</AccordionContent></AccordionItem>
              <AccordionItem value="q3"><AccordionTrigger className="text-left">Qual a diferença entre 601988.SS e 3988.HK?</AccordionTrigger><AccordionContent className="text-muted-foreground">601988.SS são ações A negociadas em Shanghai em yuan (para investidores chineses/QFII). 3988.HK são ações H em Hong Kong em HKD, acessíveis a estrangeiros.</AccordionContent></AccordionItem>
              <AccordionItem value="q4"><AccordionTrigger className="text-left">É seguro investir em bancos chineses?</AccordionTrigger><AccordionContent className="text-muted-foreground">Bancos estatais chineses têm suporte implícito do governo, mas enfrentam riscos de exposição imobiliária, controle estatal e tensão geopolítica. Adequado apenas para investidores com apetite a risco emergente.</AccordionContent></AccordionItem>
              <AccordionItem value="q5"><AccordionTrigger className="text-left">Como declarar ações do Bank of China no IR?</AccordionTrigger><AccordionContent className="text-muted-foreground">Ações vão em Bens e Direitos ao custo em reais no exterior. Dividendos entram no carnê-leão. Tributação segue as regras de investimentos internacionais no Brasil.</AccordionContent></AccordionItem>
            </Accordion>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default BankOfChinaHoje;
