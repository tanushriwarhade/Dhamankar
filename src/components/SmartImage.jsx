import { useState } from 'react';
import { Gem } from 'lucide-react';

/**
 * Lazy-loaded photo. `src` can be a string or a list of sources tried in order.
 * If none load, a neutral silver panel is shown.
 */
export default function SmartImage({ src, alt, className = '', imgClassName = '', eager = false }) {
  const sources = Array.isArray(src) ? src : [src];
  const [index, setIndex] = useState(0);
  const failed = index >= sources.length;

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-[#F4F4F3] via-[#E3E5E6] to-[#CDD0D3] ${className}`}>
      {failed ? (
        <div role="img" aria-label={alt} className="absolute inset-0 flex items-center justify-center text-charcoal/30">
          <Gem size={40} strokeWidth={1} aria-hidden="true" />
        </div>
      ) : (
        <img
          key={sources[index]}
          src={sources[index]}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setIndex((i) => i + 1)}
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      )}
    </div>
  );
}
