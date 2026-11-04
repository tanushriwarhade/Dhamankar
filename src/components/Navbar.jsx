import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Globe, MessageCircle } from 'lucide-react';
import { STORE_INFO, LIVE_RATES } from '../data/storeInfo';

export const Navbar = ({ lang, setLang, onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Subtle Ticker Bar */}
      <div className="bg-zinc-950 border-b border-zinc-900 text-[11px] py-1.5 px-4 text-zinc-400">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-zinc-500 uppercase tracking-widest text-[9px]">Market Rate</span>
            <span className="text-zinc-300 font-medium tracking-wide">
              99.9 Pure: <strong className="text-zinc-100 font-normal">₹{LIVE_RATES.silver999.perGram}/g</strong>
            </span>
            <span className="text-zinc-700">·</span>
            <span className="text-zinc-300 font-medium tracking-wide hidden sm:inline">
              92.5 Sterling: <strong className="text-zinc-100 font-normal">₹{LIVE_RATES.silver925.perGram}/g</strong>
            </span>
          </div>

          <div className="flex items-center gap-4 text-zinc-400">
            <span className="hidden md:inline text-[10px] tracking-wider uppercase text-zinc-500">
              NDA Road, Warje, Pune
            </span>
            <span className="hidden md:inline text-zinc-700">·</span>
            <span className="text-[10px] tracking-wider text-zinc-400">
              Open Daily till 9:30 PM
            </span>
            <button
              onClick={() => setLang(lang === 'en' ? 'mr' : 'en')}
              className="text-[10px] tracking-widest uppercase text-zinc-300 hover:text-white px-2 py-0.5 rounded border border-zinc-800 transition-colors"
            >
              {lang === 'en' ? 'मराठी' : 'EN'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-900 py-3.5 shadow-sm' 
          : 'bg-zinc-950/70 backdrop-blur-sm border-b border-zinc-900/40 py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          
          {/* Brand Logo - Minimal luxury wordmark */}
          <a href="#" className="flex flex-col group">
            <span className="font-serif text-lg sm:text-xl tracking-[0.22em] text-zinc-100 uppercase group-hover:text-white transition-colors">
              DHAMANKAR
            </span>
            <span className="text-[9px] tracking-[0.3em] uppercase text-zinc-500 group-hover:text-zinc-400 transition-colors">
              Silver & Sons · Silversmiths
            </span>
          </a>

          {/* Editorial Nav Links */}
          <div className="hidden lg:flex items-center gap-8 text-[12px] tracking-[0.14em] uppercase text-zinc-400">
            <a href="#collections" className="hover:text-zinc-100 transition-colors">
              {lang === 'mr' ? 'संग्रह' : 'Collections'}
            </a>
            <a href="#rates" className="hover:text-zinc-100 transition-colors">
              {lang === 'mr' ? 'लाईव्ह दर' : 'Silver Rates'}
            </a>
            <a href="#craft" className="hover:text-zinc-100 transition-colors">
              {lang === 'mr' ? 'कारागिरी' : 'Silversmithing'}
            </a>
            <a href="#hallmark" className="hover:text-zinc-100 transition-colors">
              {lang === 'mr' ? 'हॉलमार्क' : 'Hallmark 925'}
            </a>
            <a href="#boutique" className="hover:text-zinc-100 transition-colors">
              {lang === 'mr' ? 'दालन' : 'Boutique'}
            </a>
          </div>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${STORE_INFO.phone}`}
              className="text-[11px] tracking-wider text-zinc-400 hover:text-zinc-200 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-zinc-400" />
              <span>{STORE_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenInquiry}
              className="text-[11px] tracking-[0.15em] uppercase px-4 py-2 rounded-full border border-zinc-700 text-zinc-200 hover:text-white hover:border-zinc-400 transition-all"
            >
              {lang === 'mr' ? 'चौकशी' : 'Inquire'}
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onOpenInquiry}
              className="text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full border border-zinc-800 text-zinc-300"
            >
              Inquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-zinc-400 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-zinc-950 border-b border-zinc-900 px-6 py-6 space-y-4">
            <div className="flex flex-col space-y-3 text-xs tracking-widest uppercase text-zinc-300">
              <a href="#collections" onClick={() => setMobileMenuOpen(false)}>
                {lang === 'mr' ? 'चांदीचे संग्रह' : 'Collections'}
              </a>
              <a href="#rates" onClick={() => setMobileMenuOpen(false)}>
                {lang === 'mr' ? 'आजचे दर कॅल्क्युलेटर' : 'Live Pune Silver Rate'}
              </a>
              <a href="#craft" onClick={() => setMobileMenuOpen(false)}>
                {lang === 'mr' ? 'कस्टम कारागिरी' : 'Custom Silversmithing'}
              </a>
              <a href="#hallmark" onClick={() => setMobileMenuOpen(false)}>
                {lang === 'mr' ? 'हॉलमार्क ९२.५ हमी' : 'BIS Hallmark Guarantee'}
              </a>
              <a href="#boutique" onClick={() => setMobileMenuOpen(false)}>
                {lang === 'mr' ? 'वारजे दालन' : 'Warje Boutique & Hours'}
              </a>
            </div>

            <div className="pt-4 border-t border-zinc-900 flex items-center justify-between">
              <a
                href={`tel:${STORE_INFO.phone}`}
                className="text-xs text-zinc-300 flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-zinc-400" />
                <span>{STORE_INFO.phone}</span>
              </a>
              <button
                onClick={() => setLang(lang === 'en' ? 'mr' : 'en')}
                className="text-xs text-zinc-400 uppercase tracking-widest"
              >
                Language: {lang === 'en' ? 'मराठी' : 'English'}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
