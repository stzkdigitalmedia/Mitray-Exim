"use client";

import clsx from "clsx";
import { FiArrowRight, FiShield, FiActivity, FiGlobe, FiZap } from "react-icons/fi";

export function CompanyIntro() {
   return (
      <section className={clsx('relative', 'overflow-hidden', 'bg-white')}>

         {/* DECORATIVE BACKGROUND */}
         <div className={clsx('absolute', 'inset-0', 'z-0', 'opacity-40')}>
            <div className={clsx('absolute', 'top-0', 'right-0', 'w-[600px]', 'h-[600px]', 'bg-brand-gold/5', 'blur-[120px]', 'rounded-full', 'animate-subtle-float')}></div>
         </div>

         <div className={clsx('w-full', 'max-w-[1920px]', 'mx-auto', 'px-4', 'sm:px-6', 'md:px-8', 'lg:px-10', 'xl:px-12', 'relative', 'z-10')}>
            <div className={clsx('grid', 'grid-cols-1', 'xl:grid-cols-12', 'gap-12', 'md:gap-16', 'xl:gap-20', 'items-center')}>

               {/* CONTENT MANIFEST */}
               <div className="xl:col-span-7">
                  <div className="max-w-4xl">
                     <div className={clsx('flex', 'items-center', 'gap-4', 'mb-6')}>
                        <div className={clsx('h-px', 'bg-brand-gold', 'animate-line-grow', 'w-0')}></div>
                        <span className={clsx('text-[10px]', 'font-black', 'text-brand-gold', 'uppercase', 'tracking-[0.5em]', 'animate-reveal', 'opacity-0')}>Company Overview</span>
                     </div>
                     <h2 className={clsx('text-4xl', 'sm:text-5xl', 'md:text-6xl', 'lg:text-7xl', 'xl:text-8xl', 'font-black', 'text-brand-navy', 'mb-8', 'tracking-tighter', 'leading-[0.85]', 'animate-reveal', 'delay-100', 'opacity-0')}>
                        HERITAGE OF <br />
                        <span className="text-gradient">EXCELLENCE.</span>
                     </h2>
                     <div className={clsx('space-y-6', 'md:space-y-8', 'animate-reveal', 'delay-300', 'opacity-0')}>
                        <p className={clsx('text-sm', 'sm:text-base', 'md:text-lg', 'lg:text-xl', 'text-slate-500', 'font-bold', 'uppercase', 'tracking-tight', 'leading-relaxed', 'max-w-3xl')}>
                           Mitray is a premier export company in Gujarat and trusted merchant exporter in India, specializing in the international delivery of premium fresh fruits, authentic Indian spices, fresh vegetables, and certified agricultural products.
                        </p>
                        <p className={clsx('text-xs', 'sm:text-sm', 'md:text-base', 'lg:text-lg', 'text-slate-400', 'font-medium', 'uppercase', 'tracking-tight', 'leading-relaxed', 'max-w-3xl', 'opacity-70')}>
                           As an established food exporter and exporter in India, our operations are rooted in stringent APEDA and FSSAI standards, cold chain excellence, and port-side dispatch via Mundra and Kandla ports, bridging India's fertile agrarian basins to the UAE, Saudi Arabia, Europe, the UK, and North America.
                        </p>
                     </div>

                     {/* KEY METRICS GRID */}
                     <div className={clsx('grid', 'grid-cols-2', 'lg:grid-cols-4', 'gap-3', 'sm:gap-4', 'md:gap-5', 'lg:gap-6', 'xl:gap-3', '2xl:gap-6', 'mt-8', 'md:mt-12', 'animate-reveal', 'delay-500', 'opacity-0')}>
                        {[
                           { val: "2026", label: "Establishment", icon: <FiActivity /> },
                           { val: "20+", label: "Trade Hubs", icon: <FiGlobe /> },
                           { val: "100%", label: "Compliance", icon: <FiShield /> },
                           { val: "Premium", label: "Quality Sourcing", icon: <FiZap /> },
                        ].map((stat, idx) => (
                           <div key={idx} className={clsx('glass-card', 'p-3', 'sm:p-4', 'lg:p-5', 'xl:p-3', '2xl:p-6', 'rounded-sm', 'border', 'border-slate-200', 'bg-slate-50/50', 'group', 'hover:bg-brand-navy', 'transition-all', 'duration-700', 'shadow-sm', 'flex', 'flex-col', 'items-center', 'sm:items-start', 'text-center', 'sm:text-left', 'min-w-0', 'overflow-hidden')}>
                              <div className={clsx('text-brand-gold', 'text-base', 'lg:text-xl', 'xl:text-lg', '2xl:text-xl', 'mb-1.5', 'md:mb-3', 'group-hover:text-brand-gold', 'transition-colors', 'shrink-0')}>{stat.icon}</div>
                              <p className={clsx('text-sm', 'sm:text-base', 'md:text-lg', 'lg:text-xl', 'xl:text-base', '2xl:text-xl', 'font-black', 'text-brand-navy', 'mb-0.5', 'md:mb-1', 'group-hover:text-brand-gold', 'tracking-tight', 'transition-colors', 'break-words', 'whitespace-normal', 'w-full')}>{stat.val}</p>
                              <p className={clsx('text-[8px]', 'lg:text-[9px]', 'xl:text-[7px]', '2xl:text-[9px]', 'font-black', 'text-slate-400', 'uppercase', 'tracking-wide', 'md:tracking-wider', 'group-hover:text-brand-gold', 'transition-colors', 'leading-tight', 'break-words', 'whitespace-normal', 'w-full')}>{stat.label}</p>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>

               {/* VISUAL ASSET TERMINAL */}
               <div className={clsx('xl:col-span-5', 'relative', 'hidden', 'xl:block', 'animate-reveal', 'delay-700', 'opacity-0')}>
                  <div className={clsx('relative', 'glass-card', 'p-2', 'rounded-sm', 'bg-slate-100', 'shadow-2xl', 'overflow-hidden', 'border-white')}>
                     <img loading="lazy" decoding="async"
                        src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=1000&fit=crop"
                        alt="MITRAY EXIM Operational Excellence"
                        className={clsx('w-full', 'h-full', 'object-cover', 'rounded-sm', 'opacity-90', 'grayscale', 'hover:grayscale-0', 'transition-all', 'duration-1000', 'scale-105', 'hover:scale-100')}
                     />
                     <div className={clsx('absolute', 'inset-0', 'bg-gradient-to-t', 'from-brand-navy', 'via-transparent', 'to-transparent', 'opacity-60')}></div>

                     {/* HUD OVERLAY */}
                     <div className={clsx('absolute', 'bottom-10', 'left-10', 'right-10')}>
                        <div className={clsx('glass-panel', 'p-6', 'rounded-sm', 'border-white/20', 'bg-white/10', 'backdrop-blur-xl')}>
                           <div className={clsx('flex', 'items-center', 'gap-4', 'mb-3')}>
                              <div className={clsx('w-2', 'h-2', 'rounded-full', 'bg-emerald-500', 'animate-pulse')}></div>
                              <span className={clsx('text-[9px]', 'font-black', 'text-white', 'uppercase', 'tracking-widest')}>Active Sourcing Network</span>
                           </div>
                           <p className={clsx('text-[11px]', 'font-black', 'text-brand-gold', 'uppercase', 'tracking-[0.2em]')}>Verified Quality Standards</p>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>
   );
}
