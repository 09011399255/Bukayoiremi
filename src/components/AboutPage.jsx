import React from "react";
import {
  ArrowDown,
  ArrowRight,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import { FOUNDERS, CONTACT_LINKS } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function AboutPage({ onBackToHome }) {
  const { director, accountant } = FOUNDERS;

  const [storyRef, storyVisible] = useScrollReveal(0.15);
  const [f1Ref, f1Visible] = useScrollReveal(0.15);
  const [f2Ref, f2Visible] = useScrollReveal(0.15);
  const [guidesRef, guidesVisible] = useScrollReveal(0.15);
  const [ctaRef, ctaVisible] = useScrollReveal(0.15);

  const scrollToStory = () => {
    const el = document.getElementById("our-story");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white min-h-screen pt-12 pb-24 text-charcoal">
      <div className="editorial-container space-y-16 sm:space-y-20">
        {/* 1. HERO SECTION (Structured Hero Entrance) */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
          <div className="animate-hero-eyebrow text-[11px] font-bold uppercase tracking-widest text-brandgreen">
            OUR PEOPLE, OUR STORY
          </div>

          <h1 className="animate-hero-headline text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
            <span className="text-charcoal block">Meet the people</span>
            <span className="text-brandgreen block mt-1">
              behind your progress.
            </span>
          </h1>

          <p className="animate-hero-copy text-sm sm:text-base text-charcoal-muted max-w-xl mx-auto leading-relaxed pt-1">
            Accounting backgrounds. Shared purpose. A personal approach to
            savings and business support in Ibadan.
          </p>

          <div className="animate-hero-actions pt-4 flex justify-center">
            <button
              onClick={scrollToStory}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-charcoal hover:text-brandgreen transition-colors group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 rounded-full px-3 py-1"
            >
              <ArrowDown className="w-3.5 h-3.5 text-forest group-hover:translate-y-0.5 transition-transform" />
              <span>Get to know us</span>
            </button>
          </div>
        </div>

        {/* Divider line */}
        <div className="border-t border-surface-border"></div>

        {/* 2. OUR STORY SECTION (Scroll Reveal) */}
        <div
          id="our-story"
          ref={storyRef}
          className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-start scroll-mt-24 transition-all duration-600 ease-editorial ${
            storyVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
        >
          <div className="md:col-span-3">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-charcoal block">
                OUR STORY
              </span>
              <div className="h-1 w-10 bg-lime rounded-full"></div>
            </div>
          </div>

          <div className="md:col-span-9 md:border-l md:border-surface-border md:pl-8">
            <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed max-w-2xl">
              Established in 2023, Bukayo-Iremi Multipurpose Ventures offers
              daily contribution plans and short-term business loans. Behind it
              is a husband-and-wife team with backgrounds in accounting,
              investment services, education and community service.
            </p>
          </div>
        </div>

        {/* 3. FOUNDER 1: Adeyeye Oluwabukola (Portrait first, text 100ms later) */}
        <div
          ref={f1Ref}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* Photo Left - Appears first */}
          <div
            className="lg:col-span-5 space-y-2 transition-all duration-600 ease-editorial"
            style={{
              opacity: f1Visible ? 1 : 0,
              transform: f1Visible ? "translateY(0)" : "translateY(16px)",
            }}
          >
            <div className="rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-square bg-mint border border-surface-border shadow-xs">
              <img
                src={director.image}
                alt="Adeyeye Oluwabukola - Founder and Director"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Text Right - Follows after 100ms */}
          <div
            className="lg:col-span-7 space-y-5 lg:pl-4 transition-all duration-600 ease-editorial"
            style={{
              transitionDelay: f1Visible ? "100ms" : "0ms",
              opacity: f1Visible ? 1 : 0,
              transform: f1Visible ? "translateY(0)" : "translateY(16px)",
            }}
          >
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-charcoal block">
                FOUNDER & DIRECTOR
              </span>
              <div className="h-1 w-10 bg-lime rounded-full"></div>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              <span className="text-charcoal block">Adeyeye</span>
              <span className="text-brandgreen block">Oluwabukola</span>
            </h2>

            <div className="space-y-3 text-sm text-charcoal-muted leading-relaxed max-w-xl">
              <p>
                Oluwabukola earned a National Diploma in Accounting from Crown
                Polytechnic, Ado-Ekiti.
              </p>
              <p>
                After gaining experience at Gracious Grace Investment in Ibadan,
                she established Bukayo-Iremi Multipurpose Ventures in 2023.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={
                  CONTACT_LINKS.founders.adeyeye.channels.find(
                    (c) => c.type === "whatsapp",
                  )?.url
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-forest text-white text-xs font-bold hover:bg-forest-light transition-all shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5 text-lime" />
                <span>
                  WhatsApp: {CONTACT_LINKS.founders.adeyeye.phoneFormatted}
                </span>
              </a>
              <a
                href={`mailto:${CONTACT_LINKS.founders.adeyeye.email}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-surface-border text-charcoal hover:bg-white text-xs font-semibold transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-brandgreen" />
                <span>{CONTACT_LINKS.founders.adeyeye.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4. FOUNDER 2: Ajayi Kolawole Luke (Portrait first, text 100ms later) */}
        <div
          ref={f2Ref}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* Text Left - Follows after 100ms */}
          <div
            className="lg:col-span-7 space-y-5 order-2 lg:order-1 lg:pr-4 transition-all duration-600 ease-editorial"
            style={{
              transitionDelay: f2Visible ? "100ms" : "0ms",
              opacity: f2Visible ? 1 : 0,
              transform: f2Visible ? "translateY(0)" : "translateY(16px)",
            }}
          >
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-charcoal block">
                CO-FOUNDER & CHIEF ACCOUNTANT
              </span>
              <div className="h-1 w-10 bg-lime rounded-full"></div>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-charcoal leading-tight">
              Ajayi Kolawole Luke
            </h2>

            <div className="space-y-3 text-sm text-charcoal-muted leading-relaxed max-w-xl">
              <p>
                Kolawole holds an ND and HND in Accounting from The Polytechnic,
                Ibadan, with Upper Credit.
              </p>
              <p>
                He completed NYSC in 2012–2013, taking part in immunisation
                activities, and later worked as a teacher and maintenance
                officer at Larikan International School in Ibadan. He now serves
                as Chief Accountant at Bukayo-Iremi.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={
                  CONTACT_LINKS.founders.ajayi.channels.find(
                    (c) => c.type === "whatsapp",
                  )?.url
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-forest text-white text-xs font-bold hover:bg-forest-light transition-all shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5 text-lime" />
                <span>
                  WhatsApp: {CONTACT_LINKS.founders.ajayi.phoneFormatted}
                </span>
              </a>
              <a
                href={`mailto:${CONTACT_LINKS.founders.ajayi.email}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-surface-border text-charcoal hover:bg-white text-xs font-semibold transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-brandgreen" />
                <span>{CONTACT_LINKS.founders.ajayi.email}</span>
              </a>
            </div>
          </div>

          {/* Photo Right - Appears first */}
          <div
            className="lg:col-span-5 space-y-2 order-1 lg:order-2 transition-all duration-600 ease-editorial"
            style={{
              opacity: f2Visible ? 1 : 0,
              transform: f2Visible ? "translateY(0)" : "translateY(16px)",
            }}
          >
            <div className="rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-square bg-mint border border-surface-border shadow-xs">
              <img
                src={accountant.image}
                alt="Ajayi Kolawole Luke - Co-founder and Chief Accountant"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* 5. "WHAT GUIDES US." PANEL (Pale Mint Background with Staggered Columns) */}
        <div
          ref={guidesRef}
          className={`bg-mint rounded-3xl p-8 sm:p-12 border border-mint-border space-y-8 transition-all duration-600 ease-editorial ${
            guidesVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
        >
          <h3 className="text-2xl sm:text-3xl font-extrabold text-charcoal tracking-tight">
            What guides us.
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x md:divide-mint-border">
            {/* Column 01 */}
            <div
              className="space-y-1.5 transition-all duration-500 ease-editorial"
              style={{
                transitionDelay: guidesVisible ? "0ms" : "0ms",
                opacity: guidesVisible ? 1 : 0,
                transform: guidesVisible ? "translateY(0)" : "translateY(12px)",
              }}
            >
              <span className="text-xs font-bold text-brandgreen block">
                01
              </span>
              <h4 className="text-sm sm:text-base font-bold text-charcoal">
                Discipline
              </h4>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Small, consistent steps towards meaningful goals.
              </p>
            </div>

            {/* Column 02 */}
            <div
              className="space-y-1.5 md:pl-8 transition-all duration-500 ease-editorial"
              style={{
                transitionDelay: guidesVisible ? "80ms" : "0ms",
                opacity: guidesVisible ? 1 : 0,
                transform: guidesVisible ? "translateY(0)" : "translateY(12px)",
              }}
            >
              <span className="text-xs font-bold text-brandgreen block">
                02
              </span>
              <h4 className="text-sm sm:text-base font-bold text-charcoal">
                Clarity
              </h4>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Understand your plan and its terms before you begin.
              </p>
            </div>

            {/* Column 03 */}
            <div
              className="space-y-1.5 md:pl-8 transition-all duration-500 ease-editorial"
              style={{
                transitionDelay: guidesVisible ? "160ms" : "0ms",
                opacity: guidesVisible ? 1 : 0,
                transform: guidesVisible ? "translateY(0)" : "translateY(12px)",
              }}
            >
              <span className="text-xs font-bold text-brandgreen block">
                03
              </span>
              <h4 className="text-sm sm:text-base font-bold text-charcoal">
                Human connection
              </h4>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Real conversations with people you can reach.
              </p>
            </div>
          </div>
        </div>

        {/* 6. OUR COMMUNITY TEAM & FIELD OFFICERS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-2">
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-charcoal block">
                OUR COMMUNITY TEAM
              </span>
              <div className="h-1 w-10 bg-lime rounded-full"></div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-charcoal leading-tight">
              On the ground,
              <br />
              <span className="text-brandgreen">every single day.</span>
            </h3>

            <p className="text-sm text-charcoal-muted leading-relaxed">
              Behind Bukayo-Iremi is a dedicated team of field collection
              officers and coordinators who visit Ibadan's markets and
              neighborhoods daily. They meet contributors at their shops, record
              daily savings on official scheme cards, and ensure every
              transaction is accountable, friendly, and trusted.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-surface-light border border-surface-border shadow-card">
              <img
                src="/images/team-officers.png"
                alt="Bukayo-Iremi field collection team and leadership holding daily savings contribution cards"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* 6. CLOSING CTA BANNER */}
        <div
          ref={ctaRef}
          className={`text-center max-w-2xl mx-auto space-y-6 pt-4 pb-6 transition-all duration-600 ease-editorial ${
            ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            <span className="text-charcoal block">
              Your next chapter starts
            </span>
            <span className="text-brandgreen block mt-1">
              with a conversation.
            </span>
          </h3>

          <div>
            <a
              href={CONTACT_LINKS.generalSavings}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial px-8 py-4 rounded-full bg-lime text-forest text-sm font-bold hover:bg-lime-hover shadow-subtle inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2"
            >
              <span>Speak with our team</span>
              <ArrowRight className="w-4 h-4 text-forest btn-arrow" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
