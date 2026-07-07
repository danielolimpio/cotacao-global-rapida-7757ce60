import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import TradingViewWidget from "@/components/TradingViewWidget";
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
  Building2,
  Globe2,
  Landmark,
  PiggyBank,
} from "lucide-react";

const BlackRockHoje = () => {
  return (
    <Layout>
      <SEO path="/acoes/blackrock-hoje" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Landmark className="w-4 h-4" />
            AÇÕES · BLACKROCK · Maior Gestora do Mundo
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação da BlackRock (BLK) Hoje
            <span className="block text-primary mt-2">Preço da Ação em Tempo Real, iShares e Dividendos</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe a cotação da <strong>BlackRock Inc. (NYSE: BLK)</strong> em tempo real, a maior
            gestora de ativos do mundo com mais de <strong>US$ 10 trilhões sob gestão</strong>. Veja
            preço, dividendos, história e como investir na dona dos ETFs iShares e do IBIT.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>BlackRock Inc. (BLK) — Gráfico em Tempo Real</span>
                </div>
                <Badge variant="secondary">NYSE · Asset Manager · Dividend Growth</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <TradingViewWidget symbol="NYSE:BLK" height="384" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Building2, label: "Empresa", value: "BlackRock Inc." },
            { icon: Globe2, label: "Sede", value: "Nova York · EUA" },
            { icon: PiggyBank, label: "AUM", value: "US$ 10 trilhões+" },
            { icon: DollarSign, label: "Ticker", value: "NYSE:BLK" },
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

        <article className="space-y-12 max-w-4xl mx-auto">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Quanto vale a ação da BlackRock (BLK) hoje?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              A <strong className="text-foreground">BlackRock Inc.</strong> é a maior gestora de ativos do
              mundo, fundada em 1988 por Larry Fink em Nova York. É dona da linha de ETFs
              <strong> iShares</strong>, do sistema de risco <strong>Aladdin</strong> e do IBIT — o ETF
              spot de Bitcoin que se tornou o maior do gênero em tempo recorde.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              A <strong>cotação da BLK hoje</strong> reflete o crescimento do AUM, a expansão dos ETFs
              iShares, receitas de tecnologia (Aladdin), aquisições estratégicas (como GIP no setor de
              infraestrutura) e a política de recompra e dividendos crescentes.
            </p>

            <Card className="border-l-4 border-l-primary bg-primary/5 my-6">
              <CardContent className="p-5 flex gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  <strong>Destaque:</strong> a BlackRock é a única gestora do mundo com mais de
                  <strong> US$ 10 trilhões em ativos sob gestão</strong> e aumenta seu dividendo há
                  mais de <strong>15 anos consecutivos</strong>.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <PiggyBank className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Principais produtos e negócios da BlackRock
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                { title: "iShares ETFs", desc: "Mais de 1.400 ETFs em todo o mundo, incluindo IVV (S&P 500), EEM (emergentes), TLT (Treasuries)." },
                { title: "IBIT · Bitcoin ETF", desc: "O maior ETF spot de Bitcoin do mundo, com mais de US$ 40 bilhões em ativos em menos de 2 anos." },
                { title: "Aladdin", desc: "Plataforma de gestão de risco usada por bancos centrais, gestoras e seguradoras globais." },
                { title: "Renda Fixa Ativa", desc: "Um dos maiores gestores globais de bonds, com fundos institucionais e mutual funds ativos." },
                { title: "Alternativos & GIP", desc: "Com a compra da Global Infrastructure Partners, BlackRock virou gigante de infraestrutura." },
                { title: "Closed-End Funds", desc: "Fundos como BST, BUI e BME oferecem renda mensal em dólar via covered calls." },
              ].map((item) => (
                <Card key={item.title} className="hover:shadow-lg transition-all hover:-translate-y-0.5">
                  <CardContent className="p-5">
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
                Vale a pena investir em BlackRock (BLK) em 2026?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              A BLK é considerada uma ação de <strong>qualidade de longo prazo</strong>, com moat
              competitivo (iShares e Aladdin), crescimento consistente de AUM e histórico de aumento de
              dividendos. Para investidores que buscam <strong>dividend growth</strong> e exposição ao
              crescimento estrutural da indústria de ETFs, é uma das principais opções globais.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl">Vantagens</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Maior gestora do mundo (US$ 10T em AUM)",
                      "Dividendo crescente há mais de 15 anos",
                      "Moat com iShares, Aladdin e IBIT",
                      "Exposição a ETFs, bonds, cripto e infra",
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
                      "Receita sensível a quedas do mercado",
                      "Pressão política sobre ESG e influência",
                      "Concorrência com Vanguard e State Street",
                      "P/L acima da média histórica em bull markets",
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
                  <strong>Importante:</strong> a BLK tem beta próximo de 1,3 — em quedas fortes do mercado,
                  a ação tende a cair mais que o S&P 500 pela alavancagem operacional sobre o AUM.
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
                Como comprar ações da BlackRock (BLK) no Brasil
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Para <strong>investir em BLK no Brasil</strong>, abra conta em uma corretora internacional
              (Avenue, Nomad, Inter Global, XP US, C6 Global, Interactive Brokers), faça o câmbio para
              dólar, envie os recursos para a conta internacional e compre BLK diretamente na NYSE. Você
              também pode investir indiretamente comprando ETFs iShares (IVV, IEFA, EEM) ou BDRs da
              BlackRock na B3 (ticker BLAK34).
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Perguntas frequentes sobre a BlackRock (BLK)
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1">
                <AccordionTrigger className="text-left">Quanto está a cotação da BlackRock hoje?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  A cotação da BLK atualizada em tempo real está no gráfico acima, com dados da NYSE. É
                  atualmente a ação de asset management mais cara de Wall Street.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger className="text-left">Qual o valor de mercado da BlackRock?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  A BlackRock tem market cap na casa dos US$ 150 bilhões e mais de US$ 10 trilhões em
                  ativos sob gestão, sendo a maior gestora independente do mundo.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger className="text-left">A BlackRock paga bons dividendos?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sim. A BLK distribui dividendos trimestrais em dólar e aumenta o valor há mais de 15
                  anos consecutivos, sendo considerada uma "Dividend Aristocrat" em formação.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger className="text-left">Existe BDR da BlackRock no Brasil?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sim. O BDR BLAK34 é negociado na B3 e replica a ação BLK da NYSE, permitindo investir
                  em reais sem precisar abrir conta internacional.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5">
                <AccordionTrigger className="text-left">O que é o iShares?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  iShares é a marca de ETFs da BlackRock, líder mundial com mais de 1.400 fundos e US$ 3
                  trilhões em patrimônio. Inclui IVV (S&P 500), IEFA, EEM, TLT, HYG, entre outros.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q6">
                <AccordionTrigger className="text-left">A BlackRock é dona do IBIT?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sim. O iShares Bitcoin Trust (IBIT) é o ETF spot de Bitcoin da BlackRock, aprovado em
                  janeiro de 2024, hoje o maior ETF de BTC do mundo com mais de US$ 40 bilhões em ativos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q7">
                <AccordionTrigger className="text-left">Como declarar BlackRock no IR?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Ações da BLK vão em Bens e Direitos ao custo em reais. Dividendos entram no
                  carnê-leão. BDRs BLAK34 seguem regras específicas de bolsa brasileira.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default BlackRockHoje;
