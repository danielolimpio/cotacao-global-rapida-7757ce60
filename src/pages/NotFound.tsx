import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Search, TrendingUp, DollarSign, Bitcoin, BarChart3 } from "lucide-react";

const NotFound = () => {
  const popularLinks = [
    { to: "/cambio/dolar", label: "Dólar Hoje", icon: DollarSign, description: "Cotação USD/BRL em tempo real" },
    { to: "/crypto/bitcoin", label: "Bitcoin Hoje", icon: Bitcoin, description: "Preço do BTC atualizado" },
    { to: "/acoes", label: "Ações", icon: BarChart3, description: "Bolsa de valores em tempo real" },
    { to: "/cambio/euro", label: "Euro Hoje", icon: TrendingUp, description: "Cotação EUR/BRL" }
  ];

  return (
    <Layout>
      <SEO 
        path="/404"
      />
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs />
        
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
          {/* Error Display */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-3xl font-bold text-foreground mb-2">Página não encontrada</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Desculpe, a página que você está procurando não existe ou foi movida.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex gap-4 mb-12">
            <Link to="/">
              <Button size="lg" className="gap-2">
                <Home className="w-5 h-5" />
                Voltar ao Início
              </Button>
            </Link>
            <Link to="/cambio">
              <Button size="lg" variant="outline" className="gap-2">
                <Search className="w-5 h-5" />
                Ver Cotações
              </Button>
            </Link>
          </div>

          {/* Popular Links */}
          <div className="w-full max-w-4xl">
            <h3 className="text-2xl font-bold text-foreground mb-6">Páginas Populares</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {popularLinks.map((link) => (
                <Link key={link.to} to={link.to}>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <link.icon className="w-6 h-6 text-primary" />
                        <span>{link.label}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{link.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Additional Help */}
          <div className="mt-12 p-6 bg-muted/50 rounded-lg max-w-2xl">
            <h4 className="font-semibold text-lg mb-2">Precisa de ajuda?</h4>
            <p className="text-muted-foreground">
              Se você acredita que deveria haver uma página aqui, visite nossa{" "}
              <Link to="/" className="text-primary hover:underline">página inicial</Link> ou navegue pelas seções de{" "}
              <Link to="/cambio" className="text-primary hover:underline">Câmbio</Link>,{" "}
              <Link to="/crypto" className="text-primary hover:underline">Criptomoedas</Link> e{" "}
              <Link to="/acoes" className="text-primary hover:underline">Ações</Link>.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;