"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { LightboxGallery } from "@/components/gallery/LightboxGallery";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { FiActivity, FiShield, FiZap, FiTruck, FiBox, FiDatabase, FiGrid, FiPlus } from "react-icons/fi";

const GALLERY_CATEGORIES = [
   { id: "all", label: "Global Manifest", icon: <FiGrid /> },
   { id: "logistics", label: "Export Logistics", icon: <FiTruck /> },
   { id: "packaging", label: "Packaging Protocol", icon: <FiBox /> },
   { id: "warehouse", label: "Warehouse Terminals", icon: <FiDatabase /> },
   { id: "quality", label: "Quality Assurance", icon: <FiShield /> },
];

const ALL_IMAGES = [
   { id: 1, category: "all", src: "https://res.cloudinary.com/dtkdcrra2/image/upload/f_auto,q_auto,w_800,c_fit/v1772519301/IMG_5096_gub3pj.jpg", title: "Showcase Image 1" },
   { id: 2, category: "all", src: "https://res.cloudinary.com/dtkdcrra2/image/upload/f_auto,q_auto,w_800,c_fit/v1772519291/20251229_092143_bree3q.jpg", title: "Showcase Image 2" },
   { id: 3, category: "all", src: "https://res.cloudinary.com/dtkdcrra2/image/upload/f_auto,q_auto,w_800,c_fit/v1772519235/20251228_133115_o97hyh.jpg", title: "Showcase Image 3" },
   { id: 4, category: "all", src: "https://res.cloudinary.com/dtkdcrra2/image/upload/f_auto,q_auto,w_800,c_fit/v1772519228/20251229_092239_khvdar.jpg", title: "Showcase Image 4" },
   { id: 5, category: "all", src: "https://res.cloudinary.com/dtkdcrra2/image/upload/f_auto,q_auto,w_800,c_fit/v1772519185/20251228_110625_wcz2h0.jpg", title: "Showcase Image 5" },
   { id: 6, category: "all", src: "https://res.cloudinary.com/dtkdcrra2/image/upload/f_auto,q_auto,w_800,c_fit/v1772519129/20251228_110611_b1wpqu.jpg", title: "Showcase Image 6" },
   { id: 7, category: "all", src: "https://res.cloudinary.com/dtkdcrra2/image/upload/f_auto,q_auto,w_800,c_fit/v1772519069/20251229_092248_igaxj7.jpg", title: "Showcase Image 7" },
   { id: 8, category: "all", src: "https://res.cloudinary.com/dtkdcrra2/image/upload/f_auto,q_auto,w_800,c_fit/v1772519056/20251229_092237_xadbq1.jpg", title: "Showcase Image 8" },
   { id: 9, category: "all", src: "https://res.cloudinary.com/dtkdcrra2/image/upload/f_auto,q_auto,w_800,c_fit/v1772519023/20251228_110601_a1b85w.jpg", title: "Showcase Image 9" },
   { id: 10, category: "all", src: "https://res.cloudinary.com/dtkdcrra2/image/upload/f_auto,q_auto,w_800,c_fit/v1772519003/20251229_092254_llu4y1.jpg", title: "Showcase Image 10" },
   { id: 11, category: "all", src: "https://res.cloudinary.com/dtkdcrra2/image/upload/f_auto,q_auto,w_800,c_fit/v1772518938/20260129_110600_kicodw.jpg", title: "Showcase Image 11" }
];

