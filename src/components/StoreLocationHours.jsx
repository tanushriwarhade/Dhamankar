import React from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink } from 'lucide-react';
import { STORE_INFO } from '../data/storeInfo';

export const StoreLocationHours = ({ lang }) => {
  return (
    <section id="boutique" className="py-20 md:py-32 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Store Details (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-[10px] tracking-[0.25em] uppercase text-zinc-500 font-medium">
                {lang === 'mr' ? 'वारजे दालन' : 'Warje Showroom'}
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-zinc-100 tracking-tight">
                {lang === 'mr' ? 'दालनाला प्रत्यक्ष भेट द्या' : 'Visit the Boutique'}
              </h2>

              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Experience pure 92.5 silverware, pooja idols, and bespoke consultation at our Warje showroom.
              </p>
            </div>

            {/* Address & Contact Items */}
            <div className="space-y-5 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-zinc-400 mt-0.5 flex-shrink-0" />
                <div className="space-y-0.5">
                  <span className="text-zinc-200 font-medium block">Dhamankar Silver & Sons</span>
                  <p className="text-zinc-400 font-light">{STORE_INFO.address.full}</p>
                  <p className="text-[11px] text-zinc-500">Landmark: {STORE_INFO.address.landmark}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-zinc-400 mt-0.5 flex-shrink-0" />
                <div className="space-y-0.5">
                  <span className="text-zinc-200 font-medium block">Showroom Hours</span>
                  <p className="text-zinc-400 font-light">Monday – Sunday: 10:30 AM – 9:30 PM</p>
                  <span className="text-[10px] text-emerald-400 font-medium">Open 7 Days a Week</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-zinc-400 mt-0.5 flex-shrink-0" />
                <div className="space-y-0.5">
                  <span className="text-zinc-200 font-medium block">Telephone</span>
                  <a href={`tel:${STORE_INFO.phone}`} className="text-zinc-300 hover:text-white font-mono">
                    {STORE_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Direction Buttons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://maps.google.com/?q=Dhamankar+Silver+%26+Sons+Warje+Pune"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-zinc-100 hover:bg-white text-zinc-950 text-xs tracking-wider uppercase font-semibold transition-all flex items-center gap-2"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${STORE_INFO.phone}`}
                className="px-6 py-3 rounded-full border border-zinc-800 hover:border-zinc-500 text-zinc-300 hover:text-white text-xs tracking-wider uppercase transition-colors"
              >
                Call Store
              </a>
            </div>
          </div>

          {/* Right: Minimal Map Frame (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/11] rounded-2xl overflow-hidden hairline-border bg-zinc-900">
              <iframe
                title="Dhamankar Silver Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15136.21639912061!2d73.79155099999999!3d18.4811776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2956ce2f4aa25%3A0xad99cd3391da9f79!2sDhamankar%20silver%20%26%20sons!5e0!3m2!1sen!2sin!4v1709568912345!5m2!1sen!2sin"
                className="w-full h-full border-0 filter invert contrast-125 opacity-70 hover:opacity-100 transition-opacity"
                loading="lazy"
              ></iframe>

              <a
                href="https://maps.google.com/?q=Dhamankar+Silver+%26+Sons+Warje+Pune"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-zinc-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[10px] tracking-wider uppercase text-zinc-300 hairline-border flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <span>View on Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
