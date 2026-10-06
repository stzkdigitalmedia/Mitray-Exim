"use client";

import { useState } from "react";
import Image from "next/image";
import { FiMaximize2, FiX, FiActivity, FiChevronLeft, FiChevronRight } from "react-icons/fi";

export function LightboxGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const handleNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const openImage = (img, index) => {
    setSelectedImage(img);
    setCurrentIndex(index);
  };

  return (
    <>
      {/* GALLERY GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3 md:gap-4 auto-rows-[1fr]">
        {images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => openImage(img, idx)}
            className="group relative cursor-pointer aspect-square w-full overflow-hidden"
          >
             {/* SHARP SHADOW EFFECT */}
             <div className="absolute -inset-1 sm:inset-0 bg-brand-gold/10 translate-x-2 sm:translate-x-3 translate-y-2 sm:translate-y-3 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0"></div>
             
             <div className="relative w-full h-full bg-white border-2 border-slate-200 overflow-hidden group-hover:border-brand-gold transition-all duration-500 group-hover:-translate-x-1 sm:group-hover:-translate-x-2 group-hover:-translate-y-1 sm:group-hover:-translate-y-2">
                
                {/* IMAGE */}
                <div className="absolute inset-0 bg-slate-200 animate-pulse">
                   <Image
                      src={img.src?.replace('/upload/', '/upload/f_auto,q_auto,w_800/')} 
                      alt={img.title} 
                      fill
                      unoptimized={true}
                      priority={idx < 10}
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                      className="object-cover opacity-75 sm:opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                      onLoad={(e) => { e.currentTarget.parentElement.classList.remove('animate-pulse'); e.currentTarget.parentElement.classList.add('bg-transparent'); }}
                   />
                   
                   {/* OVERLAY */}
                   <div className="absolute inset-0 bg-brand-navy/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 border-2 border-white flex items-center justify-center text-white group-hover:bg-brand-gold group-hover:text-brand-navy group-hover:border-brand-gold transition-all duration-500">
                         <FiMaximize2 className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7" />
                      </div>
                   </div>
                </div>

                {/* REF BADGE */}
                <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 px-2 sm:px-3 py-1 bg-white/95 backdrop-blur-sm text-[7px] sm:text-[8px] md:text-[9px] lg:text-xs font-black uppercase tracking-widest text-brand-navy border-2 border-slate-200">
                   REF: IMG-00{idx + 1}
                </div>

                {/* TITLE OVERLAY */}
                <div className="absolute inset-0 flex flex-col justify-end p-2 sm:p-3 md:p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-[7px] sm:text-[8px] md:text-[9px] lg:text-xs font-black uppercase tracking-wider mb-0.5 sm:mb-1 text-white/80">Manifest</p>
                  <h3 className="text-xs sm:text-sm md:text-base font-black uppercase tracking-tight leading-tight line-clamp-2">{img.title}</h3>
                </div>
             </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div className="fixed inset-0 z-[99999] animate-in fade-in zoom-in-95 duration-300">
           {/* BACKGROUND OVERLAY */}
           <div 
             className="absolute inset-0 bg-brand-navy/98 backdrop-blur-sm" 
             onClick={() => setSelectedImage(null)}
           ></div>

           {/* FIXED HUD BUTTONS (Outside scroll area so they NEVER move) */}
           <button 
             aria-label="Close image modal"
             onClick={() => setSelectedImage(null)}
             className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 w-10 sm:w-12 h-10 sm:h-12 bg-white/10 hover:bg-brand-gold hover:text-brand-navy border-2 border-white/20 hover:border-brand-gold flex items-center justify-center text-white transition-all duration-300 rounded-full z-[600] shadow-2xl"
           >
              <FiX className="w-5 sm:w-6 h-5 sm:h-6 group-hover:rotate-90 transition-transform duration-300" />
           </button>

           <button 
             aria-label="Previous gallery image"
             onClick={(e) => { e.stopPropagation(); handlePrevious(); }}
             className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 bg-white/10 hover:bg-brand-gold text-white hover:text-brand-navy border-2 border-white/20 hover:border-brand-gold flex items-center justify-center transition-all duration-300 rounded-full z-[600] shadow-2xl hidden sm:flex"
           >
              <FiChevronLeft className="w-5 sm:w-6 h-5 sm:h-6 group-hover:-translate-x-1 transition-transform" />
           </button>

           <button 
             aria-label="Next gallery image"
             onClick={(e) => { e.stopPropagation(); handleNext(); }}
             className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 bg-white/10 hover:bg-brand-gold text-white hover:text-brand-navy border-2 border-white/20 hover:border-brand-gold flex items-center justify-center transition-all duration-300 rounded-full z-[600] shadow-2xl hidden sm:flex"
           >
              <FiChevronRight className="w-5 sm:w-6 h-5 sm:h-6 group-hover:translate-x-1 transition-transform" />
           </button>

           {/* SCROLLABLE CONTENT AREA */}
           <div className="absolute inset-0 overflow-y-auto pointer-events-none">
              <div 
                 className="min-h-full w-full grid place-items-center py-20 px-4 sm:px-12 md:px-20 pointer-events-auto"
                 onClick={(e) => {
                    if (e.target === e.currentTarget) setSelectedImage(null);
                 }}
              >
                 <div 
                   className="w-full max-w-7xl flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 items-center justify-center relative z-10"
                   onClick={(e) => e.stopPropagation()}
                 >
                    {/* IMAGE CONTAINER */}
                    <div className="flex-1 w-full flex justify-center items-center">
                       <div className="relative w-full max-w-4xl mx-auto">
                          <div className="absolute -inset-2 sm:-inset-4 bg-brand-gold/10 blur-2xl rounded-full translate-y-4"></div>
                          <div className="relative border-2 sm:border-4 border-white/10 shadow-2xl overflow-hidden bg-brand-navy rounded-xl sm:rounded-2xl p-2 sm:p-4">
                             <img loading={selectedImage === images[0] ? "eager" : "lazy"} decoding="async" 
                                src={selectedImage.src?.replace('/upload/', '/upload/f_auto,q_auto,w_1600/')} 
                                alt={selectedImage.title} 
                                className="w-full h-auto max-h-[60vh] lg:max-h-[85vh] object-contain rounded-lg sm:rounded-xl"
                             />
                          </div>
                          
                          {/* MOBILE NAV BUTTONS (Visible only on mobile below image) */}
                          <div className="flex justify-center gap-4 mt-6 sm:hidden">
                             <button onClick={handlePrevious} className="w-12 h-12 bg-white/10 hover:bg-brand-gold hover:text-brand-navy border-2 border-white/20 rounded-full flex items-center justify-center text-white">
                                <FiChevronLeft className="w-6 h-6" />
                             </button>
                             <button onClick={handleNext} className="w-12 h-12 bg-white/10 hover:bg-brand-gold hover:text-brand-navy border-2 border-white/20 rounded-full flex items-center justify-center text-white">
                                <FiChevronRight className="w-6 h-6" />
                             </button>
                          </div>
                       </div>
                    </div>

                    {/* DATA PANEL */}
                    <div className="w-full lg:w-[400px] xl:w-[450px] space-y-6 sm:space-y-8 pb-12 lg:pb-0">
                       <div className="space-y-3 sm:space-y-4 text-center lg:text-left">
                          <div className="flex items-center justify-center lg:justify-start gap-3">
                             <div className="w-2 h-2 bg-brand-gold rounded-full animate-pulse"></div>
                             <span className="text-[10px] sm:text-xs font-black text-brand-gold uppercase tracking-[0.3em]">Metadata Analysis</span>
                          </div>
                          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-tight">
                             {selectedImage.title}
                          </h2>
                       </div>

                       <div className="p-6 sm:p-8 bg-white/5 border border-white/10 rounded-2xl space-y-4 sm:space-y-6 backdrop-blur-sm">
                          <div className="flex items-center justify-between pb-4 sm:pb-6 border-b border-white/10">
                             <span className="text-[10px] sm:text-xs font-black text-white/40 uppercase tracking-widest">Protocol</span>
                             <span className="text-[10px] sm:text-xs font-black text-white uppercase tracking-widest">Operational Hub</span>
                          </div>
                          <div className="flex items-center justify-between pb-4 sm:pb-6 border-b border-white/10">
                             <span className="text-[10px] sm:text-xs font-black text-white/40 uppercase tracking-widest">Status</span>
                             <span className="text-[10px] sm:text-xs font-black text-emerald-400 uppercase tracking-widest flex items-center gap-2">
                                <FiActivity className="w-4 h-4" /> Active
                             </span>
                          </div>
                          <div className="flex items-center justify-between">
                             <span className="text-[10px] sm:text-xs font-black text-white/40 uppercase tracking-widest">Index</span>
                             <span className="text-[10px] sm:text-xs font-black text-white uppercase tracking-widest px-3 py-1 bg-white/10 rounded-full">{currentIndex + 1} / {images.length}</span>
                          </div>
                          <p className="text-xs sm:text-sm font-medium text-white/60 leading-relaxed pt-4 border-t border-white/10">
                             Detailed visual documentation of our {selectedImage.title.toLowerCase()} manifesting strict compliance with global export standards.
                          </p>
                       </div>

                       <button 
                         onClick={() => setSelectedImage(null)} 
                         className="w-full py-4 sm:py-5 bg-brand-gold hover:bg-white text-brand-navy text-xs sm:text-sm font-black uppercase tracking-[0.2em] transition-all duration-300 rounded-xl shadow-xl shadow-brand-gold/20"
                       >
                          Close Terminal
                       </button>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      )}
    </>
  );
}
