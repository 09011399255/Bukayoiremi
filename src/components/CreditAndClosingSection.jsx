import React from "react";
import {
  FileText,
  Search,
  CheckCircle2,
  BarChart2,
  ArrowRight,
} from "lucide-react";
import { CONTACT_LINKS } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function CreditAndClosingSection() {
  const [creditRef, creditVisible] = useScrollReveal(0.15);
  const [closingRef, closingVisible] = useScrollReveal(0.15);

  const stages = [
    {
      num: "1",
      title: "1. Request",
      desc: "Tell us about your business need.",
      icon: FileText,
    },
    {
      num: "2",
      title: "2. Review",
      desc: "We assess and get back to you.",
      icon: Search,
    },
    {
      num: "3",
      title: "3. Agree",
      desc: "Clear terms, no surprises.",
      icon: CheckCircle2,
    },
    {
      num: "4",
      title: "4. Repay",
      desc: "Keep your business growing.",
      icon: BarChart2,
    },
  ];

  return (
    <div className="bg-white">
      <div className="editorial-container space-y-12 pb-16">
        {/* 9. CREDIT SUPPORT — Full-Width Deep Forest-Green Section */}
        <section
          id="credit-support"
          ref={creditRef}
          className={`bg-forest text-white rounded-3xl p-8 sm:p-12 lg:p-14 scroll-mt-24 transition-all duration-600 ease-editorial ${
            creditVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
        >
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-forest-light">
            <div className="space-y-3 max-w-2xl">
              <span className="text-[11px] font-bold uppercase tracking-widest text-lime">
                BUSINESS SUPPORT
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Capital when your business needs it.
              </h2>
              <p className="text-sm text-surface-border leading-relaxed">
                Responsible short-term credit to help you take the next step.
                Ask about short-term business credit, eligibility, repayment
                terms and applicable charges.
              </p>
            </div>

            <div className="flex-shrink-0">
              <a
                href={CONTACT_LINKS.creditSupport}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial px-6 py-3 rounded-full border border-white/40 text-white text-xs font-semibold hover:bg-white/10 inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2"
              >
                <span>Learn About Credit Support</span>
                <ArrowRight className="w-3.5 h-3.5 text-lime btn-arrow" />
              </a>
            </div>
          </div>

          {/* 4 Concise Stages (Staggered by 80ms) */}
          <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <div
                  key={stage.num}
                  className="flex items-start gap-4 transition-all duration-500 ease-editorial"
                  style={{
                    transitionDelay: creditVisible ? `${idx * 80}ms` : "0ms",
                    opacity: creditVisible ? 1 : 0,
                    transform: creditVisible
                      ? "translateY(0)"
                      : "translateY(12px)",
                  }}
                >
                  <div className="w-10 h-10 rounded-full bg-white text-forest flex items-center justify-center flex-shrink-0 font-bold shadow-xs">
                    <Icon className="w-5 h-5 text-forest" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white">
                      {stage.title}
                    </h4>
                    <p className="text-xs text-surface-border leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-8 text-[11px] text-surface-border/70">
            *Credit facilities are subject to member eligibility, assessment and
            agreed written terms. Bukayo-Iremi is a community savings
            enterprise, not a licensed commercial deposit bank.
          </div>
        </section>

        {/* 10. CLOSING CTA — Rounded Lime Banner */}
        <section
          ref={closingRef}
          className={`bg-lime rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-subtle transition-all duration-600 ease-editorial ${
            closingVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
        >
          <div className="space-y-2 text-left max-w-xl">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-forest/70 block">
              TAKE THE FIRST STEP
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-forest tracking-tight leading-tight">
              Ready to build your savings rhythm?
            </h3>
            <p className="text-xs sm:text-sm text-forest/85 leading-relaxed">
              Join a community of traders and everyday earners who are creating
              better tomorrows. Speak with our team about a contribution plan
              that fits you.
            </p>
          </div>

          <div className="flex-shrink-0">
            <a
              href={CONTACT_LINKS.generalSavings}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial px-8 py-4 rounded-full bg-forest text-white text-sm font-bold hover:bg-forest-dark inline-flex items-center gap-2 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2"
            >
              <span>Start Saving</span>
              <ArrowRight className="w-4 h-4 text-lime btn-arrow" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
