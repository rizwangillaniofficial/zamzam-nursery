import { useState } from 'react';
import { Heart, Eye, ShoppingBag, Sun, Sparkles } from 'lucide-react';
import type { Product } from '@/data/products';
import PlantArt from './PlantArt';
import { formatRs, useShop } from '@/store/shop';

const careColor: Record<Product['care'], string> = {
  Easy: 'bg-sage-100 text-sage-600',
  Moderate: 'bg-gold-100 text-gold-600',
  Expert: 'bg-[#F5E3DE] text-[#A65B45]',
};

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, isWished, setQuickView } = useShop();
  const [added, setAdded] = useState(false);
  const wished = isWished(product.id);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1400);
  };

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-forest/5 bg-white shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-cardHover">
      <div className="group/image relative overflow-hidden">
        <PlantArt
          variant={product.art}
          potColor={product.potColor}
          backdrop={product.backdrop}
          className="aspect-square w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />

        {product.badge && (
          <span
            className={`absolute left-4 top-4 rounded-full px-3 py-1.5 font-sans text-[10px] font-bold uppercase tracking-[0.14em] ${
              product.badge === 'New Arrival' ? 'bg-forest text-gold-200' : 'bg-gold text-forest'
            }`}
          >
            {product.badge}
          </span>
        )}

        <button
          onClick={() => toggleWishlist(product)}
          aria-label={wished ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
          aria-pressed={wished}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-card transition hover:scale-110 focus-gold"
        >
          <Heart
            className={`h-4 w-4 transition-all ${wished ? 'scale-110 fill-gold text-gold' : 'text-forest'}`}
          />
        </button>

        <button
          onClick={() => setQuickView(product)}
          className="absolute inset-x-4 bottom-4 flex translate-y-14 items-center justify-center gap-2 rounded-xl bg-forest/90 py-2.5 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ivory opacity-0 backdrop-blur transition-all duration-300 hover:bg-forest focus-gold group-hover:translate-y-0 group-hover:opacity-100"
        >
          <Eye className="h-4 w-4" /> Quick View
        </button>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-gold-600">{product.category}</p>
        <h3 className="mt-1.5 font-display text-lg font-semibold text-forest">{product.name}</h3>

        <div className="mt-2.5 flex flex-wrap items-center gap-2">
          <span className={`rounded-full px-2.5 py-1 font-sans text-[10px] font-semibold ${careColor[product.care]}`}>
            {product.care}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-ivory-100 px-2.5 py-1 font-sans text-[10px] font-semibold text-charcoal/60">
            <Sun className="h-3 w-3 text-gold-600" /> {product.light}
          </span>
        </div>

        <div className="mt-auto flex items-end justify-between pt-5">
          <div>
            <p className="font-sans text-lg font-bold text-forest">{formatRs(product.price)}</p>
            {product.originalPrice && (
              <p className="font-sans text-xs text-charcoal/40 line-through">{formatRs(product.originalPrice)}</p>
            )}
          </div>
          <button
            onClick={handleAdd}
            aria-label={`Add ${product.name} to cart`}
            className={`flex h-11 items-center gap-2 rounded-xl px-4 font-sans text-xs font-semibold uppercase tracking-[0.1em] transition-all duration-300 focus-gold ${
              added ? 'bg-sage-500 text-white' : 'bg-forest text-gold-200 hover:bg-gold hover:text-forest'
            }`}
          >
            {added ? <Sparkles className="h-4 w-4" /> : <ShoppingBag className="h-4 w-4" />}
            {added ? 'Added' : 'Add'}
          </button>
        </div>
      </div>
    </article>
  );
}
