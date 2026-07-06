"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { PRODUCTS } from "@/data/products";
import { FiSearch, FiArrowRight, FiActivity, FiZap, FiPackage, FiShield, FiGlobe, FiChevronRight, FiGrid, FiArrowUp, FiTruck, FiBox, FiCpu } from "react-icons/fi";
import Link from "next/link";
import clsx from "clsx";

const CATEGORIES = [
   { id: "all", label: "Full Catalog", icon: <FiGrid />, gradient: "from-brand-navy to-slate-800" },
   { id: "fresh-vegetables", label: "Vegetables", icon: <FiPackage />, gradient: "from-emerald-600 to-teal-800" },
   { id: "fresh-fruits", label: "Fresh Fruits", icon: <FiActivity />, gradient: "from-orange-500 to-red-700" },
   { id: "spices", label: "Premium Spices", icon: <FiZap />, gradient: "from-brand-gold to-orange-600" },
   { id: "rice", label: "Rice & Grains", icon: <FiBox />, gradient: "from-blue-600 to-indigo-800" },
   { id: "dehydrated", label: "Dehydrated", icon: <FiCpu />, gradient: "from-slate-600 to-slate-900" },
   { id: "wheat-flour", label: "Wheat & Flour", icon: <FiShield />, gradient: "from-amber-600 to-yellow-800" },
];

const ITEMS_PER_PAGE = 12;

