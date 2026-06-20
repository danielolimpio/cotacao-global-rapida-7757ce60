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
  Gem,
} from "lucide-react";

const LitecoinHoje = () => {
  return (
    <Layout>
      <SEO path="/crypto/litecoin-hoje" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Gem className="w-4 h-4" />
            CRYPTO · LTC · A Prata Digital
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação do Litecoin (LTC) Hoje
            <span className="block text-primary mt-2">Valor em Tempo Real</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe o preço do Litecoin, a "prata digital" do mercado cripto — uma das
            criptomoedas mais antigas, rápidas e confiáveis para pagamentos.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>LTC/USD — Gráfico em Tempo Real</span>
                </div>
                <Badge variant="secondary">Cripto · Pagamentos P2P</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <TradingViewWidget symbol="LTCUSD" height="384" theme="light" style="advanced" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Coins, label: "Símbolo", value: "LTC · Ł" },
            { icon: Globe2, label: "Rede", value: "Litecoin Blockchain" },
            { icon: ShieldCheck, label: "Consenso", value: "Proof of Work (Scrypt)" },
            { icon: Clock, label: "Bloco", value: "2,5 minutos" },
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
          <UniversalConverter assetType="crypto" assetSymbol="LTC" assetName="Litecoin" />
        </div>

        <article className="space-y-12 max-w-4xl mx-auto">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Quanto vale 1 Litecoin hoje?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              O <strong className="text-foreground">Litecoin (LTC)</strong> foi criado em
              2011 por <strong className="text-foreground">Charlie Lee</strong>, ex-engenheiro
              do Google, como uma versão "mais leve e rápida" do Bitcoin. Por isso o
              apelido <em>"prata para o ouro do Bitcoin"</em>.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Sua principal diferença técnica: blocos a cada <strong>2,5 minutos</strong>{" "}
              (4× mais rápido que BTC) e algoritmo <strong>Scrypt</strong> em vez de SHA-256.
              O supply máximo é de <strong>84 milhões de LTC</strong> — exatamente 4× o do
              Bitcoin.
            </p>

            <Card className="border-l-4 border-l-primary bg-primary/5 my-6">
              <CardContent className="p-5 flex gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  <strong>Curiosidade:</strong> o Litecoin foi a primeira grande rede a
                  ativar o <strong>SegWit</strong> e a testar a <strong>Lightning Network</strong>{" "}
                  com sucesso, servindo de laboratório para o próprio Bitcoin.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                O que move o preço do Litecoin?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                {
                  icon: Zap,
                  title: "Halving Próprio",
                  desc: "A cada 840.000 blocos (aprox. 4 anos), a recompensa de mineração do LTC cai pela metade — gatilho histórico de alta.",
                },
                {
                  icon: Landmark,
                  title: "Adoção em Pagamentos",
                  desc: "LTC é aceito em milhares de comerciantes via BitPay e processadores cripto pela velocidade e taxa baixa.",
                },
                {
                  icon: TrendingUp,
                  title: "Correlação com BTC",
                  desc: "Por ser fork do Bitcoin, o LTC tende a seguir os ciclos macro do BTC, com volatilidade própria.",
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
                <Gem className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Litecoin vs Bitcoin
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Litecoin (LTC)</CardTitle>
                    <Badge className="bg-primary/10 text-primary border-primary/20">Pagamentos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Bloco a cada 2,5 minutos",
                      "Supply máximo: 84 milhões",
                      "Taxa por transação baixíssima",
                      "Algoritmo Scrypt (ASIC-resistant inicial)",
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
                    <CardTitle className="text-xl">Bitcoin (BTC)</CardTitle>
                    <Badge variant="secondary">Reserva de Valor</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Bloco a cada 10 minutos",
                      "Supply máximo: 21 milhões",
                      "Taxas variáveis (podem ser altas)",
                      "Algoritmo SHA-256",
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
                  <strong>Atenção:</strong> apesar da estabilidade técnica, o LTC sofre
                  com competição de stablecoins e novas L2 do Bitcoin. Avalie o cenário
                  competitivo antes de investir.
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
                Como comprar Litecoin no Brasil
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              O LTC está listado em praticamente todas as exchanges brasileiras (Mercado
              Bitcoin, Binance, NovaDAX, Foxbit) com depósito via PIX. Para self-custody,
              use carteiras como <strong>Litecoin Core</strong>, <strong>Electrum-LTC</strong>{" "}
              ou hardware wallets (Ledger, Trezor). É uma das criptos mais práticas para
              testar transferências cripto de baixo custo.
            </p>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default LitecoinHoje;
