import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Cambio from "./pages/Cambio";
import Crypto from "./pages/Crypto";
import Acoes from "./pages/Acoes";
import Forex from "./pages/Forex";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";

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

// Forex pages
import SP500Hoje from "./pages/forex/SP500Hoje";

// Calculator page
import CalculadoraJuros from "./pages/CalculadoraJuros";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cambio" element={<Cambio />} />
          <Route path="/crypto" element={<Crypto />} />
          <Route path="/acoes" element={<Acoes />} />
          <Route path="/forex" element={<Forex />} />
          <Route path="/contato" element={<Contato />} />
          
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
          
          {/* Forex routes */}
          <Route path="/forex/sp500" element={<SP500Hoje />} />
          
          {/* Calculator routes */}
          <Route path="/calculadora-juros" element={<CalculadoraJuros />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
