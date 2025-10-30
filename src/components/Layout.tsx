import { Button } from "@/components/ui/button";
import { TrendingUp, DollarSign, ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import CurrencyTicker from "@/components/CurrencyTicker";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import logoImage from "@/assets/logo.png";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const menuItems = [
    { name: "Início", path: "/" },
    { name: "Câmbio", path: "/cambio" },
    { name: "Crypto", path: "/crypto" },
    { name: "Ações", path: "/acoes" },
    { name: "Forex", path: "/forex" },
    { name: "Sobre", path: "/sobre" },
    { name: "Contato", path: "/contato" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Currency Ticker */}
      <CurrencyTicker />
      
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img src={logoImage} alt="Cotação de Hoje" className="h-12 w-12" />
              <div>
                <h1 className="text-xl font-bold text-foreground">Cotação de Hoje</h1>
                <p className="text-xs text-muted-foreground">Tempo Real</p>
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>

            {/* Navigation */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <Button variant={location.pathname === "/" ? "default" : "ghost"} className="font-medium text-base">
                      Início
                    </Button>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/sobre">
                    <Button variant={location.pathname === "/sobre" ? "default" : "ghost"} className="font-medium text-base">
                      Sobre
                    </Button>
                  </Link>
                </NavigationMenuItem>

                {/* Câmbio Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-medium text-base">Câmbio</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[600px] p-6">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 text-base">Moedas Globais</h4>
                          <div className="grid gap-2">
                            <Link to="/cambio/dolar" className="text-base hover:text-primary transition-colors">Dólar Hoje</Link>
                            <Link to="/cambio/euro" className="text-base hover:text-primary transition-colors">Euro Hoje</Link>
                            <Link to="/cambio/franco-suico" className="text-base hover:text-primary transition-colors">Franco Suíço Hoje</Link>
                            <Link to="/cambio/iene" className="text-base hover:text-primary transition-colors">Iene Hoje</Link>
                            <Link to="/cambio/libras" className="text-base hover:text-primary transition-colors">Libras Esterlinas Hoje</Link>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 text-base">Moedas Emergentes</h4>
                          <div className="grid gap-2">
                            <Link to="/cambio/peso-argentino" className="text-base hover:text-primary transition-colors">Peso Argentino Hoje</Link>
                            <Link to="/cambio/peso-chileno" className="text-base hover:text-primary transition-colors">Peso Chileno Hoje</Link>
                            <Link to="/cambio/peso-mexicano" className="text-base hover:text-primary transition-colors">Peso Mexicano Hoje</Link>
                            <Link to="/cambio/peso-uruguaio" className="text-base hover:text-primary transition-colors">Peso Uruguaio Hoje</Link>
                            <Link to="/cambio/rand-sul-africano" className="text-base hover:text-primary transition-colors">Rand Sul-Africano</Link>
                            <Link to="/cambio/rublo-russo" className="text-base hover:text-primary transition-colors">Rublo Russo Hoje</Link>
                            <Link to="/cambio/rupia-indiana" className="text-base hover:text-primary transition-colors">Rupia Indiana Hoje</Link>
                            <Link to="/cambio/yuan-chines" className="text-base hover:text-primary transition-colors">Yuan Chinês Hoje</Link>
                            <Link to="/cambio/won-sul-coreano" className="text-base hover:text-primary transition-colors">Won Sul-Coreano Hoje</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Crypto Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-medium text-base">Crypto</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[800px] p-6">
                      <div className="grid grid-cols-4 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 text-base">Principais</h4>
                          <div className="grid gap-2">
                            <Link to="/crypto/bitcoin" className="text-base hover:text-primary transition-colors">Bitcoin Hoje</Link>
                            <Link to="/crypto/ethereum" className="text-base hover:text-primary transition-colors">Ethereum Hoje</Link>
                            <Link to="/crypto/binance-coin" className="text-base hover:text-primary transition-colors">Binance Coin Hoje</Link>
                            <Link to="/crypto/ripple" className="text-base hover:text-primary transition-colors">Ripple Hoje</Link>
                            <Link to="/crypto/cardano" className="text-base hover:text-primary transition-colors">Cardano Hoje</Link>
                            <Link to="/crypto/litecoin" className="text-base hover:text-primary transition-colors">Litecoin Hoje</Link>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 text-base">Altcoins</h4>
                          <div className="grid gap-2">
                            <Link to="/crypto/polkadot" className="text-base hover:text-primary transition-colors">Polkadot Hoje</Link>
                            <Link to="/crypto/avalanche" className="text-base hover:text-primary transition-colors">Avalanche Hoje</Link>
                            <Link to="/crypto/dash" className="text-base hover:text-primary transition-colors">Dash Hoje</Link>
                            <Link to="/crypto/solana" className="text-base hover:text-primary transition-colors">Solana Hoje</Link>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 text-base">Stablecoins</h4>
                          <div className="grid gap-2">
                            <Link to="/crypto/usdt" className="text-base hover:text-primary transition-colors">USDT (Tether) Hoje</Link>
                            <Link to="/crypto/usdc" className="text-base hover:text-primary transition-colors">USDC Hoje</Link>
                            <Link to="/crypto/dai" className="text-base hover:text-primary transition-colors">DAI Hoje</Link>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 text-base">Tokens DeFi</h4>
                          <div className="grid gap-2">
                            <Link to="/crypto/uniswap" className="text-base hover:text-primary transition-colors">Uniswap Hoje</Link>
                            <Link to="/crypto/chainlink" className="text-base hover:text-primary transition-colors">Chainlink Hoje</Link>
                            <Link to="/crypto/aave" className="text-base hover:text-primary transition-colors">Aave Hoje</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Ações Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-medium text-base">Ações</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[900px] p-6">
                      <div className="grid grid-cols-4 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 text-base">NYSE Bolsa de NY</h4>
                          <div className="grid gap-2">
                            <Link to="/acoes/pimco" className="text-base hover:text-primary transition-colors">PIMCO Hoje</Link>
                            <Link to="/acoes/nuveen" className="text-base hover:text-primary transition-colors">Nuveen Hoje</Link>
                            <Link to="/acoes/eagle-point" className="text-base hover:text-primary transition-colors">Eagle Point Hoje</Link>
                            <Link to="/acoes/invesco" className="text-base hover:text-primary transition-colors">Invesco Hoje</Link>
                            <Link to="/acoes/allspring" className="text-base hover:text-primary transition-colors">Allspring Hoje</Link>
                            <Link to="/acoes/blackrock" className="text-base hover:text-primary transition-colors">BlackRock Hoje</Link>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 text-base">NASDAQ</h4>
                          <div className="grid gap-2">
                            <Link to="/acoes/apple" className="text-base hover:text-primary transition-colors">Apple Hoje</Link>
                            <Link to="/acoes/amazon" className="text-base hover:text-primary transition-colors">Amazon Hoje</Link>
                            <Link to="/acoes/cisco" className="text-base hover:text-primary transition-colors">Cisco Hoje</Link>
                            <Link to="/acoes/intel" className="text-base hover:text-primary transition-colors">Intel Hoje</Link>
                            <Link to="/acoes/kraft-heinz" className="text-base hover:text-primary transition-colors">Kraft Heinz Hoje</Link>
                            <Link to="/acoes/microsoft" className="text-base hover:text-primary transition-colors">Microsoft Hoje</Link>
                            <Link to="/acoes/monster" className="text-base hover:text-primary transition-colors">Monster Beverage Hoje</Link>
                            <Link to="/acoes/meta" className="text-base hover:text-primary transition-colors">Meta Hoje</Link>
                            <Link to="/acoes/nvidia" className="text-base hover:text-primary transition-colors">NVIDIA Hoje</Link>
                            <Link to="/acoes/vertex" className="text-base hover:text-primary transition-colors">Vertex Pharm Hoje</Link>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 text-base">B3 Brasil</h4>
                          <div className="grid gap-2">
                            <Link to="/acoes/carrefour" className="text-base hover:text-primary transition-colors">Carrefour Hoje</Link>
                            <Link to="/acoes/hapvida" className="text-base hover:text-primary transition-colors">Hapvida On Hoje</Link>
                            <Link to="/acoes/magazine-luiz" className="text-base hover:text-primary transition-colors">Magazine Luiz Hoje</Link>
                            <Link to="/acoes/bradesco" className="text-base hover:text-primary transition-colors">Bradesco Hoje</Link>
                            <Link to="/acoes/ambev" className="text-base hover:text-primary transition-colors">Ambev Hoje</Link>
                            <Link to="/acoes/assai" className="text-base hover:text-primary transition-colors">Assaí Hoje</Link>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 text-base">Xangai</h4>
                          <div className="grid gap-2">
                            <Link to="/acoes/bank-of-china" className="text-base hover:text-primary transition-colors">Bank of China Hoje</Link>
                            <Link to="/acoes/china-shenhua" className="text-base hover:text-primary transition-colors">China Shenhua Energy Hoje</Link>
                            <Link to="/acoes/harvest-fund" className="text-base hover:text-primary transition-colors">Harvest Fund Hoje</Link>
                            <Link to="/acoes/300-etf" className="text-base hover:text-primary transition-colors">300 ETF Hoje</Link>
                            <Link to="/acoes/50-etf" className="text-base hover:text-primary transition-colors">50 ETF Hoje</Link>
                          </div>
                          <h4 className="font-semibold mb-3 mt-4 text-base">Índices</h4>
                          <div className="grid gap-2">
                            <Link to="/acoes/sp500" className="text-base hover:text-primary transition-colors">S&P 500 Hoje</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Forex Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-medium text-base">Forex</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[1100px] p-6">
                      <div className="grid grid-cols-5 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2 text-base">Principais</h4>
                          <div className="grid gap-1">
                            <Link to="/forex/principais/eur-usd" className="text-base hover:text-primary transition-colors">EUR/USD</Link>
                            <Link to="/forex/principais/usd-jpy" className="text-base hover:text-primary transition-colors">USD/JPY</Link>
                            <Link to="/forex/principais/gbp-usd" className="text-base hover:text-primary transition-colors">GBP/USD</Link>
                            <Link to="/forex/principais/usd-chf" className="text-base hover:text-primary transition-colors">USD/CHF</Link>
                            <Link to="/forex/principais/aud-usd" className="text-base hover:text-primary transition-colors">AUD/USD</Link>
                            <Link to="/forex/principais/usd-cad" className="text-base hover:text-primary transition-colors">USD/CAD</Link>
                            <Link to="/forex/principais/nzd-usd" className="text-base hover:text-primary transition-colors">NZD/USD</Link>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-base">Secundários</h4>
                          <div className="grid gap-1">
                            <Link to="/forex/secundarios/eur-gbp" className="text-base hover:text-primary transition-colors">EUR/GBP</Link>
                            <Link to="/forex/secundarios/eur-aud" className="text-base hover:text-primary transition-colors">EUR/AUD</Link>
                            <Link to="/forex/secundarios/eur-cad" className="text-base hover:text-primary transition-colors">EUR/CAD</Link>
                            <Link to="/forex/secundarios/eur-nzd" className="text-base hover:text-primary transition-colors">EUR/NZD</Link>
                            <Link to="/forex/secundarios/gbp-jpy" className="text-base hover:text-primary transition-colors">GBP/JPY</Link>
                            <Link to="/forex/secundarios/gbp-aud" className="text-base hover:text-primary transition-colors">GBP/AUD</Link>
                            <Link to="/forex/secundarios/gbp-cad" className="text-base hover:text-primary transition-colors">GBP/CAD</Link>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-base invisible">Cont.</h4>
                          <div className="grid gap-1">
                            <Link to="/forex/secundarios/aud-jpy" className="text-base hover:text-primary transition-colors">AUD/JPY</Link>
                            <Link to="/forex/secundarios/cad-jpy" className="text-base hover:text-primary transition-colors">CAD/JPY</Link>
                            <Link to="/forex/secundarios/nzd-jpy" className="text-base hover:text-primary transition-colors">NZD/JPY</Link>
                            <Link to="/forex/secundarios/aud-cad" className="text-base hover:text-primary transition-colors">AUD/CAD</Link>
                            <Link to="/forex/secundarios/aud-nzd" className="text-base hover:text-primary transition-colors">AUD/NZD</Link>
                            <Link to="/forex/secundarios/cad-chf" className="text-base hover:text-primary transition-colors">CAD/CHF</Link>
                            <Link to="/forex/secundarios/nzd-cad" className="text-base hover:text-primary transition-colors">NZD/CAD</Link>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-base">Exóticos</h4>
                          <div className="grid gap-1">
                            <Link to="/forex/exoticos/usd-try" className="text-base hover:text-primary transition-colors">USD/TRY</Link>
                            <Link to="/forex/exoticos/usd-zar" className="text-base hover:text-primary transition-colors">USD/ZAR</Link>
                            <Link to="/forex/exoticos/usd-mxn" className="text-base hover:text-primary transition-colors">USD/MXN</Link>
                            <Link to="/forex/exoticos/usd-sek" className="text-base hover:text-primary transition-colors">USD/SEK</Link>
                            <Link to="/forex/exoticos/usd-nok" className="text-base hover:text-primary transition-colors">USD/NOK</Link>
                            <Link to="/forex/exoticos/usd-pln" className="text-base hover:text-primary transition-colors">USD/PLN</Link>
                            <Link to="/forex/exoticos/eur-try" className="text-base hover:text-primary transition-colors">EUR/TRY</Link>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-base invisible">Cont.</h4>
                          <div className="grid gap-1">
                            <Link to="/forex/exoticos/gbp-try" className="text-base hover:text-primary transition-colors">GBP/TRY</Link>
                            <Link to="/forex/exoticos/aud-sgd" className="text-base hover:text-primary transition-colors">AUD/SGD</Link>
                            <Link to="/forex/exoticos/eur-zar" className="text-base hover:text-primary transition-colors">EUR/ZAR</Link>
                            <Link to="/forex/exoticos/usd-hkd" className="text-base hover:text-primary transition-colors">USD/HKD</Link>
                            <Link to="/forex/exoticos/usd-thb" className="text-base hover:text-primary transition-colors">USD/THB</Link>
                            <Link to="/forex/exoticos/usd-inr" className="text-base hover:text-primary transition-colors">USD/INR</Link>
                            <Link to="/forex/exoticos/usd-rub" className="text-base hover:text-primary transition-colors">USD/RUB</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/contato">
                    <Button variant={location.pathname === "/contato" ? "default" : "ghost"} className="font-medium text-base">
                      Contato
                    </Button>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Live indicator */}
            <div className="hidden sm:flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <div className="h-2 w-2 rounded-full bg-success animate-pulse"></div>
                <span className="text-sm font-medium text-success">AO VIVO</span>
              </div>
              <TrendingUp className="h-5 w-5 text-success" />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-card">
            <div className="container mx-auto px-4 py-4 space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block py-2 px-4 hover:bg-muted/50 rounded-lg transition-colors text-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t bg-gray-900 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src={logoImage} alt="Cotação de Hoje" className="h-8 w-8" />
                <h3 className="font-bold text-white">Cotação de Hoje</h3>
              </div>
              <p className="text-sm text-white/80">
                Acompanhe as cotações financeiras em tempo real com dados precisos e atualizados.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Navegação</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><Link to="/" className="hover:text-primary">Início</Link></li>
                <li><Link to="/sobre" className="hover:text-primary">Sobre</Link></li>
                <li><Link to="/cambio" className="hover:text-primary">Câmbio</Link></li>
                <li><Link to="/crypto" className="hover:text-primary">Criptomoedas</Link></li>
                <li><Link to="/acoes" className="hover:text-primary">Ações</Link></li>
                <li><Link to="/forex" className="hover:text-primary">Forex</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Moedas Populares</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><Link to="/cambio/usd-brl" className="hover:text-primary">USD/BRL</Link></li>
                <li><Link to="/cambio/eur-brl" className="hover:text-primary">EUR/BRL</Link></li>
                <li><Link to="/cambio/gbp-brl" className="hover:text-primary">GBP/BRL</Link></li>
                <li><Link to="/cambio/cad-brl" className="hover:text-primary">CAD/BRL</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Institucional</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><Link to="/sobre" className="hover:text-primary">Sobre</Link></li>
                <li><Link to="/contato" className="hover:text-primary">Contato</Link></li>
                <li>contato@cotacaodehoje.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-4 mt-8 text-center text-sm text-white/80">
            <p>&copy; 2025 Cotação de Hoje | Todos os direitos reservados | Desenvolvido por <a href="https://danielolimpio.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">DanielOlimpio</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;