import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Landmark,
  TrendingUp,
  DollarSign,
  Clock,
  Coins,
  BarChart3,
  Building2,
  Sparkles,
  CheckCircle2,
  Percent,
  PieChart,
  Calendar,
  ShieldCheck,
  Wallet,
} from "lucide-react";

const ItauHoje = () => {
  return (
    <Layout>
      <SEO path="/acoes/itau" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero */}
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Landmark className="w-4 h-4" />
            B3 · ITUB4 · BBAS3
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação do Itaú (ITUB4) e Banco do Brasil (BBAS3)
            <span className="block text-primary mt-2">Hoje em Tempo Real</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe ao vivo as duas maiores ações bancárias da B3 e descubra qual oferece os
            melhores dividendos para sua carteira.
          </p>
        </header>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>ITUB4 — Itaú Unibanco</span>
                </div>
                <Badge variant="secondary">PN</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <TradingViewWidget symbol="BMFBOVESPA:ITUB4" height="384" style="advanced" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>BBAS3 — Banco do Brasil</span>
                </div>
                <Badge variant="secondary">ON</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <TradingViewWidget symbol="BMFBOVESPA:BBAS3" height="384" style="advanced" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick facts */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Building2, label: "Setor", value: "Bancos" },
            { icon: Clock, label: "Pregão", value: "10h às 17h" },
            { icon: Calendar, label: "Balanços", value: "Trimestrais" },
            { icon: Percent, label: "ROE Setor", value: "Acima de 15%" },
          ].map((item) => (
            <Card key={item.label} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">
                    {item.label}
                  </div>
                  <div className="font-semibold text-foreground">{item.value}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <article className="space-y-12 max-w-4xl mx-auto">
          {/* H2 #1 */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Landmark className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Valor das ações do Itaú Unibanco em tempo real
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              O <strong className="text-foreground">Itaú Unibanco (ITUB4)</strong> é o{" "}
              <strong className="text-foreground">maior banco privado da América Latina</strong> e
              uma das ações de maior peso no Ibovespa.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              O ticker <strong className="text-foreground">ITUB4</strong> corresponde às ações
              preferenciais, que oferecem maior liquidez e prioridade no pagamento de dividendos.
              O desempenho da ação é fortemente influenciado pela taxa Selic, pelo nível de
              inadimplência da carteira de crédito e pelos resultados trimestrais.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Calendário de resultados
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {["Fevereiro", "Maio", "Agosto", "Novembro"].map((mes, i) => (
                <Card key={mes} className="text-center hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                      {i + 1}º Balanço
                    </div>
                    <div className="font-bold text-foreground">{mes}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* H2 #2 */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Coins className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Cotação BBAS3: o Banco do Brasil paga bons dividendos?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              O <strong className="text-foreground">Banco do Brasil (BBAS3)</strong> é
              tradicionalmente uma das <strong className="text-foreground">maiores pagadoras de
              proventos</strong> do setor financeiro.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Payout</CardTitle>
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      Política
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-primary mb-2">40% – 45%</div>
                  <p className="text-sm text-muted-foreground">
                    do lucro líquido distribuído como dividendos e JCP
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Frequência</CardTitle>
                    <Badge variant="secondary">Pagamento</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-foreground mb-2">Trimestral</div>
                  <p className="text-sm text-muted-foreground">
                    proventos pagos a cada 3 meses ao longo do ano
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-l-4 border-l-primary bg-primary/5">
              <CardContent className="p-5 flex gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  <strong>Para o investidor de renda:</strong> BBAS3 é popular entre quem busca{" "}
                  <strong>renda passiva</strong> e estratégias de longo prazo. Por ter a União como
                  controladora, sofre influência política, o que gera volatilidade pontual mesmo
                  com fundamentos sólidos.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* H2 #3 */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Histórico de lucros e pagamentos das ações bancárias
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              O setor bancário brasileiro é historicamente um dos{" "}
              <strong className="text-foreground">mais lucrativos do mundo</strong>, com ROE
              frequentemente acima de 15% para os grandes bancos.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <PieChart className="w-5 h-5 text-primary" />
              Pontos fortes do setor
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  icon: Wallet,
                  title: "Lucros recorrentes",
                  desc: "Sustentados por margem financeira, tarifas e serviços diversificados.",
                },
                {
                  icon: Coins,
                  title: "Proventos constantes",
                  desc: "Dividendos e JCP pagos com frequência trimestral.",
                },
                {
                  icon: Percent,
                  title: "Dividend Yield",
                  desc: "Historicamente entre 6% e 10% ao ano, conforme ciclo de juros.",
                },
                {
                  icon: ShieldCheck,
                  title: "Sensibilidade à Selic",
                  desc: "Juros mais altos ampliam a margem financeira líquida.",
                },
              ].map((item) => (
                <Card key={item.title} className="hover:shadow-lg transition-all hover:-translate-y-0.5">
                  <CardContent className="p-5">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              Estratégia de carteira
            </h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              Para o investidor que busca exposição ao setor financeiro, combinar{" "}
              <strong className="text-foreground">ITUB4 e BBAS3</strong> em uma carteira
              diversificada é uma forma comum de equilibrar:
            </p>
            <ul className="space-y-3 mb-4">
              {[
                {
                  title: "Banco Privado",
                  desc: "ITUB4 traz eficiência operacional, governança consolidada e exposição ao varejo premium.",
                },
                {
                  title: "Banco Público",
                  desc: "BBAS3 oferece capilaridade nacional, exposição ao agronegócio e dividendos elevados.",
                },
              ].map((item) => (
                <li
                  key={item.title}
                  className="flex gap-3 p-4 rounded-lg bg-muted/50 border border-border/50"
                >
                  <div className="w-1 rounded-full bg-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Essa combinação captura o melhor dos dois modelos de negócio, equilibrando{" "}
              <strong className="text-foreground">crescimento</strong> e{" "}
              <strong className="text-foreground">renda passiva</strong>.
            </p>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default ItauHoje;
