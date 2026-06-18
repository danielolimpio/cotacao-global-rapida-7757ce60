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
  Plane,
  Cpu,
  Gem,
} from "lucide-react";

const RupiaIndianaHoje = () => {
  return (
    <Layout>
      <SEO path="/cambio/rupia-indiana-hoje" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Globe2 className="w-4 h-4" />
            CÂMBIO · INR · Ásia
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação da Rupia Indiana (INR) Hoje
            <span className="block text-primary mt-2">Valor em Tempo Real</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe o valor da Rupia Indiana, moeda da quinta maior economia do mundo
            e principal hub tecnológico da Ásia, com gráficos atualizados.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>INR/USD — Gráfico em Tempo Real</span>
                </div>
                <Badge variant="secondary">FX · Emergente</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <TradingViewWidget symbol="INRUSD" height="384" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Globe2, label: "País", value: "Índia" },
            { icon: Landmark, label: "Emissor", value: "Reserve Bank of India" },
            { icon: Cpu, label: "Setor-chave", value: "TI · Serviços" },
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
          <UniversalConverter assetType="fiat" assetSymbol="INR" assetName="Rupia Indiana" />
        </div>

        <article className="space-y-12 max-w-4xl mx-auto">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Quanto vale 1 Rupia Indiana hoje?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              A Rupia Indiana (INR) é a moeda oficial da Índia, emitida pelo{" "}
              <strong className="text-foreground">Reserve Bank of India (RBI)</strong>. Com
              o símbolo <strong className="text-foreground">₹</strong> oficializado em 2010,
              é uma das moedas mais transacionadas da Ásia em volume populacional, atendendo
              cerca de 1,4 bilhão de pessoas.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              A Índia é hoje a <strong className="text-foreground">quinta maior economia
              global</strong> em PIB nominal e líder em serviços de tecnologia da informação,
              o que torna o INR uma moeda emergente estratégica.
            </p>

            <Card className="border-l-4 border-l-primary bg-primary/5 my-6">
              <CardContent className="p-5 flex gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  <strong>Curiosidade:</strong> a Índia é o maior consumidor mundial de{" "}
                  <strong>ouro físico</strong> per capita — em períodos festivos como o
                  Diwali, a alta demanda por ouro pressiona o INR.
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
                O que influencia a cotação da Rupia?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                {
                  icon: Cpu,
                  title: "Setor de TI & BPO",
                  desc: "Exportações de serviços tecnológicos geram fluxo constante de USD para a Índia.",
                },
                {
                  icon: Gem,
                  title: "Importação de Ouro & Petróleo",
                  desc: "A Índia importa quase todo seu petróleo — alta do Brent pressiona o INR.",
                },
                {
                  icon: Landmark,
                  title: "RBI & Política Monetária",
                  desc: "O RBI intervém ativamente no mercado para suavizar a volatilidade cambial.",
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
                Viajando para a Índia: dicas cambiais
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              De Taj Mahal a Goa, o turismo brasileiro à Índia cresce ano a ano. Como o
              INR não é livremente conversível fora do país, é importante planejar:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">USD em Espécie</CardTitle>
                    <Badge className="bg-primary/10 text-primary border-primary/20">Recomendado</Badge>
                  </div>
                  <h3 className="text-sm font-semibold text-muted-foreground mt-1">
                    Troque por rupia no destino
                  </h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Câmbio mais competitivo em aeroportos indianos",
                      "Casas autorizadas pelo RBI emitem recibo oficial",
                      "Notas de USD danificadas são frequentemente recusadas",
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
                    <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20">Aceito</Badge>
                  </div>
                  <h3 className="text-sm font-semibold text-muted-foreground mt-1">
                    Em hotéis e grandes lojas
                  </h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Aceito em hotéis de rede e shoppings",
                      "Pequenos comércios operam apenas em rupia",
                      "UPI domina pagamentos digitais locais",
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
                  <strong>Atenção:</strong> é proibido entrar ou sair da Índia com rupias
                  acima de INR 25.000. Sobre dinheiro restante, troque por USD antes do
                  embarque de retorno.
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
                Rupia como ativo: estabilidade gerenciada
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              O RBI mantém uma política de <strong>flutuação suja</strong>, intervindo
              regularmente para evitar oscilações abruptas. Isso confere ao INR uma das
              menores volatilidades entre moedas emergentes, atraindo investidores
              estrangeiros para títulos públicos indianos via FPI (Foreign Portfolio
              Investment).
            </p>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default RupiaIndianaHoje;
