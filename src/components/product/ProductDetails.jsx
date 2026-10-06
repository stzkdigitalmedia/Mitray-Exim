import Link from "next/link";
import { Badge } from "@/components/shared/Badge";
import { Button } from "@/components/shared/Button";

export function ProductDetails({ product }) {
  return (
    <div className="bg-white p-10 rounded-3xl border-2 border-slate-200 shadow-xl">
      <div className="mb-6">
        <span className="inline-block px-4 py-2 bg-brand-navy/10 text-brand-navy rounded-full text-sm font-semibold uppercase tracking-wide">
          {product.category.replace('-', ' ')}
        </span>
      </div>
      
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy mb-6">{product.name}</h2>
      <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed mb-10">{product.description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
          <div className="flex items-center mb-3">
            <svg className="w-5 h-5 text-brand-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <h3 className="font-bold text-brand-navy">Origin</h3>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-slate-700">{product.origin}</p>
        </div>
        <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
          <div className="flex items-center mb-3">
            <svg className="w-5 h-5 text-brand-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <h3 className="font-bold text-brand-navy">Packaging</h3>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-slate-700">{product.packaging}</p>
        </div>
        <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
          <div className="flex items-center mb-3">
            <svg className="w-5 h-5 text-brand-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <h3 className="font-bold text-brand-navy">MOQ</h3>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-slate-700">{product.moq}</p>
        </div>
        <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
          <div className="flex items-center mb-3">
            <svg className="w-5 h-5 text-brand-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h3 className="font-bold text-brand-navy">Shipping</h3>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-slate-700">{product.shipping}</p>
        </div>
      </div>

      <Link
        href="/contact"
        className="block text-center w-full px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg bg-brand-gold text-brand-navy rounded-xl font-bold hover:bg-brand-gold-light transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
      >
        Request Quotation for {product.name}
      </Link>
    </div>
  );
}
