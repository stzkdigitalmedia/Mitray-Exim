"use client";

import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { Container } from "@/components/shared/Container";
import { FiAnchor, FiCheckCircle, FiShield, FiGlobe, FiTruck, FiArrowRight } from "react-icons/fi";

export function MerchantExportGujarat() {
  const advantages = [
    {
      title: "Strategic Maritime Ports",
      desc: "Direct access to Mundra, Kandla, and Pipavav ports in Gujarat ensures rapid vessel turnaround and shortest maritime transit times to Jebel Ali, Dammam, Rotterdam, and Newark.",
      icon: <FiAnchor className="text-xl text-brand-gold" />
    },
    {
      title: "APEDA & FSSAI Certified",
      desc: "Complete phytosanitary documentation, Certificate of Origin, SGS quality inspection, and zero pesticide residue certification for every container load.",
      icon: <FiShield className="text-xl text-brand-gold" />
    },
    {
      title: "Integrated Cold-Chain Network",
      desc: "State-of-the-art packhouses and CA/MA temperature-controlled reefer containers preserve orchard freshness from farm gate to international destination port.",
      icon: <FiTruck className="text-xl text-brand-gold" />
    },
    {
      title: "Flexible Merchant Trade Terms",
      desc: "Transparent FOB, CIF, CFR, and CNF trade contracts with flexible container manifests, custom private labeling, and secure B2B payment terms.",
      icon: <FiGlobe className="text-xl text-brand-gold" />
    }
  ];

  return (
    <section className="relative py-14 md:py-24 bg-white overflow-hidden border-b border-slate-100">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-navy/5 blur-[120px] rounded-full"></div>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Heading and Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-brand-gold"></span>
              <span className="text-[11px] font-black text-brand-gold uppercase tracking-[0.4em]">
                Strategic Trade Hub • Gujarat, India
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-brand-navy tracking-tight leading-[1.1] mb-6">
              Merchant Export Services <br />
              <span className="text-gradient">from Gujarat</span>
            </h2>

            <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed mb-6">
              Headquartered in Gujarat, India, <strong className="text-brand-navy font-bold">Mitray</strong> is a recognized <strong className="text-brand-navy font-bold">export company in Gujarat</strong> operating as an agile, high-compliance <strong className="text-brand-navy font-bold">merchant exporter</strong>. Gujarat is India's agricultural and industrial export powerhouse, home to the country's most advanced deep-water seaports and cold-storage infrastructure.
            </p>

            <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed mb-8">
              As a reliable <strong className="text-brand-navy font-bold">exporter in India</strong> and international <strong className="text-brand-navy font-bold">food exporter</strong>, Mitray bridges the rich agrarian fields of Gujarat, Maharashtra, and Southern India with major global consumption markets across the UAE, Saudi Arabia, Europe, the UK, and North America.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              {advantages.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-slate-100 bg-slate-50/70 hover:bg-white hover:border-brand-gold/30 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-white shadow-xs border border-slate-100">
                      {item.icon}
                    </div>
                    <h4 className="text-xs md:text-sm font-black text-brand-navy uppercase tracking-wider">{item.title}</h4>
                  </div>
                  <p className="text-[11px] md:text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-brand-navy text-white text-xs md:text-sm font-black uppercase tracking-widest rounded-xl hover:bg-brand-gold hover:text-brand-navy transition-all shadow-xl active:scale-95">
              <span>Inquire for Gujarat Port Dispatch</span>
              <FiArrowRight />
            </Link>
          </div>

          {/* Right Column: Visual Terminal */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-brand-navy">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=1000&fit=crop"
                  alt="Mitray Merchant Export Services from Gujarat India"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover opacity-85 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/30 to-transparent"></div>
              </div>

              {/* Floating Port Telemetry Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-brand-navy/90 backdrop-blur-xl border border-white/15 text-white">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-black text-brand-gold uppercase tracking-widest">Gujarat Export Gateways</span>
                  <span className="inline-flex items-center gap-1.5 text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Ports Active
                  </span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between border-b border-white/10 pb-1.5">
                    <span className="text-slate-300">Mundra Port (INMUN1)</span>
                    <span className="font-bold text-white">Reefer Hub</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-1.5">
                    <span className="text-slate-300">Kandla / Deendayal Port</span>
                    <span className="font-bold text-white">Agro-Bulk Terminal</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Pipavav Port (INPAV1)</span>
                    <span className="font-bold text-white">Container Express</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
