import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { 
  Shield, 
  Eye, 
  Lock, 
  Users, 
  Globe, 
  Cookie, 
  Clock, 
  FileText, 
  Mail, 
  CheckCircle,
  AlertCircle,
  Database,
  UserCheck,
  Scale,
  MapPin,
  Bell,
  Settings,
  HelpCircle,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PoliticaPrivacidade = () => {
  const keyPoints = [
    {
      icon: Eye,
      title: "Informações Coletadas",
      description: "Coletamos apenas informações que você nos fornece voluntariamente, como e-mail e nome."
    },
    {
      icon: Lock,
      title: "Dados Sensíveis",
      description: "Não processamos informações pessoais sensíveis como origem étnica ou crenças religiosas."
    },
    {
      icon: Users,
      title: "Compartilhamento",
      description: "Compartilhamos dados apenas em situações específicas, como transferências de negócios."
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Implementamos medidas técnicas e organizacionais para proteger suas informações."
    },
    {
      icon: Scale,
      title: "Seus Direitos",
      description: "Você tem direito de acessar, corrigir e excluir suas informações pessoais."
    },
    {
      icon: Bell,
      title: "Atualizações",
      description: "Notificaremos você sobre mudanças substanciais nesta política de privacidade."
    }
  ];

  const tableOfContents = [
    "Que Informações Coletamos?",
    "Como Processamos Suas Informações?",
    "Em Que Bases Legais Nos Apoiamos?",
    "Quando E Com Quem Compartilhamos?",
    "Sites de Terceiros",
    "Cookies e Rastreamento",
    "Retenção de Dados",
    "Segurança",
    "Menores de Idade",
    "Seus Direitos de Privacidade",
    "Controles Não Rastrear",
    "Direitos nos EUA",
    "Outras Regiões",
    "Atualizações",
    "Contato"
  ];

  return (
    <Layout>
      <SEO path="/politica-de-privacidade" />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Sua Privacidade Importa</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              Política de Privacidade
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transparência e segurança no tratamento dos seus dados pessoais
            </p>
            
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Última atualização: 19 de dezembro de 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Points Grid */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Resumo dos Pontos Principais</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyPoints.map((point, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <point.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{point.title}</h3>
                    <p className="text-muted-foreground text-sm">{point.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Sobre Este Aviso</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Este Aviso de Privacidade para <strong>Cotação de Hoje</strong> ("nós", "nos" ou "nosso") descreve como e por que 
                      podemos acessar, coletar, armazenar, usar e/ou compartilhar suas informações pessoais quando você usa nossos serviços, 
                      inclusive quando você visita nosso site em <a href="https://cotacaodehoje.com" className="text-primary hover:underline">https://cotacaodehoje.com</a> ou 
                      qualquer site nosso que contenha um link para este Aviso de Privacidade.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 p-6 rounded-xl bg-amber-500/10 border border-amber-500/20">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-foreground">
                    <strong>Tem dúvidas ou preocupações?</strong> A leitura deste Aviso de Privacidade ajudará você a entender seus 
                    direitos e opções em relação à privacidade. Se você não concordar com nossas políticas e práticas, por favor, 
                    não utilize nossos Serviços. Caso ainda tenha dúvidas, entre em contato conosco pelo endereço:{" "}
                    <a href="mailto:contato@cotacaodehoje.com" className="text-primary hover:underline">contato@cotacaodehoje.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-primary" />
                  Índice
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {tableOfContents.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm hover:text-primary transition-colors cursor-pointer group">
                      <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium text-primary">
                        {index + 1}
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Section 1 */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center">
                  <Database className="w-5 h-5 text-blue-500" />
                </div>
                <h2 className="text-2xl font-bold">1. Que Informações Coletamos?</h2>
              </div>
              
              <Card className="border-border/50">
                <CardContent className="p-6 space-y-4">
                  <div className="p-4 rounded-lg bg-muted/50">
                    <p className="text-sm font-medium text-muted-foreground italic">
                      Resumindo: Coletamos informações pessoais que você nos fornece.
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Coletamos informações pessoais que você nos fornece voluntariamente quando você participa de atividades 
                    nos Serviços ou ao entrar em contato conosco, você demonstra interesse em obter informações sobre nós, 
                    nossos produtos e serviços.
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold">Informações pessoais fornecidas por você:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        Endereços de e-mail
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        Nomes
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                    <div className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-green-500" />
                      <p className="text-sm font-medium text-green-700 dark:text-green-400">
                        Não processamos informações sensíveis.
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm">
                    Todas as informações pessoais que você nos fornecer devem ser verdadeiras, completas e precisas, 
                    e você deve nos notificar sobre quaisquer alterações nessas informações pessoais.
                  </p>

                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Globe className="w-4 h-4 text-primary" />
                      <h5 className="font-medium text-sm">API do Google</h5>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      O uso que fizermos das informações recebidas das APIs do Google estará em conformidade com a 
                      Política de Dados do Usuário dos Serviços de API do Google, incluindo os requisitos de uso limitado.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Section 2 */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 flex items-center justify-center">
                  <Settings className="w-5 h-5 text-purple-500" />
                </div>
                <h2 className="text-2xl font-bold">2. Como Processamos Suas Informações?</h2>
              </div>
              
              <Card className="border-border/50">
                <CardContent className="p-6 space-y-4">
                  <div className="p-4 rounded-lg bg-muted/50">
                    <p className="text-sm font-medium text-muted-foreground italic">
                      Resumindo: Processamos suas informações para fornecer, aprimorar e administrar nossos Serviços, 
                      comunicar-nos com você, para fins de segurança e prevenção de fraudes, e para cumprir a lei.
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Processamos informações pessoais para os seguintes fins. Também podemos processar suas informações 
                    para outros fins somente com sua prévia autorização explícita/consentimento.
                  </p>

                  <div className="p-4 rounded-lg border border-border bg-card">
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium mb-1">Para salvaguardar ou proteger interesses vitais</h4>
                        <p className="text-sm text-muted-foreground">
                          Podemos processar suas informações quando necessário para salvaguardar ou proteger os interesses 
                          vitais de um indivíduo, como, por exemplo, para prevenir danos.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Section 3 */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500/20 to-green-500/5 flex items-center justify-center">
                  <Scale className="w-5 h-5 text-green-500" />
                </div>
                <h2 className="text-2xl font-bold">3. Em Que Bases Legais Nos Apoiamos?</h2>
              </div>
              
              <Card className="border-border/50">
                <CardContent className="p-6 space-y-4">
                  <div className="p-4 rounded-lg bg-muted/50">
                    <p className="text-sm font-medium text-muted-foreground italic">
                      Resumindo: Só processamos as suas informações pessoais quando acreditamos ser necessário e temos 
                      uma razão legal válida para fazê-lo de acordo com a legislação aplicável.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-500" />
                      Se você estiver localizado na UE ou no Reino Unido
                    </h4>
                    
                    <div className="grid gap-3">
                      {[
                        { title: "Consentimento", desc: "Podemos processar suas informações se você nos tiver dado permissão para uma finalidade específica. Você pode retirar seu consentimento a qualquer momento." },
                        { title: "Obrigações Legais", desc: "Podemos processar suas informações quando acreditamos ser necessário para cumprir nossas obrigações legais." },
                        { title: "Interesses Vitais", desc: "Podemos processar suas informações quando acreditamos ser necessário para proteger seus interesses vitais ou de terceiros." }
                      ].map((item, index) => (
                        <div key={index} className="p-4 rounded-lg border border-border bg-card">
                          <h5 className="font-medium mb-1">{item.title}</h5>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-border">
                    <h4 className="font-semibold flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-red-500" />
                      Se você estiver localizado no Canadá
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Podemos processar as suas informações se nos tiver dado permissão específica (consentimento expresso) 
                      para usar suas informações pessoais para uma finalidade específica ou em situações em que sua permissão 
                      possa ser inferida (consentimento implícito). Você pode retirar seu consentimento a qualquer momento.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Section 4 */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-500/5 flex items-center justify-center">
                  <Users className="w-5 h-5 text-orange-500" />
                </div>
                <h2 className="text-2xl font-bold">4. Quando E Com Quem Compartilhamos?</h2>
              </div>
              
              <Card className="border-border/50">
                <CardContent className="p-6 space-y-4">
                  <div className="p-4 rounded-lg bg-muted/50">
                    <p className="text-sm font-medium text-muted-foreground italic">
                      Resumindo: Podemos compartilhar informações em situações específicas descritas nesta seção.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg border border-border bg-card">
                    <div className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium mb-1">Transferências de Negócios</h4>
                        <p className="text-sm text-muted-foreground">
                          Podemos compartilhar ou transferir suas informações em conexão com, ou durante negociações de, 
                          qualquer fusão, venda de ativos da empresa, financiamento ou aquisição de toda ou parte de nossa 
                          empresa por outra empresa.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Section 5 */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 flex items-center justify-center">
                  <ExternalLink className="w-5 h-5 text-cyan-500" />
                </div>
                <h2 className="text-2xl font-bold">5. Sites de Terceiros</h2>
              </div>
              
              <Card className="border-border/50">
                <CardContent className="p-6 space-y-4">
                  <div className="p-4 rounded-lg bg-muted/50">
                    <p className="text-sm font-medium text-muted-foreground italic">
                      Resumindo: Não nos responsabilizamos pela segurança de quaisquer informações que você compartilhe com terceiros.
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    Os Serviços podem conter links para sites, serviços online ou aplicativos móveis de terceiros e/ou 
                    exibir anúncios de terceiros não afiliados a nós. A inclusão de um link para um site, serviço ou 
                    aplicativo de terceiros não implica em endosso de nossa parte. Não podemos garantir a segurança 
                    e a privacidade dos dados que você fornece a sites de terceiros.
                  </p>

                  <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground">
                        Quaisquer dados coletados por terceiros não são cobertos por este Aviso de Privacidade. 
                        Você deve revisar as políticas desses terceiros e contatá-los diretamente para esclarecer suas dúvidas.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Section 6 */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500/20 to-pink-500/5 flex items-center justify-center">
                  <Cookie className="w-5 h-5 text-pink-500" />
                </div>
                <h2 className="text-2xl font-bold">6. Cookies e Tecnologias de Rastreamento</h2>
              </div>
              
              <Card className="border-border/50">
                <CardContent className="p-6 space-y-4">
                  <div className="p-4 rounded-lg bg-muted/50">
                    <p className="text-sm font-medium text-muted-foreground italic">
                      Resumindo: Podemos usar cookies e outras tecnologias de rastreamento para coletar e armazenar suas informações.
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    Podemos usar cookies e tecnologias de rastreamento semelhantes (como web beacons e pixels) para coletar 
                    informações quando você interage com nossos Serviços. Algumas tecnologias de rastreamento online nos 
                    ajudam a manter a segurança de nossos Serviços, evitar falhas, corrigir erros, salvar suas preferências 
                    e auxiliar nas funções básicas do site.
                  </p>

                  <div className="p-4 rounded-lg border border-border bg-card">
                    <div className="flex items-start gap-3">
                      <Globe className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium mb-1">Google Analytics</h4>
                        <p className="text-sm text-muted-foreground">
                          Podemos compartilhar suas informações com o Google Analytics para rastrear e analisar a utilização 
                          dos Serviços. Para desativar o rastreamento do Google Analytics, acesse{" "}
                          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            tools.google.com/dlpage/gaoptout
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    Informações específicas sobre como utilizamos essas tecnologias estão descritas em nosso{" "}
                    <a href="/politica-de-cookies" className="text-primary hover:underline">Aviso de Cookies</a>.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Section 7 */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-indigo-500/5 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-indigo-500" />
                </div>
                <h2 className="text-2xl font-bold">7. Retenção de Dados</h2>
              </div>
              
              <Card className="border-border/50">
                <CardContent className="p-6 space-y-4">
                  <div className="p-4 rounded-lg bg-muted/50">
                    <p className="text-sm font-medium text-muted-foreground italic">
                      Resumindo: Mantemos suas informações pelo tempo necessário para completar as finalidades descritas 
                      neste Aviso de Privacidade, a menos que exigido de outra forma por lei.
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    Conservaremos suas informações pessoais apenas pelo tempo necessário para os fins descritos neste 
                    Aviso de Privacidade, a menos que um período de retenção mais longo seja exigido ou permitido por 
                    lei (como para fins fiscais, contábeis ou outros requisitos legais).
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    Quando não houver mais necessidade comercial legítima de processar suas informações pessoais, iremos 
                    excluí-las ou anonimizá-las ou, caso isso não seja possível, armazenamos suas informações pessoais 
                    com segurança e as isolarmos de qualquer processamento adicional até que a exclusão seja possível.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Section 8 */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-emerald-500" />
                </div>
                <h2 className="text-2xl font-bold">8. Segurança</h2>
              </div>
              
              <Card className="border-border/50">
                <CardContent className="p-6 space-y-4">
                  <div className="p-4 rounded-lg bg-muted/50">
                    <p className="text-sm font-medium text-muted-foreground italic">
                      Resumindo: Nosso objetivo é proteger suas informações pessoais por meio de um sistema organizacional 
                      de medidas de segurança técnica.
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    Implementamos medidas técnicas apropriadas e razoáveis. Organizacionalmente implementamos medidas de 
                    segurança para proteger a segurança de todas as informações pessoais que processamos.
                  </p>

                  <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground">
                        No entanto, nenhuma transmissão eletrônica pela Internet ou tecnologia de armazenamento de informações 
                        pode ser garantida como 100% segura. Você deve acessar os Serviços somente em um ambiente seguro.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Section 9 */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500/20 to-rose-500/5 flex items-center justify-center">
                  <UserCheck className="w-5 h-5 text-rose-500" />
                </div>
                <h2 className="text-2xl font-bold">9. Menores de Idade</h2>
              </div>
              
              <Card className="border-border/50">
                <CardContent className="p-6 space-y-4">
                  <div className="p-4 rounded-lg bg-muted/50">
                    <p className="text-sm font-medium text-muted-foreground italic">
                      Resumindo: Não coletamos dados de menores de 18 anos de idade intencionalmente.
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    Não coletamos, solicitamos dados ou direcionamos marketing a crianças menores de 18 anos de idade, 
                    de forma consciente. Ao usar os Serviços, você declara ter pelo menos 18 anos de idade ou que você 
                    é o pai ou responsável legal de um menor de idade e consente com o uso dos Serviços por esse menor.
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    Se tomarmos conhecimento de que informações pessoais de usuários menores de 18 anos foram obtidas, 
                    desativaremos a conta e tomaremos as medidas cabíveis para excluí-los prontamente de nossos registros. 
                    Entre em contato conosco em{" "}
                    <a href="mailto:contato@cotacaodehoje.com" className="text-primary hover:underline">contato@cotacaodehoje.com</a>.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Section 10 */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-violet-500/5 flex items-center justify-center">
                  <Scale className="w-5 h-5 text-violet-500" />
                </div>
                <h2 className="text-2xl font-bold">10. Seus Direitos de Privacidade</h2>
              </div>
              
              <Card className="border-border/50">
                <CardContent className="p-6 space-y-4">
                  <div className="p-4 rounded-lg bg-muted/50">
                    <p className="text-sm font-medium text-muted-foreground italic">
                      Resumindo: Dependendo do seu país de residência, você possui direitos que lhe permitem maior acesso 
                      e controle sobre suas informações pessoais.
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    Em algumas regiões (como EEE, Reino Unido, Suíça e Canadá), você tem certos direitos de acordo com 
                    as leis de proteção de dados aplicáveis. Esses direitos podem incluir:
                  </p>

                  <div className="grid gap-2">
                    {[
                      "Solicitar acesso e obter uma cópia de suas informações pessoais",
                      "Solicitar a retificação ou o apagamento",
                      "Restringir o processamento de suas informações pessoais",
                      "Portabilidade dos dados (se aplicável)",
                      "Não ser submetido a decisões automatizadas"
                    ].map((right, index) => (
                      <div key={index} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{right}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 pt-4 border-t border-border">
                    <h4 className="font-medium">Retirada do seu consentimento</h4>
                    <p className="text-sm text-muted-foreground">
                      Se estivermos dependendo do seu consentimento para processar suas informações pessoais, você tem o 
                      direito de retirar seu consentimento a qualquer momento entrando em contato conosco.
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-border">
                    <h4 className="font-medium">Cookies e tecnologias semelhantes</h4>
                    <p className="text-sm text-muted-foreground">
                      A maioria dos navegadores da Web está configurada para aceitar cookies por padrão. Se preferir, 
                      você geralmente pode configurar seu navegador para remover e rejeitar cookies. Para obter mais 
                      informações, consulte nosso{" "}
                      <a href="/politica-de-cookies" className="text-primary hover:underline">Aviso de Cookies</a>.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Section 11 */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-500/20 to-slate-500/5 flex items-center justify-center">
                  <Settings className="w-5 h-5 text-slate-500" />
                </div>
                <h2 className="text-2xl font-bold">11. Controles Não Rastrear</h2>
              </div>
              
              <Card className="border-border/50">
                <CardContent className="p-6 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    A maioria dos navegadores da web e alguns sistemas operacionais móveis incluem um recurso 
                    "Não rastrear" (Do-Not-Track ou DNT) que você pode ativar para sinalizar sua preferência de privacidade. 
                    Nesta fase, não existe um padrão tecnológico uniforme para reconhecer a implementação de sinais DNT. 
                    Sendo assim, atualmente não respondemos a sinais DNT do navegador.
                  </p>

                  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium mb-1 text-green-700 dark:text-green-400">Controle Global de Privacidade (GPC)</h4>
                        <p className="text-sm text-muted-foreground">
                          Reconhecemos e respeitamos os sinais do Controle Global de Privacidade (GPC). Se você usa um 
                          navegador ou extensão que oferece suporte ao GPC, trataremos isso como uma solicitação válida 
                          para optar por não permitir a venda ou o compartilhamento de suas informações pessoais. 
                          Para mais informações, visite{" "}
                          <a href="https://globalprivacycontrol.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            globalprivacycontrol.org
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Section 12 - US Residents */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600/20 to-blue-600/5 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold">12. Direitos dos Residentes dos EUA</h2>
              </div>
              
              <Card className="border-border/50">
                <CardContent className="p-6 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Se você reside na Califórnia, Colorado, Connecticut, Delaware, Flórida, Indiana, Iowa, Kentucky, 
                    Maryland, Minnesota, Montana, Nebraska, Nova Hampshire, Nova Jersey, Oregon, Rhode Island, Tennessee, 
                    Texas, Utah e Virgínia, você pode ter direitos específicos de privacidade.
                  </p>

                  <div className="grid gap-2">
                    <h4 className="font-medium">Seus direitos incluem:</h4>
                    {[
                      "Solicitar acesso aos seus dados pessoais",
                      "Corrigir imprecisões",
                      "Obter uma cópia ou excluir suas informações",
                      "Retirar seu consentimento para o processamento",
                      "Não ser discriminado pelo exercício dos seus direitos"
                    ].map((right, index) => (
                      <div key={index} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{right}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <h4 className="font-medium mb-2">Como exercer seus direitos</h4>
                    <p className="text-sm text-muted-foreground">
                      Para exercer esses direitos, você pode entrar em contato conosco mediante o envio de uma solicitação 
                      de acesso do titular dos dados, enviando-nos um e-mail para{" "}
                      <a href="mailto:contato@cotacaodehoje.com" className="text-primary hover:underline">contato@cotacaodehoje.com</a>{" "}
                      ou visitando{" "}
                      <a href="/contato" className="text-primary hover:underline">nossa página de contato</a>.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Section 13 - Other Regions */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500/20 to-teal-500/5 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-teal-500" />
                </div>
                <h2 className="text-2xl font-bold">13. Outras Regiões</h2>
              </div>
              
              <Card className="border-border/50">
                <CardContent className="p-6 space-y-4">
                  <div className="p-4 rounded-lg bg-muted/50">
                    <p className="text-sm font-medium text-muted-foreground italic">
                      Resumindo: Você pode ter direitos adicionais com base no país em que reside.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-lg border border-border bg-card">
                      <h4 className="font-medium mb-2">🇦🇺 Austrália e Nova Zelândia</h4>
                      <p className="text-sm text-muted-foreground">
                        Coletamos e processamos suas informações pessoais de acordo com as obrigações estabelecidas 
                        pela Lei de Privacidade da Austrália de 1988 e pela Lei de Privacidade da Nova Zelândia de 2020.
                      </p>
                    </div>

                    <div className="p-4 rounded-lg border border-border bg-card">
                      <h4 className="font-medium mb-2">🇿🇦 República da África do Sul</h4>
                      <p className="text-sm text-muted-foreground">
                        A qualquer momento, você tem o direito de solicitar acesso ou correção de suas informações pessoais. 
                        Caso esteja insatisfeito, pode contactar o Regulador de Informação (África do Sul).
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Section 14 */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-500/5 flex items-center justify-center">
                  <Bell className="w-5 h-5 text-amber-500" />
                </div>
                <h2 className="text-2xl font-bold">14. Atualizações</h2>
              </div>
              
              <Card className="border-border/50">
                <CardContent className="p-6 space-y-4">
                  <div className="p-4 rounded-lg bg-muted/50">
                    <p className="text-sm font-medium text-muted-foreground italic">
                      Resumindo: Sim, atualizaremos este aviso conforme necessário para cumprir as leis aplicáveis.
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    Podemos atualizar este Aviso de Privacidade periodicamente. A versão atualizada será indicada por 
                    uma nova data "Revisado" no topo deste Aviso de Privacidade. Caso façamos alterações substanciais, 
                    poderemos notificá-lo publicando um aviso em local visível ou enviando uma notificação diretamente a você.
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    Recomendamos que você revise este Aviso de Privacidade com frequência para se manter informado 
                    sobre como protegemos suas informações.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Section 15 - Contact */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">15. Contato</h2>
              </div>
              
              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                <CardContent className="p-8">
                  <div className="text-center space-y-4">
                    <h3 className="text-xl font-semibold">Como Entrar em Contato</h3>
                    <p className="text-muted-foreground">
                      Se você tiver dúvidas ou comentários sobre este aviso, entre em contato conosco:
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                      <a 
                        href="mailto:inside@cotacaodehoje.com" 
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        inside@cotacaodehoje.com
                      </a>
                      <a 
                        href="/contato" 
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:bg-muted transition-colors"
                      >
                        <HelpCircle className="w-4 h-4" />
                        Página de Contato
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PoliticaPrivacidade;