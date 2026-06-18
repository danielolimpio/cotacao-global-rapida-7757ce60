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
  Music,
} from "lucide-react";

const WonSulCoreanoHoje = () => {
  return (
    <Layout>
      <SEO path="/cambio/won-sul-coreano-hoje" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Globe2 className="w-4 h-4" />
            CÂMBIO · KRW · Ásia
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação do Won Sul-Coreano (KRW) Hoje
            <span className="block text-primary mt-2">Valor em Tempo Real</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe o valor do Won Sul-Coreano, moeda de uma das economias mais
            tecnológicas do planeta, lar da Samsung, Hyundai e do fenômeno cultural K-Pop.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>KRW/USD — Gráfico em Tempo Real</span>
                </div>
                <Badge variant="secondary">FX · Asiática</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <TradingViewWidget symbol="KRWUSD" height="384" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Globe2, label: "País", value: "Coreia do Sul" },
            { icon: Landmark, label: "Emissor", value: "Bank of Korea" },
            { icon: Cpu, label: "Setor-chave", value: "Semicondutores · Tech" },
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
          <UniversalConverter assetType="fiat" assetSymbol="KRW" assetName="Won Sul-Coreano" />
        </div>

        <article className="space-y-12 max-w-4xl mx-auto">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Quanto vale 1 Won Sul-Coreano hoje?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              O Won Sul-Coreano (KRW) é a moeda oficial da Coreia do Sul, emitida pelo{" "}
              <strong className="text-foreground">Bank of Korea (BoK)</strong>. Seu símbolo
              é <strong className="text-foreground">₩</strong> e historicamente possui uma
              das menores unidades de valor entre moedas de economias desenvolvidas — o
              que torna comum transações na casa dos milhares.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              A Coreia do Sul é a <strong className="text-foreground">10ª maior economia
              mundial</strong> e líder absoluta em produção de semicondutores, painéis
              OLED e construção naval — pilares que sustentam a relevância internacional
              do won.
            </p>

            <Card className="border-l-4 border-l-primary bg-primary/5 my-6">
              <CardContent className="p-5 flex gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  <strong>Curiosidade:</strong> a Coreia do Sul foi o primeiro país a
                  adotar 100% de cobertura 5G nacional, e seu PIB cresceu mais de 30
                  vezes nos últimos 60 anos — o chamado{" "}
                  <em>"Milagre do Rio Han"</em>.
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
                O que influencia a cotação do Won?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                {
                  icon: Cpu,
                  title: "Ciclo dos Semicondutores",
                  desc: "Samsung e SK Hynix dominam memórias DRAM — alta global de chips valoriza o KRW.",
                },
                {
                  icon: AlertTriangle,
                  title: "Risco Geopolítico",
                  desc: "Tensões com a Coreia do Norte provocam oscilações pontuais, geralmente breves.",
                },
                {
                  icon: Landmark,
                  title: "BoK & Juros",
                  desc: "O Bank of Korea ajusta taxas para conter inflação e estabilizar a moeda.",
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
                Viajando para Seul: dicas cambiais
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              Impulsionado pelo K-Pop, K-Drama e gastronomia, o turismo brasileiro à
              Coreia do Sul disparou. Para aproveitar Seul, Busan e a Ilha de Jeju:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Cartão Internacional</CardTitle>
                    <Badge className="bg-primary/10 text-primary border-primary/20">Recomendado</Badge>
                  </div>
                  <h3 className="text-sm font-semibold text-muted-foreground mt-1">
                    Aceitação ampla nas grandes cidades
                  </h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Visa, Mastercard e Amex amplamente aceitos",
                      "Cartão T-Money facilita transporte público",
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
                    <CardTitle className="text-xl">Won em Espécie</CardTitle>
                    <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20">Útil</Badge>
                  </div>
                  <h3 className="text-sm font-semibold text-muted-foreground mt-1">
                    Para mercados de rua e templos
                  </h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Câmbio melhor em Myeongdong (Seul) que aeroporto",
                      "Use ATMs com label 'Global' para cartões estrangeiros",
                      "Note: 1 BRL ≈ 200-250 KRW em média",
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
                  <strong>Atenção:</strong> a Coreia do Sul restringe a saída de mais
                  de USD 10.000 em moeda estrangeira sem declaração. Turistas têm
                  direito a <strong>Tax Refund</strong> em compras acima de KRW 30.000
                  em lojas autorizadas.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Music className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Won, K-Culture e a "Onda Coreana"
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              O fenômeno <strong>Hallyu</strong> (Onda Coreana) — que inclui K-Pop,
              K-Drama, cinema e cosméticos — gera bilhões de dólares anuais em
              exportações culturais, fortalecendo o won. Empresas como HYBE (BTS) e
              SM Entertainment são listadas em bolsa e movem fluxos cambiais
              significativos. O TKRW é hoje uma moeda emergente com perfil de mercado
              desenvolvido.
            </p>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default WonSulCoreanoHoje;
