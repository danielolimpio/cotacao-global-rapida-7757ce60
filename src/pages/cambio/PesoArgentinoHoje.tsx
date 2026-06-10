import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import TradingViewWidget from "@/components/TradingViewWidget";
import UniversalConverter from "@/components/UniversalConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Flag,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Landmark,
  BarChart3,
  Globe2,
  Sparkles,
  Banknote,
  Plane,
  ShieldAlert,
} from "lucide-react";

const PesoArgentinoHoje = () => {
  return (
    <Layout>
      <SEO path="/cambio/peso-argentino-hoje" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Flag className="w-4 h-4" />
            CÂMBIO · ARS · América Latina
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação do Peso Argentino (ARS) Hoje
            <span className="block text-primary mt-2">Valor em Tempo Real</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe o valor do Peso Argentino, moeda oficial da Argentina, com gráficos
            atualizados, conversor e análise completa do câmbio oficial e paralelo.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>ARS/USD — Gráfico em Tempo Real</span>
                </div>
                <Badge variant="secondary">FX · Mercosul</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <TradingViewWidget symbol="ARSUSD" height="384" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Globe2, label: "País", value: "Argentina" },
            { icon: Landmark, label: "Emissor", value: "BCRA" },
            { icon: Banknote, label: "Símbolo", value: "$ (ARS)" },
            { icon: Clock, label: "Mercado", value: "Seg–Sex" },
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

        <div className="mb-12">
          <UniversalConverter assetType="fiat" assetSymbol="ARS" assetName="Peso Argentino" />
        </div>

        <article className="space-y-12 max-w-4xl mx-auto">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Quanto vale 1 Peso Argentino hoje?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              O Peso Argentino (ARS) é a moeda oficial da Argentina, emitida pelo{" "}
              <strong className="text-foreground">Banco Central de la República Argentina (BCRA)</strong>.
              Historicamente é uma das moedas com maior desvalorização no mundo, marcada por
              períodos de hiperinflação e controles cambiais.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Existe uma diferença significativa entre o <strong className="text-foreground">câmbio oficial</strong> e
              o chamado <strong className="text-foreground">"dólar blue"</strong> (paralelo), o que cria
              múltiplas cotações no dia a dia do argentino e do turista.
            </p>

            <Card className="border-l-4 border-l-primary bg-primary/5 my-6">
              <CardContent className="p-5 flex gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  <strong>Dica:</strong> ao viajar para a Argentina, observe sempre a cotação do
                  <strong> dólar blue</strong> e do <strong>dólar MEP</strong>, que podem oferecer
                  poder de compra muito superior ao câmbio oficial.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Landmark className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                O que influencia a cotação do Peso Argentino?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              A volatilidade do ARS é influenciada por um conjunto único de fatores
              macroeconômicos e políticos:
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                {
                  icon: TrendingUp,
                  title: "Inflação Crônica",
                  desc: "A Argentina convive com índices de inflação anuais entre os mais altos do mundo.",
                },
                {
                  icon: ShieldAlert,
                  title: "Controles Cambiais",
                  desc: "O 'cepo cambial' restringe a compra de dólares, criando o mercado paralelo.",
                },
                {
                  icon: Landmark,
                  title: "Dívida & FMI",
                  desc: "Acordos com o FMI e a política do BCRA definem o ritmo de desvalorização.",
                },
              ].map((item) => (
                <Card key={item.title} className="hover:shadow-lg transition-all hover:-translate-y-0.5">
                  <CardContent className="p-5">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
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
                <Plane className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Viajando para Buenos Aires: como levar dinheiro
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              A Argentina é um dos destinos onde a forma de pagamento faz enorme diferença no
              custo da viagem. Conheça as principais opções:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Dólar em Espécie</CardTitle>
                    <Badge className="bg-primary/10 text-primary border-primary/20">Recomendado</Badge>
                  </div>
                  <h3 className="text-sm font-semibold text-muted-foreground mt-1">
                    Troque por pesos no destino
                  </h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Câmbio paralelo (blue) muito mais vantajoso",
                      "Use casas de câmbio confiáveis em Buenos Aires",
                      "Evite trocar tudo de uma vez",
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
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Cartão Internacional</CardTitle>
                    <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20">Dólar MEP</Badge>
                  </div>
                  <h3 className="text-sm font-semibold text-muted-foreground mt-1">
                    Cobrança em câmbio diferenciado
                  </h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Conversão pelo dólar MEP (próximo ao blue)",
                      "Pagamento aceito em hotéis e restaurantes",
                      "Atenção ao IOF de 3,5% no Brasil",
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
                  <strong>Atenção:</strong> nunca troque dinheiro em ruas movimentadas como a
                  Calle Florida sem indicação confiável — há risco de notas falsas.
                </p>
              </CardContent>
            </Card>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default PesoArgentinoHoje;
