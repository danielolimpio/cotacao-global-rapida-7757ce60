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
  Flame,
} from "lucide-react";

const BinanceCoinHoje = () => {
  return (
    <Layout>
      <SEO path="/crypto/binance-coin-hoje" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Coins className="w-4 h-4" />
            CRYPTO · BNB · Exchange Token
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação do Binance Coin (BNB) Hoje
            <span className="block text-primary mt-2">Valor em Tempo Real</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe a cotação do BNB, token nativo da maior exchange de criptomoedas do
            mundo e motor da BNB Chain.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>BNB/USD — Gráfico em Tempo Real</span>
                </div>
                <Badge variant="secondary">Cripto · Utility Token</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <TradingViewWidget symbol="BNBUSD" height="384" theme="light" style="advanced" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Coins, label: "Símbolo", value: "BNB" },
            { icon: Globe2, label: "Rede", value: "BNB Chain (BSC)" },
            { icon: ShieldCheck, label: "Consenso", value: "PoS Authority" },
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
          <UniversalConverter assetType="crypto" assetSymbol="BNB" assetName="Binance Coin" />
        </div>

        <article className="space-y-12 max-w-4xl mx-auto">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Quanto vale 1 BNB hoje?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              O <strong className="text-foreground">Binance Coin (BNB)</strong> é o token
              nativo do ecossistema Binance, lançado em 2017 como ERC-20 e migrado em 2019
              para sua própria blockchain — a <strong className="text-foreground">BNB Chain</strong>.
              É um dos principais ativos digitais por capitalização de mercado, com
              utilidade real dentro de um ecossistema com mais de 200 milhões de usuários.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              O BNB é usado para pagar taxas com desconto na exchange Binance, lançamentos
              de tokens (Launchpad), pagamentos, viagens, NFTs e como gas token da BNB
              Smart Chain.
            </p>

            <Card className="border-l-4 border-l-primary bg-primary/5 my-6">
              <CardContent className="p-5 flex gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  <strong>Curiosidade:</strong> ao pagar taxas de trading em BNB na Binance,
                  o usuário recebe <strong>desconto progressivo</strong> — um dos principais
                  motores de demanda histórica do token.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Flame className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                O que influencia o preço do BNB?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                {
                  icon: Flame,
                  title: "Burns Trimestrais",
                  desc: "A Binance queima BNB todo trimestre, reduzindo o supply até atingir 100 milhões de tokens — pressão deflacionária constante.",
                },
                {
                  icon: TrendingUp,
                  title: "Volume da Exchange",
                  desc: "Quanto maior o volume de trading na Binance, maior o uso de BNB para taxas — demanda direta pelo token.",
                },
                {
                  icon: Zap,
                  title: "BNB Chain & DeFi",
                  desc: "Projetos DeFi, GameFi e NFTs construídos na BNB Chain consomem BNB como gas, ampliando a utilidade.",
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
                <Wallet className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Para que serve o BNB?
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl">Dentro da Binance</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Desconto em taxas de spot e futuros",
                      "Acesso a IEOs no Binance Launchpad",
                      "Pagamentos com Binance Pay e Card",
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
                  <CardTitle className="text-xl">Na BNB Chain</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Gas token para smart contracts",
                      "Staking em validators e DeFi",
                      "Compra de NFTs e ativos digitais",
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
                  <strong>Atenção:</strong> o preço do BNB tem correlação alta com a
                  reputação regulatória da Binance. Acompanhe notícias de compliance em
                  jurisdições importantes (EUA, Europa, Brasil).
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
                BNB no Brasil
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              O BNB pode ser comprado diretamente em reais na Binance Brasil via PIX, e
              também em exchanges locais como Mercado Bitcoin e NovaDAX. É um dos tokens
              mais negociados pelos brasileiros, especialmente por quem opera DeFi e
              participa de IEOs.
            </p>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default BinanceCoinHoje;
