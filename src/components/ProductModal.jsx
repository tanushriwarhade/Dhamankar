import React from 'react';
import { X, Phone, MessageCircle } from 'lucide-react';
import { STORE_INFO } from '../data/storeInfo';

export const ProductModal = ({ product, lang, onClose }) => {
  if (!product) return null;

  const whatsappMessage = `Hello Dhamankar Silver & Sons, I am inquiring about "${product.title}" (${product.weightRange}) from your website. Please share available weight options and current price at your Warje store.`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="relative w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-zinc-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Main Photo */}
          <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-zinc-900 border border-zinc-900">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-3 left-3 bg-zinc-950/80 backdrop-blur-md px-3 py-1 rounded text-[10px] tracking-widest uppercase text-zinc-300 font-mono border border-zinc-800">
              {product.purity}
            </span>
          </div>

          {/* Details */}
          <div className="space-y-2">
            <span className="text-[10px] tracking-[0.25em] uppercase text-zinc-500 font-medium">
              {product.badge}
            </span>
            <h3 className="font-serif text-2xl font-normal text-zinc-100">
              {product.title}
            </h3>
            <p className="text-xs text-zinc-400 font-medium">
              {product.titleMarathi}
            </p>
            <p className="text-xs text-zinc-400 font-light leading-relaxed pt-2">
              {product.description}
            </p>
          </div>

          {/* Specification Table */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs border-t border-zinc-900">
            <div>
              <span className="text-[10px] tracking-wider uppercase text-zinc-500 block">Weight</span>
              <span className="text-zinc-200 font-medium">{product.weightRange}</span>
            </div>
            <div>
              <span className="text-[10px] tracking-wider uppercase text-zinc-500 block">Purity</span>
              <span className="text-zinc-200 font-medium">{product.purity}</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-[10px] tracking-wider uppercase text-zinc-500 block">Indicative Value</span>
              <span className="text-zinc-200 font-medium">{product.priceEstimate}</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 rounded-full bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Inquire via WhatsApp</span>
            </a>

            <a
              href={`tel:${STORE_INFO.phone}`}
              className="px-6 py-3 rounded-full border border-zinc-800 hover:border-zinc-500 text-zinc-300 font-medium text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-zinc-400" />
              <span>Call Showroom</span>
            </a>
          </div>

          <div className="text-center text-[10px] tracking-wider uppercase text-zinc-600">
            Dhamankar Silver & Sons · NDA Rd, Warje, Pune
          </div>
        </div>

      </div>
    </div>
  );
};
