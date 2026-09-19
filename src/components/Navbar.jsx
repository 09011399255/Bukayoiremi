import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { CONTACT_LINKS } from "../data/content";

export default function Navbar({ currentPage, setCurrentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigateTo = (page, sectionId = null) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 80);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-surface-border">
      <div className="editorial-container">
        <div className="flex items-center justify-between h-20">
          {/* Brand Monogram & Name */}
          <button
            onClick={() => navigateTo("home")}
            className="flex items-center gap-3 text-left group focus:outline-none cursor-pointer"
            aria-label="Bukayo-Iremi Multipurpose Ventures Home"
          >
            <div className="w-10 h-10 rounded-xl bg-forest text-lime flex items-center justify-center font-bold text-lg tracking-tight shadow-sm transition-transform group-hover:scale-105">
              BI
            </div>
            <div>
              <span className="font-bold text-base text-charcoal tracking-tight block leading-tight">
                Bukayo-Iremi
              </span>
              <span className="text-[11px] font-medium text-charcoal-muted block leading-none mt-0.5">
                Multipurpose Ventures
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-charcoal">
            <button
              onClick={() => navigateTo("home")}
              className={`hover:text-forest transition-colors cursor-pointer ${
                currentPage === "home"
                  ? "text-forest font-semibold border-b-2 border-brandgreen pb-1"
                  : "text-charcoal"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => navigateTo("home", "how-it-works")}
              className="hover:text-forest transition-colors cursor-pointer text-charcoal"
            >
              How It Works
            </button>
            <button
              onClick={() => navigateTo("home", "savings-plans")}
              className="hover:text-forest transition-colors cursor-pointer text-charcoal"
            >
              Savings Plans
            </button>
            <button
              onClick={() => navigateTo("home", "credit-support")}
              className="hover:text-forest transition-colors cursor-pointer text-charcoal"
            >
              Credit Support
            </button>
            <button
              onClick={() => navigateTo("about")}
              className={`hover:text-forest transition-colors cursor-pointer ${
                currentPage === "about"
                  ? "text-forest font-semibold border-b-2 border-brandgreen pb-1"
                  : "text-charcoal"
              }`}
            >
              About Us
            </button>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => navigateTo("home", "contact")}
              className="px-5 py-2.5 rounded-full border border-surface-border text-charcoal text-xs font-semibold hover:border-forest/40 hover:bg-surface-light transition-all cursor-pointer"
            >
              Contact Us
            </button>

            <a
              href={CONTACT_LINKS.generalSavings}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-lime text-forest text-xs font-bold hover:bg-lime-hover transition-colors shadow-subtle flex items-center gap-1.5"
            >
              <span>Start Saving</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href={CONTACT_LINKS.generalSavings}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full bg-lime text-forest text-xs font-bold"
            >
              Start Saving
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-charcoal hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-surface-border px-5 py-5 space-y-3">
          <button
            onClick={() => navigateTo("home")}
            className={`block w-full text-left py-2 text-sm font-medium ${currentPage === "home" ? "text-forest font-bold" : "text-charcoal"}`}
          >
            Home
          </button>
          <button
            onClick={() => navigateTo("home", "how-it-works")}
            className="block w-full text-left py-2 text-sm font-medium text-charcoal"
          >
            How It Works
          </button>
          <button
            onClick={() => navigateTo("home", "savings-plans")}
            className="block w-full text-left py-2 text-sm font-medium text-charcoal"
          >
            Savings Plans
          </button>
          <button
            onClick={() => navigateTo("home", "credit-support")}
            className="block w-full text-left py-2 text-sm font-medium text-charcoal"
          >
            Credit Support
          </button>
          <button
            onClick={() => navigateTo("about")}
            className={`block w-full text-left py-2 text-sm font-medium ${currentPage === "about" ? "text-forest font-bold" : "text-charcoal"}`}
          >
            About Us
          </button>
          <div className="pt-3 border-t border-surface-border flex flex-col gap-2">
            <button
              onClick={() => navigateTo("home", "contact")}
              className="w-full text-center py-2.5 rounded-full border border-surface-border text-xs font-semibold text-charcoal cursor-pointer hover:bg-surface-light"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
