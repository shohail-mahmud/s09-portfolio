import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import BackgroundVideo from "@/components/BackgroundVideo";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import { DarkModeProvider } from "@/hooks/use-dark-mode";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Work from "@/pages/Work";
import Archive from "@/pages/Archive";
import ConnectPage from "@/pages/Connect";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <DarkModeProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className="relative h-screen w-full overflow-hidden bg-[#FFFFFF] text-[#000000] dark:bg-[#000000] dark:text-[#FFFFFF]">
            <BackgroundVideo />
            <Navbar />
            <main className="relative z-10">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/work" element={<Work />} />
                <Route path="/archive" element={<Archive />} />
                <Route path="/connect" element={<ConnectPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </DarkModeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
