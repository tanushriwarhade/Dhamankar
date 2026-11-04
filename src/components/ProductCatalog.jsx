import React, { useState } from 'react';
import { Search, ArrowUpRight, MessageCircle } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data/silverProducts';
import { STORE_INFO } from '../data/storeInfo';
import { ProductModal } from './ProductModal';

export const ProductCatalog = ({ lang, onOpenInquiry }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = PRODUCTS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.titleMarathi.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="collections" className="py-20 md:py-32 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-[10px] tracking-[0.25em] uppercase text-zinc-500 font-medium">
            {lang === 'mr' ? 'हस्तनिर्मित चांदीचे दालन' : 'Curated Silver Showroom'}
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-zinc-100 tracking-tight">
            {lang === 'mr' ? 'चांदीचे उत्कृष्ट संग्रह' : 'Signature Collections'}
          </h2>

          <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
            {lang === 'mr'
              ? 'देवपूजा मूर्ती, शाही डिनर सेट, शुद्ध चांदीचे अलंकार व शुभ भेटवस्तू – सर्व काही १००% बीआयएस हॉलमार्क शुद्धतेसह.'
              : 'Sacred temple idols, royal silverware, bridal ornaments, and auspicious keepsakes. 100% BIS Hallmarked purity.'}
          </p>
        </div>

        {/* Minimal Category Nav & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 border-b border-zinc-900 pb-4">
          
          {/* Minimal Text Tabs */}
          <div className="flex items-center gap-6 overflow-x-auto w-full md:w-auto scrollbar-none pb-2 md:pb-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap text-xs tracking-[0.14em] uppercase transition-colors relative py-1 ${
                  activeCategory === cat.id
                    ? 'text-zinc-100 font-medium'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                <span>{lang === 'mr' ? cat.nameMarathi : cat.name}</span>
                {activeCategory === cat.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-zinc-200"></span>
                )}
              </button>
            ))}
          </div>

          {/* Minimal Search Bar */}
          <div className="relative w-full md:w-64">
            <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={lang === 'mr' ? 'शोधा...' : 'Search collection...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900/50 border border-zinc-800/80 rounded-full pl-9 pr-3 py-1.5 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-500 hover:text-zinc-300"
              >
                ✕
              </button>
            )}
          </div>

        </div>

        {/* Product Cards Grid - Clean, Luxury Editorial Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              {/* Product Visual */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-zinc-900 border border-zinc-900 group-hover:border-zinc-700 transition-colors">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                />

                {/* Subtle Hallmark Pill */}
                <div className="absolute top-3 right-3 bg-zinc-950/70 backdrop-blur-md px-2 py-0.5 rounded text-[9px] tracking-widest uppercase font-mono text-zinc-400 border border-zinc-800">
                  925 HALLMARK
                </div>

                {/* Hover Quick Action */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                  <span className="px-5 py-2.5 rounded-full bg-white text-zinc-950 text-xs tracking-wider uppercase font-semibold shadow-lg">
                    View Details
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="pt-4 space-y-1.5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-serif text-base sm:text-lg font-normal text-zinc-200 group-hover:text-white transition-colors line-clamp-1">
                    {product.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-zinc-200 transition-colors flex-shrink-0" />
                </div>

                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span className="text-[11px] font-light">{product.weightRange}</span>
                  <span className="text-[11px] text-zinc-300 font-mono">{product.priceEstimate}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Minimal Bespoke Banner */}
        <div className="mt-20 pt-10 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h4 className="font-serif text-lg text-zinc-200">
              {lang === 'mr' ? 'कस्टम डिझाईन किंवा मूर्ती काम हवे आहे?' : 'Bespoke Orders & Custom Temple Work'}
            </h4>
            <p className="text-xs text-zinc-500 font-light">
              Bring your design or temple measurements to our Warje workshop for a custom estimate.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenInquiry}
              className="px-5 py-2.5 rounded-full bg-zinc-100 hover:bg-white text-zinc-950 text-xs tracking-wider uppercase font-semibold transition-all"
            >
              Request Custom Quote
            </button>
            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Dhamankar Silver & Sons, I would like to inquire about a custom silver design.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-zinc-800 hover:border-zinc-500 text-zinc-300 hover:text-white transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      {/* Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          lang={lang}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
};
