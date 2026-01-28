import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import KnowRationStatus from "./pages/KnowRationStatus";
import EposTransactions from "./pages/EposTransactions";
import DeepamSearch from "./pages/DeepamSearch";
import FscSearch from "./pages/FscSearch";
import Reports from "./pages/Reports";





import PriceDetailsPage from "./PriceDetailsPage";
import SocialAuditPage from "./SocialAuditPage";
import PriceUpload from "./PriceUpload";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Citizen Services */}
          <Route
            path="/services/ration-status"
            element={<KnowRationStatus />}
          />
           <Route
           path="/services/epos-transactions"
            element={<EposTransactions />}
             />
           
           <Route path="/services/deepam-search" element={<DeepamSearch />} />
          
          <Route path="/services/fsc-search" element={<FscSearch />} />
          <Route path="/services/reports" element={<Reports />} />


           
          

          {/* Catch-all */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/price/upload" element={<PriceUpload/>} />
          <Route path="/price/details" element={<PriceDetailsPage />} />
          <Route path="/audit" element={<SocialAuditPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
