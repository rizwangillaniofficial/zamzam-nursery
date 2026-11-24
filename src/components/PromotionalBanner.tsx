import { ArrowRight } from 'lucide-react';
import PlantArt from './PlantArt';
import { Reveal } from './Reveal';

const promoActive = false;
const promoDiscount = 15;

export default function PromotionalBanner() {
  return (
    <section aria-label="Seasonal promotion" className="bg-forest py-20 lg:py-24">
      <div className="container-x relative">
        <div className="pointer-events-none absolute inset-4 rounded-3xl border border-gold/25" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-8 top-8 opacity-[0.07]" aria-hidden="true">
          <svg width="220" height="220" viewBox="0 0 100 100"><path d="M50 90 C20 60 18 30 32 12 C58 20 62 55 52 88 Z M50 90 C80 60 82 30 68 12" fill="none" stroke="#C9A35C" strokeWidth="2" /></svg>
        </div>
        <div className="pointer-events-none absolute -right-6 bottom-6 opacity-[0.07]" aria-hidden="true">
          <svg width="180" height="180" viewBox="0 0 100 100"><path d="M50 90 C20 60 18 30 32 12 C58 20 62 55 52 88 Z M50 90 C80 60 82 30 68 12" fill="none" stroke="#C9A35C" strokeWidth="2" /></svg>
        </div>

        <div className="relative grid items-center gap-12 px-6 py-6 sm:px-10 lg:grid-cols-2 lg:px-16 lg:py-10">
          <Reveal>
            <p className="eyebrow text-gold-200">The Green Season</p>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-ivory sm:text-5xl">
              Refresh Your Space.
              <br />
              Rediscover <span className="italic text-gold-300">Nature.</span>
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-ivory/70">
              Enjoy exclusive offers on selected plants and premium planters. Bring home the season's
              most beautiful greens, hand-potted by our nursery team.
            </p>
            {promoActive && promoDiscount > 0 && (
              <span className="mt-6 inline-block rounded-full border border-gold/50 px-5 py-2 font-sans text-sm font-semibold tracking-wide text-gold-200">
                Up to {promoDiscount}% off selected collections
              </span>
            )}
            <div className="mt-8">
              <a href="#shop" className="btn-gold">
                Shop the Collection <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={150} className="relative">
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              <PlantArt variant="hibiscus" potColor="#E5D3A8" backdrop="#1B3A2E" className="aspect-[4/5] w-full rounded-3xl object-cover" />
              <div className="flex flex-col gap-4 pt-10 sm:gap-5">
                <PlantArt variant="monstera" potColor="#F2EFE6" backdrop="#234436" className="aspect-square w-full rounded-3xl object-cover" />
                <PlantArt variant="jade" potColor="#202420" backdrop="#1B3A2E" className="aspect-square w-full rounded-3xl object-cover" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
