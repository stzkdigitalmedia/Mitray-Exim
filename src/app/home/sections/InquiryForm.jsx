"use client";

import { useState } from "react";
import { FiSend, FiUser, FiBriefcase, FiMail, FiPhone, FiMessageSquare, FiShield, FiActivity, FiZap, FiArrowRight } from "react-icons/fi";

export function InquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Inquiry received successfully! Our export team will get back to you shortly.");
    }, 2000);
  };

  return (
    <section className="relative py-12 md:py-20 overflow-hidden bg-white">

      {/* ACCENT BACKGROUNDS */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-gold/5 blur-[120px] rounded-full animate-subtle-float"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-navy/5 blur-[120px] rounded-full animate-subtle-float delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">

        {/* SECTION HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-brand-gold animate-line-grow w-0"></div>
            <span className="text-[10px] font-black text-brand-gold uppercase tracking-[0.5em] animate-reveal opacity-0">Start Your Partnership</span>
            <div className="h-px bg-brand-gold animate-line-grow w-0"></div>
          </div>
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-brand-navy mb-6 tracking-tighter leading-[0.85] animate-reveal delay-100 opacity-0">
            START YOUR <br />
            <span className="text-gradient">PARTNERSHIP.</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-lg font-medium max-w-2xl mx-auto leading-relaxed uppercase tracking-tight opacity-0 animate-reveal delay-300">
            Connect with MITRAY EXIM to source premium quality fruits and vegetables directly from farms in India.
          </p>
        </div>

        {/* CONTAINER CARD */}
        <div className="relative glass-panel rounded-2xl md:rounded-[2rem] p-8 md:p-12 shadow-[0_60px_120px_-30px_rgba(44,74,94,0.12)] border-white bg-slate-50/50 backdrop-blur-2xl animate-reveal delay-500 opacity-0">
          <form onSubmit={handleSubmit} className="max-w-5xl mx-auto space-y-8">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { id: 'name', label: 'Full Name', icon: <FiUser />, placeholder: 'E.g. Harshil Shah', type: 'text' },
                { id: 'company', label: 'Company Name', icon: <FiBriefcase />, placeholder: 'E.g. Mitray Exim', type: 'text' },
                { id: 'email', label: 'Email Address', icon: <FiMail />, placeholder: 'name@company.com', type: 'email' },
                { id: 'phone', label: 'Phone Number', icon: <FiPhone />, placeholder: 'E.g. +91 7778886559', type: 'text' },
              ].map((field, idx) => (
                <div key={field.id} className="space-y-2 animate-reveal" style={{ animationDelay: `${700 + (idx * 100)}ms` }}>
                  <label className="flex items-center gap-2 text-[10px] font-black text-brand-navy uppercase tracking-[0.2em] opacity-50 ml-4">
                    {field.icon} {field.label}
                  </label>
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-brand-gold/15 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition duration-700"></div>
                    <input
                      type={field.type}
                      required
                      className="relative w-full bg-white/60 backdrop-blur-xl border border-white rounded-xl px-6 py-4 focus:bg-white focus:shadow-2xl outline-none transition-all duration-700 text-brand-navy font-bold placeholder:text-slate-300 text-sm"
                      placeholder={field.placeholder}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-2 animate-reveal delay-1000">
              <label className="flex items-center gap-2 text-[10px] font-black text-brand-navy uppercase tracking-[0.2em] opacity-50 ml-4">
                <FiMessageSquare /> YOUR INQUIRY & PACKAGING REQUIREMENTS
              </label>
              <div className="relative group">
                <div className="absolute -inset-1 bg-brand-gold/15 rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition duration-700"></div>
                <textarea
                  rows={4}
                  required
                  className="relative w-full bg-white/60 backdrop-blur-xl border border-white rounded-2xl px-8 py-5 focus:bg-white focus:shadow-2xl outline-none transition-all duration-700 text-brand-navy font-bold placeholder:text-slate-300 resize-none text-sm"
                  placeholder="Specify variety (Vegetables/Fruits), volume, and destination port..."
                ></textarea>
              </div>
            </div>

            <div className="pt-4 text-center animate-reveal delay-1000">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`group relative w-full md:w-auto px-12 py-5 bg-brand-navy rounded-xl text-white font-black uppercase tracking-[0.4em] text-[10px] shadow-2xl hover:bg-brand-gold hover:text-brand-navy transition-all duration-700 active:scale-[0.98] disabled:opacity-50 overflow-hidden`}
              >
                <span className="relative z-10 flex items-center justify-center gap-6">
                  {isSubmitting ? 'Sending...' : 'Send Inquiry Message'}
                  {!isSubmitting && <FiArrowRight className="text-xl group-hover:translate-x-2 transition-transform duration-500" />}
                </span>
              </button>

              <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 border-t border-slate-200 pt-8">
                <div className="flex items-center gap-3">
                  <FiShield className="text-emerald-500 text-xl animate-pulse" />
                  <div className="text-left">
                    <p className="text-[9px] font-black text-brand-navy uppercase tracking-widest leading-none">Quality Assurance</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FiActivity className="text-brand-gold text-xl animate-pulse" />
                  <div className="text-left">
                    <p className="text-[9px] font-black text-brand-navy uppercase tracking-widest leading-none">Direct Sourcing</p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
