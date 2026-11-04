import { useState } from 'react';
import { Phone, MessageCircle, Navigation } from 'lucide-react';
import { BUSINESS, telLink, whatsappLink, directionsLink, mapEmbedLink } from '../data/business.js';
import { COLLECTIONS } from '../data/collections.js';

function EnquiryForm() {
  const [form, setForm] = useState({ name: '', interest: '', message: '' });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const lines = [
      `Hello ${BUSINESS.name},`,
      form.name ? `My name is ${form.name}.` : '',
      form.interest ? `I am interested in: ${form.interest}.` : '',
      form.message,
    ].filter(Boolean);
    window.open(whatsappLink(lines.join('\n')), '_blank', 'noopener,noreferrer');
  };

  const field = 'mt-1 w-full border border-silver bg-white px-4 py-3 text-sm focus:border-charcoal';

  return (
    <form onSubmit={submit} className="mt-10 space-y-5 border border-silver/60 bg-white p-6 sm:p-8">
      <h3 className="font-display text-2xl">Send an enquiry</h3>
      <div>
        <label htmlFor="name" className="text-sm font-medium">Your name</label>
        <input id="name" type="text" autoComplete="name" required value={form.name} onChange={set('name')} className={field} />
      </div>
      <div>
        <label htmlFor="interest" className="text-sm font-medium">Interested in</label>
        <select id="interest" value={form.interest} onChange={set('interest')} className={field}>
          <option value="">Select a collection</option>
          {COLLECTIONS.map((c) => (
            <option key={c.id} value={c.name}>{c.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium">Message</label>
        <textarea id="message" rows={3} value={form.message} onChange={set('message')} className={field} />
      </div>
      <button type="submit" className="btn-dark w-full">
        <MessageCircle size={16} aria-hidden="true" /> Send on WhatsApp
      </button>
      <p className="text-xs text-charcoal/60">This opens WhatsApp with your message ready to send.</p>
    </form>
  );
}

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="section-pad">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 id="contact-title" className="display text-4xl sm:text-5xl">Visit or Contact Us</h2>
          <address className="mt-8 space-y-1 text-lg not-italic leading-relaxed">
            <p className="font-display text-2xl font-medium">{BUSINESS.name}</p>
            {BUSINESS.addressLines.map((l) => <p key={l}>{l}</p>)}
            <p className="pt-3">
              Phone: <a href={telLink} className="underline decoration-silver underline-offset-4 hover:decoration-charcoal">{BUSINESS.phoneDisplay}</a>
            </p>
          </address>
          <p className="mt-4 text-sm text-charcoal/65">Please call ahead to confirm today&rsquo;s store timings.</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={telLink} className="btn-dark"><Phone size={16} aria-hidden="true" /> Call Now</a>
            <a href={whatsappLink(`Hello ${BUSINESS.name}, I would like to make an enquiry.`)} target="_blank" rel="noopener noreferrer" className="btn-outline">
              <MessageCircle size={16} aria-hidden="true" /> WhatsApp Enquiry
            </a>
            <a href={directionsLink} target="_blank" rel="noopener noreferrer" className="btn-outline">
              <Navigation size={16} aria-hidden="true" /> Get Directions
            </a>
          </div>

          <EnquiryForm />
        </div>

        <div className="min-h-[360px] lg:min-h-0">
          <iframe
            title="Map showing Dhamankar Silver & Sons, NDA Road, Warje, Pune"
            src={mapEmbedLink}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-[360px] w-full border border-silver/60 lg:sticky lg:top-24 lg:h-[560px]"
          />
        </div>
      </div>
    </section>
  );
}
