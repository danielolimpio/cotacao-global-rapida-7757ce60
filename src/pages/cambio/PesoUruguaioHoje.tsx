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
  ShieldCheck,
} from "lucide-react";

const PesoUruguaioHoje = () => {
  return (
    <Layout>
      <SEO path="/cambio/peso-uruguaio-hoje" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Flag className="w-4 h-4" />
            CÂMBIO · UYU · Mercosul
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação do Peso Uruguaio (UYU) Hoje
            <span className="block text-primary mt-2">Valor em Tempo Real</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe o valor do Peso Uruguaio, moeda oficial do Uruguai, com gráficos
            atualizados e dicas de câmbio para quem viaja a Punta del Este e Montevidéu.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>UYU/USD — Gráfico em Tempo Real</span>
                </div>
                <Badge variant="secondary">FX · Mercosul</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <TradingViewWidget symbol="UYUUSD" height="384" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Globe2, label: "País", value: "Uruguai" },
            { icon: Landmark, label: "Emissor", value: "BCU" },
            { icon: ShieldCheck, label: "Rating", value: "Investment Grade" },
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
          <UniversalConverter assetType="fiat" assetSymbol="UYU" assetName="Peso Uruguaio" />
        </div>

        <article className="space-y-12 max-w-4xl mx-auto">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Quanto vale 1 Peso Uruguaio hoje?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              O Peso Uruguaio (UYU) é emitido pelo{" "}
              <strong className="text-foreground">Banco Central del Uruguay (BCU)</strong> e
              representa uma das economias mais estáveis e democráticas da América Latina,
              com grau de investimento pelas principais agências de rating.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              É comum no Uruguai a circulação simultânea de pesos uruguaios e dólares americanos,
              principalmente em aluguéis e imóveis.
            </p>

            <Card className="border-l-4 border-l-primary bg-primary/5 my-6">
              <CardContent className="p-5 flex gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  <strong>Dica:</strong> em Punta del Este, especialmente na alta temporada, o{" "}
                  <strong>real brasileiro</strong> é aceito em quase todo o comércio — mas a
                  cotação costuma ser desfavorável.
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
                O que influencia a cotação do Peso Uruguaio?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                {
                  icon: TrendingUp,
                  title: "Soja e Carne",
                  desc: "Commodities agrícolas são os principais produtos de exportação uruguaia.",
                },
                {
                  icon: Globe2,
                  title: "Brasil & Argentina",
                  desc: "A economia uruguaia é fortemente influenciada por seus dois vizinhos.",
                },
                {
                  icon: Landmark,
                  title: "Política do BCU",
                  desc: "Banco Central mantém regime de metas de inflação com câmbio flutuante.",
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
                Viajando para Punta del Este e Montevidéu
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Dólar em Espécie</CardTitle>
                    <Badge className="bg-primary/10 text-primary border-primary/20">Universal</Badge>
                  </div>
                  <h3 className="text-sm font-semibold text-muted-foreground mt-1">
                    Aceito em quase todo o país
                  </h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Hotéis cobram em USD diretamente",
                      "Restaurantes aceitam dólar e devolvem troco em pesos",
                      "Câmbio em Punta del Este e Montevidéu é fácil",
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
                    <CardTitle className="text-xl">Tax Free para Turistas</CardTitle>
                    <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20">Vantagem</Badge>
                  </div>
                  <h3 className="text-sm font-semibold text-muted-foreground mt-1">
                    Devolução do IVA com cartão estrangeiro
                  </h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Devolução de 22% de IVA em restaurantes",
                      "Aluguel de carros com benefício fiscal",
                      "Use cartão emitido fora do Uruguai",
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
                  <strong>Atenção:</strong> embora o real seja aceito em Punta del Este, a
                  conversão direta para pesos uruguaios via dólar normalmente é{" "}
                  <strong>mais vantajosa</strong>.
                </p>
              </CardContent>
            </Card>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default PesoUruguaioHoje;
