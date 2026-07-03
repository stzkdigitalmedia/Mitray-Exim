"use client";

import { useState } from "react";
import { FiShield, FiDownload, FiEye, FiX } from "react-icons/fi";

export function CertificateCard({ cert }) {
  const [showModal, setShowModal] = useState(false);

  const handleDownload = () => {
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
  };

  const handlePreview = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className="group relative h-full">
        {/* SHARP EDGY SHADOW */}
        <div className="absolute inset-0 bg-brand-gold/5 translate-x-2 sm:translate-x-3 translate-y-2 sm:translate-y-3 transition-transform group-hover:translate-x-0 group-hover:translate-y-0 duration-500"></div>
        
        <div className="relative h-full bg-white border-2 border-slate-200 transition-all duration-500 group-hover:border-brand-gold group-hover:-translate-x-1 sm:group-hover:-translate-x-2 group-hover:-translate-y-1 sm:group-hover:-translate-y-2 flex flex-col overflow-hidden">
          
          {/* LOGO CONTAINER */}
          <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 h-32 sm:h-40 md:h-52 lg:h-64 flex items-center justify-center border-b-2 border-slate-200 group-hover:bg-white transition-all duration-500 overflow-hidden">
             {/* CORNER ACCENT */}
             <div className="absolute top-0 right-0 w-6 sm:w-8 md:w-10 lg:w-12 h-6 sm:h-8 md:h-10 lg:h-12 border-t-2 sm:border-t-3 md:border-t-4 border-r-2 sm:border-r-3 md:border-r-4 border-slate-200 group-hover:border-brand-gold transition-colors duration-500"></div>
             
             <img loading="lazy" decoding="async"
               src={cert.logo}
               alt={cert.fullName}
               className="w-full h-full object-contain p-3 sm:p-4 transition-all duration-700 group-hover:scale-105 drop-shadow-sm"
               onError={(e) => {
                 e.target.style.display = 'none';
                 e.target.nextSibling.style.display = 'flex';
               }}
             />
             <div className="hidden flex-col items-center justify-center text-center">
               <FiShield className="text-2xl sm:text-3xl md:text-5xl text-brand-gold/30 mb-1.5 sm:mb-2 md:mb-4 group-hover:text-brand-gold transition-colors" />
               <p className="text-sm sm:text-base md:text-lg lg:text-2xl font-black text-brand-navy uppercase tracking-tight">{cert.name}</p>
             </div>
          </div>


          {/* CONTENT HUB */}
          <div className="p-3 sm:p-4 md:p-6 lg:p-8 flex-grow flex flex-col justify-between">
             <div>
                {/* STATUS BADGE */}
                <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 md:mb-4">
                   <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-brand-gold rotate-45"></div>
                   <span className="text-[8px] sm:text-[9px] md:text-xs lg:text-sm font-semibold text-brand-gold uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em]">Compliance Verified</span>
                </div>

                {/* CERT NAME */}
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-brand-navy uppercase tracking-tight leading-tight mb-1 sm:mb-1.5 md:mb-2 group-hover:text-brand-gold transition-colors duration-300">
                  {cert.name}
                </h3>

                {/* FULL NAME */}
                <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-bold text-slate-500 uppercase tracking-wide mb-2 sm:mb-3 md:mb-4 leading-tight">
                  {cert.fullName}
                </p>

                {/* DESCRIPTION */}
                <p className="text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold text-slate-600 leading-relaxed">
                  {cert.description}
                </p>
             </div>

             {/* FOOTER */}
             <div className="mt-4 sm:mt-5 md:mt-6 lg:mt-8 pt-3 sm:pt-4 md:pt-6 border-t-2 border-slate-100 space-y-3 sm:space-y-4">
                <div className="text-[8px] sm:text-[9px] md:text-xs lg:text-sm font-black text-slate-400 uppercase tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em]">
                   Reference: CERT-0{cert.id}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-2 sm:gap-3">
                  <button
                    onClick={handlePreview}
                    className="flex-1 flex items-center justify-center gap-1 sm:gap-1.5 py-2.5 sm:py-3 md:py-4 px-2 sm:px-3 bg-brand-gold/10 hover:bg-brand-gold border-2 border-brand-gold/30 hover:border-brand-gold text-brand-gold hover:text-white text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-bold uppercase tracking-[0.1em] sm:tracking-[0.15em] md:tracking-widest transition-all duration-300"
                  >
                    <FiEye className="w-3 sm:w-4 h-3 sm:h-4" />
                    <span>Preview</span>
                  </button>
                  <button
                    onClick={handleDownload}
                    className="flex-1 flex items-center justify-center gap-1 sm:gap-1.5 py-2.5 sm:py-3 md:py-4 px-2 sm:px-3 bg-brand-navy/10 hover:bg-brand-navy border-2 border-brand-navy/30 hover:border-brand-navy text-brand-navy hover:text-white text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-bold uppercase tracking-[0.1em] sm:tracking-[0.15em] md:tracking-widest transition-all duration-300"
                  >
                    <FiDownload className="w-3 sm:w-4 h-3 sm:h-4" />
                    <span>Download</span>
                  </button>
                </div>
             </div>
          </div>

        </div>
      </div>

      {/* PREVIEW MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 sm:p-4 md:p-6 lg:p-8 overflow-y-auto">
          <div className="relative bg-white max-w-2xl w-full flex flex-col my-auto">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 sm:top-4 md:top-6 right-3 sm:right-4 md:right-6 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 hover:bg-slate-100 hover:border hover:border-slate-200 flex items-center justify-center transition-all duration-300 z-10"
            >
              <FiX className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-brand-navy" />
            </button>

            {/* Modal Header */}
            <div className="p-3 sm:p-4 md:p-6 lg:p-8 border-b-2 border-slate-200">
              <h2 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-black text-brand-navy uppercase tracking-tight">
                {cert.name} Certificate
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 font-semibold mt-1 sm:mt-2">
                {cert.fullName}
              </p>
            </div>

            {/* Modal Body - Image Preview */}
            <div className="flex-1 overflow-auto p-3 sm:p-4 md:p-6 lg:p-8 flex items-center justify-center bg-slate-50 min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
              <img loading="lazy" decoding="async"
                src={cert.logo}
                alt={cert.fullName}
                className="max-w-full max-h-full object-contain drop-shadow-lg"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-3 sm:p-4 md:p-6 lg:p-8 border-t-2 border-slate-200 flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
              <button
                onClick={handleDownload}
                className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 md:py-4 px-3 sm:px-4 md:px-6 bg-brand-navy hover:bg-brand-navy/90 text-white text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.1em] sm:tracking-[0.15em] md:tracking-widest transition-all duration-300 border-2 border-brand-navy hover:border-white"
              >
                <FiDownload className="w-4 sm:w-5 h-4 sm:h-5" />
                <span>Download Certificate</span>
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 py-2.5 sm:py-3 md:py-4 px-3 sm:px-4 md:px-6 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.1em] sm:tracking-[0.15em] md:tracking-widest transition-all duration-300 border-2 border-slate-200 hover:border-slate-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
