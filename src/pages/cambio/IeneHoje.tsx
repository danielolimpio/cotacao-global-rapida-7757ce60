import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import TradingViewWidget from "@/components/TradingViewWidget";
import CurrencyConverter from "@/components/CurrencyConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Coins,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Landmark,
  BarChart3,
  Globe2,
  ShieldCheck,
  Sparkles,
  Building2,
  Banknote,
  Plane,
} from "lucide-react";

const IeneHoje = () => {
  return (
    <Layout>
      <SEO path="/cambio/iene-hoje" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Coins className="w-4 h-4" />
            FOREX · JPY · 3ª moeda mais negociada
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação do Iene Japonês (JPY) Hoje
            <span className="block text-primary mt-2">Valor em Tempo Real</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe o valor do Iene, a moeda oficial do Japão e referência asiática nos mercados
            globais de câmbio, com gráficos e conversor atualizados.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>JPY/USD — Gráfico em Tempo Real</span>
                </div>
                <Badge variant="secondary">FX</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <TradingViewWidget symbol="JPYUSD" height="384" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Globe2, label: "País", value: "Japão" },
            { icon: Landmark, label: "Emissor", value: "BoJ" },
            { icon: Building2, label: "Economia", value: "3ª maior do mundo" },
            { icon: Clock, label: "Mercado", value: "24h · Forex" },
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
          <CurrencyConverter type="currency" mainCurrency="JPY" />
        </div>

        <article className="space-y-12 max-w-4xl mx-auto">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Quanto vale 1 Iene em Real hoje?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              Diferente de outras moedas fortes, o Iene tem{" "}
              <strong className="text-foreground">valor unitário baixo</strong> — é comum precisar
              de mais de 100 ienes para igualar 1 dólar. Por isso, o JPY costuma ser cotado em
              lotes de 100 ou 1.000 unidades.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              No conversor acima, você pode simular o valor de qualquer quantidade de Ienes em
              Real e em Dólar Americano, com cotação atualizada em tempo real.
            </p>

            <Card className="border-l-4 border-l-primary bg-primary/5 my-6">
              <CardContent className="p-5 flex gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  <strong>Dica:</strong> o Iene é a moeda preferida do <strong>carry trade</strong>{" "}
                  — investidores tomam empréstimos a juros baixos no Japão e aplicam em países de
                  juros altos como o Brasil.
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
                O que influencia a cotação do Iene?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              O Banco do Japão (BoJ) mantém há décadas uma política monetária{" "}
              <strong className="text-foreground">ultraexpansionista</strong>, com juros próximos
              de zero ou negativos. Isso impacta diretamente o comportamento do JPY:
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                {
                  icon: Landmark,
                  title: "Política do BoJ",
                  desc: "Manutenção de juros baixos para combater a deflação histórica japonesa.",
                },
                {
                  icon: TrendingUp,
                  title: "Diferencial de Juros",
                  desc: "Quanto maior o juro nos EUA, mais o JPY se desvaloriza frente ao USD.",
                },
                {
                  icon: ShieldCheck,
                  title: "Status de Refúgio",
                  desc: "Em crises geopolíticas, investidores fogem para o Iene buscando segurança.",
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
                Viajando para o Japão: como levar dinheiro?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              O Japão ainda é uma economia que valoriza muito o <strong className="text-foreground">dinheiro
              em espécie</strong>, principalmente em restaurantes, templos e cidades menores.
              Recomenda-se levar uma combinação:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Iene em Espécie</CardTitle>
                    <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20">Essencial</Badge>
                  </div>
                  <h3 className="text-sm font-semibold text-muted-foreground mt-1">
                    Para refeições, transporte e compras locais
                  </h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Compre antes de viajar (cotação melhor no Brasil)",
                      "ATMs no Japão aceitam cartões internacionais",
                      "Trocas em casas de câmbio têm spread elevado",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Cartão Pré-pago</CardTitle>
                    <Badge className="bg-primary/10 text-primary border-primary/20">Recomendado</Badge>
                  </div>
                  <h3 className="text-sm font-semibold text-muted-foreground mt-1">
                    Hotéis, lojas grandes e turismo
                  </h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "IOF reduzido de 3,5%",
                      "Cotação travada na recarga",
                      "Aceito em redes grandes (Visa/Master)",
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
                  <strong>Atenção:</strong> evite cartões de crédito comum no Japão para compras
                  pequenas — além do IOF de 5,38%, o spread do banco pode tornar a operação cara.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Banknote className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Iene como ativo de proteção
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Apesar de não ser tão usado por investidores brasileiros, o Iene é uma das moedas
              mais negociadas globalmente. Sua valorização em momentos de aversão a risco faz dele
              uma alternativa para <strong className="text-foreground">hedge cambial</strong> em
              carteiras internacionais sofisticadas.
            </p>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default IeneHoje;
