import SmartImage from './SmartImage.jsx';
import { GALLERY } from '../data/collections.js';

export default function Gallery() {
  return (
    <section id="gallery" aria-labelledby="gallery-title" className="section-pad bg-white">
      <div className="container-x">
        <h2 id="gallery-title" className="display text-4xl sm:text-5xl">Gallery</h2>
        <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-3 sm:auto-rows-[240px] md:grid-cols-4 md:gap-4">
          {GALLERY.map((g) => (
            <figure key={g.id || g.alt} className={`group relative overflow-hidden ${g.span}`}>
              <SmartImage
                src={g.src}
                alt={g.alt}
                className="h-full w-full"
                imgClassName="transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-charcoal/75 px-4 py-3 text-xs text-ivory transition-transform duration-300 group-hover:translate-y-0">
                {g.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
