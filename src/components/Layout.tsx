import { Button } from "@/components/ui/button";
import { TrendingUp, DollarSign, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
const logoUrl = "/lovable-uploads/d6b0e3b9-996c-4858-a90a-4c5c17f95789.png";

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
            <Link to="/" className="flex items-center space-x-3">
              <img src={logoUrl} alt="Cotação de Hoje" className="h-12 w-12" />
              <div>
                <h1 className="text-xl font-bold text-foreground">Cotação de Hoje</h1>
                <p className="text-xs text-muted-foreground">Tempo Real</p>
              </div>
            </Link>

            {/* Navigation */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <Button variant={location.pathname === "/" ? "default" : "ghost"} className="font-medium">
                      Início
                    </Button>
                  </Link>
                </NavigationMenuItem>

                {/* Câmbio Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-medium">Câmbio</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-80 p-4">
                      <div className="grid gap-3">
                        <div>
                          <h4 className="font-medium mb-2">Moedas Globais</h4>
                          <div className="grid gap-1">
                            <Link to="/cambio/dolar" className="text-sm hover:text-primary">Dólar Hoje</Link>
                            <Link to="/cambio/euro" className="text-sm hover:text-primary">Euro Hoje</Link>
                            <Link to="/cambio/franco-suico" className="text-sm hover:text-primary">Franco Suíço Hoje</Link>
                            <Link to="/cambio/iene" className="text-sm hover:text-primary">Iene Hoje</Link>
                            <Link to="/cambio/libras" className="text-sm hover:text-primary">Libras Esterlinas Hoje</Link>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Moedas Emergentes</h4>
                          <div className="grid gap-1">
                            <Link to="/cambio/peso-argentino" className="text-sm hover:text-primary">Peso Argentino Hoje</Link>
                            <Link to="/cambio/peso-chileno" className="text-sm hover:text-primary">Peso Chileno Hoje</Link>
                            <Link to="/cambio/peso-mexicano" className="text-sm hover:text-primary">Peso Mexicano Hoje</Link>
                            <Link to="/cambio/peso-uruguaio" className="text-sm hover:text-primary">Peso Uruguaio Hoje</Link>
                            <Link to="/cambio/rand-sul-africano" className="text-sm hover:text-primary">Rand Sul-Africano</Link>
                            <Link to="/cambio/rublo-russo" className="text-sm hover:text-primary">Rublo Russo Hoje</Link>
                            <Link to="/cambio/rupia-indiana" className="text-sm hover:text-primary">Rupia Indiana Hoje</Link>
                            <Link to="/cambio/yuan-chines" className="text-sm hover:text-primary">Yuan Chinês Hoje</Link>
                            <Link to="/cambio/won-sul-coreano" className="text-sm hover:text-primary">Won Sul-Coreano Hoje</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Crypto Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-medium">Crypto</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-96 p-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium mb-2">Principais</h4>
                          <div className="grid gap-1">
                            <Link to="/crypto/bitcoin" className="text-sm hover:text-primary">Bitcoin Hoje</Link>
                            <Link to="/crypto/ethereum" className="text-sm hover:text-primary">Ethereum Hoje</Link>
                            <Link to="/crypto/binance-coin" className="text-sm hover:text-primary">Binance Coin Hoje</Link>
                            <Link to="/crypto/ripple" className="text-sm hover:text-primary">Ripple Hoje</Link>
                            <Link to="/crypto/cardano" className="text-sm hover:text-primary">Cardano Hoje</Link>
                            <Link to="/crypto/litecoin" className="text-sm hover:text-primary">Litecoin Hoje</Link>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Altcoins</h4>
                          <div className="grid gap-1">
                            <Link to="/crypto/polkadot" className="text-sm hover:text-primary">Polkadot Hoje</Link>
                            <Link to="/crypto/avalanche" className="text-sm hover:text-primary">Avalanche Hoje</Link>
                            <Link to="/crypto/dash" className="text-sm hover:text-primary">Dash Hoje</Link>
                            <Link to="/crypto/solana" className="text-sm hover:text-primary">Solana Hoje</Link>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Stablecoins</h4>
                          <div className="grid gap-1">
                            <Link to="/crypto/usdt" className="text-sm hover:text-primary">USDT (Tether) Hoje</Link>
                            <Link to="/crypto/usdc" className="text-sm hover:text-primary">USDC Hoje</Link>
                            <Link to="/crypto/dai" className="text-sm hover:text-primary">DAI Hoje</Link>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Tokens DeFi</h4>
                          <div className="grid gap-1">
                            <Link to="/crypto/uniswap" className="text-sm hover:text-primary">Uniswap Hoje</Link>
                            <Link to="/crypto/chainlink" className="text-sm hover:text-primary">Chainlink Hoje</Link>
                            <Link to="/crypto/aave" className="text-sm hover:text-primary">Aave Hoje</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Ações Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-medium">Ações</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-96 p-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium mb-2">NYSE Bolsa de NY</h4>
                          <div className="grid gap-1">
                            <Link to="/acoes/pimco" className="text-sm hover:text-primary">PIMCO Hoje</Link>
                            <Link to="/acoes/nuveen" className="text-sm hover:text-primary">Nuveen Hoje</Link>
                            <Link to="/acoes/eagle-point" className="text-sm hover:text-primary">Eagle Point Hoje</Link>
                            <Link to="/acoes/invesco" className="text-sm hover:text-primary">Invesco Hoje</Link>
                            <Link to="/acoes/allspring" className="text-sm hover:text-primary">Allspring Hoje</Link>
                            <Link to="/acoes/blackrock" className="text-sm hover:text-primary">BlackRock Hoje</Link>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">NASDAQ</h4>
                          <div className="grid gap-1">
                            <Link to="/acoes/apple" className="text-sm hover:text-primary">Apple Hoje</Link>
                            <Link to="/acoes/amazon" className="text-sm hover:text-primary">Amazon Hoje</Link>
                            <Link to="/acoes/cisco" className="text-sm hover:text-primary">Cisco Hoje</Link>
                            <Link to="/acoes/intel" className="text-sm hover:text-primary">Intel Hoje</Link>
                            <Link to="/acoes/kraft-heinz" className="text-sm hover:text-primary">Kraft Heinz Hoje</Link>
                            <Link to="/acoes/microsoft" className="text-sm hover:text-primary">Microsoft Hoje</Link>
                            <Link to="/acoes/monster" className="text-sm hover:text-primary">Monster Beverage Hoje</Link>
                            <Link to="/acoes/meta" className="text-sm hover:text-primary">Meta Hoje</Link>
                            <Link to="/acoes/nvidia" className="text-sm hover:text-primary">NVIDIA Hoje</Link>
                            <Link to="/acoes/vertex" className="text-sm hover:text-primary">Vertex Pharm Hoje</Link>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">B3 Brasil</h4>
                          <div className="grid gap-1">
                            <Link to="/acoes/carrefour" className="text-sm hover:text-primary">Carrefour Hoje</Link>
                            <Link to="/acoes/hapvida" className="text-sm hover:text-primary">Hapvida On Hoje</Link>
                            <Link to="/acoes/magazine-luiz" className="text-sm hover:text-primary">Magazine Luiz Hoje</Link>
                            <Link to="/acoes/bradesco" className="text-sm hover:text-primary">Bradesco Hoje</Link>
                            <Link to="/acoes/ambev" className="text-sm hover:text-primary">Ambev Hoje</Link>
                            <Link to="/acoes/assai" className="text-sm hover:text-primary">Assaí Hoje</Link>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Xangai</h4>
                          <div className="grid gap-1">
                            <Link to="/acoes/bank-of-china" className="text-sm hover:text-primary">Bank of China Hoje</Link>
                            <Link to="/acoes/china-shenhua" className="text-sm hover:text-primary">China Shenhua Energy Hoje</Link>
                            <Link to="/acoes/harvest-fund" className="text-sm hover:text-primary">Harvest Fund Hoje</Link>
                            <Link to="/acoes/300-etf" className="text-sm hover:text-primary">300 ETF Hoje</Link>
                            <Link to="/acoes/50-etf" className="text-sm hover:text-primary">50 ETF Hoje</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Forex Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-medium">Forex</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-48 p-4">
                      <Link to="/forex/sp500" className="text-sm hover:text-primary">S&P 500 Hoje</Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/contato">
                    <Button variant={location.pathname === "/contato" ? "default" : "ghost"} className="font-medium">
                      Contato
                    </Button>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

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
              <div className="flex items-center space-x-2 mb-4">
                <img src={logoUrl} alt="Cotação de Hoje" className="h-8 w-8" />
                <h3 className="font-bold text-foreground">Cotação de Hoje</h3>
              </div>
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