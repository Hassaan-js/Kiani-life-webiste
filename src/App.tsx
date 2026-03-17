import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import CommissionsPage from "./pages/CommissionsPage.tsx";
import TrainingPage from "./pages/TrainingPage.tsx";
import CareerGrowthPage from "./pages/CareerGrowthPage.tsx";
import LeadsPage from "./pages/LeadsPage.tsx";
import BonusesPage from "./pages/BonusesPage.tsx";
import PartnersPage from "./pages/PartnersPage.tsx";
import WhyKianiPage from "./pages/WhyKianiPage.tsx";
import EarningsPage from "./pages/EarningsPage.tsx";
import ProcessPage from "./pages/ProcessPage.tsx";
import TestimonialsPage from "./pages/TestimonialsPage.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/commissions" element={<CommissionsPage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/career-growth" element={<CareerGrowthPage />} />
          <Route path="/leads" element={<LeadsPage />} />
          <Route path="/bonuses" element={<BonusesPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
