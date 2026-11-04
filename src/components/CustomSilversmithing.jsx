import React from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { STORE_INFO } from '../data/storeInfo';

export const CustomSilversmithing = ({ lang, onOpenInquiry }) => {
  const crafts = [
    {
      title: lang === 'mr' ? 'देवस्थान व मंदिर कामे' : 'Sacred Temple Kalash & Kavach',
      desc: lang === 'mr' ? 'मूर्तींसाठी चांदीचे कवच, मुकुट, छत्र आणि समई.' : 'Custom deity crowns, armor (kavach), umbrellas (chhatra), and temple Kalash.',
    },
    {
      title: lang === 'mr' ? 'जुनी चांदी पुनरुज्जीवन व पॉलिश' : 'Antique Restoration & Buffing',
      desc: lang === 'mr' ? 'काळ्या पडलेल्या कौटुंबिक चांदीच्या भांड्यांना पुन्हा मूळ चकाकी देणे.' : 'Electrolytic restoration and mirror polish for generational heirloom silverware.',
    },
    {
      title: lang === 'mr' ? 'लग्नाचे रुखवत चांदीचे संच' : 'Bespoke Wedding Silverware',
      desc: lang === 'mr' ? 'महाराष्ट्रीयन लग्नविधीसाठी खास वजनाचे थाळी व वाटी संच.' : 'Curated dining thalis and ritual items customized to your exact family traditions.',
    }
  ];

  return (
    <section id="craft" className="py-20 md:py-32 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Narrative (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] tracking-[0.25em] uppercase text-zinc-500 font-medium">
              {lang === 'mr' ? 'पिढीजात कला' : 'Generational Artistry'}
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-zinc-100 tracking-tight leading-[1.15]">
              {lang === 'mr' ? (
                <>
                  चांदीचे कारागीर. <br />
                  <span className="italic text-zinc-400">केवळ विक्रेते नाही.</span>
                </>
              ) : (
                <>
                  Silversmiths. <br />
                  <span className="italic text-zinc-400">Not just retailers.</span>
                </>
              )}
            </h2>

            <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
              {lang === 'mr'
                ? 'वारजे, पुण्यातील आमच्या कार्यशाळेत शुद्ध चांदीचे नक्षीकाम, ओतकाम आणि पॉलिशिंगचे काम कुशल कारागिरांकडून केले जाते.'
                : 'In our Warje workshop, master artisans shape pure silver into consecrated temple idols, royal dinnerware, and delicate bridal ornaments.'}
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenInquiry}
                className="px-6 py-3 rounded-full border border-zinc-700 hover:border-zinc-300 text-zinc-200 hover:text-white text-xs tracking-wider uppercase transition-all"
              >
                Discuss Bespoke Order
              </button>
            </div>
          </div>

          {/* Right: Craft Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {crafts.map((craft, idx) => (
              <div 
                key={idx}
                className="p-6 sm:p-8 rounded-2xl hairline-border bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors group flex items-start justify-between gap-4"
              >
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono text-zinc-500">0{idx + 1}</span>
                  <h3 className="font-serif text-xl font-normal text-zinc-200 group-hover:text-white transition-colors">
                    {craft.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-light max-w-lg">
                    {craft.desc}
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-zinc-300 transition-colors flex-shrink-0 mt-2" />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
