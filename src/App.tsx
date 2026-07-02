import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import LegacyRedirect from "./components/LegacyRedirect";
import Index from "./pages/Index";
import Cambio from "./pages/Cambio";
import Crypto from "./pages/Crypto";
import Acoes from "./pages/Acoes";
import Forex from "./pages/Forex";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import PoliticaCookies from "./pages/PoliticaCookies";
import TermosUso from "./pages/TermosUso";
import Sitemap from "./pages/Sitemap";

// Câmbio pages
import DolarHoje from "./pages/cambio/DolarHoje";
import EuroHoje from "./pages/cambio/EuroHoje";
import FrancoSuicoHoje from "./pages/cambio/FrancoSuicoHoje";
import IeneHoje from "./pages/cambio/IeneHoje";
import LibrasEsterlinasHoje from "./pages/cambio/LibrasEsterlinasHoje";
import PesoArgentinoHoje from "./pages/cambio/PesoArgentinoHoje";
import PesoChilenoHoje from "./pages/cambio/PesoChilenoHoje";
import PesoMexicanoHoje from "./pages/cambio/PesoMexicanoHoje";
import PesoUruguaioHoje from "./pages/cambio/PesoUruguaioHoje";
import RandSulAfricanoHoje from "./pages/cambio/RandSulAfricanoHoje";
import RubloRussoHoje from "./pages/cambio/RubloRussoHoje";
import RupiaIndianaHoje from "./pages/cambio/RupiaIndianaHoje";
import YuanChinesHoje from "./pages/cambio/YuanChinesHoje";
import WonSulCoreanoHoje from "./pages/cambio/WonSulCoreanoHoje";
import UsdBrlHoje from "./pages/cambio/UsdBrlHoje";
import EurBrlHoje from "./pages/cambio/EurBrlHoje";
import GbpBrlHoje from "./pages/cambio/GbpBrlHoje";
import CadBrlHoje from "./pages/cambio/CadBrlHoje";

// Crypto pages
import AaveHoje from "./pages/crypto/AaveHoje";
import AvalancheHoje from "./pages/crypto/AvalancheHoje";
import BinanceCoinHoje from "./pages/crypto/BinanceCoinHoje";
import BitcoinHoje from "./pages/crypto/BitcoinHoje";
import CardanoHoje from "./pages/crypto/CardanoHoje";
import ChainlinkHoje from "./pages/crypto/ChainlinkHoje";
import DAIHoje from "./pages/crypto/DAIHoje";
import DashHoje from "./pages/crypto/DashHoje";
import EthereumHoje from "./pages/crypto/EthereumHoje";
import LitecoinHoje from "./pages/crypto/LitecoinHoje";
import PolkadotHoje from "./pages/crypto/PolkadotHoje";
import RippleHoje from "./pages/crypto/RippleHoje";
import SolanaHoje from "./pages/crypto/SolanaHoje";
import USDCHoje from "./pages/crypto/USDCHoje";
import USDTHoje from "./pages/crypto/USDTHoje";
import UniswapHoje from "./pages/crypto/UniswapHoje";

// Ações pages
import AllspringHoje from "./pages/acoes/AllspringHoje";
import AmazonHoje from "./pages/acoes/AmazonHoje";
import AmbevHoje from "./pages/acoes/AmbevHoje";
import AppleHoje from "./pages/acoes/AppleHoje";
import AssaiHoje from "./pages/acoes/AssaiHoje";
import BankOfChinaHoje from "./pages/acoes/BankOfChinaHoje";
import BlackRockHoje from "./pages/acoes/BlackRockHoje";
import BradescoHoje from "./pages/acoes/BradescoHoje";
import CarrefourHoje from "./pages/acoes/CarrefourHoje";
import ChinaShenhuaEnergyHoje from "./pages/acoes/ChinaShenhuaEnergyHoje";
import CiscoHoje from "./pages/acoes/CiscoHoje";
import EaglePointHoje from "./pages/acoes/EaglePointHoje";
import ETF300Hoje from "./pages/acoes/ETF300Hoje";
import ETF50Hoje from "./pages/acoes/ETF50Hoje";
import HapvidaHoje from "./pages/acoes/HapvidaHoje";
import HarvestFundHoje from "./pages/acoes/HarvestFundHoje";
import IntelHoje from "./pages/acoes/IntelHoje";
import InvescoHoje from "./pages/acoes/InvescoHoje";
import KraftHeinzHoje from "./pages/acoes/KraftHeinzHoje";
import MagazineLuizHoje from "./pages/acoes/MagazineLuizHoje";
import MetaHoje from "./pages/acoes/MetaHoje";
import MicrosoftHoje from "./pages/acoes/MicrosoftHoje";
import MonsterBeverageHoje from "./pages/acoes/MonsterBeverageHoje";
import NuveenHoje from "./pages/acoes/NuveenHoje";
import NvidiaHoje from "./pages/acoes/NvidiaHoje";
import PimcoHoje from "./pages/acoes/PimcoHoje";
import VertexPharmHoje from "./pages/acoes/VertexPharmHoje";
import PetrobrasHoje from "./pages/acoes/PetrobrasHoje";
import ValeHoje from "./pages/acoes/ValeHoje";
import ItauHoje from "./pages/acoes/ItauHoje";

