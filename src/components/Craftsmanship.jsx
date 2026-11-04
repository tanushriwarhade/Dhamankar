import SmartImage from './SmartImage.jsx';

const POINTS = [
  { title: 'Detailing', text: 'Fine patterns, clean edges and careful finishing are what make a piece worth keeping.' },
  { title: 'Lasting design', text: 'Classic silhouettes stay in style, season after season and generation after generation.' },
  { title: 'Chosen with care', text: 'The right piece is personal. Take your time, and ask us anything.' },
];

export default function Craftsmanship() {
  return (
    <section id="craftsmanship" aria-labelledby="craft-title" className="section-pad bg-charcoal text-ivory">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <SmartImage
          src={['/images/craftsmanship.jpg', 'images/craftsmanship.jpg', 'https://images.pexels.com/photos/15955332/pexels-photo-15955332.jpeg?auto=compress&cs=tinysrgb&w=900']}
          alt="Artisan silversmith handcrafting sterling silver jewellery at the workbench"
          className="aspect-[4/5] w-full"
        />
        <div>
          <h2 id="craft-title" className="display text-4xl sm:text-5xl">Crafted With Care. Chosen With Love.</h2>
          <p className="mt-6 max-w-lg leading-relaxed text-ivory/80">
            Silver jewellery rewards attention. The curve of a bangle, the weave of a chain and the pattern on a payal
            are the details that turn metal into something people treasure and pass on.
          </p>
          <dl className="mt-10 divide-y divide-ivory/20 border-y border-ivory/20">
            {POINTS.map((p) => (
              <div key={p.title} className="grid gap-1 py-5 sm:grid-cols-3 sm:gap-6">
                <dt className="font-display text-xl text-champagne">{p.title}</dt>
                <dd className="text-sm leading-relaxed text-ivory/75 sm:col-span-2">{p.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
