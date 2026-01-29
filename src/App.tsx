import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Home from "./pages/Home";
import React from "react";
import Schemes from "./pages/Administration/Schemes/Schemes";

import VideoGallery from "./pages/VideoGallery";
import RTIPage from "./pages/RTIPage";
import NotFound from "./pages/NotFound";
import KnowRationStatus from "./pages/KnowRationStatus";
import EposTransactions from "./pages/EposTransactions";
import DeepamSearch from "./pages/DeepamSearch";
import FscSearch from "./pages/FscSearch";
import Reports from "./pages/Reports";





import PriceDetailsPage from "./PriceDetailsPage";
import SocialAuditPage from "./SocialAuditPage";
import PriceUpload from "./PriceUpload";


import FoodSecurityCards from "./pages/Administration/Schemes/FoodSecurityCards";

import Aadhaar from "./pages/Administration/Schemes/Aadhaar";

import FPShopAutomationwithePoSdevices from "./pages/Administration/Schemes/FPShopAutomationwithePoSdevices";

import EndToEnd from "./pages/Administration/Schemes/EndToEnd";

import PetroleumProducts from "./pages/Administration/Schemes/PetroleumProducts";

import Procurement from "./pages/Administration/Schemes/Procurement";

import ConsumerAffairs from "./pages/Administration/Schemes/ConsumerAffairs";

import OrganisationCharts from "./pages/Administration/OrganisationChart/OrganisationCharts";

import SpecialRules from "./pages/Administration/SpecialRules/SpecialRules";

import Pensions from "./pages/Administration/Pension/Pensions";

import CadreStrength from "./pages/Administration/CadreStrength/CadreStrength";

import MedicalReimbursement from "./pages/Administration/Reimbursement/MedicalReimbursement";


import Terms from "./pages/Policies/Terms";
import Privacy from "./pages/Policies/Privacy";
import Hyperlinking from "./pages/Policies/Hyperlinking";
import Copyright from "./pages/Policies/Copyright";
import Feedback from "./pages/Policies/Feedback";
import Help from "./pages/Help";















const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/administration/schemes" element={<Schemes />} />
          <Route path="/administration/foodsecurity" element={<FoodSecurityCards />} />  
          <Route path="/administration/aadhaar" element={<Aadhaar />} />  
          <Route path="/administration/fpshop" element={<FPShopAutomationwithePoSdevices />} /> 
          <Route path="/administration/endtoend" element={<EndToEnd/>} /> 
          <Route path="/administration/petroleum" element={<PetroleumProducts/>} /> 
          <Route path="/administration/procurement" element={<Procurement/>} /> 
          <Route path="/administration/consumer" element={<ConsumerAffairs/>} /> 
          <Route path="/administration/organisationchart" element={<OrganisationCharts />} />
          <Route path="/administration/special-rules" element={<SpecialRules />} />
          <Route path="/administration/pension" element={<Pensions />} />
          <Route path="/administration/cadre" element={<CadreStrength />} />
          <Route path="/administration/medical" element={<MedicalReimbursement />} />

                    <Route path="/terms" element={<Terms />} />
<Route path="/privacy" element={<Privacy />} />
<Route path="/hyperlinking" element={<Hyperlinking />} />
<Route path="/copyright" element={<Copyright />} />
<Route path="/feedback" element={<Feedback />} />
<Route path="/help" element={<Help />} />
        


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
          <Route
  path="/videos/consumer-awareness"
  element={<VideoGallery />}/>

  <Route
  path="/rti/:type"
  element={
    <Layout>
      <RTIPage />
    </Layout>
  }
/>

          <Route path="/price/upload" element={<PriceUpload/>} />
          <Route path="/price/details" element={<PriceDetailsPage />} />
          <Route path="/audit" element={<SocialAuditPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Routes>

        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
