import { useEffect, useState } from 'react';
import { Search, User, Heart, ShoppingBag, Menu, X, ChevronRight } from 'lucide-react';
import LogoMark from './LogoMark';
import { announcements, brand } from '@/data/brand';
import { categories } from '@/data/content';
import PlantArt from './PlantArt';
import { useShop } from '@/store/shop';
import { products } from '@/data/products';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Shop Plants', href: '#shop', mega: true },
  { label: 'Categories', href: '#categories' },
  { label: 'Planters', href: '#categories' },
  { label: 'Gardening Essentials', href: '#categories' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#footer' },
];

export default function Header() {
  const [closed, setClosed] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const { cartCount, wishlist, setCartOpen, setSearchOpen } = useShop();
  const featured = products[0];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      {!closed && (
        <div className="relative bg-forest text-ivory">
          <div className="container-x relative flex h-10 items-center justify-center overflow-hidden">
            <p key="a" className="absolute animate-ticker-a font-sans text-xs tracking-[0.14em]">
              {announcements[0]}
            </p>
            <p key="b" className="absolute animate-ticker-b font-sans text-xs tracking-[0.14em] text-gold-200">
              {announcements[1]}
            </p>
            <p key="c" className="absolute animate-ticker-c font-sans text-xs tracking-[0.14em]">
              {announcements[2]}
            </p>
          </div>
          <button
            onClick={() => setClosed(true)}
            aria-label="Close announcement"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-ivory/70 transition hover:bg-white/10 hover:text-ivory focus-gold"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      <header
        className={`sticky top-0 z-40 border-b transition-all duration-300 ${
          scrolled
            ? 'border-forest/10 bg-ivory/95 shadow-card backdrop-blur'
            : 'border-transparent bg-ivory'
        }`}
      >
        <div className={`container-x flex items-center justify-between gap-4 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
          <a href="#home" className="flex items-center gap-3 focus-gold rounded-lg">
            <LogoMark className="h-11 w-11" />
            <span className="leading-tight">
              <span className="block font-display text-xl font-bold tracking-[0.14em] text-forest">ZAMZAM</span>
              <span className="block font-sans text-[10px] uppercase tracking-[0.28em] text-gold-600">{brand.subtitle}</span>
            </span>
          </a>

          <nav aria-label="Main" className="hidden items-center gap-6 xl:flex">
            {navLinks.map((link) => (
              <div key={link.label} className="relative" onMouseEnter={() => link.mega && setMegaOpen(true)} onMouseLeave={() => link.mega && setMegaOpen(false)}>
                <a
                  href={link.href}
                  className="rounded-md font-sans text-[13px] font-medium tracking-wide text-charcoal/80 transition hover:text-forest focus-gold"
                >
                  {link.label}
                </a>
                {link.mega && (
                  <span className={`absolute -bottom-1.5 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-gold transition-opacity ${megaOpen ? 'opacity-100' : 'opacity-0'}`} />
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            <button onClick={() => setSearchOpen(true)} aria-label="Search products" className="rounded-full p-2.5 text-forest transition hover:bg-forest/5 focus-gold">
              <Search className="h-5 w-5" />
            </button>
            <a href="#account" aria-label="Account" className="hidden rounded-full p-2.5 text-forest transition hover:bg-forest/5 focus-gold sm:block">
              <User className="h-5 w-5" />
            </a>
            <a href="#wishlist" aria-label={`Wishlist, ${wishlist.length} items`} className="relative rounded-full p-2.5 text-forest transition hover:bg-forest/5 focus-gold">
              <Heart className={`h-5 w-5 transition ${wishlist.length ? 'fill-gold text-gold' : ''}`} />
              {wishlist.length > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4.5 min-w-[18px] items-center justify-center rounded-full bg-gold px-1 font-sans text-[10px] font-bold text-forest">
                  {wishlist.length}
                </span>
              )}
            </a>
            <button onClick={() => setCartOpen(true)} aria-label={`Cart, ${cartCount} items`} className="relative rounded-full p-2.5 text-forest transition hover:bg-forest/5 focus-gold">
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4.5 min-w-[18px] items-center justify-center rounded-full bg-forest px-1 font-sans text-[10px] font-bold text-gold-200">
                  {cartCount}
                </span>
              )}
            </button>
            <button onClick={() => setMenuOpen(true)} aria-label="Open menu" className="rounded-full p-2.5 text-forest transition hover:bg-forest/5 focus-gold xl:hidden">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          onMouseEnter={() => setMegaOpen(true)}
          onMouseLeave={() => setMegaOpen(false)}
          className={`absolute inset-x-0 top-full hidden border-b border-forest/10 bg-ivory shadow-card transition-all duration-300 xl:block ${
            megaOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
          }`}
        >
          <div className="container-x grid grid-cols-4 gap-8 py-8">
            {categories.slice(0, 3).map((cat) => (
              <a key={cat.id} href="#categories" className="group flex gap-4 rounded-2xl p-3 transition hover:bg-forest-50 focus-gold">
                <PlantArt variant={cat.art} potColor="#E9E2CF" backdrop={cat.backdrop} className="h-20 w-16 shrink-0 rounded-xl object-cover" />
                <span>
                  <span className="flex items-center gap-1 font-sans text-sm font-semibold text-forest group-hover:text-gold-600">
                    {cat.name} <ChevronRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                  </span>
                  <span className="mt-1 block text-xs leading-relaxed text-charcoal/60">{cat.description}</span>
                </span>
              </a>
            ))}
            <a href="#shop" className="group flex gap-4 rounded-2xl bg-forest p-4 transition hover:bg-forest-600 focus-gold">
              <PlantArt variant={featured.art} potColor={featured.potColor} backdrop={featured.backdrop} className="h-24 w-20 shrink-0 rounded-xl" />
              <span className="flex flex-col justify-center">
                <span className="font-sans text-[10px] uppercase tracking-[0.24em] text-gold-200">Featured</span>
                <span className="mt-1 font-display text-base font-semibold text-ivory">{featured.name}</span>
                <span className="mt-1 font-sans text-sm text-gold-200">Rs. {featured.price.toLocaleString('en-US')}</span>
              </span>
            </a>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-50 xl:hidden ${menuOpen ? '' : 'pointer-events-none'}`}>
        <div
          className={`absolute inset-0 bg-forest/60 backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-ivory shadow-drawer transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="flex items-center justify-between border-b border-forest/10 p-5">
            <span className="flex items-center gap-2 font-display text-lg font-bold tracking-[0.14em] text-forest">
              <LogoMark className="h-8 w-8" /> ZAMZAM
            </span>
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="rounded-full p-2 text-forest hover:bg-forest/5 focus-gold">
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto p-5">
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center justify-between rounded-xl px-4 py-3.5 font-sans text-base font-medium text-forest transition hover:bg-forest-50 focus-gold ${
                  menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: `${80 + i * 40}ms` }}
              >
                {link.label}
                <ChevronRight className="h-4 w-4 text-gold" />
              </a>
            ))}
          </nav>
          <div className="border-t border-forest/10 p-5">
            <p className="font-sans text-xs text-charcoal/60">{brand.hours}</p>
            <a href={`https://wa.me/${brand.whatsapp}`} className="btn-forest mt-3 w-full">
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
