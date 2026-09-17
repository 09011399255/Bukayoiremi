import React from "react";
import { HOW_IT_WORKS } from "../data/content";
import { Check } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function HowItWorksSection() {
  const [sectionRef, isVisible] = useScrollReveal(0.15);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="py-16 bg-white scroll-mt-20"
    >
      <div className="editorial-container space-y-12">
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto space-y-3 transition-all duration-600 ease-editorial ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <span className="text-[11px] font-bold uppercase tracking-widest text-charcoal-muted">
            GET STARTED TODAY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
            A simple system that keeps you moving.
          </h2>
          <p className="text-sm text-charcoal-muted">
            Save, plan and access support in three easy steps.
          </p>
        </div>

        {/* 3 Columns with Staggered 80ms entrance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Step 1 */}
          <div
            className="flex flex-col space-y-4 transition-all duration-600 ease-editorial"
            style={{
              transitionDelay: isVisible ? "0ms" : "0ms",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-lime text-forest flex items-center justify-center font-extrabold text-sm flex-shrink-0 shadow-xs">
                1
              </div>
              <div>
                <h3 className="text-base font-bold text-charcoal leading-tight">
                  Choose Your Plan
                </h3>
                <p className="text-xs text-charcoal-muted mt-0.5">
                  Pick a savings plan that fits your goal.
                </p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-surface-light border border-surface-border shadow-xs">
              <img
                src={HOW_IT_WORKS[0].image}
                alt={HOW_IT_WORKS[0].alt}
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs rounded-xl p-2.5 border border-surface-border shadow-sm text-left">
                <div className="text-[10px] font-bold text-charcoal-muted uppercase tracking-wider mb-1">
                  Daily Contribution
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-mint text-brandgreen font-semibold text-[11px]">
                    <span className="w-2 h-2 rounded-full bg-brandgreen"></span>
                    <span>30-Day Cycle</span>
                  </div>
                  <div className="text-[11px] text-charcoal-muted">
                    12-Month Cycle
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div
            className="flex flex-col space-y-4 transition-all duration-600 ease-editorial"
            style={{
              transitionDelay: isVisible ? "80ms" : "0ms",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-lime text-forest flex items-center justify-center font-extrabold text-sm flex-shrink-0 shadow-xs">
                2
              </div>
              <div>
                <h3 className="text-base font-bold text-charcoal leading-tight">
                  Contribute Daily
                </h3>
                <p className="text-xs text-charcoal-muted mt-0.5">
                  Make your daily contribution with our support.
                </p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-surface-light border border-surface-border shadow-xs">
              <img
                src={HOW_IT_WORKS[1].image}
                alt={HOW_IT_WORKS[1].alt}
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs rounded-xl p-2.5 border border-surface-border shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-brandgreen text-white flex items-center justify-center text-[10px]">
                    <Check className="w-3 h-3" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-charcoal leading-none">
                      Contribution Recorded
                    </div>
                    <div className="text-[10px] text-charcoal-muted mt-0.5">
                      Keep going!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div
            className="flex flex-col space-y-4 transition-all duration-600 ease-editorial"
            style={{
              transitionDelay: isVisible ? "160ms" : "0ms",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-lime text-forest flex items-center justify-center font-extrabold text-sm flex-shrink-0 shadow-xs">
                3
              </div>
              <div>
                <h3 className="text-base font-bold text-charcoal leading-tight">
                  Reach Your Goal
                </h3>
                <p className="text-xs text-charcoal-muted mt-0.5">
                  Watch your savings grow and achieve what matters.
                </p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-surface-light border border-surface-border shadow-xs">
              <img
                src={HOW_IT_WORKS[2].image}
                alt={HOW_IT_WORKS[2].alt}
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs rounded-xl p-2.5 border border-surface-border shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-lime text-forest flex items-center justify-center text-[10px] font-bold">
                    ✓
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-charcoal leading-none">
                      Goal Achieved
                    </div>
                    <div className="text-[10px] text-charcoal-muted mt-0.5">
                      On to the next one.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
