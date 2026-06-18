import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import TradingViewWidget from "@/components/TradingViewWidget";
import UniversalConverter from "@/components/UniversalConverter";
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
  Fuel,
  Snowflake,
  ShieldAlert,
} from "lucide-react";

const RubloRussoHoje = () => {
  return (
    <Layout>
      <SEO path="/cambio/rublo-russo-hoje" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Globe2 className="w-4 h-4" />
            CÂMBIO · RUB · Eurásia
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação do Rublo Russo (RUB) Hoje
            <span className="block text-primary mt-2">Valor em Tempo Real</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe o valor do Rublo Russo, moeda de uma das maiores potências exportadoras
            de petróleo e gás natural do mundo, com gráfico atualizado e conversor.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>RUB/USD — Gráfico em Tempo Real</span>
                </div>
                <Badge variant="secondary">FX · Exótica</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <TradingViewWidget symbol="RUBUSD" height="384" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Globe2, label: "País", value: "Rússia" },
            { icon: Landmark, label: "Emissor", value: "Banco Central da Rússia" },
            { icon: Fuel, label: "Commodity-link", value: "Petróleo · Gás" },
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
          <UniversalConverter assetType="fiat" assetSymbol="RUB" assetName="Rublo Russo" />
        </div>

        <article className="space-y-12 max-w-4xl mx-auto">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Quanto vale 1 Rublo Russo hoje?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              O Rublo Russo (RUB) é a moeda oficial da Federação Russa, emitida pelo{" "}
              <strong className="text-foreground">Banco Central da Rússia (CBR)</strong>. Como
              uma das economias mais dependentes de <strong className="text-foreground">commodities</strong>
              {" "}do planeta, o rublo apresenta forte correlação com os preços globais do
              petróleo Brent e do gás natural.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              É classificada como uma moeda <strong className="text-foreground">exótica</strong>{" "}
              no mercado Forex — com liquidez restrita, alta volatilidade e forte sensibilidade
              a eventos geopolíticos.
            </p>

            <Card className="border-l-4 border-l-primary bg-primary/5 my-6">
              <CardContent className="p-5 flex gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  <strong>Curiosidade:</strong> o rublo é uma das moedas mais antigas do mundo
                  ainda em circulação — usado desde o século XIII, derivado da palavra{" "}
                  <em>rubit</em> ("cortar") em referência aos pedaços de prata cortados como
                  pagamento.
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
                O que influencia a cotação do Rublo?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                {
                  icon: Fuel,
                  title: "Preço do Petróleo",
                  desc: "Energia é a maior fonte de receita externa russa — quando o Brent sobe, o rublo tende a se valorizar.",
                },
                {
                  icon: ShieldAlert,
                  title: "Geopolítica & Sanções",
                  desc: "Sanções internacionais e tensões geopolíticas provocam fortes oscilações cambiais.",
                },
                {
                  icon: Landmark,
                  title: "CBR & Juros",
                  desc: "O Banco Central russo usa juros elevados para conter inflação e defender a moeda.",
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
                <Snowflake className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Convertendo Rublo para Real: o que considerar
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              Devido a sanções internacionais aplicadas ao sistema financeiro russo, a
              conversão direta entre BRL e RUB tornou-se restrita em muitas instituições.
              Para quem precisa do rublo em operações comerciais ou viagens:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Cotação Comercial</CardTitle>
                    <Badge className="bg-primary/10 text-primary border-primary/20">Referência</Badge>
                  </div>
                  <h3 className="text-sm font-semibold text-muted-foreground mt-1">
                    Base para B2B e contratos
                  </h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Definida pelo CBR diariamente (MOEX)",
                      "Referência para importação/exportação",
                      "Sujeita a controles de capital russos",
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
                    <CardTitle className="text-xl">Cotação Paralela</CardTitle>
                    <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20">Atenção</Badge>
                  </div>
                  <h3 className="text-sm font-semibold text-muted-foreground mt-1">
                    Spread elevado em casas de câmbio
                  </h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Disponibilidade limitada no Brasil",
                      "Spread pode ultrapassar 10% sobre o oficial",
                      "Preferir intermediação em USD ou EUR",
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
                  <strong>Atenção:</strong> cartões internacionais Visa e Mastercard
                  emitidos fora da Rússia não funcionam em território russo desde 2022.
                  Planejamento financeiro prévio é essencial.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Rublo como ativo: alta volatilidade
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              O RUB é uma das moedas mais voláteis do mundo, com oscilações diárias que
              podem ultrapassar 5% em períodos de tensão geopolítica. Sua exposição é
              recomendada apenas a investidores institucionais com tolerância a risco
              elevado e conhecimento profundo do contexto político-econômico russo.
            </p>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default RubloRussoHoje;
