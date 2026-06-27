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
  Lock,
  Send,
} from "lucide-react";

const DashHoje = () => {
  return (
    <Layout>
      <SEO path="/crypto/dash-hoje" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Send className="w-4 h-4" />
            CRYPTO · DASH · Pagamentos Instantâneos
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação do Dash (DASH) Hoje
            <span className="block text-primary mt-2">Preço Atualizado em Real e Dólar</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe o valor do Dash em tempo real, entenda o sistema InstantSend, PrivateSend e
            como esta criptomoeda focada em pagamentos rápidos se tornou referência em adoção
            comercial na América Latina.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>DASH/USD — Gráfico em Tempo Real</span>
                </div>
                <Badge variant="secondary">Cripto · Pagamentos</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <TradingViewWidget symbol="DASHUSD" height="384" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Coins, label: "Símbolo", value: "DASH" },
            { icon: Globe2, label: "Rede", value: "Dash Core" },
            { icon: ShieldCheck, label: "Consenso", value: "PoW + Masternodes" },
            { icon: Clock, label: "Bloco", value: "~2,5 min" },
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
          <UniversalConverter assetType="crypto" assetSymbol="DASH" assetName="Dash" />
        </div>

        <article className="space-y-12 max-w-4xl mx-auto">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Quanto vale 1 Dash hoje em real?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              O <strong className="text-foreground">Dash (DASH)</strong>, originalmente lançado
              como Darkcoin em 2014 e renomeado em 2015, é uma criptomoeda focada em pagamentos
              rápidos e privados. Para conferir <strong>quanto vale 1 Dash hoje em reais</strong>,
              utilize o conversor de DASH para BRL com cotação em tempo real disponível abaixo.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              A <strong>cotação do Dash em dólar</strong> tem forte correlação com a adoção em
              países emergentes, principalmente Venezuela, Colômbia e Argentina, onde o DASH é
              amplamente usado como alternativa às moedas locais desvalorizadas.
            </p>

            <Card className="border-l-4 border-l-primary bg-primary/5 my-6">
              <CardContent className="p-5 flex gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  <strong>Curiosidade:</strong> com <strong>InstantSend</strong>, transações em
                  Dash são confirmadas em menos de 2 segundos, tornando-a uma das criptomoedas
                  mais rápidas para pagamentos no varejo.
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
                Como funcionam InstantSend, PrivateSend e Masternodes
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              O Dash inovou ao introduzir a rede de <strong>Masternodes</strong>, nós especiais
              que exigem garantia de 1.000 DASH e oferecem serviços avançados como
              InstantSend (transações instantâneas) e PrivateSend (mistura de moedas para
              maior privacidade).
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                {
                  icon: Zap,
                  title: "InstantSend",
                  desc: "Confirmação em menos de 2 segundos, ideal para pagamentos presenciais em lojas, restaurantes e e-commerce.",
                },
                {
                  icon: Lock,
                  title: "PrivateSend",
                  desc: "Mistura coins entre usuários para anonimizar a origem das transações, garantindo privacidade financeira opcional.",
                },
                {
                  icon: ShieldCheck,
                  title: "Masternodes",
                  desc: "Operadores de Masternode votam no Dash Treasury e recebem parte da recompensa por bloco — incentivo descentralizado.",
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
                <Globe2 className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Adoção do Dash no comércio e países emergentes
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              Diferente de muitas criptomoedas focadas em especulação, o Dash construiu uma forte
              base de <strong>adoção real no varejo</strong>. Em países como Venezuela e Colômbia,
              dezenas de milhares de estabelecimentos aceitam DASH como meio de pagamento via
              app Dash Direct e DashPay.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl">Vantagens do Dash</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Transações em menos de 2 segundos",
                      "Taxas extremamente baixas (centavos)",
                      "Governança descentralizada via Treasury",
                      "Adoção real no varejo latino-americano",
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
                      "Competição forte com Lightning Network e stablecoins",
                      "Volatilidade do preço em BRL",
                      "PrivateSend pode ser visto com restrição por exchanges",
                      "Concentração de Masternodes em poucos operadores",
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
                  <strong>Importante:</strong> apesar do PrivateSend, transações em Dash são
                  rastreáveis na blockchain pública. Não confunda privacidade com anonimato total.
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
                Como comprar Dash no Brasil com PIX
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              É possível <strong>comprar Dash com PIX</strong> em exchanges como Mercado Bitcoin,
              Binance, Foxbit e BitPreço. O processo é simples: cadastro, KYC, depósito via PIX
              e ordem de compra no par DASH/BRL ou DASH/USDT. Para guardar com segurança, use a
              <strong> Dash Core Wallet</strong>, Trust Wallet ou hardware wallets como Ledger e
              Trezor.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Perguntas frequentes sobre Dash (DASH)
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1">
                <AccordionTrigger className="text-left">
                  Quanto vale 1 Dash hoje em real?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  O preço do Dash em real varia em tempo real conforme volume das exchanges.
                  Utilize o conversor desta página para ver o valor atualizado convertido
                  diretamente de USD para BRL com a cotação do dólar do dia.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger className="text-left">
                  Dash é uma boa criptomoeda para investir?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Dash tem proposta clara como moeda digital para pagamentos rápidos, com adoção
                  real em comércios e remessas internacionais. Como investimento, depende do
                  perfil de risco e da convicção sobre o crescimento de pagamentos cripto no
                  varejo global.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger className="text-left">
                  Qual a diferença entre Dash e Bitcoin?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Dash nasceu como fork do Bitcoin com foco em velocidade e privacidade. Tem
                  confirmação em segundos (vs minutos do BTC), taxas muito menores e oferece
                  PrivateSend, recurso ausente no Bitcoin. Por outro lado, BTC tem liquidez e
                  segurança incomparáveis.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger className="text-left">
                  Como funciona um Masternode do Dash?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Operar um Masternode exige 1.000 DASH como colateral, hospedagem em servidor
                  dedicado 24/7 e configuração técnica. Em troca, o operador recebe
                  aproximadamente 6% a 8% ao ano em DASH e direito a voto sobre propostas do
                  Treasury.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5">
                <AccordionTrigger className="text-left">
                  Qual o supply máximo do Dash?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  O supply máximo do Dash é de aproximadamente 18,9 milhões de moedas, com
                  emissão decrescente ao longo do tempo (deflacionária), semelhante ao modelo
                  do Bitcoin.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q6">
                <AccordionTrigger className="text-left">
                  Onde gastar Dash no Brasil?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Embora a adoção no Brasil ainda seja menor que na Venezuela, é possível usar
                  Dash em diversos e-commerces internacionais via processadores como CoinPayments
                  e BTCPay, além de cartões cripto como Crypto.com Visa, que convertem DASH em
                  reais para pagamento em qualquer maquininha.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q7">
                <AccordionTrigger className="text-left">
                  PrivateSend do Dash é ilegal no Brasil?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Não. Privacidade financeira não é crime. Entretanto, exchanges brasileiras
                  podem aplicar políticas mais rígidas a depósitos provenientes de PrivateSend
                  por questões de compliance e prevenção à lavagem de dinheiro.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default DashHoje;
