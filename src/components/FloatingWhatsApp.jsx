import React from 'react';
import { MessageCircle } from 'lucide-react';
import { STORE_INFO } from '../data/storeInfo';

export const FloatingWhatsApp = ({ lang }) => {
  return (
    <a
      href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(STORE_INFO.whatsappMessage)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-800 shadow-2xl transition-all flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
      title="Chat with Dhamankar Silver & Sons"
    >
      <MessageCircle className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
    </a>
  );
};
