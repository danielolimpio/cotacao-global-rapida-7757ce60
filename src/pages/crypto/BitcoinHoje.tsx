import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import TradingViewWidget from "@/components/TradingViewWidget";
import UniversalConverter from "@/components/UniversalConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Bitcoin,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Landmark,
  BarChart3,
  Sparkles,
  Wallet,
  ShieldCheck,
  Zap,
  Globe2,
  Coins,
} from "lucide-react";

const BitcoinHoje = () => {
  return (
    <Layout>
      <SEO path="/crypto/bitcoin-hoje" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Bitcoin className="w-4 h-4" />
            CRYPTO · BTC · Descentralizada
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação do Bitcoin (BTC) Hoje
            <span className="block text-primary mt-2">Valor em Tempo Real</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe o preço do Bitcoin, a maior e mais influente criptomoeda do mundo,
            com gráficos profissionais, conversor BRL/USD e análise completa.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>BTC/USD — Gráfico em Tempo Real</span>
                </div>
                <Badge variant="secondary">Cripto · Reserva Digital</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <TradingViewWidget symbol="BTCUSD" height="384" theme="light" style="advanced" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Coins, label: "Símbolo", value: "BTC · ₿" },
            { icon: Globe2, label: "Rede", value: "Bitcoin Blockchain" },
            { icon: ShieldCheck, label: "Consenso", value: "Proof of Work" },
            { icon: Clock, label: "Mercado", value: "24/7 · 365 dias" },
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
          <UniversalConverter assetType="crypto" assetSymbol="BTC" assetName="Bitcoin" />
        </div>

        <article className="space-y-12 max-w-4xl mx-auto">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Quanto vale 1 Bitcoin hoje?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              O <strong className="text-foreground">Bitcoin (BTC)</strong> é a primeira e
              maior criptomoeda do mundo, criada em 2009 pelo pseudônimo{" "}
              <strong className="text-foreground">Satoshi Nakamoto</strong>. Sua
              característica mais marcante é o <strong className="text-foreground">supply
              limitado a 21 milhões de unidades</strong> — uma escassez programada que lhe
              confere o apelido de <em>"ouro digital"</em>.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Diferente das moedas fiduciárias, o BTC opera em uma rede{" "}
              <strong className="text-foreground">descentralizada</strong> — sem banco
              central, sem governo, validada por milhares de nós ao redor do mundo via
              algoritmo Proof of Work.
            </p>

            <Card className="border-l-4 border-l-primary bg-primary/5 my-6">
              <CardContent className="p-5 flex gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  <strong>Curiosidade:</strong> a menor unidade do Bitcoin é o{" "}
                  <strong>satoshi</strong> (1 BTC = 100.000.000 satoshis), em homenagem
                  ao seu criador anônimo.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Landmark className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                O que influencia o preço do Bitcoin?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                {
                  icon: Zap,
                  title: "Halving (4 anos)",
                  desc: "A cada 210.000 blocos, a recompensa de mineração é reduzida pela metade — historicamente, gatilho de ciclos de alta.",
                },
                {
                  icon: Landmark,
                  title: "ETFs e Institucionais",
                  desc: "A entrada de fundos como BlackRock e Fidelity via ETFs spot ampliou o fluxo institucional para o BTC.",
                },
                {
                  icon: TrendingUp,
                  title: "Macroeconomia Global",
                  desc: "Inflação, juros do FED e crises bancárias influenciam o apetite por Bitcoin como reserva alternativa.",
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
                <Wallet className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Como comprar Bitcoin no Brasil
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              No Brasil, comprar BTC é simples e regulamentado pela CVM e Banco Central.
              Existem duas categorias principais de plataformas:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Exchanges Centralizadas</CardTitle>
                    <Badge className="bg-primary/10 text-primary border-primary/20">Iniciantes</Badge>
                  </div>
                  <h3 className="text-sm font-semibold text-muted-foreground mt-1">
                    Mercado Bitcoin, Binance, Coinbase
                  </h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Compra via PIX em minutos",
                      "Custódia gerenciada pela exchange",
                      "Interface amigável e suporte em português",
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
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Carteira Própria</CardTitle>
                    <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20">Avançado</Badge>
                  </div>
                  <h3 className="text-sm font-semibold text-muted-foreground mt-1">
                    Self-custody (Ledger, Trezor)
                  </h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Controle total da chave privada",
                      "Protege contra falência de exchanges",
                      "Exige responsabilidade com seed phrase",
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
                  <strong>Importante:</strong> ganhos com criptomoedas acima de R$ 35.000
                  ao mês em vendas são tributados pela Receita Federal. Declare suas
                  operações na DIRPF e mantenha registro de todas as transações.
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
                Bitcoin como reserva de valor
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              Cada vez mais investidores institucionais, empresas listadas em bolsa e
              até governos (como <strong>El Salvador</strong>) adotam o Bitcoin como
              parte de sua tesouraria. A tese central: em um mundo de moedas
              inflacionárias e impressão monetária ilimitada, o BTC oferece{" "}
              <strong>escassez programática verificável</strong>.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Sua volatilidade ainda é elevada — variações diárias de 5% a 10% são
              comuns — mas a maturidade do mercado, a chegada dos ETFs e a redução
              progressiva da emissão (halvings) tendem a estabilizar o ativo no longo
              prazo.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Lightning Network: Bitcoin como meio de pagamento
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              A <strong>Lightning Network</strong> é a camada 2 do Bitcoin que permite
              transações instantâneas e com taxas mínimas — milhões de pagamentos por
              segundo, contra apenas 7 da camada base. Países como El Salvador já
              utilizam o Lightning para café, salários e remessas internacionais,
              demonstrando o potencial do BTC como meio de troca prático e global.
            </p>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default BitcoinHoje;
