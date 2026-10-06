import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { FiArrowRight, FiHome, FiPackage, FiPhone } from "react-icons/fi";

export const metadata = {
  title: "404 - Page Not Found | Mitray Exim",
  description: "The page you are looking for could not be found. Explore Mitray's agricultural export catalog, fresh fruits, and Indian spices.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-brand-navy text-white relative overflow-hidden py-32">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/10 blur-[150px] rounded-full"></div>
      </div>

      <Container className="relative z-10 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-[10px] font-black uppercase tracking-[0.4em] mb-6">
          <span>Error 404 • Resource Missing</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tight mb-4">
          Page Not <span className="text-gradient">Found</span>
        </h1>

        <p className="text-slate-300 text-sm md:text-base font-medium leading-relaxed mb-10 max-w-lg mx-auto">
          The export resource or manifest page you requested does not exist or has been relocated. Explore our active agricultural export catalog below.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-gold text-brand-navy rounded-xl text-xs font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl active:scale-95"
          >
            <FiHome className="text-base" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-white/20 transition-all shadow-sm"
          >
            <FiPackage className="text-base" />
            <span>Explore Products</span>
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-white/20 transition-all shadow-sm"
          >
            <FiPhone className="text-base" />
            <span>Contact Desk</span>
          </Link>
        </div>

        <div className="pt-8 border-t border-white/10 text-xs text-slate-400 font-bold uppercase tracking-widest">
          <span>Mitray Exim • Leading Export Company in Gujarat, India</span>
        </div>
      </Container>
    </div>
  );
}
