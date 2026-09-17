import React, { useState } from "react";
import {
  Store,
  GraduationCap,
  Home,
  ShieldCheck,
  Flag,
  Check,
} from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function SavingsPlansSection() {
  const [activeCycle, setActiveCycle] = useState("30-day"); // '30-day' | '12-month'
  const [isCrossfading, setIsCrossfading] = useState(false);
  const [sectionRef, isVisible] = useScrollReveal(0.15);

  const handleTabChange = (cycle) => {
    if (cycle === activeCycle) return;
    setIsCrossfading(true);
    setTimeout(() => {
      setActiveCycle(cycle);
      setIsCrossfading(false);
    }, 120);
  };

  const totalDays = activeCycle === "30-day" ? 30 : 365;
  const completedDays = activeCycle === "30-day" ? 18 : 180;
  const dailyAmount = 1000;
  const currentTotal = completedDays * dailyAmount;
  const targetTotal = totalDays * dailyAmount;
  const percent = Math.round((completedDays / totalDays) * 100);

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <section
      id="savings-plans"
      ref={sectionRef}
      className="py-16 bg-white scroll-mt-20"
    >
      <div className="editorial-container space-y-10">
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto space-y-3 transition-all duration-600 ease-editorial ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <span className="text-[11px] font-bold uppercase tracking-widest text-charcoal-muted">
            SAVINGS PLANS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
            Pick the rhythm that matches your goal.
          </h2>
          <p className="text-sm text-charcoal-muted">
            Choose a plan, stay consistent and watch your progress build.
          </p>

          {/* Plan Tabs - Smooth highlight transition */}
          <div className="pt-2 flex justify-center">
            <div className="bg-mint p-1 rounded-full inline-flex border border-mint-border">
              <button
                onClick={() => handleTabChange("30-day")}
                className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                  activeCycle === "30-day"
                    ? "bg-forest text-white shadow-sm"
                    : "text-charcoal hover:text-forest"
                }`}
              >
                30-Day Cycle
              </button>
              <button
                onClick={() => handleTabChange("12-month")}
                className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                  activeCycle === "12-month"
                    ? "bg-forest text-white shadow-sm"
                    : "text-charcoal hover:text-forest"
                }`}
              >
                12-Month Cycle
              </button>
            </div>
          </div>
        </div>

        {/* Wide Pale-Mint Showcase Panel */}
        <div
          className={`bg-mint rounded-3xl p-6 sm:p-8 lg:p-10 border border-mint-border transition-all duration-600 ease-editorial ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-surface-border shadow-card min-h-[380px]">
            {/* Stable height container with 200ms crossfade */}
            <div
              className={`transition-opacity duration-200 ease-editorial ${
                isCrossfading ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-center">
                {/* 1. Goals List (approx 3 cols) */}
                <div className="lg:col-span-3 space-y-3">
                  <div className="p-3 rounded-xl bg-surface-light border border-surface-border flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-mint text-brandgreen flex items-center justify-center flex-shrink-0">
                      <Store className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-charcoal">
                      Save for business restocking
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-surface-light border border-surface-border flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-mint text-brandgreen flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-charcoal">
                      Prepare for school fees
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-surface-light border border-surface-border flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-mint text-brandgreen flex items-center justify-center flex-shrink-0">
                      <Home className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-charcoal">
                      Handle rent and household needs
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-surface-light border border-surface-border flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-mint text-brandgreen flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-charcoal">
                      Build your emergency fund
                    </span>
                  </div>
                </div>

                {/* 2. Circular Gauge Card (approx 3 cols) - 900ms smooth fill */}
                <div className="lg:col-span-3 flex flex-col items-center justify-center text-center p-4 border-y lg:border-y-0 lg:border-x border-surface-border">
                  {/* SVG Radial Gauge Ring */}
                  <div className="relative w-36 h-36 flex items-center justify-center mb-3">
                    <svg
                      className="w-full h-full transform -rotate-90"
                      viewBox="0 0 100 100"
                    >
                      {/* Background ring */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="#E5FAF1"
                        strokeWidth="8"
                        fill="transparent"
                      />
                      {/* Progress stroke with 900ms smooth fill */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="#C9FF55"
                        strokeWidth="8"
                        strokeDasharray="251.2"
                        strokeDashoffset={
                          isVisible ? 251.2 - (251.2 * percent) / 100 : 251.2
                        }
                        strokeLinecap="round"
                        fill="transparent"
                        style={{
                          transition:
                            "stroke-dashoffset 900ms cubic-bezier(0.22, 1, 0.36, 1)",
                        }}
                      />
                    </svg>

                    {/* Inner text (Static, readable) */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <span className="text-3xl font-extrabold text-charcoal font-sans leading-none">
                        {completedDays}
                      </span>
                      <span className="text-[11px] font-medium text-charcoal-muted mt-0.5">
                        of {totalDays} days
                      </span>
                    </div>
                  </div>

                  {/* Progress details (Static values, no jitter) */}
                  <div className="space-y-1">
                    <div className="text-base font-extrabold text-charcoal font-sans">
                      ₦ {currentTotal.toLocaleString()}
                    </div>
                    <div className="text-[11px] text-charcoal-muted">
                      of ₦ {targetTotal.toLocaleString()} target
                    </div>
                    <div className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-mint text-brandgreen mt-1">
                      {percent}% Completed
                    </div>
                  </div>
                </div>

                {/* 3. Your Contribution Calendar (approx 4 cols) */}
                <div className="lg:col-span-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-charcoal">
                      Your Contribution Calendar
                    </h4>
                    <span className="text-[10px] text-charcoal-muted">
                      {activeCycle === "30-day" ? "Month 1" : "Cycle Overview"}
                    </span>
                  </div>

                  {/* Mon-Sun Header */}
                  <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-medium text-charcoal-muted pb-1 border-b border-surface-border">
                    {daysOfWeek.map((day) => (
                      <div key={day}>{day}</div>
                    ))}
                  </div>

                  {/* Days Grid */}
                  <div className="grid grid-cols-7 gap-1.5 pt-1">
                    {Array.from({ length: 28 }).map((_, idx) => {
                      const isChecked =
                        idx < (activeCycle === "30-day" ? 18 : 16);
                      return (
                        <div
                          key={idx}
                          className={`w-6 h-6 rounded-full mx-auto flex items-center justify-center text-[9px] transition-colors ${
                            isChecked
                              ? "bg-brandgreen text-white font-bold"
                              : "bg-slate-100 text-slate-400"
                          }`}
                        >
                          {isChecked ? <Check className="w-3 h-3" /> : idx + 1}
                        </div>
                      );
                    })}
                  </div>

                  <div className="text-[11px] text-charcoal-muted text-center pt-2">
                    Daily record stamped by your field collector
                  </div>
                </div>

                {/* 4. Stay Consistent Card (approx 2 cols) */}
                <div className="lg:col-span-2 bg-mint rounded-xl p-4 border border-mint-border flex flex-col justify-between h-full space-y-4">
                  <div className="w-8 h-8 rounded-lg bg-white text-brandgreen flex items-center justify-center shadow-xs">
                    <Flag className="w-4 h-4 text-brandgreen" />
                  </div>

                  <div>
                    <h5 className="text-xs font-bold text-charcoal mb-1">
                      Stay Consistent
                    </h5>
                    <p className="text-[11px] text-charcoal-muted leading-relaxed">
                      Small steps today, bigger opportunities tomorrow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Illustrative Disclaimer Note */}
          <div className="pt-4 text-center">
            <span className="text-[11px] text-charcoal-muted">
              *Illustrative example: ₦1,000 contributed daily. Figures represent
              member contributions, not interest or guaranteed returns. Terms
              and any applicable charges are explained before you join.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
