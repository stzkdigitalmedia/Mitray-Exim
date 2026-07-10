"use client";

import { use } from "react";
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { PRODUCTS } from "@/data/products";
import {
   FiShield, FiGlobe, FiZap, FiPackage,
   FiTruck, FiCheckCircle, FiClock, FiBox,
   FiArrowRight, FiActivity, FiArrowUp, FiMail, FiPhone
} from "react-icons/fi";
import Link from "next/link";
import { notFound } from "next/navigation";

const getHighResImage = (product) => {
   if (product.image && !product.image.startsWith('/images/')) return product.image;
   const categoryImages = {
      'fresh-vegetables': 'https://images.unsplash.com/photo-1566385101042-1a0aa0c12e8c?q=80&w=2070&auto=format&fit=crop',
      'fresh-fruits': 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=2070&auto=format&fit=crop',
      'spices': 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop',
      'rice': 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2070&auto=format&fit=crop',
      'dehydrated': 'https://images.unsplash.com/photo-1511125358835-54842a893f45?q=80&w=2070&auto=format&fit=crop',
      'wheat-flour': 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2070&auto=format&fit=crop'
   };
   return categoryImages[product.category] || 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=1000&fit=crop';
};

export default function ProductDetailPage({ params }) {
   const { slug } = use(params);
   const product = PRODUCTS.find((p) => p.slug === slug);

   if (!product) notFound();

   const productImage = getHighResImage(product);
   const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.slug !== product.slug).slice(0, 4);

   return (
      <div className="bg-white relative">
         {/* Decorative premium ambient glow */}
         <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[40vh] left-0 w-[500px] h-[500px] bg-brand-gold/5 blur-[120px] rounded-full animate-subtle-float"></div>
            <div className="absolute top-[80vh] right-0 w-[600px] h-[600px] bg-brand-navy/5 blur-[150px] rounded-full animate-subtle-float delay-1000"></div>
         </div>

         <PageHero
            badge={`${product.category.toUpperCase()} • MANIFEST ${product.slug.toUpperCase()}`}
            title={product.name}
            description={product.description}
            backgroundImage={productImage}
            breadcrumbs={[
               { label: 'Home', href: '/' },
               { label: 'Products', href: '/products' },
               { label: product.name }
            ]}
         />

         <div className="relative z-10 pt-12 md:pt-20 pb-20">
            <Container>
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-start">

                  {/* LEFT: STICKY ASSET TERMINAL */}
                  <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-4 md:space-y-8 animate-reveal delay-300 opacity-0">
                     <div className="relative group">
                        <div className="absolute -inset-4 bg-brand-gold/5 blur-3xl rounded-[3rem]"></div>
                        <div className="relative glass-card p-2 rounded-2xl md:rounded-[2.5rem] bg-slate-100 shadow-2xl border-white overflow-hidden h-[300px] sm:h-[400px] md:h-[550px]">
                           <Image
                              src={productImage}
                              alt={product.name}
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
                              className="object-cover rounded-xl md:rounded-[2rem] transition-all duration-[2000ms] group-hover:scale-105"
                           />
                           <div className="absolute bottom-4 left-4 right-4 md:bottom-10 md:left-10 md:right-10">
                              <div className="glass-panel p-4 md:p-6 rounded-xl md:rounded-2xl border-white/20 bg-brand-navy/60 backdrop-blur-xl">
                                 <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                       <FiActivity className="text-brand-gold animate-pulse" />
                                       <span className="text-[10px] md:text-xs font-black text-black uppercase tracking-widest">Active Export Hub</span>
                                    </div>
                                    <span className="text-[10px] md:text-xs font-black text-brand-gold uppercase tracking-widest">Verified</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>               {/* TRUST BADGES */}
                     <div className="grid grid-cols-3 gap-3 md:gap-4">
                        {[
                           { icon: <FiShield />, label: "Quality Grade" },
                           { icon: <FiGlobe />, label: "India Origin" },
                           { icon: <FiCheckCircle />, label: "Global Delivery" }
                        ].map((badge, i) => (
                           <div key={i} className="glass-card p-3 md:p-4 rounded-xl md:rounded-2xl bg-slate-50 border-slate-100 flex flex-col items-center justify-center text-center group hover:border-brand-gold hover:bg-white transition-all duration-500">
                              <div className="text-brand-gold text-lg md:text-xl mb-1.5 md:mb-2 group-hover:scale-110 transition-transform">{badge.icon}</div>
                              <p className="text-[8.5px] md:text-xs font-black text-slate-400 uppercase tracking-widest group-hover:text-brand-navy transition-colors">{badge.label}</p>
                           </div>
                        ))}
                     </div>

                     {/* QUICK INQUIRY WIDGET - LIGHT THEME */}
                     <div className="relative p-5 md:p-10 rounded-2xl md:rounded-[2.5rem] bg-slate-50 border border-slate-100 shadow-2xl overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 blur-3xl -translate-y-16 translate-x-16"></div>
                        <h4 className="text-lg md:text-2xl font-black uppercase tracking-tighter mb-4 md:mb-6 text-brand-navy">Sales & Inquiry Desk</h4>
                        <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                           <div className="flex items-center gap-3 md:gap-4 text-slate-500">
                              <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-brand-gold border border-slate-100">
                                 <FiMail />
                              </div>
                              <span className="text-xs md:text-sm font-bold uppercase tracking-widest">info@mitrayexim.com</span>
                           </div>
                           <div className="flex items-center gap-3 md:gap-4 text-slate-500">
                              <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-brand-gold border border-slate-100">
                                 <FiPhone />
                              </div>
                              <span className="text-xs md:text-sm font-bold uppercase tracking-widest">+91 7778886559</span>
                           </div>
                        </div>
                        <Link href="/contact" className="block w-full py-4.5 md:py-6 bg-brand-navy text-white rounded-xl text-xs md:text-sm font-black text-center uppercase tracking-[0.3em] hover:bg-brand-gold hover:text-brand-navy transition-all duration-500 shadow-lg">
                           Get in Touch
                        </Link>
                     </div>
                  </div>

                  {/* RIGHT: TECHNICAL SPECIFICATIONS */}
                  <div className="lg:col-span-7 space-y-8 md:space-y-16 animate-reveal delay-500 opacity-0 pt-4 lg:pt-0">
                     <div className="space-y-4 md:space-y-6">
                        <div className="flex items-center gap-4">
                           <div className="h-px w-12 bg-brand-gold"></div>
                           <span className="text-[10px] md:text-xs font-black text-brand-navy uppercase tracking-[0.4em]">Export Specifications</span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-brand-navy tracking-tighter uppercase leading-[0.9]">
                           EXPORT <br />
                           <span className="text-gradient">SPECIFICATIONS.</span>
                        </h2>
                        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-400 font-bold uppercase tracking-tight leading-relaxed max-w-2xl opacity-80">
                           Official specifications for our high-quality agricultural exports. All products are 100% certified and meet international export standards.
                        </p>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {[
                           { label: "Country of Origin", val: product.origin, icon: <FiGlobe /> },
                           { label: "Grade Standard", val: "Premium Grade-A", icon: <FiShield /> },
                           { label: "Packaging Protocol", val: product.packaging, icon: <FiPackage /> },
                           { label: "Minimum Order (MOQ)", val: product.moq, icon: <FiBox /> },
                           { label: "Shipping Method", val: product.shipping, icon: <FiTruck /> },
                           { label: "Supply Status", val: "Continuous Availability", icon: <FiClock /> },
                        ].map((spec, i) => (
                           <div
                              key={i}
                              className="glass-card p-5 md:p-8 rounded-xl md:rounded-[2rem] bg-slate-50/60 border border-slate-100/60 backdrop-blur-md group hover:border-brand-gold/40 hover:bg-white hover:shadow-[0_20px_50px_-15px_rgba(212,165,116,0.15)] transition-all duration-500 hover-lift"
                           >
                              <div className="flex items-center justify-between mb-4 md:mb-6">
                                 <div className="w-10 h-10 md:w-12 md:h-12 bg-white shadow-sm rounded-xl flex items-center justify-center text-brand-gold text-lg md:text-xl group-hover:scale-110 transition-transform duration-500">
                                    {spec.icon}
                                 </div>
                                 <FiArrowUp className="text-slate-200 group-hover:text-brand-gold rotate-45 transition-colors" />
                              </div>
                              <p className="text-[9px] md:text-xs font-black text-slate-400 uppercase tracking-widest mb-1.5 md:mb-2 group-hover:text-brand-gold transition-colors duration-500">{spec.label}</p>
                              <p className="text-xs md:text-xl font-black text-brand-navy uppercase tracking-widest transition-colors duration-500">{spec.val}</p>
                           </div>
                        ))}
                     </div>

                     <div className="p-5 md:p-12 glass-card rounded-xl md:rounded-[3rem] bg-slate-50 border-slate-100 border-dashed border-2">
                        <h4 className="text-xs md:text-base font-black text-brand-navy uppercase tracking-widest mb-2 md:mb-4">Export Summary</h4>
                        <p className="text-xs md:text-base text-slate-400 font-medium leading-relaxed uppercase tracking-tight">
                           This premium {product.name} shipment is carefully selected and packed for international delivery. Our strict quality control process ensures that every order meets all phytosanitary standards of your destination country.
                        </p>
                     </div>
                  </div>
               </div>

               {/* RELATED INVENTORY */}
               {relatedProducts.length > 0 && (
                  <div className="py-20 md:py-32 border-t border-slate-100 animate-reveal">
                     <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                        <div>
                           <div className="flex items-center gap-4 mb-4">
                              <div className="h-px w-10 bg-brand-gold"></div>
                              <span className="text-xs font-black text-brand-navy uppercase tracking-[0.4em]">Our Sourcing Catalog</span>
                           </div>
                           <h2 className="text-3xl md:text-6xl font-black text-brand-navy uppercase tracking-tighter">
                              RELATED <br />
                              <span className="text-gradient">PRODUCTS.</span>
                           </h2>
                        </div>
                        <Link href="/products" className="group flex items-center gap-4 py-4 px-8 bg-slate-50 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-brand-navy hover:text-white transition-all duration-700">
                           View All Products <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                     </div>
                     <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-8">
                        {relatedProducts.map((rel, idx) => (
                           <Link key={rel.slug} href={`/products/${rel.slug}`} className="group/rel animate-reveal opacity-0" style={{ animationDelay: `${idx * 150}ms` }}>
                              <div className="glass-card bg-white rounded-2xl md:rounded-[2.5rem] overflow-hidden border-slate-100 shadow-sm hover:border-brand-gold hover:shadow-2xl transition-all duration-700 hover-lift h-full flex flex-col">
                                 <div className="relative aspect-[1/1] md:aspect-[4/5] overflow-hidden bg-slate-50">
                                    <Image src={getHighResImage(rel)} alt={rel.name} fill sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw" className="object-cover transition-all duration-1000 group-hover/rel:scale-110" />
                                 </div>
                                 <div className="p-3 md:p-6 lg:p-8">
                                    <h4 className="text-[10px] sm:text-xs md:text-xl font-black text-brand-navy uppercase tracking-tighter mb-1.5 md:mb-2 group-hover/rel:text-brand-gold transition-colors line-clamp-2">{rel.name}</h4>
                                    <div className="h-px w-6 md:w-8 bg-slate-100 group-hover/rel:w-full group-hover/rel:bg-brand-gold transition-all duration-700"></div>
                                 </div>
                              </div>
                           </Link>
                        ))}
                     </div>
                  </div>
               )}

               {/* FINAL CTA FOOTER */}
               <div className="relative p-6 md:p-24 rounded-2xl md:rounded-[3rem] bg-slate-50 border border-slate-100 border-t-4 border-t-brand-gold text-center shadow-2xl overflow-hidden animate-reveal">
                  <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/5 blur-[150px] rounded-full animate-subtle-float -translate-y-1/2 translate-x-1/2"></div>
                  <div className="relative z-10 max-w-4xl mx-auto">
                     <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-none mb-6 md:mb-10 uppercase text-brand-navy">
                        READY TO <span className="text-gradient">IMPORT?</span>
                     </h2>
                     <p className="text-xs sm:text-sm md:text-xl lg:text-2xl text-slate-400 font-bold uppercase tracking-tight leading-relaxed mb-10 md:mb-16 opacity-80">
                        Request a custom quote or sample for {product.name} today. Our dedicated export team is ready to assist you with direct farm sourcing, custom packing, and shipping logistics.
                     </p>
                     <Link href="/contact">
                        <button className="group relative px-6 py-4 md:px-12 md:py-6 bg-brand-navy text-white rounded-xl md:rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] md:text-sm shadow-2xl hover:bg-brand-gold hover:text-brand-navy transition-all duration-700 active:scale-95">
                           Inquire About This Product
                        </button>
                     </Link>
                  </div>
               </div>

            </Container>
         </div>
      </div>
   );
}
