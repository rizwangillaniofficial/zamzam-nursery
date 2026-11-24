import { useEffect, useMemo, useRef, useState } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { products } from '@/data/products';
import PlantArt from './PlantArt';
import { formatRs, useShop } from '@/store/shop';

export default function SearchOverlay() {
  const { searchOpen, setSearchOpen, setQuickView } = useShop();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchOpen) {
      setQuery('');
      window.setTimeout(() => inputRef.current?.focus(), 80);
    }
  }, [searchOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSearchOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [setSearchOpen]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return products
      .filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.care.toLowerCase().includes(q) ||
          p.light.toLowerCase().includes(q)
      )
      .slice(0, 6);
  }, [query]);

  if (!searchOpen) return null;

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Search products">
      <div className="absolute inset-0 bg-forest/60 backdrop-blur-sm" onClick={() => setSearchOpen(false)} />
      <div className="relative mx-auto mt-20 w-[92%] max-w-xl overflow-hidden rounded-3xl bg-white shadow-drawer">
        <div className="flex items-center gap-3 border-b border-forest/10 px-5 py-4">
          <Search className="h-5 w-5 shrink-0 text-gold-600" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search plants, categories, care levels…"
            aria-label="Search products"
            className="w-full bg-transparent font-body text-base text-charcoal placeholder:text-forest/35 focus:outline-none"
          />
          <button onClick={() => setSearchOpen(false)} aria-label="Close search" className="rounded-full p-1.5 text-forest transition hover:bg-forest/5 focus-gold">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="max-h-[55vh] overflow-y-auto p-3">
          {query.trim() === '' ? (
            <div className="px-4 py-6">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-charcoal/40">Popular searches</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {['Monstera', 'Snake Plant', 'Low Light', 'Easy', 'Pet-safe', 'Flowering'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="rounded-full border border-forest/15 px-4 py-2 font-sans text-sm text-charcoal/70 transition hover:border-gold hover:text-forest focus-gold"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <p className="px-4 py-8 text-center text-sm text-charcoal/55">
              No plants found for “{query}”. Try “low light” or “easy”.
            </p>
          ) : (
            <ul>
              {results.map((p) => (
                <li key={p.id}>
                  <button
                    onClick={() => {
                      setSearchOpen(false);
                      setQuickView(p);
                    }}
                    className="flex w-full items-center gap-4 rounded-2xl p-3 text-left transition hover:bg-ivory-100 focus-gold"
                  >
                    <PlantArt variant={p.art} potColor={p.potColor} backdrop={p.backdrop} className="h-14 w-12 shrink-0 rounded-lg" />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-display text-sm font-semibold text-forest">{p.name}</span>
                      <span className="block font-sans text-xs text-charcoal/55">
                        {p.category} · {p.care} · {formatRs(p.price)}
                      </span>
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-gold" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