// Índices pages
import SP500Hoje from "./pages/acoes/SP500Hoje";
import EurUsdHoje from "./pages/forex/principais/EurUsdHoje";
import UsdJpyHoje from "./pages/forex/principais/UsdJpyHoje";
import GbpUsdHoje from "./pages/forex/principais/GbpUsdHoje";
import UsdChfHoje from "./pages/forex/principais/UsdChfHoje";
import AudUsdHoje from "./pages/forex/principais/AudUsdHoje";
import UsdCadHoje from "./pages/forex/principais/UsdCadHoje";
import NzdUsdHoje from "./pages/forex/principais/NzdUsdHoje";

// Forex secundários pages
import EurGbpHoje from "./pages/forex/secundarios/EurGbpHoje";
import EurAudHoje from "./pages/forex/secundarios/EurAudHoje";
import EurCadHoje from "./pages/forex/secundarios/EurCadHoje";
import EurNzdHoje from "./pages/forex/secundarios/EurNzdHoje";
import GbpJpyHoje from "./pages/forex/secundarios/GbpJpyHoje";
import GbpAudHoje from "./pages/forex/secundarios/GbpAudHoje";
import GbpCadHoje from "./pages/forex/secundarios/GbpCadHoje";
import AudJpyHoje from "./pages/forex/secundarios/AudJpyHoje";
import CadJpyHoje from "./pages/forex/secundarios/CadJpyHoje";
import NzdJpyHoje from "./pages/forex/secundarios/NzdJpyHoje";
import AudCadHoje from "./pages/forex/secundarios/AudCadHoje";
import AudNzdHoje from "./pages/forex/secundarios/AudNzdHoje";
import CadChfHoje from "./pages/forex/secundarios/CadChfHoje";
import NzdCadHoje from "./pages/forex/secundarios/NzdCadHoje";

// Forex exóticos pages
import UsdTryHoje from "./pages/forex/exoticos/UsdTryHoje";
import UsdZarHoje from "./pages/forex/exoticos/UsdZarHoje";
import UsdMxnHoje from "./pages/forex/exoticos/UsdMxnHoje";
import UsdSekHoje from "./pages/forex/exoticos/UsdSekHoje";
import UsdNokHoje from "./pages/forex/exoticos/UsdNokHoje";
import UsdPlnHoje from "./pages/forex/exoticos/UsdPlnHoje";
import EurTryHoje from "./pages/forex/exoticos/EurTryHoje";
import GbpTryHoje from "./pages/forex/exoticos/GbpTryHoje";
import AudSgdHoje from "./pages/forex/exoticos/AudSgdHoje";
import EurZarHoje from "./pages/forex/exoticos/EurZarHoje";
import UsdHkdHoje from "./pages/forex/exoticos/UsdHkdHoje";
import UsdThbHoje from "./pages/forex/exoticos/UsdThbHoje";
import UsdInrHoje from "./pages/forex/exoticos/UsdInrHoje";
import UsdRubHoje from "./pages/forex/exoticos/UsdRubHoje";

