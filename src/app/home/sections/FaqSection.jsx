"use client";

import { useState } from "react";
import Link from "next/link";
import { FiChevronDown, FiShield, FiActivity } from "react-icons/fi";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Which countries does MITRAY EXIM export to?",
      a: "Our network spans core global trade corridors including UAE, Saudi Arabia, Qatar, Oman, Kuwait, UK, USA, and major European markets.",
    },
    {
      q: "What is your typical export lead time?",
      a: "Transit times are optimized by region: Gulf (15-20 days), UK/Europe (25-30 days), and North America (30-35 days).",
    },
    {
      q: "What certifications does MITRAY EXIM hold?",
      a: "MITRAY EXIM maintains a 100% verified compliance standard. Our active certifications include APEDA, FSSAI, IEC, FIEO, and Spice Board India.",
    },
    {
      q: "Do you provide custom packaging for vegetables?",
      a: "We offer tailored B2B packaging options. Our solutions meet specific market safety regulations while keeping the produce fresh and intact.",
    },
    {
      q: "What payment methods are accepted?",
      a: "We facilitate secure global transactions via LC (Letter of Credit), TT (Telegraphic Transfer), and other internationally recognized B2B payment methods.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-12 md:py-20 overflow-hidden bg-white">
      
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 blur-[120px] rounded-full animate-subtle-float"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-navy/5 blur-[120px] rounded-full animate-subtle-float delay-700"></div>
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        
        {/* STANDARDIZED HEADER ARCHITECTURE */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-brand-gold animate-line-grow w-0"></div>
            <span className="text-[10px] font-black text-brand-gold uppercase tracking-[0.5em] animate-reveal opacity-0">FAQs</span>
            <div className="h-px bg-brand-gold animate-line-grow w-0"></div>
          </div>
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-brand-navy mb-6 tracking-tighter leading-[0.85] animate-reveal opacity-0">
            COMMON <br />
            <span className="text-gradient">QUERIES.</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-lg font-medium max-w-2xl mx-auto leading-relaxed uppercase tracking-tight opacity-0 animate-reveal delay-300">
            Answers to frequently asked questions about MITRAY EXIM's global export operations and quality standards.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="relative group animate-reveal opacity-0" style={{ animationDelay: `${400 + (idx * 100)}ms` }}>
              <div className={`relative glass-card rounded-xl md:rounded-2xl overflow-hidden transition-all duration-700 ${
                openIndex === idx ? 'bg-white shadow-xl border-brand-gold/20' : 'bg-slate-50/50 hover:bg-white border-transparent'
              }`}>
                <button
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={openIndex === idx}
                  className="w-full px-6 py-5 md:px-10 md:py-6 flex items-center justify-between text-left transition-all"
                >
                  <div className="flex items-center gap-4 md:gap-6 flex-1">
                    <div className={`shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center transition-all duration-700 ${
                      openIndex === idx
                        ? "bg-brand-navy text-brand-gold rotate-12 shadow-lg scale-110"
                        : "bg-white text-slate-300 group-hover:bg-brand-gold/10 group-hover:text-brand-gold group-hover:rotate-6"
                    }`}>
                      <FiShield className="text-xl md:text-2xl" />
                    </div>
                    <h3 className={`text-sm md:text-lg font-black uppercase tracking-tighter transition-colors duration-500 ${
                      openIndex === idx ? 'text-brand-navy' : 'text-slate-400 group-hover:text-brand-navy'
                    }`}>
                      {faq.q}
                    </h3>
                  </div>
                  
                  <div className={`shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center border transition-all duration-700 ${
                    openIndex === idx
                      ? "bg-brand-gold border-brand-gold text-brand-navy rotate-180"
                      : "bg-white border-slate-100 text-slate-300 group-hover:border-brand-gold/30 group-hover:text-brand-gold"
                  }`}>
                    <FiChevronDown className="text-lg md:text-xl" />
                  </div>
                </button>

                <div className={`overflow-hidden transition-all duration-700 ease-in-out ${
                  openIndex === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}>
                  <div className="px-6 pb-6 md:px-10 md:pb-8 md:pl-[96px]">
                    <div className="pt-6 border-t border-slate-100 animate-reveal">
                      <p className="text-slate-500 text-xs md:text-base font-bold uppercase tracking-widest leading-relaxed opacity-60">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER ACTION */}
        <div className="mt-12 text-center animate-reveal delay-1000 opacity-0">
           <Link href="/contact" className="inline-block group relative px-8 py-4 bg-brand-navy text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-brand-gold hover:text-brand-navy transition-all duration-700 shadow-xl overflow-hidden active:scale-95">
                 <span className="relative z-10 flex items-center gap-3">
                    <FiActivity className="group-hover:rotate-12 transition-transform" /> Contact Our Support Desk
                 </span>
              </Link>
        </div>
      </div>
    </section>
  );
}