export default function ProductsPage() {
   const [selectedCategory, setSelectedCategory] = useState("all");
   const [searchQuery, setSearchQuery] = useState("");
   const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
   const loadMoreRef = useRef(null);

   const filteredProducts = useMemo(() => {
      return PRODUCTS.filter((p) => {
         const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
         const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
         return matchesCategory && matchesSearch;
      });
   }, [selectedCategory, searchQuery]);

   const displayedProducts = filteredProducts.slice(0, visibleCount);
   // Precalculate the next batch of products so we can fetch their images proactively in the background
   const nextBatchProducts = filteredProducts.slice(visibleCount, visibleCount + ITEMS_PER_PAGE);

   useEffect(() => {
      if (!loadMoreRef.current) return;
      const observer = new IntersectionObserver((entries) => {
         if (entries[0].isIntersecting && visibleCount < filteredProducts.length) {
            setVisibleCount(prev => prev + ITEMS_PER_PAGE);
         }
      }, { rootMargin: '800px' }); // Load aggressively early
      
      observer.observe(loadMoreRef.current);
      return () => observer.disconnect();
   }, [filteredProducts.length, visibleCount]);

   return (
      <div className="bg-white">
         {/* INVISIBLE PRELOADER FOR NEXT BATCH */}
         <div style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden', opacity: 0, pointerEvents: 'none' }} aria-hidden="true">
            {nextBatchProducts.map((p) => (
               <img key={`preload-${p.slug}`} src={p.image?.replace('/upload/', '/upload/f_auto,q_auto,w_400/')} alt="" loading="eager" />
            ))}
         </div>
         <PageHero
            badge="AGRICULTURAL EXPORTS"
            title="PRODUCT CATALOG."
            description="Browse our high-quality agricultural exports. Sourced directly from farms and packaged to premium international standards."
            backgroundImage="https://res.cloudinary.com/dtkdcrra2/image/upload/v1783333595/products_ht3hyl.png"
            breadcrumbs={[
               { label: 'Home', href: '/' },
               { label: 'Products' }
            ]}
         />

         <div className={clsx('relative', 'z-10', '-mt-10', 'md:-mt-15')}>
            <Container>

               {/* UNIQUE BENTO DISCOVERY HUB */}
               <div className={clsx('mb-8', 'md:mb-12', 'animate-reveal', 'delay-500', 'opacity-0')}>

                  {/* A. DESKTOP / PC VIEW (Original High-Fidelity Bento Grid - lg screens and above) */}
                  <div className={clsx('hidden', 'lg:grid', 'grid-cols-12', 'gap-6')}>
                     {/* 1. SEARCH CONSOLE (Large Block) */}
                     <div className={clsx('lg:col-span-6', 'group', 'relative')}>
                        <div className={clsx('absolute', '-inset-0.5', 'bg-gradient-to-r', 'from-brand-gold', 'to-brand-navy', 'rounded-[2rem]', 'blur', 'opacity-10', 'group-focus-within:opacity-35', 'transition-opacity', 'duration-750')}></div>
                        <div className={clsx('relative', 'h-full', 'p-6', 'rounded-[2rem]', 'bg-white/98', 'backdrop-blur-[40px]', 'border', 'border-white/60', 'shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)]', 'flex', 'flex-col', 'justify-center', 'transition-all', 'duration-550', 'hover:shadow-brand-gold/10')}>
                           <p className={clsx('text-[11px]', 'font-black', 'text-brand-navy/80', 'uppercase', 'tracking-[0.35em]', 'mb-2.5')}>Product Search</p>
                           <div className="relative">
                              <FiSearch className={clsx('absolute', 'left-0', 'top-1/2', '-translate-y-1/2', 'text-2xl', 'text-slate-400', 'group-focus-within:text-brand-gold', 'transition-all', 'duration-700')} />
                              <input
                                 type="text"
                                 placeholder="Type to search products..."
                                 value={searchQuery}
                                 onChange={(e) => { setSearchQuery(e.target.value); setVisibleCount(ITEMS_PER_PAGE); }}
                                 className={clsx('w-full', 'bg-transparent', 'border-none', 'pl-12', 'py-1', 'text-xl', 'font-black', 'text-brand-navy', 'placeholder:text-slate-400', 'outline-none', 'transition-all', 'tracking-tighter')}
                              />
                           </div>
                        </div>
                     </div>

                     {/* 2. STATS CONSOLE - BOX 1 */}
                     <div className={clsx('lg:col-span-3', 'group', 'relative')}>
                        <div className={clsx('relative', 'h-full', 'p-6', 'rounded-[2rem]', 'bg-white/95', 'backdrop-blur-2xl', 'border', 'border-white/50', 'shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)]', 'flex', 'items-center', 'gap-4', 'overflow-hidden', 'transition-all', 'duration-500', 'hover:shadow-brand-gold/5')}>
                           <div className={clsx('absolute', 'top-0', 'right-0', 'w-24', 'h-24', 'bg-brand-gold/5', 'blur-3xl', '-translate-y-12', 'translate-x-12')}></div>
                           <div className={clsx('w-12', 'h-12', 'rounded-2xl', 'bg-brand-navy/5', 'flex', 'items-center', 'justify-center', 'text-brand-gold', 'text-2xl', 'animate-pulse')}>
                              <FiActivity />
                           </div>
                           <div>
                              <p className={clsx('text-3xl', 'font-black', 'text-brand-navy', 'tracking-tighter', 'leading-none', 'mb-1')}>{filteredProducts.length}</p>
                              <p className={clsx('text-[9px]', 'font-bold', 'uppercase', 'tracking-widest', 'text-brand-navy/60', 'leading-none')}>Total Products</p>
                           </div>
                        </div>
                     </div>

                     {/* 3. STATS CONSOLE - BOX 2 */}
                     <div className={clsx('lg:col-span-3', 'group', 'relative')}>
                        <div className={clsx('relative', 'h-full', 'p-6', 'rounded-[2rem]', 'bg-white/95', 'backdrop-blur-2xl', 'border', 'border-white/50', 'hover:border-brand-gold/30', 'flex', 'items-center', 'gap-4', 'group', 'hover:bg-white/98', 'transition-all', 'duration-700', 'shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)]', 'overflow-hidden')}>
                           <div className={clsx('w-12', 'h-12', 'rounded-2xl', 'bg-brand-navy/5', 'flex', 'items-center', 'justify-center', 'text-brand-gold', 'text-2xl', 'transition-colors', 'duration-500')}>
                              <FiGlobe className="group-hover:text-brand-gold-dark" />
                           </div>
                           <div>
                              <p className={clsx('text-lg', 'font-black', 'text-brand-navy', 'tracking-tighter', 'uppercase', 'leading-none', 'mb-1')}>Global</p>
                              <p className={clsx('text-[9px]', 'font-bold', 'uppercase', 'tracking-widest', 'text-brand-navy/60', 'leading-none')}>20+ Countries</p>
                           </div>
                        </div>
                     </div>

                     {/* 4. CATEGORY HUB - BENTO GRID */}
                     <div className={clsx('lg:col-span-12', 'grid', 'grid-cols-7', 'gap-4', 'mt-2')}>
                        {CATEGORIES.map((cat) => (
                           <button
                              key={cat.id}
                              onClick={() => { setSelectedCategory(cat.id); setVisibleCount(ITEMS_PER_PAGE); }}
                              className={`relative group/cat overflow-hidden flex flex-col items-start p-6 rounded-[2.5rem] text-left w-auto transition-all duration-500 border hover-lift
                                  ${selectedCategory === cat.id
                                    ? 'border-brand-gold bg-brand-navy text-white shadow-lg scale-105 z-10'
                                    : 'border-slate-100 bg-slate-50 text-brand-navy hover:bg-white hover:border-brand-gold/30'
                                 }`}
                           >
                              {/* Background Icon Accent */}
                              <div className={`absolute -right-4 -bottom-4 text-7xl opacity-[0.03] group-hover/cat:opacity-[0.08] transition-opacity duration-1000 ${selectedCategory === cat.id ? 'text-brand-gold' : 'text-brand-navy'}`}>
                                 {cat.icon}
                              </div>

                              <div className={`w-10 h-10 rounded-2xl flex items-center justify-center text-xl transition-all duration-700 ${selectedCategory === cat.id ? 'bg-brand-gold text-brand-navy' : 'bg-white shadow-sm text-brand-gold group-hover/cat:rotate-12'
                                 }`}>
                                 {cat.icon}
                              </div>
                              <p className={`text-[11px] font-black uppercase tracking-widest leading-tight ${selectedCategory === cat.id ? 'text-white' : 'text-brand-navy'}`}>
                                 {cat.label}
                              </p>
                           </button>
                        ))}
                     </div>
                  </div>

                  {/* B. MOBILE / TABLET VIEW (Compact User-Friendly Layout - smaller than lg screens) */}
                  <div className={clsx('lg:hidden', 'flex', 'flex-col', 'md:grid', 'md:grid-cols-2', 'gap-4', 'md:gap-6')}>
                     {/* 1. SEARCH CONSOLE */}
                     <div className={clsx('group', 'relative', 'w-full', 'md:col-span-2')}>
                        <div className={clsx('absolute', '-inset-0.5', 'bg-gradient-to-r', 'from-brand-gold', 'to-brand-navy', 'rounded-[2rem]', 'blur', 'opacity-10', 'group-focus-within:opacity-30', 'transition-opacity', 'duration-750')}></div>
                        <div className={clsx('relative', 'w-full', 'p-5', 'md:p-6', 'rounded-[2rem]', 'bg-white/98', 'backdrop-blur-[40px]', 'border', 'border-white/60', 'shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)]', 'flex', 'flex-col', 'justify-center', 'transition-all', 'duration-550')}>
                           <p className={clsx('text-[10px]', 'md:text-[11px]', 'font-black', 'text-brand-navy/80', 'uppercase', 'tracking-[0.35em]', 'mb-2')}>Product Search</p>
                           <div className="relative">
                              <FiSearch className={clsx('absolute', 'left-0', 'top-1/2', '-translate-y-1/2', 'text-xl', 'md:text-2xl', 'text-slate-400', 'group-focus-within:text-brand-gold', 'transition-all', 'duration-700')} />
                              <input
                                 type="text"
                                 placeholder="Type to search products..."
                                 value={searchQuery}
                                 onChange={(e) => { setSearchQuery(e.target.value); setVisibleCount(ITEMS_PER_PAGE); }}
                                 className={clsx('w-full', 'bg-transparent', 'border-none', 'pl-8', 'md:pl-10', 'py-1', 'text-lg', 'md:text-xl', 'font-black', 'text-brand-navy', 'placeholder:text-slate-400', 'outline-none', 'transition-all', 'tracking-tighter')}
                              />
                           </div>
                        </div>
                     </div>

                     {/* 2. CATEGORY SELECTOR */}
                     <div className={clsx('w-full', 'md:col-span-2')}>
                        {/* Mobile Swiper Track (hidden on tablet) */}
                        <div className={clsx('flex', 'md:hidden', 'overflow-x-auto', 'no-scrollbar', 'gap-1.5', 'p-1', 'rounded-full', 'bg-slate-50/80', 'border', 'border-slate-100/50', 'backdrop-blur-md', 'max-w-full', 'shadow-sm')}>
                           {CATEGORIES.map((cat) => (
                              <button
                                 key={cat.id}
                                 onClick={() => { setSelectedCategory(cat.id); setVisibleCount(ITEMS_PER_PAGE); }}
                                 className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[9px] font-black uppercase tracking-widest transition-all duration-300 shrink-0
                                       ${selectedCategory === cat.id
                                       ? 'bg-brand-navy text-white shadow-md border-brand-gold/10'
                                       : 'text-brand-navy/70 hover:text-brand-navy hover:bg-white/80'
                                    }`}
                              >
                                 <span className={clsx('text-[10px]', 'text-brand-gold')}>
                                    {cat.icon}
                                 </span>
                                 <span>{cat.label}</span>
                              </button>
                           ))}
                        </div>

                        {/* Tablet Premium Grid (visible only on md screens) */}
                        <div className={clsx('hidden', 'md:grid', 'grid-cols-3', 'gap-3', 'md:gap-4', 'w-full')}>
                           {CATEGORIES.map((cat) => (
                              <button
                                 key={cat.id}
                                 onClick={() => { setSelectedCategory(cat.id); setVisibleCount(ITEMS_PER_PAGE); }}
                                 className={`relative group/cat overflow-hidden flex items-center gap-4 p-4.5 rounded-[2rem] text-left w-full transition-all duration-500 border hover-lift
                                       ${selectedCategory === cat.id
                                       ? 'border-brand-gold bg-brand-navy text-white shadow-lg'
                                       : 'border-slate-100 bg-slate-50 text-brand-navy hover:bg-white hover:border-brand-gold/30'
                                    }`}
                              >
                                 <div className={`w-9 h-9 rounded-2xl flex items-center justify-center text-base transition-all duration-700 ${selectedCategory === cat.id ? 'bg-brand-gold text-brand-navy' : 'bg-white shadow-sm text-brand-gold'}`}>
                                    {cat.icon}
                                 </div>
                                 <p className={clsx('text-[10px]', 'font-black', 'uppercase', 'tracking-widest', 'leading-tight')}>
                                    {cat.label}
                                 </p>
                              </button>
                           ))}
                        </div>
                     </div>

                     {/* 3. STATS CARDS */}
                     {/* Mobile Capsule (hidden on tablet) */}
                     <div className={clsx('w-full', 'md:hidden')}>
                        <div className={clsx('grid', 'grid-cols-2', 'p-3', 'rounded-full', 'bg-white/95', 'border', 'border-white/60', 'shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)]', 'backdrop-blur-md')}>
                           <div className={clsx('flex', 'items-center', 'justify-center', 'gap-3', 'border-r', 'border-slate-200/60', 'py-1')}>
                              <div className={clsx('w-8', 'h-8', 'rounded-full', 'bg-brand-navy/5', 'flex', 'items-center', 'justify-center', 'text-brand-gold', 'text-base', 'shrink-0', 'animate-pulse')}>
                                 <FiActivity />
                              </div>
                              <div className="text-left">
                                 <p className={clsx('text-lg', 'font-black', 'text-brand-navy', 'leading-none', 'mb-0.5')}>{filteredProducts.length}</p>
                                 <p className={clsx('text-[8px]', 'font-bold', 'uppercase', 'tracking-widest', 'text-brand-navy/60', 'leading-none')}>Total Products</p>
                              </div>
                           </div>
                           <div className={clsx('flex', 'items-center', 'justify-center', 'gap-3', 'py-1')}>
                              <div className={clsx('w-8', 'h-8', 'rounded-full', 'bg-brand-navy/5', 'flex', 'items-center', 'justify-center', 'text-brand-gold', 'text-base', 'shrink-0')}>
                                 <FiGlobe className="text-brand-gold" />
                              </div>
                              <div className="text-left">
                                 <p className={clsx('text-lg', 'font-black', 'text-brand-navy', 'leading-none', 'mb-0.5')}>Global</p>
                                 <p className={clsx('text-[8px]', 'font-bold', 'uppercase', 'tracking-widest', 'text-brand-navy/60', 'leading-none')}>20+ Countries</p>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* Tablet Individual Stats Cards (visible only on md screens) */}
                     <div className={clsx('hidden', 'md:flex', 'items-center', 'gap-4', 'col-span-2', 'w-full')}>
                        <div className={clsx('flex-1', 'p-5', 'rounded-[2rem]', 'bg-white/95', 'border', 'border-slate-100', 'shadow-sm', 'flex', 'items-center', 'gap-4', 'hover-lift', 'transition-all', 'duration-300')}>
                           <div className={clsx('w-11', 'h-11', 'rounded-2xl', 'bg-brand-navy/5', 'flex', 'items-center', 'justify-center', 'text-brand-gold', 'text-xl', 'animate-pulse')}>
                              <FiActivity />
                           </div>
                           <div>
                              <p className={clsx('text-2xl', 'font-black', 'text-brand-navy', 'tracking-tighter', 'leading-none', 'mb-1')}>{filteredProducts.length}</p>
                              <p className={clsx('text-[9px]', 'font-bold', 'uppercase', 'tracking-widest', 'text-brand-navy/60', 'leading-none')}>Total Products</p>
                           </div>
                        </div>
                        <div className={clsx('flex-1', 'p-5', 'rounded-[2rem]', 'bg-white/95', 'border', 'border-slate-100', 'shadow-sm', 'flex', 'items-center', 'gap-4', 'hover-lift', 'transition-all', 'duration-300')}>
                           <div className={clsx('w-11', 'h-11', 'rounded-2xl', 'bg-brand-navy/5', 'flex', 'items-center', 'justify-center', 'text-brand-gold', 'text-xl')}>
                              <FiGlobe />
                           </div>
                           <div>
                              <p className={clsx('text-2xl', 'font-black', 'text-brand-navy', 'tracking-tighter', 'uppercase', 'leading-none', 'mb-1')}>Global</p>
                              <p className={clsx('text-[9px]', 'font-bold', 'uppercase', 'tracking-widest', 'text-brand-navy/60', 'leading-none')}>20+ Countries</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* PRODUCT MANIFEST - UNIQUE CARD ARCHITECTURE */}
               {displayedProducts.length > 0 ? (
                  <>
                     <div className={clsx('grid', 'grid-cols-2', 'sm:grid-cols-2', 'lg:grid-cols-3', 'xl:grid-cols-4', 'gap-3.5', 'md:gap-8', 'pb-20')}>
                        {displayedProducts.map((product, idx) => (
                           <Link
                              key={product.slug}
                              href={`/products/${product.slug}`}
                              className={clsx('group', 'relative', 'animate-reveal', 'opacity-0', 'block')}
                              style={{ animationDelay: `${(idx % 12) * 50}ms` }}
                           >
                              <div className={clsx('relative', 'glass-card', 'bg-white', 'rounded-[2rem]', 'overflow-hidden', 'border-slate-100', 'shadow-sm', 'hover:shadow-2xl', 'transition-all', 'duration-700', 'hover-lift', 'h-full', 'flex', 'flex-col', 'group/card')}>

                                 {/* Visual Manifest */}
                                 <div className={clsx('relative', 'aspect-[4/5]', 'overflow-hidden', 'bg-slate-200', 'animate-pulse')}>
                                    <Image
                                       src={product.image?.replace('/upload/', '/upload/f_auto,q_auto,w_400/')}
                                       alt={product.name}
                                       fill
                                       unoptimized={true}
                                       priority={true}
                                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                       className={clsx('object-cover', 'transition-all', 'duration-[2000ms]', 'group-hover/card:scale-110', 'group-hover/card:rotate-2')}
                                       onLoad={(e) => { e.currentTarget.parentElement.classList.remove('animate-pulse'); e.currentTarget.parentElement.classList.add('bg-transparent'); }}
                                    />

                                    {/* Overlay Hub (Appears on Hover) */}
                                    <div className={clsx('absolute', 'inset-0', 'bg-gradient-to-t', 'from-brand-navy/90', 'via-brand-navy/50', 'to-brand-navy/20', 'opacity-0', 'group-hover/card:opacity-100', 'transition-all', 'duration-700', 'p-4', 'md:p-8', 'flex', 'flex-col', 'justify-between')}>
                                       <div className={clsx('space-y-3', 'md:space-y-4', 'translate-y-8', 'group-hover/card:translate-y-0', 'transition-transform', 'duration-700')}>
                                          <div className={clsx('flex', 'items-center', 'justify-between', 'border-b', 'border-white/10', 'pb-2', 'md:pb-4')}>
                                             <span className={clsx('text-[8px]', 'md:text-[9px]', 'font-black', 'text-white/40', 'uppercase', 'tracking-widest')}>Origin</span>
                                             <span className={clsx('text-[9px]', 'md:text-[10px]', 'font-black', 'text-brand-gold', 'uppercase', 'tracking-widest')}>{product.origin}</span>
                                          </div>
                                          <div className={clsx('flex', 'items-center', 'justify-between', 'border-b', 'border-white/10', 'pb-2', 'md:pb-4')}>
                                             <span className={clsx('text-[8px]', 'md:text-[9px]', 'font-black', 'text-white/40', 'uppercase', 'tracking-widest')}>Moq Status</span>
                                             <span className={clsx('text-[9px]', 'md:text-[10px]', 'font-black', 'text-white', 'uppercase', 'tracking-widest')}>{product.moq}</span>
                                          </div>
                                          <div className={clsx('flex', 'items-center', 'gap-2', 'md:gap-3', 'pt-1', 'md:pt-2')}>
                                             <FiTruck className={clsx('text-brand-gold', 'text-xs', 'md:text-base')} />
                                             <span className={clsx('text-[8px]', 'md:text-[9px]', 'font-black', 'text-white', 'uppercase', 'tracking-widest', 'truncate')}>{product.shipping}</span>
                                          </div>
                                       </div>

                                       <div className={clsx('w-full', 'py-2.5', 'md:py-4', 'bg-brand-gold', 'text-brand-navy', 'rounded-full', 'text-[8px]', 'md:text-[10px]', 'font-black', 'text-center', 'uppercase', 'tracking-[0.2em]', 'md:tracking-[0.3em]', 'hover:bg-white', 'transition-all', 'duration-550', 'active:scale-95')}>
                                          Initialize Inquiry
                                       </div>
                                    </div>

                                    {/* Floating Category Badge */}
                                    <div className={clsx('absolute', 'top-3', 'left-3', 'px-2.5', 'py-1', 'md:top-6', 'md:left-6', 'md:px-4', 'md:py-1.5', 'bg-white/90', 'backdrop-blur-md', 'rounded-full', 'text-[7px]', 'md:text-[8px]', 'font-black', 'text-brand-navy', 'uppercase', 'tracking-widest', 'border', 'border-white', 'shadow-xl', 'group-hover/card:opacity-0', 'transition-opacity')}>
                                       {CATEGORIES.find(c => c.id === product.category)?.label || product.category}
                                    </div>
                                 </div>

                                 {/* Info Manifest */}
                                 <div className={clsx('p-3.5', 'sm:p-5', 'md:p-8', 'flex-1', 'flex', 'flex-col', 'justify-between')}>
                                    <div>
                                       <div className={clsx('flex', 'items-start', 'justify-between', 'gap-1', 'mb-2', 'md:mb-4')}>
                                          <h3 className={clsx('text-xs', 'sm:text-base', 'md:text-xl', 'font-black', 'text-brand-navy', 'uppercase', 'tracking-tight', 'sm:tracking-tighter', 'leading-tight', 'group-hover/card:text-brand-gold', 'transition-colors', 'line-clamp-2')}>
                                             {product.name}
                                          </h3>
                                          <FiChevronRight className={clsx('text-brand-gold', 'text-xs', 'sm:text-base', 'translate-x-0', 'group-hover/card:translate-x-1.5', 'transition-transform', 'shrink-0', 'mt-0.5')} />
                                       </div>
                                       <p className={clsx('text-[8px]', 'sm:text-[9px]', 'md:text-[11px]', 'font-medium', 'text-slate-400', 'uppercase', 'tracking-widest', 'leading-relaxed', 'mb-4', 'md:mb-6', 'line-clamp-2', 'opacity-60')}>
                                          {product.description}
                                       </p>
                                    </div>
                                    <div className={clsx('mt-auto', 'h-0.5', 'w-6', 'bg-slate-100', 'group-hover/card:w-full', 'group-hover/card:bg-brand-gold', 'transition-all', 'duration-700')}></div>
                                 </div>
                              </div>
                           </Link>
                        ))}
                     </div>

                     {/* DYNAMIC LOAD TRIGGER / INFINITE SCROLL OBSERVER */}
                     {visibleCount < filteredProducts.length && (
                        <div ref={loadMoreRef} className={clsx('flex', 'flex-col', 'items-center', 'py-8', 'md:py-12', 'animate-reveal')}>
                           <div className={clsx('w-8', 'h-8', 'border-4', 'border-brand-gold', 'border-t-transparent', 'rounded-full', 'animate-spin')}></div>
                           <p className={clsx('mt-4', 'text-[10px]', 'font-black', 'text-slate-400', 'uppercase', 'tracking-widest')}>Syncing manifest...</p>
                        </div>
                     )}
                  </>
               ) : (
                  <div className={clsx('py-20', 'md:py-24', 'text-center', 'animate-reveal')}>
                     <FiActivity className={clsx('text-5xl', 'text-slate-100', 'mx-auto', 'mb-4', 'animate-pulse')} />
                     <h3 className={clsx('text-xl', 'md:text-2xl', 'font-black', 'text-brand-navy', 'uppercase', 'tracking-widest', 'mb-2')}>No Products Found</h3>
                     <p className={clsx('text-slate-400', 'font-bold', 'uppercase', 'tracking-widest', 'text-[9px]', 'md:text-[10px]')}>No products match your search query.</p>
                  </div>
               )}

               {/* FINAL CTA SECTION */}
               <div className={clsx('py-8', 'md:py-12')}>
                  <div className={clsx('relative', 'p-8', 'sm:p-12', 'md:p-16', 'rounded-[2rem]', 'md:rounded-[2.5rem]', 'text-center', 'shadow-2xl', 'overflow-hidden', 'animate-reveal', 'border', 'border-slate-100', 'border-t-4', 'border-t-brand-gold', 'bg-[#F9FAFB]')}>
                     <div className={clsx('absolute', 'inset-0', 'z-0', 'opacity-20')}>
                        <div className={clsx('absolute', 'top-0', 'right-0', 'w-[600px]', 'h-[600px]', 'bg-brand-gold/20', 'blur-[150px]', 'rounded-full', 'animate-subtle-float')}></div>
                     </div>
                     <div className={clsx('relative', 'z-10', 'max-w-4xl', 'mx-auto')}>
                        <h2 className={clsx('text-3xl', 'sm:text-5xl', 'md:text-6xl', 'lg:text-7xl', 'xl:text-8xl', 'font-black', 'tracking-tighter', 'leading-none', 'mb-6', 'md:mb-8', 'uppercase', 'text-brand-navy')}>
                           BULK <span className="text-gradient">INQUIRY.</span>
                        </h2>
                        <p className={clsx('text-slate-600', 'text-xs', 'sm:text-sm', 'md:text-lg', 'lg:text-xl', 'font-bold', 'uppercase', 'tracking-tight', 'leading-relaxed', 'mb-8', 'md:mb-10', 'opacity-80')}>
                           Need specialized pricing quotes or custom packaging solutions? Connect with our dedicated export sales desk today.
                        </p>
                        <Link href="/contact">
                           <button className={clsx('group', 'relative', 'px-6', 'sm:px-8', 'md:px-10', 'py-3', 'sm:py-4', 'md:py-5', 'bg-brand-navy', 'text-white', 'rounded-full', 'font-black', 'uppercase', 'tracking-[0.3em]', 'text-xs', 'sm:text-sm', 'shadow-2xl', 'hover:bg-brand-gold', 'hover:text-brand-navy', 'transition-all', 'duration-700', 'active:scale-95')}>
                              Inquire About Bulk Orders
                           </button>
                        </Link>
                     </div>
                  </div>
               </div>

             </Container>
          </div>
       </div>
    );
 }
