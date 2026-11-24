import { Heart } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from './ProductCard';
import { Reveal } from './Reveal';
import { useShop } from '@/store/shop';

export default function WishlistSection() {
  const { wishlist } = useShop();
  const saved = products.filter((p) => wishlist.includes(p.id));

  return (
    <section id="wishlist" className="bg-ivory py-20 lg:py-24">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow justify-center">Saved For Later</p>
          <h2 className="mt-4 text-center font-display text-3xl font-semibold text-forest sm:text-4xl">Your Wishlist</h2>
        </Reveal>

        {saved.length === 0 ? (
          <Reveal delay={120}>
            <div className="mx-auto mt-10 max-w-md rounded-3xl border border-dashed border-forest/20 bg-white p-10 text-center shadow-card">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-ivory-100">
                <Heart className="h-7 w-7 text-forest/30" />
              </span>
              <p className="mt-4 font-display text-xl font-semibold text-forest">Nothing saved yet</p>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                Tap the heart on any plant to keep it here. Your wishlist is saved on this device.
              </p>
              <a href="#shop" className="btn-gold mt-6">
                Browse Plants
              </a>
            </div>
          </Reveal>
        ) : (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {saved.map((p, i) => (
              <Reveal key={p.id} delay={(i % 4) * 80}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
