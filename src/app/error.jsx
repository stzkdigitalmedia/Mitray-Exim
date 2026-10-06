'use client';

import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { FiRefreshCw, FiHome, FiAlertTriangle } from "react-icons/fi";

export default function Error({ error, reset }) {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-brand-navy text-white relative overflow-hidden py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 blur-[150px] rounded-full"></div>
      </div>

      <Container className="relative z-10 text-center max-w-xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-black uppercase tracking-[0.4em] mb-6">
          <FiAlertTriangle className="text-sm" />
          <span>System Notice</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight mb-4">
          Unexpected <span className="text-gradient">Issue</span>
        </h1>

        <p className="text-slate-300 text-sm md:text-base font-medium leading-relaxed mb-8">
          An unexpected error occurred while loading this export resource. Please try reloading or return to our homepage.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-gold text-brand-navy rounded-xl text-xs font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl active:scale-95"
          >
            <FiRefreshCw className="text-sm" />
            <span>Try Again</span>
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-white/20 transition-all shadow-sm"
          >
            <FiHome className="text-sm" />
            <span>Return Home</span>
          </Link>
        </div>
      </Container>
    </div>
  );
}
