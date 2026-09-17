import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesAndFounders from "./components/ServicesAndFounders";
import HowItWorksSection from "./components/HowItWorksSection";
import SavingsPlansSection from "./components/SavingsPlansSection";
import SavingsUseCasesSection from "./components/SavingsUseCasesSection";
import CreditAndClosingSection from "./components/CreditAndClosingSection";
import AboutPage from "./components/AboutPage";
import Footer from "./components/Footer";
import { MessageCircle } from "lucide-react";
import { CONTACT_LINKS } from "./data/content";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home"); // 'home' | 'about'

  // Sync hash changes for history support
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === "about") {
        setCurrentPage("about");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (hash === "home" || hash === "") {
        setCurrentPage("home");
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const handleSetCurrentPage = (page) => {
    setCurrentPage(page);
    window.location.hash = page === "about" ? "about" : "home";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToHowItWorks = () => {
    if (currentPage !== "home") {
      setCurrentPage("home");
      setTimeout(() => {
        const el = document.getElementById("how-it-works");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById("how-it-works");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-charcoal flex flex-col font-sans selection:bg-lime selection:text-forest">
      {/* 1. Navigation */}
      <Navbar currentPage={currentPage} setCurrentPage={handleSetCurrentPage} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentPage === "home" ? (
          <>
            {/* 2. Centred Hero & 3. Savings Visual */}
            <HeroSection onScrollToHowItWorks={scrollToHowItWorks} />

            {/* 4. Services Strip & 5. Founders / Credibility */}
            <ServicesAndFounders
              onNavigateToAbout={() => handleSetCurrentPage("about")}
            />

            {/* 6. How It Works */}
            <HowItWorksSection />

            {/* 7. Savings Plans (30-Day & 12-Month Cycles with Gauge & Calendar) */}
            <SavingsPlansSection />

            {/* 8. Savings Use Cases */}
            <SavingsUseCasesSection />

            {/* 9. Credit Support & 10. Closing CTA */}
            <CreditAndClosingSection />
          </>
        ) : (
          /* About Us Page */
          <AboutPage onBackToHome={() => handleSetCurrentPage("home")} />
        )}
      </main>

      {/* 11. Footer */}
      <Footer setCurrentPage={handleSetCurrentPage} />

      {/* Quick Direct WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href={CONTACT_LINKS.generalSavings}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-forest text-lime hover:bg-forest-dark flex items-center justify-center shadow-lg hover:scale-105 transition-transform border border-forest-light"
          aria-label="Direct WhatsApp Contact"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
        </a>
      </div>
    </div>
  );
}
