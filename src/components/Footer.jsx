import { BUSINESS, NAV_LINKS, telLink, whatsappLink, directionsLink } from '../data/business.js';

export default function Footer() {
  const link = 'transition-colors hover:text-champagne';
  return (
    <footer className="bg-charcoal px-5 py-16 text-ivory sm:px-8">
      <div className="container-x grid gap-12 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl tracking-[0.1em]">DHAMANKAR SILVER &amp; SONS</p>
          <p className="mt-3 max-w-xs text-sm text-ivory/70">Silver jewellery and silversmith in Warje, Pune.</p>
        </div>

        <nav aria-label="Footer">
          <ul className="space-y-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}><a href={l.href} className={link}>{l.label}</a></li>
            ))}
            <li><a href="#gallery" className={link}>Gallery</a></li>
          </ul>
        </nav>

        <div className="space-y-2 text-sm">
          <address className="not-italic text-ivory/80">
            {BUSINESS.addressLines.map((l) => <p key={l}>{l}</p>)}
          </address>
          <p><a href={telLink} className={link}>{BUSINESS.phoneDisplay}</a></p>
          <p><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={link}>WhatsApp us</a></p>
          <p><a href={directionsLink} target="_blank" rel="noopener noreferrer" className={link}>Get directions</a></p>
        </div>
      </div>
      <p className="container-x mt-14 border-t border-ivory/15 pt-6 text-xs text-ivory/60">
        &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
      </p>
    </footer>
  );
}
