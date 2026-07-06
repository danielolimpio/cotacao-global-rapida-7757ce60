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
  Landmark,
  Layers,
} from "lucide-react";

const USDCHoje = () => {
  return (
    <Layout>
      <SEO path="/crypto/usdc-hoje" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <ShieldCheck className="w-4 h-4" />
            CRYPTO · USDC · Stablecoin Regulada
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação do USD Coin (USDC) Hoje
            <span className="block text-primary mt-2">Preço em Tempo Real em Real e Dólar</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe o valor do USDC atualizado em tempo real, entenda como funciona a
            stablecoin lastreada em dólar da Circle, quais são as reservas auditadas e por que
            o USD Coin é referência de transparência no mercado de criptomoedas.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>USDC/USD — Gráfico em Tempo Real</span>
                </div>
                <Badge variant="secondary">Stablecoin · Lastro USD</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <TradingViewWidget symbol="USDCUSD" height="384" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Coins, label: "Símbolo", value: "USDC" },
            { icon: Globe2, label: "Emissor", value: "Circle Internet Financial" },
            { icon: Landmark, label: "Lastro", value: "1 USDC = 1 USD" },
            { icon: Layers, label: "Redes", value: "Ethereum, Solana, +14" },
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
          <UniversalConverter assetType="crypto" assetSymbol="USDC" assetName="USD Coin" />
        </div>

        <article className="space-y-12 max-w-4xl mx-auto">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Quanto vale 1 USDC hoje em real?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              O <strong className="text-foreground">USD Coin (USDC)</strong> é uma stablecoin
              emitida pela <strong className="text-foreground">Circle</strong> em parceria com a
              Coinbase, lançada em 2018 pelo consórcio Centre. Cada USDC é lastreado 1:1 em
              dólares americanos mantidos em contas segregadas e títulos do Tesouro dos EUA.
              Para conferir <strong>quanto vale 1 USDC hoje em reais</strong>, use o conversor
              USDC/BRL em tempo real acima.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              A <strong>cotação do USDC em real</strong> acompanha diretamente a variação do
              dólar comercial no Brasil, já que o USD Coin mantém paridade estável com o USD.
              Ideal para quem busca <strong>dolarizar carteira cripto</strong> sem sair do
              ecossistema blockchain.
            </p>

            <Card className="border-l-4 border-l-primary bg-primary/5 my-6">
              <CardContent className="p-5 flex gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  <strong>Curiosidade:</strong> a Circle publica <strong>atestações mensais
                  auditadas pela Deloitte</strong>, comprovando que 100% do supply de USDC está
                  respaldado por caixa e Treasury Bills de curto prazo.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Como o USDC mantém a paridade com o dólar
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              O modelo do USDC é <strong>collateralized fiat-backed</strong>: para cada token
              emitido, a Circle deposita 1 dólar em reserva. Instituições autorizadas podem
              resgatar USDC diretamente por dólares, mecanismo que sustenta o preço próximo de
              US$ 1,00 no mercado secundário via arbitragem.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                {
                  icon: Landmark,
                  title: "Reservas Auditadas",
                  desc: "Caixa e Treasury Bills custodiados no BNY Mellon e geridos pela BlackRock via Circle Reserve Fund.",
                },
                {
                  icon: ShieldCheck,
                  title: "Regulação Sólida",
                  desc: "Circle é licenciada como Money Transmitter nos EUA e possui autorização MiCA na Europa.",
                },
                {
                  icon: Layers,
                  title: "Multi-Chain Nativo",
                  desc: "Disponível em Ethereum, Solana, Base, Arbitrum, Polygon, Avalanche e outras 10+ redes via CCTP.",
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
                Para que serve o USDC no dia a dia
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl">Vantagens</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Proteção contra desvalorização do real",
                      "Rendimento em pools DeFi (Aave, Compound)",
                      "Envio internacional 24/7 com taxas baixas",
                      "Porto seguro em momentos de volatilidade",
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
                      "Risco de custódia centralizado na Circle",
                      "Possibilidade de bloqueio de endereços (blacklist)",
                      "Rendimento em DeFi tem risco de smart contract",
                      "Tributação de ganho de câmbio no Brasil",
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
                  <strong>Importante:</strong> em março de 2023, o USDC perdeu brevemente a
                  paridade após exposição da Circle ao Silicon Valley Bank. A situação foi
                  regularizada, mas mostra que <strong>stablecoins não são 100% livres de
                  risco</strong>.
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
                Como comprar USDC no Brasil com PIX
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              <strong>Comprar USDC com PIX</strong> é simples: cadastre-se na Binance, Mercado
              Bitcoin, Foxbit, NovaDAX, Bitso ou Coinbase, faça o KYC, deposite reais via PIX
              e negocie o par USDC/BRL. Para custódia, use MetaMask, Phantom, Trust Wallet ou
              hardware wallets como Ledger Nano X e Trezor Safe 3. Sempre confirme a
              <strong> rede correta</strong> (ERC-20, Solana, Base) para evitar perda de
              fundos ao transferir.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Perguntas frequentes sobre USD Coin (USDC)
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1">
                <AccordionTrigger className="text-left">
                  Quanto vale 1 USDC hoje em real?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  A cotação do USDC em real acompanha a variação do dólar comercial, já que
                  cada USD Coin é lastreado 1:1 em USD. Confira o valor atualizado em tempo
                  real no conversor USDC/BRL desta página.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger className="text-left">
                  USDC é mais seguro que USDT?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  O USDC é considerado mais transparente que o USDT (Tether) por publicar
                  atestações mensais auditadas pela Deloitte, manter reservas exclusivamente
                  em caixa e Treasury Bills de curto prazo, e ser emitido por uma empresa
                  regulada nos EUA e na União Europeia (MiCA). Ainda assim, ambos são
                  stablecoins centralizadas e envolvem risco de contraparte.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger className="text-left">
                  Como ganhar rendimento com USDC?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Você pode aplicar USDC em protocolos DeFi como Aave, Compound, Morpho, Sky
                  (ex-MakerDAO) e Pendle, obtendo APY variável entre 3% e 10% ao ano. Também
                  é possível usar produtos de yield de exchanges centralizadas como Binance
                  Earn e Coinbase. Sempre avalie os riscos de smart contract e custódia.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger className="text-left">
                  Em qual rede devo comprar USDC?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Depende do uso: Solana e Base oferecem taxas fracionárias e alta velocidade,
                  ideais para pagamentos e swaps frequentes. Ethereum (ERC-20) tem maior
                  liquidez e integração com todo o ecossistema DeFi, mas com taxas mais
                  altas. Arbitrum e Polygon são bons meios-termos. O CCTP da Circle permite
                  bridge nativo entre redes sem risco de wrapped tokens.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5">
                <AccordionTrigger className="text-left">
                  A Circle pode congelar meu USDC?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sim. A Circle possui função de blacklist no contrato do USDC e pode congelar
                  endereços associados a atividades ilegais, sanções internacionais (OFAC) ou
                  ordens judiciais. Esse é um trade-off da regulação — traz confiança
                  institucional, mas remove parte da resistência à censura típica de cripto.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q6">
                <AccordionTrigger className="text-left">
                  USDC é aceito para pagamentos internacionais?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sim. O USDC é uma das stablecoins mais aceitas globalmente para remessas
                  internacionais, pagamento de freelancers e liquidação B2B. Serviços como
                  Stripe, Shopify, Revolut e diversas fintechs LatAm já integram USDC
                  nativamente, permitindo receber pagamentos em dólar digital com liquidação
                  em segundos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q7">
                <AccordionTrigger className="text-left">
                  USDC pode perder o lastro no dólar?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  É improvável em condições normais devido às reservas auditadas em Treasury
                  Bills e à supervisão regulatória. Porém, em março de 2023, o USDC caiu a
                  US$ 0,88 temporariamente após exposição da Circle ao Silicon Valley Bank —
                  se recuperou em poucos dias. O risco existe mas é baixo em comparação a
                  stablecoins algorítmicas.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default USDCHoje;
