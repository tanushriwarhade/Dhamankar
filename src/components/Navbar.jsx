import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { BUSINESS, NAV_LINKS, whatsappLink } from '../data/business.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const enquiry = whatsappLink(`Hello ${BUSINESS.name}, I would like to enquire about your silver jewellery.`);

  return (
    <header className="sticky top-0 z-50 border-b border-silver/50 bg-ivory/95 backdrop-blur">
      <nav aria-label="Main" className="container-x flex items-center justify-between px-5 py-4 sm:px-8">
        <a href="#home" className="font-display text-lg font-semibold tracking-[0.12em] sm:text-xl" onClick={close}>
          DHAMANKAR <span className="text-charcoal/60">SILVER &amp; SONS</span>
        </a>

        <ul className="hidden items-center gap-8 text-sm lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="py-1 transition-colors hover:text-charcoal/60">{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href={enquiry} target="_blank" rel="noopener noreferrer" className="btn-dark hidden !py-2.5 sm:inline-flex">
            <MessageCircle size={16} aria-hidden="true" /> Enquire Now
          </a>
          <button
            type="button"
            className="p-2 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-silver/50 bg-ivory px-5 pb-6 pt-2 lg:hidden">
          <ul>
            {NAV_LINKS.map((l) => (
              <li key={l.href} className="border-b border-silver/40">
                <a href={l.href} onClick={close} className="block py-4 font-display text-xl">{l.label}</a>
              </li>
            ))}
          </ul>
          <a href={enquiry} target="_blank" rel="noopener noreferrer" className="btn-dark mt-6 w-full">
            <MessageCircle size={16} aria-hidden="true" /> Enquire Now
          </a>
        </div>
      )}
    </header>
  );
}
