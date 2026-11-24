import { useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, ShoppingBag, Heart } from 'lucide-react';
import { newArrivals } from '@/data/products';
import PlantArt from './PlantArt';
import { Reveal, SectionHeading } from './Reveal';
import { formatRs, useShop } from '@/store/shop';

export default function NewArrivals() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { addToCart, toggleWishlist, isWished } = useShop();

  const scrollBy = (dir: number) => {
    trackRef.current?.scrollBy({ left: dir * 300, behavior: 'smooth' });
  };

  return (
    <section aria-label="New arrivals" className="bg-ivory py-20 lg:py-28">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            align="left"
            eyebrow="Just Landed"
            title="New Arrivals"
            description="The freshest additions to our nursery — newly potted and ready for their next home."
          />
          <Reveal delay={150} className="hidden gap-3 lg:flex">
            <button onClick={() => scrollBy(-1)} aria-label="Scroll arrivals left" className="flex h-12 w-12 items-center justify-center rounded-full border border-forest/20 text-forest transition hover:border-gold hover:bg-gold/10 focus-gold">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={() => scrollBy(1)} aria-label="Scroll arrivals right" className="flex h-12 w-12 items-center justify-center rounded-full border border-forest/20 text-forest transition hover:border-gold hover:bg-gold/10 focus-gold">
              <ChevronRight className="h-5 w-5" />
            </button>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div
            ref={trackRef}
            className="-mx-5 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:px-0"
          >
            {newArrivals.map((p) => {
              const wished = isWished(p.id);
              return (
                <article key={p.id} className="group w-64 shrink-0 snap-start overflow-hidden rounded-3xl border border-forest/5 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-cardHover sm:w-72">
                  <div className="group/image relative overflow-hidden">
                    <PlantArt variant={p.art} potColor={p.potColor} backdrop={p.backdrop} className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute left-4 top-4 rounded-full bg-forest px-3 py-1.5 font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-gold-200">
                      New
                    </span>
                    <button
                      onClick={() => toggleWishlist(p)}
                      aria-label={wished ? `Remove ${p.name} from wishlist` : `Add ${p.name} to wishlist`}
                      aria-pressed={wished}
                      className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-card transition hover:scale-110 focus-gold"
                    >
                      <Heart className={`h-4 w-4 transition ${wished ? 'scale-110 fill-gold text-gold' : 'text-forest'}`} />
                    </button>
                  </div>
                  <div className="flex items-center justify-between gap-3 p-5">
                    <div className="min-w-0">
                      <h3 className="truncate font-display text-base font-semibold text-forest">{p.name}</h3>
                      <p className="font-sans text-sm font-bold text-gold-600">{formatRs(p.price)}</p>
                    </div>
                    <button
                      onClick={() => addToCart(p)}
                      aria-label={`Add ${p.name} to cart`}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest text-gold-200 transition hover:bg-gold hover:text-forest focus-gold"
                    >
                      <ShoppingBag className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </Reveal>

        <Reveal className="mt-8 text-center lg:hidden">
          <p className="font-sans text-xs text-charcoal/40">Swipe to see more</p>
        </Reveal>
        <Reveal className="mt-6 text-center">
          <a href="#shop" className="btn-outline">
            View All Plants <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
