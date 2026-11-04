import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const TrustHallmark = ({ lang }) => {
  return (
    <section id="hallmark" className="py-20 md:py-28 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-[10px] tracking-[0.25em] uppercase text-zinc-500 font-medium">
            {lang === 'mr' ? 'प्रमाणित शुद्धता' : 'Certified Integrity'}
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-zinc-100 tracking-tight">
            {lang === 'mr' ? 'BIS ९२.५ हॉलमार्क हमी' : 'The BIS 925 Hallmark Standard'}
          </h2>

          <p className="text-xs sm:text-sm text-zinc-400 font-light">
            Every silver piece at Dhamankar Silver & Sons bears the official Bureau of Indian Standards laser hallmark.
          </p>
        </div>

        {/* 3 Hallmark Markers Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 rounded-2xl hairline-border bg-zinc-900/20 text-center space-y-2">
            <span className="font-serif text-2xl font-light text-zinc-200 block">▲ BIS</span>
            <h3 className="text-xs uppercase tracking-wider text-zinc-300 font-medium">Official BIS Triangle</h3>
            <p className="text-[11px] text-zinc-500 font-light">
              Certifies compliance with Indian government precious metal standards.
            </p>
          </div>

          <div className="p-6 rounded-2xl hairline-border bg-zinc-900/20 text-center space-y-2">
            <span className="font-serif text-2xl font-light text-zinc-200 block">925 / 999</span>
            <h3 className="text-xs uppercase tracking-wider text-zinc-300 font-medium">Purity Fineness Stamp</h3>
            <p className="text-[11px] text-zinc-500 font-light">
              Guarantees 92.5% pure silver alloy for silverware, or 99.9% for coins.
            </p>
          </div>

          <div className="p-6 rounded-2xl hairline-border bg-zinc-900/20 text-center space-y-2">
            <span className="font-serif text-2xl font-light text-zinc-200 block">AHC · DSS</span>
            <h3 className="text-xs uppercase tracking-wider text-zinc-300 font-medium">Assayer & Jeweller Code</h3>
            <p className="text-[11px] text-zinc-500 font-light">
              Unique laser mark of the testing laboratory and Dhamankar silversmith identifier.
            </p>
          </div>
        </div>

        {/* Minimal Silver Care Advice */}
        <div className="p-8 rounded-2xl hairline-border bg-zinc-900/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif text-lg text-zinc-200">
              Heirloom Silver Care & Free Showroom Buffing
            </h4>
            <p className="text-xs text-zinc-400 font-light">
              Silver naturally oxidizes when exposed to air. Store in velvet pouches, and bring your pieces back to our Warje store for complimentary ultrasonic cleaning anytime.
            </p>
          </div>

          <span className="text-[10px] tracking-widest uppercase font-mono text-zinc-400 px-4 py-2 rounded-full border border-zinc-800 whitespace-nowrap">
            Lifetime Polish Support
          </span>
        </div>

      </div>
    </section>
  );
};
