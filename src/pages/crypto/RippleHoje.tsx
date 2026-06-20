import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import TradingViewWidget from "@/components/TradingViewWidget";
import UniversalConverter from "@/components/UniversalConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Landmark,
  BarChart3,
  Sparkles,
  Wallet,
  ShieldCheck,
  Zap,
  Globe2,
  Coins,
  Send,
} from "lucide-react";

const RippleHoje = () => {
  return (
    <Layout>
      <SEO path="/crypto/ripple-hoje" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Send className="w-4 h-4" />
            CRYPTO · XRP · Pagamentos Globais
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação do Ripple (XRP) Hoje
            <span className="block text-primary mt-2">Valor em Tempo Real</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe o preço do XRP, a criptomoeda focada em pagamentos transfronteiriços
            instantâneos e adotada por bancos no mundo todo.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>XRP/USD — Gráfico em Tempo Real</span>
                </div>
                <Badge variant="secondary">Cripto · Pagamentos</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <TradingViewWidget symbol="XRPUSD" height="384" theme="light" style="advanced" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Coins, label: "Símbolo", value: "XRP" },
            { icon: Globe2, label: "Rede", value: "XRP Ledger" },
            { icon: ShieldCheck, label: "Consenso", value: "RPCA · Validadores" },
            { icon: Clock, label: "Mercado", value: "24/7 · 365 dias" },
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
          <UniversalConverter assetType="crypto" assetSymbol="XRP" assetName="Ripple" />
        </div>

        <article className="space-y-12 max-w-4xl mx-auto">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Quanto vale 1 XRP hoje?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              O <strong className="text-foreground">XRP</strong> é a criptomoeda nativa do{" "}
              <strong className="text-foreground">XRP Ledger</strong>, uma blockchain
              pública criada em 2012. A empresa <strong>Ripple Labs</strong> usa o XRP em
              soluções como o <strong>On-Demand Liquidity (ODL)</strong>, permitindo
              transferências internacionais entre moedas fiduciárias em <strong>3 a 5
              segundos</strong> com taxa de frações de centavo.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              O supply total é de <strong>100 bilhões de XRP</strong>, todos já criados
              (sem mineração). Centenas de instituições financeiras testam ou usam
              tecnologia da Ripple para liquidações globais.
            </p>

            <Card className="border-l-4 border-l-primary bg-primary/5 my-6">
              <CardContent className="p-5 flex gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  <strong>Curiosidade:</strong> uma transação no XRP Ledger consome cerca de{" "}
                  <strong>0,0079 kWh</strong> — milhares de vezes menos do que Bitcoin,
                  tornando o XRP um dos ativos digitais mais sustentáveis.
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
                O que move o preço do XRP?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                {
                  icon: Landmark,
                  title: "Caso SEC vs Ripple",
                  desc: "Decisões judiciais nos EUA sobre o status do XRP como security afetam diretamente a cotação.",
                },
                {
                  icon: Send,
                  title: "Adoção Bancária",
                  desc: "Parcerias com bancos e processadores de pagamento globais (RippleNet, ODL) impulsionam demanda real.",
                },
                {
                  icon: TrendingUp,
                  title: "Macro Cripto",
                  desc: "Ciclos do Bitcoin, halvings e fluxo institucional repercutem em todo o mercado, incluindo o XRP.",
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
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                XRP vs SWIFT: a revolução das remessas
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Ripple / XRP</CardTitle>
                    <Badge className="bg-primary/10 text-primary border-primary/20">Moderno</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Liquidação em 3 a 5 segundos",
                      "Taxa de frações de centavo",
                      "Funciona 24/7, sem feriados bancários",
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
                    <CardTitle className="text-xl">SWIFT Tradicional</CardTitle>
                    <Badge variant="secondary">Legado</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Pode levar de 1 a 5 dias úteis",
                      "Tarifas elevadas por intermediários",
                      "Sujeito a horários e feriados bancários",
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
                  <strong>Atenção:</strong> o XRP é altamente sensível a notícias
                  regulatórias. Acompanhe decisões da SEC e novas parcerias da Ripple
                  Labs antes de tomar decisões de investimento.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Wallet className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Como comprar XRP no Brasil
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              O XRP está disponível nas principais exchanges brasileiras (Mercado Bitcoin,
              Binance, NovaDAX, Foxbit) com depósito via PIX. Para custódia própria, use
              carteiras compatíveis como Xumm, Ledger ou Trezor. Lembre-se: cada carteira
              XRP precisa manter <strong>reserva mínima de 10 XRP</strong> ativa na rede.
            </p>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default RippleHoje;
