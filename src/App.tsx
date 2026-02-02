import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PhysioHome from "./pages/PhysioHome";
import PhysioAbout from "./pages/PhysioAbout";
import PhysioTeam from "./pages/PhysioTeam";
import PhysioContact from "./pages/PhysioContact";
import PhysioBooking from "./pages/PhysioBooking";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PhysioHome />} />
          <Route path="/about" element={<PhysioAbout />} />
          <Route path="/team" element={<PhysioTeam />} />
          <Route path="/contact" element={<PhysioContact />} />
          <Route path="/booking" element={<PhysioBooking />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
