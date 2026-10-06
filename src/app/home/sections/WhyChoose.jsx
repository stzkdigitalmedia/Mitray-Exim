"use client";

const reasons = [
  {
    number: "01",
    title: "India's Finest Produce",
    text: "Sourcing premium vegetables, fresh fruits, and high-grade spices directly from India's most fertile agricultural regions.",
    gradient: "from-blue-500/80 to-cyan-500/80"
  },
  {
    number: "02",
    title: "Global Supply Chain",
    text: "Precision cold chain logistics and streamlined export protocols ensuring nature's freshness reaches global markets.",
    gradient: "from-brand-navy/80 to-brand-navy/60"
  },
  {
    number: "03",
    title: "Certified Excellence",
    text: "Full compliance with APEDA, FSSAI, and international food safety standards for reliable merchant export operations.",
    gradient: "from-brand-gold/80 to-brand-gold/60"
  },
  {
    number: "04",
    title: "Strategic Partnerships",
    text: "Building long-term value through transparent sourcing, ethical farming practices, and competitive global pricing.",
    gradient: "from-emerald-500/80 to-teal-500/80"
  },
];

export function WhyChoose() {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden bg-slate-50">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10">
        
        {/* STANDARDIZED HEADER ARCHITECTURE */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-16">
           <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px bg-brand-gold animate-line-grow w-0"></div>
              <span className="text-[10px] font-black text-brand-gold uppercase tracking-[0.5em] animate-reveal opacity-0">Global Agricultural Trade</span>
              <div className="h-px bg-brand-gold animate-line-grow w-0"></div>
           </div>
           <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-brand-navy mb-6 tracking-tighter leading-tight animate-reveal opacity-0">
              Agricultural Products <br />
              <span className="text-gradient">Exporter Worldwide</span>
           </h2>
           <p className="text-sm sm:text-base md:text-lg text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed uppercase tracking-tight opacity-0 animate-reveal delay-300">
              As a premier agriculture products exporter and merchant exporter in India, Mitray connects international importers to India's most fertile agricultural belts with certified cold-chain logistics and rigorous quality control.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative glass-card p-8 md:p-10 rounded-xl md:rounded-2xl flex flex-col h-full animate-reveal opacity-0 hover-lift"
              style={{ animationDelay: `${500 + (index * 150)}ms` }}
            >
              {/* Number Background */}
              <span className="absolute top-6 right-8 text-7xl font-black text-slate-200/20 group-hover:text-brand-gold/10 transition-colors duration-700 pointer-events-none">
                {reason.number}
              </span>

              <div className="relative z-10 flex flex-col h-full">
                <div className={`w-12 h-12 bg-gradient-to-br ${reason.gradient} backdrop-blur-md rounded-xl flex items-center justify-center text-white mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500 border border-white/20`}>
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                   </svg>
                </div>
                
                <h3 className="text-xl font-black mb-3 text-brand-navy tracking-tight group-hover:text-brand-gold transition-colors duration-300">
                  {reason.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed font-bold uppercase tracking-tight opacity-70 line-clamp-3">
                  {reason.text}
                </p>

                {/* Bottom Accent */}
                <div className="mt-auto pt-6">
                   <div className="h-px w-10 bg-slate-100 group-hover:w-full group-hover:bg-brand-gold transition-all duration-700 rounded-sm opacity-30"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
