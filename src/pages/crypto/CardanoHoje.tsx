import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import TradingViewWidget from "@/components/TradingViewWidget";
import UniversalConverter from "@/components/UniversalConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
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
  GraduationCap,
  Leaf,
} from "lucide-react";

const CardanoHoje = () => {
  return (
    <Layout>
      <SEO path="/crypto/cardano-hoje" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <GraduationCap className="w-4 h-4" />
            CRYPTO · ADA · Pesquisa Acadêmica
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação do Cardano (ADA) Hoje
            <span className="block text-primary mt-2">Valor em Tempo Real</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe o preço do ADA, criptomoeda da blockchain Cardano — uma das mais
            sustentáveis e cientificamente embasadas do mercado.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>ADA/USD — Gráfico em Tempo Real</span>
                </div>
                <Badge variant="secondary">Cripto · Plataforma PoS</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <TradingViewWidget symbol="ADAUSD" height="384" theme="light" style="advanced" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Coins, label: "Símbolo", value: "ADA" },
            { icon: Globe2, label: "Rede", value: "Cardano Blockchain" },
            { icon: ShieldCheck, label: "Consenso", value: "Ouroboros PoS" },
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
          <UniversalConverter assetType="crypto" assetSymbol="ADA" assetName="Cardano" />
        </div>

        <article className="space-y-12 max-w-4xl mx-auto">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Quanto vale 1 ADA hoje?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              O <strong className="text-foreground">Cardano (ADA)</strong> é uma blockchain
              de terceira geração lançada em 2017 por <strong className="text-foreground">Charles
              Hoskinson</strong>, um dos cofundadores do Ethereum. O nome ADA é uma
              homenagem a <strong>Ada Lovelace</strong>, considerada a primeira programadora
              da história.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Cardano se diferencia por ser desenvolvido com base em{" "}
              <strong className="text-foreground">pesquisa acadêmica revisada por pares</strong>,
              usando o protocolo Ouroboros — o primeiro PoS provavelmente seguro do mundo.
            </p>

            <Card className="border-l-4 border-l-primary bg-primary/5 my-6">
              <CardContent className="p-5 flex gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  <strong>Curiosidade:</strong> o supply máximo de ADA é de{" "}
                  <strong>45 bilhões</strong>, e a rede já é uma das mais descentralizadas
                  do mundo, com milhares de stake pools operando globalmente.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                O que move o preço do Cardano?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                {
                  icon: Leaf,
                  title: "Sustentabilidade",
                  desc: "Como PoS nativo, Cardano é energeticamente eficiente — atrativo para fundos ESG e regulação verde.",
                },
                {
                  icon: GraduationCap,
                  title: "Adoção em Países Emergentes",
                  desc: "Parcerias com governos da Etiópia e África para identidade digital escolar geram demanda institucional.",
                },
                {
                  icon: Zap,
                  title: "Smart Contracts (Plutus)",
                  desc: "Desde o hard fork Alonzo, Cardano roda contratos inteligentes via Plutus — base para DeFi e NFTs.",
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
                Staking de ADA: como funciona
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              Qualquer detentor de ADA pode delegar seus tokens a um <strong>stake pool</strong>{" "}
              sem perder a custódia, recebendo recompensas a cada época (5 dias). É uma das
              formas mais simples de gerar renda passiva em cripto.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl">Vantagens</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Sem período de lock-up",
                      "Recompensas a cada 5 dias",
                      "Tokens permanecem na sua carteira",
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
                  <CardTitle className="text-xl">Pontos de Atenção</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Escolha pools com baixa saturação",
                      "Recompensa anual varia entre 2% e 5%",
                      "Considere taxas do pool antes de delegar",
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
                  <strong>Importante:</strong> use carteiras oficiais como{" "}
                  <strong>Daedalus</strong> ou <strong>Yoroi</strong> para delegar com
                  segurança. Nunca compartilhe sua seed phrase.
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
                Cardano no Brasil
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              O ADA pode ser adquirido em todas as principais exchanges brasileiras com PIX,
              e tem comunidade ativa no país. Sua proposta de blockchain científica e
              sustentável atrai investidores de longo prazo (HODLers) interessados em
              tecnologia descentralizada com governança estruturada.
            </p>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default CardanoHoje;
