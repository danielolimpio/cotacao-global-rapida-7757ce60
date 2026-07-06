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
  Vote,
  Layers,
} from "lucide-react";

const DAIHoje = () => {
  return (
    <Layout>
      <SEO path="/crypto/dai-hoje" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Vote className="w-4 h-4" />
            CRYPTO · DAI · Stablecoin Descentralizada
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação do DAI Hoje
            <span className="block text-primary mt-2">Preço em Tempo Real em Real e Dólar</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe o valor do DAI em tempo real, entenda como a MakerDAO/Sky mantém a
            paridade com o dólar por sobrecolateralização e por que o DAI é a principal
            stablecoin descentralizada do ecossistema DeFi.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>DAI/USD — Gráfico em Tempo Real</span>
                </div>
                <Badge variant="secondary">Stablecoin · Descentralizada</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <TradingViewWidget symbol="DAIUSD" height="384" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Coins, label: "Símbolo", value: "DAI" },
            { icon: Globe2, label: "Protocolo", value: "Sky (ex-MakerDAO)" },
            { icon: ShieldCheck, label: "Modelo", value: "Sobrecolateralizado" },
            { icon: Layers, label: "Rede", value: "Ethereum + Multi-chain" },
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
          <UniversalConverter assetType="crypto" assetSymbol="DAI" assetName="DAI Stablecoin" />
        </div>

        <article className="space-y-12 max-w-4xl mx-auto">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Quanto vale 1 DAI hoje em real?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              O <strong className="text-foreground">DAI</strong> é a principal stablecoin
              descentralizada do mercado, criada pela <strong className="text-foreground">
              MakerDAO</strong> (rebatizada como <strong>Sky</strong> em 2024) e lançada em
              2017. Diferente de USDT e USDC, o DAI não é emitido por uma empresa, mas gerado
              por contratos inteligentes na Ethereum através de colateral cripto. Para saber
              <strong> quanto vale 1 DAI hoje em reais</strong>, use o conversor DAI/BRL em
              tempo real acima.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              A <strong>cotação do DAI em real</strong> segue de perto o dólar comercial, com
              pequenas variações mantidas por mecanismos automáticos de estabilidade e
              arbitragem entre o Peg Stability Module (PSM) e o mercado aberto.
            </p>

            <Card className="border-l-4 border-l-primary bg-primary/5 my-6">
              <CardContent className="p-5 flex gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  <strong>Curiosidade:</strong> o DAI é a <strong>stablecoin descentralizada
                  mais antiga em operação</strong> — sobreviveu ao colapso de 2018, ao Black
                  Thursday de 2020 e à crise do UST em 2022 sem quebrar a paridade.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Vote className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Como funciona a sobrecolateralização do DAI
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              Para gerar DAI, usuários depositam colateral (ETH, wBTC, USDC, RWA) em cofres
              (Vaults) do protocolo Sky. Cada DAI emitido é lastreado por <strong>mais de
              US$ 1 em ativos</strong> — normalmente 150% a 170% — criando uma margem de
              segurança contra volatilidade. Se o colateral cai de valor, o Vault é
              liquidado automaticamente.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                {
                  icon: Vote,
                  title: "Governança on-chain",
                  desc: "Holders de MKR/SKY votam parâmetros como taxa de estabilidade, teto de dívida e ativos aceitos como colateral.",
                },
                {
                  icon: ShieldCheck,
                  title: "Peg Stability Module",
                  desc: "Permite trocar USDC por DAI 1:1 sem slippage, mantendo a paridade automaticamente via arbitragem.",
                },
                {
                  icon: Layers,
                  title: "Multi-Collateral",
                  desc: "Aceita ETH, wBTC, LSTs, títulos do Tesouro tokenizados (RWA) e outras stablecoins como lastro.",
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
                DSR: como ganhar rendimento em dólar com DAI
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              O <strong>DAI Savings Rate (DSR)</strong> é um mecanismo nativo do protocolo
              que paga juros aos detentores de DAI simplesmente por travar seus tokens em um
              contrato oficial. Já se pode migrar para <strong>sDAI (Savings DAI)</strong>
              ou <strong>sUSDS</strong> na nova versão Sky para acumular rendimento em dólar
              digital de forma passiva e não custodial.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl">Vantagens</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Sem custódia centralizada",
                      "Sem KYC para uso on-chain",
                      "Rendimento via DSR/sDAI",
                      "Composability total no DeFi",
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
                      "Exposição indireta ao USDC via PSM",
                      "Risco de smart contract",
                      "Complexidade técnica maior que USDT/USDC",
                      "Tributação em BRL para ganhos cambiais",
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
                  <strong>Importante:</strong> boa parte do lastro atual do DAI vem de USDC
                  e ativos do mundo real (RWA), reduzindo a descentralização original.
                  Avalie o perfil de reserva antes de expor grandes valores.
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
                Como comprar DAI no Brasil com PIX
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Para <strong>comprar DAI com PIX</strong>, use Binance, Mercado Bitcoin,
              Foxbit, NovaDAX ou Bitso: deposite reais via PIX e negocie o par DAI/BRL ou
              DAI/USDT. Também é possível gerar DAI diretamente no protocolo Sky
              depositando ETH em um Vault. Para custódia, use MetaMask, Rabby, Trust Wallet
              ou hardware wallets Ledger e Trezor.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Perguntas frequentes sobre o DAI
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1">
                <AccordionTrigger className="text-left">
                  Quanto vale 1 DAI hoje em real?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  O DAI mantém paridade próxima a US$ 1, então seu valor em real acompanha
                  a cotação do dólar comercial. Confira o preço em tempo real no conversor
                  DAI/BRL desta página.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger className="text-left">
                  Qual a diferença entre DAI, USDT e USDC?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  USDT e USDC são stablecoins centralizadas, emitidas por empresas (Tether e
                  Circle) que mantêm reservas em dólar em bancos tradicionais. O DAI é
                  descentralizado: emitido via contratos inteligentes com colateral cripto,
                  governado por votação on-chain e resistente a censura direta.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger className="text-left">
                  O que aconteceu com a MakerDAO e o Sky?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Em 2024, a MakerDAO passou pelo Endgame Plan e virou a marca Sky Protocol.
                  MKR está sendo convertido em SKY, e o DAI passa a coexistir com uma nova
                  stablecoin chamada USDS. O DAI continua funcionando normalmente, com
                  migração opcional para USDS/sUSDS.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger className="text-left">
                  DAI é 100% descentralizado?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Parcialmente. O protocolo é governado por token holders, mas parte
                  significativa do colateral atual é USDC e RWA (títulos do Tesouro
                  tokenizados), o que introduz risco de censura indireta. Ainda assim, é a
                  stablecoin mais descentralizada em escala relevante.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5">
                <AccordionTrigger className="text-left">
                  Como ganhar rendimento com DAI?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Você pode migrar DAI para sDAI (Savings DAI) e receber o DSR
                  automaticamente, ou aplicar em protocolos DeFi como Aave, Compound,
                  Morpho, Curve e Pendle, com APY variando de 3% a 12% ao ano dependendo do
                  mercado.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q6">
                <AccordionTrigger className="text-left">
                  Como criar meus próprios DAIs?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Acesse app.sky.money, conecte sua MetaMask, abra um Vault depositando ETH
                  ou wBTC e emita DAI contra esse colateral. Você paga uma taxa de
                  estabilidade anual e precisa manter a taxa de colateralização acima do
                  mínimo para evitar liquidação.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q7">
                <AccordionTrigger className="text-left">
                  DAI é seguro após o colapso do UST?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sim. O DAI é sobrecolateralizado, ao contrário do UST (algorítmico), que
                  entrou em espiral de morte em 2022. O modelo do DAI já foi testado em
                  múltiplos crashes de mercado e manteve sua paridade — inclusive durante o
                  Black Thursday de 2020, quando ajustes emergenciais evitaram insolvência.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default DAIHoje;
