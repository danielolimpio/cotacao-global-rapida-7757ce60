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
  Code2,
  Layers,
} from "lucide-react";

const EthereumHoje = () => {
  return (
    <Layout>
      <SEO path="/crypto/ethereum-hoje" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Code2 className="w-4 h-4" />
            CRYPTO · ETH · Smart Contracts
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação do Ethereum (ETH) Hoje
            <span className="block text-primary mt-2">Valor em Tempo Real</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe o preço do Ethereum, a segunda maior criptomoeda do mundo e a principal
            plataforma de contratos inteligentes, DeFi e NFTs.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>ETH/USD — Gráfico em Tempo Real</span>
                </div>
                <Badge variant="secondary">Cripto · Plataforma</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <TradingViewWidget symbol="ETHUSD" height="384" theme="light" style="advanced" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Coins, label: "Símbolo", value: "ETH · Ξ" },
            { icon: Globe2, label: "Rede", value: "Ethereum Mainnet" },
            { icon: ShieldCheck, label: "Consenso", value: "Proof of Stake" },
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
          <UniversalConverter assetType="crypto" assetSymbol="ETH" assetName="Ethereum" />
        </div>

        <article className="space-y-12 max-w-4xl mx-auto">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Quanto vale 1 Ethereum hoje?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              O <strong className="text-foreground">Ethereum (ETH)</strong> é a segunda maior
              criptomoeda do mundo em capitalização de mercado, criada em 2015 por{" "}
              <strong className="text-foreground">Vitalik Buterin</strong>. Diferente do
              Bitcoin, o Ethereum não é apenas uma moeda — é uma{" "}
              <strong className="text-foreground">plataforma de computação descentralizada</strong>{" "}
              que executa contratos inteligentes (smart contracts).
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              O ETH é usado como combustível (<em>gas</em>) para pagar pelas operações na
              rede, desde uma simples transferência até a execução de aplicações DeFi
              bilionárias.
            </p>

            <Card className="border-l-4 border-l-primary bg-primary/5 my-6">
              <CardContent className="p-5 flex gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  <strong>Curiosidade:</strong> a menor unidade do ETH é o <strong>wei</strong>{" "}
                  (1 ETH = 10¹⁸ wei). O gwei (10⁹ wei) é a unidade comum para taxas de gas.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Layers className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                O que move o preço do Ethereum?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                {
                  icon: Zap,
                  title: "DeFi & NFTs",
                  desc: "A maior parte do ecossistema DeFi e dos NFTs roda em Ethereum, gerando demanda constante por ETH.",
                },
                {
                  icon: ShieldCheck,
                  title: "Staking & PoS",
                  desc: "Desde o Merge (2022), o ETH usa Proof of Stake — milhões de tokens travados reduzem o supply circulante.",
                },
                {
                  icon: Landmark,
                  title: "ETFs Spot Aprovados",
                  desc: "A SEC aprovou ETFs spot de ETH em 2024, abrindo caminho para investidores institucionais nos EUA.",
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
                Como comprar Ethereum no Brasil
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              No Brasil, o ETH pode ser adquirido em exchanges regulamentadas com depósito
              via PIX. Após a compra, você pode mantê-lo na exchange ou enviá-lo para
              carteiras self-custody compatíveis (MetaMask, Ledger, Trezor).
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Exchanges Brasileiras</CardTitle>
                    <Badge className="bg-primary/10 text-primary border-primary/20">Iniciantes</Badge>
                  </div>
                  <h3 className="text-sm font-semibold text-muted-foreground mt-1">
                    Mercado Bitcoin, NovaDAX, Foxbit
                  </h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "PIX instantâneo em reais",
                      "Suporte e KYC em português",
                      "Possibilidade de fazer staking dentro da plataforma",
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
                    <CardTitle className="text-xl">DeFi & Wallets</CardTitle>
                    <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20">Avançado</Badge>
                  </div>
                  <h3 className="text-sm font-semibold text-muted-foreground mt-1">
                    MetaMask, Uniswap, Lido
                  </h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Controle total das chaves privadas",
                      "Acesso a DeFi, NFTs e dApps",
                      "Atenção a taxas de gas e segurança da seed",
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
                  <strong>Importante:</strong> ganhos com criptomoedas acima de R$ 35.000
                  ao mês em vendas são tributados pela Receita Federal. Declare suas
                  operações na DIRPF.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Ethereum 2.0, Merge e Layer 2
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              Em setembro de 2022, o Ethereum completou <strong>The Merge</strong>,
              migrando de Proof of Work para Proof of Stake e reduzindo seu consumo
              energético em mais de 99%. Em seguida, vieram atualizações como{" "}
              <strong>Shanghai</strong> (saques de staking) e <strong>Dencun</strong>{" "}
              (redução de taxas em L2).
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Soluções <strong>Layer 2</strong> como Arbitrum, Optimism, Base e zkSync
              aumentam a escalabilidade da rede com taxas de centavos, mantendo a
              segurança da camada principal — pavimentando o caminho para o uso massivo
              da blockchain.
            </p>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default EthereumHoje;
