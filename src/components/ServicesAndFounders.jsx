import React from "react";
import {
  Calendar,
  BarChart3,
  Users,
  Headphones,
  ArrowRight,
} from "lucide-react";
import { FOUNDERS } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function ServicesAndFounders({ onNavigateToAbout }) {
  const { director, accountant } = FOUNDERS;
  const [stripRef, stripVisible] = useScrollReveal(0.15);
  const [foundersRef, foundersVisible] = useScrollReveal(0.15);

  const services = [
    {
      icon: Calendar,
      title: "30-Day Savings",
      desc: "Build a habit. See progress in 30 days.",
    },
    {
      icon: BarChart3,
      title: "12-Month Savings",
      desc: "Bigger goals. Greater possibilities.",
    },
    {
      icon: Users,
      title: "Short-Term Credit",
      desc: "Responsible support for your business.",
    },
    {
      icon: Headphones,
      title: "One-to-One Support",
      desc: "Real people. Always here for you.",
    },
  ];

  return (
    <section className="pb-16 bg-white">
      <div className="editorial-container space-y-16">
        {/* 4. SERVICES STRIP (Staggered 80ms entry on scroll) */}
        <div
          ref={stripRef}
          className={`bg-mint rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-mint-border transition-all duration-600 ease-editorial ${
            stripVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-4 transition-all duration-500 ease-editorial"
                  style={{
                    transitionDelay: stripVisible ? `${idx * 80}ms` : "0ms",
                    opacity: stripVisible ? 1 : 0,
                    transform: stripVisible
                      ? "translateY(0)"
                      : "translateY(12px)",
                  }}
                >
                  <div className="w-10 h-10 rounded-xl bg-white text-forest flex items-center justify-center flex-shrink-0 shadow-xs border border-mint-border">
                    <Icon className="w-5 h-5 text-forest" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-sm font-bold text-charcoal">
                      {item.title}
                    </h4>
                    <p className="text-xs text-charcoal-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 5. FOUNDERS / CREDIBILITY (Portrait first, text 100ms later, minimal vertical motion) */}
        <div
          ref={foundersRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2"
        >
          {/* Left Text Column (~45%) - Reveals after 100ms */}
          <div
            className="lg:col-span-5 flex flex-col justify-center space-y-4 transition-all duration-600 ease-editorial"
            style={{
              transitionDelay: foundersVisible ? "100ms" : "0ms",
              opacity: foundersVisible ? 1 : 0,
              transform: foundersVisible ? "translateY(0)" : "translateY(16px)",
            }}
          >
            <span className="text-[11px] font-bold uppercase tracking-widest text-charcoal-muted">
              OUR FOUNDERS
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-charcoal tracking-tight leading-tight">
              Built by accountants.
              <br />
              Shaped by life experience.
            </h2>

            <p className="text-sm text-charcoal-muted leading-relaxed max-w-md">
              As a husband and wife, we combine professional expertise with real
              understanding of the everyday challenges traders and earners face
              in Ibadan. Bukayo-Iremi Multipurpose Ventures aims to create
              practical financial solutions for our community.
            </p>

            <div className="pt-2">
              <button
                onClick={onNavigateToAbout}
                className="btn-editorial px-6 py-3 rounded-full bg-forest text-white text-xs font-bold hover:bg-forest-light transition-colors inline-flex items-center gap-2 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2"
              >
                <span>Meet the Founders</span>
                <ArrowRight className="w-3.5 h-3.5 text-lime btn-arrow" />
              </button>
            </div>
          </div>

          {/* Center & Right Column: Two Portraits + Mint Brand-Message Panel (~55%) - Portrait appears first (0ms delay) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-5 items-stretch">
            {/* Two Side-by-Side Founder Portraits (approx 8 cols) */}
            <div
              className="sm:col-span-8 grid grid-cols-2 gap-4 transition-all duration-600 ease-editorial"
              style={{
                opacity: foundersVisible ? 1 : 0,
                transform: foundersVisible
                  ? "translateY(0)"
                  : "translateY(16px)",
              }}
            >
              {/* Founder 1: Adeyeye Oluwabukola (Static, non-clickable) */}
              <div className="flex flex-col space-y-2.5">
                <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-surface-light border border-surface-border shadow-xs">
                  <img
                    src={director.image}
                    alt="Adeyeye Oluwabukola, Founder and Director"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-charcoal leading-tight">
                    {director.name}
                  </h4>
                  <p className="text-[11px] text-charcoal-muted mt-0.5">
                    {director.role}
                  </p>
                </div>
              </div>

              {/* Founder 2: Ajayi Kolawole Luke (Static, non-clickable) */}
              <div className="flex flex-col space-y-2.5">
                <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-surface-light border border-surface-border shadow-xs">
                  <img
                    src={accountant.image}
                    alt="Ajayi Kolawole Luke, Co-founder and Chief Accountant"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-charcoal leading-tight">
                    {accountant.name}
                  </h4>
                  <p className="text-[11px] text-charcoal-muted mt-0.5">
                    {accountant.role}
                  </p>
                </div>
              </div>
            </div>

            {/* Mint Brand-Message Panel (approx 4 cols) - Appears after 100ms */}
            <div
              className="sm:col-span-4 bg-mint rounded-2xl p-6 border border-mint-border flex flex-col justify-between transition-all duration-600 ease-editorial"
              style={{
                transitionDelay: foundersVisible ? "100ms" : "0ms",
                opacity: foundersVisible ? 1 : 0,
                transform: foundersVisible
                  ? "translateY(0)"
                  : "translateY(16px)",
              }}
            >
              <span className="text-3xl font-serif text-brandgreen font-bold leading-none">
                “
              </span>

              <div className="space-y-1 py-4">
                <p className="text-xs sm:text-sm font-bold text-charcoal leading-snug">
                  Stronger people.
                  <br />
                  Stronger businesses.
                  <br />A brighter Ibadan.
                </p>
              </div>

              <div className="text-[11px] text-charcoal-muted leading-tight border-t border-mint-border pt-3">
                <span className="font-semibold block text-charcoal">
                  — Bukayo-Iremi
                </span>
                <span>Multipurpose Ventures.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
