"use client";

import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import {
   FiMail, FiPhone, FiMapPin, FiClock, FiSend,
   FiGlobe, FiMessageCircle, FiActivity, FiArrowRight,
   FiUser, FiBriefcase, FiHash, FiCheckCircle, FiChevronRight,
   FiAlertCircle
} from "react-icons/fi";
import clsx from "clsx";

export default function ContactPage() {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: ""
   });
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [submitStatus, setSubmitStatus] = useState(null);
   const [focusedField, setFocusedField] = useState(null);
   const [errors, setErrors] = useState({});

   const validateField = (name, value) => {
      let error = null;
      const val = value.trim();

      switch (name) {
         case 'name':
            const nameRegex = /^[a-zA-Z\s.-]+$/;
            if (!val) error = "Please provide your full name.";
            else if (val.length < 2) error = "Please enter a valid name (at least 2 characters).";
            else if (val.length > 50) error = "This name is a bit too long (max 50 characters).";
            else if (!nameRegex.test(val)) error = "Please use only letters, spaces, hyphens, and periods.";
            break;

         case 'email':
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
            if (!val) error = "We need your email to respond to you.";
            else if (!emailRegex.test(val)) error = "Please double-check your email address format.";
            break;

         case 'phone':
            const phoneRegex = /^\+?[\d\s\-()]{8,20}$/;
            const digitCount = (val.match(/\d/g) || []).length;
            if (!val) error = "A phone number is required so we can call you back.";
            else if (!phoneRegex.test(val)) error = "Please use numbers and standard formatting characters.";
            else if (digitCount < 8 || digitCount > 15) error = "Your phone number seems to be missing some digits.";
            break;

         case 'company':
            if (!val) error = "Please let us know your company name.";
            else if (val.length < 2) error = "Company name must be at least 2 characters.";
            else if (val.length > 100) error = "Company name is too long (max 100 characters).";
            break;

         case 'message':
            if (!val) error = "Please tell us how we can help you.";
            else if (val.length < 10) error = "Please provide a little more detail in your message.";
            else if (val.length > 1000) error = "Your message is quite long! Please keep it under 1000 characters.";
            break;

         default:
            break;
      }
      return error;
   };

   const validateForm = () => {
      const newErrors = {};
      Object.keys(formData).forEach(key => {
         const error = validateField(key, formData[key]);
         if (error) newErrors[key] = error;
      });
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      if (!validateForm()) return;
      setIsSubmitting(true);

      try {
         await emailjs.send(
            'service_489ts7p',
            'template_99y4k67',
            {
               from_name: formData.name,
               from_email: formData.email,
               phone: formData.phone,
               company: formData.company,
               message: formData.message,
               to_email: 'info@mitrayexim.com'
            },
            'J8zYYgRTPwF7rion2'
         );

         setSubmitStatus("success");
         setFormData({ name: "", email: "", phone: "", company: "", message: "" });
      } catch (error) {
         console.error('Email send failed:', error);
         setSubmitStatus("error");
      }

      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
   };

   const handleChange = (e) => {
      const { name, value } = e.target;

      // Strict input blocking BEFORE updating state
      if (name === 'phone' && value !== "") {
         // Allow only digits, plus, hyphens, parentheses, and spaces
         if (!/^[\d\s\-()+]*$/.test(value)) return;
      }
      if (name === 'name' && value !== "") {
         // Allow only letters, spaces, hyphens, and periods
         if (!/^[a-zA-Z\s.-]*$/.test(value)) return;
      }

      setFormData(prev => ({ ...prev, [name]: value }));

      // Validate instantly if there's already an error to clear it
      if (errors[name]) {
         const error = validateField(name, value);
         setErrors(prev => ({ ...prev, [name]: error }));
      }
   };

   const handleBlur = (e) => {
      const { name, value } = e.target;
      setFocusedField(null);
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
   };

   return (
      <div className="bg-white">
         {/* 1. HERO SECTION */}
         <PageHero
            badge="GET IN TOUCH"
            title="Get in Touch."
            description="Have questions about our fresh fruits and vegetable exports, sourcing, or custom packing solutions? Our dedicated team is here to provide swift, reliable export assistance."
            backgroundImage="https://res.cloudinary.com/dtkdcrra2/image/upload/f_auto,q_auto,w_800,c_fit/v1783333585/contact_dq4zlh.png"
            breadcrumbs={[
               { label: 'Home', href: '/' },
               { label: 'Contact Us' }
            ]}
         />

         <div className={clsx('relative', 'z-10', 'pt-6', 'sm:pt-10', 'md:pt-14', 'lg:pt-18', 'xl:pt-24', 'pb-8', 'sm:pb-12', 'md:pb-16', 'lg:pb-20', 'xl:pb-28')}>
            {/* Decorative Background Elements */}
            <div className={clsx('fixed', 'top-0', 'left-0', 'w-96', 'h-96', 'bg-brand-gold/3', 'rounded-full', 'blur-3xl', '-translate-x-1/2', '-translate-y-1/2', 'pointer-events-none')}></div>
            <div className={clsx('fixed', 'bottom-0', 'right-0', 'w-96', 'h-96', 'bg-brand-navy/3', 'rounded-full', 'blur-3xl', 'translate-x-1/2', 'translate-y-1/2', 'pointer-events-none')}></div>

            <Container>
               <div className={clsx('grid', 'grid-cols-1', 'lg:grid-cols-12', 'gap-4', 'sm:gap-6', 'md:gap-8', 'lg:gap-10', 'xl:gap-12', 'items-start')}>

                  {/* LEFT: CONTACT DETAILS */}
                  <div className={clsx('lg:col-span-5', 'space-y-4', 'sm:space-y-6', 'md:space-y-8', 'lg:space-y-10', 'animate-reveal', 'delay-300', 'opacity-0', 'lg:sticky', 'lg:top-20', 'px-4', 'sm:px-0')}>

                     {/* Header Section */}
                     <div className={clsx('space-y-3', 'sm:space-y-4', 'md:space-y-5', 'lg:space-y-6')}>
                        <div className={clsx('flex', 'items-center', 'gap-2', 'sm:gap-3')}>
                           <div className={clsx('h-1', 'w-6', 'sm:w-8', 'md:w-10', 'lg:w-12', 'bg-gradient-to-r', 'from-brand-gold', 'via-brand-gold', 'to-brand-gold/50', 'rounded-full')}></div>
                           <span className={clsx('text-[8px]', 'sm:text-[9px]', 'md:text-xs', 'lg:text-sm', 'font-black', 'text-brand-gold', 'uppercase', 'tracking-[0.2em]', 'sm:tracking-[0.25em]', 'md:tracking-[0.3em]', 'lg:tracking-[0.4em]')}>Direct Channels</span>
                        </div>
                        <h2 className={clsx('text-2xl', 'sm:text-3xl', 'md:text-4xl', 'lg:text-5xl', 'xl:text-6xl', '2xl:text-7xl', 'font-black', 'text-brand-navy', 'tracking-tighter', 'uppercase', 'leading-[0.95]', 'sm:leading-[0.9]')}>
                           DIRECT <br />
                           <span className="text-gradient">CHANNELS.</span>
                        </h2>
                     </div>

                     {/* Contact Cards */}
                     <div className={clsx('grid', 'grid-cols-1', 'gap-3', 'sm:gap-3', 'md:gap-4', 'lg:gap-5')}>
                        {[
                           {
                              label: "Direct Trade Line",
                              val: "+91 7778886559",
                              icon: <FiPhone className={clsx('w-5', 'sm:w-6', 'md:w-7', 'lg:w-8', 'h-5', 'sm:h-6', 'md:h-7', 'lg:h-8')} />,
                              link: "tel:+917778886559",
                              color: "from-blue-500 to-blue-600",
                              bgColor: "bg-blue-50 group-hover:bg-blue-100"
                           },
                           {
                              label: "Email Our Desk",
                              val: "info@mitrayexim.com",
                              icon: <FiMail className={clsx('w-5', 'sm:w-6', 'md:w-7', 'lg:w-8', 'h-5', 'sm:h-6', 'md:h-7', 'lg:h-8')} />,
                              link: "mailto:info@mitrayexim.com",
                              color: "from-purple-500 to-purple-600",
                              bgColor: "bg-purple-50 group-hover:bg-purple-100"
                           },
                           {
                              label: "Chat on WhatsApp",
                              val: "+91 7778886559",
                              icon: <FiMessageCircle className={clsx('w-5', 'sm:w-6', 'md:w-7', 'lg:w-8', 'h-5', 'sm:h-6', 'md:h-7', 'lg:h-8')} />,
                              link: "https://wa.me/qr/FDGPNCKQQGMCL1",
                              color: "from-emerald-500 to-emerald-600",
                              bgColor: "bg-emerald-50 group-hover:bg-emerald-100"
                           },
                        ].map((item, i) => (
                           <a
                              key={i}
                              href={item.link}
                              target={item.link.startsWith('http') ? '_blank' : undefined}
                              className={clsx('group', 'relative', 'overflow-hidden', 'transition-all', 'duration-500', 'hover:-translate-y-1')}
                           >
                              <div className={`absolute inset-0 ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                              <div className={`relative p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl ${item.bgColor} border-2 border-slate-200 group-hover:border-slate-300 transition-all duration-500 flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 shadow-sm group-hover:shadow-md`}>

                                 <div className={`w-10 sm:w-12 md:w-14 lg:w-16 h-10 sm:h-12 md:h-14 lg:h-16 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500 shadow-md flex-shrink-0`}>
                                    {item.icon}
                                 </div>

                                 <div className={clsx('flex-1', 'min-w-0')}>
                                    <p className={clsx('text-[8px]', 'sm:text-[9px]', 'md:text-xs', 'lg:text-xs', 'font-black', 'text-slate-500', 'uppercase', 'tracking-widest', 'mb-0.5', 'sm:mb-1')}>{item.label}</p>
                                    <p className={clsx('text-xs', 'sm:text-sm', 'md:text-base', 'lg:text-lg', 'font-black', 'text-brand-navy', 'uppercase', 'tracking-wider', 'line-clamp-1')}>{item.val}</p>
                                 </div>

                                 <div className={clsx('opacity-0', 'group-hover:opacity-100', 'transition-opacity', 'duration-300', 'flex-shrink-0')}>
                                    <FiChevronRight className={clsx('w-4', 'sm:w-5', 'md:w-6', 'text-brand-gold')} />
                                 </div>
                              </div>
                           </a>
                        ))}
                     </div>

                     {/* OPERATIONAL HOURS - PREMIUM */}
                     <div className={clsx('group', 'relative', 'mt-4', 'sm:mt-6', 'md:mt-8', 'lg:mt-10')}>
                        <div className={clsx('absolute', '-inset-1', 'sm:-inset-1.5', 'md:-inset-2', 'bg-gradient-to-r', 'from-brand-gold/20', 'via-brand-navy/20', 'to-brand-gold/20', 'rounded-2xl', 'sm:rounded-2xl', 'md:rounded-3xl', 'blur-lg', 'sm:blur-xl', 'opacity-0', 'group-hover:opacity-100', 'transition-opacity', 'duration-500')}></div>

                        <div className={clsx('relative', 'p-4', 'sm:p-5', 'md:p-6', 'lg:p-8', 'rounded-xl', 'sm:rounded-2xl', 'md:rounded-3xl', 'bg-gradient-to-br', 'from-brand-navy', 'to-brand-navy/95', 'border-2', 'border-brand-gold/20', 'group-hover:border-brand-gold/40', 'transition-all', 'duration-500', 'overflow-hidden', 'shadow-lg', 'group-hover:shadow-2xl')}>
                           <div className={clsx('absolute', 'top-0', 'right-0', 'w-24', 'sm:w-32', 'md:w-40', 'lg:w-48', 'h-24', 'sm:h-32', 'md:h-40', 'lg:h-48', 'bg-gradient-to-br', 'from-brand-gold/15', 'to-transparent', 'blur-3xl', '-translate-y-1/2', 'translate-x-1/3')}></div>

                           <div className={clsx('relative', 'z-10', 'flex', 'items-center', 'gap-2', 'sm:gap-3', 'md:gap-4', 'mb-4', 'sm:mb-5', 'md:mb-6', 'lg:mb-8')}>
                              <div className={clsx('w-9', 'sm:w-11', 'md:w-13', 'lg:w-16', 'h-9', 'sm:h-11', 'md:h-13', 'lg:h-16', 'rounded-lg', 'sm:rounded-xl', 'md:rounded-2xl', 'bg-gradient-to-br', 'from-brand-gold', 'to-brand-gold/80', 'flex', 'items-center', 'justify-center', 'text-brand-navy', 'text-lg', 'sm:text-xl', 'md:text-2xl', 'lg:text-3xl', 'font-bold', 'shadow-lg', 'flex-shrink-0')}>
                                 <FiClock />
                              </div>
                              <h4 className={clsx('text-sm', 'sm:text-base', 'md:text-lg', 'lg:text-xl', 'font-black', 'uppercase', 'tracking-tight', 'text-white')}>Office Hours</h4>
                           </div>

                           <div className={clsx('relative', 'z-10', 'space-y-2', 'sm:space-y-2.5', 'md:space-y-3', 'lg:space-y-4')}>
                              <div className={clsx('flex', 'justify-between', 'items-center', 'py-2.5', 'sm:py-3', 'md:py-3.5', 'lg:py-4', 'px-3', 'sm:px-3.5', 'md:px-4', 'lg:px-5', 'rounded-lg', 'sm:rounded-xl', 'bg-white/10', 'hover:bg-white/20', 'transition-all', 'duration-300', 'border', 'border-white/10', 'group/hour')}>
                                 <span className={clsx('text-[8px]', 'sm:text-[9px]', 'md:text-xs', 'lg:text-sm', 'font-bold', 'text-white/80', 'uppercase', 'tracking-wider')}>Mon - Sat</span>
                                 <span className={clsx('text-[9px]', 'sm:text-xs', 'md:text-sm', 'lg:text-base', 'font-black', 'uppercase', 'tracking-wider', 'text-brand-gold')}>09:00 - 19:00 IST</span>
                              </div>
                              <div className={clsx('flex', 'justify-between', 'items-center', 'py-2.5', 'sm:py-3', 'md:py-3.5', 'lg:py-4', 'px-3', 'sm:px-3.5', 'md:px-4', 'lg:px-5', 'rounded-lg', 'sm:rounded-xl', 'bg-red-500/10', 'hover:bg-red-500/20', 'transition-all', 'duration-300', 'border', 'border-red-500/10')}>
                                 <span className={clsx('text-[8px]', 'sm:text-[9px]', 'md:text-xs', 'lg:text-sm', 'font-bold', 'text-white/80', 'uppercase', 'tracking-wider')}>Sunday</span>
                                 <span className={clsx('text-[9px]', 'sm:text-xs', 'md:text-sm', 'lg:text-base', 'font-black', 'uppercase', 'tracking-wider', 'text-red-400')}>Closed</span>
                              </div>
                           </div>

                           <div className={clsx('relative', 'z-10', 'mt-4', 'sm:mt-4.5', 'md:mt-5', 'lg:mt-6', 'pt-4', 'sm:pt-4.5', 'md:pt-5', 'lg:pt-6', 'border-t', 'border-white/20', 'flex', 'items-center', 'gap-2', 'sm:gap-2.5', 'md:gap-3')}>
                              <div className={clsx('w-1.5', 'sm:w-2', 'h-1.5', 'sm:h-2', 'rounded-full', 'bg-emerald-400', 'animate-pulse', 'shadow-lg', 'shadow-emerald-400/50', 'flex-shrink-0')}></div>
                              <span className={clsx('text-[7px]', 'sm:text-[8px]', 'md:text-[9px]', 'lg:text-xs', 'font-black', 'text-emerald-300', 'uppercase', 'tracking-wider', 'leading-tight')}>Support Active 24/7 - Quick Response</span>
                           </div>
                        </div>
                     </div>

                  </div>

                  {/* RIGHT: CONTACT FORM - PREMIUM */}
                  <div className={clsx('lg:col-span-7', 'animate-reveal', 'delay-500', 'opacity-0', 'px-4', 'sm:px-0')}>
                     <div className={clsx('group', 'relative')}>
                        <div className={clsx('absolute', '-inset-2', 'sm:-inset-2.5', 'md:-inset-3', 'bg-gradient-to-r', 'from-brand-gold/25', 'via-transparent', 'to-brand-gold/25', 'rounded-2xl', 'sm:rounded-3xl', 'md:rounded-4xl', 'blur-2xl', 'opacity-0', 'group-hover:opacity-50', 'transition-opacity', 'duration-500')}></div>

                        <div className={clsx('relative', 'p-4', 'sm:p-6', 'md:p-8', 'lg:p-10', 'xl:p-14', 'rounded-2xl', 'sm:rounded-3xl', 'md:rounded-4xl', 'bg-gradient-to-br', 'from-white', 'via-slate-50', 'to-white', 'border-2', 'border-slate-200', 'group-hover:border-brand-gold/30', 'transition-all', 'duration-500', 'shadow-xl', 'group-hover:shadow-2xl', 'overflow-hidden')}>

                           {/* Decorative Elements */}
                           <div className={clsx('absolute', 'top-0', 'right-0', 'w-32', 'sm:w-40', 'md:w-48', 'lg:w-56', 'xl:w-64', 'h-32', 'sm:h-40', 'md:h-48', 'lg:h-56', 'xl:h-64', 'bg-gradient-to-br', 'from-brand-gold/12', 'to-brand-navy/8', 'blur-3xl', '-translate-y-1/3', 'translate-x-1/3', 'rounded-full', 'pointer-events-none')}></div>
                           <div className={clsx('absolute', '-bottom-16', '-left-16', 'w-40', 'sm:w-48', 'md:w-56', 'h-40', 'sm:h-48', 'md:h-56', 'bg-brand-navy/5', 'blur-3xl', 'rounded-full', 'pointer-events-none')}></div>

                           <div className={clsx('relative', 'z-10', 'mb-5', 'sm:mb-6', 'md:mb-8', 'lg:mb-10')}>
                              <div className={clsx('inline-flex', 'items-center', 'gap-2', 'mb-3', 'sm:mb-4')}>
                                 <div className={clsx('h-1', 'w-3', 'sm:w-4', 'md:w-5', 'lg:w-6', 'bg-gradient-to-r', 'from-brand-gold', 'to-brand-gold/50', 'rounded-full')}></div>
                                 <span className={clsx('text-[8px]', 'sm:text-[9px]', 'md:text-xs', 'lg:text-sm', 'font-black', 'text-brand-gold', 'uppercase', 'tracking-[0.2em]')}>Ready to Connect?</span>
                              </div>

                              <h3 className={clsx('text-lg', 'sm:text-2xl', 'md:text-3xl', 'lg:text-4xl', 'xl:text-5xl', '2xl:text-6xl', 'font-black', 'text-brand-navy', 'uppercase', 'tracking-tight', 'mb-2', 'sm:mb-3', 'md:mb-4', 'leading-tight')}>
                                 Send Us <br className={clsx('hidden', 'sm:block')} /><span className="text-gradient">A Message</span>
                              </h3>
                              <p className={clsx('text-[9px]', 'sm:text-xs', 'md:text-sm', 'lg:text-base', 'text-slate-600', 'font-semibold', 'uppercase', 'tracking-wide', 'leading-relaxed', 'max-w-sm')}>
                                 Submit your export inquiry. Our team responds within 24 hours with custom quotes.
                              </p>
                           </div>

                           {submitStatus === "success" && (
                              <div className={clsx('mb-4', 'sm:mb-5', 'md:mb-6', 'p-3', 'sm:p-4', 'md:p-5', 'bg-gradient-to-r', 'from-emerald-50', 'to-emerald-50/50', 'border-2', 'border-emerald-200', 'rounded-xl', 'sm:rounded-2xl', 'flex', 'items-start', 'sm:items-center', 'gap-2', 'sm:gap-3', 'md:gap-4', 'animate-reveal', 'shadow-md')}>
                                 <div className={clsx('w-8', 'sm:w-9', 'md:w-10', 'lg:w-12', 'h-8', 'sm:h-9', 'md:h-10', 'lg:h-12', 'rounded-full', 'bg-gradient-to-br', 'from-emerald-500', 'to-emerald-600', 'flex', 'items-center', 'justify-center', 'text-white', 'flex-shrink-0', 'shadow-md')}>
                                    <FiCheckCircle className={clsx('w-4', 'sm:w-5', 'md:w-6', 'h-4', 'sm:h-5', 'md:h-6')} />
                                 </div>
                                 <div>
                                    <p className={clsx('text-xs', 'sm:text-sm', 'md:text-base', 'font-black', 'text-emerald-900', 'uppercase', 'tracking-wide')}>Message Sent! 🎉</p>
                                    <p className={clsx('text-[8px]', 'sm:text-[9px]', 'md:text-xs', 'font-bold', 'text-emerald-700', 'uppercase', 'tracking-wide', 'opacity-70')}>We'll contact you within 24 hours</p>
                                 </div>
                              </div>
                           )}

                           {submitStatus === "error" && (
                              <div className={clsx('mb-4', 'sm:mb-5', 'md:mb-6', 'p-3', 'sm:p-4', 'md:p-5', 'bg-gradient-to-r', 'from-red-50', 'to-red-50/50', 'border-2', 'border-red-200', 'rounded-xl', 'sm:rounded-2xl', 'flex', 'items-start', 'sm:items-center', 'gap-2', 'sm:gap-3', 'md:gap-4', 'animate-reveal', 'shadow-md')}>
                                 <div className={clsx('w-8', 'sm:w-9', 'md:w-10', 'lg:w-12', 'h-8', 'sm:h-9', 'md:h-10', 'lg:h-12', 'rounded-full', 'bg-gradient-to-br', 'from-red-500', 'to-red-600', 'flex', 'items-center', 'justify-center', 'text-white', 'flex-shrink-0', 'shadow-md')}>
                                    <FiAlertCircle className={clsx('w-4', 'sm:w-5', 'md:w-6', 'h-4', 'sm:h-5', 'md:h-6')} />
                                 </div>
                                 <div>
                                    <p className={clsx('text-xs', 'sm:text-sm', 'md:text-base', 'font-black', 'text-red-900', 'uppercase', 'tracking-wide')}>Delivery Failed</p>
                                    <p className={clsx('text-[8px]', 'sm:text-[9px]', 'md:text-xs', 'font-bold', 'text-red-700', 'uppercase', 'tracking-wide', 'opacity-70')}>Please try again later or contact us directly.</p>
                                 </div>
                              </div>
                           )}

                           <form onSubmit={handleSubmit} className={clsx('space-y-3', 'sm:space-y-4', 'md:space-y-5', 'lg:space-y-6', 'relative', 'z-10')}>

                              {/* Form Row 1 */}
                              <div className={clsx('grid', 'grid-cols-1', 'sm:grid-cols-2', 'gap-3', 'sm:gap-4', 'md:gap-5', 'lg:gap-6')}>
                                 {/* Name Field */}
                                 <div className={clsx('space-y-1.5', 'sm:space-y-2')}>
                                    <label className={clsx('text-[8px]', 'sm:text-[9px]', 'md:text-xs', 'lg:text-sm', 'font-black', 'text-slate-700', 'uppercase', 'tracking-wider', 'flex', 'items-center', 'gap-1.5')}>
                                       <span className={clsx('w-1', 'h-1', 'sm:w-1.5', 'sm:h-1.5', 'rounded-full', 'bg-brand-gold')}></span>
                                       Full Name
                                    </label>
                                    <div className={clsx('relative', 'group/input')}>
                                       <div className={clsx('absolute', 'inset-0', 'bg-gradient-to-r', 'from-brand-gold/15', 'to-transparent', 'opacity-0', 'group-focus-within/input:opacity-100', 'transition-opacity', 'duration-300', 'rounded-lg', 'sm:rounded-xl')}></div>
                                       <input
                                          type="text"
                                          name="name"
                                          value={formData.name}
                                          onChange={handleChange}
                                          onFocus={() => setFocusedField('name')}
                                          onBlur={handleBlur}
                                          required
                                          maxLength={50}
                                          className={`relative w-full bg-white border-2 ${errors.name ? 'border-red-400 focus:border-red-500 focus:ring-red-500/10' : 'border-slate-200 focus:border-brand-gold focus:ring-brand-gold/10'} rounded-lg sm:rounded-xl px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-brand-navy outline-none transition-all duration-300 shadow-sm placeholder:text-slate-400`}
                                          placeholder="Your name"
                                       />
                                    </div>
                                    {errors.name && <p className={clsx('text-red-500', 'text-[9px]', 'sm:text-[10px]', 'font-bold', 'mt-1', 'uppercase', 'tracking-wide')}>{errors.name}</p>}
                                 </div>

                                 {/* Email Field */}
                                 <div className={clsx('space-y-1.5', 'sm:space-y-2')}>
                                    <label className={clsx('text-[8px]', 'sm:text-[9px]', 'md:text-xs', 'lg:text-sm', 'font-black', 'text-slate-700', 'uppercase', 'tracking-wider', 'flex', 'items-center', 'gap-1.5')}>
                                       <span className={clsx('w-1', 'h-1', 'sm:w-1.5', 'sm:h-1.5', 'rounded-full', 'bg-brand-gold')}></span>
                                       Email Address
                                    </label>
                                    <div className={clsx('relative', 'group/input')}>
                                       <div className={clsx('absolute', 'inset-0', 'bg-gradient-to-r', 'from-brand-gold/15', 'to-transparent', 'opacity-0', 'group-focus-within/input:opacity-100', 'transition-opacity', 'duration-300', 'rounded-lg', 'sm:rounded-xl')}></div>
                                       <input
                                          type="email"
                                          name="email"
                                          value={formData.email}
                                          onChange={handleChange}
                                          onFocus={() => setFocusedField('email')}
                                          onBlur={handleBlur}
                                          required
                                          maxLength={100}
                                          className={`relative w-full bg-white border-2 ${errors.email ? 'border-red-400 focus:border-red-500 focus:ring-red-500/10' : 'border-slate-200 focus:border-brand-gold focus:ring-brand-gold/10'} rounded-lg sm:rounded-xl px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-brand-navy outline-none transition-all duration-300 shadow-sm placeholder:text-slate-400`}
                                          placeholder="you@company.com"
                                       />
                                    </div>
                                    {errors.email && <p className={clsx('text-red-500', 'text-[9px]', 'sm:text-[10px]', 'font-bold', 'mt-1', 'uppercase', 'tracking-wide')}>{errors.email}</p>}
                                 </div>
                              </div>

                              {/* Form Row 2 */}
                              <div className={clsx('grid', 'grid-cols-1', 'sm:grid-cols-2', 'gap-3', 'sm:gap-4', 'md:gap-5', 'lg:gap-6')}>
                                 {/* Phone Field */}
                                 <div className={clsx('space-y-1.5', 'sm:space-y-2')}>
                                    <label className={clsx('text-[8px]', 'sm:text-[9px]', 'md:text-xs', 'lg:text-sm', 'font-black', 'text-slate-700', 'uppercase', 'tracking-wider', 'flex', 'items-center', 'gap-1.5')}>
                                       <span className={clsx('w-1', 'h-1', 'sm:w-1.5', 'sm:h-1.5', 'rounded-full', 'bg-brand-gold')}></span>
                                       Phone Number
                                    </label>
                                    <div className={clsx('relative', 'group/input')}>
                                       <div className={clsx('absolute', 'inset-0', 'bg-gradient-to-r', 'from-brand-gold/15', 'to-transparent', 'opacity-0', 'group-focus-within/input:opacity-100', 'transition-opacity', 'duration-300', 'rounded-lg', 'sm:rounded-xl')}></div>
                                       <input
                                          type="tel"
                                          name="phone"
                                          value={formData.phone}
                                          onChange={handleChange}
                                          onFocus={() => setFocusedField('phone')}
                                          onBlur={handleBlur}
                                          required
                                          maxLength={20}
                                          className={`relative w-full bg-white border-2 ${errors.phone ? 'border-red-400 focus:border-red-500 focus:ring-red-500/10' : 'border-slate-200 focus:border-brand-gold focus:ring-brand-gold/10'} rounded-lg sm:rounded-xl px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-brand-navy outline-none transition-all duration-300 shadow-sm placeholder:text-slate-400`}
                                          placeholder="+91 7778886559"
                                       />
                                    </div>
                                    {errors.phone && <p className={clsx('text-red-500', 'text-[9px]', 'sm:text-[10px]', 'font-bold', 'mt-1', 'uppercase', 'tracking-wide')}>{errors.phone}</p>}
                                 </div>

                                 {/* Company Field */}
                                 <div className={clsx('space-y-1.5', 'sm:space-y-2')}>
                                    <label className={clsx('text-[8px]', 'sm:text-[9px]', 'md:text-xs', 'lg:text-sm', 'font-black', 'text-slate-700', 'uppercase', 'tracking-wider', 'flex', 'items-center', 'gap-1.5')}>
                                       <span className={clsx('w-1', 'h-1', 'sm:w-1.5', 'sm:h-1.5', 'rounded-full', 'bg-brand-gold')}></span>
                                       Company Name
                                    </label>
                                    <div className={clsx('relative', 'group/input')}>
                                       <div className={clsx('absolute', 'inset-0', 'bg-gradient-to-r', 'from-brand-gold/15', 'to-transparent', 'opacity-0', 'group-focus-within/input:opacity-100', 'transition-opacity', 'duration-300', 'rounded-lg', 'sm:rounded-xl')}></div>
                                       <input
                                          type="text"
                                          name="company"
                                          value={formData.company}
                                          onChange={handleChange}
                                          onFocus={() => setFocusedField('company')}
                                          onBlur={handleBlur}
                                          required
                                          maxLength={100}
                                          className={`relative w-full bg-white border-2 ${errors.company ? 'border-red-400 focus:border-red-500 focus:ring-red-500/10' : 'border-slate-200 focus:border-brand-gold focus:ring-brand-gold/10'} rounded-lg sm:rounded-xl px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-brand-navy outline-none transition-all duration-300 shadow-sm placeholder:text-slate-400`}
                                          placeholder="Your company"
                                       />
                                    </div>
                                    {errors.company && <p className={clsx('text-red-500', 'text-[9px]', 'sm:text-[10px]', 'font-bold', 'mt-1', 'uppercase', 'tracking-wide')}>{errors.company}</p>}
                                 </div>
                              </div>

                              {/* Message Textarea */}
                              <div className={clsx('space-y-1.5', 'sm:space-y-2', 'pt-1', 'sm:pt-2', 'md:pt-3')}>
                                 <label className={clsx('text-[8px]', 'sm:text-[9px]', 'md:text-xs', 'lg:text-sm', 'font-black', 'text-slate-700', 'uppercase', 'tracking-wider', 'flex', 'items-center', 'gap-1.5')}>
                                    <span className={clsx('w-1', 'h-1', 'sm:w-1.5', 'sm:h-1.5', 'rounded-full', 'bg-brand-gold')}></span>
                                    Your Message
                                 </label>
                                 <div className={clsx('relative', 'group/input')}>
                                    <div className={clsx('absolute', 'inset-0', 'bg-gradient-to-r', 'from-brand-gold/15', 'to-transparent', 'opacity-0', 'group-focus-within/input:opacity-100', 'transition-opacity', 'duration-300', 'rounded-lg', 'sm:rounded-xl')}></div>
                                    <textarea
                                       name="message"
                                       value={formData.message}
                                       onChange={handleChange}
                                       onFocus={() => setFocusedField('message')}
                                       onBlur={handleBlur}
                                       required
                                       maxLength={1000}
                                       rows="5"
                                       className={`relative w-full bg-white border-2 ${errors.message ? 'border-red-400 focus:border-red-500 focus:ring-red-500/10' : 'border-slate-200 focus:border-brand-gold focus:ring-brand-gold/10'} rounded-lg sm:rounded-xl px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-brand-navy outline-none transition-all duration-300 shadow-sm resize-none placeholder:text-slate-400`}
                                       placeholder="Tell us about your requirements..."
                                    ></textarea>
                                 </div>
                                 {errors.message && <p className={clsx('text-red-500', 'text-[9px]', 'sm:text-[10px]', 'font-bold', 'mt-1', 'uppercase', 'tracking-wide')}>{errors.message}</p>}
                              </div>

                              {/* Submit Button */}
                              <button
                                 type="submit"
                                 disabled={isSubmitting}
                                 className={clsx('group/btn', 'relative', 'w-full', 'py-3', 'sm:py-4', 'md:py-5', 'lg:py-6', 'mt-3', 'sm:mt-4', 'md:mt-5', 'lg:mt-7', 'bg-gradient-to-r', 'from-brand-navy', 'to-brand-navy/90', 'hover:from-brand-gold', 'hover:to-brand-gold/90', 'text-white', 'hover:text-brand-navy', 'rounded-lg', 'sm:rounded-xl', 'md:rounded-2xl', 'font-black', 'uppercase', 'tracking-wider', 'text-[10px]', 'sm:text-xs', 'md:text-sm', 'lg:text-base', 'shadow-lg', 'hover:shadow-2xl', 'transition-all', 'duration-700', 'active:scale-95', 'overflow-hidden', 'border-2', 'border-transparent', 'hover:border-brand-gold/30', 'disabled:opacity-50', 'disabled:cursor-not-allowed', 'flex', 'items-center', 'justify-center', 'gap-2', 'sm:gap-3')}
                              >
                                 {isSubmitting ? (
                                    <>
                                       <span className={clsx('w-3', 'sm:w-4', 'h-3', 'sm:h-4', 'border-2', 'border-current', 'border-t-transparent', 'rounded-full', 'animate-spin')}></span>
                                       <span className={clsx('hidden', 'sm:inline')}>Sending...</span>
                                    </>
                                 ) : (
                                    <>
                                       <span>Send Message</span>
                                       <FiArrowRight className={clsx('w-4', 'sm:w-5', 'md:w-6', 'group-hover/btn:translate-x-1', 'transition-transform', 'duration-300')} />
                                    </>
                                 )}
                              </button>

                           </form>
                        </div>
                     </div>
                  </div>

               </div>

               {/* GLOBAL PRESENCE SECTION */}
               <div className={clsx('mt-10', 'sm:mt-14', 'md:mt-18', 'lg:mt-24', 'xl:mt-32', 'pt-10', 'sm:pt-14', 'md:pt-18', 'lg:pt-24', 'xl:pt-28', 'border-t-2', 'border-slate-200')}>
                  <div className={clsx('grid', 'grid-cols-1', 'lg:grid-cols-2', 'gap-6', 'sm:gap-8', 'md:gap-10', 'lg:gap-12', 'xl:gap-14', 'items-center', 'px-4', 'sm:px-0')}>

                     {/* Left Content */}
                     <div className={clsx('space-y-4', 'sm:space-y-5', 'md:space-y-6', 'lg:space-y-8', 'animate-reveal')}>
                        <div className={clsx('flex', 'items-center', 'gap-2', 'sm:gap-3')}>
                           <div className={clsx('h-1', 'w-6', 'sm:w-8', 'md:w-10', 'lg:w-12', 'bg-gradient-to-r', 'from-brand-gold', 'to-brand-gold/50', 'rounded-full')}></div>
                           <span className={clsx('text-[8px]', 'sm:text-[9px]', 'md:text-xs', 'lg:text-sm', 'font-black', 'text-brand-gold', 'uppercase', 'tracking-[0.2em]', 'sm:tracking-[0.25em]', 'md:tracking-[0.3em]')}>Global Presence</span>
                        </div>

                        <h3 className={clsx('text-2xl', 'sm:text-3xl', 'md:text-4xl', 'lg:text-5xl', 'xl:text-6xl', '2xl:text-7xl', 'font-black', 'text-brand-navy', 'uppercase', 'tracking-tight', 'leading-[0.95]', 'sm:leading-[0.9]')}>
                           OUR <br />
                           <span className="text-gradient">HEADQUARTERS.</span>
                        </h3>

                        <p className={clsx('text-xs', 'sm:text-sm', 'md:text-base', 'lg:text-lg', 'text-slate-600', 'font-semibold', 'uppercase', 'tracking-wide', 'leading-relaxed', 'max-w-lg')}>
                           Located in India's premier agricultural export hub, our office ensures direct farm checks and seamless port operations for your business.
                        </p>

                        <div className={clsx('group', 'relative', 'mt-4', 'sm:mt-6', 'md:mt-8')}>
                           <div className={clsx('absolute', '-inset-1', 'sm:-inset-1.5', 'md:-inset-2', 'bg-gradient-to-r', 'from-brand-gold/20', 'to-brand-navy/20', 'rounded-xl', 'sm:rounded-2xl', 'md:rounded-3xl', 'blur-lg', 'opacity-0', 'group-hover:opacity-100', 'transition-opacity', 'duration-500')}></div>

                           <div className={clsx('relative', 'p-4', 'sm:p-5', 'md:p-6', 'lg:p-8', 'rounded-lg', 'sm:rounded-2xl', 'md:rounded-3xl', 'bg-gradient-to-br', 'from-slate-50', 'to-white', 'border-2', 'border-slate-200', 'group-hover:border-brand-gold/50', 'transition-all', 'duration-500', 'flex', 'items-start', 'gap-3', 'sm:gap-4', 'md:gap-5', 'shadow-md', 'group-hover:shadow-lg')}>
                              <div className={clsx('w-10', 'sm:w-12', 'md:w-14', 'lg:w-16', 'h-10', 'sm:h-12', 'md:h-14', 'lg:h-16', 'bg-gradient-to-br', 'from-brand-gold', 'to-brand-gold/80', 'rounded-lg', 'sm:rounded-xl', 'md:rounded-2xl', 'flex', 'items-center', 'justify-center', 'text-brand-navy', 'font-bold', 'shadow-md', 'flex-shrink-0')}>
                                 <FiMapPin className={clsx('w-5', 'sm:w-6', 'md:w-7', 'lg:w-8', 'h-5', 'sm:h-6', 'md:h-7', 'lg:h-8')} />
                              </div>
                              <div>
                                 <h4 className={clsx('text-xs', 'sm:text-sm', 'md:text-base', 'lg:text-lg', 'font-black', 'text-brand-navy', 'uppercase', 'tracking-wider', 'mb-1', 'sm:mb-1.5')}>Primary Headquarters</h4>
                                 <p className={clsx('text-[8px]', 'sm:text-[9px]', 'md:text-xs', 'lg:text-sm', 'font-semibold', 'text-slate-600', 'uppercase', 'tracking-wide', 'leading-relaxed')}>
                                    PLOT NO 57, GROUND FLOOR R.S. NO 21 MAIN ROAD, <br />
                                    LAKHABAVAL JAMNAGAR, GUJRAT 361006
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* Right - Map */}
                     <div className={clsx('relative', 'animate-reveal', 'delay-300', 'opacity-0')}>
                        <div className={clsx('absolute', '-inset-4', 'sm:-inset-6', 'md:-inset-8', 'bg-gradient-to-r', 'from-brand-gold/25', 'via-brand-navy/20', 'to-brand-gold/25', 'rounded-2xl', 'sm:rounded-3xl', 'md:rounded-4xl', 'blur-2xl', 'opacity-0', 'hover:opacity-100', 'transition-opacity', 'duration-500')}></div>
                        <div className={clsx('relative', 'p-1', 'sm:p-2', 'md:p-3', 'rounded-lg', 'sm:rounded-2xl', 'md:rounded-3xl', 'bg-white', 'shadow-2xl', 'overflow-hidden', 'aspect-video', 'md:aspect-square', 'border-2', 'border-slate-200', 'hover:border-brand-gold/50', 'transition-all', 'duration-500')}>
                           <iframe
                              src="https://maps.google.com/maps?q=PLOT+NO+57,+GROUND+FLOOR+R.S.+NO+21+MAIN+ROAD+ROAD,+LAKHABAVAL+JAMNAGAR,+GUJRAT+361006&t=&z=14&ie=UTF8&iwloc=&output=embed"
                              className={clsx('w-full', 'h-full', 'rounded-lg', 'sm:rounded-2xl', 'md:rounded-2xl')}
                              loading="lazy"
                           ></iframe>
                        </div>
                     </div>
                  </div>
               </div>

            </Container>
         </div>
      </div>
   );
}
