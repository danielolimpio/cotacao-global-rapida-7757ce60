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
  Network,
  ShieldCheck,
} from "lucide-react";

const CiscoHoje = () => {
  return (
    <Layout>
      <SEO path="/acoes/cisco" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Network className="w-4 h-4" />
            AÇÕES · CISCO · NASDAQ: CSCO
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cotação da Cisco (CSCO) Hoje
            <span className="block text-primary mt-2">Preço em Tempo Real, Redes, Segurança e Dividendos</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe a <strong>cotação da Cisco Systems (NASDAQ: CSCO)</strong> em tempo real, líder
            mundial em <strong>equipamentos de rede, cibersegurança e infraestrutura de data center</strong>,
            com um dos <strong>maiores dividend yields</strong> entre as big techs.
          </p>
        </header>

        <div className="mb-10">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
              <CardTitle className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>Cisco Systems (CSCO) — Gráfico em Tempo Real</span>
                </div>
                <Badge variant="secondary">NASDAQ · Networking · Dividend Growth</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <TradingViewWidget symbol="NASDAQ:CSCO" height="384" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Building2, label: "Empresa", value: "Cisco Systems Inc." },
            { icon: Globe2, label: "Sede", value: "San Jose · EUA" },
            { icon: ShieldCheck, label: "Setor", value: "Redes · Segurança · Colaboração" },
            { icon: DollarSign, label: "Ticker", value: "NASDAQ:CSCO" },
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
                Quanto vale a ação da Cisco (CSCO) hoje?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              A <strong className="text-foreground">Cisco Systems</strong>, fundada em 1984, praticamente
              construiu a infraestrutura da internet moderna com seus roteadores e switches. Hoje é uma
              gigante madura de tecnologia, com forte presença em <strong>cibersegurança (Splunk, Duo)</strong>,
              colaboração (Webex) e redes empresariais. A cotação da CSCO hoje reflete transição para
              modelo de <strong>software e receita recorrente (ARR)</strong>.
            </p>
            <Card className="border-l-4 border-l-primary bg-primary/5 my-6">
              <CardContent className="p-5 flex gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  <strong>Destaque:</strong> a Cisco comprou a <strong>Splunk por US$ 28 bilhões</strong> em
                  2024, tornando-se uma das maiores empresas de observabilidade e segurança de dados do mundo.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Network className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Principais negócios da Cisco
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Networking", desc: "Roteadores, switches Catalyst e infra Wi-Fi líder mundial em redes corporativas." },
                { title: "Security", desc: "Duo, Umbrella, Talos e agora Splunk formam um portfólio robusto de cibersegurança." },
                { title: "Collaboration", desc: "Webex e telefonia IP para empresas e governos." },
                { title: "Observability", desc: "Splunk + AppDynamics + ThousandEyes lideram monitoramento de TI." },
                { title: "Data Center", desc: "Servidores UCS, Nexus e soluções para nuvem híbrida." },
                { title: "Silicon One", desc: "Chips próprios para networking em data centers hiperescala." },
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
                Vale a pena investir em Cisco (CSCO) em 2026?
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-primary shadow-md">
                <CardHeader><CardTitle className="text-xl">Vantagens</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Dividend yield entre os mais altos das big techs",
                      "Fluxo de caixa livre robusto",
                      "Transição bem-sucedida para software/ARR",
                      "Portfólio de segurança fortalecido com Splunk",
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
                <CardHeader><CardTitle className="text-xl">Pontos de atenção</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Crescimento mais lento que peers de cloud",
                      "Concorrência de Arista, HPE e cloud nativas",
                      "Depende de ciclo corporativo de TI",
                      "Grandes M&As podem pressionar margens",
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
                  <strong>Importante:</strong> a CSCO é vista como <strong>ação de renda + valor</strong>, não
                  de alto crescimento — foco em quem busca dividendos consistentes em dólar.
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
                Como comprar ações da Cisco (CSCO) no Brasil
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Basta abrir conta em corretora internacional (Avenue, Nomad, Inter Global, XP US, C6 Global) e
              comprar CSCO diretamente na Nasdaq. Dividendos são pagos trimestralmente em dólar.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Perguntas frequentes sobre a Cisco (CSCO)
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1">
                <AccordionTrigger className="text-left">Quanto vale a ação da Cisco hoje?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  A cotação em tempo real da CSCO está no gráfico acima. Multiplique pelo dólar do dia para o valor
                  em reais.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger className="text-left">Cisco paga bons dividendos?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sim. A CSCO paga dividendos trimestrais em dólar e é uma das big techs com maior dividend yield,
                  com aumentos anuais consistentes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger className="text-left">Cisco é uma boa ação para longo prazo?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Para perfis mais conservadores que buscam renda em dólar e exposição a networking e segurança
                  corporativa, é uma escolha popular.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger className="text-left">O que a Cisco fabrica?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Roteadores, switches, firewalls, soluções Wi-Fi, servidores UCS, plataformas de segurança (Duo,
                  Umbrella) e ferramentas de colaboração (Webex).
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5">
                <AccordionTrigger className="text-left">Cisco comprou a Splunk?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sim. A aquisição de US$ 28 bilhões foi concluída em 2024, consolidando a Cisco como líder em
                  segurança e observabilidade de dados.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q6">
                <AccordionTrigger className="text-left">Como comprar Cisco com pouco dinheiro?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Corretoras como Avenue e Nomad permitem frações de CSCO a partir de US$ 1.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q7">
                <AccordionTrigger className="text-left">Como declarar Cisco no imposto de renda?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Ações CSCO em Bens e Direitos ao custo em reais no exterior. Dividendos no carnê-leão mensal.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default CiscoHoje;
