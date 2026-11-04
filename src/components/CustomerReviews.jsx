import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { STORE_INFO, TESTIMONIALS } from '../data/storeInfo';

export const CustomerReviews = ({ lang }) => {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header with Rating */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-14 pb-8 border-b border-zinc-900">
          <div className="space-y-2">
            <span className="text-[10px] tracking-[0.25em] uppercase text-zinc-500 font-medium">
              {lang === 'mr' ? 'ग्राहक विश्वास' : 'Patron Testimonials'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-zinc-100 tracking-tight">
              {lang === 'mr' ? 'ग्राहकांचे खरे अनुभव' : 'Reflections & Trust'}
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <span className="font-serif text-2xl text-zinc-100 font-light block">
                {STORE_INFO.googleReviews.rating}
              </span>
              <span className="text-[10px] tracking-wider text-zinc-500 uppercase">
                Google Verified Reviews
              </span>
            </div>
            <a
              href={STORE_INFO.googleReviews.searchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] tracking-wider uppercase px-4 py-2 rounded-full border border-zinc-800 hover:border-zinc-500 text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span>Review on Google</span>
              <ExternalLink className="w-3 h-3 text-zinc-500" />
            </a>
          </div>
        </div>

        {/* Minimal Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.slice(0, 3).map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-2xl hairline-border bg-zinc-900/20 flex flex-col justify-between space-y-4"
            >
              <p className="text-xs text-zinc-300 font-light leading-relaxed italic">
                "{t.comment}"
              </p>

              <div className="pt-4 border-t border-zinc-900 flex items-center justify-between text-xs">
                <div>
                  <span className="font-serif text-sm text-zinc-200 block">{t.name}</span>
                  <span className="text-[10px] text-zinc-500">{t.location}</span>
                </div>
                <span className="text-[10px] text-zinc-600 font-mono">{t.tag}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
