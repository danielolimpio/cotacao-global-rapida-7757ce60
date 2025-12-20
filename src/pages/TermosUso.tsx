import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { 
  FileText, 
  Shield, 
  AlertTriangle, 
  Scale, 
  Users,
  Clock,
  CheckCircle,
  XCircle,
  Globe,
  Lock,
  Mail,
  BookOpen
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TermosUso = () => {
  const keyTerms = [
    {
      icon: FileText,
      title: "Aceitação dos Termos",
      description: "Ao acessar nosso site, você concorda com estes termos de uso."
    },
    {
      icon: Shield,
      title: "Uso Permitido",
      description: "O conteúdo é apenas para fins informativos e educacionais."
    },
    {
      icon: AlertTriangle,
      title: "Isenção de Responsabilidade",
      description: "Não nos responsabilizamos por decisões financeiras baseadas em nosso conteúdo."
    },
    {
      icon: Scale,
      title: "Propriedade Intelectual",
      description: "Todo o conteúdo é protegido por direitos autorais."
    }
  ];

  return (
    <Layout>
      <SEO path="/termos-de-uso" />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-background to-indigo-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <BookOpen className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-blue-500">Documento Legal</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              Termos de Uso
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Condições gerais para utilização do site Cotação de Hoje
            </p>
            
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Última atualização: 19 de dezembro de 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Terms Grid */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Pontos Principais</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyTerms.map((term, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <term.icon className="w-6 h-6 text-blue-500" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{term.title}</h3>
                    <p className="text-muted-foreground text-sm">{term.description}</p>
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
            
            {/* Section 1 - Acceptance */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-blue-500" />
                </div>
                <h2 className="text-2xl font-bold">1. Aceitação dos Termos</h2>
              </div>
              
              <Card className="border-border/50">
                <CardContent className="p-6 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Ao acessar e utilizar o site Cotação de Hoje (<a href="https://cotacaodehoje.com" className="text-primary hover:underline">https://cotacaodehoje.com</a>), 
                    você concorda em cumprir e ficar vinculado aos seguintes termos e condições de uso. Se você não 
                    concordar com qualquer parte destes termos, não deverá utilizar nosso site.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em 
                    vigor imediatamente após a publicação no site. O uso continuado do site após quaisquer alterações 
                    constitui sua aceitação dos novos termos.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Section 2 - Service Description */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500/20 to-green-500/5 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-green-500" />
                </div>
                <h2 className="text-2xl font-bold">2. Descrição do Serviço</h2>
              </div>
              
              <Card className="border-border/50">
                <CardContent className="p-6 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    O Cotação de Hoje é um portal de informações financeiras que fornece cotações de moedas, 
                    criptomoedas, ações e outros ativos financeiros. Nosso objetivo é oferecer informações 
                    atualizadas e educativas sobre o mercado financeiro.
                  </p>
                  
                  <div className="grid gap-2">
                    <h4 className="font-medium">Nossos serviços incluem:</h4>
                    {[
                      "Cotações em tempo real de diversas moedas",
                      "Informações sobre criptomoedas",
                      "Dados sobre ações nacionais e internacionais",
                      "Conversores de moeda",
                      "Calculadoras financeiras",
                      "Conteúdo educativo sobre finanças"
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

            {/* Section 3 - Permitted Use */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-purple-500" />
                </div>
                <h2 className="text-2xl font-bold">3. Uso Permitido</h2>
              </div>
              
              <Card className="border-border/50">
                <CardContent className="p-6 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Você concorda em utilizar o site apenas para fins legais e de maneira que não infrinja 
                    os direitos de terceiros nem restrinja ou iniba o uso do site por outros.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                      <h4 className="font-medium mb-2 text-green-700 dark:text-green-400 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Uso Permitido
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Consultar cotações e informações</li>
                        <li>• Utilizar calculadoras e conversores</li>
                        <li>• Compartilhar links do site</li>
                        <li>• Uso pessoal e educativo</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                      <h4 className="font-medium mb-2 text-red-700 dark:text-red-400 flex items-center gap-2">
                        <XCircle className="w-4 h-4" />
                        Uso Proibido
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Copiar conteúdo sem autorização</li>
                        <li>• Usar para fins comerciais sem permissão</li>
                        <li>• Tentar acessar áreas restritas</li>
                        <li>• Transmitir vírus ou código malicioso</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Section 4 - Disclaimer */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-500/5 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                </div>
                <h2 className="text-2xl font-bold">4. Isenção de Responsabilidade</h2>
              </div>
              
              <Card className="border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-transparent">
                <CardContent className="p-6 space-y-4">
                  <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm font-medium text-foreground">
                        <strong>IMPORTANTE:</strong> As informações fornecidas neste site são apenas para fins 
                        informativos e educacionais. Não constituem aconselhamento financeiro, de investimento 
                        ou de qualquer outra natureza.
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    O Cotação de Hoje não se responsabiliza por:
                  </p>
                  
                  <div className="grid gap-2">
                    {[
                      "Decisões de investimento tomadas com base nas informações do site",
                      "Perdas financeiras resultantes do uso das informações",
                      "Atrasos ou imprecisões nas cotações exibidas",
                      "Interrupções no serviço ou indisponibilidade do site",
                      "Ações de terceiros relacionadas ao uso do site"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-muted-foreground">
                        <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-muted-foreground leading-relaxed pt-4 border-t border-border">
                    Recomendamos que você consulte um profissional qualificado antes de tomar qualquer 
                    decisão financeira ou de investimento.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Section 5 - Intellectual Property */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-indigo-500/5 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-indigo-500" />
                </div>
                <h2 className="text-2xl font-bold">5. Propriedade Intelectual</h2>
              </div>
              
              <Card className="border-border/50">
                <CardContent className="p-6 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Todo o conteúdo presente no site Cotação de Hoje, incluindo, mas não se limitando a, 
                    textos, gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais e 
                    compilações de dados, é de propriedade do Cotação de Hoje ou de seus fornecedores 
                    de conteúdo e está protegido por leis de direitos autorais brasileiras e internacionais.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    A reprodução, distribuição, modificação ou qualquer outra forma de utilização do 
                    conteúdo do site sem autorização prévia por escrito é expressamente proibida.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Section 6 - Third Party Links */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-cyan-500" />
                </div>
                <h2 className="text-2xl font-bold">6. Links para Sites de Terceiros</h2>
              </div>
              
              <Card className="border-border/50">
                <CardContent className="p-6 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Nosso site pode conter links para sites de terceiros. Esses links são fornecidos apenas 
                    para conveniência. Não temos controle sobre o conteúdo desses sites e não nos 
                    responsabilizamos por eles ou por qualquer perda ou dano que possa surgir do uso deles.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Section 7 - Privacy */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500/20 to-pink-500/5 flex items-center justify-center">
                  <Users className="w-5 h-5 text-pink-500" />
                </div>
                <h2 className="text-2xl font-bold">7. Privacidade</h2>
              </div>
              
              <Card className="border-border/50">
                <CardContent className="p-6 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    O uso de nossas informações pessoais é regido por nossa{" "}
                    <a href="/politica-de-privacidade" className="text-primary hover:underline">Política de Privacidade</a>, 
                    que está incorporada a estes Termos de Uso por referência.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Ao utilizar nosso site, você consente com a coleta e uso de informações conforme 
                    descrito em nossa Política de Privacidade.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Section 8 - Governing Law */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-500/20 to-slate-500/5 flex items-center justify-center">
                  <Scale className="w-5 h-5 text-slate-500" />
                </div>
                <h2 className="text-2xl font-bold">8. Lei Aplicável</h2>
              </div>
              
              <Card className="border-border/50">
                <CardContent className="p-6 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Estes Termos de Uso serão regidos e interpretados de acordo com as leis da República 
                    Federativa do Brasil, sem considerar conflitos de disposições legais.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Qualquer disputa decorrente ou relacionada a estes termos será submetida à jurisdição 
                    exclusiva dos tribunais brasileiros competentes.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Section 9 - Changes */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-500/5 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-orange-500" />
                </div>
                <h2 className="text-2xl font-bold">9. Alterações nos Termos</h2>
              </div>
              
              <Card className="border-border/50">
                <CardContent className="p-6 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. 
                    Quaisquer alterações serão publicadas nesta página com uma data de atualização revisada.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Recomendamos que você revise periodicamente estes termos para estar ciente de 
                    quaisquer mudanças. O uso continuado do site após a publicação de alterações 
                    constitui aceitação dessas mudanças.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact */}
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-4">Dúvidas sobre os Termos?</h3>
                <p className="text-muted-foreground mb-6">
                  Se você tiver qualquer dúvida sobre estes Termos de Uso, entre em contato conosco.
                </p>
                <a 
                  href="mailto:contato@cotacaodehoje.com" 
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <Mail className="w-4 h-4" />
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

export default TermosUso;