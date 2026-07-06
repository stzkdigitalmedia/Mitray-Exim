"use client";

import Link from "next/link";
import clsx from "clsx";
import { FiArrowRight, FiGlobe, FiActivity, FiShield, FiZap, FiCheckCircle, FiTruck } from "react-icons/fi";
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';

export function Hero() {
  return (
    <section className={clsx('relative', 'min-h-[90vh]', 'md:min-h-screen', 'flex', 'items-center', 'justify-center', 'overflow-hidden', 'bg-brand-navy', 'pt-32', 'md:pt-40', 'lg:pt-48', 'pb-20', 'md:pb-24')}>
      
      {/* BACKGROUND ARCHITECTURE */}
      <div className={clsx('absolute', 'inset-0', 'z-0')}>
        <Image 
          src="/homeHero.jpg" 
          alt="MITRAY EXIM Premium Agricultural Exports India" 
          fill
          priority={true}
          quality={60}
          className={clsx('object-cover', 'opacity-75')}
        />
        {/* MINIMAL THEME OVERLAY (LEFT TO RIGHT) */}
        <div className={clsx('absolute', 'inset-0', 'bg-gradient-to-r', 'from-brand-navy/95', 'via-brand-navy/70', 'to-transparent')}></div>
        
        {/* DATA SCANNER SWEEP */}
        <div className={clsx('absolute', 'inset-0', 'bg-gradient-to-r', 'from-transparent', 'via-brand-gold/5', 'to-transparent', '-skew-x-12', 'translate-x-[-200%]', 'pointer-events-none')}></div>
      </div>

      <div className={clsx('w-full', 'max-w-[1920px]', 'mx-auto', 'px-4', 'sm:px-6', 'md:px-8', 'lg:px-10', 'xl:px-12', 'relative', 'z-10')}>
        <div className={clsx('grid', 'grid-cols-1', 'lg:grid-cols-12', 'gap-8', 'lg:gap-16', 'items-center')}>
          
          {/* MAIN MANIFEST */}
          <div className={clsx('lg:col-span-12', 'flex', 'flex-col', 'items-center', 'md:items-start', 'text-center', 'md:text-left')}>
            
            {/* BRAND MICRO-INDICATOR */}
            <div className={clsx('inline-flex', 'items-center', 'gap-2', 'md:gap-3', 'px-3', 'md:px-5', 'py-1', 'md:py-2', 'bg-brand-gold/10', 'rounded-xl', 'mb-6', 'md:mb-8', 'animate-reveal-right', 'border', 'border-brand-gold/20', 'backdrop-blur-md')}>
              <div className={clsx('w-1.5', 'h-1.5', 'md:w-2', 'md:h-2', 'rounded-full', 'bg-brand-gold', 'animate-ping')}></div>
              <span className={clsx('text-[8px]', 'sm:text-[9px]', 'md:text-[10px]', 'font-black', 'text-brand-gold', 'uppercase', 'tracking-[0.4em]', 'md:tracking-[0.5em]')}>MITRAY EXIM • INDIA'S PREMIER EXPORT NETWORK</span>
            </div>

            {/* INTEGRATED BRAND HEADLINE */}
            <h1 className={clsx('text-4xl', 'sm:text-5xl', 'md:text-6xl', 'lg:text-6xl', 'xl:text-[5.5rem]', '2xl:text-7xl', 'font-black', 'text-white', 'mb-4', 'md:mb-6', 'tracking-tight', 'leading-[1]', 'md:leading-[0.95]', 'min-h-[160px]', 'sm:min-h-[180px]', 'md:min-h-[200px]', 'xl:min-h-[240px]')}>
              <span className={clsx('block', 'animate-reveal', 'opacity-0')}>MITRAY <span className="text-gradient">EXIM.</span></span>
              <div className={clsx('block', 'animate-reveal', 'delay-500', 'opacity-0', 'text-white/40', 'uppercase', 'mt-2')}>
                <TypeAnimation
                  sequence={[
                    'Bridging india to the World.',
                    2500,
                    'GLOBAL EXCELLENCE.',
                    2500,
                    'PREMIUM QUALITY.',
                    2500,
                    'WORLDWIDE EXPORT.',
                    2500,
                  ]}
                  wrapper="span"
                  speed={20}
                  repeat={0}
                  className="inline-block"
                />
              </div>
            </h1>

            <p className={clsx('text-xs', 'sm:text-sm', 'md:text-lg', 'lg:text-xl', 'xl:text-2xl', 'text-slate-300', 'font-medium', 'max-w-4xl', 'mb-6', 'md:mb-10', 'leading-relaxed', 'animate-reveal', 'delay-300', 'opacity-0', 'uppercase', 'tracking-tight')}>
              India's leading merchant exporter delivering <span className={clsx('text-white', 'font-black', 'decoration-brand-gold', 'decoration-2', 'underline', 'underline-offset-4', 'md:underline-offset-8')}>Fresh Vegetables</span>, Fruits, and Spices to strategic global markets.
            </p>

            <div className={clsx('flex', 'flex-col', 'sm:flex-row', 'items-stretch', 'justify-center', 'sm:justify-start', 'gap-4', 'md:gap-6')}>
              <Link href="/products" className={clsx('group', 'relative', 'w-full', 'sm:w-auto', 'px-8', 'md:px-10', 'py-4', 'md:py-5', 'bg-brand-gold', 'rounded-xl', 'text-brand-navy', 'font-black', 'uppercase', 'tracking-[0.2em]', 'text-xs', 'sm:text-sm', 'md:text-base', 'shadow-2xl', 'hover:bg-white', 'transition-all', 'duration-700', 'active:scale-95', 'overflow-hidden', 'animate-reveal', 'delay-500', 'opacity-0', 'flex', 'items-center', 'justify-center')}>
                <span className={clsx('relative', 'z-10', 'flex', 'items-center', 'justify-center', 'gap-3', 'md:gap-4')}>
                  Explore Products <FiArrowRight className={clsx('text-sm', 'md:text-xl', 'group-hover:translate-x-2', 'transition-transform', 'duration-500')} />
                </span>
              </Link>

              <div className={clsx('flex', 'items-center', 'gap-3', 'md:gap-4', 'px-4', 'sm:px-6', 'md:px-8', 'py-3', 'sm:py-4', 'md:py-5', 'border', 'border-white/10', 'rounded-xl', 'bg-white/5', 'backdrop-blur-md', 'shadow-sm', 'hover:bg-white/10', 'transition-all', 'group', 'cursor-pointer', 'w-full', 'sm:w-auto', 'justify-center', 'sm:justify-start', 'animate-reveal', 'delay-700', 'opacity-0')}>
                 <div className={clsx('w-8', 'h-8', 'md:w-9', 'md:h-9', 'rounded-lg', 'bg-brand-gold/20', 'flex', 'items-center', 'justify-center', 'text-brand-gold', 'group-hover:rotate-12', 'transition-transform')}>
                   <FiGlobe className={clsx('text-sm', 'md:text-base')} />
                 </div>
                 <div className="text-left">
                    <p className={clsx('text-[7px]', 'md:text-[9px]', 'font-black', 'text-white/40', 'uppercase', 'tracking-widest', 'leading-none', 'mb-1')}>Global Supply Chain</p>
                    <p className={clsx('text-[9px]', 'md:text-[11px]', 'font-black', 'text-white', 'uppercase', 'tracking-widest', 'leading-none')}>20+ Export Hubs</p>
                 </div>
              </div>
            </div>
          </div>

          {/* VISUAL ASSET TERMINAL - FLOATING CARDS */}
          {/* <div className={clsx('lg:col-span-5', 'relative', 'hidden', 'lg:block', 'w-full', 'max-w-md', 'lg:max-w-sm', 'xl:max-w-lg', 'mx-auto', 'lg:ml-auto', 'lg:mr-0')}>
            <div className={clsx('relative', 'z-10', 'grid', 'grid-cols-2', 'gap-3', 'md:gap-4', 'xl:gap-6')}>
              {[
                { label: "Fresh Vegetables", img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&h=800&fit=crop" },
                { label: "Premium Spices", img: "/products/gerome-oberste-lehn-HPQOy7x6mAA-unsplash.jpg" },
                { label: "High Quality Grains", img: "/products/flour-wheat-flat-lay-wooden.jpg" },
                { label: "Export Fruits", img: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=600&h=800&fit=crop" },
              ].map((item, i) => (
                <div key={i} className={`relative glass-card p-1 rounded-xl md:rounded-2xl overflow-hidden group shadow-2xl transition-all duration-1000 animate-reveal ${i % 2 !== 0 ? 'translate-y-4 animate-subtle-float delay-300' : '-translate-y-4 animate-subtle-float delay-100'}`} style={{ animationDelay: `${500 + (i * 200)}ms` }}>
                  <div className={clsx('relative', 'aspect-[4/5]', 'rounded-lg', 'md:rounded-xl', 'overflow-hidden')}>
                    <img loading="lazy" decoding="async" src={item.img} alt={item.label} className={clsx('w-full', 'h-full', 'object-cover', 'transition-transform', 'duration-1000', 'group-hover:scale-110', 'opacity-80')} />
                    <div className={clsx('absolute', 'inset-0', 'bg-gradient-to-t', 'from-brand-navy', 'via-transparent', 'to-transparent', 'opacity-60')}></div>
                    <div className={clsx('absolute', 'bottom-4', 'left-4', 'right-4')}>
                       <p className={clsx('text-[9px]', 'font-black', 'text-white', 'uppercase', 'tracking-[0.3em]', 'leading-none')}>{item.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>

      {/* TELEMETRY STRIP */}
      <div className={clsx('absolute', 'bottom-0', 'left-0', 'right-0', 'h-12', 'md:h-20', 'bg-white/5', 'backdrop-blur-2xl', 'border-y', 'border-white/10', 'flex', 'items-center', 'overflow-hidden', 'z-20', 'animate-reveal', 'delay-1000', 'opacity-0')}>
        <div className={clsx('w-full', 'max-w-[1920px]', 'mx-auto', 'px-4', 'sm:px-6', 'md:px-8', 'lg:px-10', 'xl:px-12', 'relative', 'z-10')}>
           <div className={clsx('flex', 'gap-12', 'md:gap-24', 'overflow-hidden', 'whitespace-nowrap', 'animate-marquee-fast')}>
              {[
                { icon: <FiActivity />, label: "Supply Chain", val: "100% Sourced" },
                { icon: <FiShield />, label: "APEDA Certified", val: "Premium Grade" },
                { icon: <FiZap />, label: "Order Delivery", val: "Fast Dispatch" },
                { icon: <FiGlobe />, label: "Global Export", val: "20+ Countries" },
                { icon: <FiCheckCircle />, label: "Quality Standards", val: "FSSAI Certified" },
                { icon: <FiTruck />, label: "Ocean Freight", val: "Fast Transit" },
                // Loop
                { icon: <FiActivity />, label: "Supply Chain", val: "100% Sourced" },
                { icon: <FiShield />, label: "APEDA Certified", val: "Premium Grade" },
                { icon: <FiZap />, label: "Order Delivery", val: "Fast Dispatch" },
                { icon: <FiGlobe />, label: "Global Export", val: "20+ Countries" },
                { icon: <FiCheckCircle />, label: "Quality Standards", val: "FSSAI Certified" },
                { icon: <FiTruck />, label: "Ocean Freight", val: "Fast Transit" },
              ].map((m, i) => (
                <div key={i} className={clsx('flex', 'items-center', 'gap-3', 'md:gap-4')}>
                   <div className={clsx('w-7', 'h-7', 'md:w-9', 'md:h-9', 'rounded-lg', 'bg-brand-gold/10', 'flex', 'items-center', 'justify-center', 'text-brand-gold', 'text-base', 'md:text-lg', 'shadow-[0_0_20px_rgba(212,165,116,0.1)]')}>{m.icon}</div>
                   <div>
                      <p className={clsx('text-[6px]', 'md:text-[7px]', 'font-black', 'text-white/30', 'uppercase', 'tracking-[0.2em]', 'mb-0.5')}>{m.label}</p>
                      <p className={clsx('text-[8px]', 'md:text-[10px]', 'font-black', 'text-white', 'uppercase', 'tracking-[0.2em]')}>{m.val}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
}
