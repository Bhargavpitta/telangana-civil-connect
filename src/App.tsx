import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./components/Layout";
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

  {/* Footer pages */}
  <Route path="privacy" element={<Privacy />} />
  <Route path="terms" element={<Terms />} />
  <Route path="help" element={<Help />} />
  <Route path="hyperlinking" element={<Hyperlink />} />
<Route path="copyright" element={<Copyright />} />
<Route path="feedback" element={<Feedback />} />
<Route path="help" element={<Help />} />

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
</BrowserRouter>


      </TooltipProvider>
    </QueryClientProvider>
  );
};


export default App;
