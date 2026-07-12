import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import TradingViewWidget from "@/components/TradingViewWidget";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ShoppingCart, Building2, Globe2, DollarSign, BarChart3, Sparkles, TrendingUp, CheckCircle2, AlertTriangle, Clock } from "lucide-react";

const CarrefourHoje = () => {
  return (
    <Layout>
      <SEO path="/acoes/carrefour" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <ShoppingCart className="w-4 h-4" /> AÇÕES · CARREFOUR · EURONEXT: CA
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação do Carrefour Hoje
            <span className="block text-primary mt-2">Preço da Ação CA em Tempo Real, Dividendos e Como Investir</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe a <strong>cotação do Carrefour SA (EURONEXT: CA)</strong> em tempo real, uma das
            maiores redes de <strong>varejo alimentar do mundo</strong>, com operações em mais de 30
            países. Veja preço, histórico, dividendos e como investir no gigante francês do supermercado.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2"><BarChart3 className="w-5 h-5 text-primary" /><span>Carrefour SA (CA) — Gráfico em Tempo Real</span></div>
                <Badge variant="secondary">Euronext Paris · Varejo · Dividendos</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4"><div className="h-96"><TradingViewWidget symbol="EURONEXT:CA" height="384" /></div></CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Building2, label: "Empresa", value: "Carrefour SA" },
            { icon: Globe2, label: "Sede", value: "Massy · França" },
            { icon: ShoppingCart, label: "Setor", value: "Varejo · Alimentar" },
            { icon: DollarSign, label: "Ticker", value: "EURONEXT:CA" },
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
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><DollarSign className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Quanto vale a ação do Carrefour hoje?</h2></div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              O <strong className="text-foreground">Carrefour SA</strong>, fundado em 1959 na França, é a
              <strong> segunda maior rede de supermercados da Europa</strong> e uma das líderes globais em varejo alimentar.
              A cotação da ação <strong>CA na Euronext Paris</strong> reflete o desempenho de hipermercados,
              supermercados, lojas de conveniência e e-commerce alimentar em França, Espanha, Itália, Bélgica,
              Brasil (via Atacadão), Argentina e Ásia.
            </p>
            <Card className="border-l-4 border-l-primary bg-primary/5 my-6"><CardContent className="p-5 flex gap-3"><Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" /><p className="text-sm md:text-base text-foreground"><strong>Destaque:</strong> o Carrefour é considerado uma ação defensiva — o consumo de alimentos é resiliente mesmo em recessões, tornando a CA uma queridinha de dividendos na Europa.</p></CardContent></Card>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><ShoppingCart className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Modelo de negócio e operações do Carrefour</h2></div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Hipermercados", desc: "Formato tradicional em França, Espanha e Itália, ainda o principal gerador de receita." },
                { title: "Atacadão (Brasil)", desc: "Líder em cash & carry no Brasil, com forte crescimento e alta rentabilidade." },
                { title: "E-commerce", desc: "Delivery, drive-through e marketplace crescendo dois dígitos ao ano." },
                { title: "Marca Própria", desc: "Produtos Carrefour com margem superior — mais de 30% das vendas." },
                { title: "Financeiro", desc: "Banco Carrefour e cartões oferecem receita recorrente com juros." },
                { title: "Expansão Global", desc: "Presença em mais de 30 países e 14.000 lojas no mundo." },
              ].map((item) => (
                <Card key={item.title} className="hover:shadow-lg transition-all hover:-translate-y-0.5"><CardContent className="p-5"><h3 className="font-bold text-foreground mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><TrendingUp className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Vale a pena investir em Carrefour (CA) em 2026?</h2></div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">A CA é vista como <strong>ação defensiva pagadora de dividendos</strong>, com yield historicamente entre 4% e 6% ao ano, atrativa para investidores conservadores em busca de renda em euros.</p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md"><CardHeader><CardTitle className="text-xl">Vantagens</CardTitle></CardHeader><CardContent><ul className="space-y-2.5">{["Dividendos consistentes em euro","Setor defensivo e resiliente","Atacadão Brasil em forte expansão","Marca global consolidada há 65 anos"].map((i) => (<li key={i} className="flex items-start gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>{i}</span></li>))}</ul></CardContent></Card>
              <Card className="border-2 hover:border-primary/40 transition-colors"><CardHeader><CardTitle className="text-xl">Pontos de atenção</CardTitle></CardHeader><CardContent><ul className="space-y-2.5">{["Margens pressionadas pela concorrência","Exposição à inflação europeia","Concorrência do e-commerce (Amazon)","Câmbio euro/real impacta retornos no Brasil"].map((i) => (<li key={i} className="flex items-start gap-2 text-sm"><AlertTriangle className="w-4 h-4 text-yellow-600 shrink-0 mt-0.5" /><span>{i}</span></li>))}</ul></CardContent></Card>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><Clock className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Como comprar ações do Carrefour no Brasil</h2></div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">Para <strong>investir em Carrefour SA</strong>, abra conta em uma corretora internacional (Avenue, Nomad, Inter Global, XP Internacional) com acesso à Euronext Paris e compre CA em euros. Note que a antiga <strong>CRFB3 da B3 foi deslistada em 2024</strong> após OPA do controlador — hoje, o acesso é apenas pela bolsa francesa.</p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><Sparkles className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Perguntas frequentes sobre o Carrefour (CA)</h2></div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1"><AccordionTrigger className="text-left">Qual o preço da ação do Carrefour hoje?</AccordionTrigger><AccordionContent className="text-muted-foreground">O preço em tempo real está no gráfico acima, cotado em euros na Euronext Paris (ticker CA).</AccordionContent></AccordionItem>
              <AccordionItem value="q2"><AccordionTrigger className="text-left">Por que o CRFB3 saiu da B3?</AccordionTrigger><AccordionContent className="text-muted-foreground">Em 2024, o controlador francês fez OPA para fechar o capital do Carrefour Brasil e o CRFB3 foi deslistado da B3. Hoje, investe-se apenas via ação-mãe CA em Paris.</AccordionContent></AccordionItem>
              <AccordionItem value="q3"><AccordionTrigger className="text-left">Carrefour paga bons dividendos?</AccordionTrigger><AccordionContent className="text-muted-foreground">Sim. O dividend yield histórico varia entre 4% e 6% ao ano em euros, com pagamento anual em julho.</AccordionContent></AccordionItem>
              <AccordionItem value="q4"><AccordionTrigger className="text-left">Como declarar ações do Carrefour no imposto de renda?</AccordionTrigger><AccordionContent className="text-muted-foreground">Ações CA vão em Bens e Direitos ao custo em reais no exterior. Dividendos entram no carnê-leão mensal com tributação de até 27,5%.</AccordionContent></AccordionItem>
              <AccordionItem value="q5"><AccordionTrigger className="text-left">Qual a diferença entre Carrefour e Atacadão?</AccordionTrigger><AccordionContent className="text-muted-foreground">O Atacadão é a operação de cash & carry (atacarejo) do Carrefour no Brasil, sendo líder do segmento. Hoje faz parte integralmente do grupo francês após a deslistagem do CRFB3.</AccordionContent></AccordionItem>
              <AccordionItem value="q6"><AccordionTrigger className="text-left">É seguro investir em Carrefour a longo prazo?</AccordionTrigger><AccordionContent className="text-muted-foreground">Sim, é uma empresa consolidada com 65+ anos de história, presença global e setor defensivo. Ideal para carteiras de dividendos em moeda forte.</AccordionContent></AccordionItem>
            </Accordion>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default CarrefourHoje;
