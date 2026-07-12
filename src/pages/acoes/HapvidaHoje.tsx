import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import TradingViewWidget from "@/components/TradingViewWidget";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HeartPulse, Building2, Globe2, DollarSign, BarChart3, Sparkles, TrendingUp, CheckCircle2, AlertTriangle, Clock } from "lucide-react";

const HapvidaHoje = () => {
  return (
    <Layout>
      <SEO path="/acoes/hapvida" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <HeartPulse className="w-4 h-4" /> AÇÕES · HAPVIDA · B3: HAPV3
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação da Hapvida (HAPV3) Hoje
            <span className="block text-primary mt-2">Preço da Ação em Tempo Real, Análise e Perspectivas</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe a <strong>cotação da Hapvida (B3: HAPV3)</strong> em tempo real, a
            <strong> maior operadora de planos de saúde verticalizada do Brasil</strong>, resultado da
            fusão com a NotreDame Intermédica. Veja preço, histórico e como investir no gigante da
            saúde brasileira.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2"><BarChart3 className="w-5 h-5 text-primary" /><span>Hapvida (HAPV3) — Gráfico em Tempo Real</span></div>
                <Badge variant="secondary">B3 · Saúde · Novo Mercado</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4"><div className="h-96"><TradingViewWidget symbol="BMFBOVESPA:HAPV3" height="384" /></div></CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Building2, label: "Empresa", value: "Hapvida NotreDame" },
            { icon: Globe2, label: "Sede", value: "Fortaleza · Brasil" },
            { icon: HeartPulse, label: "Setor", value: "Saúde · Planos Médicos" },
            { icon: DollarSign, label: "Ticker", value: "B3:HAPV3" },
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
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><DollarSign className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Quanto vale a ação da Hapvida hoje?</h2></div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              A <strong className="text-foreground">Hapvida NotreDame Intermédica (HAPV3)</strong> nasceu em 2022
              da fusão entre Hapvida e GNDI, criando a maior operadora <strong>verticalizada de saúde do Brasil</strong>,
              com mais de <strong>16 milhões de beneficiários</strong>, 87 hospitais próprios, 78 prontos-socorros
              e mais de 300 clínicas.
            </p>
            <Card className="border-l-4 border-l-primary bg-primary/5 my-6"><CardContent className="p-5 flex gap-3"><Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" /><p className="text-sm md:text-base text-foreground"><strong>Destaque:</strong> a verticalização (rede própria) permite à Hapvida operar com sinistralidade menor que a concorrência, um dos maiores diferenciais competitivos do setor.</p></CardContent></Card>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><HeartPulse className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Modelo de negócio da Hapvida</h2></div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Planos de Saúde", desc: "Principal receita — planos individuais, familiares e coletivos empresariais." },
                { title: "Rede Própria", desc: "Hospitais, clínicas e prontos-socorros reduzem custos e melhoram margem." },
                { title: "Odontologia", desc: "Planos dentários com forte crescimento em vidas cobertas." },
                { title: "Diagnóstico", desc: "Laboratórios e centros de imagem integrados à operação verticalizada." },
                { title: "Expansão Regional", desc: "Presença consolidada no Nordeste e Sudeste, crescendo em Sul e Centro-Oeste." },
                { title: "Sinergia Pós-Fusão", desc: "Redução de custos e ganhos operacionais em curso desde a fusão HAPV+GNDI." },
              ].map((item) => (
                <Card key={item.title} className="hover:shadow-lg transition-all hover:-translate-y-0.5"><CardContent className="p-5"><h3 className="font-bold text-foreground mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><TrendingUp className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Vale a pena investir em Hapvida (HAPV3) em 2026?</h2></div>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md"><CardHeader><CardTitle className="text-xl">Vantagens</CardTitle></CardHeader><CardContent><ul className="space-y-2.5">{["Maior operadora verticalizada do país","Sinistralidade menor que concorrência","Setor essencial e resiliente","Sinergias da fusão HAPV+GNDI em curso"].map((i) => (<li key={i} className="flex items-start gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>{i}</span></li>))}</ul></CardContent></Card>
              <Card className="border-2 hover:border-primary/40 transition-colors"><CardHeader><CardTitle className="text-xl">Pontos de atenção</CardTitle></CardHeader><CardContent><ul className="space-y-2.5">{["Ações caíram forte desde a fusão","Endividamento elevado","Regulação da ANS afeta reajustes","Sinistralidade ainda pressionada"].map((i) => (<li key={i} className="flex items-start gap-2 text-sm"><AlertTriangle className="w-4 h-4 text-yellow-600 shrink-0 mt-0.5" /><span>{i}</span></li>))}</ul></CardContent></Card>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><Clock className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Como comprar ações da Hapvida (HAPV3)</h2></div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">Para <strong>investir em HAPV3</strong>, abra conta em qualquer corretora brasileira (XP, Rico, BTG, Nubank, Inter, Clear) e envie ordem de compra pelo home broker. As ações são negociadas na B3 no segmento Novo Mercado, com liquidez alta e lote padrão de 1 ação.</p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-primary/10"><Sparkles className="w-6 h-6 text-primary" /></div><h2 className="text-2xl md:text-3xl font-bold text-foreground">Perguntas frequentes sobre a Hapvida (HAPV3)</h2></div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1"><AccordionTrigger className="text-left">Qual o preço da HAPV3 hoje?</AccordionTrigger><AccordionContent className="text-muted-foreground">O preço em tempo real da Hapvida está no gráfico acima, atualizado direto da B3.</AccordionContent></AccordionItem>
              <AccordionItem value="q2"><AccordionTrigger className="text-left">Hapvida paga dividendos?</AccordionTrigger><AccordionContent className="text-muted-foreground">Sim, mas o payout é modesto — a companhia prioriza reinvestimento em expansão e redução da dívida pós-fusão.</AccordionContent></AccordionItem>
              <AccordionItem value="q3"><AccordionTrigger className="text-left">Por que HAPV3 caiu tanto desde 2022?</AccordionTrigger><AccordionContent className="text-muted-foreground">A alta da sinistralidade pós-pandemia, taxa Selic elevada, endividamento da fusão e ceticismo com a integração pressionaram o papel. Muitos veem hoje como oportunidade de longo prazo.</AccordionContent></AccordionItem>
              <AccordionItem value="q4"><AccordionTrigger className="text-left">Qual a diferença entre Hapvida e NotreDame Intermédica?</AccordionTrigger><AccordionContent className="text-muted-foreground">Ambas se fundiram em 2022 formando a Hapvida NotreDame Intermédica (HAPV3). A NotreDame deixou de existir como companhia listada separada.</AccordionContent></AccordionItem>
              <AccordionItem value="q5"><AccordionTrigger className="text-left">Vale a pena comprar HAPV3 para longo prazo?</AccordionTrigger><AccordionContent className="text-muted-foreground">Analistas veem potencial de valorização com o sucesso da integração, redução da sinistralidade e envelhecimento populacional. Setor de saúde tende a crescer estruturalmente.</AccordionContent></AccordionItem>
              <AccordionItem value="q6"><AccordionTrigger className="text-left">Como declarar HAPV3 no imposto de renda?</AccordionTrigger><AccordionContent className="text-muted-foreground">Ações vão em Bens e Direitos (código 31). Vendas acima de R$ 20.000/mês pagam 15% sobre o lucro. Dividendos são isentos no Brasil.</AccordionContent></AccordionItem>
            </Accordion>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default HapvidaHoje;
