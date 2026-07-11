import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import TradingViewWidget from "@/components/TradingViewWidget";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle2,
  AlertTriangle,
  BarChart3,
  Sparkles,
  Building2,
  Globe2,
  Zap,
  Coffee,
} from "lucide-react";

const MonsterBeverageHoje = () => {
  return (
    <Layout>
      <SEO path="/acoes/monster" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Zap className="w-4 h-4" />
            AÇÕES · MONSTER BEVERAGE · NASDAQ: MNST
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação da Monster Beverage (MNST) Hoje
            <span className="block text-primary mt-2">Preço em Tempo Real, Energéticos e Parceria com Coca-Cola</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe a <strong>cotação da Monster Beverage (NASDAQ: MNST)</strong> em tempo real, líder
            global no mercado de <strong>bebidas energéticas</strong> ao lado da Red Bull, com forte
            distribuição via Coca-Cola Company (KO). Veja gráfico, análise e como investir.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>Monster Beverage Corp. (MNST) — Gráfico em Tempo Real</span>
                </div>
                <Badge variant="secondary">NASDAQ · Consumer · Bebidas Energéticas</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <TradingViewWidget symbol="NASDAQ:MNST" height="384" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Building2, label: "Empresa", value: "Monster Beverage Corp." },
            { icon: Globe2, label: "Sede", value: "Corona · Califórnia · EUA" },
            { icon: Coffee, label: "Setor", value: "Consumer · Bebidas" },
            { icon: DollarSign, label: "Ticker", value: "NASDAQ:MNST" },
          ].map((item) => (
            <Card key={item.label} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">{item.label}</div>
                  <div className="font-semibold text-foreground">{item.value}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <article className="space-y-12 max-w-4xl mx-auto">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Quanto vale a ação da Monster (MNST) hoje?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              A <strong className="text-foreground">Monster Beverage</strong> é uma das ações mais
              valorizadas da história da bolsa americana — subiu mais de 100.000% desde os anos 90. Domina
              o mercado de energéticos com Monster Energy, Reign, Bang (adquirida) e Predator, distribuídos
              globalmente via Coca-Cola Company. A cotação da MNST hoje reflete crescimento internacional,
              margens elevadas e recompras de ações.
            </p>
            <Card className="border-l-4 border-l-primary bg-primary/5 my-6">
              <CardContent className="p-5 flex gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  <strong>Destaque:</strong> a <strong>Coca-Cola detém cerca de 20% da MNST</strong> desde
                  2015 e é a distribuidora exclusiva em vários mercados internacionais.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Principais marcas e mercados
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Monster Energy", desc: "Marca principal, líder global em bebidas energéticas junto com Red Bull." },
                { title: "Reign & Bang", desc: "Foco em performance e fitness, com forte crescimento entre atletas." },
                { title: "Predator & Fury", desc: "Marcas de valor acessível para mercados emergentes." },
                { title: "Java Monster", desc: "Linha de café energético com leite, competindo com Starbucks RTD." },
                { title: "Alcoólicos (Beast)", desc: "Entrada no mercado de bebidas alcoólicas com Nasty Beast Hard Tea." },
                { title: "Coca-Cola KO", desc: "Distribuição mundial via sistema Coca-Cola desde 2015." },
              ].map((item) => (
                <Card key={item.title} className="hover:shadow-lg transition-all hover:-translate-y-0.5">
                  <CardContent className="p-5">
                    <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Vale a pena investir em Monster (MNST) em 2026?
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md">
                <CardHeader><CardTitle className="text-xl">Vantagens</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Margens brutas > 50% no setor",
                      "Distribuição global via Coca-Cola",
                      "Recompras bilionárias regulares",
                      "Categoria de energéticos ainda cresce > 6% a.a.",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-primary/40 transition-colors">
                <CardHeader><CardTitle className="text-xl">Pontos de atenção</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Não paga dividendos regulares",
                      "Custo do alumínio e insumos impacta margem",
                      "Concorrência com Red Bull, Celsius e Ghost",
                      "Regulação em torno de bebidas energéticas",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            <Card className="border-l-4 border-l-yellow-500 bg-yellow-500/5">
              <CardContent className="p-5 flex gap-3">
                <AlertTriangle className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
                <p className="text-sm md:text-base">
                  <strong>Importante:</strong> a Monster não paga dividendos — o retorno vem da valorização e
                  de programas de recompra de ações.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Como comprar ações da Monster (MNST) no Brasil
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Basta abrir conta em corretora internacional (Avenue, Nomad, Inter Global, XP US, C6 Global) e
              comprar MNST diretamente na Nasdaq. Não há BDR ativo da Monster no Brasil.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Perguntas frequentes sobre a Monster (MNST)
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1">
                <AccordionTrigger className="text-left">Quanto vale a ação da Monster Beverage hoje?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  A cotação em tempo real da MNST está no gráfico acima. Multiplique pelo dólar do dia para o valor
                  em reais.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger className="text-left">Monster paga dividendos?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Não paga dividendos regulares. O retorno é feito via valorização e recompras de ações próprias.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger className="text-left">Coca-Cola é dona da Monster?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Não é dona, mas detém cerca de 20% e é a distribuidora oficial em muitos mercados globais desde
                  2015.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger className="text-left">Monster é boa ação para longo prazo?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Historicamente é uma das melhores ações de todos os tempos. Segue com fundamentos sólidos, mas
                  cresce mais lentamente hoje que na década passada.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5">
                <AccordionTrigger className="text-left">Como comprar Monster com pouco dinheiro?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Em Avenue e Nomad você compra frações de MNST a partir de US$ 1.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q6">
                <AccordionTrigger className="text-left">Existe BDR da Monster no Brasil?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Atualmente não há BDR ativo. Para investir na MNST é necessário conta em corretora internacional.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q7">
                <AccordionTrigger className="text-left">Como declarar Monster no imposto de renda?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Ações MNST em Bens e Direitos no exterior ao custo em reais. Ganhos acima de R$ 35 mil/mês em
                  vendas são tributados em 15%.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default MonsterBeverageHoje;
