import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { STORE_INFO, LIVE_RATES } from '../data/storeInfo';

export const Hero = ({ lang, onOpenInquiry }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Main Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Editorial Typography (7 cols) */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Small Refined Kicker */}
            <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
              <span>{lang === 'mr' ? 'पुण्यातील शुद्ध चांदीचे दालन' : 'Silversmiths of Warje, Pune'}</span>
            </div>

            {/* Editorial Title */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-zinc-100 tracking-tight leading-[1.08]">
              {lang === 'mr' ? (
                <>
                  शुद्ध चांदीची <br />
                  <span className="italic font-light text-zinc-400">शाश्वत परंपरा.</span>
                </>
              ) : (
                <>
                  The Art of <br />
                  <span className="italic font-light text-zinc-300">Pure Silver.</span>
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              {lang === 'mr' ? (
                'सुबक देवपूजा मूर्ती, शाही चांदीचे भोजन थाळी संच, पारंपरिक अलंकार आणि मंदिरांसाठी कस्टम चांदीचे काम – १००% बीआयएस हॉलमार्क शुद्धतेसह.'
              ) : (
                'Heirloom puja silverware, royal dining thalis, and bespoke bridal ornaments. Handcrafted with generational silversmith devotion at transparent Pune market rates.'
              )}
            </p>

            {/* Refined Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#collections"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-zinc-100 hover:bg-white text-zinc-950 text-xs tracking-[0.16em] uppercase font-semibold transition-all hover:shadow-lg"
              >
                {lang === 'mr' ? 'संग्रह पहा' : 'Explore Collections'}
              </a>

              <a
                href="#rates"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-zinc-800 hover:border-zinc-500 text-zinc-300 hover:text-white text-xs tracking-[0.16em] uppercase font-medium transition-all flex items-center justify-center gap-2 group"
              >
                <span>{lang === 'mr' ? 'आजचे दर' : 'Silver Rate Calculator'}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-zinc-500" />
              </a>
            </div>

            {/* Subtle Trust Indicators */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-[11px] text-zinc-500 tracking-wider">
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
                <span>BIS 925 Hallmark</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
                <span>In-House Silversmiths</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
                <span>Zero Hidden Fees</span>
              </span>
            </div>

          </div>

          {/* Right: Editorial Visual Composition (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Minimal Framed Showcase Card */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden hairline-border bg-zinc-900 group">
                <img
                  src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=85"
                  alt="Dhamankar Pure Silver Craftsmanship"
                  className="w-full h-full object-cover grayscale contrast-[1.05] brightness-90 group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>

                {/* Quiet Floating Bottom Caption */}
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-400 block">Signature Piece</span>
                    <h3 className="font-serif text-lg font-normal text-zinc-100">
                      Handcrafted Silver Anklet & Idol Series
                    </h3>
                  </div>
                  <span className="text-[11px] tracking-widest text-zinc-400 font-mono">
                    92.5 STERLING
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Minimal 4-Column Stat Strip */}
        <div className="mt-20 pt-10 border-t border-zinc-900 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          <div className="space-y-1">
            <span className="font-serif text-xl sm:text-2xl font-light text-zinc-100 block">100%</span>
            <span className="text-[11px] tracking-wider uppercase text-zinc-500">BIS Hallmarked Purity</span>
          </div>

          <div className="space-y-1">
            <span className="font-serif text-xl sm:text-2xl font-light text-zinc-100 block">35+ Years</span>
            <span className="text-[11px] tracking-wider uppercase text-zinc-500">Silversmith Artistry</span>
          </div>

          <div className="space-y-1">
            <span className="font-serif text-xl sm:text-2xl font-light text-zinc-100 block">₹{LIVE_RATES.silver999.perGram}/g</span>
            <span className="text-[11px] tracking-wider uppercase text-zinc-500">Live Pune Market Rate</span>
          </div>

          <div className="space-y-1">
            <span className="font-serif text-xl sm:text-2xl font-light text-zinc-100 block">Warje, NDA Rd</span>
            <span className="text-[11px] tracking-wider uppercase text-zinc-500">Boutique & Workshop</span>
          </div>
        </div>

      </div>
    </section>
  );
};
