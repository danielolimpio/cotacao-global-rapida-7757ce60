import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import TradingViewWidget from "@/components/TradingViewWidget";
import UniversalConverter from "@/components/UniversalConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mountain,
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
  Gem,
} from "lucide-react";

const PesoChilenoHoje = () => {
  return (
    <Layout>
      <SEO path="/cambio/peso-chileno-hoje" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Mountain className="w-4 h-4" />
            CÂMBIO · CLP · Cordilheira dos Andes
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação do Peso Chileno (CLP) Hoje
            <span className="block text-primary mt-2">Valor em Tempo Real</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe o valor do Peso Chileno, moeda oficial do Chile, com gráficos atualizados
            e análise da economia mais estável da América do Sul.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>CLP/USD — Gráfico em Tempo Real</span>
                </div>
                <Badge variant="secondary">FX · Commodity</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <TradingViewWidget symbol="CLPUSD" height="384" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Globe2, label: "País", value: "Chile" },
            { icon: Landmark, label: "Emissor", value: "Banco Central de Chile" },
            { icon: Gem, label: "Commodity-link", value: "Cobre" },
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
          <UniversalConverter assetType="fiat" assetSymbol="CLP" assetName="Peso Chileno" />
        </div>

        <article className="space-y-12 max-w-4xl mx-auto">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Quanto vale 1 Peso Chileno hoje?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              O Peso Chileno (CLP) é uma moeda <strong className="text-foreground">commodity-linked</strong>,
              fortemente influenciada pelo preço do <strong className="text-foreground">cobre</strong>,
              do qual o Chile é o maior produtor mundial.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              É considerada uma das moedas mais estáveis e líquidas da América Latina, com
              política monetária reconhecida pela credibilidade do Banco Central do Chile.
            </p>

            <Card className="border-l-4 border-l-primary bg-primary/5 my-6">
              <CardContent className="p-5 flex gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  <strong>Curiosidade:</strong> as cédulas chilenas estão entre as mais bonitas do
                  mundo, com retratos de heróis nacionais e fauna nativa como o huemul e o condor.
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
                O que influencia a cotação do Peso Chileno?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                {
                  icon: Gem,
                  title: "Preço do Cobre",
                  desc: "O cobre representa cerca de 50% das exportações chilenas — sua alta valoriza o CLP.",
                },
                {
                  icon: TrendingUp,
                  title: "Demanda Chinesa",
                  desc: "A China é o maior comprador de cobre, ditando o ritmo da moeda chilena.",
                },
                {
                  icon: Landmark,
                  title: "Banco Central",
                  desc: "Decisões de juros e regime de câmbio flutuante mantêm o CLP previsível.",
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
                Viajando para o Chile: dicas de câmbio
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              Santiago, Valparaíso e o deserto do Atacama estão entre os destinos mais procurados
              por brasileiros. Saiba como administrar o dinheiro:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Peso em Espécie</CardTitle>
                    <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20">Reserva</Badge>
                  </div>
                  <h3 className="text-sm font-semibold text-muted-foreground mt-1">
                    Para feirinhas e pequenas compras
                  </h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Troque dólares em Santiago — melhor câmbio",
                      "Evite trocar reais (cotação ruim)",
                      "Casas de câmbio na Agustinas têm boas taxas",
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
                    Amplamente aceito no Chile
                  </h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "IOF reduzido de 3,5%",
                      "Cotação fixada na recarga",
                      "Aceito em supermercados e restaurantes",
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
                  <strong>Atenção:</strong> o peso chileno tem valor unitário baixo —{" "}
                  <strong>1 dólar vale centenas de pesos</strong>. Confira sempre o número de
                  zeros nas notas.
                </p>
              </CardContent>
            </Card>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default PesoChilenoHoje;
