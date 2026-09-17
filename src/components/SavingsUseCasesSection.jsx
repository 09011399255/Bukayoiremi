import React from "react";
import { ArrowRight } from "lucide-react";
import { USE_CASES, CONTACT_LINKS } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function SavingsUseCasesSection() {
  const [sectionRef, isVisible] = useScrollReveal(0.15);

  return (
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="editorial-container space-y-12">
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto space-y-2 transition-all duration-600 ease-editorial ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
            Real plans. Real progress.
          </h2>
          <p className="text-sm text-charcoal-muted">
            From daily needs to long-term dreams, we're here for your journey.
          </p>
        </div>

        {/* Four Clean Image Cards (Staggered 80ms, interactive lift translateY(-3px), restrained photo zoom 1.025, arrow +3px) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {USE_CASES.map((card, idx) => (
            <a
              key={idx}
              href={CONTACT_LINKS.generalSavings}
              target="_blank"
              rel="noopener noreferrer"
              className="card-interactive group bg-white rounded-2xl border border-surface-border overflow-hidden flex flex-col justify-between cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 active:scale-[0.98]"
              style={{
                transitionDelay: isVisible ? `${idx * 80}ms` : "0ms",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
              }}
            >
              {/* Image Container with restrained zoom (1.025) */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-surface-light border-b border-surface-border">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="card-photo-zoom w-full h-full object-cover"
                />
              </div>

              {/* Text & Icon Content */}
              <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <h3 className="text-sm font-bold text-charcoal leading-snug group-hover:text-forest transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                {/* Small Lime Circle with Arrow (translates 3px on hover) */}
                <div className="pt-2 flex justify-start">
                  <div className="w-7 h-7 rounded-full bg-lime text-forest flex items-center justify-center shadow-xs group-hover:bg-lime-hover transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 text-forest btn-arrow" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
