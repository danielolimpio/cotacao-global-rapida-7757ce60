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
  Radio,
  Globe2,
  Coins,
  Link2,
  Layers,
} from "lucide-react";

const ChainlinkHoje = () => {
  return (
    <Layout>
      <SEO path="/crypto/chainlink-hoje" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Radio className="w-4 h-4" />
            CRYPTO · LINK · Padrão de Oráculos
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação do Chainlink (LINK) Hoje
            <span className="block text-primary mt-2">Preço em Tempo Real em Real e Dólar</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe o valor do LINK em tempo real, entenda como a rede Chainlink conecta
            contratos inteligentes ao mundo real via oráculos descentralizados e por que é
            a infraestrutura padrão de dados on-chain do mercado DeFi.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>LINK/USD — Gráfico em Tempo Real</span>
                </div>
                <Badge variant="secondary">Oráculos · Middleware Web3</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <TradingViewWidget symbol="LINKUSD" height="384" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Coins, label: "Símbolo", value: "LINK" },
            { icon: Globe2, label: "Rede", value: "Chainlink Network" },
            { icon: Radio, label: "Função", value: "Oráculos Descentralizados" },
            { icon: Layers, label: "CCIP", value: "Interoperabilidade Cross-Chain" },
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
          <UniversalConverter assetType="crypto" assetSymbol="LINK" assetName="Chainlink" />
        </div>

        <article className="space-y-12 max-w-4xl mx-auto">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Quanto vale 1 Chainlink (LINK) hoje em real?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              O <strong className="text-foreground">Chainlink (LINK)</strong> é o token
              nativo da rede Chainlink, criada por <strong className="text-foreground">
              Sergey Nazarov</strong> e Steve Ellis em 2017. É a maior rede de oráculos
              descentralizados do mundo, usada para levar dados off-chain (preços, clima,
              esportes, APIs) para contratos inteligentes em qualquer blockchain. Para
              conferir <strong>quanto vale 1 LINK hoje em reais</strong>, use o conversor
              LINK/BRL em tempo real acima.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              A <strong>cotação do Chainlink em dólar</strong> costuma refletir o crescimento
              do valor total garantido pelos oráculos (TVE), a adoção do CCIP por
              instituições e a expansão para novos setores como tokenização de RWA e
              seguros paramétricos.
            </p>

            <Card className="border-l-4 border-l-primary bg-primary/5 my-6">
              <CardContent className="p-5 flex gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  <strong>Curiosidade:</strong> a Chainlink já protege mais de
                  <strong> US$ 20 trilhões em valor transacionado</strong>, com integrações
                  em bancos como Swift, ANZ e Fidelity International.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Radio className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                O que são oráculos e por que a Chainlink importa
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              Blockchains não conseguem acessar dados externos por conta própria. Os
              <strong> oráculos descentralizados</strong> da Chainlink resolvem esse
              problema, agregando informações de múltiplas fontes confiáveis e entregando
              on-chain de forma resistente a manipulação. Sem oráculos confiáveis, DeFi não
              existiria.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                {
                  icon: Radio,
                  title: "Price Feeds",
                  desc: "Preços em tempo real usados por Aave, Compound, Synthetix, GMX e centenas de outros protocolos DeFi.",
                },
                {
                  icon: Link2,
                  title: "CCIP",
                  desc: "Cross-Chain Interoperability Protocol permite mensagens e tokens entre blockchains com segurança institucional.",
                },
                {
                  icon: Layers,
                  title: "VRF e Automation",
                  desc: "Aleatoriedade verificável (VRF) para NFTs/GameFi e automação de contratos on-chain (Keepers).",
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
                Staking de LINK: como participar da rede
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              O <strong>staking de Chainlink v0.2</strong> permite que holders de LINK
              travem tokens no protocolo para reforçar a segurança dos oráculos e receber
              recompensas em LINK. Community stakers e node operators dividem o pool de
              recompensas gerado pelo uso da rede.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl">Vantagens</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Rendimento nativo em LINK",
                      "Reforça segurança dos price feeds",
                      "Fila aberta para comunidade",
                      "Sem custódia — via contrato oficial",
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
                      "Slashing em caso de falha do operador",
                      "Período de unbonding para saque",
                      "Cap total limitado por versão",
                      "Volatilidade impacta valor em BRL",
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
                  <strong>Importante:</strong> só faça staking pela dApp oficial
                  <strong> staking.chain.link</strong>. Sites falsos que prometem
                  rendimentos anormais são golpes comuns envolvendo LINK.
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
                Como comprar Chainlink no Brasil com PIX
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Para <strong>comprar LINK com PIX</strong>, use Binance, Mercado Bitcoin,
              Foxbit, NovaDAX, Bitso ou Coinbase: complete o KYC, deposite reais via PIX e
              negocie o par LINK/BRL ou LINK/USDT. Para custódia, use MetaMask, Rabby,
              Trust Wallet ou hardware wallets Ledger Nano X e Trezor Safe 3. Certifique-se
              de sempre selecionar a <strong>rede ERC-20</strong> em transferências, para
              evitar perda de fundos.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Perguntas frequentes sobre Chainlink (LINK)
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1">
                <AccordionTrigger className="text-left">
                  Quanto vale 1 LINK hoje em real?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  A cotação do LINK em real é atualizada em tempo real neste conversor
                  LINK/BRL, com preços das principais exchanges globais convertidos pela
                  cotação do dólar comercial.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger className="text-left">
                  O que é Chainlink e para que serve?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Chainlink é uma rede descentralizada de oráculos que fornece dados
                  externos (preços, APIs, eventos) para contratos inteligentes em qualquer
                  blockchain. Sem esses dados, DeFi, seguros paramétricos, GameFi e
                  tokenização de RWA seriam inviáveis.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger className="text-left">
                  Chainlink é concorrente ou complementar ao Ethereum?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  É complementar. Chainlink funciona como middleware para qualquer
                  blockchain — inclusive Ethereum, Solana, BNB Chain, Avalanche, Polygon,
                  Base e Arbitrum. Não é uma L1 concorrente, mas infraestrutura que
                  potencializa todas elas.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger className="text-left">
                  O que é o CCIP da Chainlink?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Cross-Chain Interoperability Protocol é o padrão da Chainlink para
                  transferência segura de tokens e mensagens entre blockchains. Já é
                  usado por Swift, ANZ, DTCC e diversos bancos globais em pilotos de
                  tokenização de ativos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5">
                <AccordionTrigger className="text-left">
                  Como funciona o staking de LINK?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  O staking v0.2 permite travar LINK como garantia econômica dos oráculos.
                  Community stakers têm um cap por endereço, com fila aberta quando há
                  espaço. Recompensas são pagas em LINK, e stakers podem ser
                  penalizados (slashed) se o node associado se comportar mal.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q6">
                <AccordionTrigger className="text-left">
                  Chainlink vai chegar a 100 dólares?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Ninguém pode prever preços futuros. O potencial do LINK está ligado à
                  adoção do CCIP por instituições financeiras, expansão do staking, uso em
                  RWA (títulos tokenizados) e demanda pelos serviços da rede. Trate
                  qualquer projeção como especulação.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q7">
                <AccordionTrigger className="text-left">
                  Qual o supply total de Chainlink?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  O supply máximo do LINK é de 1 bilhão de tokens, dos quais parte já
                  circula, parte é destinada a node operators, ecossistema e a Chainlink
                  Labs. Não há emissão inflacionária adicional — o supply é fixo desde o
                  ICO de 2017.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default ChainlinkHoje;
