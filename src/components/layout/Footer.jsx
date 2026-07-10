"use client";

import Link from "next/link";
import { CERTIFICATIONS } from "@/data/certifications";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-brand-navy text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-brand-gold/10 blur-[100px] sm:blur-[120px] lg:blur-[150px] rounded-full animate-subtle-float"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-brand-gold/5 blur-[100px] sm:blur-[120px] lg:blur-[150px] rounded-full animate-subtle-float delay-1000"></div>
      </div>

      {/* Top CTA Bar */}
      <div className="relative z-10 bg-brand-gold/10 border-b border-white/5">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 md:py-12 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 text-center lg:text-left">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black font-outfit uppercase tracking-tighter leading-tight md:leading-[0.85] max-w-2xl animate-reveal opacity-0">
            JOIN OUR GLOBAL <br className="hidden lg:block" />
            <span className="text-brand-gold">EXPORT NETWORK</span> TODAY.
          </h3>
          <Link href="/contact" className="animate-reveal delay-300 opacity-0 px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 bg-brand-gold text-brand-navy font-black uppercase tracking-widest text-xs sm:text-sm md:text-base hover:bg-white transition-all duration-500 shadow-xl hover:shadow-2xl active:scale-95 whitespace-nowrap">
            Partner With Us
          </Link>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-12 md:pt-24 md:pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16">

          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-4 space-y-6 md:space-y-8 animate-reveal opacity-0 delay-400">
            <Link href="/" className="inline-block group">
              <div className="bg-white px-6 py-3 rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-105 inline-flex">
                <img
                  src="/newLogo.png"
                  alt="Mitray Exim"
                  width="150"
                  height="50"
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-slate-400 text-sm md:text-base lg:text-lg leading-relaxed font-bold uppercase tracking-wide opacity-80 max-w-md">
              A premier merchant exporter from India, delivering nature's finest agricultural treasures to global markets with uncompromising quality standards.
            </p>
            <div className="flex space-x-3">
              {[
                { name: "linkedin", link: "https://www.linkedin.com/in/mitray-exim-1a894b3b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
                { name: "instagram", link: "https://www.instagram.com/mitrayexim?igsh=OG5sa3JudTVleDFz", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                { name: "twitter", link: "https://x.com/MitrayExim", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
              ].map((social) => (
                <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer" className="w-11 h-11 md:w-12 md:h-12 bg-white/5 hover:bg-brand-gold rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 group">
                  <svg className="w-5 h-5 md:w-6 md:h-6 fill-white group-hover:fill-brand-navy" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Business Links */}
          <div className="md:col-span-1 lg:col-span-2 animate-reveal opacity-0 delay-500">
            <h4 className="text-[10px] md:text-xs font-black mb-8 uppercase tracking-[0.4em] text-brand-gold/60">Business</h4>
            <ul className="space-y-4">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Our Products", "/products"],
                ["Accreditations", "/certifications"],
                ["Latest News", "/blog"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-slate-400 hover:text-white text-xs md:text-sm transition-all flex items-center group font-bold uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Export Services */}
          <div className="md:col-span-1 lg:col-span-3 animate-reveal opacity-0 delay-600">
            <h4 className="text-[10px] md:text-xs font-black mb-8 uppercase tracking-[0.4em] text-brand-gold/60">Services</h4>
            <ul className="space-y-4">
              {[
                { label: "Farm Sourcing & Selection", href: "/shipping" },
                { label: "Cold Storage & Cooling", href: "/shipping" },
                { label: "Food-Grade Packaging", href: "/shipping" },
                { label: "Reefer Sea & Air Freight", href: "/shipping" },
                { label: "Customs & Quality Clearance", href: "/certifications" },
              ].map((service) => (
                <li key={service.label}>
                  <Link href={service.href} className="text-slate-400 hover:text-white text-xs md:text-sm transition-all flex items-center group font-bold uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 border border-brand-gold/30 rounded-full mr-3 group-hover:bg-brand-gold transition-colors"></span>
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* HQ Location */}
          <div className="md:col-span-2 lg:col-span-3 space-y-6 md:space-y-8 animate-reveal opacity-0 delay-700">
            <h4 className="text-[10px] md:text-xs font-black mb-8 uppercase tracking-[0.4em] text-brand-gold/60">Global HQ</h4>
            <div className="space-y-6">
              <div className="flex items-start group gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-slate-300 text-xs md:text-sm font-bold uppercase tracking-widest leading-relaxed opacity-80">
                  PLOT NO 57, GROUND FLOOR<br />R.S. NO 21 MAIN ROAD,<br />LAKHABAVAL JAMNAGAR, GUJRAT 361006
                </p>
              </div>

              <div className="flex items-start group gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="text-xs md:text-sm font-bold uppercase tracking-widest">
                  <a href="tel:+917778886559" className="text-slate-300 hover:text-white transition-colors block mb-1">+91 7778886559</a>
                  <a href="mailto:info@mitrayexim.com" className="text-brand-gold hover:text-white transition-colors block">info@mitrayexim.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compliance Bar - Institutional Row */}
      {/* Mobile: Scrollable */}
      <div className="md:hidden overflow-x-auto no-scrollbar relative py-8" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <div className="flex w-max animate-marquee gap-4 px-4 ">
          {[...CERTIFICATIONS, ...CERTIFICATIONS].map((cert, index) => (
            <Link
              href="/certifications"
              key={`${cert.id}-${index}`}
              className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 hover:border-brand-gold hover:bg-white/10 transition-all duration-500 group/logo shadow-sm cursor-pointer rounded flex-shrink-0"
            >
              <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                <img loading="lazy" decoding="async"
                  src={cert.logo}
                  alt={cert.name}
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />

                <div className="hidden flex-col items-center justify-center text-center">
                  <svg
                    className="w-5 h-5 text-brand-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m7 7a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>

              <div className="block min-w-0 flex-1">
                <p className="text-xs font-black uppercase tracking-widest text-brand-gold truncate">
                  {cert.name}
                </p>

                <p className="text-[10px] font-bold uppercase tracking-widest text-white/50 truncate">
                  Verified Protocol
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Desktop: Grid Layout */}
      <div className="hidden md:block relative py-12">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {CERTIFICATIONS.map((cert) => (
              <Link
                href="/certifications"
                key={cert.id}
                className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 hover:border-brand-gold hover:bg-white/10 transition-all duration-500 group/logo shadow-sm cursor-pointer rounded hover:shadow-lg"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center flex-shrink-0">
                  <img loading="lazy" decoding="async"
                    src={cert.logo}
                    alt={cert.name}
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div className="hidden flex-col items-center justify-center text-center">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m7 7a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="block min-w-0 flex-1">
                  <p className="text-xs md:text-sm font-black uppercase tracking-widest text-brand-gold truncate">
                    {cert.name}
                  </p>

                  <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/50 truncate">
                    Verified Protocol
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 relative z-10 animate-reveal opacity-0 delay-1000 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
          <p className="text-slate-400 text-xs md:text-sm font-bold uppercase tracking-widest text-center md:text-left">
            © {currentYear} MITRAY EXIM. <span className="text-brand-gold/60">Handcrafted with Excellence.</span>
          </p>
          <div className="flex items-center space-x-8 lg:space-x-12">
            {["Privacy", "Terms"].map((link) => (
              <Link key={link} href={`/${link.toLowerCase()}`} className="text-slate-400 hover:text-white text-xs md:text-sm font-bold uppercase tracking-widest transition-colors">
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
