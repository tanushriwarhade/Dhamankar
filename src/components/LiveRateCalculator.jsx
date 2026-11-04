import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { STORE_INFO, LIVE_RATES } from '../data/storeInfo';

export const LiveRateCalculator = ({ lang }) => {
  const [purity, setPurity] = useState('925');
  const [weight, setWeight] = useState(100);
  const [articleType, setArticleType] = useState('pooja');

  const makingChargesMap = {
    coins: { rate: 6, label: 'Coins & Bars', labelMr: 'नाणी व बिस्किट' },
    pooja: { rate: 12, label: 'Pooja Utensils & Idols', labelMr: 'पूजा भांडी व मूर्ती' },
    dining: { rate: 14, label: 'Royal Dining Ware', labelMr: 'शाही जेवणाचे ताट' },
    jewellery: { rate: 18, label: 'Jewellery & Payal', labelMr: 'दागिने व पैंजण' },
  };

  const currentRatePerGram = purity === '999' ? LIVE_RATES.silver999.perGram : LIVE_RATES.silver925.perGram;
  const baseSilverCost = weight * currentRatePerGram;
  const makingChargesPerGram = makingChargesMap[articleType].rate;
  const totalMakingCost = weight * makingChargesPerGram;
  const totalEstimatedCost = Math.round(baseSilverCost + totalMakingCost);

  const quickWeights = [10, 50, 100, 250, 500, 1000];

  const whatsappMessage = `Hello Dhamankar Silver & Sons, I calculated a quote on your website for ${weight}g of ${purity === '999' ? '99.9 Pure Silver' : '92.5 Sterling Silver'} (${makingChargesMap[articleType].label}). Estimated value is approx ₹${totalEstimatedCost.toLocaleString('en-IN')}. Please confirm today's live rate and availability at Warje showroom.`;

  return (
    <section id="rates" className="py-20 md:py-28 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14 space-y-3">
          <span className="text-[10px] tracking-[0.25em] uppercase text-zinc-500 font-medium">
            {lang === 'mr' ? 'थेट बाजारभाव' : 'Live Pune Market'}
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-zinc-100 tracking-tight">
            {lang === 'mr' ? 'लाईव्ह चांदीचे दर व अंदाज' : 'Live Rates & Valuation'}
          </h2>

          <p className="text-xs text-zinc-400 font-light">
            {lang === 'mr'
              ? 'पुणे शहरातील थेट अधिकृत दर आणि शुद्धतेनुसार पारदर्शक अंदाजित किंमत.'
              : 'Direct market benchmark rates for pure bullion and hallmarked sterling silverware.'}
          </p>
        </div>

        {/* Minimal 2 Rates Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          
          {/* 999 Card */}
          <div className="p-6 rounded-2xl hairline-border bg-zinc-900/30 flex items-center justify-between">
            <div>
              <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 block mb-1">
                Fine Pure Silver
              </span>
              <h3 className="font-serif text-lg text-zinc-200">99.9% Purity</h3>
              <p className="text-[11px] text-zinc-500">Coins, Minted Bars & Solid Idols</p>
            </div>
            <div className="text-right">
              <span className="font-serif text-2xl sm:text-3xl font-light text-zinc-100 block">
                ₹{LIVE_RATES.silver999.perGram.toFixed(2)}
              </span>
              <span className="text-[10px] text-zinc-500">per gram</span>
            </div>
          </div>

          {/* 925 Card */}
          <div className="p-6 rounded-2xl hairline-border bg-zinc-900/30 flex items-center justify-between">
            <div>
              <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 block mb-1">
                Sterling Silver
              </span>
              <h3 className="font-serif text-lg text-zinc-200">92.5% BIS Hallmarked</h3>
              <p className="text-[11px] text-zinc-500">Jewellery, Dinnerware & Pooja Utensils</p>
            </div>
            <div className="text-right">
              <span className="font-serif text-2xl sm:text-3xl font-light text-zinc-100 block">
                ₹{LIVE_RATES.silver925.perGram.toFixed(2)}
              </span>
              <span className="text-[10px] text-zinc-500">per gram</span>
            </div>
          </div>

        </div>

        {/* Minimalist Valuation Tool */}
        <div className="p-8 sm:p-10 rounded-2xl hairline-border bg-zinc-900/20 space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* Controls */}
            <div className="space-y-6">
              {/* Purity Choice */}
              <div>
                <label className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 block mb-2 font-medium">
                  Select Purity
                </label>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setPurity('925')}
                    className={`flex-1 py-2 px-3 rounded-lg text-xs tracking-wider uppercase transition-all ${
                      purity === '925'
                        ? 'bg-zinc-200 text-zinc-950 font-semibold'
                        : 'hairline-border text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    92.5% Sterling
                  </button>
                  <button
                    type="button"
                    onClick={() => setPurity('999')}
                    className={`flex-1 py-2 px-3 rounded-lg text-xs tracking-wider uppercase transition-all ${
                      purity === '999'
                        ? 'bg-zinc-200 text-zinc-950 font-semibold'
                        : 'hairline-border text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    99.9% Pure
                  </button>
                </div>
              </div>

              {/* Weight Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 font-medium">
                    Weight in Grams
                  </label>
                  <span className="font-mono text-sm text-zinc-200">{weight}g</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="1200"
                  step="5"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
                  {quickWeights.map((w) => (
                    <button
                      key={w}
                      type="button"
                      onClick={() => setWeight(w)}
                      className={`text-[10px] font-mono px-2.5 py-1 rounded transition-colors ${
                        weight === w ? 'bg-zinc-200 text-zinc-950 font-bold' : 'text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      {w >= 1000 ? '1kg' : `${w}g`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Article Category */}
              <div>
                <label className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 block mb-2 font-medium">
                  Type of Item
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(makingChargesMap).map(([key, item]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setArticleType(key)}
                      className={`p-2.5 rounded-lg text-left text-xs transition-colors ${
                        articleType === key
                          ? 'bg-zinc-800 text-zinc-100 font-medium'
                          : 'bg-zinc-900/40 text-zinc-500 hover:text-zinc-400'
                      }`}
                    >
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Price Output */}
            <div className="p-6 rounded-xl bg-zinc-950 hairline-border space-y-5">
              <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 block">
                Estimated Valuation
              </span>

              <div className="space-y-2 text-xs text-zinc-400 border-b border-zinc-900 pb-4">
                <div className="flex justify-between">
                  <span>Base Silver ({weight}g @ ₹{currentRatePerGram}/g):</span>
                  <span className="text-zinc-200 font-mono">₹{Math.round(baseSilverCost).toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Indicative Making:</span>
                  <span className="text-zinc-200 font-mono">₹{Math.round(totalMakingCost).toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-[11px] text-zinc-500">
                  <span>BIS Hallmarking:</span>
                  <span className="text-zinc-400">Included</span>
                </div>
              </div>

              <div>
                <span className="text-[10px] tracking-wider uppercase text-zinc-500 block">Total Approximate Price</span>
                <div className="font-serif text-3xl font-normal text-zinc-100 mt-1">
                  ₹{totalEstimatedCost.toLocaleString('en-IN')}*
                </div>
                <p className="text-[10px] text-zinc-600 mt-1">
                  *Standard government jewellery GST calculated at showroom billing.
                </p>
              </div>

              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full bg-zinc-100 hover:bg-white text-zinc-950 text-xs tracking-wider uppercase font-semibold transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Inquire This Estimate via WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
