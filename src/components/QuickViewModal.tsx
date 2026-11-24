import { useEffect, useState } from 'react';
import { Heart, Minus, Plus, ShoppingBag, Sun, Droplets, X, ShieldCheck } from 'lucide-react';
import PlantArt from './PlantArt';
import { formatRs, useShop } from '@/store/shop';

export default function QuickViewModal() {
  const { quickView, setQuickView, addToCart, toggleWishlist, isWished } = useShop();
  const [qty, setQtyLocal] = useState(1);
  const [view, setView] = useState(0);

  useEffect(() => {
    setQtyLocal(1);
    setView(0);
  }, [quickView]);

  useEffect(() => {
    document.body.style.overflow = quickView ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [quickView]);

  const p = quickView;
  if (!p) return null;

  const wished = isWished(p.id);
  const angles = ['front', 'detail', 'profile'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-forest/60 backdrop-blur-sm" onClick={() => setQuickView(null)} />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${p.name} quick view`}
        className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-drawer"
      >
        <button
          onClick={() => setQuickView(null)}
          aria-label="Close quick view"
          className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-forest shadow-card transition hover:bg-forest hover:text-ivory focus-gold"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid gap-0 sm:grid-cols-2">
          <div className="relative bg-ivory-100 p-6">
            <PlantArt
              variant={p.art}
              potColor={p.potColor}
              backdrop={p.backdrop}
              className="aspect-square w-full rounded-2xl object-cover"
            />
            <div className="mt-4 flex justify-center gap-2.5">
              {angles.map((a, i) => (
                <button
                  key={a}
                  onClick={() => setView(i)}
                  aria-label={`View ${a}`}
                  className={`h-14 w-14 overflow-hidden rounded-xl border-2 transition focus-gold ${
                    view === i ? 'border-gold' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <PlantArt variant={p.art} potColor={p.potColor} backdrop={p.backdrop} className="h-full w-full object-cover" framed={false} />
                </button>
              ))}
            </div>
            {p.badge && (
              <span className={`absolute left-6 top-6 rounded-full px-3 py-1.5 font-sans text-[10px] font-bold uppercase tracking-[0.14em] ${p.badge === 'New Arrival' ? 'bg-forest text-gold-200' : 'bg-gold text-forest'}`}>
                {p.badge}
              </span>
            )}
          </div>

          <div className="flex flex-col p-6 sm:p-8">
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-gold-600">{p.category}</p>
            <h3 className="mt-1.5 font-display text-3xl font-semibold text-forest">{p.name}</h3>

            <div className="mt-3 flex items-baseline gap-3">
              <span className="font-sans text-2xl font-bold text-forest">{formatRs(p.price)}</span>
              {p.originalPrice && <span className="font-sans text-sm text-charcoal/40 line-through">{formatRs(p.originalPrice)}</span>}
            </div>

            <p className="mt-4 text-sm leading-relaxed text-charcoal/65">{p.description}</p>

            <dl className="mt-5 grid grid-cols-2 gap-2.5 text-xs">
              <div className="flex items-center gap-2 rounded-xl bg-ivory-100 px-3 py-2.5">
                <Sun className="h-4 w-4 shrink-0 text-gold-600" />
                <span className="text-charcoal/70"><dt className="sr-only">Light</dt>{p.light}</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-ivory-100 px-3 py-2.5">
                <Droplets className="h-4 w-4 shrink-0 text-gold-600" />
                <span className="text-charcoal/70"><dt className="sr-only">Water</dt>{p.water}</span>
              </div>
              <div className="rounded-xl bg-ivory-100 px-3 py-2.5 text-charcoal/70">
                <dt className="inline font-semibold">Care: </dt>
                <dd className="inline">{p.care}</dd>
              </div>
              <div className="rounded-xl bg-ivory-100 px-3 py-2.5 text-charcoal/70">
                <dt className="inline font-semibold">Pets: </dt>
                <dd className="inline">{p.petSafe ? 'Pet-safe' : 'Not pet-safe'}</dd>
              </div>
            </dl>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex items-center rounded-xl border border-forest/15">
                <button onClick={() => setQtyLocal((q) => Math.max(1, q - 1))} aria-label="Decrease quantity" className="p-3 text-forest transition hover:text-gold-600 focus-gold">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-10 text-center font-sans text-sm font-semibold">{qty}</span>
                <button onClick={() => setQtyLocal((q) => Math.min(99, q + 1))} aria-label="Increase quantity" className="p-3 text-forest transition hover:text-gold-600 focus-gold">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button
                onClick={() => {
                  addToCart(p, qty);
                  setQuickView(null);
                }}
                className="btn-forest flex-1"
              >
                <ShoppingBag className="h-4 w-4" /> Add to Cart
              </button>
              <button
                onClick={() => toggleWishlist(p)}
                aria-label={wished ? `Remove ${p.name} from wishlist` : `Add ${p.name} to wishlist`}
                aria-pressed={wished}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-forest/15 transition hover:border-gold focus-gold"
              >
                <Heart className={`h-5 w-5 transition ${wished ? 'scale-110 fill-gold text-gold' : 'text-forest'}`} />
              </button>
            </div>

            <p className="mt-5 inline-flex items-center gap-2 text-xs text-charcoal/55">
              <ShieldCheck className="h-4 w-4 text-sage-600" /> Safe, cushioned delivery — arrive-alive guarantee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
