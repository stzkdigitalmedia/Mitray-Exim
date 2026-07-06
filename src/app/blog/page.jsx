"use client";

import { BLOGS } from "@/data/blogs";
import { BlogCard } from "@/components/blog/BlogCard";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { FiArrowRight, FiSearch, FiFilter, FiX, FiChevronDown } from "react-icons/fi";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import clsx from "clsx";

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  const featuredPost = BLOGS[0];
  const remainingPosts = BLOGS.slice(1);

  const categories = ["All", ...new Set(BLOGS.map(blog => blog.category))];

  const filteredPosts = remainingPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-white">
      {/* HEAD */}
      <Head>
        <title>Technical Manifest Library – Mitray Exim</title>
        <meta name="description" content="Access technical manifestos, market insights, and export logistics for the agricultural industry." />
        <meta property="og:title" content="Technical Manifest Library – Mitray Exim" />
        <meta property="og:description" content="Access technical manifestos, market insights, and export logistics for the agricultural industry." />
      </Head>

      {/* HERO SECTION */}
      <PageHero 
        badge="MARKET INTELLIGENCE HUB"
        title="Institutional. Insights."
        description="Access technical manifestos and real-time market telemetry. Global trade analysis for the agricultural elite."
        backgroundImage="https://res.cloudinary.com/dtkdcrra2/image/upload/f_auto,q_auto,w_800,c_fit/v1783333596/blogs_iaun55.png"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Intelligence Hub' }
        ]}
      />

      <div className={clsx('relative', 'z-10', 'pt-6', 'sm:pt-10', 'md:pt-14', 'lg:pt-18', 'xl:pt-24', 'pb-8', 'sm:pb-12', 'md:pb-16', 'lg:pb-20', 'xl:pb-28', 'bg-[#F9FAFB]')}>
        {/* Decorative Elements */}
        <div className={clsx('fixed', 'top-0', 'left-0', 'w-96', 'h-96', 'bg-brand-gold/3', 'blur-3xl', '-translate-x-1/2', '-translate-y-1/2', 'pointer-events-none')}></div>
        <div className={clsx('fixed', 'bottom-1/3', 'right-0', 'w-96', 'h-96', 'bg-brand-navy/3', 'blur-3xl', 'translate-x-1/2', 'pointer-events-none')}></div>

        <Container>
          
          {/* SECTION HEADER WITH SEARCH */}
          <div className={clsx('flex', 'flex-col', 'gap-4', 'sm:gap-6', 'md:gap-8', 'mb-8', 'sm:mb-12', 'md:mb-16', 'lg:mb-20', 'px-4', 'sm:px-0')}>
             <div className={clsx('space-y-3', 'sm:space-y-4', 'md:space-y-5', 'lg:space-y-6')}>
                <div className={clsx('flex', 'items-center', 'gap-2', 'sm:gap-3')}>
                   <div className={clsx('h-1', 'w-6', 'sm:w-8', 'md:w-10', 'lg:w-12', 'bg-gradient-to-r', 'from-brand-gold', 'to-brand-gold/50')}></div>
                   <span className={clsx('text-[8px]', 'sm:text-[9px]', 'md:text-xs', 'lg:text-sm', 'font-black', 'text-brand-gold', 'uppercase', 'tracking-[0.2em]', 'sm:tracking-[0.25em]', 'md:tracking-[0.3em]')}>Protocol Archives</span>
                </div>
                <h2 className={clsx('text-2xl', 'sm:text-3xl', 'md:text-5xl', 'lg:text-6xl', 'xl:text-7xl', '2xl:text-8xl', 'font-black', 'text-brand-navy', 'tracking-tighter', 'uppercase', 'leading-[0.95]', 'sm:leading-[0.9]')}>
                   TECHNICAL <br className={clsx('hidden', 'sm:block')} />
                   <span className="text-gradient">PUBLICATIONS.</span>
                </h2>
             </div>

             {/* SEARCH & FILTER */}
             <div className={clsx('flex', 'flex-col', 'sm:flex-row', 'gap-3', 'sm:gap-4', 'md:gap-6')}>
               {/* Search Bar */}
               <div className={clsx('flex-1', 'relative', 'group')}>
                  <FiSearch className={clsx('absolute', 'left-3', 'sm:left-4', 'top-1/2', '-translate-y-1/2', 'text-slate-400', 'group-focus-within:text-brand-gold', 'transition-colors', 'w-4', 'sm:w-5', 'h-4', 'sm:h-5')} />
                  <input 
                    type="text" 
                    placeholder="Search articles..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={clsx('w-full', 'pl-10', 'sm:pl-12', 'pr-4', 'sm:pr-6', 'py-3', 'sm:py-4', 'md:py-5', 'bg-white', 'border-2', 'border-slate-200', 'hover:border-brand-gold', 'focus:border-brand-gold', 'focus:ring-4', 'focus:ring-brand-gold/10', 'font-semibold', 'text-xs', 'sm:text-sm', 'md:text-base', 'uppercase', 'tracking-wide', 'transition-all', 'shadow-sm', 'text-brand-navy', 'placeholder:text-slate-400', 'outline-none')}
                  />
               </div>

               {/* Category Filter Dropdown */}
               <div className="relative">
                  <button
                    onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                    className={clsx('w-full', 'sm:w-auto', 'flex', 'items-center', 'justify-between', 'gap-2', 'sm:gap-3', 'px-4', 'sm:px-6', 'py-3', 'sm:py-4', 'md:py-5', 'bg-white', 'border-2', 'border-slate-200', 'hover:border-brand-gold', 'transition-all', 'text-xs', 'sm:text-sm', 'md:text-base', 'font-black', 'text-brand-navy', 'uppercase', 'tracking-wide', 'shadow-sm')}
                  >
                    <FiFilter className={clsx('w-4', 'sm:w-5', 'h-4', 'sm:h-5')} />
                    <span className={clsx('hidden', 'sm:inline')}>{selectedCategory}</span>
                    <span className="sm:hidden">{selectedCategory === "All" ? "All" : selectedCategory.substring(0, 3)}</span>
                    <FiChevronDown className={`w-4 h-4 transition-transform duration-300 ${showCategoryDropdown ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {showCategoryDropdown && (
                    <div className={clsx('absolute', 'top-full', 'mt-2', 'right-0', 'sm:right-auto', 'left-0', 'sm:left-0', 'w-full', 'sm:w-56', 'bg-white', 'border-2', 'border-slate-200', 'shadow-xl', 'z-50', 'overflow-hidden')}>
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => {
                            setSelectedCategory(category);
                            setShowCategoryDropdown(false);
                          }}
                          className={`w-full text-left px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-black uppercase tracking-wide transition-all border-b border-slate-100 last:border-b-0 ${
                            selectedCategory === category
                              ? 'bg-brand-gold text-brand-navy'
                              : 'hover:bg-slate-50 text-brand-navy'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  )}
               </div>
             </div>
          </div>

          <div className={clsx('space-y-8', 'sm:space-y-12', 'md:space-y-16', 'lg:space-y-20')}>

             {/* FEATURED POST */}
             {featuredPost && (
                <div className={clsx('animate-reveal', 'px-4', 'sm:px-0')}>
                   <div className={clsx('mb-4', 'sm:mb-6', 'md:mb-8', 'flex', 'items-center', 'gap-3', 'sm:gap-4')}>
                      <span className={clsx('text-[8px]', 'sm:text-[9px]', 'md:text-xs', 'lg:text-sm', 'font-black', 'text-brand-gold', 'uppercase', 'tracking-[0.2em]', 'sm:tracking-[0.25em]')}>Featured Analysis</span>
                      <div className={clsx('h-px', 'flex-1', 'bg-gradient-to-r', 'from-brand-gold', 'to-transparent')}></div>
                   </div>
                   <BlogCard post={featuredPost} featured={true} />
                </div>
             )}

             {/* POSTS GRID */}
             {filteredPosts.length > 0 ? (
               <div className={clsx('px-4', 'sm:px-0')}>
                  <div className={clsx('grid', 'grid-cols-1', 'sm:grid-cols-2', 'gap-4', 'sm:gap-6', 'md:gap-8', 'lg:gap-10')}>
                     {filteredPosts.map((post, index) => (
                       <div 
                         key={post.slug}
                         className={clsx('animate-reveal', 'opacity-0')}
                         style={{ animationDelay: `${index * 150}ms` }}
                       >
                         <BlogCard post={post} />
                       </div>
                     ))}
                  </div>
               </div>
             ) : (
               <div className={clsx('px-4', 'sm:px-0')}>
                  <div className={clsx('p-6', 'sm:p-8', 'md:p-12', 'lg:p-16', 'text-center', 'bg-gradient-to-br', 'from-slate-50', 'to-white', 'border-2', 'border-dashed', 'border-slate-300')}>
                     <h3 className={clsx('text-lg', 'sm:text-2xl', 'md:text-3xl', 'font-black', 'text-brand-navy', 'uppercase', 'tracking-tight', 'mb-2', 'sm:mb-3', 'md:mb-4')}>
                        No Articles Found
                     </h3>
                     <p className={clsx('text-xs', 'sm:text-sm', 'md:text-base', 'text-slate-500', 'font-semibold', 'uppercase', 'tracking-wide', 'mb-4', 'sm:mb-6', 'md:mb-8')}>
                        Try adjusting your search or filters
                     </p>
                     <button
                       onClick={() => {
                         setSearchTerm("");
                         setSelectedCategory("All");
                       }}
                       className={clsx('inline-flex', 'items-center', 'gap-2', 'px-4', 'sm:px-6', 'md:px-8', 'py-2.5', 'sm:py-3', 'md:py-4', 'bg-brand-gold', 'hover:bg-brand-gold/90', 'text-brand-navy', 'text-xs', 'sm:text-sm', 'md:text-base', 'font-black', 'uppercase', 'tracking-wider', 'transition-all', 'shadow-md')}
                     >
                        Reset Filters <FiX className={clsx('w-4', 'h-4')} />
                     </button>
                  </div>
               </div>
             )}

             {/* NO BLOGS STATE */}
             {BLOGS.length === 0 && (
               <div className={clsx('px-4', 'sm:px-0')}>
                  <div className={clsx('p-8', 'sm:p-10', 'md:p-16', 'text-center', 'bg-gradient-to-br', 'from-slate-50', 'to-white', 'border-2', 'border-slate-200')}>
                     <h3 className={clsx('text-xl', 'sm:text-2xl', 'md:text-3xl', 'lg:text-4xl', 'font-black', 'text-brand-navy', 'uppercase', 'tracking-tight', 'mb-3', 'sm:mb-4', 'md:mb-6')}>
                        No Manifests Available
                     </h3>
                     <p className={clsx('text-xs', 'sm:text-sm', 'md:text-base', 'text-slate-600', 'font-semibold', 'uppercase', 'tracking-wide')}>
                        Awaiting data synchronization...
                     </p>
                  </div>
               </div>
             )}

          </div>

          {/* CTA SECTION */}
          <div className={clsx('mt-12', 'sm:mt-16', 'md:mt-20', 'lg:mt-24', 'xl:mt-28', 'px-4', 'sm:px-0')}>
             <div className={clsx('relative', 'overflow-hidden', 'bg-gradient-to-r', 'from-brand-navy', 'to-brand-navy/90', 'p-6', 'sm:p-8', 'md:p-10', 'lg:p-12', 'xl:p-16', 'border-2', 'border-brand-gold/20')}>
                <div className={clsx('absolute', 'top-0', 'right-0', 'w-32', 'sm:w-40', 'md:w-56', 'lg:w-72', 'h-32', 'sm:h-40', 'md:h-56', 'lg:h-72', 'bg-gradient-to-br', 'from-brand-gold/15', 'to-transparent', 'blur-3xl', '-translate-y-1/3', 'translate-x-1/3')}></div>
                
                <div className={clsx('relative', 'z-10', 'max-w-2xl')}>
                   <h3 className={clsx('text-lg', 'sm:text-2xl', 'md:text-3xl', 'lg:text-4xl', 'font-black', 'text-white', 'uppercase', 'tracking-tight', 'mb-2', 'sm:mb-3', 'md:mb-4')}>
                      Subscribe to Our Intelligence Feed
                   </h3>
                   <p className={clsx('text-xs', 'sm:text-sm', 'md:text-base', 'text-white/80', 'font-semibold', 'uppercase', 'tracking-wide', 'mb-5', 'sm:mb-6', 'md:mb-8')}>
                      Get the latest market insights and export logistics directly in your inbox
                   </p>
                   
                   <div className={clsx('flex', 'flex-col', 'sm:flex-row', 'gap-3', 'sm:gap-4')}>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        className={clsx('flex-1', 'px-4', 'sm:px-6', 'py-3', 'sm:py-4', 'bg-white', 'border-2', 'border-transparent', 'text-xs', 'sm:text-sm', 'md:text-base', 'font-semibold', 'text-brand-navy', 'outline-none', 'focus:border-brand-gold', 'transition-all', 'placeholder:text-slate-400')}
                      />
                      <button className={clsx('flex', 'items-center', 'justify-center', 'gap-2', 'px-4', 'sm:px-8', 'py-3', 'sm:py-4', 'bg-brand-gold', 'hover:bg-brand-gold/90', 'text-brand-navy', 'text-xs', 'sm:text-sm', 'md:text-base', 'font-black', 'uppercase', 'tracking-wider', 'transition-all', 'shadow-lg', 'whitespace-nowrap')}>
                         Subscribe <FiArrowRight className={clsx('w-4', 'h-4')} />
                      </button>
                   </div>
                </div>
             </div>
          </div>

        </Container>
      </div>
    </div>
  );
}