export default function GalleryPage() {
   const [selectedCategory, setSelectedCategory] = useState("all");
   const [visibleCount, setVisibleCount] = useState(12);
   const loadMoreRef = useRef(null);

   const filteredImages = useMemo(() => {
      return selectedCategory === "all"
         ? ALL_IMAGES
         : ALL_IMAGES.filter(img => img.category === selectedCategory);
   }, [selectedCategory]);

   const displayedImages = filteredImages.slice(0, visibleCount);
   // Precalculate the next batch of images so we can fetch them proactively in the background
   const nextBatchImages = filteredImages.slice(visibleCount, visibleCount + 12);

   useEffect(() => {
      if (!loadMoreRef.current) return;
      const observer = new IntersectionObserver((entries) => {
         if (entries[0].isIntersecting && visibleCount < filteredImages.length) {
            setVisibleCount(prev => prev + 12);
         }
      }, { rootMargin: '800px' }); // Load aggressively early
      
      observer.observe(loadMoreRef.current);
      return () => observer.disconnect();
   }, [filteredImages.length, visibleCount]);

   return (
      <div className="bg-white">
         {/* INVISIBLE PRELOADER FOR NEXT BATCH */}
         <div style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden', opacity: 0, pointerEvents: 'none' }} aria-hidden="true">
            {nextBatchImages.map((img) => (
               <img key={`preload-${img.id}`} src={img.src?.replace('/upload/', '/upload/f_auto,q_auto,w_800/')} alt="" loading="eager" />
            ))}
         </div>
         <PageHero
            badge="VISUAL TRUST PROTOCOLS"
            title="GALLERY. EXHIBITION."
            description="A technical exhibit of our operational nodes, export terminals, and verified logistics manifests."
            backgroundImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
            breadcrumbs={[
               { label: 'Home', href: '/' },
               { label: 'Visual Showcase' }
            ]}
         />

         <div className="relative z-10 pt-6 sm:pt-10 md:pt-14 lg:pt-18 xl:pt-24 pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-28 bg-[#F9FAFB]">
            {/* Decorative Elements */}
            <div className="fixed top-0 left-0 w-96 h-96 bg-brand-gold/3 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="fixed bottom-1/3 right-0 w-96 h-96 bg-brand-navy/3 blur-3xl translate-x-1/2 pointer-events-none"></div>

            <Container>

               {/* SECTION HEADER */}
               <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 px-4 sm:px-0">
                  <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
                     <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
                        <div className="flex items-center gap-2 sm:gap-3">
                           <div className="h-1 w-6 sm:w-8 md:w-10 lg:w-12 bg-gradient-to-r from-brand-gold to-brand-gold/50"></div>
                           <span className="text-[8px] sm:text-[9px] md:text-xs lg:text-sm font-black text-brand-gold uppercase tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em]">Filter Hub</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-brand-navy tracking-tighter uppercase leading-[0.95] sm:leading-[0.9]">
                           PORTFOLIO <br className="hidden sm:block" />
                           <span className="text-gradient">SHOWCASE.</span>
                        </h2>
                     </div>
                  </div>
               </div>

               {/* CATEGORY FILTER */}
               {/* 
               <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 px-4 sm:px-0">
                  <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar pb-4 sm:pb-6 border-b-2 border-slate-200 whitespace-nowrap scroll-smooth">
                     {GALLERY_CATEGORIES.map((cat) => (
                        <button
                           key={cat.id}
                           onClick={() => {
                              setActiveCategory(cat.id);
                              setVisibleCount(12);
                           }}
                           className={`flex items-center gap-1.5 sm:gap-2 md:gap-3 whitespace-nowrap flex-none px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 text-[9px] sm:text-xs md:text-sm lg:text-base font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-widest transition-all duration-300 border-2 ${
                              activeCategory === cat.id
                                 ? 'bg-brand-navy text-white border-brand-navy shadow-lg'
                                 : 'bg-white text-slate-500 border-slate-200 hover:border-brand-gold hover:text-brand-navy'
                           }`}
                        >
                           <span className={`text-base sm:text-lg md:text-xl ${activeCategory === cat.id ? 'text-brand-gold' : 'text-slate-400'}`}>
                              {cat.icon}
                           </span>
                           <span className="hidden sm:inline">{cat.label}</span>
                           <span className="sm:hidden text-[8px]">{cat.label.split(' ')[0]}</span>
                           {activeCategory === cat.id && (
                              <div className="ml-1 w-1.5 h-1.5 bg-brand-gold"></div>
                           )}
                        </button>
                     ))}
                  </div>
               </div>
               */}

               {/* GALLERY GRID */}
               <div className="min-h-[600px] px-4 sm:px-0 mb-8 sm:mb-12 md:mb-16 lg:mb-20">
                  <LightboxGallery images={displayedImages} />

                  {/* INFINITE SCROLL OBSERVER */}
                  {visibleCount < filteredImages.length && (
                     <div ref={loadMoreRef} className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 flex flex-col items-center">
                        <div className="w-8 h-8 border-4 border-brand-gold border-t-transparent rounded-full animate-spin"></div>
                        <p className="mt-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Syncing manifest...</p>
                     </div>
                  )}
               </div>

               {/* TRUST PROTOCOL FOOTER */}
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-0 mt-12 sm:mt-16 md:mt-20 lg:mt-24">
                  {[
                     { 
                       icon: <FiShield />, 
                       title: "Verified Quality", 
                       desc: "Every picture displays our real, active food safety protocols and certified export-grade packing." 
                     },
                     { 
                       icon: <FiActivity />, 
                       title: "Real-Time Updates", 
                       desc: "Our gallery is updated weekly to show you our latest bulk shipments and active trade operations." 
                     },
                     { 
                       icon: <FiZap />, 
                       title: "Pure Transparency", 
                       desc: "Clear, high-resolution photos that let you inspect our clean storage terminals and premium produce." 
                     }
                  ].map((item, i) => (
                     <div key={i} className="group p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 bg-white border-2 border-slate-200 hover:border-brand-gold transition-all duration-500 overflow-hidden">
                        <div className="absolute inset-0 bg-brand-gold/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                        
                        <div className="relative z-10">
                           <div className="w-10 sm:w-12 md:w-14 lg:w-16 h-10 sm:h-12 md:h-14 lg:h-16 bg-slate-50 flex items-center justify-center text-brand-gold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-3 sm:mb-4 md:mb-6 border-2 border-slate-200 group-hover:border-brand-gold group-hover:bg-brand-navy group-hover:text-white transition-all duration-500">
                              {item.icon}
                           </div>
                           <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-black text-brand-navy uppercase tracking-tight mb-2 sm:mb-3 md:mb-4 group-hover:text-brand-gold transition-colors duration-500">
                              {item.title}
                           </h4>
                           <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-bold text-slate-500 uppercase tracking-wide leading-relaxed">
                              {item.desc}
                           </p>
                        </div>
                     </div>
                  ))}
               </div>

            </Container>
         </div>
      </div>
   );
}
