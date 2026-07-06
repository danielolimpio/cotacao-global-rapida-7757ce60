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
  Vote,
  Globe2,
  Coins,
  PiggyBank,
  Layers,
} from "lucide-react";

const AaveHoje = () => {
  return (
    <Layout>
      <SEO path="/crypto/aave-hoje" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <PiggyBank className="w-4 h-4" />
            CRYPTO · AAVE · Empréstimos DeFi
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação do Aave (AAVE) Hoje
            <span className="block text-primary mt-2">Preço em Tempo Real em Real e Dólar</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe o valor do AAVE em tempo real, entenda como funciona o maior
            protocolo de empréstimos descentralizados do mundo e por que o token AAVE é
            central para a governança do ecossistema DeFi.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>AAVE/USD — Gráfico em Tempo Real</span>
                </div>
                <Badge variant="secondary">DeFi · Lending · Governança</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <TradingViewWidget symbol="AAVEUSD" height="384" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Coins, label: "Símbolo", value: "AAVE" },
            { icon: Globe2, label: "Protocolo", value: "Aave DAO" },
            { icon: PiggyBank, label: "Tipo", value: "Money Market" },
            { icon: Layers, label: "Redes", value: "Ethereum, Base, Arbitrum +" },
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
          <UniversalConverter assetType="crypto" assetSymbol="AAVE" assetName="Aave" />
        </div>

        <article className="space-y-12 max-w-4xl mx-auto">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Quanto vale 1 Aave (AAVE) hoje em real?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              O <strong className="text-foreground">Aave (AAVE)</strong> é o token de
              governança do protocolo Aave, o maior mercado descentralizado de empréstimos
              e depósitos do mundo, fundado por <strong className="text-foreground">Stani
              Kulechov</strong> em 2017 (originalmente como ETHLend). Para verificar
              <strong> quanto vale 1 AAVE hoje em reais</strong>, use o conversor AAVE/BRL
              em tempo real acima.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              A <strong>cotação do AAVE em dólar</strong> reflete o valor total travado no
              protocolo (TVL), receitas geradas para o DAO, expansão da stablecoin GHO e
              atualizações como Aave V4 e o programa Umbrella de safety module.
            </p>

            <Card className="border-l-4 border-l-primary bg-primary/5 my-6">
              <CardContent className="p-5 flex gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  <strong>Curiosidade:</strong> o Aave lidera consistentemente o ranking
                  DeFi com mais de <strong>US$ 20 bilhões em TVL</strong>, sendo o maior
                  protocolo de lending on-chain do mercado.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <PiggyBank className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Como funciona o protocolo Aave
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              O Aave é um <strong>money market descentralizado</strong>: depositantes
              fornecem liquidez em pools e ganham juros; tomadores travam colateral e pegam
              empréstimos sobrecolateralizados. Todo o processo é 100% on-chain, sem
              intermediários e disponível 24/7, incluindo os famosos <strong>flash
              loans</strong>, empréstimos instantâneos sem colateral pagos dentro do mesmo
              bloco.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                {
                  icon: PiggyBank,
                  title: "Depósito e Rendimento",
                  desc: "Deposite USDC, USDT, DAI, ETH ou BTC e receba aTokens que rendem juros continuamente no seu wallet.",
                },
                {
                  icon: Coins,
                  title: "Empréstimos on-chain",
                  desc: "Pegue emprestado até 80% do valor do colateral em taxas variáveis, sem análise de crédito ou KYC.",
                },
                {
                  icon: Vote,
                  title: "Governança Aave DAO",
                  desc: "Holders de AAVE votam propostas sobre novos mercados, parâmetros de risco, tesouraria e emissão do GHO.",
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
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Safety Module e stablecoin GHO
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              O <strong>Safety Module</strong> permite stakear AAVE (stkAAVE) para receber
              recompensas em AAVE e proteger o protocolo contra shortfalls. O
              <strong> GHO</strong> é a stablecoin descentralizada emitida diretamente pelo
              Aave, lastreada por colaterais dentro do protocolo — uma das principais
              apostas para escalar receita ao DAO.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl">Vantagens</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Rendimento sobre stablecoins e ETH",
                      "Empréstimos rápidos sem burocracia",
                      "Multi-chain com liquidez profunda",
                      "Governança ativa e transparente",
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
                      "Risco de liquidação em quedas fortes",
                      "Risco de smart contract",
                      "Slashing possível no Safety Module",
                      "Taxas de gas na Ethereum L1",
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
                  <strong>Importante:</strong> mantenha uma boa margem de saúde (Health
                  Factor acima de 1,5) ao pegar empréstimos no Aave — liquidações são
                  automáticas e cobram penalidades relevantes.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Como comprar AAVE no Brasil com PIX
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Para <strong>comprar AAVE com PIX</strong>, cadastre-se em Binance, Mercado
              Bitcoin, Foxbit, NovaDAX, Bitso ou Coinbase, complete o KYC, deposite reais
              via PIX e negocie o par AAVE/BRL ou AAVE/USDT. Para custódia, use MetaMask,
              Rabby, Trust Wallet ou hardware wallets Ledger e Trezor. Ao transferir, sempre
              use a <strong>rede correta</strong> (Ethereum, Base, Arbitrum ou Polygon)
              suportada pelo destino.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Perguntas frequentes sobre Aave (AAVE)
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1">
                <AccordionTrigger className="text-left">
                  Quanto vale 1 AAVE hoje em real?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  A cotação do AAVE em real é atualizada em tempo real neste conversor
                  AAVE/BRL, com preços das principais exchanges globais convertidos pela
                  cotação do dólar comercial.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger className="text-left">
                  O que é o protocolo Aave?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  O Aave é um protocolo DeFi de empréstimos e depósitos descentralizados.
                  Usuários depositam cripto para ganhar juros ou usam seus ativos como
                  colateral para pegar empréstimos sobrecolateralizados sem
                  intermediários e sem análise de crédito.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger className="text-left">
                  O que é o GHO?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  GHO é a stablecoin descentralizada lastreada em dólar emitida diretamente
                  pelo Aave. É gerada por usuários que travam colateral no protocolo,
                  paga uma taxa de estabilidade ao Aave DAO e concorre com DAI, USDC e
                  USDe no ecossistema DeFi.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger className="text-left">
                  Como funciona o staking de AAVE?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  O staking ocorre no Safety Module: você deposita AAVE (ou AAVE/ETH BPT)
                  e recebe stkAAVE, que rende recompensas em AAVE e serve como
                  seguro do protocolo. Em caso de déficit, até 30% dos fundos podem ser
                  slashados para cobrir shortfalls.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5">
                <AccordionTrigger className="text-left">
                  O que são flash loans?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Flash loans são empréstimos sem colateral que devem ser pegos e pagos
                  dentro da mesma transação. São usados por arbitradores, liquidadores e
                  desenvolvedores DeFi para operações complexas em um único bloco. Se o
                  empréstimo não for pago, a transação inteira é revertida.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q6">
                <AccordionTrigger className="text-left">
                  Aave é seguro? Já teve exploit?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  O core do Aave é auditado múltiplas vezes e considerado um dos protocolos
                  mais seguros do DeFi. Já houve incidentes pontuais em mercados isolados
                  (como oráculos de tokens ilíquidos), mas o protocolo principal nunca foi
                  hackeado. Ainda assim, existe risco de smart contract em qualquer DeFi.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q7">
                <AccordionTrigger className="text-left">
                  Qual o supply total de AAVE?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  O supply máximo do AAVE é de 16 milhões de tokens, distribuídos entre
                  ecossistema (Ecosystem Reserve), holders originais (migração 100:1 do
                  antigo LEND) e recompensas do Safety Module. É um dos supplies mais
                  enxutos entre projetos DeFi de grande porte.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default AaveHoje;
