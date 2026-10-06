"use client";
 
import { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { FiShield, FiFileText, FiGlobe, FiEye, FiLock, FiCheckCircle, FiChevronRight } from "react-icons/fi";
 
const SECTIONS = [
  { id: "1-sourcing", title: "1. Sourcing Protocols", icon: <FiGlobe /> },
  { id: "2-compliance", title: "2. Regulatory Standards", icon: <FiShield /> },
  { id: "3-data-collection", title: "3. Information Manifests", icon: <FiFileText /> },
  { id: "4-logistics", title: "4. Logistics Integration", icon: <FiCheckCircle /> },
  { id: "5-security", title: "5. Security & Vault Controls", icon: <FiLock /> },
  { id: "6-audit", title: "6. Audit & Review Rights", icon: <FiEye /> },
];
 
export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);
 
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
 
      for (const section of SECTIONS) {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
 
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
 
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 140; // perfect clearance for sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
 
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };
 
  return (
    <div className="bg-white">
      <PageHero
        badge="MITRAY EXIM COMPLIANCE"
        title="Privacy. Policy."
        description="Access our institutional data privacy manifest and compliance protocols. Engineered to safeguard global agricultural procurement data."
        backgroundImage="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Privacy Policy' }
        ]}
      />
 
      <div className="relative z-10 pt-12 md:pt-20 pb-20 md:pb-32 bg-[#F9FAFB]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">
            
            {/* LEFT: STICKY TOC NAVIGATION INDEX - STRIPE STYLE */}
            <div className="lg:col-span-3 lg:sticky lg:top-32 space-y-6 hidden lg:block">
              <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-50">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div>
                  <span className="text-[10px] font-black text-brand-navy uppercase tracking-[0.3em]">Document Directory</span>
                </div>
                <div className="space-y-2">
                  {SECTIONS.map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => scrollToSection(sec.id)}
                      className={`w-full text-left flex items-center gap-4 px-4 py-3.5 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all duration-300 ${
                        activeSection === sec.id
                          ? "bg-brand-navy text-white shadow-md scale-[1.02]"
                          : "text-slate-400 hover:text-brand-navy hover:bg-slate-50"
                      }`}
                    >
                      <span className={`text-base transition-colors ${
                        activeSection === sec.id ? "text-brand-gold" : "text-slate-300"
                      }`}>{sec.icon}</span>
                      <span className="truncate">{sec.title}</span>
                    </button>
                  ))}
                </div>
              </div>
 
              <div className="p-8 bg-brand-navy text-white rounded-3xl relative overflow-hidden group shadow-xl">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 blur-3xl"></div>
                 <h4 className="text-xs font-black uppercase tracking-widest text-brand-gold mb-3">Audit Questions?</h4>
                 <p className="text-[11px] font-bold text-white/40 uppercase tracking-widest leading-relaxed mb-6">
                   Our legal compliance officer desk is active 24/7 for security queries.
                 </p>
                 <Link href="/contact" className="inline-flex items-center gap-3 text-[10px] font-black text-brand-gold uppercase tracking-[0.2em] group-hover:gap-5 transition-all">
                   Contact Compliance <FiChevronRight />
                 </Link>
              </div>
            </div>
 
            {/* RIGHT: MAIN INSTITUTIONAL POLICY CONTENT */}
            <div className="lg:col-span-9 space-y-12">
               
               {/* DOCUMENT HEADER STATS */}
               <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm flex flex-wrap justify-between items-center gap-6 animate-reveal">
                  <div>
                     <span className="text-[8px] font-black text-brand-gold uppercase tracking-[0.3em]">Institutional Verification</span>
                     <h2 className="text-xl md:text-2xl font-black text-brand-navy uppercase tracking-tighter mt-1">MITRAY-EXIM PRIVACY MANIFEST</h2>
                  </div>
                  <div className="flex gap-8">
                     <div>
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Effective Date</p>
                        <p className="text-xs md:text-sm font-black text-brand-navy uppercase tracking-widest mt-1">June 02, 2026</p>
                     </div>
                     <div>
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Protocol Status</p>
                        <p className="text-xs md:text-sm font-black text-emerald-500 uppercase tracking-widest mt-1 flex items-center gap-2">Verified Active</p>
                     </div>
                  </div>
               </div>
 
               {/* CONTENT SECTIONS PANEL */}
               <div className="bg-white border border-slate-100 p-8 md:p-16 rounded-[2.5rem] shadow-sm space-y-16 animate-reveal delay-300">
                  
                  {/* INTRODUCTION STATEMENT */}
                  <div className="space-y-4">
                     <h3 className="text-2xl font-black text-brand-navy uppercase tracking-tighter leading-none">1. Scope of the Manifest</h3>
                     <p className="text-sm md:text-base text-slate-500 font-bold uppercase tracking-tight leading-relaxed opacity-85">
                       At MITRAY EXIM, we maintain the agricultural export industry's most rigorous security protocols. This Privacy Policy outlines how our global trade desks collect, synchronize, secure, and process data relating to our international trade partners, institutional procurers, custom clearing agents, and farming supply partners. We are fully committed to protecting corporate transaction logs and quality control records in accordance with global food safety, customs trade, and logistics framework acts.
                     </p>
                  </div>
 
                  <hr className="border-slate-100" />
 
                  {/* SECTIONS */}
                  <div id="1-sourcing" className="space-y-6 scroll-mt-24">
                     <div className="flex items-center gap-3 text-brand-gold">
                        <FiGlobe className="text-2xl" />
                        <h3 className="text-xl md:text-2xl font-black text-brand-navy uppercase tracking-tighter">1. Global Procurement & Sourcing</h3>
                     </div>
                     <p className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-tight leading-loose opacity-80">
                       We procure farm-fresh vegetables, organic fruits, spices, and premium grains directly from verified farmers and trading platforms across India. Sourcing records include geographical farm metrics, soil quality clearance certificates, harvest timelines, and transaction values.
                     </p>
                     <div className="p-6 bg-slate-50 rounded-2xl space-y-3">
                        <p className="text-[9px] font-black text-brand-navy uppercase tracking-widest">Active Data Points Tracked:</p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                           {[
                             "Farming coordinates and orchard locations",
                             "Crop pesticides testing certificates",
                             "Agricultural sourcing price parameters",
                             "Organic certification numbers (where applicable)"
                           ].map((item, i) => (
                             <li key={i} className="flex items-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0"></span>
                                {item}
                             </li>
                           ))}
                        </ul>
                     </div>
                  </div>
 
                  <div id="2-compliance" className="space-y-6 scroll-mt-24">
                     <div className="flex items-center gap-3 text-brand-gold">
                        <FiShield className="text-2xl" />
                        <h3 className="text-xl md:text-2xl font-black text-brand-navy uppercase tracking-tighter">2. Regulatory & Phytosanitary Standards</h3>
                     </div>
                     <p className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-tight leading-loose opacity-80">
                       Compliance with regulatory organizations is essential to our export flow. We process corporate registration numbers, Import-Export Codes (IEC), custom declarations, and validation parameters with the Federation of Indian Export Organisations (FIEO), APEDA, FSSAI, and international food regulatory agencies in import destinations (such as GCC Customs Authorities, US FDA, and European Food Safety Authorities).
                     </p>
                     <p className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-tight leading-loose opacity-80">
                       phytosanitary audits and quality inspections are recorded digitally to ensure maximum crop trace-back. Any transactional or quarantine logging is encrypted and made available during customs synchronization.
                     </p>
                  </div>
 
                  <div id="3-data-collection" className="space-y-6 scroll-mt-24">
                     <div className="flex items-center gap-3 text-brand-gold">
                        <FiFileText className="text-2xl" />
                        <h3 className="text-xl md:text-2xl font-black text-brand-navy uppercase tracking-tighter">3. Sourced Sourcing & Client Manifests</h3>
                     </div>
                     <p className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-tight leading-loose opacity-80">
                       When an institutional importer registers a request via the MIT-24 Procurement Gateway or WhatsApp, our secure systems compile client profile data. This data includes corporate names, point of contact numbers, institutional emails, target port codes, custom clearing agent identification, and product specifications (size grade, sorting density, container packing metrics).
                     </p>
                     <p className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-tight leading-loose opacity-80">
                       We collect logs of browser visits, page interactions, IP tracking, and product search vectors to maintain our real-time trade telemetry interfaces and prevent malicious usage.
                     </p>
                  </div>
 
                  <div id="4-logistics" className="space-y-6 scroll-mt-24">
                     <div className="flex items-center gap-3 text-brand-gold">
                        <FiCheckCircle className="text-2xl" />
                        <h3 className="text-xl md:text-2xl font-black text-brand-navy uppercase tracking-tighter">4. Third-Party Supply & Logistics Sync</h3>
                     </div>
                     <p className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-tight leading-loose opacity-80">
                       To ensure nature's produce reaches strategic international ports in perfect quality, we coordinate with cold chain storage operators, marine container shipping lines, port clearance desks, and local transport agencies. 
                     </p>
                     <p className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-tight leading-loose opacity-80">
                       Limited, highly-regulated subsets of shipment manifests (bill of lading details, reefer temperature graphs, packing lists, invoice weights) are shared with logistics coordinators to execute secure ocean freight transit and prevent global trade non-compliance.
                     </p>
                  </div>
 
                  <div id="5-security" className="space-y-6 scroll-mt-24">
                     <div className="flex items-center gap-3 text-brand-gold">
                        <FiLock className="text-2xl" />
                        <h3 className="text-xl md:text-2xl font-black text-brand-navy uppercase tracking-tighter">5. Security, Encryption & Vault Controls</h3>
                     </div>
                     <p className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-tight leading-loose opacity-80">
                       Corporate partner information is vaulted inside secure databases guarded by multi-layer firewalls and standard modern encryption keys (AES-256). All communications with the procurement terminals are structured over secure TLS 1.3 protocol loops. 
                     </p>
                     <p className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-tight leading-loose opacity-80">
                       Only certified officers at MITRAY EXIM hold access logs to active transaction manifests. Physical document vaults for customs paperwork and bank trade letters are locked in fireproof institutional archives with CCTV security.
                     </p>
                  </div>
 
                  <div id="6-audit" className="space-y-6 scroll-mt-24">
                     <div className="flex items-center gap-3 text-brand-gold">
                        <FiEye className="text-2xl" />
                        <h3 className="text-xl md:text-2xl font-black text-brand-navy uppercase tracking-tighter">6. Institutional Audit & Partner Rights</h3>
                     </div>
                     <p className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-tight leading-loose opacity-80">
                       Importers and supply-chain partners hold complete rights to access, audit, modify, or command the erasure of their vaulted transaction profiles. If you require a complete export log list or wish to cancel an active communication protocol, you may initialize a request directly with our compliance desk. 
                     </p>
                     <p className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-tight leading-loose opacity-80">
                       We will execute all compliance audits and data updates within 10 business days, subject to mandatory preservation parameters required for active customs investigations and banking credit audits.
                     </p>
                  </div>
 
               </div>
 
            </div>
 
          </div>
        </Container>
      </div>
    </div>
  );
}
