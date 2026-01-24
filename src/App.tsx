
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, ScrollRestoration } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import Index from "./pages/Index";

// Lazy load non-critical pages
const Wine = lazy(() => import("./pages/Wine"));
const Menu = lazy(() => import("./pages/Menu"));
const Drinks = lazy(() => import("./pages/Drinks"));
const Gallery = lazy(() => import("./pages/Gallery"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Employment = lazy(() => import("./pages/Employment"));
const Reviews = lazy(() => import("./pages/Reviews"));
const Reservations = lazy(() => import("./pages/Reservations"));
const Coupons = lazy(() => import("./pages/Coupons"));
const ValentinesDay = lazy(() => import("./pages/ValentinesDay"));


// Create a ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

// Configure Query Client for optimal performance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={
          <div className="flex h-screen w-full items-center justify-center bg-gradient-to-br from-cafe-gold/20 to-cafe-logoRed/20">
            <div className="text-center space-y-4">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cafe-logoRed mx-auto"></div>
              <p className="text-lg font-playfair text-cafe-logoRed">Loading...</p>
            </div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/drinks" element={<Drinks />} />
            <Route path="/wine" element={<Wine />} />
            <Route path="/employment" element={<Employment />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/coupons" element={<Coupons />} />
            <Route path="/valentines-day" element={<ValentinesDay />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
