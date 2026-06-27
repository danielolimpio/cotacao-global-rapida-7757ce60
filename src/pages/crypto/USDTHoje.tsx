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
  Anchor,
  Banknote,
  Wallet,
} from "lucide-react";

const USDTHoje = () => {
  return (
    <Layout>
      <SEO path="/crypto/usdt-hoje" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Anchor className="w-4 h-4" />
            CRYPTO · USDT · Stablecoin Lastreada em Dólar
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação do Tether (USDT) Hoje
            <span className="block text-primary mt-2">Preço em Real e Dólar em Tempo Real</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja a cotação do USDT hoje em reais, entenda como funciona a stablecoin mais usada
            do mundo, suas redes (TRC20, ERC20, BEP20), aplicações em DeFi e por que o Tether é
            essencial para proteção contra a volatilidade cripto.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>USDT/USD — Gráfico em Tempo Real</span>
                </div>
                <Badge variant="secondary">Stablecoin · Lastro USD</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <TradingViewWidget symbol="USDTUSD" height="384" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Coins, label: "Símbolo", value: "USDT" },
            { icon: Anchor, label: "Lastro", value: "1 USDT ≈ 1 USD" },
            { icon: Globe2, label: "Redes", value: "TRC20, ERC20, BEP20+" },
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
          <UniversalConverter assetType="crypto" assetSymbol="USDT" assetName="Tether" />
        </div>

        <article className="space-y-12 max-w-4xl mx-auto">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Quanto vale 1 USDT hoje em real?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              O <strong className="text-foreground">Tether (USDT)</strong> é a maior stablecoin
              do mundo, lançada em 2014 pela Tether Limited. Cada token USDT é teoricamente
              lastreado em <strong>1 dólar americano</strong> ou ativos equivalentes (caixa,
              títulos do Tesouro dos EUA, etc). Por isso,
              <strong> 1 USDT vale aproximadamente o mesmo que 1 dólar</strong>, com pequenas
              variações de centavos.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Para saber <strong>quanto vale 1 USDT em real hoje</strong>, basta consultar a
              cotação atual do dólar comercial. Como referência, se o dólar está cotado a
              R$ 5,30, então 1 USDT vale aproximadamente R$ 5,30 — sendo um dos
              <strong> métodos mais usados no Brasil para "comprar dólar digital"</strong>.
            </p>

            <Card className="border-l-4 border-l-primary bg-primary/5 my-6">
              <CardContent className="p-5 flex gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  <strong>Curiosidade:</strong> o USDT movimenta mais volume diário que Bitcoin
                  e Ethereum somados, sendo o ativo cripto mais negociado do planeta com
                  capitalização superior a US$ 100 bilhões.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Globe2 className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Redes do USDT: TRC20, ERC20, BEP20 e qual escolher
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              O USDT existe em <strong>múltiplas blockchains</strong>. A escolha da rede impacta
              diretamente a taxa de transferência e a velocidade. Entender essa diferença é
              crucial para não perder dinheiro em taxas desnecessárias.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                {
                  icon: Banknote,
                  title: "USDT TRC20 (Tron)",
                  desc: "Taxas baixíssimas (centavos) e transferências em segundos. Rede mais usada no Brasil para envio entre exchanges.",
                },
                {
                  icon: ShieldCheck,
                  title: "USDT ERC20 (Ethereum)",
                  desc: "Mais segura e amplamente aceita em DeFi, mas com taxas altas. Indicada para grandes movimentações e aplicações DeFi.",
                },
                {
                  icon: Wallet,
                  title: "USDT BEP20 (BNB Chain)",
                  desc: "Taxas baixas e ampla compatibilidade com DEXs da Binance Chain. Boa para usuários do ecossistema BNB.",
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

            <Card className="border-l-4 border-l-red-500 bg-red-500/5">
              <CardContent className="p-5 flex gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <p className="text-sm md:text-base">
                  <strong>Atenção crítica:</strong> sempre confirme a rede ao enviar USDT.
                  Mandar USDT TRC20 para um endereço ERC20 (ou vice-versa) pode resultar em
                  perda total do valor enviado.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Anchor className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Para que serve o Tether na prática
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              O USDT é peça-chave no ecossistema cripto. Sua estabilidade em relação ao dólar
              permite usos que vão muito além de simples especulação:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl">Principais usos</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Proteção contra volatilidade do mercado cripto",
                      "Remessas internacionais com baixo custo",
                      "Dolarização de patrimônio sem conta no exterior",
                      "Liquidez em DeFi (Aave, Compound, Curve)",
                      "Trading de pares USDT em exchanges",
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
                  <CardTitle className="text-xl">Riscos e críticas</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Controvérsias históricas sobre lastro 1:1",
                      "Centralização: Tether Limited pode congelar fundos",
                      "Risco regulatório nos EUA e Europa (MiCA)",
                      "Eventual depeg em momentos de pânico do mercado",
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
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Como comprar USDT no Brasil com PIX
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              <strong>Comprar USDT com PIX</strong> é a forma mais rápida de "ter dólar digital"
              no Brasil. As principais exchanges para isso são Binance, Mercado Bitcoin, Foxbit,
              NovaDAX e Bybit. Após cadastro e KYC, deposite via PIX e compre o par USDT/BRL.
              Para guardar, use a <strong>Trust Wallet</strong>, MetaMask, Phantom (Solana) ou
              hardware wallets como Ledger e Trezor.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Perguntas frequentes sobre USDT (Tether)
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1">
                <AccordionTrigger className="text-left">
                  Quanto vale 1 USDT hoje em real?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  1 USDT vale aproximadamente o valor de 1 dólar americano em reais. Como a
                  cotação do dólar varia constantemente, o valor do USDT em BRL também muda.
                  Use o conversor desta página para ver a cotação atualizada em tempo real.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger className="text-left">
                  USDT é seguro? Posso confiar no Tether?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  O USDT é a stablecoin mais usada do mundo, mas já enfrentou questionamentos
                  sobre seu lastro. A Tether publica relatórios trimestrais de auditoria
                  mostrando reservas em títulos do Tesouro dos EUA, caixa e equivalentes.
                  Para reduzir risco, alguns investidores diversificam entre USDT, USDC e DAI.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger className="text-left">
                  Qual a diferença entre USDT e USDC?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Ambas são stablecoins lastreadas em dólar. USDT (Tether) tem maior volume e
                  liquidez global; USDC (Circle) é considerada mais transparente, com auditorias
                  mensais por empresas como Deloitte, e maior aceitação por instituições
                  reguladas nos EUA.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger className="text-left">
                  Qual a melhor rede para enviar USDT no Brasil?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Para transferências comuns no Brasil, a rede TRC20 (Tron) é a mais utilizada
                  por suas taxas baixíssimas e velocidade. Para DeFi avançado, ERC20 (Ethereum)
                  é o padrão. Sempre confirme com o destinatário qual rede aceita antes de
                  transferir.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5">
                <AccordionTrigger className="text-left">
                  USDT rende? Posso ganhar juros com Tether?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sim. É possível render USDT em plataformas DeFi como Aave (3% a 8% ao ano),
                  Compound e Curve, ou em produtos centralizados como Binance Earn e
                  Mercado Bitcoin Pool. Sempre avalie o risco de smart contract ou de contraparte
                  antes de aplicar.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q6">
                <AccordionTrigger className="text-left">
                  USDT pode perder o lastro com o dólar (depeg)?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Eventos pontuais de depeg já ocorreram (queda para US$ 0,95 em 2022, por
                  exemplo), mas o USDT rapidamente voltou ao 1:1. Em cenário de crise sistêmica
                  ou problemas com a Tether, o risco existe — por isso a diversificação entre
                  stablecoins é recomendada.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q7">
                <AccordionTrigger className="text-left">
                  Preciso declarar USDT no Imposto de Renda?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sim. No Brasil, criptomoedas como USDT devem ser declaradas se o valor total
                  superar R$ 5.000. Ganhos em vendas acima de R$ 35.000 por mês são tributados.
                  Consulte sempre um contador especializado em ativos digitais para evitar
                  problemas com a Receita Federal.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q8">
                <AccordionTrigger className="text-left">
                  USDT é melhor que comprar dólar em casa de câmbio?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Depende do objetivo. Para reserva digital líquida 24/7, com baixo spread e
                  custódia própria, o USDT é altamente competitivo. Para dinheiro físico em
                  viagens, casas de câmbio ainda são necessárias. Para conta em dólar
                  tradicional, opções como Wise e Avenue podem complementar a estratégia.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default USDTHoje;