// Calculator page
import CalculadoraJuros from "./pages/CalculadoraJuros";
import VerTodasCotacoes from "./pages/VerTodasCotacoes";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cambio" element={<Cambio />} />
          <Route path="/crypto" element={<Crypto />} />
          <Route path="/acoes" element={<Acoes />} />
          <Route path="/forex" element={<Forex />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/blog" element={<Blog />} />
          
          {/* Câmbio routes */}
          <Route path="/cambio/dolar" element={<DolarHoje />} />
          <Route path="/cambio/euro" element={<EuroHoje />} />
          <Route path="/cambio/franco-suico" element={<FrancoSuicoHoje />} />
          <Route path="/cambio/iene" element={<IeneHoje />} />
          <Route path="/cambio/libras" element={<LibrasEsterlinasHoje />} />
          <Route path="/cambio/peso-argentino" element={<PesoArgentinoHoje />} />
          <Route path="/cambio/peso-chileno" element={<PesoChilenoHoje />} />
          <Route path="/cambio/peso-mexicano" element={<PesoMexicanoHoje />} />
          <Route path="/cambio/peso-uruguaio" element={<PesoUruguaioHoje />} />
          <Route path="/cambio/rand-sul-africano" element={<RandSulAfricanoHoje />} />
          <Route path="/cambio/rublo-russo" element={<RubloRussoHoje />} />
          <Route path="/cambio/rupia-indiana" element={<RupiaIndianaHoje />} />
          <Route path="/cambio/yuan-chines" element={<YuanChinesHoje />} />
          <Route path="/cambio/won-sul-coreano" element={<WonSulCoreanoHoje />} />
          <Route path="/cambio/usd-brl" element={<UsdBrlHoje />} />
          <Route path="/cambio/eur-brl" element={<EurBrlHoje />} />
          <Route path="/cambio/gbp-brl" element={<GbpBrlHoje />} />
          <Route path="/cambio/cad-brl" element={<CadBrlHoje />} />
          
          {/* Crypto routes */}
          <Route path="/crypto/aave" element={<AaveHoje />} />
          <Route path="/crypto/avalanche" element={<AvalancheHoje />} />
          <Route path="/crypto/binance-coin" element={<BinanceCoinHoje />} />
          <Route path="/crypto/bitcoin" element={<BitcoinHoje />} />
          <Route path="/crypto/cardano" element={<CardanoHoje />} />
          <Route path="/crypto/chainlink" element={<ChainlinkHoje />} />
          <Route path="/crypto/dai" element={<DAIHoje />} />
          <Route path="/crypto/dash" element={<DashHoje />} />
          <Route path="/crypto/ethereum" element={<EthereumHoje />} />
          <Route path="/crypto/litecoin" element={<LitecoinHoje />} />
          <Route path="/crypto/polkadot" element={<PolkadotHoje />} />
          <Route path="/crypto/ripple" element={<RippleHoje />} />
          <Route path="/crypto/solana" element={<SolanaHoje />} />
          <Route path="/crypto/usdc" element={<USDCHoje />} />
          <Route path="/crypto/usdt" element={<USDTHoje />} />
          <Route path="/crypto/uniswap" element={<UniswapHoje />} />
          
          {/* Ações routes */}
          <Route path="/acoes/allspring" element={<AllspringHoje />} />
          <Route path="/acoes/amazon" element={<AmazonHoje />} />
          <Route path="/acoes/ambev" element={<AmbevHoje />} />
          <Route path="/acoes/apple" element={<AppleHoje />} />
          <Route path="/acoes/assai" element={<AssaiHoje />} />
          <Route path="/acoes/bank-of-china" element={<BankOfChinaHoje />} />
          <Route path="/acoes/blackrock" element={<BlackRockHoje />} />
          <Route path="/acoes/bradesco" element={<BradescoHoje />} />
          <Route path="/acoes/carrefour" element={<CarrefourHoje />} />
          <Route path="/acoes/china-shenhua" element={<ChinaShenhuaEnergyHoje />} />
          <Route path="/acoes/cisco" element={<CiscoHoje />} />
          <Route path="/acoes/eagle-point" element={<EaglePointHoje />} />
          <Route path="/acoes/300-etf" element={<ETF300Hoje />} />
          <Route path="/acoes/50-etf" element={<ETF50Hoje />} />
          <Route path="/acoes/hapvida" element={<HapvidaHoje />} />
          <Route path="/acoes/harvest-fund" element={<HarvestFundHoje />} />
          <Route path="/acoes/intel" element={<IntelHoje />} />
          <Route path="/acoes/invesco" element={<InvescoHoje />} />
          <Route path="/acoes/kraft-heinz" element={<KraftHeinzHoje />} />
          <Route path="/acoes/magazine-luiz" element={<MagazineLuizHoje />} />
          <Route path="/acoes/meta" element={<MetaHoje />} />
          <Route path="/acoes/microsoft" element={<MicrosoftHoje />} />
          <Route path="/acoes/monster" element={<MonsterBeverageHoje />} />
          <Route path="/acoes/nuveen" element={<NuveenHoje />} />
          <Route path="/acoes/nvidia" element={<NvidiaHoje />} />
          <Route path="/acoes/pimco" element={<PimcoHoje />} />
          <Route path="/acoes/vertex" element={<VertexPharmHoje />} />
          <Route path="/acoes/petrobras" element={<PetrobrasHoje />} />
          <Route path="/acoes/vale" element={<ValeHoje />} />
          <Route path="/acoes/itau" element={<ItauHoje />} />
          
          {/* Índices routes */}
          <Route path="/acoes/sp500" element={<SP500Hoje />} />
          
          {/* Forex routes */}
          <Route path="/forex/principais/eur-usd" element={<EurUsdHoje />} />
          <Route path="/forex/principais/usd-jpy" element={<UsdJpyHoje />} />
          <Route path="/forex/principais/gbp-usd" element={<GbpUsdHoje />} />
          <Route path="/forex/principais/usd-chf" element={<UsdChfHoje />} />
          <Route path="/forex/principais/aud-usd" element={<AudUsdHoje />} />
          <Route path="/forex/principais/usd-cad" element={<UsdCadHoje />} />
          <Route path="/forex/principais/nzd-usd" element={<NzdUsdHoje />} />
          
          {/* Forex secundários routes */}
          <Route path="/forex/secundarios/eur-gbp" element={<EurGbpHoje />} />
          <Route path="/forex/secundarios/eur-aud" element={<EurAudHoje />} />
          <Route path="/forex/secundarios/eur-cad" element={<EurCadHoje />} />
          <Route path="/forex/secundarios/eur-nzd" element={<EurNzdHoje />} />
          <Route path="/forex/secundarios/gbp-jpy" element={<GbpJpyHoje />} />
          <Route path="/forex/secundarios/gbp-aud" element={<GbpAudHoje />} />
          <Route path="/forex/secundarios/gbp-cad" element={<GbpCadHoje />} />
          <Route path="/forex/secundarios/aud-jpy" element={<AudJpyHoje />} />
          <Route path="/forex/secundarios/cad-jpy" element={<CadJpyHoje />} />
          <Route path="/forex/secundarios/nzd-jpy" element={<NzdJpyHoje />} />
          <Route path="/forex/secundarios/aud-cad" element={<AudCadHoje />} />
          <Route path="/forex/secundarios/aud-nzd" element={<AudNzdHoje />} />
          <Route path="/forex/secundarios/cad-chf" element={<CadChfHoje />} />
          <Route path="/forex/secundarios/nzd-cad" element={<NzdCadHoje />} />
          
          {/* Forex exóticos routes */}
          <Route path="/forex/exoticos/usd-try" element={<UsdTryHoje />} />
          <Route path="/forex/exoticos/usd-zar" element={<UsdZarHoje />} />
          <Route path="/forex/exoticos/usd-mxn" element={<UsdMxnHoje />} />
          <Route path="/forex/exoticos/usd-sek" element={<UsdSekHoje />} />
          <Route path="/forex/exoticos/usd-nok" element={<UsdNokHoje />} />
          <Route path="/forex/exoticos/usd-pln" element={<UsdPlnHoje />} />
          <Route path="/forex/exoticos/eur-try" element={<EurTryHoje />} />
          <Route path="/forex/exoticos/gbp-try" element={<GbpTryHoje />} />
          <Route path="/forex/exoticos/aud-sgd" element={<AudSgdHoje />} />
          <Route path="/forex/exoticos/eur-zar" element={<EurZarHoje />} />
          <Route path="/forex/exoticos/usd-hkd" element={<UsdHkdHoje />} />
          <Route path="/forex/exoticos/usd-thb" element={<UsdThbHoje />} />
          <Route path="/forex/exoticos/usd-inr" element={<UsdInrHoje />} />
          <Route path="/forex/exoticos/usd-rub" element={<UsdRubHoje />} />
          
          {/* Calculator routes */}
          <Route path="/calculadora-juros" element={<CalculadoraJuros />} />
          <Route path="/ver-todas-cotacoes" element={<VerTodasCotacoes />} />
          
          {/* Legal pages */}
          <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
          <Route path="/politica-de-cookies" element={<PoliticaCookies />} />
          <Route path="/termos-de-uso" element={<TermosUso />} />
          <Route path="/sitemap" element={<Sitemap />} />
          
          {/* Legacy -hoje suffix -> canonical redirect (fixes Search Console soft 404s) */}
          <Route path="*-hoje" element={<LegacyRedirect />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
