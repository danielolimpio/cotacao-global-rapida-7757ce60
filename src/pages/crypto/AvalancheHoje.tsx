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
  Mountain,
  Layers,
} from "lucide-react";

const AvalancheHoje = () => {
  return (
    <Layout>
      <SEO path="/crypto/avalanche-hoje" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Mountain className="w-4 h-4" />
            CRYPTO · AVAX · Subnets de Alta Velocidade
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação do Avalanche (AVAX) Hoje
            <span className="block text-primary mt-2">Valor em Tempo Real em Reais e Dólar</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja o preço atualizado do Avalanche, entenda como funcionam as subnets, a velocidade
            de finalização sub-segundo e por que o AVAX é uma das principais alternativas ao
            Ethereum no universo DeFi e NFTs.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>AVAX/USD — Gráfico em Tempo Real</span>
                </div>
                <Badge variant="secondary">Cripto · Layer 1</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <TradingViewWidget symbol="AVAXUSD" height="384" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Coins, label: "Símbolo", value: "AVAX" },
            { icon: Globe2, label: "Rede", value: "Avalanche C/X/P Chain" },
            { icon: Zap, label: "Finalização", value: "< 1 segundo" },
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
          <UniversalConverter assetType="crypto" assetSymbol="AVAX" assetName="Avalanche" />
        </div>

        <article className="space-y-12 max-w-4xl mx-auto">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Quanto vale 1 Avalanche (AVAX) hoje em real?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              O <strong className="text-foreground">Avalanche (AVAX)</strong> é a criptomoeda
              nativa da blockchain Avalanche, criada pela Ava Labs sob liderança do professor
              <strong> Emin Gün Sirer</strong> e lançada em setembro de 2020. Para descobrir
              <strong> quanto vale 1 AVAX hoje em reais</strong>, consulte o conversor de
              Avalanche para BRL desta página, que utiliza dados em tempo real das maiores
              exchanges do mundo.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              A <strong>cotação do AVAX em dólar</strong> reflete o desempenho geral do mercado
              cripto, o lançamento de novas subnets, parcerias institucionais e o crescimento
              do ecossistema DeFi sobre a C-Chain compatível com EVM.
            </p>

            <Card className="border-l-4 border-l-primary bg-primary/5 my-6">
              <CardContent className="p-5 flex gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  <strong>Curiosidade:</strong> Avalanche atinge mais de
                  <strong> 4.500 transações por segundo</strong> com finalização em menos de
                  1 segundo, sendo uma das blockchains mais rápidas e escaláveis do mercado.
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
                Como funciona a arquitetura de três chains do Avalanche
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              Diferente da maioria das blockchains, o Avalanche opera com três cadeias
              integradas: <strong>X-Chain</strong> (para troca de ativos),
              <strong> C-Chain</strong> (compatível com Ethereum Virtual Machine) e
              <strong> P-Chain</strong> (para validadores e subnets). Essa separação melhora
              performance e flexibilidade.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                {
                  icon: Zap,
                  title: "Velocidade Sub-Segundo",
                  desc: "Protocolo de consenso Avalanche permite finalização em menos de 1 segundo, ideal para DeFi, jogos e pagamentos.",
                },
                {
                  icon: Mountain,
                  title: "Subnets Customizáveis",
                  desc: "Empresas e projetos criam blockchains próprias (subnets) com regras e validadores específicos, mantendo segurança da rede principal.",
                },
                {
                  icon: ShieldCheck,
                  title: "Compatível com Ethereum",
                  desc: "A C-Chain roda contratos Solidity sem alteração, permitindo migração fácil de dApps do Ethereum para Avalanche.",
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
                Staking de AVAX: rendimento e segurança
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              O <strong>staking de Avalanche</strong> permite que detentores de AVAX ganhem
              recompensas validando transações ou delegando tokens a validadores. É uma das
              formas mais procuradas de gerar <strong>renda passiva com criptomoedas</strong> de
              forma descentralizada.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl">Vantagens</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Rendimento médio de 7% a 9% ao ano",
                      "Sem risco de slashing por má conduta",
                      "Mínimo de 25 AVAX para delegação",
                      "Período de lock-up flexível (2 semanas a 1 ano)",
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
                      "Tokens ficam bloqueados durante o período escolhido",
                      "Para validar diretamente exige 2.000 AVAX",
                      "Volatilidade impacta retorno em BRL",
                      "Tributação sobre rendimentos no Brasil",
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
                  <strong>Atenção:</strong> sempre faça staking usando a Core Wallet oficial ou
                  Ledger conectado ao Avalanche, evitando plataformas suspeitas.
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
                Como comprar Avalanche no Brasil com PIX
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              <strong>Comprar Avalanche com PIX</strong> é simples: cadastre-se em exchanges como
              Binance, Mercado Bitcoin, Foxbit ou NovaDAX, faça o KYC, deposite via PIX e compre
              o par AVAX/BRL ou AVAX/USDT. Após a compra, transfira para uma carteira
              não-custodial como <strong>Core Wallet</strong>, MetaMask configurada para a
              C-Chain ou Ledger Nano para máxima segurança.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Perguntas frequentes sobre Avalanche (AVAX)
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1">
                <AccordionTrigger className="text-left">
                  Quanto vale 1 Avalanche hoje em real?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Use o conversor de AVAX para BRL desta página para ver o preço atualizado em
                  tempo real. A cotação varia conforme oferta e demanda nas exchanges globais
                  como Binance, Coinbase, Kraken e Mercado Bitcoin.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger className="text-left">
                  Avalanche vale a pena como investimento em 2026?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Avalanche segue como uma das principais Layer 1 do mercado, com ecossistema
                  DeFi robusto, parcerias institucionais (Amazon AWS, Deloitte, J.P. Morgan via
                  Onyx) e crescente adoção em tokenização de ativos reais (RWA). Como qualquer
                  cripto, exige análise de risco e diversificação.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger className="text-left">
                  Qual a diferença entre Avalanche e Ethereum?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Embora ambas suportem contratos inteligentes, Avalanche oferece taxas muito
                  menores (centavos vs dólares), finalização sub-segundo e arquitetura de três
                  chains. Já o Ethereum tem maior liquidez, mais aplicações estabelecidas e
                  segurança comprovada por anos de operação.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger className="text-left">
                  O que são subnets do Avalanche?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Subnets são blockchains independentes criadas sobre a infraestrutura Avalanche,
                  permitindo regras próprias de validação, tokens nativos e compliance. Exemplos
                  incluem DeFi Kingdoms, Dexalot e a subnet da Shrapnel, voltada a jogos AAA.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5">
                <AccordionTrigger className="text-left">
                  Quantos AVAX existem no total?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  O supply máximo de AVAX é de 720 milhões de tokens. Parte das taxas pagas na
                  rede é queimada permanentemente, criando pressão deflacionária conforme o uso
                  aumenta — um mecanismo similar ao EIP-1559 do Ethereum.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q6">
                <AccordionTrigger className="text-left">
                  Como conectar MetaMask à rede Avalanche?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  No MetaMask, clique em adicionar rede, insira RPC https://api.avax.network/ext/bc/C/rpc,
                  Chain ID 43114, símbolo AVAX e explorer https://snowtrace.io. Pronto: você terá
                  acesso a dApps como Trader Joe, Pangolin, Benqi e Aave na rede Avalanche.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q7">
                <AccordionTrigger className="text-left">
                  Quais as principais aplicações DeFi no Avalanche?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Os destaques de DeFi no Avalanche incluem Trader Joe (DEX), Aave (empréstimos),
                  Benqi (liquid staking de AVAX), GMX (perpétuos), Pangolin e Curve. O ecossistema
                  movimenta bilhões em TVL (Total Value Locked).
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default AvalancheHoje;
