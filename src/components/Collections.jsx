import { MessageCircle } from 'lucide-react';
import SmartImage from './SmartImage.jsx';
import { COLLECTIONS } from '../data/collections.js';
import { BUSINESS, whatsappLink } from '../data/business.js';

function CollectionCard({ item }) {
  const msg = `Hello ${BUSINESS.name}, I would like to enquire about your ${item.name}.`;
  return (
    <article id={item.id} className="group flex scroll-mt-24 flex-col border border-silver/60 bg-ivory">
      <SmartImage
        src={item.image}
        alt={`${item.name} at Dhamankar Silver & Sons`}
        className="aspect-[4/5] w-full"
        imgClassName="transition-transform duration-700 group-hover:scale-105"
      />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl font-medium">{item.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/70">{item.description}</p>
        <a
          href={whatsappLink(msg)}
          target="_blank" rel="noopener noreferrer"
          aria-label={`Enquire on WhatsApp about ${item.name}`}
          className="mt-6 inline-flex items-center gap-2 border-t border-silver/60 pt-4 text-sm font-medium transition-colors hover:text-charcoal/60"
        >
          <MessageCircle size={16} aria-hidden="true" /> Enquire on WhatsApp
        </a>
      </div>
    </article>
  );
}

export default function Collections() {
  return (
    <section id="collections" aria-labelledby="collections-title" className="section-pad bg-white">
      <div className="container-x">
        <div className="max-w-2xl">
          <h2 id="collections-title" className="display text-4xl sm:text-5xl">Our Collections</h2>
          <p className="mt-5 leading-relaxed text-charcoal/75">
            Browse our silver jewellery categories. Message us on WhatsApp about any piece and we will share what is available.
          </p>
        </div>

        <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm" aria-label="Jump to a collection">
          {COLLECTIONS.map((c) => (
            <li key={c.id}>
              <a href={`#${c.id}`} className="underline decoration-silver underline-offset-4 transition-colors hover:decoration-charcoal">
                {c.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COLLECTIONS.map((item) => (
            <CollectionCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
