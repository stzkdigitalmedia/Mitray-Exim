"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FiGlobe, FiSend, FiMenu, FiX, FiActivity, FiArrowUpRight, FiZap, FiHome, FiInfo, FiBox, FiTruck, FiAward, FiBookOpen, FiImage, FiPhoneCall } from "react-icons/fi";
import clsx from "clsx";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={clsx('fixed', 'top-0', 'left-0', 'right-0', 'z-[100]', 'transition-all', 'duration-500')}>
      {/* SLIM INSTITUTIONAL ANNOUNCEMENT BAR */}
      <div className={`w-full bg-brand-navy relative overflow-hidden transition-all duration-500 ${isScrolled ? 'h-0 opacity-0' : 'h-9 opacity-100 border-b border-white/5'}`}>
        <div className={clsx('absolute', 'inset-0', 'bg-gradient-to-r', 'from-transparent', 'via-brand-gold/10', 'to-transparent', '-skew-x-12', 'translate-x-[-200%]', 'pointer-events-none')}></div>
        <div className={clsx('w-full', 'max-w-[1920px]', 'mx-auto', 'px-4', 'sm:px-6', 'md:px-8', 'lg:px-10', 'xl:px-12', 'h-full', 'flex', 'items-center', 'justify-between', 'relative', 'z-10')}>
          <div className={clsx('flex', 'items-center', 'gap-6')}>
            <div className={clsx('flex', 'items-center', 'gap-2')}>
              <div className={clsx('w-1.5', 'h-1.5', 'rounded-full', 'bg-brand-gold', 'animate-pulse')}></div>
              <span className={clsx('text-[9px]', 'font-black', 'text-white/60', 'uppercase', 'tracking-[0.2em]')}>Global Export Network Active</span>
            </div>
            <div className={clsx('hidden', 'lg:flex', 'items-center', 'gap-2')}>
              <FiZap className={clsx('text-brand-gold', 'text-[9px]')} />
              <span className={clsx('text-[9px]', 'font-black', 'text-white/40', 'uppercase', 'tracking-[0.2em]')}>Premium Indian Produce</span>
            </div>
          </div>
          <div className={clsx('hidden', 'sm:flex', 'items-center', 'gap-4')}>
            <span className={clsx('text-[9px]', 'font-black', 'text-brand-gold', 'uppercase', 'tracking-[0.2em]')}>Institutional Partnerships</span>
            <FiArrowUpRight className={clsx('text-brand-gold', 'text-[9px]')} />
          </div>
        </div>
      </div>

      {/* FLOATING CAPSULE NAVIGATION */}
      <div className={clsx('w-full', 'transition-all', 'duration-500', 'pt-4')}>
        <div className={clsx('w-full', 'max-w-[1920px]', 'mx-auto', 'px-4', 'sm:px-6', 'md:px-8', 'lg:px-10', 'xl:px-12')}>
          <div
            className={`mx-auto w-full rounded-full transition-all duration-700 flex items-center justify-between px-6 md:px-8 border hover:shadow-brand-gold/5 hover:border-brand-gold/30 hover:scale-[1.01]
              ${isScrolled
                ? "bg-white/[0.8] backdrop-blur-[30px] border-white/[0.15] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06),inset_0_1px_0_0_rgba(255,255,255,0.4)] py-3.5 md:py-4.5"
                : "bg-brand-navy/70 backdrop-blur-[30px] border-white/10 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.2)] py-3.5 md:py-4.5"
              }`}
          >
            {/* LOGO */}
            <Link href="/" className={clsx('group', 'flex', 'items-center', 'space-x-4', 'transition-transform', 'duration-500', 'hover:scale-[1.02]')}>
              <img loading="lazy" decoding="async"
                src="/newLogo.png"
                alt="MITRAY EXIM"
                className={`object-contain transition-all duration-500 ${
                  isScrolled 
                    ? "w-[90px] sm:w-[110px] md:w-[130px] lg:w-[140px] xl:w-[160px] brightness-100" 
                    : "w-[90px] sm:w-[110px] md:w-[130px] lg:w-[140px] xl:w-[160px] brightness-0 invert"
                }`}
              />
            </Link>
 
            {/* NAV LINKS */}
            <nav className={clsx('hidden', 'lg:flex', 'items-center', 'space-x-1', 'xl:space-x-2')}>
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Products", "/products"],
                ["Services", "/shipping"],
                ["Certifications", "/certifications"],
                ["Blogs", "/blog"],
                ["Gallery", "/gallery"],
              ].map(([label, href]) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`text-[9px] xl:text-[11px] 2xl:text-[12px] font-black uppercase tracking-[0.15em] px-3 xl:px-4 py-2 rounded-full transition-all duration-500 relative group overflow-hidden flex items-center justify-center
                      ${isScrolled
                        ? isActive
                          ? 'bg-brand-navy text-white shadow-lg shadow-brand-navy/20 scale-105'
                          : 'text-brand-navy/70 hover:text-brand-navy hover:bg-brand-navy/5 border border-transparent hover:border-brand-navy/10'
                        : isActive
                          ? 'bg-brand-gold text-brand-navy shadow-lg shadow-brand-gold/20 scale-105'
                          : 'text-white/80 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/10'
                      }`}
                  >
                    <span className={clsx('relative', 'z-10', 'flex', 'items-center', 'gap-1.5')}>
                       {label}
                    </span>
                    {/* Hover Glow Effect */}
                    {!isActive && (
                      <span className={clsx('absolute', 'inset-0', 'bg-gradient-to-r', 'from-transparent', 'via-white/20', 'to-transparent', 'opacity-0', 'group-hover:opacity-100', 'transition-opacity', 'duration-500', '-skew-x-12', 'translate-x-[-150%]', 'group-hover:animate-[scan_1.5s_ease-in-out_infinite]')}></span>
                    )}
                  </Link>
                );
              })}
            </nav>
 
            {/* ACTIONS */}
            <div className={clsx('flex', 'items-center', 'gap-3')}>
              <Link
                href="/contact"
                className={`hidden md:flex items-center gap-2 px-4 xl:px-5 py-2.5 xl:py-3 rounded-full text-[10px] xl:text-[11px] font-black uppercase tracking-widest transition-all duration-300 active:scale-95 group relative overflow-hidden shadow-md border
                  ${isScrolled
                    ? 'bg-brand-navy text-white hover:bg-brand-gold hover:text-brand-navy border-white/5 hover:border-brand-gold/10 hover:shadow-brand-gold/25'
                    : 'bg-brand-gold text-brand-navy hover:bg-white hover:text-brand-navy border-brand-gold/10 hover:border-white/10 hover:shadow-white/20'
                  }`}
              >
                Inquiry Now 
                <FiSend className={clsx('text-[11px]', 'group-hover:translate-x-0.5', 'group-hover:-translate-y-0.5', 'transition-transform', 'duration-300')} />
              </Link>
 
              {/* MOBILE MENU TOGGLE */}
              <button
                className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-full transition-all
                  ${isScrolled
                    ? 'bg-brand-navy text-white shadow-sm'
                    : 'bg-white text-brand-navy shadow-md'
                  }`}
                onClick={() => setIsMenuOpen((p) => !p)}
              >
                {isMenuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE COMMAND CENTER OVERLAY */}
      <div
        className={`lg:hidden fixed inset-0 z-50 bg-brand-navy backdrop-blur-3xl transition-all duration-700 ease-in-out overflow-hidden flex flex-col ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
      >
        {/* Background Decorative Elements */}
        <div className={clsx('absolute', 'top-0', 'right-0', 'w-[500px]', 'h-[500px]', 'bg-brand-gold/10', 'blur-[120px]', 'rounded-full', 'pointer-events-none', 'translate-x-1/3', '-translate-y-1/3')}></div>
        <div className={clsx('absolute', 'bottom-0', 'left-0', 'w-[400px]', 'h-[400px]', 'bg-white/5', 'blur-[100px]', 'rounded-full', 'pointer-events-none', '-translate-x-1/2', 'translate-y-1/3')}></div>

        <div className={clsx('flex-1', 'flex', 'flex-col', 'h-full', 'px-6', 'sm:px-10', 'pt-20', 'sm:pt-28', 'pb-8', 'relative', 'z-10', 'overflow-hidden')}>
          {/* Mobile Header Top inside Menu */}
          <div className={clsx('flex', 'justify-between', 'items-center', 'absolute', 'top-6', 'left-6', 'right-6', 'sm:top-8', 'sm:left-10', 'sm:right-10')}>
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
               <img loading="lazy" decoding="async" src="/newLogo.png" alt="MITRAY EXIM" className={clsx('w-[100px]', 'sm:w-[120px]', 'brightness-0', 'invert')} />
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className={clsx('w-12', 'h-12', 'rounded-full', 'bg-white/10', 'hover:bg-brand-gold', 'hover:text-brand-navy', 'flex', 'items-center', 'justify-center', 'text-white', 'transition-all', 'duration-300', 'backdrop-blur-md', 'border', 'border-white/20', 'shadow-xl')}
            >
              <FiX className="text-2xl" />
            </button>
          </div>

          <nav className={clsx('flex-1', 'flex', 'flex-col', 'justify-start', 'space-y-1.5', 'sm:space-y-3', 'overflow-y-auto', 'no-scrollbar', 'pb-6', 'mt-4')}>
            {[
              { label: "Home", href: "/", icon: FiHome },
              { label: "About Us", href: "/about", icon: FiInfo },
              { label: "Our Products", href: "/products", icon: FiBox },
              { label: "Services", href: "/shipping", icon: FiTruck },
              { label: "Gallery", href: "/gallery", icon: FiImage },
              { label: "Certifications", href: "/certifications", icon: FiAward },
              { label: "Latest News", href: "/blog", icon: FiBookOpen },
              { label: "Contact Us", href: "/contact", icon: FiPhoneCall },
            ].map(({ label, href, icon: Icon }, index) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`group flex items-center gap-3 sm:gap-4 text-3xl md:text-4xl font-black uppercase tracking-tighter transition-all duration-500 p-2 sm:p-3 rounded-2xl ${isActive ? 'text-brand-gold bg-white/5' : 'text-white/80 hover:text-brand-gold hover:bg-white/5'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className={clsx('flex', 'items-center', 'justify-center', 'w-10', 'h-10', 'sm:w-12', 'sm:h-12', 'rounded-xl', 'bg-white/5', 'group-hover:bg-brand-gold/10', 'transition-colors', 'duration-500', 'border', 'border-white/5', 'group-hover:border-brand-gold/20', 'shrink-0')}>
                     <Icon className={`text-xl ${isActive ? 'text-brand-gold' : 'text-white/60 group-hover:text-brand-gold'} transition-colors duration-500`} />
                  </div>
                  <div className={clsx('flex', 'flex-col', 'relative', 'overflow-hidden')}>
                    <span className={clsx('text-[10px]', 'sm:text-xs', 'font-bold', 'text-brand-gold/50', 'tracking-widest', 'font-mono')}>0{index + 1}</span>
                    <span className={clsx('relative', 'overflow-hidden', 'inline-block')}>
                      <span className={clsx('block', 'transition-transform', 'duration-500', 'group-hover:-translate-y-full')}>{label}</span>
                      <span className={clsx('absolute', 'inset-0', 'transition-transform', 'duration-500', 'translate-y-full', 'group-hover:translate-y-0', 'text-brand-gold')}>{label}</span>
                    </span>
                  </div>
                </Link>
              );
            })}
          </nav>

          <div className={clsx('mt-4', 'pt-4', 'sm:pt-6', 'border-t', 'border-white/10', 'shrink-0', 'animate-reveal', 'delay-300')}>
             <div className={clsx('flex', 'items-center', 'gap-2', 'mb-4')}>
                <div className={clsx('w-1.5', 'h-1.5', 'rounded-full', 'bg-brand-gold', 'animate-pulse')}></div>
                <p className={clsx('text-[9px]', 'sm:text-[10px]', 'font-black', 'uppercase', 'text-brand-gold', 'tracking-[0.2em]', 'sm:tracking-[0.3em]')}>Global Export Enquiries</p>
             </div>
             <Link href="/contact" onClick={() => setIsMenuOpen(false)} className={clsx('flex', 'items-center', 'justify-between', 'bg-white/5', 'hover:bg-brand-gold', 'p-4', 'sm:p-5', 'rounded-2xl', 'group', 'transition-all', 'duration-300', 'border', 'border-white/10')}>
                <div className={clsx('flex', 'flex-col')}>
                   <span className={clsx('text-[10px]', 'sm:text-xs', 'font-black', 'text-white', 'group-hover:text-brand-navy', 'uppercase', 'tracking-widest', 'transition-colors', 'duration-300')}>info@mitrayexim.com</span>
                   <span className={clsx('text-[8px]', 'sm:text-[9px]', 'font-bold', 'text-white/40', 'group-hover:text-brand-navy/60', 'uppercase', 'tracking-widest', 'transition-colors', 'duration-300')}>Response within 24 Hrs</span>
                </div>
                <FiArrowUpRight className={clsx('text-xl', 'sm:text-2xl', 'text-brand-gold', 'group-hover:text-brand-navy', 'transition-colors', 'duration-300')} />
             </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
