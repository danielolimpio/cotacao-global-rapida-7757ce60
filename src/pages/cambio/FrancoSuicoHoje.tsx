import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import TradingViewWidget from "@/components/TradingViewWidget";
import CurrencyConverter from "@/components/CurrencyConverter";
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
  ShieldCheck,
  Sparkles,
  Building2,
  Banknote,
  Lock,
} from "lucide-react";

const FrancoSuicoHoje = () => {
  return (
    <Layout>
      <SEO path="/cambio/franco-suico-hoje" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Mountain className="w-4 h-4" />
            FOREX · CHF · Refúgio Seguro
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação do Franco Suíço (CHF) Hoje
            <span className="block text-primary mt-2">Valor em Tempo Real</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe o valor do Franco Suíço, uma das moedas mais sólidas do planeta, com
            gráficos profissionais e conversor para Real e Dólar.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>CHF/USD — Gráfico em Tempo Real</span>
                </div>
                <Badge variant="secondary">FX</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <TradingViewWidget symbol="CHFUSD" height="384" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Globe2, label: "País", value: "Suíça" },
            { icon: Landmark, label: "Emissor", value: "SNB" },
            { icon: Lock, label: "Reserva", value: "Safe Haven" },
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
          <CurrencyConverter type="currency" mainCurrency="CHF" />
        </div>

        <article className="space-y-12 max-w-4xl mx-auto">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Quanto vale 1 Franco Suíço hoje?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              O Franco Suíço (CHF) é historicamente uma das moedas{" "}
              <strong className="text-foreground">mais valorizadas do mundo</strong>, frequentemente
              negociado em paridade ou acima do Dólar Americano.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Acima você acompanha o gráfico ao vivo do par CHF/USD, com cotação atualizada
              constantemente pelo mercado interbancário global.
            </p>

            <Card className="border-l-4 border-l-primary bg-primary/5 my-6">
              <CardContent className="p-5 flex gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  <strong>Dica:</strong> em momentos de crise global, o CHF tende a se valorizar
                  porque investidores buscam refúgio na estabilidade econômica e política suíça.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Por que o Franco Suíço é considerado moeda refúgio?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              A Suíça reúne <strong className="text-foreground">três características</strong> que
              tornam sua moeda um porto seguro mundial:
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                {
                  icon: Lock,
                  title: "Estabilidade Política",
                  desc: "Neutralidade histórica, democracia direta e governo previsível há mais de 150 anos.",
                },
                {
                  icon: Building2,
                  title: "Sistema Bancário Sólido",
                  desc: "Tradição em sigilo bancário, regulação rigorosa e reservas em ouro elevadas.",
                },
                {
                  icon: TrendingUp,
                  title: "Economia Robusta",
                  desc: "Baixa inflação, superávit comercial e PIB per capita entre os maiores do mundo.",
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
                <Landmark className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                O papel do Swiss National Bank (SNB)
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              O <strong className="text-foreground">Banco Nacional da Suíça (SNB)</strong> é
              conhecido por suas <strong>intervenções diretas</strong> no mercado para evitar a
              valorização excessiva do Franco, o que prejudicaria as exportações do país.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary" />
              Marcos históricos do SNB
            </h3>
            <ul className="space-y-3 mb-6">
              {[
                {
                  title: "Peg com o Euro (2011-2015)",
                  desc: "O SNB fixou o teto de 1,20 CHF por Euro para conter a alta da moeda.",
                },
                {
                  title: "Fim do peg em 2015",
                  desc: "Conhecido como Frankenshock, derrubou mercados globais em poucos minutos.",
                },
                {
                  title: "Juros negativos",
                  desc: "Por anos, o SNB praticou taxas negativas para desestimular a compra do CHF.",
                },
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

            <Card className="border-l-4 border-l-yellow-500 bg-yellow-500/5">
              <CardContent className="p-5 flex gap-3">
                <AlertTriangle className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
                <p className="text-sm md:text-base">
                  <strong>Atenção:</strong> intervenções do SNB podem gerar movimentos bruscos no
                  par CHF, exigindo cautela com operações alavancadas.
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
                Vale a pena ter Francos Suíços?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              Para o investidor brasileiro, o CHF não é a primeira opção de diversificação,
              mas pode compor uma carteira global como{" "}
              <strong className="text-foreground">proteção em cenários de estresse</strong>.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Para viagens à Suíça, leve uma parte em CHF em espécie e uma parte em cartão
              pré-pago com a moeda local — o país aceita Euro em algumas regiões turísticas, mas
              com câmbio desfavorável.
            </p>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default FrancoSuicoHoje;
