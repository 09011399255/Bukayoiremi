import React from "react";
import { MapPin } from "lucide-react";
import { COMPANY, CONTACT_LINKS } from "../data/content";

export default function Footer({ setCurrentPage }) {
  const navigateTo = (page, sectionId = null) => {
    setCurrentPage(page);
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
    <footer className="bg-forest-dark text-white pt-12 pb-8 border-t border-forest">
      <div className="editorial-container">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-forest/60">
          {/* Brand Monogram & Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white text-forest flex items-center justify-center font-bold text-lg tracking-tight shadow-xs">
              BI
            </div>
            <div>
              <span className="font-bold text-base text-white tracking-tight block leading-tight">
                Bukayo-Iremi
              </span>
              <span className="text-[11px] font-medium text-surface-border/70 block leading-none mt-0.5">
                Multipurpose Ventures
              </span>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center gap-6 text-xs text-surface-border font-medium">
            <button
              onClick={() => navigateTo("home", "how-it-works")}
              className="hover:text-lime transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => navigateTo("home", "savings-plans")}
              className="hover:text-lime transition-colors"
            >
              Savings Plans
            </button>
            <button
              onClick={() => navigateTo("home", "credit-support")}
              className="hover:text-lime transition-colors"
            >
              Credit Support
            </button>
            <button
              onClick={() => navigateTo("about")}
              className="hover:text-lime transition-colors"
            >
              About Us
            </button>
            <a
              href={CONTACT_LINKS.generalSavings}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime transition-colors"
            >
              Contact Us
            </a>
          </nav>

          {/* Location / Tagline */}
          <div className="text-left md:text-right space-y-0.5">
            <div className="flex items-center md:justify-end gap-1.5 text-xs text-surface-border">
              <MapPin className="w-3.5 h-3.5 text-lime flex-shrink-0" />
              <span>Ibadan, Oyo State, Nigeria</span>
            </div>
            <p className="text-[11px] text-surface-border/60">
              Building stronger communities through smarter saving.
            </p>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-surface-border/60 gap-3">
          <p>
            © {COMPANY.currentYear} Bukayo-Iremi Multipurpose Ventures. All
            rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="hover:text-white cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer transition-colors">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
