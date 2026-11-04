import { Gem, Sparkles, HeartHandshake, MapPin, MessageCircle } from 'lucide-react';

const REASONS = [
  { icon: Gem, title: 'Silver Jewellery Collections', text: 'A wide range of categories, from anklets and bangles to chains and gifts.' },
  { icon: Sparkles, title: 'Traditional & Contemporary Designs', text: 'Classic ornaments alongside modern styles for everyday wear.' },
  { icon: HeartHandshake, title: 'Personalised Customer Assistance', text: 'Tell us the occasion and your taste, and we will help you choose.' },
  { icon: MapPin, title: 'Convenient Store Location', text: 'Easy to find on NDA Road, Giridhar Nagar, Warje.' },
  { icon: MessageCircle, title: 'Direct Customer Enquiries', text: 'Reach us straight away by phone or WhatsApp.' },
];

export default function WhyChoose() {
  return (
    <section aria-labelledby="why-title" className="section-pad">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <h2 id="why-title" className="display text-4xl sm:text-5xl lg:col-span-4">Why Choose Us</h2>
        <ul className="divide-y divide-silver/60 border-y border-silver/60 lg:col-span-7 lg:col-start-6">
          {REASONS.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex gap-5 py-6">
              <Icon size={24} strokeWidth={1.25} className="mt-1 shrink-0 text-charcoal/70" aria-hidden="true" />
              <div>
                <h3 className="font-display text-2xl">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-charcoal/70">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
