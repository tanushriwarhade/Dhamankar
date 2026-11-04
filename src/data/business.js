export const BUSINESS = {
  name: 'Dhamankar Silver & Sons',
  phoneDisplay: '+91 88887 24444',
  phoneTel: '+918888724444',
  whatsappNumber: '918888724444',
  addressLines: ['NDA Road, Giridhar Nagar, Warje,', 'Pune, Maharashtra 411058.'],
  addressFull:
    'Dhamankar Silver & Sons, NDA Road, Giridhar Nagar, Warje, Pune, Maharashtra 411058, India',
};

export const whatsappLink = (message = '') =>
  `https://wa.me/${BUSINESS.whatsappNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

export const telLink = `tel:${BUSINESS.phoneTel}`;

export const directionsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  BUSINESS.addressFull
)}`;

export const mapEmbedLink = `https://www.google.com/maps?q=${encodeURIComponent(
  BUSINESS.addressFull
)}&output=embed`;

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Collections', href: '#collections' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Craftsmanship', href: '#craftsmanship' },
  { label: 'Contact', href: '#contact' },
];
