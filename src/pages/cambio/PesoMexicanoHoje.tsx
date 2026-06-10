import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import TradingViewWidget from "@/components/TradingViewWidget";
import CurrencyConverter from "@/components/CurrencyConverter";
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
  Factory,
} from "lucide-react";

const PesoMexicanoHoje = () => {
  return (
    <Layout>
      <SEO path="/cambio/peso-mexicano-hoje" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Flag className="w-4 h-4" />
            CÂMBIO · MXN · América do Norte
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação do Peso Mexicano (MXN) Hoje
            <span className="block text-primary mt-2">Valor em Tempo Real</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe a cotação do Peso Mexicano, uma das moedas emergentes mais negociadas do
            mundo, com gráfico em tempo real e conversor atualizado.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>MXN/USD — Gráfico em Tempo Real</span>
                </div>
                <Badge variant="secondary">FX · Emergente</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <TradingViewWidget symbol="MXNUSD" height="384" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Globe2, label: "País", value: "México" },
            { icon: Landmark, label: "Emissor", value: "Banxico" },
            { icon: Factory, label: "Economia", value: "USMCA · EUA" },
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
          <CurrencyConverter type="currency" mainCurrency="MXN" />
        </div>

        <article className="space-y-12 max-w-4xl mx-auto">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Quanto vale 1 Peso Mexicano hoje?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              O Peso Mexicano (MXN) é a <strong className="text-foreground">8ª moeda mais
              negociada no mercado de Forex</strong> e a mais líquida da América Latina. Sua
              proximidade com a economia dos Estados Unidos via tratado USMCA torna o MXN uma
              moeda emergente referência.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              O par <strong className="text-foreground">USD/MXN</strong> é amplamente utilizado em
              estratégias de carry trade devido aos juros relativamente altos praticados pelo{" "}
              <strong>Banxico</strong> (Banco do México).
            </p>

            <Card className="border-l-4 border-l-primary bg-primary/5 my-6">
              <CardContent className="p-5 flex gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  <strong>Dica:</strong> o peso mexicano costuma reagir fortemente a falas do
                  presidente dos EUA sobre tarifas comerciais e imigração.
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
                O que influencia a cotação do Peso Mexicano?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                {
                  icon: Factory,
                  title: "Comércio com EUA",
                  desc: "Mais de 80% das exportações do México vão para os EUA via USMCA.",
                },
                {
                  icon: TrendingUp,
                  title: "Remessas",
                  desc: "Mexicanos no exterior enviam mais de US$ 60 bi/ano em remesas, sustentando o peso.",
                },
                {
                  icon: Landmark,
                  title: "Juros do Banxico",
                  desc: "Diferencial de juros com o Fed atrai capital estrangeiro para o MXN.",
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
                Viajando para Cancún ou Cidade do México
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Dólar Americano</CardTitle>
                    <Badge className="bg-primary/10 text-primary border-primary/20">Recomendado</Badge>
                  </div>
                  <h3 className="text-sm font-semibold text-muted-foreground mt-1">
                    Aceito em quase todo destino turístico
                  </h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Cancún e Riviera Maya aceitam USD livremente",
                      "Troque parte em pesos para o interior",
                      "Casas de câmbio (casas de cambio) em todo lugar",
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
                    <CardTitle className="text-xl">Cartão de Crédito</CardTitle>
                    <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20">Versátil</Badge>
                  </div>
                  <h3 className="text-sm font-semibold text-muted-foreground mt-1">
                    Ampla aceitação em redes turísticas
                  </h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "IOF de 3,5% sobre compras internacionais",
                      "Cuidado com cobrança em USD em vez de MXN (DCC)",
                      "Sempre escolha pagar na moeda local (peso)",
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
                  <strong>Atenção:</strong> recuse a conversão dinâmica de moeda (DCC) na
                  maquininha — pagar em <strong>pesos mexicanos</strong> sempre rende câmbio
                  melhor que pagar em dólar.
                </p>
              </CardContent>
            </Card>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default PesoMexicanoHoje;
