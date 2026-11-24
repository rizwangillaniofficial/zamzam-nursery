import { ArrowRight } from 'lucide-react';
import { categories } from '@/data/content';
import PlantArt from './PlantArt';
import { Reveal, SectionHeading } from './Reveal';

export default function CategoryGrid() {
  return (
    <section id="categories" className="bg-ivory py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Find Your Perfect Green"
          title="Explore Our Collections"
          description="Find the perfect plants for every corner of your home, garden, and workspace."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <Reveal key={cat.id} delay={(i % 3) * 100}>
              <a
                href="#shop"
                className={`group relative block overflow-hidden rounded-3xl border border-forest/5 bg-white shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-cardHover focus-gold ${
                  i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="overflow-hidden">
                  <PlantArt
                    variant={cat.art}
                    potColor="#E9E2CF"
                    backdrop={cat.backdrop}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest/85 via-forest/40 to-transparent p-6 pt-16">
                  <p className="font-display text-2xl font-semibold text-ivory">{cat.name}</p>
                  <p className="mt-1 font-sans text-xs uppercase tracking-[0.18em] text-gold-200">{cat.count}</p>
                  <span className="mt-3 inline-flex items-center gap-2 font-sans text-sm font-medium text-ivory/90">
                    Explore Collection
                    <ArrowRight className="h-4 w-4 text-gold transition-transform duration-300 group-hover:translate-x-1.5" />
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
