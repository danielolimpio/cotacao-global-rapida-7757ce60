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
import BitcoinHoje from "./pages/crypto/BitcoinHoje";
import EthereumHoje from "./pages/crypto/EthereumHoje";
import BinanceCoinHoje from "./pages/crypto/BinanceCoinHoje";
import RippleHoje from "./pages/crypto/RippleHoje";
import CardanoHoje from "./pages/crypto/CardanoHoje";
import LitecoinHoje from "./pages/crypto/LitecoinHoje";

// Ações pages
import AppleHoje from "./pages/acoes/AppleHoje";

// Forex pages
import SP500Hoje from "./pages/forex/SP500Hoje";

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
          <Route path="/crypto/bitcoin" element={<BitcoinHoje />} />
          <Route path="/crypto/ethereum" element={<EthereumHoje />} />
          <Route path="/crypto/binance-coin" element={<BinanceCoinHoje />} />
          <Route path="/crypto/ripple" element={<RippleHoje />} />
          <Route path="/crypto/cardano" element={<CardanoHoje />} />
          <Route path="/crypto/litecoin" element={<LitecoinHoje />} />
          
          {/* Ações routes */}
          <Route path="/acoes/apple" element={<AppleHoje />} />
          
          {/* Forex routes */}
          <Route path="/forex/sp500" element={<SP500Hoje />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
