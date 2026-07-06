"use client";

import { Container } from "./Container";
import { FiChevronRight, FiShield, FiGlobe, FiZap } from "react-icons/fi";
import clsx from "clsx";
import Image from "next/image";

export function PageHero({
  badge,
  title,
  description,
  breadcrumbs = [],
  backgroundImage
}) {
  return (
    <section className={clsx('relative', 'min-h-[50vh]', 'md:min-h-[65vh]', 'flex', 'items-center', 'pt-44', 'pb-16', 'md:pt-40', 'md:pb-24', 'overflow-hidden', 'bg-brand-navy')}>

      {/* BACKGROUND ARCHITECTURE - CLEANER & MORE CINEMATIC */}
      <div className={clsx('absolute', 'inset-0', 'z-0')}>
        {backgroundImage ? (
          <>
            <Image
              src={backgroundImage}
              alt={title}
              fill
              priority={true}
              unoptimized={true}
              className={clsx('object-cover', 'opacity-75')}
            />
            {/* Elegant Gradient Overlays */}
            <div className={clsx('absolute', 'inset-0', 'bg-gradient-to-r', 'from-brand-navy', 'via-brand-navy/30', 'to-transparent')}></div>
            <div className={clsx('absolute', 'inset-0', 'bg-gradient-to-t', 'from-brand-navy/90', 'via-transparent', 'to-transparent')}></div>
          </>
        ) : (
          <div className={clsx('w-full', 'h-full', 'bg-brand-navy')}></div>
        )}

        {/* Subtle Atmospheric Glow */}
        <div className={clsx('absolute', 'top-[-20%]', 'right-[-10%]', 'w-[600px]', 'h-[600px]', 'bg-brand-gold/10', 'blur-[150px]', 'rounded-full', 'animate-subtle-float')}></div>
      </div>

      <Container className={clsx('relative', 'z-10')}>
        <div className={clsx('max-w-5xl')}>

          {/* MINIMAL BREADCRUMBS */}
          <div className={clsx('flex', 'items-center', 'gap-3', 'mb-8', 'md:mb-12', 'animate-reveal', 'opacity-0')}>
            {breadcrumbs.map((crumb, idx) => (
              <div key={idx} className={clsx('flex', 'items-center', 'gap-3', 'group')}>
                {idx > 0 && <FiChevronRight className={clsx('text-white/20', 'text-sm')} />}
                <a
                  href={crumb.href || "#"}
                  className={`text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] transition-all ${crumb.href ? 'text-white/40 hover:text-brand-gold' : 'text-brand-gold'
                    }`}
                >
                  {crumb.label}
                </a>
              </div>
            ))}
          </div>

          {/* CONTENT BLOCK */}
          <div className={clsx('space-y-6', 'md:space-y-8')}>
            {/* Clean Badge */}
            {badge && (
              <div className={clsx('inline-flex', 'items-center', 'gap-3', 'px-5', 'py-1.5', 'bg-brand-gold/10', 'border', 'border-brand-gold/20', 'rounded-lg', 'animate-reveal', 'opacity-0', 'backdrop-blur-md')}>
                <div className={clsx('w-1.5', 'h-1.5', 'rounded-full', 'bg-brand-gold')}></div>
                <span className={clsx('text-[9px]', 'md:text-[10px]', 'font-black', 'text-brand-gold', 'uppercase', 'tracking-[0.4em]')}>{badge}</span>
              </div>
            )}

            {/* Bold Elegant Title */}
            <h1 className={clsx('text-5xl', 'sm:text-6xl', 'md:text-6xl', 'lg:text-7xl', 'xl:text-8xl', 'font-black', 'text-white', 'tracking-tight', 'sm:tracking-wider', 'leading-[0.95]', 'sm:leading-[0.9]', 'animate-reveal', 'delay-100', 'opacity-0', 'uppercase')}>
              {title.split('.').map((part, i) => (
                <span key={i} className="block">
                  {part.trim()}
                  {i === title.split('.').length - 1 && part.trim() && <span className="text-brand-gold">.</span>}
                </span>
              ))}
            </h1>

            {/* Clear Description */}
            <p className={clsx('text-sm', 'sm:text-base', 'md:text-xl', 'text-slate-300', 'font-medium', 'max-w-3xl', 'leading-relaxed', 'animate-reveal', 'delay-300', 'opacity-80', 'uppercase', 'tracking-tight')}>
              {description}
            </p>

            {/* TRUST INDICATORS - SIMPLE LINE */}
            <div className={clsx('flex', 'flex-wrap', 'items-center', 'gap-8', 'md:gap-12', 'pt-4', 'animate-reveal', 'delay-500', 'opacity-0')}>
              {[
                { label: "Compliance", val: "Institutional Grade", icon: <FiShield /> },
                { label: "Export Hubs", val: "Global Access", icon: <FiGlobe /> },
                { label: "Efficiency", val: "A-Grade Transit", icon: <FiZap /> }
              ].map((item, i) => (
                <div key={i} className={clsx('flex', 'items-center', 'gap-3', 'opacity-60', 'hover:opacity-100', 'transition-opacity')}>
                  <div className={clsx('text-brand-gold', 'text-lg')}>{item.icon}</div>
                  <div className={clsx('hidden', 'sm:block')}>
                    <p className={clsx('text-[10px]', 'font-black', 'text-white', 'uppercase', 'tracking-widest', 'leading-none')}>{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* SUBTLE SCANNER LINE AT BOTTOM ONLY */}
      <div className={clsx('absolute', 'bottom-0', 'left-0', 'right-0', 'h-px', 'bg-gradient-to-r', 'from-transparent', 'via-brand-gold/20', 'to-transparent', 'w-full')}></div>
    </section>
  );
}
