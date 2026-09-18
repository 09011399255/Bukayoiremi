import React, { useState } from "react";
import {
  ArrowRight,
  Wallet,
  Calendar,
  CheckCircle2,
  Store,
  Clock,
  Zap,
} from "lucide-react";
import { CONTACT_LINKS } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function HeroSection({ onScrollToHowItWorks }) {
  const [visualRef, visualVisible] = useScrollReveal(0.15);
  const [cardView, setCardView] = useState("savings"); // 'savings' | 'credit'

  const scrollToCredit = () => {
    const el = document.getElementById("credit-support");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-12 pb-16 bg-white overflow-hidden">
      <div className="editorial-container">
        {/* 2. Centred Hero Text Hierarchy with Structured Entrance */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          {/* Eyebrow - Highlights both savings and credit */}
          <div className="animate-hero-eyebrow text-[11px] sm:text-xs font-bold uppercase tracking-widest text-charcoal-muted">
            DAILY SAVINGS • SHORT-TERM CREDIT • BRIGHTER TOMORROWS
          </div>

          {/* Headline - Dual focus on saving and borrowing */}
          <h1 className="animate-hero-headline text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
            <span className="text-charcoal block">Save consistently.</span>
            <span className="text-brandgreen block mt-1">
              Access loans when needed.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="animate-hero-copy text-base sm:text-lg text-charcoal-muted max-w-2xl mx-auto leading-relaxed pt-1">
            Daily savings contributions, structured cycles and fast short-term
            business loans—built around how market traders and everyday earners
            hustle.
          </p>

          {/* Centred Action Buttons */}
          <div className="animate-hero-actions pt-3 flex flex-wrap items-center justify-center gap-3">
            <a
              href={CONTACT_LINKS.generalSavings}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial px-7 py-3.5 rounded-full bg-lime text-forest text-sm font-bold hover:bg-lime-hover shadow-subtle inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2"
            >
              <span>Start Saving</span>
              <ArrowRight className="w-4 h-4 text-forest btn-arrow" />
            </a>

            <button
              onClick={scrollToCredit}
              className="btn-editorial px-6 py-3.5 rounded-full bg-white border border-surface-border text-charcoal text-sm font-semibold hover:bg-surface-light hover:border-charcoal/30 inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 cursor-pointer"
            >
              <span>Explore Business Loans</span>
              <ArrowRight className="w-3.5 h-3.5 text-forest btn-arrow" />
            </button>
          </div>

          {/* Small Supporting Line */}
          <div className="animate-hero-footer text-xs text-charcoal-muted pt-2 tracking-wide">
            Daily savings cards • Short-term business loans • Human support
          </div>
        </div>

        {/* 3. Savings & Credit Visual — Directly Below Hero */}
        <div
          ref={visualRef}
          className={`grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch transition-all duration-600 ease-editorial ${
            visualVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
        >
          {/* Left Column (~60%): Large Rounded Photograph */}
          <div className="lg:col-span-7 xl:col-span-7 relative rounded-3xl overflow-hidden min-h-[320px] sm:min-h-[420px] bg-mint flex items-center justify-center border border-surface-border">
            <img
              src="/images/savings-jar.png"
              alt="Dark-skinned hand placing a Nigerian Naira note into a transparent glass savings jar with folded notes"
              className="w-full h-full object-cover"
            />

            {/* Lower-left Corner Pill Caption */}
            <div className="absolute bottom-5 left-5 z-10">
              <span className="px-4 py-2 rounded-full bg-forest text-white text-xs font-semibold tracking-wide shadow-md inline-block">
                Small steps. Bigger plans.
              </span>
            </div>
          </div>

          {/* Right Column (~40%): Pale-Mint Panel containing White Interactive Card */}
          <div className="lg:col-span-5 xl:col-span-5 bg-mint rounded-3xl p-6 sm:p-8 flex flex-col justify-center border border-mint-border">
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-surface-border shadow-card space-y-5 min-h-[360px] flex flex-col justify-between">
              {/* Card View Switcher Pill */}
              <div className="flex items-center justify-between border-b border-surface-border pb-3">
                <div className="bg-surface-light p-1 rounded-full inline-flex border border-surface-border">
                  <button
                    onClick={() => setCardView("savings")}
                    className={`px-3.5 py-1 rounded-full text-[11px] font-bold transition-all duration-200 cursor-pointer ${
                      cardView === "savings"
                        ? "bg-forest text-white shadow-xs"
                        : "text-charcoal-muted hover:text-charcoal"
                    }`}
                  >
                    Daily Savings
                  </button>
                  <button
                    onClick={() => setCardView("credit")}
                    className={`px-3.5 py-1 rounded-full text-[11px] font-bold transition-all duration-200 cursor-pointer ${
                      cardView === "credit"
                        ? "bg-forest text-white shadow-xs"
                        : "text-charcoal-muted hover:text-charcoal"
                    }`}
                  >
                    Business Loans
                  </button>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-subtle">
                  Illustrative
                </span>
              </div>

              {/* View 1: Savings View */}
              {cardView === "savings" ? (
                <div className="space-y-5 animate-fadeIn">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-charcoal leading-snug">
                      Your savings, at a glance
                    </h3>
                    <span className="text-[11px] font-medium text-charcoal-muted block mt-0.5">
                      30-day savings cycle habit
                    </span>
                  </div>

                  {/* Contribution Balance */}
                  <div className="p-3.5 rounded-xl bg-surface-light border border-surface-border flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-mint text-brandgreen flex items-center justify-center">
                        <Wallet className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs text-charcoal-muted block">
                          Contribution Balance
                        </span>
                        <span className="text-2xl font-extrabold text-charcoal tracking-tight font-sans">
                          ₦ 18,000
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="space-y-2.5 pt-0.5">
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-7 h-7 rounded-lg bg-mint text-brandgreen flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-bold text-charcoal">₦ 1,000</span>
                      <span className="text-charcoal-muted text-xs">
                        daily contribution
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-7 h-7 rounded-lg bg-mint text-brandgreen flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-bold text-charcoal">18 of 30</span>
                      <span className="text-charcoal-muted text-xs">
                        days completed
                      </span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-1 pt-1">
                    <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden flex items-center">
                      <div
                        className="h-full bg-brandgreen rounded-full ease-editorial"
                        style={{
                          width: visualVisible ? "60%" : "0%",
                          transitionProperty: "width",
                          transitionDuration: "900ms",
                        }}
                      />
                    </div>
                    <div className="text-right text-xs font-bold text-charcoal-muted">
                      60%
                    </div>
                  </div>

                  {/* Plan Badge */}
                  <div className="pt-2 border-t border-surface-border flex items-center justify-between">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-surface-border bg-white text-xs font-semibold text-charcoal">
                      <Calendar className="w-3.5 h-3.5 text-brandgreen" />
                      <span>30-day plan</span>
                    </div>
                    <span className="text-[10px] text-charcoal-muted">
                      Contributions, not interest
                    </span>
                  </div>
                </div>
              ) : (
                /* View 2: Business Loan View */
                <div className="space-y-5 animate-fadeIn">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-charcoal leading-snug">
                      Short-term credit, at a glance
                    </h3>
                    <span className="text-[11px] font-medium text-charcoal-muted block mt-0.5">
                      Working capital for eligible traders
                    </span>
                  </div>

                  {/* Loan Amount Card */}
                  <div className="p-3.5 rounded-xl bg-surface-light border border-surface-border flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-mint text-brandgreen flex items-center justify-center">
                        <Store className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs text-charcoal-muted block">
                          Restock Credit Advance
                        </span>
                        <span className="text-2xl font-extrabold text-charcoal tracking-tight font-sans">
                          ₦ 50,000
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Loan Features */}
                  <div className="space-y-2.5 pt-0.5">
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-7 h-7 rounded-lg bg-mint text-brandgreen flex items-center justify-center flex-shrink-0">
                        <Clock className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-bold text-charcoal">
                        30-day turnaround
                      </span>
                      <span className="text-charcoal-muted text-xs">
                        agreed repayment
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-7 h-7 rounded-lg bg-mint text-brandgreen flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-bold text-charcoal">
                        Quick shop restock
                      </span>
                      <span className="text-charcoal-muted text-xs">
                        for verified stalls
                      </span>
                    </div>
                  </div>

                  {/* Status Banner */}
                  <div className="p-2.5 rounded-xl bg-mint border border-mint-border text-xs text-forest flex items-center justify-between">
                    <span className="font-semibold text-[11px]">
                      Reviewed on clear terms
                    </span>
                    <span className="text-[10px] bg-white px-2 py-0.5 rounded-full font-bold text-brandgreen border border-mint-border">
                      Eligible Traders
                    </span>
                  </div>

                  {/* Loan Action */}
                  <div className="pt-2 border-t border-surface-border flex items-center justify-between">
                    <a
                      href={CONTACT_LINKS.creditSupport}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-brandgreen hover:text-forest transition-colors inline-flex items-center gap-1"
                    >
                      <span>Ask About Credit</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    <span className="text-[10px] text-charcoal-muted">
                      Subject to eligibility
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
