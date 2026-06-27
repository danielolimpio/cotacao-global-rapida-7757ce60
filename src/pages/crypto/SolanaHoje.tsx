import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import TradingViewWidget from "@/components/TradingViewWidget";
import UniversalConverter from "@/components/UniversalConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle2,
  AlertTriangle,
  BarChart3,
  Sparkles,
  ShieldCheck,
  Globe2,
  Coins,
  Zap,
  Rocket,
  Layers,
} from "lucide-react";

const SolanaHoje = () => {
  return (
    <Layout>
      <SEO path="/crypto/solana-hoje" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Rocket className="w-4 h-4" />
            CRYPTO · SOL · Velocidade e Baixas Taxas
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação do Solana (SOL) Hoje
            <span className="block text-primary mt-2">Preço em Tempo Real em Real e Dólar</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe o valor do Solana atualizado em tempo real, entenda o consenso Proof of
            History, o ecossistema DeFi e NFT, e por que o SOL é considerado um dos principais
            concorrentes do Ethereum.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>SOL/USD — Gráfico em Tempo Real</span>
                </div>
                <Badge variant="secondary">Cripto · Layer 1</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <TradingViewWidget symbol="SOLUSD" height="384" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Coins, label: "Símbolo", value: "SOL" },
            { icon: Globe2, label: "Rede", value: "Solana Mainnet Beta" },
            { icon: Zap, label: "TPS Teórico", value: "65.000 tx/s" },
            { icon: Clock, label: "Bloco", value: "~400 ms" },
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
          <UniversalConverter assetType="crypto" assetSymbol="SOL" assetName="Solana" />
        </div>

        <article className="space-y-12 max-w-4xl mx-auto">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Quanto vale 1 Solana (SOL) hoje em real?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              O <strong className="text-foreground">Solana (SOL)</strong> é a criptomoeda nativa
              da blockchain Solana, criada por <strong className="text-foreground">Anatoly
              Yakovenko</strong> e lançada em 2020. Conhecida pela alta velocidade e taxas
              fracionárias, tornou-se uma das principais Layer 1 do mercado. Para conferir
              <strong> quanto vale 1 SOL hoje em reais</strong>, utilize o conversor de Solana
              para BRL com cotação em tempo real abaixo.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              A <strong>cotação do Solana em dólar</strong> reflete a adoção crescente de
              projetos DeFi, NFTs (Magic Eden, Tensor), memecoins e jogos blockchain construídos
              sobre sua infraestrutura ultra-rápida.
            </p>

            <Card className="border-l-4 border-l-primary bg-primary/5 my-6">
              <CardContent className="p-5 flex gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  <strong>Curiosidade:</strong> Solana processa transações em cerca de
                  <strong> 400 milissegundos por bloco</strong> e cobra taxas que custam frações
                  de centavo — algumas das menores do mercado cripto.
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
                O que é Proof of History e por que importa
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              Solana usa um mecanismo inovador chamado <strong>Proof of History (PoH)</strong>
              combinado com Proof of Stake. O PoH cria uma "linha do tempo" criptográfica que
              permite aos validadores processar transações em paralelo, alcançando alta
              throughput sem comprometer a descentralização.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                {
                  icon: Zap,
                  title: "Velocidade Extrema",
                  desc: "Capacidade teórica de até 65 mil transações por segundo, ideal para DeFi de alta frequência e jogos on-chain.",
                },
                {
                  icon: Coins,
                  title: "Taxas Fracionárias",
                  desc: "Transações custam centavos de dólar, viabilizando microtransações, airdrops massivos e mint de NFTs em escala.",
                },
                {
                  icon: Layers,
                  title: "Ecossistema Robusto",
                  desc: "DeFi (Jupiter, Raydium), NFTs (Magic Eden), DePIN (Helium, Render) e memecoins explosivas como BONK e WIF.",
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
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Staking de SOL: como gerar renda passiva
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              O <strong>staking de Solana</strong> permite gerar renda passiva delegando tokens
              SOL a validadores confiáveis. Carteiras como Phantom, Solflare e Backpack oferecem
              staking nativo com poucos cliques e sem perda de custódia.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl">Vantagens</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Rendimento médio de 6% a 8% ao ano",
                      "Liquid staking disponível (JitoSOL, mSOL)",
                      "Sem mínimo para delegação",
                      "Unstake em apenas 2-3 dias (1 epoch)",
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
                  <CardTitle className="text-xl">Pontos de atenção</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Rede já teve paradas (outages) no passado",
                      "Volatilidade alta impacta valor em BRL",
                      "Liquid staking adiciona risco de smart contract",
                      "Tributação de rendimentos no Brasil",
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
                  <strong>Importante:</strong> escolha validadores com baixa comissão (5%-10%) e
                  bom histórico de uptime para maximizar suas recompensas de staking.
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
                Como comprar Solana no Brasil com PIX
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              <strong>Comprar Solana com PIX</strong> é fácil: cadastre-se na Binance, Mercado
              Bitcoin, Foxbit, NovaDAX ou Coinbase, conclua o KYC, deposite via PIX e compre o
              par SOL/BRL ou SOL/USDT. Para armazenar com segurança, use a
              <strong> Phantom Wallet</strong>, Solflare, Backpack ou hardware wallets como
              Ledger Nano X e Trezor Safe 3.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Perguntas frequentes sobre Solana (SOL)
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1">
                <AccordionTrigger className="text-left">
                  Quanto vale 1 Solana hoje em real?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  A cotação do Solana hoje em real é atualizada em tempo real nesta página
                  através do conversor SOL/BRL, usando dados das principais exchanges globais
                  combinados à cotação do dólar comercial.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger className="text-left">
                  Solana vai chegar a 1000 dólares?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Não há como prever preços futuros. O preço do SOL depende de fatores como
                  adoção de dApps, lançamento de ETF spot de Solana, condições macroeconômicas e
                  ciclos do mercado cripto. Análises e projeções devem ser tratadas como
                  especulação, nunca como recomendação de investimento.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger className="text-left">
                  Qual a diferença entre Solana e Ethereum?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Solana é mais rápida (400ms vs 12s) e mais barata (centavos vs dólares) que
                  Ethereum, mas tem histórico de instabilidade e menor descentralização (1.500+
                  validadores vs 1 milhão de validadores do ETH). Ambas convivem com propostas
                  diferentes no mercado.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger className="text-left">
                  Como criar uma carteira Solana?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Baixe a extensão Phantom (phantom.app) ou Solflare, crie uma nova carteira,
                  salve a seed phrase em local seguro offline e nunca a compartilhe. Você poderá
                  receber, enviar e fazer staking de SOL, além de interagir com dApps e comprar
                  NFTs no ecossistema.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5">
                <AccordionTrigger className="text-left">
                  Qual o supply total de Solana?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Solana não tem supply máximo fixo. A emissão começou em 8% ao ano e diminui
                  15% anualmente até estabilizar em 1,5% ao ano. Parte das taxas de transação é
                  queimada, criando pressão deflacionária conforme o uso cresce.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q6">
                <AccordionTrigger className="text-left">
                  Quais os principais NFTs e dApps em Solana?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Os destaques incluem Magic Eden e Tensor (marketplaces NFT), Jupiter
                  (agregador DEX), Raydium e Orca (AMMs), Marinade e Jito (liquid staking),
                  Drift e Zeta (perpétuos), Star Atlas (gaming) e coleções NFT como Mad Lads,
                  DeGods e SMB.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q7">
                <AccordionTrigger className="text-left">
                  É seguro investir em Solana após as quedas de rede?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  A Solana teve várias paradas em 2021-2022, mas vem fortalecendo a rede com
                  atualizações como Firedancer (cliente alternativo escrito em C++ pela Jump
                  Crypto), que deve trazer maior estabilidade e descentralização. Ainda assim,
                  invista apenas o que pode perder e diversifique sua carteira.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default SolanaHoje;
