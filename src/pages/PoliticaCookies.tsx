import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { 
  Cookie, 
  Shield, 
  Settings, 
  Clock, 
  Eye,
  BarChart3,
  Target,
  Lock,
  Globe,
  CheckCircle,
  AlertCircle,
  ExternalLink
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PoliticaCookies = () => {
  const cookieTypes = [
    {
      icon: Shield,
      title: "Cookies Essenciais",
      description: "Necessários para o funcionamento básico do site. Não podem ser desativados.",
      color: "green"
    },
    {
      icon: BarChart3,
      title: "Cookies de Análise",
      description: "Nos ajudam a entender como os visitantes interagem com o site.",
      color: "blue"
    },
    {
      icon: Target,
      title: "Cookies de Marketing",
      description: "Utilizados para exibir anúncios relevantes aos seus interesses.",
      color: "purple"
    },
    {
      icon: Settings,
      title: "Cookies de Preferências",
      description: "Permitem lembrar suas preferências e configurações.",
      color: "orange"
    }
  ];

  return (
    <Layout>
      <SEO path="/politica-de-cookies" />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-background to-orange-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-500/20 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6">
              <Cookie className="w-4 h-4 text-pink-500" />
              <span className="text-sm font-medium text-pink-500">Transparência Digital</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              Política de Cookies
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Entenda como utilizamos cookies e tecnologias semelhantes em nosso site
            </p>
            
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Última atualização: 19 de dezembro de 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Tipos de Cookies que Utilizamos</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cookieTypes.map((type, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${type.color}-500/20 to-${type.color}-500/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <type.icon className={`w-6 h-6 text-${type.color}-500`} />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{type.title}</h3>
                    <p className="text-muted-foreground text-sm">{type.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* What are Cookies */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500/20 to-pink-500/5 flex items-center justify-center">
                  <Cookie className="w-5 h-5 text-pink-500" />
                </div>
                <h2 className="text-2xl font-bold">O Que São Cookies?</h2>
              </div>
              
              <Card className="border-border/50">
                <CardContent className="p-6 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Cookies são pequenos arquivos de texto que são armazenados no seu dispositivo (computador, tablet 
                    ou celular) quando você visita um site. Eles são amplamente utilizados para fazer os sites 
                    funcionarem de forma mais eficiente, bem como para fornecer informações aos proprietários do site.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Os cookies não contêm vírus e não prejudicam seu dispositivo. Eles servem para melhorar 
                    sua experiência de navegação e nos ajudar a entender como você utiliza nosso site.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* How We Use Cookies */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-blue-500" />
                </div>
                <h2 className="text-2xl font-bold">Como Utilizamos Cookies</h2>
              </div>
              
              <Card className="border-border/50">
                <CardContent className="p-6 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    No site Cotação de Hoje, utilizamos cookies e tecnologias semelhantes para:
                  </p>
                  
                  <div className="grid gap-3">
                    {[
                      "Garantir o funcionamento adequado do site",
                      "Lembrar suas preferências e configurações",
                      "Analisar o tráfego e uso do site através do Google Analytics",
                      "Exibir anúncios personalizados através do Google AdSense",
                      "Melhorar continuamente nossa plataforma"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Google Analytics */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-500/5 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-orange-500" />
                </div>
                <h2 className="text-2xl font-bold">Google Analytics</h2>
              </div>
              
              <Card className="border-border/50">
                <CardContent className="p-6 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Utilizamos o Google Analytics para analisar o uso do nosso site. O Google Analytics gera 
                    informações estatísticas e outras sobre o uso do site através de cookies armazenados 
                    nos computadores dos usuários.
                  </p>
                  
                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <h4 className="font-medium mb-2">Para desativar o Google Analytics:</h4>
                    <p className="text-sm text-muted-foreground">
                      Você pode instalar o{" "}
                      <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                        Complemento de Desativação do Google Analytics
                        <ExternalLink className="w-3 h-3" />
                      </a>{" "}
                      em seu navegador.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Managing Cookies */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 flex items-center justify-center">
                  <Settings className="w-5 h-5 text-purple-500" />
                </div>
                <h2 className="text-2xl font-bold">Gerenciando Cookies</h2>
              </div>
              
              <Card className="border-border/50">
                <CardContent className="p-6 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    A maioria dos navegadores permite que você controle cookies através de suas configurações. 
                    Você pode configurar seu navegador para recusar cookies ou alertá-lo quando cookies estão 
                    sendo enviados.
                  </p>
                  
                  <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground">
                        <strong>Atenção:</strong> Desativar cookies pode afetar a funcionalidade de alguns 
                        recursos do site e sua experiência de navegação.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4">
                    <h4 className="font-medium">Como gerenciar cookies nos principais navegadores:</h4>
                    <div className="grid gap-2">
                      {[
                        { browser: "Google Chrome", url: "https://support.google.com/chrome/answer/95647" },
                        { browser: "Mozilla Firefox", url: "https://support.mozilla.org/pt-BR/kb/cookies-informacoes-sites-armazenam-computador" },
                        { browser: "Safari", url: "https://support.apple.com/pt-br/guide/safari/sfri11471/mac" },
                        { browser: "Microsoft Edge", url: "https://support.microsoft.com/pt-br/microsoft-edge/excluir-cookies-no-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" }
                      ].map((item, index) => (
                        <a 
                          key={index}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Globe className="w-4 h-4" />
                          <span>{item.browser}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Updates */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500/20 to-green-500/5 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-green-500" />
                </div>
                <h2 className="text-2xl font-bold">Atualizações desta Política</h2>
              </div>
              
              <Card className="border-border/50">
                <CardContent className="p-6 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Podemos atualizar esta Política de Cookies periodicamente para refletir mudanças em 
                    nossas práticas ou por outras razões operacionais, legais ou regulatórias. 
                    Recomendamos que você revise esta página regularmente para se manter informado.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact */}
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-4">Dúvidas sobre Cookies?</h3>
                <p className="text-muted-foreground mb-6">
                  Se você tiver qualquer dúvida sobre o uso de cookies em nosso site, entre em contato conosco.
                </p>
                <a 
                  href="mailto:contato@cotacaodehoje.com" 
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  contato@cotacaodehoje.com
                </a>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PoliticaCookies;