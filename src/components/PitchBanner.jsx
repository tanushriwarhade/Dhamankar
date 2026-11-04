import React, { useState } from 'react';
import { Sparkles, ChevronUp, ChevronDown, X } from 'lucide-react';

export const PitchBanner = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-40">
      {isOpen ? (
        <div className="bg-zinc-950/95 border border-zinc-800 text-zinc-300 text-xs p-5 rounded-2xl shadow-2xl backdrop-blur-xl max-w-sm space-y-3 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
            <span className="font-serif tracking-widest text-zinc-100 uppercase text-[10px] font-semibold">
              Client Presentation Notes
            </span>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-zinc-500 hover:text-zinc-300"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-[11px] text-zinc-400 leading-relaxed">
            Designed for <strong>Dhamankar Silver & Sons</strong> (Warje, Pune) to elevate their brand above generic jewellery retail with an ultra-minimalist luxury aesthetic.
          </p>
          <div className="space-y-1.5 text-[11px] text-zinc-300">
            <div className="flex items-center gap-1.5">
              <span className="text-zinc-400">•</span>
              <span>Live Pune Silver Rate & Transparent Estimator</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-zinc-400">•</span>
              <span>100% BIS 925 Hallmarked Curated Collection</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-zinc-400">•</span>
              <span>Direct WhatsApp & Call to 088887 24444</span>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-zinc-900/90 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 text-[10px] tracking-wider uppercase font-medium px-3 py-1.5 rounded-full border border-zinc-800 shadow-xl backdrop-blur-md flex items-center gap-1.5 transition-all"
        >
          <Sparkles className="w-3 h-3 text-zinc-300" />
          <span>Pitch Guide</span>
        </button>
      )}
    </div>
  );
};
