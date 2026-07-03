"use client";

import { CERTIFICATIONS } from "@/data/certifications";
import { FiShield, FiCheckCircle, FiDownload, FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import clsx from "clsx";

const n = CERTIFICATIONS.length;
const extendedCerts = Array(9).fill(CERTIFICATIONS).flat();

export function Certifications() {
  const scrollContainerRef = useRef(null);
  const activeCardRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(n * 4); // Start at the middle copy
  const [isAutoScroll, setIsAutoScroll] = useState(true);
  const [isSnapping, setIsSnapping] = useState(false);
  const autoScrollTimeoutRef = useRef(null);
  const snapTimeoutRef = useRef(null);

  useEffect(() => {
    if (!isAutoScroll) return;

    autoScrollTimeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 3000);

    return () => clearTimeout(autoScrollTimeoutRef.current);
  }, [isAutoScroll, currentIndex]);

  // Function to center the active card
  const centerCard = (instant = false) => {
    const container = scrollContainerRef.current;
    const activeCard = activeCardRef.current;
    if (!container || !activeCard) return;

    // container must be relative for offsetLeft to be accurate to the scroll content
    const scrollLeft = activeCard.offsetLeft - (container.clientWidth / 2) + (activeCard.offsetWidth / 2);
    container.scrollTo({
      left: scrollLeft,
      behavior: instant ? "auto" : "smooth",
    });
  };

  useEffect(() => {
    centerCard(isSnapping);

    if (isSnapping) {
      const timer = setTimeout(() => setIsSnapping(false), 50);
      return () => clearTimeout(timer);
    } else {
      if (currentIndex >= n * 7 || currentIndex <= n * 2) {
        clearTimeout(snapTimeoutRef.current);
        snapTimeoutRef.current = setTimeout(() => {
          setIsSnapping(true);
          setCurrentIndex((prev) => (n * 4) + (prev % n));
        }, 700); // Wait for CSS transition
      }
    }
  }, [currentIndex, isSnapping]);

  useEffect(() => {
    const handleResize = () => {
      centerCard(true); // Re-center instantly on resize
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
    setIsAutoScroll(false);
    clearTimeout(autoScrollTimeoutRef.current);
    autoScrollTimeoutRef.current = setTimeout(() => {
      setIsAutoScroll(true);
    }, 5000);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setIsAutoScroll(false);
    clearTimeout(autoScrollTimeoutRef.current);
    autoScrollTimeoutRef.current = setTimeout(() => {
      setIsAutoScroll(true);
    }, 5000);
  };

  const handleDotClick = (index) => {
    setCurrentIndex((prev) => {
      const currentMod = prev % n;
      const diff = index - currentMod;
      return prev + diff;
    });
    setIsAutoScroll(false);
    clearTimeout(autoScrollTimeoutRef.current);
    autoScrollTimeoutRef.current = setTimeout(() => {
      setIsAutoScroll(true);
    }, 5000);
  };

  return (
    <section className={clsx('relative', 'py-12', 'md:py-20', 'overflow-hidden', 'bg-white')}>

      {/* BACKGROUND TEXTURE */}
      <div className={clsx('absolute', 'inset-0', 'z-0', 'opacity-40')}>
        <div className={clsx('absolute', 'top-0', 'right-0', 'w-full', 'h-full', 'bg-[radial-gradient(circle_at_90%_10%,rgba(212,165,116,0.03)_0%,transparent_50%))]')}></div>
        <div className={clsx('absolute', 'bottom-0', 'left-0', 'w-full', 'h-full', 'bg-[radial-gradient(circle_at_10%_90%,rgba(44,74,94,0.03)_0%,transparent_50%))]')}></div>
      </div>

      <div className={clsx('w-full', 'max-w-[1920px]', 'mx-auto', 'px-4', 'sm:px-6', 'md:px-8', 'lg:px-10', 'xl:px-12', 'relative', 'z-10')}>

        {/* STANDARDIZED HEADER ARCHITECTURE */}
        <div className={clsx('text-center', 'max-w-4xl', 'mx-auto', 'mb-10', 'md:mb-16')}>
          <div className={clsx('flex', 'items-center', 'justify-center', 'gap-4', 'mb-6')}>
            <div className={clsx('h-px', 'bg-brand-gold', 'animate-line-grow', 'w-0')}></div>
            <span className={clsx('text-[10px]', 'font-black', 'text-brand-gold', 'uppercase', 'tracking-[0.5em]', 'animate-reveal', 'opacity-0')}>Trust Certifications</span>
            <div className={clsx('h-px', 'bg-brand-gold', 'animate-line-grow', 'w-0')}></div>
          </div>
          <h2 className={clsx('text-4xl', 'sm:text-5xl', 'md:text-6xl', 'lg:text-7xl', 'xl:text-8xl', 'font-black', 'text-brand-navy', 'mb-6', 'tracking-tighter', 'leading-[0.85]', 'animate-reveal', 'opacity-0')}>
            GLOBAL <br />
            <span className="text-gradient">CERTIFICATIONS.</span>
          </h2>
          <p className={clsx('text-sm', 'sm:text-base', 'md:text-lg', 'text-slate-500', 'font-medium', 'max-w-2xl', 'mx-auto', 'leading-relaxed', 'uppercase', 'tracking-tight', 'opacity-0', 'animate-reveal', 'delay-300')}>
            MITRAY EXIM maintains strict export quality and safety standards, verified by APEDA, FSSAI, and international food safety authorities.
          </p>
        </div>

        {/* HORIZONTAL CARD CAROUSEL - AUTO SCROLLING */}
        <div className={clsx('relative', 'animate-reveal', 'delay-300', 'opacity-0', '-mx-4', 'px-4', 'md:-mx-12', 'md:px-12')}>
          {/* Fade overlays */}
          <div className={clsx('absolute', 'left-0', 'top-0', 'bottom-0', 'w-8', 'md:w-16', 'bg-gradient-to-r', 'from-white', 'via-white', 'to-transparent', 'z-30', 'pointer-events-none')}></div>
          <div className={clsx('absolute', 'right-0', 'top-0', 'bottom-0', 'w-8', 'md:w-16', 'bg-gradient-to-l', 'from-white', 'via-white', 'to-transparent', 'z-30', 'pointer-events-none')}></div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className={clsx('absolute', 'left-0', 'top-1/2', '-translate-y-1/2', 'z-40', 'w-10', 'h-10', 'md:w-12', 'md:h-12', 'bg-brand-navy', 'text-white', 'rounded-full', 'flex', 'items-center', 'justify-center', 'hover:bg-brand-gold', 'hover:text-brand-navy', 'transition-all', 'duration-300', 'shadow-lg', 'active:scale-90', '-translate-x-16', 'md:-translate-x-20')}
          >
            <FiChevronLeft className={clsx('text-lg', 'md:text-xl')} />
          </button>

          <button
            onClick={handleNext}
            className={clsx('absolute', 'right-0', 'top-1/2', '-translate-y-1/2', 'z-40', 'w-10', 'h-10', 'md:w-12', 'md:h-12', 'bg-brand-navy', 'text-white', 'rounded-full', 'flex', 'items-center', 'justify-center', 'hover:bg-brand-gold', 'hover:text-brand-navy', 'transition-all', 'duration-300', 'shadow-lg', 'active:scale-90', 'translate-x-16', 'md:translate-x-20')}
          >
            <FiChevronRight className={clsx('text-lg', 'md:text-xl')} />
          </button>

          <div
            ref={scrollContainerRef}
            className={`relative flex gap-6 overflow-x-auto scroll-smooth py-12 md:py-16 no-scrollbar ${isSnapping ? "is-snapping" : ""}`}
            style={{
              scrollBehavior: "smooth",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitScrollbar: "none",
            }}
          >
            {/* Hide scrollbar with CSS */}
            <style>{`
              div::-webkit-scrollbar {
                display: none !important;
                width: 0 !important;
                height: 0 !important;
              }
              .is-snapping * {
                transition: none !important;
              }
            `}</style>

            {/* Start Spacer */}
            <div className={clsx('flex-shrink-0', 'w-[calc(50%-144px-12px)]', 'md:w-[calc(50%-160px-12px)]', 'lg:w-[calc(50%-192px-12px)]')} aria-hidden="true"></div>

            {extendedCerts.map((cert, index) => {
              const isMiddle = index === currentIndex;

              return (
                <div
                  key={`${cert.id}-${index}`}
                  ref={isMiddle ? activeCardRef : null}
                  className={clsx('flex-shrink-0', 'w-72', 'md:w-80', 'lg:w-96', 'transition-all', 'duration-700', 'ease-out', 'px-2')}
                  style={{
                    transform: isMiddle ? "scale(1)" : "scale(0.85)",
                    opacity: isMiddle ? 1 : 0.6,
                  }}
                >
                  <div className={`relative glass-card rounded-2xl md:rounded-3xl flex flex-col h-full transition-all duration-700 group overflow-visible ${isMiddle
                    ? "p-6 md:p-8 bg-white/90 shadow-2xl ring-2 ring-brand-gold/50"
                    : "p-6 md:p-8 bg-white/60"
                    }`}>

                    {/* Focus Glow Effect for Middle Card */}
                    {isMiddle && (
                      <>
                        <div className={clsx('absolute', '-inset-1', 'bg-gradient-to-r', 'from-brand-gold/20', 'via-brand-gold/10', 'to-transparent', 'rounded-2xl', 'md:rounded-3xl', 'blur-2xl', 'opacity-0', 'group-hover:opacity-100', 'transition-opacity', 'duration-500', 'pointer-events-none')}></div>
                        <div className={clsx('absolute', '-top-0.5', 'left-0', 'right-0', 'h-px', 'bg-gradient-to-r', 'from-transparent', 'via-brand-gold/50', 'to-transparent', 'pointer-events-none')}></div>
                      </>
                    )}

                    {/* Logo Container — large circle, minimal padding */}
                    <div className={clsx('relative', 'flex', 'items-center', 'justify-center', 'mb-6', 'md:mb-8', 'z-10')}>
                      <div className={clsx('relative', 'w-36', 'h-36', 'md:w-40', 'md:h-40', 'lg:w-48', 'lg:h-48')}>
                        {isMiddle && (
                          <div className={clsx('absolute', '-inset-4', 'bg-brand-gold/10', 'rounded-full', 'blur-xl', 'animate-pulse')}></div>
                        )}
                        <div className={clsx('absolute', 'inset-0', 'bg-brand-gold/5', 'rounded-full', 'group-hover:bg-brand-gold/10', 'transition-colors', 'duration-500')}></div>
                        <div className={`relative w-full h-full glass-panel rounded-full flex items-center justify-center  border-white transition-all duration-500 ${isMiddle ? "group-hover:shadow-2xl" : "group-hover:shadow-lg"}`}>
                          <img
                            loading="lazy"
                            decoding="async"
                            src={cert.logo}
                            alt={cert.fullName}
                            className={clsx('w-full', 'h-full', 'object-contain', 'transition-all', 'duration-500', 'opacity-90', 'group-hover:opacity-100', 'group-hover:scale-105')}
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                          <div className={clsx('hidden', 'flex-col', 'items-center', 'justify-center', 'text-center', 'w-full', 'h-full')}>
                            <FiShield className={clsx('text-5xl', 'md:text-6xl', 'text-brand-gold/40', 'group-hover:text-brand-gold', 'transition-colors')} />
                          </div>
                        </div>
                      </div>
                    </div>


                    {/* Text Content */}
                    <div className={clsx('relative', 'flex-1', 'space-y-3', 'md:space-y-4', 'text-center', 'z-10')}>
                      <div>
                        <h3 className={`font-black tracking-tight mb-1.5 transition-colors duration-500 ${isMiddle ? "text-lg md:text-xl lg:text-2xl text-brand-gold" : "text-base md:text-lg lg:text-xl text-brand-navy group-hover:text-brand-gold"
                          }`}>
                          {cert.name}
                        </h3>
                        <p className={clsx('text-[10px]', 'md:text-xs', 'font-bold', 'text-slate-400', 'uppercase', 'tracking-wider', 'leading-tight', 'px-2')}>{cert.fullName}</p>
                      </div>

                      <div className={`h-px mx-auto transition-all duration-500 ${isMiddle ? "w-10 md:w-12 bg-brand-gold" : "w-8 md:w-10 bg-slate-200 group-hover:w-12 group-hover:bg-brand-gold/30"}`}></div>

                      <p className={clsx('text-slate-500', 'text-[10px]', 'md:text-xs', 'lg:text-sm', 'leading-relaxed', 'font-bold', 'tracking-wide', 'opacity-70', 'line-clamp-3', 'md:line-clamp-none')}>
                        {cert.description}
                      </p>
                    </div>

                    {/* Action Buttons - Show only when middle card is in focus */}
                    <div className={`relative mt-6 md:mt-8 grid grid-cols-2 gap-3 z-10 transition-all duration-500 ${isMiddle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}`}>
                      <button 
                        onClick={() => {
                          if (cert.downloadLink) {
                            window.open(cert.downloadLink, '_blank', 'noopener,noreferrer');
                          } else {
                            const link = document.createElement('a');
                            link.href = cert.logo;
                            link.download = `${cert.name}-Certificate.png`;
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                          }
                        }}
                        className={clsx('flex', 'items-center', 'justify-center', 'gap-1.5', 'py-3', 'px-2', 'bg-brand-navy', 'text-white', 'rounded-xl', 'text-[9px]', 'md:text-[10px]', 'lg:text-xs', 'font-black', 'uppercase', 'tracking-wider', 'hover:bg-brand-gold', 'hover:text-brand-navy', 'transition-all', 'duration-300', 'active:scale-95', 'shadow-md', 'hover:shadow-lg')}
                      >
                        <FiDownload className={clsx('text-sm', 'md:text-base')} /> Cert.
                      </button>
                      <Link 
                        href="/certifications"
                        className={clsx('flex', 'items-center', 'justify-center', 'gap-1.5', 'py-3', 'px-2', 'border-2', 'border-brand-gold', 'text-brand-navy', 'rounded-xl', 'text-[9px]', 'md:text-[10px]', 'lg:text-xs', 'font-black', 'uppercase', 'tracking-wider', 'hover:bg-brand-gold', 'hover:text-white', 'transition-all', 'duration-300', 'active:scale-95', 'shadow-sm', 'hover:shadow-md')}
                      >
                        <FiCheckCircle className={clsx('text-sm', 'md:text-base')} /> Verify
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* End Spacer */}
            <div className={clsx('flex-shrink-0', 'w-[calc(50%-144px-12px)]', 'md:w-[calc(50%-160px-12px)]', 'lg:w-[calc(50%-192px-12px)]')} aria-hidden="true"></div>
          </div>

          {/* Dot Indicators */}
          <div className={clsx('flex', 'items-center', 'justify-center', 'gap-2', 'mt-8', 'md:mt-10')}>
            {CERTIFICATIONS.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`transition-all duration-500 rounded-full ${index === (currentIndex % n)
                  ? "w-8 h-2 bg-brand-gold shadow-lg shadow-brand-gold/50"
                  : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* FOOTER ACTION */}


        <div className={clsx('mt-10', 'sm:mt-14', 'md:mt-16', 'pt-6', 'sm:pt-8', 'border-t', 'border-slate-100', 'flex', 'flex-col', 'sm:flex-row', 'items-center', 'justify-between', 'gap-4', 'sm:gap-6', 'md:gap-8', 'animate-reveal', 'delay-700', 'opacity-0')}>
          <div className={clsx('flex', 'items-center', 'gap-2', 'sm:gap-3')}>
            <div className={clsx('flex', '-space-x-2', 'sm:-space-x-3')}>
              {[1, 2, 3, 4].map(i => (
                <div key={i} className={clsx('w-8', 'h-8', 'sm:w-10', 'sm:h-10', 'rounded-full', 'border-2', 'border-white', 'bg-slate-100', 'flex', 'items-center', 'justify-center', 'text-brand-navy', 'text-[8px]', 'sm:text-[10px]', 'font-black', 'hover:z-10', 'transition-transform', 'hover:-translate-y-1')}>
                  {i}
                </div>
              ))}
            </div>
            <p className={clsx('text-[8px]', 'sm:text-[9px]', 'font-bold', 'text-slate-400', 'uppercase', 'tracking-wider')}>Trusted by 500+ Partners</p>
          </div>


          <div className={clsx('mt-12', 'text-center', 'animate-reveal', 'delay-1000', 'opacity-0')}>
            <a href="/certifications">
              <button className={clsx('group', 'relative', 'px-8', 'py-4', 'bg-brand-navy', 'text-white', 'rounded-xl', 'text-[10px]', 'font-black', 'uppercase', 'tracking-widest', 'hover:bg-brand-gold', 'hover:text-brand-navy', 'transition-all', 'duration-700', 'shadow-xl', 'overflow-hidden', 'active:scale-95')}>
                <span className={clsx('relative', 'z-10', 'flex', 'items-center', 'gap-3')}>
                  <span className={clsx('relative', 'z-10')}>View All Certificates</span>
                  <FiArrowRight className={clsx('relative', 'z-10', 'text-base', 'sm:text-lg', 'group-hover:translate-x-1', 'transition-transform', 'duration-500')} />

                </span>
              </button>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
