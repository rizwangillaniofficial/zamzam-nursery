import { Heart, Home, ShoppingBag, Store } from 'lucide-react';
import { useShop } from '@/store/shop';

export default function MobileNavigation() {
  const { cartCount, wishlist, setCartOpen } = useShop();

  const items = [
    { label: 'Home', href: '#home', icon: Home },
    { label: 'Shop', href: '#shop', icon: Store },
    { label: 'Wishlist', href: '#wishlist', icon: Heart, badge: wishlist.length },
    { label: 'Cart', href: undefined, icon: ShoppingBag, badge: cartCount },
  ];

  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-forest/10 bg-ivory/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_30px_rgba(20,46,37,0.12)] backdrop-blur lg:hidden"
    >
      <ul className="grid grid-cols-4">
        {items.map(({ label, href, icon: Icon, badge }) => (
          <li key={label}>
            {href ? (
              <a href={href} className="relative flex flex-col items-center gap-1 py-2.5 font-sans text-[11px] font-medium text-charcoal/70 transition active:text-forest focus-gold">
                <Icon className="h-5 w-5" />
                {label}
                {badge ? (
                  <span className="absolute right-1/4 top-1.5 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-gold px-1 font-sans text-[9px] font-bold text-forest">
                    {badge}
                  </span>
                ) : null}
              </a>
            ) : (
              <button onClick={() => setCartOpen(true)} className="relative flex w-full flex-col items-center gap-1 py-2.5 font-sans text-[11px] font-medium text-charcoal/70 transition active:text-forest focus-gold">
                <Icon className="h-5 w-5" />
                {label}
                {badge ? (
                  <span className="absolute right-1/4 top-1.5 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-forest px-1 font-sans text-[9px] font-bold text-gold-200">
                    {badge}
                  </span>
                ) : null}
              </button>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
