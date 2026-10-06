"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiGlobe, FiPackage, FiShield, FiArrowUpRight, FiZap, FiArrowRight } from "react-icons/fi";
import clsx from "clsx";

export function ProductCard({ product, onQuoteClick }) {
  const [isActive, setIsActive] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (window.innerWidth < 1024) {
          setIsActive(entry.isIntersecting && entry.intersectionRatio > 0.4);
        }
      },
      {
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1.0],
        rootMargin: "-15% 0% -15% 0%"
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getProductImage = (category) => {
    const images = {
      "fresh-vegetables": 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&h=800&fit=crop',
      "fresh-fruits": 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=600&h=800&fit=crop',
      spices: 'https://images.unsplash.com/photo-1596040033229-a0b3b7d1f4c1?w=600&h=800&fit=crop',
      rice: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=800&fit=crop',
      "wheat-flour": 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=800&fit=crop',
      dehydrated: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600&h=800&fit=crop'
    };
    return images[category] || images["fresh-vegetables"];
  };

  return (
    <div
      ref={cardRef}
      className={`group relative h-[420px] md:h-[550px] flex flex-col rounded-xl md:rounded-2xl overflow-hidden bg-brand-navy shadow-2xl transition-all duration-700 animate-reveal ${isActive ? '-translate-y-4 shadow-2xl' : 'hover:-translate-y-4 hover:shadow-2xl'}`}
    >

      {/* BACKGROUND IMAGE */}
      <div className={clsx('absolute', 'inset-0', 'z-0')}>
        <Image
          src={product.image || getProductImage(product.category)}
          alt={product.alt || `${product.name} - Exporter in India`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover transition-transform duration-1000 ${isActive ? 'scale-110 opacity-40' : 'group-hover:scale-110 opacity-70 group-hover:opacity-40'}`}
        />
        <div className={clsx('absolute', 'inset-0', 'bg-gradient-to-t', 'from-brand-navy', 'via-brand-navy/10', 'to-transparent', 'opacity-80')}></div>
      </div>

      {/* TOP STRIP */}
      <div className={clsx('relative', 'z-10', 'p-5', 'md:p-6', 'flex', 'justify-between', 'items-start')}>
        <div className={clsx('flex', 'flex-col', 'gap-2')}>
         
          <div className={clsx('flex', 'items-center', 'gap-2', 'text-white')}>
            <FiGlobe className="text-xs" />
            <span className={clsx('text-[9px]', 'font-black', 'uppercase', 'tracking-[0.2em]')}>Origin: India</span>
          </div>
        </div>
        <div className={`w-10 h-10 md:w-11 md:h-11 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white text-lg transition-all duration-500 ${isActive ? 'bg-brand-gold text-brand-navy rotate-12 scale-110' : 'group-hover:bg-brand-gold group-hover:text-brand-navy group-hover:rotate-12 group-hover:scale-110'}`}>
          <FiZap />
        </div>
      </div>

      {/* BOTTOM CONTENT */}
      <div className={`relative z-10 mt-auto p-6 md:p-8 flex flex-col gap-4 transition-transform duration-700 ${isActive ? 'translate-y-0' : 'translate-y-12 md:translate-y-8 group-hover:translate-y-0'}`}>

        <div className="space-y-1">
          <p className={clsx('text-white  ', 'text-xs', 'font-black', 'uppercase', 'tracking-[0.4em]')}>{product.category}</p>
          <h3 className={`text-xl sm:text-2xl md:text-3xl font-black transition-colors duration-500 tracking-tighter leading-none ${isActive ? 'text-brand-gold' : 'text-white group-hover:text-brand-gold'}`}>
            {product.name}
          </h3>
        </div>

        {/* REVEALABLE SPECS */}
        <div className={`flex flex-col gap-4 transition-all duration-700 delay-100 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0'}`}>
          <p className={clsx('text-white/60', 'text-xs', 'sm:text-sm', 'font-bold', 'uppercase', 'tracking-widest', 'leading-relaxed', 'line-clamp-2')}>
            {product.description}
          </p>

          <div className={clsx('grid', 'grid-cols-2', 'gap-3')}>
            <div className={clsx('bg-white/5', 'backdrop-blur-md', 'rounded-xl', 'p-3', 'md:p-4', 'border', 'border-white/10')}>
              <p className={clsx('text-[7px]', 'font-black', 'text-brand-gold', 'uppercase', 'tracking-widest', 'mb-1', 'flex', 'items-center', 'gap-1.5')}><FiPackage /> Packing</p>
              <p className={clsx('text-[9px]', 'md:text-[10px]', 'font-black', 'text-white', 'uppercase', 'truncate')}>{product.packaging}</p>
            </div>
        
          </div>
        </div>

        {/* ACTIONS */}
        <div className={`flex gap-3 pt-2 transition-all duration-700 delay-200 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-16 md:translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100'}`}>
          <Link
            href={`/products/${product.slug}`}
            className={clsx('flex-1', 'bg-white/10', 'backdrop-blur-xl', 'border', 'border-white/20', 'text-white', 'font-black', 'text-[9px]', 'md:text-[10px]', 'uppercase', 'tracking-[0.2em]', 'md:tracking-[0.3em]', 'py-3', 'md:py-4', 'rounded-xl', 'hover:bg-white/20', 'transition-all', 'duration-500', 'flex', 'items-center', 'justify-center', 'gap-2')}
          >
            Details
          </Link>
          <button
            onClick={() => onQuoteClick ? onQuoteClick() : window.location.href = '/contact'}
            className={clsx('flex-1', 'bg-brand-gold', 'text-brand-navy', 'font-black', 'text-[9px]', 'md:text-[10px]', 'uppercase', 'tracking-[0.2em]', 'md:tracking-[0.3em]', 'py-3', 'md:py-4', 'rounded-xl', 'shadow-2xl', 'hover:bg-white', 'transition-all', 'duration-500', 'flex', 'items-center', 'justify-center', 'gap-2')}
          >
            Quote <FiArrowUpRight className="text-base md:text-lg" />
          </button>
        </div>
      </div>

      {/* DYNAMIC SHINE EFFECT */}
      <div className={clsx('absolute', 'inset-0', 'pointer-events-none', 'z-20')}>
        <div className={clsx('absolute', 'inset-0', 'bg-gradient-to-r', 'from-transparent', 'via-white/5', 'to-transparent', '-skew-x-12', 'translate-x-[-200%]', 'group-hover:translate-x-[200%]', 'transition-transform', 'duration-1500')}></div>
      </div>

      {/* BORDER GLOW */}
      <div className={`absolute inset-0 border border-white/10 rounded-xl md:rounded-2xl transition-colors duration-700 pointer-events-none ${isActive ? 'border-brand-gold/40 shadow-[inset_0_0_20px_rgba(212,165,116,0.2)]' : 'group-hover:border-brand-gold/30'}`}></div>
    </div>
  );
}
