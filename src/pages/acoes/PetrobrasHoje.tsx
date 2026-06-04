import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Fuel,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Coins,
  BarChart3,
  Globe2,
  Vote,
  ShieldCheck,
  Sparkles,
  Building2,
  Droplets,
} from "lucide-react";

const PetrobrasHoje = () => {
  return (
    <Layout>
      <SEO path="/acoes/petrobras" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero */}
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Fuel className="w-4 h-4" />
            B3 · PETR4 · PETR3
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação da Petrobras (PETR4 e PETR3) Hoje
            <span className="block text-primary mt-2">Preço em Tempo Real</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe ao vivo as cotações da maior petrolífera do Brasil, com gráficos profissionais
            da B3 e análise completa para investidores.
          </p>
        </header>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>PETR4 — Preferenciais</span>
                </div>
                <Badge variant="secondary">PN</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <TradingViewWidget symbol="BMFBOVESPA:PETR4" height="384" style="advanced" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>PETR3 — Ordinárias</span>
                </div>
                <Badge variant="secondary">ON</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <TradingViewWidget symbol="BMFBOVESPA:PETR3" height="384" style="advanced" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick facts */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Building2, label: "Setor", value: "Petróleo & Gás" },
            { icon: Globe2, label: "Bolsa", value: "B3 · NYSE" },
            { icon: Clock, label: "Pregão", value: "10h às 17h" },
            { icon: Coins, label: "Proventos", value: "Dividendos + JCP" },
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

        {/* Content */}
        <article className="space-y-12 max-w-4xl mx-auto">
          {/* H2 #1 */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Qual o valor da ação da Petrobras hoje?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              A cotação da Petrobras é atualizada <strong className="text-foreground">em tempo real</strong>{" "}
              durante o pregão da B3, que funciona de segunda a sexta-feira, das{" "}
              <strong className="text-foreground">10h às 17h</strong> (horário de Brasília).
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              Acima você acompanha os gráficos ao vivo de <strong className="text-foreground">PETR4</strong>{" "}
              (ações preferenciais) e <strong className="text-foreground">PETR3</strong> (ações ordinárias),
              os dois tickers mais negociados da Petróleo Brasileiro S.A. na bolsa brasileira.
            </p>

            <Card className="border-l-4 border-l-primary bg-primary/5 my-6">
              <CardContent className="p-5 flex gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  <strong>Dica:</strong> fora do horário de pregão, o valor exibido corresponde ao{" "}
                  <strong>preço de fechamento</strong> do último dia útil. Pequenas oscilações no
                  petróleo Brent ou no câmbio USD/BRL impactam diretamente a cotação.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* H2 #2 */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Vote className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Diferença entre PETR3 e PETR4: qual a melhor para investir?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              A Petrobras tem dois tipos de ações negociadas na B3. Entender a diferença é essencial
              antes de investir:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">PETR3</CardTitle>
                    <Badge className="bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 border-blue-500/20">
                      Ordinárias · ON
                    </Badge>
                  </div>
                  <h3 className="text-sm font-semibold text-muted-foreground mt-1">
                    Direito a voto em assembleias
                  </h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Voto nas decisões da companhia",
                      "Tag along de 100% (Lei das S.A.)",
                      "Menor liquidez que PETR4",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary hover:border-primary transition-colors shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">PETR4</CardTitle>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                      Preferenciais · PN
                    </Badge>
                  </div>
                  <h3 className="text-sm font-semibold text-muted-foreground mt-1">
                    Prioridade em dividendos
                  </h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Maior volume diário negociado",
                      "Prioridade no recebimento de proventos",
                      "Preferida por investidores de renda",
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

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Para o investidor focado em <strong className="text-foreground">renda passiva</strong>,
              a PETR4 tende a ser a escolha mais popular pela prioridade no pagamento de proventos e
              pela alta liquidez. Já a PETR3 pode apresentar pequenas distorções de preço, criando
              oportunidades para investidores mais experientes.
            </p>
          </section>

          {/* H2 #3 */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Coins className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Histórico de Dividendos da Petrobras
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              A Petrobras é reconhecida como uma das <strong className="text-foreground">maiores
              pagadoras de dividendos</strong> da bolsa brasileira. Sua política está atrelada à
              geração de caixa livre e ao nível de endividamento.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary" />
              Como funciona a política de proventos
            </h3>
            <ul className="space-y-3 mb-6">
              {[
                {
                  title: "Dividendos ordinários",
                  desc: "Distribuídos a partir do lucro líquido, calculados conforme a fórmula da política vigente.",
                },
                {
                  title: "Juros sobre Capital Próprio (JCP)",
                  desc: "Vantagem fiscal para a companhia; o investidor pessoa física tem 15% de IR retido na fonte.",
                },
                {
                  title: "Dividendos extraordinários",
                  desc: "Pagos em ciclos de petróleo em alta e câmbio favorável, quando o caixa supera o necessário.",
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
                  <strong>Atenção:</strong> a política de dividendos pode ser revisada conforme a
                  estratégia da companhia e o cenário econômico. Acompanhe os{" "}
                  <strong>fatos relevantes</strong> publicados na área de Relações com Investidores.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* H2 #4 */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                A Petrobras vai subir ou cair?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              O comportamento das ações da Petrobras está diretamente ligado a{" "}
              <strong className="text-foreground">três grandes vetores macroeconômicos</strong>:
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                {
                  icon: Droplets,
                  title: "Petróleo Brent",
                  desc: "Alta do barril favorece receita e margem, impulsionando a cotação.",
                },
                {
                  icon: DollarSign,
                  title: "Câmbio USD/BRL",
                  desc: "Receita em dólar e custo parcial em real: real fraco amplia o lucro.",
                },
                {
                  icon: ShieldCheck,
                  title: "Política & Governança",
                  desc: "Mudanças na política de preços e na gestão geram volatilidade.",
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

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Para projetar tendências, investidores combinam{" "}
              <strong className="text-foreground">análise técnica</strong> do gráfico acima com{" "}
              <strong className="text-foreground">análise fundamentalista</strong> (P/L, Dividend
              Yield, Dívida Líquida/EBITDA) e acompanhamento macroeconômico do setor de energia
              global.
            </p>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default PetrobrasHoje;
