// Each photo is tried from your local /images folder first (/images/<name>.jpg),
// then from Unsplash fallback. If both fail, a neutral silver panel shows.
const UNSPLASH = {
  necklace: '1599459182681-c938b7f65af0',
  ring: '1595538934869-503c9448981b',
  bracelets: '1583315528236-b893494a35ee',
  chain: '1623699654653-5f03c0168a6a',
  anklets: '1596942699002-a7f234a5bb59',
  payal: '1596942699002-a7f234a5bb59',
  bangles: '1681140026214-e06927d6d75d',
  ornaments: '1608613381851-6a058de0dc11',
  gifts: '1717255184209-411a76b9ffda',
};

export const photo = (name, localFileName = null) => [
  `/images/${localFileName || name}.jpg`,
  `images/${localFileName || name}.jpg`,
  UNSPLASH[name] ? `https://images.unsplash.com/photo-${UNSPLASH[name]}?auto=format&fit=crop&w=900&q=70` : null,
].filter(Boolean);

export const COLLECTIONS = [
  { id: 'silver-jewellery', name: 'Silver Jewellery', image: photo('necklace', 'necklace'),
    description: 'Everyday and occasion pieces in pure 925 silver, from delicate pendants to statement sets.' },
  { id: 'silver-anklets', name: 'Silver Anklets', image: photo('anklets', 'silver-anklets'),
    description: 'Light, graceful sterling silver anklets with fine bell drops and intricate chain weave.' },
  { id: 'silver-payal', name: 'Silver Payal', image: photo('payal', 'silver-payal'),
    description: 'Traditional Indian payal designs crafted with ghungroos that sound as melodious as they look.' },
  { id: 'silver-bangles', name: 'Silver Bangles', image: photo('bangles', 'silver-bangles'),
    description: 'Plain, hammered, and masterfully hand-engraved 925 silver bangles to wear singly or stacked.' },
  { id: 'silver-chains', name: 'Silver Chains', image: photo('chain', 'chain'),
    description: 'Gleaming sterling silver chains in curb, rope, and figaro styles for daily wear or gifting.' },
  { id: 'silver-rings', name: 'Silver Rings', image: photo('ring', 'ring'),
    description: 'Designer solitaire rings, intricately carved bands, and timeless eternity rings in pure silver.' },
  { id: 'silver-bracelets', name: 'Silver Bracelets', image: photo('bracelets', 'bracelets'),
    description: 'Pure sterling silver kadas, cuffs, and modern statement bracelets for men and women.' },
  { id: 'traditional-silver-ornaments', name: 'Traditional Silver Ornaments', image: photo('ornaments', 'traditional-ornaments'),
    description: 'Royal silver jewelry and heritage ornaments rooted in Indian tradition for weddings and ceremonies.' },
  { id: 'silver-gifts', name: 'Silver Gifts', image: photo('gifts', 'silver-gifts'),
    description: 'Precious silver tea sets, tableware, coins, and puja articles for weddings, festivals, and milestones.' },
];

export const GALLERY = [
  { id: 'gal-necklace', src: photo('necklace', 'necklace'), alt: 'Handcrafted 925 Sterling Silver Filigree Necklace', span: 'md:col-span-2 md:row-span-2' },
  { id: 'gal-anklets', src: photo('anklets', 'gallery-2'), alt: 'Modern Sterling Silver Choker and Rings Collection', span: '' },
  { id: 'gal-bracelets', src: photo('bracelets', 'bracelets'), alt: 'Handcrafted 925 Silver Bangles and Kadas Stack', span: '' },
  { id: 'gal-ring', src: photo('ring', 'ring'), alt: 'Designer 925 Sterling Silver Ring Set', span: '' },
  { id: 'gal-chain', src: photo('chain', 'chain'), alt: 'Polished Sterling Silver Curb and Snake Chains', span: '' },
  { id: 'gal-ornaments', src: photo('ornaments', 'gallery-6'), alt: 'Classic Antique Sterling Silver Locket Pendant', span: 'md:col-span-2' },
];
