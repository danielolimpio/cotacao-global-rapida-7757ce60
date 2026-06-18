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
  Factory,
  Ship,
  Building2,
} from "lucide-react";

const YuanChinesHoje = () => {
  return (
    <Layout>
      <SEO path="/cambio/yuan-chines-hoje" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Globe2 className="w-4 h-4" />
            CÂMBIO · CNY · Ásia
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação do Yuan Chinês (CNY) Hoje
            <span className="block text-primary mt-2">Valor em Tempo Real</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe o valor do Yuan Chinês (Renminbi), a moeda da segunda maior economia
            do mundo e principal parceira comercial do Brasil, com gráficos atualizados.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>CNY/USD — Gráfico em Tempo Real</span>
                </div>
                <Badge variant="secondary">FX · Reserva Global</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <TradingViewWidget symbol="CNYUSD" height="384" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Globe2, label: "País", value: "China" },
            { icon: Landmark, label: "Emissor", value: "Banco Popular da China" },
            { icon: Factory, label: "Economia", value: "Manufatura · Exportação" },
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
          <UniversalConverter assetType="fiat" assetSymbol="CNY" assetName="Yuan Chinês" />
        </div>

        <article className="space-y-12 max-w-4xl mx-auto">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Quanto vale 1 Yuan Chinês hoje?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              O Yuan Chinês — oficialmente <strong className="text-foreground">Renminbi (RMB)</strong> —
              é emitido pelo <strong className="text-foreground">Banco Popular da China (PBoC)</strong>.
              "Yuan" é a unidade da moeda (como "real"), enquanto "Renminbi" é o nome oficial
              ("moeda do povo"). Símbolo: <strong className="text-foreground">¥</strong>.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Desde 2016, o CNY faz parte da cesta de <strong className="text-foreground">Direitos
              Especiais de Saque (DES)</strong> do FMI, ao lado de USD, EUR, JPY e GBP — um
              reconhecimento de seu status como moeda de reserva global.
            </p>

            <Card className="border-l-4 border-l-primary bg-primary/5 my-6">
              <CardContent className="p-5 flex gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  <strong>Curiosidade:</strong> existem duas versões do yuan no mercado
                  cambial — <strong>CNY</strong> (onshore, controlado pelo PBoC) e{" "}
                  <strong>CNH</strong> (offshore, negociado em Hong Kong com mais
                  liberdade de mercado).
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
                O que influencia a cotação do Yuan?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                {
                  icon: Ship,
                  title: "Balança Comercial",
                  desc: "Superávits comerciais massivos sustentam estruturalmente a demanda pelo CNY.",
                },
                {
                  icon: Landmark,
                  title: "PBoC & Fixing Diário",
                  desc: "O banco central define a paridade central diária, limitando a flutuação a ±2%.",
                },
                {
                  icon: Building2,
                  title: "Mercado Imobiliário",
                  desc: "Crises no setor imobiliário chinês geram fuga de capital e pressionam o yuan.",
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
                <Ship className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Yuan e Brasil: relação comercial estratégica
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              A China é o <strong>maior parceiro comercial do Brasil</strong> desde 2009.
              Soja, minério de ferro, petróleo e carnes brasileiras abastecem a economia
              chinesa, gerando fluxo cambial significativo entre as duas moedas:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Liquidação Direta BRL ↔ CNY</CardTitle>
                    <Badge className="bg-primary/10 text-primary border-primary/20">Novo</Badge>
                  </div>
                  <h3 className="text-sm font-semibold text-muted-foreground mt-1">
                    Sem intermediação do dólar
                  </h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Acordo BCB-PBoC permite swap cambial",
                      "Reduz custos para exportadores brasileiros",
                      "Diversifica reservas internacionais",
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
                    <CardTitle className="text-xl">Turismo na China</CardTitle>
                    <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20">Digital</Badge>
                  </div>
                  <h3 className="text-sm font-semibold text-muted-foreground mt-1">
                    Pagamentos via super-apps
                  </h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "WeChat Pay e Alipay dominam o varejo",
                      "Cartões internacionais agora aceitos em 2026",
                      "Yuan digital (e-CNY) em expansão",
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
                  <strong>Atenção:</strong> a China impõe controles cambiais rígidos.
                  Movimentações acima de USD 50.000 por ano exigem documentação
                  específica e podem ser bloqueadas pelo PBoC.
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
                O futuro do Yuan na geopolítica global
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Iniciativas como o <strong>Belt and Road</strong>, o sistema CIPS
              (alternativa ao SWIFT) e o yuan digital (e-CNY) demonstram a estratégia
              chinesa de internacionalizar sua moeda. Países do BRICS+ — incluindo
              Brasil, Rússia e Arábia Saudita — têm aumentado o uso do CNY em operações
              comerciais bilaterais.
            </p>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default YuanChinesHoje;
