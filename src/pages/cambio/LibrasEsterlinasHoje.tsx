import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import TradingViewWidget from "@/components/TradingViewWidget";
import CurrencyConverter from "@/components/CurrencyConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Crown,
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

const LibrasEsterlinasHoje = () => {
  return (
    <Layout>
      <SEO path="/cambio/libras-esterlinas-hoje" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Crown className="w-4 h-4" />
            FOREX · GBP · Moeda mais antiga do mundo
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação da Libra Esterlina (GBP) Hoje
            <span className="block text-primary mt-2">Valor em Tempo Real</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe o valor da Libra Esterlina, a moeda oficial do Reino Unido e uma das mais
            valorizadas do planeta, com gráficos e conversor atualizados.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>GBP/USD — Gráfico em Tempo Real</span>
                </div>
                <Badge variant="secondary">FX · Cable</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <TradingViewWidget symbol="GBPUSD" height="384" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Globe2, label: "País", value: "Reino Unido" },
            { icon: Landmark, label: "Emissor", value: "Bank of England" },
            { icon: Building2, label: "Centro Financeiro", value: "City of London" },
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
          <CurrencyConverter type="currency" mainCurrency="GBP" />
        </div>

        <article className="space-y-12 max-w-4xl mx-auto">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Quanto vale 1 Libra Esterlina hoje?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              A Libra Esterlina (GBP) é tradicionalmente <strong className="text-foreground">mais
              valiosa que o Dólar e o Euro</strong> em base unitária. É uma das moedas de reserva
              global, fortemente atrelada ao centro financeiro de Londres.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              O par GBP/USD é apelidado no mercado de <strong className="text-foreground">"Cable"</strong>,
              referência aos cabos transatlânticos do século XIX que transmitiam as cotações entre
              Londres e Nova York.
            </p>

            <Card className="border-l-4 border-l-primary bg-primary/5 my-6">
              <CardContent className="p-5 flex gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  <strong>Dica:</strong> a Libra é uma das moedas mais voláteis do G10, com
                  oscilações fortes em dias de decisão do <strong>Bank of England</strong> e
                  divulgação de inflação no Reino Unido.
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
                O que influencia a cotação da Libra?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              A Libra responde a uma combinação de fatores monetários, políticos e setoriais
              específicos do Reino Unido:
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                {
                  icon: Landmark,
                  title: "Bank of England",
                  desc: "Decisões de juros e tom do BoE definem a direção de curto prazo do GBP.",
                },
                {
                  icon: TrendingUp,
                  title: "Inflação & PIB",
                  desc: "Dados macroeconômicos do Reino Unido movem o par GBP/USD diariamente.",
                },
                {
                  icon: Globe2,
                  title: "Brexit & Política",
                  desc: "Negociações comerciais com a UE seguem impactando a percepção da moeda.",
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
                Viajando para Londres: melhor forma de levar dinheiro
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              O Reino Unido é uma economia altamente digital — pagamentos por aproximação são
              aceitos em quase todo lugar. Mesmo assim, vale combinar formas de pagamento:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Libra em Espécie</CardTitle>
                    <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20">Reserva</Badge>
                  </div>
                  <h3 className="text-sm font-semibold text-muted-foreground mt-1">
                    Para emergências e pequenas compras
                  </h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "IOF de 1,1% sobre o valor",
                      "Spread médio de 4% em casas de câmbio",
                      "Cuidado com notas grandes (£50)",
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
                    Aceito em todo o Reino Unido
                  </h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "IOF reduzido de 3,5%",
                      "Cotação travada na recarga",
                      "Pagamento por aproximação (contactless)",
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
                  <strong>Atenção:</strong> a Libra Esterlina costuma sofrer{" "}
                  <strong>spread maior</strong> em casas de câmbio brasileiras do que o Euro ou
                  Dólar. Compare cotações antes de comprar.
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
                A Libra como reserva e ativo internacional
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              A GBP é a <strong className="text-foreground">quarta moeda mais negociada</strong>{" "}
              no mercado de câmbio mundial, atrás apenas de USD, EUR e JPY. Ela compõe parte das
              reservas internacionais de diversos bancos centrais.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary" />
              Formas de exposição ao mercado britânico
            </h3>
            <ul className="space-y-3">
              {[
                { title: "ETFs e BDRs", desc: "Acesso a ações londrinas (FTSE 100) via produtos negociados na B3." },
                { title: "Imóveis em Londres", desc: "Tradicional reserva de valor, embora com custos elevados de manutenção." },
                { title: "Contas multimoedas", desc: "Manter saldo em GBP em fintechs internacionais (Wise, Revolut, Nomad)." },
              ].map((item) => (
                <li key={item.title} className="flex gap-3 p-4 rounded-lg bg-muted/50 border border-border/50">
                  <div className="w-1 rounded-full bg-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default LibrasEsterlinasHoje;
