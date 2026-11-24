import { ArrowRight } from 'lucide-react';
import { spaces } from '@/data/content';
import PlantArt from './PlantArt';
import { Reveal, SectionHeading } from './Reveal';

const spaceArt: Record<string, string> = {
  living: 'monstera',
  bedroom: 'snake',
  office: 'pothos',
  balcony: 'aloe',
  garden: 'hibiscus',
};

export default function ShopBySpace() {
  return (
    <section aria-label="Shop by space" className="bg-ivory py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Every Room, Greener"
          title="Shop by Space"
          description="Discover plants chosen for the way you live — from sunlit balconies to calm bedroom corners."
        />
        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-5">
          {spaces.map((space, i) => (
            <Reveal key={space.id} delay={i * 80} className={i === 4 ? 'col-span-2 lg:col-span-1' : ''}>
              <a
                href="#shop"
                className="group relative block overflow-hidden rounded-3xl shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-cardHover focus-gold"
              >
                <PlantArt
                  variant={spaceArt[space.id]}
                  potColor="#E9E2CF"
                  backdrop={space.backdrop}
                  className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <p className="font-display text-lg font-semibold text-ivory sm:text-xl">{space.name}</p>
                  <p className="mt-1 hidden text-xs leading-relaxed text-ivory/75 sm:block">{space.tagline}</p>
                  <span className="mt-2 inline-flex items-center gap-1.5 font-sans text-xs font-medium text-gold-200">
                    Shop now <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
