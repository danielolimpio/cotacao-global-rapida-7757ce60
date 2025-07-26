import { Button } from "@/components/ui/button";
import { TrendingUp, DollarSign } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  const menuItems = [
    { name: "Início", path: "/" },
    { name: "Câmbio", path: "/cambio" },
    { name: "Crypto", path: "/crypto" },
    { name: "Ações", path: "/acoes" },
    { name: "Forex", path: "/forex" },
    { name: "Contato", path: "/contato" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <DollarSign className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Cotação de Hoje</h1>
                <p className="text-xs text-muted-foreground">Tempo Real</p>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {menuItems.map((item) => (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={location.pathname === item.path ? "default" : "ghost"}
                    className="font-medium"
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
            </nav>

            {/* Live indicator */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <div className="h-2 w-2 rounded-full bg-success animate-pulse"></div>
                <span className="text-sm font-medium text-success">AO VIVO</span>
              </div>
              <TrendingUp className="h-5 w-5 text-success" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t bg-card mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-foreground mb-4">Cotação de Hoje</h3>
              <p className="text-sm text-muted-foreground">
                Acompanhe as cotações financeiras em tempo real com dados precisos e atualizados.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Mercados</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/cambio" className="hover:text-primary">Câmbio</Link></li>
                <li><Link to="/crypto" className="hover:text-primary">Criptomoedas</Link></li>
                <li><Link to="/acoes" className="hover:text-primary">Ações</Link></li>
                <li><Link to="/forex" className="hover:text-primary">Forex</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Moedas Populares</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>USD/BRL</li>
                <li>EUR/BRL</li>
                <li>GBP/BRL</li>
                <li>CAD/BRL</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/contato" className="hover:text-primary">Entre em Contato</Link></li>
                <li>contato@cotacaodehoje.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-4 mt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Cotação de Hoje. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;