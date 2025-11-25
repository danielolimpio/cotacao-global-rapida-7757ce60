import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Coins, TrendingUp, ArrowLeftRight, Plane, Briefcase, BarChart3, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const EducationalSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Main Title */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Entenda os Mercados Financeiros — Sem Complicação
          </h2>
          <p className="text-lg text-muted-foreground">
            Um guia rápido e prático para quem quer entender câmbio, cripto, ações e forex — mesmo sem experiência.
          </p>
        </div>

        {/* 4 Main Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Câmbio Block */}
          <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
            <CardHeader>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Câmbio: Troca de Moedas entre Países</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                O câmbio é a taxa de troca entre duas moedas — como dólar x real, euro x real. É usado por viajantes, importadores e investidores. No nosso site, você vê a cotação comercial (mercado financeiro) e pode converter valores em tempo real.
              </p>
              
              <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r">
                <p className="text-sm font-medium text-foreground">
                  💡 <span className="font-bold">Dica:</span> Para viagens, sempre verifique a cotação turismo — ela inclui taxas e IOF.
                </p>
              </div>

              <Link to="/cambio">
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Ver cotações de moedas →
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Criptomoedas Block */}
          <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
            <CardHeader>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-lg">
                  <Coins className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Criptomoedas: Dinheiro Digital Descentralizado</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Criptomoedas são ativos digitais baseados em tecnologia blockchain. As mais conhecidas são Bitcoin (BTC), Ethereum (ETH) e Solana (SOL). Aqui, você acompanha suas cotações em tempo real — ideais para monitorar sua carteira ou entender o mercado.
              </p>
              
              <div className="bg-yellow-500/10 border-l-4 border-yellow-600 p-4 rounded-r">
                <p className="text-sm font-medium text-foreground">
                  ⚠️ <span className="font-bold">Importante:</span> Não vendemos cripto — só mostramos cotações. Compre em exchanges confiáveis.
                </p>
              </div>

              <Link to="/crypto">
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Ver cotações de cripto →
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Ações Block */}
          <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
            <CardHeader>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Ações: Partes de Empresas que Você Pode Comprar</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Ações representam uma fração de posse em uma empresa. Quando a empresa cresce, o valor da ação pode subir. Aqui, você acompanha as principais ações da B3 e bolsas internacionais — com dados precisos e atualizados.
              </p>
              
              <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r">
                <p className="text-sm font-medium text-foreground">
                  📈 Use para monitorar seu portfólio ou aprender como o mercado acionário funciona.
                </p>
              </div>

              <Link to="/acoes">
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Ver cotações de ações →
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Forex Block */}
          <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
            <CardHeader>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg">
                  <ArrowLeftRight className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Forex: Mercado de Câmbio Internacional</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Forex (Foreign Exchange) é o mercado onde moedas são negociadas entre si — como USD/EUR, GBP/JPY. É o maior mercado financeiro do mundo. Aqui, você acompanha essas taxas em tempo real — ideal para traders, importadores e quem quer entender a economia global.
              </p>
              
              <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r">
                <p className="text-sm font-medium text-foreground">
                  🌍 <span className="font-bold">Dica:</span> O Forex é volátil — acompanhe com cuidado e use como referência, não como ferramenta de trade.
                </p>
              </div>

              <Link to="/forex">
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Ver cotações Forex →
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Para Quem é Esse Site */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8">
            Seja você viajante, investidor ou curioso… temos algo para você.
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6 space-y-4">
                <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center mb-4">
                  <Plane className="h-10 w-10 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-foreground">Viajante</h4>
                <p className="text-muted-foreground">
                  Compre moeda estrangeira com segurança e entenda as melhores taxas.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6 space-y-4">
                <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center mb-4">
                  <Briefcase className="h-10 w-10 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-foreground">Investidor</h4>
                <p className="text-muted-foreground">
                  Monitore seus ativos — ações, cripto ou dólar — e tome decisões com base em dados.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6 space-y-4">
                <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center mb-4">
                  <BarChart3 className="h-10 w-10 text-purple-600" />
                </div>
                <h4 className="text-xl font-bold text-foreground">Trader ou Curioso</h4>
                <p className="text-muted-foreground">
                  Aprenda sobre mercados financeiros com explicações simples e ferramentas práticas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Como Usar o Site */}
        <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5 border-2">
          <CardHeader>
            <CardTitle className="text-3xl text-center">Comece agora — em 3 passos simples</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold shadow-lg">
                  1
                </div>
                <h4 className="text-lg font-bold text-foreground flex items-center justify-center gap-2">
                  <Globe className="h-5 w-5" />
                  Escolha o ativo
                </h4>
                <p className="text-muted-foreground">
                  Escolha a moeda, ação ou cripto que deseja acompanhar.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold shadow-lg">
                  2
                </div>
                <h4 className="text-lg font-bold text-foreground flex items-center justify-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Veja em tempo real
                </h4>
                <p className="text-muted-foreground">
                  Veja a cotação em tempo real e o gráfico de variação.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold shadow-lg">
                  3
                </div>
                <h4 className="text-lg font-bold text-foreground flex items-center justify-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  Use nossos guias
                </h4>
                <p className="text-muted-foreground">
                  Use nossos guias práticos para entender o que significa cada número.
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link to="/cambio">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Comece já!
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EducationalSection;
