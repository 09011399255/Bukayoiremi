import React, { useState } from "react";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react";
import { CONTACT_LINKS, COMPANY } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";

// Social icon helpers for clean, crisp rendering
function SocialIcon({ type, className = "w-4 h-4" }) {
  switch (type) {
    case "whatsapp":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.97.53 1.761.813 2.796.814h.005c3.18 0 5.767-2.586 5.768-5.766 0-1.54-.6-2.988-1.688-4.077-1.09-1.09-2.537-1.688-4.085-1.688zm7.147 1.488c1.503 1.503 2.33 3.501 2.33 5.626 0 4.385-3.57 7.955-7.957 7.955-1.339 0-2.648-.34-3.805-.986l-4.246 1.112 1.134-4.141c-.714-1.233-1.09-2.637-1.09-4.077 0-4.385 3.57-7.955 7.957-7.955 2.126 0 4.123.827 5.627 2.33l.05.136z" />
        </svg>
      );
    case "telegram":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
        </svg>
      );
    case "instagram":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      );
    case "tiktok":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.89 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.34 0 .66.06.96.17V9.45a6.34 6.34 0 0 0-.96-.07A6.34 6.34 0 0 0 3 15.72 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.34-6.28V9.17c1.37.98 3.03 1.57 4.82 1.57V7.29a4.84 4.84 0 0 1-.91-.6z" />
        </svg>
      );
    case "facebook":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    default:
      return <ExternalLink className={className} />;
  }
}

