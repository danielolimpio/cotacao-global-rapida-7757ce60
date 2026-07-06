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
  Repeat,
  Layers,
} from "lucide-react";

const UniswapHoje = () => {
  return (
    <Layout>
      <SEO path="/crypto/uniswap-hoje" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Repeat className="w-4 h-4" />
            CRYPTO · UNI · Maior DEX do Mundo
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação do Uniswap (UNI) Hoje
            <span className="block text-primary mt-2">Preço em Tempo Real em Real e Dólar</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe o valor do UNI em tempo real, entenda como o Uniswap revolucionou o
            trading descentralizado com pools de liquidez automatizadas (AMM) e por que é a
            maior exchange descentralizada do ecossistema DeFi.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>UNI/USD — Gráfico em Tempo Real</span>
                </div>
                <Badge variant="secondary">DeFi · DEX · Governança</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <TradingViewWidget symbol="UNIUSD" height="384" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Coins, label: "Símbolo", value: "UNI" },
            { icon: Globe2, label: "Protocolo", value: "Uniswap Labs" },
            { icon: Repeat, label: "Tipo", value: "DEX / AMM" },
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
          <UniversalConverter assetType="crypto" assetSymbol="UNI" assetName="Uniswap" />
        </div>

        <article className="space-y-12 max-w-4xl mx-auto">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Quanto vale 1 Uniswap (UNI) hoje em real?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              O <strong className="text-foreground">Uniswap (UNI)</strong> é o token de
              governança do protocolo Uniswap, a maior exchange descentralizada (DEX) do
              mundo, criada por <strong className="text-foreground">Hayden Adams</strong> em
              2018. O UNI foi distribuído em airdrop histórico em setembro de 2020 para
              usuários iniciais. Para verificar <strong>quanto vale 1 UNI hoje em reais</strong>,
              use o conversor UNI/BRL em tempo real acima.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              A <strong>cotação do Uniswap em dólar</strong> reflete volume de trading,
              expectativa do "fee switch" (que direcionaria parte das taxas aos holders) e a
              expansão para novas redes Layer 2 como Base, Arbitrum, Optimism e o próprio
              Unichain.
            </p>

            <Card className="border-l-4 border-l-primary bg-primary/5 my-6">
              <CardContent className="p-5 flex gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  <strong>Curiosidade:</strong> o Uniswap já processou mais de
                  <strong> US$ 2 trilhões em volume acumulado</strong>, superando muitas
                  corretoras centralizadas tradicionais.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Repeat className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                O que é AMM e como o Uniswap funciona
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              O Uniswap introduziu o modelo de <strong>Automated Market Maker (AMM)</strong>,
              que substitui livros de ordens tradicionais por pools de liquidez controlados
              pela fórmula <em>x * y = k</em>. Provedores de liquidez depositam pares de
              tokens e recebem parte das taxas de swap como recompensa.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                {
                  icon: Repeat,
                  title: "Swaps sem custódia",
                  desc: "Troque qualquer par ERC-20 direto da sua carteira, sem depósito nem KYC, com liquidação em segundos.",
                },
                {
                  icon: Layers,
                  title: "V4 e Hooks",
                  desc: "A versão V4 permite hooks customizados, criando pools com regras avançadas: TWAMM, limit orders, dynamic fees.",
                },
                {
                  icon: Vote,
                  title: "Governança UNI",
                  desc: "Holders votam upgrades, tesouraria, ativação do fee switch e novas implantações em L2s via propostas on-chain.",
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
                Como fornecer liquidez e ganhar taxas no Uniswap
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              Ser <strong>provedor de liquidez (LP) no Uniswap V3</strong> permite ganhar
              taxas de 0,01% a 1% por swap, concentrando liquidez em faixas de preço
              específicas. É uma das principais formas de gerar renda passiva em DeFi, mas
              exige entendimento sobre <strong>impermanent loss</strong>.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl">Vantagens</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Ganho contínuo em taxas de swap",
                      "Liquidez concentrada aumenta rendimento",
                      "Sem custódia — fundos ficam na sua carteira",
                      "Composability com outros protocolos DeFi",
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
                      "Impermanent loss em pares voláteis",
                      "Necessidade de rebalanceamento ativo",
                      "Taxas de gas na Ethereum L1",
                      "Risco de contrato inteligente",
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
                  <strong>Importante:</strong> tokens novos e não verificados no Uniswap
                  podem ser <strong>scams ou honeypots</strong>. Confira sempre o contrato
                  no Etherscan e desconfie de projetos sem histórico.
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
                Como comprar UNI no Brasil com PIX
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              <strong>Comprar Uniswap (UNI) com PIX</strong> é simples: use Binance, Mercado
              Bitcoin, Foxbit, NovaDAX, Bitso ou Coinbase, complete o KYC, deposite reais
              via PIX e negocie o par UNI/BRL ou UNI/USDT. Para custódia, use MetaMask,
              Rabby, Uniswap Wallet ou hardware wallets como Ledger e Trezor. Também é
              possível comprar UNI direto no app do Uniswap com cartão ou PIX via provedores
              on-ramp integrados.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Perguntas frequentes sobre Uniswap (UNI)
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1">
                <AccordionTrigger className="text-left">
                  Quanto vale 1 UNI hoje em real?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  A cotação do UNI em real é atualizada em tempo real neste conversor
                  UNI/BRL, com preços das principais exchanges globais convertidos pela
                  cotação do dólar comercial.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger className="text-left">
                  Qual a diferença entre UNI e o protocolo Uniswap?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  O Uniswap é o protocolo (a DEX) onde qualquer pessoa negocia tokens
                  ERC-20. O UNI é o token de governança: dá direito de votar propostas
                  sobre o futuro do protocolo, tesouraria e potencial ativação do fee
                  switch.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger className="text-left">
                  O que é o fee switch do Uniswap?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  É um mecanismo previsto no protocolo que, quando ativado por votação,
                  direciona uma parcela das taxas de trading (por exemplo, 1/6) aos
                  holders de UNI que fizerem staking. É considerado um dos principais
                  catalisadores de preço do token no médio prazo.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger className="text-left">
                  Uniswap é seguro? Já sofreu hack?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  O core do Uniswap (V2/V3/V4) nunca foi hackeado — os contratos são
                  auditados e considerados referência em segurança DeFi. Riscos maiores
                  vêm de tokens fraudulentos listados por usuários, phishing e assinaturas
                  maliciosas fora do app oficial.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5">
                <AccordionTrigger className="text-left">
                  O que é impermanent loss?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  É a perda temporária que provedores de liquidez sofrem quando o preço
                  relativo dos tokens do pool muda. Se um dos ativos valoriza muito, você
                  teria mais retorno apenas segurando (HODL) do que fornecendo liquidez.
                  As taxas de swap podem ou não compensar essa perda.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q6">
                <AccordionTrigger className="text-left">
                  O que é a Unichain?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Unichain é a Layer 2 própria da Uniswap Labs, otimizada para DeFi, com
                  blocos rápidos, taxas baixas e integração nativa com o Uniswap V4. Foi
                  lançada em 2025 para escalar o volume da DEX sem depender do gas caro
                  da Ethereum L1.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q7">
                <AccordionTrigger className="text-left">
                  Qual o supply total de UNI?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  O supply máximo do UNI é de 1 bilhão de tokens, distribuído entre
                  usuários (airdrop histórico de 400 milhões), equipe, investidores,
                  consultores e tesouraria comunitária. A emissão perpetua é de cerca de
                  2% ao ano após o cronograma inicial.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default UniswapHoje;
