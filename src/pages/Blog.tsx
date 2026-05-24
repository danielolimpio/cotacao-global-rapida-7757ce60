import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Clock, 
  User, 
  ArrowRight, 
  Sparkles,
  BookOpen,
  BarChart3,
  Wallet,
  PiggyBank,
  LineChart,
  Target,
  Lightbulb,
  Shield
} from "lucide-react";
import { Link } from "react-router-dom";

// Placeholder for future articles - will be replaced with real content
interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image?: string;
  featured?: boolean;
}

// Empty array - articles will be added here
const articles: BlogArticle[] = [];

const categories = [
  { name: "Investimentos", icon: TrendingUp, color: "bg-primary/10 text-primary" },
  { name: "Economia", icon: BarChart3, color: "bg-accent/10 text-accent" },
  { name: "Finanças Pessoais", icon: Wallet, color: "bg-warning/10 text-warning" },
  { name: "Criptomoedas", icon: LineChart, color: "bg-destructive/10 text-destructive" },
  { name: "Poupança", icon: PiggyBank, color: "bg-success/10 text-success" },
  { name: "Educação Financeira", icon: BookOpen, color: "bg-muted-foreground/10 text-muted-foreground" },
];

const Blog = () => {
  return (
    <Layout>
      <SEO path="/blog" />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Blog de Finanças</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Conhecimento Financeiro para 
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Transformar</span> sua Vida
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Artigos exclusivos sobre investimentos, economia, criptomoedas e educação financeira para você tomar decisões inteligentes.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {categories.slice(0, 4).map((category) => (
                <Badge 
                  key={category.name} 
                  variant="outline" 
                  className={`${category.color} border-0 px-4 py-2 text-sm font-medium cursor-pointer hover:scale-105 transition-transform`}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </section>

      {/* Categories Section */}
      <section className="py-16 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-foreground">Categorias</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Card 
                key={category.name} 
                className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-to-br from-card to-muted/20"
              >
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex p-4 rounded-2xl ${category.color} mb-4 group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm">{category.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Artigos em Destaque</h2>
              <p className="text-muted-foreground">Os conteúdos mais relevantes para você</p>
            </div>
          </div>
          
          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Card 
                  key={article.id}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-card"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                    {article.image ? (
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <BookOpen className="w-16 h-16 text-primary/30" />
                      </div>
                    )}
                    {article.featured && (
                      <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                        <Sparkles className="w-3 h-3 mr-1" />
                        Destaque
                      </Badge>
                    )}
                  </div>
                  
                  <CardHeader className="pb-2">
                    <Badge variant="outline" className="w-fit text-xs mb-2">
                      {article.category}
                    </Badge>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {article.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </span>
                      </div>
                      <span>{article.date}</span>
                    </div>
                    
                    <Link to={`/blog/${article.slug}`}>
                      <Button variant="ghost" className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Ler artigo
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            /* Empty State - Premium Design */
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Placeholder Cards */}
                {[1, 2, 3].map((i) => (
                  <Card 
                    key={i}
                    className="overflow-hidden border-2 border-dashed border-muted bg-gradient-to-br from-muted/10 to-muted/5"
                  >
                    <div className="aspect-video bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                      <div className="text-center">
                        <BookOpen className="w-12 h-12 text-muted-foreground/60 mx-auto mb-2" />
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="h-4 w-20 bg-muted/50 rounded mb-4" />
                      <div className="h-6 w-full bg-muted/30 rounded mb-2" />
                      <div className="h-6 w-3/4 bg-muted/30 rounded mb-4" />
                      <div className="h-4 w-full bg-muted/20 rounded mb-2" />
                      <div className="h-4 w-2/3 bg-muted/20 rounded" />
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Overlay Message */}
              <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-lg">
                <div className="text-center max-w-lg p-8">
                  <div className="inline-flex p-4 rounded-full bg-primary/10 mb-6">
                    <Lightbulb className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Em breve, novos artigos!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Estamos preparando conteúdos exclusivos sobre finanças, investimentos e economia para ajudar você a tomar melhores decisões financeiras.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <Badge variant="outline" className="bg-primary/5">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Investimentos
                    </Badge>
                    <Badge variant="outline" className="bg-accent/5">
                      <BarChart3 className="w-3 h-3 mr-1" />
                      Análises
                    </Badge>
                    <Badge variant="outline" className="bg-success/5">
                      <Target className="w-3 h-3 mr-1" />
                      Dicas
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-0 bg-gradient-to-br from-card via-card to-primary/5 shadow-2xl overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full mb-4">
                    <Shield className="w-4 h-4" />
                    <span className="text-xs font-medium">Newsletter Gratuita</span>
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Fique por dentro das novidades
                  </h2>
                  <p className="text-muted-foreground">
                    Receba análises exclusivas, dicas de investimentos e as principais notícias do mercado financeiro diretamente no seu e-mail.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <input 
                      type="email" 
                      placeholder="Seu melhor e-mail"
                      className="flex-1 px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                    <Button className="bg-primary hover:bg-primary/90 px-6">
                      Inscrever
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Ao se inscrever, você concorda com nossa política de privacidade. Cancele quando quiser.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">0+</div>
              <div className="text-muted-foreground text-sm">Artigos Publicados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">6</div>
              <div className="text-muted-foreground text-sm">Categorias</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-success mb-2">0+</div>
              <div className="text-muted-foreground text-sm">Leitores</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-warning mb-2">100%</div>
              <div className="text-muted-foreground text-sm">Conteúdo Gratuito</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
