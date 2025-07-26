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

// Crypto pages
import BitcoinHoje from "./pages/crypto/BitcoinHoje";

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
          
          {/* Crypto routes */}
          <Route path="/crypto/bitcoin" element={<BitcoinHoje />} />
          
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
