"use client";

import { useState } from "react";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import {
  FiShield,
  FiGlobe,
  FiCheckCircle,
  FiActivity,
  FiArrowRight,
  FiPackage,
  FiThermometer,
  FiTruck,
  FiZap,
  FiSend,
  FiFileText
} from "react-icons/fi";
import Link from "next/link";
import clsx from "clsx";

const SERVICES = [
  {
    number: "01",
    title: "Farm Sourcing & Quality Selection",
    badge: "Fresh From Farms",
    description: "We source premium onions, potatoes, green chillies, mangoes, and grapes directly from trusted Indian farms. Our team carefully hand-picks and grades every item so only the best, export-grade produce is packed for you.",
    metric: "100% Quality Checked",
    icon: <FiCheckCircle className={clsx('w-full', 'h-full', 'text-brand-gold')} />
  },
  {
    number: "02",
    title: "Cold Chain & Temperature Control",
    badge: "Freshness Locked",
    description: "We store fresh crops in temperature-controlled cold rooms at the perfect temperature (between 2°C and 12°C). This locks in natural crispness and freshness, ensuring it stays fresh during long-distance shipping.",
    metric: "Constant Cooling (2°C - 12°C)",
    icon: <FiThermometer className={clsx('w-full', 'h-full', 'text-brand-gold')} />
  },
  {
    number: "03",
    title: "Export-Grade Custom Packaging",
    badge: "Secure & Safe",
    description: "We pack our fresh vegetables and fruits in strong, ventilated packaging like breathable mesh bags for onions, sturdy cardboard boxes for fruits, and clean crates to protect them from damage during the journey.",
    metric: "High-Quality Packaging",
    icon: <FiPackage className={clsx('w-full', 'h-full', 'text-brand-gold')} />
  },
  {
    number: "04",
    title: "Global Shipping & Logistics",
    badge: "Global Delivery",
    description: "We partner with top international shipping lines (like Maersk, MSC) to deliver your orders quickly and safely. Perishables are shipped in special climate-controlled reefer containers to arrive fresh at your port.",
    metric: "On-Time Port Delivery",
    icon: <FiTruck className={clsx('w-full', 'h-full', 'text-brand-gold')} />
  }
];

const TRANSIT_ROUTES = [
  {
    region: "Gulf & Middle East Ports",
    hub: "Jebel Ali, Hamad, Dammam",
    duration: "5 - 7",
    unit: "Days",
    description: "Fast direct sea freight routes for highly perishable fresh vegetables and fruits.",
    speed: "Fast Direct Transit"
  },
  {
    region: "Southeast Asia Ports",
    hub: "Singapore, Port Klang, Bangkok",
    duration: "8 - 10",
    unit: "Days",
    description: "Reliable weekly container shipments for bulk vegetable orders like onions and potatoes.",
    speed: "Weekly Bulk Shipments"
  },
  {
    region: "Europe & United Kingdom Ports",
    hub: "Rotterdam, Felixstowe, Hamburg",
    duration: "18 - 22",
    unit: "Days",
    description: "Climate-controlled containers that preserve absolute freshness during long-distance shipping.",
    speed: "Temperature Controlled"
  }
];

