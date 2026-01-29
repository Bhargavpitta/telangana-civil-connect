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
import SocialAuditManagement from "./pages/SocialAuditManagement";

import PriceDetailsPage from "./PriceDetailsPage";
import SocialAuditPage from "./SocialAuditPage";
import PriceUpload from "./PriceUpload";
import Section6A from "./pages/Section6A";
import PaddyDashboard from "./pages/PaddyDashboard";
import FpsCommission from "./pages/FpsCommission";
import FpshopDealerCommission from "./pages/FpsDealerCommission";
import "./pages/SocialAuditManagement.css";

// FPS Shop Dealer Commission Page Component
const FpsDealerCommission = () => {
  return (
    <div style={{ padding: '20px', minHeight: '100vh' }}>
      <iframe 
        src="/fps-dealer-commission.html" 
        title="FPS Shop Dealer Commission Management System"
        style={{
          width: '100%',
          height: 'calc(100vh - 100px)',
          border: 'none'
        }}
      />
    </div>
  );
};

// ...existing code...

// FP Shop Management System Page Component
const FpShopManagement = () => {
  return (
    <div style={{ padding: '20px', minHeight: '100vh' }}>
      <iframe 
        src="/fpshop-management.html" 
        title="FP Shop Management System"
        style={{
          width: '100%',
          height: 'calc(100vh - 100px)',
          border: 'none'
        }}
      />
    </div>
  );
};

// Price Monitoring System Page Component
const PriceMonitoring = () => {
  return (
    <div style={{ padding: '20px', minHeight: '100vh' }}>
      <iframe 
        src="/price-monitoring.html" 
        title="Price Monitoring System"
        style={{
          width: '100%',
          height: 'calc(100vh - 100px)',
          border: 'none'
        }}
      />
    </div>
  );
};

// Gunny Reporting System Page Component
const GunnyReporting = () => {
  return (
    <div style={{ padding: '20px', minHeight: '100vh' }}>
      <iframe 
        src="/gunny-reporting.html" 
        title="Gunny Reporting System"
        style={{
          width: '100%',
          height: 'calc(100vh - 100px)',
          border: 'none'
        }}
      />
    </div>
  );
};

// Vigilance Committee Management System Page Component
const VigilanceCommittee = () => {
  return (
    <div style={{ padding: '20px', minHeight: '100vh' }}>
      <iframe 
        src="/vigilance.html" 
        title="Vigilance Committee Management System"
        style={{
          width: '100%',
          height: 'calc(100vh - 100px)',
          border: 'none'
        }}
      />
    </div>
  );
};

// Department Login Page Component
const DepartmentLogin = () => {
  return (
    <div style={{ padding: '20px', minHeight: '100vh' }}>
      <iframe 
        src="/department-login.html" 
        title="Department Login"
        style={{
          width: '100%',
          height: 'calc(100vh - 100px)',
          border: 'none'
        }}
      />
    </div>
  );
};

// Statistics Login Page Component
const StatisticsLogin = () => {
  return (
    <div style={{ padding: '20px', minHeight: '100vh' }}>
      <iframe 
        src="/statistics-login.html" 
        title="Statistics Login"
        style={{
          width: '100%',
          height: 'calc(100vh - 100px)',
          border: 'none'
        }}
      />
    </div>
  );
};

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

           
          
          {/* Login Routes */}
          <Route path="/login/fps-dealer" element={<FpshopDealerCommission />} />
          <Route path="/fpshop" element={<FpshopDealerCommission />} />
          <Route path="/login/social-audit" element={<SocialAuditManagement />} />
          <Route path="/login/fps-management" element={<FpShopManagement />} />
          <Route path="/login/price-monitor" element={<PriceMonitoring />} />
          <Route path="/login/gunny-bag" element={<GunnyReporting />} />
          <Route path="/login/vigilance" element={<VigilanceCommittee />} />
          <Route path="/login/department" element={<DepartmentLogin />} />
          <Route path="/login/statistics" element={<StatisticsLogin />} />
          <Route path="/login/6a-case" element={<Section6A />} />
          <Route path="/login/paddy-allotment" element={<PaddyDashboard />} />

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