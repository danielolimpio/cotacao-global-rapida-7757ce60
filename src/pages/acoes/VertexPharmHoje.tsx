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
  FlaskConical,
  HeartPulse,
} from "lucide-react";

const VertexPharmHoje = () => {
  return (
    <Layout>
      <SEO path="/acoes/vertex" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <FlaskConical className="w-4 h-4" />
            AÇÕES · VERTEX PHARMACEUTICALS · NASDAQ: VRTX
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação da Vertex Pharmaceuticals (VRTX) Hoje
            <span className="block text-primary mt-2">Preço em Tempo Real, Fibrose Cística, CRISPR e Pipeline</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe a <strong>cotação da Vertex Pharmaceuticals (NASDAQ: VRTX)</strong> em tempo real,
            líder global em <strong>medicamentos para fibrose cística</strong> e pioneira em terapia
            gênica com CRISPR (Casgevy). Veja gráfico, pipeline e como investir.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>Vertex Pharmaceuticals (VRTX) — Gráfico em Tempo Real</span>
                </div>
                <Badge variant="secondary">NASDAQ · Biotecnologia · Genética</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <TradingViewWidget symbol="NASDAQ:VRTX" height="384" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Building2, label: "Empresa", value: "Vertex Pharmaceuticals" },
            { icon: Globe2, label: "Sede", value: "Boston · EUA" },
            { icon: HeartPulse, label: "Setor", value: "Biotech · Fibrose Cística · CRISPR" },
            { icon: DollarSign, label: "Ticker", value: "NASDAQ:VRTX" },
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
                Quanto vale a ação da Vertex (VRTX) hoje?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              A <strong className="text-foreground">Vertex Pharmaceuticals</strong>, fundada em 1989, é
              líder global absoluta em <strong>medicamentos para Fibrose Cística</strong> com o portfólio
              Kaftrio/Trikafta, e está expandindo agressivamente para <strong>dor não opioide (suzetrigina)</strong>,
              diabetes tipo 1 (VX-880) e terapia gênica com <strong>Casgevy (CRISPR)</strong>, primeira terapia
              CRISPR aprovada no mundo.
            </p>
            <Card className="border-l-4 border-l-primary bg-primary/5 my-6">
              <CardContent className="p-5 flex gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  <strong>Destaque:</strong> a Vertex é uma das poucas biotechs com <strong>margens de lucro
                  acima de 40%</strong>, fluxo de caixa positivo consistente e monopólio efetivo na sua principal
                  categoria terapêutica.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <FlaskConical className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Principais produtos e pipeline
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Trikafta / Kaftrio", desc: "Blockbuster para fibrose cística, elegível a ~90% dos pacientes globais." },
                { title: "Casgevy", desc: "1ª terapia CRISPR aprovada no mundo (anemia falciforme e beta-talassemia)." },
                { title: "Journavx (suzetrigina)", desc: "Analgésico não opioide para dor aguda, potencial mercado bilionário." },
                { title: "VX-880 / Diabetes T1", desc: "Terapia celular para restaurar produção de insulina — em estudos avançados." },
                { title: "Alyftrek (nova geração)", desc: "Nova formulação para fibrose cística com dosagem 1x/dia." },
                { title: "Pesquisa em doenças renais", desc: "Programas para APOL1 nephropathy e outras condições genéticas raras." },
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
                Vale a pena investir em Vertex (VRTX) em 2026?
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md">
                <CardHeader><CardTitle className="text-xl">Vantagens</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Monopólio efetivo em fibrose cística",
                      "Pipeline diversificado (dor, diabetes, CRISPR)",
                      "Margens líquidas acima de 30-40%",
                      "Balanço com >US$ 10 bi em caixa",
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
                      "Dependência da franquia de CF (>85% da receita)",
                      "Não paga dividendos",
                      "Risco regulatório e de ensaios clínicos",
                      "Concorrência futura em CRISPR e dor",
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
                  <strong>Importante:</strong> biotechs têm volatilidade alta em torno de eventos clínicos. Notícias
                  de FDA ou dados de fase 3 podem gerar variações de dois dígitos em um único dia.
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
                Como comprar ações da Vertex (VRTX) no Brasil
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Basta abrir conta em corretora internacional (Avenue, Nomad, Inter Global, XP US, C6 Global) e
              comprar VRTX diretamente na Nasdaq. Não há BDR ativo da Vertex na B3.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Perguntas frequentes sobre a Vertex (VRTX)
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1">
                <AccordionTrigger className="text-left">Quanto vale a ação da Vertex Pharmaceuticals hoje?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  A cotação em tempo real da VRTX está no gráfico acima. Multiplique pelo dólar do dia para o valor
                  em reais.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger className="text-left">Vertex paga dividendos?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Não. A Vertex reinveste 100% do fluxo de caixa em pesquisa e desenvolvimento, aquisições e
                  recompras.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger className="text-left">O que é a Casgevy?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Casgevy é a primeira terapia CRISPR aprovada no mundo, desenvolvida pela Vertex em parceria com a
                  CRISPR Therapeutics, para tratamento de anemia falciforme e beta-talassemia.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger className="text-left">Vertex é boa ação para longo prazo?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Analistas consideram sim, pela liderança em CF, pipeline em CRISPR/dor/diabetes e altas margens.
                  Requer tolerância à volatilidade de biotech.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5">
                <AccordionTrigger className="text-left">Como comprar Vertex com pouco dinheiro?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Em Avenue e Nomad você compra frações de VRTX a partir de US$ 1.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q6">
                <AccordionTrigger className="text-left">Existe BDR da Vertex no Brasil?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Atualmente não há BDR ativo. Para investir na VRTX é necessário conta em corretora internacional.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q7">
                <AccordionTrigger className="text-left">Como declarar Vertex no imposto de renda?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Ações VRTX em Bens e Direitos no exterior ao custo em reais. Ganhos acima de R$ 35 mil/mês em
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

export default VertexPharmHoje;
