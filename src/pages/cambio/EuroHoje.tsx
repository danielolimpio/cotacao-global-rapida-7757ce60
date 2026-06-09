import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import TradingViewWidget from "@/components/TradingViewWidget";
import CurrencyConverter from "@/components/CurrencyConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Euro,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Landmark,
  BarChart3,
  Globe2,
  Plane,
  ShieldCheck,
  Sparkles,
  Building2,
  Banknote,
} from "lucide-react";

const EuroHoje = () => {
  return (
    <Layout>
      <SEO path="/cambio/euro-hoje" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero */}
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Euro className="w-4 h-4" />
            FOREX · EUR/BRL · EUR/USD
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação do Euro (EUR) Hoje
            <span className="block text-primary mt-2">Valor em Tempo Real</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe ao vivo o valor do Euro frente ao Real e ao Dólar, com gráficos profissionais
            e conversor atualizado para viagens, investimentos e remessas internacionais.
          </p>
        </header>

        {/* Chart */}
        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>EUR/BRL — Gráfico em Tempo Real</span>
                </div>
                <Badge variant="secondary">FX</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <TradingViewWidget symbol="EURBRL" height="384" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick facts */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Globe2, label: "Região", value: "Zona do Euro" },
            { icon: Landmark, label: "Emissor", value: "BCE" },
            { icon: Building2, label: "Países", value: "20 nações" },
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

        {/* Converter */}
        <div className="mb-12">
          <CurrencyConverter type="euro" />
        </div>

        {/* Content */}
        <article className="space-y-12 max-w-4xl mx-auto">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Quanto vale 1 Euro hoje em Real?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              A cotação do Euro (EUR) frente ao Real (BRL) é atualizada{" "}
              <strong className="text-foreground">em tempo real</strong> no mercado interbancário
              global, que opera 24 horas por dia, de segunda a sexta-feira.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              O gráfico acima reflete o <strong className="text-foreground">valor comercial</strong>{" "}
              do Euro, usado em operações entre bancos. Para compra em casas de câmbio e cartões,
              o valor inclui spread, IOF e tarifas que podem variar de 4% a 7%.
            </p>

            <Card className="border-l-4 border-l-primary bg-primary/5 my-6">
              <CardContent className="p-5 flex gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  <strong>Dica:</strong> use sempre a cotação <strong>turismo</strong> para
                  estimar quanto vai gastar em viagens e <strong>comercial</strong> para
                  investimentos, transferências internacionais e contratos.
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
                O que move o preço do Euro?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              O Euro é a segunda moeda mais negociada do mundo, atrás apenas do dólar americano.
              Sua cotação responde a <strong className="text-foreground">três grandes vetores</strong>:
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                {
                  icon: Landmark,
                  title: "BCE & Juros",
                  desc: "As decisões do Banco Central Europeu sobre a taxa de juros impactam diretamente o fluxo cambial.",
                },
                {
                  icon: TrendingUp,
                  title: "Inflação na Zona do Euro",
                  desc: "Dados de IPC e PMI dos 20 países afetam a percepção sobre a força da moeda.",
                },
                {
                  icon: Globe2,
                  title: "Geopolítica & Energia",
                  desc: "Crises energéticas e tensões com Rússia, Ucrânia e EUA geram volatilidade.",
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
                Onde comprar Euro com a melhor cotação?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              Para quem está planejando uma viagem para a Europa ou precisa enviar dinheiro para
              fora, existem <strong className="text-foreground">três caminhos</strong> principais:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Espécie</CardTitle>
                    <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20">Casas de câmbio</Badge>
                  </div>
                  <h3 className="text-sm font-semibold text-muted-foreground mt-1">
                    Para gastos do dia a dia em viagens
                  </h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Tarifa IOF de 1,1% sobre o valor",
                      "Spread médio de 3% a 5%",
                      "Aceito em qualquer estabelecimento",
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
                    Trava a cotação e protege contra furto
                  </h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "IOF reduzido de 3,5%",
                      "Cotação travada na compra",
                      "Usado como débito ou crédito",
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
                  <strong>Atenção:</strong> cartões de crédito internacionais cobram{" "}
                  <strong>IOF de 3,5%</strong> mais o spread bancário, geralmente sendo a opção
                  mais cara para compras no exterior.
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
                Vale a pena investir em Euro?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              O Euro funciona como uma <strong className="text-foreground">reserva de valor</strong>
              {" "}para diversificação cambial. Investidores brasileiros usam o EUR para se proteger
              de cenários de desvalorização do Real ou aproveitar oportunidades em ETFs e ações
              europeias.
            </p>
            <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary" />
              Principais formas de exposição ao Euro
            </h3>
            <ul className="space-y-3">
              {[
                { title: "ETFs internacionais", desc: "BDRs de ETFs como IEUR oferecem exposição passiva a empresas europeias." },
                { title: "Fundos cambiais", desc: "Disponíveis em corretoras nacionais, replicam a variação do EUR/BRL." },
                { title: "Conta global multimoedas", desc: "Permite manter saldo em Euro e investir em ativos da zona do euro." },
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

export default EuroHoje;
