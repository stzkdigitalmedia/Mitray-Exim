import { Hero } from "./home/sections/Hero";
import { MerchantExportGujarat } from "./home/sections/MerchantExportGujarat";
import { FeaturedProducts } from "./home/sections/FeaturedProducts";
import { WhyChoose } from "./home/sections/WhyChoose";
import { ExportCountries } from "./home/sections/ExportCountries";
import { Certifications } from "./home/sections/Certifications";
import { Reviews } from "./home/sections/Reviews";
import { FaqSection } from "./home/sections/FaqSection";
import { BlogPreview } from "./home/sections/BlogPreview";
import { Container } from "@/components/shared/Container";
import Link from "next/link";
import { FiArrowRight, FiMail } from "react-icons/fi";

export const metadata = {
  title: {
    absolute: "Mitray | Leading Export Company in India | Fruits, Spices & Agricultural Products Exporter",
  },
  description:
    "Mitray is a trusted export company in Gujarat, India specializing in fruits, spices, onions, pomegranates, bananas, mangoes, green chillies, and agricultural products.",
  keywords: [
    "Mitray",
    "Export company in India",
    "Exporter in India",
    "Fruits exporter",
    "Indian spices exporter",
    "Fruits supplier",
    "Pomegranate exporter",
    "Banana supplier",
    "Agriculture products exporter",
    "Merchant exporter",
    "Onion exporter India",
    "Food exporter",
    "Mango exporter",
    "Green chilli exporter",
    "Export company in Gujarat"
  ],
  alternates: {
    canonical: "https://www.mitrayexim.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.mitrayexim.com",
    siteName: "Mitray",
    title: "Mitray | Leading Export Company in India | Fruits, Spices & Agricultural Products Exporter",
    description:
      "Mitray is a trusted export company in Gujarat, India specializing in fruits, spices, onions, pomegranates, bananas, mangoes, green chillies, and agricultural products.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mitray - Leading Export Company in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mitray | Leading Export Company in India | Fruits, Spices & Agricultural Products Exporter",
    description:
      "Mitray is a trusted export company in Gujarat, India specializing in fruits, spices, onions, pomegranates, bananas, mangoes, green chillies, and agricultural products.",
    images: ["/images/og-image.jpg"],
    creator: "@mitrayexim",
    site: "@mitrayexim",
  },
};

export default function Home() {
  return (
    <div>
      {/* H1 Section: Leading Export Company in India */}
      <Hero />

      {/* H2 Section: Merchant Export Services from Gujarat */}
      <MerchantExportGujarat />

      {/* H2 Section: Trusted Fruits Exporter from India & Premium Indian Spices Exporter */}
      {/* Sub-H3s: Pomegranate Exporter, Banana Supplier, Mango Exporter, Onion Exporter India, Green Chilli Exporter */}
      <FeaturedProducts />

      {/* H2 Section: Agricultural Products Exporter Worldwide */}
      <WhyChoose />

      {/* Global Trade Corridors */}
      <ExportCountries />

      {/* Verified Certifications */}
      <Certifications />

      {/* Client Reviews */}
      <Reviews />

      {/* FAQ Section */}
      <FaqSection />

      {/* Educational Blog Insights */}
      <BlogPreview />

      {/* CTA SECTION: KEYWORD-RICH CONVERSION ENGINE FOR INTERNATIONAL BUYERS */}
      <div className="py-14 md:py-24 relative overflow-hidden bg-slate-50 border-t border-slate-100">
        {/* Ambient atmospheric backdrop */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/10 blur-[150px] rounded-full animate-subtle-float"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-navy/10 blur-[150px] rounded-full animate-subtle-float delay-1000"></div>
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px bg-brand-gold/40 animate-line-grow w-12"></div>
              <span className="text-[11px] font-black text-brand-gold uppercase tracking-[0.5em]">
                GLOBAL B2B EXPORT DESK
              </span>
              <div className="h-px bg-brand-gold/40 animate-line-grow w-12"></div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-outfit uppercase tracking-tighter leading-tight text-brand-navy mb-6">
              Ready to Partner with Mitray? <br />
              <span className="text-gradient">Leading Exporter in India</span>
            </h2>
            
            <p className="text-sm md:text-lg text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto mb-10">
              Whether you require container-load consignments of fresh pomegranates, bananas, Alphonso mangoes, Nashik red onions, green chillies, or authentic Indian spices, <strong className="text-brand-navy font-bold">Mitray</strong> delivers verified quality from Gujarat, India directly to your port of destination. Request your formal FOB or CIF export quotation today.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full group relative px-10 py-5 bg-brand-navy rounded-xl text-white font-black uppercase tracking-[0.2em] text-xs shadow-2xl hover:bg-brand-gold hover:text-brand-navy transition-all duration-500 active:scale-95 flex items-center justify-center gap-3">
                  <span>Request Export Quotation (RFQ)</span>
                  <FiArrowRight className="text-base group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              
              <a 
                href="https://wa.me/917778886559?text=Hello%20Mitray%20Export%20Team,%20I%20am%20interested%20in%20importing%20agricultural%20products%20from%20India." 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Direct WhatsApp inquiry with Mitray Export Team"
                className="w-full sm:w-auto px-8 py-5 rounded-xl border border-slate-300 bg-white text-brand-navy font-black uppercase tracking-[0.2em] text-xs hover:border-brand-navy hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
              >
                <span>Instant WhatsApp Inquiry</span>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
              <span>✓ APEDA Certified</span>
              <span>•</span>
              <span>✓ FSSAI Registered</span>
              <span>•</span>
              <span>✓ Mundra & Kandla Port Loading</span>
              <span>•</span>
              <span>✓ Global Reefer Fleet</span>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
