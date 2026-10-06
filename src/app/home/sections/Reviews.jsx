"use client";
import { TESTIMONIALS } from "@/data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./testimonial-swiper.css";
import { FiStar, FiCheckCircle, FiActivity, FiZap, FiShield, FiArrowLeft, FiArrowRight, FiGlobe } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";
import clsx from "clsx";

export function Reviews() {
  return (
    <section className={clsx('relative', 'overflow-hidden', 'py-12', 'md:py-20', 'bg-slate-50')}>

      {/* UNIFIED ATMOSPHERIC BACKGROUND */}
      <div className={clsx('absolute', 'inset-0', 'z-0', 'opacity-30', 'pointer-events-none')}>
        <div className={clsx('absolute', 'top-1/4', '-right-20', 'w-[600px]', 'h-[600px]', 'bg-brand-gold/5', 'blur-[120px]', 'rounded-full', 'animate-subtle-float')}></div>
        <div className={clsx('absolute', 'bottom-1/4', '-left-20', 'w-[600px]', 'h-[600px]', 'bg-brand-navy/5', 'blur-[120px]', 'rounded-full', 'animate-subtle-float', 'delay-700')}></div>
      </div>

      <div className={clsx('w-full', 'max-w-[1920px]', 'mx-auto', 'px-4', 'sm:px-6', 'md:px-8', 'lg:px-10', 'xl:px-12', 'relative', 'z-10')}>

        {/* STANDARDIZED HEADER ARCHITECTURE */}
        <div className={clsx('text-center', 'max-w-4xl', 'mx-auto', 'mb-10', 'md:mb-16')}>
          <div className={clsx('flex', 'items-center', 'justify-center', 'gap-4', 'mb-6')}>
            <div className={clsx('h-px', 'bg-brand-gold', 'animate-line-grow', 'w-0')}></div>
            <span className={clsx('text-[10px]', 'font-black', 'text-brand-gold', 'uppercase', 'tracking-[0.5em]', 'animate-reveal', 'opacity-0')}>Client Testimonials</span>
            <div className={clsx('h-px', 'bg-brand-gold', 'animate-line-grow', 'w-0')}></div>
          </div>
          <h2 className={clsx('text-4xl', 'sm:text-5xl', 'md:text-6xl', 'lg:text-7xl', 'xl:text-8xl', 'font-black', 'text-brand-navy', 'mb-6', 'tracking-tighter', 'leading-[0.85]', 'animate-reveal', 'delay-100', 'opacity-0')}>
            TRUSTED BY <br />
            <span className="text-gradient">OUR CLIENTS.</span>
          </h2>
          <p className={clsx('text-sm', 'sm:text-base', 'md:text-lg', 'text-slate-500', 'font-medium', 'max-w-2xl', 'mx-auto', 'leading-relaxed', 'uppercase', 'tracking-tight', 'opacity-0', 'animate-reveal', 'delay-200')}>
            Premium reliability for agricultural exports. Trusted by major importers, wholesalers, and supermarkets worldwide.
          </p>
        </div>

        {/* TESTIMONIAL TERMINAL */}
        <div className={clsx('relative', 'mb-16', 'md:mb-24', 'group', 'animate-reveal', 'delay-400', 'opacity-0')}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            navigation={{
              prevEl: ".rev-prev",
              nextEl: ".rev-next",
            }}
            autoplay={{ delay: 10000 }}
            speed={1500}
            loop={true}
            className={clsx('max-w-6xl', 'mx-auto', 'pb-16', 'md:pb-0')}
          >
            {TESTIMONIALS.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className={clsx('relative', 'p-2', 'md:p-4')}>
                  <div className={clsx('relative', 'glass-card', 'bg-white/80', 'rounded-2xl', 'md:rounded-[2rem]', 'overflow-hidden', 'border-white', 'shadow-[0_30px_60px_-15px_rgba(44,74,94,0.1)]', 'group/card', 'p-2', 'md:p-6')}>

                    <div className={clsx('p-4', 'md:p-8')}>
                      <div className={clsx('flex', 'flex-col', 'md:flex-row', 'md:items-center', 'justify-between', 'gap-6', 'mb-8', 'md:mb-10')}>
                        <div className={clsx('flex', 'items-center', 'gap-4', 'md:gap-6')}>
                          <div className="relative">
                            <div className={clsx('w-12', 'h-12', 'md:w-20', 'md:h-20', 'bg-gradient-to-br from-brand-gold to-brand-navy', 'rounded-xl', 'flex', 'items-center', 'justify-center', 'text-white', 'font-black', 'text-xl', 'md:text-4xl', 'shadow-xl', 'relative', 'z-10', 'border-2', 'border-white', 'overflow-hidden')}>
                              <span>{testimonial.name.charAt(0).toUpperCase()}</span>
                            </div>
                            <div className={clsx('absolute', '-bottom-1', '-right-1', 'w-7', 'h-7', 'bg-brand-gold', 'rounded-lg', 'border-2', 'border-white', 'flex', 'items-center', 'justify-center', 'shadow-lg', 'z-20')}>
                              <img loading="lazy" decoding="async" src={`https://flagcdn.com/w80/${testimonial.countryCode}.png`} alt={testimonial.location} className={clsx('w-4', 'rounded-sm')} />
                            </div>
                          </div>
                          <div className="text-left">
                            <h4 className={clsx('text-lg', 'sm:text-xl', 'md:text-3xl', 'font-black', 'text-brand-navy', 'tracking-tighter', 'mb-1')}>{testimonial.name}</h4>
                            <p className={clsx('text-[9px]', 'md:text-[10px]', 'font-black', 'text-brand-gold', 'uppercase', 'tracking-[0.2em]')}>{testimonial.designation}</p>
                          </div>
                        </div>

                        <div className={clsx('flex', 'flex-col', 'items-start', 'md:items-end', 'gap-2')}>


                        </div>
                      </div>

                      <div className={clsx('relative', 'mb-8', 'md:mb-10', 'text-center', 'md:text-left')}>
                        <FaQuoteLeft className={clsx('absolute', '-top-10', '-left-6', 'md:-top-12', 'md:-left-12', 'text-6xl', 'md:text-9xl', 'text-brand-navy/5', 'pointer-events-none', 'group-hover/card:scale-110', 'transition-transform', 'duration-1000')} />
                        <h3 className={clsx('text-lg', 'md:text-3xl', 'font-bold', 'text-brand-navy', 'leading-[1.3]', 'md:leading-[1.15]', 'tracking-tight', 'italic', 'relative', 'z-10')}>
                          {testimonial.text}
                        </h3>
                      </div>

                      <div className={clsx('pt-6', 'md:pt-8', 'border-t', 'border-slate-100', 'flex', 'flex-wrap', 'items-center', 'justify-between', 'gap-4')}>
                        <div className={clsx('flex', 'items-center', 'gap-4')}>

                        </div>
                        <div className={clsx('text-[9px]', 'font-black', 'text-slate-300', 'uppercase', 'tracking-[0.3em]')}>Verified Trade Partner</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={clsx('absolute', 'bottom-5', 'left-6', 'sm:left-8', 'md:bottom-auto', 'md:top-1/2', 'md:-translate-y-1/2', 'md:left-0', 'md:right-0', 'z-20', 'flex', 'gap-4', 'md:gap-0', 'md:justify-between', 'pointer-events-none')}>
            <button aria-label="Previous client testimonial" className={clsx('rev-prev', 'w-10', 'h-10', 'md:w-16', 'md:h-16', 'rounded-xl', 'bg-white', 'shadow-xl', 'border', 'border-slate-100', 'flex', 'items-center', 'justify-center', 'text-brand-navy', 'hover:bg-brand-navy', 'hover:text-white', 'transition-all', 'duration-700', 'pointer-events-auto', 'md:-translate-x-6', 'group-hover:translate-x-0')}>
              <FiArrowLeft className={clsx('text-lg', 'md:text-xl')} />
            </button>
            <button aria-label="Next client testimonial" className={clsx('rev-next', 'w-10', 'h-10', 'md:w-16', 'md:h-16', 'rounded-xl', 'bg-white', 'shadow-xl', 'border', 'border-slate-100', 'flex', 'items-center', 'justify-center', 'text-brand-navy', 'hover:bg-brand-navy', 'hover:text-white', 'transition-all', 'duration-700', 'pointer-events-auto', 'md:translate-x-6', 'group-hover:translate-x-0')}>
              <FiArrowRight className={clsx('text-lg', 'md:text-xl')} />
            </button>
          </div>
        </div>

        {/* TRUST ACCELERATOR */}
        <div className={clsx('grid', 'grid-cols-1', 'md:grid-cols-3', 'gap-px', 'bg-slate-100/30', 'rounded-xl', 'md:rounded-2xl', 'overflow-hidden', 'border', 'border-slate-100', 'animate-reveal', 'delay-700', 'opacity-0')}>
          {[
            { label: "Global Reach", val: "20+ Trade Corridors", icon: <FiGlobe /> },
            { label: "Transit Logistics", val: "A-Grade Efficiency", icon: <FiZap /> },
            { label: "Compliance Status", val: "100% Export Verified", icon: <FiShield /> }
          ].map((item, i) => (
            <div key={i} className={clsx('bg-white', 'p-6', 'md:p-10', 'flex', 'flex-col', 'items-center', 'text-center', 'group', 'hover:bg-brand-navy', 'transition-all', 'duration-700', 'cursor-default')}>
              <div className={clsx('w-12', 'h-12', 'rounded-xl', 'bg-slate-50', 'flex', 'items-center', 'justify-center', 'text-brand-gold', 'text-xl', 'mb-4', 'group-hover:bg-white/10', 'transition-all', 'duration-700', 'group-hover:rotate-12')}>
                {item.icon}
              </div>
              <p className={clsx('text-[8px]', 'font-black', 'text-slate-300', 'uppercase', 'tracking-[0.3em]', 'mb-1', 'group-hover:text-white/40', 'leading-none')}>{item.label}</p>
              <p className={clsx('text-lg', 'md:text-xl', 'font-black', 'text-brand-navy', 'uppercase', 'tracking-tighter', 'group-hover:text-white', 'leading-none')}>{item.val}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
