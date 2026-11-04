import React from 'react';
import { STORE_INFO, LIVE_RATES } from '../data/storeInfo';

export const Footer = ({ lang }) => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-16 px-6 sm:px-8 text-zinc-500 text-xs">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Split */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-zinc-900">
          <div>
            <span className="font-serif text-lg tracking-[0.2em] uppercase text-zinc-200 block">
              DHAMANKAR
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-500">
              Silver & Sons · Warje, Pune
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-8 text-[11px] tracking-wider uppercase text-zinc-400">
            <a href="#collections" className="hover:text-zinc-200 transition-colors">Collections</a>
            <a href="#rates" className="hover:text-zinc-200 transition-colors">Live Rates</a>
            <a href="#craft" className="hover:text-zinc-200 transition-colors">Silversmithing</a>
            <a href="#hallmark" className="hover:text-zinc-200 transition-colors">Hallmark 925</a>
            <a href="#boutique" className="hover:text-zinc-200 transition-colors">Boutique</a>
          </div>
        </div>

        {/* Bottom Details */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] font-light text-zinc-500">
          <p>
            {STORE_INFO.address.full} · Tel: <a href={`tel:${STORE_INFO.phone}`} className="text-zinc-400 hover:text-white">{STORE_INFO.phone}</a>
          </p>

          <p>
            © {new Date().getFullYear()} Dhamankar Silver & Sons. Pure 92.5 Hallmark Guarantee.
          </p>
        </div>

      </div>
    </footer>
  );
};
