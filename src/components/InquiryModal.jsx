import React, { useState } from 'react';
import { X, MessageCircle, CheckCircle2 } from 'lucide-react';
import { STORE_INFO } from '../data/storeInfo';

export const InquiryModal = ({ isOpen, onClose, lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Dev Pooja Idols & Utensils',
    weightBudget: '50g – 250g',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    const message = `*Website Inquiry - Dhamankar Silver & Sons*
• Name: ${formData.name || 'Not provided'}
• Phone: ${formData.phone || 'Not provided'}
• Interest: ${formData.service}
• Weight: ${formData.weightBudget}
• Notes: ${formData.notes || 'Inquiring about stock and showroom visit.'}`;

    setTimeout(() => {
      window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
      onClose();
      setIsSubmitted(false);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="relative w-full max-w-lg bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl z-10">
        
        {/* Header */}
        <div className="p-6 border-b border-zinc-900 flex items-center justify-between">
          <div>
            <span className="text-[9px] tracking-[0.25em] uppercase text-zinc-500 font-medium block">
              Dhamankar Silver & Sons
            </span>
            <h3 className="font-serif text-xl font-normal text-zinc-100">
              {lang === 'mr' ? 'चौकशी किंवा कस्टम ऑर्डर' : 'Boutique Consultation'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-zinc-500 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-10 text-center space-y-3">
            <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
            <h4 className="font-serif text-lg text-zinc-100">Connecting to WhatsApp...</h4>
            <p className="text-xs text-zinc-500">
              Transferring your details to Dhamankar Silver & Sons showroom team.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
            <div>
              <label className="text-[10px] tracking-wider uppercase text-zinc-400 block mb-1">
                Your Name / नाव
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Rahul Kulkarni"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-3.5 py-2.5 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-500"
              />
            </div>

            <div>
              <label className="text-[10px] tracking-wider uppercase text-zinc-400 block mb-1">
                Contact Phone / WhatsApp
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. 98220 XXXXX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-3.5 py-2.5 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[10px] tracking-wider uppercase text-zinc-400 block mb-1">
                  Collection
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-3 py-2 text-zinc-300 focus:outline-none focus:border-zinc-500"
                >
                  <option value="Dev Pooja Idols & Utensils">Dev Pooja Idols & Samai</option>
                  <option value="Royal Silver Dining Set">Royal Silver Dining Set</option>
                  <option value="Pure Silver Jewellery & Payal">Pure Silver Jewellery</option>
                  <option value="Baby Gifting Silverware">Baby Gifting Sets</option>
                  <option value="999 Minted Pure Silver Coins">999 Pure Silver Coins</option>
                  <option value="Custom Temple Kavach & Mukut">Custom Temple Work</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] tracking-wider uppercase text-zinc-400 block mb-1">
                  Target Weight
                </label>
                <select
                  value={formData.weightBudget}
                  onChange={(e) => setFormData({ ...formData, weightBudget: e.target.value })}
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-3 py-2 text-zinc-300 focus:outline-none focus:border-zinc-500"
                >
                  <option value="Under 50g">Under 50g</option>
                  <option value="50g – 250g">50g – 250g</option>
                  <option value="250g – 750g">250g – 750g</option>
                  <option value="1kg+ (Thali / Temple)">1kg+ (Thali / Temple)</option>
                  <option value="Custom Measurement">Custom Weight</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-[10px] tracking-wider uppercase text-zinc-400 block mb-1">
                Notes or Specific Design
              </label>
              <textarea
                rows="2"
                placeholder="Mention any custom design or preferred visit date..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-3.5 py-2 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Send via WhatsApp</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
