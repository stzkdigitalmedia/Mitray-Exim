"use client";
 
import { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { FiShield, FiFileText, FiGlobe, FiBriefcase, FiTrendingUp, FiAnchor, FiChevronRight } from "react-icons/fi";
 
const SECTIONS = [
  { id: "1-definitions", title: "1. Product Standards", icon: <FiBriefcase /> },
  { id: "2-inspection", title: "2. Quality Clearance", icon: <FiShield /> },
  { id: "3-logistics", title: "3. Reefer & Incoterms", icon: <FiAnchor /> },
  { id: "4-variance", title: "4. Transit Variances", icon: <FiTrendingUp /> },
  { id: "5-banking", title: "5. Trade Payments", icon: <FiFileText /> },
  { id: "6-arbitration", title: "6. Disputes & Jurisdiction", icon: <FiGlobe /> },
];
 
export default function TermsOfServicePage() {
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
        title="Terms of. Service."
        description="Access our institutional trade terms, cold chain rules, weight tolerance clauses, and export-import protocols."
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Terms of Service' }
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
                  <span className="text-[10px] font-black text-brand-navy uppercase tracking-[0.3em]">Trade Directory</span>
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
                 <h4 className="text-xs font-black uppercase tracking-widest text-brand-gold mb-3">Trade Assistance?</h4>
                 <p className="text-[11px] font-bold text-white/40 uppercase tracking-widest leading-relaxed mb-6">
                   Our institutional export desk is available to assist you with contract review drafts.
                 </p>
                 <Link href="/contact" className="inline-flex items-center gap-3 text-[10px] font-black text-brand-gold uppercase tracking-[0.2em] group-hover:gap-5 transition-all">
                   Initialize Contact <FiChevronRight />
                 </Link>
              </div>
            </div>
 
            {/* RIGHT: MAIN INSTITUTIONAL TERMS CONTENT */}
            <div className="lg:col-span-9 space-y-12">
               
               {/* DOCUMENT HEADER STATS */}
               <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm flex flex-wrap justify-between items-center gap-6 animate-reveal">
                  <div>
                     <span className="text-[8px] font-black text-brand-gold uppercase tracking-[0.3em]">Global Merchant Export Framework</span>
                     <h2 className="text-xl md:text-2xl font-black text-brand-navy uppercase tracking-tighter mt-1">TRADE CONTRACT PROTOCOLS</h2>
                  </div>
                  <div className="flex gap-8">
                     <div>
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Version Release</p>
                        <p className="text-xs md:text-sm font-black text-brand-navy uppercase tracking-widest mt-1">V2026.1</p>
                     </div>
                     <div>
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Global Status</p>
                        <p className="text-xs md:text-sm font-black text-emerald-500 uppercase tracking-widest mt-1 flex items-center gap-2">Legally Enforced</p>
                     </div>
                  </div>
               </div>
 
               {/* CONTENT SECTIONS PANEL */}
               <div className="bg-white border border-slate-100 p-8 md:p-16 rounded-[2.5rem] shadow-sm space-y-16 animate-reveal delay-300">
                  
                  {/* PREAMBLE STATEMENT */}
                  <div className="space-y-4">
                     <h3 className="text-2xl font-black text-brand-navy uppercase tracking-tighter leading-none">1. Preamble & Sourcing Authority</h3>
                     <p className="text-sm md:text-base text-slate-500 font-bold uppercase tracking-tight leading-relaxed opacity-85">
                       These Terms of Service ("Agreement") govern the wholesale trade contracts, purchase declarations, product manifests, supply coordinates, and cargo shipments between **MITRAY EXIM** (hereinafter "Company", "Exporters", "We") and institutional importing corporations, buyer houses, and supply chain networks (hereinafter "Importers", "Purchasers", "You"). By submitting a quotation request via our communication terminals, signing a custom proforma invoice, or initializing an agricultural shipment from India, you agree to comply with this institutional framework.
                     </p>
                  </div>
 
                  <hr className="border-slate-100" />
 
                  {/* SECTIONS */}
                  <div id="1-definitions" className="space-y-6 scroll-mt-24">
                     <div className="flex items-center gap-3 text-brand-gold">
                        <FiBriefcase className="text-2xl" />
                        <h3 className="text-xl md:text-2xl font-black text-brand-navy uppercase tracking-tighter">1. Product Quality & Sourcing Standards</h3>
                     </div>
                     <p className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-tight leading-loose opacity-80">
                       All edible agricultural items—including fresh vegetables (onions, potatoes, green chillies), fresh fruits (alphonso mangoes, pomegranates), spices (cumin, cardamom, turmeric), and grains (basmati rice, non-basmati rice, wheat flour)—are sourced directly from verified local growers, sorting terminals, and mandis.
                     </p>
                     <p className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-tight leading-loose opacity-80">
                       All cargo complies with standard grade grading parameters agreed upon in the commercial proforma invoice. Sizing, sorting percentage, skin texture tolerances, shape parameters, and packaging materials follow standard export specifications.
                     </p>
                  </div>
 
                  <div id="2-inspection" className="space-y-6 scroll-mt-24">
                     <div className="flex items-center gap-3 text-brand-gold">
                        <FiShield className="text-2xl" />
                        <h3 className="text-xl md:text-2xl font-black text-brand-navy uppercase tracking-tighter">2. Phytosanitary Clearance & Quality Inspection</h3>
                     </div>
                     <p className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-tight leading-loose opacity-80">
                       Prior to shipping seal validation, all agricultural commodities undergo rigorous quality control inspections. This includes laboratory analysis, fumigation, phytosanitary treatment, and documentation certified by the **Food Safety and Standards Authority of India (FSSAI)**, **APEDA**, and the **Spice Board India**.
                     </p>
                     <p className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-tight leading-loose opacity-80">
                       Unless otherwise agreed in a separate bilateral commercial annex, the third-party survey validation certificate issued by international surveyors (such as SGS, Intertek, or Bureau Veritas) at Indian packing house loading points represents final proof of agricultural compliance.
                     </p>
                  </div>
 
                  <div id="3-logistics" className="space-y-6 scroll-mt-24">
                     <div className="flex items-center gap-3 text-brand-gold">
                        <FiAnchor className="text-2xl" />
                        <h3 className="text-xl md:text-2xl font-black text-brand-navy uppercase tracking-tighter">3. Reefer Cold Storage & Maritime Incoterms</h3>
                     </div>
                     <p className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-tight leading-loose opacity-80">
                       All global logistics contracts are executed under standard **ICC Incoterms (FOB, CFR, CIF)** specified on the trade contract invoice. 
                     </p>
                     <p className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-tight leading-loose opacity-80">
                       For perishable food items, cold chain logistics are managed using high-tech Reefer Containers. We guarantee temperature control and ventilation parameters as recommended by phytosanitary protocols at the time of container locking at Indian container yards. Once the container is handed to the designated ocean carrier shipping lines, risk parameters are transferred in strict accordance with the agreed Incoterms. We are not liable for transit delays or carrier machinery cooling malfunctions at sea.
                     </p>
                  </div>
 
                  <div id="4-variance" className="space-y-6 scroll-mt-24">
                     <div className="flex items-center gap-3 text-brand-gold">
                        <FiTrendingUp className="text-2xl" />
                        <h3 className="text-xl md:text-2xl font-black text-brand-navy uppercase tracking-tighter">4. Agricultural Shrinkage & Weight Variance</h3>
                     </div>
                     <p className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-tight leading-loose opacity-80">
                       Fresh edible items (specifically green vegetables, garlic, onions, and fruits) are biological agricultural items that contain natural moisture content. Importers explicitly acknowledge and accept that such cargo undergoes a **natural transit weight shrinkage** of between **3% to 5%** during deep-sea ocean routes due to continuous reefer container cold airflow. 
                     </p>
                     <p className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-tight leading-loose opacity-80">
                       Any quality variance claims or sorting discrepancies must be filed within 48 hours of container port discharge at destination, backed by a verified SGS inspection report. Claims will not be recognized once the cargo seal is cleared or local warehousing transit begins.
                     </p>
                  </div>
 
                  <div id="5-banking" className="space-y-6 scroll-mt-24">
                     <div className="flex items-center gap-3 text-brand-gold">
                        <FiFileText className="text-2xl" />
                        <h3 className="text-xl md:text-2xl font-black text-brand-navy uppercase tracking-tighter">5. Banking, Trade Credit & Payment Desks</h3>
                     </div>
                     <p className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-tight leading-loose opacity-80">
                       All financial transactions are conducted under banking channels via **Irrevocable Letter of Credit (LC at sight)** or **Telegraphic Transfer (TT)** as detailed in the commercial trade contract. 
                     </p>
                     <p className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-tight leading-loose opacity-80">
                       For TT payments, a standard advance margin deposit is required, with the remaining balance settled immediately upon scanned copy transmittal of the original Bill of Lading (B/L) and customs documents. Original shipping documents are released by our transaction bankers only upon receipt of 100% cleared credit funds.
                     </p>
                  </div>
 
                  <div id="6-arbitration" className="space-y-6 scroll-mt-24">
                     <div className="flex items-center gap-3 text-brand-gold">
                        <FiGlobe className="text-2xl" />
                        <h3 className="text-xl md:text-2xl font-black text-brand-navy uppercase tracking-tighter">6. Trade Disputes & Legal Jurisdiction</h3>
                     </div>
                     <p className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-tight leading-loose opacity-80">
                       This Agreement and all bilateral purchase orders shall be governed by, analyzed, and enforced in accordance with the laws of the Republic of India. 
                     </p>
                     <p className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-tight leading-loose opacity-80">
                       Any dispute, claim, cargo grading mismatch, or credit issue arising from wholesale shipments shall be referred to and settled under arbitration rules of the Indian Council of Arbitration. The legal venue for all arbitration acts and court hearings shall be strictly within the jurisdiction of LAKHABAVAL JAMNAGAR, GUJRAT, India.
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
