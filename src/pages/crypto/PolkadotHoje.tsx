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
  Network,
  Layers,
  Link2,
} from "lucide-react";

const PolkadotHoje = () => {
  return (
    <Layout>
      <SEO path="/crypto/polkadot-hoje" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Network className="w-4 h-4" />
            CRYPTO · DOT · Interoperabilidade Web3
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação do Polkadot (DOT) Hoje
            <span className="block text-primary mt-2">Preço em Tempo Real e Análise</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe o valor atualizado do Polkadot em reais e dólares, entenda como funcionam
            as parachains, o staking de DOT e por que esta blockchain de camada 0 é uma das mais
            promissoras do ecossistema Web3.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>DOT/USD — Gráfico em Tempo Real</span>
                </div>
                <Badge variant="secondary">Cripto · Layer 0</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <TradingViewWidget symbol="DOTUSD" height="384" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Coins, label: "Símbolo", value: "DOT" },
            { icon: Globe2, label: "Rede", value: "Polkadot Relay Chain" },
            { icon: ShieldCheck, label: "Consenso", value: "NPoS (Nominated PoS)" },
            { icon: Clock, label: "Mercado", value: "24/7 · Global" },
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
          <UniversalConverter assetType="crypto" assetSymbol="DOT" assetName="Polkadot" />
        </div>

        <article className="space-y-12 max-w-4xl mx-auto">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Quanto vale 1 Polkadot (DOT) hoje em reais?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              O <strong className="text-foreground">Polkadot (DOT)</strong> é uma das principais
              criptomoedas do mercado, criada em 2020 por <strong className="text-foreground">Dr.
              Gavin Wood</strong>, cofundador da Ethereum e criador da linguagem Solidity. Para
              saber <strong>quanto vale 1 DOT hoje em real</strong>, use o gráfico em tempo real
              acima e o conversor de Polkadot para BRL disponível nesta página.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              A <strong>cotação do Polkadot em tempo real</strong> oscila conforme volume das
              exchanges, lançamentos de parachains, atualizações da Substrate e movimentos do
              mercado cripto global. O preço do DOT em dólar e em real é atualizado continuamente
              para acompanhar a volatilidade típica das criptomoedas.
            </p>

            <Card className="border-l-4 border-l-primary bg-primary/5 my-6">
              <CardContent className="p-5 flex gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  <strong>Curiosidade:</strong> ao contrário do Bitcoin, o Polkadot tem
                  <strong> supply inflacionário controlado</strong>, com emissão anual estimada
                  em 10% para recompensar validadores e nominadores que fazem staking de DOT.
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
                O que é Polkadot e como funcionam as parachains
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              Polkadot é uma <strong>blockchain de camada 0 (Layer 0)</strong> que conecta
              diversas blockchains independentes chamadas <strong>parachains</strong>. Essa
              arquitetura permite que projetos distintos compartilhem segurança da Relay Chain
              principal enquanto mantêm sua própria lógica e governança.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                {
                  icon: Link2,
                  title: "Interoperabilidade Real",
                  desc: "Parachains trocam dados e tokens entre si via XCM (Cross-Consensus Messaging), eliminando a necessidade de bridges centralizadas.",
                },
                {
                  icon: ShieldCheck,
                  title: "Segurança Compartilhada",
                  desc: "Todas as parachains herdam a segurança da Relay Chain Polkadot, reduzindo custos de validação e ataques de 51%.",
                },
                {
                  icon: Network,
                  title: "Escalabilidade Paralela",
                  desc: "Processamento simultâneo em múltiplas parachains permite milhares de transações por segundo no ecossistema.",
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
                Como fazer staking de DOT e ganhar renda passiva
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              O <strong>staking de Polkadot</strong> é uma das formas mais populares de gerar
              renda passiva com criptomoedas. Detentores de DOT podem atuar como
              <strong> nominadores</strong>, delegando seus tokens a validadores confiáveis e
              recebendo recompensas proporcionais.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl">Vantagens do staking de DOT</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Rendimento médio de 10% a 14% ao ano em DOT",
                      "Participação na governança on-chain",
                      "Sem custódia em terceiros usando Nomination Pools",
                      "Suporte nativo em Polkadot.js e Ledger",
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
                      "Período de unbonding de 28 dias",
                      "Risco de slashing por má conduta do validador",
                      "Mínimo dinâmico para staking direto",
                      "Volatilidade do preço afeta retorno em BRL",
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
                  <strong>Importante:</strong> staking de criptomoedas pode ter tributação
                  específica no Brasil. Consulte sempre um contador especializado em ativos
                  digitais antes de declarar.
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
                Como comprar Polkadot no Brasil com PIX
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              É possível <strong>comprar Polkadot com PIX</strong> nas principais exchanges
              brasileiras como Mercado Bitcoin, Binance, Foxbit e NovaDAX. O processo envolve
              cadastro, verificação KYC, depósito via PIX e ordem de compra do par DOT/BRL ou
              DOT/USDT. Para segurança, recomenda-se transferir os DOTs para uma carteira
              não-custodial como Polkadot.js, Talisman ou Ledger.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Perguntas frequentes sobre Polkadot (DOT)
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1">
                <AccordionTrigger className="text-left">
                  Quanto vale 1 Polkadot hoje em real?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  A cotação do Polkadot hoje em real varia minuto a minuto. Use o conversor de
                  DOT para BRL nesta página para ver o valor atualizado em tempo real, baseado
                  nas principais exchanges globais como Binance, Coinbase e Kraken.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger className="text-left">
                  Polkadot é um bom investimento de longo prazo?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Polkadot é considerado um dos projetos mais sólidos da Web3 por sua
                  tecnologia de interoperabilidade, time fundador renomado e ecossistema crescente
                  de parachains. Como toda criptomoeda, apresenta alta volatilidade e deve compor
                  apenas uma parte diversificada da carteira de investimentos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger className="text-left">
                  Qual a diferença entre Polkadot e Kusama?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Kusama é a rede "canária" do Polkadot, usada para testar inovações antes do
                  lançamento na mainnet. Ambas têm tecnologia similar, mas Kusama (KSM) tem
                  governança mais rápida e maior tolerância a risco, enquanto Polkadot (DOT) foca
                  em estabilidade para aplicações empresariais e financeiras.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger className="text-left">
                  Como fazer staking de Polkadot passo a passo?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Para fazer staking de DOT, instale a extensão Polkadot.js, crie uma carteira,
                  envie seus tokens, acesse a aba Staking no Polkadot-JS Apps e selecione até 16
                  validadores via Nominator. Para iniciantes, as Nomination Pools permitem
                  staking com valores menores e gestão simplificada.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5">
                <AccordionTrigger className="text-left">
                  Qual o supply máximo de Polkadot?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  O Polkadot não possui supply máximo fixo, diferente do Bitcoin. Sua inflação
                  anual gira em torno de 10% e é distribuída entre validadores, nominadores e
                  o Treasury da rede, que financia desenvolvimento e iniciativas comunitárias.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q6">
                <AccordionTrigger className="text-left">
                  É seguro comprar Polkadot pelo Mercado Bitcoin ou Binance?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sim, tanto Mercado Bitcoin quanto Binance são exchanges reguladas e amplamente
                  utilizadas no Brasil para comprar DOT. Para máxima segurança, ative autenticação
                  em dois fatores (2FA) e transfira valores significativos para uma hardware
                  wallet como Ledger Nano S/X após a compra.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q7">
                <AccordionTrigger className="text-left">
                  O que são parachains e por que importam?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Parachains são blockchains paralelas que rodam conectadas à Relay Chain do
                  Polkadot, herdando sua segurança e permitindo comunicação entre cadeias.
                  Projetos como Acala (DeFi), Moonbeam (compatível com Ethereum) e Astar
                  (smart contracts) operam como parachains, ampliando o uso do DOT.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default PolkadotHoje;
