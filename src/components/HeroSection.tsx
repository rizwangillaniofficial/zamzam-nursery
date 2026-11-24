import { ArrowRight, ShoppingBag, Sprout, ShieldCheck, PhoneCall } from 'lucide-react';
import PlantArt from './PlantArt';
import { products } from '@/data/products';
import { formatRs, useShop } from '@/store/shop';
import { Reveal } from './Reveal';

const hero = products[0];

const trust = [
  { icon: Sprout, label: 'Carefully Grown Plants' },
  { icon: ShieldCheck, label: 'Safe & Secure Delivery' },
  { icon: PhoneCall, label: 'Expert Plant Care Support' },
];

export default function HeroSection() {
  const { addToCart } = useShop();

  return (
    <section id="home" className="relative overflow-hidden bg-ivory">
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-sage-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-gold-50 blur-3xl" />

      <div className="container-x relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div>
          <Reveal>
            <p className="eyebrow">Nature Meets Luxury</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.08] text-forest sm:text-6xl lg:text-7xl">
              Bring <span className="italic text-gold-500">Nature</span>
              <br />
              Into Your Life.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal/70">
              Discover thoughtfully selected indoor and outdoor plants, elegant planters, and gardening
              essentials that transform your everyday spaces into beautiful green sanctuaries.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#shop" className="btn-gold">
                Explore Plants <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#categories" className="btn-outline">
                Discover Our Collection
              </a>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
              {trust.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/50 bg-white">
                    <Icon className="h-4 w-4 text-gold-600" />
                  </span>
                  <span className="font-sans text-[13px] font-medium text-charcoal/80">{label}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="relative mx-auto max-w-xl lg:max-w-none">
            <div className="absolute -inset-3 rounded-[2rem] border border-gold/30" aria-hidden="true" />
            <PlantArt
              variant="monstera"
              potColor="#EFE9D8"
              backdrop="#F0EBDD"
              className="relative aspect-[4/3.4] w-full rounded-[1.75rem] object-cover shadow-cardHover"
              framed={false}
            />

            <div className="absolute bottom-5 left-5 right-5 flex items-center gap-4 rounded-2xl border border-white/60 bg-white/70 p-4 shadow-card backdrop-blur-md sm:left-auto sm:right-6 sm:w-72">
              <PlantArt
                variant={hero.art}
                potColor={hero.potColor}
                backdrop={hero.backdrop}
                className="h-16 w-14 shrink-0 rounded-xl"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate font-display text-sm font-semibold text-forest">{hero.name}</p>
                <p className="font-sans text-sm font-bold text-gold-600">{formatRs(hero.price)}</p>
              </div>
              <button
                onClick={() => addToCart(hero)}
                aria-label={`Quick add ${hero.name} to cart`}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest text-gold-200 transition hover:bg-forest-600 focus-gold"
              >
                <ShoppingBag className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-6 hidden animate-sway lg:block" aria-hidden="true">
        <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
          <path d="M23 40 C10 30 8 16 14 6 C26 10 30 26 25 38 Z" fill="#85977A" opacity="0.45" />
          <path d="M23 40 V14" stroke="#4A6B4E" strokeWidth="1.5" opacity="0.5" />
        </svg>
      </div>
    </section>
  );
}
