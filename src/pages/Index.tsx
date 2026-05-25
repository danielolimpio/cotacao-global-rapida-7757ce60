import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import TradingViewWidget from "@/components/TradingViewWidget";
import UniversalConverter from "@/components/UniversalConverter";
import EducationalSection from "@/components/EducationalSection";
import { Button } from "@/components/ui/button";
import { TrendingUp, Globe, Shield, Zap, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Link } from "react-router-dom";
import useRealTimeQuotes from "@/hooks/useRealTimeQuotes";
import heroMoneyTime from "@/assets/hero-money-time.webp";
import worldCurrencies from "@/assets/world-currencies.png";
import calculatorImg from "@/assets/calculator.webp";
import dollarChart from "@/assets/dollar-chart.webp";
import dollarMarket from "@/assets/dollar-market.jpg";
import xeExchange from "@/assets/xe-exchange.webp";
import exchangeRateIcon from "@/assets/exchange-rate-icon.png";

const Index = () => {
  const { quotes } = useRealTimeQuotes(["USDBRL", "EURBRL", "GBPBRL", "CADBRL"]);

  const cards = [
    { key: "USDBRL", label: "Dólar Comercial", sub: "USD / BRL", path: "/cambio/usd-brl" },
    { key: "EURBRL", label: "Euro", sub: "EUR / BRL", path: "/cambio/eur-brl" },
    { key: "GBPBRL", label: "Libra Esterlina", sub: "GBP / BRL", path: "/cambio/gbp-brl" },
    { key: "CADBRL", label: "Dólar Canadense", sub: "CAD / BRL", path: "/cambio/cad-brl" },
  ];

  const markets = [
    { name: "Câmbio", desc: "Moedas globais e BRL", path: "/cambio", icon: "💱" },
    { name: "Crypto", desc: "Bitcoin & altcoins", path: "/crypto", icon: "₿" },
    { name: "Ações", desc: "B3, NYSE, NASDAQ", path: "/acoes", icon: "📈" },
    { name: "Forex", desc: "Pares principais 24/7", path: "/forex", icon: "🌐" },
  ];

  return (
    <Layout>
      <SEO path="/" />

      {/* HERO — Minimalist Premium */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute -bottom-40 right-1/3 w-[600px] h-[600px] rounded-full bg-emerald-bright/10 blur-3xl" />
        </div>

        <div className="container mx-auto px-6 pt-20 pb-24 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-emerald-bright/10 border border-emerald-bright/20 rounded-full px-4 py-1.5 mb-8 text-xs font-semibold text-emerald-bright tracking-widest uppercase animate-fade-up">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-bright opacity-60 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-bright" />
                </span>
                Mercados Globais Ao Vivo
              </div>

              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground mb-8 leading-[1.05] animate-fade-up">
                Cotações em<br />
                <span className="text-gradient-gold italic font-light inline-block pr-3">Tempo Real</span>
              </h1>

              <p className="max-w-2xl mx-auto lg:mx-0 text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed animate-fade-up">
                Acompanhe moedas, criptoativos, ações e índices globais com a precisão e o refinamento que sua estratégia financeira merece.
              </p>

              <div className="flex flex-col sm:flex-row lg:justify-start justify-center gap-4 animate-fade-up">
                <Link to="/ver-todas-cotacoes">
                  <Button size="lg" className="rounded-full px-8 py-6 bg-emerald text-cream hover:bg-emerald-bright shadow-elegant font-semibold">
                    <TrendingUp className="mr-2 h-5 w-5" />
                    Ver Todas as Cotações
                  </Button>
                </Link>
                <Link to="/calculadora-juros">
                  <Button size="lg" variant="outline" className="rounded-full px-8 py-6 border-emerald/20 hover:bg-emerald/5 font-semibold">
                    Calculadora de Juros
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative animate-fade-up lg:-mr-8 xl:-mr-16">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-emerald-bright/20 blur-3xl rounded-full" />
              <img
                src={heroMoneyTime}
                alt="Cotações financeiras em tempo real"
                width={1100}
                height={680}
                fetchPriority="high"
                className="relative w-full h-auto scale-110 lg:scale-125 origin-center drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MARKET GRID — Mercury style */}
      <section className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden border border-border shadow-elegant">
          {cards.map(({ key, label, sub, path }) => {
            const q = quotes[key];
            const positive = q ? q.change >= 0 : true;
            const price = q ? q.price.toFixed(4) : "—";
            const pct = q ? `${positive ? "+" : ""}${q.changePercent.toFixed(2)}%` : "—";
            return (
              <Link
                key={key}
                to={path}
                className="group bg-card p-8 flex flex-col justify-between hover:bg-muted/40 transition-colors min-h-[180px]"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase">{label}</div>
                    <div className="text-xs text-muted-foreground/70 mt-1">{sub}</div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground/40 group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="font-display font-bold text-3xl text-foreground font-mono-num">R$ {price}</div>
                    <div className={`mt-1 text-sm font-semibold flex items-center gap-1 ${positive ? "text-emerald-bright" : "text-destructive"}`}>
                      {positive ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                      {pct}
                    </div>
                  </div>
                  <svg className={`w-20 h-10 ${positive ? "text-emerald-bright" : "text-destructive"}`} viewBox="0 0 100 40" fill="none">
                    <path
                      d={positive ? "M0 35 L20 30 L40 32 L60 15 L80 18 L100 5" : "M0 5 L20 15 L40 10 L60 35 L80 30 L100 38"}
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* MAIN CHART — USD/BRL Editorial */}
      <section className="container mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-10">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-3">
              <img src={exchangeRateIcon} alt="" aria-hidden="true" className="w-8 h-8" />
              <div className="text-xs font-bold tracking-[0.25em] text-gold uppercase">Análise em Destaque</div>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Dólar / Real <span className="text-gradient-emerald">em foco</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl">
              Acompanhe o par mais negociado do Brasil com gráfico institucional e dados de mercado precisos.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link to="/cambio/usd-brl">
              <Button variant="outline" className="rounded-full border-emerald/20 hover:bg-emerald/5">
                Ver análise completa
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 rounded-3xl border border-border bg-card overflow-hidden shadow-elegant">
            <div className="h-[420px]">
              <TradingViewWidget symbol="USDBRL" height="420" />
            </div>
          </div>
          <div className="lg:col-span-4 rounded-3xl overflow-hidden shadow-elegant border border-border relative min-h-[280px]">
            <img
              src={dollarChart}
              alt="Análise técnica do dólar"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald/95 via-emerald/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="text-xs font-bold tracking-[0.25em] text-gold uppercase mb-2">Insight</div>
              <p className="text-cream font-display text-xl leading-snug">
                Volatilidade institucional capturada em tempo real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAL BANNER */}
      <section className="container mx-auto px-6 pb-20">
        <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-border h-[280px] md:h-[340px]">
          <img
            src={dollarMarket}
            alt="Mercado financeiro global"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald via-emerald/85 to-emerald/30" />
          <div className="relative h-full flex items-center px-10 md:px-16 max-w-3xl">
            <div>
              <div className="text-xs font-bold tracking-[0.25em] text-gold uppercase mb-4">Mercados em movimento</div>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-cream leading-tight mb-4">
                Cada centavo conta.<br />Cada segundo importa.
              </h2>
              <p className="text-cream/80 text-base md:text-lg max-w-xl">
                Dados de mercado institucionais ao alcance de qualquer investidor — do iniciante ao profissional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONVERTER */}
      <section className="container mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <UniversalConverter assetType="fiat" assetSymbol="USD" assetName="Dólar Americano" />
          </div>
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-bright/10 to-gold/10 blur-3xl rounded-full" />
            <img
              src={calculatorImg}
              alt="Calculadora de conversão de moedas"
              loading="lazy"
              className="relative w-full h-auto max-w-md mx-auto drop-shadow-xl"
            />
            <div className="text-center mt-6">
              <div className="text-xs font-bold tracking-[0.25em] text-gold uppercase mb-2">Conversor Universal</div>
              <p className="text-muted-foreground text-sm max-w-sm mx-auto">
                Converta qualquer moeda fiduciária ou criptoativo com taxas atualizadas em tempo real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MARKETS PILLARS */}
      <section className="container mx-auto px-6 pb-24 relative">
        <div className="text-center mb-14 relative">
          <div className="text-xs font-bold tracking-[0.25em] text-gold uppercase mb-3">Mercados Cobertos</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Inteligência financeira <span className="text-gradient-emerald">sem fronteiras</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {markets.map((m) => (
            <Link
              key={m.path}
              to={m.path}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 hover:border-gold/40 transition-all shadow-soft hover:shadow-elegant"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gold/5 group-hover:bg-gold/15 transition-colors" />
              <div className="relative">
                <div className="text-4xl mb-6">{m.icon}</div>
                <h3 className="font-display font-bold text-2xl mb-2">{m.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{m.desc}</p>
                <div className="flex items-center gap-1 text-sm font-semibold text-emerald-bright group-hover:text-gold transition-colors">
                  Explorar
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="relative bg-emerald text-cream py-24 overflow-hidden">
        <img
          src={xeExchange}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-luminosity"
        />
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <div className="text-xs font-bold tracking-[0.25em] text-gold uppercase mb-3">Por que Cotação de Hoje</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
              Dados precisos. Design refinado. Decisões melhores.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-cream/10 border border-cream/10 rounded-3xl overflow-hidden">
            {[
              { icon: Zap, title: "Tempo Real", desc: "Atualizações contínuas via APIs institucionais para informação sempre fresca." },
              { icon: Globe, title: "Cobertura Global", desc: "Moedas fiduciárias, criptoativos, ações e índices dos principais mercados mundiais." },
              { icon: Shield, title: "Dados Confiáveis", desc: "Integração TradingView e fontes oficiais — sem ruído, apenas precisão." },
            ].map((f) => (
              <div key={f.title} className="bg-emerald p-10">
                <div className="w-12 h-12 rounded-2xl bg-gold/15 border border-gold/30 flex items-center justify-center mb-6">
                  <f.icon className="h-5 w-5 text-gold" />
                </div>
                <h3 className="font-display font-bold text-2xl text-cream mb-3">{f.title}</h3>
                <p className="text-cream/70 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Section */}
      <EducationalSection />
    </Layout>
  );
};

export default Index;
