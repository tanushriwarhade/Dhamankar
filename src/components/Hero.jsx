import SmartImage from './SmartImage.jsx';
import { photo } from '../data/collections.js';

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="px-5 pb-16 pt-12 sm:px-8 md:pb-24 md:pt-20">
      <div className="container-x grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <h1 id="hero-title" className="display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            Elegance That Lasts Generations.
          </h1>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-charcoal/75">
            Discover timeless silver craftsmanship, thoughtfully curated for every occasion.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#collections" className="btn-dark">Explore Collections</a>
            <a href="#contact" className="btn-outline">Contact Us</a>
          </div>
          <p className="mt-10 border-l-2 border-champagne pl-4 text-sm text-charcoal/70">
            Silver jewellery and silversmith, NDA Road, Warje, Pune.
          </p>
        </div>

        {/* Arch-framed image, a nod to the jharokha arches of Indian architecture */}
        <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <div aria-hidden="true" className="absolute -bottom-4 -right-4 h-full w-full rounded-t-[999px] border border-champagne" />
          <SmartImage
            src={photo('necklace')}
            alt="Handcrafted 925 sterling silver medallion necklace"
            eager
            className="relative aspect-[4/5] w-full rounded-t-[999px]"
          />
        </div>
      </div>
    </section>
  );
}
