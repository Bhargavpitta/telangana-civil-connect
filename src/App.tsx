import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Index from "./pages/Index";
import IT from "./pages/wings/IT";
import Administration from "./pages/wings/Administration";
import Finance from "./pages/wings/Finance";
import Engineering from "./pages/wings/Engineering";
import Enforcement from "./pages/wings/Enforcement";
import Technical from "./pages/wings/Technical";
import Petroleum from "./pages/wings/Petroleum";
import PublicDistribution from "./pages/wings/PublicDistribution";
import EventRequest from "./pages/wings/EventRequest";
import DepartmentLogin from "./pages/wings/DepartmentLogin";
import Privacy from "./pages/footer/Privacy";
import Terms from "./pages/footer/Terms";
import EOffice from "./pages/wings/EOffice";
import Hyperlink from "./pages/Hyperlink";
import Feedback from "./pages/footer/Feedback";
import Help from "./pages/footer/Help";
import Copyright from "./pages/Copyright";
import EOfficeError from "./pages/EOfficeError";
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



import Terms from "./pages/Policies/Terms";
import Privacy from "./pages/Policies/Privacy";
import Hyperlinking from "./pages/Policies/Hyperlinking";
import Copyright from "./pages/Policies/Copyright";
import Feedback from "./pages/Policies/Feedback";
import Help from "./pages/Help";















const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
  <Routes>

    {/* 🌐 Normal site pages (with header/footer) */}
    <Route path="/" element={<Layout />}>
      <Route index element={<Index />} />
       {/* WINGS */}
  <Route path="wings/it" element={<IT />} />
  <Route path="wings/administration" element={<Administration />} />
  <Route path="wings/finance" element={<Finance />} />
  <Route path="wings/engineering" element={<Engineering />} />
  <Route path="wings/enforcement" element={<Enforcement />} />
  <Route path="wings/technical" element={<Technical />} />
  <Route path="wings/petroleum" element={<Petroleum />} />
  <Route path="wings/public-distribution" element={<PublicDistribution />} />
  <Route path="wings/event" element={<EventRequest />} />
      
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

  {/* Footer pages */}
  <Route path="privacy" element={<Privacy />} />
  <Route path="terms" element={<Terms />} />
  <Route path="help" element={<Help />} />
  <Route path="hyperlinking" element={<Hyperlink />} />
<Route path="copyright" element={<Copyright />} />
<Route path="feedback" element={<Feedback />} />
<Route path="help" element={<Help />} />
<Route path="/rti/:type" element={<RTIPage />} />

    </Route>

    {/* 🚨 Standalone Pages (NO Layout) */}
    <Route path="/wings/eoffice" element={<EOffice />} />
    <Route path="/eoffice-error" element={<EOfficeError />} />
    <Route path="/wings/login" element={<DepartmentLogin />} />
    <Route path="wings/public-distribution" element={<PublicDistribution />} />
    
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

          <Route path="/price/upload" element={<PriceUpload/>} />
          <Route path="/price/details" element={<PriceDetailsPage />} />
          <Route path="/audit" element={<SocialAuditPage />} />

    <Route path="*" element={<NotFound />} />

  </Routes>
</BrowserRouter>


      </TooltipProvider>
    </QueryClientProvider>
  );
};


export default App;
