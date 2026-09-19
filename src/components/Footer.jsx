import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import { COMPANY, CONTACT_LINKS } from "../data/content";

function SocialMiniLink({ type, url, label, handle }) {
  const getIcon = () => {
    switch (type) {
      case "whatsapp":
        return (
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.97.53 1.761.813 2.796.814h.005c3.18 0 5.767-2.586 5.768-5.766 0-1.54-.6-2.988-1.688-4.077-1.09-1.09-2.537-1.688-4.085-1.688zm7.147 1.488c1.503 1.503 2.33 3.501 2.33 5.626 0 4.385-3.57 7.955-7.957 7.955-1.339 0-2.648-.34-3.805-.986l-4.246 1.112 1.134-4.141c-.714-1.233-1.09-2.637-1.09-4.077 0-4.385 3.57-7.955 7.957-7.955 2.126 0 4.123.827 5.627 2.33l.05.136z" />
          </svg>
        );
      case "telegram":
        return (
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
          </svg>
        );
      case "instagram":
        return (
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        );
      case "tiktok":
        return (
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.89 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.34 0 .66.06.96.17V9.45a6.34 6.34 0 0 0-.96-.07A6.34 6.34 0 0 0 3 15.72 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.34-6.28V9.17c1.37.98 3.03 1.57 4.82 1.57V7.29a4.84 4.84 0 0 1-.91-.6z" />
          </svg>
        );
      case "facebook":
        return (
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        );
      default:
        return <ArrowUpRight className="w-3.5 h-3.5" />;
    }
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title={`${label}: ${handle}`}
      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-forest/80 border border-forest-light hover:border-lime hover:bg-forest hover:text-lime transition-all text-xs text-surface-border/90 group"
    >
      <span className="text-surface-border group-hover:text-lime transition-colors">
        {getIcon()}
      </span>
      <span className="text-[11px] font-medium">{label}</span>
    </a>
  );
}

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

  const { adeyeye, ajayi } = CONTACT_LINKS.founders;

  return (
    <footer className="bg-forest-dark text-white pt-16 pb-10 border-t border-forest">
      <div className="editorial-container space-y-12">
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-forest/60">
          {/* Col 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white text-forest flex items-center justify-center font-black text-xl tracking-tight shadow-xs">
                BI
              </div>
              <div>
                <span className="font-extrabold text-lg text-white tracking-tight block leading-tight">
                  Bukayo-Iremi
                </span>
                <span className="text-xs font-semibold text-lime block leading-none mt-0.5">
                  Multipurpose Ventures
                </span>
              </div>
            </div>

            <p className="text-xs text-surface-border/80 leading-relaxed max-w-sm">
              Community daily savings and trader credit partner in Ibadan.
              Helping market traders, artisans, and everyday earners build
              lasting savings discipline and access responsible business
              capital.
            </p>

            <div className="space-y-1 text-xs text-surface-border/70 pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-lime flex-shrink-0" />
                <span>{CONTACT_LINKS.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-lime flex-shrink-0" />
                <span>{CONTACT_LINKS.officeHours}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-lime block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs text-surface-border">
              <li>
                <button
                  onClick={() => navigateTo("home", "how-it-works")}
                  className="hover:text-lime transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo("home", "savings-plans")}
                  className="hover:text-lime transition-colors"
                >
                  Savings Plans
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo("home", "credit-support")}
                  className="hover:text-lime transition-colors"
                >
                  Credit & Loans
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo("about")}
                  className="hover:text-lime transition-colors"
                >
                  About Our Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo("home", "contact")}
                  className="hover:text-lime transition-colors"
                >
                  Direct Contacts
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Adeyeye Bukola Contacts & Channels (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-lime block">
                Managing Director
              </span>
            </div>
            <div>
              <p className="text-xs font-bold text-white">{adeyeye.name}</p>
              <p className="text-[11px] text-surface-border/70">
                Daily Contributions & Customer Care
              </p>
            </div>

            {/* Direct Phone & Email */}
            <div className="space-y-1.5 text-xs pt-1">
              <a
                href={`tel:${adeyeye.phone}`}
                className="flex items-center gap-2 text-surface-border hover:text-lime transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-lime flex-shrink-0" />
                <span>{adeyeye.phoneFormatted}</span>
              </a>
              <a
                href={`mailto:${adeyeye.email}`}
                className="flex items-center gap-2 text-surface-border hover:text-lime transition-colors truncate"
                title={adeyeye.email}
              >
                <Mail className="w-3.5 h-3.5 text-lime flex-shrink-0" />
                <span className="truncate">{adeyeye.email}</span>
              </a>
            </div>

            {/* Social channels badges */}
            <div className="pt-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-surface-border/60 block mb-1.5">
                Handles
              </span>
              <div className="flex flex-wrap gap-1.5">
                {adeyeye.channels
                  .filter((c) => c.type !== "email")
                  .map((channel, idx) => (
                    <SocialMiniLink
                      key={idx}
                      type={channel.type}
                      url={channel.url}
                      label={channel.label}
                      handle={channel.handle}
                    />
                  ))}
              </div>
            </div>
          </div>

          {/* Col 4: Kolawole Ajayi Contacts & Channels (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-lime block">
                Operations Director
              </span>
            </div>
            <div>
              <p className="text-xs font-bold text-white">{ajayi.name}</p>
              <p className="text-[11px] text-surface-border/70">
                Credit Facilities & Accounts
              </p>
            </div>

            {/* Direct Phone & Email */}
            <div className="space-y-1.5 text-xs pt-1">
              <a
                href={`tel:${ajayi.phone}`}
                className="flex items-center gap-2 text-surface-border hover:text-lime transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-lime flex-shrink-0" />
                <span>{ajayi.phoneFormatted}</span>
              </a>
              <a
                href={`mailto:${ajayi.email}`}
                className="flex items-center gap-2 text-surface-border hover:text-lime transition-colors truncate"
                title={ajayi.email}
              >
                <Mail className="w-3.5 h-3.5 text-lime flex-shrink-0" />
                <span className="truncate">{ajayi.email}</span>
              </a>
            </div>

            {/* Social channels badges */}
            <div className="pt-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-surface-border/60 block mb-1.5">
                Handles
              </span>
              <div className="flex flex-wrap gap-1.5">
                {ajayi.channels
                  .filter((c) => c.type !== "email")
                  .map((channel, idx) => (
                    <SocialMiniLink
                      key={idx}
                      type={channel.type}
                      url={channel.url}
                      label={channel.label}
                      handle={channel.handle}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Assurance Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-surface-border/70 gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-lime" />
            <span>
              Registered Multipurpose Business Venture • Ibadan, Oyo State,
              Nigeria
            </span>
          </div>
          <p>
            © {COMPANY.currentYear} Bukayo-Iremi Multipurpose Ventures. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