export default function ContactSection() {
  const [sectionRef, isVisible] = useScrollReveal(0.12);
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, key) => {
    navigator.clipboard?.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const { adeyeye, ajayi } = CONTACT_LINKS.founders;

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-surface-light border-t border-surface-border scroll-mt-16 relative overflow-hidden"
    >
      {/* Background soft ambient accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-mint/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-lime/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="editorial-container space-y-16">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto space-y-4 transition-all duration-700 ease-editorial ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint border border-mint-border text-brandgreen text-xs font-semibold tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brandgreen animate-pulse" />
            Direct Leadership & Operations
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal tracking-tight leading-tight">
            Speak directly with the people behind Bukayo-Iremi.
          </h2>
          <p className="text-base text-charcoal-muted leading-relaxed max-w-2xl mx-auto">
            No endless call queues or impersonal answering machines. Reach out
            directly to our founder and co-founder across any channel, or
            connect with our daily market field officers across Ibadan.
          </p>
        </div>

        {/* 2 Primary Founder Leadership Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Founder: Adeyeye Bukola */}
          <div
            className={`bg-white rounded-3xl p-8 border border-surface-border shadow-card flex flex-col justify-between space-y-6 transition-all duration-600 ease-editorial hover:shadow-hover hover:-translate-y-1 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            {/* Top Profile Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-6 border-b border-surface-border">
              <div className="relative">
                <img
                  src={adeyeye.image}
                  alt={adeyeye.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-mint shadow-md"
                />
                <span className="absolute -bottom-1.5 -right-1.5 px-2 py-0.5 rounded-full bg-forest text-white text-[10px] font-bold tracking-wider uppercase shadow-xs">
                  MD
                </span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-xl sm:text-2xl font-black text-charcoal tracking-tight">
                    {adeyeye.name}
                  </h3>
                  <span className="text-[11px] font-bold text-forest bg-mint px-2.5 py-0.5 rounded-full border border-mint-border">
                    {adeyeye.title}
                  </span>
                </div>
                <p className="text-xs font-semibold text-brandgreen">
                  {adeyeye.department}
                </p>
                <p className="text-xs text-charcoal-muted leading-relaxed pt-0.5">
                  Overseeing contributor onboarding, daily collection
                  discipline, and member accounts across Ibadan markets.
                </p>
              </div>
            </div>

            {/* Quick Access Badges (WhatsApp & Call & Email) */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={
                    adeyeye.channels.find((c) => c.type === "whatsapp")?.url
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-forest text-white text-xs font-bold hover:bg-forest-light transition-all flex items-center justify-center gap-2 shadow-xs"
                >
                  <SocialIcon type="whatsapp" className="w-4 h-4 text-lime" />
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-70" />
                </a>

                <a
                  href={`tel:${adeyeye.phone}`}
                  className="py-3 px-4 rounded-xl border border-surface-border text-charcoal hover:bg-surface-light text-xs font-bold transition-all flex items-center justify-center gap-2"
                  title={`Call ${adeyeye.phoneFormatted}`}
                >
                  <Phone className="w-4 h-4 text-forest" />
                  <span>{adeyeye.phoneFormatted}</span>
                </a>
              </div>

              {/* Direct Email row with Copy button */}
              <div className="p-3.5 rounded-xl bg-surface-light border border-surface-border/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-mint text-brandgreen flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase font-bold text-charcoal-muted block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${adeyeye.email}`}
                      className="text-xs font-bold text-charcoal hover:text-forest transition-colors truncate block"
                      title={adeyeye.email}
                    >
                      {adeyeye.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(adeyeye.email, "email-adeyeye")}
                  className="p-2 rounded-lg text-charcoal-muted hover:text-forest hover:bg-white border border-transparent hover:border-surface-border transition-all flex-shrink-0"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedKey === "email-adeyeye" ? (
                    <Check className="w-4 h-4 text-brandgreen" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Complete Social Channels Grid */}
            <div className="pt-4 border-t border-surface-border space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal-muted block">
                Connect on Social Channels
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {adeyeye.channels
                  .filter((c) => c.type !== "email")
                  .map((channel, i) => (
                    <a
                      key={i}
                      href={channel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl border border-surface-border/80 hover:border-forest hover:bg-mint/30 transition-all flex items-center gap-2 group text-left"
                    >
                      <div className="w-7 h-7 rounded-lg bg-surface-light group-hover:bg-forest group-hover:text-lime text-charcoal flex items-center justify-center transition-colors flex-shrink-0">
                        <SocialIcon
                          type={channel.type}
                          className="w-3.5 h-3.5"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] font-bold text-charcoal group-hover:text-forest transition-colors block">
                          {channel.label}
                        </span>
                        <span className="text-[11px] text-charcoal-muted truncate block">
                          {channel.handle}
                        </span>
                      </div>
                    </a>
                  ))}
              </div>
            </div>
          </div>

          {/* Co-Founder: Kolawole Ajayi */}
          <div
            className={`bg-white rounded-3xl p-8 border border-surface-border shadow-card flex flex-col justify-between space-y-6 transition-all duration-600 ease-editorial hover:shadow-hover hover:-translate-y-1 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            {/* Top Profile Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-6 border-b border-surface-border">
              <div className="relative">
                <img
                  src={ajayi.image}
                  alt={ajayi.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-mint shadow-md"
                />
                <span className="absolute -bottom-1.5 -right-1.5 px-2 py-0.5 rounded-full bg-forest text-white text-[10px] font-bold tracking-wider uppercase shadow-xs">
                  OPS
                </span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-xl sm:text-2xl font-black text-charcoal tracking-tight">
                    {ajayi.name}
                  </h3>
                  <span className="text-[11px] font-bold text-forest bg-mint px-2.5 py-0.5 rounded-full border border-mint-border">
                    {ajayi.title}
                  </span>
                </div>
                <p className="text-xs font-semibold text-brandgreen">
                  {ajayi.department}
                </p>
                <p className="text-xs text-charcoal-muted leading-relaxed pt-0.5">
                  Structuring trader credit facilities, working capital
                  assessments, and financial accounting controls.
                </p>
              </div>
            </div>

            {/* Quick Access Badges (WhatsApp & Call & Email) */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={ajayi.channels.find((c) => c.type === "whatsapp")?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-forest text-white text-xs font-bold hover:bg-forest-light transition-all flex items-center justify-center gap-2 shadow-xs"
                >
                  <SocialIcon type="whatsapp" className="w-4 h-4 text-lime" />
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-70" />
                </a>

                <a
                  href={`tel:${ajayi.phone}`}
                  className="py-3 px-4 rounded-xl border border-surface-border text-charcoal hover:bg-surface-light text-xs font-bold transition-all flex items-center justify-center gap-2"
                  title={`Call ${ajayi.phoneFormatted}`}
                >
                  <Phone className="w-4 h-4 text-forest" />
                  <span>{ajayi.phoneFormatted}</span>
                </a>
              </div>

              {/* Direct Email row with Copy button */}
              <div className="p-3.5 rounded-xl bg-surface-light border border-surface-border/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-mint text-brandgreen flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase font-bold text-charcoal-muted block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${ajayi.email}`}
                      className="text-xs font-bold text-charcoal hover:text-forest transition-colors truncate block"
                      title={ajayi.email}
                    >
                      {ajayi.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(ajayi.email, "email-ajayi")}
                  className="p-2 rounded-lg text-charcoal-muted hover:text-forest hover:bg-white border border-transparent hover:border-surface-border transition-all flex-shrink-0"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedKey === "email-ajayi" ? (
                    <Check className="w-4 h-4 text-brandgreen" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Complete Social Channels Grid */}
            <div className="pt-4 border-t border-surface-border space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal-muted block">
                Connect on Social Channels
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {ajayi.channels
                  .filter((c) => c.type !== "email")
                  .map((channel, i) => (
                    <a
                      key={i}
                      href={channel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl border border-surface-border/80 hover:border-forest hover:bg-mint/30 transition-all flex items-center gap-2 group text-left"
                    >
                      <div className="w-7 h-7 rounded-lg bg-surface-light group-hover:bg-forest group-hover:text-lime text-charcoal flex items-center justify-center transition-colors flex-shrink-0">
                        <SocialIcon
                          type={channel.type}
                          className="w-3.5 h-3.5"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] font-bold text-charcoal group-hover:text-forest transition-colors block">
                          {channel.label}
                        </span>
                        <span className="text-[11px] text-charcoal-muted truncate block">
                          {channel.handle}
                        </span>
                      </div>
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* Physical Office & Field Presence Row */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 ease-editorial ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          {/* Card 1: Office Headquarters */}
          <div className="bg-white rounded-2xl p-6 border border-surface-border shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-mint text-forest flex items-center justify-center">
              <MapPin className="w-5 h-5 text-brandgreen" />
            </div>
            <h4 className="text-base font-bold text-charcoal">
              Central Office Location
            </h4>
            <p className="text-sm font-semibold text-forest">
              {CONTACT_LINKS.address}
            </p>
            <div className="flex items-center gap-1.5 text-xs text-charcoal-muted pt-1">
              <Clock className="w-3.5 h-3.5 text-brandgreen flex-shrink-0" />
              <span>{CONTACT_LINKS.officeHours}</span>
            </div>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Open for physical card collection, cycle disbursements, and
              in-person consultations.
            </p>
          </div>

          {/* Card 2: Market Field Service */}
          <div className="bg-white rounded-2xl p-6 border border-surface-border shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-mint text-forest flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-brandgreen" />
            </div>
            <h4 className="text-base font-bold text-charcoal">
              Daily Market Field Visits
            </h4>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Our field officers visit trader stalls across Bodija, Dugbe,
              Agbeni, Oje, and Gbagi markets every morning to record
              contributions right at your shop.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-brandgreen bg-mint px-2.5 py-1 rounded-full">
                <CheckCircle2 className="w-3 h-3" />
                Zero shop downtime for traders
              </span>
            </div>
          </div>

          {/* Card 3: Quick Start Callout */}
          <div className="bg-forest text-white rounded-2xl p-6 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-lime">
                Fast Turnaround
              </span>
              <h4 className="text-lg font-extrabold text-white">
                Ready to begin your savings plan?
              </h4>
              <p className="text-xs text-surface-border/80 leading-relaxed">
                Send a quick greeting on WhatsApp to start today with our team.
                No bulky paperwork required.
              </p>
            </div>
            <a
              href={CONTACT_LINKS.generalSavings}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-5 rounded-xl bg-lime text-forest text-xs font-black hover:bg-lime-hover transition-all flex items-center justify-center gap-2 text-center shadow-xs"
            >
              <span>Message on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
