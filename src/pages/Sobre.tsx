import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Globe, Shield, Zap, Target, Users } from "lucide-react";

const Sobre = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sobre a Cotação de Hoje
            </h1>
            <p className="text-lg text-muted-foreground">
              Sua plataforma completa para acompanhamento de cotações financeiras em tempo real
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Target className="h-8 w-8 text-primary" />
                  Nossa Missão
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  A Cotação de Hoje nasceu com o objetivo de democratizar o acesso à informação financeira de qualidade. 
                  Oferecemos dados atualizados em tempo real de moedas, criptomoedas, ações e pares forex, 
                  permitindo que investidores, traders e pessoas interessadas no mercado financeiro tomem decisões 
                  mais informadas e precisas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            O que oferecemos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-7 w-7 text-primary" />
                </div>
                <CardTitle>Dados em Tempo Real</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Cotações atualizadas a cada segundo, garantindo que você sempre tenha as informações mais recentes do mercado.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-7 w-7 text-accent" />
                </div>
                <CardTitle>Cobertura Global</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Acompanhe moedas, criptomoedas, ações e forex dos principais mercados financeiros ao redor do mundo.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-14 h-14 bg-success/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-7 w-7 text-success" />
                </div>
                <CardTitle>Dados Confiáveis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Utilizamos dados do TradingView, uma das plataformas mais respeitadas do mercado financeiro mundial.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-7 w-7 text-primary" />
                </div>
                <CardTitle>Gráficos Interativos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Visualize tendências e históricos com gráficos profissionais e ferramentas de análise técnica.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-7 w-7 text-accent" />
                </div>
                <CardTitle>Interface Intuitiva</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Design limpo e fácil de usar, permitindo que qualquer pessoa acesse informações financeiras complexas.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-14 h-14 bg-success/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-7 w-7 text-success" />
                </div>
                <CardTitle>100% Gratuito</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Acesso completo e gratuito a todas as funcionalidades, sem taxas ocultas ou necessidade de cadastro.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Markets Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Mercados Cobertos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">💱</span>
                    Câmbio
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Acompanhe as principais moedas globais como Dólar, Euro, Libra, Iene e moedas emergentes em tempo real.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">₿</span>
                    Criptomoedas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Bitcoin, Ethereum, e todas as principais criptomoedas e tokens do mercado cripto mundial.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">📈</span>
                    Ações
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Ações das bolsas NYSE, NASDAQ, B3 e mercados asiáticos, incluindo os principais índices mundiais.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🌐</span>
                    Forex
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Pares de moedas principais, secundários e exóticos do mercado cambial internacional.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Nossos Valores
            </h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-xl mb-2">Transparência</h3>
                  <p className="text-muted-foreground">
                    Fornecemos dados precisos e verificáveis, sem manipulação ou interesses ocultos.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-xl mb-2">Acessibilidade</h3>
                  <p className="text-muted-foreground">
                    Acreditamos que informação financeira de qualidade deve estar disponível para todos.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-xl mb-2">Confiabilidade</h3>
                  <p className="text-muted-foreground">
                    Utilizamos apenas fontes reconhecidas e respeitadas pelo mercado financeiro global.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;
