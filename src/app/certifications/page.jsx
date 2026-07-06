"use client";

import { CERTIFICATIONS } from "@/data/certifications";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { CertificateCard } from "@/components/CertificateCard";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { FiShield, FiGlobe, FiCheckCircle, FiActivity, FiArrowRight, FiLock, FiZap } from "react-icons/fi";
import Link from "next/link";
import clsx from "clsx";

export default function CertificationsPage() {
   return (
      <div className="bg-white">
         {/* 1. HERO SECTION */}
         <PageHero
            badge="QUALITY ASSURANCE"
            title="TRUSTED. CERTIFICATION."
            description="Access our quality assurance certifications and compliance documentation. All products are fully verified and certified to meet international trade standards."
            backgroundImage="https://res.cloudinary.com/dtkdcrra2/image/upload/v1783333593/certificate_pmygso.png"
            breadcrumbs={[
               { label: 'Home', href: '/' },
               { label: 'Certifications' }
            ]}
         />

         <div className={clsx('relative', 'z-10', 'pt-6', 'sm:pt-8', 'md:pt-12', 'lg:pt-16', 'xl:pt-20', 'pb-8', 'sm:pb-12', 'md:pb-16', 'lg:pb-24', 'xl:pb-32', 'bg-[#F9FAFB]')}>
            <Container>

               {/* 2. SECTION HEADER */}
               <div className={clsx('flex', 'flex-col', 'md:flex-row', 'md:items-end', 'justify-between', 'gap-4', 'sm:gap-6', 'md:gap-8', 'lg:gap-12', 'mb-8', 'sm:mb-12', 'md:mb-16', 'lg:mb-20', 'px-4', 'sm:px-0')}>
                  <div className={clsx('space-y-3', 'sm:space-y-4', 'md:space-y-5', 'lg:space-y-6')}>
                     <div className={clsx('flex', 'items-center', 'gap-2', 'sm:gap-3', 'lg:gap-4')}>
                        <div className={clsx('h-px', 'w-6', 'sm:w-8', 'md:w-10', 'lg:w-12', 'bg-brand-gold')}></div>
                        <span className={clsx('text-[9px]', 'sm:text-[10px]', 'md:text-xs', 'lg:text-sm', 'font-black', 'text-brand-navy', 'uppercase', 'tracking-[0.25em]', 'sm:tracking-[0.3em]', 'md:tracking-[0.35em]', 'lg:tracking-[0.4em]')}>Global Standards</span>
                     </div>
                     <h2 className={clsx('text-2xl', 'sm:text-3xl', 'md:text-5xl', 'lg:text-6xl', 'xl:text-7xl', '2xl:text-8xl', 'font-black', 'text-brand-navy', 'tracking-tighter', 'uppercase', 'leading-[0.95]', 'sm:leading-[0.9]', 'md:leading-[0.85]')}>
                        COMPLIANCE <br className={clsx('hidden', 'sm:block')} />
                        <span className="text-gradient">STANDARDS.</span>
                     </h2>
                  </div>
               </div>

               {/* 3. CERTIFICATION GRID */}
               <div className={clsx('mb-8', 'sm:mb-12', 'md:mb-16', 'lg:mb-20', 'xl:mb-24', 'px-4', 'sm:px-0')}>
                  <div className={clsx('grid', 'grid-cols-1', 'md:grid-cols-2', 'gap-4', 'sm:gap-6', 'md:gap-8', 'lg:gap-10')}>
                     {CERTIFICATIONS.map((cert, index) => (
                        <div key={cert.id} className={clsx('animate-reveal', 'opacity-0', 'h-full')} style={{ animationDelay: `${index * 150}ms` }}>
                           <CertificateCard cert={cert} />
                        </div>
                     ))}
                  </div>
               </div>

               {/* 4. SECURITY & COMPLIANCE */}
               <div className={clsx('relative', 'mb-8', 'sm:mb-12', 'md:mb-16', 'lg:mb-20', 'xl:mb-24', 'animate-reveal', 'px-4', 'sm:px-0')}>
                  <div className={clsx('absolute', 'inset-0', 'bg-brand-gold/5', 'translate-x-1', 'sm:translate-x-2', 'md:translate-x-3', 'lg:translate-x-4', 'translate-y-1', 'sm:translate-y-2', 'md:translate-y-3', 'lg:translate-y-4')}></div>
                  <div className={clsx('relative', 'bg-white', 'border-2', 'border-slate-100', 'p-3', 'sm:p-4', 'md:p-6', 'lg:p-10', 'xl:p-16', 'overflow-hidden')}>
                     <div className={clsx('absolute', 'top-0', 'right-0', 'w-16', 'sm:w-20', 'md:w-24', 'lg:w-32', 'h-16', 'sm:h-20', 'md:h-24', 'lg:h-32', 'border-t-2', 'sm:border-t-3', 'md:border-t-4', 'lg:border-t-6', 'xl:border-t-8', 'border-r-2', 'sm:border-r-3', 'md:border-r-4', 'lg:border-r-6', 'xl:border-r-8', 'border-brand-gold/5')}></div>

                     <div className={clsx('grid', 'grid-cols-1', 'lg:grid-cols-12', 'gap-4', 'sm:gap-6', 'md:gap-8', 'lg:gap-10', 'xl:gap-12', 'items-stretch')}>
                        <div className={clsx('lg:col-span-7', 'space-y-3', 'sm:space-y-4', 'md:space-y-6', 'lg:space-y-8')}>
                           <div className={clsx('flex', 'items-start', 'sm:items-center', 'gap-2', 'sm:gap-3', 'md:gap-4')}>
                              <div className={clsx('w-10', 'sm:w-12', 'md:w-14', 'lg:w-16', 'h-10', 'sm:h-12', 'md:h-14', 'lg:h-16', 'bg-brand-navy', 'text-brand-gold', 'flex', 'items-center', 'justify-center', 'text-lg', 'sm:text-xl', 'md:text-2xl', 'lg:text-3xl', 'font-black', 'flex-shrink-0')}>
                                 <FiShield />
                              </div>
                              <div>
                                 <h3 className={clsx('text-base', 'sm:text-lg', 'md:text-xl', 'lg:text-2xl', 'xl:text-3xl', '2xl:text-4xl', 'font-black', 'text-brand-navy', 'uppercase', 'tracking-tighter', 'leading-tight')}>
                                    Quality & Compliance Standards
                                 </h3>
                              </div>
                           </div>
                           <p className={clsx('text-[10px]', 'sm:text-[11px]', 'md:text-xs', 'lg:text-sm', 'xl:text-base', 'text-slate-400', 'font-bold', 'uppercase', 'tracking-tight', 'leading-relaxed')}>
                              We implement rigorous quality control processes at every stage of sourcing and packing. All shipments are accompanied by comprehensive phytosanitary certificates and export documentation verified by international bodies.
                           </p>

                           <div className={clsx('grid', 'grid-cols-1', 'sm:grid-cols-2', 'gap-2', 'sm:gap-3', 'md:gap-4', 'lg:gap-6')}>
                              {CERTIFICATIONS.map((cert, i) => (
                                 <div key={i} className={clsx('flex', 'items-start', 'gap-2', 'sm:gap-3', 'md:gap-4', 'p-2', 'sm:p-3', 'md:p-4', 'lg:p-6', 'bg-slate-50', 'border', 'border-slate-100', 'group', 'hover:border-brand-gold', 'transition-all')}>
                                    <div className={clsx('w-16', 'sm:w-20', 'md:w-24', 'lg:w-28', 'h-16', 'sm:h-20', 'md:h-24', 'lg:h-28', 'bg-white', 'border', 'border-slate-100', 'rounded-full', 'flex', 'items-center', 'justify-center', 'group-hover:scale-110', 'transition-transform', 'flex-shrink-0', 'overflow-hidden')}>
                                       <img loading="lazy" decoding="async"
                                          src={cert.logo}
                                          alt={cert.name}
                                          className={clsx('w-full', 'h-full', 'object-contain', 'transition-all')}
                                          onError={(e) => {
                                             e.target.style.display = 'none';
                                             e.target.nextSibling.style.display = 'flex';
                                          }}
                                       />
                                       <FiShield className={clsx('hidden', 'text-brand-gold', 'text-xl', 'sm:text-2xl', 'md:text-3xl', 'lg:text-4xl')} />
                                    </div>
                                    <div className={clsx('min-w-0', 'flex', 'flex-col', 'justify-center', 'flex-1', 'self-center')}>
                                       <h4 className={clsx('text-[9px]', 'sm:text-[10px]', 'md:text-xs', 'lg:text-sm', 'font-black', 'text-brand-navy', 'uppercase', 'tracking-widest', 'mb-0.5', 'sm:mb-1')}>{cert.name} Certification</h4>
                                       <p className={clsx('text-[9px]', 'sm:text-[10px]', 'md:text-xs', 'lg:text-sm', 'font-bold', 'text-slate-400', 'uppercase', 'tracking-widest')}>Status: Active & Verified</p>
                                    </div>
                                 </div>
                              ))}
                           </div>
                        </div>

                        <div className={clsx('lg:col-span-5', 'mt-4', 'sm:mt-6', 'md:mt-8', 'lg:mt-0', 'h-full')}>
                           <div className={clsx('h-full', 'flex', 'flex-col', 'justify-between', 'p-3', 'sm:p-4', 'md:p-6', 'lg:p-8', 'xl:p-10', 'bg-brand-navy', 'text-white', 'relative', 'overflow-hidden', 'group', 'min-h-[300px]', 'sm:min-h-[320px]', 'md:min-h-[360px]', 'lg:min-h-full')}>
                              <div className={clsx('absolute', 'top-0', 'right-0', 'w-20', 'sm:w-24', 'md:w-28', 'lg:w-32', 'h-20', 'sm:h-24', 'md:h-28', 'lg:h-32', 'bg-brand-gold/10', 'blur-3xl')}></div>

                              <div className={clsx('relative', 'z-10')}>
                                 <h4 className={clsx('text-base', 'sm:text-lg', 'md:text-xl', 'lg:text-2xl', 'xl:text-3xl', 'font-black', 'uppercase', 'tracking-tight', 'leading-tight', 'mb-3', 'sm:mb-4', 'md:mb-6')}>
                                    Documentation<br />Request
                                 </h4>
                                 <p className={clsx('text-[10px]', 'sm:text-xs', 'md:text-sm', 'lg:text-base', 'leading-relaxed', 'text-white/70', 'font-medium', 'mb-4', 'sm:mb-6', 'md:mb-8')}>
                                    Receive complete export documentation, quality certificates, laboratory test reports, phytosanitary certificates, and compliance records before every shipment.
                                 </p>

                                 <div className={clsx('space-y-2', 'sm:space-y-3', 'md:space-y-4', 'mb-6', 'sm:mb-8', 'md:mb-10')}>
                                    {[
                                       "Phytosanitary Certificate",
                                       "Certificate of Origin",
                                       "Quality Inspection Report",
                                       "Export Documentation",
                                    ].map((item) => (
                                       <div key={item} className={clsx('flex', 'items-center', 'gap-2', 'sm:gap-3')}>
                                          <div className={clsx('w-1.5', 'sm:w-2', 'h-1.5', 'sm:h-2', 'rounded-full', 'bg-brand-gold', 'flex-shrink-0')} />
                                          <span className={clsx('text-[10px]', 'sm:text-xs', 'md:text-sm', 'lg:text-base', 'font-semibold', 'text-white/90')}>{item}</span>
                                       </div>
                                    ))}
                                 </div>
                              </div>

                              <Link href="/contact" className={clsx('relative', 'z-10', 'w-full', 'py-2.5', 'sm:py-3', 'md:py-4', 'lg:py-5', 'bg-brand-gold', 'text-brand-navy', 'text-[10px]', 'sm:text-xs', 'md:text-sm', 'lg:text-base', 'font-black', 'text-center', 'uppercase', 'tracking-[0.15em]', 'sm:tracking-[0.2em]', 'md:tracking-[0.25em]', 'lg:tracking-[0.3em]', 'hover:bg-white', 'transition-all', 'duration-500', 'flex', 'items-center', 'justify-center', 'gap-2')}>
                                 Request Certificates <FiArrowRight className={clsx('text-xs', 'sm:text-sm', 'md:text-base', 'lg:text-lg', 'group-hover:translate-x-1', 'transition-transform')} />
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* 5. OPERATIONAL METRICS */}
               <div className={clsx('grid', 'grid-cols-2', 'lg:grid-cols-4', 'gap-0', 'border-2', 'border-slate-100', 'bg-white', 'animate-reveal', 'overflow-hidden')}>
                  {[
                     { label: "Compliance Rate", val: 100, suffix: "%" },
                     { label: "Export Hubs", val: 5, suffix: "+" },
                     { label: "Establishment", val: 2020, suffix: "" },
                     { label: "Global Presence", val: 10, suffix: "+" }
                  ].map((stat, i) => (
                     <div key={i} className={`p-2 sm:p-3 md:p-4 lg:p-6 xl:p-10 text-center group ${i % 2 === 0 && i !== 3 ? 'border-r-2' : ''} ${i < 2 ? 'border-b-2' : ''} md:border-b-0 ${i < 3 ? 'md:border-r-2' : ''} border-slate-100 hover:bg-slate-50 transition-colors`}>
                        <div className={clsx('text-lg', 'sm:text-xl', 'md:text-3xl', 'lg:text-4xl', 'xl:text-5xl', 'font-black', 'text-brand-navy', 'mb-1', 'sm:mb-2', 'md:mb-3', 'lg:mb-4', 'group-hover:text-brand-gold', 'transition-colors')}>
                           <AnimatedCounter end={stat.val} suffix={stat.suffix} />
                        </div>
                        <div className={clsx('text-[8px]', 'sm:text-[9px]', 'md:text-[10px]', 'lg:text-xs', 'xl:text-sm', 'font-black', 'text-slate-400', 'uppercase', 'tracking-[0.15em]', 'sm:tracking-[0.2em]', 'md:tracking-[0.25em]', 'lg:tracking-[0.3em]')}>{stat.label}</div>
                     </div>
                  ))}
               </div>

            </Container>
         </div>


      </div>
   );
}
