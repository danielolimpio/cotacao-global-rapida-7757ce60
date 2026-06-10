import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import TradingViewWidget from "@/components/TradingViewWidget";
import CurrencyConverter from "@/components/CurrencyConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Globe2,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Landmark,
  BarChart3,
  Sparkles,
  Plane,
  Gem,
  Mountain,
} from "lucide-react";

const RandSulAfricanoHoje = () => {
  return (
    <Layout>
      <SEO path="/cambio/rand-sul-africano-hoje" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Globe2 className="w-4 h-4" />
            CÂMBIO · ZAR · África
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação do Rand Sul-Africano (ZAR) Hoje
            <span className="block text-primary mt-2">Valor em Tempo Real</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe o valor do Rand Sul-Africano, a moeda mais negociada do continente
            africano, com gráficos atualizados e conversor em tempo real.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>ZAR/USD — Gráfico em Tempo Real</span>
                </div>
                <Badge variant="secondary">FX · Emergente</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <TradingViewWidget symbol="ZARUSD" height="384" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Globe2, label: "País", value: "África do Sul" },
            { icon: Landmark, label: "Emissor", value: "SARB" },
            { icon: Gem, label: "Commodity-link", value: "Ouro · Platina" },
            { icon: Clock, label: "Mercado", value: "Forex 24h" },
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
          <CurrencyConverter type="currency" mainCurrency="ZAR" />
        </div>

        <article className="space-y-12 max-w-4xl mx-auto">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Quanto vale 1 Rand Sul-Africano hoje?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              O Rand Sul-Africano (ZAR) é emitido pelo{" "}
              <strong className="text-foreground">South African Reserve Bank (SARB)</strong> e
              é a moeda mais líquida e negociada do continente africano. O nome "rand" é uma
              referência ao <strong className="text-foreground">Witwatersrand</strong>, a região
              aurífera ao redor de Joanesburgo.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              O ZAR é considerado uma moeda <strong className="text-foreground">commodity-linked</strong>
              {" "}e altamente volátil, atraente para operações de carry trade no Forex.
            </p>

            <Card className="border-l-4 border-l-primary bg-primary/5 my-6">
              <CardContent className="p-5 flex gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  <strong>Curiosidade:</strong> a África do Sul é o maior produtor mundial de{" "}
                  <strong>platina</strong> — o preço deste metal precioso impacta diretamente o
                  rand.
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
                O que influencia a cotação do Rand?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                {
                  icon: Gem,
                  title: "Metais Preciosos",
                  desc: "Ouro, platina e paládio respondem por boa parte das exportações sul-africanas.",
                },
                {
                  icon: TrendingUp,
                  title: "Apetite por Risco",
                  desc: "O ZAR é proxy de risco global — cai em momentos de aversão, sobe com otimismo.",
                },
                {
                  icon: Landmark,
                  title: "SARB & Juros",
                  desc: "Taxas de juros altas do SARB atraem capital especulativo (carry trade).",
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
                Viajando para a África do Sul: dicas práticas
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              Cidade do Cabo, safáris no Kruger e a Rota Jardim atraem turistas brasileiros.
              Veja como se preparar financeiramente:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Cartão Internacional</CardTitle>
                    <Badge className="bg-primary/10 text-primary border-primary/20">Recomendado</Badge>
                  </div>
                  <h3 className="text-sm font-semibold text-muted-foreground mt-1">
                    Excelente infraestrutura financeira
                  </h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Aceito em hotéis, restaurantes e safáris",
                      "Use cartão pré-pago em dólar para travar câmbio",
                      "IOF de 3,5% (pré-pago) ou 4,38% (crédito)",
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
                    <CardTitle className="text-xl">Rand em Espécie</CardTitle>
                    <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20">Necessário</Badge>
                  </div>
                  <h3 className="text-sm font-semibold text-muted-foreground mt-1">
                    Para gorjetas e vilas rurais
                  </h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Troque dólares por rand no destino",
                      "Aeroporto de Joanesburgo tem câmbio competitivo",
                      "Sempre tenha pequenas notas para gorjetas",
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
                  <strong>Atenção:</strong> evite carregar grandes quantias em espécie. Prefira
                  saques em ATMs de bancos dentro de shoppings e hotéis por questões de{" "}
                  <strong>segurança</strong>.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Mountain className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Rand como ativo de investimento
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              O ZAR é uma das moedas favoritas em estratégias de <strong>carry trade</strong>{" "}
              por oferecer juros nominais elevados. Por outro lado, sua{" "}
              <strong>alta volatilidade</strong> exige rigorosa gestão de risco — pequenas
              oscilações no risco global podem provocar movimentos diários de 2% a 3%.
            </p>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default RandSulAfricanoHoje;