export default function ShippingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white">
      <PageHero
        badge="OUR EXPORT SERVICES & LOGISTICS"
        title="Services & Logistics."
        description="We source fresh onions, potatoes, green chillies, mangoes, and grapes directly from trusted Indian farms, packing them securely and shipping them under precise cooling so they arrive perfectly fresh at your port."
        backgroundImage="https://res.cloudinary.com/dtkdcrra2/image/upload/f_auto,q_auto,w_800,c_fit/v1783333593/services_hakvbd.png"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services & Logistics' }
        ]}
      />

      <div className={clsx('relative', 'z-10', 'pt-8', 'sm:pt-12', 'md:pt-16', 'lg:pt-20', 'pb-12', 'sm:pb-16', 'md:pb-20', 'lg:pb-32', 'bg-[#F9FAFB]')}>
        <Container>

          {/* SECTION HEADER */}
          <div className={clsx('flex', 'flex-col', 'md:flex-row', 'md:items-end', 'justify-between', 'gap-6', 'sm:gap-8', 'md:gap-12', 'mb-8', 'sm:mb-10', 'md:mb-12', 'lg:mb-16')}>
            <div className={clsx('space-y-4', 'sm:space-y-5', 'md:space-y-6')}>
              <div className={clsx('flex', 'items-center', 'gap-3', 'sm:gap-4')}>
                <div className={clsx('h-px', 'w-8', 'sm:w-10', 'md:w-12', 'bg-brand-gold')}></div>
                <span className={clsx('text-[8px]', 'sm:text-[9px]', 'md:text-xs', 'font-black', 'text-brand-navy', 'uppercase', 'tracking-[0.3em]', 'sm:tracking-[0.35em]', 'md:tracking-[0.4em]')}>Our Core Workflow</span>
              </div>
              <h2 className={clsx('text-2xl', 'sm:text-4xl', 'md:text-5xl', 'lg:text-7xl', 'xl:text-8xl', 'font-black', 'text-brand-navy', 'tracking-tighter', 'uppercase', 'leading-tight', 'sm:leading-[0.9]', 'md:leading-[0.85]')}>
                COMPLETE <br />
                <span className="text-gradient">SUPPLY CHAIN.</span>
              </h2>
            </div>
          </div>

          {/* Description Section */}
          <div className={clsx('mb-12', 'sm:mb-14', 'md:mb-16', 'lg:mb-20')}>
            <p className={clsx('text-slate-500', 'text-[11px]', 'sm:text-[12px]', 'md:text-sm', 'lg:text-base', 'xl:text-lg', 'font-bold', 'max-w-3xl', 'uppercase', 'tracking-tight', 'sm:tracking-wide', 'leading-relaxed')}>
              From hand-picking fresh produce at Indian farms to safe delivery at global ports, we manage every step with care to ensure you get the freshest vegetables, fruits, and grains.
            </p>
          </div>

          {/* SERVICES GRID */}
          <div className={clsx('grid', 'grid-cols-1', 'sm:grid-cols-2', 'lg:grid-cols-4', 'gap-3', 'sm:gap-4', 'md:gap-5', 'lg:gap-6', 'mb-12', 'sm:mb-16', 'md:mb-20', 'lg:mb-28')}>
            {SERVICES.map((service, index) => (
              <div
                key={service.number}
                className={clsx('animate-reveal', 'opacity-0')}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={clsx('group', 'relative', 'h-full', 'bg-white', 'border', 'border-slate-200', 'hover:border-brand-gold', 'hover:shadow-[0_15px_40px_rgba(212,165,116,0.15)]', 'transition-all', 'duration-500', 'flex', 'flex-col', 'p-4', 'sm:p-5', 'md:p-6', 'lg:p-8', 'overflow-hidden')}>
                  {/* Corner Accent */}
                  <div className={clsx('absolute', 'top-0', 'right-0', 'w-6', 'sm:w-7', 'md:w-8', 'h-6', 'sm:h-7', 'md:h-8', 'border-t-2', 'border-r-2', 'border-brand-gold/10', 'group-hover:border-brand-gold', 'transition-colors')}></div>

                  {/* Floating Number */}
                  <span className={clsx('absolute', 'bottom-4', 'sm:bottom-5', 'md:bottom-6', 'right-4', 'sm:right-5', 'md:right-6', 'lg:right-8', 'text-4xl', 'sm:text-5xl', 'md:text-6xl', 'font-black', 'text-slate-100', 'group-hover:text-brand-gold/10', 'transition-colors', 'pointer-events-none', 'font-outfit')}>
                    {service.number}
                  </span>

                  <div className={clsx('relative', 'z-10', 'flex', 'flex-col', 'h-full', 'space-y-4', 'sm:space-y-5', 'md:space-y-6')}>
                    {/* Badge & Icon */}
                    <div className={clsx('flex', 'items-center', 'justify-between')}>
                      <span className={clsx('text-[8px]', 'sm:text-[8.5px]', 'md:text-[9px]', 'lg:text-[10px]', 'font-black', 'text-brand-gold', 'uppercase', 'tracking-widest', 'bg-brand-gold/5', 'px-2', 'sm:px-2.5', 'md:px-3', 'py-0.5', 'sm:py-1', 'md:py-1.5', 'border', 'border-brand-gold/10')}>
                        {service.badge}
                      </span>
                      <div className={clsx('w-10', 'sm:w-11', 'md:w-12', 'h-10', 'sm:h-11', 'md:h-12', 'bg-slate-50', 'rounded-lg', 'flex', 'items-center', 'justify-center', 'border', 'border-slate-200', 'group-hover:bg-brand-gold/10', 'group-hover:border-brand-gold', 'transition-all', 'duration-500')}>
                        {service.icon}
                      </div>
                    </div>

                    {/* Title & Description */}
                    <div className={clsx('space-y-2', 'sm:space-y-2.5', 'md:space-y-3')}>
                      <h3 className={clsx('text-sm', 'sm:text-base', 'md:text-lg', 'lg:text-xl', 'font-black', 'text-brand-navy', 'group-hover:text-brand-gold', 'transition-colors', 'font-outfit', 'uppercase', 'tracking-tight', 'leading-snug')}>
                        {service.title}
                      </h3>
                      <p className={clsx('text-slate-500', 'text-[10px]', 'sm:text-[10.5px]', 'md:text-xs', 'lg:text-sm', 'font-semibold', 'uppercase', 'tracking-wide', 'opacity-80', 'leading-relaxed')}>
                        {service.description}
                      </p>
                    </div>

                    {/* Metric */}
                    <div className={clsx('pt-4', 'sm:pt-4.5', 'md:pt-6', 'mt-auto', 'border-t', 'border-slate-100')}>
                      <p className={clsx('text-[8px]', 'sm:text-[8.5px]', 'md:text-[9px]', 'lg:text-[10px]', 'font-black', 'text-brand-navy', 'uppercase', 'tracking-widest', 'flex', 'items-center', 'gap-1.5')}>
                        <FiShield className={clsx('text-brand-gold', 'text-xs', 'sm:text-sm')} />
                        {service.metric}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* TRANSIT TIMELINES */}
          <div className={clsx('relative', 'mb-12', 'sm:mb-16', 'md:mb-20', 'lg:mb-28', 'animate-reveal')}>
            <div className={clsx('absolute', 'inset-0', 'bg-brand-gold/5', 'translate-x-2', 'sm:translate-x-3', 'md:translate-x-3.5', 'lg:translate-x-4', 'translate-y-2', 'sm:translate-y-3', 'md:translate-y-3.5', 'lg:translate-y-4')}></div>
            <div className={clsx('relative', 'bg-white', 'border-2', 'border-slate-100', 'p-4', 'sm:p-5', 'md:p-8', 'lg:p-12', 'overflow-hidden')}>
              <div className={clsx('absolute', 'top-0', 'right-0', 'w-20', 'sm:w-24', 'md:w-28', 'lg:w-32', 'h-20', 'sm:h-24', 'md:h-28', 'lg:h-32', 'border-t-8', 'border-r-8', 'border-brand-gold/5')}></div>

              <div className={clsx('relative', 'z-10', 'space-y-6', 'sm:space-y-7', 'md:space-y-8')}>
                {/* Header */}
                <div className={clsx('flex', 'flex-col', 'sm:flex-row', 'sm:items-start', 'gap-4', 'sm:gap-5', 'md:gap-6', 'pb-5', 'sm:pb-6', 'md:pb-7', 'lg:pb-8', 'border-b', 'border-slate-100')}>
                  <div className={clsx('flex', 'items-start', 'gap-2.5', 'sm:gap-3', 'md:gap-4')}>
                    <div className={clsx('w-11', 'sm:w-12', 'md:w-13', 'lg:w-14', 'h-11', 'sm:h-12', 'md:h-13', 'lg:h-14', 'bg-brand-navy', 'text-brand-gold', 'flex', 'items-center', 'justify-center', 'text-base', 'sm:text-lg', 'md:text-xl', 'lg:text-2xl', 'font-black', 'flex-shrink-0')}>
                      <FiGlobe />
                    </div>
                    <div className="flex-1">
                      <h3 className={clsx('text-base', 'sm:text-lg', 'md:text-2xl', 'lg:text-3xl', 'xl:text-4xl', 'font-black', 'text-brand-navy', 'uppercase', 'tracking-tighter', 'font-outfit')}>Logistics & Transit Times</h3>
                      <p className={clsx('text-[8px]', 'sm:text-[8.5px]', 'md:text-[9px]', 'lg:text-[10px]', 'font-black', 'text-brand-gold', 'uppercase', 'tracking-widest', 'mt-0.5', 'sm:mt-1')}>Global Ports & Shipping Schedules</p>
                    </div>
                  </div>
                  <span className={clsx('text-[7.5px]', 'sm:text-[8px]', 'md:text-[9px]', 'font-black', 'text-white', 'bg-emerald-500', 'px-2', 'sm:px-2.5', 'md:px-3', 'py-0.5', 'sm:py-1', 'uppercase', 'tracking-widest', 'animate-pulse', 'whitespace-nowrap', 'self-start', 'sm:self-auto')}>
                    Shipping Lanes: Active
                  </span>
                </div>

                {/* Description */}
                <p className={clsx('text-[11px]', 'sm:text-[12px]', 'md:text-sm', 'lg:text-base', 'xl:text-lg', 'text-slate-500', 'font-bold', 'uppercase', 'tracking-tight', 'sm:tracking-wide', 'leading-relaxed')}>
                  We ship from India's leading ports (Mundra, Nhava Sheva) directly to major global hubs, maintaining temperature and quality checks throughout the voyage.
                </p>

                {/* Routes Grid */}
                <div className={clsx('grid', 'grid-cols-1', 'sm:grid-cols-2', 'lg:grid-cols-3', 'gap-3', 'sm:gap-4', 'md:gap-5', 'lg:gap-6')}>
                  {TRANSIT_ROUTES.map((route, idx) => (
                    <div key={idx} className={clsx('bg-[#F9FAFB]', 'border', 'border-slate-200', 'p-4', 'sm:p-5', 'md:p-6', 'flex', 'flex-col', 'justify-between', 'hover:border-brand-gold', 'transition-all', 'duration-500', 'group')}>
                      <div className={clsx('space-y-3', 'sm:space-y-4')}>
                        <div className={clsx('flex', 'items-center', 'justify-between', 'gap-2')}>
                          <span className={clsx('text-[8px]', 'sm:text-[8.5px]', 'md:text-[9px]', 'font-black', 'text-brand-gold', 'bg-brand-gold/5', 'border', 'border-brand-gold/15', 'px-2', 'sm:px-2.5', 'py-0.5', 'sm:py-1', 'uppercase', 'tracking-widest')}>
                            {route.speed}
                          </span>
                          <FiZap className={clsx('text-brand-gold', 'text-xs', 'sm:text-sm', 'animate-pulse', 'flex-shrink-0')} />
                        </div>
                        <div>
                          <h4 className={clsx('text-sm', 'sm:text-base', 'md:text-lg', 'font-black', 'text-brand-navy', 'uppercase', 'tracking-tight', 'font-outfit')}>{route.region}</h4>
                          <p className={clsx('text-[8px]', 'sm:text-[8.5px]', 'md:text-xs', 'font-bold', 'text-slate-400', 'uppercase', 'tracking-widest', 'mt-0.5')}>{route.hub}</p>
                        </div>
                        <p className={clsx('text-[9px]', 'sm:text-[9.5px]', 'md:text-xs', 'text-slate-500', 'font-semibold', 'uppercase', 'leading-relaxed', 'tracking-wide')}>
                          {route.description}
                        </p>
                      </div>

                      <div className={clsx('mt-5', 'sm:mt-6', 'md:mt-7', 'lg:mt-8', 'pt-4', 'sm:pt-5', 'md:pt-6', 'border-t', 'border-slate-200/60', 'flex', 'items-center', 'justify-between')}>
                        <span className={clsx('text-[8px]', 'sm:text-[8.5px]', 'md:text-[9px]', 'font-black', 'text-slate-400', 'uppercase', 'tracking-widest')}>Estimated Transit</span>
                        <div className={clsx('flex', 'items-baseline', 'gap-0.5', 'sm:gap-1')}>
                          <span className={clsx('text-xl', 'sm:text-2xl', 'md:text-3xl', 'lg:text-4xl', 'font-black', 'text-brand-navy', 'group-hover:text-brand-gold', 'transition-colors', 'font-outfit')}>{route.duration}</span>
                          <span className={clsx('text-[8px]', 'sm:text-[8.5px]', 'md:text-xs', 'font-black', 'text-slate-400', 'uppercase', 'tracking-widest')}>{route.unit}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* QUALITY ASSURANCE SECTION */}
          <div className={clsx('relative', 'mb-16', 'sm:mb-20', 'md:mb-24', 'lg:mb-32', 'animate-reveal')}>
            <div className={clsx('absolute', 'inset-0', 'bg-brand-navy/5', '-translate-x-2', 'sm:-translate-x-3', 'md:-translate-x-3.5', 'lg:-translate-x-4', '-translate-y-2', 'sm:-translate-y-3', 'md:-translate-y-3.5', 'lg:-translate-y-4')}></div>
            <div className={clsx('relative', 'bg-white', 'border-2', 'border-slate-100', 'p-4', 'sm:p-5', 'md:p-8', 'lg:p-12', 'overflow-hidden')}>
              <div className={clsx('absolute', 'bottom-0', 'left-0', 'w-20', 'sm:w-24', 'md:w-28', 'lg:w-32', 'h-20', 'sm:h-24', 'md:h-28', 'lg:h-32', 'border-b-8', 'border-l-8', 'border-brand-gold/5')}></div>

              <div className={clsx('grid', 'grid-cols-1', 'lg:grid-cols-12', 'gap-6', 'sm:gap-7', 'md:gap-8', 'lg:gap-10', 'items-start')}>
                <div className={clsx('lg:col-span-7', 'space-y-5', 'sm:space-y-6', 'md:space-y-7', 'lg:space-y-8', 'relative', 'z-10')}>
                  <div className={clsx('flex', 'items-start', 'gap-2.5', 'sm:gap-3', 'md:gap-4')}>
                    <div className={clsx('w-13', 'sm:w-14', 'md:w-15', 'lg:w-16', 'h-13', 'sm:h-14', 'md:h-15', 'lg:h-16', 'bg-brand-navy', 'text-brand-gold', 'flex', 'items-center', 'justify-center', 'text-xl', 'sm:text-2xl', 'md:text-2.5xl', 'lg:text-3xl', 'font-black', 'flex-shrink-0')}>
                      <FiShield />
                    </div>
                    <div className="flex-1">
                      <h3 className={clsx('text-base', 'sm:text-lg', 'md:text-2xl', 'lg:text-3xl', 'xl:text-4xl', 'font-black', 'text-brand-navy', 'uppercase', 'tracking-tighter', 'font-outfit')}>Safe Sourcing & Certified Quality</h3>
                      <p className={clsx('text-[8px]', 'sm:text-[8.5px]', 'md:text-[9px]', 'lg:text-[10px]', 'font-black', 'text-brand-gold', 'uppercase', 'tracking-widest', 'mt-0.5', 'sm:mt-1')}>APEDA & FSSAI Certified Partner</p>
                    </div>
                  </div>
                  
                  <p className={clsx('text-[11px]', 'sm:text-[12px]', 'md:text-sm', 'lg:text-base', 'xl:text-lg', 'text-slate-500', 'font-bold', 'uppercase', 'tracking-tight', 'sm:tracking-wide', 'leading-relaxed')}>
                    We handle all government quality tests, pest control checks, and customs paperwork so your shipment clears quickly and easily at the destination port.
                  </p>

                  <div className={clsx('grid', 'grid-cols-1', 'sm:grid-cols-2', 'gap-3', 'sm:gap-4', 'md:gap-5')}>
                    {[
                      { name: "Phytosanitary Certification", desc: "Proves produce is fresh, clean, and pest-free" },
                      { name: "APEDA Approved Sourcing", desc: "Meets strict government standards for export" },
                      { name: "SGS Quality Testing", desc: "Verifies absolute food safety and zero pesticide residues" },
                      { name: "Pre-Cooling Checks", desc: "Container temperatures are verified before door sealing" }
                    ].map((item, i) => (
                      <div key={i} className={clsx('flex', 'items-start', 'gap-2.5', 'sm:gap-3', 'p-3', 'sm:p-4', 'md:p-5', 'bg-[#F9FAFB]', 'border', 'border-slate-200')}>
                        <FiCheckCircle className={clsx('text-brand-gold', 'text-sm', 'sm:text-base', 'mt-0.5', 'flex-shrink-0')} />
                        <div>
                          <h4 className={clsx('text-[9px]', 'sm:text-[9.5px]', 'md:text-xs', 'lg:text-sm', 'font-black', 'text-brand-navy', 'uppercase', 'tracking-widest', 'mb-0.5')}>{item.name}</h4>
                          <p className={clsx('text-[8px]', 'sm:text-[8.5px]', 'md:text-[9px]', 'lg:text-[10px]', 'font-bold', 'text-slate-400', 'uppercase', 'tracking-widest', 'leading-tight')}>{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={clsx('lg:col-span-5', 'relative', 'z-10')}>
                  <div className={clsx('p-4', 'sm:p-5', 'md:p-6', 'lg:p-8', 'bg-brand-navy', 'text-white', 'overflow-hidden', 'group')}>
                    <div className={clsx('absolute', 'top-0', 'right-0', 'w-20', 'sm:w-24', 'md:w-28', 'lg:w-32', 'h-20', 'sm:h-24', 'md:h-28', 'lg:h-32', 'bg-brand-gold/10', 'blur-3xl')}></div>
                    <div className={clsx('relative', 'z-10')}>
                      <h4 className={clsx('text-base', 'sm:text-lg', 'md:text-xl', 'lg:text-2xl', 'font-black', 'uppercase', 'tracking-tighter', 'mb-3', 'sm:mb-4', 'font-outfit')}>Get a Custom Quote</h4>
                      <p className={clsx('text-[9px]', 'sm:text-[10px]', 'md:text-xs', 'lg:text-sm', 'font-bold', 'text-white/40', 'uppercase', 'tracking-widest', 'leading-relaxed', 'mb-5', 'sm:mb-6', 'md:mb-8')}>
                        Need a specific size of onion, custom packaging boxes, or direct shipping prices? Get in touch with our team today and receive a clear quote within 24 hours.
                      </p>
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className={clsx('group/btn', 'block', 'w-full', 'py-2.5', 'sm:py-3', 'md:py-4', 'lg:py-5', 'px-3', 'sm:px-4', 'md:px-5', 'bg-brand-gold', 'text-brand-navy', 'text-[9px]', 'sm:text-[10px]', 'md:text-[11px]', 'lg:text-xs', 'font-black', 'text-center', 'uppercase', 'tracking-[0.1em]', 'sm:tracking-[0.15em]', 'md:tracking-[0.2em]', 'lg:tracking-[0.3em]', 'hover:bg-white', 'transition-all', 'duration-500', 'active:scale-[0.98]')}
                      >
                        <span className={clsx('flex', 'items-center', 'justify-center', 'gap-2', 'sm:gap-2.5', 'md:gap-3')}>
                          Request a Quote Now
                          <FiArrowRight className={clsx('text-xs', 'sm:text-sm', 'md:text-base', 'lg:text-lg', 'group-hover/btn:translate-x-2', 'transition-transform', 'duration-300')} />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </Container>
      </div>

      {isModalOpen && <InquiryModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

function InquiryModal({ onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Inquiry successfully transmitted. Our trade specialists will get in touch with you shortly.");
    onClose();
  };

  return (
    <div className={clsx('fixed', 'inset-0', 'z-50', 'flex', 'items-end', 'sm:items-center', 'justify-center', 'bg-black/60', 'backdrop-blur-sm')} onClick={onClose}>
      <div className={clsx('relative', 'w-full', 'sm:max-w-3xl', 'max-h-[95vh]', 'sm:max-h-[90vh]', 'overflow-y-auto')} onClick={(e) => e.stopPropagation()}>
        <div className={clsx('relative', 'bg-white', 'rounded-t-3xl', 'sm:rounded-none', 'border-2', 'border-slate-100', 'p-5', 'sm:p-8', 'md:p-10', 'lg:p-12', 'shadow-2xl')}>
          <button
            onClick={onClose}
            className={clsx('absolute', 'top-4', 'sm:top-6', 'right-4', 'sm:right-6', 'w-9', 'sm:w-10', 'h-9', 'sm:h-10', 'bg-slate-50', 'hover:bg-slate-100', 'border', 'border-slate-200', 'flex', 'items-center', 'justify-center', 'transition-colors', 'text-brand-navy')}
          >
            <svg className={clsx('w-4.5', 'sm:w-5', 'h-4.5', 'sm:h-5')} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className={clsx('text-center', 'mb-6', 'sm:mb-8')}>
            <div className={clsx('inline-flex', 'items-center', 'bg-brand-gold/10', 'px-3', 'sm:px-4', 'py-1.5', 'sm:py-2', 'border', 'border-brand-gold/25', 'mb-3', 'sm:mb-4')}>
              <FiSend className={clsx('text-brand-gold', 'mr-2', 'text-xs', 'sm:text-sm')} />
              <span className={clsx('text-[8px]', 'sm:text-[9px]', 'md:text-xs', 'font-black', 'text-brand-navy', 'uppercase', 'tracking-widest')}>Inquiry Form</span>
            </div>
            <h2 className={clsx('text-lg', 'sm:text-2xl', 'md:text-3xl', 'lg:text-4xl', 'font-black', 'text-brand-navy', 'uppercase', 'tracking-tight', 'font-outfit', 'mb-2')}>
              Request Specifications
            </h2>
            <p className={clsx('text-[9px]', 'sm:text-[10px]', 'md:text-xs', 'lg:text-sm', 'text-slate-500', 'font-semibold', 'uppercase', 'tracking-wider')}>
              Fill out the specifications below to receive trade quotes in 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className={clsx('space-y-4', 'sm:space-y-5', 'md:space-y-6')}>
            <div className={clsx('grid', 'grid-cols-1', 'sm:grid-cols-2', 'gap-3', 'sm:gap-4', 'md:gap-5')}>
              <div>
                <label className={clsx('block', 'text-[8px]', 'sm:text-[9px]', 'md:text-xs', 'font-black', 'text-brand-navy', 'uppercase', 'tracking-widest', 'mb-1.5', 'sm:mb-2')}>
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  className={clsx('w-full', 'bg-[#F9FAFB]', 'border', 'border-slate-200', 'px-3', 'sm:px-4', 'py-2', 'sm:py-3', 'focus:border-brand-gold', 'focus:bg-white', 'outline-none', 'transition-all', 'text-xs', 'sm:text-sm', 'font-bold', 'uppercase', 'tracking-wider', 'text-brand-navy')}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className={clsx('block', 'text-[8px]', 'sm:text-[9px]', 'md:text-xs', 'font-black', 'text-brand-navy', 'uppercase', 'tracking-widest', 'mb-1.5', 'sm:mb-2')}>
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  className={clsx('w-full', 'bg-[#F9FAFB]', 'border', 'border-slate-200', 'px-3', 'sm:px-4', 'py-2', 'sm:py-3', 'focus:border-brand-gold', 'focus:bg-white', 'outline-none', 'transition-all', 'text-xs', 'sm:text-sm', 'font-bold', 'tracking-wider', 'text-brand-navy')}
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className={clsx('block', 'text-[8px]', 'sm:text-[9px]', 'md:text-xs', 'font-black', 'text-brand-navy', 'uppercase', 'tracking-widest', 'mb-1.5', 'sm:mb-2')}>
                  Phone Number *
                </label>
                <input
                  type="text"
                  required
                  className={clsx('w-full', 'bg-[#F9FAFB]', 'border', 'border-slate-200', 'px-3', 'sm:px-4', 'py-2', 'sm:py-3', 'focus:border-brand-gold', 'focus:bg-white', 'outline-none', 'transition-all', 'text-xs', 'sm:text-sm', 'font-bold', 'tracking-wider', 'text-brand-navy')}
                  placeholder="+91 XXXXXXXXXX"
                />
              </div>

              <div>
                <label className={clsx('block', 'text-[8px]', 'sm:text-[9px]', 'md:text-xs', 'font-black', 'text-brand-navy', 'uppercase', 'tracking-widest', 'mb-1.5', 'sm:mb-2')}>
                  Company Name
                </label>
                <input
                  type="text"
                  className={clsx('w-full', 'bg-[#F9FAFB]', 'border', 'border-slate-200', 'px-3', 'sm:px-4', 'py-2', 'sm:py-3', 'focus:border-brand-gold', 'focus:bg-white', 'outline-none', 'transition-all', 'text-xs', 'sm:text-sm', 'font-bold', 'uppercase', 'tracking-wider', 'text-brand-navy')}
                  placeholder="Your Company"
                />
              </div>
            </div>

            <div>
              <label className={clsx('block', 'text-[8px]', 'sm:text-[9px]', 'md:text-xs', 'font-black', 'text-brand-navy', 'uppercase', 'tracking-widest', 'mb-1.5', 'sm:mb-2')}>
                Commodity Requirements *
              </label>
              <textarea
                rows={4}
                required
                className={clsx('w-full', 'bg-[#F9FAFB]', 'border', 'border-slate-200', 'px-3', 'sm:px-4', 'py-2', 'sm:py-3', 'focus:border-brand-gold', 'focus:bg-white', 'outline-none', 'transition-all', 'text-xs', 'sm:text-sm', 'font-bold', 'uppercase', 'tracking-wider', 'text-brand-navy', 'resize-none')}
                placeholder="Specify vegetables, fruits, custom sizing or packaging requirements..."
              ></textarea>
            </div>

            <button
              type="submit"
              className={clsx('w-full', 'py-3', 'sm:py-4', 'md:py-5', 'bg-brand-gold', 'text-brand-navy', 'hover:bg-brand-navy', 'hover:text-white', 'font-black', 'text-[10px]', 'sm:text-xs', 'md:text-sm', 'uppercase', 'tracking-[0.2em]', 'sm:tracking-[0.25em]', 'md:tracking-[0.3em]', 'shadow-xl', 'transition-all', 'duration-500', 'flex', 'items-center', 'justify-center', 'gap-2')}
            >
              <span>Transmit Specification Form</span>
              <FiSend className={clsx('text-xs', 'sm:text-sm')} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
