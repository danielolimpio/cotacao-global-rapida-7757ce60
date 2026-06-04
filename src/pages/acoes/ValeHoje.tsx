import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mountain,
  TrendingUp,
  DollarSign,
  Clock,
  Coins,
  BarChart3,
  Globe2,
  Factory,
  Sparkles,
  Building2,
  Ship,
  CheckCircle2,
  Leaf,
  Calendar,
} from "lucide-react";

const ValeHoje = () => {
  return (
    <Layout>
      <SEO path="/acoes/vale" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero */}
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Mountain className="w-4 h-4" />
            B3 · VALE3 · NYSE: VALE
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação da Vale (VALE3) Hoje
            <span className="block text-primary mt-2">Ações e Dividendos em Tempo Real</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe o preço ao vivo da maior mineradora do Brasil e uma das maiores produtoras de
            minério de ferro do mundo.
          </p>
        </header>

        {/* Chart */}
        <Card className="border-2 border-primary/20 shadow-lg mb-10">
          <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                <span>VALE3 — Gráfico em Tempo Real</span>
              </div>
              <Badge variant="secondary">ON</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="h-96">
              <TradingViewWidget symbol="BMFBOVESPA:VALE3" height="384" style="advanced" />
            </div>
          </CardContent>
        </Card>

        {/* Quick facts */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Building2, label: "Setor", value: "Mineração" },
            { icon: Globe2, label: "Maior Comprador", value: "China (~70%)" },
            { icon: Clock, label: "Pregão B3", value: "10h às 17h" },
            { icon: Calendar, label: "Dividendos", value: "Mar e Set" },
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
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Preço da ação da Vale hoje na B3
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              A <strong className="text-foreground">Vale (VALE3)</strong> é uma das maiores
              mineradoras do mundo e uma das ações com{" "}
              <strong className="text-foreground">maior peso no índice Ibovespa</strong>.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              A cotação acima é atualizada em tempo real durante o pregão da B3 (das 10h às 17h,
              horário de Brasília). Por ser uma exportadora global de minério de ferro, seu preço
              é fortemente influenciado pela demanda chinesa, pelo câmbio dólar/real e pelos
              preços internacionais das commodities metálicas.
            </p>

            <Card className="border-l-4 border-l-primary bg-primary/5 my-6">
              <CardContent className="p-5 flex gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  <strong>Curiosidade:</strong> além da B3, a Vale também é listada na{" "}
                  <strong>NYSE</strong> sob o ticker <strong>VALE</strong>, na forma de ADR, o que
                  aumenta sua exposição a investidores globais.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* H2 #2 */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Coins className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Como a Vale paga dividendos aos seus acionistas?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              A Vale é reconhecida como uma das{" "}
              <strong className="text-foreground">maiores pagadoras de proventos</strong> da bolsa
              brasileira.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              Política de remuneração atual
            </h3>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                {
                  title: "Mínimo",
                  value: "30%",
                  desc: "do EBITDA ajustado menos investimentos correntes",
                },
                {
                  title: "Frequência",
                  value: "Semestral",
                  desc: "pagamentos em março e setembro",
                },
                {
                  title: "Extras",
                  value: "Sim",
                  desc: "dividendos extraordinários em anos de alta",
                },
              ].map((item) => (
                <Card key={item.title} className="hover:shadow-lg transition-all hover:-translate-y-0.5">
                  <CardContent className="p-5 text-center">
                    <div className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                      {item.title}
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{item.value}</div>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              Tipos de proventos pagos
            </h3>
            <ul className="space-y-3 mb-4">
              {[
                {
                  title: "Dividendos",
                  desc: "Isentos de Imposto de Renda para pessoa física.",
                },
                {
                  title: "Juros sobre Capital Próprio (JCP)",
                  desc: "15% de IR retido na fonte para pessoa física.",
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
              Para receber, basta ter a ação em custódia na{" "}
              <strong className="text-foreground">data-com</strong> divulgada via fato relevante.
            </p>
          </section>

          {/* H2 #3 */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Factory className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                O preço do minério de ferro afeta a VALE3?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              <strong className="text-foreground">Sim — e de forma direta.</strong> O minério de
              ferro responde pela maior fatia da receita da Vale. O gráfico de VALE3 costuma se
              mover em sintonia com a cotação do minério no porto chinês de{" "}
              <strong className="text-foreground">Qingdao</strong>.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Principais drivers da cotação
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  icon: Globe2,
                  title: "Demanda da China",
                  desc: "Consome cerca de 70% do minério marítimo global. Estímulos ao setor imobiliário e infraestrutura elevam o preço.",
                },
                {
                  icon: Ship,
                  title: "Oferta global",
                  desc: "Problemas operacionais em concorrentes (Austrália, África) reduzem a oferta e favorecem a Vale.",
                },
                {
                  icon: DollarSign,
                  title: "Câmbio USD/BRL",
                  desc: "Vendas em dólar e custos em real: real fraco amplia a receita convertida.",
                },
                {
                  icon: Leaf,
                  title: "ESG & Governança",
                  desc: "Eventos de segurança operacional influenciam diretamente o sentimento do investidor.",
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

            <Card className="border-l-4 border-l-primary bg-primary/5">
              <CardContent className="p-5 flex gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  <strong>Estratégia premium:</strong> combinar o gráfico em tempo real de VALE3
                  com o acompanhamento diário do minério de ferro em Qingdao é a forma mais
                  eficiente de entender os movimentos da ação.
                </p>
              </CardContent>
            </Card>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default ValeHoje;
